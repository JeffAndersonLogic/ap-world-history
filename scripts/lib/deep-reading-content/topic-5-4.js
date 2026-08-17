'use strict';

/**
 * Topic 5.4, Industrialization Spreads: the deep reading.
 *
 * Why this exists. The success criteria are unusually pointed. They want the
 * spread to Belgium, France, Germany, the US and Japan with one shaping factor
 * each for three of them, and a comparison of state-led against market-driven
 * industrialization. And then they want the other half, which most surveys
 * reduce to a sentence: why most of the world did NOT industrialize, by naming
 * British tariff policy against Indian textiles, the 1838 Treaty of Balta Liman
 * blocking Egypt, and Latin America structured as a raw-material exporter, with
 * the structural argument that sovereignty is what allowed a tariff.
 *
 * That structural argument is the chapter. Stated properly it makes the absence
 * of industrialization an outcome of policy imposed by other states rather than
 * a fact about the places that did not industrialize, and it does so without
 * removing local factors or agency.
 *
 * Three things carried deliberately:
 *
 *   1. Late industrialization has advantages, not just delays. The follower can
 *      copy the proven design, skip the dead ends, and mobilize the state. Once
 *      a student has that, Germany and Japan stop being anomalies.
 *   2. Egypt under Muhammad Ali is the strongest case in the whole unit, because
 *      it is a state that tried, got a long way, and was stopped by a treaty. A
 *      counterfactual that nearly happened is worth more than ten assertions.
 *   3. Japan is written as expensive and deliberate, including the land tax that
 *      paid for it and the rural households that paid the tax, because Meiji as
 *      a success story with no cost is not history.
 */

module.exports = {
  topicKey: 't5-4',
  slug: 'topic-5-4-industrialization-spreads',
  lessonFile: 'lesson-5-4-industrialization-spreads.html',

  titleHtml: 'Who Got to <em>Industrialize</em>',
  deck: `Industrialization spread to a short list of places and not to most of the world, and the difference is not one of talent, ambition or even knowledge. Egypt built cotton mills and an arsenal and was stopped by a treaty. India had the finest textile industry on earth, was tariffed out of Britain's market and was never allowed the tariff that would have protected its own. Japan, which nobody expected, did it in forty years. What separates those outcomes is who controlled the tariff.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is why a follower industrializes differently from a pioneer, which is the frame for everything after it. Sections 02 and 03 are the cases, market-driven and state-led. Section 04 is the half of the topic the success criteria weight equally and most answers skip.`,
    steps: [
      `<b>01 The follower&rsquo;s advantage:</b> why catching up is cheaper, faster and more governmental than going first.`,
      `<b>02 Europe and the United States:</b> Belgium, France, Germany, and a continental market.`,
      `<b>03 Japan:</b> the most deliberate industrialization of the century, and what it cost.`,
      `<b>04 Who was blocked:</b> India, Egypt, Latin America, and the tariff as the deciding instrument.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'followers',
      num: '01',
      accent: 'gold',
      name: 'Going Second Is a Different Problem',
      navLabel: 'The follower',
      dates: 'c. 1820 to 1900 &nbsp;·&nbsp; Catching up',
      thesis: `A country industrializing after Britain is not repeating Britain&rsquo;s experience more slowly. It faces a different problem with different tools, and that is why the followers look state-directed while the pioneer looked spontaneous.`,
      parts: [
        {
          heading: 'Three advantages and one disadvantage',
          blocks: [
            { p: `<b>The design is proven.</b> Britain spent a century on false starts, failed engines and abandoned processes. A follower can buy the working machine, hire the British engineer who built it and copy the layout, skipping the experiments and their cost. Britain banned the emigration of skilled workers and the export of machinery for decades, and the bans leaked continuously, because a machine can be smuggled and an engineer can take a better offer.` },
            { p: `<b>The scale required is larger, which forces the state in.</b> A cotton mill in <span class="num">1780</span> could be financed by a partnership. A steel works and a national railway network in <span class="num">1870</span> could not, so a follower needs investment banks, joint-stock companies and, characteristically, a government that builds or guarantees the railways. The Topic 5.7 chapter is the institutions that made this possible, and their timing is not coincidental.` },
            { p: `<b>The strategic motive is sharper.</b> Britain industrialized without intending to. Everyone after Britain industrialized while looking at Britain, and specifically at what British industry had done to British military and commercial power, so industrialization became a matter of national survival rather than of private profit. That is why the followers' programs are governmental, planned and explicitly defensive.` },
            { p: `<b>And the disadvantage:</b> a follower's infant industries must compete against established British producers who are already cheaper, which is a race nobody wins from behind without protection. Hence tariffs, which is where section 04 begins.` }
          ]
        },
        {
          heading: 'State-led and market-driven, stated as a spectrum',
          blocks: [
            { p: `The comparison the success criteria ask for is real and should not be drawn as a hard line. <b>Market-driven</b>, as in Britain and largely the United States, means capital comes principally from private investors pursuing profit, the state's role is to secure property, enforce contracts and stay out, and the pattern of development follows demand. <b>State-led</b>, as in Germany and Japan, means the government identifies industries it judges strategically necessary, finances or builds them directly, protects them with tariffs, and coordinates railways, banking and technical education around them.` },
            { p: `Neither case is pure and saying so is the mark of a good answer. The United States government granted enormous land subsidies to railroad companies, maintained high protective tariffs for most of the century, and funded canals and surveys. Japan built state factories and then sold most of them to private firms in the <span class="num">1880</span>s. Treat the two as ends of a spectrum, place each case on it, and give the reason.` }
          ]
        }
      ],
      useThis: {
        tool: `The follower&rsquo;s advantage. <em>The mechanism is that a country industrializing second can import proven designs and the engineers who built them, skipping a century of failed experiments, but must enter markets where established producers are already cheaper, so it needs protection and large-scale finance from the start, which is why late industrialization is characteristically state-directed while the first one was not.</em>`,
        limit: `The advantage is only available to a state that can set its own tariffs and direct its own investment, which is exactly what section 04&rsquo;s cases could not do.`,
        comparison: `Against <em>gunpowder diffusion</em> in Topic 3.1: there too the technology spread far faster than it was invented, because copying a working design is cheap and the strategic cost of not having it is enormous. Diffusion under military pressure looks the same in the fifteenth century and the nineteenth.`
      },
      terms: [
        ['Follower advantage', 'The ability to import proven technology and skip the pioneer\'s failed experiments and their cost.'],
        ['Infant industry', 'A new domestic industry not yet able to compete with established foreign producers, the standard argument for tariffs.'],
        ['State-led industrialization', 'Government identification, financing, protection and coordination of strategically chosen industries.'],
        ['Market-driven industrialization', 'Development financed principally by private investors, with the state securing property and contract.'],
        ['Technology transfer', 'The movement of machines and skilled workers across borders, which British export bans slowed and never stopped.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'westward',
      num: '02',
      accent: 'iron',
      name: 'Belgium, France, Germany, and a Continent',
      navLabel: 'Europe and the US',
      dates: 'c. 1820 to 1900 &nbsp;·&nbsp; The first followers',
      thesis: `The first places to industrialize after Britain are the places that had coal and could reach Britain easily, and the two biggest followers, Germany and the United States, each overtook Britain in the end for reasons that were structural rather than accidental.`,
      parts: [
        {
          heading: 'The near neighbors',
          blocks: [
            { p: `<b>Belgium</b> was first on the continent, industrializing from the <span class="num">1820</span>s and <span class="num">1830</span>s on the coal and iron of Wallonia, with British technology and British engineers, notably William Cockerill and his son John, whose works at Seraing built engines and locomotives. Small, coal-rich, close to Britain and newly independent from <span class="num">1830</span>, it is the pure case of proximity plus resources.` },
            { p: `<b>France</b> industrialized steadily and more slowly, and the reasons are worth knowing because they show that slow is not the same as failed. French coal was less abundant and worse placed; the revolutionary land settlement left a large class of peasant proprietors who stayed on the land rather than migrating to mills; population growth was low, so the labor supply grew slowly; and French manufacturing specialized in high-quality goods, silk, luxury textiles, precision work, for which small workshops were entirely rational. France ended the century wealthy, with less of the social dislocation the Topic 5.9 chapter describes.` },
            { p: `<b>Germany</b> is the great state-led case in Europe and the success criteria name its features. Before unification, the <b>Zollverein</b> customs union from <span class="num">1834</span> removed internal tariffs among most German states and created a single market, which is a political act with an industrial purpose. Prussian and other state governments built and financed railways deliberately, and the railway network then created demand for coal, iron and engineering that fed the Ruhr's growth. After unification in <span class="num">1871</span>, Bismarck's tariff of <span class="num">1879</span> protected iron, steel and grain. And Germany built the world's best technical education, the <em>Technische Hochschulen</em>, which is why German firms led the genuinely new industries of the later century, chemicals, dyes and electrical engineering, where a laboratory mattered more than a coal seam.` }
          ]
        },
        {
          heading: 'The United States',
          blocks: [
            { p: `The American case is usually filed as market-driven, and its distinguishing features are three. <b>Resources</b>: coal, iron, timber, oil, and after the railroads an agricultural interior of extraordinary productivity. <b>Labor</b>: mass immigration supplied a workforce that grew faster than any European country's, which is also why American labor conflict, in Topic 5.8, has an ethnic dimension British labor conflict does not. <b>A continental market</b>: one language, one currency, no internal tariffs, and after the transcontinental railroad of <span class="num">1869</span> a single market of a size no European state could match, which made mass production of standardized goods worth designing for.` },
            { p: `That last point produced the American contribution to industrial technique, the <b>American system of manufactures</b>: interchangeable parts made to tolerance so that assembly needs fitting rather than craftsmanship, developed first in federal armories and spreading to clocks, sewing machines, reapers and eventually automobiles. It is the direct ancestor of the assembly line, and it is a response to a large market and expensive labor.` },
            { p: `And the state was present throughout, which is why the market-driven label needs qualifying: protective tariffs for most of the century, enormous federal land grants to railroad companies, state-funded canals, and the legal and military clearing of Indigenous nations from the land the railroads crossed.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the Crystal Palace was a survey',
              html: `Contemporaries measured this competition and left the results. The Great Exhibition of <span class="num">1851</span> at the Crystal Palace was a British display of industrial supremacy, and it worked, with several million visitors. But British observers came away impressed by American machine tools and interchangeable parts, and Parliament sent a commission to the United States in <span class="num">1853</span> to study the armories, which is where the phrase "the American system of manufactures" comes from: it is a British name for something Britain went to look at. Later exhibitions record the shift, with German chemical and electrical exhibits prominent by the 1870s and 1880s. Exhibition catalogues, juries&rsquo; reports and government commissions are unusually useful evidence, because each is a rival power assessing another and has every incentive to be accurate rather than flattering.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The customs union. <em>The mechanism is that internal tariffs between small states make each market too small to justify large-scale production, so removing them, as the Zollverein did from 1834, creates a single market big enough to reward heavy investment, and industrial integration then precedes and pulls along political unification rather than following it.</em>`,
        limit: `A market alone is not enough. Germany also needed the Ruhr&rsquo;s coal, state railway investment, protective tariffs after 1879 and the technical universities, and it is the package that produced the result.`,
        comparison: `Against <em>France</em>: comparable population, science and capital, a slower industrialization, and a considerably less disrupted society, because coal was scarcer, peasants owned their land and manufacturing specialized in quality rather than volume. Slow industrialization is a different path rather than a failed one, and saying so is what separates an analytical answer from a ranking.`
      },
      terms: [
        ['Zollverein', 'The German customs union from 1834, which created a single market and preceded political unification.'],
        ['Ruhr', 'The German coal and steel region whose growth was pulled by state-financed railway demand.'],
        ['Technische Hochschule', 'The German technical university system, which gave Germany the lead in chemicals, dyes and electricals.'],
        ['American system of manufactures', 'Production with interchangeable parts made to tolerance, developed in federal armories and copied by Britain.'],
        ['Land grant', 'Federal land given to railroad companies, the largest American state subsidy of an ostensibly market-driven expansion.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'japan',
      num: '03',
      accent: 'rust',
      name: 'The Most Deliberate Industrialization of the Century',
      navLabel: 'Japan',
      dates: '1868 to 1900 &nbsp;·&nbsp; Meiji',
      thesis: `Japan is the one non-Western state that industrialized on its own terms in the nineteenth century, and it did so because a new government decided to, understood exactly what it was buying and why, and made its own population pay for it.`,
      parts: [
        {
          heading: 'The decision and the survey',
          blocks: [
            { p: `The trigger was Perry's arrival in <span class="num">1853</span> and the unequal treaties that followed, which opened ports, granted extraterritoriality to foreigners and, critically, capped Japanese tariffs, so Japan could not protect a domestic industry even if it had one. The Tokugawa regime's inability to resist discredited it, and the Meiji Restoration of <span class="num">1868</span> put in power a group of young reformers who drew the conclusion out loud: a country that does not industrialize will be treated as China was being treated.` },
            { p: `The <b>Iwakura Mission</b> of <span class="num">1871</span> to <span class="num">1873</span> is the emblem of how deliberately this was done. Roughly half the senior leadership left the country for almost two years to tour the United States and Europe, examining factories, shipyards, schools, parliaments, banks, post offices and armies, and taking notes on which model to copy for what. They came back with a policy of selective adoption: a Prussian-influenced constitution and army, a British-influenced navy, French and then German legal codes, an American-influenced school system. That is a state shopping rather than being colonized by an idea, and it is the reason the phrase "westernization" fits Japan badly.` },
            { p: `The slogan was <em>fukoku kyohei</em>, enrich the country, strengthen the military, and the two halves were understood as one project. The government abolished the domains and the samurai class's stipends and legal privileges, established compulsory education in <span class="num">1872</span> and conscription in <span class="num">1873</span>, and built <b>model factories</b> directly: silk filatures, cotton mills, shipyards, arsenals, cement and glass works, hiring expensive foreign experts to run them and train replacements.` },
            { p: `Then, in the <span class="num">1880</span>s, facing fiscal strain, the state sold most of those enterprises cheaply to well-connected private buyers, which is the origin of the <span class="kt">zaibatsu</span>, the great family conglomerates, Mitsui, Mitsubishi, Sumitomo, Yasuda, that dominated the economy afterward. So the state built the industry and private firms ran it, which is why Japan sits at the state-led end of the spectrum without being a state-owned economy.` }
          ]
        },
        {
          heading: 'Who paid',
          blocks: [
            { p: `The money came overwhelmingly from the <b>land tax reform</b> of <span class="num">1873</span>, which converted a variable tax in rice into a fixed cash tax on assessed land value, payable whether the harvest was good or bad. That gave the government a predictable revenue it could borrow against and budget from, and it transferred the risk of a bad year from the state to the farmer. Rural distress, forced sales of land and tenancy all increased, and there were peasant uprisings.` },
            { p: `The other source was silk. Japan's silk exports, produced substantially by young women working long hours in filatures for low pay, earned the foreign currency that paid for imported machinery. The Topic 5.9 chapter's account of who worked in textile mills applies here directly, and the parallel is worth drawing: in Japan as in Lancashire, the industry that earned the money ran on the labor of women and girls.` },
            { p: `And the strategic logic ran to its conclusion. An industrialized Japan defeated China in <span class="num">1895</span> and Russia in <span class="num">1905</span>, revised the unequal treaties, and acquired an empire of its own in Taiwan and Korea. Japan escaped the position section 04 describes and then placed its neighbors in it, which is the honest ending and the one Unit 6 begins from.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write Meiji Japan as a country that "westernized." The leadership adopted institutions selectively, from different countries, for stated reasons, and paired them with a deliberate program of emperor-centered nationalism, Shinto ritual and invented tradition. Nor was industrialization built from nothing: Tokugawa Japan already had high literacy, a large commercial economy, sophisticated financial instruments, urban markets and rural proto-industry, which is why the transformation was possible in forty years. And do not treat it as a cost-free success, because it was funded by a fixed land tax that pushed farmers into tenancy and by the underpaid labor of young women in silk filatures.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Fiscal restructuring as industrial policy. <em>The mechanism is that a state cannot plan or borrow against a revenue that varies with the harvest, so converting a variable tax in kind into a fixed cash tax on assessed land makes revenue predictable and creditworthy, which funds factories and railways by transferring the risk of a bad year from the treasury onto the farmer.</em>`,
        limit: `It worked and it hurt, producing forced land sales, rising tenancy and rural revolt, so a full answer names both the capability it bought and the people who paid for it.`,
        comparison: `Against <em>Egypt</em> in section 04: Muhammad Ali pursued a comparable program, state factories, conscription, foreign experts, funded by a state monopoly on cotton, a generation earlier. The programs are similar and the outcomes are opposite, and the difference is that Japan retained the power to set its own tariffs and Egypt was made to give it up by treaty in 1838.`
      },
      terms: [
        ['Meiji Restoration', 'The 1868 change of regime whose leadership treated industrialization as a condition of national survival.'],
        ['Iwakura Mission', 'The 1871 to 1873 tour of the United States and Europe by half the senior leadership, to choose what to copy.'],
        ['Fukoku kyohei', 'Enrich the country, strengthen the military: the slogan treating economic and military strength as one project.'],
        ['Zaibatsu', 'The family conglomerates that bought the state model factories cheaply in the 1880s and dominated the economy.'],
        ['Land tax reform', 'The 1873 conversion to a fixed cash tax on land value, the revenue base that paid for industrialization.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'blocked',
      num: '04',
      accent: 'oxide',
      name: 'The Tariff Is the Whole Argument',
      navLabel: 'Who was blocked',
      dates: 'c. 1813 to 1900 &nbsp;·&nbsp; India, Egypt, Latin America',
      thesis: `Every follower that industrialized protected its infant industries behind a tariff. Every region that did not industrialize was, in the relevant period, unable to set one. Sovereignty over trade policy is the variable, and it explains more of this map than resources, culture or capital.`,
      parts: [
        {
          heading: 'India: deindustrialization by tariff',
          blocks: [
            { p: `Start from where the Topic 4.5 and 4.8 chapters leave off: Indian cotton textiles were the finest and cheapest in the world, and Europe paid for them in silver because it made nothing India wanted. That is the position in <span class="num">1750</span>.` },
            { p: `What changed it was two things together, and the second is the one most answers omit. British mechanized spinning and weaving cut production costs enormously, which is genuine industrial advantage. And British policy ensured the competition ran one way: heavy duties on Indian cotton cloth entering Britain, in some periods at rates that made the trade impossible, while British cloth entered India at low duties, with the East India Company and then the crown controlling Indian tariff policy. A weaver in Bengal could not be protected because there was no Indian government able to protect him.` },
            { p: `The result is <span class="kt">deindustrialization</span>: a region that was a net exporter of manufactures becoming a net importer of them and an exporter of raw cotton, indigo, opium and jute instead. Weaving communities lost their livelihoods across the first half of the century, and India's share of world manufacturing output fell dramatically across the period while Britain's rose.` },
            { p: `Say what is being claimed and what is not. Mechanization would have undercut handloom weaving anywhere, including in Britain, where it destroyed the handloom weavers as Topic 5.3 describes. The claim is narrower and sharper: India, unlike Germany, Japan or the United States, had no ability to answer that shock with a tariff, a subsidy or a state investment program, because it did not control its own trade policy. That is the structural argument the success criteria ask for.` }
          ]
        },
        {
          heading: 'Egypt: the case that nearly worked',
          blocks: [
            { p: `Muhammad Ali, governing Egypt under nominal Ottoman authority from <span class="num">1805</span>, ran the most serious industrialization program attempted outside Europe before Japan. He established a state monopoly over agriculture, directing peasants into long-staple cotton and taking the export earnings; used that revenue to build textile mills, an arsenal, a shipyard and munitions works; imported European engineers and sent Egyptian students to France; and built a conscript army and a fleet strong enough to defeat Ottoman forces and threaten Istanbul itself.` },
            { p: `In <span class="num">1838</span> Britain and the Ottoman empire concluded the <b>Treaty of Balta Liman</b>, a commercial convention applying across Ottoman territory, which abolished state monopolies and fixed customs duties at low rates. Applied to Egypt, and enforced after British military intervention in <span class="num">1840</span> compelled Muhammad Ali to accept a settlement that also cut his army, it removed both pillars of the program at once: the monopoly that generated the revenue and the tariff protection that let Egyptian manufactures survive against British cloth. Egyptian industry declined, and Egypt became an exporter of raw cotton, which is what it remained, and then in the <span class="num">1870</span>s a debtor state whose finances were taken over by European commissioners, the case the Topic 5.7 chapter takes up.` },
            { p: `Balta Liman is worth memorizing because it is the cleanest natural experiment in the unit. Here is a state with a program, revenue, factories, engineers and an army, stopped not by any internal failure but by a treaty it could not refuse. A student who can name it can make the structural argument without hand-waving.` }
          ]
        },
        {
          heading: 'Latin America: sovereign and specialized anyway',
          blocks: [
            { p: `Latin America complicates the argument usefully, because after independence these were sovereign states that could in principle set tariffs, and mostly did not industrialize either. The mechanism here is different and worth stating separately.` },
            { p: `The Topic 5.2 chapter explains who held power: landed elites whose wealth came from exporting primary products, guano from Peru, nitrates and copper from Chile, coffee from Brazil, beef and wheat from Argentina, silver from Mexico. Their interest lay in free trade, since they sold abroad and bought cheap manufactures, and a protective tariff would have raised their costs to build somebody else's factories. So the policy that would have protected industry was against the interests of the class making the policy.` },
            { p: `On top of that sat British and later American capital, which financed the railways, ports and utilities and built them to move exports to the coast rather than to knit an internal market together, and the debt that came with it, which required export earnings to service. The result is an economy specialized by structure rather than by decree, and the Topic 5.7 chapter calls this economic imperialism, control through investment, debt and trade terms rather than through annexation.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not reduce this to a single explanation in either direction. "Colonialism prevented industrialization" is too broad, since Latin America was independent and India&rsquo;s handloom sector faced a genuine technological shock as well as a policy one. "They lacked the resources or the culture" is worse, since Egypt had capital, factories, engineers and a state program, and India had the world&rsquo;s leading textile industry. The precise claim is about <b>policy capacity</b>: industrialization required protection, state investment and directed finance, so the question to ask of any region is who controlled its tariff and whose interests its government served. Ask that, and India, Egypt and Latin America each get a different and accurate answer.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Tariff sovereignty. <em>The mechanism is that an infant industry cannot survive against an established foreign producer that is already cheaper, so it needs protection while it grows, which means the decisive question is who sets the duties, and a territory whose trade policy is written in another capital or by a treaty is barred from the one instrument every successful follower used.</em>`,
        limit: `Tariff control is necessary and not sufficient. Latin American states held it and did not use it, because the class in power exported primary products and profited from free trade.`,
        comparison: `Against <em>mercantilism</em> in Topic 4.5: European states in that period used monopolies and Navigation Acts to reserve colonial markets for their own manufacturers, and free trade in the nineteenth century did the same work by other means once Britain was the cheapest producer. The doctrine reverses and the outcome for the weaker economy is remarkably similar, which is the argument Topic 5.7 makes about free trade politics.`
      },
      terms: [
        ['Deindustrialization', 'A region shifting from exporting manufactures to importing them and exporting raw materials, as India did in this period.'],
        ['Muhammad Ali', 'The ruler of Egypt from 1805 whose state monopolies funded factories, an arsenal and an army, the most serious program outside Europe.'],
        ['Treaty of Balta Liman', 'The 1838 convention abolishing monopolies and capping Ottoman duties, which removed both pillars of Egypt\'s program.'],
        ['Primary product export', 'An economy specialized in raw materials, entrenched by elites who profited from it and by foreign-financed railways built to the coast.'],
        ['Policy capacity', 'A state\'s ability to set tariffs and direct investment, the variable that separates the followers from the blocked.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The last two are the half of this topic most answers omit, and they are worth the most.`,
    pairs: [
      {
        category: 'Comparison',
        title: 'Late industrialization is state-led because going second is a different problem',
        body: `A follower can buy the proven machine and hire the engineer who built it, skipping Britain&rsquo;s century of failed experiments, but must enter markets where British producers are already cheaper, and by 1870 the scale required, steel works and national rail networks, was beyond any partnership. So followers used the state. The Zollverein created a single German market from 1834, Prussian governments financed railways whose demand pulled the Ruhr, Bismarck&rsquo;s 1879 tariff protected iron and steel, and the Technische Hochschulen gave Germany the lead in chemicals and electricals. The United States sits nearer the market end and still granted railroads vast federal land and kept high tariffs for most of the century, so treat the two models as a spectrum and place each case on it.`
      },
      {
        category: 'Causation',
        title: 'Meiji Japan went shopping and made its farmers pay the bill',
        body: `Perry&rsquo;s arrival in 1853 and the unequal treaties, which capped Japanese tariffs, showed the leadership what happens to a state that cannot industrialize. The Iwakura Mission of 1871 to 1873 took roughly half the senior leadership abroad for two years to choose models deliberately: a Prussian-influenced army and constitution, a British-influenced navy, an American-influenced school system. The government built model factories, shipyards and arsenals and sold most of them cheaply in the 1880s, creating the zaibatsu. The money came from the 1873 land tax reform, a fixed cash tax payable regardless of harvest, which transferred the risk of a bad year onto farmers and raised tenancy and revolt, and from silk exports produced by underpaid young women.`
      },
      {
        category: 'Structure',
        title: 'Egypt is the natural experiment, and the variable is the tariff',
        body: `Muhammad Ali ran a state monopoly on agriculture, directed peasants into long-staple cotton, and used the export revenue to build textile mills, an arsenal and a shipyard, importing European engineers and sending students to France, behind a conscript army that defeated Ottoman forces. Then the 1838 Treaty of Balta Liman abolished state monopolies and capped customs duties across Ottoman territory, and British intervention in 1840 enforced it, removing the revenue mechanism and the protection at once. Egyptian industry declined into raw cotton export and, by the 1870s, into a debt administration run by European commissioners. A program with capital, factories, engineers and an army was stopped by a treaty, which is why resources and capability cannot be the explanation for who industrialized.`
      },
      {
        category: 'Comparison',
        title: 'Sovereignty was necessary and not sufficient',
        body: `India had the world&rsquo;s leading textile industry and no government able to answer mechanization with a tariff, since duties on Indian cloth entering Britain were heavy while British cloth entered India cheaply under a trade policy written in London, and the result was deindustrialization into raw cotton, indigo and jute. Latin American republics, by contrast, held tariff sovereignty and mostly did not use it, because the landed elites who governed exported guano, nitrates, coffee, beef and silver and profited from free trade, while British and American capital built railways to the coast rather than into an internal market. So ask of any region who controlled the tariff and whose interests its government served, and the two cases give different answers that are both structural.`
      }
    ]
  }
};
