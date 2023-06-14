import{B as q,ao as W,d as z,a8 as A,K as N,o as c,c as P,t as M,q as $,w as G,ap as X,O as n,ad as Z,S as j,J as re,an as ee,aY as ae,bD as ne,N as L,r as x,a2 as V,bl as oe,b as te,F as se,A as ie,az as ue,aA as ce,Q as k,a as R,j as ge,bE as pe,s as O,bw as de,bF as Q,bx as fe,v as be,by as ve,$ as me,a3 as Pe,bG as B,G as I,b4 as Ce,b5 as he,a4 as ye}from"./index-760fc3c0.js";const le=Symbol("elPaginationKey"),ze=q({disabled:Boolean,currentPage:{type:Number,default:1},prevText:{type:String},prevIcon:{type:W}}),ke={click:e=>e instanceof MouseEvent},_e=["disabled","aria-label","aria-disabled"],Se={key:0},Ne=z({name:"ElPaginationPrev"}),xe=z({...Ne,props:ze,emits:ke,setup(e){const r=e,{t:i}=A(),g=N(()=>r.disabled||r.currentPage<=1);return(l,o)=>(c(),P("button",{type:"button",class:"btn-prev",disabled:n(g),"aria-label":l.prevText||n(i)("el.pagination.prev"),"aria-disabled":n(g),onClick:o[0]||(o[0]=f=>l.$emit("click",f))},[l.prevText?(c(),P("span",Se,M(l.prevText),1)):(c(),$(n(Z),{key:1},{default:G(()=>[(c(),$(X(l.prevIcon)))]),_:1}))],8,_e))}});var we=j(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);const Ee=q({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50},nextText:{type:String},nextIcon:{type:W}}),$e=["disabled","aria-label","aria-disabled"],Te={key:0},Be=z({name:"ElPaginationNext"}),Ie=z({...Be,props:Ee,emits:["click"],setup(e){const r=e,{t:i}=A(),g=N(()=>r.disabled||r.currentPage===r.pageCount||r.pageCount===0);return(l,o)=>(c(),P("button",{type:"button",class:"btn-next",disabled:n(g),"aria-label":l.nextText||n(i)("el.pagination.next"),"aria-disabled":n(g),onClick:o[0]||(o[0]=f=>l.$emit("click",f))},[l.nextText?(c(),P("span",Te,M(l.nextText),1)):(c(),$(n(Z),{key:1},{default:G(()=>[(c(),$(X(l.nextIcon)))]),_:1}))],8,$e))}});var Me=j(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);const H=()=>re(le,{}),qe=q({pageSize:{type:Number,required:!0},pageSizes:{type:ee(Array),default:()=>ae([10,20,30,40,50,100])},popperClass:{type:String},disabled:Boolean,size:{type:String,values:ne}}),Ae=z({name:"ElPaginationSizes"}),Le=z({...Ae,props:qe,emits:["page-size-change"],setup(e,{emit:r}){const i=e,{t:g}=A(),l=L("pagination"),o=H(),f=x(i.pageSize);V(()=>i.pageSizes,(p,C)=>{if(!oe(p,C)&&Array.isArray(p)){const u=p.includes(i.pageSize)?i.pageSize:i.pageSizes[0];r("page-size-change",u)}}),V(()=>i.pageSize,p=>{f.value=p});const y=N(()=>i.pageSizes);function w(p){var C;p!==f.value&&(f.value=p,(C=o.handleSizeChange)==null||C.call(o,Number(p)))}return(p,C)=>(c(),P("span",{class:k(n(l).e("sizes"))},[te(n(ce),{"model-value":f.value,disabled:p.disabled,"popper-class":p.popperClass,size:p.size,"validate-event":!1,onChange:w},{default:G(()=>[(c(!0),P(se,null,ie(n(y),u=>(c(),$(n(ue),{key:u,value:u,label:u+n(g)("el.pagination.pagesize")},null,8,["value","label"]))),128))]),_:1},8,["model-value","disabled","popper-class","size"])],2))}});var je=j(Le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);const Fe=q({size:{type:String,values:ne}}),Ke=["disabled"],Ue=z({name:"ElPaginationJumper"}),De=z({...Ue,props:Fe,setup(e){const{t:r}=A(),i=L("pagination"),{pageCount:g,disabled:l,currentPage:o,changeEvent:f}=H(),y=x(),w=N(()=>{var u;return(u=y.value)!=null?u:o==null?void 0:o.value});function p(u){y.value=u?+u:""}function C(u){u=Math.trunc(+u),f==null||f(u),y.value=void 0}return(u,_)=>(c(),P("span",{class:k(n(i).e("jump")),disabled:n(l)},[R("span",{class:k([n(i).e("goto")])},M(n(r)("el.pagination.goto")),3),te(n(ge),{size:u.size,class:k([n(i).e("editor"),n(i).is("in-pagination")]),min:1,max:n(g),disabled:n(l),"model-value":n(w),"validate-event":!1,label:n(r)("el.pagination.page"),type:"number","onUpdate:modelValue":p,onChange:C},null,8,["size","class","max","disabled","model-value","label"]),R("span",{class:k([n(i).e("classifier")])},M(n(r)("el.pagination.pageClassifier")),3)],10,Ke))}});var Oe=j(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);const We=q({total:{type:Number,default:1e3}}),Je=["disabled"],Ve=z({name:"ElPaginationTotal"}),Ge=z({...Ve,props:We,setup(e){const{t:r}=A(),i=L("pagination"),{disabled:g}=H();return(l,o)=>(c(),P("span",{class:k(n(i).e("total")),disabled:n(g)},M(n(r)("el.pagination.total",{total:l.total})),11,Je))}});var He=j(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);const Re=q({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),Qe=["onKeyup"],Ye=["aria-current","aria-label","tabindex"],Xe=["tabindex","aria-label"],Ze=["aria-current","aria-label","tabindex"],ea=["tabindex","aria-label"],aa=["aria-current","aria-label","tabindex"],na=z({name:"ElPaginationPager"}),ta=z({...na,props:Re,emits:["change"],setup(e,{emit:r}){const i=e,g=L("pager"),l=L("icon"),{t:o}=A(),f=x(!1),y=x(!1),w=x(!1),p=x(!1),C=x(!1),u=x(!1),_=N(()=>{const t=i.pagerCount,a=(t-1)/2,s=Number(i.currentPage),b=Number(i.pageCount);let v=!1,E=!1;b>t&&(s>t-a&&(v=!0),s<b-a&&(E=!0));const T=[];if(v&&!E){const h=b-(t-2);for(let S=h;S<b;S++)T.push(S)}else if(!v&&E)for(let h=2;h<t;h++)T.push(h);else if(v&&E){const h=Math.floor(t/2)-1;for(let S=s-h;S<=s+h;S++)T.push(S)}else for(let h=2;h<b;h++)T.push(h);return T}),d=N(()=>i.disabled?-1:0);pe(()=>{const t=(i.pagerCount-1)/2;f.value=!1,y.value=!1,i.pageCount>i.pagerCount&&(i.currentPage>i.pagerCount-t&&(f.value=!0),i.currentPage<i.pageCount-t&&(y.value=!0))});function F(t=!1){i.disabled||(t?w.value=!0:p.value=!0)}function U(t=!1){t?C.value=!0:u.value=!0}function J(t){const a=t.target;if(a.tagName.toLowerCase()==="li"&&Array.from(a.classList).includes("number")){const s=Number(a.textContent);s!==i.currentPage&&r("change",s)}else a.tagName.toLowerCase()==="li"&&Array.from(a.classList).includes("more")&&D(t)}function D(t){const a=t.target;if(a.tagName.toLowerCase()==="ul"||i.disabled)return;let s=Number(a.textContent);const b=i.pageCount,v=i.currentPage,E=i.pagerCount-2;a.className.includes("more")&&(a.className.includes("quickprev")?s=v-E:a.className.includes("quicknext")&&(s=v+E)),Number.isNaN(+s)||(s<1&&(s=1),s>b&&(s=b)),s!==v&&r("change",s)}return(t,a)=>(c(),P("ul",{class:k(n(g).b()),onClick:D,onKeyup:be(J,["enter"])},[t.pageCount>0?(c(),P("li",{key:0,class:k([[n(g).is("active",t.currentPage===1),n(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===1,"aria-label":n(o)("el.pagination.currentPage",{pager:1}),tabindex:n(d)}," 1 ",10,Ye)):O("v-if",!0),f.value?(c(),P("li",{key:1,class:k(["more","btn-quickprev",n(l).b(),n(g).is("disabled",t.disabled)]),tabindex:n(d),"aria-label":n(o)("el.pagination.prevPages",{pager:t.pagerCount-2}),onMouseenter:a[0]||(a[0]=s=>F(!0)),onMouseleave:a[1]||(a[1]=s=>w.value=!1),onFocus:a[2]||(a[2]=s=>U(!0)),onBlur:a[3]||(a[3]=s=>C.value=!1)},[(w.value||C.value)&&!t.disabled?(c(),$(n(de),{key:0})):(c(),$(n(Q),{key:1}))],42,Xe)):O("v-if",!0),(c(!0),P(se,null,ie(n(_),s=>(c(),P("li",{key:s,class:k([[n(g).is("active",t.currentPage===s),n(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===s,"aria-label":n(o)("el.pagination.currentPage",{pager:s}),tabindex:n(d)},M(s),11,Ze))),128)),y.value?(c(),P("li",{key:2,class:k(["more","btn-quicknext",n(l).b(),n(g).is("disabled",t.disabled)]),tabindex:n(d),"aria-label":n(o)("el.pagination.nextPages",{pager:t.pagerCount-2}),onMouseenter:a[4]||(a[4]=s=>F()),onMouseleave:a[5]||(a[5]=s=>p.value=!1),onFocus:a[6]||(a[6]=s=>U()),onBlur:a[7]||(a[7]=s=>u.value=!1)},[(p.value||u.value)&&!t.disabled?(c(),$(n(fe),{key:0})):(c(),$(n(Q),{key:1}))],42,ea)):O("v-if",!0),t.pageCount>1?(c(),P("li",{key:3,class:k([[n(g).is("active",t.currentPage===t.pageCount),n(g).is("disabled",t.disabled)],"number"]),"aria-current":t.currentPage===t.pageCount,"aria-label":n(o)("el.pagination.currentPage",{pager:t.pageCount}),tabindex:n(d)},M(t.pageCount),11,aa)):O("v-if",!0)],42,Qe))}});var sa=j(ta,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);const m=e=>typeof e!="number",ia=q({total:Number,pageSize:Number,defaultPageSize:Number,currentPage:Number,defaultCurrentPage:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>I(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2===1,default:7},layout:{type:String,default:["prev","pager","next","jumper","->","total"].join(", ")},pageSizes:{type:ee(Array),default:()=>ae([10,20,30,40,50,100])},popperClass:{type:String,default:""},prevText:{type:String,default:""},prevIcon:{type:W,default:()=>Ce},nextText:{type:String,default:""},nextIcon:{type:W,default:()=>he},small:Boolean,background:Boolean,disabled:Boolean,hideOnSinglePage:Boolean}),la={"update:current-page":e=>I(e),"update:page-size":e=>I(e),"size-change":e=>I(e),"current-change":e=>I(e),"prev-click":e=>I(e),"next-click":e=>I(e)},Y="ElPagination";var ra=z({name:Y,props:ia,emits:la,setup(e,{emit:r,slots:i}){const{t:g}=A(),l=L("pagination"),o=ve().vnode.props||{},f="onUpdate:currentPage"in o||"onUpdate:current-page"in o||"onCurrentChange"in o,y="onUpdate:pageSize"in o||"onUpdate:page-size"in o||"onSizeChange"in o,w=N(()=>{if(m(e.total)&&m(e.pageCount)||!m(e.currentPage)&&!f)return!1;if(e.layout.includes("sizes")){if(m(e.pageCount)){if(!m(e.total)&&!m(e.pageSize)&&!y)return!1}else if(!y)return!1}return!0}),p=x(m(e.defaultPageSize)?10:e.defaultPageSize),C=x(m(e.defaultCurrentPage)?1:e.defaultCurrentPage),u=N({get(){return m(e.pageSize)?p.value:e.pageSize},set(a){m(e.pageSize)&&(p.value=a),y&&(r("update:page-size",a),r("size-change",a))}}),_=N(()=>{let a=0;return m(e.pageCount)?m(e.total)||(a=Math.max(1,Math.ceil(e.total/u.value))):a=e.pageCount,a}),d=N({get(){return m(e.currentPage)?C.value:e.currentPage},set(a){let s=a;a<1?s=1:a>_.value&&(s=_.value),m(e.currentPage)&&(C.value=s),f&&(r("update:current-page",s),r("current-change",s))}});V(_,a=>{d.value>a&&(d.value=a)});function F(a){d.value=a}function U(a){u.value=a;const s=_.value;d.value>s&&(d.value=s)}function J(){e.disabled||(d.value-=1,r("prev-click",d.value))}function D(){e.disabled||(d.value+=1,r("next-click",d.value))}function t(a,s){a&&(a.props||(a.props={}),a.props.class=[a.props.class,s].join(" "))}return me(le,{pageCount:_,disabled:N(()=>e.disabled),currentPage:d,changeEvent:F,handleSizeChange:U}),()=>{var a,s;if(!w.value)return Pe(Y,g("el.pagination.deprecationWarning")),null;if(!e.layout||e.hideOnSinglePage&&_.value<=1)return null;const b=[],v=[],E=B("div",{class:l.e("rightwrapper")},v),T={prev:B(we,{disabled:e.disabled,currentPage:d.value,prevText:e.prevText,prevIcon:e.prevIcon,onClick:J}),jumper:B(Oe,{size:e.small?"small":"default"}),pager:B(sa,{currentPage:d.value,pageCount:_.value,pagerCount:e.pagerCount,onChange:F,disabled:e.disabled}),next:B(Me,{disabled:e.disabled,currentPage:d.value,pageCount:_.value,nextText:e.nextText,nextIcon:e.nextIcon,onClick:D}),sizes:B(je,{pageSize:u.value,pageSizes:e.pageSizes,popperClass:e.popperClass,disabled:e.disabled,size:e.small?"small":"default"}),slot:(s=(a=i==null?void 0:i.default)==null?void 0:a.call(i))!=null?s:null,total:B(He,{total:m(e.total)?0:e.total})},h=e.layout.split(",").map(K=>K.trim());let S=!1;return h.forEach(K=>{if(K==="->"){S=!0;return}S?v.push(T[K]):b.push(T[K])}),t(b[0],l.is("first")),t(b[b.length-1],l.is("last")),S&&v.length>0&&(t(v[0],l.is("first")),t(v[v.length-1],l.is("last")),b.push(E)),B("div",{class:[l.b(),l.is("background",e.background),{[l.m("small")]:e.small}]},b)}}});const ua=ye(ra);export{ua as E};
