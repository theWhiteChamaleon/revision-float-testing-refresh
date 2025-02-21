"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[909],{9020:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var o=n(5043),a=n(4391),i=(n(2342),n(9555),n(3003)),r=n(2670),s=n(2115),d=n(5740),c=n(759),l=n(3637),p=n(8012),u=n(6713),g=n(768),h=n(5645),m=n(9379),v=n(3910),w=n(7929),f=n(579);const D=()=>(0,f.jsx)(v.g,{icon:w.e68,className:"green-icon"}),y=()=>(0,f.jsx)(v.g,{icon:w.Jyw,className:"cross-icon"}),A=[{accessorKey:"EIN",header:"EIN",columnPinning:!0},{accessorKey:"Title",header:"Title"},{accessorKey:"Description",header:"Description"},{accessorKey:"Type",header:"Type"},{accessorKey:"Revision",header:"Revision"},{accessorKey:"Connected Child Revision",header:"Connected Revision"},{accessorKey:"Latest child connected",header:"latest Revision Connected",cell:e=>{let{cell:t}=e;return t.getValue()?(0,f.jsx)(D,{}):(0,f.jsx)(y,{})}},{accessorKey:"To-Be child connected",header:"Revision to-be Connected"},{accessorKey:"relationship",header:"Relationship"},{accessorKey:"State",header:"State"},{accessorKey:"Owner",header:"Owner"},{accessorKey:"CAD Format",header:"CAD Format"},{accessorKey:"Collabspace",header:"Collabspace"}];var C=n(3728),b=n(360),R=n(2725),j=n(3277),N=n(6047);var x=n(174);const T=()=>{const{handleDrop:e}=(0,p.A)(),{showSuccessToast:t,showErrorToast:n}=(0,R.A)(),[a,i]=(0,o.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,o.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var o,a;const s=(new Error).stack.split("\n"),d=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(s)&&!d)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),i(!0);const c=r.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===c||void 0===c||null===(o=c.data)||void 0===o||null===(a=o.items)||void 0===a||!a.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",c),void i(!1);try{await(0,x.M)(c.data.items,e)}catch(l){console.error("[WidgetLifecycle] \u274c Error during refresh:",l),n(j.H6)}finally{i(!1),t(j._l)}}))}),[]),a?(0,f.jsx)(u.A,{}):null},E=()=>{const{replaceRevisions:e}=(0,b.A)(),{showErrorToast:t}=(0,R.A)(),n=(0,i.d4)((e=>e.droppedObject.droppedObjectData)),o=(0,i.d4)((e=>e.droppedObject.selectedTableRows));return(0,f.jsx)("div",{className:"d-flex cta-absolute",children:(0,f.jsx)(C.A,{variant:"outline-secondary",className:"m-2",size:"lg",text:"Replace",onClick:async()=>{var a;if(!o||0===o.length)return void t(j.M9);const i=null===(a=n.parentDetails)||void 0===a?void 0:a.data;if(!i||0===i.length)return void t("No parent details available.");const r=o.filter((e=>"-"!==e["To-Be child connected"]));if(0===r.length)return void t(j.nm);const s=r.map((e=>i.find((t=>t["Dropped Revision ID"]===e["Dropped Revision ID"]))));if(s.some((e=>!e)))return void t("Could not find all corresponding parent details.");const d=await async function(){try{const e=await(0,N._3)();return(await e.getUser()).email}catch(e){return console.error("Error getting user email:",e),null}}();if(!d)throw new Error("User email not found.");const c=n.cardData;(await e(s,c,d)).success}})})},S=()=>{const{initializeDroppableArea:e,loading:t}=(0,p.A)(),n=(0,o.useRef)(0),a=(0,i.wA)(),{cardData:r,parentDetails:s,isDropped:v,initialDraggedData:w}=(0,i.d4)((e=>({cardData:e.droppedObject.droppedObjectData.cardData,parentDetails:e.droppedObject.droppedObjectData.parentDetails,isDropped:e.droppedObject.isDropped,initialDraggedData:e.droppedObject.droppedObjectData.initialDraggedData})),i.bN);(0,o.useEffect)((()=>{v||e()}),[v,e]);const D=(0,o.useMemo)((()=>((e,t)=>e&&Array.isArray(e.data)?e.data.map((e=>(0,m.A)({EIN:e.EIN||"N/A",Title:e.Title||"N/A",Description:e.Description||"N/A",Type:e.Type||"N/A",Revision:e["Dropped Revision"]||"N/A","Dropped Revision ID":e["Dropped Revision ID"]||"N/A","Connected Child Revision":e.connectedChildRev||"N/A","Latest child connected":!e.toBeChildRevConnected,"To-Be child connected":e.toBeChildRevConnected||"-",State:e["Maturity State"]||"N/A",Owner:e.Owner||"N/A","CAD Format":e["CAD Format"]||"N/A",Collabspace:e["Collaborative Space Title"]||"N/A"},"Document"===(null===t||void 0===t?void 0:t.Type)&&{relationship:e.relationship||"N/A"}))):(console.warn("[getTableData] \u26a0\ufe0f No parent details available. Returning empty array."),[]))(s,r)),[s,r]);(0,o.useEffect)((()=>{D.length>0&&console.log("[RevisionFloat] \ud83d\udcca optimizedTableData Updated:",D)}),[D]);const y=(0,o.useMemo)((()=>(e=>e&&"object"===typeof e?(0,m.A)({title:e.Title||"N/A",type:e.Type||"N/A","Maturity State":e["Maturity State"]||"N/A",owner:e.Owner||"N/A","Collaborative Space Title":e["Collaborative Space Title"]||"N/A",Description:e.Description||"N/A","Dropped Revision":e["Dropped Revision"]||"N/A","Latest Released Revision":e["Latest Released Revision"]||"N/A","CAD Format":e["CAD Format"]||"N/A",imageURL:e.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"},"Document"!==e.Type&&{EIN:e.EIN||"N/A","CAD Format":e["CAD Format"]||"N/A"}):null)(r)),[r]),C=(0,o.useCallback)((()=>{v&&(w.length||e(),a((0,h.Rr)(!1)),(r||s.length||w.length)&&(console.log("[handleHomeClick] \ud83d\uddd1 Dispatching reset action..."),a((0,h.um)({cardData:{},parentDetails:[],initialDraggedData:[]}))))}),[a,e,v,w,r,s]),b=(0,o.useMemo)((()=>"Document"===(null===r||void 0===r?void 0:r.Type)?A:A.filter((e=>"relationship"!==e.accessorKey))),[r]);return(0,o.useEffect)((()=>{console.log("[RevisionFloat] State Changes:",{isDropped:v})}),[v]),(0,f.jsxs)(f.Fragment,{children:[!v&&!t&&(0,f.jsx)(d.A,{}),v&&(0,f.jsxs)(f.Fragment,{children:[t&&(0,f.jsx)(u.A,{}),(0,f.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)("div",{className:"p-0 pt-4",children:(0,f.jsx)(l.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:C})}),y&&(0,f.jsx)(c.A,{data:y})]})}),D.length>0?(0,f.jsxs)("div",{className:"wrapper-cta",children:[(0,f.jsx)(E,{}),(0,f.jsx)(g.A,{data:D,columns:b,widgetType:"Revision_FLoat_Widget"},n.current)]}):(0,f.jsx)("div",{className:"no-data-banner",children:"No Parent object(s) found"})]})]})};n(8421),n(4050),n(9959);let k=null;function I(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let n=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");n||(n=document.createElement("div"),n.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(n):document.body.appendChild(n)),k||(k=a.createRoot(n)),k.render((0,f.jsxs)(i.Kq,{store:r.A,children:[(0,f.jsx)(T,{}),(0,f.jsx)(S,{}),(0,f.jsx)(s.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()}}]);
//# sourceMappingURL=909.13aae3b1.chunk.js.map