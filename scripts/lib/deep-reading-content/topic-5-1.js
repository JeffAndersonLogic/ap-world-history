'use strict';

/**
 * Topic 5.1, The Enlightenment: the deep reading.
 *
 * Why this exists. The success criteria want three philosophes with their core
 * ideas and an explanation of how those ideas challenged divine right,
 * hereditary aristocracy and Church authority; two mechanisms by which the ideas
 * spread; and two excluded groups with the STRUCTURAL reasons for their
 * exclusion, naming Rousseau on women's sphere and Locke's investment in the
 * Royal African Company.
 *
 * That last clause is unusual and it is the reason this chapter is shaped the
 * way it is. The criteria do not ask for a note that the Enlightenment was
 * imperfect; they ask why the exclusions were built in. So section 03 does it
 * properly, with the documents, and section 04 shows what the excluded did with
 * a universal claim once it existed in writing, which is the half that makes
 * Topic 5.2 legible.
 *
 * Three things carried deliberately:
 *
 *   1. Each thinker gets a mechanism rather than a slogan. "Consent of the
 *      governed" is a phrase students write without being able to say what it
 *      licenses, and what it licenses is removal of a ruler, which is the whole
 *      point of it in 1776 and 1789.
 *   2. The spread section treats print, salons and coffeehouses as
 *      infrastructure with costs and censors, not as an atmosphere, because a
 *      student who can say how a banned book reached Paris can explain why the
 *      ideas outran the states that banned them.
 *   3. Section 04 avoids both available cliches: that the Enlightenment was
 *      secretly a fraud, and that its exclusions were merely the prejudices of
 *      the age. The accurate version is that a universal claim written down is
 *      a tool that its authors could not keep, and Haiti is the proof.
 */

module.exports = {
  topicKey: 't5-1',
  slug: 'topic-5-1-enlightenment',
  lessonFile: 'lesson-5-1-enlightenment.html',

  titleHtml: 'Where Authority Comes <em>From</em>',
  deck: `For most of this course, the answer was God, or ancestry, or the mandate of heaven. Then a set of writers argued that authority comes from the people who are governed by it, and that if it stops serving them they may take it back. This chapter is what each of them actually argued, how banned books reached readers anyway, why the word <em>universal</em> was written by men who excluded most of humanity, and what the excluded did with it once it existed in print.`,

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 is the arguments, one mechanism each, which is what a checkpoint asking you to explain a thinker actually wants. Section 02 is how they traveled. Sections 03 and 04 are the pair the success criteria ask for: who was excluded and why structurally, and what happened when people outside the room read the same books.`,
    steps: [
      `<b>01 The arguments:</b> Locke, Rousseau, Montesquieu, Voltaire, Smith and Wollstonecraft, and what each one licenses.`,
      `<b>02 How ideas moved:</b> print, salons, coffeehouses, and getting round a censor.`,
      `<b>03 Who was excluded, and why:</b> the structural reasons, with the documents.`,
      `<b>04 What the excluded did with it:</b> a universal claim is a tool its authors cannot keep.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'arguments',
      num: '01',
      accent: 'gold',
      name: 'Six Arguments, and What Each One Licenses',
      navLabel: 'The arguments',
      dates: 'c. 1690 to 1792 &nbsp;·&nbsp; The philosophes',
      thesis: `The Enlightenment is not a mood about reason. It is a set of specific arguments, each of which authorizes a specific action, and the way to hold them is by what each one lets you do rather than by the phrase attached to it.`,
      parts: [
        {
          heading: 'The target: three claims under attack',
          blocks: [
            { p: `Before the arguments, the thing they were arguing against. European political order rested on three linked claims. <b>Divine right</b>: a monarch's authority comes from God, so resisting the king is a sin as well as a crime. <b>Hereditary aristocracy</b>: rank, land and office descend by birth, and the people who hold them are qualitatively suited to hold them. <b>Church authority</b>: a single institution defines truth, licenses what may be printed and taught, and holds jurisdiction over much of daily life.` },
            { p: `Each of the arguments below removes the foundation of one or more of those, which is why they were dangerous enough to be banned, and it is the reason to learn them as attacks rather than as opinions.` }
          ]
        },
        {
          heading: 'The six',
          blocks: [
            { p: `<b>John Locke</b>, in the <em>Two Treatises of Government</em> of <span class="num">1689</span>: people possess <span class="kt">natural rights</span> to life, liberty and property simply by existing, before any government exists. Government is created by agreement to protect those rights, so its authority is conditional. What that licenses is the sentence that mattered: a government that violates those rights has broken the trust on which it stands, and the people may replace it. Divine right cannot survive a conditional contract, and the American Declaration of Independence borrows the structure almost directly.` },
            { p: `<b>Jean-Jacques Rousseau</b>, in <em>The Social Contract</em> of <span class="num">1762</span>: sovereignty belongs to the people as a body and cannot be given away permanently. Locke made government a trustee; Rousseau made the people themselves the only legitimate sovereign, which is a harder claim, because it means no constitution, no dynasty and no treaty can bind a people against its own will. What it licenses is total refoundation rather than reform, which is one reason the French Revolution went further than the American.` },
            { p: `<b>Montesquieu</b>, in <em>The Spirit of the Laws</em> of <span class="num">1748</span>: liberty is destroyed when the same hands make, execute and judge the law, so power must be divided so that power checks power. This one is a design specification rather than a principle, and it is the direct ancestor of the branches in the United States Constitution.` },
            { p: `<b>Voltaire</b>: religious toleration and freedom of expression, argued mostly through satire and through campaigns on particular cases, above all the Calas affair, in which a Protestant merchant was tortured and executed in <span class="num">1762</span> on a charge Voltaire spent years demonstrating to be false. The argument is that the state has no business enforcing belief, and the method, publicity applied to a single injustice until the verdict is reversed, is as much the legacy as the principle.` },
            { p: `<b>Adam Smith</b>, in <em>The Wealth of Nations</em> of <span class="num">1776</span>: wealth is what a country produces rather than the bullion it holds, both parties to a voluntary exchange gain, and the pursuit of self-interest under competition tends to allocate resources efficiently without direction. The Topic 4.5 chapter shows what this was written against; the point here is that it is an argument against a state directing the economy, and it becomes the intellectual basis of the free trade politics in Topic 5.7.` },
            { p: `<b>Mary Wollstonecraft</b>, in <em>A Vindication of the Rights of Woman</em> of <span class="num">1792</span>: if reason is the ground of rights, and women are rational beings, then women hold the same rights, and the apparent inferiority of women is produced by an education designed to make them ornamental. The structure of the argument is the important part. She does not appeal to a new principle; she holds the philosophes to the one they had already published, which is exactly the move section 04 is about.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Enlightenment thinkers agreed with each other, and do not write that they were all democrats. They disagreed sharply: Locke wanted a limited monarchy with a propertied electorate, Rousseau distrusted representation altogether, Voltaire thought a strong reforming monarch preferable to a parliament, and Montesquieu admired an aristocratic check on the crown. Several of them were <b>enlightened absolutists</b> in practice, advising rulers such as Frederick II of Prussia and Catherine II of Russia, who took the administrative and legal reforms and kept the absolutism. Naming a disagreement is one of the fastest ways to show you have read them rather than a summary of them.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Conditional authority. <em>The mechanism is that if government exists in order to protect rights that people already hold, then its legitimacy depends on performance rather than on origin, so a ruler who fails the condition can be removed without the removal being a sin or a crime, which is the specific move that makes revolution arguable rather than merely possible.</em>`,
        limit: `Every thinker here set a boundary on who counted as a rights-holding person, and the boundaries were not accidents, which is what section 03 is about.`,
        comparison: `Against the <em>Mandate of Heaven</em> in Topic 1.1: China had a conditional theory of authority two thousand years earlier, in which a dynasty that misgoverned forfeited its mandate and rebellion against it was legitimate. The difference is where the condition is judged. The mandate is judged by heaven, read after the fact through floods, famine and defeat; the social contract is judged by the governed, in the present. Rights theory relocates the judge, which is why it authorizes action rather than explaining an outcome.`
      },
      terms: [
        ['Natural rights', 'Rights held by virtue of being human rather than granted by a ruler, which makes government conditional on protecting them.'],
        ['Social contract', 'The agreement by which people create government, and therefore the basis on which they may dissolve it.'],
        ['Popular sovereignty', 'Rousseau\'s claim that authority belongs permanently to the people as a body and cannot be alienated.'],
        ['Separation of powers', 'Montesquieu\'s design in which legislative, executive and judicial authority are held apart so power checks power.'],
        ['Enlightened absolutism', 'Rule by a monarch who adopts Enlightenment administrative and legal reforms while keeping undivided power.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'spread',
      num: '02',
      accent: 'iron',
      name: 'How a Banned Book Reached Its Reader',
      navLabel: 'How ideas moved',
      dates: 'c. 1700 to 1789 &nbsp;·&nbsp; Print, salons, coffeehouses',
      thesis: `Ideas do not travel by being true. They travel on physical infrastructure with costs, gatekeepers and evasions, and the reason these particular ideas spread fast is that eighteenth-century Europe had built the infrastructure and could not control it.`,
      parts: [
        {
          heading: 'Print, and the trade in forbidden books',
          blocks: [
            { p: `Printing had existed for three centuries, and what changed in the eighteenth was volume, variety and cheapness. Newspapers, periodicals, cheap pamphlets and libels, and above all the <span class="kt">Encyclopedie</span>, edited by Diderot and d'Alembert across some thirty-five volumes from <span class="num">1751</span>, which set out to compile all human knowledge with entries by Voltaire, Rousseau, Montesquieu and others, and which smuggled arguments about religion and politics into entries on other subjects.` },
            { p: `The Encyclopedie was suppressed, and it sold thousands of sets anyway. That is the mechanism worth having, and it is about geography rather than principle. Censorship in France ran through royal licensing and the Church, but publishing houses in Switzerland, the Dutch Republic and the Rhineland were outside French jurisdiction, printed what Paris banned, and moved it back across the border through a smuggling trade with its own routes, prices and bribes. A censorship regime with a land border and a profitable evasion is a tax on forbidden books rather than a barrier to them.` },
            { p: `Suppression also advertised. A book condemned by the authorities acquired a market, which is why publishers sometimes sought a condemnation, and why the philosophes' habit of publishing anonymously or abroad was a commercial strategy as much as a precaution.` }
          ]
        },
        {
          heading: 'Rooms where people argued',
          blocks: [
            { p: `<b>Salons</b> were gatherings held in private homes, in Paris characteristically organized and hosted by women, at which writers, aristocrats, officials and visitors discussed ideas under a hostess's direction. The salonniere chose the guests, made the introductions and steered the conversation, which made her a genuine intellectual broker: a manuscript read at the right salon reached the people who could fund it, print it or protect it. Salons also mixed ranks, seating a titled nobleman next to an untitled writer on the basis that the writer was worth listening to, which is a small social fact with a large implication.` },
            { p: `<b>Coffeehouses</b> did the same work further down the social scale and in public. London had hundreds by the early eighteenth century, and the price of entry was the price of a cup. They carried newspapers, hosted argument, and specialized: particular houses became the places for shipping news, for stock dealing, for scientific talk. Lloyd's of London began as a coffeehouse where marine insurance was arranged, which is a reminder that this infrastructure was commercial before it was political.` },
            { p: `Add to those the <b>learned societies and academies</b>, which corresponded across borders in Latin and increasingly in French, and the <b>Republic of Letters</b>, the self-description of a transnational community of writers who read and answered each other across states at war with each other.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the smugglers kept accounts',
              html: `A great deal of what is known about which forbidden books actually sold comes from the surviving records of a Swiss publisher, the Societe typographique de Neuchatel, whose order books, correspondence with booksellers and shipping accounts historians have reconstructed in detail. Because the firm was a business, it recorded what its customers ordered rather than what anyone thought they should be reading, and the result complicates the story: alongside Rousseau and the Encyclopedie, the trade in illegal books ran heavily on scandal, pornography and libels against public figures. The ideas traveled inside a commerce that was not primarily philosophical, and knowing that is better history than a picture of pure ideas moving on their merits.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Jurisdictional arbitrage. <em>The mechanism is that censorship operates inside a state&rsquo;s borders while printing can be done outside them, so a banned text is printed in Neuchatel or Amsterdam and smuggled back at a markup, which converts prohibition into a price rather than a prevention and hands the trade to whoever is willing to break the law.</em>`,
        limit: `The infrastructure reached the literate and the urban. Most people in France in 1789 could not read fluently, and ideas reached them through preaching, rumor, sermons, cheap prints and talk, in versions the authors would not always have recognized.`,
        comparison: `Against the <em>printing revolution</em> of Foundations 5: the technology was old by 1750, so what changed was not the press but the density of the network around it, the periodicals, the postal routes, the coffeehouses and the cross-border trade. Technology is rarely the variable; the institutions built on it usually are.`
      },
      terms: [
        ['Encyclopedie', 'The thirty-five-volume compilation edited by Diderot and d\'Alembert, suppressed and widely sold, which carried argument inside reference.'],
        ['Salon', 'A gathering in a private home, characteristically hosted by a woman, where writers and elites met and reputations were made.'],
        ['Coffeehouse', 'A public room with newspapers and argument, cheap to enter, which spread the same debates further down the social scale.'],
        ['Republic of Letters', 'The transnational community of correspondents who read and answered each other across hostile states.'],
        ['Censorship', 'State and Church licensing of print, evaded by publishing abroad, which turned prohibition into a smuggling trade.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'exclusions',
      num: '03',
      accent: 'rust',
      name: 'Who Was Excluded, and Why It Was Not an Oversight',
      navLabel: 'The exclusions',
      dates: 'c. 1690 to 1789 &nbsp;·&nbsp; The structural reasons',
      thesis: `The word used was universal and the practice was not, and the gap is not explained by saying that people are products of their time. In each case there is an argument, or an interest, doing the work, and naming it is what the success criteria ask for.`,
      parts: [
        {
          heading: 'Women',
          blocks: [
            { p: `Rousseau is the clearest case because he wrote the exclusion out explicitly. In <em>Emile</em>, published in <span class="num">1762</span>, the same year as <em>The Social Contract</em>, he sets out an education for a boy aimed at independence and reason, and an education for the girl who will marry him, Sophie, aimed at pleasing, serving and being useful to him. Women's sphere is domestic by nature; their virtue is modesty and their function is to raise citizens rather than to be citizens.` },
            { p: `The structural reason is that the political theory was built on a household, and this is the part to understand rather than merely deplore. The contracting individual of eighteenth-century political thought was assumed to be a property-holding head of household, who represented his dependents, wife, children and servants, in public life. Under the coverture rules of English law, a married woman's legal personality was absorbed into her husband's, so she could not separately hold property or contract. Building rights on property and independence therefore excluded women by construction, and no separate act of exclusion was required.` },
            { p: `That is why Wollstonecraft's argument attacks the education rather than the principle: if the apparent unfitness of women is manufactured by how they are raised, the premise that dependence is natural collapses, and the exclusion has nothing left to stand on.` }
          ]
        },
        {
          heading: 'Enslaved Africans and colonial subjects',
          blocks: [
            { p: `Locke is the case the success criteria name, and the facts are uncomfortable and precise. He was a shareholder in the <b>Royal African Company</b>, which held the English monopoly on the Atlantic slave trade, and he served as secretary to the Lords Proprietors of Carolina, in connection with the <em>Fundamental Constitutions of Carolina</em>, a document providing that a freeman shall have absolute power and authority over his enslaved people. The man who wrote that all men are born free was financially and administratively involved in the trade that denied it.` },
            { p: `How the theory absorbed that is worth tracing, because it is not simple hypocrisy. Locke's own account of legitimate slavery makes it the condition of a captive taken in a just war, who has forfeited his life and receives servitude in place of death, an argument that in principle covers almost nobody in the Atlantic trade and in practice was available to anyone who wanted a justification. Property theory supplied a second route: if rights are grounded in property, and law defines enslaved people as property, then a right to property becomes a defense of slaveholding rather than a threat to it.` },
            { p: `And several philosophes wrote about human difference in ways that supplied the ground for racial exclusion directly. Hume appended a note asserting the inferiority of Africans; Kant and Voltaire wrote passages of similar character; and eighteenth-century natural history proposed hierarchies of human varieties in the language of scientific classification, which gave the exclusion a vocabulary that sounded like knowledge. This is the beginning of what the Topic 6.1 chapter calls scientific racism, and it belongs here as a cause rather than there as an appearance.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Two bad answers to avoid. The first is that Enlightenment thinkers "were men of their time," which explains nothing and is factually weak, since abolitionist arguments existed in their time and some of them, notably Montesquieu, Condorcet and Diderot, made them. The second is that the Enlightenment was therefore a fraud, which cannot account for the fact that its own vocabulary was the most effective weapon anyone found against those exclusions, as section 04 shows. The strong answer names the specific mechanism in each case: a political theory built on the propertied household excluded women by construction, and a political theory grounded in property could be turned to defend property in people.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Exclusion by construction. <em>The mechanism is that when a theory grounds rights in independence and property ownership, everyone legally defined as a dependent or as property falls outside it automatically, so no separate clause of exclusion is needed and the theory can be stated in universal words while operating on a small fraction of the population.</em>`,
        limit: `It is a description of how the theory worked, not a verdict that its authors were merely trapped by it. Some of them argued against slavery and for women&rsquo;s education, which shows the alternatives were available and were not taken.`,
        comparison: `Against the <em>casta system</em> in Topic 4.7: Spanish America excluded people openly by naming categories in law, while Enlightenment theory excluded people silently by defining the rights-holder in terms most people could not meet. The open version is easier to attack and the silent version is harder to see, which is why the arguments in section 04 had to begin by making it visible.`
      },
      terms: [
        ['Coverture', 'The English rule absorbing a married woman\'s legal personality into her husband\'s, which barred her from separate property or contract.'],
        ['Royal African Company', 'The English slave-trading monopoly in which Locke held shares, and the concrete link between rights theory and the trade.'],
        ['Fundamental Constitutions of Carolina', 'The colonial document, connected to Locke as secretary to the Proprietors, granting absolute power over enslaved people.'],
        ['Universalism', 'The claim that rights belong to all people as such, stated in this period by writers who applied it to few.'],
        ['Scientific racism', 'The eighteenth-century classification of human varieties into a hierarchy, which gave exclusion the vocabulary of knowledge.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'seized',
      num: '04',
      accent: 'oxide',
      name: 'A Universal Claim Is a Tool Its Authors Cannot Keep',
      navLabel: 'What was done with it',
      dates: 'c. 1770 to 1804 &nbsp;·&nbsp; The excluded read the same books',
      thesis: `Once a general principle is in print, anyone can hold you to it, and the most consequential thing about Enlightenment universalism is that the people it excluded used its own sentences against it, in public, in the authors&rsquo; own language.`,
      parts: [
        {
          heading: 'The move, and four people who made it',
          blocks: [
            { p: `The move is always the same. Take the principle as stated. Show that the exclusion is an inconsistency rather than an exception. Demand the principle be applied. It works because a general claim is difficult to defend selectively without abandoning it, and abandoning it costs its authors the argument they needed against kings.` },
            { p: `<b>Wollstonecraft</b>, in <span class="num">1792</span>, argued that rights grounded in reason cannot exclude rational beings, and that the evidence of women's unfitness is the product of the education given them.` },
            { p: `<b>Olympe de Gouges</b>, in <span class="num">1791</span>, took the French <em>Declaration of the Rights of Man and of the Citizen</em> and rewrote it article by article as the <em>Declaration of the Rights of Woman and of the Female Citizen</em>, a form that makes the argument by structure: every clause is theirs, with the exclusion removed. She was executed in <span class="num">1793</span>.` },
            { p: `<b>Olaudah Equiano</b>, in <span class="num">1789</span>, published an autobiography of enslavement and freedom that became a bestseller in Britain and was written for a reading public that had absorbed the language of natural rights, precisely so that it could be held to it.` },
            { p: `<b>Toussaint Louverture</b> and the revolutionaries of Saint-Domingue, from <span class="num">1791</span>, took the French declaration at its word, and their success is the reason the Topic 5.2 chapter treats Haiti as the most radical of the Atlantic revolutions rather than the smallest.` }
          ]
        },
        {
          heading: 'Why this matters for the rest of the unit',
          blocks: [
            { p: `Carry two sentences forward. First, the Atlantic revolutions of Topic 5.2 are not simply Enlightenment ideas being implemented; they are arguments about how far the ideas extend, which is why each of them produced a revolution and then a fight over who was included in it.` },
            { p: `Second, every reform movement in the rest of this unit runs the same move. Abolitionists, suffrage campaigners, trade unionists and nationalists all argue that a principle already accepted has not been applied to them, and the Topic 5.8 chapter shows what that looks like when the principle is rights and the excluded party is a factory worker. Learn the move once here and it explains most of the century.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the text is the argument',
              html: `De Gouges&rsquo;s declaration is the clearest evidence anywhere in this unit that the appropriation was deliberate rather than coincidental, because it is a rewriting rather than a response. Set the two documents side by side and the French original&rsquo;s Article 1, that men are born and remain free and equal in rights, becomes hers, that woman is born free and remains equal to man in rights, with the rest following clause by clause. A historian reading two texts in that relationship does not need to speculate about influence, which is why this kind of source, one document deliberately built on the shape of another, is worth more than a dozen assertions of general impact.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Holding a principle to its own terms. <em>The mechanism is that a general claim cannot be defended selectively without being given up, so an excluded group that adopts the vocabulary of the people excluding them forces a choice between admitting them and abandoning the principle, which is the argumentative move behind abolition, suffrage and anticolonial nationalism alike.</em>`,
        limit: `It is a rhetorical opening rather than a guarantee. De Gouges was executed, Wollstonecraft&rsquo;s argument took a century to prevail, and Haiti won by fighting rather than by persuading.`,
        comparison: `Against the <em>Protestant Reformation</em> in Foundations 5: printing a text in a language ordinary readers could check produced the same loss of control, because an authority that publishes its own standard cannot then be the only one permitted to read it. Universal principles and vernacular scripture fail in the same direction and for the same reason.`
      },
      terms: [
        ['Declaration of the Rights of Man', 'The 1789 French statement of universal rights, and the text de Gouges rewrote to expose its exclusion.'],
        ['Olympe de Gouges', 'The author of the 1791 Declaration of the Rights of Woman, executed in 1793.'],
        ['Olaudah Equiano', 'The formerly enslaved author whose 1789 autobiography argued abolition to a public schooled in natural rights.'],
        ['Abolitionism', 'The movement to end the slave trade and slavery, which used the rights vocabulary against the societies that produced it.'],
        ['Appropriation of principle', 'The argumentative move of demanding that an accepted general claim be applied to the group it excluded.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a full argument: the claim, the specific evidence, and the reason. The second and third are the pair the success criteria ask for, so learn them together.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Conditional authority is what makes revolution arguable',
        body: `Divine right made resistance a sin, because the ruler&rsquo;s authority came from God. Locke&rsquo;s Two Treatises of 1689 grounded government in an agreement to protect rights people already hold, which makes legitimacy depend on performance rather than origin, so a government that violates those rights may be replaced. Rousseau went further in 1762: sovereignty belongs to the people as a body and cannot be permanently given away, so no constitution or dynasty binds them. Montesquieu in 1748 supplied the design, dividing power so power checks power. The American Declaration borrows Locke&rsquo;s structure and the United States Constitution borrows Montesquieu&rsquo;s, which is why these are attacks rather than opinions.`
      },
      {
        category: 'Mechanism',
        title: 'Censorship with a land border is a price, not a barrier',
        body: `French censorship ran through royal licensing and the Church, but publishing houses in Switzerland, the Dutch Republic and the Rhineland lay outside French jurisdiction, printed what Paris banned and moved it back through an organized smuggling trade. The Encyclopedie was suppressed and sold thousands of sets. Condemnation also advertised, which is why publishing anonymously or abroad was commercial strategy as much as precaution. Salons, hosted in Paris characteristically by women who chose the guests and steered the talk, and coffeehouses charging the price of a cup, carried the same arguments through ranks that never bought a banned book.`
      },
      {
        category: 'Structure',
        title: 'The exclusions were built into the theory, not appended to it',
        body: `Rousseau&rsquo;s Emile, published the same year as The Social Contract, gives the boy an education for independence and Sophie one for pleasing and serving him, so women&rsquo;s sphere is domestic by nature. The structural reason is that the rights-holder of eighteenth-century theory was a property-holding head of household representing his dependents, and under coverture a married woman could not separately own property or contract, so building rights on property and independence excluded women by construction. The same grounding cut the other way in the Atlantic: Locke held shares in the Royal African Company and served the Carolina Proprietors, and a right to property defends slaveholding once law defines people as property.`
      },
      {
        category: 'Consequences',
        title: 'The excluded used the authors&rsquo; own sentences',
        body: `Wollstonecraft argued in 1792 that rights grounded in reason cannot exclude rational beings and that women&rsquo;s apparent unfitness is manufactured by their education. Olympe de Gouges rewrote the Declaration of the Rights of Man article by article in 1791 as the Declaration of the Rights of Woman, so the argument is made by the structure itself, and was executed in 1793. Equiano&rsquo;s 1789 autobiography addressed a public schooled in natural rights. And the revolutionaries of Saint-Domingue took the French declaration at its word from 1791 and won. A general claim cannot be defended selectively without being abandoned, which is why the same move recurs in every reform movement in this unit.`
      }
    ]
  }
};
