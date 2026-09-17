(function(){
'use strict';
function sessionFor(topic){try{return sessionStorage.getItem('behistorical-remote-session-'+topic)||'';}catch(e){return'';}}
window.BEHISTORICAL_NTFY_GET_PUBLISH=async function(topic,payload){
  const session=sessionFor(topic);
  if(!/^[a-f0-9]{36}$/i.test(session))throw new Error('No active BeHistorical remote session');
  const relayTopic='behistorical-remote-'+session;
  const message=encodeURIComponent(JSON.stringify(payload));
  const url='https://ntfy.sh/'+relayTopic+'/trigger?message='+message;
  const r=await fetch(url,{method:'GET',cache:'no-store'});
  if(!r.ok)throw new Error('HTTP '+r.status);
  return true;
};
})();
