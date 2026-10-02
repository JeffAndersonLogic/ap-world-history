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

// A spec names a zone from map-frame.js, or gives explicit coordinates when no
// named zone fits: [lon, lat, rLon, rLat] for an area, [lon, lat] for a route
// end. Named zones are the default and render exactly as they always have.
function area(name) {
  return Array.isArray(name) ? name : zone(name);
}

function ellipse(zoneName, toneName, opacity) {
  const [lon, lat, rLon, rLat] = area(zoneName);
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

// A route given waypoints is drawn as a smooth curve through every one of them
// (Catmull-Rom, written out as cubic Beziers). A two-point arc cannot follow a
// sea lane: the Indian Ocean route from China to India has to bend round the
// Malay peninsula and the tip of India, and a single bow sends it over the
// Himalayas instead. The badge sits on the middle waypoint, or on the middle of
// the middle segment when the count is even.
function viaPath(points) {
  const pts = points.map(([lon, lat]) => project(lon, lat));
  const at = (i) => pts[Math.max(0, Math.min(pts.length - 1, i))];
  const fmt = ([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`;
  const segments = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    segments.push({ p1, c1, c2, p2 });
  }
  let mid;
  if (pts.length % 2 === 1) {
    mid = pts[(pts.length - 1) / 2];
  } else {
    const { p1, c1, c2, p2 } = segments[pts.length / 2 - 1];
    mid = [0, 1].map((k) => 0.125 * p1[k] + 0.375 * c1[k] + 0.375 * c2[k] + 0.125 * p2[k]);
  }
  return {
    d: `M${fmt(pts[0])} ` + segments.map(({ c1, c2, p2 }) => `C${fmt(c1)} ${fmt(c2)} ${fmt(p2)}`).join(' '),
    mid
  };
}

function flowPath(fromZone, toZone, bow, via) {
  const [flon, flat] = area(fromZone);
  const [tlon, tlat] = area(toZone);
  if (via && via.length) return viaPath([[flon, flat], ...via, [tlon, tlat]]);
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

// Points along a route, read back off its own path data (absolute M, Q and C,
// which is all this file writes). The placer treats them as obstacles so a name
// is never set where a route line will run.
function samplePath(d) {
  const out = [];
  const tokens = d.match(/[MQC]|-?\d+(?:\.\d+)?/g) || [];
  let i = 0;
  let cur = null;
  const num = () => Number(tokens[i++]);
  while (i < tokens.length) {
    const cmd = tokens[i++];
    if (cmd === 'M') {
      cur = [num(), num()];
      out.push(cur);
    } else if (cmd === 'Q') {
      const c = [num(), num()];
      const e = [num(), num()];
      for (let t = 0.1; t <= 1.0001; t += 0.1) {
        const u = 1 - t;
        out.push([u * u * cur[0] + 2 * u * t * c[0] + t * t * e[0], u * u * cur[1] + 2 * u * t * c[1] + t * t * e[1]]);
      }
      cur = e;
    } else if (cmd === 'C') {
      const c1 = [num(), num()];
      const c2 = [num(), num()];
      const e = [num(), num()];
      for (let t = 0.1; t <= 1.0001; t += 0.1) {
        const u = 1 - t;
        const f = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
        out.push([f[0] * cur[0] + f[1] * c1[0] + f[2] * c2[0] + f[3] * e[0], f[0] * cur[1] + f[1] * c1[1] + f[2] * c2[1] + f[3] * e[1]]);
      }
      cur = e;
    }
  }
  return out;
}

/**
 * Greedy label placement: keeps a list of claimed boxes and moves each new label
 * to the nearest spot, in any direction, that overlaps neither another label nor
 * a route line. Offset zero comes first, so a label that was already clear stays
 * exactly where it was. It counts the times it ran out of room and had to place a
 * label anyway; build-instructional-maps.js fails on a non-zero count, so an
 * overcrowded spec is caught at build time rather than shipped as unreadable
 * overlapping text.
 */
const MAX_NUDGE = 228;
const NUDGES = (() => {
  const list = [[0, 0]];
  const steps = MAX_NUDGE / 12;
  for (let j = -steps; j <= steps; j++) {
    for (let i = -steps; i <= steps; i++) {
      if (i === 0 && j === 0) continue;
      if (Math.hypot(i * 12, j * 12) <= MAX_NUDGE) list.push([i * 12, j * 12]);
    }
  }
  // A route badge slides only along the vertical, 24 pixels at a time and as far
  // as it always could (14 steps), which reaches past the label radius.
  for (let step = 1; step <= 14; step++) list.push([0, step * 24], [0, -step * 24]);
  // Nearest first; at equal distance prefer moving up or down, which is how
  // labels were always nudged.
  return list.sort((a, b) => (Math.hypot(a[0], a[1]) - Math.hypot(b[0], b[1])) || (Math.abs(b[1]) - Math.abs(a[1])));
})();

function createPlacer() {
  const claimed = [];
  const routes = [];
  let forced = 0;
  const overlaps = (a, b) => !(a.x2 < b.x1 || b.x2 < a.x1 || a.y2 < b.y1 || b.y2 < a.y1);
  return {
    forcedCount: () => forced,
    claim(box) { claimed.push(box); },
    // A route claims a thin corridor around itself, for labels only.
    claimRoute(points) {
      for (const [x, y] of points) routes.push({ x1: x - 11, x2: x + 11, y1: y - 11, y2: y + 11 });
    },
    place(cx, cy, width, height, anchor = 'middle', { avoidRoutes = true, verticalOnly = false, below = 6 } = {}) {
      const half = anchor === 'middle' ? width / 2 : 0;
      const left = anchor === 'end' ? -width : -half;
      for (const [dx, dy] of NUDGES) {
        // A route badge has to stay on its route, so it only slides along the
        // vertical, in the same 24-pixel steps it always used.
        if (verticalOnly && (dx !== 0 || dy % 24 !== 0)) continue;
        const x = cx + dx;
        const y = cy + dy;
        if (y - height < 128 || y > HEIGHT - 128) continue;
        if (x + left < 12 || x + left + width > WIDTH - 12) continue;
        const box = { x1: x + left - 6, x2: x + left + width + 6, y1: y - height - 4, y2: y + below };
        if (claimed.some((other) => overlaps(box, other))) continue;
        if (avoidRoutes && routes.some((other) => overlaps(box, other))) continue;
        claimed.push(box);
        return { x, y };
      }
      forced += 1;
      claimed.push({ x1: cx + left, x2: cx + left + width, y1: cy - height, y2: cy });
      return { x: cx, y: cy };
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

  // Route lines are known before any name is placed, so no name lands on one.
  const flowGeometry = flows.map((f) => flowPath(f.from, f.to, f.bow, f.via));
  flowGeometry.forEach((g) => placer.claimRoute(samplePath(g.d)));
  // Badges are pinned to their routes, so they are placed first and names go
  // around them. Placing them last left a name no room beside its own badge.
  const badgeY = flows.map((f, index) => {
    if (!f.label) return null;
    const { mid } = flowGeometry[index];
    return placer.place(mid[0], mid[1] + 17, 40, 40, 'middle', { avoidRoutes: false, verticalOnly: true }).y - 17;
  });

  // City dots are obstacles too: a name set over one reads with a hole in it.
  points.forEach((p) => {
    const [x, y] = project(p.at[0], p.at[1]);
    placer.claim({ x1: x - 12, x2: x + 12, y1: y - 12, y2: y + 12 });
  });

  const pointLayer = points.map((p) => {
    const [x, y] = project(p.at[0], p.at[1]);
    const anchor = p.side === 'left' ? 'end' : 'start';
    const offset = p.side === 'left' ? -20 : 20;
    const width = Math.max(String(p.label).length, String(p.note || '').length) * 11 + 12;
    // The note hangs 22px below the name, so the box has to reach down to it.
    const spot = placer.place(x + offset, y - 4, width, 22, anchor, { below: p.note ? 30 : 6 });
    const baseline = spot.y;
    // A name the placer had to move well away from its dot gets a leader line,
    // so it is still plain which dot it belongs to.
    let leader = '';
    if (Math.hypot(spot.x - (x + offset), baseline - (y - 4)) > 36) {
      const textWidth = Math.max(String(p.label).length * 9.6, String(p.note || '').length * 6.8);
      const left = anchor === 'end' ? spot.x - textWidth : spot.x;
      const nearX = Math.max(left, Math.min(x, left + textWidth));
      const nearY = Math.max(baseline - 16, Math.min(y, baseline + (p.note ? 26 : 4)));
      leader = `<line class="leader" x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${nearX.toFixed(1)}" y2="${nearY.toFixed(1)}"/>
    `;
    }
    return `${leader}<circle class="city" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="10"/>
    <text class="place halo" x="${spot.x.toFixed(1)}" y="${baseline.toFixed(1)}" text-anchor="${anchor}">${esc(p.label)}</text>
    ${p.note ? `<text class="placenote halo" x="${spot.x.toFixed(1)}" y="${(baseline + 22).toFixed(1)}" text-anchor="${anchor}">${esc(p.note)}</text>` : ''}`;
  }).join('\n    ');

  const highlightShapes = [];
  const highlightLabels = highlights.map((h) => {
    const [lon, lat, rLon, rLat] = area(h.zone);
    const [cx, cy] = project(lon, lat);
    const [, edge] = project(lon, lat - rLat);
    const palette = tone(h.tone);
    highlightShapes.push(ellipse(h.zone, h.tone, h.opacity == null ? 0.5 : h.opacity));
    if (!h.label) return '';
    const labelLines = wrap(h.label, 16);
    // Georgia bold capitals measure 11 to 17px a character at this size; 16 is
    // the safe estimate (13 let a long name run under a neighbour).
    const width = Math.max(...labelLines.map((line) => line.length)) * 16 + 12;
    let labelX = cx;
    let labelY = Math.min(edge + 26, HEIGHT - 150);
    let anchor = 'middle';
    if (h.labelSide === 'right') {
      [labelX] = project(lon + rLon, lat);
      labelX += 18;
      labelY = cy + 7;
      anchor = 'start';
    } else if (h.labelSide === 'above') {
      const [, top] = project(lon, lat + rLat);
      labelY = top - 12 - (labelLines.length - 1) * 25;
    } else if (h.labelSide === 'left') {
      [labelX] = project(lon - rLon, lat);
      labelX -= 18;
      labelY = cy + 7;
      anchor = 'end';
    }
    // Extra lines of a wrapped name hang below the first baseline.
    const spot = placer.place(labelX, labelY, width, 22, anchor, { below: 6 + (labelLines.length - 1) * 25 });
    const baseline = spot.y;
    const label = labelLines
      .map((line, index) => `<tspan x="${spot.x.toFixed(1)}" dy="${index === 0 ? 0 : 25}">${esc(line)}</tspan>`)
      .join('');
    return `<text class="region halo" x="${spot.x.toFixed(1)}" y="${baseline.toFixed(1)}" text-anchor="${anchor}" fill="${palette.text}">${label}</text>`;
  }).filter(Boolean).join('\n    ');
  const highlightLayer = highlightShapes.join('\n    ');

  const flowLayer = flows.map((f, index) => {
    const { d, mid } = flowGeometry[index];
    const dash = f.style === 'solid' ? '' : ' stroke-dasharray="18 13"';
    let badge = '';
    if (f.label) {
      const cy = badgeY[index];
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
      .leader{stroke:${INK};stroke-width:2.5;stroke-linecap:round;opacity:.7}
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
  <g id="region-labels">
    ${highlightLabels}
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
