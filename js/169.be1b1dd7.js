"use strict";(self["webpackChunkcli_demo"]=self["webpackChunkcli_demo"]||[]).push([[169],{7169:function(t,s,c){c.r(s),c.d(s,{default:function(){return m}});var o=c(3396),l=c(7139);const r=(0,o._)("h2",null,"產品列表",-1),d={class:"container"},a={class:"row row-cols-lg-4 row-cols-md-2 row-cols-1 d-flex"},e={class:"card h-100"},i=["src","alt"],u={class:"card-body"},n={class:"card-title"},p={class:"card-text"},h={class:"card-footer"},w=(0,o.Uk)("查看細節");function _(t,s,c,_,g,v){const f=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[r,(0,o._)("div",d,[(0,o._)("div",a,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.products,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"col g-4",key:t.id},[(0,o._)("div",e,[(0,o._)("img",{src:t.imageUrl,class:"card-img-top",alt:t.title},null,8,i),(0,o._)("div",u,[(0,o._)("h5",n,(0,l.zw)(t.title),1),(0,o._)("p",p,(0,l.zw)(t.description),1)]),(0,o._)("div",h,[(0,o.Wm)(f,{to:`/product/${t.id}`},{default:(0,o.w5)((()=>[w])),_:2},1032,["to"])])])])))),128))])])],64)}var g={data(){return{products:{}}},methods:{getProducts(){this.$http("https://vue3-course-api.hexschool.io/v2/api/otispath/products/all").then((t=>{this.products=t.data.products})).catch((t=>{console.log(t)}))}},mounted(){this.getProducts()}},v=c(89);const f=(0,v.Z)(g,[["render",_]]);var m=f}}]);
//# sourceMappingURL=169.be1b1dd7.js.map