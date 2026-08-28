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
})();
