"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{8:function(e,t,a){a.r(t);var l=a(5893),o=a(1701),i=a(9149),c=a(58),r=a(6154),s=a(5675),d=a.n(s),n=a(7294),m=a(5434);t.default=function(e){let{data:t}=e,[{socket:s,userInfo:u},v]=(0,o.C4)(),[g,h]=(0,n.useState)(!1),[p,f]=(0,n.useState)(void 0),[y,x]=(0,n.useState)(void 0),[b,S]=(0,n.useState)(void 0),[j,N]=(0,n.useState)(void 0);return(0,n.useEffect)(()=>{"out-going"===t.type?s.current.on("accept-call",()=>h(!0)):setTimeout(()=>{h(!0)},1e3)},[t]),(0,n.useEffect)(()=>{let e=async()=>{try{let{data:{token:e}}=await r.Z.get("".concat(c.MZ,"/").concat(u.id));f(e)}catch(e){console.log(e)}};e()},[g]),(0,n.useEffect)(()=>{let e=async()=>{Promise.all([a.e(43),a.e(683),a.e(238)]).then(a.t.bind(a,3399,23)).then(async e=>{let{ZegoExpressEngine:a}=e,l=new a("645680231","959d7e336a2a21febbd59da5060db017");x(l),l.on("roomStreamUpdate",async(e,a,c,r)=>{if("ADD"===a){let e=document.getElementById("remote-video"),a=document.createElement("video"===t.callType?"video":"audio");a.id=c[0].streamID,a.autoplay=!0,a.muted=!1,e&&e.appendChild(a),l.startPlayingStream(c[0].streamID,{audio:!0,video:!0}).then(e=>a.srcObject=e)}else"DELETE"===a&&l&&o&&c[0].streamID&&(l.destroyStream(o),l.stopPublishingStream(c[0].streamID),l.logoutRoom(t.roomID.toString()),v({type:i.J.END_CALL}))}),await l.loginRoom(t.roomId.toString(),p,{userID:u.id.toString(),userName:u.name},{userUpdate:!0});let o=await l.createStream({camera:{audio:!0,video:"video"===t.callType}}),c=document.getElementById("local-video"),r=document.createElement("video"===t.callType);r.id="video-local-zego",r.className="h-20 w-32",r.autoplay=!0,r.muted=!1,r.playsInline=!0,c.appendChild(r);let s=document.getElementById("video-local-zego");s.srcObject=o;let d="123"+Date.now();N(d),S(o),l.startPublishingStream(d,o)})};p&&e()},[p]),(0,l.jsxs)("div",{className:"border-conversation-border border-l w-full bg-conversation-panel-background flex flex-col h-[100vh] overflow-hidden items-center justify-center text-white",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-3 items-center ",children:[(0,l.jsx)("span",{className:"text-5xl",children:t.name}),(0,l.jsx)("span",{className:"text-lg",children:g&&"video"!==t.callType?"On going call":"Calling"})]}),(!g||"audio"===t.callType)&&(0,l.jsx)("div",{className:"my-24",children:(0,l.jsx)(d(),{src:t.profilePicture,alt:"avatar",height:300,width:300,className:"rounded-full"})}),(0,l.jsx)("div",{className:"my-5 relative",id:"remote-video",children:(0,l.jsx)("div",{className:"absolute bottom-5 right-5",id:"local-video"})}),(0,l.jsx)("div",{className:"h-16 w-16 bg-red-600 flex items-center justify-center rounded-full",children:(0,l.jsx)(m.hoo,{className:"text-3xl cursor-pointer",onClick:()=>{let e=t.id;y&&b&&j&&(y.destroyStream(b),y.stopPublishingStream(j),y.logoutRoom(t.roomId.toString())),"voice"===t.callType?s.current.emit("reject-voice-call",{from:e}):s.current.emit("reject-video-call",{from:e}),v({type:i.J.END_CALL})}})})]})}}}]);