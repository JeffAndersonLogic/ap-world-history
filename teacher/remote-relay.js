/* Shared, recoverable transport for the laptop and iPad. No lesson notes or
 * student work travel through the relay, only control commands and slide state. */
(function(global){
'use strict';
function connect(options){
  const url=options.url,seen=new Set(),order=[];
  let stream=null,socket=null,timer=null,pollTimer=null,watchdog=null,closed=false,ready=false,polling=false,generation=0,limitedUntil=0;
  const key='bh-remote-seen-'+options.sender+'-'+url.split('/').pop();
  try{JSON.parse(sessionStorage.getItem(key)||'[]').forEach(id=>{seen.add(id);order.push(id);});}catch(e){}
  const report=(kind,message)=>{if(options.onstatus)options.onstatus(kind,message);};
  function markReady(){
    if(closed||ready)return;
    ready=true;clearTimeout(watchdog);
    report('ready','Relay ready');
    if(options.onready)options.onready();
  }
  function receive(outer){
    if(!outer||outer.event!=='message'||!outer.message)return;
    let data;try{data=JSON.parse(outer.message);}catch(e){return;}
    if(!data||data.sender===options.sender||!['host','ipad'].includes(data.sender))return;
    const id=data.messageId||outer.id;
    if(id&&seen.has(id))return;
    if(id){seen.add(id);order.push(id);while(order.length>160)seen.delete(order.shift());try{sessionStorage.setItem(key,JSON.stringify(order));}catch(e){}}
    if(options.onmessage)options.onmessage(data);
  }
  async function request(path,init){
    const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),6000);
    try{
      const response=await fetch(url+path,Object.assign({cache:'no-store',signal:controller.signal},init));
      if(!response.ok){const e=new Error('HTTP '+response.status);e.status=response.status;e.retryAfter=Number(response.headers.get('Retry-After'))||0;throw e;}
      // Read inside the timeout too: a proxy may return headers and stall the body.
      return await response.text();
    }finally{clearTimeout(timeout);}
  }
  function failed(error){
    if(closed)return;
    if(error&&error.status===429){
      limitedUntil=Date.now()+Math.max(60000,(error.retryAfter||0)*1000);
      ready=false;stopConnections();
      report('limited','The relay is rate-limited. Waiting before retrying.');
      clearTimeout(pollTimer);clearTimeout(timer);
      timer=setTimeout(restart,Math.max(60000,(error.retryAfter||0)*1000)+50);return;
    }
    ready=false;
    report('unreachable','Cannot reach the classroom relay. Check the connection or try another network, then Retry.');
  }
  async function publish(payload){
    if(closed||Date.now()<limitedUntil)return false;
    const body=JSON.stringify(Object.assign({sender:options.sender,ts:Date.now(),messageId:crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random()},payload));
    try{await request('',{method:'POST',headers:{'Content-Type':'text/plain'},body});return true;}
    catch(first){
      if(first.status===429){failed(first);return false;}
      // The same message ID makes an ambiguous response safe to retry.
      try{await request('/trigger?message='+encodeURIComponent(body)+'&_='+Date.now(),{method:'GET'});return true;}
      catch(error){failed(error);return false;}
    }
  }
  async function poll(){
    if(closed||polling||Date.now()<limitedUntil||document.visibilityState==='hidden')return;
    const current=generation;
    polling=true;
    try{
      const body=await request('/json?poll=1&since=30s&_='+Date.now());
      if(current!==generation||closed)return;
      markReady();
      body.split('\n').filter(Boolean).forEach(line=>{try{receive(JSON.parse(line));}catch(e){}});
    }catch(error){if(current===generation)failed(error);}
    finally{polling=false;}
  }
  function startPolling(){
    if(closed||pollTimer)return;
    const current=generation;
    const run=async()=>{pollTimer=null;await poll();if(!closed&&current===generation&&Date.now()>=limitedUntil&&!socket&&!stream)pollTimer=setTimeout(run,10000);};
    run();
  }
  function stopConnections(){
    clearTimeout(watchdog);
    if(stream){stream.onopen=stream.onmessage=stream.onerror=null;stream.close();stream=null;}
    if(socket){const old=socket;socket=null;old.onopen=old.onmessage=old.onclose=old.onerror=null;old.close();}
  }
  function websocket(){
    if(closed||socket||Date.now()<limitedUntil)return;
    stopConnections();ready=false;
    const current=generation;
    report('connecting','Trying a fallback connection…');
    try{
      socket=new WebSocket(url.replace(/^http/,'ws')+'/ws');
      socket.onopen=()=>{if(current!==generation)return;markReady();poll();};
      socket.onmessage=e=>{try{receive(JSON.parse(e.data));}catch(error){}};
      socket.onerror=()=>{};
      socket.onclose=()=>{socket=null;ready=false;startPolling();};
      watchdog=setTimeout(()=>{if(socket&&socket.readyState!==1){stopConnections();startPolling();}},4000);
    }catch(e){socket=null;startPolling();}
  }
  function restart(){
    if(closed||Date.now()<limitedUntil)return;
    generation++;
    clearTimeout(timer);timer=null;clearTimeout(pollTimer);pollTimer=null;
    stopConnections();ready=false;
    if(!navigator.onLine){report('offline','This device is offline. Reconnect to the internet, then Retry.');return;}
    report('connecting','Connecting to the classroom relay…');
    try{
      stream=new EventSource(url+'/sse');
      stream.onopen=()=>{markReady();poll();};
      stream.onmessage=e=>{try{receive(JSON.parse(e.data));}catch(error){}};
      stream.onerror=()=>{ready=false;websocket();};
      watchdog=setTimeout(()=>{if(!ready)websocket();},4000);
    }catch(e){websocket();}
  }
  const recover=()=>{if(document.visibilityState==='visible')restart();};
  global.addEventListener('online',recover);
  const restore=e=>{if(e.persisted)recover();};
  global.addEventListener('pageshow',restore);
  document.addEventListener('visibilitychange',recover);
  restart();
  return{publish,retry:restart,close(){closed=true;generation++;stopConnections();clearTimeout(timer);clearTimeout(pollTimer);global.removeEventListener('online',recover);global.removeEventListener('pageshow',restore);document.removeEventListener('visibilitychange',recover);}};
}
global.BHRemoteRelay={connect};
})(window);
