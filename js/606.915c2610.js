"use strict";(self["webpackChunkcli_demo"]=self["webpackChunkcli_demo"]||[]).push([[606],{422:function(t,c,o){function i(t){return{all:t=t||new Map,on:function(c,o){var i=t.get(c);i?i.push(o):t.set(c,[o])},off:function(c,o){var i=t.get(c);i&&(o?i.splice(i.indexOf(o)>>>0,1):t.set(c,[]))},emit:function(c,o){var i=t.get(c);i&&i.slice().map((function(t){t(o)})),(i=t.get("*"))&&i.slice().map((function(t){t(c,o)}))}}}o.d(c,{Z:function(){return s}});const a=i();var s=a},2606:function(t,c,o){o.r(c),o.d(c,{default:function(){return b}});var i=o(3396),a=o(7139);const s=(0,i._)("h2",null,"單一產品",-1),e={class:"container"},r={class:"card",style:{width:"18rem"}},n=["src","alt"],u={class:"card-body"},d={class:"card-title"},l={class:"card-text"},p={class:"card-text"};function h(t,c,o,h,g,f){return(0,i.wg)(),(0,i.iD)(i.HY,null,[s,(0,i._)("div",e,[(0,i._)("div",r,[(0,i._)("img",{src:g.product.imageUrl,class:"card-img-top",alt:g.product.title},null,8,n),(0,i._)("div",u,[(0,i._)("h5",d,(0,a.zw)(g.product.title),1),(0,i._)("p",l,(0,a.zw)(g.product.description),1),(0,i._)("p",p,(0,a.zw)(g.product.price),1),(0,i._)("button",{class:"btn btn-primary",onClick:c[0]||(c[0]=t=>f.addItemToCart(g.product.id))},"加入購物車")])]),(0,i._)("button",{class:"btn btn-primary",onClick:c[1]||(c[1]=(...t)=>f.backToPreviousPage&&f.backToPreviousPage(...t))},"回上一頁")])],64)}var g=o(422),f={data(){return{product:{},isLoading:""}},methods:{getProduct(){const{id:t}=this.$route.params;this.$http(`https://vue3-course-api.hexschool.io/v2/api/otispath/product/${t}`).then((t=>{this.product=t.data.product})).catch((t=>{console.log(t)}))},addItemToCart(t,c=1){const o={product_id:t,qty:c};this.isLoading=t,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/otispath/cart",{data:o}).then((t=>{this.isLoading="",g.Z.emit("get-cart")})).catch((t=>{console.log(t),this.isLoading=""}))},backToPreviousPage(){this.$router.back(-1)}},mounted(){this.getProduct()}},m=o(89);const v=(0,m.Z)(f,[["render",h]]);var b=v}}]);
//# sourceMappingURL=606.915c2610.js.map