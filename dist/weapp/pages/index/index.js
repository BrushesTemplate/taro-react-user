"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brushes/utils */ "./node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _orderItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderItem */ "./src/pages/index/orderItem.tsx");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/isEmpty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);












var isTaro = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
function Index() {
  var isScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var num = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    init();
  }, []);
  var init = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function () {
    num.current = 0;
    setData([]);
    onScroll();
  });
  var onScroll = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
    var e,
      _data,
      _args = arguments;
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          if (!isScroll.current) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return");
        case 3:
          setLoading(true);
          ++num.current;
          _context.prev = 5;
          _context.next = 8;
          return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_1__.queryContractPageC)({
            page: num.current,
            rows: 10,
            isLocalMock: !isTaro,
            childFlag: true,
            dataStateStr: -1
          });
        case 8:
          _data = _context.sent;
          isScroll.current = (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(_data.rows) || _data.rows.length < 10;
          setData(function (val) {
            return val.concat(_data.rows || []);
          });
          setLoading(false);
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](5);
          --num.current;
          console.log(30, _context.t0);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[5, 14]]);
  })));
  var onScrollImpl = function onScrollImpl(e) {
    console.log(e.detail);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: 'orderListItemWrap',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
      className: "scrollview",
      scrollY: true,
      scrollWithAnimation: true,
      scrollTop: 0,
      style: {
        height: '90vh'
      },
      lowerThreshold: 50,
      upperThreshold: 50,
      onScrollToUpper: onScroll // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
      ,

      onScroll: onScrollImpl,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        children: data.map(function (item, index) {
          return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_orderItem__WEBPACK_IMPORTED_MODULE_3__.Item, (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
            init: init
          }, item), {}, {
            key: index
          }));
        })
      })
    })
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/pages/index/orderItem.tsx":
/*!***************************************!*\
  !*** ./src/pages/index/orderItem.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": function() { return /* binding */ Item; }
/* harmony export */ });
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brushes/simulate-component */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @brushes/simulate-component */ "./node_modules/@brushes/simulate-component/dist/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brushes/utils */ "./node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var qj_mobile_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qj-mobile-store */ "./node_modules/qj-mobile-store/dist/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/common/card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/OrderDetail/component/footer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);








var Button = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_4__.Button;
function Item(_ref) {
  var contractBillcode = _ref.contractBillcode,
    dataBmoney = _ref.dataBmoney,
    dataBnum = _ref.dataBnum,
    goodsList = _ref.goodsList,
    dataState = _ref.dataState,
    contractId = _ref.contractId,
    init = _ref.init,
    contractAppraise = _ref.contractAppraise;
  var _useComponent = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_5__.useComponent)(),
    View = _useComponent.View;
  var status = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_1__.orderStatusImpl)(dataState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(View, {
    className: 'orderListItem',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(View, {
      onClick: function onClick() {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_1__.routerMap.orderDetail, "?contractBillcode=").concat(contractBillcode));
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(View, {
        className: 'topInfo',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(View, {
          className: 'orderNo',
          children: ["\u8BA2\u5355\u53F7: ", contractBillcode, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Button, {
            className: 'copy',
            size: "mini",
            fill: 'outline',
            children: "\u590D\u5236"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(View, {
          className: 'status',
          children: status
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(View, {
        className: 'goodsItemWrap',
        children: [goodsList.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/common/card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, item), item.contractGoodsId);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(View, {
          className: 'allInfo',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(View, {
            className: 'totalNum',
            children: ["\u5171", dataBnum, "\u4EF6\u5546\u54C1"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(View, {
            className: 'totalPrice',
            children: ["\u5408\u8BA1 \uFFE5", dataBmoney]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/OrderDetail/component/footer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      init: init,
      contractId: contractId,
      contractBillcode: contractBillcode,
      dataState: dataState,
      contractAppraise: contractAppraise
    })]
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map