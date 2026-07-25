'use strict';

/**
 * Shared geography for BeHistorical instructional maps.
 *
 * Coastlines are coarse lon/lat polygons: recognizable at classroom projection
 * size, deliberately simplified, and honest about that in every map's footnote.
 * Keeping the geography here (rather than in hand-drawn SVG paths) means every
 * generated map shares one world, so students see the same continents in Unit 2
 * and Unit 9.
 *
 * Projection is equirectangular on a 1600x1000 canvas:
 *   x = (lon + 180) / 360 * 1600
 *   y = (90 - lat) / 180 * 1000
 */

const WIDTH = 1600;
const HEIGHT = 1000;

function project(lon, lat) {
  return [((lon + 180) / 360) * WIDTH, ((90 - lat) / 180) * HEIGHT];
}

function pathFor(points, close = true) {
  const commands = points.map(([lon, lat], index) => {
    const [x, y] = project(lon, lat);
    return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return commands.join(' ') + (close ? ' Z' : '');
}

// ── Landmasses ────────────────────────────────────────────────────────────────
const LAND = {
  greenland: [[-45, 60], [-30, 68], [-25, 72], [-30, 80], [-45, 83], [-58, 82], [-60, 76], [-52, 68], [-45, 60]],
  northAmerica: [
    [-168, 66], [-160, 71], [-152, 71], [-140, 70], [-128, 70], [-115, 69], [-100, 69], [-90, 70],
    [-80, 73], [-70, 70], [-62, 60], [-55, 52], [-60, 47], [-67, 45], [-70, 41], [-75, 36],
    [-81, 26], [-80, 25], [-84, 30], [-89, 29], [-94, 29], [-97, 26], [-98, 20], [-95, 16],
    [-92, 14], [-87, 13], [-83, 9], [-78, 8], [-82, 14], [-88, 16], [-95, 17], [-105, 21],
    [-110, 24], [-114, 30], [-118, 33], [-122, 37], [-124, 42], [-124, 48], [-131, 53],
    [-140, 59], [-148, 60], [-155, 58], [-163, 58], [-166, 62], [-168, 66]
  ],
  southAmerica: [
    [-78, 8], [-72, 11], [-62, 10], [-52, 5], [-50, 0], [-44, -2], [-35, -6], [-38, -13],
    [-40, -20], [-48, -25], [-53, -33], [-58, -38], [-62, -40], [-65, -45], [-68, -51],
    [-70, -55], [-75, -52], [-74, -45], [-73, -37], [-71, -30], [-70, -22], [-71, -16],
    [-77, -6], [-80, -3], [-78, 2], [-78, 8]
  ],
  africa: [
    [-17, 15], [-16, 21], [-10, 26], [-2, 31], [8, 33], [11, 34], [20, 32], [28, 31], [33, 31],
    [35, 24], [38, 18], [43, 12], [48, 11], [51, 11], [45, 5], [41, -2], [40, -8], [35, -18],
    [33, -26], [29, -31], [25, -34], [19, -35], [17, -30], [14, -22], [12, -16], [9, -6],
    [9, 2], [5, 5], [-2, 5], [-8, 4], [-13, 9], [-17, 15]
  ],
  eurasia: [
    [-10, 36], [-9, 43], [-2, 47], [3, 51], [7, 53], [5, 58], [9, 57], [11, 58], [13, 55],
    [19, 54], [21, 56], [24, 57], [28, 59], [30, 60], [27, 65], [22, 66], [24, 70], [31, 70],
    [40, 68], [50, 69], [60, 71], [70, 73], [80, 74], [95, 78], [105, 77], [113, 74],
    [125, 73], [135, 72], [145, 72], [160, 70], [170, 69], [180, 68], [180, 62], [170, 60],
    [163, 58], [157, 52], [150, 46], [143, 44], [140, 42], [137, 36], [130, 35], [125, 32],
    [122, 30], [118, 24], [110, 21], [107, 17], [105, 10], [102, 4], [100, 7], [98, 13],
    [95, 16], [91, 22], [87, 21], [81, 16], [78, 9], [77, 15], [73, 20], [70, 23], [65, 24],
    [60, 25], [57, 22], [52, 16], [43, 12], [38, 18], [35, 24], [35, 31], [36, 36], [30, 37],
    [27, 41], [23, 38], [20, 40], [16, 38], [13, 45], [8, 44], [3, 42], [-2, 39], [-6, 36], [-10, 36]
  ],
  britain: [[-6, 50], [-3, 51], [1, 52], [-1, 55], [-2, 58], [-5, 58], [-5, 55], [-6, 53], [-6, 50]],
  ireland: [[-10, 52], [-6, 52], [-6, 55], [-8, 55], [-10, 54], [-10, 52]],
  japan: [[130, 32], [135, 34], [139, 35], [141, 39], [142, 43], [145, 44], [141, 45], [138, 37], [134, 34], [130, 32]],
  indonesia: [[95, 5], [104, -1], [106, -6], [114, -8], [119, -9], [117, -3], [110, 2], [103, 2], [95, 5]],
  philippines: [[119, 18], [122, 17], [124, 13], [126, 9], [125, 6], [121, 9], [120, 14], [119, 18]],
  australia: [
    [113, -22], [114, -27], [116, -32], [121, -34], [129, -32], [135, -35], [140, -38],
    [147, -38], [150, -35], [153, -28], [153, -25], [148, -20], [143, -13], [135, -12],
    [130, -12], [125, -14], [118, -18], [113, -22]
  ],
  newZealand: [[173, -35], [176, -38], [178, -38], [174, -42], [171, -44], [167, -46], [166, -45], [170, -42], [172, -38], [173, -35]],
  madagascar: [[44, -12], [50, -15], [50, -20], [47, -25], [45, -25], [43, -21], [43, -16], [44, -12]],
  cuba: [[-84, 22], [-77, 20], [-74, 18], [-78, 19], [-84, 22]],
  hispaniola: [[-73, 19], [-69, 19], [-68, 18], [-72, 18], [-73, 19]],
  sriLanka: [[80, 9], [82, 8], [81, 6], [80, 7], [80, 9]]
};

// ── Named regions used by map specs ───────────────────────────────────────────
// Each entry is [lon, lat, radiusLon, radiusLat] describing the ellipse a
// highlight covers and the anchor a flow arrow starts or ends at.
const ZONES = {
  britain: [-2, 54, 9, 6],
  westernEurope: [4, 48, 14, 8],
  europe: [16, 50, 26, 11],
  easternEurope: [26, 51, 15, 8],
  russia: [62, 60, 32, 10],
  scandinavia: [16, 63, 13, 7],
  mediterranean: [17, 36, 24, 6],
  swAsia: [45, 31, 17, 9],
  anatolia: [33, 39, 11, 5],
  arabia: [46, 22, 10, 8],
  iran: [54, 32, 10, 7],
  centralAsia: [67, 44, 15, 8],
  steppe: [95, 47, 22, 8],
  southAsia: [78, 22, 12, 10],
  eastAsia: [112, 34, 15, 11],
  japan: [139, 38, 6, 6],
  korea: [128, 38, 4, 4],
  seAsia: [105, 8, 13, 10],
  indonesia: [110, -3, 16, 7],
  philippines: [122, 12, 5, 6],
  northAfrica: [14, 27, 24, 6],
  westAfrica: [-4, 12, 15, 7],
  centralAfrica: [20, 0, 13, 8],
  eastAfrica: [38, 2, 8, 10],
  southernAfrica: [25, -25, 12, 8],
  egypt: [30, 26, 6, 5],
  ethiopia: [39, 9, 5, 5],
  swahiliCoast: [40, -8, 4, 10],
  northAmerica: [-100, 45, 30, 13],
  unitedStates: [-98, 39, 22, 8],
  canada: [-100, 58, 30, 8],
  mexico: [-102, 23, 10, 6],
  caribbean: [-74, 18, 11, 4],
  centralAmerica: [-86, 13, 7, 4],
  brazil: [-52, -10, 14, 12],
  andes: [-72, -14, 6, 18],
  southernCone: [-64, -35, 8, 10],
  southAmerica: [-60, -15, 18, 22],
  australia: [134, -25, 19, 9],
  newZealand: [172, -41, 5, 5],
  pacific: [-150, 5, 30, 20],
  atlantic: [-35, 15, 20, 22],
  indianOcean: [72, -18, 22, 16],
  arctic: [40, 82, 60, 6],
  antarctic: [0, -78, 90, 6]
};

function zone(name) {
  const found = ZONES[name];
  if (!found) throw new Error(`unknown map zone: ${name}`);
  return found;
}

function zoneCenter(name) {
  const [lon, lat] = zone(name);
  return project(lon, lat);
}

function landPaths() {
  return Object.entries(LAND).map(([key, points]) => ({ key, d: pathFor(points) }));
}

module.exports = { WIDTH, HEIGHT, project, pathFor, LAND, ZONES, zone, zoneCenter, landPaths };
