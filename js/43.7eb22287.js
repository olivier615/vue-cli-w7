"use strict";(self["webpackChunkcli_demo"]=self["webpackChunkcli_demo"]||[]).push([[43],{422:function(t,a,e){function i(t){return{all:t=t||new Map,on:function(a,e){var i=t.get(a);i?i.push(e):t.set(a,[e])},off:function(a,e){var i=t.get(a);i&&(e?i.splice(i.indexOf(e)>>>0,1):t.set(a,[]))},emit:function(a,e){var i=t.get(a);i&&i.slice().map((function(t){t(e)})),(i=t.get("*"))&&i.slice().map((function(t){t(a,e)}))}}}e.d(a,{Z:function(){return s}});const n=i();var s=n},4043:function(t,a,e){e.r(a),e.d(a,{default:function(){return Z}});var i=e(3396),n=e(9242),s=e(7139);const o={class:"container"},l=(0,i._)("h2",null,"購物車",-1),d={class:"text-end"},c=["disabled"],r={class:"spinner-border spinner-border-sm"},u=(0,i.Uk)(" 清空購物車 "),p={class:"table align-middle"},h=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th",null,"品名"),(0,i._)("th",{style:{width:"150px"}},"數量/單位"),(0,i._)("th",null,"單價")])],-1),g=["onClick","disabled"],_={class:"spinner-border spinner-border-sm"},b={class:"mx-1"},m=(0,i._)("div",{class:"text-success"}," 已套用優惠券 ",-1),v={class:"input-group input-group-sm"},f={class:"input-group mb-3"},w=["onUpdate:modelValue","onChange","disabled"],C=["value"],y={class:"input-group-text",id:"basic-addon2"},L={class:"text-end"},D=(0,i._)("td",{colspan:"3",class:"text-end"},"總計",-1),x={class:"text-end"},k=(0,i._)("tr",null,null,-1);function $(t,a,e,$,z,q){return(0,i.wg)(),(0,i.iD)("div",o,[l,(0,i._)("div",d,[(0,i._)("button",{class:"btn btn-outline-danger",type:"button",disabled:!0===z.isLoading||0===z.cartData.carts?.length,onClick:a[0]||(a[0]=(...t)=>q.cleanCart&&q.cleanCart(...t))},[(0,i.wy)((0,i._)("span",r,null,512),[[n.F8,z.isLoading]]),u],8,c)]),(0,i._)("table",p,[h,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(z.cartData.carts,(t=>((0,i.wg)(),(0,i.iD)("tr",{key:t.id},[(0,i._)("td",null,[(0,i._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:a=>q.deleteCartItem(t.id),disabled:z.productId===t.id},[(0,i.wy)((0,i._)("span",_,null,512),[[n.F8,z.isLoading===t.id]]),(0,i.wy)((0,i._)("span",b,"X",512),[[n.F8,z.isLoading!==t.id]])],8,g)]),(0,i._)("td",null,[(0,i.Uk)((0,s.zw)(t.product.title)+" ",1),m]),(0,i._)("td",null,[(0,i._)("div",v,[(0,i._)("div",f,[(0,i.wy)((0,i._)("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":a=>t.qty=a,onChange:a=>q.updateQty(t),disabled:z.isLoading===t.id},[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(20,(a=>(0,i._)("option",{value:a,key:`${t.product.id}+${a}`},(0,s.zw)(a),9,C))),64))],40,w),[[n.bM,t.qty,void 0,{number:!0}]]),(0,i._)("span",y,(0,s.zw)(t.product.unit),1)])])]),(0,i._)("td",L,(0,s.zw)(t.total),1)])))),128))]),(0,i._)("tfoot",null,[(0,i._)("tr",null,[D,(0,i._)("td",x,(0,s.zw)(z.cartData.total),1)]),k])])])}var z=e(422),q={data(){return{cartData:{},products:{},productId:"",isLoading:""}},methods:{getCartData(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/otispath/cart").then((t=>{this.cartData=t.data.data})).catch((t=>{console.log(t)}))},deleteCartItem(t){this.isLoading=t,this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/otispath/cart/${t}`).then((t=>{this.getCartData(),z.Z.emit("get-cart"),this.isLoading=""})).catch((t=>{console.log(t),this.isLoading=""}))},cleanCart(){this.isLoading=!0,this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/otispath/carts").then((t=>{this.getCartData(),z.Z.emit("get-cart"),this.isLoading=""})).catch((t=>{console.log(t),this.isLoading=""}))},updateQty(t){this.isLoading=t.product.id;const a={product_id:t.id,qty:t.qty};this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/otispath/cart/${t.id}`,{data:a}).then((t=>{this.getCartData(),this.isLoading=""})).catch((t=>{console.log(t),this.isLoading=""}))}},mounted(){this.getCartData()}},I=e(89);const U=(0,I.Z)(q,[["render",$]]);var Z=U}}]);
//# sourceMappingURL=43.7eb22287.js.map