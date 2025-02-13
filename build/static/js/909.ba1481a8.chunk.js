"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[909],{9020:(e,t,o)=>{o.r(t),o.d(t,{default:()=>L});var n=o(5043),i=o(4391),a=(o(2342),o(9555),o(3003)),s=o(2670),r=o(2115),d=o(5740),c=o(759),l=o(3637),p=o(8012),g=o(6713),u=o(4694),h=o(5645),m=o(3910),v=o(7929),w=o(579);const f=()=>(0,w.jsx)(m.g,{icon:v.e68,className:"green-icon"}),y=()=>(0,w.jsx)(m.g,{icon:v.Jyw,className:"cross-icon"}),D=[{accessorKey:"EIN",header:"EIN",columnPinning:!0},{accessorKey:"Title",header:"Title"},{accessorKey:"Description",header:"Description"},{accessorKey:"Type",header:"Type"},{accessorKey:"Revision",header:"Revision"},{accessorKey:"Connected Child Revision",header:"Connected Revision"},{accessorKey:"Latest child connected",header:"latest Revision Connected",cell:e=>{let{cell:t}=e;return t.getValue()?(0,w.jsx)(f,{}):(0,w.jsx)(y,{})}},{accessorKey:"To-Be child connected",header:"Revision to-be Connected"},{accessorKey:"relationship",header:"Relationship"},{accessorKey:"State",header:"State"},{accessorKey:"Owner",header:"Owner"},{accessorKey:"CAD Format",header:"CAD Format"},{accessorKey:"Collabspace",header:"Collabspace"}];var j=o(3728),A=o(360),x=o(2725),R=o(3277),N=o(6047);var b=o(174);const C=e=>{let{children:t}=e;const{handleDrop:o}=(0,p.A)(),{showSuccessToast:i,showErrorToast:s}=(0,x.A)(),r=(0,a.d4)((e=>e.droppedObject.droppedObjectData.initialDraggedData)),d=(0,n.useRef)(!1);return console.log("---[widget lifecycle]--- starts"),(0,n.useEffect)((()=>{if(!window.widget)return;if(d.current)return void console.warn("[WidgetLifecycle] \u23f3 onRefresh is already registered. Ignoring duplicate.");d.current=!0;window.widget.addEvent("onRefresh",(async()=>{if(console.log("[WidgetLifecycle] \ud83d\udd04 onRefresh triggered!"),r&&r.data.items[0].objectId&&r.data.items[0].objectType&&"function"===typeof o)try{const e=r.data.items;await(0,b.M)(e,o),i(R._l)}catch(e){console.error("[WidgetLifecycle] \u274c Error during refresh:",e),s(R.H6)}else console.error("[WidgetLifecycle] \u26a0\ufe0f initialDraggedData is undefined")})),console.log("[WidgetLifecycle] \u2705 onRefresh event registered successfully")}),[]),(0,w.jsx)(w.Fragment,{children:t})},T=()=>{const{replaceRevisions:e}=(0,A.A)(),{showErrorToast:t}=(0,x.A)(),o=(0,a.d4)((e=>e.droppedObject.droppedObjectData)),n=(0,a.d4)((e=>e.droppedObject.selectedTableRows));return(0,w.jsx)("div",{className:"d-flex cta-absolute",children:(0,w.jsx)(j.A,{variant:"outline-secondary",className:"m-2",size:"lg",text:"Replace",onClick:async()=>{var i;if(!n||0===n.length)return void t(R.M9);const a=null===(i=o.parentDetails)||void 0===i?void 0:i.data;if(!a||0===a.length)return void t("No parent details available.");const s=n.filter((e=>"-"!==e["To-Be child connected"]));if(0===s.length)return void t(R.nm);const r=s.map((e=>a.find((t=>t["Dropped Revision ID"]===e["Dropped Revision ID"]))));if(r.some((e=>!e)))return void t("Could not find all corresponding parent details.");const d=await async function(){try{const e=await(0,N._3)();return(await e.getUser()).email}catch(e){return console.error("Error getting user email:",e),null}}();if(!d)throw new Error("User email not found.");const c=o.cardData;(await e(r,c,d)).success}})})},E=()=>{const{initializeDroppableArea:e,loading:t}=(0,p.A)(),[o,i]=(0,n.useState)(0),[s,r]=(0,n.useState)([]),[m,v]=(0,n.useState)(!1);console.log("-----revision float logic----- starts");const f=(0,a.wA)(),y=(0,a.d4)((e=>e.droppedObject.droppedObjectData)),j=(0,a.d4)((e=>e.droppedObject.loadingParentDetails)),A=(0,a.d4)((e=>e.droppedObject.isDropped));(0,n.useEffect)((()=>{A||e()}),[A,e]),(0,n.useEffect)((()=>{v(j)}),[j]);const x=(0,n.useMemo)((()=>(e=>{if(!e||!e.parentDetails||!e.parentDetails.data)return[];const t=e.cardData;return e.parentDetails.data.map((e=>{let o={EIN:e.EIN||"N/A",Title:e.Title||"N/A",Description:e.Description||"N/A",Type:e.Type||"N/A",Revision:e["Dropped Revision"]||"N/A","Dropped Revision ID":e["Dropped Revision ID"]||"N/A","Connected Child Revision":e.connectedChildRev||"N/A","Latest child connected":!e.toBeChildRevConnected,"To-Be child connected":e.toBeChildRevConnected||"-",State:e["Maturity State"]||"N/A",Owner:e.Owner||"N/A","CAD Format":e["CAD Format"]||"N/A",Collabspace:e["Collaborative Space Title"]||"N/A"};return"Document"===t.Type&&(o.relationship=e.relationship||"N/A"),o}))})(y)),[y]);(0,n.useEffect)((()=>{x.length>0?(r(x),i((e=>e+1))):r([])}),[x]);const R=(0,n.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let o={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(o.EIN=t.EIN||"N/A",o["CAD Format"]=t["CAD Format"]||"N/A"),o})(y)),[y]),N=(0,n.useMemo)((()=>y&&y.draggedData&&"Document"===y.draggedData.Type?D:D.filter((e=>"relationship"!==e.accessorKey))),[y]);return console.log("----revision float logic---- ends"),(0,w.jsxs)(w.Fragment,{children:[!A&&!t&&!m&&(0,w.jsx)(d.A,{}),t&&(0,w.jsx)(g.A,{}),A&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,w.jsxs)("div",{className:"d-flex ",children:[(0,w.jsx)("div",{className:"p-0 pt-4",children:(0,w.jsx)(l.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{e(),f((0,h.Rr)(!1)),f((0,h.um)({draggedData:{},parentDetails:[],versions:[],initialDraggedData:[]})),r([])}})}),R&&(0,w.jsx)(c.A,{data:R})]})}),m?(0,w.jsx)("div",{className:"loading-indicator mt-5",children:(0,w.jsx)(g.A,{})}):s.length>0?(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{className:"wrapper-cta",children:[(0,w.jsx)(T,{}),(0,w.jsx)(u.A,{data:s,columns:N,widgetType:"Revision_FLoat_Widget"},o)]})}):(0,w.jsx)("div",{className:"no-data-banner",children:" No Parent object(s) found"})]})]})};o(8421),o(4050),o(9959);let I=null;function L(){if(console.log("[index.js] \ud83d\udd0d Checking if widget is available..."),window.widget){console.log("[index.js] \u2705 Widget detected! Registering onLoad event...");let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,console.log("[index.js] \u2705 First-time onLoad event fired. Initializing app..."),function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e})),console.log("[index.js] start() called. Mounting React app.");let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o?console.log("[index.js] Root element found."):(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?(window.widget.body.appendChild(o),console.log("[index.js] Root element appended to widget.body.")):(document.body.appendChild(o),console.log("[index.js] Root element appended to document.body."))),I?console.log("[index.js] Reusing existing React root."):(console.log("[index.js] Creating new React root."),I=i.createRoot(o)),I.render((0,w.jsxs)(a.Kq,{store:s.A,children:[(0,w.jsx)(C,{}),(0,w.jsx)(E,{}),(0,w.jsx)(r.N9,{})]})),console.log("[index.js] React app rendered.")}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}}}]);
//# sourceMappingURL=909.ba1481a8.chunk.js.map