/* Separate session-only teacher/submission sign-in; does not change backup auth. */
window.ClassPulseAuth=function(config){
 let sdk,auth,user,loaded=false;
 async function ready(){if(loaded)return;const base='https://www.gstatic.com/firebasejs/'+config.sdkVersion;const [app,a]=await Promise.all([import(base+'/firebase-app.js'),import(base+'/firebase-auth.js')]);sdk=a;auth=a.getAuth(app.initializeApp(config.firebase,'class-pulse'));await a.setPersistence(auth,a.inMemoryPersistence);await auth.authStateReady();loaded=true;}
 return{ready,user:()=>user,getToken:()=>{if(!auth?.currentUser)throw Error('Sign in again.');return auth.currentUser.getIdToken();},async signIn(){await ready();const provider=new sdk.GoogleAuthProvider();provider.setCustomParameters({prompt:'select_account'});const r=await sdk.signInWithPopup(auth,provider);const domain=(r.user.email||'').split('@')[1];if(!config.allowedDomains.includes(domain)){user=null;await sdk.signOut(auth);throw Error('Use your district school account.');}user={uid:r.user.uid,email:r.user.email};return user;},async signOut(){user=null;if(auth)await sdk.signOut(auth);}};
};
