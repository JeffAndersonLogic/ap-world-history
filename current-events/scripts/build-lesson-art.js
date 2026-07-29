#!/usr/bin/env node
/**
 * BeHistorical Current Events, lesson module artwork generator
 * Run: node scripts/build-lesson-art.js
 *
 * One on-topic SVG per module card on a lesson page, so the grid never shows an
 * empty frame. Same contract and same art direction as build-hub-art.js:
 *
 *   - Local artwork is the floor. A card layers an optional photograph on top
 *     with onerror="this.remove()", so a dead URL degrades to this art.
 *   - Generated SVGs MUST carry width and height. A viewBox alone leaves the
 *     intrinsic size undefined and the <img> gets stretched by its container.
 *   - Never commit a placeholder. Every motif below is specific to its step.
 *   - Deterministic: seeded PRNG, so a rerun never churns the diff.
 *
 * Orange marks NOW. Inside each composition it is reserved for the present-day
 * end: the live boundary, the newest node, the step the student is standing on.
 * The past cools to gunmetal. That is the same rule the spine runs on.
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const OUT = path.resolve(__dirname, '..', 'assets', 'images', 'lesson-art', 'lesson-01');

// Palette, kept in sync with behistorical-newsroom.css tokens.
const INK      = '#14181B';
const ARCHIVE  = '#232C33';
const STEEL    = '#4A555D';
const SIGNAL   = '#FF6A13';
const SIGNAL_2 = '#D9530C';

const W = 1600;
const H = 900;

/** Seeded PRNG (mulberry32). Same seed in, byte-identical artwork out. */
function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shared ground: newsprint gradient, engraving hatch, survey grid. */
function ground(id) {
  return `
  <defs>
    <linearGradient id="g-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F2EEE4"/>
      <stop offset="1" stop-color="#E4DFD3"/>
    </linearGradient>
    <pattern id="grid-${id}" width="${W / 16}" height="${W / 16}" patternUnits="userSpaceOnUse">
      <path d="M ${W / 16} 0 L 0 0 0 ${W / 16}" fill="none" stroke="${STEEL}" stroke-opacity="0.13" stroke-width="1"/>
    </pattern>
    <pattern id="hatch-${id}" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="${STEEL}" stroke-opacity="0.10" stroke-width="1.4"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g-${id})"/>
  <rect width="${W}" height="${H}" fill="url(#hatch-${id})"/>
  <rect width="${W}" height="${H}" fill="url(#grid-${id})"/>`;
}

function svg(id, motif) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" `
    + `width="${W}" height="${H}" role="img" aria-hidden="true">`
    + `${ground(id)}${motif}</svg>\n`;
}

/* ── Motifs ───────────────────────────────────────────────────────────────── */

/** Step 1. A storage container, shut, with the phone inside it. NOW is hot. */
function launch() {
  const cx = W * 0.5, cy = H * 0.52;
  let s = '<g fill="none">';
  // The container.
  s += `<rect x="${cx - 300}" y="${cy - 210}" width="600" height="420" rx="10" stroke="${ARCHIVE}" stroke-width="9"/>`;
  // Latch across the opening, orange because the rule is live right now.
  s += `<rect x="${cx - 92}" y="${cy - 232}" width="184" height="46" rx="8" stroke="${SIGNAL}" stroke-width="9" fill="${SIGNAL}" fill-opacity="0.16"/>`;
  // The phone, dimmed: powered off.
  s += `<rect x="${cx - 96}" y="${cy - 116}" width="192" height="330" rx="20" stroke="${STEEL}" stroke-width="7" stroke-opacity="0.85"/>`;
  s += `<line x1="${cx - 40}" y1="${cy - 92}" x2="${cx + 40}" y2="${cy - 92}" stroke="${STEEL}" stroke-width="6" stroke-opacity="0.5"/>`;
  // Shelf rails, receding into the room.
  for (let i = 0; i < 4; i++) {
    const y = cy + 214 + i * 34;
    s += `<line x1="${cx - 300 - i * 46}" y1="${y}" x2="${cx + 300 + i * 46}" y2="${y}" stroke="${STEEL}" stroke-opacity="${(0.3 - i * 0.06).toFixed(2)}" stroke-width="4"/>`;
  }
  return s + '</g>';
}

/** Step 2. Every cell needs one adult to notice, decide, enforce. Alone. */
function enforcement() {
  const r = rng(2026);
  let s = '<g>';
  const cols = 7, rows = 4;
  const cw = W / (cols + 1.6), ch = H / (rows + 1.5);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const px = cw * (x + 0.8), py = ch * (y + 0.7);
      s += `<rect x="${px.toFixed(1)}" y="${py.toFixed(1)}" width="${(cw * 0.78).toFixed(1)}" height="${(ch * 0.66).toFixed(1)}" fill="none" stroke="${STEEL}" stroke-opacity="0.34" stroke-width="2.5"/>`;
      // One enforcement decision per room, scattered: the flaw in the design.
      if (r() > 0.42) {
        s += `<circle cx="${(px + cw * 0.39).toFixed(1)}" cy="${(py + ch * 0.33).toFixed(1)}" r="11" fill="${SIGNAL}" fill-opacity="0.9"/>`;
      }
    }
  }
  // The rule that covered class time only: a boundary that stops short.
  s += `<path d="M${cw * 0.5} ${H * 0.90} L${W * 0.62} ${H * 0.90}" stroke="${SIGNAL_2}" stroke-width="8" stroke-dasharray="26 18"/>`;
  s += `<path d="M${W * 0.62} ${H * 0.90} L${W * 0.97} ${H * 0.90}" stroke="${STEEL}" stroke-width="8" stroke-opacity="0.28"/>`;
  return s + '</g>';
}

/** Step 3. States filling in, 2023 to 2026. A wave, not one legislature. */
function movement() {
  let s = '<g>';
  const n = 26;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const bh = H * (0.10 + t * 0.62);
    const x = W * 0.07 + i * (W * 0.86 / n);
    const hot = t > 0.66;
    s += `<rect x="${x.toFixed(1)}" y="${(H * 0.84 - bh).toFixed(1)}" width="${(W * 0.026).toFixed(1)}" height="${bh.toFixed(1)}" fill="${hot ? SIGNAL : STEEL}" fill-opacity="${(0.34 + t * 0.56).toFixed(2)}"/>`;
  }
  s += `<line x1="${W * 0.05}" y1="${H * 0.84}" x2="${W * 0.96}" y2="${H * 0.84}" stroke="${ARCHIVE}" stroke-width="5"/>`;
  // Two rules, same session, same worry.
  s += `<path d="M${W * 0.70} ${H * 0.16} L${W * 0.70} ${H * 0.78}" stroke="${SIGNAL_2}" stroke-width="4" stroke-dasharray="14 12" stroke-opacity="0.8"/>`;
  s += `<path d="M${W * 0.82} ${H * 0.16} L${W * 0.82} ${H * 0.78}" stroke="${SIGNAL_2}" stroke-width="4" stroke-dasharray="14 12" stroke-opacity="0.8"/>`;
  return s + '</g>';
}

/** Step 4. An open page sorted into two columns: shows against assumes. */
function evidence() {
  const cx = W * 0.5, top = H * 0.16, bot = H * 0.86;
  let s = '<g fill="none">';
  s += `<rect x="${W * 0.13}" y="${top}" width="${W * 0.74}" height="${bot - top}" stroke="${ARCHIVE}" stroke-width="8"/>`;
  s += `<line x1="${cx}" y1="${top}" x2="${cx}" y2="${bot}" stroke="${ARCHIVE}" stroke-width="6"/>`;
  // Left column, measurements: solid rules.
  for (let i = 0; i < 7; i++) {
    const y = top + 62 + i * 52;
    s += `<line x1="${W * 0.17}" y1="${y}" x2="${cx - W * 0.04}" y2="${y}" stroke="${STEEL}" stroke-width="7" stroke-opacity="0.5"/>`;
  }
  // Right column, assumptions: dashed, and orange because this is the contested side.
  for (let i = 0; i < 7; i++) {
    const y = top + 62 + i * 52;
    s += `<line x1="${cx + W * 0.04}" y1="${y}" x2="${W * 0.83}" y2="${y}" stroke="${SIGNAL}" stroke-width="7" stroke-dasharray="20 14" stroke-opacity="${(0.85 - i * 0.06).toFixed(2)}"/>`;
  }
  return s + '</g>';
}

/** Step 5. Three lines converge on one hinge, then the curve turns upward. */
function inflection() {
  const hx = W * 0.58, hy = H * 0.56;
  let s = '<g fill="none">';
  const starts = [[W * 0.08, H * 0.20], [W * 0.06, H * 0.54], [W * 0.10, H * 0.88]];
  starts.forEach(([sx, sy], i) => {
    s += `<path d="M${sx} ${sy} Q ${(sx + hx) / 2} ${(sy + hy) / 2} ${hx} ${hy}" stroke="${STEEL}" stroke-width="6" stroke-opacity="${(0.62 - i * 0.08).toFixed(2)}"/>`;
    s += `<circle cx="${sx}" cy="${sy}" r="14" fill="${STEEL}" fill-opacity="0.6" stroke="none"/>`;
  });
  // The hinge, and everything after it runs hot.
  s += `<circle cx="${hx}" cy="${hy}" r="26" fill="${SIGNAL}" stroke="none"/>`;
  s += `<circle cx="${hx}" cy="${hy}" r="46" stroke="${SIGNAL}" stroke-width="4" stroke-opacity="0.5"/>`;
  s += `<path d="M${hx} ${hy} Q ${W * 0.80} ${hy - H * 0.10} ${W * 0.95} ${H * 0.13}" stroke="${SIGNAL}" stroke-width="9"/>`;
  s += `<line x1="${W * 0.04}" y1="${H * 0.94}" x2="${W * 0.96}" y2="${H * 0.94}" stroke="${ARCHIVE}" stroke-width="4" stroke-opacity="0.6"/>`;
  return s + '</g>';
}

/** Step 6. One lit rectangle onstage, and three labels resolving into it. */
function origin() {
  const cx = W * 0.5, cy = H * 0.50;
  let s = '<g fill="none">';
  // The screen.
  s += `<rect x="${cx - 250}" y="${cy - 150}" width="500" height="300" stroke="${ARCHIVE}" stroke-width="10"/>`;
  // Three products becoming one.
  const ys = [cy - 78, cy, cy + 78];
  ys.forEach((y, i) => {
    s += `<line x1="${cx - 190}" y1="${y}" x2="${cx - 40}" y2="${y}" stroke="${STEEL}" stroke-width="7" stroke-opacity="${(0.7 - i * 0.1).toFixed(2)}"/>`;
    s += `<path d="M${cx - 30} ${y} Q ${cx + 40} ${y} ${cx + 70} ${cy}" stroke="${STEEL}" stroke-width="5" stroke-opacity="0.45"/>`;
  });
  s += `<line x1="${cx + 80}" y1="${cy}" x2="${cx + 200}" y2="${cy}" stroke="${SIGNAL}" stroke-width="12"/>`;
  // Necessary condition, not sufficient: two later additions, dashed and dimmer.
  s += `<path d="M${cx + 140} ${cy + 150} L${cx + 140} ${cy + 250}" stroke="${SIGNAL_2}" stroke-width="5" stroke-dasharray="16 12" stroke-opacity="0.75"/>`;
  s += `<path d="M${cx - 140} ${cy + 150} L${cx - 140} ${cy + 250}" stroke="${SIGNAL_2}" stroke-width="5" stroke-dasharray="16 12" stroke-opacity="0.75"/>`;
  // Stage floor.
  s += `<line x1="${W * 0.06}" y1="${cy + 300}" x2="${W * 0.94}" y2="${cy + 300}" stroke="${ARCHIVE}" stroke-width="6"/>`;
  return s + '</g>';
}

/** Step 7. The chain, reversed, with the two contested links marked. */
function turn() {
  let s = '<g fill="none">';
  const n = 6, y = H * 0.5;
  for (let i = 0; i < n; i++) {
    const x = W * 0.13 + i * (W * 0.74 / (n - 1));
    const contested = i === 1 || i === 4;
    s += `<circle cx="${x.toFixed(1)}" cy="${y}" r="${contested ? 40 : 30}" stroke="${contested ? SIGNAL : STEEL}" stroke-width="${contested ? 9 : 6}" stroke-opacity="${contested ? 1 : 0.55}" ${contested ? `stroke-dasharray="16 12"` : ''}/>`;
    if (i < n - 1) {
      const x2 = W * 0.13 + (i + 1) * (W * 0.74 / (n - 1));
      s += `<line x1="${(x + 34).toFixed(1)}" y1="${y}" x2="${(x2 - 34).toFixed(1)}" y2="${y}" stroke="${STEEL}" stroke-width="5" stroke-opacity="0.4"/>`;
    }
  }
  // The arrow turning back on itself.
  s += `<path d="M${W * 0.88} ${H * 0.30} Q ${W * 0.50} ${H * 0.14} ${W * 0.13} ${H * 0.30}" stroke="${SIGNAL}" stroke-width="8"/>`;
  s += `<path d="M${W * 0.13} ${H * 0.30} l 46 -30 M${W * 0.13} ${H * 0.30} l 46 32" stroke="${SIGNAL}" stroke-width="8"/>`;
  return s + '</g>';
}

/** Step 8. Two pans, and the argument has to load both. */
function argument() {
  const cx = W * 0.5, top = H * 0.20;
  let s = '<g fill="none">';
  s += `<line x1="${cx}" y1="${top}" x2="${cx}" y2="${H * 0.84}" stroke="${ARCHIVE}" stroke-width="9"/>`;
  // The beam, tipped: a conclusion was reached.
  s += `<line x1="${cx - 420}" y1="${top + 54}" x2="${cx + 420}" y2="${top - 18}" stroke="${ARCHIVE}" stroke-width="8"/>`;
  [[-420, 54, STEEL, 0.55], [420, -18, SIGNAL, 1]].forEach(([dx, dy, col, op]) => {
    const x = cx + dx, y = top + dy;
    s += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + 90}" stroke="${STEEL}" stroke-width="4" stroke-opacity="0.5"/>`;
    s += `<path d="M${x - 100} ${y + 90} Q ${x} ${y + 190} ${x + 100} ${y + 90} Z" stroke="${col}" stroke-width="8" stroke-opacity="${op}"/>`;
  });
  s += `<line x1="${W * 0.10}" y1="${H * 0.84}" x2="${W * 0.90}" y2="${H * 0.84}" stroke="${ARCHIVE}" stroke-width="6"/>`;
  return s + '</g>';
}

/** Module 09. A stack of documents, one of which disagrees with you. */
function sources() {
  let s = '<g fill="none">';
  for (let i = 0; i < 5; i++) {
    const x = W * 0.20 + i * 34, y = H * 0.22 + i * 42;
    const counter = i === 2;
    s += `<rect x="${x}" y="${y}" width="${W * 0.46}" height="${H * 0.40}" stroke="${counter ? SIGNAL : STEEL}" stroke-width="${counter ? 9 : 6}" stroke-opacity="${counter ? 1 : 0.42}" fill="#F2EEE4" fill-opacity="0.85"/>`;
    for (let k = 0; k < 4; k++) {
      s += `<line x1="${x + 40}" y1="${y + 54 + k * 46}" x2="${x + W * 0.36}" y2="${y + 54 + k * 46}" stroke="${counter ? SIGNAL_2 : STEEL}" stroke-width="5" stroke-opacity="${counter ? 0.6 : 0.26}"/>`;
    }
  }
  return s + '</g>';
}

/** Module 10. The projection surface and the six cards on it. */
function delivery() {
  let s = '<g fill="none">';
  s += `<rect x="${W * 0.10}" y="${H * 0.14}" width="${W * 0.80}" height="${H * 0.60}" stroke="${ARCHIVE}" stroke-width="9"/>`;
  for (let i = 0; i < 6; i++) {
    const col = i % 3, row = Math.floor(i / 3);
    const x = W * 0.15 + col * (W * 0.24);
    const y = H * 0.22 + row * (H * 0.24);
    const hot = i === 0;
    s += `<rect x="${x}" y="${y}" width="${W * 0.18}" height="${H * 0.18}" stroke="${hot ? SIGNAL : STEEL}" stroke-width="${hot ? 8 : 5}" stroke-opacity="${hot ? 1 : 0.42}"/>`;
    s += `<line x1="${x + 22}" y1="${y + 34}" x2="${x + W * 0.14}" y2="${y + 34}" stroke="${STEEL}" stroke-width="5" stroke-opacity="0.34"/>`;
  }
  // The stand.
  s += `<line x1="${W * 0.5}" y1="${H * 0.74}" x2="${W * 0.5}" y2="${H * 0.90}" stroke="${ARCHIVE}" stroke-width="8"/>`;
  s += `<line x1="${W * 0.38}" y1="${H * 0.90}" x2="${W * 0.62}" y2="${H * 0.90}" stroke="${ARCHIVE}" stroke-width="8"/>`;
  return s + '</g>';
}

/* ── Build ────────────────────────────────────────────────────────────────── */

const CARDS = [
  { id: 'launch',      motif: launch },
  { id: 'enforcement', motif: enforcement },
  { id: 'movement',    motif: movement },
  { id: 'evidence',    motif: evidence },
  { id: 'inflection',  motif: inflection },
  { id: 'origin',      motif: origin },
  { id: 'turn',        motif: turn },
  { id: 'argument',    motif: argument },
  { id: 'sources',     motif: sources },
  { id: 'delivery',    motif: delivery },
];

fs.mkdirSync(OUT, { recursive: true });
CARDS.forEach(c => {
  const file = path.join(OUT, c.id + '.svg');
  fs.writeFileSync(file, svg(c.id, c.motif()));
  console.log('wrote %s (%d bytes)', path.relative(process.cwd(), file), fs.statSync(file).size);
});
console.log('%d lesson-art files written to %s', CARDS.length, path.relative(process.cwd(), OUT));
