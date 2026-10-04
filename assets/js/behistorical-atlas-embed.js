(function(){
'use strict';
const frame=document.getElementById('unit2-atlas-frame');if(!frame)return;
window.addEventListener('message',event=>{
 if(event.origin!==window.location.origin||event.source!==frame.contentWindow)return;
 const data=event.data;if(!data||data.type!=='BH_ATLAS_HEIGHT'||!Number.isFinite(data.height)||data.height<200||data.height>10000)return;
 frame.style.height=Math.ceil(data.height+2)+'px';
});
})();
