"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[2749],{1903:function(e,s,a){var i=a(2180),c=a(2954),n=a(1515),t=a(4299),r=a(8917),l=a(2269),o=function(e){var s=e.code,a=(0,t.le)(s),i=a.info,c=a.detail,o=(0,r.Z)(i,"packageList[0].contractGoodsList[0].dataPic"),d=(0,r.Z)(i,"packageList.length"),x=(0,r.Z)(i,"packageList[0].expressName"),m=(0,r.Z)(i,"packageList[0].packageBillno"),p=(0,r.Z)(c,"result");return(0,l.jsxs)(n.View,{className:"expressInfoTop",children:[(0,l.jsx)(n.View,{className:"goodsImg",style:{backgroundImage:"url(".concat(o,")")},children:(0,l.jsxs)(n.View,{className:"tip",children:["\u5171 ",d," \u4ef6\u5546\u54c1"]})}),(0,l.jsxs)(n.View,{className:"list",children:[p,(0,l.jsxs)(n.View,{className:"listItem",children:["\u7269\u6d41\u72b6\u6001\uff1a",p||"\u6682\u65f6\u65e0\u6cd5\u83b7\u53d6\u7269\u6d41\u72b6\u6001"]}),(0,l.jsxs)(n.View,{className:"listItem",children:["\u5feb\u9012\u516c\u53f8\uff1a",x]}),(0,l.jsxs)(n.View,{className:"listItem",children:["\u5feb\u9012\u5355\u53f7\uff1a",m]})]})]})},d=function(e){var s=e.code,a=(0,t.le)(s),i=a.detail,c=(0,r.Z)(i,"message"),o=(0,r.Z)(i,"data");return(0,l.jsx)(n.View,{className:"expressInfoStep",children:"ok"===c?o.map((function(e,s){return(0,l.jsxs)(n.View,{className:"step",children:[(0,l.jsx)(n.View,{className:"time",children:e.time}),(0,l.jsx)(n.View,{children:e.context})]},s)})):(0,l.jsx)(n.View,{className:"noInfo",children:c})})},x=function(){var e=(0,c.useRouter)(),s=e.params;return(0,l.jsxs)(n.View,{className:"expressInfo",children:[(0,l.jsx)(o,{code:s.code}),(0,l.jsx)(d,{code:s.code})]})},m=x,p={navigationBarTitleText:"\u7269\u6d41\u4fe1\u606f"};Page((0,i.createPageConfig)(m,"subpackage/expressinfo/index",{root:{cn:[]}},p||{}))}},function(e){var s=function(s){return e(e.s=s)};e.O(0,[2107,1216,8592],(function(){return s(1903)}));e.O()}]);