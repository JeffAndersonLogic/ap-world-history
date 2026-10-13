#!/usr/bin/env node
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const contract = require('./lib/skilllens-pilot-contract')();
const data = {contract, ...require('./lib/skilllens-pilot-fixtures')(contract)};
const core = fs.readFileSync(path.join(ROOT,'scripts/lib/skilllens-pilot-core.js'),'utf8');
const ui = fs.readFileSync(path.join(ROOT,'teacher/skilllens-pilot/app.js'),'utf8');
const css = fs.readFileSync(path.join(ROOT,'teacher/skilllens-pilot/fonts.css'),'utf8') + fs.readFileSync(path.join(ROOT,'teacher/skilllens-pilot/style.css'),'utf8');
const template = fs.readFileSync(path.join(ROOT,'teacher/skilllens-pilot/template.html'),'utf8');
const licenses = fs.readFileSync(path.join(ROOT,'teacher/skilllens-pilot/FONT-LICENSES.txt'),'utf8');
if (/<\/script/i.test(core + ui) || /<\/style/i.test(css)) throw new Error('An inline source contains a closing tag.');
const content = template.replace('/* PILOT_CSS */',()=>css).replace('/* PILOT_CORE */',()=>core).replace('/* PILOT_DATA */',()=> 'const PILOT_DATA = '+JSON.stringify(data).replace(/</g,'\\u003c')+';').replace('/* PILOT_APP */',()=>ui).replace('</head>',()=> '<!-- Bundled font licenses\n'+licenses.replace(/-->/g,'--&gt;')+'\n-->\n</head>');
const destination = path.join(ROOT,'teacher/skilllens-pilot.html');
if (process.argv.includes('--check')) {
  if (!fs.existsSync(destination) || fs.readFileSync(destination,'utf8') !== content) { console.error('Pilot is stale: run npm run build:skilllens-pilot'); process.exit(1); }
  console.log('PASS pilot generated file matches canonical criteria, fixtures, and sources.');
} else { fs.writeFileSync(destination,content); console.log('Built teacher/skilllens-pilot.html (self-contained; synthetic data only).'); }
