'use strict';

/**
 * Pull the student-visible content out of a First & 10 reading, as data.
 *
 * This exists so a reading can be moved from hand-authored HTML into the content
 * model and back out again with proof that nothing was lost. Comparing the two
 * HTML files directly cannot give that proof: the generator emits semantic
 * elements where the hand-authored pages use divs, so a byte diff is thousands
 * of lines of noise over identical words. What matters is whether a student sees
 * the same text, in the same order, with the same emphasis.
 *
 * So the comparison unit is the extraction, not the markup. Two readings match
 * when this function returns the same object for both.
 *
 * Emphasis is part of the content, not decoration: <span class="kt"> marks a key
 * term and is how a student's eye finds it. Dropping those spans would leave the
 * text identical and still lose something real, so every paragraph records the
 * marked-up runs alongside its text.
 *
 * Dependency-free on purpose, like validate.js. No DOM library, so this walks a
 * small tag tokenizer instead.
 */

// ── entities and whitespace ──────────────────────────────────────────────────
const NAMED = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  mdash: '—', ndash: '–', hellip: '…', rsquo: '’',
  lsquo: '‘', ldquo: '“', rdquo: '”', times: '×',
  eacute: 'é', egrave: 'è', uuml: 'ü', ouml: 'ö',
  auml: 'ä', ccedil: 'ç', ntilde: 'ñ', deg: '°'
};

function decode(s) {
  return String(s == null ? '' : s).replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (whole, body) => {
    if (body[0] === '#') {
      const code = body[1] === 'x' || body[1] === 'X'
        ? parseInt(body.slice(2), 16)
        : parseInt(body.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : whole;
    }
    return Object.prototype.hasOwnProperty.call(NAMED, body) ? NAMED[body] : whole;
  });
}

// A non-breaking space is a typographic choice, not a different word. Folding it
// to a normal space keeps "Topic 1.1 &nbsp;|&nbsp; AP World" comparable to the
// same line written with plain spaces.
function norm(s) {
  return decode(s).replace(/ /g, ' ').replace(/\s+/g, ' ').trim();
}

// ── a very small tag tokenizer ───────────────────────────────────────────────
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr']);

/**
 * Build a tree of {tag, cls, children[], text} from HTML.
 *
 * Script and style bodies are removed before tokenizing, because both can hold
 * a bare `<` that would otherwise be read as a tag and desynchronize the stack.
 */
function parse(html) {
  const cleaned = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  const root = { tag: '#root', cls: '', children: [], parent: null };
  let node = root;
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g;
  let last = 0;
  let m;

  const pushText = (raw) => {
    const t = norm(raw);
    if (t) node.children.push({ tag: '#text', text: t, raw, children: [] });
  };

  while ((m = re.exec(cleaned)) !== null) {
    pushText(cleaned.slice(last, m.index));
    last = re.lastIndex;

    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    const attrs = m[3] || '';

    if (closing) {
      // Walk up to the nearest matching open tag. Unmatched closers are ignored
      // rather than fatal, so a stray </div> cannot swallow the rest of a page.
      let up = node;
      while (up && up.tag !== tag) up = up.parent;
      if (up && up.parent) node = up.parent;
      continue;
    }

    if (VOID.has(tag) || /\/\s*$/.test(attrs)) continue;

    const clsMatch = attrs.match(/\bclass\s*=\s*"([^"]*)"|\bclass\s*=\s*'([^']*)'/);
    const hrefMatch = attrs.match(/\bhref\s*=\s*"([^"]*)"|\bhref\s*=\s*'([^']*)'/);
    // A textarea placeholder is not chrome. In these readings it is a sentence
    // stem that scaffolds the answer ("The end of the Ice Age set off a chain
    // that led to civilization because..."), so losing one in a migration would
    // quietly remove teaching, not styling.
    const phMatch = attrs.match(/\bplaceholder\s*=\s*"([^"]*)"|\bplaceholder\s*=\s*'([^']*)'/);
    const child = {
      tag,
      cls: clsMatch ? (clsMatch[1] || clsMatch[2] || '') : '',
      href: hrefMatch ? (hrefMatch[1] || hrefMatch[2] || '') : undefined,
      placeholder: phMatch ? decode(phMatch[1] || phMatch[2] || '') : undefined,
      children: [],
      parent: node
    };
    node.children.push(child);
    node = child;
  }
  pushText(cleaned.slice(last));
  return root;
}

const hasClass = (node, name) =>
  node.cls ? node.cls.split(/\s+/).includes(name) : false;

function findAll(node, name, out = []) {
  for (const c of node.children || []) {
    if (hasClass(c, name)) out.push(c);
    findAll(c, name, out);
  }
  return out;
}

const find = (node, name) => findAll(node, name)[0] || null;

/**
 * Visible text of a node and everything under it.
 *
 * Entities are decoded exactly once, at the end, over the joined raw text.
 * Decoding per nesting level instead would decode twice for any nested element,
 * turning `&amp;nbsp;` into a space and making a page that literally prints
 * "&nbsp;" to a student compare equal to one that prints a space. That is not
 * hypothetical: it is how a double-escaped footer note passed this check and
 * shipped.
 */
function rawTextOf(node) {
  if (!node) return '';
  if (node.tag === '#text') return node.raw;
  return (node.children || []).map(rawTextOf).join(' ');
}

function textOf(node) {
  return norm(rawTextOf(node));
}

/**
 * The runs of text a reader sees as emphasized, kept per kind.
 *
 * `kt` is BeHistorical's key-term span. strong and em are ordinary emphasis.
 * Recording them separately means a migration that silently converted every key
 * term into plain bold would fail the comparison, which is correct: the key-term
 * styling is what makes a term findable on the page.
 */
function marksOf(node) {
  const out = { kt: [], strong: [], em: [] };
  const walk = (n) => {
    if (!n || n.tag === '#text') return;
    if (hasClass(n, 'kt')) out.kt.push(textOf(n));
    else if (n.tag === 'strong' || n.tag === 'b') out.strong.push(textOf(n));
    else if (n.tag === 'em' || n.tag === 'i') out.em.push(textOf(n));
    (n.children || []).forEach(walk);
  };
  walk(node);
  return out;
}

const paragraphsOf = (node, cls = 'reading-text') =>
  findAll(node, cls).map(p => ({ text: textOf(p), marks: marksOf(p) }));

/**
 * Prose and pull-quotes in document order.
 *
 * Recorded as a sequence rather than two lists because position is meaning: a
 * pull-quote is the author lifting one sentence out of the middle of a section.
 * A migration that kept every word but moved the quote to the end would pass a
 * text-only comparison and still have changed what the section emphasises.
 */
function blocksOf(section) {
  const out = [];
  const walk = (n) => {
    for (const c of n.children || []) {
      if (hasClass(c, 'reading-text')) { out.push({ type: 'p', text: textOf(c), marks: marksOf(c) }); continue; }
      if (hasClass(c, 'pull-quote')) { out.push({ type: 'pull', text: textOf(c), marks: marksOf(c) }); continue; }
      walk(c);
    }
  };
  walk(section);
  return out;
}

// ── the extraction ───────────────────────────────────────────────────────────
function extractReading(html) {
  const doc = parse(html);

  // Read from the script body, which the tokenizer strips.
  const pick = (re) => { const m = html.match(re); return m ? decode(m[1]) : null; };
  const topicKey = pick(/var\s+TOPIC_KEY\s*=\s*['"]([^'"]*)['"]/);
  const topicLabel = pick(/var\s+TOPIC_LABEL\s*=\s*['"]([^'"]*)['"]/);

  const header = find(doc, 'module-header');
  const band = find(doc, 'reading-title-band');
  const body = find(doc, 'reading-body');

  const supportCards = findAll(doc, 'support-card').map(card => {
    const h = (card.children || []).find(c => /^h[1-6]$/.test(c.tag));
    const p = (card.children || []).find(c => c.tag === 'p');
    // Some cards write the body as bare text with no <p>. Falling back to the
    // whole card would fold the heading into the body, so a card that says
    // "What to do / Read all three sections" would compare unequal to the same
    // card rendered with a real <p>, purely because of how it was marked up.
    const body = p ? textOf(p) : norm(rawTextOf(card).replace(rawTextOf(h), ''));
    return { heading: textOf(h), body };
  });

  const sections = findAll(body || doc, 'section').map((sec) => {
    const callout = find(sec, 'ap-callout');
    const calloutLabel = callout ? find(callout, 'ap-callout-label') : null;
    // The callout's body is everything in it except its own label.
    const calloutBody = callout
      ? norm((callout.children || [])
          .filter(c => !hasClass(c, 'ap-callout-label'))
          .map(textOf).join(' '))
      : null;
    return {
      number: textOf(find(sec, 'section-number')),
      label: textOf(find(sec, 'section-label')),
      heading: textOf(find(sec, 'section-heading')),
      paragraphs: paragraphsOf(sec),
      blocks: blocksOf(sec),
      callout: callout ? { label: textOf(calloutLabel), body: calloutBody } : null
    };
  });

  const questions = findAll(doc, 'question-item').map(item => {
    const ta = find(item, 'q-textarea') || (item.children || []).find(c => c.tag === 'textarea');
    return {
      num: textOf(find(item, 'q-num')),
      skill: textOf(find(item, 'q-skill')),
      text: textOf(find(item, 'q-text')),
      placeholder: ta && ta.placeholder ? norm(ta.placeholder) : ''
    };
  });

  const beReady = find(doc, 'be-ready');
  const footer = find(doc, 'module-footer');

  return {
    topicKey,
    topicLabel,
    header: {
      badge: textOf(find(doc, 'module-badge')),
      name: textOf(find(doc, 'module-name')),
      subtitle: textOf(find(header || doc, 'module-subtitle'))
    },
    band: {
      eyebrow: textOf(find(band || doc, 'reading-eyebrow')),
      title: textOf(find(band || doc, 'reading-title')),
      deck: textOf(find(band || doc, 'reading-deck')),
      skillTags: findAll(band || doc, 'skill-tag').map(textOf)
    },
    support: supportCards,
    vocab: findAll(doc, 'term-chip').map(textOf),
    sections,
    takeaway: beReady
      ? norm((beReady.children || [])
          .filter(c => !/^h[1-6]$/.test(c.tag))
          .map(textOf).join(' '))
      : null,
    takeawayHeading: beReady
      ? textOf((beReady.children || []).find(c => /^h[1-6]$/.test(c.tag)))
      : null,
    check: {
      badge: textOf(find(doc, 'check-badge')),
      title: textOf(find(doc, 'check-title')),
      questions
    },
    builder: {
      heading: textOf(find(doc, 'builder-heading')),
      body: textOf(find(doc, 'builder-body'))
    },
    footerNote: textOf(find(doc, 'page-footer-note')),
    footer: {
      note: textOf(find(footer || doc, 'footer-note')),
      nav: findAll(footer || doc, 'nav-btn').map(a => ({ label: textOf(a), href: a.href || '' }))
    }
  };
}

/**
 * Compare two extractions and return a list of human-readable differences.
 * Empty array means the two readings show a student the same thing.
 */
function diffReadings(a, b, pathPrefix = '') {
  const diffs = [];
  const walk = (x, y, at) => {
    if (Array.isArray(x) || Array.isArray(y)) {
      const xa = Array.isArray(x) ? x : [];
      const ya = Array.isArray(y) ? y : [];
      if (xa.length !== ya.length) {
        diffs.push(`${at}: ${xa.length} item(s) before, ${ya.length} after`);
      }
      for (let i = 0; i < Math.max(xa.length, ya.length); i++) walk(xa[i], ya[i], `${at}[${i}]`);
      return;
    }
    if (x && y && typeof x === 'object' && typeof y === 'object') {
      for (const k of new Set([...Object.keys(x), ...Object.keys(y)])) walk(x[k], y[k], at ? `${at}.${k}` : k);
      return;
    }
    if ((x == null ? '' : x) !== (y == null ? '' : y)) {
      diffs.push(`${at}:\n      before: ${JSON.stringify(x)}\n      after:  ${JSON.stringify(y)}`);
    }
  };
  walk(a, b, pathPrefix);
  return diffs;
}

module.exports = { extractReading, diffReadings, parse, textOf, norm, decode };
