'use strict';

/**
 * Topic 6.3, Indigenous Responses to State Expansion: the deep reading.
 *
 * Why this exists. The success criteria name Yaa Asantewaa, the Indian Rebellion
 * of 1857 and Samory Toure, and then ask for a meaningful regional difference,
 * limitation or counterexample. That last clause is the hard one, and it is
 * where most answers collapse into "some resisted and some cooperated".
 *
 * So the chapter is built as a taxonomy first and cases second. Section 01 gives
 * five distinct kinds of response and the variable that selects between them,
 * which is what political and military resources a people actually had. Once a
 * student has that, the qualification the criteria ask for writes itself,
 * because the cases stop being a list and become instances of a variable.
 *
 * Four things carried deliberately:
 *
 *   1. A trigger is not a cause. The greased cartridge is the most memorable
 *      fact about 1857 and explains none of it, and separating the two is the
 *      single most transferable analytical move in the topic.
 *   2. A defeated rebellion still changes the state that defeats it. 1857
 *      abolished the East India Company and rebuilt the Indian Army and the
 *      whole logic of British rule, which is why "it failed" is not an answer.
 *   3. The cattle killing is not credulity. Lungsickness had already destroyed
 *      the herds, and Peires's reading of it as a response within a millennial
 *      framework is what makes it teachable rather than merely tragic.
 *   4. Adwa is the counterexample the criteria want, and it works because the
 *      three conditions behind it, central authority, revenue and diplomatic
 *      room to buy weapons, explain the other cases by their absence.
 */

module.exports = {
  topicKey: 't6-3',
  slug: 'topic-6-3-indigenous-responses-to-state-expansion',
  sourceFile: 'deep-reading-topic-6-3-indigenous-responses-to-state-expansion.html',
  lessonFile: 'lesson-6-3-indigenous-responses-to-state-expansion.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 6.3: Five Kinds of No',
  eyebrow: 'Topic 6.3 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Five Kinds of <em>No</em>',
  deck: `Nobody in this topic was deciding whether to resist. They were deciding what to do with the resources they actually had: an army or no army, a treasury or no treasury, a coastline where rifles could be bought or an interior where they could not, a state that could be rebuilt or a village that could only be abandoned. This chapter sorts the responses by that variable rather than by outcome, because sorting them by outcome tells you only who lost.`,
  meta: ['Five sections', 'A taxonomy, then four cases and a counterexample', 'Read alongside the First & 10'],
  footerNote: 'Topic 6.3 &nbsp;·&nbsp; Five Kinds of No &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the analytical frame and everything after it is a case fitted into that frame. The success criteria ask you to qualify your argument with a meaningful regional difference or counterexample, and section 05 is written to be exactly that, so read it as part of the argument rather than as an appendix.`,
    steps: [
      `<b>01 The taxonomy:</b> five kinds of response, and the variable that decides which one a people could use.`,
      `<b>02 India in 1857:</b> the difference between a trigger and a cause, and what a failed rebellion did to its ruler.`,
      `<b>03 Asante and Samory:</b> sovereignty held in an object, and resistance that industrialized to survive.`,
      `<b>04 Nongqawuse and the Mahdi:</b> two prophetic movements, one catastrophic and one that built a state.`,
      `<b>05 Adwa:</b> the case that won, and the three conditions that explain every case that did not.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'taxonomy',
      num: '01',
      accent: 'gold',
      name: 'Five Kinds of Response, and What Selects Between Them',
      navLabel: 'The taxonomy',
      dates: 'c. 1750 to 1900 &nbsp;·&nbsp; The frame for everything that follows',
      thesis: `"Resistance" is one word covering at least five different political strategies, and treating them as a single thing is what produces the answer that says some peoples fought and others did not. What decided which strategy was available was not courage or culture. It was whether a people had a standing army, a treasury, a route to buy modern weapons, and a state that could be rebuilt under pressure.`,
      parts: [
        {
          heading: 'The five',
          blocks: [
            { p: `<b>1. Direct armed resistance by an existing state.</b> A kingdom with an army and a revenue system fights, and the fight looks like a war between states. Asante, the Sokoto Caliphate, the Zulu kingdom at Isandlwana in <span class="num">1879</span>, Ethiopia, Vietnam under the Can Vuong movement, and the Boxer campaigns in China in <span class="num">1899</span> and <span class="num">1900</span> all belong here.` },
            { p: `<b>2. Rebellion inside a structure the outsider already controls.</b> Where conquest has already happened, the available action is a rising within the colonial system, using the institutions it created, above all its own army. India in <span class="num">1857</span> is the largest example in the century.` },
            { p: `<b>3. Modernizing resistance, which builds the enemy's capability in order to fight him.</b> Buying or manufacturing breech-loading rifles, drilling a standing army, centralizing taxation, negotiating with rival European powers. Samory Toure, Menelik II and the Meiji state in Topic 6.2 are all doing versions of this, and it is the strategy with the best record.` },
            { p: `<b>4. Religious and prophetic movements.</b> When a political and military answer has already failed, a movement offering restoration through ritual, purification or divine intervention supplies both an explanation of the catastrophe and a program. The Xhosa cattle killing, the Mahdiyya in Sudan, the Ghost Dance in the American West, and the Boxers again all sit here, and they range from the self-destructive to the state-founding.` },
            { p: `<b>5. Indirect and everyday resistance.</b> Migration out of reach of a tax collector, refusal to grow a required crop, desertion, litigation in colonial courts, evasion of labor recruiters, market withdrawal, strikes, and the maintenance of language, religion and law under a state trying to replace them. It leaves the thinnest documentary trace and it is by an enormous margin the most common, which is a difficult combination for a discipline that works from written records.` }
          ]
        },
        {
          heading: 'What the frame is for',
          blocks: [
            { p: `The point of sorting responses this way is that it makes variation explicable instead of merely observable. Ask of any case what political resources were on hand, and the strategy follows: a centralized kingdom with a treasury fights a war, a conquered population with a colonial army rebels within it, a dispossessed community with neither turns to prophecy or to evasion.` },
            { p: `It also disciplines how you use outcomes. Nearly all of these were defeated militarily, and a chapter organized around that fact would be a list of losses. But a rebellion can fail and still transform the state that suppresses it, as section 02 shows; a defeated leader can become the founding figure of a national movement two generations later, as Yaa Asantewaa and Samory both did; and everyday resistance succeeded constantly, in small increments that never appear in a treaty. Military outcome and historical significance are different measurements and should not be reported as one.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not organize an answer as "traditional societies resisted and modern ones adapted", or any version of that pairing. It fails immediately on the evidence in this chapter. Samory Toure ran arsenals that repaired and copied French breech-loaders; Menelik imported artillery and played European suppliers against each other; the Mahdist state collected taxes, minted currency and fielded a large regular army; the sepoys of 1857 were professional soldiers of a modern army. Meanwhile the states that collapsed fastest were often those whose rulers had cooperated earliest. The variable that actually predicts the outcome is not tradition against modernity, it is <b>central authority plus revenue plus access to current weapons</b>, and a student who writes that has an argument that survives every case in the topic.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Resources select the strategy. <em>The mechanism is that a people&rsquo;s response to state expansion is set by what political instruments they can still reach, so a kingdom with an army and a treasury fights a war, a population already conquered rebels inside the colonial army, and a community stripped of both turns to prophecy or to evasion, which means variation in response is evidence about circumstance rather than about character.</em>`,
        limit: `The categories overlap constantly. The Mahdiyya was prophetic and state-building at once, the Boxers were a religious movement that the Qing court tried to convert into direct state resistance, and most large risings contain several of the five.`,
        comparison: `Against the <em>peasant revolts</em> of Topic 1.6 and the Taiping in Topic 5.7: those, too, are best sorted by what instruments were available rather than by grievance, since grievance was near universal and organization was not. The same frame travels, which is a reason to learn it rather than the cases.`
      },
      terms: [
        ['Direct resistance', 'Armed opposition by an existing state with its own army and revenue, fought as a war between states.'],
        ['Modernizing resistance', 'Acquiring the opponent\'s weapons, drill and fiscal methods in order to fight him, the strategy with the best record.'],
        ['Millenarian movement', 'A prophetic program promising restoration through ritual or divine action, common where political options had already closed.'],
        ['Everyday resistance', 'Evasion, migration, desertion, litigation and refusal, the most common form and the least documented.'],
        ['Trigger and cause', 'The distinction between the incident that starts a rising and the conditions that made one available.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'india',
      num: '02',
      accent: 'iron',
      name: 'The Cartridge Is the Trigger, and It Is Not the Cause',
      navLabel: '1857',
      dates: 'May 1857 to 1858 &nbsp;·&nbsp; Meerut, Delhi, and the end of the Company',
      thesis: `The <span class="kt">Indian Rebellion of 1857</span> began over rifle cartridges and was about annexation, land revenue and a decade of the East India Company treating Indian rulers as removable. It was defeated, and it destroyed the form of government that defeated it, which is why a student who writes "it failed" has stopped one sentence too early.`,
      parts: [
        {
          heading: 'What had been building',
          blocks: [
            { p: `Four pressures ran together through the <span class="num">1840</span>s and <span class="num">1850</span>s. The <b>Doctrine of Lapse</b>, applied under Dalhousie, let the Company annex a princely state whose ruler died without a natural heir, refusing the adoption that Hindu law recognized; several states went that way. The annexation of <b>Awadh</b> in <span class="num">1856</span>, on the grounds of misgovernment rather than succession, was the decisive one, because Awadh was where a very large share of the Bengal Army's high-caste sepoys came from, and it stripped their home region's court, its patronage and its status in a single act.` },
            { p: `Land revenue settlements had been squeezing cultivators and, in many districts, transferring land from customary holders to moneylenders through court-enforced debt. The General Service Enlistment Act of <span class="num">1856</span> required new recruits to serve overseas, which for high-caste Hindu soldiers carried religious consequences their fathers had not faced. And missionary activity, together with legal reforms touching religious practice, fed a widespread and not unreasonable belief that conversion was a state objective.` },
            { p: `Then the cartridge. The new Enfield rifle required a paper cartridge that had to be bitten before loading, and it was greased; the rumor, which the Company handled with a slowness that made it worse, was that the grease was beef and pork fat, offensive to Hindu and Muslim soldiers respectively. At <b>Meerut</b> in May <span class="num">1857</span>, sepoys who had refused the cartridges were publicly humiliated and imprisoned, their comrades broke into revolt, and the rising moved on Delhi, where the last Mughal emperor Bahadur Shah Zafar was proclaimed its figurehead.` },
            { p: `That sequence is the analytical point of the section. The cartridge is a trigger: it supplies the moment and the immediate grievance and it explains nothing about why an army of professional soldiers was ready to mutiny, why civilian populations across the Gangetic plain joined, or why dispossessed rulers and landholders supplied leadership. Causes are conditions that had been accumulating for a decade. Triggers are the thing that happens on a Tuesday.` }
          ]
        },
        {
          heading: 'What it changed by losing',
          blocks: [
            { p: `The rebellion was not general. Large parts of India remained quiet, the Punjab and much of the south did not rise, Sikh and Gurkha troops fought for the Company, and many princes stayed loyal, which is a substantial part of why it was suppressed. The suppression was severe, with reprisals against civilian populations and mass executions, and the fighting and its aftermath killed on a scale that dwarfs the battles themselves.` },
            { p: `Then the outcomes, and they are the reason this case belongs at the center of the topic. The <b>East India Company was abolished</b> in <span class="num">1858</span> and India passed to direct Crown rule under a Secretary of State and a Viceroy, ending the extraordinary arrangement by which a chartered trading company had governed a subcontinent. The Queen's Proclamation of November <span class="num">1858</span> promised no further annexations and non-interference in religion, and the princely states, roughly a third of the territory, were preserved for the rest of British rule as a deliberate bulwark.` },
            { p: `The army was rebuilt around the fear the rebellion had produced: a much higher proportion of European troops, artillery reserved almost entirely to Europeans, and recruitment shifted toward the groups that had stayed loyal, which was then rationalized into the doctrine of <b>martial races</b>, a classification with no basis in evidence that shaped Indian recruitment into the twentieth century. Communal and caste categories were more sharply codified in census and administration, on the reasoning that a divided population was a safer one.` },
            { p: `So the accurate summary is that the rebellion failed comprehensively in its immediate aims and reorganized the British Indian state from the top down, and that much of the machinery Indian nationalists confronted in Topics 6.5 and 8.4 was built in response to it. That is what a defeated rebellion can do.` }
          ]
        }
      ],
      useThis: {
        tool: `Distinguishing a trigger from a cause. <em>The mechanism is that a trigger supplies the moment and needs only to be a grievance people already believe, while causes are the accumulated conditions that made a rising possible at all, so the greased cartridge explains why May 1857 and annexation, land revenue and the destruction of Awadh explain why a professional army and a civilian population were ready to act on it.</em>`,
        limit: `It was regionally concentrated and far from universal: the Punjab and most of the south did not rise, Sikh and Gurkha regiments fought for the Company, and many princes stayed loyal, which is why "the first war of independence" is a later political reading rather than a description of 1857.`,
        comparison: `Against the <em>Haitian Revolution</em> in Topic 5.4: both begin inside an institution the colonial power built, an army in one case and a plantation labor force in the other, and they diverge on whether the rebels could hold territory and command a coastline. That difference, not commitment, is what separates a revolution from a suppressed rebellion.`
      },
      terms: [
        ['Doctrine of Lapse', 'The Company policy of annexing princely states whose rulers died without a natural heir, refusing recognized adoption.'],
        ['Annexation of Awadh', 'The 1856 seizure that removed a court, its patronage and the status of the region supplying many Bengal Army sepoys.'],
        ['Sepoy', 'An Indian soldier in Company service, a professional of a modern army rather than a traditional levy.'],
        ['Government of India Act 1858', 'The law abolishing the East India Company and transferring India to direct Crown rule.'],
        ['Martial races', 'The post-1857 recruitment doctrine favoring groups that had stayed loyal, rationalized as an inherent quality.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'westafrica',
      num: '03',
      accent: 'rust',
      name: 'A Stool Nobody May Sit On, and an Empire With Its Own Gunsmiths',
      navLabel: 'Asante and Samory',
      dates: '1878 to 1902 &nbsp;·&nbsp; Yaa Asantewaa, Kumasi, and the Wassoulou state',
      thesis: `West Africa supplies the two clearest cases in the unit of resistance built on things the invader could not see. In Asante the thing was a constitutional object; in Samory Toure's state it was a workshop that could repair and copy the rifle that was supposed to make him defeatable.`,
      parts: [
        {
          heading: 'The Golden Stool, and a governor who did not understand what he was asking',
          blocks: [
            { p: `The <b>Golden Stool</b>, Sika Dwa Kofi, is not a throne and its importance is not that it is valuable. In Asante understanding it holds the soul of the nation, it was never sat upon by anyone, including the Asantehene, and it appeared in public rarely and on its own side-throne. Sovereignty in Asante was not located in a person who could be removed; it was located in an object that could be hidden.` },
            { p: `Britain had already exiled the Asantehene Prempeh I in <span class="num">1896</span> and expected the kingdom to be finished. In March <span class="num">1900</span> the governor of the Gold Coast, Frederick Hodgson, came to Kumasi, demanded the Stool be produced, and announced that he would sit upon it as the representative of the Queen. He appears to have believed he was demanding a throne. What he had actually demanded was the extinction of the Asante nation, in public, at a meeting of its chiefs.` },
            { p: `<b>Yaa Asantewaa</b>, Queen Mother of Ejisu, is recorded in Asante tradition as answering that if the men would not fight, the women would. The rising that followed besieged the British in the Kumasi fort for months and was broken only by a large relief force. Asante was annexed in <span class="num">1902</span> and Yaa Asantewaa was exiled to the Seychelles, where she died in <span class="num">1921</span>. The Stool was never surrendered: it had been hidden, and it was found by accident by road workers about two decades later, after which it was recovered by the Asante rather than by the British.` },
            { p: `The mechanism worth writing about is that a political system can locate its sovereignty in something an occupying power cannot capture, and that doing so keeps the nation legally alive through military defeat. It is also a lesson about imperial knowledge: the British had ruled the coast for generations and their senior official did not know what the central institution of the neighboring kingdom was.` }
          ]
        },
        {
          heading: 'Samory Toure: resistance that industrialized',
          blocks: [
            { p: `<b>Samory Toure</b> built the Wassoulou state across what is now Guinea, Mali and Cote d'Ivoire from the late <span class="num">1870</span>s, and fought the French for about sixteen years, from their first clashes in the early <span class="num">1880</span>s to his capture in <span class="num">1898</span>, which is longer than the entire partition of West Africa took.` },
            { p: `He did it with a program that looks like a state-building exercise rather than a defense. He raised a standing professional army, the sofas, paid and drilled rather than levied. He financed it with gold and with trade, buying breech-loading rifles through the coastal trade with Sierra Leone and Liberia, deliberately using European rivals as suppliers against each other. Most strikingly, he had his blacksmiths, working from a tradition of iron-working already present in the region, learn to repair the imported rifles and then to make serviceable copies and cartridges, which meant that cutting his supply lines no longer disarmed him.` },
            { p: `Militarily he refused the set-piece battle that had destroyed other African armies against artillery and machine guns, and fought a mobile war, withdrawing eastward and rebuilding his state as he went, at very heavy cost to the populations in his path. He was finally captured in <span class="num">1898</span>, when the surrounding territories had all been taken and there was nowhere further east to go, and he was exiled to Gabon, where he died in <span class="num">1900</span>.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: two archives that disagree, and both are needed',
              html: `For both cases the written record is overwhelmingly French and British: military dispatches, colonial office correspondence, intelligence reports and later administrators' memoirs. It is detailed about troop movements and useless about motive, because it was compiled by men who assumed they were fighting fanaticism and had no reason to record an opponent's political reasoning. What survives on the other side is oral: Asante tradition preserving Yaa Asantewaa's words and the meaning of the Stool, and Mande griot traditions on Samory, both recorded systematically only in the twentieth century. Neither archive can be used alone. The colonial record supplies chronology and cannot supply meaning; the oral record supplies meaning and has passed through generations with their own political uses for it, including postcolonial states that made both figures national heroes. Where they agree on a fact, that fact is unusually secure, and where they diverge, the divergence is itself evidence about what each side thought the war was about.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Locating sovereignty where it cannot be seized. <em>The mechanism is that when legitimacy rests in an object or an idea rather than in a removable ruler, defeating the army and exiling the king does not dissolve the polity, so the Asante nation survived the exile of Prempeh I in 1896 and the annexation of 1902 because the Golden Stool was hidden rather than surrendered.</em>`,
        limit: `Both were defeated, and Samory&rsquo;s mobile war was devastating to the populations across which he retreated, which is part of why French accounts found local collaborators and why his memory was contested long before it was national.`,
        comparison: `Against <em>Meiji Japan</em> in Topic 6.2: Samory did at the scale of a regional state what Japan did at the scale of a nation, buying, copying and manufacturing modern weapons to avoid being conquered. The difference in outcome is not strategy, it is that Japan had a coastline, a customs revenue and no adjacent great power already inside its territory, which is what section 05 is about.`
      },
      terms: [
        ['Golden Stool', 'Sika Dwa Kofi, the object holding the soul of the Asante nation, never sat upon and never surrendered.'],
        ['Yaa Asantewaa', 'Queen Mother of Ejisu who led the 1900 rising after the governor demanded to sit on the Stool, and was exiled to the Seychelles.'],
        ['Samory Toure', 'Builder of the Wassoulou state, who fought France for about sixteen years with a paid standing army and his own gunsmiths.'],
        ['Sofa', 'A professional soldier of Samory\'s standing army, paid and drilled rather than levied.'],
        ['Mobile defense', 'Refusing set-piece battle against artillery and rebuilding the state while withdrawing, at heavy cost to civilians.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'prophecy',
      num: '04',
      accent: 'oxide',
      name: 'When the Political Options Have Already Closed',
      navLabel: 'Prophecy',
      dates: '1856 to 1898 &nbsp;·&nbsp; Nongqawuse and the Mahdiyya',
      thesis: `Prophetic movements arise where the ordinary instruments of politics have already been taken away, and they are not one thing. The Xhosa cattle killing destroyed the society that undertook it; the Mahdiyya founded a state that governed Sudan for thirteen years. What separates them is whether the movement had a military and fiscal program attached to the vision.`,
      parts: [
        {
          heading: 'The cattle killing, and why it was not credulity',
          blocks: [
            { p: `The Xhosa on the eastern Cape frontier had fought a series of wars against colonial expansion across seventy years and lost land in each one, most recently in the war of <span class="num">1850</span> to <span class="num">1853</span>. Then, in <span class="num">1853</span> and <span class="num">1854</span>, <b>bovine pleuropneumonia</b>, lungsickness, arrived with imported cattle and began destroying the herds. In a society where cattle were wealth, marriage payment, ritual center and the basis of the social order, this was not an agricultural setback, it was the dissolution of the world.` },
            { p: `In <span class="num">1856</span> a teenage girl, <b>Nongqawuse</b>, reported a vision at a pool: the ancestors would return, drive out the settlers and restore new and healthy cattle and full granaries, on the condition that the people first destroyed all their cattle and their grain and planted nothing. Over roughly a year, a large part of the Xhosa nation did so. The ancestors did not come. The resulting famine killed on the order of tens of thousands of people, the surviving population of British Kaffraria fell by a very large fraction, survivors were driven into the colonial labor market to keep from starving, and the emptied land was opened to white settlement.` },
            { p: `The reading that makes this teachable, associated above all with the historian Jeff Peires, is that the prophecy is not evidence of a people who would believe anything. Lungsickness was already killing the herds, was understood as a contamination, and the destruction of infected cattle was in one sense a recognizable response to it; the prophecy gave a catastrophe already underway a meaning, a cause and a program, and it did so within a Xhosa cosmology in which the ancestors were the real source of prosperity, and after every political and military option had already been tried and failed. It was not irrational so much as a rational act inside a framework whose premise turned out to be false, and the colonial administration, which did nothing to discourage it, benefited enormously and was suspected at the time of worse.` }
          ]
        },
        {
          heading: 'The Mahdiyya, and what a vision plus a treasury can do',
          blocks: [
            { p: `In Sudan, ruled harshly by an Egyptian administration whose taxes and slave-trade suppression campaigns had alienated almost everyone, <b>Muhammad Ahmad</b> declared himself the <span class="kt">Mahdi</span> in <span class="num">1881</span>, the guided one of Islamic expectation who would restore justice. That claim carried an obligation on believers to follow him, which is a mobilizing instrument no secular leader in the region possessed.` },
            { p: `What distinguishes the movement from the cattle killing is everything that came after the vision. It destroyed successive Egyptian columns, captured Khartoum in January <span class="num">1885</span>, killing the British-appointed governor Charles Gordon, and then, after the Mahdi's death from illness months later, was consolidated by his successor the Khalifa Abdallahi into a functioning state: a treasury, taxation, a standing army, a capital at Omdurman, courts and a coinage. It held Sudan against Egypt, Ethiopia and Britain for thirteen years, and it fell at Omdurman in <span class="num">1898</span> to the technological asymmetry described in Topic 6.2, not to any internal collapse.` },
            { p: `Set the two side by side and the lesson is precise. Both were religious movements arising where politics had failed, both promised restoration, and both were profoundly serious. One converted the vision into a state with revenue and an army, and lasted thirteen years against three empires. The other required its followers to destroy the material basis of their own survival as the price of the miracle. The variable is not sincerity or sophistication, it is whether the movement built the ordinary machinery of power on top of the extraordinary claim.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not present prophetic movements as the response of peoples who did not understand what was happening to them, or as evidence of a pre-modern mentality confronting a modern world. Every case here follows the exhaustion of military and diplomatic options rather than preceding it: the Xhosa had fought and lost repeatedly before 1856, the Sudanese had experienced Egyptian administration in detail before 1881, the Ghost Dance spread after the destruction of the buffalo and the confinement of the plains nations. And the movements were frequently the most effectively organized force in the region: the Mahdist state out-administered the Egyptian one it replaced. The formulation to use is that religious movements supplied <b>mobilization and legitimacy where no political institution could</b>, and that their outcomes then depended on whether they acquired a fiscal and military structure, which is an argument about capacity rather than about belief.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Prophecy as an organizing technology. <em>The mechanism is that a religious claim can create obligation and unity across communities that no existing political authority commands, which is why such movements appear after political options are exhausted rather than instead of them, and whether the movement then survives depends on whether it builds taxation and an army on top of the claim, as the Mahdiyya did and the cattle killing could not.</em>`,
        limit: `The Mahdist state was also a harsh one, expansionist against Ethiopia and internally coercive, so treating it as simply an anticolonial success mistakes the nature of what was built.`,
        comparison: `Against the <em>Taiping</em> in Topic 5.7: a religious movement that likewise built a state, held enormous territory for over a decade, and was destroyed at a cost in life beyond almost any war of the century. Both show that the interesting question about a millenarian rising is not what it believed but what administration it managed to construct while believing it.`
      },
      terms: [
        ['Lungsickness', 'The bovine pleuropneumonia epidemic of 1853 and after that destroyed Xhosa herds and preceded the prophecy.'],
        ['Nongqawuse', 'The young prophet whose 1856 vision required destroying cattle and grain in return for restoration.'],
        ['Cattle killing', 'The 1856 to 1857 destruction that caused mass famine, collapsed Xhosa independence and opened land to settlement.'],
        ['Mahdi', 'The guided one of Islamic expectation, claimed by Muhammad Ahmad in 1881, an obligation-creating title no secular leader held.'],
        ['Mahdist state', 'The Sudanese state with treasury, army, courts and coinage that held territory from 1885 until Omdurman in 1898.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'adwa',
      num: '05',
      accent: 'gold',
      name: 'The One That Won, and What It Explains',
      navLabel: 'Adwa',
      dates: '1 March 1896 &nbsp;·&nbsp; Menelik II, and the three conditions',
      thesis: `Ethiopia defeated an invading European army decisively and kept its independence, and it did so with three things almost nobody else in this chapter had at once: a centralized monarchy, a revenue base, and the diplomatic room to buy modern weapons from the rivals of the state attacking it. Written that way, Adwa stops being an exception and becomes the explanation of every other case.`,
      parts: [
        {
          heading: 'How it happened',
          blocks: [
            { p: `Menelik II spent the years before the war doing what Samory did and at greater scale. He centralized authority over regional lords, expanded southward to widen his revenue and manpower base, and imported very large quantities of modern rifles and artillery, buying from France and Russia, both of whom were happy to arm a state that would embarrass Italy. He also used the ambiguity of the <b>Treaty of Wuchale</b> of <span class="num">1889</span>, whose Amharic and Italian texts differed on whether Ethiopia had accepted an Italian protectorate, to buy time and then to repudiate it.` },
            { p: `At <b>Adwa</b> on 1 March <span class="num">1896</span>, an Italian force advancing in separate columns over ground it had mapped badly met an Ethiopian army several times its size, well armed and fighting in its own mountains, and was destroyed. Italy recognized Ethiopian independence in the treaty that followed. The effect on colonized peoples elsewhere was immediate and lasting, and Ethiopia became a reference point for Black nationalist and anticolonial movements for the next half century.` },
            { p: `Now use it as the analytical key. Every condition behind Adwa is a condition whose absence explains a defeat elsewhere. <b>Central authority</b>: Menelik commanded regional lords who might otherwise have bargained separately, which is exactly what fragmented resistance in the Niger basin and southern Africa. <b>Revenue</b>: he could pay for tens of thousands of rifles, where most polities could afford a fraction. <b>Diplomatic room</b>: he had suppliers because his enemy had rivals, which is what Samory also exploited and what the Asante, facing a British monopoly on their coast, could not. And a fourth, quieter one: Italy was the weakest of the European powers in Africa and the least able to absorb a defeat.` }
          ]
        },
        {
          heading: 'The variation the criteria ask you to write',
          blocks: [
            { p: `The third success criterion wants a meaningful regional difference or counterexample, and the honest one is this. Resistance across the nineteenth century was near universal, and its outcomes varied with things that were mostly not chosen: whether a coastline was accessible for buying arms, whether a rival European power existed to sell them, whether authority was centralized before the crisis rather than during it, and whether the terrain suited a mobile defense.` },
            { p: `Two further qualifications are worth having ready. First, the line between resistance and collaboration is much less clean than a survey suggests: rulers who allied with an invading power were frequently pursuing an older regional conflict with the tools newly available, and many of them found the alliance converted into subjection within a decade. Second, defeat did not end anything. Yaa Asantewaa and Samory Toure became national figures in independent Ghana and Guinea; the 1857 rebellion was reclaimed by Indian nationalists as a first war of independence; and the everyday resistance of section 01, refusing a crop, moving out of a tax district, going to court, striking a mine, continued through every one of these decades and fed directly into the mass movements of Unit 8.` }
          ]
        }
      ],
      useThis: {
        tool: `A rival supplier is a strategic resource. <em>The mechanism is that modern weapons had to be bought from someone, so a state facing one European power could arm itself through that power&rsquo;s competitors, which is why Menelik could buy French and Russian rifles to use against Italy and why a kingdom whose only coast was controlled by its enemy, like Asante, could not close the technological gap however much it wanted to.</em>`,
        limit: `Adwa preserved independence and did not stop the process: Ethiopia was invaded again in 1935 with air power and gas, and its 1896 victory bought forty years rather than immunity.`,
        comparison: `Against <em>Japan</em> in Topic 6.2 and <em>Siam</em>, the two other states that kept their sovereignty: all three had a functioning central state before the crisis and used great-power rivalry deliberately, Siam by playing Britain against France and conceding territory at the edges to keep the core. Three cases, one mechanism, which is what makes it worth writing as a generalization rather than as three stories.`
      },
      terms: [
        ['Menelik II', 'The Ethiopian emperor who centralized authority, widened his revenue base and armed on a scale no other African state matched.'],
        ['Treaty of Wuchale', 'The 1889 agreement whose Amharic and Italian texts differed on protectorate status, giving Ethiopia grounds to repudiate it.'],
        ['Adwa', 'The 1 March 1896 battle at which Ethiopia destroyed an invading Italian army and secured recognition of its independence.'],
        ['Great-power rivalry', 'The competition among European states that let a threatened polity buy weapons from its enemy\'s competitors.'],
        ['Resistance and collaboration', 'The blurred line between the two, since alliance with an invader was often the pursuit of an older regional conflict.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The last card is the qualification the third success criterion asks for, so write it as part of the argument rather than as a concession at the end.`,
    pairs: [
      {
        category: 'Causation',
        title: 'The cartridge started it and did not cause it',
        body: `The Enfield cartridge had to be bitten and was rumored to be greased with beef and pork fat, and the humiliation of sepoys who refused it at Meerut in May 1857 began the rising. The causes had been accumulating for a decade: the Doctrine of Lapse annexing states whose rulers died without a natural heir, the seizure of Awadh in 1856, which was where a large share of the Bengal Army came from, revenue settlements transferring land to creditors through the courts, the 1856 overseas-service requirement, and a widespread belief that conversion was state policy. Use the distinction generally: a trigger needs only to be a grievance people already hold, while causes are what make a professional army and a civilian population ready to act on one.`
      },
      {
        category: 'Continuity',
        title: 'A defeated rebellion rebuilt the state that defeated it',
        body: `1857 failed comprehensively: it was regionally concentrated, the Punjab and most of the south stayed quiet, Sikh and Gurkha troops fought for the Company, and the suppression was ferocious. Then the East India Company was abolished in 1858 and India passed to Crown rule under a Secretary of State and a Viceroy; the Queen&rsquo;s Proclamation promised no further annexation and non-interference in religion; the princely states were preserved as a bulwark for the rest of British rule; the army was rebuilt with a far higher European proportion, artillery reserved to Europeans and recruitment restricted to groups rationalized as martial races. The state Indian nationalists confronted in the twentieth century was largely built in response to a rebellion that lost.`
      },
      {
        category: 'Comparison',
        title: 'Two prophetic movements, and the difference is administration',
        body: `Both arose after political options had closed. Lungsickness arriving in 1853 had already destroyed Xhosa herds when Nongqawuse&rsquo;s 1856 vision required the destruction of cattle and grain, and the famine that followed killed tens of thousands, collapsed the population of British Kaffraria, drove survivors into the colonial labor market and opened the land to settlement. Muhammad Ahmad&rsquo;s claim to be the Mahdi in 1881 created an obligation to follow that no secular leader in Sudan could command, and the movement then built a treasury, taxation, courts, a coinage and a standing army, took Khartoum in 1885 and held Sudan against three empires until Omdurman in 1898. The variable is not sincerity, it is whether ordinary machinery of power was constructed on top of the extraordinary claim.`
      },
      {
        category: 'Qualification',
        title: 'Adwa explains the defeats by naming what they lacked',
        body: `Menelik II centralized authority over regional lords, expanded south to widen revenue and manpower, exploited the differing Amharic and Italian texts of the 1889 Treaty of Wuchale to buy time, and imported rifles and artillery from France and Russia, who were glad to arm Italy&rsquo;s enemy. On 1 March 1896 he destroyed an Italian army advancing in separate columns and secured recognition of Ethiopian independence. Every condition behind that victory, central authority, revenue, and a rival supplier reachable by a coast his enemy did not control, is a condition whose absence explains a defeat elsewhere: Asante faced a British monopoly on its own coastline, and Samory, who did have suppliers and his own gunsmiths, ran out of territory to retreat into. That is the qualification to write, and it is about circumstance rather than character.`
      }
    ]
  }
};
