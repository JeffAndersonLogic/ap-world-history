'use strict';
// Server-only adapter. No default model, credentials in server environment only.
// Official schema: https://developers.openai.com/api/docs/guides/structured-outputs?api-mode=responses
function createOpenAIProvider({apiKey,model,fetchImpl=fetch,timeoutMs=45000}={}){
 if(!apiKey||!model)throw new Error('Server API key and explicit model required');
 return {id:'openai:'+model,version:'responses-json-schema-v1',kind:'model',async interpret(payload){
  const response=await fetchImpl('https://api.openai.com/v1/responses',{method:'POST',redirect:'error',signal:AbortSignal.timeout(timeoutMs),headers:{Authorization:'Bearer '+apiKey,'Content-Type':'application/json'},body:JSON.stringify({model,store:false,instructions:payload.instructions,input:JSON.stringify({contract:payload.contract,response:payload.response}),text:{format:{type:'json_schema',name:'class_pulse_interpretation',strict:true,schema:payload.schema}},max_output_tokens:3500})});
  // Never include provider error bodies: they may echo student writing.
  if(!response.ok)throw new Error('Model service unavailable');
  const data=await response.json();if(data.status!=='completed')throw new Error('Incomplete model response');
  const messages=(data.output||[]).filter(x=>x.type==='message').flatMap(x=>x.content||[]);
  if(messages.some(x=>x.type==='refusal'))throw new Error('Model declined interpretation');
  const text=messages.filter(x=>x.type==='output_text').map(x=>x.text).join('');
  return JSON.parse(text);
 }};
}
module.exports={createOpenAIProvider};
