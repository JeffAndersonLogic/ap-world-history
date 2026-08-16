'use strict';

/**
 * Topic 8.6, Newly Independent States: the deep reading.
 *
 * Why this exists. The success criteria ask how boundary redrawing created new
 * states, how it produced conflict and displacement in the Partition of India
 * and in the creation of Israel, and for two examples of governments guiding
 * economic life plus one migration pattern. The First & 10 names all of it. What
 * a survey cannot do is explain why a border produces a mass movement of people,
 * which is a question about administration and fear rather than about ancient
 * hatred, and why almost every new government chose state-led development, which
 * is a question about what a colonial economy left behind.
 *
 * The organizing argument: independence transferred sovereignty much faster than
 * it transferred capacity, and both halves of this chapter are consequences of
 * that gap. A border drawn in five weeks by a commission with no enforcement, and
 * an economy built to export two commodities to one buyer, are the same problem
 * in two forms.
 *
 * Three things carried deliberately:
 *
 *   1. Partition violence explained mechanically: an uncertain line, a five-week
 *      timetable, an army being divided at the same moment, and the resulting
 *      rational fear of being on the wrong side when the announcement came. That
 *      is a far better answer than religious antagonism, and it is supported by
 *      the timing of the violence relative to the award's publication.
 *   2. Israel and Palestine handled as the politically live subject it is:
 *      the sequence of documented events, both national claims stated as their
 *      holders stated them, contested figures given as ranges, and the Israeli
 *      new historians' debate named as a live scholarly argument.
 *   3. State-led development explained by inheritance rather than ideology, which
 *      is why Nasser, Nyerere, Indira Gandhi and Bandaranaike, who agreed on very
 *      little else, all did versions of the same thing.
 */

module.exports = {
  topicKey: 't8-6',
  slug: 'topic-8-6-newly-independent-states',
  sourceFile: 'deep-reading-topic-8-6-newly-independent-states.html',
  lessonFile: 'lesson-8-6-newly-independent-states.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 8.6: The Line, and the People on It',
  eyebrow: 'Topic 8.6 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'The Line, and the People <em>on It</em>',
  deck: `Independence transferred sovereignty far faster than it transferred capacity. This chapter takes the two places that gap shows most clearly: a border drawn in five weeks with no plan for the people it cut through, and an economy built to sell two commodities to one buyer, now expected to fund a nation.`,
  meta: ['Four sections', 'Two partitions, then the economics', 'Read alongside the First & 10'],
  footerNote: 'Topic 8.6 &nbsp;·&nbsp; The Line, and the People on It &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Sections 01 and 02 are the two displacement cases the success criteria name, and they are built to be compared rather than narrated. Sections 03 and 04 are the economic half, which most students underweight and which the third criterion asks for directly.`,
    steps: [
      `<b>01 Partition:</b> why an uncertain line on a five-week timetable produces mass movement.`,
      `<b>02 Palestine and Israel:</b> the sequence, both national claims, the contested figures, and the live scholarly argument.`,
      `<b>03 State-led development:</b> why almost every new government chose it, and what it did.`,
      `<b>04 Migration to the metropole:</b> how empire continued as a set of routes after it ended as a territory.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'partition',
      num: '01',
      accent: 'gold',
      name: 'Partition: A Border Nobody Could See',
      navLabel: 'Partition of India',
      dates: '1940 to 1948 &nbsp;·&nbsp; The Lahore Resolution to the end of the first Kashmir war',
      thesis: `The violence of <span class="num">1947</span> is usually explained by religious antagonism, which had existed for centuries without producing anything on this scale. The mechanism that produced the scale was administrative: a line drawn in secret, published two days after independence, with no agreed population transfer and with the army that might have protected people being divided at the same moment.`,
      parts: [
        {
          heading: 'How the decision was reached',
          blocks: [
            { p: `The <span class="kt">Muslim League</span>, founded in <span class="num">1906</span>, argued through the <span class="num">1930</span>s that Muslims would be a permanent minority in an independent India governed by majority rule, and its Lahore Resolution of <span class="num">1940</span> called for independent states in the Muslim-majority areas of the northwest and northeast. Under Muhammad Ali Jinnah the League's electoral position strengthened sharply during and after the war, and by <span class="num">1946</span> it was able to claim, on the basis of that year's elections, to speak for most Muslim voters.` },
            { p: `Congress, and Nehru in particular, wanted a single strong federal state and rejected the constitutional arrangements that might have held one together with substantial provincial autonomy. Communal violence in Calcutta in August <span class="num">1946</span> and in Bihar and elsewhere afterward killed thousands and convinced many on all sides that a unitary settlement had become impossible. Lord Mountbatten, arriving as viceroy in March <span class="num">1947</span>, moved the date of British withdrawal forward from June <span class="num">1948</span> to August <span class="num">1947</span>, which compressed everything that follows.` }
          ]
        },
        {
          heading: 'The mechanism of the violence',
          blocks: [
            { p: `Cyril Radcliffe, a British lawyer who had never been to India, chaired the two boundary commissions and arrived in July <span class="num">1947</span>. He had about five weeks, outdated census and land records, and deadlocked commissions in which the Congress and League nominees could not agree, which left the decisions to him. His awards, dividing Punjab and Bengal, were completed before independence and published on 17 August <span class="num">1947</span>, two days after it.` },
            { p: `Now state the mechanism precisely, because this is what a checkpoint rewards. If you live in a district and do not know which country it will be in, and you know that being on the wrong side may leave you a minority in a new state with no protection, then leaving before the announcement is a rational decision, and so is attacking the neighbors you expect to be protected by the other side. Uncertainty about the line, not certainty about it, is what produced the movement, and the withholding of the award until after independence maximized that uncertainty at the exact moment the state was weakest.` },
            { p: `Three further conditions turned movement into massacre. The Indian Army, the only force capable of protecting refugee columns across the whole area, was itself being divided between the two new states, and its units were being reassigned by religion at the same time. The princely states had to choose which country to join, which left Kashmir's status unresolved and produced war between India and Pakistan within months. And the new governments were days old, with divided civil services, split treasuries and no administrative capacity to manage a migration of this size.` },
            { p: `The scale is very large and genuinely uncertain. Estimates of the number of people displaced run from roughly ten to twenty million, and estimates of deaths from several hundred thousand to around two million. Both ranges reflect the absence of reliable registration during the movement itself and the political stakes attached to the numbers in both countries. Use a range and say why it is one.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the boundary papers, and the silence around them',
              html: `The formal record of Partition is unusually good and unusually narrow. Commission proceedings, the Radcliffe awards themselves, viceregal correspondence and Cabinet papers survive, and they document the timetable, the disagreements and the decision to withhold publication. What they do not document is the experience, because the violence happened where the state was absent, which is the point. Much of what historians know about that comes from oral history projects collected decades later, from refugee registration records and from contemporary press reporting, all of which have known problems: memory recorded fifty years on is shaped by everything that happened since, and the press on both sides was partisan. Radcliffe himself destroyed his working papers. The honest position is that the administrative history is firm and the human history is reconstructed from imperfect sources, which is exactly why the casualty figures are a range.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Uncertainty about a border as a cause of flight. <em>The mechanism is that a population which does not know which state it will wake up in, and expects no protection if it guesses wrong, has a rational reason to leave pre-emptively and a rational fear of the neighbors it expects to be protected by the other side. Withholding the Radcliffe award until two days after independence maximized that uncertainty at the moment state capacity was lowest.</em>`,
        limit: `It is an explanation of scale and timing, not of the existence of communal conflict, which had a long prior history including the killings in Calcutta in August 1946. The mechanism explains why 1947 was catastrophic rather than merely violent.`,
        comparison: `Against <em>Palestine</em> in section 02: both are British-administered territories partitioned on a compressed timetable with no enforcement mechanism, and both produced mass displacement and a war within a year. The difference is that in India two successor states existed and accepted the line as a line, while in Palestine the partition plan was rejected by the Arab states and by the Palestinian leadership and no agreed boundary ever came into effect.`
      },
      terms: [
        ['Muslim League', 'Founded 1906, its 1940 Lahore Resolution called for independent states in Muslim-majority regions, and it claimed a mandate from the 1946 elections.'],
        ['Radcliffe Line', 'The boundary awards dividing Punjab and Bengal, drawn in about five weeks and published on 17 August 1947, two days after independence.'],
        ['Partition', 'The division of British India into India and Pakistan in August 1947, accompanied by mass displacement estimated at ten to twenty million people.'],
        ['Princely states', 'The territories under Indian rulers who had to choose a successor state at independence, leaving Kashmir’s status unresolved and producing immediate war.'],
        ['Communal violence', 'Organized attacks between religious communities, present before 1947 and multiplied by the uncertainty and administrative collapse of that year.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'palestine',
      num: '02',
      accent: 'rust',
      name: 'Palestine: A Mandate That Ended Without a Settlement',
      navLabel: 'Palestine and Israel',
      dates: '1917 to 1949 &nbsp;·&nbsp; The Balfour Declaration to the armistice agreements',
      thesis: `Britain held Palestine under a League mandate and had made commitments that could not all be kept. When it withdrew in <span class="num">1948</span> with no agreed settlement, the result was a war whose outcome created one state and displaced most of the Arab population of the territory that became it.`,
      parts: [
        {
          heading: 'The sequence',
          blocks: [
            { p: `In <span class="num">1917</span> the British government issued the Balfour Declaration, stating support for the establishment in Palestine of a national home for the Jewish people, with the proviso that nothing should prejudice the civil and religious rights of the existing non-Jewish communities. Britain had also made commitments during the war to Arab leaders about postwar Arab independence, and had separately agreed with France on a division of the region. Palestine became a British mandate under Article 22, of the class described as provisionally close to independence, and the mandate text incorporated the national home commitment.` },
            { p: `Jewish immigration grew through the interwar decades, rising sharply in the <span class="num">1930</span>s as persecution in Europe intensified, and land purchase and settlement grew with it. Arab opposition grew in parallel, reaching a general revolt from <span class="num">1936</span> to <span class="num">1939</span> that Britain suppressed with considerable force and that ended with a policy restricting Jewish immigration at precisely the moment escape from Europe became most urgent. After <span class="num">1945</span>, with the scale of the Holocaust known, pressure for admission of Jewish survivors was intense, Jewish paramilitary organizations attacked British forces and installations, and the British government referred the question to the United Nations.` },
            { p: `In November <span class="num">1947</span> the UN General Assembly recommended partition into a Jewish state, an Arab state and an international zone for Jerusalem. The Jewish Agency accepted the plan; the Arab Higher Committee and the Arab states rejected it, on the argument that a majority-Arab territory was being divided without the consent of its majority. Fighting between the communities began immediately. Britain ended the mandate on 14 May <span class="num">1948</span>, Israel declared independence the same day, and armies from Egypt, Transjordan, Syria, Iraq and Lebanon entered the conflict. By the armistice agreements of <span class="num">1949</span> Israel held substantially more territory than the partition plan had allotted, Egypt held Gaza and Transjordan held the West Bank, and no Arab state of Palestine came into existence.` }
          ]
        },
        {
          heading: 'The displacement, and the argument about it',
          blocks: [
            { p: `Roughly 700,000 Palestinian Arabs left or were driven from the territory that became Israel, out of a total Arab population of the mandate somewhat over a million. They were not permitted to return, and the event is known in Arabic as the Nakba, the catastrophe. For the Jewish national movement the same year is the achievement of a state after decades of effort and three years after the Holocaust, and the survival of that state against invading armies. Both of those are accurate descriptions of what happened, held by people with reasons, and a student writing about <span class="num">1948</span> should be able to state each one as its holders state it.` },
            { p: `What historians argue about is the mechanism of the displacement, and it is a live argument rather than a settled one. From the <span class="num">1980</span>s, as Israeli state archives from the period were opened, a group of scholars often called the new historians re-examined the standard account that the Arab population had left voluntarily or at the instruction of Arab leaders. Their work documented expulsions by Israeli forces in a number of localities, alongside flight caused by fear, by the collapse of local administration and by the fighting itself. The debate since has been about proportion, intent and whether a coordinated plan existed, and the participants disagree with each other as much as with the earlier account. Cite it as an open scholarly question with an evidentiary basis, which is what it is.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Two errors, in opposite directions, and both are common. The first is treating the conflict as ancient and religious, so that <span class="num">1948</span> becomes the latest round of something eternal. The documented dispute is about a specific territory and dates from the late nineteenth and early twentieth centuries, and the mandate period is where its terms were set. The second is writing as though one national claim is self-evidently the only real one. In an AP essay, describe what was done and by whom, use the dates and the documents, give contested figures as ranges, and represent each national movement's aims as its own participants stated them. That is not neutrality for its own sake, it is the same evidentiary standard this chapter applies to Partition, and it produces a better answer than advocacy in either direction.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Withdrawal without a settlement. <em>The mechanism is that a departing power can transfer sovereignty or it can leave a contested territory with no agreed successor, and the second produces war, because two organized national movements with incompatible claims are left to determine the outcome by force. Britain ended the mandate on a fixed date with the UN plan rejected by one side and no enforcement provided by anyone.</em>`,
        limit: `The framework does not settle the causal questions inside 1948, above all the mechanism of the Palestinian displacement, which remains an active scholarly dispute drawing on archives that continue to be opened and reassessed.`,
        comparison: `Against <em>Partition</em> in section 01: both are British withdrawals from a mandate or a colony on a fixed date, both produce mass displacement within months, and the instructive difference is that India and Pakistan both accepted the boundary as a boundary and organized states around it, while in Palestine the plan was rejected and the eventual lines were armistice lines rather than agreed borders, which is why one dispute produced a permanent frontier and the other did not.`
      },
      terms: [
        ['Balfour Declaration', 'The 1917 British statement of support for a Jewish national home in Palestine, with a proviso about the rights of existing communities.'],
        ['UN partition plan', 'The November 1947 General Assembly recommendation to divide the mandate, accepted by the Jewish Agency and rejected by the Arab states and leadership.'],
        ['Nakba', 'The Arabic term, meaning catastrophe, for the displacement of roughly 700,000 Palestinian Arabs during the 1948 war and their inability to return.'],
        ['Armistice lines', 'The 1949 ceasefire boundaries, which were not agreed international borders and left no Arab state of Palestine in existence.'],
        ['New historians', 'The Israeli scholars who from the 1980s reassessed 1948 using newly opened state archives, opening a debate about the causes of the displacement that remains active.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'development',
      num: '03',
      accent: 'iron',
      name: 'Why Almost Every New Government Ran the Economy',
      navLabel: 'State-led development',
      dates: '1956 to 1977 &nbsp;·&nbsp; Suez nationalization to the end of the Indian Emergency',
      thesis: `State-led development was not primarily an ideological preference. It was the response to a specific inheritance: an economy organized to export one or two raw materials to the former colonial power, with almost no domestic industry, very little private capital and a tiny trained professional class.`,
      parts: [
        {
          heading: 'The inheritance and the logic',
          blocks: [
            { p: `A colonial economy was built to serve the metropole, which meant railways running from a mine or a plantation to a port rather than between the country's own cities, banks and shipping owned abroad, processing and manufacturing done in the imperial country, and education systems that had trained clerks rather than engineers. A government inheriting that in <span class="num">1957</span> or <span class="num">1960</span> faced a specific problem: the world price of its export commodity was set elsewhere and moved without warning, and the manufactured goods it needed had to be bought in hard currency it earned only by selling that commodity.` },
            { p: `The strategy almost everyone adopted is <span class="kt">import substitution industrialization</span>. Put tariffs on imported manufactures, use the protected market to build domestic industry, and use state investment to do it because no domestic private sector had the capital. Attach to that the nationalization of foreign-owned assets, which brings the revenue stream home and is politically popular for the obvious reason that foreign ownership was the visible face of the old arrangement. That is the logic, and it explains why governments of very different politics did versions of the same thing.` },
            { p: `<b>Nasser in Egypt</b> nationalized the Suez Canal Company in <span class="num">1956</span> to fund the Aswan High Dam, then nationalized banks, insurance and large industry in the early <span class="num">1960</span>s, alongside land reform capping holdings. <b>Nyerere in Tanzania</b> set out ujamaa, a distinctively African socialism built on the idea of the extended family, in the Arusha Declaration of <span class="num">1967</span>, nationalizing banks and major firms and, from the early <span class="num">1970</span>s, moving scattered rural households into planned villages. <b>Indira Gandhi in India</b> nationalized the major commercial banks in <span class="num">1969</span> and deepened the planning and licensing system her father's governments had built. <b>Sirimavo Bandaranaike in Ceylon</b>, who in <span class="num">1960</span> became the first woman to head a government anywhere in the modern world, continued a program of nationalization and import substitution.` }
          ]
        },
        {
          heading: 'What it achieved, and what it did not',
          blocks: [
            { p: `Judgments here should be specific, because the record is mixed in ways that a single verdict flattens. Tanzania's villagization moved millions of people, in many cases under compulsion, and agricultural output and export earnings fell; over the same period literacy and access to basic health care and clean water rose substantially, and Nyerere kept the country from the ethnic fragmentation that afflicted several neighbors. India's planning system built heavy industry, a large scientific and technical establishment, and food self-sufficiency after the agricultural changes of the late <span class="num">1960</span>s, and it also produced a licensing regime that constrained growth for decades, which was substantially dismantled after <span class="num">1991</span>. Egypt's public sector delivered rapid early industrial growth and became a heavy fiscal burden.` },
            { p: `Two structural problems recur and are worth naming. Import substitution builds industries behind tariffs that protect them from the competition that would have made them efficient, so the protected sector often stays uncompetitive and stays protected. And a state that owns the economy owns the patronage in it, which in several countries strengthened one-party rule: Nkrumah's Ghana, Nyerere's Tanzania and Indira Gandhi's Emergency of <span class="num">1975</span> to <span class="num">1977</span> are all cases where economic direction and political concentration grew together, though the severity varied enormously and the Emergency ended when its author called an election and lost it.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: development statistics are real evidence and need handling',
              html: `National accounts, five-year plan documents, World Bank and UN data series and census records make this the best-quantified section of Unit 8. Three cautions apply. Early postcolonial statistical services were often thin, so figures for the <span class="num">1960</span>s carry wide error margins that later publication tidies away. Governments reported their own performance, and the Topic 8.4 chapter shows what that incentive can do. And the choice of indicator carries an argument: measuring by output growth and measuring by literacy, infant mortality and life expectancy can rank the same countries in opposite orders, which is why Tanzania looks like a failure on one set of numbers and a partial success on another. Say which measure you are using.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Import substitution as an answer to a colonial inheritance. <em>The mechanism is that an economy built to export one or two commodities and import all manufactures is exposed to price swings it cannot control, so a government raises tariffs to create a protected domestic market and invests state capital in industry because no private sector has enough, and nationalizes foreign-owned assets to capture the revenue and the political credit at once.</em>`,
        limit: `Protection from competition often meant permanent inefficiency, and a state that owns the economy also owns its patronage, which in several countries reinforced single-party rule. Assess by naming the measure, since output growth and human development indicators rank these programs differently.`,
        comparison: `Against <em>Topic 9.4</em> on the later turn to liberalization: the debt crises and structural adjustment programs of the 1980s were, in large part, the unwinding of this model under pressure from creditors. Knowing why states chose it in 1960 is what makes the reversal after 1980 legible as something other than a correction of an error.`
      },
      terms: [
        ['Import substitution industrialization', 'Building domestic industry behind tariff protection to replace imported manufactures, the dominant postcolonial development strategy.'],
        ['Nationalization', 'State takeover of foreign or private assets, which captures the revenue and answers the visible foreign ownership inherited from empire.'],
        ['Ujamaa', 'Nyerere’s African socialism set out in the 1967 Arusha Declaration, including villagization that was widely coercive and reduced agricultural output.'],
        ['Five-year plan', 'The state instrument for directing investment across sectors, used in India from 1951 and widely copied.'],
        ['Commodity dependence', 'Reliance on one or two raw material exports whose world prices are set elsewhere, the structural problem state-led development was meant to solve.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'migration',
      num: '04',
      accent: 'oxide',
      name: 'Empire Ended as a Territory and Continued as a Route',
      navLabel: 'Migration to the metropole',
      dates: '1948 to 1975 &nbsp;·&nbsp; The Windrush arrival to the postwar migration settlements',
      thesis: `The largest movement of people caused by decolonization was not out of the empires but into them, and it happened for three reasons operating together: labor shortage in the metropole, citizenship categories inherited from empire, and the language, qualifications and transport links that colonial rule had already built.`,
      parts: [
        {
          heading: 'The mechanism, in three parts',
          blocks: [
            { p: `<b>Demand.</b> Western Europe after <span class="num">1945</span> was rebuilding with a shortage of workers, in construction, transport, textiles, foundries and the new public health services. Britain's National Health Service, founded in <span class="num">1948</span>, recruited nurses and doctors directly in the Caribbean and later in South Asia. Employers were not accepting migrants reluctantly; in several sectors they were advertising overseas.` },
            { p: `<b>Legal category.</b> The British Nationality Act of <span class="num">1948</span> gave the status of citizen of the United Kingdom and Colonies to people across the empire and Commonwealth, with a right of entry. That is the specific legal fact that makes the postwar movement to Britain different from ordinary immigration: people arriving from Jamaica or from India in the <span class="num">1950</span>s were exercising a right they already held. The ship <em>Empire Windrush</em>, arriving in <span class="num">1948</span> with several hundred Caribbean passengers, became the symbol of the beginning. Algerians had a comparable position in relation to France, since Algeria had been administered as part of France itself. Filipino migration to the United States ran through a different route, shaped first by American colonial rule from <span class="num">1898</span>, then by military and nursing recruitment, and greatly enlarged by the American immigration reform of <span class="num">1965</span>.` },
            { p: `<b>Prior connection.</b> Colonial education had taught the metropole's language, colonial qualifications were recognized there, shipping and later air routes already ran, and family and church networks formed quickly and then pulled others. Migration follows established channels, which is why the flows track the old imperial map so exactly: Caribbeans and South Asians to Britain, Algerians and West Africans to France, Indonesians to the Netherlands, and not the reverse combinations.` },
            { p: `And then the political reaction, which is part of the history rather than an appendix to it. Britain restricted entry from the Commonwealth in stages from <span class="num">1962</span>, and public argument about immigration became a permanent feature of politics in Britain and France. The Topic 9.6 chapter follows what these communities did to the culture of the metropoles.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not describe this migration as people fleeing poor countries for rich ones, which imports an explanation that does not fit the evidence and misses the causal point. The flows were channelled by empire, not by income gaps alone: there were poorer places than Jamaica whose people did not move to Britain in the <span class="num">1950</span>s, because they had no citizenship claim, no recruiter, no language in common and no shipping line. The accurate formulation is that colonial rule had built the legal categories, the qualifications, the language and the routes, so when postwar labor demand appeared, the movement ran along channels the empire had already cut. That is why this belongs under continuity in a continuity-and-change question.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Migration along imperial channels. <em>The mechanism is that labor demand in the metropole meets a population that already holds a legal right of entry, speaks the language, holds recognized qualifications and can reach the country on an existing route, so the postwar flows track the old imperial map rather than the map of global poverty.</em>`,
        limit: `The legal category was withdrawn once the movement was politically contested, in Britain by restrictions from 1962 onward, which shows that the right of entry was a policy choice rather than a permanent feature of the imperial relationship.`,
        comparison: `Against <em>Unit 6</em> on nineteenth-century migration: those flows were driven largely by industrial labor demand, indenture systems and famine, and moved people mostly toward plantations, mines and settler societies. These flows move toward the imperial core itself, which is the reversal worth stating, and both are cases of migration following an existing economic and legal architecture rather than simply following wages.`
      },
      terms: [
        ['British Nationality Act 1948', 'The law giving people across the empire and Commonwealth citizenship of the United Kingdom and Colonies with a right of entry.'],
        ['Windrush', 'The 1948 ship arrival that became the symbol of postwar Caribbean migration to Britain under that right.'],
        ['Metropole', 'The former imperial home country, which after 1945 became the destination for migration from its own former colonies.'],
        ['Chain migration', 'The process by which early migrants create family and community networks that channel later arrivals to the same places.'],
        ['Continuity', 'The historical pattern that persists through a change, here the imperial routes and legal ties that outlived the empires themselves.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `The first two cards are the displacement comparison the success criteria ask for. Note that both explain the violence through administration and uncertainty rather than through antagonism, which is the analytical move to copy.`,
    pairs: [
      {
        category: 'Mechanism',
        title: 'Partition violence was produced by an uncertain line on a compressed timetable',
        body: `Mountbatten moved British withdrawal forward from June 1948 to August 1947. Cyril Radcliffe, a lawyer who had never been to India, chaired deadlocked boundary commissions with about five weeks and outdated records, and his awards were published on 17 August 1947, two days after independence. A population that does not know which state it will be in, and expects no protection if it guesses wrong, has a rational reason to leave pre-emptively and to fear the neighbors it expects the other side to protect. Add an Indian Army being divided by religion at the same moment, princely states choosing sides, and two governments days old, and displacement estimated at ten to twenty million with deaths estimated from several hundred thousand to around two million follows. Religious antagonism was old; the administrative conditions of 1947 were new, and they explain the scale.`
      },
      {
        category: 'Comparison',
        title: 'Two British withdrawals, and the difference is whether a boundary was accepted',
        body: `In India, partition produced two states that each accepted the Radcliffe Line as a border and organized themselves around it, leaving one unresolved case, Kashmir, which produced war within months and a dispute that continues. In Palestine, the UN plan of November 1947 was accepted by the Jewish Agency and rejected by the Arab Higher Committee and the Arab states, Britain ended the mandate on 14 May 1948 with no agreed successor, Israel declared independence the same day, and five Arab armies entered the fighting. The 1949 outcome was armistice lines rather than agreed borders, no Arab state of Palestine, and roughly 700,000 Palestinian Arabs displaced and not permitted to return. Same imperial power, same instrument, and the presence or absence of an accepted boundary is what separates the outcomes.`
      },
      {
        category: 'Economy',
        title: 'State-led development was an answer to an inheritance, not a preference for socialism',
        body: `A colonial economy came with railways running to a port rather than between cities, foreign-owned banks and shipping, processing done in the metropole, and an education system that had trained clerks. That leaves a government exposed to a commodity price it does not set and needing hard currency for every manufactured import. Hence import substitution: tariffs to create a protected market, state capital because no private sector had enough, and nationalization to capture both the revenue and the political credit. It explains why Nasser after 1956, Nyerere from the 1967 Arusha Declaration, Indira Gandhi's bank nationalization in 1969 and Bandaranaike in Ceylon all did versions of the same thing while agreeing on little else. Assess by naming your measure: Tanzania's output fell while its literacy and health indicators rose.`
      },
      {
        category: 'Continuity',
        title: 'Empire ended as a territory and continued as a route',
        body: `The British Nationality Act of 1948 made people across the empire and Commonwealth citizens of the United Kingdom and Colonies with a right of entry, at the moment postwar Britain was short of workers and the new National Health Service was recruiting nurses in the Caribbean. Algerians held a comparable position in relation to France, since Algeria was administered as part of France. Colonial schooling had already taught the language, colonial qualifications were recognized, and the shipping lines already ran. That is why the flows track the imperial map rather than the map of world poverty, and why Britain's later restrictions from 1962 are part of the same story. In a continuity-and-change question, formal empire is the change and these routes are the continuity.`
      }
    ]
  }
};
