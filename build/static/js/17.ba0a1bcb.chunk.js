"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[17],{3728:(e,t,a)=>{a.d(t,{A:()=>i});var s=a(9379),r=a(45),n=(a(5043),a(4282)),o=a(579);const l=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],i=e=>{let{variant:t="primary",size:a="md",type:i="button",disabled:c=!1,onClick:d,className:u="",title:p,text:g,imageSrc:m}=e,h=(0,r.A)(e,l);return(0,o.jsxs)(n.A,(0,s.A)((0,s.A)({variant:t,size:a,type:i,disabled:c,onClick:d,className:u,title:p},h),{},{children:[m&&(0,o.jsx)("img",{src:m,alt:g,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",g]}))}},4816:(e,t,a)=>{a.d(t,{A:()=>u});var s=a(5043),r=(a(8611),a(4220)),n=a(5284),o=a(3637),l=a(6047),i=a(3003),c=a(579);const d=e=>{let{data:t,isColumn:a,onDragStart:r,onDragEnd:n}=e;const o=(0,s.useRef)(null),d=(0,i.d4)((e=>e.droppedObject.droppedObjectData.initialDraggedData));return(0,s.useEffect)((()=>{o.current&&d&&(0,l.eB)(o.current,d,r,n)}),[t,d,r,n]),t?(0,c.jsxs)("div",{className:"d-flex ".concat(a?"flex-column":"flex-row"),children:[(0,c.jsx)("h5",{ref:o,className:"mb-1 text-start title ".concat(a?"":"me-2"),children:t.title}),(0,c.jsxs)("ul",{className:"list-group d-flex flex-row flex-sm-row flex-wrap justify-content-between pb-3 pb-md-0 ".concat(a?"":"w-75"),children:[(0,c.jsxs)("li",{className:"list-group-item flex-grow-1 text-start mx-0 ps-0 pb-0 ".concat(a?"":"d-flex flex-row justify-content-around"),style:{border:"0"},children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Type:"})," ",(0,c.jsx)("span",{className:"list-text",title:t.type,children:t.type})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Owner:"})," ",(0,c.jsx)("span",{className:"list-text",title:t.owner,children:t.owner})]}),a&&(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Maturity State:"})," ",(0,c.jsx)("span",{className:"list-text",title:t["Maturity State"],children:t["Maturity State"]})]})]}),a&&(0,c.jsxs)("li",{className:"list-group-item flex-grow-1 text-start mx-0 pt-0",style:{border:"0",paddingLeft:"0"},children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Dropped Revision :"})," ",(0,c.jsx)("span",{className:"list-text",title:t["Dropped Revision"],children:t["Dropped Revision"]})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Latest Released Revision:"})," ",(0,c.jsx)("span",{className:"list-text",title:t["Latest Released Revision"],children:t["Latest Released Revision"]})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"Collabspace:"})," ",(0,c.jsx)("span",{className:"list-text",title:t["Collaborative Space Title"],children:t["Collaborative Space Title"]})]})]}),(0,c.jsx)("li",{className:"list-group-item flex-grow-1 text-start mx-0 ".concat(a?"":"d-flex flex-row"),style:{border:"0",paddingLeft:"0"},children:"Document"!==t.type&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"CAD Format:"})," ",(0,c.jsx)("span",{className:"list-text",title:t["CAD Format"],children:t["CAD Format"]})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("b",{children:"EIN:"})," ",(0,c.jsx)("span",{className:"list-text",title:t.EIN,children:t.EIN})]})]})}),(0,c.jsx)("div",{className:"d-none d-md-flex align-items-stretch",children:(0,c.jsx)("div",{className:"vr"})}),(0,c.jsx)("div",{className:"d-flex d-md-none w-100",children:(0,c.jsx)("hr",{className:"w-100"})}),(0,c.jsx)("li",{className:"list-group-item flex-grow-1 text-start mx-0",style:{border:"0"},children:(0,c.jsx)("p",{className:"description-container",title:t.Description,children:t.Description})})]})]}):null},u=e=>{let{data:t,onDragStart:a,onDragEnd:l}=e;const[i,u]=(0,s.useState)(!0);return(0,c.jsxs)(r.A,{className:"d-flex flex-row mt-4 border-0 ",style:{width:"100%"},children:[(0,c.jsx)("div",{className:"pb-3 d-none d-md-block me-5 ms-4",children:(0,c.jsx)(r.A.Img,{className:"".concat(i?"img-thumbnail":"image-resize img-thumbnail"," "),src:t.imageURL,alt:"Card image"})}),(0,c.jsx)(n.A,{className:"".concat(i?"p-0":"p-0 layout-change"," "),children:(0,c.jsx)(d,{data:t,isColumn:i,onDragStart:a,onDragEnd:l})}),(0,c.jsx)("button",{className:"me-2 p-0 btn btn-link accordion-toggle",onClick:()=>{u(!i)},children:(0,c.jsx)(o.A,{src:"https://khanfarzan17.github.io/tedting-revision-float/images/arrow.png",alt:"downArrow",className:"rotatable ".concat(i?"rotated":"")})})]})}},759:(e,t,a)=>{a.d(t,{A:()=>c});var s=a(5043),r=(a(4119),a(3637)),n=a(8012),o=a(579);const l=()=>{const{initializeDroppableArea:e}=(0,n.A)(),t=(0,s.useRef)(!1);return(0,s.useEffect)((()=>{t.current||(console.log("[DragAndDrop] \ud83d\udd04 Initializing droppable area..."),e(),t.current=!0)}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"droppable-container mt-4",children:[(0,o.jsx)(r.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,o.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,o.jsxs)("div",{className:"divider-container",children:[(0,o.jsx)("hr",{className:"divider"}),(0,o.jsx)("span",{className:"divider-text",children:"or"}),(0,o.jsx)("hr",{className:"divider"})]})]})})};var i=a(4816);const c=e=>{let{data:t}=e;const[a,r]=(0,s.useState)(!1);return(0,o.jsxs)("div",{className:"card-with-drag-and-drop ".concat(a?"dragging":""),children:[(0,o.jsx)(l,{}),(0,o.jsx)(i.A,{data:t,onDragStart:()=>{console.log("handleDragStart called"),r(!0)},onDragEnd:()=>{console.log("handleDragEnd called"),console.log("Before setIsDragging(false) - isDragging:",a),r(!1),console.log("After setIsDragging(false) - isDragging:",a)}})]})}},5740:(e,t,a)=>{a.d(t,{A:()=>x});var s=a(5043),r=a(8012),n=(a(4119),a(3637)),o=a(7994),l=a(2691),i=a(4282),c=a(3910),d=a(7929),u=a(579);const p=e=>{let{onSearch:t,disabled:a}=e;const[r,n]=(0,s.useState)(""),p=(0,s.useRef)(null);return(0,u.jsxs)("div",{className:"search-content-container d-flex align-items-center",children:[(0,u.jsx)(c.g,{icon:d.$UM,onClick:()=>{r.trim()&&t(r)},className:"search-icon"}),(0,u.jsx)("span",{className:"ms-4 drag-and-drop-text flex-grow-1",children:(0,u.jsxs)(o.A,{children:[(0,u.jsx)(l.A.Control,{type:"text",ref:p,value:r,onChange:e=>{const t=e.target.value;n(t)},onKeyDown:e=>{"Enter"===e.key&&r.trim()&&t(r)},placeholder:"Search...",disabled:a}),r&&(0,u.jsx)(i.A,{variant:"btn-link",onClick:()=>{n(""),p.current.focus()},className:"clear-button",children:"\u2716"})]})})]})};var g=a(9379),m=a(6047);const h=()=>{const[e,t]=(0,s.useState)(null),[a,r]=(0,s.useState)(null);(0,s.useEffect)((()=>{(async()=>{try{const e=await(0,m.qZ)();r(e)}catch(e){console.error("[useInterComSearch] Error initializing InterCom:",e)}})()}),[]),(0,s.useEffect)((()=>()=>{e&&e.disconnect()}),[e]);return{performSearch:(0,s.useCallback)(((e,s,r)=>{var n;if(!a)return void console.warn("[useInterComSearch] InterCom is not loaded yet.");const o="socket"+(new Date).toISOString().replace(/[-:]/g,""),l=new a.Socket(o,{dispatchRetryInternal:0});l.subscribeServer("SearchComServer"),t(l),console.log("[useInterComSearch] performSearch called with:",e,s);const i=null===(n=window.widget)||void 0===n?void 0:n.id,c=(0,g.A)((0,g.A)({},s),{},{widget_id:i,app_socket_id:o,default_search_criteria:e});console.log("[useInterComSearch] Dispatching RegisterContext event with:",c),l.dispatchEvent("RegisterContext",c),l.dispatchEvent("InContextSearch",c);console.log("[useInterComSearch] Adding listener for Selected_Objects_search"),l.addListener("Selected_Objects_search",(e=>{console.log("[useInterComSearch] Search results received:",e),r&&r(e)}))}),[a])}},x=()=>{const{handleDrop:e}=(0,r.A)(),{performSearch:t}=h();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"droppable-container mt-4",children:[(0,u.jsx)(n.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,u.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,u.jsxs)("div",{className:"divider-container",children:[(0,u.jsx)("hr",{className:"divider"}),(0,u.jsx)("span",{className:"divider-text",children:"or"}),(0,u.jsx)("hr",{className:"divider"})]}),(0,u.jsx)(p,{onSearch:a=>{t(a,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{console.log("Selected objects:",t),console.log("objectId: selectedObjects[0].id",t[0].id),t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})}},6713:(e,t,a)=>{a.d(t,{A:()=>r});a(5043);var s=a(579);const r=()=>(0,s.jsx)("div",{className:"loader-container",children:(0,s.jsx)("div",{className:"loader"})})},768:(e,t,a)=>{a.d(t,{A:()=>b});var s=a(9379),r=a(5043),n=a(8931),o=a(7111),l=a(3585),i=a(6800),c=a(1648),d=a(3003),u=a(3728),p=a(5645),g=a(6047),m=a(1024),h=a(579);const x=e=>{let{header:t,columns:a,table:r}=e;const o="selection"===t.column.id,l=r.getState().columnPinning.left.includes(t.column.id),i=o?"is-fixed":l?"is-pinned":"",d=(0,c.gl)({id:t.column.id,disabled:"selection"===t.column.id||"EIN"===t.column.id}),{attributes:u,listeners:p,setNodeRef:g,transform:x,isDragging:f}=o?{attributes:{},listeners:{},setNodeRef:null,transform:null,isDragging:!1}:d,b={opacity:f?.8:1,position:"sticky",top:0,left:o?0:l?"var(--pinned-left)":"auto",transform:m.Ks.Transform.toString(x),transition:"width transform 0.2s ease-in-out",width:t.getSize(),zIndex:o?5:l?4:3,cursor:o?"default":"move",backgroundColor:"#f2f2f2"};return(0,h.jsxs)("th",{ref:g,style:b,"data-fixed":o,"data-pinned":l,className:i,children:[(0,h.jsx)("div",(0,s.A)((0,s.A)({className:"d-flex align-items-center header-content"},o?{}:(0,s.A)((0,s.A)({},u),p)),{},{children:(0,h.jsxs)("div",{className:"flex-grow-1",onClick:t.column.getToggleSortingHandler(),children:[t.isPlaceholder?null:(0,n.Kv)(t.column.columnDef.header,t.getContext()),"asc"===t.column.getIsSorted()?(0,h.jsx)("span",{className:"icon",children:"\u2191"}):"desc"===t.column.getIsSorted()?(0,h.jsx)("span",{className:"icon",children:"\u2193"}):null]})})),(0,h.jsx)("div",{onDoubleClick:()=>t.column.resetSize(),onMouseDown:t.getResizeHandler(),onTouchStart:t.getResizeHandler(),className:"Resizer ".concat(t.column.getIsResizing()?"isResizing":"")})]})},f=e=>{let{cell:t,columns:a}=e;const s="selection"===t.column.id,r=t.column.getIsPinned(),o=s?"is-fixed":r?"is-pinned":"",l=(0,n.Kv)(t.column.columnDef.cell,t.getContext()),i=(0,c.gl)({id:t.column.id,disabled:s}),{setNodeRef:d,transform:u,isDragging:p}=s?{setNodeRef:null,transform:null,isDragging:!1}:i,g={opacity:p?.8:1,position:s||r?"sticky":"relative",left:s?0:"auto",transform:m.Ks.Transform.toString(u),transition:"width transform 0.2s ease-in-out",width:t.column.getSize(),zIndex:s?2:p?1:r?2:0};return(0,h.jsx)("td",{ref:d,style:g,className:o,title:s?"":"".concat(t.getValue()),children:s?l:(0,h.jsx)("div",{className:"cell-content",children:l})})},b=e=>{let{columns:t,data:a,editable:m=!1,meta:b,widgetType:j}=e;const v=(0,d.wA)(),[D,w]=(0,r.useState)(a),[y,S]=(0,r.useState)({}),[A,C]=(0,r.useState)(null),N=(0,r.useRef)(null),[R,I]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=e=>{I(e.target.scrollTop>0)},t=N.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[]);const[O,E]=(0,r.useState)((()=>{const e=localStorage.getItem("tableColumnOrder");if(e)return JSON.parse(e);const a=["selection"],s=t.map((e=>e.id||e.accessorKey));return a.push(...s),a}));(0,r.useEffect)((()=>{localStorage.setItem("tableColumnOrder",JSON.stringify(O))}),[O]);const P=(0,r.useMemo)((()=>{const e=["selection"],a=t.map((e=>e.id||e.accessorKey));return e.push(...a),e}),[t]),k=(0,r.useMemo)((()=>{const e={left:["selection","EIN "]};return t.forEach((t=>{t.columnPinning&&e.left.push(t.id||t.accessorKey)})),e}),[t]),T=(0,r.useMemo)((()=>{const e={id:"selection",header:e=>{let{table:t}=e;return(0,h.jsx)("input",{type:"checkbox",ref:e=>{e&&(e.indeterminate=t.getIsSomeRowsSelected())},checked:t.getIsAllRowsSelected(),onChange:t.getToggleAllRowsSelectedHandler()})},cell:e=>{let{row:t}=e;return(0,h.jsx)("input",{type:"checkbox",checked:t.getIsSelected(),onChange:t.getToggleSelectedHandler()})}};return[e,...m?t.map((e=>(0,s.A)((0,s.A)({},e),{},{cell:e.editable?t=>{let{row:a,getValue:r}=t;return(0,h.jsx)("input",{className:"input-cell",value:r(),onChange:t=>((e,t,a)=>{const r=D.map(((r,n)=>n===e?(0,s.A)((0,s.A)({},r),{},{[t]:a}):r));console.log("[Table] Updated Table Data:",r),null!==b&&void 0!==b&&b.updateTableData&&b.updateTableData(r),w(r)})(a.index,e.accessorKey,t.target.value)})}:e.cell}))):t]}),[t,m]),z=(0,l.FR)((0,l.MS)(l.cA,{activationConstraint:{distance:8}}),(0,l.MS)(l.IG,{activationConstraint:{delay:200,tolerance:5}}),(0,l.MS)(l.uN,{})),M=(0,n.N4)({data:D,columns:T,state:{rowSelection:y,columnOrder:O,columnPinning:k},onRowSelectionChange:S,onColumnOrderChange:E,getCoreRowModel:(0,o.HT)(),getSortedRowModel:(0,o.h5)(),enableRowSelection:!0,defaultColumn:{size:159,minSize:45,maxSize:500},columnResizeMode:"onChange"});(0,r.useEffect)((()=>{const e=M.getSelectedRowModel().flatRows.map((e=>e.original));v((0,p.dT)(e))}),[y,v]);const _=(0,r.useMemo)((()=>{const e=M.getFlatHeaders(),t={};for(let a=0;a<e.length;a++){const s=e[a];t["--header-".concat(s.id,"-size")]=s.getSize(),t["--col-".concat(s.column.id,"-size")]=s.column.getSize()}return t}),[M.getState().columnSizingInfo,M.getState().columnSizing]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"toolkit my-3",children:(0,h.jsx)("div",{className:"d-flex justify-content-end button-container",children:(0,h.jsxs)("div",{className:"d-flex",children:[(0,h.jsx)(u.A,{variant:"outline-primary",size:"lg",onClick:()=>{M.getToggleAllRowsSelectedHandler()({target:{checked:!0}})},className:"m-2",text:"Select All"}),(0,h.jsx)(u.A,{variant:"outline-secondary",size:"lg",onClick:()=>{M.getToggleAllRowsSelectedHandler()({target:{checked:!1}})},className:"m-2",text:"Deselect  All"}),(0,h.jsx)(u.A,{variant:"outline-success",size:"lg",onClick:()=>{console.log("Export buttton clicked"),"Revision_FLoat_Widget"===j?(0,g.E1)(a,"Where Used Details.xlsx"):"Plantassignment"===j&&(0,g.E1)(a,"EAN_Manufacturing.xlsx")},className:"m-2 border-bottom-10px",text:"Export to CSV "}),(0,h.jsx)(u.A,{variant:"outline-warning",size:"lg",onClick:()=>{E(P),localStorage.removeItem("tableColumnOrder")},className:"m-2",text:"Reset Columns"})]})})}),(0,h.jsx)("div",{className:"table-info",children:(0,h.jsxs)("p",{children:[D.length," Items"]})}),(0,h.jsx)(l.Mp,{sensors:z,collisionDetection:l.fp,modifiers:[i.dU],onDragEnd:e=>{const{active:t,over:a}=e;t&&a&&t.id!==a.id&&"selection"!==t.id&&"EIN"!==t.id&&E((e=>{const s=e.indexOf(t.id),r=e.indexOf(a.id);return(0,c.be)(e,s,r)}))},children:(0,h.jsx)("div",{ref:N,className:"table-responsive ".concat(R?"is-scrolled":""),children:(0,h.jsxs)("table",{className:"table custom-table table-hover",style:(0,s.A)((0,s.A)({},_),{},{width:M.getTotalSize()}),children:[(0,h.jsx)("thead",{children:M.getHeaderGroups().map((e=>(0,h.jsx)("tr",{children:(0,h.jsx)(c.gB,{items:M.getVisibleLeafColumns().map((e=>e.id)),strategy:c.m$,children:e.headers.map((e=>(0,h.jsx)(x,{header:e,columns:t,table:M},e.id)))})},e.id)))}),(0,h.jsx)("tbody",{children:M.getRowModel().rows.length>0&&M.getRowModel().rows.map((e=>(0,h.jsx)("tr",{onClick:t=>((e,t)=>{const{rows:a,rowsById:s}=M.getRowModel();if(t.shiftKey&&A)try{const t=(0,g.EC)(a,e.id,A),r=s[A].getIsSelected();t.forEach((e=>e.toggleSelected(r)))}catch(r){console.error("Multi-select with shift+click failed:",r)}else e.toggleSelected(!e.getIsSelected());C(e.id)})(e,t),className:y[e.id]?"row-selected":"",children:(0,h.jsx)(c.gB,{items:M.getVisibleLeafColumns().map((e=>e.id)),strategy:c.m$,children:e.getVisibleCells().map((e=>(0,h.jsx)(f,{cell:e,columns:t},e.id)))})},e.id)))})]})})})]})}},8012:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(5043),r=a(3003),n=a(5645),o=a(360),l=a(314),i=a(2725),c=a(3277);const d=()=>{const{showErrorToast:e}=(0,i.A)(),{fetchRevisionsAndParents:t}=(0,o.A)(),[a,d]=(0,s.useState)(!1),u=(0,r.wA)(),p=(0,s.useCallback)((async a=>{try{const o=await(0,l.Sj)({dataItems:a});if(o.success){var s,r;const e=o.data.cardData.relativePath,[l]=await Promise.all([t(null===(s=a[0])||void 0===s?void 0:s.objectId,null===(r=a[0])||void 0===r?void 0:r.objectType,e)]);u((0,n.um)({cardData:o.data.cardData,parentDetails:l||[]})),console.log("[fetchObjectDetails] \u2705 Redux store updated.")}else e(c.wX)}catch(o){console.error("[FetchObjectDetails] Error fetching details:",o),e(c.wX)}finally{d(!1)}}),[u,t,e]),g=(0,s.useCallback)((async t=>{console.log("[handleDrop] handleDrop called with dataItems:",t);try{if(t&&t.length>0){var a;const s=null===(a=t[0])||void 0===a?void 0:a.objectType;if(!["VPMReference","Document","Raw_Material"].includes(s))return void e(c.Zo);u((0,n.Rr)(!0)),d(!0),await p(t)}else console.warn("[handleDrop] No data items to process.")}catch(s){console.error("[Drop] Error in handleDrop:",s),d(!1),console.log("[handleDrop] Error in handleDrop, setting loading to false"),e(c.nz)}}),[p,e]);return{initializeDroppableArea:(0,s.useCallback)((()=>{u((0,n.Rr)(!1));const t=setInterval((()=>{const a=document.querySelector(".droppable-container");a&&(clearInterval(t),(0,l.pn)(a,g,u,e))}),100);return()=>clearInterval(t)}),[g,u]),loading:a,handleDrop:g}}},360:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(2725),r=a(3862),n=a(3277);const o=()=>{const{showSuccessToast:e,showErrorToast:t}=(0,s.A)();return{fetchRevisionsAndParents:async(e,t,a)=>{if(!a)return void console.error("[Fetch Revisions] \u274c Missing relative path.");try{const s=await r.A.post("/revFloat/getParents",{data:{id:e,type:t,relativePath:a}});if(200===s.status){return s.data}throw new Error("[Fetch Revisions] HTTP error! status: ".concat(s.status))}catch(s){return console.error("[Fetch Revisions] \u274c Error occurred:",s),null}},replaceRevisions:async(a,s,o)=>{try{const t=await r.A.post("/revFloat/floatRevisions",{SelectedParents:a,DroppedData:s,userEmail:o});if(200===t.status)return console.log("Replacement successful:",t.data),e(n.hG),{success:!0};throw new Error("[Replacement API] HTTP error! status: ".concat(t.status))}catch(l){return console.error("Error during replacement:",l),t(n.mK),{success:!1,error:l.message}}}}}},2725:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(9379),r=a(45),n=a(2115);const o=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],l=()=>{const e=e=>{let{message:t,type:a="default",position:l="top-right",autoClose:i=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:p=!1,draggable:g=!0,theme:m="light",transition:h=n.br}=e,x=(0,r.A)(e,o);(n.oR[a]||n.oR)(t,(0,s.A)({position:l,autoClose:i,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:g,theme:m,transition:h},x))};return{showToast:e,showSuccessToast:function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"success"},a))},showErrorToast:function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"error"},a))},showInfoToast:function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"info"},a))},showWarningToast:function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"warn"},a))}}}},314:(e,t,a)=>{a.d(t,{Sj:()=>c,WP:()=>d,pn:()=>i});var s=a(6047),r=a(5645),n=a(3862),o=a(3277),l=a(2670);const i=(e,t,a,s)=>{console.log("[initializeDroppableArea] \ud83d\ude80 Running..."),window.require(["DS/DataDragAndDrop/DataDragAndDrop"],(n=>{n.droppable(e,{drop:n=>{console.log("[DragAndDrop] Drop event:",n);const i=JSON.parse(n),c=i.data.items;if(c.length>1)return s(o.jL),void e.classList.remove("drag-over");const d=l.A.getState().droppedObject.initialDraggedData;JSON.stringify(d)===JSON.stringify(i)?console.log("[initializeDroppableArea] Data unchanged. Skipping dispatch."):a((0,r.AK)({initialDraggedData:i})),t(c),e.classList.remove("drag-over")},enter:()=>{e.classList.add("drag-over")},out:()=>{e.classList.remove("drag-over")},leave:()=>{e.classList.remove("drag-over")}})}))},c=async e=>{let{dataItems:t}=e;try{var a,s;if(!t||0===t.length)return void console.error("[Object Details] No items to fetch.");const e=null===(a=t[0])||void 0===a?void 0:a.objectId,r=null===(s=t[0])||void 0===s?void 0:s.objectType;if(!e||!r)throw new Error("[Object Details] Missing or invalid object ID or type");const o="/revFloat/getDroppedObjectDetails?oid=".concat(e,"&type=").concat(r),l=await n.A.get(o);if(200===l.status)return{success:!0,data:{cardData:l.data}};throw new Error("[Object Details] HTTP error! status: ".concat(l.status))}catch(r){return console.error("[Object Details] Failed to fetch data:",r),{success:!1,error:r.message}}},d=async()=>{let e="",t={name:"Credentials",type:"list",label:"Credentials",options:[],defaultValue:""},a=await(0,s.uO)("GET","https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/modeler/pno/person?current=true&select=collabspaces&select=preferredcredentials&select=email","");if(a.status){if(a.output.collabspaces&&a.output.collabspaces.forEach((e=>{let a=e.name.trim();e.couples.forEach((e=>{const s=e.role.name+"."+e.organization.name+"."+a,r=a.replace("MSOL-","")+" \u25cf "+e.organization.title+" \u25cf "+e.role.nls;t.options.push({value:s,label:r})}))})),a.output.preferredcredentials){const e=a.output.preferredcredentials,s="".concat(e.role.name,".").concat(e.organization.name,".").concat(e.collabspace.name);t.defaultValue=s}a.output.email&&(e=a.output.email)}return{securitycontextpreference:t,email:e}}},174:(e,t,a)=>{a.d(t,{M:()=>s});const s=async(e,t)=>{if(console.log("[refreshWidgetData] called with dataItems:",e),e&&0!==e.length)try{if("function"!==typeof t)throw new Error("[Refresh] handleDrop is not a function.");await t(e)}catch(a){console.error("[Refresh] Error during handleDrop execution:",a)}else console.warn("[Refresh] No dropped data available to refresh.")}},5645:(e,t,a)=>{a.d(t,{AK:()=>n,Ay:()=>h,Lq:()=>l,Rr:()=>p,VG:()=>i,Ve:()=>u,aB:()=>m,dT:()=>g,lL:()=>d,ug:()=>c,um:()=>o});var s=a(9379);const r=(0,a(830).Z0)({name:"droppedObject",initialState:{droppedObjectData:{initialDraggedData:[],cardData:{},versions:[],parentDetails:[],ownerData:{}},plantObjectData:{allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{},proposedChanges:[]},loadingParentDetails:!1,isDropped:!1,selectedTableRows:[]},reducers:{setInitialDroppedObjectData:(e,t)=>{e.droppedObjectData.initialDraggedData=t.payload.initialDraggedData},setDroppedObjectData:(e,t)=>{e.droppedObjectData=(0,s.A)((0,s.A)({},e.droppedObjectData),t.payload)},setPlantObjectData:(e,t)=>{e.plantObjectData=(0,s.A)((0,s.A)({},e.plantObjectData),t.payload)},setProductChildren:(e,t)=>{e.plantObjectData.productChildren=t.payload},setProposedChanges:(e,t)=>{e.plantObjectData.proposedChanges=t.payload},setHeaders:(e,t)=>{e.plantObjectData.headers=t.payload},setCAName:(e,t)=>{e.plantObjectData.CAName=t.payload},setParentDetailsLoading:(e,t)=>{e.loadingParentDetails=t.payload},setIsDropped:(e,t)=>{e.isDropped=t.payload},setSelectedTableRows:(e,t)=>{e.selectedTableRows=t.payload}}}),{setInitialDroppedObjectData:n,setDroppedObjectData:o,setPlantObjectData:l,setProductChildren:i,setCAName:c,setHeaders:d,setParentDetailsLoading:u,setIsDropped:p,setSelectedTableRows:g,setProposedChanges:m}=r.actions,h=r.reducer},2670:(e,t,a)=>{a.d(t,{A:()=>n});var s=a(830),r=(a(3617),a(5645));const n=(0,s.U1)({reducer:{droppedObject:r.Ay}})},3862:(e,t,a)=>{a.d(t,{A:()=>s});const s=a(9722).A.create({baseURL:"https://emr-product-datahub-server-sap-stage.azurewebsites.net",headers:{"Content-Type":"application/json"}})},6047:(e,t,a)=>{a.d(t,{E1:()=>d,EC:()=>u,_3:()=>o,eB:()=>i,fV:()=>r,qZ:()=>n,uO:()=>l});var s=a(1238);const r=async()=>await new Promise(((e,t)=>{window.require(["DS/WAFData/WAFData"],(t=>{e(t)}),t)})),n=async()=>await new Promise(((e,t)=>{window.require(["UWA/Utils/InterCom"],(t=>{e(t)}),(e=>{console.error("Error loading InterCom module:",e),t(e)}))})),o=()=>new Promise(((e,t)=>{window.require(["DS/PlatformAPI/PlatformAPI"],(a=>{a?e(a):t(new Error("Failed to load PlatformAPI"))}),t)})),l=async(e,t,a)=>{let s={};(await r()).authenticatedRequest(t,{method:e,data:a,type:"json",async:!1,onComplete:function(e){s.status=!0,s.output=e,console.log("kp--CallWebService--- >> ",e)},onFailure:function(e,t,a){console.log("Failedddddd",e.message),s.status=!1,console.log(a),widget.body.innerHTML+="<p>Something Went Wrong"+e+"</p>"}});return s},i=(e,t,a,s)=>{window.require(["DS/DataDragAndDrop/DataDragAndDrop"],(r=>{r&&r.draggable(e,{data:JSON.stringify(t),start:function(){a&&a()},stop:function(){console.log("Drag End"),s&&s()}})}))},c=["Dropped Revision ID"],d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"table-data.xlsx";const a=e.map((e=>Object.keys(e).filter((e=>!c.includes(e))).reduce(((t,a)=>(t[a]=e[a],t)),{})));console.log("Filtered Data for Excel Export:",a);const r=s.Wp.json_to_sheet(a),n=Object.keys(a[0]||{}).map((e=>({wch:Math.max(e.length,...a.map((t=>t[e]?t[e].toString().length:0)))||10})));r["!cols"]=n;const o=s.Wp.decode_range(r["!ref"]);for(let i=o.s.r;i<=o.e.r;i++)for(let e=o.s.c;e<=o.e.c;e++){const t=r[s.Wp.encode_cell({r:i,c:e})];t&&(t.s={alignment:{wrapText:!0}})}const l=s.Wp.book_new();s.Wp.book_append_sheet(l,r,"Table Data"),s._h(l,t)},u=(e,t,a)=>{const s=[];let r=!1,n=!1;for(let o=0;o<e.length;o+=1){const l=e[o];if(l.id!==t&&l.id!==a||(r&&(n=!0),r||(r=!0)),r&&s.push(l),n)break}if(!n)throw new Error("Could not find whole row range");return s}},3277:(e,t,a)=>{a.d(t,{EZ:()=>u,H6:()=>l,KF:()=>g,M9:()=>x,Ru:()=>d,Zo:()=>b,_l:()=>o,e1:()=>i,hG:()=>m,jL:()=>j,mK:()=>h,nX:()=>p,nm:()=>f,nz:()=>n,rK:()=>s,sL:()=>c,wX:()=>r});const s="Failed to fetch CSRF headers. Please try again.",r="Failed to fetch object details.",n="An unexpected error occurred. Please try again.",o="Widget data refreshed successfully!",l="An error occurred during refresh.",i="Please select any one Plant",c="Change Action is required to assign plants to Product, please assign Modify change Action and try again",d="Change Action is required to assign plants to Product, please assign change Action and try again",u="Change Action is required to update plants, please assign Modify change Action and try again",p="Change Action is required to update, please assign change Action and try again",g="Data Saved Successfully",m="Replacement successful, Please wait for the data to index",h="An error occurred during replacement",x="No rows selected.",f="Latest Revision already connected to selected parents",b="Please select a Physical Product, Document or Raw Material",j="Multiple objects dropped. Please drop only one object."},4050:()=>{},4119:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=17.ba0a1bcb.chunk.js.map