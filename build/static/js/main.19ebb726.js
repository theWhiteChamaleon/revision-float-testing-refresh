(()=>{"use strict";var e={4854:(e,t,r)=>{r.d(t,{D:()=>s});const o=function(){const e={};let t="";const r=window.location.href,o=(()=>{let e=localStorage.getItem("_prefs_4_Widget_");if(e)try{e=JSON.parse(e)}catch(t){e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e))}else e={},localStorage.setItem("_prefs_4_Widget_",JSON.stringify(e));return e})(),n=()=>{localStorage.setItem("_prefs_4_Widget_",JSON.stringify(o))};this.uwaUrl="./",this.addEvent=(t,r)=>{e[t]=r,"onLoad"===t&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",r):r())},this.addPreference=e=>{e.value=e.defaultValue,o[e.name]=e,n()},this.getPreference=e=>o[e],this.getUrl=()=>r,this.getValue=e=>void 0===o[e]?void 0:o[e].value,this.setValue=(e,t)=>{o[e].value=t,n()},this.setIcon=e=>{},this.setTitle=e=>{t=e,document.title=t},this.dispatchEvent=function(){}},n=function(){this.log=e=>{}},i=function(){define("DS/TagNavigatorProxy/TagNavigatorProxy",[],(()=>new function(){this.createProxy=()=>({addEvent:(e,t)=>{},setSubjectsTags:e=>{}})})),define("DS/PlatformAPI/PlatformAPI",[],(()=>new function(){this.getUser=()=>({}),this.subscribe=(e,t)=>({topic:e,callback:t})}))};function s(e,t){const s=function(e,t,r){if("undefined"!==typeof window[e])r();else{if(0===t)throw document.body.innerHTML="Error while trying to load widget. See console for details",console.error("[initWidget] ".concat(e," didn't load after maximum tries.")),new Error("".concat(e," didn't load"));setTimeout(s,200,e,--t,r)}},a=()=>{r.p=widget.uwaUrl.substring(0,widget.uwaUrl.lastIndexOf("/")+1)};if(window.widget)a(),e(widget);else if(window.UWA)try{s("widget",10,(()=>{a(),e(widget)}))}catch(d){console.error(d),t(d)}else window.widget=new o,window.UWA=new n,new Promise(((e,t)=>{const r=new XMLHttpRequest;r.addEventListener("load",(t=>{const r=document.createElement("script");r.innerHTML=t.target.response,document.head.appendChild(r),e()}));try{r.open("GET","assets/lib/require.js"),r.send()}catch(o){console.error("[initWidget] Error sending XMLHttpRequest for require.js",o),t(o)}})).then((()=>{i()})),s("requirejs",10,(()=>{e(window.widget)}))}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,r),i.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[])),r.u=e=>"static/js/"+e+"."+{4:"bcb3cfad",109:"146d1b23",583:"213f2db0",909:"bc61abf8"}[e]+".chunk.js",r.miniCssF=e=>"static/css/"+e+"."+{4:"ebbca892",109:"7302f8f8",909:"41eb549f"}[e]+".chunk.css",r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="react-widget-template:";r.l=(o,n,i,s)=>{if(e[o])e[o].push(n);else{var a,d;if(void 0!==i)for(var l=document.getElementsByTagName("script"),m=0;m<l.length;m++){var c=l[m];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+i){a=c;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[n];var p=(t,r)=>{a.onerror=a.onload=null,clearTimeout(g);var n=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),d&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((t,o)=>{var n=r.miniCssF(e),i=r.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=(s=r[o]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var s;if((n=(s=i[o]).getAttribute("data-href"))===e||n===t)return s}})(n,i))return t();((e,t,o,n,i)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",r.nc&&(s.nonce=r.nc),s.onerror=s.onload=r=>{if(s.onerror=s.onload=null,"load"===r.type)n();else{var o=r&&r.type,a=r&&r.target&&r.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+a+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=o,d.request=a,s.parentNode&&s.parentNode.removeChild(s),i(d)}},s.href=t,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s)})(e,i,null,t,o)})),t={792:0};r.f.miniCss=(r,o)=>{t[r]?o.push(t[r]):0!==t[r]&&{4:1,109:1,909:1}[r]&&o.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}}})(),(()=>{var e={792:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=i);var s=r.p+r.u(t),a=new Error;r.l(s,(o=>{if(r.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,n[1](a)}}),"chunk-"+t,t)}};var t=(t,o)=>{var n,i,s=o[0],a=o[1],d=o[2],l=0;if(s.some((t=>0!==e[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(d)d(r)}for(t&&t(o);l<s.length;l++)i=s[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},o=self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r(4854);const n={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\munish.verma\\AppData\\Roaming",BABEL_ENV:"production",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_33784_KMBJTXUUSKUIXUHH",COLOR:"1",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"SLKBGENUMEKGMPL",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EDITOR:"C:\\WINDOWS\\notepad.exe",EFC_21800:"1",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Program Files\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOME:"C:\\Users\\munish.verma",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\munish.verma",INIT_CWD:"C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\Working-copy\\emr-revision-float-widget",LANG:"en_US.UTF-8",LOCALAPPDATA:"C:\\Users\\munish.verma\\AppData\\Local",LOGONSERVER:"\\\\SRV01GPDC02",NODE:"C:\\Program Files\\nodejs\\node.exe",NODE_ENV:"production",NODE_EXE:"C:\\Program Files\\nodejs\\\\node.exe",NODE_PATH:"",NPM_CLI_JS:"C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js",npm_command:"run-script",npm_config_cache:"C:\\Users\\munish.verma\\AppData\\Local\\npm-cache",npm_config_globalconfig:"C:\\Users\\munish.verma\\AppData\\Roaming\\npm\\etc\\npmrc",npm_config_global_prefix:"C:\\Users\\munish.verma\\AppData\\Roaming\\npm",npm_config_init_module:"C:\\Users\\munish.verma\\.npm-init.js",npm_config_local_prefix:"C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\Working-copy\\emr-revision-float-widget",npm_config_node_gyp:"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",npm_config_noproxy:"",npm_config_npm_version:"10.2.0",npm_config_prefix:"C:\\Users\\munish.verma\\AppData\\Roaming\\npm",npm_config_userconfig:"C:\\Users\\munish.verma\\.npmrc",npm_config_user_agent:"npm/10.2.0 node/v21.0.0 win32 x64 workspaces/false",npm_execpath:"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",npm_lifecycle_event:"build",npm_lifecycle_script:"react-app-rewired build",npm_node_execpath:"C:\\Program Files\\nodejs\\node.exe",npm_package_json:"C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\Working-copy\\emr-revision-float-widget\\package.json",npm_package_name:"react-widget-template",npm_package_version:"0.1.0",NPM_PREFIX_NPM_CLI_JS:"C:\\Users\\munish.verma\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",NUMBER_OF_PROCESSORS:"12",OneDrive:"C:\\Users\\munish.verma\\OneDrive - SLK Software Pvt Ltd",OneDriveCommercial:"C:\\Users\\munish.verma\\OneDrive - SLK Software Pvt Ltd",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\Working-copy\\emr-revision-float-widget\\node_modules\\.bin;C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\Working-copy\\node_modules\\.bin;C:\\sass implementation\\React_widget_template\\React_widget_template\\azure-react-widget\\node_modules\\.bin;C:\\sass implementation\\React_widget_template\\React_widget_template\\node_modules\\.bin;C:\\sass implementation\\React_widget_template\\node_modules\\.bin;C:\\sass implementation\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Windows\\system32;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files\\Microsoft VS Code\\bin;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Users\\munish.verma\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\munish.verma\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe;",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 154 Stepping 4, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"9a04",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\munish.verma\\OneDrive - SLK Software Pvt Ltd\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft Azure Information Protection\\Powershell",PUBLIC:"C:\\Users\\Public",QIP21800:"0",REACT_APP_CARD_OWNER_DETAILS_URL_BASE:"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/documents",REACT_APP_CSRF_URL:"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",REACT_APP_OBJECT_URL_BASE:"https://emr-product-datahub-server-sap-stage.azurewebsites.net/revFloat/getDroppedObjectDetails",REACT_APP_PARENT_URL:"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dseng/dseng:EngItem/locate",REACT_APP_REVISION_URL:"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/version/getGraph",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\MUNISH~1.VER\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.93.1",TMP:"C:\\Users\\MUNISH~1.VER\\AppData\\Local\\Temp",USERDNSDOMAIN:"SLKSOFT.COM",USERDOMAIN:"SLKSOFT",USERDOMAIN_ROAMINGPROFILE:"SLKSOFT",USERNAME:"munish.verma",USERPROFILE:"C:\\Users\\munish.verma",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Program Files\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Program Files\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-d5368dd644-sock",VSCODE_INJECTION:"1",windir:"C:\\WINDOWS"}.WIDGET_ENTRY||"revisionFloat";(0,o.D)((e=>{var t;console.log("[widget-starter] initWidget callback invoked. Widget:",e),null!==e&&void 0!==e&&null!==(t=e.metas)&&void 0!==t&&t.autoRefresh&&(e.metas.autoRefresh=0),e.periodicals&&(e.periodicals.autoRefresh=0),e._dispatchers&&e._dispatchers.onRefresh&&Array.isArray(e._dispatchers.onRefresh.bindings)&&e._dispatchers.onRefresh.bindings.length>0&&(e._dispatchers.onRefresh.bindings.length=0),console.log("[widget-starter] Checking dispatchers after modifying:",e._dispatchers),"plantAssignment"===n?Promise.all([r.e(109),r.e(583),r.e(4)]).then(r.bind(r,2421)).then((e=>{e.default()})).catch((t=>{console.error("[widget-starter] Error dynamically importing plantIndex",t),e.body.innerHTML="<div style='color: red;'>Error loading widget content.</div>"})):Promise.all([r.e(109),r.e(583),r.e(909)]).then(r.bind(r,9020)).then((e=>{e.default()})).catch((t=>{console.error("[widget-starter] Error dynamically importing index",t),e.body.innerHTML="<div style='color: red;'>Error loading widget content.</div>"}))}),(e=>{console.error("[widget-starter] initWidget encountered an error:",e)}))})();
//# sourceMappingURL=main.19ebb726.js.map