'use strict';

/**
 * Renders a BeHistorical instructional map from a compact spec.
 *
 * The output is a self-contained SVG in the BeHistorical palette: warm paper,
 * charcoal ink, bronze accents. Everything is local, so a map can never fail to
 * load, and everything is labeled, so a map can never be off-topic for the
 * lesson it was written for.
 */

const { WIDTH, HEIGHT, project, pathFor, LAND, zone } = require('./map-frame');

const INK = '#1A1C1D';
const SLATE = '#3E4447';
const PAPER = '#FFFDF7';
const SAND = '#D2B48C';
const BRONZE = '#8C5A2B';
const GOLD = '#C9A46A';
const SEA = '#D7E2E1';
const LAND_FILL = '#E4DAC4';
const LAND_STROKE = '#A99B7F';

const TONES = {
  gold: { fill: GOLD, stroke: '#6B3E1F', text: INK },
  bronze: { fill: '#C08552', stroke: BRONZE, text: INK },
  slate: { fill: '#9FB0AE', stroke: '#4E6260', text: INK },
  sage: { fill: '#B6C2A2', stroke: '#5E6B4C', text: INK },
  plum: { fill: '#B49AA8', stroke: '#6B4A5A', text: INK },
  sand: { fill: SAND, stroke: '#8E7A55', text: INK }
};

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function tone(name) {
  return TONES[name] || TONES.gold;
}

function ellipse(zoneName, toneName, opacity) {
  const [lon, lat, rLon, rLat] = zone(zoneName);
  const [cx, cy] = project(lon, lat);
  const [ex, ey] = project(lon + rLon, lat - rLat);
  const palette = tone(toneName);
  return `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${(ex - cx).toFixed(1)}" ry="${(ey - cy).toFixed(1)}" fill="${palette.fill}" fill-opacity="${opacity}" stroke="${palette.stroke}" stroke-width="4"/>`;
}

// Flow arrows bow away from the straight line so several arrows out of one
// region stay readable instead of overlapping. Each arrow carries a numbered
// badge and its wording lives in the legend, which keeps long route labels from
// colliding with each other and with region names.
function arc(x1, y1, x2, y2, bow) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy) || 1;
  const lift = (bow == null ? 0.18 : bow) * length;
  const cx = mx + (-dy / length) * lift;
  const cy = my + (dx / length) * lift;
  return {
    d: `M${x1.toFixed(1)},${y1.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`,
    // Badge rides the curve itself (t = 0.5 on the quadratic) rather than the
    // control point, which sits well off the drawn line on a strong bow.
    mid: [0.25 * x1 + 0.5 * cx + 0.25 * x2, 0.25 * y1 + 0.5 * cy + 0.25 * y2],
    length
  };
}

function flowPath(fromZone, toZone, bow) {
  const [flon, flat] = zone(fromZone);
  const [tlon, tlat] = zone(toZone);
  const [x1, y1] = project(flon, flat);
  const [x2, y2] = project(tlon, tlat);

  // On an equirectangular map, the shorter way between two places can be across
  // the antimeridian. Drawing a straight line instead sends a Pacific route the
  // long way round: Andean silver reaching China by way of Africa. When the gap
  // exceeds 180 degrees, wrap the path off one edge and back on the other.
  if (Math.abs(tlon - flon) > 180) {
    const eastbound = tlon < flon;
    const [edgeOut] = project(eastbound ? 180 : -180, flat);
    const [edgeIn] = project(eastbound ? -180 : 180, tlat);
    const [, yOut] = project(0, (flat + tlat) / 2);
    const first = arc(x1, y1, edgeOut, yOut, bow == null ? 0.1 : bow * 0.5);
    const second = arc(edgeIn, yOut, x2, y2, bow == null ? 0.1 : bow * 0.5);
    return {
      d: `${first.d} ${second.d}`,
      mid: first.length >= second.length ? first.mid : second.mid,
      wrapped: true
    };
  }
  return arc(x1, y1, x2, y2, bow);
}

/**
 * Greedy label placement: keeps a list of claimed boxes and nudges each new
 * label vertically until it stops overlapping. It counts the times it ran out of
 * room and had to place a label anyway; build-instructional-maps.js fails on a
 * non-zero count, so an overcrowded spec is caught at build time rather than
 * shipped as unreadable overlapping text.
 */
function createPlacer() {
  const claimed = [];
  let forced = 0;
  const overlaps = (a, b) => !(a.x2 < b.x1 || b.x2 < a.x1 || a.y2 < b.y1 || b.y2 < a.y1);
  return {
    forcedCount: () => forced,
    claim(box) { claimed.push(box); },
    place(cx, cy, width, height, anchor = 'middle') {
      const half = anchor === 'middle' ? width / 2 : 0;
      const left = anchor === 'end' ? -width : -half;
      const offsets = [0];
      for (let step = 1; step <= 14; step++) offsets.push(step * 24, -step * 24);
      for (const offset of offsets) {
        const y = cy + offset;
        if (y - height < 128 || y > HEIGHT - 128) continue;
        const box = { x1: cx + left - 6, x2: cx + left + width + 6, y1: y - height - 4, y2: y + 6 };
        if (!claimed.some((other) => overlaps(box, other))) {
          claimed.push(box);
          return y;
        }
      }
      forced += 1;
      claimed.push({ x1: cx + left, x2: cx + left + width, y1: cy - height, y2: cy });
      return cy;
    }
  };
}

function wrap(text, limit) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > limit && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function renderMap(spec) {
  const highlights = spec.highlights || [];
  const flows = spec.flows || [];
  const points = spec.points || [];

  const legend = spec.legend || [
    ...highlights.filter((h) => h.label).map((h) => ({ kind: 'area', tone: h.tone, text: h.legend || h.label })),
    ...flows.filter((f) => f.label).map((f, index) => ({ kind: 'flow', step: index + 1, text: f.legend || f.label }))
  ];

  const graticule = [];
  for (let lon = -150; lon <= 150; lon += 30) {
    const [x] = project(lon, 0);
    graticule.push(`<line x1="${x.toFixed(1)}" y1="0" x2="${x.toFixed(1)}" y2="${HEIGHT}"/>`);
  }
  for (let lat = -60; lat <= 60; lat += 30) {
    const [, y] = project(0, lat);
    graticule.push(`<line x1="0" y1="${y.toFixed(1)}" x2="${WIDTH}" y2="${y.toFixed(1)}"/>`);
  }
  const [, equator] = project(0, 0);

  const landLayer = Object.entries(LAND)
    .map(([key, pts]) => `<path id="land-${key}" d="${pathFor(pts)}"/>`)
    .join('\n    ');

  // Reserve the fixed furniture first, then place labels around it: city markers,
  // then region names, then route badges. Labels get a paper halo so they read
  // over land, sea, or a route line.
  const placer = createPlacer();
  const legendWillBeTwoColumn = legend.length > 7;
  const legendRowCount = legendWillBeTwoColumn ? Math.ceil(Math.min(legend.length, 14) / 2) : Math.min(legend.length, 14);
  const legendBoxHeight = 46 + legendRowCount * 33;
  const legendBoxWidth = legendWillBeTwoColumn ? 1030 : 640;
  const legendTop = HEIGHT - legendBoxHeight - 68;
  placer.claim({ x1: 46, x2: 46 + legendBoxWidth, y1: legendTop, y2: legendTop + legendBoxHeight });

  const pointLayer = points.map((p) => {
    const [x, y] = project(p.at[0], p.at[1]);
    const anchor = p.side === 'left' ? 'end' : 'start';
    const offset = p.side === 'left' ? -20 : 20;
    const width = Math.max(String(p.label).length, String(p.note || '').length) * 9 + 12;
    const baseline = placer.place(x + offset, y - 4, width, p.note ? 40 : 22, anchor);
    return `<circle class="city" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="10"/>
    <text class="place halo" x="${(x + offset).toFixed(1)}" y="${baseline.toFixed(1)}" text-anchor="${anchor}">${esc(p.label)}</text>
    ${p.note ? `<text class="placenote halo" x="${(x + offset).toFixed(1)}" y="${(baseline + 22).toFixed(1)}" text-anchor="${anchor}">${esc(p.note)}</text>` : ''}`;
  }).join('\n    ');

  const highlightLayer = highlights.map((h) => {
    const [lon, lat, , rLat] = zone(h.zone);
    const [cx] = project(lon, lat);
    const [, edge] = project(lon, lat - rLat);
    const palette = tone(h.tone);
    const shape = ellipse(h.zone, h.tone, h.opacity == null ? 0.5 : h.opacity);
    if (!h.label) return shape;
    const labelLines = wrap(h.label, 16);
    const width = Math.max(...labelLines.map((line) => line.length)) * 13 + 12;
    const baseline = placer.place(cx, Math.min(edge + 26, HEIGHT - 150), width, labelLines.length * 25);
    const label = labelLines
      .map((line, index) => `<tspan x="${cx.toFixed(1)}" dy="${index === 0 ? 0 : 25}">${esc(line)}</tspan>`)
      .join('');
    return `${shape}
    <text class="region halo" x="${cx.toFixed(1)}" y="${baseline.toFixed(1)}" text-anchor="middle" fill="${palette.text}">${label}</text>`;
  }).join('\n    ');

  const flowLayer = flows.map((f, index) => {
    const { d, mid } = flowPath(f.from, f.to, f.bow);
    const dash = f.style === 'solid' ? '' : ' stroke-dasharray="18 13"';
    let badge = '';
    if (f.label) {
      const baseline = placer.place(mid[0], mid[1] + 17, 40, 40);
      const cy = baseline - 17;
      badge = `<circle class="badge" cx="${mid[0].toFixed(1)}" cy="${cy.toFixed(1)}" r="17"/>
    <text class="badgenum" x="${mid[0].toFixed(1)}" y="${(cy + 7).toFixed(1)}" text-anchor="middle">${index + 1}</text>`;
    }
    return `<path class="flow" d="${d}"${dash} marker-end="url(#arrow)"/>
    ${badge}`;
  }).join('\n    ');

  // The key carries every area and every route, in two columns once it gets long,
  // so nothing a map draws is left unexplained.
  const rows = legend.slice(0, 14);
  const twoColumn = legendWillBeTwoColumn;
  const perColumn = legendRowCount;
  const columnWidth = twoColumn ? 500 : 620;
  const legendRows = rows.map((row, index) => {
    const column = Math.floor(index / perColumn);
    const x = 18 + column * columnWidth;
    const y = 56 + (index % perColumn) * 33;
    const swatch = row.kind === 'flow'
      ? `<circle class="badge" cx="${x + 15}" cy="${y - 7}" r="14"/><text class="badgenum" x="${x + 15}" y="${y - 1}" text-anchor="middle" font-size="16">${row.step || ''}</text><line x1="${x + 33}" x2="${x + 54}" y1="${y - 7}" y2="${y - 7}" stroke="${BRONZE}" stroke-width="5" stroke-dasharray="9 7"/><path d="M${x + 54},${y - 13} L${x + 66},${y - 7} L${x + 54},${y - 1} Z" fill="${BRONZE}"/>`
      : `<rect x="${x}" y="${y - 18}" width="40" height="23" rx="4" fill="${tone(row.tone).fill}" fill-opacity=".6" stroke="${tone(row.tone).stroke}" stroke-width="3"/>`;
    return `${swatch}<text class="small" x="${x + (row.kind === 'flow' ? 76 : 56)}" y="${y}">${esc(row.text)}</text>`;
  }).join('\n      ');
  const legendHeight = legendBoxHeight;
  const legendWidth = legendBoxWidth;

  const footnote = spec.note
    || 'BeHistorical instructional map. Coastlines are simplified for classroom projection; regions and routes are drawn to the standard scholarly picture of this period.';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="map-title map-desc">
  <title id="map-title">${esc(spec.title)}</title>
  <desc id="map-desc">${esc(spec.description || `${spec.code} instructional map for AP World History: ${spec.title}. ${spec.subtitle || ''}`)}</desc>
  <defs>
    <linearGradient id="paper" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="${PAPER}"/><stop offset="1" stop-color="#F1E7D5"/>
    </linearGradient>
    <marker id="arrow" markerWidth="20" markerHeight="16" refX="17" refY="8" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0,0 L20,8 L0,16 Z" fill="${BRONZE}"/>
    </marker>
    <style>
      .title{font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:44px;fill:${INK}}
      .subtitle{font-family:Arial,Helvetica,sans-serif;font-size:19px;fill:${SLATE};letter-spacing:1.2px;text-transform:uppercase}
      .region{font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:21px;letter-spacing:.5px}
      .place{font-family:Arial,Helvetica,sans-serif;font-weight:700;font-size:18px;fill:${INK}}
      .placenote{font-family:Arial,Helvetica,sans-serif;font-size:15px;fill:${SLATE}}
      .small{font-family:Arial,Helvetica,sans-serif;font-size:17px;fill:${INK}}
      .tiny{font-family:Arial,Helvetica,sans-serif;font-size:14px;fill:${SLATE}}
      .badgenum{font-family:Arial,Helvetica,sans-serif;font-weight:700;font-size:19px;fill:${PAPER}}
      .badge{fill:${BRONZE};stroke:${PAPER};stroke-width:3}
      .halo{paint-order:stroke;stroke:${PAPER};stroke-width:5;stroke-linejoin:round}
      .city{fill:${INK};stroke:${PAPER};stroke-width:4}
      .flow{fill:none;stroke:${BRONZE};stroke-width:6;stroke-linecap:round;opacity:.9}
      #land path{fill:${LAND_FILL};stroke:${LAND_STROKE};stroke-width:3}
      #graticule line{stroke:#9FB0AE;stroke-width:1.5;opacity:.35}
    </style>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="${SEA}"/>
  <g id="graticule">
    ${graticule.join('\n    ')}
  </g>
  <line x1="0" y1="${equator.toFixed(1)}" x2="${WIDTH}" y2="${equator.toFixed(1)}" stroke="#4E6B72" stroke-width="2.5" stroke-dasharray="14 10" opacity=".5"/>
  <g id="land">
    ${landLayer}
  </g>

  <g id="highlights">
    ${highlightLayer}
  </g>
  <g id="flows">
    ${flowLayer}
  </g>
  <g id="places">
    ${pointLayer}
  </g>

  <g id="titleband">
    <rect x="0" y="0" width="${WIDTH}" height="118" fill="url(#paper)" opacity=".93"/>
    <rect x="0" y="118" width="${WIDTH}" height="5" fill="${GOLD}"/>
    <text class="title" x="46" y="62">${esc(spec.title)}</text>
    <text class="subtitle" x="48" y="97">${esc(spec.subtitle || `${spec.code} · AP World History`)}</text>
  </g>

  <g id="legend" transform="translate(46,${HEIGHT - legendHeight - 68})">
    <rect x="0" y="0" width="${legendWidth}" height="${legendHeight}" rx="14" fill="url(#paper)" stroke="${SLATE}" stroke-width="2" opacity=".97"/>
    <text class="small" x="18" y="28" font-weight="700">Map Key</text>
      ${legendRows}
  </g>

  <rect x="0" y="${HEIGHT - 52}" width="${WIDTH}" height="52" fill="url(#paper)" opacity=".93"/>
  <text class="tiny" x="46" y="${HEIGHT - 20}">${esc(footnote)}</text>
</svg>
`;
  return { svg, forced: placer.forcedCount() };
}

module.exports = { renderMap };
