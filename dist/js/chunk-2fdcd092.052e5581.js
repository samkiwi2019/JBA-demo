(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fdcd092"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("fe6c"),o=i("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(o["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},b5b6:function(t,e,i){},ec0b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",[i("v-container",[i("v-row",{attrs:{align:"center","no-gutters":""}},[t._l(t.links,(function(e,a){return i("v-col",{key:a,staticClass:"text-center mb-sm-0 mb-5",attrs:{cols:"auto"}},[i("v-btn",{staticClass:"mr-0 grey--text text--darken-3",attrs:{to:e.href,text:"",small:""},domProps:{textContent:t._s(e.text)}})],1)})),i("v-spacer",{staticClass:"hidden-sm-and-down"}),i("v-col",{attrs:{cols:"12",md:"auto"}},[i("div",{staticClass:"body-1 font-weight-light pt-6 pt-md-0 text-center"},[t._v(" © "+t._s((new Date).getFullYear())+", made with "),i("v-icon",{attrs:{size:"18"}},[t._v("mdi-heart")]),t._v(" by Sam. ")],1)])],2)],1)],1)},o=[],s={name:"AppFooter",data:function(){return{links:[{href:"/dashboard",text:"Dashboard"}]}}},n=s,r=i("2877"),c=i("6544"),p=i.n(c),l=i("8336"),u=i("62ad"),h=i("a523"),d=(i("a9e3"),i("c7cd"),i("5530")),f=(i("b5b6"),i("8dd9")),v=i("3a66"),m=i("d10f"),b=i("58df"),g=i("80d2"),y=Object(b["a"])(f["a"],Object(v["a"])("footer",["height","inset"]),m["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(d["a"])(Object(d["a"])({},f["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(d["a"])(Object(d["a"])({},f["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(g["g"])(t),left:Object(g["g"])(this.computedLeft),right:Object(g["g"])(this.computedRight),bottom:Object(g["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),x=i("132d"),w=i("0fd9"),j=i("2fa4"),O=Object(r["a"])(n,a,o,!1,null,null,null);e["default"]=O.exports;p()(O,{VBtn:l["a"],VCol:u["a"],VContainer:h["a"],VFooter:y,VIcon:x["a"],VRow:w["a"],VSpacer:j["a"]})}}]);
//# sourceMappingURL=chunk-2fdcd092.052e5581.js.map