(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  if (!lesson.meta.canvasSubmissionNote) {
    lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  }
})();
