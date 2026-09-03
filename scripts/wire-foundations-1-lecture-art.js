#!/usr/bin/env node
'use strict';
//
// wire-foundations-1-lecture-art.js
//
// Points Foundations 1's first two concept cards at the local photographs in
// assets/images/lecture/foundations-1/, once those files exist.
//
// Card 1 has no picture at all today and falls back to generated brand artwork.
// Card 2 currently uses the Nile-from-orbit photograph from Wikimedia Commons,
// which also appears in the Evidence Lab; the Evidence Lab keeps it, this only
// changes the lecture card.
//
// Local rather than remote is deliberate. These two are not on Commons, and
// local files render inside the Canvas packets with no network at all.
//
// Refuses to run unless both files are real images, because a text file renamed
// .jpg would sail past this and fail later in validate.js.
//
// Idempotent. Run: node scripts/wire-foundations-1-lecture-art.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'foundations', 'foundations-1-geography-data.js');
const DIR = path.join(ROOT, 'assets', 'images', 'lecture', 'foundations-1');

const CARDS = [
  {
    file: 'neolithic-foragers.jpg',
    match: `      image: {
        title: 'River valleys, steppe, and highlands',
        url: '',
        sourceUrl: '',
        caption: 'BeHistorical topic artwork for this card. The physical features that made farming, herding, and state building possible sat in specific places, and those places shaped what grew there.'
      }`,
    replace: `      image: {
        title: 'Foragers before the first harvest',
        url: '../assets/images/lecture/foundations-1/neolithic-foragers.jpg',
        sourceUrl: '',
        caption: 'For roughly 200,000 years this was the human condition: small mobile bands gathering wild plants and hunting game, moving with the seasons. Not a failure to invent farming, but a flexible way of life that often meant fewer working hours and a more varied diet than farming would bring.'
      }`
  },
  {
    file: 'first-wave-civilizations.webp',
    match: `      image: {
        title: 'Nile River from Orbit',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nile_River_and_delta_from_orbit.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nile_River_and_delta_from_orbit.jpg',
        caption: 'The Nile\\'s narrow green corridor through the Sahara shows why agriculture and civilization began at the river, not in the surrounding desert.'
      }`,
    replace: `      image: {
        title: 'First-wave civilizations and where farming began',
        url: '../assets/images/lecture/foundations-1/first-wave-civilizations.webp',
        sourceUrl: '',
        caption: 'Early agriculture in pale, the civilizations that grew out of it in bold. Farming begins independently in six regions, and in every case the state that follows sits on top of it by thousands of years. Map by inquirED for World History Encyclopedia, 2023.'
      }`
  }
];

// JPEG starts FF D8 FF, PNG starts 89 50 4E 47, WebP starts RIFF. validate.js
// checks this too, but failing here names the file instead of failing three
// steps later.
function isRealImage(file) {
  const fd = fs.openSync(file, 'r');
  const head = Buffer.alloc(4);
  fs.readSync(fd, head, 0, 4, 0);
  fs.closeSync(fd);
  return (head[0] === 0xFF && head[1] === 0xD8 && head[2] === 0xFF)
    || (head[0] === 0x89 && head[1] === 0x50 && head[2] === 0x4E && head[3] === 0x47)
    || (head.toString('ascii') === 'RIFF');
}

function main() {
  const missing = CARDS.filter(c => !fs.existsSync(path.join(DIR, c.file)));
  if (missing.length) {
    console.error('Missing image files in assets/images/lecture/foundations-1/:');
    missing.forEach(c => console.error(`  ${c.file}`));
    console.error('\nUpload them there first, then run this again.');
    process.exit(1);
  }

  const fake = CARDS.filter(c => !isRealImage(path.join(DIR, c.file)));
  if (fake.length) {
    console.error('Not real image data, the upload probably failed:');
    fake.forEach(c => console.error(`  ${c.file}`));
    process.exit(1);
  }

  let src = fs.readFileSync(DATA, 'utf8');
  let wired = 0, already = 0;

  CARDS.forEach(card => {
    if (src.includes(card.replace)) { already++; return; }
    if (!src.includes(card.match)) {
      console.error(`Could not find the block for ${card.file}. The data file has changed; wire it by hand.`);
      process.exit(1);
    }
    src = src.replace(card.match, card.replace);
    wired++;
  });

  fs.writeFileSync(DATA, src);
  const kb = f => Math.round(fs.statSync(path.join(DIR, f)).size / 1024);
  CARDS.forEach(c => console.log(`  ${c.file.padEnd(30)} ${kb(c.file)} KB`));
  console.log(`\nwired ${wired}, already wired ${already}`);
  console.log('Next: node scripts/validate.js && node scripts/build-canvas-packets.js');
}

main();
