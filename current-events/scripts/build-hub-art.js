#!/usr/bin/env node
/**
 * BeHistorical Current Events, hub artwork generator
 * Run: node scripts/build-hub-art.js
 *
 * Mirrors the AP World repo's build-module-art.js. Every card slot on the hub
 * gets a generated, on-topic SVG so the layout NEVER has an empty frame, even
 * with no photography commissioned and no network.
 *
 * The Image Contract, carried over from AP World:
 *   - Local artwork is the floor. Cards layer an optional photograph on top of
 *     this art with onerror="this.remove()", so a dead photo URL degrades to
 *     on-topic local art instead of a hole in the page.
 *   - Generated SVGs MUST carry width and height. A viewBox alone leaves the
 *     intrinsic size undefined and the <img> gets stretched by its container.
 *   - Never commit a placeholder. Each motif below is specific to its event.
 *
 * Art direction: dark steel-to-ink ground, a faint survey grid, then one motif
 * per event drawn in sage and steel. Read under a scrim with white text on top,
 * so everything stays low-contrast and bottom-weighted.
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const OUT = path.resolve(__dirname, '..', 'assets', 'images', 'card-art');

// Palette, kept in sync with behistorical-newsroom.css tokens.
const INK     = '#14171A';
const ARCHIVE = '#1F2A34';
const STEEL   = '#5E6D79';
const SAGE    = '#6B7758';
const SAGE_LT = '#8A9A73';
// The ground has to be light enough that the motif still reads once the card
// scrim lands on top of it. Pure archive-to-ink was invisible behind the scrim.
const GROUND_LT = '#3A4855';

/**
 * Seeded PRNG (mulberry32). The scatter motifs need randomness to look natural
 * but the build has to be deterministic, or every rerun rewrites the SVGs and
 * churns the git diff for no reason. Same seed in, same artwork out.
 */
function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shared ground: diagonal gradient, survey grid, bottom vignette. */
function ground(w, h, id) {
  return `
  <defs>
    <linearGradient id="g-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${GROUND_LT}"/>
      <stop offset="1" stop-color="${ARCHIVE}"/>
    </linearGradient>
    <linearGradient id="v-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stop-color="${INK}" stop-opacity="0"/>
      <stop offset="1" stop-color="${INK}" stop-opacity="0.72"/>
    </linearGradient>
    <pattern id="grid-${id}" width="${w / 16}" height="${w / 16}" patternUnits="userSpaceOnUse">
      <path d="M ${w / 16} 0 L 0 0 0 ${w / 16}" fill="none" stroke="${STEEL}" stroke-opacity="0.10" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g-${id})"/>
  <rect width="${w}" height="${h}" fill="url(#grid-${id})"/>`;
}

function vignette(w, h, id) {
  return `<rect width="${w}" height="${h}" fill="url(#v-${id})"/>`;
}

function wrap(w, h, id, motif) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-hidden="true">${ground(w, h, id)}${motif}${vignette(w, h, id)}</svg>`;
}

/* ── Motifs, one per event ─────────────────────────────────────────────── */

// 01 Social media: a spreading node network, dense at the top, thinning down.
function socialMedia(w, h) {
  const nodes = [
    [0.16, 0.22], [0.30, 0.14], [0.44, 0.26], [0.58, 0.16], [0.72, 0.28],
    [0.86, 0.20], [0.24, 0.44], [0.40, 0.52], [0.56, 0.44], [0.74, 0.54],
    [0.34, 0.72], [0.62, 0.70], [0.48, 0.86]
  ].map(([x, y]) => [x * w, y * h]);
  let s = '<g stroke="' + STEEL + '" stroke-opacity="0.5" stroke-width="2" fill="none">';
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i][0] - nodes[j][0], dy = nodes[i][1] - nodes[j][1];
      if (Math.hypot(dx, dy) < w * 0.20) {
        s += `<line x1="${nodes[i][0].toFixed(1)}" y1="${nodes[i][1].toFixed(1)}" x2="${nodes[j][0].toFixed(1)}" y2="${nodes[j][1].toFixed(1)}"/>`;
      }
    }
  }
  s += '</g><g>';
  nodes.forEach(([x, y], i) => {
    const r = i % 3 === 0 ? 13 : 8;
    s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${i < 6 ? SAGE_LT : SAGE}" fill-opacity="${i < 6 ? 0.95 : 0.7}"/>`;
  });
  return s + '</g>';
}

// 02 White-collar shock: an orderly desk grid dissolving into loose particles.
function whiteCollar(w, h) {
  const rand = rng(20260729);
  let s = '<g>';
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 9; c++) {
      const x = w * (0.06 + c * 0.10), y = h * (0.18 + r * 0.18);
      const decay = c / 8;
      if (decay > 0.45 && (r + c) % 2 === 0) continue;          // the dissolve
      const sz = (1 - decay * 0.55) * w * 0.055;
      s += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${sz.toFixed(1)}" height="${(sz * 0.7).toFixed(1)}" fill="${c < 4 ? STEEL : SAGE}" fill-opacity="${(0.85 - decay * 0.55).toFixed(2)}"/>`;
    }
  }
  for (let i = 0; i < 26; i++) {                                 // the particles
    const x = w * (0.58 + rand() * 0.40), y = h * (0.12 + rand() * 0.78);
    s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(2 + rand() * 4).toFixed(1)}" fill="${SAGE_LT}" fill-opacity="0.5"/>`;
  }
  return s + '</g>';
}

// 03 Israel & Palestine: overlapping territorial bands over a contested seam.
function territory(w, h) {
  let s = '<g>';
  s += `<path d="M0 ${h * 0.30} L${w} ${h * 0.16} L${w} ${h * 0.62} L0 ${h * 0.74} Z" fill="${STEEL}" fill-opacity="0.42"/>`;
  s += `<path d="M0 ${h * 0.46} L${w} ${h * 0.34} L${w} ${h * 0.90} L0 ${h}" fill="${SAGE}" fill-opacity="0.46"/>`;
  s += `<path d="M${w * 0.52} 0 L${w * 0.60} ${h}" stroke="${SAGE_LT}" stroke-width="4" stroke-dasharray="18 14" fill="none" stroke-opacity="0.9"/>`;
  for (let i = 1; i <= 5; i++) {
    s += `<path d="M0 ${h * (0.22 + i * 0.13)} Q ${w * 0.5} ${h * (0.12 + i * 0.13)} ${w} ${h * (0.20 + i * 0.13)}" stroke="${STEEL}" stroke-opacity="0.28" stroke-width="1.5" fill="none"/>`;
  }
  return s + '</g>';
}

// 04 Iran: concentric arcs of pressure crossed by a pipeline run.
function iran(w, h) {
  let s = '<g fill="none">';
  for (let i = 0; i < 6; i++) {
    s += `<circle cx="${w * 0.30}" cy="${h * 0.56}" r="${w * (0.08 + i * 0.075)}" stroke="${i < 3 ? SAGE : STEEL}" stroke-opacity="${(0.55 - i * 0.06).toFixed(2)}" stroke-width="2.5"/>`;
  }
  s += `<path d="M0 ${h * 0.80} L${w * 0.34} ${h * 0.80} L${w * 0.46} ${h * 0.58} L${w * 0.78} ${h * 0.58} L${w * 0.88} ${h * 0.36} L${w} ${h * 0.36}" stroke="${SAGE_LT}" stroke-width="7" stroke-opacity="0.85"/>`;
  s += `<circle cx="${w * 0.30}" cy="${h * 0.56}" r="11" fill="${SAGE_LT}"/>`;
  return s + '</g>';
}

// 05 Climate: stacked decade bands rising into a hockey-stick curve.
function climate(w, h) {
  let s = '<g>';
  for (let i = 0; i < 22; i++) {
    const x = w * (0.04 + i * 0.043);
    const t = i / 21;
    const bh = h * (0.10 + Math.pow(t, 3.1) * 0.62);
    s += `<rect x="${x.toFixed(1)}" y="${(h * 0.88 - bh).toFixed(1)}" width="${(w * 0.028).toFixed(1)}" height="${bh.toFixed(1)}" fill="${t > 0.62 ? SAGE_LT : STEEL}" fill-opacity="${(0.4 + t * 0.5).toFixed(2)}"/>`;
  }
  s += `<path d="M${w * 0.05} ${h * 0.76} Q ${w * 0.55} ${h * 0.72} ${w * 0.78} ${h * 0.42} T ${w * 0.97} ${h * 0.16}" stroke="${SAGE}" stroke-width="5" fill="none" stroke-opacity="0.95"/>`;
  return s + '</g>';
}

// 06 Immigration: directed movement crossing a hard boundary.
function immigration(w, h) {
  let s = `<g><path d="M${w * 0.62} 0 L${w * 0.62} ${h}" stroke="${SAGE_LT}" stroke-width="5" stroke-opacity="0.9"/>`;
  for (let i = 0; i < 7; i++) {
    const y = h * (0.14 + i * 0.12);
    const x2 = w * (0.30 + (i % 3) * 0.13);
    s += `<path d="M${w * 0.05} ${y} L${x2} ${y}" stroke="${i % 2 ? SAGE : STEEL}" stroke-width="3" stroke-opacity="0.7"/>`;
    s += `<path d="M${x2} ${y} l-16 -9 l0 18 Z" fill="${i % 2 ? SAGE : STEEL}" fill-opacity="0.9"/>`;
  }
  for (let i = 0; i < 4; i++) {
    const y = h * (0.22 + i * 0.19);
    s += `<path d="M${w * 0.66} ${y} L${w * 0.94} ${y}" stroke="${SAGE_LT}" stroke-width="3" stroke-opacity="0.45"/>`;
  }
  return s + '</g>';
}

// Hero: the Reverse Timeline itself, the course's signature, drawn large.
function heroSpine(w, h) {
  const x = w * 0.72;
  let s = `<g><line x1="${x}" y1="${h * 0.06}" x2="${x}" y2="${h * 0.96}" stroke="${STEEL}" stroke-width="5" stroke-opacity="0.55"/>`;
  const stops = 7;
  for (let i = 0; i < stops; i++) {
    const y = h * (0.10 + i * (0.82 / (stops - 1)));
    const t = i / (stops - 1);
    const r = 20 - t * 9;
    s += `<circle cx="${x}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${t < 0.34 ? SAGE_LT : SAGE}" fill-opacity="${(0.95 - t * 0.45).toFixed(2)}"/>`;
    s += `<line x1="${x - r - 10}" y1="${y.toFixed(1)}" x2="${(x - w * 0.20).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${STEEL}" stroke-opacity="${(0.5 - t * 0.28).toFixed(2)}" stroke-width="2"/>`;
  }
  return s + '</g>';
}

/* ── Emit ──────────────────────────────────────────────────────────────── */

const CARDS = [
  ['event-01', socialMedia],
  ['event-02', whiteCollar],
  ['event-03', territory],
  ['event-04', iran],
  ['event-05', climate],
  ['event-06', immigration]
];

function main() {
  fs.mkdirSync(OUT, { recursive: true });
  let n = 0;

  CARDS.forEach(([name, motif]) => {
    const w = 1600, h = 900;
    fs.writeFileSync(path.join(OUT, name + '.svg'), wrap(w, h, name, motif(w, h)));
    n++;
  });

  const hw = 2400, hh = 1200;
  fs.writeFileSync(path.join(OUT, 'hero.svg'), wrap(hw, hh, 'hero', heroSpine(hw, hh)));
  n++;

  console.log('Wrote ' + n + ' artwork files to ' + path.relative(process.cwd(), OUT));
}

main();
