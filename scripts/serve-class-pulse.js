#!/usr/bin/env node
'use strict';
// Local synthetic evaluation server. Never deploy this as a student-data service.
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const C=require('../teacher/data/class-pulse-calibration');
const {createService}=require('../server/class-pulse/service');
const {createOpenAIProvider}=require('../server/class-pulse/openai-provider');
const ROOT=path.resolve(__dirname,'..');
function createServer({provider=C.replayProvider(),budget=100}={}){
 const sandbox={window:{}};vm.runInNewContext(fs.readFileSync(path.join(ROOT,'assets/data/skills-map.js'),'utf8'),sandbox);
 let calls=0,busy=false;
 const boundedProvider={...provider,async interpret(payload){if(calls>=budget)throw new Error('Synthetic model-call budget exhausted');calls++;return provider.interpret(payload);}};
 const service=createService({provider:boundedProvider,map:sandbox.window.BEHISTORICAL_SKILLS_MAP,syntheticCatalog:C.rows});
 const server=http.createServer(async(req,res)=>{
  res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');
  const host=req.headers.host,expected='127.0.0.1:'+server.address().port;
  if(host!==expected){res.writeHead(403).end('Host refused');return;}
  if(req.headers.origin&&req.headers.origin!=='http://'+expected){res.writeHead(403).end('Origin refused');return;}
  if(req.url==='/api/class-pulse/analyze'&&req.method==='POST'){
   if(busy){res.writeHead(429).end('Analysis already running');return;}
   if(!String(req.headers['content-type']).startsWith('application/json')){res.writeHead(415).end('JSON required');return;}
   busy=true;
   try{
    let body='';for await(const chunk of req){body+=chunk;if(body.length>8192)throw new Error('Request too large');}
    const data=JSON.parse(body);
    if(Object.keys(data).some(k=>!['ids','checkpoint'].includes(k)))throw new Error('Synthetic identifiers only');
    const results=await service.analyzeSynthetic(data.ids,data.checkpoint);
    res.writeHead(200,{'Content-Type':'application/json'}).end(JSON.stringify({results}));
   }catch(_){res.writeHead(400).end('Synthetic analysis request refused');}finally{busy=false;}
   return;
  }
  if(req.url.startsWith('/api/')){res.writeHead(423).end('Real-student processing disabled');return;}
  if(req.method!=='GET'){res.writeHead(405).end();return;}
  // Explicit public asset allowlist: never serve server source, git, credentials,
  // arbitrary repository files, or request-selected paths outside the UI bundle.
  const pathname=req.url.split('?')[0];
  const allowed=new Set(['/teacher/class-pulse.html','/teacher/class-pulse-reader.js','/teacher/class-pulse-engine.js','/teacher/data/class-pulse-calibration.js','/assets/data/skills-map.js','/scripts/lib/xray-sections.js','/scripts/lib/xray-roster.js']);
  if(!allowed.has(pathname)){res.writeHead(404).end('Not found');return;}
  res.writeHead(200,{'Content-Type':pathname.endsWith('.js')?'text/javascript; charset=utf-8':'text/html; charset=utf-8'}).end(fs.readFileSync(path.join(ROOT,pathname)));
 });
 return server;
}
if(require.main===module){
 const model=process.argv.includes('--model');
 const provider=model?createOpenAIProvider({apiKey:process.env.OPENAI_API_KEY,model:process.env.CLASS_PULSE_MODEL}):C.replayProvider();
 const server=createServer({provider});server.listen(Number(process.env.CLASS_PULSE_PORT||8766),'127.0.0.1',()=>console.log('Synthetic Class Pulse: http://127.0.0.1:'+server.address().port+'/teacher/class-pulse.html · '+(model?'configured model':'contract replay')+' · real processing disabled'));
}
module.exports={createServer};
