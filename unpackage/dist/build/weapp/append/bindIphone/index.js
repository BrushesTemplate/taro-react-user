"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[3091],{476:function(e,n,t){var r=t(2180),a=t(9439),o=t(2461),c=t(7696),u=t(4165),i=t(5861),s=t(7294),l=t(1908),f=t(5110),d=t(7561),h=t(5893),p=function(e){var n=e.form,t=(0,s.useState)(0),r=(0,a.Z)(t,2),c=r[0],p=r[1],v=(0,s.useState)(!1),m=(0,a.Z)(v,2),x=m[0],g=m[1],b=(0,f.hj)();(0,s.useEffect)((function(){var e=setTimeout((function(){0!==c?b.current&&p((function(e){return e-1})):clearTimeout(e)}),1e3);return function(){return clearTimeout(e)}}),[c,b]);var j=function(){var e=(0,i.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.validateFields(["userPhone"]);case 3:g(!0),t=n.getFieldValue("userPhone"),(0,l.Z9)({userPhone:t}).then((function(e){e.success&&(0,d.F)(e),p(60)})).catch((function(e){console.log(e)})).finally((function(){g(!1)})),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsx)(o.Button,{loading:x,fill:"none",disabled:c>0,onClick:j,children:0===c?"\u83b7\u53d6\u9a8c\u8bc1\u7801":"\u5012\u8ba1\u65f6".concat(c,"\u79d2")})},v=p,m=t(1413),x=t(2954),g=t.n(x),b=t(6423);function j(){return(0,s.useCallback)(function(){var e=(0,i.Z)((0,u.Z)().mark((function e(n,t){var r,a;return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.$i)((0,m.Z)((0,m.Z)({},t),{},{userOpenid:g().getStorageSync("userOpenid")}));case 3:if(r=e.sent,r.dataObj){e.next=7;break}return g().showToast({title:"\u65e0\u6cd5\u767b\u5f55",icon:"error",duration:1e3}),e.abrupt("return");case 7:r.success&&(0,d.F)(r),a=(0,b.Z)(r,"dataObj.ticketTokenid",""),g().setStorageSync("saas-token",a),g().setStorageSync("user-info",r.dataObj),g().navigateBack({delta:1,complete:function(){n()}}),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n,t){return e.apply(this,arguments)}}(),[])}var k=function(){var e=j(),n=o.Form.useForm(),t=(0,a.Z)(n,1),r=t[0],u=(0,s.useRef)();return(0,x.useDidShow)((function(){var e=(0,x.getCurrentPages)(),n=e[e.length-1],t=n.getOpenerEventChannel();t.on("handler",(function(e){u.current=e}))})),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(o.Form,{form:r,onFinish:function(n){return e(u.current,n)},layout:"horizontal",footer:(0,h.jsx)(o.Button,{block:!0,type:"submit",color:"primary",size:"large",children:"\u63d0\u4ea4"}),children:[(0,h.jsx)(o.Form.Item,{name:"userPhone",label:"\u624b\u673a\u53f7",rules:[{validator:c.z4}],children:(0,h.jsx)(o.Input,{placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"})}),(0,h.jsx)(o.Form.Item,{label:"\u77ed\u4fe1\u9a8c\u8bc1\u7801",name:"code",rules:[{required:!0,message:"\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a"}],extra:(0,h.jsx)("div",{className:"extraPart",children:(0,h.jsx)(v,{form:r})}),children:(0,h.jsx)(o.Input,{placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",clearable:!0})})]})})},Z={navigationBarTitleText:"\u7ed1\u5b9a\u624b\u673a\u53f7"};Page((0,r.createPageConfig)(k,"append/bindIphone/index",{root:{cn:[]}},Z||{}))}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[2107,1216,8592],(function(){return n(476)}));e.O()}]);