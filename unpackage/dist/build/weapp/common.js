(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[8592],{4713:function(e,n,t){"use strict";t.d(n,{IB:function(){return j},vu:function(){return S},ox:function(){return I},hm:function(){return o}});var r=t(1515),a=t.p+"account/components/topLogo/logo.png",c=t(2269),o=function(){return(0,c.jsx)(r.View,{className:"topLogo",children:(0,c.jsx)(r.View,{className:"logo",style:{backgroundImage:"url(".concat(a,")")}})})},u=t(6062),s=t(7696),i=function(e){var n=e.txt,t=void 0===n?"\u624b\u673a\u53f7":n;return(0,c.jsx)(u.Form.Item,{name:"mobile",rules:[{required:!0,message:"".concat(t,"\u4e0d\u80fd\u4e3a\u7a7a")},{pattern:s.L3,message:"\u8bf7\u8f93\u5165\u6b63\u786e".concat(t)}],children:(0,c.jsx)(u.Input,{maxLength:11,clearable:!0,placeholder:"\u8bf7\u8f93\u5165".concat(t)})})},l=t(9301),p=t(5308),f=t(129),d=t(201),h=t(1241),g=t(7561),x=60,v=function(e){var n=e.form,t=e.type,a=(0,d.useState)(!1),o=(0,f.Z)(a,2),u=o[0],i=o[1],v=(0,d.useState)(x),m=(0,f.Z)(v,2),b=m[0],w=m[1],Z=(0,d.useRef)(),k=(0,d.useState)(!1),y=(0,f.Z)(k,2),P=y[0],j=y[1],S=function(){var e=(0,p.Z)((0,l.Z)().mark((function e(){var r,a,c,o,u;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!P){e.next=2;break}return e.abrupt("return");case 2:if(r=n.getFieldValue("mobile"),r){e.next=6;break}return(0,g.M)("\u8bf7\u586b\u5199\u624b\u673a\u53f7"),e.abrupt("return");case 6:if(a="mobileLogin"===t||s.L3.test(r),a){e.next=12;break}return(0,g.M)("\u8bf7\u586b\u5199\u6b63\u786e\u7684\u624b\u673a\u53f7"),e.abrupt("return");case 12:if(j(!0),e.prev=13,c={userPhone:r},"reg"!==t){e.next=22;break}return e.next=18,(0,h.E$)(c);case 18:if(o=e.sent,o.success){e.next=22;break}return(0,g.M)(o.msg),e.abrupt("return");case 22:return e.next=24,(0,h.Z9)(c);case 24:u=e.sent,console.log(26,u),i(!0),w(x),e.next=33;break;case 30:e.prev=30,e.t0=e["catch"](13),console.log(e.t0);case 33:return e.prev=33,j(!1),e.finish(33);case 36:case"end":return e.stop()}}),e,null,[[13,30,33,36]])})));return function(){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){return b&&0!==b&&(Z.current=setTimeout((function(){w(b-1)}),1e3)),0===b&&i(!1),function(){clearTimeout(Z.current)}}),[b]),(0,c.jsx)(r.View,{children:u?(0,c.jsxs)(r.View,{children:["\u5012\u8ba1\u65f6 ",b," \u79d2"]}):(0,c.jsx)(r.View,{onClick:S,children:"\u83b7\u53d6\u9a8c\u8bc1\u7801"})})},m=function(e){var n=e.txt,t=void 0===n?"\u9a8c\u8bc1\u7801":n,r=e.form,a=e.type;return(0,c.jsx)(u.Form.Item,{name:"code",extra:(0,c.jsx)(v,{form:r,type:a}),rules:[{required:!0,message:"".concat(t,"\u4e0d\u80fd\u4e3a\u7a7a")}],children:(0,c.jsx)(u.Input,{maxLength:6,clearable:!0,placeholder:"\u8bf7\u8f93\u5165".concat(t)})})},b=t(4808),w=function(e){var n=e.txt,t=void 0===n?"\u5bc6\u7801":n,a=(0,d.useState)(!0),o=(0,f.Z)(a,2),s=o[0],i=o[1],l=function(e,n){return n.length>5&&n.length<13?Promise.resolve():Promise.reject(new Error("\u8bf7\u8f93\u51656-12\u4f4d".concat(t)))};return(0,c.jsx)(u.Form.Item,{name:"password",rules:[{required:!0,message:"".concat(t,"\u4e0d\u80fd\u4e3a\u7a7a")},{validator:l}],extra:(0,c.jsx)(r.View,{onClick:function(){return i(!s)},children:s?(0,c.jsx)(b.yC,{value:"yincang"}):(0,c.jsx)(b.yC,{value:"liulan"})}),children:(0,c.jsx)(u.Input,{placeholder:"\u8bf7\u8f93\u5165".concat(t),clearable:!0,type:s?"password":"text"})})},Z=function(e){var n=e.txt,t=void 0===n?"\u8d26\u53f7":n;return(0,c.jsx)(u.Form.Item,{name:"account",rules:[{required:!0,message:"".concat(t,"\u4e0d\u80fd\u4e3a\u7a7a")}],children:(0,c.jsx)(u.Input,{clearable:!0,placeholder:"\u8bf7\u8f93\u5165".concat(t)})})},k=function(e){var n=e.originPhone,t=e.form;return(0,d.useEffect)((function(){t.setFieldValue("mobile",n)}),[n]),(0,c.jsx)(u.Form.Item,{name:"mobile",children:(0,c.jsx)(u.Input,{placeholder:n,readOnly:!0})})},y=function(e){var n=e.btnText;return(0,c.jsx)(u.Button,{block:!0,shape:"rounded",size:"large",type:"submit",style:{"--background-color":"#000000","--text-color":"#FFFFFF"},children:n})},P=t(1225),j=function(e){var n=e.type,t=e.btnText,a=e.txt,o=e.originPhone,s=(0,P.rh)(n),l=s.form,p=s.onFinish;return(0,c.jsx)(r.View,{children:(0,c.jsxs)(u.Form,{form:l,footer:(0,c.jsx)(y,{btnText:t}),onFinish:p,children:[["accountLogin"].includes(n)?(0,c.jsx)(Z,{}):null,["confirmPhone"].includes(n)?(0,c.jsx)(k,{originPhone:o,form:l}):null,["forgetPwd","reg","mobileLogin","bindPhone"].includes(n)?(0,c.jsx)(i,{}):null,["reg","mobileLogin","forgetPwd","confirmPhone","bindPhone"].includes(n)?(0,c.jsx)(m,{form:l,type:n}):null,["reg","accountLogin","forgetPwd"].includes(n)?(0,c.jsx)(w,{txt:a}):null]})})},S=function(){var e=(0,P.Em)(),n=e.goDetail;return(0,c.jsxs)(r.View,{className:"agreement",children:["\u6ce8\u518c\u548c\u767b\u5f55\u5373\u4ee3\u8868\u540c\u610f \u300a",(0,c.jsx)(r.View,{className:"link",onClick:n.bind(null,"xieyi"),children:"\u7528\u6237\u534f\u8bae"}),"\u300b \u548c \u300a",(0,c.jsx)(r.View,{className:"link",onClick:n.bind(null,"yinsi"),children:"\u9690\u79c1\u653f\u7b56"}),"\u300b"]})},T=t(2954),C=t.n(T),I=function(){var e=function(){C().navigateTo({url:"account/register/index"})};return(0,c.jsx)(r.View,{onClick:e,style:{paddingRight:"10px"},children:"\u6ce8\u518c"})}},3338:function(e,n,t){"use strict";t.d(n,{f:function(){return r}});var r={oldUserPhone:""}},1225:function(e,n,t){"use strict";t.d(n,{Tt:function(){return g},rh:function(){return x},Em:function(){return m},aC:function(){return b},lg:function(){return w}});var r=t(9301),a=t(5308),c=t(129),o=t(201),u=t(6062),s=t(2954),i=t.n(s),l=t(1241),p=t(1630),f=t(867),d=t(3338),h=t(4299),g=function(){for(var e=i().getCurrentPages(),n={pageIndex:0},t=0;t<e.length;t++)if(e[t]["$taroPath"].indexOf("/account/")>=0){n.pageIndex=0===t?0:e.length-t;break}return n.pageIndex},x=function(e){var n=u.Form.useForm(),t=(0,c.Z)(n,1),s=t[0],x=(0,o.useState)(!1),v=(0,c.Z)(x,2),m=v[0],b=v[1],w=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!m){n.next=2;break}return n.abrupt("return");case 2:n.t0=e,n.next="reg"===n.t0?5:"mobileLogin"===n.t0?8:"accountLogin"===n.t0?11:"forgetPwd"===n.t0?14:"confirmPhone"===n.t0?17:"bindPhone"===n.t0?20:23;break;case 5:return n.next=7,Z(t);case 7:return n.abrupt("break",23);case 8:return n.next=10,k(t);case 10:return n.abrupt("break",23);case 11:return n.next=13,y(t);case 13:return n.abrupt("break",23);case 14:return n.next=16,P(t);case 16:return n.abrupt("break",23);case 17:return n.next=19,j(t);case 19:return n.abrupt("break",23);case 20:return n.next=22,S(t);case 22:return n.abrupt("break",23);case 23:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={userPhone:n.mobile,code:n.code,userPwsswd:n.password,userinfoType:1,userName:n.mobile},e.prev=1,b(!0),e.next=5,(0,l.fz)(t);case 5:i().navigateBack({delta:1}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(27,e.t0);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}(),k=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={userPhone:n.mobile,code:n.code,userinfoType:1},e.prev=1,b(!0),e.next=5,(0,l.XY)(t);case 5:a=e.sent,(0,f.po)("saas-token",a.dataObj.ticketTokenid),i().navigateBack({delta:g(),success:function(e){console.log("\u8c03\u7528\u524d",e),(0,p.bo)()}}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(27,e.t0);case 13:return e.prev=13,b(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(n){return e.apply(this,arguments)}}(),y=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={loginName:n.account,passwd:n.password,code:1234},e.prev=1,b(!0),e.next=5,(0,l.x4)(t);case 5:a=e.sent,(0,f.po)("saas-token",a.dataObj.ticketTokenid),i().navigateBack({delta:g(),success:function(){(0,p.bo)()}}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(27,e.t0);case 13:return e.prev=13,b(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(n){return e.apply(this,arguments)}}(),P=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(70,n),t={userPhone:n.mobile,code:n.code,userPwsswd:n.password},e.prev=2,b(!0),e.next=6,(0,l.gt)(t);case 6:i().navigateBack({delta:1}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(27,e.t0);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(n){return e.apply(this,arguments)}}(),j=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={userPhone:n.mobile,code:n.code},e.next=3,(0,l.ml)(t);case 3:a=e.sent,a.success&&(console.log(148,a),i().navigateTo({url:"".concat(h.At.bindPhone,"?oldUserPhone=").concat(n.mobile)}));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={newUserPhone:n.mobile,code:n.code,oldUserPhone:d.f.oldUserPhone},e.next=3,(0,l.yd)(t);case 3:a=e.sent,a.success&&i().showToast({title:"\u7ed1\u5b9a\u6210\u529f",icon:"success",duration:2e3,success:function(){setTimeout((function(){i().navigateBack({delta:2})}),2e3)}}),console.log(166,a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),T=function(){i().navigateTo({url:h.At.register})},C=function(){i().navigateTo({url:h.At.accountLogin})},I=function(){i().navigateTo({url:h.At.mobileLogin})},F=function(){i().navigateTo({url:h.At.forgetPwd})};return{form:s,onFinish:w,goRegister:T,goAccountLogin:C,goMobileLogin:I,goForgetPwd:F}},v=t(8917),m=function(e){var n=(0,o.useState)(""),t=(0,c.Z)(n,2),u=t[0],s=t[1],p=(0,o.useRef)("");(0,o.useEffect)((function(){(0,a.Z)((0,r.Z)().mark((function n(){var t,a,c;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return f(),n.next=3,(0,l.Vu)();case 3:t=n.sent,a=(0,v.Z)(t,"list"),c=0;case 6:if(!(c<a.length)){n.next=13;break}if(a[c].proappCode!==p.current||a[c].proappConfigType!==e){n.next=10;break}return s(a[c].proappConfigText2),n.abrupt("break",13);case 10:c++,n.next=6;break;case 13:case"end":return n.stop()}}),n)})))()}),[]);var f=function(){var e="weapp";switch(e){case"h5":p.current="003";break;case"weapp":p.current="025";break}},d=function(e){i().navigateTo({url:"/account/agreement/index?type=".concat(e)})};return{agreementData:u,goDetail:d}},b=function(){var e=(0,o.useState)(""),n=(0,c.Z)(e,2),t=n[0],u=n[1],s=(0,o.useState)(""),f=(0,c.Z)(s,2),d=f[0],h=f[1],x=(0,o.useState)(!0),m=(0,c.Z)(x,2),b=m[0],w=m[1];(0,o.useEffect)((function(){Z()}),[]);var Z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.uz)();case 3:n=e.sent,t=n.list[0],u("https://www.".concat(t.proappEnvDomain).concat(t.proappEnvIndexc)),h("https://www.".concat(t.proappEnvDomain).concat(t.proappEnvLogo)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),k=function(e){e.detail.value.length?w(!0):w(!1)},y=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i().login({success:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a,c,o,u,s,i,p;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,l.fJ)({js_code:t.code});case 2:if(a=e.sent,c=(0,v.Z)(a,"dataObj"),o=c.register,u=c.userInfo,s=c.userOpenid,"true"!==o){e.next=10;break}return e.next=7,P(n,s);case 7:return i=e.sent,j(i.dataObj.ticketTokenid),e.abrupt("return");case 10:p=JSON.parse(u),j(p.ticketTokenid);case 12:case"end":return e.stop()}}),e)})));function t(n){return e.apply(this,arguments)}return t}()});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),P=function(e,n){return(0,l.q_)({code:e.detail.code,userOpenid:n})},j=function(e){i().setStorageSync("saas-token",e),S()},S=function(){i().navigateBack({delta:g(),success:function(){(0,p.bo)()}})};return{bg:t,logo:d,agreeFunc:k,setAgree:w,agree:b,getPhone:y}},w=function(){var e=(0,o.useState)(""),n=(0,c.Z)(e,2),t=n[0],u=n[1];(0,o.useEffect)((function(){s()}),[]);var s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,l.lA)();case 2:n=e.sent,t=(0,v.Z)(n,"userInfo.userPhone"),u(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{originPhone:t}}},5829:function(e,n,t){"use strict";var r=t(129),a=t(201),c=t(867),o=t(4808),u=t(1515),s=t(2954),i=t.n(s),l=t(9170),p=t(7696),f=t(2269),d=i().getEnv(),h=function(e){var n=e.slot,t=(0,a.useState)(),h=(0,r.Z)(t,2),g=h[0],x=h[1],v=(0,s.useRouter)(),m=v.path,b=(0,a.useMemo)((function(){return"WEAPP"===d||/^\/pages/.test(m)}),[m]);(0,a.useEffect)((function(){var e=(0,l.Z)(i().getCurrentPages()),n=e.config.navigationBarTitleText;x(n)}),[m]);var w=function(){var e=(0,p.Qm)();e?(0,c.Ct)("/pages/index/index"):(0,c.yZ)(-1)};return(0,f.jsx)(f.Fragment,{children:b?null:(0,f.jsxs)(u.View,{className:"header",children:[(0,f.jsx)(o.yC,{style:{fontSize:20},value:"xiangzuo",onClick:w}),(0,f.jsx)(u.View,{className:"title",children:g}),(0,f.jsx)(u.View,{children:n})]})})};n["Z"]=h},5298:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(298),a=t(8277),c=t(9106),o=t(1515),u=t(5829),s=t(8917),i=t(6572),l=t(1859),p=t(2954),f=t.n(p),d=t(201),h=t(2269),g=["node","base","topPage"],x=f().getEnv(),v=function(e){var n=e.node,t=e.base,c=e.topPage,u=(0,a.Z)(e,g),p=f().getStorageSync("safeArea"),v=(0,d.useMemo)((function(){var e=0;return"WEB"!==x||c||(e=37),c?f().getStorageSync("tabBarHeight"):e}),[]);return(0,h.jsx)(h.Fragment,{children:n.map((function(e){var n=e.id,a=e.props,c=void 0===a?{}:a,f=e.type,d=(0,s.Z)(l,f,i.Z);return(0,h.jsx)(o.View,{className:"monitor-node",style:{height:t?"":"calc(100vh - ".concat(p,"px - ").concat(v,"px)")},children:(0,h.jsx)(o.View,{className:"content",style:{height:"100%"},children:(0,h.jsx)(d,(0,r.Z)((0,r.Z)({},c),u))})},n)}))})},m=v,b=["route"],w=function(e){var n=e.route,t=(0,a.Z)(e,b),s=(0,c.Gm)(n);return(0,h.jsxs)(o.View,{className:"wrapper",children:[(0,h.jsx)(u.Z,{}),(0,h.jsx)(m,(0,r.Z)({node:s},t))]})},Z=w},9106:function(e,n,t){"use strict";t.d(n,{H9:function(){return y},hj:function(){return T},Gm:function(){return S}});var r=t(9301),a=t(5308),c=t(129),o=t(201),u=t(5232),s=t(8917),i=t(2954),l=t.n(i),p=t(1241),f=t(7237),d=t(4460),h=t(5023),g={},x=function(){function e(n){(0,f.Z)(this,e),(0,h.Z)(this,"lowCodeGraph",void 0),this.lowCodeGraph=n}return(0,d.Z)(e,[{key:"init",value:function(e){this.lowCodeGraph=e}}]),e}(),v=new Map,m="",b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,t=m=e.toString(),r=v.get(t);return r||(r=new x(n),v.set(t,r)),r},w=t(298),Z={"/pages/index/index":{menuJspath:"/pages/index/index",selectedIconPath:"../images/tabbar_home_on.png",iconPath:"../images/tabbar_home.png"},"/pages/classify/index":{menuJspath:"/pages/classify/index",selectedIconPath:"../images/tabbar_cate_on.png",iconPath:"../images/tabbar_cate.png"},"/pages/shopping/index":{menuJspath:"/pages/shopping/index",selectedIconPath:"../images/tabbar_cart_on.png",iconPath:"../images/tabbar_cart.png"},"/pages/my/index":{menuJspath:"/pages/my/index",selectedIconPath:"../images/tabbar_my_on.png",iconPath:"../images/tabbar_my.png"}},k=t(7561);function y(){var e=(0,o.useState)([]),n=(0,c.Z)(e,2),t=n[0],u=n[1],s=(0,o.useState)(),i=(0,c.Z)(s,2),p=i[0],f=i[1];(0,o.useEffect)((function(){console.log(15),(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=l().getStorageSync("taroMenu"),!n){e.next=5;break}return u(n),d(),e.abrupt("return");case 5:return e.prev=5,e.next=8,P();case 8:t=e.sent,u(t),d(),e.next=15;break;case 13:e.prev=13,e.t0=e["catch"](5);case 15:case"end":return e.stop()}}),e,null,[[5,13]])})))()}),[]);var d=function(){var e=l().getCurrentInstance().router.path,n=void 0===e?"/pages/index/index":e;f(n)};return{menuList:t,activePath:p}}function P(){return j.apply(this,arguments)}function j(){return j=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,p.iZ)({proappCode:"025",rows:30,page:1});case 2:if(n=e.sent,t=n.map((function(e){return(0,w.Z)((0,w.Z)({},Z[e.menuJspath]),{},{text:e.tginfoMenuName,menuOpcode:e.menuOpcode})})),![[],void 0,null,""].includes(t)){e.next=7;break}return(0,k.M)("\u79df\u6237\u83dc\u5355\u914d\u7f6e\u4e0d\u6b63\u786e"),e.abrupt("return");case 7:return l().setStorageSync("taroMenu",t),l().setStorageSync("menu",t.concat(n[0].children)),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function S(e){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),i=t[0],f=t[1],d=b(e);function h(e){return g.apply(this,arguments)}function g(){return g=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,c;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=l().getStorageSync("menu")||[],!(0,u.Z)(t)){e.next=5;break}return e.next=4,P();case 4:t=e.sent;case 5:if(a=t.find((function(e){return n.includes(e.menuJspath)}))||{},c=a.menuOpcode,c){e.next=9;break}return(0,k.M)("\u83dc\u5355\u914d\u7f6e\u6709\u95ee\u9898"),e.abrupt("return");case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}return(0,o.useEffect)((function(){(0,a.Z)((0,r.Z)().mark((function n(){var t,a,c,o,i,l;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,h(e);case 2:if(t=n.sent,a=v.get(e),!a||(0,u.Z)(a.lowCodeGraph)){n.next=8;break}return c=a.lowCodeGraph,f(c.nodeGraph),n.abrupt("return");case 8:return console.log(t),n.next=11,(0,p.X8)({menuOpcode:t,proappCode:"025",isNew:1});case 11:o=n.sent,i=(0,s.Z)(o,"modelTagvalueJson","{}"),l=JSON.parse(i),l.hasOwnProperty("nodeGraph")||((0,k.M)("\u810f\u6570\u636e, \u521d\u59cb\u5316\u9ed8\u8ba4\u6570\u636e"),l={nodeGraph:[],page:"",version:"",pageConfig:{}}),d.init(l),f(l.nodeGraph);case 17:case"end":return n.stop()}}),n)})))()}),[e]),i}var T=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}},7696:function(e,n,t){"use strict";t.d(n,{z4:function(){return c},Qm:function(){return s},L3:function(){return o},BI:function(){return u}});t(9301),t(5308);var r=t(2954),a=t.n(r);t(1241);var c=function(e,n){return/^1[3456789]\d{9}$/.test(n)?Promise.resolve():Promise.reject({required:!0,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7"})},o=/^1[3456789]\d{9}$/,u=function(){try{var e,n=a().getSystemInfoSync(),t=n.screenHeight,r=(null===(e=n.safeArea)||void 0===e?void 0:e.bottom)||n.screenHeight,c=n.screenWidth;a().setStorageSync("safeArea",t-r),a().setStorageSync("tabBarHeight",Math.floor(50*c/375))}catch(e){console.log(e)}},s=function(){var e=a().getCurrentPages().length;return 1===e}},7561:function(e,n,t){"use strict";t.d(n,{F:function(){return c},M:function(){return o}});var r=t(2954),a=t.n(r),c=function(e){a().showToast({title:e.msg,icon:"success",duration:1e3})},o=function(e){a().showToast({title:e,icon:"error",duration:1500})}},4654:function(){}}]);