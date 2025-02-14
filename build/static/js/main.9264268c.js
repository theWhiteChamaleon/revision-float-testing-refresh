(()=>{"use strict";var e={4854:(e,t,o)=>{o.d(t,{D:()=>s});const i=function(){const e={};let t="";const o=window.location.href,i=(()=>{let e=localStorage.getItem("_prefs_4_Widget_");if(e)try{e=JSON.parse(e)}catch(t){e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e))}else e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e));return e})(),n=()=>{localStorage.setItem("_prefs_4_Widget_",JSON.stringify(i))};this.uwaUrl="./",this.addEvent=(t,o)=>{e[t]=o,"onLoad"===t&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o())},this.addPreference=e=>{e.value=e.defaultValue,i[e.name]=e,n()},this.getPreference=e=>i[e],this.getUrl=()=>o,this.getValue=e=>void 0===i[e]?void 0:i[e].value,this.setValue=(e,t)=>{i[e].value=t,n()},this.setIcon=e=>{},this.setTitle=e=>{t=e,document.title=t},this.dispatchEvent=function(){}},n=function(){this.log=e=>{}},r=function(){define("DS/TagNavigatorProxy/TagNavigatorProxy",[],(()=>new function(){this.createProxy=()=>({addEvent:(e,t)=>{},setSubjectsTags:e=>{}})})),define("DS/PlatformAPI/PlatformAPI",[],(()=>new function(){this.getUser=()=>({}),this.subscribe=(e,t)=>({topic:e,callback:t})}))};function s(e,t){console.log("[initWidget] Called.");const s=function(e,t,o){if("undefined"!==typeof window[e])console.log("[initWidget] ".concat(e," is defined.")),o();else{if(0===t)throw document.body.innerHTML="Error while trying to load widget. See console for details",console.error("[initWidget] ".concat(e," didn't load after maximum tries.")),new Error("".concat(e," didn't load"));setTimeout(s,200,e,--t,o)}},a=()=>{o.p=widget.uwaUrl.substring(0,widget.uwaUrl.lastIndexOf("/")+1)};if(window.widget)console.log("[initWidget] window.widget exists. Updating public path and calling cbOk."),a(),e(widget);else if(window.UWA){console.log("[initWidget] window.widget not found but UWA exists. Waiting for widget injection.");try{s("widget",10,(()=>{a(),console.log("[initWidget] Widget found after waiting. Calling cbOk."),e(widget)}))}catch(d){console.error(d),t(d)}}else console.log("[initWidget] window.widget not found and UWA is undefined. Creating new instances."),window.widget=new i,window.UWA=new n,(console.log("[initWidget] loadRequire called. Loading assets/lib/require.js"),new Promise(((e,t)=>{const o=new XMLHttpRequest;o.addEventListener("load",(t=>{console.log("[initWidget] require.js loaded successfully.");const o=document.createElement("script");o.innerHTML=t.target.response,document.head.appendChild(o),console.log("[initWidget] Script element appended to head."),e()}));try{o.open("GET","assets/lib/require.js"),o.send(),console.log("[initWidget] XMLHttpRequest sent for require.js")}catch(i){console.error("[initWidget] Error sending XMLHttpRequest for require.js",i),t(i)}}))).then((()=>{r()})),s("requirejs",10,(()=>{console.log("[initWidget] After waiting, calling cbOk with new widget."),e(window.widget)}))}}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,o),r.exports}o.m=e,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,i)=>(o.f[i](e,t),t)),[])),o.u=e=>"static/js/"+e+"."+{4:"bcb3cfad",109:"146d1b23",583:"39a56d65",909:"4940ba7e"}[e]+".chunk.js",o.miniCssF=e=>"static/css/"+e+"."+{4:"ebbca892",109:"7302f8f8",909:"41eb549f"}[e]+".chunk.css",o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="react-widget-template:";o.l=(i,n,r,s)=>{if(e[i])e[i].push(n);else{var a,d;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var m=l[c];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==t+r){a=m;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+r),a.src=i),e[i]=[n];var g=(t,o)=>{a.onerror=a.onload=null,clearTimeout(p);var n=e[i];if(delete e[i],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=g.bind(null,a.onerror),a.onload=g.bind(null,a.onload),d&&document.head.appendChild(a)}}})(),o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((t,i)=>{var n=o.miniCssF(e),r=o.p+n;if(((e,t)=>{for(var o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var n=(s=o[i]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){var s;if((n=(s=r[i]).getAttribute("data-href"))===e||n===t)return s}})(n,r))return t();((e,t,i,n,r)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",o.nc&&(s.nonce=o.nc),s.onerror=s.onload=o=>{if(s.onerror=s.onload=null,"load"===o.type)n();else{var i=o&&o.type,a=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+a+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=a,s.parentNode&&s.parentNode.removeChild(s),r(d)}},s.href=t,i?i.parentNode.insertBefore(s,i.nextSibling):document.head.appendChild(s)})(e,r,null,t,i)})),t={792:0};o.f.miniCss=(o,i)=>{t[o]?i.push(t[o]):0!==t[o]&&{4:1,109:1,909:1}[o]&&i.push(t[o]=e(o).then((()=>{t[o]=0}),(e=>{throw delete t[o],e})))}}})(),(()=>{var e={792:0};o.f.j=(t,i)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((o,i)=>n=e[t]=[o,i]));i.push(n[2]=r);var s=o.p+o.u(t),a=new Error;o.l(s,(i=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,n[1](a)}}),"chunk-"+t,t)}};var t=(t,i)=>{var n,r,s=i[0],a=i[1],d=i[2],l=0;if(s.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(d)d(o)}for(t&&t(i);l<s.length;l++)r=s[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0},i=self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=o(4854);console.log("[widget-starter] Initializing widget using initWidget.");const n={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\munish.verma\\AppData\\Roaming",BABEL_ENV:"production",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_33784_KMBJTXUUSKUIXUHH",COLOR:"1",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"SLKBGENUMEKGMPL",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EDITOR:"C:\\WINDOWS\\notepad.exe",EFC_21800:"1",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Program Files\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOME:"C:\\Users\\munish.verma",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\munish.verma",INIT_CWD:"C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\Working-copy\\emr-revision-float-widget",LANG:"en_US.UTF-8",LOCALAPPDATA:"C:\\Users\\munish.verma\\AppData\\Local",LOGONSERVER:"\\\\SRV01GPDC02",NODE:"C:\\Program Files\\nodejs\\node.exe",NODE_ENV:"production",NODE_EXE:"C:\\Program Files\\nodejs\\\\node.exe",NODE_PATH:"",NPM_CLI_JS:"C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js",npm_command:"run-script",npm_config_cache:"C:\\Users\\munish.verma\\AppData\\Local\\npm-cache",npm_config_globalconfig:"C:\\Users\\munish.verma\\AppData\\Roaming\\npm\\etc\\npmrc",npm_config_global_prefix:"C:\\Users\\munish.verma\\AppData\\Roaming\\npm",npm_config_init_module:"C:\\Users\\munish.verma\\.npm-init.js",npm_config_local_prefix:"C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\Working-copy\\emr-revision-float-widget",npm_config_node_gyp:"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",npm_config_noproxy:"",npm_config_npm_version:"10.2.0",npm_config_prefix:"C:\\Users\\munish.verma\\AppData\\Roaming\\npm",npm_config_userconfig:"C:\\Users\\munish.verma\\.npmrc",npm_config_user_agent:"npm/10.2.0 node/v21.0.0 win32 x64 workspaces/false",npm_execpath:"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",npm_lifecycle_event:"build",npm_lifecycle_script:"react-app-rewired build",npm_node_execpath:"C:\\Program Files\\nodejs\\node.exe",npm_package_json:"C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\Working-copy\\emr-revision-float-widget\\package.json",npm_package_name:"react-widget-template",npm_package_version:"0.1.0",NPM_PREFIX_NPM_CLI_JS:"C:\\Users\\munish.verma\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",NUMBER_OF_PROCESSORS:"12",OneDrive:"C:\\Users\\munish.verma\\OneDrive - SLK Software Pvt Ltd",OneDriveCommercial:"C:\\Users\\munish.verma\\OneDrive - SLK Software Pvt Ltd",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\Working-copy\\emr-revision-float-widget\\node_modules\\.bin;C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\Working-copy\\node_modules\\.bin;C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\node_modules\\.bin;C:\\sass implementation\\React_widget_template\\React_widget_template\\node_modules\\.bin;C:\\sass implementation\\React_widget_template\\node_modules\\.bin;C:\\sass implementation\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Windows\\system32;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files\\Microsoft VS Code\\bin;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Users\\munish.verma\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\munish.verma\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 154 Stepping 4, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"9a04",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\munish.verma\\OneDrive - SLK Software Pvt Ltd\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft Azure Information Protection\\Powershell",PUBLIC:"C:\\Users\\Public",QIP21800:"0",REACT_APP_CARD_OWNER_DETAILS_URL_BASE:"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/documents",REACT_APP_CSRF_URL:"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",REACT_APP_OBJECT_URL_BASE:"https://emr-product-datahub-server-sap-stage.azurewebsites.net/revFloat/getDroppedObjectDetails",REACT_APP_PARENT_URL:"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dseng/dseng:EngItem/locate",REACT_APP_REVISION_URL:"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/version/getGraph",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\MUNISH~1.VER\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.93.1",TMP:"C:\\Users\\MUNISH~1.VER\\AppData\\Local\\Temp",USERDNSDOMAIN:"SLKSOFT.COM",USERDOMAIN:"SLKSOFT",USERDOMAIN_ROAMINGPROFILE:"SLKSOFT",USERNAME:"munish.verma",USERPROFILE:"C:\\Users\\munish.verma",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Program Files\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Program Files\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-d5368dd644-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS"}.WIDGET_ENTRY||"revisionFloat";(0,i.D)((e=>{var t,i;console.log("[widget-starter] initWidget callback invoked. Widget:",e),console.log("[DEBUG] Widget Token Before:",null===(t=e.data)||void 0===t?void 0:t.token),console.log("[DEBUG] Widget ID Before:",e.id),setTimeout((()=>{var t;console.log("[DEBUG] Widget Token After 20 min:",null===(t=e.data)||void 0===t?void 0:t.token),console.log("[DEBUG] Widget ID After 20 min:",e.id)}),12e5),console.log("[widget-starter] Checking dispatchers before modifying:",e._dispatchers),null!==e&&void 0!==e&&null!==(i=e.metas)&&void 0!==i&&i.autoRefresh&&(console.log("[widget-starter] Disabling auto-refresh."),e.metas.autoRefresh=0),e.periodicals&&(e.periodicals.autoRefresh=0,console.log("[widget-starter] Disabled widget periodicals auto-refresh.")),e._dispatchers&&e._dispatchers.onRefresh&&Array.isArray(e._dispatchers.onRefresh.bindings)&&e._dispatchers.onRefresh.bindings.length>0&&(console.log("[widget-starter] Removing existing onRefresh bindings..."),e._dispatchers.onRefresh.bindings.length=0),console.log("[widget-starter] Checking dispatchers after modifying:",e._dispatchers),"plantAssignment"===n?Promise.all([o.e(109),o.e(583),o.e(4)]).then(o.bind(o,2421)).then((e=>{e.default()})).catch((t=>{console.error("[widget-starter] Error dynamically importing plantIndex",t),e.body.innerHTML="<div style='color: red;'>Error loading widget content.</div>"})):Promise.all([o.e(109),o.e(583),o.e(909)]).then(o.bind(o,9020)).then((e=>{e.default()})).catch((t=>{console.error("[widget-starter] Error dynamically importing index",t),e.body.innerHTML="<div style='color: red;'>Error loading widget content.</div>"}))}),(e=>{console.error("[widget-starter] initWidget encountered an error:",e)}))})();
//# sourceMappingURL=main.9264268c.js.map