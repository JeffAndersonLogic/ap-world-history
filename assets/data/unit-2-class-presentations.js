(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson || !lesson.meta) return;

  const presentations = {
    'Topic 2.1': {
      title: 'Class Slides: The Silk Roads',
      desc: 'Follow along during class on your own device, or reopen these slides anytime to review the Silk Roads story of networks, exchange, and effects.',
      url: 'class-presentation-topic-2-1.html'
    },
    'Topic 2.2': {
      title: 'Class Slides: The Mongol Empire',
      desc: 'Follow along during class on your own device, or reopen these slides anytime to review conquest, governance, and the Pax Mongolica.',
      url: 'class-presentation-topic-2-2.html'
    }
  };

  if (presentations[lesson.meta.topic]) {
    lesson.classPresentation = presentations[lesson.meta.topic];
  }
})();
