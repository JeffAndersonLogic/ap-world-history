'use strict';

/**
 * Topic 9.6, Globalized Culture After 1900: the deep reading.
 *
 * Why this exists. The success criteria ask a student to explain reggae,
 * Bollywood, the World Cup and the Olympics, and the global brands, and then to
 * qualify the argument with a continuity or a limitation. The First & 10 names
 * all of them well. What it cannot do in three sections is supply the mechanism
 * that makes the qualification more than a sentence tacked on the end, and this
 * is the topic where an unmechanized answer is hardest to spot, because
 * "globalization spread culture" sounds like an explanation and is a
 * restatement.
 *
 * The volume's spine carries it. Topic 9.1 established that the marginal cost
 * of copying information fell to almost nothing. This chapter works out what
 * that does to culture specifically, and the answer is not obvious: a good
 * whose second copy is free is produced once and distributed everywhere, which
 * concentrates production in few hands, and is then interpreted by audiences
 * who share no context with the producers, which multiplies meanings. Both
 * effects come out of the same cost structure. That is why convergence and
 * hybridity are not two rival findings but two consequences of one mechanism.
 *
 * Three things carried deliberately:
 *
 *   1. The homogenization argument is presented as the live scholarly dispute
 *      it is, with the leading position and its best evidence named on each
 *      side, because a chapter that resolved it by assertion would be teaching
 *      a slogan. The resolution offered is a narrower claim about what
 *      converges rather than a hedge about how complicated it all is.
 *   2. Audience figures are handled the way this volume handles every number.
 *      "Half the planet watched" is a reach figure counting anyone who saw a
 *      minute of anything, and the average live audience is smaller by a large
 *      factor. Both are published, and only one gets quoted.
 *   3. The one-way story is refused with evidence rather than with a
 *      disclaimer: Bombay in 1951, Lagos in 1992, Seoul in 2012, and the
 *      Brazilian and Mexican telenovela export trade in between.
 */

module.exports = {
  topicKey: 't9-6',
  slug: 'topic-9-6-globalized-culture',
  sourceFile: 'deep-reading-topic-9-6-globalized-culture.html',
  lessonFile: 'lesson-9-6-globalized-culture.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 9.6: A Format Is Not a Meaning',
  eyebrow: 'Topic 9.6 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'A Format Is Not a <em>Meaning</em>',
  deck: `The Topic 9.1 chapter ended with a cost: once information is digital and a network exists, one more copy costs the sender almost nothing. This chapter follows that cost into culture, where it does two opposite things at once. A good whose second copy is free gets made once and sent everywhere, which puts production in few hands. The same good then lands among people who share none of its origins, and they make their own sense of it. Convergence and hybridity are not rival findings about globalization. They are two results of one mechanism, and holding both is the whole of this topic.`,
  meta: ['Four sections', 'The copy, the counterflow, the spectacle, the argument', 'Read alongside the First & 10'],
  footerNote: 'Topic 9.6 &nbsp;·&nbsp; A Format Is Not a Meaning &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the mechanism and the other three test it. Section 02 refuses the one-way story with evidence, section 03 is the shared spectacle and how to quote an audience figure, and section 04 is the scholarly argument about homogenization, which is where the qualification a checkpoint wants actually lives. Read 01 even if you came for a single example, because every later section is that mechanism in a different medium.`,
    steps: [
      `<b>01 The economics of a copy:</b> why a song behaves unlike a shirt, what that did to who makes culture, and reggae as the case.`,
      `<b>02 The counterflow:</b> Bombay, Lagos, Mexico City and Seoul, and why "American culture spread outward" fails as a description.`,
      `<b>03 The shared spectacle:</b> satellites, simultaneity, national politics on a global stage, and how to handle an audience number.`,
      `<b>04 The argument:</b> cultural imperialism, glocalization and hybridity, with the evidence each position rests on.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'copy',
      num: '01',
      accent: 'gold',
      name: 'A Song Is Not a Shirt',
      navLabel: 'The copy',
      dates: '1922 to c. 1990 &nbsp;·&nbsp; Broadcasting, records and the gatekeepers',
      thesis: `Cultural goods have a cost structure no other traded good has: the first copy is expensive and every copy after it is nearly free. Everything else in this chapter follows from that one fact, including the two things about global culture that look like contradictions.`,
      parts: [
        {
          heading: 'The cost structure, stated precisely',
          blocks: [
            { p: `Making a film costs money whether one person sees it or a hundred million do. Printing the second copy of a record, striking the second print of a film, or transmitting a broadcast to the second listener costs the producer almost nothing extra. Economists call this a high fixed cost and a near-zero <span class="kt">marginal cost</span>, and it is the defining feature of what gets called a cultural industry.` },
            { p: `Two consequences follow, and they pull in opposite directions. The first is concentration. If the expensive part is making the thing and the cheap part is sending it, then the producer who can afford the first copy and reach the largest audience wins by a wide margin, and production gathers into a small number of studios, labels and broadcasters. The second is reach without shared context. Because sending costs nothing, the copy lands in places its makers never had in mind, among people who bring their own history to it, and meaning is made where a thing is received rather than where it is made.` },
            { p: `Hold those two together and this topic stops being confusing. The same cost structure that put a handful of firms in charge of what got distributed also guaranteed that what they distributed would be understood in ways they never intended and could not control.` }
          ]
        },
        {
          heading: 'Reggae, with the carriers named',
          blocks: [
            { p: `<span class="kt">Reggae</span> emerged in Jamaica in the late <span class="num">1960</span>s out of the earlier ska and rocksteady styles, in a country that had been independent from Britain since <span class="num">1962</span> and that carried the history of Atlantic slavery in its social structure. It drew on <span class="kt">Rastafari</span>, a religious movement that had developed in Jamaica from the <span class="num">1930</span>s, for much of its imagery and its politics. So far this is entirely local, and that is the point: nothing about the music was designed for export.` },
            { p: `What carried it out was a chain of specific things, and naming them is the difference between an explanation and a shrug. Cheap vinyl pressing and radio play. Caribbean migration to Britain and North America from the <span class="num">1950</span>s, which built audiences abroad before the records arrived. A record company with international distribution, Island Records, which signed Bob Marley and the Wailers in the early <span class="num">1970</span>s and marketed them to rock audiences. And touring, which is expensive and is how a live audience becomes a market. Marley played at Zimbabwe's independence ceremony in April <span class="num">1980</span> and died in May <span class="num">1981</span>, and by then the music was being used by movements he had no connection with.` },
            { p: `That last fact is the mechanism in action. Anti-apartheid activists, Indigenous rights movements, and disaffected young people in half a dozen countries heard their own situations inside songs written about Jamaican ones. Nobody at the record company arranged that, and nobody could have. In <span class="num">2018</span> UNESCO added reggae to its list of intangible cultural heritage, which is the final stage of a pattern worth noticing: a local form travels, gets reinterpreted, and is eventually re-labeled as a heritage belonging to the place it came from.` }
          ]
        },
        {
          heading: 'The gatekeeper is the part most answers leave out',
          blocks: [
            { p: `Until distribution itself got cheap, a small number of institutions decided what crossed borders. The British Broadcasting Company began in <span class="num">1922</span> and was reconstituted as a public corporation in <span class="num">1927</span>; its Empire Service began shortwave broadcasting in <span class="num">1932</span> and grew into a foreign-language operation that reached listeners on every continent, in many places carrying more credibility than the local state broadcaster. Record labels, film studios and television networks played the same role in their own media. Each of them made editorial choices, and those choices were the filter through which "global culture" passed.` },
            { p: `This is why the arrival of platforms in the <span class="num">2000</span>s was a real change and not merely a faster version of the old one. When uploading costs nothing, the filter moves: it stops being an editor deciding what to commission and becomes a recommendation system deciding what to show, owned by a company and tuned to keep attention. That is a different kind of gatekeeping, not an absence of it, and a student who says so has made a sharper claim than one who says the internet democratized culture.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that new technology "spread culture" and stop. Technology made spreading cheap; it did not carry anything. Every case in this chapter has a named carrier doing the actual work: migrants who brought an audience with them, a label with international distribution, a broadcaster with a shortwave transmitter, a diaspora buying tickets, a platform with a recommendation system. The College Board's own phrasing is that popular and consumer culture <b>became more global</b>, which is an outcome, and the exam asks for the cause. Write "cheap copying made distribution nearly free, and migration, touring and record distribution carried the music to audiences that already existed" and you have named the enabling cause and the carrying cause in one sentence.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The near-zero marginal cost of a cultural good. <em>The mechanism is that a film, a song or a broadcast costs almost the same to make whether one person or a hundred million receive it, so the producer who can fund the first copy and reach the widest audience captures a disproportionate share, which concentrates production, while the copies themselves land among people with no shared context, which multiplies interpretations. Concentration at the source and divergence at the destination are the same fact seen from two ends.</em>`,
        limit: `The cost structure explains the shape of the industry, not which particular things succeeded. Why reggae rather than another Caribbean form, or Hindi cinema rather than another national cinema, is a question about content, timing, language and diaspora that no cost curve answers.`,
        comparison: `Against <em>printing</em> in Unit 4: movable type also made copies cheap and also produced a fight over who controlled them, but a printed book still had to be carried, so distance kept costing money and markets stayed regional. Broadcasting and then digital distribution removed the carrying cost entirely, which is why a twentieth-century cultural industry could be global in a way a sixteenth-century print shop could not.`
      },
      terms: [
        ['Marginal cost', 'The cost of producing one more unit. For a recording or a broadcast it is close to zero, which is what makes cultural goods behave unlike physical ones.'],
        ['Cultural industry', 'Production of culture on an industrial model, with high first-copy costs, cheap reproduction, and firms competing for attention rather than for shelf space.'],
        ['Reggae', 'The Jamaican popular form of the late 1960s, carried abroad by migration, radio, international record distribution and touring, and used by movements far from its origins.'],
        ['Rastafari', 'The religious movement developed in Jamaica from the 1930s, whose imagery and politics shaped reggae\'s lyrics and its reception as protest music.'],
        ['Gatekeeper', 'The institution deciding what reaches an audience: an editor, a label, a broadcaster, and later a recommendation system. The filter changes form rather than disappearing.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'counterflow',
      num: '02',
      accent: 'rust',
      name: 'The Flow Was Never One-Way',
      navLabel: 'The counterflow',
      dates: '1951 to c. 2020 &nbsp;·&nbsp; Bombay, Mexico City, Lagos, Seoul',
      thesis: `The most common single error in this topic is to describe cultural globalization as American culture moving outward. American exports were large and are not the whole picture, and the evidence against the one-way story is specific enough to be quoted rather than gestured at.`,
      parts: [
        {
          heading: 'Hindi cinema, described accurately',
          blocks: [
            { p: `India has for decades released more feature films a year than any other country on the counts kept by national film authorities and international statistical bodies. <span class="kt">Bollywood</span> is the Hindi-language industry centered in Mumbai, and it is one part of that total rather than the whole of it: the Tamil, Telugu, Malayalam, Kannada, Marathi and Bengali industries are separate, large, and in some years collectively bigger. Getting this right is worth doing, because a student who writes "Bollywood, meaning Indian film" has made an error a reader in the room may well catch.` },
            { p: `Its reach abroad ran along two distinct routes with two different mechanisms. The first was the diaspora: South Asian communities in the Persian Gulf, Britain, East Africa, Southeast Asia, the Caribbean and North America, for whom the films were a way of maintaining a connection to a place. The second was ordinary popularity among people with no connection to India at all. Raj Kapoor's <em>Awaara</em> of <span class="num">1951</span> became enormously popular in the Soviet Union, and Hindi films drew large audiences across the Middle East, North and East Africa, and Central Asia through the second half of the century. The reasons usually given are that the films were affordable to import, carried songs that traveled without subtitles, and told stories of family, duty and inequality that landed in societies with no American reference points.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not measure a film industry's importance by box office revenue alone and then conclude that Hollywood dominated everything. Revenue and audience are different quantities: a ticket in Mumbai and a ticket in Los Angeles are counted in the same dollars and represent very different shares of a wage, so a comparison in dollars overstates the American position and a comparison in admissions understates it. Say which measure you are using. On titles released and on tickets sold, India was for long stretches the largest film producer in the world; on revenue, American studios led. Both are true, and naming the measure is the analytical move.`
            } }
          ]
        },
        {
          heading: 'Three more counterflows, each with a date',
          blocks: [
            { p: `<b>Latin American television.</b> Brazilian and Mexican producers built an export trade in <span class="kt">telenovelas</span> from the <span class="num">1970</span>s onward, selling serialized drama into scores of countries across Latin America, southern and eastern Europe, Africa and Asia. TV Globo of Brazil became a major international supplier, and the pattern is instructive: a format developed for a domestic market turned out to be cheap to dub and easy to schedule, which is a commercial explanation rather than a cultural one.` },
            { p: `<b>Nigerian video film.</b> The industry that came to be called Nollywood grew from the early <span class="num">1990</span>s, conventionally dated from the success of <em>Living in Bondage</em> in <span class="num">1992</span>, and it was built on a technology nobody thought of as cinema: cheap video cameras, direct-to-videocassette and later direct-to-disc distribution, and informal retail networks. By the <span class="num">2000</span>s Nigeria was among the world's largest producers of film titles by count, serving audiences across West and East Africa and the African diaspora. It is the clearest case in this chapter of a cultural industry built entirely outside the studio and broadcast system section 01 describes.` },
            { p: `<b>The Korean wave.</b> South Korean television drama and popular music began finding large audiences elsewhere in East and Southeast Asia in the late <span class="num">1990</span>s and <span class="num">2000</span>s, a trend named <span class="kt">Hallyu</span> in the regional press. It became globally visible in <span class="num">2012</span>, when a single Korean-language music video became the first video on its platform to pass one billion views, and by <span class="num">2020</span> a Korean-language film had won the Academy Award for best picture, the first non-English-language film to do so. Note what this case demonstrates that the others do not: deliberate state and industry investment in cultural export, sustained over two decades, with a government ministry treating it as economic policy.` }
          ]
        }
      ],
      useThis: {
        tool: `The diaspora as an export channel. <em>The mechanism is that migration creates a paying audience abroad before any marketing does, and that audience is easy to reach, shares the language, and will pay for a product a distributor would otherwise have no reason to carry, so a national film or music industry acquires an international market as a byproduct of migration. It is why Hindi cinema had audiences in the Gulf and East Africa, and why Caribbean migration to Britain preceded reggae's British success rather than following it.</em>`,
        limit: `A diaspora explains reaching people who share an origin and cannot explain reaching people who do not, which is a different achievement requiring dubbing, subtitling, format adaptation or a story that travels. <em>Awaara</em> in the Soviet Union and Nollywood across non-Nigerian Africa are the cases that need the second explanation.`,
        comparison: `Against the <em>merchant diasporas</em> of Topic 2.3 and Topic 4.8: Gujarati, Armenian and Fujianese communities also turned migration into a trading network by supplying trust, language and credit across a distance. The structure repeats with a different commodity, which is a continuity worth writing rather than a coincidence worth noting.`
      },
      terms: [
        ['Bollywood', 'The Hindi-language film industry centered in Mumbai, one of several large Indian industries and not a synonym for Indian cinema.'],
        ['Telenovela', 'The serialized Latin American television drama, exported from Brazil and Mexico to scores of countries from the 1970s because it was cheap to dub and easy to schedule.'],
        ['Nollywood', 'The Nigerian video film industry from the early 1990s, built on cheap cameras and informal distribution outside the studio and broadcast system.'],
        ['Hallyu', 'The Korean wave, the export success of Korean television and popular music from the late 1990s, backed by deliberate state and industry investment.'],
        ['Counterflow', 'Cultural export running toward the wealthy economies or between non-Western regions, which is the evidence against a purely one-way model of cultural globalization.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'spectacle',
      num: '03',
      accent: 'iron',
      name: 'Watching Together, Seeing Differently',
      navLabel: 'The spectacle',
      dates: '1896 to the 2010s &nbsp;·&nbsp; Satellites, stadiums and national feeling',
      thesis: `A global spectacle is the purest test of this chapter's argument, because it is the one cultural product every viewer receives identically. Millions of people see the same ball cross the same line at the same second, and what they see is still not the same thing.`,
      parts: [
        {
          heading: 'The technology of simultaneity',
          blocks: [
            { p: `The modern Olympic Games were first held at Athens in <span class="num">1896</span> and the first football World Cup at Montevideo in <span class="num">1930</span>, both as gatherings that most of the world could only read about afterwards. What converted them into planetary events was satellite relay. Telstar carried the first live television across the Atlantic in <span class="num">1962</span>; Syncom 3 relayed pictures of the Tokyo Olympics across the Pacific in <span class="num">1964</span>; the Mexico City Games of <span class="num">1968</span> were carried live and in color to a global audience. Within one decade an event stopped being news and became an experience people had at the same moment.` },
            { p: `Notice the economics from section 01 operating here at full strength. The cost of staging a World Cup final does not change with the size of the audience, so the value of broadcasting rights rises with reach, which draws sponsors whose brands are worth carrying only because the audience is global, which pays for a bigger event. <span class="kt">Simultaneity</span> is what is actually being sold, and it is the only thing in this chapter that cannot be time-shifted, copied or summarized without losing most of its value.` }
          ]
        },
        {
          heading: 'National politics rode the global signal',
          blocks: [
            { p: `The shared audience did not dilute national feeling; it gave national feeling the largest stage it had ever had. The Berlin Games of <span class="num">1936</span> were staged by the German government as a display of the regime, and were the first Olympics to be televised at all, to viewing rooms in the host city. At Mexico City in <span class="num">1968</span> the American sprinters Tommie Smith and John Carlos raised gloved fists on the medal podium and were sent home. The Moscow Games of <span class="num">1980</span> were boycotted by the United States and around sixty other countries after the Soviet invasion of Afghanistan, and the Soviet Union and most of its allies boycotted Los Angeles in <span class="num">1984</span> in return. South Africa was excluded from the Olympics from <span class="num">1964</span> and expelled from the movement in <span class="num">1970</span>, part of the sporting isolation the Topic 9.5 chapter treats as a mechanism of pressure, and it returned in <span class="num">1992</span>; the <span class="num">1995</span> Rugby World Cup, held in South Africa a year after the first non-racial election, was used deliberately as a national reconciliation event.` },
            { p: `The pattern is consistent enough to state as a rule. A global broadcast is valuable to a state precisely because it is global, so the more genuinely worldwide the audience becomes, the more attractive the event becomes as a place to make a national or political statement. Shared consumption and intensified national identity are not in tension here. One produces the other.` }
          ]
        },
        {
          heading: 'How to quote an audience figure',
          blocks: [
            { p: `Somebody will tell you that half the planet watched a particular match. Before repeating it, know what kind of number it is.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: reach and average audience are different numbers',
              html: `Audience figures for a world sporting event come from the rights holder, compiled from national broadcasters and audience measurement panels, and the organizations publishing them have an obvious interest in a large result. The important thing is that they usually publish two figures with very different definitions. <b>Reach</b> counts every person who watched at least a minute of any coverage anywhere across the whole tournament, and for a recent World Cup that figure has been reported in the billions. <b>Average live audience</b> counts how many people were watching at a typical moment of a particular match, and for a final that figure has been reported in the hundreds of millions. The second is smaller than the first by roughly an order of magnitude, and it is the first that gets quoted. Neither is fake and they answer different questions. Both also omit viewing that panels measure poorly, in bars, in public squares, and on streams. A careful sentence names the measure: "FIFA reported a cumulative reach in the billions and an average live audience for the final in the hundreds of millions" is defensible, and "three billion people watched the final" is not.`
            } },
            { p: `Apply the same discipline to any claim in this topic that a number of people share something. The general lesson is the one Topic 9.4 makes about poverty statistics and Topic 9.2 makes about death tolls: the direction of these findings is robust and the headline figure is a construction, so cite the direction confidently and the number carefully.` }
          ]
        }
      ],
      useThis: {
        tool: `Simultaneity as the product. <em>The mechanism is that most cultural goods can be consumed whenever the audience chooses, which is why they are cheap to distribute, but a live event's value depends on being watched at the moment it happens, so it cannot be copied without loss. That scarcity is what makes broadcasting rights and sponsorship worth so much, and it is why a global sporting event became the single most valuable cultural product of the satellite era.</em>`,
        limit: `Simultaneity delivers a shared moment and guarantees nothing about shared meaning. The same broadcast is a source of postcolonial pride in one country, a commercial entertainment in another and a political grievance in a third, which is exactly the section's finding rather than an objection to it.`,
        comparison: `Against the <em>Hajj</em> in Topic 2.2 and the great pilgrimage networks: those also produced a shared experience across an enormous distance, and they required the participants to travel to a single place, which limited the numbers to those who could make the journey. Satellite broadcasting achieved the shared moment without the movement, which is the same substitution of signal for travel that runs through the whole of Topic 9.1.`
      },
      terms: [
        ['Simultaneity', 'Being watched at the moment of occurrence, the one property of a live event that cannot be copied, and the basis of the value of broadcasting rights.'],
        ['Broadcast rights', 'The exclusive right to transmit an event, whose price rises with reach, which is what draws global sponsors and funds the scale of the event.'],
        ['Reach figure', 'The count of everyone who watched at least a minute of any coverage, much larger than the average live audience and the number usually quoted.'],
        ['Sporting boycott', 'Withdrawal from competition as political pressure, used against apartheid South Africa from 1964 and between the Cold War blocs in 1980 and 1984.'],
        ['Mega-event', 'A recurring global spectacle whose scale, cost and political usefulness all depend on the size of the simultaneous audience.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'argument',
      num: '04',
      accent: 'oxide',
      name: 'The Argument About Homogenization',
      navLabel: 'The argument',
      dates: '1969 to the 2010s &nbsp;·&nbsp; Cultural imperialism, glocalization, hybridity',
      thesis: `Whether cultural globalization made the world more alike is a genuine scholarly dispute, not a question with a hidden answer. Both sides have real evidence, and the useful move is to say what each side's evidence is good for, because they are measuring different things.`,
      parts: [
        {
          heading: 'What actually crossed: brands, formats and platforms',
          blocks: [
            { p: `Coca-Cola was first sold in <span class="num">1886</span> and by the second half of the twentieth century was on sale in most countries of the world, common enough that critics in postwar France coined <span class="kt">Coca-colonization</span> for the fear that American products were displacing local ways of living. Toyota, founded in <span class="num">1937</span>, sold cars on every continent through production and marketing networks that were not American at all, which is the counterflow again. McDonald's opened its first restaurant outside North America in the <span class="num">1960</span>s and opened in Moscow in January <span class="num">1990</span>, a date that carried more political meaning than any menu. eBay launched in the United States in <span class="num">1995</span> and Alibaba was founded in Hangzhou in <span class="num">1999</span>, and between them they turned cross-border consumer exchange from something a person watched into something a person could do.` },
            { p: `Now separate three things that get merged. The <b>product</b> crossed: the same bottle, the same car, the same handset. The <b>format</b> crossed: the ninety-minute feature, the three-minute pop single, the twenty-two-minute sitcom, the standardized fast-food service model, the platform interface. And the <b>ownership</b> concentrated: a shrinking number of firms controlled a growing share of what was distributed, a claim the American critic Ben Bagdikian tracked across editions of his book from <span class="num">1983</span>, counting the companies dominating that country's media falling from dozens to a handful over two decades. Those three are all real convergence and they are convergence in the machinery, which is the strongest version of the homogenization case.` }
          ]
        },
        {
          heading: 'The dispute, with names on it',
          blocks: [
            { p: `The <span class="kt">cultural imperialism</span> position was set out most influentially by Herbert Schiller in <span class="num">1969</span>, arguing that the international flow of media ran overwhelmingly outward from the United States and carried commercial values with it, so that other societies' media systems were being restructured around advertising and American formats. Its evidence is trade data on media exports, ownership concentration, and the spread of the commercial broadcasting model. George Ritzer's argument from <span class="num">1993</span> about McDonaldization is a related but distinct claim: what spreads is not American taste but a form of organization, efficiency, standardization, predictability and control, applied to more and more of life.` },
            { p: `The opposing position rests on what audiences do with what they receive. Elihu Katz and Tamar Liebes published a study in <span class="num">1990</span> that showed the same episode of an American television drama to viewers of different backgrounds in Israel and elsewhere and recorded how they discussed it; the groups produced systematically different readings, moral, political and narrative, of an identical text. James Watson's collection of ethnographies of McDonald's in East Asia in <span class="num">1997</span> found the restaurants being used in locally specific ways, as places for students to sit for hours or for children's birthday parties, functions the company had not designed. Roland Robertson proposed <span class="kt">glocalization</span> in <span class="num">1995</span> for the deliberate adaptation of a global product to a local market, and Arjun Appadurai argued in <span class="num">1996</span> that global cultural flows are disjointed rather than coordinated, so that media, money, people, technology and ideology move in different directions at once and no single center controls the result.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the two sides are measuring different objects',
              html: `This dispute is unusually tractable, because the disagreement is about the unit of observation rather than about the facts. The cultural imperialism case measures <b>flows and ownership</b>: who exports, who imports, who owns the distributor. Its evidence is trade statistics and corporate structure, and on that evidence the convergence is real and documented. The hybridity case measures <b>reception</b>: what a viewer says the program meant, what a customer uses the restaurant for. Its evidence is ethnography and audience research, and on that evidence the divergence is also real and documented. Neither body of evidence refutes the other, because a film can be produced by three firms and understood in fifty ways at the same time. So the question "did globalization homogenize culture" is badly formed, and the answerable version specifies the level: it homogenized formats, business models and distribution while multiplying the interpretations placed on them. Note also a criticism from within the second camp: Ella Shohat and Robert Stam among others have warned that celebrating hybridity can flatter an exchange that remains deeply unequal, since the audience that reinterprets a product still did not get to make it.`
            } },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not resolve this by writing that globalization produced "a mix of both", which is true of nearly everything and therefore says nothing. The stronger move is a narrower and more concrete claim: <b>what converged was the container and what diverged was the contents.</b> Formats, ownership, retail models and platform interfaces became markedly more similar across the world; the meanings audiences made of what arrived in those containers did not. Then add the qualification that costs the other side something: convergence in the container is not trivial, because whoever owns the container decides what gets carried at all, and a meaning cannot be made of a film that was never distributed.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Separating the container from the contents. <em>The mechanism is that cultural globalization operated on two levels with different logics: the industrial level of formats, ownership and distribution, where cheap copying rewards scale and produces convergence, and the interpretive level, where meaning is made by an audience out of its own history and therefore diverges the further a product travels. Specifying which level a claim is about turns an unresolvable argument into a defensible thesis.</em>`,
        limit: `The two levels are not independent. Ownership of the container decides what reaches an audience at all, so a finding that audiences reinterpret freely says nothing about the much larger set of things they were never offered. Treating reception as a full answer to the concentration evidence is the weakness of the hybridity case.`,
        comparison: `Against the <em>spread of Buddhism</em> in Topic 1.2 and of Islam in Topic 2.2: both traveled along trade routes, both were adopted by rulers for their own purposes, and both were reshaped by the societies that received them into forms their originators would not have recognized. The mechanism is identical and the speed is not, which makes it a strong continuity claim: in every case of long-distance cultural transmission this course examines, from Buddhism along the Silk Roads to Islam in Southeast Asia to reggae, the receiving society reworked what it received, and what the twentieth century changed was the cost, the reach and who owned the channel.`
      },
      terms: [
        ['Cultural imperialism', 'The argument, associated with Herbert Schiller from 1969, that media flows ran outward from a few wealthy states and restructured other societies around commercial models.'],
        ['Glocalization', 'Roland Robertson\'s 1995 term for the deliberate adaptation of a global product to a local market, standard identity with tailored contents.'],
        ['Hybridity', 'The blending of global and local forms into something new, evidenced by audience research and ethnography, and criticized for sometimes flattering an unequal exchange.'],
        ['Coca-colonization', 'The postwar French coinage for the fear that American consumer products were displacing local ways of living, an early name for the homogenization worry.'],
        ['Reception', 'The meaning an audience makes of a cultural product, measured by ethnography and audience studies, and the level at which global culture diverges rather than converges.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a claim, its evidence and the mechanism that connects them. The last card is the qualification this topic is graded on, so practice writing it as a full paragraph rather than as a sentence bolted on at the end.`,
    pairs: [
      {
        category: 'Causation',
        title: 'One cause makes culture cheap to send; a different cause decides where it actually goes',
        body: `A song or a film costs almost the same to make whether one person receives it or a hundred million do, so once broadcasting and then digital distribution made sending nearly free, the economics of culture changed completely. Call that the enabling cause, and notice what it cannot do by itself: cheap distribution explains why culture could travel everywhere at once, not why Reggae specifically reached Zimbabwe and Britain, or why Bollywood specifically reached East Africa and the Gulf. That second question needs a carrying cause, a real network of people, money or migration that a piece of culture rides along. For Reggae, find the specific carrying network in this chapter, who moved, what company distributed it, and where it got adopted as a political voice for causes far from Jamaica. Then do the same work for Bollywood: what carried it, and to which audiences. An answer that names only the technology has restated the question; an answer that names both causes for both cases has answered it.`
      },
      {
        category: 'Evidence',
        title: 'The counterflow is what kills the one-way story',
        body: `India has for decades released more feature films a year than any other country, and Bollywood is the Hindi-language industry in Mumbai rather than the whole of Indian cinema. Raj Kapoor's Awaara of 1951 was enormously popular in the Soviet Union, and Hindi films drew large audiences across the Middle East, East Africa and Central Asia. Brazilian and Mexican telenovelas were exported to scores of countries from the 1970s because they were cheap to dub. Nigeria's video film industry grew from the early 1990s on camcorders and informal retail, entirely outside the studio system, and became one of the largest producers of titles in the world. Korean television and music built regional audiences from the late 1990s with deliberate state and industry investment, reached a billion views on a single music video in 2012, and a Korean-language film won best picture in 2020. Four counterflows with dates beat any number of assertions that culture flowed both ways.`
      },
      {
        category: 'Comparison',
        title: 'A global spectacle intensified national feeling rather than dissolving it',
        body: `Satellite relay converted the Olympics and the World Cup from events people read about into events people experienced at the same second: Telstar across the Atlantic in 1962, Syncom 3 carrying Tokyo in 1964, Mexico City live and in color in 1968. Precisely because the audience was now global, the stage became worth using. Berlin in 1936 was staged by the German government as a display of the regime; Smith and Carlos raised gloved fists at Mexico City in 1968; some sixty countries boycotted Moscow in 1980 and the Soviet bloc boycotted Los Angeles in 1984; South Africa was excluded from 1964 and expelled in 1970 as part of the pressure campaign in Topic 9.5, returning in 1992. Shared consumption produced intensified national identity, and the same broadcast delivered a different meaning in every country receiving it.`
      },
      {
        category: 'Qualification',
        title: 'What converged was the container and what diverged was the contents',
        body: `The homogenization argument is a live dispute and both sides have evidence. Herbert Schiller from 1969 measured media trade flows and ownership and found outward flow from a few wealthy states; Ritzer in 1993 argued that what spread was a standardized form of organization; Bagdikian tracked ownership concentrating from dozens of firms to a handful. Katz and Liebes in 1990 showed the same television episode to different national groups and recorded systematically different readings; Watson's 1997 ethnographies found East Asian customers using McDonald's for purposes the company never designed; Robertson named glocalization in 1995 and Appadurai argued in 1996 that global flows are disjointed rather than centrally directed. They are measuring different objects, flows and ownership on one side, reception on the other, so the answerable claim is that formats, business models and distribution converged while the meanings placed on them multiplied. Then concede what that costs you: whoever owns the container decides what is carried, and no audience can reinterpret something it was never shown.`
      }
    ]
  }
};
