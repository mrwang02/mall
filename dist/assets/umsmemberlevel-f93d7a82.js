import{n as p,_ as V,d as M,o as w,c as P,a as b,b as l,w as m,F,E as d,e as C,f as k,g as E,h as s,i as L,j as U,k as W,l as y}from"./index-760fc3c0.js";/* empty css                   */import{c as B}from"./cloneDeep-835e340b.js";const S=e=>p.request({url:"mall/ums-member-level/del/"+e.id,method:"GET"}),I=e=>p.request({url:"mall/ums-member-level/add",method:"post",data:e}),$=e=>p.request({url:"mall/ums-member-level/edit",method:"post",data:e}),G=M({props:["id"],data(){return{dialogFormVisible:!1,code:0,data:{},msg:"",success:!0,page:{total:0,current:0,size:0},umsMemberlevel:{commentGrowthPoint:0,defaultStatus:0,freeFreightPoint:0,growthPoint:0,id:0,name:"",note:"",priviledgeBirthday:0,priviledgeComment:0,priviledgeFreeFreight:0,priviledgeMemberPrice:0,priviledgePromotion:0,priviledgeSignIn:0},formLabelWidth:160,umsMemberlevels:[]}},mounted(){this.getumsMemberlevelsPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.umsMemberlevel=B(e)},getumsMemberlevelsPage(e){},currentchange(e){this.getumsMemberlevelsPage(e),this.page.current=e},del(e){console.log(e),S({id:e}).then(n=>{if(n.success)this.getumsMemberlevelsPage(this.page.current);else return console.log(n.msg),!1}).catch(n=>{})},toAdd(){this.dialogFormVisible=!0},save(){const e=this.umsMemberlevel;e.id==0?I(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getumsMemberlevelsPage(this.page.current),d(o.msg);else return d(o.msg),!1}).catch(o=>{d("网络错误联系管理员")}):$(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getumsMemberlevelsPage(this.page.current),d(o.msg);else return d(o.msg),!1}).catch(o=>{d("网络错误联系管理员")})}}}),T=b("div",{class:""},"会员等级管理页面",-1),q={class:"umsMemberlevel"},z={class:"dialog-footer"};function A(e,o,n,D,N,j){const u=C,a=L,f=k,i=U,r=W,g=y,v=E;return w(),P(F,null,[T,b("div",q,[l(u,{type:"warning",onClick:e.toAdd},{default:m(()=>[s("添加")]),_:1},8,["onClick"]),l(f,{data:e.umsMemberlevels,style:{width:"100%"}},{default:m(()=>[l(a,{fixed:"",prop:"id",label:"#",width:"50"}),l(a,{prop:"name",label:"会员等级名称"}),l(a,{prop:"growthPoint",label:"成长值"}),l(a,{prop:"defaultStatus",label:"默认等级"}),l(a,{prop:"freeFreightPoint",label:"免运费标准"}),l(a,{prop:"commentGrowthPoint",label:"每次评价获取的成长值"}),l(a,{prop:"priviledgeFreeFreight",label:"是否有免邮特权"}),l(a,{prop:"priviledgeSignIn",label:"是否有签到特权"}),l(a,{prop:"priviledgeComment",label:"是否有评论获奖励特权"}),l(a,{prop:"priviledgePromotion",label:"是否有专享活动特权"}),l(a,{prop:"priviledgeMemberPrice",label:"是否有会员价特权"}),l(a,{prop:"priviledgeBirthday",label:"是否有生日特权"}),l(a,{prop:"note",label:"备注"}),l(a,{fixed:"right",label:"操作",width:"120"},{default:m(t=>[l(u,{link:"",type:"warning",size:"small",onClick:h=>e.toEdit(t.row)},{default:m(()=>[s("编辑")]),_:2},1032,["onClick"]),l(u,{link:"",type:"warning",size:"small",onClick:h=>e.del(t.row.id)},{default:m(()=>[s("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),l(v,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[14]||(o[14]=t=>e.dialogFormVisible=t),title:"会员等级编辑"},{footer:m(()=>[b("span",z,[l(u,{onClick:o[13]||(o[13]=t=>e.dialogFormVisible=!1)},{default:m(()=>[s("取消")]),_:1}),l(u,{type:"primary",onClick:e.save},{default:m(()=>[s(" 保存 ")]),_:1},8,["onClick"])])]),default:m(()=>[l(g,{model:e.umsMemberlevel},{default:m(()=>[l(r,{label:"id","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.id,"onUpdate:modelValue":o[0]||(o[0]=t=>e.umsMemberlevel.id=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"会员等级名称","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.name,"onUpdate:modelValue":o[1]||(o[1]=t=>e.umsMemberlevel.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"成长值","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.growthPoint,"onUpdate:modelValue":o[2]||(o[2]=t=>e.umsMemberlevel.growthPoint=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"默认等级","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.defaultStatus,"onUpdate:modelValue":o[3]||(o[3]=t=>e.umsMemberlevel.defaultStatus=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"免运费标准","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.freeFreightPoint,"onUpdate:modelValue":o[4]||(o[4]=t=>e.umsMemberlevel.freeFreightPoint=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"每次评价获取的成长值","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.commentGrowthPoint,"onUpdate:modelValue":o[5]||(o[5]=t=>e.umsMemberlevel.commentGrowthPoint=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"是否有免邮特权","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.priviledgeFreeFreight,"onUpdate:modelValue":o[6]||(o[6]=t=>e.umsMemberlevel.priviledgeFreeFreight=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"是否有签到特权","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.priviledgeSignIn,"onUpdate:modelValue":o[7]||(o[7]=t=>e.umsMemberlevel.priviledgeSignIn=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"是否有评论获奖励特权","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.priviledgeComment,"onUpdate:modelValue":o[8]||(o[8]=t=>e.umsMemberlevel.priviledgeComment=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"是否有专享活动特权","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.priviledgePromotion,"onUpdate:modelValue":o[9]||(o[9]=t=>e.umsMemberlevel.priviledgePromotion=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"是否有会员价特权","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.priviledgeMemberPrice,"onUpdate:modelValue":o[10]||(o[10]=t=>e.umsMemberlevel.priviledgeMemberPrice=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"是否有生日特权","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.priviledgeBirthday,"onUpdate:modelValue":o[11]||(o[11]=t=>e.umsMemberlevel.priviledgeBirthday=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(r,{label:"备注","label-width":e.formLabelWidth},{default:m(()=>[l(i,{modelValue:e.umsMemberlevel.note,"onUpdate:modelValue":o[12]||(o[12]=t=>e.umsMemberlevel.note=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const O=V(G,[["render",A]]);export{O as default};