import{_ as G,r as s,o as I,c as N,b as e,w as a,a as C,f as j,g as q,h as i,t as L,j as O,e as R,i as A,ay as H,k as J,l as K}from"./index-760fc3c0.js";import{E as Q}from"./el-switch-e49dd779.js";import{E as W,a as X}from"./el-row-430d4b85.js";import{E as Z}from"./el-pagination-0056fbe3.js";import"./index-56472faf.js";const ee={class:"goodslist"},te={class:"pagination"},le={class:"dialog-footer"},ae={__name:"sms-flash-promotion",setup(oe){const u=s(!1),m=s(1),y=s(0),v=s(1),f=s(10),g=s(""),c=s(),r=async()=>{let{data:n}=await api.getList({current:v.value,size:f.value});c.value=n.page.records,y.value=n.page.total};r();const o=s({title:"",startDate:"",endDate:"",status:!0}),E=async()=>{if(!m.value){o.value.status=o.value.status?1:0,await api.editGoods(o.value),r(),u.value=!1;return}o.value.status=o.value.status?1:0,await api.addGoods(o.value),r(),u.value=!1},x=(n,t)=>{u.value=!0,m.value=0,t.status=t.status==1,o.value={...t}},D=()=>{u.value=!0,m.value=1},k=async(n,t)=>{await api.delGoods({id:t.id}),r()},h=()=>{o.value={id:"",title:"",start_date:"",end_date:"",status:!0,create_time:""}},z=()=>{c.value=c.value.filter(n=>n.title.includes(g.value))},U=n=>{r()},Y=n=>{r()};return(n,t)=>{const b=O,p=R,V=W,d=A,S=H,F=j,P=Z,_=J,w=X,T=Q,$=K,B=q;return I(),N("div",ee,[e(V,{style:{"margin-bottom":"10px"}},{default:a(()=>[e(b,{style:{width:"150px","margin-right":"10px"},modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=l=>g.value=l),autocomplete:"off"},null,8,["modelValue"]),e(p,{type:"primary",onClick:z},{default:a(()=>[i("查询")]),_:1})]),_:1}),e(V,{style:{"margin-bottom":"5px"}},{default:a(()=>[e(p,{type:"primary",onClick:D},{default:a(()=>[i("新增商品")]),_:1})]),_:1}),e(F,{border:"",data:c.value,style:{width:"100%"}},{default:a(()=>[e(d,{align:"center",prop:"id",label:"编号",width:"80"}),e(d,{align:"center",prop:"title",label:"秒杀时间段名称",width:"180"}),e(d,{align:"center",prop:"startDate",label:"开始日期",width:"180"}),e(d,{align:"center",prop:"endDate",label:"结束日期"}),e(d,{align:"center",label:"上下线状态"},{default:a(l=>[e(S,null,{default:a(()=>[i(L(l.row.status?"已上线":"已下线"),1)]),_:2},1024)]),_:1}),e(d,{align:"center",prop:"createTime",label:"创建时间"}),e(d,{align:"center",label:"操作"},{default:a(l=>[e(p,{type:"primary",size:"small",onClick:M=>x(l.$index,l.row)},{default:a(()=>[i("编辑")]),_:2},1032,["onClick"]),e(p,{size:"small",type:"danger",onClick:M=>k(l.$index,l.row)},{default:a(()=>[i("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),C("div",te,[e(P,{style:{"margin-top":"10px"},"current-page":v.value,"onUpdate:currentPage":t[1]||(t[1]=l=>v.value=l),"page-size":f.value,"onUpdate:pageSize":t[2]||(t[2]=l=>f.value=l),"page-sizes":[10,20,50,100],small:"small",background:"",layout:"total, sizes, prev, pager, next, jumper",total:y.value,onSizeChange:U,onCurrentChange:Y},null,8,["current-page","page-size","total"])]),e(B,{modelValue:u.value,"onUpdate:modelValue":t[8]||(t[8]=l=>u.value=l),title:m.value==0?"编辑":"新增",onClosed:h},{footer:a(()=>[C("span",le,[e(p,{onClick:t[7]||(t[7]=l=>u.value=!1)},{default:a(()=>[i("取消")]),_:1}),e(p,{type:"primary",onClick:E},{default:a(()=>[i(" 保存 ")]),_:1})])]),default:a(()=>[e($,{"label-width":"180px",model:o.value},{default:a(()=>[e(_,{label:"秒杀时间段名称"},{default:a(()=>[e(b,{modelValue:o.value.title,"onUpdate:modelValue":t[3]||(t[3]=l=>o.value.title=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(_,{label:"开始日期"},{default:a(()=>[e(w,{modelValue:o.value.startDate,"onUpdate:modelValue":t[4]||(t[4]=l=>o.value.startDate=l),type:"date","value-format":"YYYY-MM-DD",placeholder:"请选择日期"},null,8,["modelValue"])]),_:1}),e(_,{label:"结束日期"},{default:a(()=>[e(w,{modelValue:o.value.endDate,"onUpdate:modelValue":t[5]||(t[5]=l=>o.value.endDate=l),type:"date","value-format":"YYYY-MM-DD",placeholder:"请选择日期"},null,8,["modelValue"])]),_:1}),e(_,{label:"上下线状态"},{default:a(()=>[e(T,{modelValue:o.value.status,"onUpdate:modelValue":t[6]||(t[6]=l=>o.value.status=l),class:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}},re=G(ae,[["__scopeId","data-v-284a1232"]]);export{re as default};
