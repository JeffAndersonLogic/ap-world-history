'use strict';

/**
 * Topic 7.5, Unresolved Tensions After World War I: the deep reading.
 *
 * Why this exists. The success criteria ask a student to show that imperial
 * states predominantly MAINTAINED and in places EXPANDED territorial control
 * after the war, using mandates and Manchukuo as evidence, and then to set the
 * mandate system's rhetoric of preparation for self-government against the
 * reality, including borders drawn without regard to who lived inside them.
 *
 * The organizing argument: 1919 is usually taught as the end of something, and
 * for four empires it was. For colonized people it was the year empire changed
 * its vocabulary and got larger. Holding those two facts together is the whole
 * topic, and it is what makes the anticolonial politics of Unit 8 legible as a
 * response to a specific betrayal rather than as a general grievance.
 *
 * Three things carried deliberately:
 *
 *   1. Self-determination was applied in Europe and withheld outside it, and
 *      the contemporaries noticed at the time. The Paris petitions are the
 *      evidence, and they are far better than a later historian's judgment.
 *   2. The mandate categories A, B and C are worth knowing because the scheme
 *      itself ranks peoples by supposed readiness, which is the argument made
 *      in the system's own administrative language.
 *   3. The League's failures have a mechanism, no army and a unanimity rule
 *      with its most important members absent, rather than being a moral
 *      failing of the idea of collective security.
 */

module.exports = {
  topicKey: 't7-5',
  slug: 'topic-7-5-unresolved-tensions',
  sourceFile: 'deep-reading-topic-7-5-unresolved-tensions.html',
  lessonFile: 'lesson-7-5-unresolved-tensions.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 7.5: Empire Changes Its Vocabulary',
  eyebrow: 'Topic 7.5 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Empire Changes Its <em>Vocabulary</em>',
  deck: `Four empires ended in <span class="num">1918</span> and the total amount of territory under imperial rule went up. The peace that dissolved the Ottoman, Austro-Hungarian, Russian and German empires handed most of the pieces to the winners under a new name, and the name promised eventual self-government. This chapter is the gap between that promise and the administration, and why the gap is the beginning of Unit 8.`,
  meta: ['Four sections', 'The settlement, the mandates, the promise, the failures', 'Read alongside the First & 10'],
  footerNote: 'Topic 7.5 &nbsp;·&nbsp; Empire Changes Its Vocabulary &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the settlement and the principle it announced. Section 02 is the mandate system, which is the evidence the success criteria name. Section 03 is what the people on the receiving end said at the time, which is the strongest material in the chapter. Section 04 is Japan, Manchukuo and the League, and why collective security failed for structural reasons.`,
    steps: [
      `<b>01 Paris <span class="num">1919</span>:</b> what self-determination meant, and where it was applied.`,
      `<b>02 The mandate system:</b> the categories, the administration, and the borders.`,
      `<b>03 What contemporaries said:</b> the petitions, and the politics they produced.`,
      `<b>04 Manchukuo and the League:</b> expansion, and a mechanism for failure.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'paris',
      num: '01',
      accent: 'gold',
      name: 'A Principle, and Where It Stopped',
      navLabel: 'Paris 1919',
      dates: '1919 to 1920 &nbsp;·&nbsp; The settlement',
      thesis: `The Paris settlement announced a principle that was genuinely radical, that peoples should determine their own political future, and then applied it almost entirely inside Europe. The selectivity was not hidden and it was not missed by anyone outside Europe.`,
      parts: [
        {
          heading: 'What was decided, and by whom',
          blocks: [
            { p: `The conference that opened in Paris in <span class="num">1919</span> was dominated by a small group of victorious powers, and produced separate treaties with each defeated state, of which Versailles with Germany is the best known. The Ottoman, Austro-Hungarian, Russian and German empires had all ended, and their territories had to be assigned.` },
            { p: `In central and eastern Europe the settlement created or recognized a set of nation-states out of the Austro-Hungarian and Russian remains: Poland, Czechoslovakia, Yugoslavia, Hungary, and the Baltic republics among them. The organizing idea was <span class="kt">self-determination</span>, associated above all with Woodrow Wilson's Fourteen Points, and in Europe it was applied substantially, though imperfectly, because the populations of the region were mixed and no line could sort them cleanly. Every new state contained large minorities, which is a tension the interwar years never resolved.` },
            { p: `Outside Europe the same principle produced a different instrument. The German colonies and the Ottoman Arab provinces were not made independent and were not formally annexed. They became <span class="kt">mandates</span>, assigned to victorious powers under the supervision of the new League of Nations, which is section 02.` }
          ]
        },
        {
          heading: 'Add up the territory',
          blocks: [
            { p: `Here is the calculation the success criteria are asking for. Germany lost its colonies in Africa and the Pacific, and Britain, France, Belgium, South Africa, Japan, Australia and New Zealand gained administration of them. The Ottoman Arab provinces became mandates under Britain and France. Britain's and France's imperial holdings reached their greatest territorial extent in the years after this war.` },
            { p: `So the sentence to write is precise and countable: the war destroyed four empires and enlarged two. A settlement conducted in the language of self-determination transferred colonies from a defeated empire to victorious empires and gave the transfer an international supervisory body, and the population of those territories was not consulted about any of it.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Wilson promised self-determination to colonized peoples and then broke his word, which flattens something more interesting. The Fourteen Points were addressed principally to the European situation and to the peoples of the defeated empires, and Wilson's own position on colonial claims was that they should be adjusted with some regard for the interests of the populations concerned, not that colonies should become independent. What actually happened is that the language escaped the intention: once a principle is stated as a general one and published worldwide, people to whom it was not addressed read it, apply it to themselves, and ask why not. That is a much stronger argument than a broken promise, and section 03 is the evidence for it.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `A universal principle stated for a limited purpose. <em>The mechanism is that a state justifying its war aims needs a principle general enough to sound like justice rather than interest, and a general principle can be picked up and applied by anyone who reads it, so the language of self-determination became a tool in the hands of people it had not been meant to include.</em>`,
        limit: `The principle did not by itself produce decolonization, which took another war, mass movements and thirty years. It supplied a vocabulary and an argument that colonial powers had endorsed, which is a real asset and not a sufficient cause.`,
        comparison: `Against the <em>Declaration of the Rights of Man</em> in Topic 5.2: the same structure exactly. A principle is written down for one set of people, published, and then quoted back by those it excluded, in Saint-Domingue then and in Cairo, Delhi and Hanoi now. That recurrence across two units is one of the strongest continuity arguments in the course.`
      },
      terms: [
        ['Self-determination', 'The principle that peoples should determine their own political future, applied substantially in Europe in 1919 and withheld outside it.'],
        ['Fourteen Points', 'Wilson\'s statement of war aims, addressed mainly to Europe, whose general language was taken up worldwide by people it did not address.'],
        ['Mandate', 'A former German or Ottoman territory administered by a victorious power under League supervision rather than annexed or made independent.'],
        ['Successor states', 'The new nation-states created in central and eastern Europe from the Austro-Hungarian and Russian empires, each containing large minorities.'],
        ['Paris Peace Conference', 'The 1919 conference dominated by the victorious powers that produced separate treaties with each defeated state.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'mandates',
      num: '02',
      accent: 'rust',
      name: 'The Mandate System, Read Closely',
      navLabel: 'The mandates',
      dates: '1920 to 1939 &nbsp;·&nbsp; Categories, rule, and lines',
      thesis: `The mandate system is the best single document in this unit for the argument that empire continued under a new justification, because you do not have to infer the argument. The system states it, in its own administrative categories, in writing.`,
      parts: [
        {
          heading: 'What the system said it was',
          blocks: [
            { p: `Article 22 of the League Covenant set out the idea: these territories were inhabited by peoples "not yet able to stand by themselves under the strenuous conditions of the modern world," and their tutelage should be entrusted to advanced nations acting as trustees on behalf of the League, with a duty to report annually to a Permanent Mandates Commission.` },
            { p: `Read that as a claim with a structure. It concedes that the goal is eventual self-government, which is a real change of language from earlier colonial justification. It asserts that the population is not yet capable, which places the timetable entirely in the administering power's hands. And it creates an international body to receive reports, which is a genuine innovation and also a body with no power to compel anything.` },
            { p: `The categories are worth knowing because they make the ranking explicit. <b>Class A</b>, the former Ottoman Arab provinces, judged nearest to readiness. <b>Class B</b>, most of the former German territories in Africa, held under closer administration. <b>Class C</b>, South West Africa and the Pacific islands, administered essentially as part of the administering state's own territory. A system that sorts peoples into three grades of readiness for self-rule is making an argument about hierarchy in the form of a filing scheme.` }
          ]
        },
        {
          heading: 'What the administration actually was',
          blocks: [
            { p: `In practice mandate administration was colonial administration. Britain took Palestine, Transjordan and Iraq; France took Syria and Lebanon; Japan took the former German Pacific islands north of the equator; South Africa took South West Africa; Australia, New Zealand, Britain, France and Belgium divided the rest. Officials were appointed rather than elected, taxes were collected, and armed force was used against resistance: the French bombarded Damascus during the Syrian revolt of the mid-<span class="num">1920</span>s, and Britain used air power to police Iraq.` },
            { p: `The Permanent Mandates Commission did receive petitions and did question administering powers, and that is a real difference from ordinary colonial rule, because a channel existed at all. What it could not do was compel, because the League had no enforcement mechanism of its own, which is the same structural problem section 04 describes.` }
          ]
        },
        {
          heading: 'The borders, and why they still matter',
          blocks: [
            { p: `The lines drawn across the former Ottoman Arab lands were drawn primarily to suit the administering powers, on foundations laid during the war by the secret Sykes-Picot understanding of <span class="num">1916</span> between Britain and France, and they cut across communities that had been governed as one and combined communities that had not.` },
            { p: `Iraq is the standard example: a mandate assembling provinces with large Shia, Sunni and Kurdish populations under a monarchy Britain installed, with the Kurdish population distributed across the new borders of several states and given a state in none of them. In the Levant, French administration separated Lebanon from Syria along lines built around confessional balance.` },
            { p: `And Britain had made incompatible wartime commitments in the same region: encouragement of an Arab revolt with the expectation of Arab independence, the Sykes-Picot division with France, and the Balfour Declaration of <span class="num">1917</span> supporting a national home for the Jewish people in Palestine while stating that the civil and religious rights of existing non-Jewish communities should not be prejudiced. Palestine became a mandate carrying all three commitments at once, and Britain spent the interwar years unable to satisfy them.` },
            { p: `Be careful with the conclusion, because the easy version is wrong. Borders drawn without regard to who lived inside them created durable grievances and states whose legitimacy had to be built rather than assumed, and later conflict in the region also has causes that are local, later, and about oil, the Cold War and specific political decisions. Write "sowed conflicts that later actors acted on" rather than "caused everything that followed," and you have a claim you can defend.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the system generated its own paperwork',
              html: `The mandate system is unusually well documented for a colonial arrangement, and the reason is the reporting duty in Article 22. Administering powers filed annual reports to the Permanent Mandates Commission, the Commission questioned their representatives, and the minutes of those sessions survive along with the petitions sent in by inhabitants of the territories. The result is an archive in which the administering power's account and the objections of the governed sit in the same file. That is rare, and it is a by-product of the very supervision that could not actually compel anyone: the League could not stop a mandatory power doing something, and it could make it explain itself on the record, which is why historians can now read both sides of arrangements that elsewhere left only one.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Trusteeship as a justification with an open-ended timetable. <em>The mechanism is that declaring a population not yet ready for self-rule concedes the goal while reserving the schedule to the ruler, so the administering power gains the legitimacy of an eventual promise without any date by which it must be kept, and the promise itself becomes the standard the governed can hold it to.</em>`,
        limit: `It was not identical to older colonial rule. Reporting duties and petition rights created a record and an international audience, and several Class A mandates did reach formal independence in the period, so state the difference rather than collapsing the two.`,
        comparison: `Against <em>Spanish encomienda</em> in Topic 4.4: there too a grant of authority over people came wrapped in an obligation, to protect them and instruct them in Christianity, which functioned as the justification while the extraction went on. Four centuries apart, the same structure: a duty of care asserted by the party receiving the benefit.`
      },
      terms: [
        ['Article 22', 'The League Covenant clause creating mandates, which declared populations not yet able to stand alone and assigned them to trustee powers.'],
        ['Permanent Mandates Commission', 'The League body that received annual reports and petitions, could question administering powers, and could not compel them.'],
        ['Class A, B and C', 'The mandate grades, ranking territories by supposed readiness for self-rule and making the hierarchy explicit in administrative language.'],
        ['Sykes-Picot', 'The 1916 secret Anglo-French understanding dividing Ottoman Arab lands into spheres, the foundation of the later mandate borders.'],
        ['Balfour Declaration', 'Britain\'s 1917 statement supporting a Jewish national home in Palestine while stating existing communities\' rights should not be prejudiced.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'petitions',
      num: '03',
      accent: 'iron',
      name: 'What They Said at the Time',
      navLabel: 'The response',
      dates: '1919 to 1930s &nbsp;·&nbsp; Petitions and movements',
      thesis: `The strongest evidence that <span class="num">1919</span> was understood as a betrayal is not a historian's later judgment. It is that people traveled to Paris in <span class="num">1919</span> to make the argument, were refused a hearing, and went home and built mass movements.`,
      parts: [
        {
          heading: 'Paris, and the delegations nobody received',
          blocks: [
            { p: `Nationalist delegations and petitioners arrived in Paris from across the colonized world expecting the principle to be applied to them. Egyptian nationalists sought to put Egypt's case and were prevented from traveling; when their leader Saad Zaghlul was deported, Egypt rose in the <span class="num">1919</span> revolution, and Britain conceded a qualified independence in <span class="num">1922</span> while keeping control of defense, the Suez Canal and foreign policy. A young Vietnamese man then using the name Nguyen Ai Quoc submitted a petition asking for basic rights and eventual self-government for the peoples of French Indochina, and received no hearing; he later became known as Ho Chi Minh, and the Topic 8.5 chapter picks him up. Korean nationalists, under Japanese rule, launched the March First Movement in <span class="num">1919</span> with a declaration of independence, and it was suppressed.` },
            { p: `Chinese delegates went to Paris expecting the return of the former German concessions in Shandong and found them transferred to Japan instead. The news produced the <span class="kt">May Fourth Movement</span> of <span class="num">1919</span>, mass student and worker protest that became one of the formative moments of modern Chinese politics and pushed a generation toward both nationalism and, for some, communism.` },
            { p: `Notice the pattern, because it is the argument. In each case the appeal was made first in the language of the settlement itself, using its own principle, through its own procedures. Refusal is what converted constitutional-style petitioning into mass mobilization, and Unit 8 is largely the story of those movements maturing.` }
          ]
        },
        {
          heading: 'India, and the shape of a broken bargain',
          blocks: [
            { p: `India is the clearest case because the exchange was explicit. Indian participation in the war had been enormous, as Topic 7.3 sets out, and was solicited with expectations of political advance. What arrived in <span class="num">1919</span> was the Government of India Act, which introduced limited provincial power-sharing, and, in the same year, the Rowlatt Acts, which extended wartime emergency detention powers into peacetime.` },
            { p: `Protest against the Rowlatt Acts led to the events at Amritsar in April <span class="num">1919</span>, when troops under General Dyer fired without warning on a large, penned-in crowd in an enclosed public garden, killing hundreds. The official inquiry and the reaction in Britain, where Dyer received considerable public support, did as much political damage as the killing itself, because it suggested the act was not an aberration.` },
            { p: `The consequence is the mechanism. Gandhi, who had supported wartime recruitment, moved into open opposition and launched the non-cooperation movement, and the Indian National Congress turned from a body petitioning for reform into a mass organization pursuing self-rule. Reform plus repression, offered together, taught a movement that constitutional methods were insufficient, which is a lesson colonial governments taught repeatedly in this period.` }
          ]
        }
      ],
      useThis: {
        tool: `Refusal converting petition into mobilization. <em>The mechanism is that a movement appealing through official channels is cheap for a government to accommodate and expensive to refuse, because refusal demonstrates to the movement's own moderates that the channel does not work, which transfers leadership to those arguing for mass action and makes the next demand larger than the one declined.</em>`,
        limit: `Refusal is one input among several. Wartime economic strain, the example of other movements, an expanding educated class and, in several cases, the Russian revolution all fed interwar nationalism, so name refusal as an accelerant rather than the origin.`,
        comparison: `Against the <em>American colonists</em> in Topic 5.2: petition, refusal, escalation, in that order, and in both cases the petitioners began by claiming rights the ruling power already said it believed in. The difference is that one set of petitioners was regarded as belonging to the political community and the other was not, which is what made the second refusal so much easier to give.`
      },
      terms: [
        ['May Fourth Movement', 'The 1919 Chinese protests after Shandong was transferred to Japan at Paris, a formative moment for modern Chinese nationalism.'],
        ['Rowlatt Acts', 'The 1919 extension of wartime emergency detention into peacetime in India, offered alongside limited constitutional reform.'],
        ['Amritsar', 'The April 1919 killing of hundreds in an enclosed garden, whose aftermath in Britain suggested to Indian opinion that it was not an aberration.'],
        ['Non-cooperation', 'Gandhi\'s mass method of withdrawing participation from colonial institutions, adopted after constitutional petitioning failed.'],
        ['March First Movement', 'The 1919 Korean independence declaration and mass protest under Japanese rule, suppressed by the colonial authorities.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'league',
      num: '04',
      accent: 'oxide',
      name: 'Manchukuo, and Why the League Could Not Act',
      navLabel: 'The League',
      dates: '1931 to 1939 &nbsp;·&nbsp; Expansion and failure',
      thesis: `Japan's creation of Manchukuo is the success criteria's evidence that imperial control expanded after the war, and it is also the case that exposed the League's structural problem. Both readings come out of the same episode, which is why it is worth doing slowly.`,
      parts: [
        {
          heading: 'Manchuria, 1931',
          blocks: [
            { p: `Japan had held economic and railway interests in southern Manchuria since its victory over Russia in <span class="num">1905</span>, protected by its own garrison troops. In September <span class="num">1931</span> officers of that garrison staged an explosion on the railway near Mukden, blamed Chinese forces, and used it as the pretext for occupying the whole region. In <span class="num">1932</span> Japan established <span class="kt">Manchukuo</span>, nominally an independent state under the last Qing emperor Puyi and in practice under Japanese control.` },
            { p: `Two things to take from this. It is territorial expansion by a major power thirteen years after a peace settlement built on self-determination, which answers the criteria directly. And the motive is the economics of Topic 7.4: Manchuria offered coal, iron, soybeans and land to a resource-poor industrial state facing the Depression and pursuing self-sufficiency, which is autarky pursued by conquest.` },
            { p: `The League sent a commission of inquiry. Its report, in <span class="num">1933</span>, found that Japan's action was not justified as self-defense and that Manchukuo was not a genuine independence movement, and recommended non-recognition and an autonomous Manchuria under Chinese sovereignty. Japan's response was to leave the League. The report was accurate, the process worked, and nothing happened.` }
          ]
        },
        {
          heading: 'The mechanism of the failure',
          blocks: [
            { p: `It is tempting to write that the League failed because nations were selfish, which explains nothing. The failure has specific structural causes and naming them is worth more.` },
            { p: `<b>No armed force.</b> The League had no army and no power to raise one. Its instruments were publicity, arbitration and economic sanctions, and sanctions require members to bear costs willingly during a depression.` },
            { p: `<b>Unanimity.</b> Key decisions in the Council required unanimity, which gave interested parties enormous obstructive power and made timely action difficult by design.` },
            { p: `<b>Absent members.</b> The United States never joined, despite the League being substantially Wilson's idea, because the Senate did not consent to the Treaty. The Soviet Union was outside for years, joining only in <span class="num">1934</span> and expelled in <span class="num">1939</span>. Germany joined in <span class="num">1926</span> and left in <span class="num">1933</span>; Japan left in <span class="num">1933</span> and Italy in <span class="num">1937</span>. An organization for collective security whose membership excludes several of the world's most powerful states at any given moment cannot deliver collective security.` },
            { p: `<b>Members with a conflict of interest.</b> Britain and France were the leading members and were also imperial powers with mandates, colonies and exposed interests, so they had strong reasons to avoid confrontations that might cost them elsewhere.` },
            { p: `The Ethiopian case in <span class="num">1935</span> to <span class="num">1936</span> is the confirmation. Italy invaded, the League condemned it and imposed sanctions that pointedly excluded oil and left the Suez Canal open, and Italy completed the conquest. Emperor Haile Selassie addressed the Assembly in Geneva to warn that a system which would not defend a member state had announced what it was. After Ethiopia, few governments planned as though collective security were real, which is a direct input into Topic 7.6.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write the League off as simply useless, because that makes the creation of the United Nations in <span class="num">1945</span> look inexplicable. The League ran functioning technical bodies on public health, refugees, labor standards and trafficking, resolved several smaller disputes between minor powers, and built the practice of a permanent international secretariat and regular multilateral conference from nothing. What it could not do was stop a determined great power, because it had no force, required unanimity and lacked several great powers as members. The useful sentence is that the League failed at collective security specifically, and that its designers in <span class="num">1945</span> built the Security Council, with permanent members and a veto, as a deliberate answer to exactly these defects.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Collective security without enforcement. <em>The mechanism is that a security guarantee only deters if a potential aggressor expects a costly response, so an organization with no army, a unanimity rule and several great powers outside it produces condemnation instead of consequence, and each unpunished aggression lowers what the next aggressor expects to pay.</em>`,
        limit: `Structure is not the whole explanation. Governments also chose not to act, for reasons including depression-era budgets, memories of <span class="num">1914</span> to <span class="num">1918</span>, and imperial commitments, so the design made inaction easy rather than inevitable.`,
        comparison: `Against the <em>Concert of Europe</em> arrangements in Topic 7.2's section on earlier crises: those settled disputes because a handful of great powers agreed among themselves and enforced the result. The League tried to replace that with a universal rule-based system and kept the requirement for great-power agreement while losing the means of enforcement.`
      },
      terms: [
        ['Manchukuo', 'The state Japan established in occupied Manchuria in 1932 under Puyi, imperial expansion pursued for coal, iron, soybeans and land.'],
        ['Mukden Incident', 'The September 1931 staged railway explosion used as the pretext for Japan\'s occupation of Manchuria.'],
        ['Collective security', 'The principle that an attack on one member concerns all, which requires enforcement the League was never given.'],
        ['Unanimity rule', 'The League Council requirement that gave interested parties obstructive power and made timely action difficult by design.'],
        ['Abyssinia crisis', 'Italy\'s 1935 to 1936 invasion of Ethiopia, met with sanctions that excluded oil, after which few governments relied on collective security.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full explanation: the claim, the specific evidence, and the reason. The first two answer the success criteria almost directly, so learn the details in them.`,
    pairs: [
      {
        category: 'Evidence',
        title: 'The war destroyed four empires and enlarged two',
        body: `The Ottoman, Austro-Hungarian, Russian and German empires all ended, and the territory did not become independent. Germany's African and Pacific colonies were distributed as mandates to Britain, France, Belgium, South Africa, Japan, Australia and New Zealand; the Ottoman Arab provinces became British and French mandates in Palestine, Transjordan, Iraq, Syria and Lebanon; Japan created Manchukuo in 1932 out of occupied Manchuria. British and French imperial holdings reached their greatest extent in these years. So a settlement conducted in the language of self-determination transferred colonies between empires and gave the transfer an international supervisory body, and the populations concerned were not consulted.`
      },
      {
        category: 'Rhetoric and reality',
        title: 'Trusteeship conceded the goal and kept the timetable',
        body: `Article 22 declared mandate populations "not yet able to stand by themselves" and entrusted their tutelage to advanced nations reporting annually to a Permanent Mandates Commission. Read the structure: it concedes eventual self-government, which is new language, asserts present incapacity, which puts the schedule entirely in the ruler's hands, and creates a body that receives reports and cannot compel. The Class A, B and C grades rank peoples by supposed readiness in the system's own filing scheme. In practice administration was colonial: appointed officials, taxation, the French bombardment of Damascus in the mid-1920s, British air policing in Iraq. And the borders followed Sykes-Picot rather than communities, which sowed conflicts later actors acted on.`
      },
      {
        category: 'Causation',
        title: 'Refusal at Paris turned petitions into mass movements',
        body: `The evidence that 1919 was experienced as betrayal is what people did that year. Egyptians prevented from putting their case rose in revolt and won a qualified independence in 1922 that reserved defense and the Canal to Britain. A Vietnamese petitioner asking for basic rights got no hearing and later led the movement of Topic 8.5. Chinese delegates found Shandong transferred to Japan and the May Fourth Movement followed. Koreans declared independence in the March First Movement and were suppressed. In India, wartime service was answered with the limited Government of India Act and the Rowlatt Acts in the same year, then Amritsar, after which Gandhi moved to non-cooperation and Congress became a mass organization. Each appeal used the settlement's own principle first.`
      },
      {
        category: 'Structure',
        title: 'The League produced accurate reports and no consequences',
        body: `After the staged Mukden Incident of September 1931 and the creation of Manchukuo, the League's commission reported in 1933 that Japan's action was not self-defense and Manchukuo not genuine independence, and recommended non-recognition. Japan left the League and kept Manchuria. The failure was structural: no armed force, sanctions requiring members to bear costs during a depression, a unanimity rule that rewarded obstruction, and an absent United States with Germany, Japan and Italy departing and the USSR admitted only in 1934. Ethiopia in 1935 to 1936 confirmed it, with sanctions that excluded oil and left Suez open. The 1945 Security Council, with permanent members and a veto, was designed as an answer to exactly these defects.`
      }
    ]
  }
};
