import{B as j,ao as A,an as J,aG as $,U as B,H as k,D as C,G as S,I as P,a6 as D,d as U,X as x,L as ee,N as ae,bz as te,K as u,Y as ie,M as ne,r as V,as as oe,a2 as I,Z as se,o,c as d,a as T,O as a,Q as r,v as le,q as v,w as b,ap as E,ad as g,s as c,t as N,b as re,bA as ce,V as F,R as ue,S as de,by as ve,a3 as pe,T as fe,bB as K,ag as me,a4 as he}from"./index-935c3f0d.js";const ye=j({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:A},inactiveIcon:{type:A},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:J(Function)},size:{type:String,validator:$},tabindex:{type:[String,Number]}}),be={[B]:s=>k(s)||C(s)||S(s),[P]:s=>k(s)||C(s)||S(s),[D]:s=>k(s)||C(s)||S(s)},ge=["onClick"],ke=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],we=["aria-hidden"],Ce=["aria-hidden"],Se=["aria-hidden"],_="ElSwitch",Ve=U({name:_}),Ie=U({...Ve,props:ye,emits:be,setup(s,{expose:G,emit:p}){const t=s,H=ve(),{formItem:m}=x(),L=ee(),i=ae("switch");te({from:'"value"',replacement:'"model-value" or "v-model"',scope:_,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},u(()=>{var e;return!!((e=H.vnode.props)!=null&&e.value)}));const{inputId:q}=ie(t,{formItemContext:m}),h=ne(u(()=>t.loading)),w=V(t.modelValue!==!1),f=V(),Q=V(),R=u(()=>[i.b(),i.m(L.value),i.is("disabled",h.value),i.is("checked",n.value)]),W=u(()=>({width:oe(t.width)}));I(()=>t.modelValue,()=>{w.value=!0}),I(()=>t.value,()=>{w.value=!1});const z=u(()=>w.value?t.modelValue:t.value),n=u(()=>z.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(z.value)||(p(B,t.inactiveValue),p(P,t.inactiveValue),p(D,t.inactiveValue)),I(n,e=>{var l;f.value.checked=e,t.validateEvent&&((l=m==null?void 0:m.validate)==null||l.call(m,"change").catch(Z=>pe()))});const y=()=>{const e=n.value?t.inactiveValue:t.activeValue;p(B,e),p(P,e),p(D,e),fe(()=>{f.value.checked=n.value})},M=()=>{if(h.value)return;const{beforeChange:e}=t;if(!e){y();return}const l=e();[K(l),k(l)].includes(!0)||me(_,"beforeChange must return type `Promise<boolean>` or `boolean`"),K(l)?l.then(O=>{O&&y()}).catch(O=>{}):l&&y()},X=u(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),Y=()=>{var e,l;(l=(e=f.value)==null?void 0:e.focus)==null||l.call(e)};return se(()=>{f.value.checked=n.value}),G({focus:Y,checked:n}),(e,l)=>(o(),d("div",{class:r(a(R)),style:F(a(X)),onClick:ue(M,["prevent"])},[T("input",{id:a(q),ref_key:"input",ref:f,class:r(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(h),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(h),tabindex:e.tabindex,onChange:y,onKeydown:le(M,["enter"])},null,42,ke),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),d("span",{key:0,class:r([a(i).e("label"),a(i).em("label","left"),a(i).is("active",!a(n))])},[e.inactiveIcon?(o(),v(a(g),{key:0},{default:b(()=>[(o(),v(E(e.inactiveIcon)))]),_:1})):c("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),d("span",{key:1,"aria-hidden":a(n)},N(e.inactiveText),9,we)):c("v-if",!0)],2)):c("v-if",!0),T("span",{ref_key:"core",ref:Q,class:r(a(i).e("core")),style:F(a(W))},[e.inlinePrompt?(o(),d("div",{key:0,class:r(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),v(a(g),{key:0,class:r(a(i).is("icon"))},{default:b(()=>[(o(),v(E(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),d("span",{key:1,class:r(a(i).is("text")),"aria-hidden":!a(n)},N(a(n)?e.activeText:e.inactiveText),11,Ce)):c("v-if",!0)],2)):c("v-if",!0),T("div",{class:r(a(i).e("action"))},[e.loading?(o(),v(a(g),{key:0,class:r(a(i).is("loading"))},{default:b(()=>[re(a(ce))]),_:1},8,["class"])):c("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),d("span",{key:1,class:r([a(i).e("label"),a(i).em("label","right"),a(i).is("active",a(n))])},[e.activeIcon?(o(),v(a(g),{key:0},{default:b(()=>[(o(),v(E(e.activeIcon)))]),_:1})):c("v-if",!0),!e.activeIcon&&e.activeText?(o(),d("span",{key:1,"aria-hidden":!a(n)},N(e.activeText),9,Se)):c("v-if",!0)],2)):c("v-if",!0)],14,ge))}});var Te=de(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Ne=he(Te);export{Ne as E};