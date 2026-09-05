(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson || !lesson.meta || !lesson.evidenceLab) return;

  const topic = String(lesson.meta.topic || '').replace(/^Topic\s+/i, '').trim();
  const set = (window.BH_MODULE7_EVIDENCE || {})[topic];
  if (!set) return;

  const unit = Number((topic.match(/^(\d+)/) || [])[1] || 0);
  const task = unit >= 7
    ? 'Treat this as a mini evidence pool. Build or test a defensible claim with at least two cards. Explain why each card is relevant, whether the cards corroborate or complicate one another, and one limitation. Reject evidence that does not fit rather than forcing it into the argument.'
    : 'Choose at least two evidence cards. Decide which historical claim each card is most useful for; use one precise detail from each, explain the inference you are making, and identify one limitation or missing piece of evidence. The card identifies the evidence but does not supply your conclusion.';

  const esc = value => String(value == null ? '' : value).replace(/[&<>\"]/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'
  }[ch]));

  function wrap(value, max) {
    const words = String(value || '').split(/\s+/).filter(Boolean);
    const lines = [];
    let line = '';
    words.forEach(word => {
      const next = line ? `${line} ${word}` : word;
      if (next.length > max && line) {
        lines.push(line);
        line = word;
      } else {
        line = next;
      }
    });
    if (line) lines.push(line);
    return lines;
  }

  function evidenceSvg(card) {
    const titleLines = wrap(card.t, 44).slice(0, 2);
    const metaLines = wrap(card.m, 78).slice(0, 2);
    const bodyLines = (card.l || []).flatMap(line => wrap(line, 62)).slice(0, 6);
    const title = titleLines.map((line, i) => `<tspan x="86" y="${178 + i * 44}">${esc(line)}</tspan>`).join('');
    const meta = metaLines.map((line, i) => `<tspan x="86" y="${102 + i * 28}">${esc(line)}</tspan>`).join('');
    const body = bodyLines.map((line, i) => `<tspan x="86" y="${300 + i * 54}">${esc(line)}</tspan>`).join('');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760" role="img" aria-label="${esc(card.t)}"><rect width="1200" height="760" fill="#1A1C1D"/><rect x="44" y="44" width="1112" height="672" rx="26" fill="#FFFDF7" stroke="#C9A46A" stroke-width="5"/><text font-family="Montserrat,Arial,sans-serif" font-size="20" font-weight="700" letter-spacing="1.4" fill="#8C5A2B">${meta}</text><text font-family="Georgia,'Times New Roman',serif" font-size="36" font-weight="700" fill="#151718">${title}</text><line x1="86" y1="250" x2="1110" y2="250" stroke="#D2B48C" stroke-width="3"/><text font-family="Georgia,'Times New Roman',serif" font-size="27" fill="#2B2F31">${body}</text><text x="86" y="670" font-family="Montserrat,Arial,sans-serif" font-size="18" font-weight="700" letter-spacing="2.6" fill="#5A5F5C">BEHISTORICAL · MODULE 07 EVIDENCE LAB</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  lesson.evidenceLab = { ...lesson.evidenceLab, task, prompt: set.p };
  lesson.images = (set.c || []).map(card => ({
    title: card.t,
    url: evidenceSvg(card),
    caption: card.m,
    prompt: card.q
  }));
})();
