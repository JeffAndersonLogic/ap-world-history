'use strict';

/**
 * The writing moves: the one place the course says, in plain words, what each
 * part of a strong AP free-response answer does. The exam-writing spine
 * (Jeff, 2026-11-22) teaches students the rubric's vocabulary and what earns
 * credit, but never the point values.
 *
 * Read by three things, so they can never teach different words:
 *   1. scripts/build-writing-moves.js writes assets/data/writing-moves.js,
 *      which the lesson renderer reads to draw a "Writing Move" box in the
 *      Skill Builder (Module 05) and Primary Source (Module 08).
 *   2. The same builder writes Yukichi's MagicSchool instructions and private
 *      reference file into docs/yukichi/.
 *   3. scripts/test/writing-moves.test.js, which fails the push if a move
 *      cites a skill or rubric row the CED does not have, if any student-facing
 *      text names a point value, or if a generated file drifts.
 *
 * Where the words come from: every move cites the CED rows it explains
 * (`ced`, codes from scripts/lib/ced-source/free-response.js, the College
 * Board's own wording). The plain-language `what`, `steps` and `avoid` are this
 * course's explanation of those rows for a ninth grader. When they disagree
 * with the CED, the CED wins and this file is wrong.
 *
 * `unit` is the unit where the move is first taught, from the sequence Claude
 * proposed on 2026-11-22 (Unit 5 thesis and short answers; 6 contextualization,
 * evidence beyond and sourcing; 7 documents and reasoning; 8 complexity). It is
 * a proposal Jeff has not yet approved beyond Unit 5.
 *
 * Student-facing: `name`, `what`, `steps`, `avoid`, `onTheExam`. Never write a
 * point value, a score, or "earns" into any of them.
 */

const MOVES = [
  {
    id: 'saq',
    name: 'Short-Answer Parts',
    unit: 5,
    ced: { skills: ['1.A', '1.B', '3.A'], rows: ['taskVerbs', 'shortAnswerNotes'] },
    what: 'A short-answer question gives you a source and three small questions, (a), (b) and (c). A reader checks each part on its own, so a strong answer gives each part its own direct answer, built around the part’s verb.',
    steps: [
      'Find the verb. <strong>Identify</strong> means name it, with no explanation. <strong>Describe</strong> means give its important details, more than one word or term. <strong>Explain</strong> means say how or why, using evidence or reasoning.',
      'Answer in your first sentence, using the question’s own words, so a reader can see you answered it.',
      'Add one specific piece of evidence: a detail from the source, or something you learned in this course. Say it in your own words.',
      'For an explain part, add the sentence that says how or why: “because…” or “which meant…”.'
    ],
    avoid: [
      'One paragraph that blurs all three parts together.',
      'Copying a quotation without saying what it means.',
      'Naming a term without describing it.',
      'Answering a different question from the one asked. If a part says ONE, give one, done well.'
    ],
    onTheExam: 'You will answer three short-answer questions: one about a historian’s writing, one about a primary source, and one about a picture, map, or chart.'
  },
  {
    id: 'thesis',
    name: 'Thesis',
    unit: 5,
    ced: { skills: ['6.A'], rows: ['dbq:Thesis/Claim', 'leq:Thesis/Claim'] },
    what: 'A thesis is your answer to the question, in one or two sentences: a claim a historian could argue with, plus the reasons you will use to prove it. Those reasons are your <strong>line of reasoning</strong>. “Historically defensible” means real evidence can back it up.',
    steps: [
      'Answer the question that was asked. You may use its key words, but do not just repeat it.',
      'Make a claim someone could argue with: what happened, how much it changed, or why.',
      'Add your reasons, the two or three ideas your paragraphs will prove. That is your line of reasoning.',
      'Keep it in one place, one or two sentences together, at the start of your answer.'
    ],
    avoid: [
      'Repeating the question: “The Silk Roads affected Eurasia in many ways.”',
      'A fact nobody would argue with: “The Silk Roads connected China and the Mediterranean.”',
      'A claim with no reasons: “The Silk Roads changed Eurasia a lot.”'
    ],
    onTheExam: 'Both the document-based question and the long essay ask for a thesis.'
  },
  {
    id: 'secondary-source',
    name: 'Reading a Historian’s Argument',
    unit: 5,
    ced: { skills: ['3.A', '3.B', '3.C', '3.D'], rows: ['shortAnswer'] },
    what: 'A secondary source is a historian writing later about the past. Historians make arguments, so you read them the way you read a primary source: find the claim, find the evidence, and decide what other evidence supports or challenges it.',
    steps: [
      'Find the historian’s claim: the sentence that says what they want you to believe about the past.',
      'Describe it in your own words.',
      'Find the evidence the historian uses to support it.',
      'Bring in evidence of your own from the course that supports, modifies, or challenges the claim, and say which it does.'
    ],
    avoid: [
      'Treating a historian’s claim as a plain fact instead of an argument.',
      'Summarizing the whole passage when the question asks about one claim.'
    ],
    onTheExam: 'The first short-answer question always gives you a historian’s writing.'
  },
  {
    id: 'contextualization',
    name: 'Contextualization',
    unit: 6,
    ced: { skills: ['4.A', '4.B'], rows: ['dbq:Contextualization', 'leq:Contextualization'] },
    what: 'Contextualization describes the bigger picture around the question: events, developments or processes before, during, or continuing after its time frame, that help explain it. It sets the stage before your argument.',
    steps: [
      'Ask: what was already happening, or happening around it, that made this topic possible?',
      'Describe that broader development with specific details. Several sentences, not a phrase.',
      'Connect it to the question: say how that setting led to, or shaped, the topic.'
    ],
    avoid: [
      'One sweeping sentence about all of history: “Throughout history, people have fought for power.”',
      'Context with no connection to the question.',
      'Using the same evidence here that you use later as your evidence beyond the documents.'
    ],
    onTheExam: 'Both the document-based question and the long essay ask for contextualization.'
  },
  {
    id: 'evidence-beyond',
    name: 'Evidence Beyond the Documents',
    unit: 6,
    ced: { skills: ['6.B'], rows: ['dbq:Evidence Beyond the Documents', 'leq:Evidence'] },
    what: 'Evidence is a specific historical example: a person, event, law, place, or number, described clearly enough that a reader knows exactly what you mean, and used to support your argument. In a document-based answer, you also bring in at least one piece the documents do not contain.',
    steps: [
      'Choose a specific example from the course, not a general statement.',
      'Describe it in a sentence or two, more than a name.',
      'Say how it supports your claim.'
    ],
    avoid: [
      'A name dropped with no description.',
      'Evidence from the wrong time period or place for the question.',
      'In a document-based answer, reusing your contextualization as your outside evidence.'
    ],
    onTheExam: 'The long essay is built on evidence you bring. The document-based question asks for at least one piece beyond the documents.'
  },
  {
    id: 'sourcing',
    name: 'Sourcing',
    unit: 6,
    ced: { skills: ['2.A', '2.B', '2.C'], rows: ['dbq:Sourcing'] },
    what: 'Sourcing asks who made a document, why, for whom, and in what situation, and then explains how that matters to your argument. The four lenses are <strong>point of view</strong>, <strong>purpose</strong>, <strong>historical situation</strong>, and <strong>audience</strong>.',
    steps: [
      'Choose one lens that really matters for this document.',
      'Say specifically what it is: not just “a merchant,” but what kind of merchant, writing when.',
      'Explain how or why it shapes what the document says or leaves out.',
      'Tie it back to your argument: “…which supports my claim that…”.'
    ],
    avoid: [
      'Naming the author’s point of view or purpose without explaining how it matters.',
      'Summarizing the document and calling it sourcing.',
      'Saying a source is “biased” and stopping there.'
    ],
    onTheExam: 'The document-based question asks you to source at least two documents.'
  },
  {
    id: 'document-evidence',
    name: 'Using Documents as Evidence',
    unit: 7,
    ced: { skills: ['6.B', '3.B'], rows: ['dbq:Evidence from the Documents'] },
    what: 'A document becomes evidence when you describe what it says in your own words and use it to support your argument. Strong answers group documents that support the same reason, and use at least four of them.',
    steps: [
      'Sort the documents into groups by the reason each one supports.',
      'For each document you use, describe its content in your own words. Do not just quote it.',
      'Say how it supports your claim.',
      'Aim for four or more documents, and more is better.'
    ],
    avoid: [
      'Walking through the documents one by one in order, like a list.',
      'Quoting a document without describing it.',
      'Misreading a document. Read each one twice.'
    ],
    onTheExam: 'The document-based question gives you seven documents.'
  },
  {
    id: 'reasoning',
    name: 'Historical Reasoning',
    unit: 7,
    ced: { skills: ['6.C', '5.A', '5.B'], rows: ['leq:Analysis and Reasoning'] },
    what: 'Historical reasoning is the shape of your argument: <strong>causation</strong> (why it happened, what it led to), <strong>comparison</strong> (how two cases are alike and different), or <strong>continuity and change</strong> (what changed and what stayed the same). Your argument follows the reasoning the question asks for.',
    steps: [
      'Find the reasoning in the question’s words: “causes,” “effects,” “compare,” “changes,” “continuities.”',
      'Organize your paragraphs around it, one reason or one side per paragraph.',
      'In each paragraph, say how the evidence shows that cause, similarity, or change.'
    ],
    avoid: [
      'Telling the story in order without saying why it happened or what changed.',
      'Answering a comparison question by describing only one case.'
    ],
    onTheExam: 'The long essay asks you to use historical reasoning to frame your argument.'
  },
  {
    id: 'complexity',
    name: 'Complex Understanding',
    unit: 8,
    ced: { skills: ['6.D'], rows: ['dbq:Complex Understanding', 'leq:Analysis and Reasoning'] },
    what: 'Complex understanding means your argument goes beyond one simple answer. You explain more than one side of the history: both causes and effects, both similarities and differences, both changes and continuities, more than one perspective, or a connection to another time or place. It has to be part of your argument, not one tacked-on sentence.',
    steps: [
      'Pick one route: both sides (cause and effect, change and continuity), several perspectives, or a connection across time or place.',
      'Build it into your thesis or a full paragraph.',
      'Support it with evidence, and explain why it matters to your answer.'
    ],
    avoid: [
      'A single “however” sentence at the end.',
      'Listing two sides without saying which matters more, or why.'
    ],
    onTheExam: 'Both the document-based question and the long essay reward a complex understanding.'
  }
];

const byId = Object.fromEntries(MOVES.map(m => [m.id, m]));

module.exports = { MOVES, byId };
