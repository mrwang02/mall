import{aO as V,aW as ye,aX as he,B as de,an as le,aY as fe,G as ue,d as Q,aZ as ce,a_ as ke,a$ as Ie,a8 as ve,N as me,b0 as _e,r as y,b1 as ze,b2 as Le,K as h,a2 as oe,T as pe,Z as ge,o as g,q as re,b as u,w as I,a as p,Q as c,O as t,V as ie,R as Ce,s as _,ad as T,b3 as Ee,c as S,F as U,b4 as Oe,b5 as Se,b6 as Ne,b7 as Te,ap as xe,b8 as Re,b9 as $e,A as Ae,x as Be,ah as Ve,p as K,aM as Me,ba as Ye,S as we,bb as M,aC as B,bc as Xe,a4 as be,bd as De,be as Fe,t as He,at as Pe,aU as We,D as Ze,bf as je,bg as qe}from"./index-760fc3c0.js";const Ge=(r,d)=>{if(!V||!r||!d)return!1;const l=r.getBoundingClientRect();let n;return d instanceof Element?n=d.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<n.bottom&&l.bottom>n.top&&l.right>n.left&&l.left<n.right};var Ke="Expected a function";function se(r,d,l){var n=!0,w=!0;if(typeof r!="function")throw new TypeError(Ke);return ye(l)&&(n="leading"in l?!!l.leading:n,w="trailing"in l?!!l.trailing:w),he(r,d,{leading:n,maxWait:d,trailing:w})}const Ue=de({urlList:{type:le(Array),default:()=>fe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Qe={close:()=>!0,switch:r=>ue(r)},Je=["src"],et=Q({name:"ElImageViewer"}),tt=Q({...et,props:Ue,emits:Qe,setup(r,{expose:d,emit:l}){const n=r,w={CONTAIN:{name:"contain",icon:ce(ke)},ORIGINAL:{name:"original",icon:ce(Ie)}},{t:z}=ve(),o=me("image-viewer"),{nextZIndex:J}=_e(),x=y(),N=y([]),L=ze(),k=y(!0),f=y(n.initialIndex),v=Le(w.CONTAIN),i=y({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=h(()=>{const{urlList:e}=n;return e.length<=1}),R=h(()=>f.value===0),W=h(()=>f.value===n.urlList.length-1),ee=h(()=>n.urlList[f.value]),X=h(()=>{const{scale:e,deg:a,offsetX:s,offsetY:m,enableTransition:E}=i.value;let b=s/e,O=m/e;switch(a%360){case 90:case-270:[b,O]=[O,-b];break;case 180:case-180:[b,O]=[-b,-O];break;case 270:case-90:[b,O]=[-O,b];break}const A={transform:`scale(${e}) rotate(${a}deg) translate(${b}px, ${O}px)`,transition:E?"transform .3s":""};return v.value.name===w.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),te=h(()=>ue(n.zIndex)?n.zIndex:J());function $(){ae(),l("close")}function D(){const e=se(s=>{switch(s.code){case B.esc:n.closeOnPressEscape&&$();break;case B.space:H();break;case B.left:q();break;case B.up:C("zoomIn");break;case B.right:G();break;case B.down:C("zoomOut");break}}),a=se(s=>{const m=s.deltaY||s.deltaX;C(m<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});L.run(()=>{M(document,"keydown",e),M(document,"wheel",a)})}function ae(){L.stop()}function ne(){k.value=!1}function Z(e){k.value=!1,e.target.alt=z("el.image.error")}function j(e){if(k.value||e.button!==0||!x.value)return;i.value.enableTransition=!1;const{offsetX:a,offsetY:s}=i.value,m=e.pageX,E=e.pageY,b=se(A=>{i.value={...i.value,offsetX:a+A.pageX-m,offsetY:s+A.pageY-E}}),O=M(document,"mousemove",b);M(document,"mouseup",()=>{O()}),e.preventDefault()}function F(){i.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function H(){if(k.value)return;const e=Xe(w),a=Object.values(w),s=v.value.name,E=(a.findIndex(b=>b.name===s)+1)%e.length;v.value=w[e[E]],F()}function P(e){const a=n.urlList.length;f.value=(e+a)%a}function q(){R.value&&!n.infinite||P(f.value-1)}function G(){W.value&&!n.infinite||P(f.value+1)}function C(e,a={}){if(k.value)return;const{zoomRate:s,rotateDeg:m,enableTransition:E}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":i.value.scale>.2&&(i.value.scale=Number.parseFloat((i.value.scale/s).toFixed(3)));break;case"zoomIn":i.value.scale<7&&(i.value.scale=Number.parseFloat((i.value.scale*s).toFixed(3)));break;case"clockwise":i.value.deg+=m;break;case"anticlockwise":i.value.deg-=m;break}i.value.enableTransition=E}return oe(ee,()=>{pe(()=>{const e=N.value[0];e!=null&&e.complete||(k.value=!0)})}),oe(f,e=>{F(),l("switch",e)}),ge(()=>{var e,a;D(),(a=(e=x.value)==null?void 0:e.focus)==null||a.call(e)}),d({setActiveItem:P}),(e,a)=>(g(),re(Ye,{to:"body",disabled:!e.teleported},[u(Me,{name:"viewer-fade",appear:""},{default:I(()=>[p("div",{ref_key:"wrapper",ref:x,tabindex:-1,class:c(t(o).e("wrapper")),style:ie({zIndex:t(te)})},[p("div",{class:c(t(o).e("mask")),onClick:a[0]||(a[0]=Ce(s=>e.hideOnClickModal&&$(),["self"]))},null,2),_(" CLOSE "),p("span",{class:c([t(o).e("btn"),t(o).e("close")]),onClick:$},[u(t(T),null,{default:I(()=>[u(t(Ee))]),_:1})],2),_(" ARROW "),t(Y)?_("v-if",!0):(g(),S(U,{key:0},[p("span",{class:c([t(o).e("btn"),t(o).e("prev"),t(o).is("disabled",!e.infinite&&t(R))]),onClick:q},[u(t(T),null,{default:I(()=>[u(t(Oe))]),_:1})],2),p("span",{class:c([t(o).e("btn"),t(o).e("next"),t(o).is("disabled",!e.infinite&&t(W))]),onClick:G},[u(t(T),null,{default:I(()=>[u(t(Se))]),_:1})],2)],64)),_(" ACTIONS "),p("div",{class:c([t(o).e("btn"),t(o).e("actions")])},[p("div",{class:c(t(o).e("actions__inner"))},[u(t(T),{onClick:a[1]||(a[1]=s=>C("zoomOut"))},{default:I(()=>[u(t(Ne))]),_:1}),u(t(T),{onClick:a[2]||(a[2]=s=>C("zoomIn"))},{default:I(()=>[u(t(Te))]),_:1}),p("i",{class:c(t(o).e("actions__divider"))},null,2),u(t(T),{onClick:H},{default:I(()=>[(g(),re(xe(t(v).icon)))]),_:1}),p("i",{class:c(t(o).e("actions__divider"))},null,2),u(t(T),{onClick:a[3]||(a[3]=s=>C("anticlockwise"))},{default:I(()=>[u(t(Re))]),_:1}),u(t(T),{onClick:a[4]||(a[4]=s=>C("clockwise"))},{default:I(()=>[u(t($e))]),_:1})],2)],2),_(" CANVAS "),p("div",{class:c(t(o).e("canvas"))},[(g(!0),S(U,null,Ae(e.urlList,(s,m)=>Be((g(),S("img",{ref_for:!0,ref:E=>N.value[m]=E,key:s,src:s,style:ie(t(X)),class:c(t(o).e("img")),onLoad:ne,onError:Z,onMousedown:j},null,46,Je)),[[Ve,m===f.value]])),128))],2),K(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var at=we(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const nt=be(at),st=de({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:le([String,Object])},previewSrcList:{type:le(Array),default:()=>fe([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),lt={load:r=>r instanceof Event,error:r=>r instanceof Event,switch:r=>ue(r),close:()=>!0,show:()=>!0},ot=["src","loading"],rt={key:0},it=Q({name:"ElImage",inheritAttrs:!1}),ut=Q({...it,props:st,emits:lt,setup(r,{emit:d}){const l=r;let n="";const{t:w}=ve(),z=me("image"),o=De(),J=Fe(),x=y(),N=y(!1),L=y(!0),k=y(!1),f=y(),v=y(),i=V&&"loading"in HTMLImageElement.prototype;let Y,R;const W=h(()=>o.style),ee=h(()=>{const{fit:e}=l;return V&&e?{objectFit:e}:{}}),X=h(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),te=h(()=>{const{previewSrcList:e,initialIndex:a}=l;let s=a;return a>e.length-1&&(s=0),s}),$=h(()=>l.loading==="eager"?!1:!i&&l.loading==="lazy"||l.lazy),D=()=>{V&&(L.value=!0,N.value=!1,x.value=l.src)};function ae(e){L.value=!1,N.value=!1,d("load",e)}function ne(e){L.value=!1,N.value=!0,d("error",e)}function Z(){Ge(f.value,v.value)&&(D(),H())}const j=qe(Z,200,!0);async function F(){var e;if(!V)return;await pe();const{scrollContainer:a}=l;We(a)?v.value=a:Ze(a)&&a!==""?v.value=(e=document.querySelector(a))!=null?e:void 0:f.value&&(v.value=je(f.value)),v.value&&(Y=M(v,"scroll",j),setTimeout(()=>Z(),100))}function H(){!V||!v.value||!j||(Y==null||Y(),v.value=void 0)}function P(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function q(){X.value&&(R=M("wheel",P,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",k.value=!0,d("show"))}function G(){R==null||R(),document.body.style.overflow=n,k.value=!1,d("close")}function C(e){d("switch",e)}return oe(()=>l.src,()=>{$.value?(L.value=!0,N.value=!1,H(),F()):D()}),ge(()=>{$.value?F():D()}),(e,a)=>(g(),S("div",{ref_key:"container",ref:f,class:c([t(z).b(),e.$attrs.class]),style:ie(t(W))},[N.value?K(e.$slots,"error",{key:0},()=>[p("div",{class:c(t(z).e("error"))},He(t(w)("el.image.error")),3)]):(g(),S(U,{key:1},[x.value!==void 0?(g(),S("img",Pe({key:0},t(J),{src:x.value,loading:e.loading,style:t(ee),class:[t(z).e("inner"),t(X)&&t(z).e("preview"),L.value&&t(z).is("loading")],onClick:q,onLoad:ae,onError:ne}),null,16,ot)):_("v-if",!0),L.value?(g(),S("div",{key:1,class:c(t(z).e("wrapper"))},[K(e.$slots,"placeholder",{},()=>[p("div",{class:c(t(z).e("placeholder"))},null,2)])],2)):_("v-if",!0)],64)),t(X)?(g(),S(U,{key:2},[k.value?(g(),re(t(nt),{key:0,"z-index":e.zIndex,"initial-index":t(te),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:G,onSwitch:C},{default:I(()=>[e.$slots.viewer?(g(),S("div",rt,[K(e.$slots,"viewer")])):_("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):_("v-if",!0)],64)):_("v-if",!0)],6))}});var ct=we(ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const ft=be(ct);export{ft as E};
