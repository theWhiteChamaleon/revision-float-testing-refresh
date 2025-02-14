(()=>{"use strict";var e={4854:(e,t,i)=>{i.d(t,{D:()=>a});const n=function(){const e={};let t="";const i=window.location.href,n=(()=>{let e=localStorage.getItem("_prefs_4_Widget_");if(e)try{e=JSON.parse(e)}catch(t){e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e))}else e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e));return e})(),o=()=>{localStorage.setItem("_prefs_4_Widget_",JSON.stringify(n))};this.uwaUrl="./",this.addEvent=(t,i)=>{e[t]=i,"onLoad"===t&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",i):i())},this.addPreference=e=>{e.value=e.defaultValue,n[e.name]=e,o()},this.getPreference=e=>n[e],this.getUrl=()=>i,this.getValue=e=>void 0===n[e]?void 0:n[e].value,this.setValue=(e,t)=>{n[e].value=t,o()},this.setIcon=e=>{},this.setTitle=e=>{t=e,document.title=t},this.dispatchEvent=function(){}},o=function(){this.log=e=>{}},r=function(){define("DS/TagNavigatorProxy/TagNavigatorProxy",[],(()=>new function(){this.createProxy=()=>({addEvent:(e,t)=>{},setSubjectsTags:e=>{}})})),define("DS/PlatformAPI/PlatformAPI",[],(()=>new function(){this.getUser=()=>({}),this.subscribe=(e,t)=>({topic:e,callback:t})}))};function a(e,t){console.log("[initWidget] Called.");const a=function(e,t,i){if("undefined"!==typeof window[e])console.log("[initWidget] ".concat(e," is defined.")),i();else{if(0===t)throw document.body.innerHTML="Error while trying to load widget. See console for details",console.error("[initWidget] ".concat(e," didn't load after maximum tries.")),new Error("".concat(e," didn't load"));setTimeout(a,200,e,--t,i)}},d=()=>{i.p=widget.uwaUrl.substring(0,widget.uwaUrl.lastIndexOf("/")+1)};if(window.widget)console.log("[initWidget] window.widget exists. Updating public path and calling cbOk."),d(),e(widget);else if(window.UWA){console.log("[initWidget] window.widget not found but UWA exists. Waiting for widget injection.");try{a("widget",10,(()=>{d(),console.log("[initWidget] Widget found after waiting. Calling cbOk."),e(widget)}))}catch(s){console.error(s),t(s)}}else console.log("[initWidget] window.widget not found and UWA is undefined. Creating new instances."),window.widget=new n,window.UWA=new o,(console.log("[initWidget] loadRequire called. Loading assets/lib/require.js"),new Promise(((e,t)=>{const i=new XMLHttpRequest;i.addEventListener("load",(t=>{console.log("[initWidget] require.js loaded successfully.");const i=document.createElement("script");i.innerHTML=t.target.response,document.head.appendChild(i),console.log("[initWidget] Script element appended to head."),e()}));try{i.open("GET","assets/lib/require.js"),i.send(),console.log("[initWidget] XMLHttpRequest sent for require.js")}catch(n){console.error("[initWidget] Error sending XMLHttpRequest for require.js",n),t(n)}}))).then((()=>{r()})),a("requirejs",10,(()=>{console.log("[initWidget] After waiting, calling cbOk with new widget."),e(window.widget)}))}}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}i.m=e,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>"static/js/"+e+"."+{4:"bcb3cfad",109:"146d1b23",583:"213f2db0",909:"065e4570"}[e]+".chunk.js",i.miniCssF=e=>"static/css/"+e+"."+{4:"ebbca892",109:"7302f8f8",909:"41eb549f"}[e]+".chunk.css",i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="react-widget-template:";i.l=(n,o,r,a)=>{if(e[n])e[n].push(o);else{var d,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var g=l[c];if(g.getAttribute("src")==n||g.getAttribute("data-webpack")==t+r){d=g;break}}d||(s=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",t+r),d.src=n),e[n]=[o];var u=(t,i)=>{d.onerror=d.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(i))),t)return t(i)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),s&&document.head.appendChild(d)}}})(),i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((t,n)=>{var o=i.miniCssF(e),r=i.p+o;if(((e,t)=>{for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var o=(a=i[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){var a;if((o=(a=r[n]).getAttribute("data-href"))===e||o===t)return a}})(o,r))return t();((e,t,n,o,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",i.nc&&(a.nonce=i.nc),a.onerror=a.onload=i=>{if(a.onerror=a.onload=null,"load"===i.type)o();else{var n=i&&i.type,d=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+d+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=n,s.request=d,a.parentNode&&a.parentNode.removeChild(a),r(s)}},a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a)})(e,r,null,t,n)})),t={792:0};i.f.miniCss=(i,n)=>{t[i]?n.push(t[i]):0!==t[i]&&{4:1,109:1,909:1}[i]&&n.push(t[i]=e(i).then((()=>{t[i]=0}),(e=>{throw delete t[i],e})))}}})(),(()=>{var e={792:0};i.f.j=(t,n)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((i,n)=>o=e[t]=[i,n]));n.push(o[2]=r);var a=i.p+i.u(t),d=new Error;i.l(a,(n=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,o[1](d)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,r,a=n[0],d=n[1],s=n[2],l=0;if(a.some((t=>0!==e[t]))){for(o in d)i.o(d,o)&&(i.m[o]=d[o]);if(s)s(i)}for(t&&t(n);l<a.length;l++)r=a[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0},n=self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=i(4854);console.log("[widget-starter] Initializing widget using initWidget.");(0,n.D)((e=>{var t,n;console.log("[widget-starter] initWidget callback invoked. Widget:",e),console.log("[DEBUG] Widget Token Before:",null===(t=e.data)||void 0===t?void 0:t.token),console.log("[DEBUG] Widget ID Before:",e.id),setTimeout((()=>{var t;console.log("[DEBUG] Widget Token After 20 min:",null===(t=e.data)||void 0===t?void 0:t.token),console.log("[DEBUG] Widget ID After 20 min:",e.id)}),12e5),console.log("[widget-starter] Checking dispatchers before modifying:",e._dispatchers),null!==e&&void 0!==e&&null!==(n=e.metas)&&void 0!==n&&n.autoRefresh&&(console.log("[widget-starter] Disabling auto-refresh."),e.metas.autoRefresh=0),e.periodicals&&(e.periodicals.autoRefresh=0,console.log("[widget-starter] Disabled widget periodicals auto-refresh.")),e._dispatchers&&e._dispatchers.onRefresh&&Array.isArray(e._dispatchers.onRefresh.bindings)&&e._dispatchers.onRefresh.bindings.length>0&&(console.log("[widget-starter] Removing existing onRefresh bindings..."),e._dispatchers.onRefresh.bindings.length=0),console.log("[widget-starter] Checking dispatchers after modifying:",e._dispatchers),Promise.all([i.e(109),i.e(583),i.e(909)]).then(i.bind(i,9020)).then((e=>{e.default()})).catch((t=>{console.error("[widget-starter] Error dynamically importing index",t),e.body.innerHTML="<div style='color: red;'>Error loading widget content.</div>"}))}),(e=>{console.error("[widget-starter] initWidget encountered an error:",e)}))})();
//# sourceMappingURL=main.a77ec0a3.js.map