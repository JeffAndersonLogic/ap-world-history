(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  if (!lesson.meta.canvasSubmissionNote) {
    lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  }
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.2.I.D.i",
      "theme": "Governance",
      "text": "In the Americas, as in Afro-Eurasia, state systems demonstrated continuity, innovation, and diversity, and expanded in scope and reach.",
      "illustrativeExamples": [
        "Maya city-states",
        "Mexica",
        "Inca",
        "Chaco",
        "Mesa Verde",
        "Cahokia"
      ]
    }
  ];

  lesson.skillBuilder = {
    label: 'Claims and evidence practice',
    title: 'AP Skill Builder: Turn a Source Detail into Evidence',
    intro: 'Finding a detail in a source is not the same as using evidence. AP Skill 3.B asks you to identify a specific detail and explain HOW that detail supports a historical claim. Your explanation is the bridge between the evidence and the argument.',
    steps: [
      { label: '1. Identify the claim', text: 'State the argument you are trying to support. Example: American states developed systems for organizing labor, resources, or territory.' },
      { label: '2. Select one specific detail', text: '<strong>Mexica:</strong> tribute lists, provincial garrisons, chinampas.<br><strong>Inca:</strong> mit’a labor, Qhapaq Ñan roads, quipu records.<br><strong>Maya:</strong> independent city-states and monumental centers.<br><strong>Cahokia:</strong> Monks Mound and organized communal labor.' },
      { label: '3. Explain the connection', text: 'Finish the thought: “This supports the claim because…” Explain what the detail reveals about state capacity, control, legitimacy, or organization.' },
      { label: '4. Check yourself', text: 'If your sentence only describes the object or event, you have not finished. Evidence becomes useful when you explain what it proves.' },
      { label: 'Response frame', text: 'The detail ___ supports the claim that ___ <strong>because</strong> it shows ___.' }
    ],
    prompt: 'Choose one specific piece of evidence about Maya, Mexica, Inca, Chaco, Mesa Verde, or Cahokia. In two sentences, state a claim about American state building and explain how your evidence supports that claim.'
  };
})();
