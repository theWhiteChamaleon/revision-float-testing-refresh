(()=>{"use strict";var e={4854:(e,t,r)=>{r.d(t,{D:()=>a});const n=function(){const e={};let t="";const r=window.location.href,n=(()=>{let e=localStorage.getItem("_prefs_4_Widget_");if(e)try{e=JSON.parse(e)}catch(t){e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e))}else e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e));return e})(),o=()=>{localStorage.setItem("_prefs_4_Widget_",JSON.stringify(n))};this.uwaUrl="./",this.addEvent=(t,r)=>{e[t]=r,"onLoad"===t&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",r):r())},this.addPreference=e=>{e.value=e.defaultValue,n[e.name]=e,o()},this.getPreference=e=>n[e],this.getUrl=()=>r,this.getValue=e=>void 0===n[e]?void 0:n[e].value,this.setValue=(e,t)=>{n[e].value=t,o()},this.setIcon=e=>{},this.setTitle=e=>{t=e,document.title=t},this.dispatchEvent=function(){}},o=function(){this.log=e=>{}},i=function(){define("DS/TagNavigatorProxy/TagNavigatorProxy",[],(()=>new function(){this.createProxy=()=>({addEvent:(e,t)=>{},setSubjectsTags:e=>{}})})),define("DS/PlatformAPI/PlatformAPI",[],(()=>new function(){this.getUser=()=>({}),this.subscribe=(e,t)=>({topic:e,callback:t})}))};function a(e,t){const a=function(e,t,r){if("undefined"!==typeof window[e])r();else{if(0===t)throw document.body.innerHTML="Error while trying to load widget. See console for details",console.error("[initWidget] ".concat(e," didn't load after maximum tries.")),new Error("".concat(e," didn't load"));setTimeout(a,200,e,--t,r)}},d=()=>{r.p=widget.uwaUrl.substring(0,widget.uwaUrl.lastIndexOf("/")+1)};if(window.widget)d(),e(widget);else if(window.UWA)try{a("widget",10,(()=>{d(),e(widget)}))}catch(s){console.error(s),t(s)}else window.widget=new n,window.UWA=new o,new Promise(((e,t)=>{const r=new XMLHttpRequest;r.addEventListener("load",(t=>{const r=document.createElement("script");r.innerHTML=t.target.response,document.head.appendChild(r),e()}));try{r.open("GET","assets/lib/require.js"),r.send()}catch(n){console.error("[initWidget] Error sending XMLHttpRequest for require.js",n),t(n)}})).then((()=>{i()})),a("requirejs",10,(()=>{e(window.widget)}))}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"static/js/"+e+"."+{4:"cf2a1395",17:"1dff0f3d",388:"4d952d1d",710:"09299e09",740:"ca976094",909:"8dbf633a",918:"88d4e4eb"}[e]+".chunk.js",r.miniCssF=e=>"static/css/"+e+"."+{4:"6d0330e2",388:"fdad335c",740:"3742bce8",909:"32db831d",918:"d81bcc91"}[e]+".chunk.css",r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="react-widget-template:";r.l=(n,o,i,a)=>{if(e[n])e[n].push(o);else{var d,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){d=u;break}}d||(s=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.setAttribute("data-webpack",t+i),d.src=n),e[n]=[o];var f=(t,r)=>{d.onerror=d.onload=null,clearTimeout(g);var o=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),s&&document.head.appendChild(d)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((t,n)=>{var o=r.miniCssF(e),i=r.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===t)return a}})(o,i))return t();((e,t,n,o,i)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",r.nc&&(a.nonce=r.nc),a.onerror=a.onload=r=>{if(a.onerror=a.onload=null,"load"===r.type)o();else{var n=r&&r.type,d=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+d+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=n,s.request=d,a.parentNode&&a.parentNode.removeChild(a),i(s)}},a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a)})(e,i,null,t,n)})),t={792:0};r.f.miniCss=(r,n)=>{t[r]?n.push(t[r]):0!==t[r]&&{4:1,388:1,740:1,909:1,918:1}[r]&&n.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}}})(),(()=>{var e={792:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=i);var a=r.p+r.u(t),d=new Error;r.l(a,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,o[1](d)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,i,a=n[0],d=n[1],s=n[2],l=0;if(a.some((t=>0!==e[t]))){for(o in d)r.o(d,o)&&(r.m[o]=d[o]);if(s)s(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var n=r(4854);(0,n.D)((e=>{console.log("[widget-starter] initWidget callback invoked. Widget:",e),Promise.all([r.e(918),r.e(740),r.e(17),r.e(909)]).then(r.bind(r,9020)).then((e=>{e.default()})).catch((t=>{console.error("[widget-starter] Error dynamically importing index",t),e.body.innerHTML="<div style='color: red;'>Error loading widget content.</div>"}))}),(e=>{console.error("[widget-starter] initWidget encountered an error:",e)}))})();
//# sourceMappingURL=main.6d3cc682.js.map