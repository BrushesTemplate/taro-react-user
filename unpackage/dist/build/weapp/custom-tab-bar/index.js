"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[23],{9210:function(e,t,a){var n=a(2180),r=a(129),s=a(201),c=a(2954),i=a.n(c),o=a(1515),u=a(3735),b=a(2269),l=function(){var e=(0,s.useState)("#b8b8b8"),t=(0,r.Z)(e,1),a=t[0],n=(0,s.useState)("#000000"),c=(0,r.Z)(n,1),l=c[0],m=(0,u.H9)(),h=m.menuList,p=m.activePath,v=function(e){i().switchTab({url:"/"+e})};return(0,b.jsxs)(o.CoverView,{className:"tab-bar",children:[(0,b.jsx)(o.CoverView,{className:"tab-bar-border"}),h.map((function(e,t){return(0,b.jsxs)(o.CoverView,{className:"tab-bar-item",onClick:function(){return v(e.pagePath)},children:[(0,b.jsx)(o.CoverImage,{className:"tab-bar-item-img",src:p.includes(e.pagePath)?"../"+e.selectedIconPath:"../"+e.iconPath}),(0,b.jsx)(o.CoverView,{className:"tab-bar-item-view",style:{color:p.includes(e.pagePath)?l:a},children:e.text})]},t)}))]})},m=l;Component((0,n.createComponentConfig)(m,"custom-tab-bar/index"))}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[2107,1216,8592],(function(){return t(9210)}));e.O()}]);