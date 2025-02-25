"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[388],{3728:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(9379),l=a(45),i=(a(5043),a(4282)),d=a(579);const o=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],s=e=>{let{variant:t="primary",size:a="md",type:s="button",disabled:r=!1,onClick:c,className:p="",title:h,text:j,imageSrc:g}=e,m=(0,l.A)(e,o);return(0,d.jsxs)(i.A,(0,n.A)((0,n.A)({variant:t,size:a,type:s,disabled:r,onClick:c,className:p,title:h},m),{},{children:[g&&(0,d.jsx)("img",{src:g,alt:j,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",j]}))}},388:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(5043),l=a(4391),i=(a(2342),a(9555),a(3003)),d=a(2670),o=a(2115),s=(a(8421),a(4050),a(9959),a(2327)),r=a(6691),c=a(2691),p=a(3728),h=a(7680),j=a(579);const g=e=>{let{fileTypes:t=["JPEG","PNG","GIF","XLSX","CSV"],multiple:a=!0,onUpload:l}=e;const[i,d]=(0,n.useState)([]);return(0,j.jsxs)("div",{className:"file-upload-container",children:[(0,j.jsx)("h2",{children:"Drag & Drop Files"}),(0,j.jsxs)("div",{className:"upload-area",children:[(0,j.jsx)(h.l,{multiple:a,handleChange:e=>{const t=a?[...e]:[e];d(t),l&&l(t)},name:"file",types:t}),(0,j.jsx)("div",{className:"file-list",children:i.length>0?i.map(((e,t)=>(0,j.jsxs)("p",{children:["\ud83d\udcc1 ",e.name]},t))):(0,j.jsx)("p",{children:"No files uploaded yet."})})]})]})};var m=a(1067),u=a(4282);const b=e=>{let{show:t,onHide:a,title:n,children:l,footerButtons:i}=e;return(0,j.jsxs)(m.A,{show:t,onHide:a,size:"lg",centered:!0,children:[(0,j.jsx)(m.A.Header,{closeButton:!0,children:(0,j.jsx)(m.A.Title,{children:n||"Modal Title"})}),(0,j.jsx)(m.A.Body,{children:l}),(0,j.jsx)(m.A.Footer,{children:i?i.map(((e,t)=>(0,j.jsx)(u.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,j.jsx)(u.A,{variant:"secondary",onClick:a,children:"Close"})})]})},x=()=>{const[e,t]=(0,n.useState)(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(s.A,{className:"mt-3",gap:4,children:[(0,j.jsxs)(s.A,{direction:"horizontal",children:[(0,j.jsxs)(r.A,{children:[(0,j.jsx)(r.A.Toggle,{variant:"outline-primary btn-lg",id:"dropdown-basic",children:"Choose Operations"}),(0,j.jsxs)(r.A.Menu,{children:[(0,j.jsx)(r.A.Item,{href:"#/action-1",children:"Action"}),(0,j.jsx)(r.A.Item,{href:"#/action-2",children:"Another action"}),(0,j.jsx)(r.A.Item,{href:"#/action-3",children:"Something else"})]})]}),(0,j.jsx)(p.A,{variant:"link ms-auto btn-lg",text:"Downlad Template"})]}),(0,j.jsx)(g,{fileTypes:["XLSX"],multiple:!1,onUpload:e=>{console.log("Uploaded files:",e)}}),(0,j.jsxs)(s.A,{direction:"horizontal",children:[(0,j.jsx)(c.A.Check,{type:"checkbox",label:"background"}),(0,j.jsx)(p.A,{variant:"primary ms-auto btn-lg",onClick:()=>t(!0),text:"Submit"})]})]}),(0,j.jsx)(b,{show:e,onHide:()=>t(!1),title:"Custom Modal Title",footerButtons:[{label:"Cancel",variant:"danger",onClick:()=>t(!1)},{label:"Confirm",variant:"success",onClick:()=>alert("Confirmed!")}],children:(0,j.jsx)("p",{children:"This is a reusable modal component with dynamic content."})})]})};let A=null;function D(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let a=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");a||(a=document.createElement("div"),a.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(a):document.body.appendChild(a)),A||(A=l.createRoot(a)),A.render((0,j.jsxs)(i.Kq,{store:d.A,children:[(0,j.jsx)(x,{}),(0,j.jsx)(o.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},5645:(e,t,a)=>{a.d(t,{AK:()=>i,Ay:()=>u,Lq:()=>o,Rr:()=>h,VG:()=>s,Ve:()=>p,aB:()=>m,dT:()=>g,lL:()=>c,r1:()=>j,ug:()=>r,um:()=>d});var n=a(9379);const l=(0,a(830).Z0)({name:"droppedObject",initialState:{droppedObjectData:{initialDraggedData:[],cardData:{},versions:[],parentDetails:[],ownerData:{}},plantObjectData:{allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{},proposedChanges:[]},loadingParentDetails:!1,isDropped:!1,loading:!1,selectedTableRows:[]},reducers:{setInitialDroppedObjectData:(e,t)=>{e.droppedObjectData.initialDraggedData=t.payload.initialDraggedData},setDroppedObjectData:(e,t)=>{e.droppedObjectData=(0,n.A)((0,n.A)({},e.droppedObjectData),t.payload)},setPlantObjectData:(e,t)=>{e.plantObjectData=(0,n.A)((0,n.A)({},e.plantObjectData),t.payload)},setProductChildren:(e,t)=>{e.plantObjectData.productChildren=t.payload},setProposedChanges:(e,t)=>{e.plantObjectData.proposedChanges=t.payload},setHeaders:(e,t)=>{e.plantObjectData.headers=t.payload},setCAName:(e,t)=>{e.plantObjectData.CAName=t.payload},setParentDetailsLoading:(e,t)=>{e.loadingParentDetails=t.payload},setIsDropped:(e,t)=>{e.isDropped=t.payload},setLoading:(e,t)=>{e.loading=t.payload},setSelectedTableRows:(e,t)=>{e.selectedTableRows=t.payload}}}),{setInitialDroppedObjectData:i,setDroppedObjectData:d,setPlantObjectData:o,setProductChildren:s,setCAName:r,setHeaders:c,setParentDetailsLoading:p,setIsDropped:h,setLoading:j,setSelectedTableRows:g,setProposedChanges:m}=l.actions,u=l.reducer},2670:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(830),l=(a(3617),a(5645));const i=(0,n.U1)({reducer:{droppedObject:l.Ay}})},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=388.5c1a92c0.chunk.js.map