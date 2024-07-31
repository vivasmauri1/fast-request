var tt=Object.defineProperty;var et=(i,t,e)=>t in i?tt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var h=(i,t,e)=>(et(i,typeof t!="symbol"?t+"":t,e),e);import{i as k}from"./app-io1X_paZ.js";const it={LoadFail:0,BadSignature:1,BadTimestamp:2,BadSettingValue:3,BadFormat:4,UnknownSetting:5};class st extends Error{constructor(e){super(e.reason);h(this,"code");h(this,"line");this.code=e.code,this.line=e.line}}const V=/\r?\n|\r/gm;class rt{constructor(t){h(this,"writable");h(this,"readable");const e=new nt(t);this.writable=new WritableStream({write(s){e.transform(s)},close(){e.close()}}),this.readable=new ReadableStream({start(s){e.onLine=n=>s.enqueue(n),e.onClose=()=>s.close()}})}}class nt{constructor(t){h(this,"x","");h(this,"y");h(this,"onLine");h(this,"onClose");this.y=new TextDecoder(t)}transform(t){this.x+=this.y.decode(t,{stream:!0});const e=this.x.split(V);this.x=e.pop()||"";for(let s=0;s<e.length;s++)this.onLine(e[s].trim())}close(){this.x&&this.onLine(this.x.trim()),this.x="",this.onClose()}}async function at(i,t){const e=new ReadableStream({start(s){const n=i.split(V);for(const r of n)s.enqueue(r);s.close()}});return C(e,t)}async function C(i,t){const e=(t==null?void 0:t.type)??"vtt";let s;if(typeof e=="string")switch(e){case"srt":s=(await k(()=>import("./srt-parser-G4gvBoXY.js"),__vite__mapDeps([0,1]))).default;break;case"ssa":case"ass":s=(await k(()=>import("./ssa-parser-XP4pU0dS.js"),__vite__mapDeps([2,1]))).default;break;default:s=(await Promise.resolve().then(function(){return St})).default}else s=e;let n;const r=i.getReader(),o=s(),a=!!(t!=null&&t.strict)||!!(t!=null&&t.errors);await o.init({strict:!1,...t,errors:a,type:e,cancel(){r.cancel(),n=o.done(!0)}});let l=1;for(;;){const{value:c,done:f}=await r.read();if(f){o.parse("",l),n=o.done(!1);break}o.parse(c,l),l++}return n}async function ot(i,t){var o,a;const e=await i;if(!e.ok||!e.body)return{metadata:{},cues:[],regions:[],errors:[void 0]};const s=e.headers.get("content-type")||"",n=(o=s.match(/text\/(.*?)(?:;|$)/))==null?void 0:o[1],r=(a=s.match(/charset=(.*?)(?:;|$)/))==null?void 0:a[1];return G(e.body,{type:n,encoding:r,...t})}async function G(i,{encoding:t="utf-8",...e}={}){const s=i.pipeThrough(new rt(t));return C(s,e)}class H extends EventTarget{constructor(e,s,n){super();h(this,"id","");h(this,"startTime");h(this,"endTime");h(this,"text");h(this,"pauseOnExit",!1);this.startTime=e,this.endTime=s,this.text=n}addEventListener(e,s,n){super.addEventListener(e,s,n)}removeEventListener(e,s,n){super.removeEventListener(e,s,n)}}const I=typeof document>"u",lt=I?H:window.VTTCue;class D extends lt{constructor(){super(...arguments);h(this,"region",null);h(this,"vertical","");h(this,"snapToLines",!0);h(this,"line","auto");h(this,"lineAlign","start");h(this,"position","auto");h(this,"positionAlign","auto");h(this,"size",100);h(this,"align","center");h(this,"style")}}class F{constructor(){h(this,"id","");h(this,"width",100);h(this,"lines",3);h(this,"regionAnchorX",0);h(this,"regionAnchorY",100);h(this,"viewportAnchorX",0);h(this,"viewportAnchorY",100);h(this,"scroll","")}}const B=",",ht="%";function ct(i){const t=parseInt(i,10);return Number.isNaN(t)?null:t}function y(i){const t=parseInt(i.replace(ht,""),10);return!Number.isNaN(t)&&t>=0&&t<=100?t:null}function z(i){if(!i.includes(B))return null;const[t,e]=i.split(B).map(y);return t!==null&&e!==null?[t,e]:null}function ut(i){const t=parseFloat(i);return Number.isNaN(t)?null:t}const ft="WEBVTT",j=",",dt="%",b=/[:=]/,pt=/^[\s\t]*(region|vertical|line|position|size|align)[:=]/,mt="NOTE",gt="REGION",Tt=/^REGION:?[\s\t]+/,v=/[\s\t]+/,bt="-->",wt=/[\s\t]*-->[\s\t]+/,vt=/start|center|end|left|right/,yt=/start|center|end/,At=/line-(?:left|right)|center|auto/,Et=/^(?:(\d{1,2}):)?(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;var W=(i=>(i[i.None=0]="None",i[i.Header=1]="Header",i[i.Cue=2]="Cue",i[i.Region=3]="Region",i[i.Note=4]="Note",i))(W||{});class X{constructor(){h(this,"f");h(this,"c",0);h(this,"g",{});h(this,"h",{});h(this,"j",[]);h(this,"a",null);h(this,"b",null);h(this,"k",[]);h(this,"d");h(this,"l","")}async init(t){this.f=t,t.strict&&(this.c=1),t.errors&&(this.d=(await k(()=>import("./errors-3wXpPl2N.js"),__vite__mapDeps([3,1]))).ParseErrorBuilder)}parse(t,e){var s,n,r,o,a,l;if(t==="")this.a?(this.j.push(this.a),(n=(s=this.f).onCue)==null||n.call(s,this.a),this.a=null):this.b?(this.h[this.b.id]=this.b,(o=(r=this.f).onRegion)==null||o.call(r,this.b),this.b=null):this.c===1&&(this.i(t,e),(l=(a=this.f).onHeaderMetadata)==null||l.call(a,this.g)),this.c=0;else if(this.c)switch(this.c){case 1:this.i(t,e);break;case 2:if(this.a){const c=this.a.text.length>0;!c&&pt.test(t)?this.m(t.split(v),e):this.a.text+=(c?`
`:"")+t}break;case 3:this.n(t.split(v),e);break}else if(t.startsWith(mt))this.c=4;else if(t.startsWith(gt))this.c=3,this.b=new F,this.n(t.replace(Tt,"").split(v),e);else if(t.includes(bt)){const c=this.o(t,e);c&&(this.a=new D(c[0],c[1],""),this.a.id=this.l,this.m(c[2],e)),this.c=2}else e===1&&this.i(t,e);this.l=t}done(){return{metadata:this.g,cues:this.j,regions:Object.values(this.h),errors:this.k}}i(t,e){var s;if(e>1){if(b.test(t)){const[n,r]=t.split(b);n&&(this.g[n]=(r||"").replace(v,""))}}else t.startsWith(ft)?this.c=1:this.e((s=this.d)==null?void 0:s.p())}o(t,e){var c,f,u;const[s,n=""]=t.split(wt),[r,...o]=n.split(v),a=E(s),l=E(r);if(a!==null&&l!==null&&l>a)return[a,l,o];a===null&&this.e((c=this.d)==null?void 0:c.q(s,e)),l===null&&this.e((f=this.d)==null?void 0:f.r(r,e)),a!=null&&l!==null&&l>a&&this.e((u=this.d)==null?void 0:u.s(a,l,e))}n(t,e){var n,r;let s;for(let o=0;o<t.length;o++)if(b.test(t[o])){s=!1;const[a,l]=t[o].split(b);switch(a){case"id":this.b.id=l;break;case"width":const c=y(l);c!==null?this.b.width=c:s=!0;break;case"lines":const f=ct(l);f!==null?this.b.lines=f:s=!0;break;case"regionanchor":const u=z(l);u!==null?(this.b.regionAnchorX=u[0],this.b.regionAnchorY=u[1]):s=!0;break;case"viewportanchor":const d=z(l);d!==null?(this.b.viewportAnchorX=d[0],this.b.viewportAnchorY=d[1]):s=!0;break;case"scroll":l==="up"?this.b.scroll="up":s=!0;break;default:this.e((n=this.d)==null?void 0:n.t(a,l,e))}s&&this.e((r=this.d)==null?void 0:r.u(a,l,e))}}m(t,e){var n,r;let s;for(let o=0;o<t.length;o++)if(s=!1,b.test(t[o])){const[a,l]=t[o].split(b);switch(a){case"region":const c=this.h[l];c&&(this.a.region=c);break;case"vertical":l==="lr"||l==="rl"?(this.a.vertical=l,this.a.region=null):s=!0;break;case"line":const[f,u]=l.split(j);if(f.includes(dt)){const w=y(f);w!==null?(this.a.line=w,this.a.snapToLines=!1):s=!0}else{const w=ut(f);w!==null?this.a.line=w:s=!0}yt.test(u)?this.a.lineAlign=u:u&&(s=!0),this.a.line!=="auto"&&(this.a.region=null);break;case"position":const[d,m]=l.split(j),O=y(d);O!==null?this.a.position=O:s=!0,m&&At.test(m)?this.a.positionAlign=m:m&&(s=!0);break;case"size":const N=y(l);N!==null?(this.a.size=N,N<100&&(this.a.region=null)):s=!0;break;case"align":vt.test(l)?this.a.align=l:s=!0;break;default:this.e((n=this.d)==null?void 0:n.v(a,l,e))}s&&this.e((r=this.d)==null?void 0:r.w(a,l,e))}}e(t){var e,s;if(t){if(this.k.push(t),this.f.strict)throw this.f.cancel(),t;(s=(e=this.f).onError)==null||s.call(e,t)}}}function E(i){const t=i.match(Et);if(!t)return null;const e=t[1]?parseInt(t[1],10):0,s=parseInt(t[2],10),n=parseInt(t[3],10),r=t[4]?parseInt(t[4].padEnd(3,"0"),10):0,o=e*3600+s*60+n+r/1e3;return e<0||s<0||n<0||r<0||s>59||n>59?null:o}function _t(){return new X}var St=Object.freeze({__proto__:null,VTTBlock:W,VTTParser:X,default:_t,parseVTTTimestamp:E});const Nt=/[0-9]/,Rt=/[\s\t]+/,q={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span",timestamp:"span"},kt={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&nbsp;":" ","&lrm;":"‎","&rlm;":"‏"},Ct=/&(?:amp|lt|gt|quot|#(0+)?39|nbsp|lrm|rlm);/g,It=new Set(["white","lime","cyan","red","yellow","magenta","blue","black"]),Lt=new Set(Object.keys(q));function Y(i){var c,f;let t="",e=1,s=[],n=[],r;for(let u=0;u<i.text.length;u++){const d=i.text[u];switch(e){case 1:d==="<"?(l(),e=2):t+=d;break;case 2:switch(d){case`
`:case"	":case" ":o(),e=4;break;case".":o(),e=3;break;case"/":e=5;break;case">":o(),e=1;break;default:!t&&Nt.test(d)&&(e=6),t+=d;break}break;case 3:switch(d){case"	":case" ":case`
`:a(),r&&((c=r.class)==null||c.trim()),e=4;break;case".":a();break;case">":a(),r&&((f=r.class)==null||f.trim()),e=1;break;default:t+=d}break;case 4:d===">"?(t=t.replace(Rt," "),(r==null?void 0:r.type)==="v"?r.voice=R(t):(r==null?void 0:r.type)==="lang"&&(r.lang=R(t)),t="",e=1):t+=d;break;case 5:d===">"&&(t="",r=n.pop(),e=1);break;case 6:if(d===">"){const m=E(t);m!==null&&m>=i.startTime&&m<=i.endTime&&(t="timestamp",o(),r.time=m),t="",e=1}else t+=d;break}}function o(){if(Lt.has(t)){const u=r;r=xt(t),u?(n[n.length-1]!==u&&n.push(u),u.children.push(r)):s.push(r)}t="",e=1}function a(){if(r&&t){const u=t.replace("bg_","");It.has(u)?r[t.startsWith("bg_")?"bgColor":"color"]=u:r.class=r.class?r.class+" "+t:t}t=""}function l(){if(!t)return;const u={type:"text",data:R(t)};r?r.children.push(u):s.push(u),t=""}return e===1&&l(),s}function xt(i){return{tagName:q[i],type:i,children:[]}}function R(i){return i.replace(Ct,t=>kt[t]||"'")}function p(i,t,e){i.style.setProperty(`--${t}`,e+"")}function g(i,t,e=!0){i.setAttribute(`data-${t}`,e===!0?"":e+"")}function _(i,t){i.setAttribute("data-part",t)}function Pt(i){return parseFloat(getComputedStyle(i).lineHeight)||0}function Mt(i){if(I)throw Error("[media-captions] called `createVTTCueTemplate` on the server - use `renderVTTCueString`");const t=document.createElement("template");return t.innerHTML=L(i),{cue:i,content:t.content}}function L(i,t=0){return x(Y(i),t)}function x(i,t=0){let e,s="";for(const n of i)if(n.type==="text")s+=n.data;else{const r=n.type==="timestamp";e={},e.class=n.class,e.title=n.type==="v"&&n.voice,e.lang=n.type==="lang"&&n.lang,e["data-part"]=n.type==="v"&&"voice",r&&(e["data-part"]="timed",e["data-time"]=n.time,e["data-future"]=n.time>t,e["data-past"]=n.time<t),e.style=`${n.color?`color: ${n.color};`:""}${n.bgColor?`background-color: ${n.bgColor};`:""}`;const o=Object.entries(e).filter(a=>a[1]).map(a=>`${a[0]}="${a[1]===!0?"":a[1]}"`).join(" ");s+=`<${n.tagName}${o?" "+o:""}>${x(n.children)}</${n.tagName}>`}return s}function K(i,t){if(!I)for(const e of i.querySelectorAll('[data-part="timed"]')){const s=Number(e.getAttribute("data-time"));Number.isNaN(s)||(s>t?g(e,"future"):e.removeAttribute("data-future"),s<t?g(e,"past"):e.removeAttribute("data-past"))}}function Ot(i,t){let e=null,s;function n(){r(),i(...s),s=void 0}function r(){clearTimeout(e),e=null}function o(){s=[].slice.call(arguments),r(),e=setTimeout(n,t)}return o}const T=Symbol(0);function P(i){return i instanceof HTMLElement?{top:i.offsetTop,width:i.clientWidth,height:i.clientHeight,left:i.offsetLeft,right:i.offsetLeft+i.clientWidth,bottom:i.offsetTop+i.clientHeight}:{...i}}function S(i,t,e){switch(t){case"+x":i.left+=e,i.right+=e;break;case"-x":i.left-=e,i.right-=e;break;case"+y":i.top+=e,i.bottom+=e;break;case"-y":i.top-=e,i.bottom-=e;break}}function Bt(i,t){return i.left<=t.right&&i.right>=t.left&&i.top<=t.bottom&&i.bottom>=t.top}function zt(i,t){for(let e=0;e<t.length;e++)if(Bt(i,t[e]))return t[e];return null}function $(i,t){return t.top>=0&&t.bottom<=i.height&&t.left>=0&&t.right<=i.width}function jt(i,t,e){switch(e){case"+x":return t.left<0;case"-x":return t.right>i.width;case"+y":return t.top<0;case"-y":return t.bottom>i.height}}function $t(i,t){const e=Math.max(0,Math.min(i.width,t.right)-Math.max(0,t.left)),s=Math.max(0,Math.min(i.height,t.bottom)-Math.max(0,t.top));return e*s/(i.height*i.width)}function M(i,t){return{top:t.top/i.height,left:t.left/i.width,right:(i.width-t.right)/i.width,bottom:(i.height-t.bottom)/i.height}}function J(i,t){return t.top=t.top*i.height,t.left=t.left*i.width,t.right=i.width-t.right*i.width,t.bottom=i.height-t.bottom*i.height,t}const Q=["top","left","right","bottom"];function Z(i,t,e,s){const n=M(t,e);for(const r of Q)p(i,`${s}-${r}`,n[r]*100+"%")}function U(i,t,e,s){let n=1,r,o={...t};for(let a=0;a<s.length;a++){for(;jt(i,t,s[a])||$(i,t)&&zt(t,e);)S(t,s[a],1);if($(i,t))return t;const l=$t(i,t);n>l&&(r={...t},n=l),t={...o}}return r||o}const A=Symbol(0);function Vt(i,t,e,s){let n=e.firstElementChild,r=Dt(t),o,a=[];if(e[T]||(e[T]=Gt(i,e)),o=J(i,{...e[T]}),e[A])a=[e[A]==="top"?"+y":"-y","+x","-x"];else if(t.snapToLines){let l;switch(t.vertical){case"":a=["+y","-y"],l="height";break;case"rl":a=["+x","-x"],l="width";break;case"lr":a=["-x","+x"],l="width";break}let c=Pt(n),f=c*Math.round(r),u=i[l]+c,d=a[0];Math.abs(f)>u&&(f=f<0?-1:1,f*=Math.ceil(u/c)*c),r<0&&(f+=t.vertical===""?i.height:i.width,a=a.reverse()),S(o,d,f)}else{const l=t.vertical==="",c=l?"+y":"+x",f=l?o.height:o.width;S(o,c,(l?i.height:i.width)*r/100),S(o,c,t.lineAlign==="center"?f/2:t.lineAlign==="end"?f:0),a=l?["-y","+y","-x","+x"]:["-x","+x","-y","+y"]}return o=U(i,o,s,a),Z(e,i,o,"cue"),o}function Gt(i,t){const e=P(t),s=Ht(t);if(t[A]=!1,s.top&&(e.top=s.top,e.bottom=s.top+e.height,t[A]="top"),s.bottom){const n=i.height-s.bottom;e.top=n-e.height,e.bottom=n,t[A]="bottom"}return s.left&&(e.left=s.left),s.right&&(e.right=i.width-s.right),M(i,e)}function Ht(i){const t={};for(const e of Q)t[e]=parseFloat(i.style.getPropertyValue(`--cue-${e}`));return t}function Dt(i){return i.line==="auto"?i.snapToLines?-1:100:i.line}function Ft(i){if(i.position==="auto")switch(i.align){case"start":case"left":return 0;case"right":case"end":return 100;default:return 50}return i.position}function Wt(i,t){if(i.positionAlign==="auto")switch(i.align){case"start":return t==="ltr"?"line-left":"line-right";case"end":return t==="ltr"?"line-right":"line-left";case"center":return"center";default:return`line-${i.align}`}return i.positionAlign}const Xt=["-y","+y","-x","+x"];function qt(i,t,e,s){let n=Array.from(e.querySelectorAll('[data-part="cue-display"]')),r=0,o=Math.max(0,n.length-t.lines);for(let l=n.length-1;l>=o;l--)r+=n[l].offsetHeight;p(e,"region-height",r+"px"),e[T]||(e[T]=M(i,P(e)));let a={...e[T]};return a=J(i,a),a.width=e.clientWidth,a.height=r,a.right=a.left+a.width,a.bottom=a.top+r,a=U(i,a,s,Xt),Z(e,i,a,"region"),a}class Yt{constructor(t,e){h(this,"overlay");h(this,"z");h(this,"A",0);h(this,"C","ltr");h(this,"B",[]);h(this,"D",!1);h(this,"E");h(this,"h",new Map);h(this,"j",new Map);h(this,"K",Ot(()=>{this.D=!1,this.G();for(const t of this.h.values())t[T]=null;for(const t of this.j.values())t&&(t[T]=null);this.H(!0)},50));this.overlay=t,this.dir=(e==null?void 0:e.dir)??"ltr",t.setAttribute("translate","yes"),t.setAttribute("aria-live","off"),t.setAttribute("aria-atomic","true"),_(t,"captions"),this.G(),this.E=new ResizeObserver(this.I.bind(this)),this.E.observe(t)}get dir(){return this.C}set dir(t){this.C=t,g(this.overlay,"dir",t)}get currentTime(){return this.A}set currentTime(t){this.A=t,this.update()}changeTrack({regions:t,cues:e}){this.reset(),this.J(t);for(const s of e)this.j.set(s,null);this.update()}addCue(t){this.j.set(t,null),this.update()}removeCue(t){this.j.delete(t),this.update()}update(t=!1){this.H(t)}reset(){this.j.clear(),this.h.clear(),this.B=[],this.overlay.textContent=""}destroy(){this.reset(),this.E.disconnect()}I(){this.D=!0,this.K()}G(){this.z=P(this.overlay),p(this.overlay,"overlay-width",this.z.width+"px"),p(this.overlay,"overlay-height",this.z.height+"px")}H(t=!1){if(!this.j.size||this.D)return;let e,s=[...this.j.keys()].filter(r=>this.A>=r.startTime&&this.A<=r.endTime).sort((r,o)=>r.startTime!==o.startTime?r.startTime-o.startTime:r.endTime-o.endTime),n=s.map(r=>r.region);for(let r=0;r<this.B.length;r++){if(e=this.B[r],s[r]===e)continue;if(e.region&&!n.includes(e.region)){const a=this.h.get(e.region.id);a&&(a.removeAttribute("data-active"),t=!0)}const o=this.j.get(e);o&&(o.remove(),t=!0)}for(let r=0;r<s.length;r++){e=s[r];let o=this.j.get(e);o||this.j.set(e,o=this.L(e));const a=this.F(e)&&this.h.get(e.region.id);a&&!a.hasAttribute("data-active")&&(requestAnimationFrame(()=>g(a,"active")),t=!0),o.isConnected||((a||this.overlay).append(o),t=!0)}if(t){const r=[],o=new Set;for(let a=s.length-1;a>=0;a--){if(e=s[a],o.has(e.region||e))continue;const l=this.F(e),c=l?this.h.get(e.region.id):this.j.get(e);l?r.push(qt(this.z,e.region,c,r)):r.push(Vt(this.z,e,c,r)),o.add(l?e.region:e)}}K(this.overlay,this.A),this.B=s}J(t){if(t)for(const e of t){const s=this.M(e);this.h.set(e.id,s),this.overlay.append(s)}}M(t){const e=document.createElement("div");return _(e,"region"),g(e,"id",t.id),g(e,"scroll",t.scroll),p(e,"region-width",t.width+"%"),p(e,"region-anchor-x",t.regionAnchorX),p(e,"region-anchor-y",t.regionAnchorY),p(e,"region-viewport-anchor-x",t.viewportAnchorX),p(e,"region-viewport-anchor-y",t.viewportAnchorY),p(e,"region-lines",t.lines),e}L(t){var o;const e=document.createElement("div"),s=Ft(t),n=Wt(t,this.C);if(_(e,"cue-display"),t.vertical!==""&&g(e,"vertical"),p(e,"cue-text-align",t.align),t.style)for(const a of Object.keys(t.style))e.style.setProperty(a,t.style[a]);if(this.F(t))p(e,"cue-offset",`${s-(n==="line-right"?100:n==="center"?50:0)}%`);else if(p(e,"cue-writing-mode",t.vertical===""?"horizontal-tb":t.vertical==="lr"?"vertical-lr":"vertical-rl"),!((o=t.style)!=null&&o["--cue-width"])){let a=s;n==="line-left"?a=100-s:n==="center"&&s<=50?a=s*2:n==="center"&&s>50&&(a=(100-s)*2);const l=t.size<a?t.size:a;t.vertical===""?p(e,"cue-width",l+"%"):p(e,"cue-height",l+"%")}const r=document.createElement("div");return _(r,"cue"),t.id&&g(r,"id",t.id),r.innerHTML=L(t),e.append(r),e}F(t){return t.region&&t.size===100&&t.vertical===""&&t.line==="auto"}}const Qt=Object.freeze(Object.defineProperty({__proto__:null,CaptionsRenderer:Yt,ParseError:st,ParseErrorCode:it,TextCue:H,VTTCue:D,VTTRegion:F,createVTTCueTemplate:Mt,parseByteStream:G,parseResponse:ot,parseText:at,parseTextStream:C,parseVTTTimestamp:E,renderVTTCueString:L,renderVTTTokensString:x,tokenizeVTTCue:Y,updateTimedVTTCueNodes:K},Symbol.toStringTag,{value:"Module"}));export{st as P,X as V,W as a,D as b,it as c,Qt as d,E as p};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/srt-parser-G4gvBoXY.js","assets/app-io1X_paZ.js","assets/ssa-parser-XP4pU0dS.js","assets/errors-3wXpPl2N.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
