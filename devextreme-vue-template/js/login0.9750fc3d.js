"use strict";(self["webpackChunkapp_name"]=self["webpackChunkapp_name"]||[]).push([[887],{4685:function(t,e,o){
/*!
 * devextreme-vue
 * Version: 21.2.7
 * Build date: Mon Apr 11 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.DxLoadIndicator=void 0;var i=n(o(3559)),s=o(5536),a=s.createComponent({props:{elementAttr:Object,height:[Function,Number,String],hint:String,indicatorSrc:String,onContentReady:Function,onDisposing:Function,onInitialized:Function,onOptionChanged:Function,rtlEnabled:Boolean,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:elementAttr":null,"update:height":null,"update:hint":null,"update:indicatorSrc":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:rtlEnabled":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=i.default,this.$_hasAsyncTemplate=!0}});e.DxLoadIndicator=a,e["default"]=a},7381:function(t,e,o){o.d(e,{Z:function(){return R}});var n=o(7678),i=o(343),s=o(2454),a=o(4099),l=o(450),d=o(8274),r=o(1389),u=o(2376),c=o(268),p=o(2264),h=o(7045),m=o(1866),f=o(652),g=o(6023),v=o(3970),w=(0,d.Jj)(),b=c.Z.add,x="dx-toast",y=x+"-",_=y+"wrapper",C=y+"content",D=y+"message",T=y+"icon",k="dxToast",O=["info","warning","error","success"],S=[],B=8e3,Z=null,I={top:{my:"top",at:"top",of:null,offset:"0 0"},bottom:{my:"bottom",at:"bottom",of:null,offset:"0 -20"},center:{my:"center",at:"center",of:null,offset:"0 0"},right:{my:"center right",at:"center right",of:null,offset:"0 0"},left:{my:"center left",at:"center left",of:null,offset:"0 0"}},P={h:0,v:0};b((function(){u.Z.subscribeGlobal(r["default"].getDocument(),m.Z.down,(function(t){for(var e=S.length-1;e>=0;e--)if(!S[e]._proxiedDocumentDownHandler(t))return}))}));var W=g.Z.inherit({_getDefaultOptions:function(){return(0,a.l)(this.callBase(),{message:"",type:"info",displayTime:2e3,position:"bottom center",animation:{show:{type:"fade",duration:400,from:0,to:1},hide:{type:"fade",duration:400,to:0}},shading:!1,height:"auto",hideTopOverlayHandler:null,closeOnSwipe:!0,closeOnClick:!1,resizeEnabled:!1})},_defaultOptionsRules:function(){return this.callBase().concat([{device:{platform:"android"},options:{closeOnOutsideClick:!0,width:"auto",position:{at:"bottom left",my:"bottom left",offset:"20 -20"},animation:{show:{type:"slide",duration:200,from:{position:{my:"top",at:"bottom",of:w}}},hide:{type:"slide",duration:200,to:{position:{my:"top",at:"bottom",of:w}}}}}},{device:function(t){var e="phone"===t.deviceType,o="android"===t.platform;return e&&o},options:{width:"100vw",position:{at:"bottom center",my:"bottom center",offset:"0 0"}}},{device:function(t){return"phone"===t.deviceType},options:{width:"100vw"}},{device:function(){return(0,v.x2)()},options:{minWidth:344,maxWidth:568,displayTime:4e3}}])},_init:function(){this.callBase(),this._posStringToObject()},_renderContentImpl:function(){this.option("message")&&(this._message=(0,n.Z)("<div>").addClass(D).text(this.option("message")).appendTo(this.$content())),this.setAria("role","alert",this._message),(0,h.d3)(this.option("type").toLowerCase(),O)>-1&&this.$content().prepend((0,n.Z)("<div>").addClass(T)),this.callBase()},_render:function(){this.callBase(),this.$element().addClass(x),this.$wrapper().addClass(_),this.$content().addClass(y+String(this.option("type")).toLowerCase()),this.$content().addClass(C),this._toggleCloseEvents("Swipe"),this._toggleCloseEvents("Click")},_renderScrollTerminator:p.ZT,_toggleCloseEvents:function(t){var e="dx"+t.toLowerCase();u.Z.off(this.$content(),e),this.option("closeOn"+t)&&u.Z.on(this.$content(),e,this.hide.bind(this))},_posStringToObject:function(){if((0,l.HD)(this.option("position"))){var t=this.option("position").split(" ")[0],e=this.option("position").split(" ")[1];switch(this.option("position",(0,a.l)({boundaryOffset:P},I[t])),e){case"center":case"left":case"right":this.option("position").at+=" "+e,this.option("position").my+=" "+e}}},_show:function(){return Z&&Z!==this&&(clearTimeout(Z._hideTimeout),Z.hide()),Z=this,this.callBase.apply(this,arguments).done(function(){clearTimeout(this._hideTimeout),this._hideTimeout=setTimeout(this.hide.bind(this),this.option("displayTime"))}.bind(this))},_hide:function(){return Z=null,this.callBase.apply(this,arguments)},_overlayStack:function(){return S},_zIndexInitValue:function(){return this.callBase()+B},_dispose:function(){clearTimeout(this._hideTimeout),Z=null,this.callBase()},_optionChanged:function(t){switch(t.name){case"type":this.$content().removeClass(y+t.previousValue),this.$content().addClass(y+String(t.value).toLowerCase());break;case"message":this._message&&this._message.text(t.value);break;case"closeOnSwipe":this._toggleCloseEvents("Swipe");break;case"closeOnClick":this._toggleCloseEvents("Click");break;case"displayTime":break;default:this.callBase(t)}}});(0,f.Z)(k,W);var $=W,E=null,L=function(t,e,o){var d=(0,l.PO)(t)?t:{message:t},r=d.onHidden;(0,a.l)(d,{type:e,displayTime:o,onHidden:function(t){(0,n.Z)(t.element).remove(),new i.Z(r,{context:t.model}).execute(arguments)}}),E=(0,n.Z)("<div>").appendTo((0,s.S3)()),new $(E,d).show()},R=L},1454:function(t,e,o){o.r(e),o.d(e,{default:function(){return b}});var n=o(6252),i=o(9963);const s={class:"dx-button-text"},a={key:1};function l(t,e,o,l,d,r){const u=(0,n.up)("dx-required-rule"),c=(0,n.up)("dx-label"),p=(0,n.up)("dx-item"),h=(0,n.up)("dx-custom-rule"),m=(0,n.up)("dx-button-options"),f=(0,n.up)("dx-button-item"),g=(0,n.up)("dx-loadIndicator"),v=(0,n.up)("dx-form");return(0,n.wg)(),(0,n.iD)("form",{onSubmit:e[0]||(e[0]=(0,i.iM)(((...t)=>l.onSubmit&&l.onSubmit(...t)),["prevent"]))},[(0,n.Wm)(v,{"form-data":l.formData,disabled:l.loading},{changePassword:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n._)("span",s,[l.loading?((0,n.wg)(),(0,n.j4)(g,{key:0,width:"24px",height:"24px",visible:!0})):(0,n.kq)("",!0),l.loading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",a,"Continue"))])])])),default:(0,n.w5)((()=>[(0,n.Wm)(p,{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{message:"Password is required"}),(0,n.Wm)(c,{visible:!1})])),_:1}),(0,n.Wm)(p,{"data-field":"confirmedPassword","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Confirm Password",mode:"password"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{message:"Password is required"}),(0,n.Wm)(h,{message:"Passwords do not match","validation-callback":l.confirmPassword},null,8,["validation-callback"]),(0,n.Wm)(c,{visible:!1})])),_:1}),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{width:"100%",type:"default",template:"changePassword","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"])],32)}var d=o(3791),r=o.n(d),u=o(4685),c=o.n(u),p=o(7381),h=o(2119),m=o(2262),f=o(7758),g={components:{DxForm:r(),DxItem:d.DxItem,DxLabel:d.DxLabel,DxButtonItem:d.DxButtonItem,DxButtonOptions:d.DxButtonOptions,DxRequiredRule:d.DxRequiredRule,DxCustomRule:d.DxCustomRule,DxLoadIndicator:c()},setup(){const t=(0,h.tv)(),e=(0,h.yj)(),o=(0,m.iH)(""),n=(0,m.iH)(!1),i=(0,m.qj)({password:""});async function s(){const{password:e}=i;n.value=!0;const s=await f.Z.changePassword(e,o.value);n.value=!1,s.isOk?t.push("/login-form"):(0,p.Z)(s.message,"error",2e3)}function a(t){return t.value===i.password}return o.value=e.params.recoveryCode,{loading:n,formData:i,onSubmit:s,confirmPassword:a}}},v=o(3744);const w=(0,v.Z)(g,[["render",l]]);var b=w}}]);
//# sourceMappingURL=login0.9750fc3d.js.map