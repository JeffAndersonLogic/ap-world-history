# Topic 5.1 Story Draft: The Enlightenment

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Jeff started this build with "Build 5.1 using methods employed in unit 4" on 2026-10-20. Topic 4.8
is on `main` (`85cf5f9`), and 5.1 is the first topic in Unit 5. The Phase 9 reviewers check this
story against the CED source file and the scholarship; the record of what they found is in
`docs/TOPIC-5-1-CLAIM-LEDGER.md`, under "Review findings".

**Taught:** no dates yet. The schedule ends with the Era 3 Exam (Green Monday 2026-11-23, Silver
Tuesday 2026-11-24), and neither the schedule nor the Notion task names a Unit 5 class day. The
build adds no schedule entries; the dates are the one open item in the report.

**Branch baseline:** `claude/build-5-1-unit-4-methods-q7feeb`, the branch this session was given,
from `main` at `85cf5f9`. (The build-topic skill names a topic branch `claude/topic-X-Y-build`;
this session's instructions name the branch, so the work is here and the report says so.) No other
branch with commits not on `main` touches 5.1 or the shared Unit 5 files, except three old Unit 5
branches (`claude/unit-5-completion-jueU7`, `claude/unit-5-ced-audit`,
`repair-unit-5-ced-alignment`) whose work predates the current Unit 5 files on `main`; none is
built on here.

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, pp. 98 and 99 (topic pages) and p. 95 (Unit at a Glance). This draft quotes
that file and nothing else for what the CED requires. Unit 5 had no source file and no story map
before this build; both were made first (`docs/UNIT-5-STORY-MAP.md`), as Unit 4's were.

---

## 1. What the CED requires (pp. 98 to 99)

Two learning objectives, each under its own thematic focus:

- **Learning objective A** (Cultural Developments and Interactions): Explain the intellectual and ideological context in which revolutions swept the Atlantic world from 1750 to 1900.
- **Learning objective B** (Social Interactions and Organization): Explain how the Enlightenment affected societies over time.

Key Concepts:

- **KC-5.3.I.A** (LO A): Enlightenment philosophies applied new ways of understanding and empiricist approaches to both the natural world and human relationships; they also reexamined the role that religion played in public life and emphasized the importance of reason. Philosophers developed new political ideas about the individual, natural rights, and the social contract.
- **KC-5.3.I** (LO A): The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments.
- **KC-5.3.II.i** (LO A): Nationalism also became a major force shaping the historical development of states and empires.
- **KC-5.3.I.C** (LO B): Enlightenment ideas and religious ideals influenced various reform movements. These reform movements contributed to the expansion of rights, as seen in expanded suffrage, the abolition of slavery, and the end of serfdom.
- **KC-5.3.IV.B** (LO B): Demands for women’s suffrage and an emergent feminism challenged political and gender hierarchies.

- **Reasoning move:** Continuity and Change, the CED's reasoning process for 5.1 (p. 95). Both
  objectives are change-over-time questions. LO A asks what changed in how people thought about
  authority, the "context" in which revolutions came. LO B asks what the Enlightenment did to
  societies "over time," which means following the ideas forward into the 1800s and saying what
  they changed and what they did not. The answer this story builds is that **the Enlightenment
  changed the question people asked about authority (by what right?) faster than it changed who
  actually held rights: the new answer, reason and the consent of the people, took a century of
  reform movements to reach the enslaved, the serfs and the voters, and by 1900 it had still not
  reached women's votes in almost any country.**
- **Suggested skill:** 3.A Claims and Evidence in Sources, "Identify and describe a claim and/or
  argument in a text-based or non-text-based source." The Enlightenment is a topic made of
  arguments, so the skill is native to it: students find the claim in a passage by Locke,
  Wollstonecraft, de Gouges or the women at Seneca Falls, and describe it in their own words.
- **Thematic focus:** Cultural Developments and Interactions (LO A); Social Interactions and
  Organization (LO B).
- **Illustrative examples (optional), printed beside LO B under "Demands":** Mary Wollstonecraft’s
  *A Vindication of the Rights of Woman*; Olympe de Gouges’s *Declaration of the Rights of Woman and
  of the Female Citizen*; the Seneca Falls Conference (1848) organized by Elizabeth Cady Stanton and
  Lucretia Mott. This story uses all three, because each is a source with a claim in it (the skill)
  and together they show the same words reaching further over fifty-six years (the reasoning move).
- **Sample activity:** none for 5.1 (the unit's sample activities, p. 97, are for 5.2, 5.5 and 5.8).

**Six things in these sentences that are easy to drop.**
1. **"Both the natural world and human relationships."** The method came first: reason and
   evidence explained nature, and then thinkers turned the same method on government, religion,
   and society. Without the method the ideas look like opinions.
2. **"Reexamined the role that religion played in public life."** Not "rejected religion." Most
   Enlightenment writers were believers of some kind; what they questioned was a state that
   forced one faith on everyone, and a Church that claimed authority over law and thought.
3. **"Often preceded revolutions."** The CED says *preceded*, not *caused*. The ideas came first
   and gave revolutionaries words; the revolutions had other causes too (5.2). A 5.1 answer that
   says "the Enlightenment caused the French Revolution" goes past the CED.
4. **"Nationalism also became a major force."** It sits in 5.1 on the CED page, not only in 5.2.
   The link is the people: if authority comes from the people, the next question is which people,
   and the answer more and more often was the nation.
5. **"Enlightenment ideas and religious ideals."** The reform movements had two engines. Many
   abolitionists were driven by faith (the Quakers above all) as much as by natural rights, and
   Lucretia Mott, who organized Seneca Falls, was a Quaker minister.
6. **"Over time."** LO B runs to 1900. Abolition, the end of serfdom, wider voting and the first
   feminist demands came across a century, unevenly, and against resistance. That is a
   continuity as well as a change.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-1-enlightenment.js`), the renderer config, the First & 10 entry in
`scripts/lib/reading-content/unit-5.js`, the deep reading `scripts/lib/deep-reading-content/topic-5-1.js`,
the BeInTheRoom scenario in `scripts/build-unit5-rooms.js`, the deep audit, the new unit story map,
and the 4.8 First & 10 (what students were last taught).

**Consistent with the CED:**
- The lesson data and renderer config carry all five Key Concepts in the CED's wording, and, since
  this build's first commit, both learning objectives.
- Learning Target 1 and Checkpoint 1 (Enlightenment ideas and their challenge to authority) fit
  KC-5.3.I.A.
- The CED's three illustrative examples are listed in the metadata, and Wollstonecraft and de
  Gouges appear in the reading and the Evidence Lab.

**Out of line, each fixed inside this build:**
1. **Learning Objective B has no target, criterion or checkpoint** (the deep audit's finding; story
   map conflict 9). Target 2 and Checkpoint 2 are about how ideas spread and "the limits of
   Enlightenment universalism," and nothing assesses reform movements, abolition, the end of
   serfdom, expanded suffrage, or women's suffrage and feminism. KC-5.3.II.i (nationalism) has no
   surface at all. Seneca Falls appears only in the metadata.
2. **The reasoning move is wrong on the page.** Lecture card 1 says "The primary skill being
   assessed is causation: how did Enlightenment ideas cause the Atlantic Revolutions?"; the Skill
   Builder practices causation of the revolutions with the Seven Years' War; the reading's question
   badges read Causation, Comparison and Argumentation. The CED's reasoning process is Continuity
   and Change and its skill is 3.A. The revolutions themselves are 5.2's (story map conflict 6).
3. **The First & 10 is a list, not a story.** Four sections: a context section, a definitions
   section, a roll call of seven philosophes with dates, and "the limits." Fifteen vocabulary chips,
   five of them names. No section follows the ideas forward in time. It carries a stray
   `builderBody` (the AI Coach builder was retired 2026-08-31). It is rewritten from this story.
4. **Factual problems, flagged for the ledger, each leaving with its surface:**
   - "This passage was quoted directly in both the American Declaration of Independence and the
     French Declaration of the Rights of Man" (Evidence Lab item, Locke). Neither document quotes
     the passage.
   - The Primary Source's five "Locke" sentences are paraphrases presented as quotations (the third
     and fifth do not match the text of the Second Treatise).
   - "25,000 copies" and "25,000 subscribers" of the Encyclopédie (lecture card 3, map key). Not
     supported as stated (see the ledger).
   - The BeSurreal is set in 1762 and has its visitor cite "the French Declaration," which was
     written in 1789.
   - "Jefferson ... enslaving over 600 people" and Locke's Carolina constitutions: not wrong as far
     as checked, but 5.2's material and not needed by this story.
   - "Virtually every Enlightenment thinker except Wollstonecraft assumed that women were naturally
     less rational" (reading, section 4). Condorcet argued for women's political rights in 1790; a
     superlative to narrow.
   - "Most concluded ... that they were not yet ready for self-governance" (colonial subjects,
     reading section 4): a sweeping claim about all Enlightenment thinkers, not supported as stated.
5. **Leftovers:** `first10.note` in both lesson files says "build your AI Coach prompt"; the
   BeInTheRoom description in the lesson data offers three scenarios that do not exist; the
   BeInTheRoom generator's alignment block names `KC-5.1.I` and `KC-5.1.I.A–C` (industrial Key
   Concepts) and an objective the CED does not print; one of its sources is labeled "National
   Archives, The Enlightenment and the Atlantic world" and links to a page of slavery records.
6. **Pictures from other topics (`stableImages`):** the Waldseemüller map, the 1700 world map, the
   VOC logo, da Gama's pillar, the casta collage, the Florentine Codex smallpox page, Vasco da Gama,
   a Persian astrolabe, Columbus taking possession and Magellan. None has a 5.1 job; all leave.
7. **Material from other topics:** Adam Smith and laissez-faire (5.7's, KC-5.1.III.A) as a
   vocabulary chip, a philosophe paragraph and a success criterion; the Seven Years' War and the
   Estates-General as the causes of the revolutions (5.2's).
8. **Title:** the lesson reads "The Enlightenment," the CED's title exactly. Kept.

## 3. The ninth-grade story

Last unit ended with a question. By 1750 the oceans were joined and states were stronger than
ever. Who do those states belong to?

**The old answer.** In 1750 most rulers had one answer: to the king, because God put him there.
You met it in Topic 3.2: Louis XIV of France said he ruled by divine right, and nobody could vote
him out. The Church taught what was true about God and the world, and in most countries one
church was the law. Nobles were born into their privileges. Peasants, many of them serfs bound to
the land, were born into their work. Authority came from God, from tradition, and from birth.

**A new way of knowing.** Then a new way of finding out what is true spread among educated
Europeans. In 1687 Isaac Newton showed that a few laws, worked out with mathematics and tested
against what astronomers could see, explained how planets move and why an apple falls. You did
not need an old book or a priest to tell you; you needed reason and evidence. The philosopher
John Locke argued that everything we know comes from experience: at birth, he wrote, the mind is
like "white paper." That way of thinking, learning from evidence rather than from authority, is
called **empiricism**. Thinkers began to ask: if reason and evidence can explain the planets, can
they explain people, and how people should be governed?

**The new answers.** They turned the method on government, and they came up with new political
ideas about the individual.
- **Natural rights.** Locke (1689) argued that people are born free, with rights to "lives,
  liberties and estates" that no government gives and no government may take. Government exists
  to protect them.
- **The social contract.** Government is an agreement. People give up some freedom to a
  government so it will protect their rights; "no one," Locke wrote, can be put under another's
  power "without his own consent." If a government breaks the deal, the people may resist it.
  Jean-Jacques Rousseau (1762) opened his own book on the social contract with "Man is born free;
  and everywhere he is in chains."
- **Limits on power.** Montesquieu (1748) argued that liberty is safest when the power to make
  laws, carry them out and judge them is split among different hands.
- **Religion and the state.** In 1762 a Protestant merchant in Toulouse, Jean Calas, was tortured
  and executed after being wrongly accused of killing his son to stop him becoming a Catholic.
  Voltaire, one of the most famous writers in Europe, campaigned for three years to clear his name and
  wrote a *Treatise on Tolerance* (1763), arguing that no government should force a faith on
  anyone. Many Enlightenment writers still believed in God; some were deists, who believed God
  made the world and then let it run by natural laws. What they questioned was religion as a
  government power.
Notice what changed: not whether kings existed, but **what made a ruler legitimate**. The old
answer was God and birth. The new answer was reason and the consent of the people.

**The ideas spread.** These were not secrets. They traveled in books, newspapers and pamphlets,
in the conversation clubs of Paris called salons, often run by women, in London's coffeehouses,
and in letters across Europe and the Atlantic. In Paris, Denis Diderot and his partners spent
twenty-one years (1751 to 1772) publishing the *Encyclopédie*, seventeen volumes of articles and
eleven of pictures that tried to explain everything, from how to make glass to what a
government owes its people, by reason. The French government banned it, and it kept coming out
anyway. The ideas questioned tradition everywhere: in science, in religion, in law, in the way
people farmed and traded. In 1784 a German philosopher, Immanuel Kant, was asked "What is
Enlightenment?" His answer was a motto: *Sapere aude*, "Dare to know," which he explained as
having the courage to use your own understanding.
And the ideas came **before** the revolutions. The American Revolution began in 1775, the French in
1789, the Haitian in 1791, and Spanish America's wars of independence in 1810. In Bogotá, in
Spanish America, a young man named Antonio Nariño secretly printed a Spanish translation of
France's new declaration of rights in 1793 or 1794, and was arrested for it in 1794; he later
became a leader of independence. The ideas did not make the revolutions by themselves (Topic 5.2
is about everything else that did), but they gave revolutionaries the words.

**The people become a nation.** If a state belongs to its people, the next question is: which
people? More and more, the answer was **the nation**: a people who saw themselves as one. In 1789
the French revolutionaries wrote that "the principle of all sovereignty resides essentially in
the nation" (Topic 5.2 reads their declaration). Over the next century, **nationalism**, loyalty to
your nation, became one of the strongest forces shaping states and empires: it would build new
countries and pull old empires apart.

**The words were bigger than the men who wrote them.** Here is the turn. "All men," "the people,"
"natural rights": the words sounded like everyone. But Locke himself had owned shares in the Royal
African Company, an English company that traded enslaved Africans. Rousseau wrote that "a
woman's education must therefore be planned in relation to man." Most of the men who wrote and read these ideas did not mean them for
women, for enslaved Africans, or for peasants. Yet the words were written down, and anyone who
read them could ask the same question the philosophers had asked of kings: **by what right am I
left out?**

**Over time: the reformers press the words further.** Through the 1800s, people formed reform
movements to make the rights real for more people. They were driven by Enlightenment ideas **and
by religious ideals**.
- **Abolishing slavery.** In 1787 twelve men in London, nine of them Quakers, founded a society to
  end the British slave trade. Its seal showed a kneeling African man in chains and the words
  "Am I not a man and a brother?", and the potter Josiah Wedgwood made it into a medallion people
  wore. Olaudah Equiano, a formerly enslaved African, published his life story in 1789 and spoke
  across Britain. Britain banned the slave trade in 1807 and slavery in its empire from 1834.
  France abolished slavery in its colonies in 1848; Brazil, the last country in the Americas, in
  1888.
- **Ending serfdom.** In 1848 the Austrian Empire freed its peasants from the forced labor they
  owed their lords. In 1861 Tsar Alexander II of Russia freed more than 20 million serfs, partly
  because he feared that if the government did not end serfdom, the serfs would end it themselves.
- **Expanding the vote.** In 1848 France gave the vote to all adult men. Britain widened voting in
  steps, in 1832, 1867 and 1884.
Each change took decades of campaigning and met resistance, and none of it reached everyone at
once.

**Women demand their rights.** Women pressed the words hardest of all, because the men who wrote
"rights of man" often meant it literally.
- In 1791 the French writer **Olympe de Gouges** rewrote France's declaration as the *Declaration
  of the Rights of Woman and of the Female Citizen*. Its first article: "Woman is born free and
  remains equal to man in rights." The revolutionary government executed her in 1793.
- In 1792 the English writer **Mary Wollstonecraft** published *A Vindication of the Rights of
  Woman*. Rousseau had warned that educating women like men would give them less power over men.
  Her answer: "I do not wish them to have power over men; but over themselves." Her claim:
  women can reason, so they must be educated to govern themselves.
- In 1840 two American abolitionists, **Elizabeth Cady Stanton** and **Lucretia Mott**, a Quaker
  minister, went to an antislavery convention in London and were refused seats as delegates
  because they were women. In July 1848 they organized a women's rights convention at **Seneca
  Falls**, New York. Its *Declaration of Sentiments* borrowed the words of the Declaration of
  Independence and changed one: "We hold these truths to be self-evident; that all men **and
  women** are created equal." It demanded the vote. That demand was the only resolution that did
  not pass unanimously; 100 women and men signed the declaration.
This was **feminism** emerging: the claim that women and men should have equal rights, which
challenged both political hierarchy (who votes, who rules) and gender hierarchy (who is in charge
at home and in law).

**What stayed.** By 1900 kings and emperors still ruled most of Europe and much of the world.
Slavery had ended across the Americas, but other forms of forced labor went on in many places.
Most countries let some or all men vote, and women could vote in national elections almost
nowhere; New Zealand, in 1893, was the first self-governing country to let women vote in
national elections. The ideas changed fast; the world changed slowly.

**So, who do states belong to?** The Enlightenment changed the answer: to their people, by reason
and consent, not to a king by God's will. The question it taught people to ask, "by what right?",
kept working long after the philosophers were gone, as the people left out pressed the same words
until rights reached further. That is the change. How slowly they reached, and how many people
were still waiting in 1900, is the continuity.

**And it hands on a question.** By 1789 the ideas were everywhere educated people read. In America,
France, Haiti and Spanish America, people turned them into revolutions. What caused them, and what
did they create? That is Topic 5.2.

## 4. The spine

**Enlightenment thinkers asked every old authority a new question, "by what right?", and answered
it with reason, natural rights and the consent of the people. The words reached further than the
men who wrote them: over the next century, reformers and the people left out pressed them until
rights reached further, while much of the old order held on.** (From the unit story map.)

"Reason, natural rights and the consent of the people" is KC-5.3.I.A; "asked every old authority"
and the spread is KC-5.3.I; "the people" becoming the nation is KC-5.3.II.i; "reformers ... pressed
them until rights reached further" is KC-5.3.I.C and KC-5.3.IV.B; "while much of the old order held
on" is the continuity half of the reasoning move.

Shorter for the wall: **By what right? The answer kept growing.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Divine right and Louis XIV (Topic 3.2); one church as the law; nobles and serfs by birth | context for KC-5.3.I | The **old answer**: authority from God, tradition and birth. What the ideas questioned. |
| Newton's laws (1687); Locke's "white paper" and empiricism | KC-5.3.I.A ("new ways of understanding and empiricist approaches") | The **method**: reason and evidence, first for nature, then for people. |
| Locke (1689): natural rights, "lives, liberties and estates," consent; Rousseau (1762); Montesquieu (1748) | KC-5.3.I.A ("the individual, natural rights, and the social contract") | The **new political ideas**, and the change in what made a ruler legitimate. |
| The Calas case (1762) and Voltaire's *Treatise on Tolerance* (1763); deists | KC-5.3.I.A ("reexamined the role that religion played in public life") | Religion questioned as a **government power**, not abolished. |
| Salons, coffeehouses, letters; the *Encyclopédie* (1751 to 1772), banned and still printed; Kant's "Dare to know" (1784) | KC-5.3.I ("rise and diffusion ... questioned established traditions in all areas of life") | The ideas **spread**, and questioned tradition everywhere. |
| Revolution dates 1775, 1789, 1791, 1810; Nariño's printed translation (1793 or 1794) | KC-5.3.I ("often preceded revolutions") | The ideas came **first** and gave revolutionaries words (5.2 owns the rest). |
| "Sovereignty resides essentially in the nation" (1789); nationalism | KC-5.3.II.i | If states belong to the people, the people become **the nation**. |
| Locke's Royal African Company shares (1670s); Rousseau, *Emile* (1762), "a woman's education must therefore be planned in relation to man" | KC-5.3.I.C, IV.B (what the reformers pressed against) | The **turn**: the words were wider than their writers meant. |
| The 1787 society (nine Quakers of twelve), the Wedgwood medallion, Equiano (1789); British abolition 1807 and 1834; France 1848; Brazil 1888 | KC-5.3.I.C ("Enlightenment ideas and religious ideals ... the abolition of slavery") | Reform by **ideas and faith together**, over a century. |
| Austria 1848; Russia 1861, more than 20 million serfs | KC-5.3.I.C ("the end of serfdom") | Rights reached the **serfs**, and partly for reasons of state. |
| France: all adult men vote, 1848; Britain 1832, 1867, 1884 | KC-5.3.I.C ("expanded suffrage") | The **vote** widened, in steps. |
| De Gouges (1791), Wollstonecraft (1792), Seneca Falls (1848), Stanton and Mott | KC-5.3.IV.B; the CED's three examples | Women's **demands** challenged political and gender hierarchy. |
| By 1900: monarchies, other forced labor, women's votes almost nowhere (New Zealand 1893) | the reasoning move | The **continuity**: ideas changed fast; the world changed slowly. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 4.8: name one way the new global economy changed who did the work between 1450 and 1750.
   (b) From 3.2: where did Louis XIV say his power came from?
   (c) From 4.6: name one group that pushed back against a stronger state.
   **Bridge:** "4.8 ended: by 1750 the oceans were joined and states were stronger than ever. Who do
   those states belong to? Louis XIV said: to the king, by God's will. Today a group of writers asks
   a dangerous question about that answer."
3. **Topic question on screen, over a cinematic picture:** Who does a state belong to? How did a new
   way of thinking change the answer, and how far did the new rights reach by 1900?
4. **The old answer:** God, tradition, birth (context).
5. **A new way of knowing:** Newton and empiricism (KC-5.3.I.A).
6. **The new answers:** natural rights, the social contract, limits on power (KC-5.3.I.A).
7. **Religion questioned as a government power:** Calas and Voltaire (KC-5.3.I.A).
8. **The ideas spread and questioned everything:** salons, the *Encyclopédie*, "Dare to know" (KC-5.3.I).
9. **The ideas came first:** a timeline of the revolutions, Nariño (KC-5.3.I).
10. **The people become the nation** (KC-5.3.II.i).
11. **The turn:** the words were bigger than the men who wrote them.
12. **Abolition, by ideas and faith together** (KC-5.3.I.C).
13. **Serfs and voters** (KC-5.3.I.C).
14. **Women demand their rights:** de Gouges, Wollstonecraft, Seneca Falls (KC-5.3.IV.B).
15. **The skill (3.A): find the claim in a source**, modeled on Wollstonecraft.
16. **Practice:** de Gouges's first article and the Seneca Falls sentence, side by side with the
    words they rewrote.
17. **What changed, what stayed by 1900** (the reasoning move).
18. **Myths.** "The Enlightenment caused the revolutions"; "The Enlightenment was against religion";
    "Rights reached everyone in 1789." (A fourth, "the philosophers all agreed," is answered on the
    new-answers slide's notes, because the myth template holds three rows.)
19. **Retelling slide** (section 7).
20. **AP synthesis:** answer both learning objectives in a sentence each, then hand off to 5.2.
21. **Landing, over a cinematic picture.**

## 7. Retelling slide

A continuity-and-change line a student can redraw from memory:

**The old answer** (God, tradition, birth) → **the question** (by what right?) → **the new answer**
(reason, natural rights, consent of the people; the people become the nation) → **pressed further
over time** (abolition, the end of serfdom, wider voting, women's demands).

**What stayed by 1900:** kings and emperors on most thrones; other forced labor; women's votes almost
nowhere.

Result line: **By what right? The answer kept growing, slowly.**

Why this shape: the objectives are a context question (LO A, the first three boxes) and an
over-time question (LO B, the last box and the line underneath). A student who can redraw it can
answer both.

## 8. Owns / bridge-only (from the unit story map)

- **5.1 owns:** the Enlightenment's method and political ideas (KC-5.3.I.A); their spread, and the
  fact that they came before the revolutions (KC-5.3.I); nationalism introduced as the people
  becoming the nation (KC-5.3.II.i); reform movements by ideas and faith, abolition, the end of
  serfdom, expanded voting (KC-5.3.I.C); women's demands and emergent feminism, with the CED's three
  examples (KC-5.3.IV.B).
- **Bridge only:** the revolutions and their documents (5.2): the dates, one quoted line from the
  1789 declaration about the nation, Nariño's translation, and nothing about their causes or
  courses. The Haitian Revolution is one date. Adam Smith and free trade (5.7) and reforms answering
  industry (5.8) are not taught.
- **Hands to 5.2:** "By 1789 the ideas were everywhere educated people read. In America, France,
  Haiti and Spanish America, people turned them into revolutions. What caused them, and what did
  they create?"

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-1-CLAIM-LEDGER.md`)

The new claims, and the ones most likely to be wrong by the defect classes Units 2 to 4 kept finding:

- Every quotation checked letter for letter against its original or a named translation: Locke
  (§95, §123 of the Second Treatise; "white paper" in the *Essay*), Rousseau's opening line, Kant's
  motto, Wollstonecraft (ch. 4), de Gouges's first article (named translation), the Seneca Falls
  sentence, and the 1789 declaration's third article.
- Dates: 1687, 1689, 1748, 1762 (Calas and Rousseau), 1763, 1751 to 1772, 1784, 1787, 1789, 1791,
  1792, 1793, 1807, 1833 and 1834, 1840, 1848 (France, Austria, Seneca Falls), 1861, 1888, 1893.
- Numbers: nine Quakers of twelve founders; 17 and 11 volumes; more than 20 million serfs; 100
  signers.
- Superlatives and single causes to keep out: "the Enlightenment caused the revolutions"; "the
  first feminist"; "every thinker except Wollstonecraft"; "Voltaire the most famous writer in
  Europe" (narrowed to "one of the most famous"); "Brazil the last country in the Americas" (needs two
  sources); "New Zealand the first" (narrowed to "the first self-governing country").
- Motives stated as arguments: Alexander II's fear of revolt from below (his own reported words,
  and the Crimean defeat).

## 10. Visual requirements per beat

Pictures are checked in Phase 6. No image generator key is set in this environment, so AI
pictures are skipped; Commons returned HTTP 429 (rate limited) at the start of the build.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3, 21 | A painting of a reading in a salon (Lemonnier's *Madame Geoffrin's salon*, painted 1812) | The ideas, read aloud among the people who spread them. | Painted about sixty years after the scene it imagines: say so. |
| 4 | Louis XIV in coronation robes (Rigaud, 1701) | Divine right. | Already used in 3.2? Reuse, with its credit. |
| 5 | Newton's *Principia* title page (1687) | The method. | |
| 8 | The *Encyclopédie* frontispiece or a plate of a workshop | Everything explained by reason. | Frontispiece engraved 1772. |
| 12 | The Wedgwood medallion (1787) | Abolition, faith and ideas. | Its image of a kneeling, pleading man is how white abolitionists chose to show Africans; say so. |
| 14 | Wollstonecraft (Opie portrait), de Gouges's printed declaration, the Seneca Falls report | The CED's three examples as sources. | |
| 19 | The retelling diagram | | |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the
final report.

1. **Title:** "The Enlightenment," the CED's title exactly; the reading's title is "By What
   Right?", on the reading, both lesson files, the deck and Canvas.
2. **Skill Builder skill:** moves to the CED's suggested skill, 3.A, "identify and describe a claim
   in a source": find the claim, say it in your own words, say what it argues against. Modeled on
   Wollstonecraft, practiced on de Gouges and Seneca Falls.
3. **Learning targets:** three. Target 1, the method and the new political ideas (KC-5.3.I.A);
   Target 2, how they spread, came before the revolutions, and turned "the people" into the nation
   (KC-5.3.I, II.i); Target 3, reform movements and women's demands over time, and what stayed
   (KC-5.3.I.C, IV.B). Checkpoint 1 assesses Targets 1 and 2 (LO A); Checkpoint 2 assesses Target
   3 (LO B) and declares Continuity and Change, the CED's reasoning process.
4. **Primary Source:** the Seneca Falls *Declaration of Sentiments* (1848), a short excerpt set
   beside the line from 1776 it rewrote, with three questions: its claim (3.A), what it borrowed
   and changed, and what it shows about the Enlightenment's effect over time. It replaces the
   Locke paraphrases.
5. **Map module:** kept as a map of where the ideas traveled, with its intro, prompt and key
   rewritten to the story and the unsupported Encyclopédie figure removed.
6. **Evidence Lab:** short verified excerpts (Locke, Wollstonecraft, de Gouges, Seneca Falls) and
   real objects where Commons can be reached (the Geoffrin salon painting, the Wedgwood medallion);
   the "quoted directly" Locke card leaves.
7. **BeSurreal:** Seneca Falls, 20 July 1848: you are a woman deciding whether to sign a declaration
   that demands the vote, knowing that many people, including some of its friends, think the demand
   goes too far. It replaces the 1762 salon scene, which cited a declaration that did not exist yet.
8. **BeInTheRoom:** the existing scenario, "The Natural Rights Test" (Paris, 1788 to 1789), is kept,
   with its alignment corrected to the CED (LO A, KC-5.3.I.A and KC-5.3.I), its premise checked
   against the dates (Wollstonecraft's *Vindication* is 1792), and its sources corrected.
9. **Deep reading:** rebuilt around this story.
10. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2,
    the set Unit 4 used. Checkpoint 2 is the over-time objective the old lesson never assessed.
