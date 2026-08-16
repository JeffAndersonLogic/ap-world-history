'use strict';

/**
 * Topic 7.3, Conducting World War I: the deep reading.
 *
 * Why this exists. The success criteria ask for a definition of total war with
 * evidence that this was the first war to fit it, and for specific evidence of
 * how governments mobilized populations at home and in the colonies. "It was
 * terrible and lots of people died" is not an answer to either, and a casualty
 * figure is not a mechanism.
 *
 * The organizing argument, and the volume's spine arriving in its clearest
 * form: total war is a CAPACITY, not a mood. What made 1914 different from
 * every previous war in this course is that an industrial economy can replace
 * losses faster than battles can inflict them, so the war does not end when one
 * side is beaten in the field. It ends when a society can no longer be
 * supplied, staffed and persuaded, which is why the state reaches into
 * factories, kitchens, newspapers and colonies.
 *
 * Three things carried deliberately:
 *
 *   1. The stalemate has a mechanism and it is not stupidity. Defensive
 *      firepower outran the means of moving men across ground, and every
 *      participant spent four years trying to solve exactly that problem.
 *   2. Colonial participation is in the criteria and is routinely dropped. The
 *      numbers of Indian, African, Vietnamese and Caribbean troops and laborers
 *      are the reason Unit 8 has the shape it does.
 *   3. Women's war work is written with the reversal included, because most of
 *      the jobs were given back at the armistice, and a chapter that stops at
 *      the munitions factory teaches a change that partly did not last.
 */

module.exports = {
  topicKey: 't7-3',
  slug: 'topic-7-3-conducting-wwi',
  sourceFile: 'deep-reading-topic-7-3-conducting-wwi.html',
  lessonFile: 'lesson-7-3-conducting-wwi.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 7.3: When a War Stops Being Fought by Armies',
  eyebrow: 'Topic 7.3 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'When a War Stops Being Fought by <em>Armies</em>',
  deck: `Total war is not a war that is especially bad. It is a war an industrial economy can keep supplying long after the point at which earlier wars ended, which means the fighting continues until a whole society runs out of shells, food, workers or willingness. This chapter is the machinery of that: why the front froze, what the state took over, who was conscripted from where, and what the word "civilian" stopped protecting.`,
  meta: ['Four sections', 'Stalemate, the state, the colonies, the exit', 'Read alongside the First & 10'],
  footerNote: 'Topic 7.3 &nbsp;·&nbsp; When a War Stops Being Fought by Armies &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 defines total war and gives you the definition the success criteria ask for. Section 02 is why the front stopped moving, which is the physical fact everything else follows from. Section 03 is mobilization at home and in the colonies, with the evidence. Section 04 is how it ended and what that left behind.`,
    steps: [
      `<b>01 What total war means:</b> a definition, and the test of whether a war meets it.`,
      `<b>02 Why the front froze:</b> firepower against movement, and the four-year search for a solution.`,
      `<b>03 Mobilizing everyone:</b> the war economy, propaganda, women&rsquo;s labor, and the colonies.`,
      `<b>04 How it ended:</b> attrition, entry, collapse, and the bill left for Topic 7.5.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'totalwar',
      num: '01',
      accent: 'gold',
      name: 'What Total War Actually Means',
      navLabel: 'Total war',
      dates: '1914 to 1918 &nbsp;·&nbsp; A definition with a test',
      thesis: `The success criteria want a definition, so here is one you can use and defend: a war is total when the state mobilizes civilians, industry and government institutions for the war effort, and treats the enemy's capacity to do the same as a legitimate target. Both halves matter, and the second is what makes civilians unsafe.`,
      parts: [
        {
          heading: 'The definition, and why industrialization is the precondition',
          blocks: [
            { p: `Earlier wars in this course were fought by armies that a state paid for out of a budget, while most of the population carried on. A campaign ended when an army was beaten, a treasury emptied or a season closed. The Topic 3.1 chapter has the version of this that gunpowder produced, and it is still recognizably a war between armies.` },
            { p: `Industrialization changes the arithmetic in one specific way: a factory system can replace equipment losses at a rate that battle cannot outpace. Shells expended in a bombardment can be manufactured again the following month. That means defeating an army in the field no longer ends the war, because the enemy can equip another one, and the war continues until the capacity behind the army fails.` },
            { p: `Follow that to its conclusion and you have the whole logic of the next four years. If the enemy's ability to fight rests on its factories, its railways, its food supply and its population's willingness, then those become the things worth attacking and the things you must protect. That is the moment the category "civilian" stops being a shelter, and it is a consequence of economics rather than of cruelty.` }
          ]
        },
        {
          heading: 'Applying the test',
          blocks: [
            { p: `Run the definition against <span class="num">1914</span> to <span class="num">1918</span> and it fits on every count. <b>Civilians mobilized:</b> conscription across the major belligerents, and millions of women entering war industry. <b>Industry mobilized:</b> governments directing what factories produced, allocating raw materials, and in several cases running the railways. <b>Government institutions mobilized:</b> new ministries of munitions, food control and information, rationing, and censorship. <b>The enemy's capacity attacked:</b> the British blockade of Germany, German unrestricted submarine warfare against shipping, and the first strategic bombing of cities from airships and aircraft.` },
            { p: `That last group is the one to press on in an essay. A naval blockade designed to stop food reaching an enemy population is an attack on civilians conducted through economics, and it was effective: German civilian nutrition deteriorated badly across the war, with serious excess mortality, and the blockade continued for months after the fighting stopped, into <span class="num">1919</span>. The submarine campaign is the mirror image, and it is what eventually brought the United States in.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that World War I was the first war in which civilians suffered. Civilians have suffered in every war in this course, and the Topic 4.6 and Topic 5.2 chapters are full of it. What is new here is not suffering but <b>system</b>: civilians are mobilized by the state as part of the war effort, and are therefore treated by the other side as part of the war effort. That is a change in the logic of war rather than in its cost, and it is what the phrase "first total war" should be used to mean. Say "the first war in which the mobilization of whole societies made the whole society a military target" and you have earned the claim.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Total war as an industrial capacity. <em>The mechanism is that a factory system replaces equipment losses faster than battles inflict them, so beating an army no longer ends a war, which pushes each side to attack the capacity behind the enemy army, its factories, food supply and morale, and to mobilize its own, so the whole society becomes both an asset and a target.</em>`,
        limit: `Mobilization was never actually total. Every economy kept producing civilian goods, every state had populations it could not reach, and the degree of control varied widely between Britain, Germany, Russia and the Ottoman empire.`,
        comparison: `Against the <em>gunpowder empires</em> in Topic 3.1: there, war forced a fiscal reorganization and the state had to find money. Here it forces an industrial reorganization and the state has to find production, which reaches much further into ordinary life, because money can be taxed from a distance and factory output has to be directed on the spot.`
      },
      terms: [
        ['Total war', 'A war in which the state mobilizes civilians, industry and institutions for the effort, and the enemy\'s capacity to do so is treated as a target.'],
        ['War economy', 'An economy directed by the state toward military production, through allocation of materials, labor direction and control of prices.'],
        ['Blockade', 'The interdiction of an enemy\'s seaborne supply, an attack on a population\'s food and raw materials conducted through economics.'],
        ['Unrestricted submarine warfare', 'Sinking merchant shipping without warning, Germany\'s answer to the blockade and the policy that helped bring the United States into the war.'],
        ['Home front', 'The civilian economy and population understood as part of the war effort, a phrase that only makes sense once the definition above applies.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'stalemate',
      num: '02',
      accent: 'rust',
      name: 'Why the Front Stopped Moving',
      navLabel: 'The stalemate',
      dates: '1914 to 1918 &nbsp;·&nbsp; Firepower against movement',
      thesis: `The trenches are not evidence that the generals were fools. They are the visible result of a specific and temporary imbalance: the technology of killing at a distance had advanced far past the technology of crossing ground, and every army spent the war trying to fix that.`,
      parts: [
        {
          heading: 'The imbalance, stated as a mechanism',
          blocks: [
            { p: `Consider what a defender had by <span class="num">1914</span>. Magazine rifles accurate at long range. The <span class="kt">machine gun</span>, which lets a handful of men cover a wide frontage with continuous fire. Quick-firing artillery ranged on ground the defender has already measured. Barbed wire, which does not stop an attacker but holds them still exactly where the machine guns are pointed. Entrenchments and concrete, which let defenders survive bombardment. And railways behind the line, which move reserves to a threatened point faster than an attacker can advance on foot.` },
            { p: `Now consider what an attacker had. Men walking. That is the imbalance in one line, and it explains the shape of the war better than any account of personalities. An attack could take the first trench and sometimes the second, and then had to cross broken ground on foot, out of range of its own artillery, against reserves arriving by train. Advances stopped not because soldiers would not go on but because the means of exploiting a breakthrough did not yet exist.` },
            { p: `The <span class="num">1916</span> battles are what this produced at scale. Verdun was fought explicitly as attrition, on the reasoning that the position mattered enough to the French that they would keep feeding men into its defense. The Somme opened with a bombardment intended to cut the wire and destroy the defenders and did neither adequately, and the British suffered enormous casualties on the first day. Both battles lasted months and moved the line very little.` }
          ]
        },
        {
          heading: 'The four-year search for a way across',
          blocks: [
            { p: `Every belligerent worked on the problem and the sequence of attempted solutions is the useful thing to know. <b>More artillery</b>, on the theory that enough shells would destroy the defense, which mostly churned the ground into an obstacle and warned the defender where the attack was coming. <b>Poison gas</b>, first used on a large scale in <span class="num">1915</span>, which produced local effects, was answered by respirators within months, and depended on wind. <b>Tanks</b>, introduced by the British in <span class="num">1916</span>, which could cross wire and trench and were mechanically unreliable at first and used in numbers too small to be decisive.` },
            { p: `<b>Aircraft</b>, which began as observation and became artillery spotting, fighting and eventually bombing. And, by <span class="num">1917</span> and <span class="num">1918</span>, the answer that actually worked, which was not a machine but a method: coordinating artillery, infantry, tanks and aircraft to a timetable, with infantry trained to infiltrate past strong points rather than assault them frontally, and with fire controlled by observation from the air. Both sides arrived at versions of this, and the war of movement returned in <span class="num">1918</span>.` },
            { p: `Write it that way and the stalemate becomes an engineering problem with a solution rather than a moral failure with villains. It also sets up Topic 7.7, because the combination of tank, aircraft and radio that broke the deadlock at the end of this war is what makes the next one mobile from the start.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the casualty ratios argue against the legend',
              html: `The lions-led-by-donkeys picture, of stupid generals repeating a futile tactic for four years, has been substantially revised, and the evidence is largely in the operational records: the changing artillery techniques, the training manuals reissued between <span class="num">1916</span> and <span class="num">1918</span>, and the measurable improvement in what attacks achieved by <span class="num">1918</span>. The revision is itself contested, and some historians argue it has gone too far toward exonerating commanders who had alternatives and did not take them. Hold both: the learning curve is real and documented, and it was paid for with lives on a scale that makes "they were learning" an explanation rather than an excuse.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Defensive firepower outrunning mobility. <em>The mechanism is that machine guns, quick-firing artillery, wire and entrenchment let a small number of defenders cover ground that attacking infantry had to cross on foot, while railways moved defensive reserves faster than attackers could advance, so an attack could break into a position and never break through it.</em>`,
        limit: `It describes the Western Front best. The Eastern Front stayed far more mobile because the distances were greater and the forces thinner relative to the frontage, so do not generalize trench deadlock to the whole war.`,
        comparison: `Against <em>Topic 7.7</em> and the Second World War: the same states, and movement restored. The difference is that tanks became reliable and numerous, aircraft could support ground attack, and radio let the pieces be coordinated in real time, so the combination trialled in <span class="num">1918</span> became the standard opening move in <span class="num">1939</span>.`
      },
      terms: [
        ['Machine gun', 'The weapon that let a few defenders cover a wide frontage with continuous fire, the core of the defensive advantage.'],
        ['Attrition', 'A strategy of imposing losses the enemy cannot replace rather than seizing ground, the explicit logic of Verdun.'],
        ['Break in and breakthrough', 'The distinction that defines the deadlock: attacks could enter a defensive position and could not pass through it into open ground.'],
        ['Combined arms', 'Coordinating artillery, infantry, tanks and aircraft to one plan, the method that restored movement by 1918.'],
        ['Learning curve', 'The documented improvement in tactics and technique across the war, which revised the picture of static incompetence and is itself debated.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'mobilizing',
      num: '03',
      accent: 'iron',
      name: 'Mobilizing Everyone, Including the Colonies',
      navLabel: 'Mobilization',
      dates: '1914 to 1918 &nbsp;·&nbsp; Factories, posters, women, empires',
      thesis: `This section carries most of what the success criteria ask for, and the part usually dropped is the last one. A war fought by European states was supplied and partly fought by their empires, and the promises made to get that participation are why Unit 8 happens.`,
      parts: [
        {
          heading: 'The state takes over the economy',
          blocks: [
            { p: `Within two years every major belligerent had discovered the same thing: a market cannot allocate an economy to a war fast enough. Britain created a Ministry of Munitions after a public crisis over shell supply in <span class="num">1915</span>, and it grew into an enormous organization directing factories, labor and materials. Germany built a system of war raw materials administration and moved toward comprehensive direction of the economy under military authority. Governments set prices, rationed food, directed workers, took over railways and shipping, and borrowed on a scale that reshaped public finance.` },
            { p: `Keep hold of the consequence, because Topic 7.4 depends on it. Governments learned, under emergency conditions, that they could run an economy, and a considerable number of the people involved concluded that some of these tools should not be given back. The interwar turn toward state economic management does not begin with the Depression; it begins here, and the Depression is what makes it permanent.` }
          ]
        },
        {
          heading: 'Persuasion as a government function',
          blocks: [
            { p: `A war of this length needs consent renewed continuously, and states built institutions to produce it. Britain established official propaganda organizations and eventually a Ministry of Information; Germany, France and others did comparable things. The instruments are the evidence the criteria ask for: <b>recruitment posters</b>, <b>government-commissioned art</b>, <b>official war artists and photographers</b>, <b>newsreels</b> shown in cinemas, and censorship of letters and of the press.` },
            { p: `Two mechanisms are worth separating. Propaganda mobilized effort, by making enlistment, war work, rationing and war bonds into expressions of belonging. And it managed information, by keeping the scale of casualties and the conditions at the front out of public view, which is why soldiers' accounts of the gap between the news and the trench are such a recurring theme in the war's literature.` },
            { p: `<b>Women's war work</b> is the clearest domestic change and it needs its second half. Women entered munitions factories, transport, agriculture, clerical work and nursing in very large numbers, doing work that had been formally closed to them, and the argument that this contribution earned the vote was made loudly and did contribute to franchise extensions in several countries after the war. And most of those industrial jobs were vacated at the armistice, by law, by union agreement or by pressure, and returned to demobilized men. Write the entry and the exit together, because a change that was reversed within two years is a different historical claim from a permanent transformation.` }
          ]
        },
        {
          heading: 'The empires in the war',
          blocks: [
            { p: `This is the part the criteria name explicitly and most answers omit. The war was fought by empires, and they used them.` },
            { p: `Well over a million Indian soldiers served overseas in the British forces, in France, East Africa and above all Mesopotamia, alongside large numbers of Indian laborers. France recruited substantial forces from West and North Africa and from Indochina, both as soldiers and as workers in French factories. Britain raised the British West Indies Regiment and enormous labor corps, including a very large Chinese Labour Corps that dug, built and worked behind the Western Front. African campaigns in East and West Africa used African troops and vastly larger numbers of conscripted porters, who suffered severely.` },
            { p: `Now the consequence, which is the reason this belongs in the chapter. Participation was solicited with the language of shared sacrifice and, in places, with explicit or implied promises about political advance. Indian leaders supported the war effort with expectations of self-government in view; the reforms that came were partial and were accompanied by repressive legislation, and the gap between what had been implied and what arrived fed the mass nationalist politics of the interwar years. The Topic 7.5 chapter takes that forward and Unit 8 collects the bill.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the war graves and the pay ledgers count people the histories left out',
              html: `For a long time the standard national narratives of the war were narratives of European soldiers, and the colonial contribution was visible mainly in the archives of the organizations that had to administer it. Recruitment records, pay and pension ledgers, shipping manifests, labor corps registers and war graves documentation record names, origins, ranks and burials for people who appear in very few contemporary published accounts. Sustained work on those records has substantially revised the picture of who fought and worked in this war. It is a reminder that absence from the story is not absence from the event, and that bureaucratic records made for payroll purposes often preserve what commemorative writing left out.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Mobilization as an exchange. <em>The mechanism is that a state needing labor, soldiers and consent on this scale cannot simply command them, so it offers something, wages and status to women entering industry, political advance implied to colonial subjects, a share in a national effort to everyone, and those offers create expectations that outlive the emergency and become the politics of the next decade.</em>`,
        limit: `The exchange was unequal and frequently not honored, and much colonial recruitment, especially of laborers and porters, was coerced rather than solicited. Say which case you mean.`,
        comparison: `Against <em>Topic 7.7</em>: the Second World War repeats this at greater scale and with the lesson learned, which is why Indian nationalist leaders in <span class="num">1939</span> asked for terms in advance rather than support first and expect later. The change in bargaining behavior is itself evidence of what happened after <span class="num">1918</span>.`
      },
      terms: [
        ['Ministry of Munitions', 'The British department created after the 1915 shell crisis to direct factories, labor and materials, the model case of state economic control.'],
        ['Rationing', 'State allocation of scarce food and goods to civilians, an admission that the market could not distribute under blockade and shortage.'],
        ['Propaganda ministry', 'An official body producing posters, art, film and news management to sustain effort and control information over a long war.'],
        ['Colonial troops and labor', 'The soldiers and workers raised from empires, over a million Indian soldiers among them, whose service was solicited with expectations of political advance.'],
        ['Chinese Labour Corps', 'The large body of Chinese workers recruited to labor behind the Western Front, one of the war\'s least-remembered contributions.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'ending',
      num: '04',
      accent: 'oxide',
      name: 'How It Ended, and What It Left',
      navLabel: 'The ending',
      dates: '1917 to 1919 &nbsp;·&nbsp; Exit, entry, collapse',
      thesis: `The war ended the way the definition in section 01 predicts. Not with a decisive battle, but when one coalition's capacity to supply, staff and sustain itself failed before the other's, and the timing turns on two events in <span class="num">1917</span> that changed the arithmetic.`,
      parts: [
        {
          heading: 'The two events of 1917',
          blocks: [
            { p: `<b>Russia left.</b> The revolutions of Topic 7.1 took Russia out of the war, confirmed by the Treaty of Brest-Litovsk in March <span class="num">1918</span>, which released German divisions for the Western Front. That is why Germany attacked hard in spring <span class="num">1918</span>: a window had opened and everyone knew it would close.` },
            { p: `<b>The United States entered.</b> German unrestricted submarine warfare, resumed in <span class="num">1917</span> in the hope of starving Britain before America could matter, plus the Zimmermann telegram proposing a German alliance with Mexico, brought the United States in that April. The immediate military effect was limited because the American army had to be raised and shipped; the effect on the arithmetic was immediate and decisive, because it added an industrial economy of enormous capacity, and credit, to one side.` },
            { p: `Put the two together and you have the German calculation for <span class="num">1918</span>: win in the west before American strength arrives. The spring offensives used the new infiltration tactics, advanced further than anything since <span class="num">1914</span>, and could not be sustained, and from August the Allied counteroffensives, with tanks, aircraft and coordinated artillery, pushed steadily forward.` }
          ]
        },
        {
          heading: 'Capacity failing, and the shape of the ending',
          blocks: [
            { p: `What ended the war was not the capture of Berlin. It was the failure of the Central Powers' capacity, in exactly the terms of section 01: Germany's allies collapsed in sequence through autumn <span class="num">1918</span>, the blockade had degraded food supply and civilian health badly, an influenza pandemic was spreading through exhausted populations worldwide, naval crews mutinied at Kiel, and revolution spread through German cities. The Kaiser abdicated and a new German government signed an armistice on 11 November <span class="num">1918</span>.` },
            { p: `Note the sequencing, because it matters enormously for Topic 7.6. The armistice was signed when German armies still stood on foreign soil and no Allied army had entered Germany. That fact, entirely explicable in terms of collapsing capacity, was later exploited by the claim that the army had been betrayed at home rather than defeated, which became a foundation of Nazi politics. A war that ends through the failure of a home front is a war whose ending can be denied.` },
            { p: `The costs are enormous and the figures are estimates rather than counts, so use ranges. Military deaths are usually put at somewhere around nine to ten million, with civilian deaths of a comparable order once famine, disease and displacement are included, and the <span class="num">1918</span> to <span class="num">1919</span> influenza pandemic killed a further number that modern estimates place in the tens of millions worldwide. Attach any figure you use to what kind of number it is, exactly as the Topic 4.3 chapter teaches.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the armistice was a surrender or that it ended the war formally. An armistice is a ceasefire. The peace was made separately at the Paris conference in <span class="num">1919</span>, and the Treaty of Versailles with Germany was one of several treaties dealing with the different defeated powers. In the interval the blockade continued, which is a detail worth knowing because it shaped German opinion of the settlement before a word of it was signed. Getting the difference between a ceasefire and a peace treaty right also makes Topic 7.5 legible, because the arguments at Paris happen after the shooting stops and are conducted under the pressure of that fact.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Capacity failure as the ending condition of a total war. <em>The mechanism is that when armies can be re-equipped faster than they can be destroyed, victory comes to whichever coalition can still supply food, materials, manpower and consent when the other cannot, so the decisive events are a blockade, an ally leaving, an industrial power joining, and mutiny at home rather than a battle.</em>`,
        limit: `Capacity is not the whole story. The Allied offensives of late <span class="num">1918</span> were genuine military successes using new methods, so avoid writing that Germany simply collapsed on its own.`,
        comparison: `Against <em>Topic 7.1</em>: three empires that could not carry the fiscal weight of an industrial army are three of the states that came apart under the weight of an industrial war. The Ottoman, Russian, Austro-Hungarian and German empires all ended in or immediately after this war, which is the single largest political consequence in the unit.`
      },
      terms: [
        ['Brest-Litovsk', 'The March 1918 treaty ending Russia\'s war, which released German divisions west and set the clock for the spring offensives.'],
        ['Zimmermann telegram', 'The intercepted German proposal of an alliance with Mexico, which with submarine warfare brought the United States into the war in 1917.'],
        ['Spring Offensives', 'Germany\'s 1918 attempt to win in the west before American strength arrived, which advanced far and could not be sustained.'],
        ['Armistice', 'The ceasefire of 11 November 1918, not a surrender and not the peace, which was negotiated separately at Paris in 1919.'],
        ['Stab-in-the-back myth', 'The false claim that an undefeated German army was betrayed at home, made possible because the armistice came before any invasion of Germany.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full explanation: the claim, the specific evidence, and the reason. The first is the definition the success criteria ask for, and the third is the half of the answer most students leave out.`,
    pairs: [
      {
        category: 'Definition',
        title: 'Total war is a capacity, not a level of suffering',
        body: `A war is total when the state mobilizes civilians, industry and government institutions for the effort, and treats the enemy's capacity to do the same as a target. Industrialization is the precondition: a factory system replaces losses faster than battle inflicts them, so beating an army no longer ends a war and the fighting continues until the capacity behind it fails. Test 1914 to 1918 against that and it fits on every count: conscription and women entering war industry, governments directing factories and railways, new ministries of munitions, food and information with rationing and censorship, and attacks on capacity itself through the British blockade, German unrestricted submarine warfare and the first bombing of cities. Civilians had suffered in every earlier war; what is new is that mobilizing them made them targets.`
      },
      {
        category: 'Mechanism',
        title: 'The trenches are an engineering problem, not a failure of nerve',
        body: `By 1914 a defender had magazine rifles, machine guns covering wide frontages, quick-firing artillery ranged on measured ground, barbed wire that held attackers still where the guns pointed, concrete and entrenchment to survive bombardment, and railways to bring reserves faster than infantry could walk. An attacker had men on foot. So attacks could break into a position and not through it, which is why Verdun and the Somme lasted months and moved the line very little. Every army worked the problem: more artillery, gas in 1915, tanks in 1916, aircraft for spotting and then attack, and by 1917 to 1918 the answer that worked, which was combined arms coordinated to a timetable with infiltration tactics. Movement returned in 1918.`
      },
      {
        category: 'Evidence',
        title: 'The war was fought by empires, and they were paid in promises',
        body: `Over a million Indian soldiers served overseas alongside large Indian labor forces, France recruited from West and North Africa and Indochina as soldiers and as factory workers, Britain raised the British West Indies Regiment and a very large Chinese Labour Corps behind the Western Front, and the African campaigns consumed vastly more conscripted porters than soldiers. Participation was solicited with the language of shared sacrifice and, in places, implied political advance. Indian leaders backed the effort with self-government in view, and what arrived was partial reform alongside repressive legislation. That gap is the seed of interwar mass nationalism, which is why Topic 7.5 and Unit 8 follow from this paragraph rather than starting fresh.`
      },
      {
        category: 'Consequence',
        title: 'A war that ends in collapse at home is a war whose ending can be denied',
        body: `The Central Powers lost when their capacity failed: allies collapsing through autumn 1918, blockade-degraded food supply and civilian health, influenza spreading through exhausted populations, naval mutiny at Kiel and revolution in German cities, alongside genuine Allied military success using the new combined-arms methods. The armistice of 11 November 1918 was a ceasefire, not a surrender and not the peace, which was negotiated at Paris in 1919 while the blockade continued. Crucially, German armies still stood on foreign soil and no Allied army had entered Germany, which let the stab-in-the-back myth claim an undefeated army had been betrayed at home. Topic 7.6 is what that myth was used to build.`
      }
    ]
  }
};
