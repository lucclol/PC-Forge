'use client';
import React from "react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

var E="cubic-bezier(0.22,1,0.36,1)";
var F={s:"Playfair Display,Georgia,serif",n:"DM Sans,Helvetica Neue,sans-serif",m:"JetBrains Mono,monospace"};
var _a=null;
function ap(t,f,d,v){try{if(!_a)_a=new(window.AudioContext||window.webkitAudioContext)();var o=_a.createOscillator(),g=_a.createGain();o.type=t;o.frequency.setValueAtTime(f,_a.currentTime);g.gain.setValueAtTime(v||0.04,_a.currentTime);g.gain.exponentialRampToValueAtTime(0.001,_a.currentTime+d);o.connect(g);g.connect(_a.destination);o.start(_a.currentTime);o.stop(_a.currentTime+d)}catch(e){}}
var S={h:function(){ap("sine",700,0.05,0.02)},c:function(){ap("sine",520,0.09,0.04)},n:function(){ap("sine",280,0.2,0.03)},i:function(){ap("triangle",200,0.2,0.06);setTimeout(function(){ap("sine",500,0.12,0.04)},100)},r:function(){ap("triangle",250,0.1,0.03)},f:function(){ap("triangle",150,0.5,0.07);setTimeout(function(){ap("sine",300,0.3,0.05)},200)},p:function(){for(var i=0;i<5;i++)(function(j){setTimeout(function(){ap("sine",200+j*100,0.2,0.03)},j*120)})(i)},s:function(){ap("sine",523,0.12,0.05);setTimeout(function(){ap("sine",659,0.12,0.05)},80);setTimeout(function(){ap("sine",784,0.15,0.05)},160)}};
var NS={h:function(){},c:function(){},n:function(){},i:function(){},r:function(){},f:function(){},p:function(){},s:function(){}};

var LT={bg:"#ede8e0",bg2:"#e6e1d8",card:"#f7f5f1",tx:"#1a1817",mt:"#7a756e",ac:"#c44d2b",bd:"rgba(26,24,23,0.08)",bh:"rgba(26,24,23,0.2)",ov:"rgba(237,232,224,0.85)",gl:"rgba(196,77,43,0.15)",cb:"#e2ddd4",cs:"#c8c3ba",se:"#d9d4cb",sf:"rgba(196,77,43,0.06)",pl:"#c44d2b",ad:"rgba(196,77,43,0.06)",gs:"rgba(247,245,241,0.7)",pg:["#ede8e0","#e8e3da","#e3ded5","#ebe6dd","#e0dbd2","#e5e0d7","#e9e4db","#ece7de"]};
var DK={bg:"#0f0e0d",bg2:"#161514",card:"#1e1d1b",tx:"#ede8e0",mt:"#7a756e",ac:"#e8723a",bd:"rgba(237,232,224,0.07)",bh:"rgba(237,232,224,0.18)",ov:"rgba(15,14,13,0.8)",gl:"rgba(232,114,58,0.25)",cb:"#1a1918",cs:"#2a2826",se:"#1e1d1b",sf:"rgba(232,114,58,0.08)",pl:"#e8723a",ad:"rgba(232,114,58,0.12)",gs:"rgba(30,29,27,0.75)",pg:["#0f0e0d","#131211","#111010","#141312","#0d0c0b","#121110","#100f0e","#0e0d0c"]};

var CP={cpu:{l:"Processor",s:"CPU",it:[{id:"i9",n:"Core i9-14900K",sp:"24C/32T 5.8GHz",p:549,t:4,pl:"intel",td:253,dt:"LGA 1700 / 36MB Cache / 125W Base"},{id:"r9",n:"Ryzen 9 7950X",sp:"16C/32T 5.7GHz",p:499,t:4,pl:"amd",td:170,dt:"AM5 / 64MB Cache / 170W TDP"},{id:"i7",n:"Core i7-14700K",sp:"20C/28T 5.6GHz",p:399,t:3,pl:"intel",td:253,dt:"LGA 1700 / 33MB Cache / 125W Base"},{id:"r7",n:"Ryzen 7 7700X",sp:"8C/16T 5.4GHz",p:299,t:2,pl:"amd",td:105,dt:"AM5 / 32MB Cache / 105W TDP"}]},gpu:{l:"Graphics",s:"GPU",it:[{id:"4090",n:"RTX 4090",sp:"24GB GDDR6X",p:1599,t:4,td:450,dt:"16384 Cores / 384-bit / 2520MHz"},{id:"4070ti",n:"RTX 4070 Ti Super",sp:"16GB GDDR6X",p:799,t:3,td:285,dt:"8448 Cores / 256-bit / 2610MHz"},{id:"4070",n:"RTX 4070 Super",sp:"12GB GDDR6X",p:599,t:3,td:220,dt:"7168 Cores / 192-bit / 2475MHz"},{id:"4060",n:"RTX 4060",sp:"8GB GDDR6",p:299,t:2,td:115,dt:"3072 Cores / 128-bit / 2460MHz"}]},ram:{l:"Memory",s:"RAM",it:[{id:"64g",n:"64GB DDR5-6000",sp:"Dual CL30",p:229,t:4,dt:"2x32GB / 1.35V / XMP 3.0"},{id:"32g6",n:"32GB DDR5-6000",sp:"Dual CL30",p:129,t:3,dt:"2x16GB / 1.35V / XMP 3.0"},{id:"32g5",n:"32GB DDR5-5200",sp:"Dual CL36",p:89,t:2,dt:"2x16GB / 1.25V / JEDEC"},{id:"16g",n:"16GB DDR5-5200",sp:"Dual CL36",p:59,t:1,dt:"2x8GB / 1.25V / JEDEC"}]},storage:{l:"Storage",s:"SSD",it:[{id:"2t5",n:"2TB NVMe Gen5",sp:"12400 MB/s",p:229,t:4,dt:"M.2 2280 / TLC / 1200 TBW"},{id:"2t4",n:"2TB NVMe Gen4",sp:"7000 MB/s",p:149,t:3,dt:"M.2 2280 / TLC / 1200 TBW"},{id:"1t4",n:"1TB NVMe Gen4",sp:"7000 MB/s",p:89,t:2,dt:"M.2 2280 / TLC / 600 TBW"},{id:"512g",n:"512GB NVMe Gen4",sp:"5000 MB/s",p:49,t:1,dt:"M.2 2280 / QLC / 300 TBW"}]},psu:{l:"Power Supply",s:"PSU",it:[{id:"1000p",n:"1000W Platinum",sp:"Fully Modular",p:219,t:4,w:1000,dt:"140mm Fan / 10yr / ATX 3.0"},{id:"850g",n:"850W Gold",sp:"Fully Modular",p:149,t:3,w:850,dt:"135mm Fan / 7yr / ATX 3.0"},{id:"750g",n:"750W Gold",sp:"Semi Modular",p:109,t:2,w:750,dt:"120mm Fan / 5yr"},{id:"650b",n:"650W Bronze",sp:"Non-Modular",p:69,t:1,w:650,dt:"120mm Fan / 3yr"}]},cs:{l:"Case",s:"CASE",it:[{id:"full",n:"Full Tower ATX",sp:"Max Airflow Glass",p:189,t:4,dt:"E-ATX / 10 Fans / USB-C"},{id:"mid",n:"Mid Tower ATX",sp:"Mesh Front Glass",p:129,t:3,dt:"ATX / 7 Fans / USB-C"},{id:"compact",n:"Compact ATX",sp:"Small Footprint",p:99,t:2,dt:"mATX/ATX / 5 Fans"},{id:"budget",n:"Budget Mid Tower",sp:"Solid Panel",p:59,t:1,dt:"ATX / 4 Fans"}]}};
var CK=Object.keys(CP);
function tn(t){return["","Standard","Performance","Premium","Elite"][t]||"";}
var PRE=[{id:"pc1",n:"Ember",tg:"Mid-Range",p:1299,d:"RTX 4070 / i7-14700K / 32GB / 1TB",dt:"Ideal for 1440p high settings"},{id:"pc2",n:"Inferno",tg:"Flagship",p:2499,d:"RTX 4090 / i9-14900K / 64GB / 2TB",dt:"No compromise 4K gaming"},{id:"pc3",n:"Anvil",tg:"Workstation",p:1899,d:"RTX 4070 Ti / Ryzen 9 / 64GB / 2TB",dt:"Rendering, dev, creative"},{id:"pc4",n:"Spark",tg:"Budget",p:799,d:"RTX 4060 / Ryzen 7 / 16GB / 512GB",dt:"Solid 1080p gaming"}];
var BUN=[{id:"b1",n:"Starter Kit",tg:"Bundle",p:599,d:"Monitor, KB, Mouse, Headset"},{id:"b2",n:"Stream Kit",tg:"Bundle",p:349,d:"Webcam, Mic, Light, Capture"},{id:"b3",n:"RGB Kit",tg:"Bundle",p:199,d:"Fans, LED Strips, Hub"},{id:"b4",n:"Cooling Kit",tg:"Bundle",p:279,d:"360mm AIO, Paste, Fans"}];
var AP=[];Object.entries(CP).forEach(function(e){e[1].it.forEach(function(i){AP.push(Object.assign({},i,{cat:e[1].l,ck:e[0]}))})});
var BDG=[{id:"budget",n:"Budget",rn:"Under $900",p:800,pr:{cpu:"r7",gpu:"4060",ram:"16g",storage:"512g",psu:"650b",cs:"budget"}},{id:"mid",n:"Performance",rn:"$1200-$1600",p:1400,pr:{cpu:"i7",gpu:"4070",ram:"32g6",storage:"1t4",psu:"750g",cs:"mid"}},{id:"high",n:"Premium",rn:"$1800-$2400",p:2100,pr:{cpu:"r9",gpu:"4070ti",ram:"64g",storage:"2t4",psu:"850g",cs:"mid"}},{id:"ultra",n:"Elite",rn:"$2800+",p:3200,pr:{cpu:"i9",gpu:"4090",ram:"64g",storage:"2t5",psu:"1000p",cs:"full"}}];
var CSL={cpu:{x:195,y:85,w:110,h:55},ram:{x:320,y:70,w:55,h:85},gpu:{x:160,y:175,w:200,h:50},storage:{x:380,y:170,w:55,h:65},psu:{x:160,y:270,w:120,h:55},cs:{x:310,y:265,w:100,h:55}};
var FPS_DATA=[{g:"Cyberpunk 2077",r:"1440p",f:{"4090":115,"4070ti":82,"4070":65,"4060":42}},{g:"Fortnite",r:"1080p",f:{"4090":240,"4070ti":200,"4070":165,"4060":120}},{g:"Valorant",r:"1080p",f:{"4090":400,"4070ti":380,"4070":350,"4060":280}},{g:"COD MW3",r:"1440p",f:{"4090":180,"4070ti":140,"4070":110,"4060":75}},{g:"Hogwarts Legacy",r:"1440p",f:{"4090":105,"4070ti":72,"4070":58,"4060":38}},{g:"Elden Ring",r:"1440p",f:{"4090":60,"4070ti":60,"4070":60,"4060":55}}];

/* Scroll reveal hook */
function useReveal(){var r=useRef(null);var _v=useState(false);var v=_v[0],sv=_v[1];useEffect(function(){var el=r.current;if(!el)return;var ob=new IntersectionObserver(function(en){if(en[0].isIntersecting)sv(true)},{threshold:0.15});ob.observe(el);return function(){ob.disconnect()}},[]);return[r,v]}

function Reveal(props){var _r=useReveal();var ref=_r[0],vis=_r[1];var d=props.delay||0;var dir=props.dir||"up";var tx=dir==="up"?"translateY(30px)":dir==="down"?"translateY(-30px)":dir==="left"?"translateX(30px)":"translateX(-30px)";return React.createElement("div",{ref:ref,style:Object.assign({opacity:vis?1:0,transform:vis?"translate(0,0)":tx,transition:"opacity 0.7s "+E+" "+d+"s, transform 0.7s "+E+" "+d+"s"},props.style||{})},props.children)}

/* Tilt card */
function TC(props){var ref=useRef(null);var _h=useState(false);var h=_h[0],sh=_h[1];var _r=useState({x:0,y:0});var r=_r[0],sr=_r[1];var th=props.th,sn=props.sn,it=props.item;
  return React.createElement("div",{ref:ref,onMouseEnter:function(){sh(true);sn.h()},onMouseMove:function(e){if(!ref.current)return;var b=ref.current.getBoundingClientRect();sr({x:(e.clientY-b.top)/b.height*-8+4,y:(e.clientX-b.left)/b.width*8-4})},onMouseLeave:function(){sh(false);sr({x:0,y:0})},onClick:function(){sn.c();if(props.onV)props.onV(it)},
    style:{background:th.card,border:"1px solid "+(h?th.ac:th.bd),padding:22,cursor:"pointer",transition:"border 0.3s "+E,transform:"perspective(600px) rotateX("+r.x+"deg) rotateY("+r.y+"deg)",boxShadow:h?"0 8px 30px "+th.gl:"none",willChange:"transform"}},
    React.createElement("span",{style:{fontFamily:F.n,fontSize:"0.63rem",letterSpacing:"0.13em",textTransform:"uppercase",color:th.mt,fontWeight:500}},it.tg||it.cat||""),
    React.createElement("h3",{style:{fontFamily:F.s,fontSize:"1.25rem",fontWeight:400,fontStyle:"italic",marginTop:4,marginBottom:5}},it.n),
    React.createElement("p",{style:{fontFamily:F.n,fontSize:"0.72rem",color:th.mt,lineHeight:1.5,marginBottom:4}},it.d||it.sp||""),
    it.dt?React.createElement("p",{style:{fontFamily:F.m,fontSize:"0.56rem",color:th.mt,opacity:0.6,marginBottom:10}},it.dt):null,
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},
      React.createElement("span",{style:{fontFamily:F.n,fontSize:"1rem",fontWeight:700,color:th.ac}},"$"+it.p.toLocaleString()),
      props.onA?React.createElement("button",{onMouseEnter:function(){sn.h()},onClick:function(e){e.stopPropagation();sn.c();props.onA(it)},style:{fontFamily:F.n,padding:"6px 14px",fontSize:"0.56rem",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:600,border:"none",background:th.ac,color:"#fff",cursor:"pointer"}},"Add to Cart"):null
    )
  )}

function PR(props){var _h=useState(false);var h=_h[0],sh=_h[1];var th=props.th,sn=props.sn,it=props.item;
  return React.createElement("div",{onMouseEnter:function(){sh(true);sn.h()},onMouseLeave:function(){sh(false)},onClick:props.onI,
    style:{background:props.inst?th.sf:th.card,border:"1px solid "+(props.inst?th.ac:h?th.bh:th.bd),padding:"11px 14px",cursor:"pointer",transition:"all 0.3s "+E,transform:h?"translateX(4px)":"none"}},
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},
      React.createElement("div",null,React.createElement("div",{style:{display:"flex",gap:6,alignItems:"center"}},React.createElement("span",{style:{fontFamily:F.n,fontSize:"0.8rem",fontWeight:600}},it.n),props.inst?React.createElement("span",{style:{fontFamily:F.m,fontSize:"0.45rem",color:th.ac,fontWeight:700}},"INSTALLED"):null),React.createElement("div",{style:{fontFamily:F.n,fontSize:"0.66rem",color:th.mt}},it.sp),React.createElement("div",{style:{fontFamily:F.m,fontSize:"0.5rem",color:th.mt,opacity:0.5,marginTop:1}},it.dt||"")),
      React.createElement("div",{style:{textAlign:"right"}},React.createElement("div",{style:{fontFamily:F.n,fontSize:"0.88rem",fontWeight:700,color:th.ac}},"$"+it.p),React.createElement("div",{style:{fontFamily:F.m,fontSize:"0.45rem",color:th.mt}},tn(it.t)))
    )
  )}

function CSV(props){var sl=props.sl,ins=props.ins,fp=props.fp,ps=props.ps,th=props.th;var pw=fp==="forging"||fp==="complete",dn=fp==="complete";
  var els=CK.map(function(k,i){var s=CSL[k],it=sl[k],ii=ins===k,lt=(fp==="forging"?ps:fp==="complete"?99:-1)>i;var ch=[];
    ch.push(React.createElement("rect",{key:"b",x:s.x,y:s.y,width:s.w,height:s.h,rx:3,fill:it?(lt?th.ad:th.sf):th.se,stroke:ii?th.ac:it?(lt?th.ac:th.bh):th.cs,strokeWidth:ii?2:1,strokeDasharray:it?"none":"4 3",style:{transition:"all 0.4s "+E}}));
    if(lt&&it)ch.push(React.createElement("rect",{key:"g",x:s.x,y:s.y,width:s.w,height:s.h,rx:3,fill:"none",stroke:th.pl,strokeWidth:1.5,opacity:dn?0.8:0.4,style:{transition:"opacity 0.3s "+E,filter:dn?"drop-shadow(0 0 4px "+th.pl+")":"none"}}));
    if(!it&&!ii)ch.push(React.createElement("text",{key:"l",x:s.x+s.w/2,y:s.y+s.h/2,textAnchor:"middle",dominantBaseline:"middle",style:{fontFamily:F.m,fontSize:"7px",fill:th.mt}},CP[k].s));
    if(it&&!ii){ch.push(React.createElement("text",{key:"t",x:s.x+4,y:s.y+14,style:{fontFamily:F.m,fontSize:"6px",fill:th.ac,fontWeight:700}},CP[k].s));ch.push(React.createElement("text",{key:"n",x:s.x+4,y:s.y+26,style:{fontFamily:F.n,fontSize:"7px",fill:th.tx,fontWeight:600}},it.n))}
    if(ii)ch.push(React.createElement("text",{key:"i",x:s.x+s.w/2,y:s.y+s.h/2,textAnchor:"middle",dominantBaseline:"middle",style:{fontFamily:F.m,fontSize:"7px",fill:th.ac,fontWeight:700}},"INSTALLING..."));
    return React.createElement("g",{key:k},ch)});
  var sv=[React.createElement("rect",{key:"c",x:140,y:30,width:300,height:310,rx:6,fill:th.cb,stroke:th.cs,strokeWidth:2}),React.createElement("circle",{key:"led",cx:149,cy:80,r:3,fill:dn?th.pl:th.cs})].concat(els);
  if(pw)sv.push(React.createElement("g",{key:"pw",opacity:dn?0.6:0.25},React.createElement("line",{x1:250,y1:140,x2:250,y2:175,stroke:th.pl,strokeWidth:1}),React.createElement("line",{x1:250,y1:225,x2:220,y2:270,stroke:th.pl,strokeWidth:1})));
  if(dn){sv.push(React.createElement("rect",{key:"ov",x:140,y:30,width:300,height:310,rx:6,fill:th.pl,opacity:0.03}));sv.push(React.createElement("g",{key:"st"},React.createElement("circle",{cx:50,cy:185,r:35,fill:"none",stroke:th.ac,strokeWidth:1.5,opacity:0.8}),React.createElement("text",{x:50,y:179,textAnchor:"middle",style:{fontFamily:F.s,fontSize:"14px",fontStyle:"italic",fill:th.ac}},"PC"),React.createElement("text",{x:50,y:197,textAnchor:"middle",style:{fontFamily:F.s,fontSize:"11px",fontStyle:"italic",fill:th.ac}},"Forge")))}
  return React.createElement("svg",{viewBox:"0 0 460 350",style:{width:"100%",maxWidth:460}},sv)}

function HB(props){var _h=useState(false);var h=_h[0],sh=_h[1];var th=props.th,sn=props.sn;
  return React.createElement("button",{disabled:props.dis,onMouseEnter:function(){sh(true);sn.h()},onMouseLeave:function(){sh(false)},onClick:function(){if(!props.dis){sn.c();if(props.onClick)props.onClick()}},
    style:Object.assign({fontFamily:F.n,padding:"12px 28px",fontSize:"0.7rem",letterSpacing:"0.11em",textTransform:"uppercase",fontWeight:600,border:props.ac||props.pr?"none":"1px solid "+th.bh,background:props.ac?(h?"#d4623f":th.ac):props.pr?th.tx:"transparent",color:props.ac?"#fff":props.pr?th.bg:th.tx,cursor:props.dis?"default":"pointer",transition:"all 0.3s "+E,opacity:props.dis?0.3:1},props.st||{})},props.children)}

function NB(props){var _h=useState(false);var h=_h[0],sh=_h[1];
  return React.createElement("button",{onMouseEnter:function(){sh(true);props.sn.h()},onMouseLeave:function(){sh(false)},onClick:function(){props.sn.c();if(props.onClick)props.onClick()},
    style:{width:40,height:40,borderRadius:"50%",border:"1px solid "+(h?props.th.bh:props.th.bd),background:h?(props.dk?"rgba(237,232,224,0.04)":"rgba(26,24,23,0.03)"):"transparent",color:props.th.tx,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:F.n,fontSize:"0.75rem",fontWeight:500,transition:"all 0.3s "+E,transform:h?"scale(1.1)":"scale(1)",position:"relative",boxShadow:h?"0 0 0 4px "+props.th.gl:"none"}},
    props.children,props.badge>0?React.createElement("span",{style:{position:"absolute",top:-3,right:-3,width:16,height:16,borderRadius:"50%",background:props.th.ac,color:"#fff",fontSize:"0.5rem",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}},props.badge):null)}

function Cnt(props){var _v=useState(0);var v=_v[0],sv=_v[1];var _vis=useState(false);var vis=_vis[0],svis=_vis[1];var ref=useRef(null);
  useEffect(function(){var el=ref.current;if(!el)return;var ob=new IntersectionObserver(function(en){if(en[0].isIntersecting)svis(true)},{threshold:0.5});ob.observe(el);return function(){ob.disconnect()}},[]);
  useEffect(function(){if(!vis)return;var tgt=props.tgt;var dur=1200;var st=Date.now();var iv=setInterval(function(){var p=Math.min((Date.now()-st)/dur,1);sv(Math.floor(p*tgt));if(p>=1)clearInterval(iv)},30);return function(){clearInterval(iv)}},[vis,props.tgt]);
  return React.createElement("span",{ref:ref},props.pre||"",v,props.suf||"")}

/* ========== MAIN ========== */
export default function PCForge(){
  var _ent=useState(false),entered=_ent[0],sEnt=_ent[1];
  var _ir=useState(false),iR=_ir[0],sIR=_ir[1];
  var _ie=useState(false),iE=_ie[0],sIE=_ie[1];
  var _pi=useState(0),pI=_pi[0],sPI=_pi[1];
  var _sl=useState(false),sld=_sl[0],sSl=_sl[1];
  var _mo=useState(false),mO=_mo[0],sMO=_mo[1];
  var _so=useState(true),sO=_so[0],sSO=_so[1];
  var _dk=useState(false),dk=_dk[0],sDk=_dk[1];
  var _ct=useState([]),ct=_ct[0],sCt=_ct[1];
  var _co=useState(false),cO=_co[0],sCO=_co[1];
  var _md=useState(null),md=_md[0],sMd=_md[1];
  var _pf=useState("all"),pF=_pf[0],sPF=_pf[1];
  var _slt=useState({}),slt=_slt[0],sSlt=_slt[1];
  var _bc=useState("cpu"),bC=_bc[0],sBC=_bc[1];
  var _ins=useState(null),ins=_ins[0],sIns=_ins[1];
  var _fp=useState("building"),fp=_fp[0],sFP=_fp[1];
  var _ps=useState(0),pSq=_ps[0],sPS=_ps[1];
  var _bm=useState(null),bM=_bm[0],sBM=_bm[1];
  var _to=useState(null),tst=_to[0],sTo=_to[1];
  var _ms=useState({x:0,y:0}),ms=_ms[0],sMs=_ms[1];

  var th=dk?DK:LT,sn=sO?S:NS;
  useEffect(function(){setTimeout(function(){sIR(true)},1200)},[]);

  var pgs=["home","shop","parts","bundles","builder","about","contact","checkout"];
  var pLb=["Index","Pre-Built PCs","Components","Bundles","Forge Builder","About","Contact","Checkout"];
  var pNm=["01","02","03","04","05","06","07","08"];

  // Mixed transition types per page pair
  var tTypes=["slide","slideH","fade","slide","zoom","slideH","fade","slide"];

  var _tm=useState("slide"),tMode=_tm[0],sTM=_tm[1];
  var _prevI=useState(-1),prevI=_prevI[0],sPrevI=_prevI[1];
  var _trn=useState(false),trn=_trn[0],sTrn=_trn[1];

  function goTo(i,mode){
    if(i===pI||trn)return;
    sn.n();
    sTM(mode||"slide");
    sPrevI(pI);
    sTrn(true);
    sMO(false);
    sPI(i);
    setTimeout(function(){
      sTrn(false);
      sPrevI(-1);
    },800);
  }
  function goMenu(i){goTo(i,"fade")}
  function goDot(i){goTo(i,"slide")}
  function goP(n,mode){var i=pgs.indexOf(n);if(i>=0)goTo(i,mode||"slide")}
  function hEnt(a){sSO(a);sIE(true);if(a)S.f();setTimeout(function(){sEnt(true)},800)}

  function aTC(it){sn.s();sCt(function(p){var e=p.find(function(c){return c.id===it.id});if(e)return p.map(function(c){return c.id===it.id?Object.assign({},c,{qty:c.qty+1}):c});return p.concat([Object.assign({},it,{qty:1})])});sTo(it.n+" added");setTimeout(function(){sTo(null)},2500)}
  function rC(id){sn.r();sCt(function(p){return p.filter(function(c){return c.id!==id})})}
  var cTot=ct.reduce(function(s,c){return s+c.p*c.qty},0);
  var fTot=Object.values(slt).reduce(function(s,i){return s+(i?i.p:0)},0);
  var fld=Object.keys(slt).length;

  function iPt(ck,it){if(ins||fp!=="building")return;sn.i();sIns(ck);setTimeout(function(){sSlt(function(p){var n=Object.assign({},p);n[ck]=it;return n});sIns(null)},500)}
  function rF(){sn.n();sSlt({});sFP("building");sPS(0);sBM(null)}
  function aB(pr){sn.s();var ns={};CK.forEach(function(k){var pid=pr[k];if(pid){var fd=CP[k].it.find(function(i){return i.id===pid});if(fd)ns[k]=fd}});sSlt(ns);sBM("applied")}
  function stF(){if(fld<CK.length)return;sn.f();sFP("forging");var sq=0;var iv=setInterval(function(){sq++;sPS(sq);if(sq<=CK.length)sn.c();if(sq>CK.length+2){clearInterval(iv);sn.p();setTimeout(function(){sn.s();sFP("complete")},800)}},350)}

  var lb=function(t,ex){return React.createElement("span",{style:Object.assign({fontFamily:F.n,fontSize:"0.65rem",letterSpacing:"0.14em",textTransform:"uppercase",color:th.mt,fontWeight:500},ex||{})},t)};

  var fParts=pF==="all"?AP:AP.filter(function(p){return p.ck===pF});
  var cIt=CP[bC]?CP[bC].it:[];
  var warns=[];
  if(slt.cpu&&slt.gpu&&slt.psu){var tTDP=(slt.cpu.td||0)+(slt.gpu.td||0)+100;if(tTDP>slt.psu.w*0.85)warns.push("PSU may be underpowered: ~"+tTDP+"W draw on "+slt.psu.w+"W PSU")}
  if(slt.cpu&&slt.gpu&&slt.cpu.t<=2&&slt.gpu.t>=4)warns.push("CPU bottleneck: "+slt.cpu.n+" may limit "+slt.gpu.n);

  var perfD=null;
  if(slt.gpu){var gid=slt.gpu.id;perfD=FPS_DATA.map(function(g){return{n:g.g,r:g.r,f:g.f[gid]||0}})}

  function mkS(i,c){return React.createElement("div",{key:pgs[i],style:{height:"100vh",background:th.pg[i],overflowY:"auto",overflowX:"hidden",paddingTop:100,paddingBottom:80,transition:"background 0.5s "+E}},React.createElement("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 40px"}},c))}

  // ===== HOME with text mask effect =====
  function hmm(e){var x=(e.clientX/window.innerWidth-0.5)*2;var y=(e.clientY/window.innerHeight-0.5)*2;sMs({x:x,y:y})}
  var shadowX=ms.x*15,shadowY=ms.y*10;
  var secHome=React.createElement("div",{key:"home",onMouseMove:hmm,style:{height:"100vh",background:th.pg[0],position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"background 0.5s "+E,cursor:"default",overflow:"hidden"}},
    // Grain overlay
    React.createElement("div",{style:{position:"absolute",inset:0,opacity:0.03,backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",backgroundSize:"128px",pointerEvents:"none"}}),
    React.createElement("div",{style:{textAlign:"center",maxWidth:800,padding:"0 40px",position:"relative",zIndex:1}},
      React.createElement("span",{style:{fontFamily:F.n,fontSize:"0.72rem",letterSpacing:"0.18em",textTransform:"uppercase",color:th.mt,fontWeight:500,display:"block",marginBottom:28,transform:"translateX("+ms.x*-5+"px)",transition:"transform 0.3s ease-out"}},"Custom PCs, Components & Bundles"),
      // Main title with shadow trail effect
      React.createElement("div",{style:{position:"relative"}},
        // Shadow layers (move opposite to mouse)
        React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(3rem,9vw,7rem)",fontWeight:400,fontStyle:"italic",lineHeight:0.95,letterSpacing:"-0.02em",position:"absolute",inset:0,color:"transparent",WebkitTextStroke:"1px "+th.ac+"33",transform:"translate("+shadowX*0.6+"px,"+shadowY*0.4+"px)",transition:"transform 0.08s linear",pointerEvents:"none"}},"Forging the",React.createElement("br"),"extraordinary"),
        React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(3rem,9vw,7rem)",fontWeight:400,fontStyle:"italic",lineHeight:0.95,letterSpacing:"-0.02em",position:"absolute",inset:0,color:"transparent",WebkitTextStroke:"1px "+th.ac+"55",transform:"translate("+shadowX*0.35+"px,"+shadowY*0.25+"px)",transition:"transform 0.12s linear",pointerEvents:"none"}},"Forging the",React.createElement("br"),"extraordinary"),
        // Main text (moves slightly opposite)
        React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(3rem,9vw,7rem)",fontWeight:400,fontStyle:"italic",lineHeight:0.95,letterSpacing:"-0.02em",marginBottom:20,position:"relative",transform:"translate("+ms.x*-4+"px,"+ms.y*-3+"px)",transition:"transform 0.15s ease-out",textShadow:shadowX*0.1+"px "+shadowY*0.1+"px 20px "+th.ac+"22"}},"Forging the",React.createElement("br"),React.createElement("span",{style:{color:th.ac}},"extraordinary"))
      ),
      React.createElement(HB,{onClick:function(){goP("shop","zoom")},th:th,sn:sn,st:{marginTop:48,padding:"14px 36px",fontSize:"0.72rem",border:"1px solid "+th.bh,background:"transparent",color:th.tx}},"View our builds  \u2192")
    ),
    React.createElement("div",{style:{position:"absolute",bottom:32,left:40,right:40,display:"flex",justifyContent:"space-between",alignItems:"flex-end"}},
      React.createElement("div",{style:{display:"flex",gap:20}},["builder","parts","bundles"].map(function(pg,i){var nm=["Forge Builder","Components","Bundles"];return React.createElement("span",{key:pg,onClick:function(){sn.c();goP(pg,"slideH")},onMouseEnter:function(e){sn.h();e.currentTarget.style.color=th.ac},onMouseLeave:function(e){e.currentTarget.style.color=th.tx},style:{fontFamily:F.n,fontSize:"0.88rem",letterSpacing:"0.08em",textTransform:"uppercase",color:th.tx,cursor:"pointer",transition:"color 0.3s "+E,fontWeight:600,padding:"8px 0"}},nm[i])})),
      React.createElement("span",{style:{fontFamily:F.n,fontSize:"0.65rem",color:th.mt}},"\u00A92026 PC Forge")
    )
  );

  // ===== SHOP =====
  var secShop=mkS(1,[React.createElement(Reveal,{key:"l"},lb("02 \u2014 Pre-Built PCs")),React.createElement(Reveal,{key:"h",delay:0.1},React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(2.3rem,5.5vw,4.2rem)",fontWeight:400,fontStyle:"italic",marginTop:12,marginBottom:36}},"Pre-Built Systems")),React.createElement("div",{key:"g",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:16}},PRE.map(function(pc,i){return React.createElement(Reveal,{key:pc.id,delay:0.1+i*0.08,dir:"left"},React.createElement(TC,{item:{n:pc.n,tg:pc.tg,p:pc.p,d:pc.d,dt:pc.dt},onA:aTC,onV:sMd,th:th,sn:sn}))}))]);

  // ===== PARTS =====
  var fCats=[{k:"all",l:"All"}].concat(Object.entries(CP).map(function(e){return{k:e[0],l:e[1].l}}));
  var secParts=mkS(2,[React.createElement(Reveal,{key:"l"},lb("03 \u2014 Components")),React.createElement(Reveal,{key:"h",delay:0.1},React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(2.3rem,5.5vw,4.2rem)",fontWeight:400,fontStyle:"italic",marginTop:12,marginBottom:28}},"Individual Parts")),
    React.createElement(Reveal,{key:"f",delay:0.15},React.createElement("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:32}},fCats.map(function(c){var a=pF===c.k;return React.createElement("button",{key:c.k,onMouseEnter:function(){sn.h()},onClick:function(){sn.c();sPF(c.k)},style:{fontFamily:F.n,padding:"7px 18px",fontSize:"0.63rem",letterSpacing:"0.1em",textTransform:"uppercase",fontWeight:600,cursor:"pointer",border:"1px solid "+(a?th.tx:th.bd),background:a?th.tx:"transparent",color:a?th.bg:th.mt,transition:"all 0.25s "+E}},c.l)}))),
    React.createElement("div",{key:"g",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:14}},fParts.map(function(p,i){return React.createElement(Reveal,{key:p.id+p.ck,delay:0.05+i*0.04,dir:i%2===0?"left":"right"},React.createElement(TC,{item:{n:p.n,tg:p.cat,p:p.p,sp:p.sp,dt:p.dt},onA:aTC,onV:sMd,th:th,sn:sn}))}))]);

  // ===== BUNDLES =====
  var secBun=mkS(3,[React.createElement(Reveal,{key:"l"},lb("04 \u2014 Bundles")),React.createElement(Reveal,{key:"h",delay:0.1},React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(2.3rem,5.5vw,4.2rem)",fontWeight:400,fontStyle:"italic",marginTop:12,marginBottom:36}},"Curated Bundles")),React.createElement("div",{key:"g",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:16}},BUN.map(function(b,i){return React.createElement(Reveal,{key:b.id,delay:0.1+i*0.08},React.createElement(TC,{item:{n:b.n,tg:b.tg,p:b.p,d:b.d},onA:aTC,onV:sMd,th:th,sn:sn}))}))]);

  // ===== BUILDER =====
  var bContent=[];
  if(fp==="complete"){
    bContent.push(React.createElement("div",{key:"dn",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}},
      React.createElement("div",null,lb("Build Complete"),React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(2rem,4vw,3rem)",fontWeight:400,fontStyle:"italic",marginTop:10,marginBottom:24}},"Your Forge is ",React.createElement("span",{style:{color:th.ac}},"Ready")),
        React.createElement("div",{style:{background:th.card,border:"1px solid "+th.bd,padding:24}},CK.map(function(k){var it=slt[k];if(!it)return null;return React.createElement("div",{key:k,style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid "+th.bd}},React.createElement("div",null,lb(CP[k].l),React.createElement("div",{style:{fontFamily:F.n,fontSize:"0.83rem",fontWeight:600,marginTop:2}},it.n)),React.createElement("span",{style:{fontFamily:F.n,fontWeight:700,color:th.ac}},"$"+it.p))}),
          React.createElement("div",{style:{display:"flex",justifyContent:"space-between",paddingTop:16}},React.createElement("span",{style:{fontFamily:F.n,fontWeight:700}},"Total"),React.createElement("span",{style:{fontFamily:F.n,fontWeight:700,fontSize:"1.2rem",color:th.ac}},"$"+fTot.toLocaleString()))),
        React.createElement("div",{style:{display:"flex",gap:12,marginTop:20}},React.createElement(HB,{ac:true,onClick:function(){aTC({id:"forge-"+Date.now(),n:"Custom Forge Build",p:fTot})},th:th,sn:sn},"Add to Cart"),React.createElement(HB,{onClick:rF,th:th,sn:sn},"New Build"))),
      React.createElement("div",null,React.createElement(CSV,{sl:slt,ins:ins,fp:fp,ps:pSq,th:th}))))
  } else if(!bM){
    bContent.push(React.createElement(Reveal,{key:"l"},lb("05 \u2014 Forge Builder")));
    bContent.push(React.createElement(Reveal,{key:"h",delay:0.1},React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(2rem,4.5vw,3.5rem)",fontWeight:400,fontStyle:"italic",marginTop:10,marginBottom:8}},"Choose Your Path")));
    bContent.push(React.createElement(Reveal,{key:"p",delay:0.15},React.createElement("p",{style:{fontFamily:F.n,fontSize:"0.85rem",color:th.mt,marginBottom:28}},"Pick a tier to see estimated performance, or start from scratch.")));
    bContent.push(React.createElement("div",{key:"bg",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:14,marginBottom:28}},
      BDG.map(function(b,bi){var gk=b.pr.gpu;return React.createElement(Reveal,{key:b.id,delay:0.1+bi*0.08,dir:"left"},
        React.createElement("div",{onClick:function(){sn.c();aB(b.pr)},onMouseEnter:function(){sn.h()},style:{background:th.card,border:"1px solid "+th.bd,padding:22,cursor:"pointer",transition:"all 0.3s "+E}},
          React.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6}},lb(b.rn),React.createElement("span",{style:{fontFamily:F.m,fontSize:"0.5rem",color:th.ac,fontWeight:700}},tn(bi+1))),
          React.createElement("h3",{style:{fontFamily:F.s,fontSize:"1.4rem",fontWeight:400,fontStyle:"italic",marginBottom:4}},b.n),
          React.createElement("div",{style:{fontFamily:F.n,fontSize:"1rem",fontWeight:700,color:th.ac,marginBottom:14}},"~$"+b.p.toLocaleString()),
          lb("Est. FPS",{display:"block",marginBottom:8}),
          FPS_DATA.slice(0,3).map(function(f){var fps=f.f[gk]||0;var col=fps>=120?th.ac:fps>=60?"#6b9e3a":"#cc8833";return React.createElement("div",{key:f.g,style:{display:"flex",justifyContent:"space-between",marginBottom:4}},React.createElement("span",{style:{fontFamily:F.n,fontSize:"0.63rem",color:th.mt}},f.g),React.createElement("span",{style:{fontFamily:F.m,fontSize:"0.63rem",fontWeight:700,color:col}},fps+" FPS"))}))
      )})));
    bContent.push(React.createElement(Reveal,{key:"cs",delay:0.4},React.createElement("div",{style:{textAlign:"center",paddingTop:16}},React.createElement(HB,{onClick:function(){sn.c();sBM("custom")},th:th,sn:sn,st:{padding:"14px 36px"}},"Start from Scratch"))))
  } else {
    bContent.push(lb("05 \u2014 Forge Builder"));
    bContent.push(React.createElement("h1",{key:"h",style:{fontFamily:F.s,fontSize:"clamp(2rem,4.5vw,3.5rem)",fontWeight:400,fontStyle:"italic",marginTop:10,marginBottom:6}},"Forge Your PC"));
    bContent.push(React.createElement("div",{key:"tp",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}},React.createElement("p",{style:{fontFamily:F.n,fontSize:"0.8rem",color:th.mt}},"Select components and watch them install."),lb("$"+fTot.toLocaleString(),{color:th.ac,fontWeight:700})));
    bContent.push(React.createElement("div",{key:"pr",style:{height:2,background:th.bd,borderRadius:1,overflow:"hidden",marginBottom:12}},React.createElement("div",{style:{height:"100%",background:th.ac,width:(fld/CK.length*100)+"%",borderRadius:1,transition:"width 0.5s "+E}})));
    if(warns.length>0)bContent.push(React.createElement("div",{key:"w",style:{background:th.ad,border:"1px solid "+th.ac,padding:"8px 12px",marginBottom:16}},warns.map(function(w,i){return React.createElement("div",{key:i,style:{fontFamily:F.n,fontSize:"0.68rem",color:th.ac,fontWeight:600}},"\u26A0 "+w)})));
    var tabs=CK.map(function(k){var a=bC===k,has=!!slt[k];return React.createElement("button",{key:k,onMouseEnter:function(){sn.h()},onClick:function(){sn.c();sBC(k)},style:{fontFamily:F.m,padding:"5px 12px",fontSize:"0.56rem",letterSpacing:"0.08em",fontWeight:600,cursor:"pointer",border:"1px solid "+(a?th.ac:th.bd),background:a?th.ac:"transparent",color:a?"#fff":has?th.ac:th.mt,transition:"all 0.25s "+E,textTransform:"uppercase"}},CP[k].s+(has&&!a?" \u2713":""))});
    var pList=cIt.map(function(it){return React.createElement(PR,{key:it.id,item:it,inst:slt[bC]&&slt[bC].id===it.id,installing:ins,onI:function(){iPt(bC,it)},sn:sn,th:th})});
    var fBtn=fp==="forging"?React.createElement("div",{style:{textAlign:"center",padding:"16px 0"}},React.createElement("div",{style:{fontFamily:F.s,fontSize:"1.1rem",fontStyle:"italic",color:th.ac}},"Forging..."),React.createElement("div",{style:{fontFamily:F.n,fontSize:"0.7rem",color:th.mt}},"Power "+Math.min(pSq,CK.length)+"/"+CK.length)):React.createElement(HB,{ac:true,dis:fld<CK.length||ins!==null,onClick:stF,th:th,sn:sn,st:{width:"100%",padding:"14px",fontSize:"0.74rem"}},fld<CK.length?(CK.length-fld)+" more needed":"Forge This Build");
    bContent.push(React.createElement("div",{key:"mn",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,minHeight:400}},
      React.createElement("div",null,React.createElement("div",{style:{display:"flex",gap:5,flexWrap:"wrap",marginBottom:12}},tabs),lb(CP[bC].l,{marginBottom:6,display:"block"}),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6}},pList)),
      React.createElement("div",null,
        React.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8}},lb("Your Build \u2014 "+fld+"/"+CK.length),fld>0?React.createElement("button",{onClick:rF,onMouseEnter:function(){sn.h()},style:{fontFamily:F.n,fontSize:"0.58rem",color:th.mt,background:"none",border:"none",cursor:"pointer",textDecoration:"underline"}},"Reset"):null),
        React.createElement("div",{style:{background:th.bg2,border:"1px solid "+th.bd,padding:"14px 12px",marginBottom:12}},React.createElement(CSV,{sl:slt,ins:ins,fp:fp,ps:pSq,th:th})),
        fld>0?React.createElement("div",{style:{display:"grid",gridTemplateColumns:perfD?"1fr 1fr":"1fr",gap:10,marginBottom:12}},
          perfD?React.createElement("div",{style:{background:th.card,border:"1px solid "+th.bd,padding:"12px 14px"}},lb("Est. Performance"),React.createElement("div",{style:{marginTop:8}},perfD.map(function(g){var col=g.f>=120?th.ac:g.f>=60?"#6b9e3a":"#cc8833";return React.createElement("div",{key:g.n,style:{display:"flex",justifyContent:"space-between",marginBottom:6}},React.createElement("div",null,React.createElement("span",{style:{fontFamily:F.n,fontSize:"0.65rem",fontWeight:600}},g.n),React.createElement("span",{style:{fontFamily:F.m,fontSize:"0.48rem",color:th.mt,marginLeft:6}},g.r)),React.createElement("span",{style:{fontFamily:F.m,fontSize:"0.65rem",fontWeight:700,color:col}},g.f+" FPS"))}))):null,
          React.createElement("div",{style:{background:th.card,border:"1px solid "+th.bd,padding:"12px 14px"}},
            React.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8}},lb("Specs"),React.createElement("span",{style:{fontFamily:F.m,fontSize:"0.45rem",color:th.ac,fontWeight:700}},fld===CK.length?"COMPLETE":"...")),
            CK.map(function(k){var it=slt[k];return React.createElement("div",{key:k,style:{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:"1px solid "+th.bd,opacity:it?1:0.3}},React.createElement("div",{style:{display:"flex",gap:5,alignItems:"center"}},React.createElement("span",{style:{fontFamily:F.m,fontSize:"0.45rem",color:it?th.ac:th.mt,fontWeight:700,minWidth:26}},CP[k].s),React.createElement("span",{style:{fontFamily:F.n,fontSize:"0.65rem",fontWeight:it?600:400,color:it?th.tx:th.mt}},it?it.n:"\u2014")),it?React.createElement("span",{style:{fontFamily:F.n,fontSize:"0.65rem",fontWeight:700,color:th.ac}},"$"+it.p):null)}),
            React.createElement("div",{style:{display:"flex",justifyContent:"space-between",paddingTop:6,marginTop:4,borderTop:"1px solid "+th.bd}},React.createElement("span",{style:{fontFamily:F.n,fontWeight:700,fontSize:"0.7rem"}},"Total"),React.createElement("span",{style:{fontFamily:F.n,fontWeight:700,fontSize:"0.85rem",color:th.ac}},"$"+fTot.toLocaleString()))
          )
        ):null,
        fBtn
      )
    ))
  }
  var secBld=mkS(4,bContent);

  // ===== ABOUT =====
  var secAbt=mkS(5,[React.createElement(Reveal,{key:"l"},lb("06 \u2014 About")),React.createElement(Reveal,{key:"h",delay:0.1},React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(2.3rem,5.5vw,4.2rem)",fontWeight:400,fontStyle:"italic",marginTop:12,marginBottom:28}},"About ",React.createElement("span",{style:{color:th.ac}},"PC Forge"))),
    React.createElement(Reveal,{key:"t",delay:0.2,dir:"left"},React.createElement("div",{style:{maxWidth:580}},React.createElement("p",{style:{fontFamily:F.n,fontSize:"0.9rem",color:th.mt,lineHeight:1.8,marginBottom:20}},"PC Forge was born from a simple belief: everyone deserves a PC built right."),React.createElement("p",{style:{fontFamily:F.n,fontSize:"0.9rem",color:th.mt,lineHeight:1.8}},"Every system stress-tested, cable-managed, and tuned for peak performance."))),
    React.createElement(Reveal,{key:"s",delay:0.35},React.createElement("div",{style:{marginTop:70}},lb("By the Numbers"),React.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:36,marginTop:24}},[{n:500,sf:"+",l:"PCs Built"},{n:49,sf:"",l:"Avg Rating (4.9)"},{n:2,sf:" Year",l:"Warranty"},{n:24,sf:" Hour",l:"Stress Test"}].map(function(s,i){return React.createElement("div",{key:i},React.createElement("div",{style:{fontFamily:F.s,fontSize:"2rem",fontWeight:400,fontStyle:"italic",color:th.ac}},React.createElement(Cnt,{tgt:s.n,suf:s.sf})),React.createElement("div",{style:{fontFamily:F.n,fontSize:"0.76rem",color:th.mt,marginTop:5}},s.l))}))))]);

  // ===== CONTACT =====
  var inp={width:"100%",padding:13,background:th.card,border:"1px solid "+th.bd,color:th.tx,fontFamily:F.n,fontSize:"0.86rem",outline:"none",transition:"border-color 0.3s "+E,boxSizing:"border-box"};
  var secCon=mkS(6,[React.createElement(Reveal,{key:"l"},lb("07 \u2014 Contact")),React.createElement(Reveal,{key:"h",delay:0.1},React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(2.3rem,5.5vw,4.2rem)",fontWeight:400,fontStyle:"italic",marginTop:12,marginBottom:28}},"Get in ",React.createElement("span",{style:{color:th.ac}},"Touch"))),
    React.createElement(Reveal,{key:"f",delay:0.2,dir:"left"},React.createElement("div",{style:{maxWidth:460}},React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:20}},["Name","Email","Message"].map(function(f){return React.createElement("div",{key:f},lb(f),f==="Message"?React.createElement("textarea",{rows:5,style:Object.assign({},inp,{marginTop:7,resize:"vertical"}),onFocus:function(e){e.target.style.borderColor=th.ac},onBlur:function(e){e.target.style.borderColor=th.bd}}):React.createElement("input",{type:f==="Email"?"email":"text",style:Object.assign({},inp,{marginTop:7}),onFocus:function(e){e.target.style.borderColor=th.ac},onBlur:function(e){e.target.style.borderColor=th.bd}}))}),React.createElement(HB,{ac:true,onClick:function(){sn.s()},th:th,sn:sn},"Send Message"))))]);

  // ===== CHECKOUT =====
  var chk=[React.createElement(Reveal,{key:"l"},lb("08 \u2014 Checkout")),React.createElement(Reveal,{key:"h",delay:0.1},React.createElement("h1",{style:{fontFamily:F.s,fontSize:"clamp(2.3rem,5.5vw,4.2rem)",fontWeight:400,fontStyle:"italic",marginTop:12,marginBottom:28}},"Checkout"))];
  if(ct.length===0)chk.push(React.createElement("div",{key:"e",style:{textAlign:"center",padding:"50px 0"}},React.createElement("p",{style:{fontFamily:F.n,color:th.mt,marginBottom:20}},"Your cart is empty."),React.createElement(HB,{pr:true,onClick:function(){goP("shop","fade")},th:th,sn:sn},"Browse PCs")));
  else chk.push(React.createElement("div",{key:"i",style:{maxWidth:560}},ct.map(function(c){return React.createElement("div",{key:c.id,style:{display:"flex",justifyContent:"space-between",padding:"14px 0",borderBottom:"1px solid "+th.bd}},React.createElement("div",null,React.createElement("div",{style:{fontFamily:F.n,fontWeight:600,fontSize:"0.88rem"}},c.n),React.createElement("div",{style:{fontFamily:F.n,fontSize:"0.72rem",color:th.mt}},"Qty: "+c.qty)),React.createElement("div",{style:{display:"flex",alignItems:"center",gap:14}},React.createElement("span",{style:{fontFamily:F.n,fontWeight:700,color:th.ac}},"$"+(c.p*c.qty).toLocaleString()),React.createElement("button",{onClick:function(){rC(c.id)},style:{fontFamily:F.n,fontSize:"0.65rem",color:th.mt,background:"none",border:"none",cursor:"pointer"}},"Remove")))}),
    React.createElement("div",{style:{display:"flex",justifyContent:"space-between",paddingTop:22}},React.createElement("span",{style:{fontFamily:F.n,fontWeight:700}},"Total"),React.createElement("span",{style:{fontFamily:F.n,fontWeight:700,fontSize:"1.4rem",color:th.ac}},"$"+cTot.toLocaleString())),
    React.createElement("div",{style:{display:"flex",gap:12,marginTop:28}},React.createElement(HB,{ac:true,onClick:function(){sn.s()},th:th,sn:sn},"Pay with Stripe"),React.createElement(HB,{onClick:function(){sn.s()},th:th,sn:sn,st:{background:"#ffc439",color:"#111",border:"none",fontWeight:700}},"PayPal"))));
  var secChk=mkS(7,chk);

  var allS=[secHome,secShop,secParts,secBun,secBld,secAbt,secCon,secChk];

  // ===== RENDER =====
  return React.createElement("div",{style:{fontFamily:F.s,color:th.tx,height:"100vh",overflow:"hidden",position:"relative",transition:"color 0.5s "+E+", background 0.5s "+E,background:th.pg[0]}},
    // Fonts loaded via globals.css
    React.createElement("style",null,"*{box-sizing:border-box;margin:0;padding:0}::selection{background:"+th.ac+";color:#fff}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:"+th.bd+";border-radius:2px}"),

    // Unified page renderer
    React.createElement("div",{style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"}},
      allS.map(function(sec,i){
        var isCur=i===pI;
        var isPrv=i===prevI&&prevI>=0;
        var isTransitioning=prevI>=0;
        var goFwd=pI>(prevI>=0?prevI:pI);

        // For slide mode: show all pages in a stacked layout
        if(tMode==="slide"){
          var offset=(i-pI)*100;
          return React.createElement("div",{key:pgs[i]+"_w",style:{
            position:"absolute",top:0,left:0,width:"100%",height:"100vh",overflow:"auto",
            transform:"translateY("+offset+"vh)",
            transition:isTransitioning?"transform 0.7s "+E:"transform 0.0s",
            visibility:Math.abs(offset)<=100||isPrv?"visible":"hidden",
          }},sec);
        }

        // For fade/zoom/slideH: only show current + previous
        var show=isCur||isPrv;
        if(!show) return React.createElement("div",{key:pgs[i]+"_w",style:{position:"absolute",inset:0,visibility:"hidden",opacity:0}});

        var st={position:"absolute",inset:0,width:"100%",height:"100vh",overflow:"auto",visibility:"visible"};

        if(isCur){
          st.zIndex=2;
          st.opacity=1;
          if(tMode==="zoom"){
            st.transform="scale(1)";
            st.transition="opacity 0.6s "+E+", transform 0.6s "+E;
          } else if(tMode==="slideH"){
            st.transform="translateX(0)";
            st.transition="transform 0.65s "+E;
          } else {
            st.transform="none";
            st.transition="opacity 0.6s "+E;
          }
        } else {
          st.zIndex=1;
          if(tMode==="fade"){
            st.opacity=0;
            st.transform="none";
            st.transition="opacity 0.6s "+E;
          } else if(tMode==="zoom"){
            st.opacity=0;
            st.transform="scale(1.06)";
            st.transition="opacity 0.5s "+E+", transform 0.5s "+E;
          } else if(tMode==="slideH"){
            var hd=goFwd?-1:1;
            st.opacity=0;
            st.transform="translateX("+(hd*100)+"vw)";
            st.transition="transform 0.65s "+E+", opacity 0.45s "+E;
          }
        }
        return React.createElement("div",{key:pgs[i]+"_w",style:st},sec);
      })
    ),

    // Nav
    entered?React.createElement("div",{style:{position:"fixed",top:26,right:26,display:"flex",gap:12,zIndex:900}},
      React.createElement(NB,{onClick:function(){sDk(!dk)},th:th,sn:sn,dk:dk},dk?"Su":"Mo"),
      React.createElement(NB,{onClick:function(){sSO(!sO)},th:th,sn:sn,dk:dk},React.createElement("img",{src:"https://image2url.com/r2/default/images/1773391948037-dd4d1184-568d-4746-87fb-8612a33aeab0.png",alt:sO?"Sound on":"Sound off",style:{width:20,height:20,opacity:sO?1:0.4,filter:dk?"invert(1)":"none",transition:"opacity 0.3s "+E}})),
      React.createElement(NB,{onClick:function(){sCO(!cO)},badge:ct.length,th:th,sn:sn,dk:dk},React.createElement("img",{src:"https://image2url.com/r2/default/images/1773391973509-72dd86de-470e-4ca2-97d9-3cf17b9b84f5.png",alt:"Cart",style:{width:20,height:20,filter:dk?"invert(1)":"none"}})),
      React.createElement(NB,{onClick:function(){sMO(!mO)},th:th,sn:sn,dk:dk},mO?"X":"::")
    ):null,

    // Dots
    entered?React.createElement("div",{style:{position:"fixed",right:20,top:"50%",transform:"translateY(-50%)",zIndex:800,display:"flex",flexDirection:"column",gap:4}},pgs.map(function(_,i){return React.createElement("div",{key:i,onClick:function(){goDot(i)},onMouseEnter:function(){sn.h()},style:{width:36,height:36,borderRadius:"50%",background:"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s "+E}},React.createElement("div",{style:{width:i===pI?14:10,height:i===pI?14:10,borderRadius:"50%",background:i===pI?th.ac:th.mt,transition:"all 0.3s "+E,opacity:i===pI?1:0.45}}))})):null,

    // Toast
    tst?React.createElement("div",{style:{position:"fixed",bottom:32,left:"50%",transform:"translateX(-50%)",zIndex:999,background:th.gs,backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid "+th.bd,padding:"12px 28px",fontFamily:F.n,fontSize:"0.78rem",fontWeight:600,color:th.ac,boxShadow:"0 4px 24px "+th.gl}},tst):null,

    // Menu (glassmorphism)
    React.createElement("div",{style:{position:"fixed",inset:0,zIndex:950,background:th.ov,backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",opacity:mO?1:0,pointerEvents:mO?"auto":"none",transition:"opacity 0.4s "+E},onClick:function(){sMO(false)}},
      React.createElement("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:"100%",maxWidth:560,padding:"100px 56px 56px",display:"flex",flexDirection:"column",justifyContent:"space-between"},onClick:function(e){e.stopPropagation()}},
        React.createElement("div",null,pgs.slice(0,7).map(function(pg,i){return React.createElement("div",{key:pg,onClick:function(){goMenu(i)},onMouseEnter:function(e){sn.h();var el=e.currentTarget.querySelector("[data-ml]");if(el)el.style.color=th.ac},onMouseLeave:function(e){var el=e.currentTarget.querySelector("[data-ml]");if(el)el.style.color=th.tx},style:{display:"flex",alignItems:"baseline",gap:18,padding:"12px 0",cursor:"pointer",opacity:mO?1:0,transform:mO?"translateX(0)":"translateX(-35px)",transition:"all 0.45s "+E+" "+(i*0.04+0.08)+"s"}},React.createElement("span",{style:{fontFamily:F.n,fontSize:"0.7rem",color:th.mt,minWidth:22}},pNm[i]),React.createElement("span",{"data-ml":"1",style:{fontFamily:F.s,fontSize:"clamp(1.7rem,4vw,3rem)",fontWeight:400,fontStyle:"italic",lineHeight:1.1,transition:"color 0.3s "+E,color:th.tx}},pLb[i]))})),
        React.createElement("div",{style:{opacity:mO?1:0,transition:"opacity 0.4s "+E+" 0.45s"}},lb("Connect"),React.createElement("div",{style:{display:"flex",gap:22,marginTop:10}},["Twitter","Instagram","Discord"].map(function(s){return React.createElement("a",{key:s,href:"#",style:{fontFamily:F.n,fontSize:"0.68rem",letterSpacing:"0.11em",textTransform:"uppercase",color:th.mt,textDecoration:"none",transition:"color 0.3s "+E},onMouseEnter:function(e){sn.h();e.currentTarget.style.color=th.ac},onMouseLeave:function(e){e.currentTarget.style.color=th.mt}},s)})),React.createElement("div",{style:{fontFamily:F.n,fontSize:"0.68rem",color:th.mt,marginTop:18}},"contact@pcforge.com \u2014 Danville, CA"))
      )
    ),

    // Cart (glassmorphism)
    React.createElement("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:"min(380px,86vw)",background:th.gs,backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderLeft:"1px solid "+th.bd,zIndex:960,padding:"36px 26px",overflowY:"auto",transition:"transform 0.45s "+E,transform:cO?"translateX(0)":"translateX(100%)",display:"flex",flexDirection:"column"}},
      React.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:24}},React.createElement("h2",{style:{fontFamily:F.s,fontSize:"1.3rem",fontWeight:400,fontStyle:"italic"}},"Cart"),React.createElement(NB,{onClick:function(){sCO(false)},th:th,sn:sn,dk:dk},"X")),
      ct.length===0?React.createElement("p",{style:{fontFamily:F.n,color:th.mt}},"Empty."):React.createElement("div",{style:{flex:1}},ct.map(function(c){return React.createElement("div",{key:c.id,style:{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid "+th.bd}},React.createElement("div",null,React.createElement("div",{style:{fontFamily:F.n,fontWeight:600,fontSize:"0.82rem"}},c.n),React.createElement("div",{style:{fontFamily:F.n,fontSize:"0.7rem",color:th.mt}},"Qty: "+c.qty),React.createElement("button",{onClick:function(){rC(c.id)},style:{fontFamily:F.n,fontSize:"0.65rem",color:th.ac,background:"none",border:"none",cursor:"pointer",marginTop:3}},"Remove")),React.createElement("span",{style:{fontFamily:F.n,fontWeight:700,color:th.ac}},"$"+(c.p*c.qty).toLocaleString()))}),
        React.createElement("div",{style:{borderTop:"1px solid "+th.bd,paddingTop:18,marginTop:14}},React.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:18}},React.createElement("span",{style:{fontFamily:F.n,fontWeight:700}},"Total"),React.createElement("span",{style:{fontFamily:F.n,fontWeight:700,fontSize:"1.15rem",color:th.ac}},"$"+cTot.toLocaleString())),React.createElement(HB,{ac:true,onClick:function(){sCO(false);goP("checkout","zoom")},th:th,sn:sn,st:{width:"100%"}},"Checkout")))
    ),

    // Modal (glassmorphism)
    md?React.createElement("div",{style:{position:"fixed",inset:0,zIndex:970,background:"rgba(0,0,0,0.25)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:36},onClick:function(){sMd(null)}},
      React.createElement("div",{style:{background:th.gs,backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid "+th.bd,padding:44,maxWidth:500,width:"100%",position:"relative"},onClick:function(e){e.stopPropagation()}},
        React.createElement("button",{onClick:function(){sn.c();sMd(null)},style:{position:"absolute",top:14,right:14,width:30,height:30,borderRadius:"50%",border:"1px solid "+th.bd,background:"transparent",color:th.tx,cursor:"pointer",fontFamily:F.n,fontSize:"0.7rem",display:"flex",alignItems:"center",justifyContent:"center"}},"x"),
        lb(md.tg||md.cat||"Product"),
        React.createElement("h2",{style:{fontFamily:F.s,fontSize:"1.9rem",fontWeight:400,fontStyle:"italic",marginTop:8,marginBottom:12}},md.n),
        React.createElement("p",{style:{fontFamily:F.n,fontSize:"0.84rem",color:th.mt,lineHeight:1.7,marginBottom:8}},md.d||md.sp||""),
        md.dt?React.createElement("p",{style:{fontFamily:F.m,fontSize:"0.7rem",color:th.mt,opacity:0.7,marginBottom:20}},md.dt):null,
        React.createElement("div",{style:{fontFamily:F.n,fontSize:"1.5rem",fontWeight:700,color:th.ac,marginBottom:24}},"$"+md.p.toLocaleString()),
        React.createElement(HB,{ac:true,onClick:function(){aTC(md);sMd(null)},th:th,sn:sn},"Add to Cart")
      )
    ):null,

    // INTRO OVERLAY (same tree, no remount)
    React.createElement("div",{style:{position:"fixed",inset:0,zIndex:2000,fontFamily:F.s,background:th.pg[0],color:th.tx,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"opacity 0.9s "+E+", transform 0.9s "+E,opacity:iE?0:1,transform:iE?"scale(1.03)":"scale(1)",pointerEvents:entered?"none":"auto",visibility:entered?"hidden":"visible"}},
      // Grain on intro too
      React.createElement("div",{style:{position:"absolute",inset:0,opacity:0.03,backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",backgroundSize:"128px",pointerEvents:"none"}}),
      React.createElement("div",{style:{display:"flex",gap:"0.06em",fontSize:"clamp(2.6rem,8.5vw,6.5rem)",fontWeight:400,fontStyle:"italic",letterSpacing:"0.08em",marginBottom:"2.5rem",position:"relative",zIndex:1}},"PC FORGE".split("").map(function(l,i){return React.createElement("span",{key:i,style:{display:"inline-block",opacity:iR?1:0,transform:iR?"translateY(0)":"translateY(45px)",transition:"all 0.6s "+E+" "+i*0.055+"s",minWidth:l===" "?"0.3em":"auto"}},l)})),
      React.createElement("p",{style:{fontFamily:F.n,fontSize:"clamp(0.82rem,1.3vw,1rem)",color:th.mt,textAlign:"center",maxWidth:440,lineHeight:1.75,marginBottom:"2.8rem",opacity:iR?1:0,transform:iR?"translateY(0)":"translateY(22px)",transition:"all 0.65s "+E+" 0.45s",position:"relative",zIndex:1}},"Premium custom PCs, curated bundles, and hand-picked components."),
      React.createElement("div",{style:{display:"flex",gap:14,opacity:iR?1:0,transform:iR?"translateY(0)":"translateY(22px)",transition:"all 0.65s "+E+" 0.65s",position:"relative",zIndex:1}},
        React.createElement(HB,{pr:true,onClick:function(){hEnt(true)},th:th,sn:sn},"Enter"),
        React.createElement(HB,{onClick:function(){hEnt(false)},th:th,sn:sn},"Enter without audio"))
    )
  );
}
