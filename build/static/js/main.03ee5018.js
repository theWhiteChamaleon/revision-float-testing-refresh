(()=>{"use strict";var e={4854:(e,t,i)=>{i.d(t,{D:()=>a});const n=function(){const e={};let t="";const i=window.location.href,n=(()=>{let e=localStorage.getItem("_prefs_4_Widget_");if(e)try{e=JSON.parse(e)}catch(t){e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e))}else e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e));return e})(),r=()=>{localStorage.setItem("_prefs_4_Widget_",JSON.stringify(n))};this.uwaUrl="./",this.addEvent=(t,i)=>{e[t]=i,"onLoad"===t&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",i):i())},this.addPreference=e=>{e.value=e.defaultValue,n[e.name]=e,r()},this.getPreference=e=>n[e],this.getUrl=()=>i,this.getValue=e=>void 0===n[e]?void 0:n[e].value,this.setValue=(e,t)=>{n[e].value=t,r()},this.setIcon=e=>{},this.setTitle=e=>{t=e,document.title=t},this.dispatchEvent=function(){}},r=function(){this.log=e=>{}},o=function(){define("DS/TagNavigatorProxy/TagNavigatorProxy",[],(()=>new function(){this.createProxy=()=>({addEvent:(e,t)=>{},setSubjectsTags:e=>{}})})),define("DS/PlatformAPI/PlatformAPI",[],(()=>new function(){this.getUser=()=>({}),this.subscribe=(e,t)=>({topic:e,callback:t})}))};function a(e,t){console.log("[initWidget] Called.");const a=function(e,t,i){if(console.log("[initWidget] waitFor: Checking for ".concat(e,", maxTry remaining: ").concat(t)),"undefined"!==typeof window[e])console.log("[initWidget] ".concat(e," is defined.")),i();else{if(0===t)throw document.body.innerHTML="Error while trying to load widget. See console for details",console.error("[initWidget] ".concat(e," didn't load after maximum tries.")),new Error("".concat(e," didn't load"));setTimeout(a,200,e,--t,i)}},s=()=>{i.p=widget.uwaUrl.substring(0,widget.uwaUrl.lastIndexOf("/")+1)};if(window.widget)console.log("[initWidget] window.widget exists. Updating public path and calling cbOk."),s(),e(widget);else if(window.UWA){console.log("[initWidget] window.widget not found but UWA exists. Waiting for widget injection.");try{a("widget",10,(()=>{s(),console.log("[initWidget] Widget found after waiting. Calling cbOk."),e(widget)}))}catch(d){console.error(d),t(d)}}else console.log("[initWidget] window.widget not found and UWA is undefined. Creating new instances."),window.widget=new n,window.UWA=new r,(console.log("[initWidget] loadRequire called. Loading assets/lib/require.js"),new Promise(((e,t)=>{const i=new XMLHttpRequest;i.addEventListener("load",(t=>{console.log("[initWidget] require.js loaded successfully.");const i=document.createElement("script");i.innerHTML=t.target.response,document.head.appendChild(i),console.log("[initWidget] Script element appended to head."),e()}));try{i.open("GET","assets/lib/require.js"),i.send(),console.log("[initWidget] XMLHttpRequest sent for require.js")}catch(n){console.error("[initWidget] Error sending XMLHttpRequest for require.js",n),t(n)}}))).then((()=>{o()})),a("requirejs",10,(()=>{console.log("[initWidget] After waiting, calling cbOk with new widget."),e(window.widget)}))}}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}i.m=e,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>"static/js/"+e+"."+{4:"bcb3cfad",109:"2af930af",716:"80753de8",909:"7fe262ee"}[e]+".chunk.js",i.miniCssF=e=>"static/css/"+e+"."+{4:"ebbca892",109:"7302f8f8",909:"41eb549f"}[e]+".chunk.css",i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="react-widget-template:";i.l=(n,r,o,a)=>{if(e[n])e[n].push(r);else{var s,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var g=l[c];if(g.getAttribute("src")==n||g.getAttribute("data-webpack")==t+o){s=g;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[r];var u=(t,i)=>{s.onerror=s.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(i))),t)return t(i)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((t,n)=>{var r=i.miniCssF(e),o=i.p+r;if(((e,t)=>{for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var r=(a=i[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var a;if((r=(a=o[n]).getAttribute("data-href"))===e||r===t)return a}})(r,o))return t();((e,t,n,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",i.nc&&(a.nonce=i.nc),a.onerror=a.onload=i=>{if(a.onerror=a.onload=null,"load"===i.type)r();else{var n=i&&i.type,s=i&&i.target&&i.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+s+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=s,a.parentNode&&a.parentNode.removeChild(a),o(d)}},a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a)})(e,o,null,t,n)})),t={792:0};i.f.miniCss=(i,n)=>{t[i]?n.push(t[i]):0!==t[i]&&{4:1,109:1,909:1}[i]&&n.push(t[i]=e(i).then((()=>{t[i]=0}),(e=>{throw delete t[i],e})))}}})(),(()=>{var e={792:0};i.f.j=(t,n)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((i,n)=>r=e[t]=[i,n]));n.push(r[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(n=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,a=n[0],s=n[1],d=n[2],l=0;if(a.some((t=>0!==e[t]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(d)d(i)}for(t&&t(n);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=i(4854);console.log("[widget-starter] Initializing widget using initWidget.");const r="revisionFloat";console.log("[widget-starter] Loading entry file for: ".concat(r)),(0,n.D)((e=>{var t;console.log("[widget-starter] initWidget callback invoked. Widget:",e),null!==e&&void 0!==e&&null!==(t=e.metas)&&void 0!==t&&t.autoRefresh&&(console.log("[widget-starter] Disabling auto-refresh."),e.metas.autoRefresh=0),e.periodicals&&(e.periodicals.autoRefresh=0,console.log("[widget-starter] Disabled widget periodicals auto-refresh.")),console.log("[widget-starter] Checking dispatchers before modifying:",e._dispatchers),e._dispatchers&&e._dispatchers.onRefresh&&Array.isArray(e._dispatchers.onRefresh.bindings)&&e._dispatchers.onRefresh.bindings.length>0&&(console.log("[widget-starter] Removing existing onRefresh bindings..."),e._dispatchers.onRefresh.bindings.length=0),console.log("[widget-starter] Checking dispatchers after modifying:",e._dispatchers),Promise.all([i.e(109),i.e(716),i.e(909)]).then(i.bind(i,9020)).then((e=>{console.log("[widget-starter] Successfully imported index"),e.default()})).catch((t=>{console.error("[widget-starter] Error dynamically importing index",t),e.body.innerHTML="<div style='color: red;'>Error loading widget content.</div>"}))}),(e=>{console.error("[widget-starter] initWidget encountered an error:",e)}))})();
//# sourceMappingURL=main.03ee5018.js.map