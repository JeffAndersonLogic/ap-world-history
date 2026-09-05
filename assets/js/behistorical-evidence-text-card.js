// behistorical-evidence-text-card.js
//
// Renders an Evidence Lab card whose evidence *is* text: a quotation, a statute,
// a treaty clause, a run of figures. Those have no photograph to show, so the
// card draws the words themselves as a branded plate.
//
// It only ever FILLS IN a card the author declared as textual evidence, by
// giving it a `sourceText` array and no `url`. It never replaces an authored
// `url`, and it never invents a card that is not in `lesson.images`. That is the
// difference between this and the Units 5-9 evidence runtime it replaces: that
// one overwrote the whole gallery at load, so a topic's real historical images
// sat in its data file, shadowed, with nothing on the page or in any check able
// to say which pool a student actually read. There is one authored evidence pool
// per topic now, in that topic's renderer config, and this module only draws the
// entries in it that ask to be drawn.
//
// A text plate is a fallback for evidence that has no image, never a substitute
// for one that does. See docs/module-07-scaffolding-standard.md, "Authenticity
// gate": an author-written summary standing in for an available historical
// object is the defect this whole layer exists to keep out.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson || !Array.isArray(lesson.images)) return;

  const esc = value => String(value == null ? '' : value).replace(/[&<>"]/g, ch => ({
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

  // width and height are explicit, never a bare viewBox: an <img> holding a
  // viewBox alone has no intrinsic size and gets stretched until the plate is
  // letterboxed off screen. See the Image Contract in CLAUDE.md.
  function plate(card) {
    const labelLines = wrap(card.label, 78).slice(0, 2);
    const titleLines = wrap(card.title, 44).slice(0, 2);
    const bodyLines = (card.sourceText || []).flatMap(line => wrap(line, 62)).slice(0, 6);
    const label = labelLines.map((line, i) => `<tspan x="86" y="${102 + i * 28}">${esc(line)}</tspan>`).join('');
    const title = titleLines.map((line, i) => `<tspan x="86" y="${178 + i * 44}">${esc(line)}</tspan>`).join('');
    const body = bodyLines.map((line, i) => `<tspan x="86" y="${300 + i * 54}">${esc(line)}</tspan>`).join('');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760" role="img" aria-label="${esc(card.title)}"><rect width="1200" height="760" fill="#1A1C1D"/><rect x="44" y="44" width="1112" height="672" rx="26" fill="#FFFDF7" stroke="#C9A46A" stroke-width="5"/><text font-family="Montserrat,Arial,sans-serif" font-size="20" font-weight="700" letter-spacing="1.4" fill="#8C5A2B">${label}</text><text font-family="Georgia,'Times New Roman',serif" font-size="36" font-weight="700" fill="#151718">${title}</text><line x1="86" y1="250" x2="1110" y2="250" stroke="#D2B48C" stroke-width="3"/><text font-family="Georgia,'Times New Roman',serif" font-size="27" fill="#2B2F31">${body}</text><text x="86" y="670" font-family="Montserrat,Arial,sans-serif" font-size="18" font-weight="700" letter-spacing="2.6" fill="#5A5F5C">BEHISTORICAL · MODULE 07 EVIDENCE LAB</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  lesson.images.forEach(card => {
    if (!card || card.url) return;
    if (!Array.isArray(card.sourceText) || !card.sourceText.length) return;
    card.url = plate(card);
  });
})();
