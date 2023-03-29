"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["subpackage/expressinfo/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/subpackage/expressinfo/index.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/subpackage/expressinfo/index.tsx ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/subpackage/expressinfo/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






var Index = function Index() {
  var _useRouter = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useRouter)(),
    params = _useRouter.params;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "expressInfo",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.ExpressInfoTop, {
      code: params.code
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.ExpressInfoStep, {
      code: params.code
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/subpackage/expressinfo/components/expressInfoStep.tsx":
/*!*******************************************************************!*\
  !*** ./src/subpackage/expressinfo/components/expressInfoStep.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpressInfoStep": function() { return /* binding */ ExpressInfoStep; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var qj_mobile_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qj-mobile-store */ "../qj-api-store/packages/qj-mobile-store/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





var ExpressInfoStep = function ExpressInfoStep(_ref) {
  var code = _ref.code;
  var _useExpressInfo = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_0__.useExpressInfo)(code),
    detail = _useExpressInfo.detail;
  var message = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(detail, 'message');
  var list = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(detail, 'data');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "expressInfoStep",
    children: message === 'ok' ? list.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "step",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "time",
          children: item.time
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          children: item.context
        })]
      }, index);
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "noInfo",
      children: message
    })
  });
};

/***/ }),

/***/ "./src/subpackage/expressinfo/components/expressInfoTop.tsx":
/*!******************************************************************!*\
  !*** ./src/subpackage/expressinfo/components/expressInfoTop.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpressInfoTop": function() { return /* binding */ ExpressInfoTop; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var qj_mobile_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qj-mobile-store */ "../qj-api-store/packages/qj-mobile-store/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
//@ts-nocheck





var ExpressInfoTop = function ExpressInfoTop(_ref) {
  var code = _ref.code;
  var _useExpressInfo = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_0__.useExpressInfo)(code),
    info = _useExpressInfo.info,
    detail = _useExpressInfo.detail;
  var bg = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(info, 'packageList[0].contractGoodsList[0].dataPic');
  var num = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(info, 'packageList.length');
  var company = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(info, 'packageList[0].expressName');
  var expressNO = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(info, 'packageList[0].packageBillno');
  var state = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(detail, 'result');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "expressInfoTop",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "goodsImg",
      style: {
        backgroundImage: "url(".concat(bg, ")")
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "tip",
        children: ["\u5171 ", num, " \u4EF6\u5546\u54C1"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "list",
      children: [state, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "listItem",
        children: ["\u7269\u6D41\u72B6\u6001\uFF1A", state ? state : '暂时无法获取物流状态']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "listItem",
        children: ["\u5FEB\u9012\u516C\u53F8\uFF1A", company]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "listItem",
        children: ["\u5FEB\u9012\u5355\u53F7\uFF1A", expressNO]
      })]
    })]
  });
};

/***/ }),

/***/ "./src/subpackage/expressinfo/components/index.ts":
/*!********************************************************!*\
  !*** ./src/subpackage/expressinfo/components/index.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpressInfoStep": function() { return /* reexport safe */ _expressInfoStep__WEBPACK_IMPORTED_MODULE_1__.ExpressInfoStep; },
/* harmony export */   "ExpressInfoTop": function() { return /* reexport safe */ _expressInfoTop__WEBPACK_IMPORTED_MODULE_0__.ExpressInfoTop; }
/* harmony export */ });
/* harmony import */ var _expressInfoTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expressInfoTop */ "./src/subpackage/expressinfo/components/expressInfoTop.tsx");
/* harmony import */ var _expressInfoStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expressInfoStep */ "./src/subpackage/expressinfo/components/expressInfoStep.tsx");



/***/ }),

/***/ "./src/subpackage/expressinfo/index.tsx":
/*!**********************************************!*\
  !*** ./src/subpackage/expressinfo/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/subpackage/expressinfo/index.tsx");


var config = {"navigationBarTitleText":"物流信息"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'subpackage/expressinfo/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/subpackage/expressinfo/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map