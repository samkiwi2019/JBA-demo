(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67901dc8"],{bd0c:function(t,n,e){},d10f:function(t,n,e){"use strict";var a=e("a026");n["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},d6c2:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-main",[e("router-view"),e("app-footer")],1)},o=[],i=(e("d3b7"),{name:"AppView",components:{AppFooter:function(){return Promise.all([e.e("chunk-3862c954"),e.e("chunk-95c26ff4")]).then(e.bind(null,"ec0b"))}}}),r=i,c=e("2877"),s=e("6544"),u=e.n(s),d=(e("bd0c"),e("d10f")),p=d["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,e=t.top,a=t.right,o=t.footer,i=t.insetFooter,r=t.bottom,c=t.left;return{paddingTop:"".concat(e+n,"px"),paddingRight:"".concat(a,"px"),paddingBottom:"".concat(o+i+r,"px"),paddingLeft:"".concat(c,"px")}}},render:function(t){var n={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,n,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),l=Object(c["a"])(r,a,o,!1,null,null,null);n["default"]=l.exports;u()(l,{VMain:p})}}]);
//# sourceMappingURL=chunk-67901dc8.08c6ce29.js.map