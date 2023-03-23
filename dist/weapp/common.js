(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "../../2023-qj/qj-request-tools/packages/utils/dist/index.js":
/*!*******************************************************************!*\
  !*** ../../2023-qj/qj-request-tools/packages/utils/dist/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEnv": function() { return /* binding */ a; },
/* harmony export */   "getTaro": function() { return /* binding */ d; },
/* harmony export */   "useImmutableCallback": function() { return /* binding */ I; }
/* harmony export */ });
/* unused harmony exports errMessage, formDataTrans, getKey, getParams, getStorage, getStorageWeb, getTokenValueKey, getUrl, navigatorBackImpl, navigatorImpl, removeStorage, setStorage, setStorageWeb, sucMessage, switchTabImpl, useMountedRef */
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../../2023-qj/qj-request-tools/node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../../2023-qj/qj-request-tools/node_modules/lodash-es/omit.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "../../2023-qj/qj-request-tools/node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../../2023-qj/qj-request-tools/node_modules/lodash-es/noop.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["window"];



function a() {
  try {
    return !("low-code" === user);
  } catch (t) {
    return !0;
  }
}
function u() {
  try {
    return "https://b2cweapp40673927e2a14ea49df338dc06bd4e9a.saas.qjclouds.com/" || 0;
  } catch (t) {
    return "";
  }
}
function s() {
  try {
    return "saas-token" || 0;
  } catch (t) {
    return "saas-token";
  }
}
function l() {
  try {
    return process.env.REACT_APP_SESSION_VALUE_KEY || "saas-token";
  } catch (t) {
    return "saas-token";
  }
}
var f = {};
function d() {
  return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(f) && (f = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro")), f;
}
var v = function v(t) {
    var n = window.localStorage.getItem(t) || "";
    try {
      return JSON.parse(n);
    } catch (t) {
      return n;
    }
  },
  S = function S(t) {
    try {
      if (localStorage) return v(t);
      return d().getStorageSync(t);
    } catch (t) {
      return "";
    }
  },
  y = function y(t, n) {
    "string" == typeof n ? window.localStorage.setItem(t, n) : window.localStorage.setItem(t, JSON.stringify(n));
  },
  h = function h(t, n) {
    if (localStorage) y(t, n);else {
      d().setStorageSync(t, n);
    }
  },
  g = function g(t) {
    if (localStorage) window.localStorage.removeItem(t);else {
      d().removeStorageSync(t);
    }
  };
function w(t, n, e, o) {
  return new (e || (e = Promise))(function (r, i) {
    function c(t) {
      try {
        u(o.next(t));
      } catch (t) {
        i(t);
      }
    }
    function a(t) {
      try {
        u(o.throw(t));
      } catch (t) {
        i(t);
      }
    }
    function u(t) {
      var n;
      t.done ? r(t.value) : (n = t.value, n instanceof e ? n : new e(function (t) {
        t(n);
      })).then(c, a);
    }
    u((o = o.apply(t, n || [])).next());
  });
}
function p(t) {
  return w(this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee() {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!a()) {
            _context.next = 4;
            break;
          }
          _context.next = 3;
          return d();
        case 3:
          _context.sent.navigateTo({
            url: t
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
}
function m() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return w(this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee2() {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!a()) {
            _context2.next = 4;
            break;
          }
          _context2.next = 3;
          return d();
        case 3:
          _context2.sent.navigateBack({
            delta: t
          });
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
}
function _(t) {
  return w(this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee3() {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!a()) {
            _context3.next = 4;
            break;
          }
          _context3.next = 3;
          return d();
        case 3:
          _context3.sent.switchTab({
            url: t
          });
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
}
var E = function E(t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
    return w(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee4() {
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!a()) {
              _context4.next = 4;
              break;
            }
            _context4.next = 3;
            return d();
          case 3:
            _context4.sent.showToast({
              title: t,
              icon: n,
              duration: 1e3
            });
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
  },
  A = function A(t) {
    return w(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee5() {
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!a()) {
              _context5.next = 4;
              break;
            }
            _context5.next = 3;
            return d();
          case 3:
            _context5.sent.showToast({
              title: t,
              icon: "error",
              duration: 1500
            });
          case 4:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
  },
  P = function P(t) {
    var n = new FormData();
    for (var _e in t) ["", void 0, null].includes(t[_e]) || n.append(_e, t[_e]);
    return n;
  },
  T = function T() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(t, "isLocalMock");
  },
  k = function k() {
    var t = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      return t.current = !0, function () {
        t.current = !1;
      };
    }, []), t;
  };
function I(t) {
  var n = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return n.current = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(t) ? t : lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"], (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return n.current.apply(n, arguments);
  }, [n]);
}


/***/ }),

/***/ "../../qj/qj-mobile-core/packages/simulate-component/dist/index.js":
/*!*************************************************************************!*\
  !*** ../../qj/qj-mobile-core/packages/simulate-component/dist/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconMobile": function() { return /* binding */ _; },
/* harmony export */   "Loading": function() { return /* binding */ k; },
/* harmony export */   "NumStep": function() { return /* binding */ V; },
/* harmony export */   "Popup": function() { return /* binding */ q; },
/* harmony export */   "ScrollView": function() { return /* binding */ C; },
/* harmony export */   "SmoothCheckbox": function() { return /* binding */ A; },
/* harmony export */   "SmoothRadio": function() { return /* binding */ P; },
/* harmony export */   "SmoothSwiper": function() { return /* binding */ T; },
/* harmony export */   "Tabs": function() { return /* binding */ I; },
/* harmony export */   "View": function() { return /* binding */ j; },
/* harmony export */   "WrapLoading": function() { return /* binding */ W; },
/* harmony export */   "useComponent": function() { return /* binding */ S; }
/* harmony export */ });
/* unused harmony exports SmoothNoticeBar, Text, fetchResource, useImmutableCallback, useLazyRef */
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js */ "./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-core/node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-core/node_modules/lodash-es/noop.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brushes/utils */ "../../2023-qj/qj-request-tools/packages/utils/dist/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile */ "../../qj/qj-mobile-core/node_modules/antd-mobile/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../qj/qj-mobile-core/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);










function b(e, n) {
  var t = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (t[i] = e[i]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (t[i[r]] = e[i[r]]);
  }
  return t;
}
function f(e, n, t, i) {
  return new (t || (t = Promise))(function (r, o) {
    function s(e) {
      try {
        a(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function c(e) {
      try {
        a(i.throw(e));
      } catch (e) {
        o(e);
      }
    }
    function a(e) {
      var n;
      e.done ? r(e.value) : (n = e.value, n instanceof t ? n : new t(function (e) {
        e(n);
      })).then(s, c);
    }
    a((i = i.apply(e, n || [])).next());
  });
}
var j = function j(n) {
    var t = n.children,
      i = b(n, ["children"]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({}, i, {
      children: t
    }));
  },
  v = function v(e) {
    var t = e.children,
      i = b(e, ["children"]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", Object.assign({}, i, {
      children: [" ", t]
    }));
  };
function O(e) {
  var n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  return n.current = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(e) ? e : lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"], (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return n.current.apply(n, arguments);
  }, [n]);
}
function y(e) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(n);
  return t.current === n && (t.current = e()), t;
}
var w = new Map();
function x() {
  return function (e) {
    var n,
      t = "pending",
      i = e.then(function (e) {
        t = "success", n = e;
      }, function (e) {
        t = "error", n = e;
      });
    return {
      read: function read() {
        if ("pending" === t) throw i;
        if ("error" === t) throw n;
        if ("success" === t) return n;
      }
    };
  }(function () {
    var _this = this;
    var e = w.get("component");
    return new Promise(function (n) {
      e ? n(e) : function () {
        f(_this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
          var e, _yield$Promise$all, _yield$Promise$all2, _n, _t, _n2;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                e = {};
                if (!(0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)()) {
                  _context.next = 11;
                  break;
                }
                _context.next = 4;
                return Promise.all([Promise.resolve().then(function () {
                  return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_8__["default"])(__webpack_require__(/*! @tarojs/components */ "../../qj/qj-mobile-core/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"));
                }), Promise.resolve().then(function () {
                  return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_8__["default"])(__webpack_require__(/*! antd-mobile */ "../../qj/qj-mobile-core/node_modules/antd-mobile/es/index.js"));
                })]);
              case 4:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_yield$Promise$all, 2);
                _n = _yield$Promise$all2[0];
                _t = _yield$Promise$all2[1];
                e = Object.assign(Object.assign({}, _t), _n);
                _context.next = 15;
                break;
              case 11:
                _context.next = 13;
                return Promise.resolve().then(function () {
                  return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_8__["default"])(__webpack_require__(/*! antd-mobile */ "../../qj/qj-mobile-core/node_modules/antd-mobile/es/index.js"));
                });
              case 13:
                _n2 = _context.sent;
                e = Object.assign(Object.assign({}, _n2), {
                  View: j,
                  Text: v
                });
              case 15:
                w.set("component", e), n(e);
              case 16:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
      }();
    });
  }());
}
var N = x();
function S() {
  var _o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
      return N.read();
    }),
    _o2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o, 1),
    e = _o2[0];
  return e;
}
function T(n) {
  var _this2 = this;
  var _n$indicatorDots = n.indicatorDots,
    t = _n$indicatorDots === void 0 ? !0 : _n$indicatorDots,
    _n$direction = n.direction,
    i = _n$direction === void 0 ? "horizontal" : _n$direction,
    r = n.autoplayInterval,
    _n$loop = n.loop,
    c = _n$loop === void 0 ? !0 : _n$loop,
    a = n.data,
    l = n.type,
    d = n.render,
    p = n.style,
    m = n.imgHeight,
    g = b(n, ["indicatorDots", "direction", "autoplayInterval", "loop", "data", "type", "render", "style", "imgHeight"]);
  var _S = S(),
    j = _S.Swiper,
    v = _S.SwiperItem,
    _o3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _o4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o3, 2),
    O = _o4[0],
    y = _o4[1],
    w = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
    x = (null == j ? void 0 : j.Item) || v;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      f(_this2, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2() {
        var e, _n3;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e = {};
              if (!w) {
                _context2.next = 8;
                break;
              }
              _context2.next = 4;
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)();
            case 4:
              _n3 = _context2.sent.getSystemInfoSync().windowWidth;
              e = {
                vertical: "horizontal" !== i,
                interval: r,
                indicatorColor: "#999",
                indicatorActiveColor: "#333",
                circular: c,
                indicatorDots: t,
                style: Object.assign(Object.assign({}, p), {
                  height: 1 == l ? Math.floor(_n3 * m.height / m.width) : ""
                })
              };
              _context2.next = 9;
              break;
            case 8:
              e = {
                direction: i,
                autoplayInterval: r,
                loop: c,
                style: p
              };
            case 9:
              y(e);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
    })();
  }, [i, r, c, t]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(j, Object.assign({}, Object.assign(Object.assign({}, O), g), {
    children: a.map(function (n, t) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(x, {
        children: d(n)
      }, t);
    })
  }));
}
var C = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref) {
  var _ref$Threshold = _ref.Threshold,
    n = _ref$Threshold === void 0 ? 50 : _ref$Threshold,
    t = _ref.onScroll,
    _ref$scrollTop = _ref.scrollTop,
    i = _ref$scrollTop === void 0 ? 0 : _ref$scrollTop,
    r = _ref.children,
    s = _ref.height;
  var _S2 = S(),
    c = _S2.ScrollView,
    l = _S2.PullToRefresh,
    _o5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(i),
    _o6 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o5, 2),
    d = _o6[0],
    m = _o6[1],
    g = c || l,
    b = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
    f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
      return b ? {
        scrollY: !0,
        enablePassive: !0,
        scrollWithAnimation: !0,
        upperThreshold: n,
        lowerThreshold: n,
        onScrollToLower: t,
        style: {
          height: "calc(100vh - ".concat(s, "px)")
        }
      } : {
        onRefresh: t
      };
    }, [s]),
    j = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function (e) {
      if ("WEB" === (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)().getEnv()) {
        var _n4 = e.detail.scrollTop;
        m(_n4);
      }
    });
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
    onScroll: j
  }, f, {
    scrollTop: d
  }, {
    children: r
  }));
});
function k(_ref2) {
  var _ref2$text = _ref2.text,
    t = _ref2$text === void 0 ? "加载中……" : _ref2$text;
  var _S3 = S(),
    i = _S3.View,
    r = _S3.Text;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
    style: {
      textAlign: "center",
      fontSize: "14px",
      padding: "5px 0"
    }
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
      className: "qj-loading"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
        className: "qj-loading__ring"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
        className: "qj-loading__ring"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
        className: "qj-loading__ring"
      })]
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
      style: {
        marginLeft: 5
      }
    }, {
      children: t
    }))]
  }));
}
var z = function z(_ref3) {
    var n = _ref3.tabs,
      t = _ref3.onChange,
      i = _ref3.actived;
    var _S4 = S(),
      r = _S4.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
      className: "qj-tabs",
      id: "qj-tabs-id"
    }, {
      children: n.map(function (n, o) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
          onClick: function onClick() {
            return t(o, n);
          },
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
            "actived-item": i === o,
            "default-item": !0
          })
        }, {
          children: n.name
        }), o);
      })
    }));
  },
  I = function I(_ref4) {
    var i = _ref4.tabs,
      r = _ref4.render,
      s = _ref4.defaultIndex;
    var _S5 = S(),
      c = _S5.View,
      _o7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(s),
      _o8 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o7, 2),
      a = _o8[0],
      l = _o8[1],
      _o9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
        var e = new Array(s + 1);
        return e[s] = i[s], e;
      }),
      _o10 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o9, 2),
      d = _o10[0],
      u = _o10[1];
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(z, {
        actived: a,
        onChange: function onChange(e, n) {
          l(e), u(function (t) {
            return t[e] = n, t;
          });
        },
        tabs: i
      }), d.map(function (n, t) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          style: {
            display: t === a ? "block" : "none"
          }
        }, {
          children: r(n)
        }), t);
      })]
    });
  },
  _ = function _(_ref5) {
    var _ref5$className = _ref5.className,
      n = _ref5$className === void 0 ? "iconfont" : _ref5$className,
      _ref5$prefixClass = _ref5.prefixClass,
      t = _ref5$prefixClass === void 0 ? "icon" : _ref5$prefixClass,
      _ref5$onClick = _ref5.onClick,
      i = _ref5$onClick === void 0 ? function () {} : _ref5$onClick,
      _ref5$style = _ref5.style,
      r = _ref5$style === void 0 ? {
        fontSize: 16,
        color: "#444",
        fontWeight: 900
      } : _ref5$style,
      o = _ref5.value;
    var _S6 = S(),
      s = _S6.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, {
      onClick: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(t, o ? "".concat(t, "-").concat(o) : "", n),
      style: r
    });
  },
  q = function q(_ref6) {
    var t = _ref6.popupVisible,
      i = _ref6.popupHandler,
      r = _ref6.children;
    var _S7 = S(),
      o = _S7.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(o, Object.assign({
      className: "brushes-popup " + (t ? "show" : "")
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, {
        className: "brushes-popup-mask",
        onClick: function onClick() {
          return i(!1);
        }
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(o, Object.assign({
        className: "brushes-popup-content"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
          className: "brushes-popup-closeWrap"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_, {
            value: "close-bold",
            style: {
              fontSize: 22
            },
            onClick: function onClick() {
              return i(!1);
            }
          })
        })), r]
      }))]
    }));
  },
  V = function V(_ref7) {
    var t = _ref7.count,
      i = _ref7.handleStep;
    var _S8 = S(),
      r = _S8.View,
      o = _S8.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
      className: "numStep"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_, {
        value: "jianqu",
        onClick: i.bind(null, "minus")
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
        className: "content"
      }, {
        children: t
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_, {
        value: "zengjia",
        onClick: i.bind(null, "plus")
      })]
    }));
  },
  P = function P(n) {
    var t = n.children,
      i = b(n, ["children"]);
    var _S9 = S(),
      r = _S9.RadioGroup,
      o = _S9.Radio,
      s = r || (null == o ? void 0 : o.Group);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({}, i, {
      children: t
    }));
  },
  A = function A(n) {
    var t = n.children,
      i = b(n, ["children"]);
    var _S10 = S(),
      r = _S10.CheckboxGroup,
      o = _S10.Checkbox,
      s = r || (null == o ? void 0 : o.Group);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({}, i, {
      children: t
    }));
  };
function W(_ref8) {
  var t = _ref8.loading,
    i = _ref8.children;
  var _S11 = S(),
    r = _S11.View;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
    style: {
      position: "relative",
      textAlign: "center"
    }
  }, {
    children: [i, t ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
      className: "wrap-loading"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
        className: "qj-loading"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
          className: "qj-loading__ring"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
          className: "qj-loading__ring"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
          className: "qj-loading__ring"
        })]
      }))
    })) : null]
  }));
}
var E = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)(),
  R = function R(_ref9) {
    var _ref9$content = _ref9.content,
      i = _ref9$content === void 0 ? [] : _ref9$content,
      r = _ref9.speed,
      c = _ref9.icon,
      _ref9$direction = _ref9.direction,
      l = _ref9$direction === void 0 ? "horizontal" : _ref9$direction,
      d = _ref9.navigator;
    var _S12 = S(),
      u = _S12.View,
      p = _S12.NoticeBar,
      _o11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _o12 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o11, 2),
      m = _o12[0],
      g = _o12[1],
      b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return "horizontal" === l ? null != r ? r : 30 : null != r ? r : 20;
      }, []),
      f = "horizontal" === l ? "scroll-animate" : "normal",
      j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return i.toString().length;
      }, [i]),
      v = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return "horizontal" === l ? 1e3 : 250;
      }, [l]),
      O = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        switch (l) {
          case "horizontal":
            return 10 * j;
          case "vertical":
            return "100%";
        }
      }, [l, j]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      if (!E) return;
      var e = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)();
      var n = "";
      var t = setTimeout(function () {
        e.createSelectorQuery().select("#animElemId").boundingClientRect(function (t) {
          var r = t.width,
            o = t.height,
            s = y(r);
          console.log(r, 49, s);
          var c = 500 * s / +b,
            a = function a() {
              var n = e.createAnimation({
                  duration: c * v,
                  timingFunction: "linear"
                }),
                t = e.createAnimation({
                  duration: 0,
                  timingFunction: "linear"
                }),
                a = function a() {
                  setTimeout(function () {
                    t.translateX(r / s).step(), g(t.export());
                  }, c * v + 200), setTimeout(function () {
                    n.translateX(-r).step(), g(n.export());
                  }, 100);
                };
              switch (l) {
                case "horizontal":
                default:
                  a();
                  break;
                case "vertical":
                  setTimeout(function () {
                    t.translateY(o).step(), g(t.export());
                  }, c * v + 200), setTimeout(function () {
                    n.translateY(-o * i.length).step(), g(n.export());
                  }, 100);
              }
            };
          a(), n = setInterval(a, c * v + 300);
        }).exec();
      }, 1e3);
      return function () {
        clearTimeout(t), clearInterval(n);
      };
    }, []);
    var y = function y(e) {
      var n = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)().getSystemInfoSync().windowWidth;
      return "horizontal" === l && e / n > 1 ? e / n : 1;
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: E ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(u, Object.assign({
        id: "noticebar-wrap"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(u, Object.assign({
          className: "icon-pre"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_, {
            style: {
              fontSize: 18,
              fontWeight: 700
            },
            value: c
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(u, Object.assign({
          animation: m,
          id: "animElemId"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(u, Object.assign({
            style: {
              width: O
            },
            className: f
          }, {
            children: i.map(function (n, t) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(u, Object.assign({
                onClick: function onClick() {
                  return d ? d(t) : function () {};
                },
                className: "scroll-animate-item"
              }, {
                children: n
              }), t);
            })
          }))
        }))]
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(p, {
        content: i[0]
      })
    });
  };


/***/ }),

/***/ "../../qj/qj-mobile-react/packages/s-material-react/dist/index.js":
/*!************************************************************************!*\
  !*** ../../qj/qj-mobile-react/packages/s-material-react/dist/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressDetail": function() { return /* binding */ Hs; },
/* harmony export */   "AddressList": function() { return /* binding */ Ms; },
/* harmony export */   "Cart": function() { return /* binding */ ma; },
/* harmony export */   "ClassifyNav": function() { return /* binding */ Je; },
/* harmony export */   "CouponList": function() { return /* binding */ oa; },
/* harmony export */   "Cube": function() { return /* binding */ De; },
/* harmony export */   "EvaluateDetail": function() { return /* binding */ Ls; },
/* harmony export */   "EvaluateList": function() { return /* binding */ Vs; },
/* harmony export */   "Footprint": function() { return /* binding */ ja; },
/* harmony export */   "Goods": function() { return /* binding */ ke; },
/* harmony export */   "GoodsClassify": function() { return /* binding */ vs; },
/* harmony export */   "GoodsDetail": function() { return /* binding */ Os; },
/* harmony export */   "GoodsDetailPromotion": function() { return /* binding */ Bs; },
/* harmony export */   "GoodsDetailTopInfo": function() { return /* binding */ Ds; },
/* harmony export */   "GoodsGroup": function() { return /* binding */ Fe; },
/* harmony export */   "GoodsList": function() { return /* binding */ ws; },
/* harmony export */   "Line": function() { return /* binding */ Be; },
/* harmony export */   "Mine": function() { return /* binding */ pa; },
/* harmony export */   "Notice": function() { return /* binding */ xe; },
/* harmony export */   "OrderDetail": function() { return /* binding */ Ye; },
/* harmony export */   "OrderList": function() { return /* binding */ Xe; },
/* harmony export */   "PaymentMode": function() { return /* binding */ Na; },
/* harmony export */   "PlaceOrder": function() { return /* binding */ ea; },
/* harmony export */   "PlaceOrderResult": function() { return /* binding */ ca; },
/* harmony export */   "QjMobileIcon": function() { return /* binding */ ve; },
/* harmony export */   "Search": function() { return /* binding */ Pe; },
/* harmony export */   "SearchPage": function() { return /* binding */ Is; },
/* harmony export */   "Service": function() { return /* binding */ Se; },
/* harmony export */   "Slider": function() { return /* binding */ ze; },
/* harmony export */   "Title": function() { return /* binding */ Ie; },
/* harmony export */   "Video": function() { return /* binding */ Te; }
/* harmony export */ });
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @brushes/simulate-component */ "../../qj/qj-mobile-core/packages/simulate-component/dist/index.js");
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @brushes/simulate-component */ "../../qj/qj-mobile-core/node_modules/antd-mobile/es/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brushes/utils */ "../../qj/qj-mobile-react/node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qj-b2c-api */ "../../qj/qj-mobile-react/packages/s-material-react/node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../qj/qj-mobile-react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-react/node_modules/lodash-es/isEqual.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-react/node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-react/node_modules/lodash-es/isUndefined.js");
/* harmony import */ var qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qj-mobile-store */ "../../qj/qj-mobile-react/node_modules/qj-mobile-store/dist/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "../../qj/qj-mobile-react/node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var china_division_dist_provinces_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! china-division/dist/provinces.json */ "../../qj/qj-mobile-react/node_modules/china-division/dist/provinces.json");
/* harmony import */ var china_division_dist_cities_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! china-division/dist/cities.json */ "../../qj/qj-mobile-react/node_modules/china-division/dist/cities.json");
/* harmony import */ var china_division_dist_areas_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! china-division/dist/areas.json */ "../../qj/qj-mobile-react/node_modules/china-division/dist/areas.json");
















function Ae(e, s) {
  var a = {};
  for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && s.indexOf(c) < 0 && (a[c] = e[c]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var n = 0;
    for (c = Object.getOwnPropertySymbols(e); n < c.length; n++) s.indexOf(c[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[n]) && (a[c[n]] = e[c[n]]);
  }
  return a;
}
function ye(e, s, a, c) {
  return new (a || (a = Promise))(function (n, i) {
    function t(e) {
      try {
        o(c.next(e));
      } catch (e) {
        i(e);
      }
    }
    function l(e) {
      try {
        o(c.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function o(e) {
      var s;
      e.done ? n(e.value) : (s = e.value, s instanceof a ? s : new a(function (e) {
        e(s);
      })).then(t, l);
    }
    o((c = c.apply(e, s || [])).next());
  });
}
var ve = function ve(_ref) {
    var _ref$className = _ref.className,
      s = _ref$className === void 0 ? "iconfont" : _ref$className,
      _ref$prefixClass = _ref.prefixClass,
      a = _ref$prefixClass === void 0 ? "icon" : _ref$prefixClass,
      _ref$onClick = _ref.onClick,
      c = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$style = _ref.style,
      n = _ref$style === void 0 ? {
        fontSize: 16,
        color: "#444",
        fontWeight: 900
      } : _ref$style,
      i = _ref.value;
    var _r = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _r.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
      onClick: c,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(a, i ? "".concat(a, "-").concat(i) : "", s),
      style: n
    });
  },
  Ce = {
    order: "/subpackage/orderlist/index",
    orderDetail: "/subpackage/orderdetail/index",
    goodList: "/subpackage/goodlist/index",
    goodDetail: "/subpackage/gooddetail/index",
    result: "/subpackage/result/index",
    rate: "/subpackage/rate/index",
    search: "/subpackage/search/index",
    shopping: "/pages/shopping/index",
    confirm: "/subpackage/orderconfirm/index",
    addressList: "/subpackage/addresslist/index",
    addressEditor: "/subpackage/addresseditor/index",
    setting: "/subpackage/setting/index",
    couponList: "/subpackage/couponlist/index",
    paymentMode: "/subpackage/paymentmode/index",
    collectionList: "/subpackage/collectionlist/index",
    footprint: "/subpackage/footprint/index",
    myAgreementList: "/subpackage/myagreementlist/index",
    mySetting: "/subpackage/mysetting/index"
  },
  ke = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref2) {
    var _ref2$defaultValue = _ref2.defaultValue,
      a = _ref2$defaultValue === void 0 ? [] : _ref2$defaultValue,
      _ref2$classCode = _ref2.classCode,
      c = _ref2$classCode === void 0 ? "" : _ref2$classCode,
      l = _ref2.margin,
      o = _ref2.circular,
      d = _ref2.cell,
      _ref2$gap = _ref2.gap,
      g = _ref2$gap === void 0 ? 10 : _ref2$gap,
      _ref2$goods = _ref2.goods,
      m = _ref2$goods === void 0 ? [] : _ref2$goods,
      h = _ref2.markedPrice,
      b = _ref2.paddingTop,
      p = _ref2.paddingBottom,
      u = _ref2.paddingLeft,
      N = _ref2.paddingRight;
    var _n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(a),
      _n2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n, 2),
      j = _n2[0],
      O = _n2[1],
      f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),
      _r2 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      A = _r2.View,
      y = _r2.Text;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(f.current, m) || (f.current = m, (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(m) ? O(a) : ye(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee() {
        var _e2;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.find)({
                goodsCode: m.toString()
              });
            case 3:
              _e2 = _context.sent;
              O(_e2.rows);
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              O(a);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      })));
    }, [m]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, Object.assign({
      style: {
        paddingTop: b,
        paddingBottom: p
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, Object.assign({
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])({}, "goods-".concat(c), !0)),
        style: {
          display: "grid",
          gap: g,
          marginBottom: l,
          gridTemplateColumns: "repeat(".concat(d, ", 1fr)"),
          paddingLeft: u,
          paddingRight: N
        }
      }, {
        children: j.map(function (a, c) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(A, Object.assign({
            style: {
              overflow: "hidden",
              borderRadius: 2 === o ? 0 : "8px"
            },
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(Ce.goodDetail, "?skuCode=").concat(a.skuCode));
            },
            className: "goods"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, {
              className: "goods-img",
              style: {
                backgroundImage: "url(".concat(a.dataPic, ")")
              }
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(A, Object.assign({
              className: "space"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, Object.assign({
                className: "titleType"
              }, {
                children: a.goodsName
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, Object.assign({
                className: "subTitle"
              }, {
                children: a.brandName
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(A, Object.assign({
                className: "price"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(y, Object.assign({
                  className: "subPrice"
                }, {
                  children: "¥"
                })), a.pricesetNprice, 1 === h && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(y, Object.assign({
                  className: "markedPrice"
                }, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(y, Object.assign({
                    className: "subPrice"
                  }, {
                    children: "¥"
                  })), a.pricesetMakeprice]
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, Object.assign({
                className: "anticon"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ve, {
                  style: {
                    fontSize: 30,
                    color: "#f00"
                  },
                  value: "cart"
                })
              }))]
            }))]
          }), c);
        })
      }))
    }));
  }),
  we = ["这是 NoticeBar 通告栏，这是 NoticeBar 通告栏", "第二个这是 NoticeBar 通告栏通告栏，通告栏通告栏通告栏通告栏这是 NoticeBar 通告栏"],
  xe = function xe(_ref3) {
    var a = _ref3.title,
      c = _ref3.text,
      n = _ref3.backgroundColor,
      i = _ref3.color,
      t = _ref3.fontSize,
      l = _ref3.borderColor,
      o = _ref3.paddingTop,
      g = _ref3.paddingBottom,
      m = _ref3.paddingLeft,
      h = _ref3.paddingRight;
    console.log(0x1116365aeeb6a500);
    var _r3 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      b = _r3.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(b, Object.assign({
      style: {
        paddingTop: o,
        paddingBottom: g
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.NoticeBar, {
        icon: "kefu",
        content: we,
        navigator: function navigator(e) {
          console.log(33, e);
        }
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(b, {})]
    }));
  },
  Ie = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref4) {
    var s = _ref4.value,
      a = _ref4.fontSize,
      c = _ref4.textAlign,
      n = _ref4.color,
      i = _ref4.backgroundColor,
      t = _ref4.fontWeight,
      l = _ref4.textDecoration,
      o = _ref4.fontStyle,
      d = _ref4.paddingTop,
      g = _ref4.paddingLeft,
      m = _ref4.paddingRight,
      h = _ref4.paddingBottom;
    var _r4 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      b = _r4.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(b, Object.assign({
      style: {
        paddingTop: d,
        paddingBottom: h
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(b, Object.assign({
        style: {
          fontSize: a,
          textAlign: c,
          color: n,
          backgroundColor: i,
          fontWeight: t,
          textDecoration: l,
          fontStyle: o,
          paddingLeft: g,
          paddingRight: m
        }
      }, {
        children: s
      }))
    }));
  }),
  De = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref5) {
    var s = _ref5.defaultValue,
      a = _ref5.type,
      c = _ref5.borderRadius,
      n = _ref5.paddingTop,
      i = _ref5.paddingLeft,
      t = _ref5.paddingRight,
      l = _ref5.paddingBottom,
      o = _ref5.selectImg;
    var _r5 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _r5.View,
      g = _r5.Image,
      m = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(s, o);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
      style: {
        paddingTop: n,
        paddingBottom: l
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
        className: "cube-type".concat(a),
        style: {
          paddingLeft: i,
          paddingRight: t
        }
      }, {
        children: m.map(function (s, n) {
          var i, t;
          return 1 === a ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, {
            mode: "widthFix",
            src: s.imgUrl,
            style: {
              width: "100%",
              borderRadius: c + "px"
            },
            onClick: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler.bind(null, null === (i = s.link) || void 0 === i ? void 0 : i.value)
          }, n) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, {
            className: "block",
            style: {
              backgroundImage: "url(".concat(s.imgUrl, ")"),
              width: "100%",
              borderRadius: c + "px"
            },
            onClick: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler.bind(null, null === (t = s.link) || void 0 === t ? void 0 : t.value)
          }, n);
        })
      }))
    }));
  }),
  Be = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref6) {
    var s = _ref6.borderRadius,
      a = _ref6.height,
      c = _ref6.width,
      n = _ref6.backgroundColor,
      i = _ref6.paddingTop,
      t = _ref6.paddingBottom;
    var _r6 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _r6.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
      style: {
        paddingTop: i,
        paddingBottom: t
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
        style: {
          borderRadius: s + "%",
          width: c + "%",
          height: a + "px",
          backgroundColor: n,
          marginLeft: "auto",
          marginRight: "auto"
        }
      })
    }));
  }),
  Te = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref7) {
    var s = _ref7.url,
      a = _ref7.poster,
      c = _ref7.autoplay,
      n = _ref7.loop,
      i = _ref7.paddingTop,
      t = _ref7.paddingBottom,
      l = _ref7.paddingLeft,
      o = _ref7.paddingRight;
    var _r7 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _r7.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
      style: {
        paddingTop: i,
        paddingBottom: t
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video", {
        className: "components-video",
        src: "https://www.runoob.com/try/demo_source/movie.ogg",
        poster: a,
        autoPlay: c,
        loop: n,
        controls: !0,
        "object-fit": "contain",
        style: {
          width: "100%",
          height: "240px",
          paddingLeft: l,
          paddingRight: o
        }
      })
    }));
  }),
  Se = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref8) {
    var s = _ref8.width,
      a = _ref8.height,
      c = _ref8.top,
      n = _ref8.right,
      i = _ref8.bottom,
      t = _ref8.left,
      l = _ref8.borderRadius;
    var _r8 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      o = _r8.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, {
      style: {
        width: s,
        height: a,
        borderRadius: l,
        top: c,
        left: t,
        right: n,
        bottom: i
      },
      className: "components-service"
    });
  }),
  Ve = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADcdJREFUeF7tnQXMZUcVx38FihUvbkGCu7sVDVYo7lLctUhwd1JcUiw4FCgeXIMU1+LuUtwtP3Ze2C673zvn3pkr37sn2WzTPTNv5sz/jhzdi4U2WgJ7bfTsl8mzAGDDQbAAYAHAhktgw6e/7AALADZcAhs+/WUHWACw4RLY8OkvO8ACgG0jgb2BMwHnKH+fCNgHOB7gfwv2vwF/BI4E/gD8Cvg68DXgh9tGEomJzHkHOCewH3B54LzAGYFjJOa+K6uAEAifAt4HfAD4eY/+ZtF0TgA4FnBN4ICy8KdsLOF/A18C3g28Gji88e+N0v0cAHAh4JbATYCTjSKlHT96BPAa4GXAt0ccR9WfnioAjg7cGHgQcK6qM+7f2b+Aw4DHleOif48j9jA1AHiR80t/MHC2EeUS/emPAg8H3httMDW+KQHg2sDBwBmmJqTAeN4B3B34VoB3UixTAMBpgMcDt5iUZPKD8Yn5dOARwF/yzcdpMSYA/O37FYEdd5zpN/nVbwIHAh9q0nvlTscCwEmBlwJXrzyfqXT3T+AxwKMAL42TpTEAcFnglYBb/3an9wM3BX461YkODYC7lXOyj8Zud7L0i/s88Nmi2lW965/f7aT6td0xi3r4xMC+wFmBs5cXx8WA0zdYqB8D1wA+16Dv3l0OCYBHAw/pPeL/daDu/g3lCeZ5+5sKfZ8ZuAJwZeBawHEq9GkXvwWuU9TLlbqs080QAFCp8xzgDhWGrCHn0KKNc3tteb6eALheeZ1ob+grq78CNyvjryCKOl30ndS6Ubj4nvc3XMe45t+13j0TeEax4PXsLt1cY5PKqesDzqkreVTdtgC4ax9V27UGwPOAO/YYsV+8KlcX//c9+qnV1DuDR1kfQP8DuC7w1lqD6tNPSwD4BHpoj8EpIC+N3+vRR6umHgnPBjRJd6E/A1cBPtKlcc02rQBwlyKgLmP9RdkmJ/GFbDEBXxTaAR4IHK3DRH8NXAb4Soe21Zq0AIDPqQ8DGnay5G3ed/OPsg1H5PfV8ArgVB3G8A1Ac/dox1ttAPi29i1+ug7CeFK5aHlRmhu5+L5OLtFh4C8f0w5SEwD29UZg/6QQ9Lw5CHhKst3U2LVnvLYofbJjux1wSLZRDf6aALhX0fJlxvV34NblqZhpN1VeNZwupB5MGfJSeMHidZRp15u3FgBOC3y1eOBGB+WX75v4JdEGM+FTphq6suZt7z++LpTLYFQLAK8vWrPMwO8LPC3TYEa8XoDfAlw1OWYvwK9KtunFXgMAVwP0iMmQ5/39Mw1myHv88s5XixilnxTjlEasQagvADzzfMeeJTFalR8+ndSIbXdSc2icgWCI0lOLo0yUvxdfXwB42fG8i5LKDy87U9TuReeQ5btRiSuItvtTCXIZJCilDwDUfhk4YShWlNSBvynKvI34jCXIXAqfUFzim4ugDwC0jL0uMcI3d9ARJLqfNKsKMsPO/DtC3gH0jtYK2pT6AMCzTTVmhNzWDPD4boR5m/LcufhFRKenIU2/wqbUFQAXAD6TGNkji/dvosm2Y9WP4NPA+YIz82Mx2rmpXqArAHy/3zs4kcG2s+B4xmS7QVEXR8dwudbu5V0A4NPvB0A0OtegD71pFtphNv5CIt5RtbJ2gmbUBQB6uEZt9UbIeJn5WbMZzK/jWyXU3+6efmjaCppQFwC8MIFKw6mN8l3ofxI4NqDGz6wlETInwtsijF14ugDAAEgvJxFqOvjIACbK49auISxC3re0mzShLAAMnIhq8dRkaSXU5LvQUSWg1U+39ggZUOKrqwllAXAb4EXBkXhU1IgFCP7crNi8DBouFsl4YuzDKYBftphhFgDq/aPODiZ6MLfOQruXgN5DPgsjZICKUVDVKQsAlT+R7UjlxamnHBRZXZL5DjOaQb2PdbOvThkAyOuzxLx760jvoK4+8+v63i7/blCqcoqQTiI6i1SnDAC80KkAipBbv0fAQnuWgPcAI598Fq4jVcgXXsfU5d8zALhSyZkX+Z1F9x+REnwROHeA1SSWBqtWtwtkAHB74AWBwcpiFKxBoQttLQHN6ZrVI6RGsLpGNQMA8/k8OTJS4OLAJ4K8m8z2xBITEZGBafNMelGVMgBwW39Y8Ne94OgAsdDWEjARptHPEdL3ImOCj/SZSnqQMQF7YZxTfF9IWA2YjH429D1Cag8/GGHM8GR2gIwR6ITlyZgZyybyZiyDJtI01qAqZQCQ0QIaJ9fMhFlVAuN25lM5ellWa2gATlXKAMCECMb9R8g8gBZjWGhrCWReVuZUzAbgrJV/BgC6Kj9gbY87GCzesMkOoEExcR/AQJAINXEPywDAFG/mx4mQ4VAqORbaWgLq+M0tHKHRXwH3KNm8I4M1z957IowbzmP6PI1CETLMzIwiVSmzA2QuLD5vvDMstLUE/EiuGBCSPgFerM01WJUyAHALMhgkQubzu2eEccN5zHYayZksX5e0O2vFmwGAZmDNwZE27+oQG792sNuMISNPk26ZZLs6RRZz5x+NIta8vT4F55jwqbqQ99ChW3/0nvTihBNpavxZAETPLAeh/Vo79kK7l8BjEwEzd03GFYZlngWAUT4mRoyQGUDmnvkrMs+uPB8rVtNIe93wmqSbzwLA553ne4QsuGg61IX+XwInKbb9SN0EvYYMImmSUSULAJ8iZvmwiuc68vz35moUzEJHlcCdgOcGhWIZ28hTMdjdUdmyALC1JsnojXQ7ZwLrJPDSyHqDlwx2oLrYamRNqAsAMiphy7icv8nI59upVUnU6EVlL3+zUrXRQews7uwEzAhmJe6FdkhAJZlFJiPU/APqAgAHbqq3S0VmUN66Xh4X2hHi9Z1ELSJd8KIGuE7y7QoAq4BYDSRKnnc+ezadMiZ1b/3mVmjqWtcVAJZdsxxaJKjBRbe4snEFm0zZfMpmXj+gtcC6AsBxZXwE5TdRhAkjNpUyMQDKSB2KupSm1AcAXgaPACLKDCfhjqG7+GjVMZpKcuvOMwo0ezKPkK+n6pFAuw6zDwDsy2oXRgFFyciiPlXEor8zJT49pLWJ+MFEya3fI6A59QWAaWJNF5spmnTzUmOn+eQm8gPWE8pE9lpyR9+L5l+/8ukLAPvIuIvLr0+BlsLq7k0TWfCdh5HJAbBqZ8naaBa23lOuAQDftt4FolmvHLQp5i2Zpl1hu5IKMN24I3aTlQzMBmZircGoBgAcrPbqZyVH/UlgvxIjn2w6efbzlAyfmY/CQBpDxZupfXcntVoAMA/uxzskMXCrM//N3ya/pPEBetnThStbR9BAURVFg1ItADhoUW9IeLbkum9db70mQZg7+XRz24+m0V3N149HC+vgKfVqAsDJmBbu+R1WUW9jU9AOUiWjw/giTYzetRiGz74M/bYk3tJGMDjVBoATyD57VpP27LMq9xz9CI2ZNHw+c+Fbzds5ZwpvVAVJCwBYIOlwwIwWWTLwwUwk2Qtl9ndq8Zu3R5V413LyHnvWWh6tgHQLAChccwnr9ZI9C1cLY3kZbebfr7VSDfpRvatbV0bDt7thmPfH19AoIGgFACfqpVD3MS2HXcgyM+Yk0hO5ekhUlwGVNt7uze2TKQK17ue8++j3p1Z1UGoJACfixeidHc/GlSDUGAoC7Q6D35J3Wo2Tw3/DudV5RJJlZhdylJ2gNQAUgrd78+LqUdyHzFJuiXmBMFhlzbLFGxlt5Y6+c1g3/8FBMAQAnLQXHZU+hov1JauQGKFkLT6fXS12BTV45uRxm3drHkpOymbQ42DIianm9DiIRMNGQeIb2qrb+s77x9y7XQDhy0WQqr/3QqaxKurnEB1rhm+wnWBIACgAC06Y6OgiGWkkeF189Qkap/xbY5NPLf8YYeNCq6jxDPdMN+mCz9WaoNx1uDrAZGoHr9oPAoKhAeDk/LIsiHjQwFtrAkdVWL2n6PyiYsvqIF1A1vw4GAMAK+nuDxj23PWZWGWVGnWiIsyMKtZXkqyuPkkQjAkABWPs4MGARaW3A6m7MKWuauFdgzk9arynWEgjS82Og7EBsBKEFy9zCuk0OlfylaP2cqv0eJPbCaYCABddM7J2AEvSzulYMIGzETzR2n5ePD0OJrETTAkAqy/fG/qBJSll1qliyN3jy2W791WTdeCczE4wRQCsFnGfon0znaql56dAnuuHlbA4o52yC7/zHCaxE0wZADsLSzdptXLerH2/D026ah9aXi0GuNSi0UEwFwCsBL43cOmirfPieNFGGjuVN7ppebHzi49WS+0CjFFBMDcA7Cpg7wsCwtzECtJXhH/2Da6EW7qp79Qa+mbXNc0oZm3zQ6a4Gw0EcwfAntZZ1auGJwGy+uP/UzunWlgX7CNL/qIutoMgvlJso4BguwIgJfkJMQ/+OlgAMKHVL0PpsxOYkU1DWzipxAKA6QHAEfXZCVLhZQsApgmAviDQKTcUZ7AAYLoA6AMCjWt6S62lBQBrRTQ6Q5fjQD/Mt0dGvgAgIqXxeTIgMNBWQ1OoatsCgPEXNzqCKAhM3xetQzSot2t0ogvfniUgCDRC7al8jO5nxmKEI62XHWB+cDMji84zhtSv1s/IqUOKCT28+E59AcD8ALAasU6mFpLwzNeG0SndzgKA+QKgysgXAFQR43w7WQAw37WrMvIFAFXEON9OFgDMd+2qjHwBQBUxzreTBQDzXbsqI18AUEWM8+1kAcB8167KyBcAVBHjfDv5D+vIKZ/vdzjHAAAAAElFTkSuQmCC",
  Le = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAGCAYAAADQQP5pAAAAAXNSR0IArs4c6QAAAMhJREFUKFPFUjFqQkEUfLOmeAoWJodI7qE3sFdrS4sPCykexPA/C7baqr030Hskh1ALQbfJTviBSFiszZQz82bgMTCzhxjjq4iMATRJblR1YmYHyWBmrRhjSXJQSwDWqurN7Jx7vfdPJGcA+iRrfaGqU3jv30jWhVcA2JVl2bsRsiQ5zPhVVVWjG94tyW6W+1O4J/mYH6SUXkIIn798URRt59xRRBqZ9yul1AkhnP54n51zH3kmgMO/FN7tpSLyjjuN5iIi83o039P9n5mWDu/PAAAAAElFTkSuQmCC\n",
  Pe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref9) {
    var a = _ref9.value,
      c = _ref9.iconShow,
      n = _ref9.fontColor,
      i = _ref9.backgroundColor,
      t = _ref9.borderRadius,
      l = _ref9.paddingTop,
      o = _ref9.paddingBottom,
      d = _ref9.paddingLeft,
      g = _ref9.paddingRight;
    var _r9 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      m = _r9.View,
      h = _r9.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
      onClick: function onClick() {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(Ce.search);
      },
      style: {
        paddingTop: l,
        paddingBottom: o,
        paddingLeft: d,
        paddingRight: g
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
        className: "components-search",
        style: {
          backgroundColor: i,
          borderRadius: t + "px",
          height: "32px",
          lineHeight: "32px",
          width: "100%",
          display: "inline-block",
          textAlign: "center"
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, {
          src: Ve,
          alt: "",
          mode: "fill",
          style: {
            height: "16px",
            width: "16px",
            display: c ? "inline-block" : "none",
            verticalAlign: "top",
            marginTop: "8px",
            marginRight: "10px"
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
          className: "txt",
          style: {
            color: n,
            display: "inline-block",
            fontSize: "14px"
          }
        }, {
          children: a
        }))]
      }))
    }));
  }),
  Re = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref10) {
    var s = _ref10.item,
      c = _ref10.type;
    var n, i;
    var _r10 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _r10.Image,
      l = _r10.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 1 === c ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
        mode: "widthFix",
        src: s.imgUrl,
        style: {
          width: "100%"
        },
        onClick: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler.bind(null, null === (n = s.link) || void 0 === n ? void 0 : n.value)
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
        className: (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)() ? "slider-block" : "pc",
        style: {
          backgroundImage: "url(".concat(s.imgUrl, ")"),
          width: "100%"
        },
        onClick: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler.bind(null, null === (i = s.link) || void 0 === i ? void 0 : i.value)
      })
    });
  }),
  ze = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref11) {
    var _ref11$defaultValue = _ref11.defaultValue,
      s = _ref11$defaultValue === void 0 ? [] : _ref11$defaultValue,
      a = _ref11.type,
      c = _ref11.autoplay,
      n = _ref11.autoplayInterval,
      i = _ref11.direction,
      t = _ref11.loop,
      l = _ref11.paddingTop,
      o = _ref11.paddingBottom,
      r = _ref11.paddingLeft,
      d = _ref11.paddingRight,
      h = _ref11.selectImg,
      b = _ref11.imgHeight;
    var p = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(s, h);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.View, Object.assign({
      style: {
        paddingTop: l,
        paddingBottom: o,
        paddingLeft: r,
        paddingRight: d
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.SmoothSwiper, {
        className: (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)() ? "slider-block" : "pc",
        imgHeight: b,
        data: p,
        type: a,
        autoplay: c,
        autoplayInterval: n,
        direction: i,
        loop: t,
        render: function render(s) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Re, {
            type: a,
            item: s
          });
        }
      })
    }));
  }),
  Me = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.JumboTabs,
  Fe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref12) {
    var _ref12$defaultValue = _ref12.defaultValue,
      s = _ref12$defaultValue === void 0 ? [] : _ref12$defaultValue,
      a = _ref12.type,
      _ref12$selectGoodsGro = _ref12.selectGoodsGroup,
      c = _ref12$selectGoodsGro === void 0 ? [] : _ref12$selectGoodsGro,
      i = _ref12.marginTop,
      l = _ref12.marginBottom,
      o = _ref12.borderRadius;
    var _n3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(s),
      _n4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n3, 2),
      r = _n4[0],
      d = _n4[1];
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      var e = c.filter(function (e) {
        return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_17__["default"])(e);
      }).filter(function (e) {
        return !Object.values(e).every(function (e) {
          return (0,lodash_es__WEBPACK_IMPORTED_MODULE_17__["default"])(e);
        });
      });
      var a = s;
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(e) || (a = e), d(a);
    }, [c]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Me, Object.assign({
      style: {
        marginTop: i + "px",
        marginBottom: l + "px"
      }
    }, {
      children: r.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Me.Tab, Object.assign({
          title: s.title,
          description: s.subTitle
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ke, {
            defaultValue: s.defaultValue,
            cell: 2,
            goods: s.goodsList,
            classCode: "two",
            circular: o
          })
        }), a);
      })
    }));
  }),
  We = function We(_ref13) {
    var a = _ref13.dataPic,
      c = _ref13.goodsName,
      n = _ref13.goodsCamount,
      i = _ref13.pricesetNprice,
      t = _ref13.skuName;
    var _r11 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _r11.View,
      o = _r11.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
      className: "card-item"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, {
        src: a,
        alt: "",
        className: "card-item-img"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "card-item-info"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "card-item-info-container"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
            className: "card-item-info-container-title"
          }, {
            children: c
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
            className: "card-item-info-container-price"
          }, {
            children: ["￥", i]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "card-item-info-sub"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
            className: "sku"
          }, {
            children: t
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
            className: "count"
          }, {
            children: ["x ", n]
          }))]
        }))]
      }))]
    }));
  },
  Ge = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
  Ee = function Ee(s) {
    var c = s.dataState,
      n = Ae(s, ["dataState"]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["2", "-1"].includes(c + "") ? null : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Qe, Object.assign({
        dataState: c
      }, n))
    });
  },
  Qe = function Qe(s) {
    var a = s.dataState,
      c = s.contractAppraise,
      n = Ae(s, ["dataState", "contractAppraise"]);
    var _r12 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r12.View;
    4 !== a && 4 !== a || 1 === c ? 4 !== a && 4 !== a || 1 !== c || (a = 5) : a = 4;
    var _H = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderOperate)(Object.assign({
        dataState: a
      }, n)),
      t = _H.operateArray,
      l = _H.handlerImpl;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "btnGroup"
    }, {
      children: t.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ge, Object.assign({
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
            btn: !0,
            white: 0 === a,
            black: 1 === a
          }),
          onClick: function onClick() {
            return l(s.handler);
          },
          shape: "rounded"
        }, {
          children: s.name
        }), a);
      })
    }));
  },
  Ue = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button;
function He(_ref14) {
  var a = _ref14.contractBillcode,
    c = _ref14.dataBmoney,
    n = _ref14.dataBnum,
    i = _ref14.goodsList,
    t = _ref14.dataState,
    l = _ref14.contractId,
    o = _ref14.init,
    d = _ref14.contractAppraise;
  var _r13 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    g = _r13.View,
    m = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.orderStatusImpl)(t);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
    className: "orderListItem"
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
      onClick: function onClick() {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.orderDetail, "?contractBillcode=").concat(a));
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
        className: "topInfo"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
          className: "orderNo"
        }, {
          children: ["订单号: ", a, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ue, Object.assign({
            className: "copy",
            size: "mini",
            fill: "outline"
          }, {
            children: "复制"
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
          className: "status"
        }, {
          children: m
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
        className: "goodsItemWrap"
      }, {
        children: [i.map(function (s) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(We, Object.assign({}, s), s.contractGoodsId);
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
          className: "allInfo"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "totalNum"
          }, {
            children: ["共", n, "件商品"]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "totalPrice"
          }, {
            children: ["合计 ￥", c]
          }))]
        }))]
      }))]
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ee, {
      init: o,
      contractId: l,
      contractBillcode: a,
      dataState: t,
      contractAppraise: d
    })]
  }));
}
function qe(e) {
  var _n5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _n6 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n5, 2),
    s = _n6[0],
    a = _n6[1];
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!(0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)()) return;
    (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)().createSelectorQuery().select(e).boundingClientRect(function (e) {
      if (e) {
        var _s2 = e.bottom;
        a(_s2);
      }
    }).exec();
  }), s;
}
var Ke = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
var Ze = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref15) {
    var _this = this;
    var a = _ref15.item,
      c = _ref15.refreshNum;
    var _r14 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _r14.View,
      g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1),
      _n7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n8 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n7, 2),
      m = _n8[0],
      h = _n8[1],
      _n9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _n10 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n9, 2),
      u = _n10[0],
      N = _n10[1],
      j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0),
      O = qe("#qj-tabs-id");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      f();
    }, [c]);
    var f = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function () {
        j.current = 0, N([]), A();
      }),
      A = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return ye(_this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee2() {
          var e, _s3;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!g.current) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                h(!0), ++j.current;
                e = a.code;
                _context2.prev = 4;
                _context2.next = 7;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryContractPageC)({
                  page: j.current,
                  rows: 10,
                  isLocalMock: !Ke,
                  childFlag: !0,
                  dataStateStr: e
                });
              case 7:
                _s3 = _context2.sent;
                g.current = (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(_s3.rows) || _s3.rows.length < 10, N(function (e) {
                  return e.concat(_s3.rows || []);
                }), h(!1);
                _context2.next = 14;
                break;
              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](4);
                --j.current, console.log(30, _context2.t0);
              case 14:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[4, 11]]);
        }));
      });
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
      className: "orderListItemWrap"
    }, {
      children: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
          onScroll: A,
          height: O + 15
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, {
            children: [u.map(function (e, s) {
              return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(He, Object.assign({
                init: f
              }, e, {
                key: s
              }));
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, {
              children: m ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Loading, {}) : null
            })]
          })
        }));
      }, [u, O])
    }));
  }),
  Xe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref16) {
    var _ref16$refreshNum = _ref16.refreshNum,
      s = _ref16$refreshNum === void 0 ? 0 : _ref16$refreshNum,
      _ref16$id = _ref16.id,
      a = _ref16$id === void 0 ? "" : _ref16$id;
    var _r15 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r15.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "order-container"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Tabs, {
        defaultIndex: +a,
        tabs: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.orderStatusList,
        render: function render(a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "orderList"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ze, {
              item: a,
              refreshNum: s
            })
          }));
        }
      })
    }));
  }),
  Ye = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref17) {
    var a = _ref17.contractBillcode;
    var _r16 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r16.View,
      n = _r16.Text,
      _X = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderDetail)(a || ""),
      i = _X.orderDetail;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "orderDetail"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "orderDetailTopTitle"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "orderDetailTopTitleContent"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "title"
          }, {
            children: (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.orderStatusImpl)(i.dataState)
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
            className: "subTitleWrap"
          })]
        }))
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "orderDetailContent"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          style: {
            position: "relative",
            top: -26
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "addressInfo"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
              className: "lPart"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
              className: "mPart"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                className: "personInfo"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                  className: "personName"
                }, {
                  children: i.goodsReceiptMem
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                  className: "personPhone"
                }, {
                  children: i.goodsReceiptPhone
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                className: "address"
              }, {
                children: i.goodsReceiptArrdess
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
              className: "rPart"
            })]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "orderDetailGoodsWrap"
          }, {
            children: [i.goodsList.map(function (s) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(We, Object.assign({}, s), s.contractGoodsId);
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
              className: "priceInfo"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                className: "priceInfoFloor top"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                  className: "totalNum"
                }, {
                  children: ["共", i.goodsNum, "件商品"]
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                  className: "totalPrice"
                }, {
                  children: ["合计 ", parseFloat((i.dataBmoney - i.refundMoney).toFixed(2))]
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                className: "priceInfoFloor"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                  className: "totalNum"
                }, {
                  children: "商品总额"
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                  className: "totalPrice"
                }, {
                  children: ["合计 ￥", i.contractInmoney]
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                className: "priceInfoFloor"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                  className: "totalNum"
                }, {
                  children: "优惠"
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                  className: "totalPrice"
                }, {
                  children: ["合计 ￥", i.goodsPmoney]
                }))]
              }))]
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "express"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
              className: "label"
            }, {
              children: "配送方式"
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
              className: "name"
            }, {
              children: "快递"
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "orderInfo"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
              className: "orderInfoItem"
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                className: "label"
              }, {
                children: "订单信息"
              }))
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
              className: "orderInfoItem"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                className: "label"
              }, {
                children: "买家留言"
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                className: "name"
              }, {
                children: i.packageRemark
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
              className: "orderInfoItem"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                className: "label"
              }, {
                children: "订单编号"
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                className: "name"
              }, {
                children: i.contractBillcode
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
              className: "orderInfoItem"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                className: "label"
              }, {
                children: "下单时间"
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                className: "name"
              }, {
                children: i.gmtCreate
              }))]
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "btnGroupFooter"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ee, {
              contractBillcode: i.contractBillcode,
              contractId: i.contractId,
              dataState: i.dataState
            })
          }))]
        }))
      }))]
    }));
  }),
  Je = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref18) {
    var a = _ref18.defaultValue,
      c = _ref18.borderRadius,
      n = _ref18.paddingTop,
      i = _ref18.paddingBottom,
      t = _ref18.selectClassifyNav;
    var _r17 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _r17.View,
      o = _r17.Text,
      d = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(a, t);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
      style: {
        paddingTop: n,
        paddingBottom: i
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
        className: "classifyNav"
      }, {
        children: d.map(function (a, n) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
            className: "classifyNavItem",
            onClick: function onClick() {
              var e;
              return (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler)(null === (e = a.link) || void 0 === e ? void 0 : e.value);
            }
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
              src: a.imgUrl,
              alt: "",
              className: "img",
              style: {
                borderRadius: "".concat(c, "px")
              }
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
              className: "label"
            }, {
              children: a.title
            }))]
          }), n);
        })
      }))
    }));
  }),
  $e = function $e(_ref19) {
    var a = _ref19.checkCollectionObj,
      c = _ref19.setCheckCollectionObj,
      n = _ref19.goods;
    var _r18 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r18.Text,
      l = _r18.View;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      o();
    }, []);
    var o = function o() {
      return ye(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee3() {
        var e, _s4;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              e = {
                collectType: 0,
                collectOpcode: n.rsSkuDomainList[0].skuCode || ""
              };
              _context3.prev = 1;
              _context3.next = 4;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.checkCollectExit)(e);
            case 4:
              _s4 = _context3.sent;
              c(_s4);
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              console.log(_context3.t0);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 8]]);
      }));
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
      onClick: function onClick() {
        console.log(123), (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(a.dataObj) ? ye(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee4() {
          var e;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                e = {
                  collectType: 0,
                  collectOpcode: n.rsSkuDomainList[0].skuCode || "",
                  collectOppic: n.dataPic,
                  collectOpcont: n.goodsName,
                  collectOpnum: n.pricesetNprice,
                  goodsOrigin: 0
                };
                _context4.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.saveCollect)(e);
              case 3:
                o();
              case 4:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        })) : ye(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee5() {
          var e;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                console.log(53, 12313132);
                e = {
                  collectType: 0,
                  collectCode: a.dataObj || ""
                };
                _context5.next = 4;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.deleteCollectByCode)(e);
              case 4:
                o();
              case 5:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: Ve,
        alt: "",
        className: "icon"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "txt"
      }, {
        children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(a.dataObj) ? "收藏" : "已收藏"
      }))]
    }));
  },
  _e = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref20) {
    var a = _ref20.promotionBegintime,
      c = _ref20.pbName,
      n = _ref20.discName,
      i = _ref20.promotionCode,
      t = _ref20.promotionName,
      o = _ref20.couponOnceNums,
      d = _ref20.couponOnceNumd,
      g = _ref20.promotionEndtime;
    var _r19 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      m = _r19.View,
      h = _r19.Text,
      _Y = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddCoupon)(),
      b = _Y.save,
      p = _Y.isPick,
      u = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return o - d;
      }, [o, d]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
      className: "couponItem"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
        className: "coupon-content"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
          className: "price"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
            className: "symbol"
          }, {
            children: c
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
            className: "num"
          }, {
            children: n
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, Object.assign({
            className: "title"
          }, {
            children: t
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(h, Object.assign({
            className: "date"
          }, {
            children: [dayjs__WEBPACK_IMPORTED_MODULE_6___default()(a).format("YYYY-MM-DD"), " -", " ", dayjs__WEBPACK_IMPORTED_MODULE_6___default()(g).format("YYYY-MM-DD")]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, u > 0 ? Object.assign({
          className: p ? "coupon-pick-default" : "coupon-pick",
          onClick: function onClick() {
            return b({
              promotionCode: i,
              couponAmount: 1
            });
          }
        }, {
          children: p ? "已领取" : "领取"
        }) : Object.assign({
          className: "coupon-pick-default"
        }, {
          children: "已领完"
        }))]
      }))
    }));
  }),
  es = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl,
  ss = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useStore,
  as = function as(_ref21) {
    var c = _ref21.coupon;
    var _r20 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r20.View,
      t = _r20.Text,
      _n11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n12 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n11, 2),
      l = _n12[0],
      d = _n12[1],
      _ss = ss(),
      g = _ss.couponValue;
    return console.log(34, c), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
        className: "goodsDetail-coupon",
        onClick: function onClick() {
          return d(!0);
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
          className: "label"
        }, {
          children: "优惠券"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "label"
          }, {
            children: g ? "\u5DF2\u9009\u62E9: ".concat(g) : "请选择优惠券"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: Le,
            alt: "",
            className: "icon"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Popup, Object.assign({
        popupVisible: l,
        popupHandler: d
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
          className: "goodsDetail-coupon-popup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
            height: "400"
          }, {
            children: c.map(function (e, s) {
              return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_e, Object.assign({}, e, {
                key: s
              }));
            })
          }))
        }))
      }))]
    });
  },
  cs = function cs(_ref22) {
    var s = _ref22.onChange,
      _ref22$readOnly = _ref22.readOnly,
      a = _ref22$readOnly === void 0 ? !1 : _ref22$readOnly,
      _ref22$size = _ref22.size,
      c = _ref22$size === void 0 ? 22 : _ref22$size,
      i = _ref22.count;
    var _r21 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _r21.View,
      _n13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
        icon: "star-fill"
      }, {
        icon: "star"
      }, {
        icon: "star"
      }, {
        icon: "star"
      }, {
        icon: "star"
      }]),
      _n14 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n13, 2),
      o = _n14[0],
      d = _n14[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      if (i) {
        var _e3 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_18__["default"])(o);
        for (var _s5 = 0; _s5 < _e3.length; _s5++) _e3[_s5].icon = _s5 > i - 1 ? "star" : "star-fill";
        d(_e3);
      }
    }, []);
    var g = function g(e) {
      if (!a) {
        for (var _s6 = 0; _s6 < o.length; _s6++) o[_s6].icon = _s6 > e ? "star" : "star-fill";
        d((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_18__["default"])(o)), s(e + 1);
      }
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
      children: o.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ve, {
          onClick: g.bind(null, a),
          value: s.icon,
          style: {
            color: "#EC6C5C",
            fontSize: c
          }
        }, a);
      })
    });
  },
  ns = function ns(_ref23) {
    var a = _ref23.item;
    var _r22 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r22.View,
      n = _r22.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "rateItem"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "topInfo"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "lPart"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
            src: a.userImgurl,
            className: "avatar"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "userInfo"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
              className: "name"
            }, {
              children: a.userName
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cs, {
              readOnly: !0,
              size: 14,
              count: a.evaluateScopeReList.length
            })]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "rPart"
        }, {
          children: "".concat(new Date(a.gmtCreate).getFullYear(), "-").concat(new Date(a.gmtCreate).getMonth() + 1, "-").concat(new Date(a.gmtCreate).getDate())
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "size"
      }, {
        children: a.skuName
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "content"
      }, {
        children: a.evaluateGoodsContent
      }))]
    }));
  },
  is = function is(_ref24) {
    var a = _ref24.evaluateArr;
    var _r23 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r23.View,
      n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(a);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "goodsDetailEvaluate"
    }, {
      children: n.current.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "topInfo"
        }, {
          children: ["评价 (", n.current.length, ")"]
        })), n.current.slice(0, 5).map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ns, {
            item: s
          }, a);
        })]
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "noData"
      }, {
        children: "暂无评论"
      }))
    }));
  },
  ts = function ts() {
    var e = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)(),
      _n15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _n16 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n15, 2),
      s = _n16[0],
      a = _n16[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ye(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee6() {
        var s, _e4;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              s = e.getStorageSync("service");
              if (!s) {
                _context6.next = 5;
                break;
              }
              a(c(s));
              _context6.next = 9;
              break;
            case 5:
              _context6.next = 7;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryOcsconfigList)();
            case 7:
              _e4 = _context6.sent;
              a(c(_e4));
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
    }, []);
    var c = function c(e) {
      var s = [];
      for (var _a = 0; _a < e.length; _a++) {
        var _c = e[_a].ocsOcserviceReDomain;
        s.push("".concat(_c.ocserviceName, ": ").concat(_c.ocserviceRemark));
      }
      return s;
    };
    return {
      servicePopup: function servicePopup() {
        e.showActionSheet({
          itemList: s,
          success: function success(e) {
            console.log(e.tapIndex);
          },
          fail: function fail(e) {
            console.log(e.errMsg);
          }
        });
      }
    };
  },
  ls = {
    label: ""
  },
  os = function os() {
    var _r24 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r24.Text,
      c = _r24.View,
      n = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl(),
      _ts = ts(),
      i = _ts.servicePopup;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "goodsDetailHandleBar"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "linkGroup",
        onClick: i
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
          value: "kefu",
          style: {
            fontSize: 22,
            display: "block"
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
          className: "txt"
        }, {
          children: "客服"
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "linkGroup",
        onClick: function onClick() {
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.switchTabImpl)(Ce.shopping);
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
          value: "gouwuche",
          style: {
            fontSize: 22,
            display: "block"
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
          className: "txt"
        }, {
          children: "购物车"
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "btnGroup"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "btn addCart",
          onClick: function onClick() {
            ++qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.refreshCard.num, n({
              type: "popupImpl",
              payload: {
                orderType: 0,
                popupVisible: !0,
                isNeedButton: !0
              }
            });
          }
        }, {
          children: "加入购物车"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          onClick: function onClick() {
            n({
              type: "popupImpl",
              payload: {
                orderType: 1,
                popupVisible: !0,
                isNeedButton: !0
              }
            });
          },
          className: "btn buy"
        }, {
          children: "立即购买"
        }))]
      }))]
    }));
  },
  rs = function rs(_ref25) {
    var s = _ref25.tabActive,
      a = _ref25.goods;
    var _r25 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r25.View,
      _n17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _n18 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n17, 2),
      i = _n18[0],
      l = _n18[1];
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      l(a.goodsRemark.replace(/<style>[\s\S]*<\/style>/gi, "").replace(/\<img/gi, '<img class="mystyle" mode="widthFix"').replace(/<!--[\s\S]*-->/gi, ""));
    }, [a.goodsRemark, s]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "goodsDetail-info"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: i || ""
        }
      })
    }));
  },
  ds = function ds(_ref26) {
    var a = _ref26.skuName,
      c = _ref26.skuOption,
      n = _ref26.index;
    var _r26 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r26.View,
      t = _r26.Text,
      _ref27 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddShopping)(),
      l = _ref27.handleChooseSize,
      o = _ref27.spec;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
      className: "sizeArr"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
        className: "title"
      }, {
        children: a
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "sizeArrItemWrap"
      }, {
        children: c.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "sizeItem " + (o[n] === s.specValueValue ? "active" : ""),
            onClick: l.bind(null, s.specValueValue, n)
          }, {
            children: s.specValueValue
          }), a);
        })
      }))]
    }));
  },
  gs = function gs(_ref28) {
    var a = _ref28.goods,
      c = _ref28.goodSku;
    var _ref29 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddShopping)(),
      n = _ref29.count,
      i = _ref29.spec,
      t = _ref29.popupVisible,
      l = _ref29.isNeedButton,
      o = _ref29.handleStep,
      d = _ref29.popupHandler,
      g = _ref29.addShoppingImpl,
      _r27 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      m = _r27.View,
      h = _r27.Text,
      b = _r27.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Popup, Object.assign({
      popupVisible: t,
      popupHandler: d
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
        className: "goodsDetail-size-popup"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
          className: "content"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
            className: "goodsInfo"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
              className: "lPart"
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(b, {
                src: a.dataPic,
                alt: "",
                className: "goodsImg"
              })
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
              className: "rPart"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
                className: "name"
              }, {
                children: a.goodsShowname || ""
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
                className: "price"
              }, {
                children: ["￥ ", a.pricesetNprice.toFixed(2) || ""]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
                className: "chosen"
              }, {
                children: ["已选择: ", i.toString()]
              }))]
            }))]
          })), c.map(function (s, a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ds, {
              index: a,
              skuName: s.skuName,
              skuOption: s.skuOption
            }, a);
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
            className: "countWrap"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
              className: "label"
            }, {
              children: "购买数量"
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.NumStep, {
              count: n,
              handleStep: o
            })]
          }))]
        })), l && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
          className: "btnWrap",
          onClick: g
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, Object.assign({
            className: "btn"
          }, {
            children: "确认"
          }))
        }))]
      }))
    }));
  },
  ms = function ms(_ref30) {
    var a = _ref30.promotionList;
    var _r28 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r28.View,
      n = _r28.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "goodsDetail-promotion"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
        className: "label"
      }, {
        children: "促销"
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "group"
      }, {
        children: a.length ? a.map(function (_ref31, a) {
          var s = _ref31.discName;
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "item"
          }, {
            children: s
          }), a);
        }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "noPromotion"
        }, {
          children: "暂无促销活动"
        }))
      }))]
    }));
  },
  hs = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl,
  bs = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useStore,
  ps = function ps(_ref32) {
    var c = _ref32.goods,
      n = _ref32.goodSku;
    var _r29 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r29.View,
      t = _r29.Text,
      _bs = bs(),
      l = _bs.count,
      o = _bs.spec,
      d = hs();
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
        className: "goodsDetail-size",
        onClick: function onClick() {
          return d({
            type: "popupImpl",
            payload: {
              popupVisible: !0,
              isNeedButton: !1
            }
          });
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
          className: "label"
        }, {
          children: "规格"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
            className: "label"
          }, {
            children: ["已选择 数量: ", l, " 规格: ", o.toString()]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: Le,
            alt: "",
            className: "icon"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(gs, {
        goodSku: n,
        goods: c
      })]
    });
  },
  us = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Ns = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.StoreProvider,
  js = function js(_ref33) {
    var c = _ref33.skuCode;
    var n;
    var _r30 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r30.View,
      t = _r30.Text,
      l = _r30.Skeleton,
      _ee = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsDetailImpl)(c),
      o = _ee.goods,
      d = _ee.promotionArr,
      g = _ee.checkCollectionObj,
      m = _ee.setCheckCollectionObj,
      h = _ee.sliderArr,
      b = _ee.tabActive,
      p = _ee.setTabActive,
      u = _ee.goodSku,
      N = _ee.evaluateArr,
      j = _ee.coupon;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "GoodsDetailWrap",
      style: {
        minHeight: us ? "" : "667px",
        height: us ? "" : "auto",
        overflow: us ? "" : "auto"
      }
    }, {
      children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(o) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
        className: "skeleton"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
          animated: !0,
          style: {
            "--width": "100%",
            "--height": "300px"
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l.Title, {
          animated: !0
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l.Paragraph, {
          lineCount: 10,
          animated: !0
        })]
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
          className: "topSlider"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ze, {
            selectImg: h,
            type: 1,
            imgHeight: {
              height: 375,
              width: 375
            }
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "goodsDetail-topInfo"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
              className: "name"
            }, {
              children: null == o ? void 0 : o.goodsName
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
              className: "price"
            }, {
              children: ["￥", null === (n = null == o ? void 0 : o.pricesetNprice) || void 0 === n ? void 0 : n.toFixed(2)]
            }))]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "rPart"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)($e, {
              goods: o,
              checkCollectionObj: g,
              setCheckCollectionObj: m
            })
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ps, {
          goods: o,
          goodSku: u
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ms, {
          promotionList: d
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(as, {
          coupon: j
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "goodsDetailTab"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
            className: "tabs"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
              className: "tabsItem " + (1 === b ? "active" : ""),
              onClick: function onClick() {
                return p(1);
              }
            }, {
              children: ["商品详情", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
                className: "line"
              })]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
              className: "tabsItem " + (2 === b ? "active" : ""),
              onClick: function onClick() {
                return p(2);
              }
            }, {
              children: ["评价", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
                className: "line"
              })]
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "group"
          }, {
            children: 1 === b ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(rs, {
              tabActive: b,
              goods: o
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(is, {
              evaluateArr: N
            })
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(os, {})]
      })
    }));
  },
  Os = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref34) {
    var s = _ref34.skuCode;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ns, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(js, {
        skuCode: s
      })
    });
  });
function fs(e) {
  var s = "https://b2cweapp40673927e2a14ea49df338dc06bd4e9a.saas.qjclouds.com/";
  return RegExp(/https?/).test(e) ? e : s + e;
}
var As = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref35) {
    var c = _ref35.navList,
      n = _ref35.activeKey;
    var _r31 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r31.View,
      t = _r31.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: c.map(function (a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
          className: ["content", n === "".concat(a.goodsClassCode) ? " active" : ""].join("")
        }, {
          children: ((null == a ? void 0 : a.childList) || []).map(function (a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
              className: "classifyFloor"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                className: "titleWrap"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                  className: "title"
                }, {
                  children: a.goodsClassName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
                  className: "line"
                })]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                className: "container"
              }, {
                children: ((null == a ? void 0 : a.childList) || []).map(function (_ref36) {
                  var a = _ref36.classtreeCode,
                    c = _ref36.goodsClassCode,
                    n = _ref36.goodsClassLogo,
                    l = _ref36.goodsClassName;
                  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                    onClick: function onClick() {
                      return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(Ce.goodList, "?classtreeCode=").concat(a));
                    },
                    className: "classifyFloorGoodsItem"
                  }, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                      src: fs(n),
                      className: "logo"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                      className: "title"
                    }, {
                      children: l
                    }))]
                  }), c);
                })
              }))]
            }), a.goodsClassCode);
          })
        }), a.goodsClassCode);
      })
    });
  }),
  ys = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.SideBar,
  vs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _r32 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r32.View,
      c = _r32.Text,
      _se = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsClassify)(),
      n = _se.activeKey,
      i = _se.setActiveKey,
      t = _se.navList,
      l = _se.flag;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
      className: "goodsClassifyWrap",
      style: {
        height: l ? "100%" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
        className: "goods-classify"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
          className: "goods-classify-search",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(Ce.search);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ve, {
            value: "fenxiang"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
            children: "搜索商品"
          })]
        }))
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
        className: "goodsClassifyContainer"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
          className: "side"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ys, Object.assign({
            activeKey: n,
            onChange: i,
            style: {
              "--width": "88px"
            }
          }, {
            children: t.map(function (s) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ys.Item, {
                title: s.goodsClassName
              }, s.goodsClassCode);
            })
          }))
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
          className: "main"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(As, {
            navList: t,
            activeKey: n
          })
        }))]
      }))]
    }));
  }),
  Cs = [{
    name: "默认",
    sortField: "pricesetNprice"
  }, {
    name: "新品",
    sortField: ""
  }, {
    name: "销量",
    sortField: "goodsSalesvolume",
    order: "asc"
  }, {
    name: "价格",
    sortField: "pricesetNprice",
    order: "asc"
  }],
  ks = function ks(_ref37) {
    var a = _ref37.setParams;
    var _r33 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r33.View,
      _n19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _n20 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n19, 2),
      i = _n20[0],
      t = _n20[1],
      _n21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Cs),
      _n22 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n21, 2),
      l = _n22[0],
      o = _n22[1];
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "sortWrap"
    }, {
      children: l.map(function (_ref38, d) {
        var n = _ref38.order,
          l = _ref38.sortField,
          r = _ref38.name;
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "sortItem " + (i === d ? "active" : ""),
          onClick: function onClick() {
            return function (e, s, c) {
              t(s), c && o(function (e) {
                return e[s].order = "asc" === c ? "desc" : "asc", (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_18__["default"])(e);
              }), a({
                sortField: e,
                order: c
              });
            }(l, d, n);
          }
        }, {
          children: [r, n && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ve, {
            style: {
              color: i === d ? "#f00" : "#444",
              fontSize: 20
            },
            value: "desc" === n ? "jiangxu" : "shengxu"
          })]
        }), d);
      })
    }));
  },
  ws = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref39) {
    var _ref39$classtreeCode = _ref39.classtreeCode,
      a = _ref39$classtreeCode === void 0 ? "" : _ref39$classtreeCode,
      _ref39$searchParam = _ref39.searchParam,
      c = _ref39$searchParam === void 0 ? "" : _ref39$searchParam;
    var _r34 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r34.View,
      t = _r34.Text,
      _n23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _n24 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n23, 2),
      o = _n24[0],
      d = _n24[1],
      _ae = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsList)(a, c, o),
      g = _ae.loading,
      m = _ae.getData,
      h = _ae.list,
      u = qe("#searchId");
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
      className: "goodsList"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
        id: "searchId",
        className: "top-info"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "top-info-search",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(Ce.search);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ve, {
            value: "fenxiang"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
            children: "搜索商品"
          })]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ks, {
          setParams: d
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "listWrap"
      }, {
        children: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
            onScroll: function onScroll() {
              return m(o);
            },
            height: u
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              className: "list"
            }, {
              children: h.map(function (a) {
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                  onClick: function onClick() {
                    return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(Ce.goodDetail, "?skuCode=").concat(a.skuCode));
                  },
                  className: "listItem"
                }, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
                    className: "img",
                    style: {
                      backgroundImage: "url(".concat(a.dataPic, ")")
                    }
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                    className: "name"
                  }, {
                    children: a.goodsName
                  })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
                    className: "price"
                  }, {
                    children: ["￥ ", a.pricesetNprice.toFixed(2)]
                  }))]
                }), a.skuCode);
              })
            })), g ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Loading, {}) : null]
          }));
        }, [u, h])
      }))]
    }));
  }),
  xs = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Is = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref40) {
    var a = _ref40.placeholder,
      c = _ref40.placeholderText,
      i = _ref40.history;
    var _r35 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _r35.View,
      l = _r35.Text,
      o = _r35.Input,
      _n25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("history") || [];
      }),
      _n26 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n25, 2),
      d = _n26[0],
      g = _n26[1];
    console.log(23, (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("history"));
    var m = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function (e) {
        return ye(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee7() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                xs && (g(function (s) {
                  if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(e.detail.value)) return s;
                  var a = s.concat(e.detail.value);
                  return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.setStorage)("history", a), a;
                }), h(e.detail.value));
              case 1:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
      }),
      h = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function (e) {
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(Ce.goodList, "?searchParam=").concat(e));
      });
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      className: "searchPage"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "search-title"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: Ve,
          alt: ""
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
          "confirm-type": "search",
          type: "text",
          className: "content",
          onConfirm: m
        }, a ? {
          placeholder: c
        } : {})), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
          className: "btn",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorBackImpl)();
          }
        }, {
          children: "取消"
        }))]
      })), i ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "historyWrap"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
          className: "title"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
            className: "label"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
              className: "icon"
            }), "历史搜索记录"]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ve, {
            onClick: function onClick() {
              return ye(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee8() {
                return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)();
                    case 2:
                      _context8.sent.removeStorageSync("history");
                      g([]);
                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }));
            },
            value: "shanchu",
            style: {
              fontSize: 18,
              color: "#222",
              lineHeight: "61px",
              cursor: "pointer"
            }
          })]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
          className: "content"
        }, {
          children: d.map(function (s, a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
              onClick: function onClick() {
                return h(s);
              },
              className: "historyItem"
            }, {
              children: s
            }), a);
          })
        }))]
      })) : null]
    }));
  }),
  Ds = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _r36 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r36.View,
      c = _r36.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
      className: "goodsDetail-topInfo-wrap"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
        className: "goodsDetail-topInfo"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "name"
          }, {
            children: "宠侣 狗狗零食鸡肉绕饼干620g宠"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "price"
          }, {
            children: "￥2300.00"
          }))]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
          className: "rPart"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: Ve,
            alt: "",
            className: "icon"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "txt"
          }, {
            children: "已收藏"
          }))]
        }))]
      }))
    }));
  }),
  Bs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _r37 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _r37.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "goodsDetail-promotion-wrap"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, {
        className: "goodsDetail-promotion"
      })
    }));
  }),
  Ts = function Ts(_ref41) {
    var _ref41$starColor = _ref41.starColor,
      a = _ref41$starColor === void 0 ? "#FF0934" : _ref41$starColor,
      _ref41$starSize = _ref41.starSize,
      c = _ref41$starSize === void 0 ? "12px" : _ref41$starSize,
      n = _ref41.itemData;
    var _r38 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r38.View,
      t = _r38.Text,
      l = _r38.Image,
      o = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Rate;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
      className: "evaluateItem"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
        className: "userInfo"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
          src: n.avatar,
          className: "avatar"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "userNameWrap"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "userName"
          }, {
            children: n.userName
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, {
            readOnly: !0,
            value: n.rate,
            style: {
              "--star-size": c,
              "--active-color": a
            }
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
        className: "size"
      }, {
        children: ["规格： ", n.size]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "content"
      }, {
        children: n.evaluate
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "img-group"
      }, {
        children: n.imgUrls.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
            src: s.imgUrl,
            className: "img"
          }, a);
        })
      }))]
    }));
  },
  Ss = [{
    avatar: "http://www.qianjiangcloud.com/images/centerimga/pic%EF%BC%8Flogo+@2x.png",
    userName: "张三李四王五",
    rate: 4.5,
    size: "一大通",
    evaluate: "实物与描述的一样，质量相当好，卖家态度也好，有问必答，发货速度杠杠的，值得购买哦。外观设计漂亮，尺寸大小合适，包装仔细完整，宝贝手感不错，感觉很好，发货速度快，服务态度一流，给力！5星好评！",
    imgUrls: [{
      imgUrl: "https://img12.360buyimg.com/n1/jfs/t1/137059/18/27631/76566/635fc607E0b9e9c60/762dac6802e989d3.jpg"
    }, {
      imgUrl: "https://img12.360buyimg.com/n1/jfs/t1/137059/18/27631/76566/635fc607E0b9e9c60/762dac6802e989d3.jpg"
    }, {
      imgUrl: "https://img12.360buyimg.com/n1/jfs/t1/137059/18/27631/76566/635fc607E0b9e9c60/762dac6802e989d3.jpg"
    }, {
      imgUrl: "https://img12.360buyimg.com/n1/jfs/t1/137059/18/27631/76566/635fc607E0b9e9c60/762dac6802e989d3.jpg"
    }]
  }, {
    avatar: "http://www.qianjiangcloud.com/images/centerimga/pic%EF%BC%8Flogo+@2x.png",
    userName: "张三李四王五",
    rate: 4.5,
    size: "一大通",
    evaluate: "实物与描述的一样，质量相当好，卖家态度也好，有问必答，发货速度杠杠的，值得购买哦。外观设计漂亮，尺寸大小合适，包装仔细完整，宝贝手感不错，感觉很好，发货速度快，服务态度一流，给力！5星好评！",
    imgUrls: [{
      imgUrl: "https://img12.360buyimg.com/n1/jfs/t1/137059/18/27631/76566/635fc607E0b9e9c60/762dac6802e989d3.jpg"
    }]
  }],
  Vs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _n27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1"),
      _n28 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n27, 2),
      c = _n28[0],
      t = _n28[1],
      _r39 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _r39.View,
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([{
        label: "全部",
        num: "900+",
        index: "1"
      }, {
        label: "好评",
        num: "800+",
        index: "2"
      }, {
        label: "中评",
        num: "99+",
        index: "3"
      }, {
        label: "差评",
        num: "12",
        index: "4"
      }]),
      d = function d(e) {
        t(e);
      };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
        className: "evaluateListTab"
      }, {
        children: o.current.map(function (e) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
            className: "evaluateListTabItem " + (e.index === c ? "active" : ""),
            "data-index": e.index,
            onClick: d.bind(null, e.index)
          }, {
            children: [e.label, " ", e.num]
          }), e.index);
        })
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
        className: "evaluateListContent"
      }, {
        children: Ss.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ts, {
            itemData: s
          }, a);
        })
      }))]
    });
  }),
  Ls = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref42) {
    var c = _ref42.code;
    var _ce = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useEvaluateDetail)(c),
      n = _ce.orderInfo,
      t = _ce.changeStar,
      l = _ce.Submit,
      o = _ce.changeContent,
      d = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
      _r40 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _r40.View,
      m = _r40.Image,
      b = _r40.TextArea,
      p = _r40.Textarea,
      u = b || p,
      N = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("宝贝满足你吗？分享一下它吧");
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
      className: "evaluateDetail"
    }, {
      children: [n.map(function (c, n) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "topInfo"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
              className: "lPart"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, {
                src: c.dataPic,
                className: "img"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
                className: "goodsInfo"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
                  className: "goodsName"
                }, {
                  children: c.goodsName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
                  className: "goodsSize"
                }, {
                  children: c.skuName
                }))]
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
              className: "rPart"
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
                className: "price"
              }, {
                children: ["￥ ", c.pricesetNprice]
              }))
            }))]
          }), n), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "rate"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
              className: "title"
            }, {
              children: "商品评价"
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cs, {
              onChange: t.bind(null, n)
            })]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
            className: "evaluate"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(u, {
              className: "content",
              placeholder: N.current,
              rows: 5,
              maxLength: 30,
              onInput: o.bind(null, n)
            })
          }))]
        });
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
        className: "btn",
        onClick: l
      }, {
        children: "提交"
      }))]
    }));
  }),
  Ps = function Ps(_ref43) {
    var s = _ref43.txt,
      a = _ref43.onChange,
      c = _ref43.checked;
    var _r41 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      n = _r41.View,
      i = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Checkbox;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        onChange: a,
        checked: c,
        style: {
          "--icon-size": "18px",
          "--font-size": "14px",
          "--gap": "6px"
        }
      }, {
        children: s
      }))
    });
  },
  Rs = function Rs(_ref44) {
    var a = _ref44.itemData,
      c = _ref44.delAddress,
      n = _ref44.setDefault,
      _ref44$fontSize = _ref44.fontSize,
      i = _ref44$fontSize === void 0 ? "12px" : _ref44$fontSize,
      _ref44$iconSize = _ref44.iconSize,
      t = _ref44$iconSize === void 0 ? "12px" : _ref44$iconSize;
    var _r42 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _r42.View,
      o = _r42.Text,
      d = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
      g = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)(),
      m = "weapp";
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
      className: "addressItem"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "upInfo",
        onClick: function onClick() {
          ls.label = a.addressId, g.navigateBack({
            delta: 1
          });
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "userInfo"
        }, {
          children: [a.addressMember, " ", a.addressPhone]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "addressInfo"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(o, Object.assign({
            className: "address"
          }, {
            children: [a.provinceName, " ", a.areaName, " ", a.cityName, " ", a.addressDetail]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
            value: "bianjishuru"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "downInfo"
      }, {
        children: [d ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({
          className: "checkboxMini"
        }, {
          children: "h5" === m ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ps, {
            txt: "设为默认地址",
            onChange: n,
            checked: "1" === (null == a ? void 0 : a.addressDefault)
          }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("checkbox-group", Object.assign({
            onChange: n,
            class: "checkBoxWrap"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("checkbox", {
              value: "cb",
              checked: "1" === (null == a ? void 0 : a.addressDefault)
            }), "设为默认地址"]
          }))
        })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", Object.assign({
          className: "checkBoxPc"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
            type: "checkbox",
            checked: "1" === a.addressDefault
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
            children: "设为默认地址"
          })]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
          className: "del",
          onClick: c
        }, {
          children: "删除"
        }))]
      }))]
    }));
  },
  zs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _r43 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _r43.View,
      c = _r43.Skeleton,
      n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Array(3).fill(0));
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
        className: "skullWrap"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
          className: "skull"
        }, {
          children: n.current.map(function (s, a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
              className: "skullItem",
              animated: !0
            }, a);
          })
        }))
      }))
    });
  }),
  Ms = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref45) {
    var a = _ref45.refreshNum;
    var _r44 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r44.View,
      n = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
      _ne = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddressList)(a),
      i = _ne.list,
      t = _ne.delAddress,
      l = _ne.setDefault,
      o = _ne.skullShow;
    return console.log(111111, ls), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "addressListWrap",
      style: {
        height: n ? "inherit" : "667px"
      }
    }, {
      children: [o ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(zs, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "addressList"
      }, {
        children: i.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Rs, {
            itemData: s,
            setDefault: l.bind(null, s, a),
            delAddress: t.bind(null, s)
          }, null == s ? void 0 : s.addressId);
        })
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "addBtnWrap"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "addBtn",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(Ce.addressEditor));
          }
        }, {
          children: "+ 新增地址"
        }))
      }))]
    }));
  }),
  Fs = [{
    type: "input",
    props: {
      onlyShowClearWhenFocus: !0,
      placeholder: "请填写收货人姓名"
    },
    label: "收货人",
    name: "addressMember",
    rules: [{
      required: !0,
      message: "收货人姓名不能为空"
    }]
  }, {
    type: "input",
    props: {
      type: "number",
      onlyShowClearWhenFocus: !0,
      placeholder: "请填写收货人手机号码"
    },
    label: "手机号码",
    name: "addressPhone",
    rules: [{
      required: !0,
      message: "收货人手机号码不能为空"
    }, {
      validator: function validator(e, s) {
        return new Promise(function (e, a) {
          !/^1[3456789]\d{9}$/.test(s) && s ? a("请输入正确手机号") : e("");
        });
      }
    }]
  }, {
    type: "cascader",
    label: "所在地区",
    name: "area",
    rules: [{
      required: !0,
      message: "所在地区不能为空"
    }]
  }, {
    type: "input",
    props: {
      onlyShowClearWhenFocus: !0,
      placeholder: "街道/楼牌号等"
    },
    label: "详细地址",
    name: "addressDetail",
    rules: [{
      required: !0,
      message: "收货人详细地址不能为空"
    }]
  }, {
    type: "switch",
    props: {},
    label: "设置默认地址",
    name: "addressDefault"
  }],
  Ws = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _r45 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _r45.View,
      c = _r45.Skeleton,
      n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Array(5).fill(0));
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
        className: "skullWrap"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
          className: "skull"
        }, {
          children: n.current.map(function (s, a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
              className: "skullItem",
              animated: !0
            }, a);
          })
        }))
      }))
    });
  });
china_division_dist_areas_json__WEBPACK_IMPORTED_MODULE_9__.forEach(function (e) {
  var s = china_division_dist_cities_json__WEBPACK_IMPORTED_MODULE_8__.filter(function (s) {
    return s.code === e.cityCode;
  })[0];
  s && (s.children = s.children || [], s.children.push({
    label: e.name,
    value: e.code
  }));
}), china_division_dist_cities_json__WEBPACK_IMPORTED_MODULE_8__.forEach(function (e) {
  var s = china_division_dist_provinces_json__WEBPACK_IMPORTED_MODULE_7__.filter(function (s) {
    return s.code === e.provinceCode;
  })[0];
  s && (s.children = s.children || [], s.children.push({
    label: e.name,
    value: e.code + "00",
    children: e.children
  }));
});
var Gs = china_division_dist_provinces_json__WEBPACK_IMPORTED_MODULE_7__.map(function (e) {
    return {
      label: e.name,
      value: e.code + "0000",
      children: e.children
    };
  }),
  Es = function Es(_ref46) {
    var a = _ref46.form,
      c = _ref46.handleArea;
    var _r46 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r46.View,
      t = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.CascadePicker,
      l = a.getFieldValue("area"),
      _n29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n30 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n29, 2),
      o = _n30[0],
      d = _n30[1],
      g = function g(e) {
        var s = {
            provinceName: "",
            provinceCode: e[0],
            cityName: "",
            cityCode: e[1],
            areaName: "",
            areaCode: e[2]
          },
          a = {
            pIndex: 0,
            cIndex: 0
          };
        for (var _c2 = 0; _c2 < Gs.length; _c2++) if (Gs[_c2].value === e[0]) {
          s.provinceName = Gs[_c2].label, a.pIndex = _c2;
          break;
        }
        for (var _c3 = 0; _c3 < Gs[a.pIndex].children.length; _c3++) if (Gs[a.pIndex].children[_c3].value === e[1]) {
          s.cityName = Gs[a.pIndex].children[_c3].label, a.cIndex = _c3;
          break;
        }
        for (var _c4 = 0; _c4 < Gs[a.pIndex].children[a.cIndex].children.length; _c4++) if (Gs[a.pIndex].children[a.cIndex].children[_c4].value === e[2]) {
          s.areaName = Gs[a.pIndex].children[a.cIndex].children[_c4].label;
          break;
        }
        return console.log(52, s), s;
      };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "txt",
        onClick: function onClick() {
          return d(!0);
        }
      }, {
        children: (null == l ? void 0 : l.provinceName) ? "".concat(l.provinceName, "\u2014").concat(l.cityName, "-").concat(l.areaName) : "请选择所在地区"
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
        onConfirm: function onConfirm(e) {
          c("h5", g(e));
        },
        options: Gs,
        visible: o,
        onClose: function onClose() {
          return d(!1);
        }
      })]
    });
  },
  Qs = function Qs(_ref47) {
    var s = _ref47.checked,
      a = _ref47.onChange;
    var _r47 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r47.View,
      n = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Switch;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
        checked: s,
        onChange: a,
        style: {
          "--checked-color": "#000000",
          "--height": "36px",
          "--width": "60px"
        }
      })
    });
  },
  Us = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Hs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref48) {
    var s = _ref48.addressId;
    var _r48 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r48.View,
      n = _r48.Switch,
      i = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Form,
      t = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
      l = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Input,
      o = "weapp",
      _ie = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useEditAddress)(s, i, Us),
      d = _ie.skullShow,
      g = _ie.form,
      m = _ie.area,
      b = _ie.defaultAddress,
      p = _ie.handleArea,
      u = _ie.handleDefaultAddress,
      N = _ie.handleFinish;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "addressDetail",
      style: {
        height: Us ? "100%" : "667px"
      }
    }, {
      children: d ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ws, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        form: g,
        layout: "horizontal",
        mode: "card",
        onFinish: N,
        footer: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
          block: !0,
          type: "submit",
          color: "primary",
          size: "large"
        }, {
          children: "提交"
        }))
      }, {
        children: Fs.map(function (s, t) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i.Item, Object.assign({
            label: s.label,
            name: s.name,
            rules: s.rules,
            trigger: "cascader" === s.type ? "onConfirm" : "onChange",
            arrow: !1
          }, {
            children: "input" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({}, s.props)) : "switch" === s.type ? "h5" === o ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Qs, {
              onChange: u.bind(null, "h5"),
              checked: "1" === b
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
              color: "#000",
              onChange: u.bind(null, "weapp"),
              checked: "1" === b
            }) : "cascader" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: Us ? "h5" === o ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Es, {
                form: g,
                handleArea: p
              }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("picker", Object.assign({
                mode: "region",
                onChange: p.bind(null, "weapp"),
                value: "123"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                  className: "areaWrap"
                }, {
                  children: m.provinceName ? "".concat(m.provinceName, "\u2014").concat(m.cityName, "-").concat(m.areaName) : "请选择所在地区"
                }))
              })) : "请选择所在地区"
            }) : void 0
          }), t);
        })
      }))
    }));
  }),
  qs = function qs(_ref49) {
    var s = _ref49.address;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(s) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Zs, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ks, {
        address: s
      })
    });
  },
  Ks = function Ks(_ref50) {
    var a = _ref50.address;
    var _r49 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r49.View,
      n = _r49.Text,
      i = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        var e = a.provinceName,
          s = a.addressDefault,
          c = a.cityName,
          n = a.areaName,
          i = a.addressDetail,
          _a$addressMember = a.addressMember,
          t = _a$addressMember === void 0 ? "" : _a$addressMember,
          _a$addressPhone = a.addressPhone,
          l = _a$addressPhone === void 0 ? "" : _a$addressPhone;
        return {
          addressDefault: "1" === s,
          addressMember: t,
          addressPhone: l,
          address: e + c + n + i
        };
      }, [a]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "address-info"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
        style: {
          fontWeight: 900,
          color: "#444",
          lineHeight: 3.2
        },
        value: "shouhuodizhi"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "left"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "left-title"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
            children: i.addressMember
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "left-padding"
          }, {
            children: i.addressPhone
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "left-padding left-title-default"
          }, {
            children: i.addressDefault ? "默认" : ""
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "left-detail"
        }, {
          children: i.address
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
        value: "xiangyou1",
        style: {
          color: "#444",
          lineHeight: 3,
          textAlign: "right"
        }
      })]
    }));
  },
  Zs = function Zs() {
    var _r50 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r50.View,
      n = _r50.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "group"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
          className: "local"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
          className: "address"
        }, {
          children: "选择收货地址"
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
        className: "arrow"
      })]
    });
  },
  Xs = function Xs(_ref51) {
    var c = _ref51.payState,
      n = _ref51.amount;
    var _r51 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r51.View,
      t = c.shoppingCountPrice,
      l = c.freight,
      o = c.comDisMoney;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
        className: "price blcWrap"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
          className: "title"
        }, {
          children: "价格明细"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "express blcItem"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "label"
          }, {
            children: "商品总金额"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
            className: "value"
          }, {
            children: ["￥ ", (+t).toFixed(2)]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "coupon blcItem"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "label"
          }, {
            children: "优惠金额"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
            className: "value"
          }, {
            children: ["￥ ", o]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "express blcItem"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "label"
          }, {
            children: "运费"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
            className: "value"
          }, {
            children: ["￥ ", l]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "all blcItem"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "label"
          }, {
            children: "总计"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
            className: "value",
            style: {
              color: "#000"
            }
          }, {
            children: ["￥ ", n]
          }))]
        }))]
      }))
    });
  },
  Ys = function Ys(_ref52) {
    var s = _ref52.goodsList;
    var _r52 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r52.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
      className: "place-order-goods"
    }, {
      children: s.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(We, Object.assign({}, s), a);
      })
    }));
  },
  Js = function Js(_ref53) {
    var a = _ref53.amount,
      c = _ref53.savePayPrice;
    var _r53 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      n = _r53.View,
      i = _r53.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
      className: "placeOrderFooter"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
        className: "price"
      }, {
        children: ["合计: ", a]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
        className: "btn",
        onClick: c
      }, {
        children: "生成订单"
      }))]
    }));
  },
  $s = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref54) {
    var a = _ref54.couponStart,
      c = _ref54.pbName,
      n = _ref54.discName,
      i = _ref54.promotionCode,
      t = _ref54.promotionName,
      l = _ref54.couponEnd,
      o = _ref54.disable;
    var _r54 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _r54.View,
      g = _r54.Text,
      m = _r54.Radio;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
      className: "couponItem"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, Object.assign({
        className: "coupon-content"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, Object.assign({
          className: "price"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
            className: "symbol"
          }, {
            children: c
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
            className: "num"
          }, {
            children: n
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
            className: "title"
          }, {
            children: t
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "date"
          }, {
            children: [dayjs__WEBPACK_IMPORTED_MODULE_6___default()(a).format("YYYY-MM-DD"), " - ", dayjs__WEBPACK_IMPORTED_MODULE_6___default()(l).format("YYYY-MM-DD")]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, o ? Object.assign({
          className: "coupon-pick-default"
        }, {
          children: "不能用"
        }) : Object.assign({
          className: "choose"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, {
            disabled: o,
            value: i
          })
        }))]
      }))
    }));
  }),
  _s = function _s(_ref55) {
    var c = _ref55.coupon,
      i = _ref55.confirm,
      t = _ref55.amount;
    var _r55 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _r55.View,
      g = _r55.Text,
      _n31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n32 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n31, 2),
      m = _n32[0],
      h = _n32[1],
      _n33 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _n34 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n33, 2),
      p = _n34[0],
      u = _n34[1],
      j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return (c.find(function (e) {
          return e.promotionCode === p;
        }) || {}).promotionName;
      }, [p]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, Object.assign({
        className: "coupon-select",
        onClick: function onClick() {
          return h(!0);
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
          className: "label"
        }, {
          children: "优惠券"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
            className: "label"
          }, {
            children: j ? "\u5DF2\u9009\u62E9: ".concat(j) : "请选择优惠券"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: Le,
            alt: "",
            className: "icon"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Popup, Object.assign({
        popupVisible: m,
        popupHandler: h
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
          className: "goodsDetail-coupon-popup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
            height: 400
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.SmoothRadio, Object.assign({
              onChange: function onChange(e) {
                var s = e.detail.value,
                  a = c.find(function (e) {
                    return e.promotionCode === s;
                  }) || {};
                u(s), h(!1), i(a);
              }
            }, {
              children: c.map(function (e, s) {
                return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($s, Object.assign({
                  disable: t < e.discAmount
                }, e, {
                  key: s
                }));
              })
            }))
          }))
        }))
      }))]
    });
  },
  ea = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref56) {
    var a = _ref56.refreshNum,
      c = _ref56.goodsNum,
      n = _ref56.skuId,
      i = _ref56.shoppingGoodsId;
    var _r56 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _r56.View,
      l = ls.label,
      _te = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.usePlaceOrder)({
        skuId: n,
        goodsNum: c,
        shoppingGoodsId: i
      }, a, l),
      o = _te.savePayPrice,
      d = _te.address,
      g = _te.list,
      m = _te.payState,
      h = _te.coupon,
      b = _te.confirm,
      p = _te.amount;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      style: {
        height: "100%"
      },
      className: "placeOrder"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "order-wrap",
        style: {
          height: "calc(100% - 54px)"
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
          className: "chooseAddress",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(Ce.addressList);
          }
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(qs, {
            address: d
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ys, {
          goodsList: g.current
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
          className: "info blcWrap"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
            className: "express blcItem"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
              className: "label"
            }, {
              children: "配送方式"
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
              className: "value"
            }, {
              children: "快递"
            }))]
          }))
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_s, {
          coupon: h,
          confirm: b,
          amount: p
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xs, {
          amount: p,
          savePayPrice: o,
          payState: m.current
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Js, {
        savePayPrice: o,
        amount: p
      })]
    }));
  }),
  sa = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderResultResult.useOrderResult,
  aa = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  ca = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref57) {
    var a = _ref57.code;
    var _r57 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r57.View,
      n = _r57.Text,
      _sa = sa(a || ((0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("contractBillcode") || {}).contractBillcode),
      i = _sa.result,
      t = i.sysRecode,
      l = i.dataObj;
    return console.log(15, t, l), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "placeOrderResult",
      style: {
        height: aa ? "100vh" : "667px"
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, t ? Object.assign({
        className: "placeOrderResultContent"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
          className: "icon"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "tips"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "title"
          }, {
            children: "订单支付成功"
          }))
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "placeOrderResultWrap"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "placeOrderResultItem"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
              className: "label"
            }, {
              children: "订单号："
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
              className: "value"
            }, {
              children: l.contractBillcode
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "placeOrderResultItem"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
              className: "label"
            }, {
              children: "支付方式："
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
              className: "value"
            }, {
              children: "在线支付"
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "placeOrderResultItem"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
              className: "label"
            }, {
              children: "支付金额："
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
              className: "value"
            }, {
              children: ["￥ ", l.dataBmoney]
            }))]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "btnGroup"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "btn black",
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.orderDetail, "?contractBillcode=").concat(l.contractBillcode));
            }
          }, {
            children: "查看订单"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.switchTabImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.classify);
            },
            className: "btn white"
          }, {
            children: "继续购物"
          }))]
        }))]
      }) : Object.assign({
        className: "placeOrderResultContent"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
          className: "icon"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "tips"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "title"
          }, {
            children: "订单支付失败"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "tip"
          }, {
            children: "您的订单将保留15分钟，可点击下方“去支付”完成订单"
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "btnGroup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.paymentMode, "?code=").concat(i.contractBillcode));
            },
            className: "btn white"
          }, {
            children: "去支付"
          }))
        }))]
      }))
    }));
  }),
  na = function na() {
    var _r58 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _r58.View,
      a = _r58.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "noData"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, {
        src: "https://b2cweapp7c0069b43749439d97b7cae6a02bd459.saas.qjclouds.com/paas/shop-master/c-static/images/wxminiImg/no_coupon.png",
        className: "img"
      })
    }));
  },
  ia = function ia(_ref58) {
    var c = _ref58.coe;
    var _oe = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOverdue)(),
      n = _oe.overdueList,
      _r59 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r59.View,
      t = _r59.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 3 === c ? n.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
        style: {
          height: "80vh"
        }
      }, {
        children: n.map(function (a, c) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "couponListItem overdue"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
              className: "coupon-content"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                className: "price"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                  className: "num"
                }, {
                  children: a.pbName
                }))
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                className: "info"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                  className: "title"
                }, {
                  children: a.discName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
                  className: "date"
                }, {
                  children: ["有效期至：", "".concat(new Date(a.gmtModified).getFullYear(), "-").concat(new Date(a.gmtModified).getMonth() + 1, "-").concat(new Date(a.gmtModified).getDate())]
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                  className: "btn"
                }, {
                  children: "已使用"
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                  className: "round"
                }, {
                  children: "已失效"
                }))]
              }))]
            }))
          }), c);
        })
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(na, {}) : null
    });
  };
/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
  var _r60 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    s = _r60.View,
    c = _r60.Skeleton,
    n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Array(3).fill(0));
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "skullWrap"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
        className: "skull"
      }, {
        children: n.current.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
            className: "skullItem",
            animated: !0
          }, a);
        })
      }))
    }))
  });
});
var ta = function ta(_ref59) {
    var c = _ref59.coe;
    var _re = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useUnused)(),
      n = _re.unusedList,
      _r61 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r61.View,
      t = _r61.Text,
      l = qe("#couponTab");
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 1 === c ? n.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
        height: l + 40
      }, {
        children: n.map(function (a, c) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "couponListItem unused"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
              className: "coupon-content"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                className: "price"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                  className: "num"
                }, {
                  children: a.pbName
                }))
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                className: "info"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                  className: "title"
                }, {
                  children: a.discName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
                  className: "date"
                }, {
                  children: ["有效期至：", "".concat(new Date(a.gmtModified).getFullYear(), "-").concat(new Date(a.gmtModified).getMonth() + 1, "-").concat(new Date(a.gmtModified).getDate())]
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                  className: "btn"
                }, {
                  children: "未使用"
                }))]
              }))]
            }))
          }), c);
        })
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(na, {}) : null
    });
  },
  la = function la(_ref60) {
    var c = _ref60.coe;
    var _r62 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      n = _r62.View,
      i = _r62.Text,
      _de = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useUsed)(),
      t = _de.usedList;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 2 === c ? t.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
        style: {
          height: "80vh"
        }
      }, {
        children: t.map(function (a, c) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "couponListItem used"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
              className: "coupon-content"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                className: "price"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                  className: "num"
                }, {
                  children: a.pbName
                }))
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
                className: "info"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                  className: "title"
                }, {
                  children: a.discName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                  className: "date"
                }, {
                  children: ["有效期至：", "".concat(new Date(a.gmtModified).getFullYear(), "-").concat(new Date(a.gmtModified).getMonth() + 1, "-").concat(new Date(a.gmtModified).getDate())]
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                  className: "btn"
                }, {
                  children: "已使用"
                }))]
              }))]
            }))
          }), c);
        })
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(na, {}) : null
    });
  },
  oa = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _r63 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r63.View,
      c = _r63.Text,
      _ge = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCouponList)(),
      n = _ge.coe,
      i = _ge.setCoe,
      l = _ge.config;
    return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryUsercouponNember)().then(function (e) {
        console.log(26, e);
      });
    }, []), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
      className: "couponList"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
        className: "couponTab",
        id: "couponTab"
      }, {
        children: l.current.map(function (t) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
            className: "couponTabItem " + (n === t.id ? "active" : ""),
            onClick: function onClick() {
              return i(t.id);
            }
          }, {
            children: [t.label, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
              className: "icon"
            })]
          }), t.id);
        })
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
        className: "couponListContent"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ta, {
          coe: n
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(la, {
          coe: n
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ia, {
          coe: n
        })]
      }))]
    }));
  });
function ra(_ref61) {
  var a = _ref61.list;
  var _r64 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    c = _r64.View,
    n = _r64.Text,
    i = _r64.Image,
    t = _r64.Checkbox,
    _me = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useStore)(),
    l = _me.loading,
    _he = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCartItem)(),
    o = _he.select,
    d = _he.onChange,
    g = _he.handleStep;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.WrapLoading, Object.assign({
    loading: l
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.SmoothCheckbox, Object.assign({
      onChange: d
    }, {
      children: a.map(function (a, l) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "cartItem"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "checkBoxWrap"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
              checked: o.includes(a.shoppingGoodsId + ""),
              value: a.shoppingGoodsId,
              style: {
                "--icon-size": "16px",
                "--font-size": "14px",
                "--gap": "6px"
              }
            })
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
            className: "img",
            src: a.dataPic
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "info"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
              className: "goodsName"
            }, {
              children: a.goodsName
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
              className: "size"
            }, {
              children: ["规格：", a.skuName, " X ", a.goodsCamount]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
              className: "handleWrap"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
                className: "price"
              }, {
                children: ["￥", a.pricesetNprice]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.NumStep, {
                count: a.goodsCamount,
                handleStep: g.bind(null, a.shoppingGoodsId, a.goodsCamount)
              })]
            }))]
          }))]
        }), l);
      })
    }))
  }));
}
var da = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  ga = function ga(_ref62) {
    var c = _ref62.refreshNum;
    var _r65 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r65.View,
      t = _r65.Text,
      l = _r65.Checkbox,
      _n35 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
      _n36 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n35, 2),
      o = _n36[0],
      d = _n36[1],
      _pe = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCartList)(c),
      g = _pe.cartList,
      m = _pe.amount,
      h = _pe.selectAll,
      b = _pe.allCart,
      p = _pe.toOrderImpl,
      u = _pe.select,
      N = _pe.deleteCart,
      j = _pe.disMoney;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "cart",
      style: {
        height: da ? "100%" : "667px"
      }
    }, {
      children: g.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
          className: "edit"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "btn",
            onClick: function onClick() {
              return d(!o);
            }
          }, {
            children: o ? "编辑" : "完成"
          }))
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
          className: "itemGroup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ra, {
            list: g
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "dashboard"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "choose"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.SmoothCheckbox, Object.assign({
              onChange: h
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
                checked: b.current.length === u.length,
                value: "true",
                style: {
                  "--icon-size": "16px",
                  "--font-size": "14px",
                  "--gap": "6px"
                }
              }, {
                children: "全选"
              }))
            }))
          })), o ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
            className: "check"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
              className: "priceGroup"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                className: "discount"
              }, {
                children: ["优惠: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
                  className: "data"
                }, {
                  children: ["￥ ", j || 0]
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                className: "all"
              }, {
                children: ["合计: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
                  className: "data"
                }, {
                  children: ["￥ ", m.amount.toFixed(2)]
                }))]
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
              onClick: p,
              className: "btn"
            }, {
              children: ["结算(", m.num, ")"]
            }))]
          })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "del"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              onClick: N,
              className: "btn"
            }, {
              children: "删除"
            }))
          }))]
        }))]
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "noData"
      }, {
        children: "购物车空空如也~"
      }))
    }));
  },
  ma = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref63) {
    var s = _ref63.refreshNum;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.StoreProvider, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ga, {
        refreshNum: s
      })
    });
  }),
  ha = function ha() {
    var _r66 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r66.View,
      c = _r66.Text,
      n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([{
        icon: "coupons",
        label: "我的优惠券",
        link: "couponList"
      }, {
        icon: "collect",
        label: "我的收藏",
        link: "collectionList"
      }, {
        icon: "dizhi",
        label: "我的地址",
        link: "addressList"
      }, {
        icon: "eyes",
        label: "我的足迹",
        link: "footprint"
      }, {
        icon: "tianxie",
        label: "我的协议",
        link: "myAgreementList"
      }, {
        icon: "shezhi",
        label: "我的设置",
        link: "mySetting"
      }]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
      className: "menuList"
    }, {
      children: n.current.map(function (n, i) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
          className: "menuListItem",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(Ce[n.link]);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
            className: "lPart"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
              value: n.icon
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
              className: "label"
            }, {
              children: n.label
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
            value: "xiangyou1"
          })]
        }), i);
      })
    }));
  },
  ba = function ba() {
    var _r67 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r67.View,
      c = _r67.Text,
      l = _r67.Badge,
      _n37 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _n38 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n37, 2),
      o = _n38[0],
      d = _n38[1],
      g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([{
        badge: 0,
        code: "waitPayNum",
        label: "待付款",
        icon: "daifukuan",
        link: ""
      }, {
        badge: 0,
        code: "waitDeliveryNum",
        label: "待发货",
        icon: "daifahuo",
        link: ""
      }, {
        badge: 0,
        code: "waitArriveNum",
        label: "待收货",
        icon: "daishouhuo",
        link: ""
      }, {
        badge: 0,
        code: "evaluateNum",
        label: "已完成",
        icon: "yiwancheng",
        link: ""
      }, {
        badge: 0,
        code: "afterSalesNum",
        label: "已取消",
        icon: "shouhou",
        link: ""
      }]);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ye(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee9() {
        var _e5;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.getContractNumbers)();
            case 3:
              _e5 = _context9.sent;
              d(_e5.dataObj);
              _context9.next = 9;
              break;
            case 7:
              _context9.prev = 7;
              _context9.t0 = _context9["catch"](0);
            case 9:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[0, 7]]);
      }));
    }, []), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
      className: "orderEntry"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
        className: "title"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
          className: "name"
        }, {
          children: "我的订单"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
          className: "more",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(Ce.order);
          }
        }, {
          children: "查看全部"
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
        className: "content"
      }, {
        children: g.current.map(function (n, i) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(Ce.order, "?id=").concat(i + 1));
            },
            className: "contentItem"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({}, o[n.code] > 0 ? {
              content: o[n.code]
            } : {}, {
              color: "#000",
              style: {
                color: "#fff",
                fontSize: 12
              }
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
                value: n.icon
              })
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
              className: "subTitle"
            }, {
              children: n.label
            }))]
          }), i);
        })
      }))]
    }));
  },
  pa = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref64) {
    var a = _ref64.avatarStyle,
      _ref64$userAvatar = _ref64.userAvatar,
      c = _ref64$userAvatar === void 0 ? "" : _ref64$userAvatar,
      _ref64$userNickname = _ref64.userNickname,
      n = _ref64$userNickname === void 0 ? "用户名" : _ref64$userNickname,
      i = _ref64.banner;
    var _r68 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _r68.View,
      l = _r68.Text,
      o = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
      _ts2 = ts(),
      d = _ts2.servicePopup;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      className: "mine",
      style: {
        height: o ? "100%" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "topBoard"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
          value: "shezhi",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(Ce.setting);
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
          value: "kehufuwukefu",
          onClick: d
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "userSetting",
        onClick: function onClick() {
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(Ce.setting);
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
          className: "lPart"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
            className: "name"
          }, {
            children: n || "用户名称"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "link",
            style: {
              paddingTop: "10px"
            }
          }, {
            children: "编辑个人资料 >"
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: c,
          alt: "",
          className: "avatar",
          style: {
            borderRadius: a ? "50%" : "2px"
          }
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ba, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ha, {}), i ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        className: "banner",
        src: "",
        alt: ""
      }) : null]
    }));
  }),
  ua = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Na = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref65) {
    var a = _ref65.code;
    var _r69 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r69.View,
      n = _r69.Text,
      i = _r69.Radio,
      _ue = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderResult)(a),
      t = _ue.paymentImpl,
      l = _ue.channelList,
      o = _ue.contract,
      d = _ue.handleRadio,
      g = _ue.loading;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "paymentModeWrap",
      style: {
        height: ua ? "inherit" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "paymentMode"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "topInfo"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
            className: "title"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
              value: "roundcheck"
            }), "订单提交成功"]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "info"
          }, {
            children: ["订单号：", o.current.contractBillcode, " | 总金额：", o.current.dataBmoney, "元"]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "paymentGroup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.SmoothRadio, Object.assign({
            onChange: d
          }, {
            children: l.map(function (a) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                className: "paymentItem"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
                  value: a.icon
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                    className: "base"
                  }, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
                      children: a.fchannelName
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
                      value: a.fchannelCode,
                      className: "choose"
                    })]
                  })), "account" === a.value ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                    className: "info"
                  }, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
                      children: "账户余额：0元"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
                      children: "本单抵扣：5.4元"
                    })]
                  })) : null]
                })]
              }), a.fchannelCode);
            })
          }))
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.WrapLoading, Object.assign({
        loading: g
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "btnGroup",
          onClick: t
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "payment"
          }, {
            children: "立即支付"
          }))
        }))
      }))]
    }));
  }),
  ja = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _r70 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _r70.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      clasName: "footprint"
    }, {
      children: 123123
    }));
  });


/***/ }),

/***/ "./src/account/components/accountForm/components/SubmitBtn/index.tsx":
/*!***************************************************************************!*\
  !*** ./src/account/components/accountForm/components/SubmitBtn/index.tsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitBtn": function() { return /* binding */ SubmitBtn; }
/* harmony export */ });
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


var SubmitBtn = function SubmitBtn(_ref) {
  var btnText = _ref.btnText;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_0__.Button, {
    block: true,
    shape: "rounded",
    size: "large",
    type: "submit",
    style: {
      '--background-color': '#000000',
      '--text-color': '#FFFFFF'
    },
    children: btnText
  });
};

/***/ }),

/***/ "./src/account/components/accountForm/components/accountItem/index.tsx":
/*!*****************************************************************************!*\
  !*** ./src/account/components/accountForm/components/accountItem/index.tsx ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountItem": function() { return /* binding */ AccountItem; }
/* harmony export */ });
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


var AccountItem = function AccountItem(_ref) {
  var _ref$txt = _ref.txt,
    txt = _ref$txt === void 0 ? '账号' : _ref$txt;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
    name: "account",
    rules: [{
      required: true,
      message: "".concat(txt, "\u4E0D\u80FD\u4E3A\u7A7A")
    }],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_0__.Input, {
      clearable: true,
      placeholder: "\u8BF7\u8F93\u5165".concat(txt)
    })
  });
};

/***/ }),

/***/ "./src/account/components/accountForm/components/codeItem/components/codeWrap/index.tsx":
/*!**********************************************************************************************!*\
  !*** ./src/account/components/accountForm/components/codeItem/components/codeWrap/index.tsx ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeWrap": function() { return /* binding */ CodeWrap; }
/* harmony export */ });
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/message */ "./src/utils/message.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);










var seconds = 60;
var CodeWrap = function CodeWrap(_ref) {
  var form = _ref.form,
    type = _ref.type;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    timeFlag = _useState2[0],
    setTimeFlag = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(seconds),
    _useState4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    time = _useState4[0],
    setTime = _useState4[1];
  var timeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
    lock = _useState6[0],
    setLock = _useState6[1];
  var getMobile = /*#__PURE__*/function () {
    var _ref2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
      var mobile, pass, phone, checkResult, result;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!lock) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            mobile = form.getFieldValue('mobile');
            if (!mobile) (0,_utils_message__WEBPACK_IMPORTED_MODULE_3__.errMessage)('请填写手机号');
            pass = type === 'mobileLogin' ? true : _utils__WEBPACK_IMPORTED_MODULE_1__.mobileRex.test(mobile);
            if (pass) {
              _context.next = 9;
              break;
            }
            (0,_utils_message__WEBPACK_IMPORTED_MODULE_3__.errMessage)('请填写正确的手机号');
            _context.next = 33;
            break;
          case 9:
            setLock(true);
            _context.prev = 10;
            phone = {
              userPhone: mobile
            };
            if (!(type === 'reg')) {
              _context.next = 19;
              break;
            }
            _context.next = 15;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.checkUserPhone)(phone);
          case 15:
            checkResult = _context.sent;
            if (checkResult.success) {
              _context.next = 19;
              break;
            }
            (0,_utils_message__WEBPACK_IMPORTED_MODULE_3__.errMessage)(checkResult.msg);
            return _context.abrupt("return");
          case 19:
            _context.next = 21;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.sendPhone)(phone);
          case 21:
            result = _context.sent;
            console.log(26, result);
            setTimeFlag(true);
            setTime(seconds);
            _context.next = 30;
            break;
          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](10);
            console.log(_context.t0);
          case 30:
            _context.prev = 30;
            setLock(false);
            return _context.finish(30);
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[10, 27, 30, 33]]);
    }));
    return function getMobile() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (time && time !== 0) timeRef.current = setTimeout(function () {
      setTime(time - 1);
    }, 1000);
    if (time === 0) setTimeFlag(false);
    return function () {
      clearTimeout(timeRef.current);
    };
  }, [time]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    children: timeFlag ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      children: ["\u5012\u8BA1\u65F6 ", time, " \u79D2"]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      onClick: getMobile,
      children: "\u83B7\u53D6\u9A8C\u8BC1\u7801"
    })
  });
};

/***/ }),

/***/ "./src/account/components/accountForm/components/codeItem/components/index.tsx":
/*!*************************************************************************************!*\
  !*** ./src/account/components/accountForm/components/codeItem/components/index.tsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeWrap": function() { return /* reexport safe */ _codeWrap__WEBPACK_IMPORTED_MODULE_0__.CodeWrap; }
/* harmony export */ });
/* harmony import */ var _codeWrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codeWrap */ "./src/account/components/accountForm/components/codeItem/components/codeWrap/index.tsx");


/***/ }),

/***/ "./src/account/components/accountForm/components/codeItem/index.tsx":
/*!**************************************************************************!*\
  !*** ./src/account/components/accountForm/components/codeItem/index.tsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeItem": function() { return /* binding */ CodeItem; }
/* harmony export */ });
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/account/components/accountForm/components/codeItem/components/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



var CodeItem = function CodeItem(_ref) {
  var _ref$txt = _ref.txt,
    txt = _ref$txt === void 0 ? '验证码' : _ref$txt,
    form = _ref.form,
    type = _ref.type;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
    name: "code",
    extra: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.CodeWrap, {
      form: form,
      type: type
    }),
    rules: [{
      required: true,
      message: "".concat(txt, "\u4E0D\u80FD\u4E3A\u7A7A")
    }],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_0__.Input, {
      maxLength: 6,
      clearable: true,
      placeholder: "\u8BF7\u8F93\u5165".concat(txt)
    })
  });
};

/***/ }),

/***/ "./src/account/components/accountForm/components/index.ts":
/*!****************************************************************!*\
  !*** ./src/account/components/accountForm/components/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountItem": function() { return /* reexport safe */ _accountItem__WEBPACK_IMPORTED_MODULE_4__.AccountItem; },
/* harmony export */   "CodeItem": function() { return /* reexport safe */ _codeItem__WEBPACK_IMPORTED_MODULE_1__.CodeItem; },
/* harmony export */   "MobileItem": function() { return /* reexport safe */ _mobileItem__WEBPACK_IMPORTED_MODULE_0__.MobileItem; },
/* harmony export */   "PasswordItem": function() { return /* reexport safe */ _passwordItem__WEBPACK_IMPORTED_MODULE_2__.PasswordItem; },
/* harmony export */   "SubmitBtn": function() { return /* reexport safe */ _SubmitBtn__WEBPACK_IMPORTED_MODULE_3__.SubmitBtn; }
/* harmony export */ });
/* harmony import */ var _mobileItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileItem */ "./src/account/components/accountForm/components/mobileItem/index.tsx");
/* harmony import */ var _codeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codeItem */ "./src/account/components/accountForm/components/codeItem/index.tsx");
/* harmony import */ var _passwordItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passwordItem */ "./src/account/components/accountForm/components/passwordItem/index.tsx");
/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitBtn */ "./src/account/components/accountForm/components/SubmitBtn/index.tsx");
/* harmony import */ var _accountItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accountItem */ "./src/account/components/accountForm/components/accountItem/index.tsx");






/***/ }),

/***/ "./src/account/components/accountForm/components/mobileItem/index.tsx":
/*!****************************************************************************!*\
  !*** ./src/account/components/accountForm/components/mobileItem/index.tsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileItem": function() { return /* binding */ MobileItem; }
/* harmony export */ });
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



var MobileItem = function MobileItem(_ref) {
  var _ref$txt = _ref.txt,
    txt = _ref$txt === void 0 ? '手机号' : _ref$txt;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
    name: "mobile",
    rules: [{
      required: true,
      message: "".concat(txt, "\u4E0D\u80FD\u4E3A\u7A7A")
    }, {
      pattern: _utils__WEBPACK_IMPORTED_MODULE_1__.mobileRex,
      message: "\u8BF7\u8F93\u5165\u6B63\u786E".concat(txt)
    }],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_0__.Input, {
      maxLength: 11,
      clearable: true,
      placeholder: "\u8BF7\u8F93\u5165".concat(txt)
    })
  });
};

/***/ }),

/***/ "./src/account/components/accountForm/components/passwordItem/index.tsx":
/*!******************************************************************************!*\
  !*** ./src/account/components/accountForm/components/passwordItem/index.tsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordItem": function() { return /* binding */ PasswordItem; }
/* harmony export */ });
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @brushes/simulate-component */ "../../qj/qj-mobile-core/packages/simulate-component/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






var PasswordItem = function PasswordItem(_ref) {
  var _ref$txt = _ref.txt,
    txt = _ref$txt === void 0 ? '密码' : _ref$txt;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    pwdType = _useState2[0],
    setPwdType = _useState2[1];
  var checkPwd = function checkPwd(_, value) {
    if (value.length > 5 && value.length < 13) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("\u8BF7\u8F93\u51656-12\u4F4D".concat(txt)));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
    name: "password",
    rules: [{
      required: true,
      message: "".concat(txt, "\u4E0D\u80FD\u4E3A\u7A7A")
    }, {
      validator: checkPwd
    }],
    extra: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      onClick: function onClick() {
        return setPwdType(!pwdType);
      },
      children: pwdType ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_5__.IconMobile, {
        value: "yincang"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_5__.IconMobile, {
        value: "liulan"
      })
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_1__.Input, {
      placeholder: "\u8BF7\u8F93\u5165".concat(txt),
      clearable: true,
      type: pwdType ? 'password' : 'text'
    })
  });
};

/***/ }),

/***/ "./src/account/components/accountForm/index.tsx":
/*!******************************************************!*\
  !*** ./src/account/components/accountForm/index.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountForm": function() { return /* binding */ AccountForm; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/account/components/accountForm/components/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "./src/account/hooks/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






var AccountForm = function AccountForm(_ref) {
  var type = _ref.type,
    btnText = _ref.btnText,
    txt = _ref.txt;
  var _useAccountForm = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useAccountForm)(type),
    form = _useAccountForm.form,
    onFinish = _useAccountForm.onFinish;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd_mobile__WEBPACK_IMPORTED_MODULE_0__.Form, {
      form: form,
      footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.SubmitBtn, {
        btnText: btnText
      }),
      onFinish: onFinish,
      children: [type === 'accountLogin' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.AccountItem, {}) : null, ['forgetPwd', 'reg', 'mobileLogin'].includes(type) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.MobileItem, {}) : null, type === 'reg' || type === 'mobileLogin' || type === 'forgetPwd' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.CodeItem, {
        form: form,
        type: type
      }) : null, type === 'reg' || type === 'accountLogin' || type === 'forgetPwd' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.PasswordItem, {
        txt: txt
      }) : null]
    })
  });
};

/***/ }),

/***/ "./src/account/components/agreementEntry/index.tsx":
/*!*********************************************************!*\
  !*** ./src/account/components/agreementEntry/index.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementEntry": function() { return /* binding */ AgreementEntry; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks */ "./src/account/hooks/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





var AgreementEntry = function AgreementEntry() {
  var _useAgreement = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.useAgreement)(),
    goDetail = _useAgreement.goDetail;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: "agreement",
    children: ["\u6CE8\u518C\u548C\u767B\u5F55\u5373\u4EE3\u8868\u540C\u610F \u300A", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "link",
      onClick: goDetail.bind(null, 'xieyi'),
      children: "\u7528\u6237\u534F\u8BAE"
    }), "\u300B \u548C \u300A", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "link",
      onClick: goDetail.bind(null, 'yinsi'),
      children: "\u9690\u79C1\u653F\u7B56"
    }), "\u300B"]
  });
};

/***/ }),

/***/ "./src/account/components/index.ts":
/*!*****************************************!*\
  !*** ./src/account/components/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountForm": function() { return /* reexport safe */ _accountForm__WEBPACK_IMPORTED_MODULE_1__.AccountForm; },
/* harmony export */   "AgreementEntry": function() { return /* reexport safe */ _agreementEntry__WEBPACK_IMPORTED_MODULE_2__.AgreementEntry; },
/* harmony export */   "LinkReg": function() { return /* reexport safe */ _linkReg__WEBPACK_IMPORTED_MODULE_3__.LinkReg; },
/* harmony export */   "TopLogo": function() { return /* reexport safe */ _topLogo__WEBPACK_IMPORTED_MODULE_0__.TopLogo; }
/* harmony export */ });
/* harmony import */ var _topLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topLogo */ "./src/account/components/topLogo/index.tsx");
/* harmony import */ var _accountForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accountForm */ "./src/account/components/accountForm/index.tsx");
/* harmony import */ var _agreementEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agreementEntry */ "./src/account/components/agreementEntry/index.tsx");
/* harmony import */ var _linkReg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkReg */ "./src/account/components/linkReg/index.tsx");





/***/ }),

/***/ "./src/account/components/linkReg/index.tsx":
/*!**************************************************!*\
  !*** ./src/account/components/linkReg/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkReg": function() { return /* binding */ LinkReg; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



var LinkReg = function LinkReg() {
  var goReg = function goReg() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: 'account/register/index'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    onClick: goReg,
    style: {
      paddingRight: '10px'
    },
    children: "\u6CE8\u518C"
  });
};

/***/ }),

/***/ "./src/account/components/topLogo/index.tsx":
/*!**************************************************!*\
  !*** ./src/account/components/topLogo/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopLogo": function() { return /* binding */ TopLogo; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ "./src/account/components/topLogo/logo.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var TopLogo = function TopLogo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: "topLogo",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "logo",
      style: {
        backgroundImage: "url(".concat(_logo_png__WEBPACK_IMPORTED_MODULE_0__, ")")
      }
    })
  });
};

/***/ }),

/***/ "./src/account/hooks/index.ts":
/*!************************************!*\
  !*** ./src/account/hooks/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAccountForm": function() { return /* reexport safe */ _useAccountForm__WEBPACK_IMPORTED_MODULE_0__.useAccountForm; },
/* harmony export */   "useAgreement": function() { return /* reexport safe */ _useAgreement__WEBPACK_IMPORTED_MODULE_1__.useAgreement; },
/* harmony export */   "useAuth": function() { return /* reexport safe */ _useAuth__WEBPACK_IMPORTED_MODULE_2__.useAuth; }
/* harmony export */ });
/* harmony import */ var _useAccountForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAccountForm */ "./src/account/hooks/useAccountForm/index.ts");
/* harmony import */ var _useAgreement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAgreement */ "./src/account/hooks/useAgreement/index.ts");
/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAuth */ "./src/account/hooks/useAuth/index.ts");





/***/ }),

/***/ "./src/account/hooks/useAccountForm/index.ts":
/*!***************************************************!*\
  !*** ./src/account/hooks/useAccountForm/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAccountForm": function() { return /* binding */ useAccountForm; }
/* harmony export */ });
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var _brushes_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brushes/request */ "./node_modules/@brushes/request/dist/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @brushes/utils */ "./node_modules/@brushes/utils/dist/index.js");









var useAccountForm = function useAccountForm(type) {
  var _Form$useForm = antd_mobile__WEBPACK_IMPORTED_MODULE_1__.Form.useForm(),
    _Form$useForm2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    submitLock = _useState2[0],
    setSubmitLock = _useState2[1];
  var onFinish = /*#__PURE__*/function () {
    var _ref = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee(formVal) {
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!submitLock) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.t0 = type;
            _context.next = _context.t0 === 'reg' ? 5 : _context.t0 === 'mobileLogin' ? 8 : _context.t0 === 'accountLogin' ? 11 : _context.t0 === 'forgetPwd' ? 14 : 17;
            break;
          case 5:
            _context.next = 7;
            return regSubmit(formVal);
          case 7:
            return _context.abrupt("break", 17);
          case 8:
            _context.next = 10;
            return mobileLoginSubmit(formVal);
          case 10:
            return _context.abrupt("break", 17);
          case 11:
            _context.next = 13;
            return accountLoginSubmit(formVal);
          case 13:
            return _context.abrupt("break", 17);
          case 14:
            _context.next = 16;
            return forgetPwdSubmit(formVal);
          case 16:
            return _context.abrupt("break", 17);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onFinish(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var regSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee2(formVal) {
      var params;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            params = {
              userPhone: formVal.mobile,
              code: formVal.code,
              userPwsswd: formVal.password,
              userinfoType: 1,
              userName: formVal.mobile
            };
            _context2.prev = 1;
            setSubmitLock(true);
            _context2.next = 5;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.saveUmuserPhone)(params);
          case 5:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateBack({
              delta: 1
            });
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(27, _context2.t0);
          case 11:
            _context2.prev = 11;
            setSubmitLock(false);
            return _context2.finish(11);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 8, 11, 14]]);
    }));
    return function regSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var mobileLoginSubmit = /*#__PURE__*/function () {
    var _ref3 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee3(formVal) {
      var params, result;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            params = {
              userPhone: formVal.mobile,
              code: formVal.code,
              userinfoType: 1
            };
            _context3.prev = 1;
            setSubmitLock(true);
            _context3.next = 5;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.saveUmuserPhoneVCode)(params);
          case 5:
            result = _context3.sent;
            (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_5__.setStorage)('saas-token', result.dataObj.ticketTokenid);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateBack({
              delta: stackLength(),
              success: function success(res) {
                console.log('调用前', res);
                (0,_brushes_request__WEBPACK_IMPORTED_MODULE_4__.errorCallback)();
              }
            });
            _context3.next = 13;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            console.log(27, _context3.t0);
          case 13:
            _context3.prev = 13;
            setSubmitLock(false);
            return _context3.finish(13);
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 10, 13, 16]]);
    }));
    return function mobileLoginSubmit(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var accountLoginSubmit = /*#__PURE__*/function () {
    var _ref4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee4(formVal) {
      var params, result;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            params = {
              loginName: formVal.account,
              passwd: formVal.password,
              code: 1234
            };
            _context4.prev = 1;
            setSubmitLock(true);
            _context4.next = 5;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.login)(params);
          case 5:
            result = _context4.sent;
            (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_5__.setStorage)('saas-token', result.dataObj.ticketTokenid);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateBack({
              delta: stackLength(),
              success: function success() {
                (0,_brushes_request__WEBPACK_IMPORTED_MODULE_4__.errorCallback)();
              }
            });
            _context4.next = 13;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](1);
            console.log(27, _context4.t0);
          case 13:
            _context4.prev = 13;
            setSubmitLock(false);
            return _context4.finish(13);
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 10, 13, 16]]);
    }));
    return function accountLoginSubmit(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var forgetPwdSubmit = /*#__PURE__*/function () {
    var _ref5 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee5(formVal) {
      var params;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            console.log(70, formVal);
            params = {
              userPhone: formVal.mobile,
              code: formVal.code,
              userPwsswd: formVal.password
            };
            _context5.prev = 2;
            setSubmitLock(true);
            _context5.next = 6;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.updateUmuserPw)(params);
          case 6:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateBack({
              delta: 1
            });
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            console.log(27, _context5.t0);
          case 12:
            _context5.prev = 12;
            setSubmitLock(false);
            return _context5.finish(12);
          case 15:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[2, 9, 12, 15]]);
    }));
    return function forgetPwdSubmit(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
  var stackLength = function stackLength() {
    var arr = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getCurrentPages();
    var obj = {
      pageIndex: 0
    };
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]['$taroPath'].indexOf('/account/') >= 0) {
        if (i === 0) {
          obj.pageIndex = 0;
        } else {
          obj.pageIndex = arr.length - i;
        }
        break;
      }
    }
    return obj.pageIndex;
  };
  var goRegister = function goRegister() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: 'account/register/index'
    });
  };
  var goAccountLogin = function goAccountLogin() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: 'account/accountLogin/index'
    });
  };
  var goMobileLogin = function goMobileLogin() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: 'account/mobileLogin/index'
    });
  };
  var goForgetPwd = function goForgetPwd() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: 'account/forgetPwd/index'
    });
  };
  return {
    form: form,
    onFinish: onFinish,
    goRegister: goRegister,
    goAccountLogin: goAccountLogin,
    goMobileLogin: goMobileLogin,
    goForgetPwd: goForgetPwd
  };
};

/***/ }),

/***/ "./src/account/hooks/useAgreement/index.ts":
/*!*************************************************!*\
  !*** ./src/account/hooks/useAgreement/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAgreement": function() { return /* binding */ useAgreement; }
/* harmony export */ });
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");







var useAgreement = function useAgreement(type) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    agreementData = _useState2[0],
    setAgreementData = _useState2[1];
  var proappCode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee() {
      var result, resultArr, i;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setProappCode();
            _context.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_0__.queryProappConfigByChannel)();
          case 3:
            result = _context.sent;
            resultArr = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(result, 'list');
            i = 0;
          case 6:
            if (!(i < resultArr.length)) {
              _context.next = 13;
              break;
            }
            if (!(resultArr[i].proappCode === proappCode.current && resultArr[i].proappConfigType === type)) {
              _context.next = 10;
              break;
            }
            setAgreementData(resultArr[i].proappConfigText2);
            return _context.abrupt("break", 13);
          case 10:
            i++;
            _context.next = 6;
            break;
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }, []);
  var setProappCode = function setProappCode() {
    var platform = "weapp";
    switch (platform) {
      case 'h5':
        proappCode.current = '003';
        break;
      case 'weapp':
        proappCode.current = '025';
        break;
    }
  };
  var goDetail = function goDetail(agreeType) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: "/account/agreement/index?type=".concat(agreeType)
    });
  };
  return {
    agreementData: agreementData,
    goDetail: goDetail
  };
};

/***/ }),

/***/ "./src/account/hooks/useAuth/index.ts":
/*!********************************************!*\
  !*** ./src/account/hooks/useAuth/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAuth": function() { return /* binding */ useAuth; }
/* harmony export */ });
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");





var useAuth = function useAuth() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    bg = _useState2[0],
    setBg = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    logo = _useState4[0],
    setLogo = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    agree = _useState6[0],
    setAgree = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getInfo();
  }, []);
  var getInfo = /*#__PURE__*/function () {
    var _ref = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee() {
      var res, result;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_1__.queryProappEnvPage)();
          case 3:
            res = _context.sent;
            result = res.list[0];
            setBg("https://www.".concat(result.proappEnvDomain).concat(result.proappEnvIndexc));
            setLogo("https://www.".concat(result.proappEnvDomain).concat(result.proappEnvLogo));
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    return function getInfo() {
      return _ref.apply(this, arguments);
    };
  }();
  var agreeFunc = function agreeFunc(e) {
    if (e.detail.value.length) {
      setAgree(true);
    } else {
      setAgree(false);
    }
  };
  return {
    bg: bg,
    logo: logo,
    agreeFunc: agreeFunc,
    setAgree: setAgree,
    agree: agree
  };
};

/***/ }),

/***/ "./src/components/dynamicComponent.tsx":
/*!*********************************************!*\
  !*** ./src/components/dynamicComponent.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/noop.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var s_material_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! s-material-react */ "../../qj/qj-mobile-react/packages/s-material-react/dist/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


var _excluded = ["node", "base", "topPage"];







var env = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getEnv();
var DynamicComponent = function DynamicComponent(_ref) {
  var node = _ref.node,
    base = _ref.base,
    topPage = _ref.topPage,
    rest = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);
  var safeArea = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('safeArea');
  var tabBarH = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var heightDefault = 0;

    // h5 非tab页面
    if (env === 'WEB' && !topPage) {
      heightDefault = 37;
    }
    return topPage ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('tabBarHeight') : heightDefault;
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: node.map(function (_ref2) {
      var id = _ref2.id,
        _ref2$props = _ref2.props,
        props = _ref2$props === void 0 ? {} : _ref2$props,
        type = _ref2.type;
      var MaterialsComponent = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(s_material_react__WEBPACK_IMPORTED_MODULE_5__, type, lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"]);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "monitor-node",
        style: {
          height: base ? '' : "calc(100vh - ".concat(safeArea, "px - ").concat(tabBarH, "px)")
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "content",
          style: {
            height: '100%'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MaterialsComponent, (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, props), rest))
        })
      }, id);
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (DynamicComponent);

/***/ }),

/***/ "./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @brushes/utils */ "./node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @brushes/simulate-component */ "../../qj/qj-mobile-core/packages/simulate-component/dist/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/last.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);












var env = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getEnv();
var HeaderJsx = function HeaderJsx(_ref) {
  var slot = _ref.slot;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useRouter = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
    path = _useRouter.path;
  var isHiddenHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (env === 'WEAPP') return true;
    return /^\/pages/.test(path);
  }, [path]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var lastConfig = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getCurrentPages());
    var navigationBarTitleText = lastConfig.config.navigationBarTitleText;
    setTitle(navigationBarTitleText);
  }, [path]);
  var navigatorHandler = function navigatorHandler() {
    var flag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isTopPage)();
    if (flag) {
      (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_1__.navigatorImpl)('/pages/index/index');
      return;
    }
    (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_1__.navigatorBackImpl)(-1);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: isHiddenHeader ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_8__.IconMobile, {
        style: {
          fontSize: 20
        },
        value: "xiangzuo",
        onClick: navigatorHandler
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        children: slot
      })]
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderJsx);

/***/ }),

/***/ "./src/components/index.tsx":
/*!**********************************!*\
  !*** ./src/components/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/header */ "./src/components/header.tsx");
/* harmony import */ var _dynamicComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicComponent */ "./src/components/dynamicComponent.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["route"];






var CommonJsx = function CommonJsx(_ref) {
  var route = _ref.route,
    rest = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, _excluded);
  var node = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.usePageConfig)(route);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dynamicComponent__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
      node: node
    }, rest))]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (CommonJsx);

/***/ }),

/***/ "./src/custom-tab-bar/basic.ts":
/*!*************************************!*\
  !*** ./src/custom-tab-bar/basic.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuDefaultValue": function() { return /* binding */ menuDefaultValue; }
/* harmony export */ });
var menuDefaultValue = {
  "/pages/index/index": {
    menuJspath: '/pages/index/index',
    selectedIconPath: '../images/tabbar_home_on.png',
    iconPath: '../images/tabbar_home.png'
  },
  "/pages/classify/index": {
    menuJspath: '/pages/classify/index',
    selectedIconPath: '../images/tabbar_cate_on.png',
    iconPath: '../images/tabbar_cate.png'
  },
  "/pages/shopping/index": {
    menuJspath: '/pages/shopping/index',
    selectedIconPath: '../images/tabbar_cart_on.png',
    iconPath: '../images/tabbar_cart.png'
  },
  "/pages/my/index": {
    menuJspath: '/pages/my/index',
    selectedIconPath: '../images/tabbar_my_on.png',
    iconPath: '../images/tabbar_my.png'
  }
};

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMenu": function() { return /* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.useMenu; },
/* harmony export */   "useMountedRef": function() { return /* reexport safe */ _useMountedRef__WEBPACK_IMPORTED_MODULE_1__.useMountedRef; },
/* harmony export */   "usePageConfig": function() { return /* reexport safe */ _usePageConfig__WEBPACK_IMPORTED_MODULE_0__.usePageConfig; }
/* harmony export */ });
/* harmony import */ var _usePageConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usePageConfig */ "./src/hooks/usePageConfig.ts");
/* harmony import */ var _useMountedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMountedRef */ "./src/hooks/useMountedRef.ts");
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMenu */ "./src/hooks/useMenu.ts");




/***/ }),

/***/ "./src/hooks/useMenu.ts":
/*!******************************!*\
  !*** ./src/hooks/useMenu.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": function() { return /* binding */ loadMenu; },
/* harmony export */   "useMenu": function() { return /* binding */ useMenu; }
/* harmony export */ });
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var _custom_tab_bar_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/custom-tab-bar/basic */ "./src/custom-tab-bar/basic.ts");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/message */ "./src/utils/message.ts");









function useMenu() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    menuList = _useState2[0],
    setMenuList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    activePath = _useState4[0],
    setPath = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(15);
    // @ts-ignore
    (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
      var menuData, menu;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            menuData = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('taroMenu');
            if (!menuData) {
              _context.next = 5;
              break;
            }
            setMenuList(menuData);
            initPath();
            return _context.abrupt("return");
          case 5:
            _context.prev = 5;
            _context.next = 8;
            return loadMenu();
          case 8:
            menu = _context.sent;
            setMenuList(menu);
            initPath();
            _context.next = 15;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](5);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 13]]);
    }))();
  }, []);
  var initPath = function initPath() {
    var _Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentInstance().router.path,
      path = _Taro$getCurrentInsta === void 0 ? '/pages/index/index' : _Taro$getCurrentInsta;
    setPath(path);
  };
  return {
    menuList: menuList,
    activePath: activePath
  };
}
function loadMenu() {
  return _loadMenu.apply(this, arguments);
}
function _loadMenu() {
  _loadMenu = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2() {
    var result, menu;
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryTginfoMenuTree)({
            proappCode: '025',
            rows: 30,
            page: 1
          });
        case 2:
          result = _context2.sent;
          menu = result.map(function (item) {
            return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, _custom_tab_bar_basic__WEBPACK_IMPORTED_MODULE_3__.menuDefaultValue[item.menuJspath]), {}, {
              text: item.tginfoMenuName,
              menuOpcode: item.menuOpcode
            });
          });
          if (![[], undefined, null, ''].includes(menu)) {
            _context2.next = 7;
            break;
          }
          (0,_utils_message__WEBPACK_IMPORTED_MODULE_4__.errMessage)('租户菜单配置不正确');
          return _context2.abrupt("return");
        case 7:
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('taroMenu', menu);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('menu', menu.concat(result[0].children));
          return _context2.abrupt("return", menu);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _loadMenu.apply(this, arguments);
}

/***/ }),

/***/ "./src/hooks/useMountedRef.ts":
/*!************************************!*\
  !*** ./src/hooks/useMountedRef.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMountedRef": function() { return /* binding */ useMountedRef; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useMountedRef = function useMountedRef() {
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

/***/ }),

/***/ "./src/hooks/usePageConfig.ts":
/*!************************************!*\
  !*** ./src/hooks/usePageConfig.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePageConfig": function() { return /* binding */ usePageConfig; }
/* harmony export */ });
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var _utils_menuData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/menuData */ "./src/utils/menuData.ts");
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMenu */ "./src/hooks/useMenu.ts");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/message */ "./src/utils/message.ts");










function usePageConfig(route) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    node = _useState2[0],
    setNode = _useState2[1];
  var menuRx = (0,_utils_menuData__WEBPACK_IMPORTED_MODULE_3__.useMenuGraph)(route);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee() {
      var menuOpcode, isExister, nodeResource, pageConfig, dataStr, data;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return init(route);
          case 2:
            menuOpcode = _context.sent;
            isExister = _utils_menuData__WEBPACK_IMPORTED_MODULE_3__.menuGraph.get(route);
            if (!(isExister && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(isExister.lowCodeGraph))) {
              _context.next = 8;
              break;
            }
            nodeResource = isExister.lowCodeGraph;
            setNode(nodeResource.nodeGraph);
            return _context.abrupt("return");
          case 8:
            console.log(menuOpcode);
            _context.next = 11;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getPfsModelTagValueByTginfo)({
              menuOpcode: menuOpcode,
              proappCode: '025'
            });
          case 11:
            pageConfig = _context.sent;
            dataStr = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(pageConfig, 'modelTagvalueJson', '{}');
            data = JSON.parse(dataStr);
            if (!data.hasOwnProperty('nodeGraph')) {
              (0,_utils_message__WEBPACK_IMPORTED_MODULE_5__.errMessage)('脏数据, 初始化默认数据');
              data = {
                nodeGraph: [],
                page: '',
                version: '',
                pageConfig: {}
              };
            }
            menuRx.init(data);
            setNode(data.nodeGraph);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }, [route]);
  function init(_x) {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee2(path) {
      var menu, _ref2, menuOpcode;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            menu = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('menu') || [];
            if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(menu)) {
              _context2.next = 5;
              break;
            }
            _context2.next = 4;
            return (0,_useMenu__WEBPACK_IMPORTED_MODULE_4__.loadMenu)();
          case 4:
            menu = _context2.sent;
          case 5:
            _ref2 = menu.find(function (item) {
              return path.includes(item.menuJspath);
            }) || {}, menuOpcode = _ref2.menuOpcode;
            if (menuOpcode) {
              _context2.next = 9;
              break;
            }
            (0,_utils_message__WEBPACK_IMPORTED_MODULE_5__.errMessage)('菜单配置有问题');
            return _context2.abrupt("return");
          case 9:
            return _context2.abrupt("return", menuOpcode);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _init.apply(this, arguments);
  }
  return node;
}

/***/ }),

/***/ "./src/utils/auth.ts":
/*!***************************!*\
  !*** ./src/utils/auth.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export login */
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");





function checkSession() {
  return _checkSession.apply(this, arguments);
}
function _checkSession() {
  _checkSession = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee() {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().checkSession({
              success: function success() {
                return resolve(true);
              },
              fail: function fail() {
                return resolve(false);
              }
            });
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _checkSession.apply(this, arguments);
}
function bindSeller() {
  return _bindSeller.apply(this, arguments);
} // 检测登录状态，返回 true / false
function _bindSeller() {
  _bindSeller = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee2() {
    var token, referrer;
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('saas-token');
          referrer = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('referrer');
          if (token) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return");
        case 4:
          if (referrer) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return");
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _bindSeller.apply(this, arguments);
}
function checkHasLogined() {
  return _checkHasLogined.apply(this, arguments);
}
function _checkHasLogined() {
  _checkHasLogined = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee3() {
    var token, loggined;
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('saas-token');
          if (token) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", false);
        case 3:
          _context3.next = 5;
          return checkSession();
        case 5:
          loggined = _context3.sent;
          if (loggined) {
            _context3.next = 9;
            break;
          }
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('saas-token');
          return _context3.abrupt("return", false);
        case 9:
          return _context3.abrupt("return", true);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _checkHasLogined.apply(this, arguments);
}
function wxaCode() {
  return _wxaCode.apply(this, arguments);
}
function _wxaCode() {
  _wxaCode = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee4() {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", new Promise(function (resolve, reject) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().login({
              success: function success(res) {
                return resolve(res.code);
              },
              fail: function fail() {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
                  title: '获取code失败',
                  icon: 'none'
                });
                return resolve('获取code失败');
              }
            });
          }));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _wxaCode.apply(this, arguments);
}
function login(bindImpl) {
  return new Promise(function (resolve, reject) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().login({
      success: function success(result) {
        (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_1__.warrantyLogin)({
          js_code: result.code
        }).then(function (res) {
          // 异常情况
          if (!res.dataObj) {
            // 登录错误
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
              title: '无法登录',
              icon: "error",
              duration: 1500
            });
            reject();
            return;
          }
          var isReister = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(res, 'dataObj.register', "");
          var userOpenid = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(res, 'dataObj.userOpenid', "");
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('userOpenid', userOpenid);
          if (isReister === "true") {
            // 去绑定
            bindImpl();
            return;
          }
          var token = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(res, 'dataObj.userInfo', "{}");
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('saas-token', token);
          resolve('');
        });
      }
    });
  });
}
function authorize() {
  return _authorize.apply(this, arguments);
}
function _authorize() {
  _authorize = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee5() {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", new Promise(function (resolve, reject) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().login({
              success: function success(res) {
                var code = res.code;
                var referrer = ''; // 推荐人
                var referrer_storge = wx.getStorageSync('referrer');
                if (referrer_storge) {
                  referrer = referrer_storge;
                }
                // 下面开始调用注册接口
                var extConfigSync = wx.getExtConfigSync();
                if (extConfigSync.subDomain) {
                  WXAPI.wxappServiceAuthorize({
                    code: code,
                    referrer: referrer
                  }).then(function (res) {
                    if (res.code == 0) {
                      wx.setStorageSync('token', res.data.token);
                      wx.setStorageSync('uid', res.data.uid);
                      resolve(res);
                    } else {
                      wx.showToast({
                        title: res.msg,
                        icon: 'none'
                      });
                      reject(res.msg);
                    }
                  });
                } else {
                  WXAPI.authorize({
                    code: code,
                    referrer: referrer
                  }).then(function (res) {
                    if (res.code == 0) {
                      wx.setStorageSync('token', res.data.token);
                      wx.setStorageSync('uid', res.data.uid);
                      resolve(res);
                    } else {
                      wx.showToast({
                        title: res.msg,
                        icon: 'none'
                      });
                      reject(res.msg);
                    }
                  });
                }
              },
              fail: function fail(err) {
                reject(err);
              }
            });
          }));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _authorize.apply(this, arguments);
}
function loginOut() {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('token');
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('uid');
}
function checkAndAuthorize(_x) {
  return _checkAndAuthorize.apply(this, arguments);
}
function _checkAndAuthorize() {
  _checkAndAuthorize = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee6(scope) {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", new Promise(function (resolve, reject) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSetting({
              success: function success(res) {
                if (!res.authSetting[scope]) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().authorize({
                    scope: scope,
                    success: function success() {
                      resolve(); // 无返回参数
                    },
                    fail: function fail(e) {
                      console.error(e);
                      // if (e.errMsg.indexof('auth deny') != -1) {
                      //   wx.showToast({
                      //     title: e.errMsg,
                      //     icon: 'none'
                      //   })
                      // }
                      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
                        title: '无权操作',
                        content: '需要获得您的授权',
                        showCancel: false,
                        confirmText: '立即授权',
                        confirmColor: '#e64340',
                        success: function success(res) {
                          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().openSetting();
                        },
                        fail: function fail(e) {
                          console.error(e);
                          reject(e);
                        }
                      });
                    }
                  });
                } else {
                  resolve(); // 无返回参数
                }
              },
              fail: function fail(e) {
                console.error(e);
                reject(e);
              }
            });
          }));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _checkAndAuthorize.apply(this, arguments);
}
var mobileRex = /^1[3456789]\d{9}$/;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  checkHasLogined: checkHasLogined,
  // wxaCode: wxaCode,
  // login: login,
  // loginOut: loginOut,
  checkAndAuthorize: checkAndAuthorize,
  // authorize: authorize,
  // bindSeller: bindSeller
  mobileRex: mobileRex
});

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkMobile": function() { return /* reexport safe */ _validator__WEBPACK_IMPORTED_MODULE_1__.checkMobile; },
/* harmony export */   "isTopPage": function() { return /* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_3__.isTopPage; },
/* harmony export */   "mobileRex": function() { return /* reexport safe */ _validator__WEBPACK_IMPORTED_MODULE_1__.mobileRex; },
/* harmony export */   "safeArea": function() { return /* reexport safe */ _safeArea__WEBPACK_IMPORTED_MODULE_2__.safeArea; }
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/utils/auth.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./src/utils/validator.ts");
/* harmony import */ var _safeArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safeArea */ "./src/utils/safeArea.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/utils/router.ts");





/***/ }),

/***/ "./src/utils/menuData.ts":
/*!*******************************!*\
  !*** ./src/utils/menuData.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuGraph": function() { return /* binding */ menuGraph; },
/* harmony export */   "useMenuGraph": function() { return /* binding */ useMenuGraph; }
/* harmony export */ });
/* unused harmony export defaultPageValue */
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var defaultPageValue = {};
var MenuModal = /*#__PURE__*/function () {
  // 数据

  function MenuModal(defaultValue) {
    (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuModal);
    (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "lowCodeGraph", void 0);
    this.lowCodeGraph = defaultValue;
  }
  (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuModal, [{
    key: "init",
    value: function init(value) {
      this.lowCodeGraph = value;
    }
  }]);
  return MenuModal;
}();
var menuGraph = new Map();
var prevMenuId = '';
var useMenuGraph = function useMenuGraph() {
  var modeId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : prevMenuId;
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPageValue;
  var expId = prevMenuId = modeId.toString();
  var existedGraph = menuGraph.get(expId);
  if (!existedGraph) {
    existedGraph = new MenuModal(defaultValue);
    menuGraph.set(expId, existedGraph);
  }
  return existedGraph;
};

/***/ }),

/***/ "./src/utils/message.ts":
/*!******************************!*\
  !*** ./src/utils/message.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errMessage": function() { return /* binding */ errMessage; },
/* harmony export */   "sucMessage": function() { return /* binding */ sucMessage; }
/* harmony export */ });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var sucMessage = function sucMessage(res) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
    title: res.msg,
    icon: 'success',
    duration: 1000
  });
};
var errMessage = function errMessage(err) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
    title: err,
    icon: 'error',
    duration: 1500
  });
};

/***/ }),

/***/ "./src/utils/router.ts":
/*!*****************************!*\
  !*** ./src/utils/router.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTopPage": function() { return /* binding */ isTopPage; }
/* harmony export */ });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var isTopPage = function isTopPage() {
  var pageLength = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentPages().length;
  return pageLength === 1;
};

/***/ }),

/***/ "./src/utils/safeArea.ts":
/*!*******************************!*\
  !*** ./src/utils/safeArea.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "safeArea": function() { return /* binding */ safeArea; }
/* harmony export */ });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var safeArea = function safeArea() {
  try {
    var _systemInfo$safeArea;
    var systemInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSystemInfoSync();
    var screenHeight = systemInfo.screenHeight;
    var safeHeight = ((_systemInfo$safeArea = systemInfo.safeArea) === null || _systemInfo$safeArea === void 0 ? void 0 : _systemInfo$safeArea.bottom) || systemInfo.screenHeight;
    var screenWidth = systemInfo.screenWidth;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('safeArea', screenHeight - safeHeight);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('tabBarHeight', Math.floor(50 * screenWidth / 375));
  } catch (e) {
    console.log(e);
  }
};

/***/ }),

/***/ "./src/utils/validator.ts":
/*!********************************!*\
  !*** ./src/utils/validator.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkMobile": function() { return /* binding */ checkMobile; },
/* harmony export */   "mobileRex": function() { return /* binding */ mobileRex; }
/* harmony export */ });
var checkMobile = function checkMobile(_, value) {
  if (/^1[3456789]\d{9}$/.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject({
    required: true,
    message: "请输入正确手机号"
  });
};
var mobileRex = /^1[3456789]\d{9}$/;

/***/ }),

/***/ "./src/account/components/topLogo/logo.png":
/*!*************************************************!*\
  !*** ./src/account/components/topLogo/logo.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "account/components/topLogo/logo.png";

/***/ }),

/***/ "?aa67":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=common.js.map