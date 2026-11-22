'use strict';

/**
 * The College Board's own words for the free-response section: the six
 * historical thinking skills, what each free-response question asks, the task
 * verbs, and the DBQ and LEQ rubrics. This is where the writing spine starts
 * (Jeff, 2026-11-22: students learn what the rubric rewards in its own
 * vocabulary, but not the point values).
 *
 * Source: AP World History: Modern Course and Exam Description, effective
 * Fall 2026, transcribed 2026-11-22 from the PDF at
 * https://apcentral.collegeboard.org/media/pdf/ap-world-history-modern-course-and-exam-description.pdf
 * (Course Framework V.1 p. 14; Exam Information V.1 pp. 195, 197, 198, 200,
 * 218 to 222; Scoring Guidelines V.1 p. 224). Not from any file in this
 * repository and not from memory. The PDF's text layer drops the spaces
 * between some words ("Makeahistorically"); those spaces were restored by
 * reading the page, and nothing else was changed. Checked on 2026-11-22 by
 * comparing every string, sentence by sentence and ignoring whitespace,
 * ligatures and the PDF's control characters, against the PDF's own text; the
 * check caught one transcription error ("AP World History Exam" where p. 197
 * prints "AP Exam"), which was corrected.
 *
 * This edition already describes the May 2027 exam (College Board, "AP
 * History Exam Updates", read 2026-11-22): three required short-answer
 * questions, each with a source, and one required long essay question.
 * College Board says the rubrics did not change.
 *
 * Point values are recorded here because they are part of the rubric, and the
 * builder needs them to know which criteria are separate. They are TEACHER
 * information: no student-facing surface prints them, and
 * scripts/test/writing-moves.test.js fails the push if one does.
 *
 * Deliberately NOT transcribed: the CED's sample questions, their answer
 * choices and the multiple-choice answer key on p. 217. An answer key never
 * enters this repository (Jeff, 2026-10-19; scripts/test/no-answer-keys.test.js).
 *
 * Edit this file only to match a new CED, and say which edition here. Never
 * edit it to match the course or the tutorials.
 */

module.exports = {
  edition: 'AP World History: Modern Course and Exam Description, effective Fall 2026',
  transcribed: '2026-11-22',

  // Course Framework V.1, p. 14, "AP Historical Thinking Skills".
  skills: [
    { code: '1', name: 'Developments and Processes', text: 'Identify and explain historical developments and processes.', page: 14,
      subskills: [
        { code: '1.A', text: 'Identify a historical concept, development, or process.' },
        { code: '1.B', text: 'Explain a historical concept, development, or process.' }
      ] },
    { code: '2', name: 'Sourcing and Situation', text: 'Analyze sourcing and situation of primary and secondary sources.', page: 14,
      subskills: [
        { code: '2.A', text: 'Identify a source’s point of view, purpose, historical situation, and/or audience.' },
        { code: '2.B', text: 'Explain the point of view, purpose, historical situation, and/or audience of a source.' },
        { code: '2.C', text: 'Explain the significance of a source’s point of view, purpose, historical situation, and/or audience, including how these might limit the use(s) of a source.' }
      ] },
    { code: '3', name: 'Claims and Evidence in Sources', text: 'Analyze arguments in primary and secondary sources.', page: 14,
      subskills: [
        { code: '3.A', text: 'Identify and describe a claim and/or argument in a text-based or non-text-based source.' },
        { code: '3.B', text: 'Identify the evidence used in a source to support an argument.' },
        { code: '3.C', text: 'Compare the arguments or main ideas of two sources.' },
        { code: '3.D', text: 'Explain how claims or evidence support, modify, or refute a source’s argument.' }
      ] },
    { code: '4', name: 'Contextualization', text: 'Analyze the context of historical events, developments, or processes.', page: 14,
      subskills: [
        { code: '4.A', text: 'Identify and describe a historical context for a specific historical development or process.' },
        { code: '4.B', text: 'Explain how a specific historical development or process is situated within a broader historical context.' }
      ] },
    { code: '5', name: 'Making Connections', text: 'Using historical reasoning processes (comparison, causation, continuity and change), analyze patterns and connections between and among historical developments and processes.', page: 14,
      subskills: [
        { code: '5.A', text: 'Identify patterns among or connections between historical developments and processes.' },
        { code: '5.B', text: 'Explain how a historical development or process relates to another historical development or process.' }
      ] },
    { code: '6', name: 'Argumentation', text: 'Develop an argument.', page: 14,
      subskills: [
        { code: '6.A', text: 'Make a historically defensible claim.' },
        { code: '6.B', text: 'Support an argument using specific and relevant evidence.' },
        { code: '6.C', text: 'Use historical reasoning to explain relationships among pieces of historical evidence.' },
        { code: '6.D', text: 'Corroborate, qualify, or modify an argument using diverse and alternative evidence in order to develop a complex argument.',
          mightInclude: [
            'Explain how or why a historical claim or argument is or is not effective.',
            'Explain the relative historical significance of a source’s credibility and limitations.',
            'Explain relevant and insightful connections within and across periods.',
            'Explain nuance of an issue by analyzing multiple variables.'
          ] }
      ] }
  ],

  // Exam Information V.1, pp. 195 and 197 to 198.
  sections: {
    shortAnswer: {
      page: 197,
      text: 'The second part of Section I of the AP Exam includes three required short-answer questions. Students must answer all three short-answer questions. Short-answer question 1 includes a secondary text source, short-answer question 2 includes a primary text source, and short-answer question 3 includes a primary or secondary non-text source. The three questions will cover historical developments and processes between the years of 1200 and 2001, and each of the questions will focus on a different historical period.',
      weighting: '20%', timing: '40 minutes'
    },
    documentBased: {
      page: 197,
      text: 'The document-based question presents students with seven documents offering various perspectives on a historical development or process.',
      requires: [
        'Respond to the prompt with a historically defensible thesis or claim that establishes a line of reasoning.',
        'Describe a broader historical context relevant to the prompt.',
        'Support an argument in response to the prompt using at least four documents.',
        'Use at least one additional piece of specific historical evidence (beyond that found in the documents) relevant to an argument about the prompt.',
        'For at least two documents, explain how or why the document’s point of view, purpose, historical situation, and/or audience is relevant to an argument.',
        'Demonstrate a complex understanding of a historical development related to the prompt through sophisticated argumentation and/or effective use of evidence.'
      ],
      scope: 'The topic of the document-based question will include historical developments or processes between the years 1200 and 2001.',
      weighting: '25%', timing: '60 minutes (includes 15-minute reading period)'
    },
    longEssay: {
      page: 198,
      requires: [
        'Respond to the prompt with a historically defensible thesis or claim that establishes a line of reasoning.',
        'Describe a broader historical context relevant to the prompt.',
        'Support an argument in response to the prompt using at least two pieces of specific and relevant evidence.',
        'Use historical reasoning (e.g., comparison, causation, continuity or change over time) to frame or structure an argument that addresses the prompt.',
        'Demonstrate a complex understanding of a historical development related to the prompt through sophisticated argumentation and/or effective use of evidence.'
      ],
      scope: 'The long essay question is required and covers approximately half of the chronological scope of the course.',
      weighting: '15%', timing: '40 minutes'
    }
  },

  // Exam Information V.1, p. 200, "Task Verbs Used in Free-Response Questions".
  taskVerbs: {
    page: 200,
    Compare: 'Provide a description or explanation of similarities and/or differences.',
    Describe: 'Provide the relevant characteristics of a specified topic.',
    Evaluate: 'Judge or determine the significance or importance of information, or the quality or accuracy of a claim.',
    Explain: 'Provide information about how or why a relationship, process, pattern, position, situation, or outcome occurs, using evidence and/or reasoning. Explain “how” typically requires analyzing the relationship, process, pattern, position, situation, or outcome, whereas explain “why” typically requires analysis of motivations or reasons for the relationship, process, pattern, position, situation, or outcome.',
    Identify: 'Indicate or provide information about a specified topic, without elaboration or explanation.',
    'Support an argument': 'Provide specific examples and explain how they support a claim.'
  },

  // Scoring Guidelines V.1, p. 224, the short-answer General Scoring Notes.
  shortAnswerNotes: {
    page: 224,
    notes: [
      'Each point is earned independently.',
      'Describe: Provide the relevant characteristics of a specified topic. Description requires more than simply mentioning an isolated term.',
      'Explain: Provide information about how or why a historical development or process occurs or how or why a relationship exists.'
    ]
  },

  // Exam Information V.1, p. 218, "AP History Rubrics", introductory notes.
  rubricNotes: {
    page: 218,
    notes: [
      'Except where otherwise noted, each point of the rubric is earned independently. For instance, a student could earn a point for evidence beyond the documents without earning a point for thesis/claim.',
      'Accuracy: The components of this rubric each require that students demonstrate historically defensible content knowledge. Given the timed nature of the exam, a response may contain errors that do not detract from its overall quality, as long as the historical content used to advance the argument is accurate.',
      'Clarity: Exam essays should be considered first drafts and thus may contain grammatical errors. Those errors will not be counted against a student unless they obscure the successful demonstration of the content knowledge, skills, and reasoning processes described in the rubrics.'
    ]
  },

  // Exam Information V.1, pp. 218 to 220, "AP History DBQ Rubric (7 points)".
  dbqRubric: [
    { row: 'A', category: 'Thesis/Claim', points: 1, page: 218,
      criterion: 'Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning.',
      decisionRules: 'To earn this point, the thesis must make a claim that responds to the prompt rather than restating or rephrasing the prompt. The thesis must consist of one or more sentences located in one place, either in the introduction or the conclusion.' },
    { row: 'B', category: 'Contextualization', points: 1, page: 218,
      criterion: 'Describes a broader historical context relevant to the prompt.',
      decisionRules: 'To earn this point, the response must describe broader historical events, developments, or processes that occur before, during, or continue after the time frame of the prompt that are relevant to the topic. This point is not awarded for merely a phrase or reference.' },
    { row: 'C', category: 'Evidence from the Documents', points: 2, page: 219,
      criterion: '1 pt: Uses the content of at least three documents to address the topic of the prompt. OR 2 pts: Supports an argument in response to the prompt using at least four documents.',
      decisionRules: 'To earn one point, the response must accurately describe — rather than simply quote — the content from at least three of the documents. To earn two points, the response must accurately describe — rather than simply quote — the content from at least four documents. In addition, the response must use the content of the four documents to support an argument in response to the prompt.' },
    { row: 'C', category: 'Evidence Beyond the Documents', points: 1, page: 219,
      criterion: 'Uses at least one additional piece of specific historical evidence (beyond that found in the documents) relevant to an argument in response to the prompt.',
      decisionRules: 'To earn this point, the response must describe the evidence and must use more than a phrase or reference. This additional piece of evidence must be different from the evidence used to earn the point for contextualization.' },
    { row: 'D', category: 'Sourcing', points: 1, page: 220,
      criterion: 'For at least two documents, explains how or why the document’s point of view, purpose, historical situation, and/or audience is relevant to an argument.',
      decisionRules: 'To earn this point, the response must explain how or why (rather than simply identifying) the document’s point of view, purpose, historical situation, or audience is relevant to an argument about the prompt for each of the two documents sourced.' },
    { row: 'D', category: 'Complex Understanding', points: 1, page: 220,
      criterion: 'Demonstrates a complex understanding of the historical development that is the focus of the prompt through sophisticated argumentation and/or effective use of evidence.',
      decisionRules: 'A response may demonstrate a complex understanding through sophisticated argumentation that is relevant to the prompt. This may be done in a variety of ways, such as: Explaining multiple themes or perspectives to explore complexity or nuance; OR Explaining multiple causes or effects, multiple similarities or differences, or multiple continuities or changes; OR Explaining both cause and effect, both similarity and difference, or both continuity and change; OR Explaining relevant and insightful connections within and across periods or geographical areas. These connections should clearly relate to an argument that responds to the prompt. A response may demonstrate a complex understanding through effective use of evidence relevant to an argument that addresses the prompt. This may be done in a variety of ways, such as: Effectively using seven documents to support an argument that responds to the prompt; OR Explaining how the point of view, purpose, historical situation, and/or audience of at least four documents supports an argument that responds to the prompt; OR Using documents and evidence beyond the documents effectively to demonstrate a sophisticated understanding of different perspectives relevant to the prompt. This complex understanding must be part of the argument and may be demonstrated in any part of the response. While it is not necessary for this complex understanding to be woven throughout the response, it must be more than merely a phrase or reference.' }
  ],

  // Exam Information V.1, pp. 221 to 222, "AP History LEQ Rubric (6 points)".
  leqRubric: [
    { row: 'A', category: 'Thesis/Claim', points: 1, page: 221,
      criterion: 'Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning.',
      decisionRules: 'To earn this point, the thesis must make a claim that responds to the prompt, rather than restating or rephrasing the prompt. The thesis must consist of one or more sentences located in one place, either in the introduction or the conclusion.' },
    { row: 'B', category: 'Contextualization', points: 1, page: 221,
      criterion: 'Describes a broader historical context relevant to the prompt.',
      decisionRules: 'To earn this point, the response must describe broader historical events, developments, or processes that occur before, during, or continue after the time frame of the prompt that are relevant to the topic. This point is not awarded for merely a phrase or a reference.' },
    { row: 'C', category: 'Evidence', points: 2, page: 221,
      criterion: '1 pt: Provides specific examples of at least two pieces of evidence relevant to the topic of the prompt. OR 2 pts: Supports an argument in response to the prompt using at least two pieces of specific and relevant evidence.',
      decisionRules: 'To earn one point, the response must identify specific historical examples relevant to the topic of the prompt. To earn two points the response must use specific historical evidence to support an argument in response to the prompt.' },
    { row: 'D', category: 'Analysis and Reasoning', points: 2, page: 222,
      criterion: '1 pt: Uses historical reasoning (e.g. comparison, causation, CCOT) to frame or structure an argument that addresses the prompt. OR 2 pts: Demonstrates a complex understanding of the historical development that is the focus of the prompt through sophisticated argumentation and/or effective use of evidence.',
      decisionRules: 'To earn the first point, the response must demonstrate the use of historical reasoning to frame or structure an argument, although the reasoning might be uneven or imbalanced, or the evidence may be overly general or lacking specificity. To earn the second point, the response may demonstrate a complex understanding through sophisticated argumentation that is relevant to the prompt. This may be done in a variety of ways, such as: Explaining multiple themes or perspectives to explore complexity or nuance; OR Explaining multiple causes or effects, multiple similarities or differences, or multiple continuities or changes; OR Explaining both cause and effect, both similarity and difference, or both continuity and change; OR Explaining relevant and insightful connections within and across periods or geographical areas. These connections should clearly relate to an argument that responds to the prompt. A response may demonstrate a complex or nuanced understanding through effective use of evidence relevant to an argument that addresses the prompt. This may be done in a variety of ways, such as: Explaining how multiple pieces of specific and relevant evidence (at least four) support a nuanced or complex argument that responds to the prompt; OR Using evidence effectively to demonstrate a sophisticated understanding of different perspectives relevant to the prompt. This complex understanding must be part of the argument and may be demonstrated in any part of the response. While it is not necessary for this complex understanding to be woven throughout the response, it must be more than merely a phrase or reference.' }
  ]
};
