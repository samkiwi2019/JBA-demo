(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d08598c"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var o=i("fe6c"),n=i("58df");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"8b0d":function(t,e,i){},c4fb:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{attrs:{id:"app-bar",absolute:"",app:"",color:"transparent",flat:"",height:"75"}},[i("v-btn",{staticClass:"mr-3",attrs:{elevation:"1",fab:"",small:""},on:{click:function(e){return t.setDrawer(!t.drawer)}}},[t.drawer?i("v-icon",[t._v("mdi-dots-vertical")]):i("v-icon",[t._v("mdi-view-quilt")])],1),i("v-toolbar-title",{staticClass:"hidden-sm-and-down font-weight-light",domProps:{textContent:t._s(t.$t(t.$route.name))}}),i("v-spacer"),i("div",{staticClass:"mx-3"}),i("v-btn",{staticClass:"ml-2",attrs:{"min-width":"0",text:"",to:"/dashboard"}},[i("v-icon",[t._v("mdi-view-dashboard")])],1),i("v-menu",{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",o,!1),n),[t.notifications.length>0?i("v-badge",{attrs:{color:"red",overlap:"",bordered:""},scopedSlots:t._u([{key:"badge",fn:function(){return[i("span",{domProps:{textContent:t._s(t.notifications.length)}})]},proxy:!0}],null,!0)},[i("v-icon",[t._v("mdi-bell")])],1):i("v-icon",[t._v("mdi-bell")])],1)]}}])},[i("v-list",{attrs:{tile:!1,nav:""}},[t.notifications.length>0?i("div",{staticStyle:{"max-height":"300px","overflow-y":"auto"}},t._l(t.notifications,(function(e,o){return i("app-bar-item",{key:"item-"+o,nativeOn:{click:function(i){return t.deleteNotification(e)}}},[i("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)})),1):i("div",[i("app-bar-item",[i("v-list-item-title",{domProps:{textContent:t._s("You have not received any notifications yet!")}})],1)],1)])],1),i("v-menu",{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,n=e.on;return[i("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",o,!1),n),[i("v-icon",[t._v("mdi-account")])],1)]}}])},[i("v-list",{attrs:{tile:!1,nav:"","min-width":"200"}},[i("div",[i("app-bar-item",{nativeOn:{click:function(e){return t.logout(e)}}},[i("v-list-item-title",{domProps:{textContent:t._s("Logout")}})],1)],1)])],1)],1)},n=[],r=i("5530"),s=i("16b7"),a=i("f2e7"),l=i("58df"),c=i("d9bd"),h=Object(l["a"])(s["a"],a["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(c["c"])("v-hover should only contain a single element",this),t)):(Object(c["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),d=i("da13"),u=i("2f62"),p={name:"AppBar",data:function(){return{notifications:[]}},components:{AppBarItem:{render:function(t){var e=this;return t(h,{scopedSlots:{default:function(i){var o=i.hover;return t(d["a"],{attrs:e.$attrs,class:{"black--text":!o,"white--text secondary elevation-12":o},props:Object(r["a"])({activeClass:"",dark:o,link:!0},e.$attrs)},e.$slots.default)}}})}}},computed:Object(r["a"])({},Object(u["d"])({drawer:function(t){return t.config.drawer}})),methods:Object(r["a"])(Object(r["a"])({},Object(u["c"])({setDrawer:"config/SET_DRAWER"})),{},{logout:function(){this.$toast.default("Logout successfully!")}})},f=p,v=i("2877"),m=i("6544"),g=i.n(m),b=(i("a9e3"),i("c7cd"),i("8b0d"),i("71d9")),S=i("53ca");function O(t,e){var i=e.modifiers||{},o=i.self,n=void 0!==o&&o,r=e.value,s="object"===Object(S["a"])(r)&&r.options||{passive:!0},a="function"===typeof r||"handleEvent"in r?r:r.handler,l=n?t:e.arg?document.querySelector(e.arg):window;l&&(l.addEventListener("scroll",a,s),t._onScroll={handler:a,options:s,target:n?void 0:l})}function y(t){if(t._onScroll){var e=t._onScroll,i=e.handler,o=e.options,n=e.target,r=void 0===n?t:n;r.removeEventListener("scroll",i,o),delete t._onScroll}}var w={inserted:O,unbind:y},B=w,T=i("3a66"),_=i("a026"),j=_["a"].extend({name:"scrollable",directives:{Scroll:w},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(c["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),x=i("d10f"),$=i("80d2"),A=Object(l["a"])(b["a"],j,x["a"],a["a"],Object(T["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),C=A.extend({name:"v-app-bar",directives:{Scroll:B},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return j.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(r["a"])(Object(r["a"])({},b["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return b["a"].options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=b["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:b["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return b["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(r["a"])(Object(r["a"])({},b["a"].options.computed.styles.call(this)),{},{fontSize:Object($["g"])(this.computedFontSize,"rem"),marginTop:Object($["g"])(this.computedMarginTop),transform:"translateY(".concat(Object($["g"])(this.computedTransform),")"),left:Object($["g"])(this.computedLeft),right:Object($["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=b["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=b["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),k=i("15fd"),R=(i("ff44"),i("132d")),L=i("a9ad"),P=i("7560"),E=_["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),M=i("fe6c"),U=Object(l["a"])(L["a"],Object(M["b"])(["left","bottom"]),P["a"],a["a"],E).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return Object(r["a"])({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object($["g"])(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),i=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),o=this.$createElement("span",i,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[o]):o},genBadgeContent:function(){if(!this.dot){var t=Object($["r"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(R["a"],this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],i=[Object($["r"])(this)],o=this.$attrs,n=(o["aria-atomic"],o["aria-label"],o["aria-live"],o.role,o.title,Object(k["a"])(o,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?i.unshift(e):i.push(e),t("span",{staticClass:"v-badge",attrs:n,class:this.classes},i)}}),H=i("8336"),V=i("8860"),Y=i("5d23"),I=i("e449"),X=i("2fa4"),N=i("2a7f"),q=Object(v["a"])(f,o,n,!1,null,null,null);e["default"]=q.exports;g()(q,{VAppBar:C,VBadge:U,VBtn:H["a"],VIcon:R["a"],VList:V["a"],VListItemTitle:Y["b"],VMenu:I["a"],VSpacer:X["a"],VToolbarTitle:N["a"]})},d10f:function(t,e,i){"use strict";var o=i("a026");e["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},ff44:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7d08598c.50fd5828.js.map