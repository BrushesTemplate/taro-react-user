"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "../../2023-qj/qj-request-tools/packages/utils/dist/index.js":
/*!*******************************************************************!*\
  !*** ../../2023-qj/qj-request-tools/packages/utils/dist/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEnv": function() { return /* binding */ a; },
/* harmony export */   "getTaro": function() { return /* binding */ f; }
/* harmony export */ });
/* unused harmony exports errMessage, formDataTrans, getKey, getParams, getStorage, getStorageWeb, getTokenValueKey, getUrl, navigatorBackImpl, navigatorImpl, removeStorage, setStorage, setStorageWeb, sucMessage, switchTabImpl, useImmutableCallback, useMountedRef */
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
    return "https://b2ch5cbaf0d729c1b4c7285b05271a454a4ff.saas.qjclouds.com/" || 0;
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
var d = {};
function f() {
  return (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(d) && (d = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro")), d;
}
function v(t, n, o, e) {
  return new (o || (o = Promise))(function (r, i) {
    function c(t) {
      try {
        u(e.next(t));
      } catch (t) {
        i(t);
      }
    }
    function a(t) {
      try {
        u(e.throw(t));
      } catch (t) {
        i(t);
      }
    }
    function u(t) {
      var n;
      t.done ? r(t.value) : (n = t.value, n instanceof o ? n : new o(function (t) {
        t(n);
      })).then(c, a);
    }
    u((e = e.apply(t, n || [])).next());
  });
}
var y = function y(t) {
    var n = window.localStorage.getItem(t) || "";
    try {
      return JSON.parse(n);
    } catch (t) {
      return n;
    }
  },
  S = function S(t) {
    return v(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee() {
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!localStorage) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", y(t));
          case 3:
            _context.next = 5;
            return f();
          case 5:
            return _context.abrupt("return", _context.sent.getStorageSync(t));
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", "");
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
  },
  h = function h(t, n) {
    "string" == typeof n ? window.localStorage.setItem(t, n) : window.localStorage.setItem(t, JSON.stringify(n));
  },
  g = function g(t, n) {
    return v(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee2() {
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!localStorage) {
              _context2.next = 4;
              break;
            }
            h(t, n);
            _context2.next = 7;
            break;
          case 4:
            _context2.next = 6;
            return f();
          case 6:
            _context2.sent.setStorageSync(t, n);
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
  },
  w = function w(t) {
    return v(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee3() {
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!localStorage) {
              _context3.next = 4;
              break;
            }
            window.localStorage.removeItem(t);
            _context3.next = 7;
            break;
          case 4:
            _context3.next = 6;
            return f();
          case 6:
            _context3.sent.removeStorageSync(t);
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
  };
function p(t) {
  return v(this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee4() {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!a()) {
            _context4.next = 4;
            break;
          }
          _context4.next = 3;
          return f();
        case 3:
          _context4.sent.navigateTo({
            url: t
          });
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
}
function m() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return v(this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee5() {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!a()) {
            _context5.next = 4;
            break;
          }
          _context5.next = 3;
          return f();
        case 3:
          _context5.sent.navigateBack({
            delta: t
          });
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
}
function _(t) {
  return v(this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee6() {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (!a()) {
            _context6.next = 4;
            break;
          }
          _context6.next = 3;
          return f();
        case 3:
          _context6.sent.switchTab({
            url: t
          });
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
}
var E = function E(t) {
    return v(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee7() {
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            if (!a()) {
              _context7.next = 4;
              break;
            }
            _context7.next = 3;
            return f();
          case 3:
            _context7.sent.showToast({
              title: t,
              icon: "success",
              duration: 1e3
            });
          case 4:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
  },
  A = function A(t) {
    return v(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee8() {
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (!a()) {
              _context8.next = 4;
              break;
            }
            _context8.next = 3;
            return f();
          case 3:
            _context8.sent.showToast({
              title: t,
              icon: "error",
              duration: 1500
            });
          case 4:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
  },
  P = function P(t) {
    var n = new FormData();
    for (var _o in t) ["", void 0, null].includes(t[_o]) || n.append(_o, t[_o]);
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconMobile": function() { return /* binding */ q; },
/* harmony export */   "Loading": function() { return /* binding */ T; },
/* harmony export */   "NumStep": function() { return /* binding */ I; },
/* harmony export */   "Popup": function() { return /* binding */ V; },
/* harmony export */   "ScrollView": function() { return /* binding */ C; },
/* harmony export */   "SmoothCheckbox": function() { return /* binding */ z; },
/* harmony export */   "SmoothRadio": function() { return /* binding */ P; },
/* harmony export */   "SmoothSwiper": function() { return /* binding */ S; },
/* harmony export */   "Tabs": function() { return /* binding */ k; },
/* harmony export */   "View": function() { return /* binding */ f; },
/* harmony export */   "WrapLoading": function() { return /* binding */ A; },
/* harmony export */   "useComponent": function() { return /* binding */ N; }
/* harmony export */ });
/* unused harmony exports Text, fetchResource, useImmutableCallback, useLazyRef */
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










function m(e, n) {
  var t = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (t[i] = e[i]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) n.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (t[i[r]] = e[i[r]]);
  }
  return t;
}
function b(e, n, t, i) {
  return new (t || (t = Promise))(function (r, o) {
    function s(e) {
      try {
        l(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function c(e) {
      try {
        l(i.throw(e));
      } catch (e) {
        o(e);
      }
    }
    function l(e) {
      var n;
      e.done ? r(e.value) : (n = e.value, n instanceof t ? n : new t(function (e) {
        e(n);
      })).then(s, c);
    }
    l((i = i.apply(e, n || [])).next());
  });
}
var f = function f(n) {
    var t = n.children,
      i = m(n, ["children"]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({}, i, {
      children: t
    }));
  },
  j = function j(e) {
    var t = e.children,
      i = m(e, ["children"]);
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
function v(e) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(n);
  return t.current === n && (t.current = e()), t;
}
var y = new Map();
function w() {
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
    var e = y.get("component");
    return new Promise(function (n) {
      e ? n(e) : function () {
        b(_this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
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
                  View: f,
                  Text: j
                });
              case 15:
                y.set("component", e), n(e);
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
var x = w();
function N() {
  var _o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
      return x.read();
    }),
    _o2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o, 1),
    e = _o2[0];
  return e;
}
function S(n) {
  var _this2 = this;
  var _n$indicatorDots = n.indicatorDots,
    t = _n$indicatorDots === void 0 ? !0 : _n$indicatorDots,
    _n$direction = n.direction,
    i = _n$direction === void 0 ? "horizontal" : _n$direction,
    r = n.autoplayInterval,
    _n$loop = n.loop,
    c = _n$loop === void 0 ? !0 : _n$loop,
    l = n.data,
    a = n.type,
    d = n.render,
    h = n.style,
    g = n.imgHeight,
    f = m(n, ["indicatorDots", "direction", "autoplayInterval", "loop", "data", "type", "render", "style", "imgHeight"]);
  var _N = N(),
    j = _N.Swiper,
    O = _N.SwiperItem,
    _o3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _o4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o3, 2),
    v = _o4[0],
    y = _o4[1],
    w = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
    x = (null == j ? void 0 : j.Item) || O;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      b(_this2, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2() {
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
                style: Object.assign(Object.assign({}, h), {
                  height: 1 == a ? Math.floor(_n3 * g.height / g.width) : ""
                })
              };
              _context2.next = 9;
              break;
            case 8:
              e = {
                direction: i,
                autoplayInterval: r,
                loop: c,
                style: h
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
  }, [i, r, c, t]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(j, Object.assign({}, Object.assign(Object.assign({}, v), f), {
    children: l.map(function (n, t) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(x, {
        children: d(n)
      }, t);
    })
  }));
}
var C = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (n) {
  var _n$Threshold = n.Threshold,
    t = _n$Threshold === void 0 ? 20 : _n$Threshold,
    i = n.onScroll,
    _n$scrollTop = n.scrollTop,
    r = _n$scrollTop === void 0 ? 0 : _n$scrollTop,
    o = n.children,
    s = m(n, ["Threshold", "onScroll", "scrollTop", "children"]);
  var _N2 = N(),
    c = _N2.ScrollView,
    a = _N2.PullToRefresh,
    d = c || a,
    p = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
    h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
      return p ? Object.assign({
        scrollY: !0,
        enablePassive: !0,
        scrollWithAnimation: !0,
        scrollTop: r,
        lowerThreshold: t,
        onScrollToLower: i
      }, s) : {
        onRefresh: i
      };
    }, [s]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({}, h, {
    children: o
  }));
});
function T(_ref) {
  var _ref$text = _ref.text,
    t = _ref$text === void 0 ? "加载中……" : _ref$text;
  var _N3 = N(),
    i = _N3.View,
    r = _N3.Text;
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
var _ = function _(_ref2) {
    var n = _ref2.tabs,
      t = _ref2.onChange,
      i = _ref2.actived;
    var _N4 = N(),
      r = _N4.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
      className: "qj-tabs"
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
  k = function k(_ref3) {
    var i = _ref3.tabs,
      r = _ref3.render,
      s = _ref3.defaultIndex;
    var _N5 = N(),
      c = _N5.View,
      _o5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(s),
      _o6 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o5, 2),
      l = _o6[0],
      a = _o6[1],
      _o7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
        var e = new Array(s + 1);
        return e[s] = i[s], e;
      }),
      _o8 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o7, 2),
      d = _o8[0],
      u = _o8[1];
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_, {
        actived: l,
        onChange: function onChange(e, n) {
          a(e), u(function (t) {
            return t[e] = n, t;
          });
        },
        tabs: i
      }), d.map(function (n, t) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          style: {
            display: t === l ? "block" : "none"
          }
        }, {
          children: r(n)
        }), t);
      })]
    });
  },
  q = function q(_ref4) {
    var _ref4$className = _ref4.className,
      n = _ref4$className === void 0 ? "iconfont" : _ref4$className,
      _ref4$prefixClass = _ref4.prefixClass,
      t = _ref4$prefixClass === void 0 ? "icon" : _ref4$prefixClass,
      _ref4$onClick = _ref4.onClick,
      i = _ref4$onClick === void 0 ? function () {} : _ref4$onClick,
      _ref4$style = _ref4.style,
      r = _ref4$style === void 0 ? {
        fontSize: 16,
        color: "#444",
        fontWeight: 900
      } : _ref4$style,
      o = _ref4.value;
    var _N6 = N(),
      s = _N6.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, {
      onClick: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(t, o ? "".concat(t, "-").concat(o) : "", n),
      style: r
    });
  },
  V = function V(_ref5) {
    var t = _ref5.popupVisible,
      i = _ref5.popupHandler,
      r = _ref5.children;
    var _N7 = N(),
      o = _N7.View;
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(q, {
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
  I = function I(_ref6) {
    var t = _ref6.count,
      i = _ref6.handleStep;
    var _N8 = N(),
      r = _N8.View,
      o = _N8.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
      className: "numStep"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(q, {
        value: "jianqu",
        onClick: i.bind(null, "minus")
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
        className: "content"
      }, {
        children: t
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(q, {
        value: "zengjia",
        onClick: i.bind(null, "plus")
      })]
    }));
  },
  P = function P(n) {
    var t = n.children,
      i = m(n, ["children"]);
    var _N9 = N(),
      r = _N9.RadioGroup,
      o = _N9.Radio,
      s = r || (null == o ? void 0 : o.Group);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({}, i, {
      children: t
    }));
  },
  z = function z(n) {
    var t = n.children,
      i = m(n, ["children"]);
    var _N10 = N(),
      r = _N10.CheckboxGroup,
      o = _N10.Checkbox,
      s = r || (null == o ? void 0 : o.Group);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({}, i, {
      children: t
    }));
  };
function A(_ref7) {
  var t = _ref7.loading,
    i = _ref7.children;
  var _N11 = N(),
    r = _N11.View;
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


/***/ }),

/***/ "../../qj/qj-mobile-react/packages/s-material-react/dist/index.js":
/*!************************************************************************!*\
  !*** ../../qj/qj-mobile-react/packages/s-material-react/dist/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressDetail": function() { return /* binding */ Is; },
/* harmony export */   "AddressList": function() { return /* binding */ vs; },
/* harmony export */   "Cart": function() { return /* binding */ Xs; },
/* harmony export */   "ClassifyNav": function() { return /* binding */ We; },
/* harmony export */   "CouponList": function() { return /* binding */ Hs; },
/* harmony export */   "Cube": function() { return /* binding */ fe; },
/* harmony export */   "EvaluateDetail": function() { return /* binding */ As; },
/* harmony export */   "EvaluateList": function() { return /* binding */ fs; },
/* harmony export */   "Footprint": function() { return /* binding */ ca; },
/* harmony export */   "Goods": function() { return /* binding */ Ne; },
/* harmony export */   "GoodsClassify": function() { return /* binding */ gs; },
/* harmony export */   "GoodsDetail": function() { return /* binding */ ls; },
/* harmony export */   "GoodsDetailPromotion": function() { return /* binding */ Os; },
/* harmony export */   "GoodsDetailTopInfo": function() { return /* binding */ Ns; },
/* harmony export */   "GoodsGroup": function() { return /* binding */ Te; },
/* harmony export */   "GoodsList": function() { return /* binding */ bs; },
/* harmony export */   "Line": function() { return /* binding */ Ae; },
/* harmony export */   "Mine": function() { return /* binding */ ea; },
/* harmony export */   "Notice": function() { return /* binding */ Oe; },
/* harmony export */   "OrderDetail": function() { return /* binding */ Fe; },
/* harmony export */   "OrderList": function() { return /* binding */ ze; },
/* harmony export */   "PaymentMode": function() { return /* binding */ aa; },
/* harmony export */   "PlaceOrder": function() { return /* binding */ Ms; },
/* harmony export */   "PlaceOrderResult": function() { return /* binding */ Ws; },
/* harmony export */   "QjMobileIcon": function() { return /* binding */ pe; },
/* harmony export */   "Search": function() { return /* binding */ we; },
/* harmony export */   "SearchPage": function() { return /* binding */ us; },
/* harmony export */   "Service": function() { return /* binding */ Ce; },
/* harmony export */   "Slider": function() { return /* binding */ Ie; },
/* harmony export */   "Title": function() { return /* binding */ je; },
/* harmony export */   "Video": function() { return /* binding */ ye; }
/* harmony export */ });
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @brushes/simulate-component */ "../../qj/qj-mobile-core/packages/simulate-component/dist/index.js");
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @brushes/simulate-component */ "../../qj/qj-mobile-core/node_modules/antd-mobile/es/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brushes/utils */ "../../qj/qj-mobile-react/node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qj-b2c-api */ "../../qj/qj-mobile-react/node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../qj/qj-mobile-react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-react/node_modules/lodash-es/isEqual.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-react/node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-react/node_modules/lodash-es/isUndefined.js");
/* harmony import */ var qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qj-mobile-store */ "../../qj/lerna-repo/packages/qj-mobile-store/dist/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "../../qj/qj-mobile-react/node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);













function he(e, s) {
  var a = {};
  for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && s.indexOf(c) < 0 && (a[c] = e[c]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var i = 0;
    for (c = Object.getOwnPropertySymbols(e); i < c.length; i++) s.indexOf(c[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[i]) && (a[c[i]] = e[c[i]]);
  }
  return a;
}
function be(e, s, a, c) {
  return new (a || (a = Promise))(function (i, n) {
    function t(e) {
      try {
        r(c.next(e));
      } catch (e) {
        n(e);
      }
    }
    function l(e) {
      try {
        r(c.throw(e));
      } catch (e) {
        n(e);
      }
    }
    function r(e) {
      var s;
      e.done ? i(e.value) : (s = e.value, s instanceof a ? s : new a(function (e) {
        e(s);
      })).then(t, l);
    }
    r((c = c.apply(e, s || [])).next());
  });
}
var pe = function pe(_ref) {
    var _ref$className = _ref.className,
      s = _ref$className === void 0 ? "iconfont" : _ref$className,
      _ref$prefixClass = _ref.prefixClass,
      a = _ref$prefixClass === void 0 ? "icon" : _ref$prefixClass,
      _ref$onClick = _ref.onClick,
      c = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$style = _ref.style,
      i = _ref$style === void 0 ? {
        fontSize: 16,
        color: "#444",
        fontWeight: 900
      } : _ref$style,
      n = _ref.value;
    var _o = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      t = _o.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
      onClick: c,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(a, n ? "".concat(a, "-").concat(n) : "", s),
      style: i
    });
  },
  ue = {
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
    footprint: "/subpackage/footprint/index"
  },
  Ne = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref2) {
    var _ref2$defaultValue = _ref2.defaultValue,
      a = _ref2$defaultValue === void 0 ? [] : _ref2$defaultValue,
      _ref2$classCode = _ref2.classCode,
      c = _ref2$classCode === void 0 ? "" : _ref2$classCode,
      l = _ref2.margin,
      r = _ref2.circular,
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
    var _i = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(a),
      _i2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i, 2),
      O = _i2[0],
      j = _i2[1],
      f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),
      _o2 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      A = _o2.View,
      C = _o2.Text;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(f.current, m) || (f.current = m, (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(m) ? j(a) : be(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee() {
        var _e2;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.find)({
                goodsCode: m.toString()
              });
            case 3:
              _e2 = _context.sent;
              j(_e2.rows);
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              j(a);
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
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, "goods-".concat(c), !0)),
        style: {
          display: "grid",
          gap: g,
          marginBottom: l,
          gridTemplateColumns: "repeat(".concat(d, ", 1fr)"),
          paddingLeft: u,
          paddingRight: N
        }
      }, {
        children: O.map(function (a, c) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(A, Object.assign({
            style: {
              overflow: "hidden",
              borderRadius: 2 === r ? 0 : "8px"
            },
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ue.goodDetail, "?skuCode=").concat(a.skuCode));
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
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(C, Object.assign({
                  className: "subPrice"
                }, {
                  children: "¥"
                })), a.pricesetNprice, 1 === h && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(C, Object.assign({
                  className: "markedPrice"
                }, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(C, Object.assign({
                    className: "subPrice"
                  }, {
                    children: "¥"
                  })), a.pricesetMakeprice]
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, Object.assign({
                className: "anticon"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pe, {
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
  Oe = function Oe(_ref3) {
    var s = _ref3.title,
      a = _ref3.text,
      c = _ref3.backgroundColor,
      i = _ref3.color,
      n = _ref3.fontSize,
      t = _ref3.borderColor,
      l = _ref3.paddingTop,
      r = _ref3.paddingBottom,
      d = _ref3.paddingLeft,
      g = _ref3.paddingRight;
    var _o3 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      m = _o3.View,
      h = _o3.NoticeBar;
    return m ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
      style: {
        paddingTop: l,
        paddingBottom: r
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, {
          speed: 50,
          style: {
            "--border-color": t,
            "--font-size": n + "px",
            "--background-color": c,
            "--text-color": i,
            paddingLeft: d,
            paddingRight: g
          },
          content: a,
          color: "alert"
        })
      })
    })) : null;
  },
  je = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref4) {
    var s = _ref4.value,
      a = _ref4.fontSize,
      c = _ref4.textAlign,
      i = _ref4.color,
      n = _ref4.backgroundColor,
      t = _ref4.fontWeight,
      l = _ref4.textDecoration,
      r = _ref4.fontStyle,
      d = _ref4.paddingTop,
      g = _ref4.paddingLeft,
      m = _ref4.paddingRight,
      h = _ref4.paddingBottom;
    var _o4 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      b = _o4.View;
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
          color: i,
          backgroundColor: n,
          fontWeight: t,
          textDecoration: l,
          fontStyle: r,
          paddingLeft: g,
          paddingRight: m
        }
      }, {
        children: s
      }))
    }));
  }),
  fe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref5) {
    var s = _ref5.defaultValue,
      a = _ref5.type,
      c = _ref5.borderRadius,
      i = _ref5.paddingTop,
      n = _ref5.paddingLeft,
      t = _ref5.paddingRight,
      l = _ref5.paddingBottom,
      r = _ref5.selectImg;
    var _o5 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      d = _o5.View,
      g = _o5.Image,
      m = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(s, r);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
      style: {
        paddingTop: i,
        paddingBottom: l
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
        className: "cube-type".concat(a),
        style: {
          paddingLeft: n,
          paddingRight: t
        }
      }, {
        children: m.map(function (s, i) {
          var n, t;
          return 1 === a ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, {
            mode: "widthFix",
            src: s.imgUrl,
            style: {
              width: "100%",
              borderRadius: c + "px"
            },
            onClick: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler.bind(null, null === (n = s.link) || void 0 === n ? void 0 : n.value)
          }, i) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, {
            className: "block",
            style: {
              backgroundImage: "url(".concat(s.imgUrl, ")"),
              width: "100%",
              borderRadius: c + "px"
            },
            onClick: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler.bind(null, null === (t = s.link) || void 0 === t ? void 0 : t.value)
          }, i);
        })
      }))
    }));
  }),
  Ae = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref6) {
    var s = _ref6.borderRadius,
      a = _ref6.height,
      c = _ref6.width,
      i = _ref6.backgroundColor,
      n = _ref6.paddingTop,
      t = _ref6.paddingBottom;
    var _o6 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      l = _o6.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
      style: {
        paddingTop: n,
        paddingBottom: t
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
        style: {
          borderRadius: s + "%",
          width: c + "%",
          height: a + "px",
          backgroundColor: i,
          marginLeft: "auto",
          marginRight: "auto"
        }
      })
    }));
  }),
  ye = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref7) {
    var s = _ref7.url,
      a = _ref7.poster,
      c = _ref7.autoplay,
      i = _ref7.loop,
      n = _ref7.paddingTop,
      t = _ref7.paddingBottom,
      l = _ref7.paddingLeft,
      r = _ref7.paddingRight;
    var _o7 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      d = _o7.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
      style: {
        paddingTop: n,
        paddingBottom: t
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("video", {
        className: "components-video",
        src: "https://www.runoob.com/try/demo_source/movie.ogg",
        poster: a,
        autoPlay: c,
        loop: i,
        controls: !0,
        "object-fit": "contain",
        style: {
          width: "100%",
          height: "240px",
          paddingLeft: l,
          paddingRight: r
        }
      })
    }));
  }),
  Ce = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref8) {
    var s = _ref8.width,
      a = _ref8.height,
      c = _ref8.top,
      i = _ref8.right,
      n = _ref8.bottom,
      t = _ref8.left,
      l = _ref8.borderRadius;
    var _o8 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      r = _o8.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
      style: {
        width: s,
        height: a,
        borderRadius: l,
        top: c,
        left: t,
        right: i,
        bottom: n
      },
      className: "components-service"
    });
  }),
  ve = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADcdJREFUeF7tnQXMZUcVx38FihUvbkGCu7sVDVYo7lLctUhwd1JcUiw4FCgeXIMU1+LuUtwtP3Ze2C673zvn3pkr37sn2WzTPTNv5sz/jhzdi4U2WgJ7bfTsl8mzAGDDQbAAYAHAhktgw6e/7AALADZcAhs+/WUHWACw4RLY8OkvO8ACgG0jgb2BMwHnKH+fCNgHOB7gfwv2vwF/BI4E/gD8Cvg68DXgh9tGEomJzHkHOCewH3B54LzAGYFjJOa+K6uAEAifAt4HfAD4eY/+ZtF0TgA4FnBN4ICy8KdsLOF/A18C3g28Gji88e+N0v0cAHAh4JbATYCTjSKlHT96BPAa4GXAt0ccR9WfnioAjg7cGHgQcK6qM+7f2b+Aw4DHleOif48j9jA1AHiR80t/MHC2EeUS/emPAg8H3httMDW+KQHg2sDBwBmmJqTAeN4B3B34VoB3UixTAMBpgMcDt5iUZPKD8Yn5dOARwF/yzcdpMSYA/O37FYEdd5zpN/nVbwIHAh9q0nvlTscCwEmBlwJXrzyfqXT3T+AxwKMAL42TpTEAcFnglYBb/3an9wM3BX461YkODYC7lXOyj8Zud7L0i/s88Nmi2lW965/f7aT6td0xi3r4xMC+wFmBs5cXx8WA0zdYqB8D1wA+16Dv3l0OCYBHAw/pPeL/daDu/g3lCeZ5+5sKfZ8ZuAJwZeBawHEq9GkXvwWuU9TLlbqs080QAFCp8xzgDhWGrCHn0KKNc3tteb6eALheeZ1ob+grq78CNyvjryCKOl30ndS6Ubj4nvc3XMe45t+13j0TeEax4PXsLt1cY5PKqesDzqkreVTdtgC4ax9V27UGwPOAO/YYsV+8KlcX//c9+qnV1DuDR1kfQP8DuC7w1lqD6tNPSwD4BHpoj8EpIC+N3+vRR6umHgnPBjRJd6E/A1cBPtKlcc02rQBwlyKgLmP9RdkmJ/GFbDEBXxTaAR4IHK3DRH8NXAb4Soe21Zq0AIDPqQ8DGnay5G3ed/OPsg1H5PfV8ArgVB3G8A1Ac/dox1ttAPi29i1+ug7CeFK5aHlRmhu5+L5OLtFh4C8f0w5SEwD29UZg/6QQ9Lw5CHhKst3U2LVnvLYofbJjux1wSLZRDf6aALhX0fJlxvV34NblqZhpN1VeNZwupB5MGfJSeMHidZRp15u3FgBOC3y1eOBGB+WX75v4JdEGM+FTphq6suZt7z++LpTLYFQLAK8vWrPMwO8LPC3TYEa8XoDfAlw1OWYvwK9KtunFXgMAVwP0iMmQ5/39Mw1myHv88s5XixilnxTjlEasQagvADzzfMeeJTFalR8+ndSIbXdSc2icgWCI0lOLo0yUvxdfXwB42fG8i5LKDy87U9TuReeQ5btRiSuItvtTCXIZJCilDwDUfhk4YShWlNSBvynKvI34jCXIXAqfUFzim4ugDwC0jL0uMcI3d9ARJLqfNKsKMsPO/DtC3gH0jtYK2pT6AMCzTTVmhNzWDPD4boR5m/LcufhFRKenIU2/wqbUFQAXAD6TGNkji/dvosm2Y9WP4NPA+YIz82Mx2rmpXqArAHy/3zs4kcG2s+B4xmS7QVEXR8dwudbu5V0A4NPvB0A0OtegD71pFtphNv5CIt5RtbJ2gmbUBQB6uEZt9UbIeJn5WbMZzK/jWyXU3+6efmjaCppQFwC8MIFKw6mN8l3ofxI4NqDGz6wlETInwtsijF14ugDAAEgvJxFqOvjIACbK49auISxC3re0mzShLAAMnIhq8dRkaSXU5LvQUSWg1U+39ggZUOKrqwllAXAb4EXBkXhU1IgFCP7crNi8DBouFsl4YuzDKYBftphhFgDq/aPODiZ6MLfOQruXgN5DPgsjZICKUVDVKQsAlT+R7UjlxamnHBRZXZL5DjOaQb2PdbOvThkAyOuzxLx760jvoK4+8+v63i7/blCqcoqQTiI6i1SnDAC80KkAipBbv0fAQnuWgPcAI598Fq4jVcgXXsfU5d8zALhSyZkX+Z1F9x+REnwROHeA1SSWBqtWtwtkAHB74AWBwcpiFKxBoQttLQHN6ZrVI6RGsLpGNQMA8/k8OTJS4OLAJ4K8m8z2xBITEZGBafNMelGVMgBwW39Y8Ne94OgAsdDWEjARptHPEdL3ImOCj/SZSnqQMQF7YZxTfF9IWA2YjH429D1Cag8/GGHM8GR2gIwR6ITlyZgZyybyZiyDJtI01qAqZQCQ0QIaJ9fMhFlVAuN25lM5ellWa2gATlXKAMCECMb9R8g8gBZjWGhrCWReVuZUzAbgrJV/BgC6Kj9gbY87GCzesMkOoEExcR/AQJAINXEPywDAFG/mx4mQ4VAqORbaWgLq+M0tHKHRXwH3KNm8I4M1z957IowbzmP6PI1CETLMzIwiVSmzA2QuLD5vvDMstLUE/EiuGBCSPgFerM01WJUyAHALMhgkQubzu2eEccN5zHYayZksX5e0O2vFmwGAZmDNwZE27+oQG792sNuMISNPk26ZZLs6RRZz5x+NIta8vT4F55jwqbqQ99ChW3/0nvTihBNpavxZAETPLAeh/Vo79kK7l8BjEwEzd03GFYZlngWAUT4mRoyQGUDmnvkrMs+uPB8rVtNIe93wmqSbzwLA553ne4QsuGg61IX+XwInKbb9SN0EvYYMImmSUSULAJ8iZvmwiuc68vz35moUzEJHlcCdgOcGhWIZ28hTMdjdUdmyALC1JsnojXQ7ZwLrJPDSyHqDlwx2oLrYamRNqAsAMiphy7icv8nI59upVUnU6EVlL3+zUrXRQews7uwEzAhmJe6FdkhAJZlFJiPU/APqAgAHbqq3S0VmUN66Xh4X2hHi9Z1ELSJd8KIGuE7y7QoAq4BYDSRKnnc+ezadMiZ1b/3mVmjqWtcVAJZdsxxaJKjBRbe4snEFm0zZfMpmXj+gtcC6AsBxZXwE5TdRhAkjNpUyMQDKSB2KupSm1AcAXgaPACLKDCfhjqG7+GjVMZpKcuvOMwo0ezKPkK+n6pFAuw6zDwDsy2oXRgFFyciiPlXEor8zJT49pLWJ+MFEya3fI6A59QWAaWJNF5spmnTzUmOn+eQm8gPWE8pE9lpyR9+L5l+/8ukLAPvIuIvLr0+BlsLq7k0TWfCdh5HJAbBqZ8naaBa23lOuAQDftt4FolmvHLQp5i2Zpl1hu5IKMN24I3aTlQzMBmZircGoBgAcrPbqZyVH/UlgvxIjn2w6efbzlAyfmY/CQBpDxZupfXcntVoAMA/uxzskMXCrM//N3ya/pPEBetnThStbR9BAURVFg1ItADhoUW9IeLbkum9db70mQZg7+XRz24+m0V3N149HC+vgKfVqAsDJmBbu+R1WUW9jU9AOUiWjw/giTYzetRiGz74M/bYk3tJGMDjVBoATyD57VpP27LMq9xz9CI2ZNHw+c+Fbzds5ZwpvVAVJCwBYIOlwwIwWWTLwwUwk2Qtl9ndq8Zu3R5V413LyHnvWWh6tgHQLAChccwnr9ZI9C1cLY3kZbebfr7VSDfpRvatbV0bDt7thmPfH19AoIGgFACfqpVD3MS2HXcgyM+Yk0hO5ekhUlwGVNt7uze2TKQK17ue8++j3p1Z1UGoJACfixeidHc/GlSDUGAoC7Q6D35J3Wo2Tw3/DudV5RJJlZhdylJ2gNQAUgrd78+LqUdyHzFJuiXmBMFhlzbLFGxlt5Y6+c1g3/8FBMAQAnLQXHZU+hov1JauQGKFkLT6fXS12BTV45uRxm3drHkpOymbQ42DIianm9DiIRMNGQeIb2qrb+s77x9y7XQDhy0WQqr/3QqaxKurnEB1rhm+wnWBIACgAC06Y6OgiGWkkeF189Qkap/xbY5NPLf8YYeNCq6jxDPdMN+mCz9WaoNx1uDrAZGoHr9oPAoKhAeDk/LIsiHjQwFtrAkdVWL2n6PyiYsvqIF1A1vw4GAMAK+nuDxj23PWZWGWVGnWiIsyMKtZXkqyuPkkQjAkABWPs4MGARaW3A6m7MKWuauFdgzk9arynWEgjS82Og7EBsBKEFy9zCuk0OlfylaP2cqv0eJPbCaYCABddM7J2AEvSzulYMIGzETzR2n5ePD0OJrETTAkAqy/fG/qBJSll1qliyN3jy2W791WTdeCczE4wRQCsFnGfon0znaql56dAnuuHlbA4o52yC7/zHCaxE0wZADsLSzdptXLerH2/D026ah9aXi0GuNSi0UEwFwCsBL43cOmirfPieNFGGjuVN7ppebHzi49WS+0CjFFBMDcA7Cpg7wsCwtzECtJXhH/2Da6EW7qp79Qa+mbXNc0oZm3zQ6a4Gw0EcwfAntZZ1auGJwGy+uP/UzunWlgX7CNL/qIutoMgvlJso4BguwIgJfkJMQ/+OlgAMKHVL0PpsxOYkU1DWzipxAKA6QHAEfXZCVLhZQsApgmAviDQKTcUZ7AAYLoA6AMCjWt6S62lBQBrRTQ6Q5fjQD/Mt0dGvgAgIqXxeTIgMNBWQ1OoatsCgPEXNzqCKAhM3xetQzSot2t0ogvfniUgCDRC7al8jO5nxmKEI62XHWB+cDMji84zhtSv1s/IqUOKCT28+E59AcD8ALAasU6mFpLwzNeG0SndzgKA+QKgysgXAFQR43w7WQAw37WrMvIFAFXEON9OFgDMd+2qjHwBQBUxzreTBQDzXbsqI18AUEWM8+1kAcB8167KyBcAVBHjfDv5D+vIKZ/vdzjHAAAAAElFTkSuQmCC",
  ke = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAGCAYAAADQQP5pAAAAAXNSR0IArs4c6QAAAMhJREFUKFPFUjFqQkEUfLOmeAoWJodI7qE3sFdrS4sPCykexPA/C7baqr030Hskh1ALQbfJTviBSFiszZQz82bgMTCzhxjjq4iMATRJblR1YmYHyWBmrRhjSXJQSwDWqurN7Jx7vfdPJGcA+iRrfaGqU3jv30jWhVcA2JVl2bsRsiQ5zPhVVVWjG94tyW6W+1O4J/mYH6SUXkIIn798URRt59xRRBqZ9yul1AkhnP54n51zH3kmgMO/FN7tpSLyjjuN5iIi83o039P9n5mWDu/PAAAAAElFTkSuQmCC\n",
  we = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref9) {
    var a = _ref9.value,
      c = _ref9.iconShow,
      i = _ref9.fontColor,
      n = _ref9.backgroundColor,
      t = _ref9.borderRadius,
      l = _ref9.paddingTop,
      r = _ref9.paddingBottom,
      d = _ref9.paddingLeft,
      g = _ref9.paddingRight;
    var _o9 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      m = _o9.View,
      h = _o9.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
      onClick: function onClick() {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ue.search);
      },
      style: {
        paddingTop: l,
        paddingBottom: r,
        paddingLeft: d,
        paddingRight: g
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
        className: "components-search",
        style: {
          backgroundColor: n,
          borderRadius: t + "px",
          height: "32px",
          lineHeight: "32px",
          width: "100%",
          display: "inline-block",
          textAlign: "center"
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, {
          src: ve,
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
            color: i,
            display: "inline-block",
            fontSize: "14px"
          }
        }, {
          children: a
        }))]
      }))
    }));
  }),
  xe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref10) {
    var s = _ref10.item,
      c = _ref10.type;
    var i, n;
    var _o10 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      t = _o10.Image,
      l = _o10.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 1 === c ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
        mode: "widthFix",
        src: s.imgUrl,
        style: {
          width: "100%"
        },
        onClick: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler.bind(null, null === (i = s.link) || void 0 === i ? void 0 : i.value)
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
        className: (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)() ? "slider-block" : "pc",
        style: {
          backgroundImage: "url(".concat(s.imgUrl, ")"),
          width: "100%"
        },
        onClick: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler.bind(null, null === (n = s.link) || void 0 === n ? void 0 : n.value)
      })
    });
  }),
  Ie = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref11) {
    var _ref11$defaultValue = _ref11.defaultValue,
      s = _ref11$defaultValue === void 0 ? [] : _ref11$defaultValue,
      a = _ref11.type,
      c = _ref11.autoplay,
      i = _ref11.autoplayInterval,
      n = _ref11.direction,
      t = _ref11.loop,
      l = _ref11.paddingTop,
      r = _ref11.paddingBottom,
      o = _ref11.paddingLeft,
      m = _ref11.paddingRight,
      h = _ref11.selectImg,
      b = _ref11.imgHeight;
    var p = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(s, h);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.View, Object.assign({
      style: {
        paddingTop: l,
        paddingBottom: r,
        paddingLeft: o,
        paddingRight: m
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.SmoothSwiper, {
        className: (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)() ? "slider-block" : "pc",
        imgHeight: b,
        data: p,
        type: a,
        autoplay: c,
        autoplayInterval: i,
        direction: n,
        loop: t,
        render: function render(s) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(xe, {
            type: a,
            item: s
          });
        }
      })
    }));
  }),
  De = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_13__.JumboTabs,
  Te = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref12) {
    var _ref12$defaultValue = _ref12.defaultValue,
      s = _ref12$defaultValue === void 0 ? [] : _ref12$defaultValue,
      a = _ref12.type,
      _ref12$selectGoodsGro = _ref12.selectGoodsGroup,
      c = _ref12$selectGoodsGro === void 0 ? [] : _ref12$selectGoodsGro,
      n = _ref12.marginTop,
      l = _ref12.marginBottom,
      r = _ref12.borderRadius;
    var _i3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(s),
      _i4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i3, 2),
      o = _i4[0],
      d = _i4[1];
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      var e = c.filter(function (e) {
        return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_14__["default"])(e);
      }).filter(function (e) {
        return !Object.values(e).every(function (e) {
          return (0,lodash_es__WEBPACK_IMPORTED_MODULE_14__["default"])(e);
        });
      });
      var a = s;
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(e) || (a = e), d(a);
    }, [c]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(De, Object.assign({
      style: {
        marginTop: n + "px",
        marginBottom: l + "px"
      }
    }, {
      children: o.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(De.Tab, Object.assign({
          title: s.title,
          description: s.subTitle
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ne, {
            defaultValue: s.defaultValue,
            cell: 2,
            goods: s.goodsList,
            classCode: "two",
            circular: r
          })
        }), a);
      })
    }));
  }),
  Be = function Be(_ref13) {
    var a = _ref13.dataPic,
      c = _ref13.goodsName,
      i = _ref13.goodsCamount,
      n = _ref13.pricesetNprice;
    var _o11 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      t = _o11.View,
      l = _o11.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      className: "card-item"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
        src: a,
        alt: "",
        className: "card-item-img"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "card-item-info"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
          className: "card-item-info-container"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "card-item-info-container-title"
          }, {
            children: c
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
            className: "card-item-info-container-price"
          }, {
            children: ["￥", n]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
          className: "card-item-info-sub"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "sku"
          }, {
            children: "30ml"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
            className: "count"
          }, {
            children: ["x ", i]
          }))]
        }))]
      }))]
    }));
  },
  Le = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_13__.Button,
  Se = function Se(s) {
    var c = s.dataState,
      i = he(s, ["dataState"]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["2", "-1"].includes(c + "") ? null : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ve, Object.assign({
        dataState: c
      }, i))
    });
  },
  Ve = function Ve(s) {
    var a = s.dataState,
      c = s.contractAppraise,
      i = he(s, ["dataState", "contractAppraise"]);
    var _o12 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o12.View;
    4 !== a && 4 !== a || 1 === c ? 4 !== a && 4 !== a || 1 !== c || (a = 5) : a = 4;
    var _G = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderOperate)(Object.assign({
        dataState: a
      }, i)),
      t = _G.operateArray,
      l = _G.handlerImpl;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
      className: "btnGroup"
    }, {
      children: t.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Le, Object.assign({
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
        }));
      })
    }));
  },
  Pe = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_13__.Button;
function Re(_ref14) {
  var a = _ref14.contractBillcode,
    c = _ref14.dataBmoney,
    i = _ref14.dataBnum,
    n = _ref14.goodsList,
    t = _ref14.dataState,
    l = _ref14.contractId,
    r = _ref14.init,
    d = _ref14.contractAppraise;
  var _o13 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
    g = _o13.View,
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
          children: ["订单号: ", a, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Pe, Object.assign({
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
        children: [n.map(function (s) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Be, Object.assign({}, s), s.contractGoodsId);
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
          className: "allInfo"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "totalNum"
          }, {
            children: ["共", i, "件商品"]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "totalPrice"
          }, {
            children: ["合计 ￥", c]
          }))]
        }))]
      }))]
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Se, {
      init: r,
      contractId: l,
      contractBillcode: a,
      dataState: t,
      contractAppraise: d
    })]
  }));
}
var Me = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref15) {
    var _this = this;
    var a = _ref15.item,
      c = _ref15.refreshNum;
    var _o14 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      r = _o14.View,
      d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!0),
      _i5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _i6 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i5, 2),
      g = _i6[0],
      m = _i6[1],
      _i7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _i8 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i7, 2),
      p = _i8[0],
      u = _i8[1],
      N = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0),
      O = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      j();
    }, [c]);
    var j = function j() {
        N.current = 0, u([]), f();
      },
      f = function f() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return be(_this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee2() {
          var e, _s2;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (d.current) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                m(!0), ++N.current;
                e = a.code;
                _context2.prev = 4;
                _context2.next = 7;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryContractPageC)({
                  page: N.current,
                  rows: 10,
                  isLocalMock: !O,
                  childFlag: !0,
                  dataStateStr: e
                });
              case 7:
                _s2 = _context2.sent;
                d.current = !(0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(_s2.rows), u(function (e) {
                  return e.concat(_s2.rows || []);
                }), m(!1);
                _context2.next = 14;
                break;
              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](4);
                console.log(30, _context2.t0);
              case 14:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[4, 11]]);
        }));
      };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
      className: "orderListItemWrap",
      style: {
        height: O ? "100vh" : "667px"
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.ScrollView, Object.assign({
        onScroll: f,
        style: {
          height: "calc(100vh - 60px)"
        }
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, {
          children: [p.map(function (e, s) {
            return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Re, Object.assign({
              init: j
            }, e, {
              key: s
            }));
          }), g ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.Loading, {}) : null]
        })
      }))
    }));
  }),
  ze = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref16) {
    var _ref16$defaultIndex = _ref16.defaultIndex,
      s = _ref16$defaultIndex === void 0 ? 0 : _ref16$defaultIndex,
      _ref16$refreshNum = _ref16.refreshNum,
      a = _ref16$refreshNum === void 0 ? 0 : _ref16$refreshNum;
    var _o15 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o15.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "order-container"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.Tabs, {
        defaultIndex: s,
        tabs: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.orderStatusList,
        render: function render(s) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "orderList"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Me, {
              item: s,
              refreshNum: a
            })
          }));
        }
      })
    }));
  }),
  Fe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref17) {
    var a = _ref17.contractBillcode;
    var _o16 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o16.View,
      i = _o16.Text,
      _H = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderDetail)(a || ""),
      n = _H.orderDetail,
      t = _H.status;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "orderDetail"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "orderDetailTopTitle"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "orderDetailTopTitleContent"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "title"
          }, {
            children: function () {
              switch (n.dataState) {
                case -1:
                  return "已取消";
                case 1:
                  return "需付款";
                case 2:
                  return "等待发货";
                case 3:
                  return "等待收货";
                case 4:
                  return "等待评价";
                case 5:
                  return "已完成";
                default:
                  return "";
              }
            }()
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "subTitleWrap"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              className: "subTitle"
            }, {
              children: t
            }))
          }))]
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
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                  className: "personName"
                }, {
                  children: n.goodsReceiptMem
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                  className: "personPhone"
                }, {
                  children: n.goodsReceiptPhone
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                className: "address"
              }, {
                children: n.goodsReceiptArrdess
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
              className: "rPart"
            })]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "orderDetailGoodsWrap"
          }, {
            children: [n.goodsList.map(function (s) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Be, Object.assign({}, s), s.contractGoodsId);
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
              className: "priceInfo"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                className: "priceInfoFloor top"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                  className: "totalNum"
                }, {
                  children: ["共", n.goodsNum, "件商品"]
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                  className: "totalPrice"
                }, {
                  children: ["合计 ", parseFloat((n.dataBmoney - n.refundMoney).toFixed(2))]
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
                  children: ["合计 ￥", n.contractInmoney]
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
                  children: ["合计 ￥", n.goodsPmoney]
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
                children: n.packageRemark
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
                children: n.contractBillcode
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
                children: n.gmtCreate
              }))]
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "btnGroupFooter"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Se, {
              contractBillcode: n.contractBillcode,
              contractId: n.contractId,
              dataState: n.dataState
            })
          }))]
        }))
      }))]
    }));
  }),
  We = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref18) {
    var a = _ref18.defaultValue,
      c = _ref18.borderRadius,
      i = _ref18.paddingTop,
      n = _ref18.paddingBottom,
      t = _ref18.selectClassifyNav;
    var _o17 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      l = _o17.View,
      r = _o17.Text,
      d = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(a, t);
    return console.log("30", d), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
      style: {
        paddingTop: i,
        paddingBottom: n
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
        className: "classifyNav"
      }, {
        children: d.map(function (a, i) {
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
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
              className: "label"
            }, {
              children: a.title
            }))]
          }), i);
        })
      }))
    }));
  }),
  Ge = function Ge(_ref19) {
    var _ref19$starColor = _ref19.starColor,
      a = _ref19$starColor === void 0 ? "#FF0934" : _ref19$starColor,
      _ref19$starSize = _ref19.starSize,
      c = _ref19$starSize === void 0 ? "12px" : _ref19$starSize,
      i = _ref19.itemData;
    var _o18 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o18.View,
      t = _o18.Text,
      l = _o18.Image,
      r = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_13__.Rate;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
      className: "evaluateItem"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
        className: "userInfo"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
          src: i.avatar,
          className: "avatar"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
          className: "userNameWrap"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "userName"
          }, {
            children: i.userName
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
            readOnly: !0,
            value: i.rate,
            style: {
              "--star-size": c,
              "--active-color": a
            }
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
        className: "size"
      }, {
        children: ["规格： ", i.size]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
        className: "content"
      }, {
        children: i.evaluate
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
        className: "img-group"
      }, {
        children: i.imgUrls.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
            src: s.imgUrl,
            className: "img"
          }, a);
        })
      }))]
    }));
  },
  Qe = function Qe(_ref20) {
    var a = _ref20.checkCollectionObj,
      c = _ref20.setCheckCollectionObj,
      i = _ref20.goods;
    var _o19 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o19.Text,
      l = _o19.View;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      r();
    }, []);
    var r = function r() {
      return be(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee3() {
        var e, _s3;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              e = {
                collectType: 0,
                collectOpcode: i.rsSkuDomainList[0].skuCode || ""
              };
              _context3.prev = 1;
              _context3.next = 4;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.checkCollectExit)(e);
            case 4:
              _s3 = _context3.sent;
              c(_s3);
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
        console.log(123), (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(a.dataObj) ? be(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee4() {
          var e;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                e = {
                  collectType: 0,
                  collectOpcode: i.rsSkuDomainList[0].skuCode || "",
                  collectOppic: i.dataPic,
                  collectOpcont: i.goodsName,
                  collectOpnum: i.pricesetNprice,
                  goodsOrigin: 0
                };
                _context4.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.saveCollect)(e);
              case 3:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        })) : be(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee5() {
          var e;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                e = {
                  collectType: 0,
                  collectOpcode: i.rsSkuDomainList[0].skuCode || ""
                };
                _context5.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.deleteCollectByCode)(e);
              case 3:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        })), r();
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: ve,
        alt: "",
        className: "icon"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
        className: "txt"
      }, {
        children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(a.dataObj) ? "收藏" : "已收藏"
      }))]
    }));
  },
  Ue = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref21) {
    var a = _ref21.promotionBegintime,
      c = _ref21.pbName,
      i = _ref21.discName,
      n = _ref21.promotionCode,
      t = _ref21.promotionName,
      l = _ref21.couponOnceNums,
      d = _ref21.couponOnceNumd,
      g = _ref21.promotionEndtime;
    var _o20 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      m = _o20.View,
      h = _o20.Text,
      _q = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddCoupon)(),
      b = _q.save,
      p = _q.isPick,
      u = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return l - d;
      }, [l, d]);
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
            children: i
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
              promotionCode: n,
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
  Ee = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl,
  He = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useStore,
  qe = function qe(_ref22) {
    var c = _ref22.coupon;
    var _o21 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o21.View,
      t = _o21.Text,
      _i9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _i10 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i9, 2),
      r = _i10[0],
      d = _i10[1],
      _He = He(),
      g = _He.couponValue;
    return console.log(34, c), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
        className: "goodsDetail-coupon",
        onClick: function onClick() {
          return d(!0);
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
          className: "label"
        }, {
          children: "优惠券"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "label"
          }, {
            children: g ? "\u5DF2\u9009\u62E9: ".concat(g) : "请选择优惠券"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: ke,
            alt: "",
            className: "icon"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.Popup, Object.assign({
        popupVisible: r,
        popupHandler: d
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
          className: "goodsDetail-coupon-popup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "stampWrap"
          }, {
            children: c.map(function (e, s) {
              return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Ue, Object.assign({}, e, {
                key: s
              }));
            })
          }))
        }))
      }))]
    });
  },
  Ke = function Ke(_ref23) {
    var s = _ref23.onChange,
      _ref23$readOnly = _ref23.readOnly,
      a = _ref23$readOnly === void 0 ? !1 : _ref23$readOnly,
      _ref23$size = _ref23.size,
      c = _ref23$size === void 0 ? 22 : _ref23$size,
      n = _ref23.count;
    var _o22 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      l = _o22.View,
      _i11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
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
      _i12 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i11, 2),
      r = _i12[0],
      d = _i12[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      if (n) {
        var _e3 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_15__["default"])(r);
        for (var _s4 = 0; _s4 < _e3.length; _s4++) _e3[_s4].icon = _s4 > n - 1 ? "star" : "star-fill";
        d(_e3);
      }
    }, []);
    var g = function g(e) {
      if (!a) {
        for (var _s5 = 0; _s5 < r.length; _s5++) r[_s5].icon = _s5 > e ? "star" : "star-fill";
        d((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_15__["default"])(r)), s(e + 1);
      }
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
      children: r.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pe, {
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
  Ze = function Ze(_ref24) {
    var a = _ref24.item;
    var _o23 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o23.View,
      i = _o23.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "rateItem"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "topInfo"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "lPart"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
            src: a.userImgurl,
            className: "avatar"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "userInfo"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
              className: "name"
            }, {
              children: a.userName
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ke, {
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
  Xe = function Xe(_ref25) {
    var a = _ref25.evaluateArr;
    var _o24 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o24.View,
      i = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(a);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "goodsDetailEvaluate"
    }, {
      children: i.current.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "topInfo"
        }, {
          children: ["评价 (", i.current.length, ")"]
        })), i.current.slice(0, 5).map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ze, {
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
  Ye = function Ye() {
    var _o25 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      a = _o25.Text,
      c = _o25.View,
      i = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl();
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "goodsDetailHandleBar"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "linkGroup"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
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
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.switchTabImpl)(ue.shopping);
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
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
            i({
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
            i({
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
  Je = function Je(_ref26) {
    var s = _ref26.tabActive,
      a = _ref26.goods;
    var _o26 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o26.View,
      _i13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _i14 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i13, 2),
      n = _i14[0],
      l = _i14[1];
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      l(a.goodsRemark.replace(/<style>[\s\S]*<\/style>/gi, "").replace(/\<img/gi, '<img class="mystyle" mode="widthFix"').replace(/<!--[\s\S]*-->/gi, ""));
    }, [a.goodsRemark, s]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "goodsDetail-info"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: n || ""
        }
      })
    }));
  },
  $e = function $e(_ref27) {
    var a = _ref27.skuName,
      c = _ref27.skuOption,
      i = _ref27.index;
    var _o27 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o27.View,
      t = _o27.Text,
      _Z = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddShopping)(),
      l = _Z.handleChooseSize,
      r = _Z.spec;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
      className: "sizeArr"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
        className: "title"
      }, {
        children: a
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
        className: "sizeArrItemWrap"
      }, {
        children: c.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "sizeItem " + (r[i] === s.specValueValue ? "active" : ""),
            onClick: l.bind(null, s.specValueValue, i)
          }, {
            children: s.specValueValue
          }), a);
        })
      }))]
    }));
  },
  _e = function _e(_ref28) {
    var a = _ref28.goods,
      c = _ref28.goodSku;
    var _Z2 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddShopping)(),
      i = _Z2.count,
      n = _Z2.spec,
      t = _Z2.popupVisible,
      l = _Z2.isNeedButton,
      r = _Z2.handleStep,
      d = _Z2.popupHandler,
      g = _Z2.addShoppingImpl,
      _o28 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      m = _o28.View,
      h = _o28.Text,
      b = _o28.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.Popup, Object.assign({
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
                children: ["已选择: ", n.toString()]
              }))]
            }))]
          })), c.map(function (s, a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)($e, {
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
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.NumStep, {
              count: i,
              handleStep: r
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
  es = function es(_ref29) {
    var a = _ref29.promotionList;
    var _o29 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o29.View,
      i = _o29.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "goodsDetail-promotion"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "label"
      }, {
        children: "促销"
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "group"
      }, {
        children: a.length ? a.map(function (_ref30, a) {
          var s = _ref30.discName;
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
  ss = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl,
  as = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useStore,
  cs = function cs(_ref31) {
    var c = _ref31.goods,
      i = _ref31.goodSku;
    var _o30 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o30.View,
      t = _o30.Text,
      _as = as(),
      l = _as.count,
      r = _as.spec,
      d = ss();
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
            className: "label"
          }, {
            children: ["已选择 数量: ", l, " 规格: ", r]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: ke,
            alt: "",
            className: "icon"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_e, {
        goodSku: i,
        goods: c
      })]
    });
  },
  is = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  ns = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.StoreProvider,
  ts = function ts(_ref32) {
    var c = _ref32.skuCode;
    var i;
    var _o31 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o31.View,
      t = _o31.Text,
      l = _o31.Skeleton,
      _X = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsDetailImpl)(c),
      r = _X.goods,
      d = _X.promotionArr,
      g = _X.checkCollectionObj,
      m = _X.setCheckCollectionObj,
      h = _X.sliderArr,
      b = _X.tabActive,
      p = _X.setTabActive,
      u = _X.goodSku,
      N = _X.evaluateArr,
      O = _X.coupon;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
      className: "GoodsDetailWrap",
      style: {
        minHeight: is ? "" : "667px",
        height: is ? "" : "auto",
        overflow: is ? "" : "auto"
      }
    }, {
      children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(r) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
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
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
          className: "topSlider"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ie, {
            selectImg: h,
            type: 1,
            imgHeight: {
              height: 375,
              width: 375
            }
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
          className: "goodsDetail-topInfo"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
              className: "name"
            }, {
              children: null == r ? void 0 : r.goodsName
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
              className: "price"
            }, {
              children: ["￥", null === (i = null == r ? void 0 : r.pricesetNprice) || void 0 === i ? void 0 : i.toFixed(2)]
            }))]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "rPart"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Qe, {
              goods: r,
              checkCollectionObj: g,
              setCheckCollectionObj: m
            })
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cs, {
          goods: r,
          goodSku: u
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(es, {
          promotionList: d
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(qe, {
          coupon: O
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
          className: "goodsDetailTab"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
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
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "group"
          }, {
            children: 1 === b ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Je, {
              tabActive: b,
              goods: r
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xe, {
              evaluateArr: N
            })
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ye, {})]
      })
    }));
  },
  ls = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref33) {
    var s = _ref33.skuCode;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ns, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ts, {
        skuCode: s
      })
    });
  });
function rs(e) {
  var s = "https://b2ch5cbaf0d729c1b4c7285b05271a454a4ff.saas.qjclouds.com/";
  return RegExp(/https?/).test(e) ? e : s + e;
}
var os = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref34) {
    var c = _ref34.navList,
      i = _ref34.activeKey;
    var _o32 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o32.View,
      t = _o32.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: c.map(function (a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
          className: ["content", i === "".concat(a.goodsClassCode) ? " active" : ""].join("")
        }, {
          children: ((null == a ? void 0 : a.childList) || []).map(function (a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
              className: "classifyFloor"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
                className: "titleWrap"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                  className: "title"
                }, {
                  children: a.goodsClassName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
                  className: "line"
                })]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                className: "container"
              }, {
                children: ((null == a ? void 0 : a.childList) || []).map(function (_ref35) {
                  var a = _ref35.classtreeCode,
                    c = _ref35.goodsClassCode,
                    i = _ref35.goodsClassLogo,
                    l = _ref35.goodsClassName;
                  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
                    onClick: function onClick() {
                      return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ue.goodList, "?classtreeCode=").concat(a));
                    },
                    className: "classifyFloorGoodsItem"
                  }, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                      src: rs(i),
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
  ds = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_13__.SideBar,
  gs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o33 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      a = _o33.View,
      c = _o33.Text,
      _Y = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsClassify)(),
      i = _Y.activeKey,
      n = _Y.setActiveKey,
      t = _Y.navList,
      l = _Y.flag;
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ue.search);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pe, {
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ds, Object.assign({
            activeKey: i,
            onChange: n,
            style: {
              "--width": "88px"
            }
          }, {
            children: t.map(function (s) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ds.Item, {
                title: s.goodsClassName
              }, s.goodsClassCode);
            })
          }))
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
          className: "main"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(os, {
            navList: t,
            activeKey: i
          })
        }))]
      }))]
    }));
  }),
  ms = [{
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
  hs = function hs(_ref36) {
    var a = _ref36.setParams;
    var _o34 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o34.View,
      _i15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _i16 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i15, 2),
      n = _i16[0],
      t = _i16[1],
      _i17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ms),
      _i18 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i17, 2),
      l = _i18[0],
      r = _i18[1];
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "sortWrap"
    }, {
      children: l.map(function (_ref37, d) {
        var i = _ref37.order,
          l = _ref37.sortField,
          o = _ref37.name;
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "sortItem " + (n === d ? "active" : ""),
          onClick: function onClick() {
            return function (e, s, c) {
              t(s), c && r(function (e) {
                return e[s].order = "asc" === c ? "desc" : "asc", (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_15__["default"])(e);
              }), a({
                sortField: e,
                order: c
              });
            }(l, d, i);
          }
        }, {
          children: [o, i && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pe, {
            style: {
              color: n === d ? "#f00" : "#444",
              fontSize: 20
            },
            value: "desc" === i ? "jiangxu" : "shengxu"
          })]
        }), d);
      })
    }));
  },
  bs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref38) {
    var _ref38$classtreeCode = _ref38.classtreeCode,
      a = _ref38$classtreeCode === void 0 ? "" : _ref38$classtreeCode,
      _ref38$searchParam = _ref38.searchParam,
      c = _ref38$searchParam === void 0 ? "" : _ref38$searchParam;
    var _o35 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o35.View,
      l = _o35.Text,
      _i19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _i20 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i19, 2),
      d = _i20[0],
      g = _i20[1],
      _J = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsList)(a, c, d),
      m = _J.loading,
      p = _J.getData,
      u = _J.list,
      _i21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _i22 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i21, 2),
      N = _i22[0],
      O = _i22[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      if (!(0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)()) return;
      (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)().createSelectorQuery().select("#searchId").boundingClientRect(function (e) {
        if (e) {
          var _s6 = e.bottom;
          O(_s6);
        }
      }).exec();
    }), console.log("height", N);
    var j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
      return "calc(100vh - ".concat(N, "px)");
    }, [N]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
      className: "goodsList"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
        id: "searchId",
        className: "top-info"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
          className: "top-info-search",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ue.search);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pe, {
            value: "fenxiang"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
            children: "搜索商品"
          })]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(hs, {
          setParams: g
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
        className: "listWrap"
      }, {
        children: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.ScrollView, Object.assign({
            onScroll: function onScroll() {
              return p(d);
            },
            style: {
              height: j
            }
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
              className: "list"
            }, {
              children: u.map(function (a) {
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
                  onClick: function onClick() {
                    return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ue.goodDetail, "?skuCode=").concat(a.skuCode));
                  },
                  className: "listItem"
                }, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
                    className: "img",
                    style: {
                      backgroundImage: "url(".concat(a.dataPic, ")")
                    }
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
                    className: "name"
                  }, {
                    children: a.goodsName
                  })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
                    className: "price"
                  }, {
                    children: ["￥ ", a.pricesetNprice.toFixed(2)]
                  }))]
                }), a.skuCode);
              })
            })), m ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.Loading, {}) : null]
          }));
        }, [j, u])
      }))]
    }));
  }),
  ps = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  us = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref39) {
    var a = _ref39.placeholder,
      c = _ref39.placeholderText,
      n = _ref39.history;
    var _o36 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      l = _o36.View,
      r = _o36.Text,
      _i23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _i24 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i23, 2),
      d = _i24[0],
      g = _i24[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      be(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee6() {
        var e;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (ps) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return");
            case 2:
              _context6.next = 4;
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)();
            case 4:
              _context6.t0 = _context6.sent.getStorageSync("history");
              if (_context6.t0) {
                _context6.next = 7;
                break;
              }
              _context6.t0 = [];
            case 7:
              e = _context6.t0;
              g(e);
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
    }, []);
    var m = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function (e) {
        return be(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee7() {
          var s;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                if (ps) {
                  _context7.next = 2;
                  break;
                }
                return _context7.abrupt("return");
              case 2:
                _context7.next = 4;
                return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)();
              case 4:
                s = _context7.sent;
                g(function (a) {
                  if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(e.detail.value)) return a;
                  var c = a.concat(e.detail.value);
                  return s.getStorageSync("history", c), c;
                }), h(e.detail.value);
              case 6:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
      }),
      h = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function (e) {
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ue.goodList, "?searchParam=").concat(e));
      });
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
      className: "searchPage",
      style: {
        height: ps ? "100vh" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "search-title"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: ve,
          alt: ""
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", Object.assign({
          "confirm-type": "search",
          type: "text",
          className: "content",
          onConfirm: m
        }, a ? {
          placeholder: c
        } : {})), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
          className: "btn",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorBackImpl)();
          }
        }, {
          children: "取消"
        }))]
      })), n ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "historyWrap"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "title"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
            className: "label"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
              className: "icon"
            }), "历史搜索记录"]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pe, {
            onClick: function onClick() {
              return be(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee8() {
                return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee8$(_context8) {
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
          className: "content"
        }, {
          children: d.map(function (s, a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
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
  Ns = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o37 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      a = _o37.View,
      c = _o37.Text;
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
            src: ve,
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
  Os = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o38 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      s = _o38.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "goodsDetail-promotion-wrap"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, {
        className: "goodsDetail-promotion"
      })
    }));
  }),
  js = [{
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
  fs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _i25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1"),
      _i26 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i25, 2),
      c = _i26[0],
      t = _i26[1],
      _o39 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      l = _o39.View,
      r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([{
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
        children: r.current.map(function (e) {
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
        children: js.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ge, {
            itemData: s
          }, a);
        })
      }))]
    });
  }),
  As = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref40) {
    var c = _ref40.code;
    var _$ = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useEvaluateDetail)(c),
      i = _$.orderInfo,
      t = _$.changeStar,
      l = _$.Submit,
      r = _$.changeContent,
      d = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_13__.Button,
      _o40 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      g = _o40.View,
      h = _o40.Image,
      b = _o40.TextArea,
      p = _o40.Textarea,
      u = b || p,
      N = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("宝贝满足你吗？分享一下它吧");
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
      className: "evaluateDetail"
    }, {
      children: [i.map(function (c, i) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "topInfo"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
              className: "lPart"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, {
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
          }), i), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "rate"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
              className: "title"
            }, {
              children: "商品评价"
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ke, {
              onChange: t.bind(null, i)
            })]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
            className: "evaluate"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(u, {
              className: "content",
              placeholder: N.current,
              rows: 5,
              maxLength: 30,
              onInput: r.bind(null, i)
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
  ys = function ys(_ref41) {
    var a = _ref41.itemData,
      c = _ref41.delAddress,
      i = _ref41.setDefault,
      _ref41$fontSize = _ref41.fontSize,
      n = _ref41$fontSize === void 0 ? "12px" : _ref41$fontSize,
      _ref41$iconSize = _ref41.iconSize,
      t = _ref41$iconSize === void 0 ? "12px" : _ref41$iconSize;
    var _o41 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      l = _o41.View,
      r = _o41.Text,
      d = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
      className: "addressItem"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "upInfo",
        onClick: function onClick() {
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ue.addressEditor, "?addressId=").concat(a.addressId));
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "userInfo"
        }, {
          children: [a.addressMember, " ", a.addressPhone]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "addressInfo"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
            className: "address"
          }, {
            children: [a.provinceName, " ", a.areaName, " ", a.cityName, " ", a.addressDetail]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
            value: "bianjishuru"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "downInfo"
      }, {
        children: [d ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({
          className: "checkboxMini"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("checkbox-group", Object.assign({
            onChange: i,
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
          className: "del",
          onClick: c
        }, {
          children: "删除"
        }))]
      }))]
    }));
  },
  Cs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o42 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      s = _o42.View,
      c = _o42.Skeleton,
      i = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Array(3).fill(0));
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
        className: "skullWrap"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
          className: "skull"
        }, {
          children: i.current.map(function (s, a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
              className: "skullItem",
              animated: !0
            }, a);
          })
        }))
      }))
    });
  }),
  vs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref42) {
    var a = _ref42.refreshNum;
    var _o43 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o43.View,
      i = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
      _ref43 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddressList)(a),
      n = _ref43.list,
      t = _ref43.delAddress,
      l = _ref43.setDefault,
      r = _ref43.skullShow;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "addressListWrap",
      style: {
        height: i ? "inherit" : "667px"
      }
    }, {
      children: [r ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cs, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "addressList"
      }, {
        children: n.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ys, {
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ue.addressEditor));
          }
        }, {
          children: "+ 新增地址"
        }))
      }))]
    }));
  }),
  ks = [{
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
  ws = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o44 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      s = _o44.View,
      c = _o44.Skeleton,
      i = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Array(5).fill(0));
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
        className: "skullWrap"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
          className: "skull"
        }, {
          children: i.current.map(function (s, a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
              className: "skullItem",
              animated: !0
            }, a);
          })
        }))
      }))
    });
  }),
  xs = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Is = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref44) {
    var s = _ref44.addressId;
    var _o45 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o45.View,
      i = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_13__.Form,
      n = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_13__.Button,
      t = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_13__.Input,
      _ee = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useEditAddress)(s, i, xs),
      l = _ee.skullShow,
      r = _ee.form,
      d = _ee.area,
      g = _ee.defaultAddress,
      h = _ee.handleArea,
      b = _ee.handleDefaultAddress,
      p = _ee.handleFinish;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "addressDetail",
      style: {
        height: xs ? "100%" : "667px"
      }
    }, {
      children: l ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ws, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        form: r,
        layout: "horizontal",
        mode: "card",
        onFinish: p,
        footer: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
          block: !0,
          type: "submit",
          color: "primary",
          size: "large"
        }, {
          children: "提交"
        }))
      }, {
        children: ks.map(function (s, n) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i.Item, Object.assign({
            label: s.label,
            name: s.name,
            rules: s.rules,
            trigger: "cascader" === s.type ? "onConfirm" : "onChange",
            arrow: !1
          }, {
            children: "input" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({}, s.props)) : "switch" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("switch", Object.assign({}, s.props, {
              color: "#000",
              onChange: b,
              checked: "1" === g
            })) : "cascader" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: xs ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("picker", Object.assign({
                mode: "region",
                onChange: h,
                value: "123"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                  className: "areaWrap"
                }, {
                  children: d.provinceName ? "".concat(d.provinceName, "\u2014").concat(d.cityName, "-").concat(d.areaName) : "请选择所在地区"
                }))
              })) : "请选择所在地区"
            }) : void 0
          }), n);
        })
      }))
    }));
  }),
  Ds = function Ds(_ref45) {
    var s = _ref45.address;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(s) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Bs, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ts, {
        address: s
      })
    });
  },
  Ts = function Ts(_ref46) {
    var a = _ref46.address;
    var _o46 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o46.View,
      i = _o46.Text,
      n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        var e = a.provinceName,
          s = a.addressDefault,
          c = a.cityName,
          i = a.areaName,
          n = a.addressDetail,
          _a$addressMember = a.addressMember,
          t = _a$addressMember === void 0 ? "" : _a$addressMember,
          _a$addressPhone = a.addressPhone,
          l = _a$addressPhone === void 0 ? "" : _a$addressPhone;
        return {
          addressDefault: "1" === s,
          addressMember: t,
          addressPhone: l,
          address: e + c + i + n
        };
      }, [a]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "address-info"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
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
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
            children: n.addressMember
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "left-padding"
          }, {
            children: n.addressPhone
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "left-padding left-title-default"
          }, {
            children: n.addressDefault ? "默认" : ""
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "left-detail"
        }, {
          children: n.address
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
        value: "xiangyou1",
        style: {
          color: "#444",
          lineHeight: 3,
          textAlign: "right"
        }
      })]
    }));
  },
  Bs = function Bs() {
    var _o47 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o47.View,
      i = _o47.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "group"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
          className: "local"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
          className: "address"
        }, {
          children: "选择收货地址"
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
        className: "arrow"
      })]
    });
  },
  Ls = function Ls(_ref47) {
    var c = _ref47.payState,
      i = _ref47.savePayPrice,
      n = _ref47.amount;
    var _o48 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      t = _o48.View,
      l = _o48.Text,
      r = c.shoppingCountPrice,
      d = c.freight,
      g = c.comDisMoney;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "price blcWrap"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
          className: "title"
        }, {
          children: "价格明细"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
          className: "express blcItem"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "label"
          }, {
            children: "商品总金额"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
            className: "value"
          }, {
            children: ["￥ ", r]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
          className: "coupon blcItem"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "label"
          }, {
            children: "优惠金额"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
            className: "value"
          }, {
            children: ["￥ ", g]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
          className: "express blcItem"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "label"
          }, {
            children: "运费"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
            className: "value"
          }, {
            children: ["￥ ", d]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
          className: "all blcItem"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
            className: "label"
          }, {
            children: "总计"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
            className: "value",
            style: {
              color: "#000"
            }
          }, {
            children: ["￥ ", n]
          }))]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "placeOrderFooter"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "price"
        }, {
          children: ["合计: ", n]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
          className: "btn",
          onClick: i
        }, {
          children: "生成订单"
        }))]
      }))]
    });
  },
  Ss = function Ss(_ref48) {
    var s = _ref48.goodsList;
    console.log(6, s);
    var _o49 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      a = _o49.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
      className: "place-order-goods"
    }, {
      children: s.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Be, Object.assign({}, s), a);
      })
    }));
  },
  Vs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref49) {
    var a = _ref49.couponStart,
      c = _ref49.pbName,
      i = _ref49.discName,
      n = _ref49.promotionCode,
      t = _ref49.promotionName,
      l = _ref49.couponEnd,
      r = _ref49.disable;
    var _o50 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      d = _o50.View,
      g = _o50.Text,
      m = _o50.Radio;
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
            children: i
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
        })), r ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
          className: "coupon-pick-default"
        }, {
          children: "不能用"
        })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, {
          disabled: r,
          value: n,
          className: "choose"
        })]
      }))
    }));
  }),
  Ps = function Ps(_ref50) {
    var c = _ref50.coupon,
      n = _ref50.confirm,
      t = _ref50.amount;
    var _o51 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      d = _o51.View,
      g = _o51.Text,
      _i27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _i28 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i27, 2),
      m = _i28[0],
      h = _i28[1],
      _i29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _i30 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i29, 2),
      b = _i30[0],
      p = _i30[1],
      N = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return (c.find(function (e) {
          return e.promotionCode === b;
        }) || {}).promotionName;
      }, [b]);
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
            children: N ? "\u5DF2\u9009\u62E9: ".concat(N) : "请选择优惠券"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: ke,
            alt: "",
            className: "icon"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.Popup, Object.assign({
        popupVisible: m,
        popupHandler: h
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
          className: "goodsDetail-coupon-popup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
            className: "stampWrap"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.SmoothRadio, Object.assign({
              onChange: function onChange(e) {
                var s = e.detail.value,
                  a = c.find(function (e) {
                    return e.promotionCode === s;
                  }) || {};
                p(s), h(!1), n(a);
              }
            }, {
              children: c.map(function (e, s) {
                return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Vs, Object.assign({
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
  Rs = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Ms = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref51) {
    var a = _ref51.refreshNum,
      c = _ref51.goodsNum,
      i = _ref51.skuId,
      n = _ref51.shoppingGoodsId;
    var _o52 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      t = _o52.View,
      _se = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.usePlaceOrder)({
        skuId: i,
        goodsNum: c,
        shoppingGoodsId: n
      }, a),
      l = _se.savePayPrice,
      r = _se.address,
      d = _se.list,
      g = _se.payState,
      m = _se.coupon,
      h = _se.confirm,
      b = _se.amount;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      className: "placeOrder",
      style: {
        height: Rs ? "100vh" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
        className: "chooseAddress",
        onClick: function onClick() {
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ue.addressList);
        }
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ds, {
          address: r
        })
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ss, {
        goodsList: d.current
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
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ps, {
        coupon: m,
        confirm: h,
        amount: b
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ls, {
        amount: b,
        savePayPrice: l,
        payState: g.current
      })]
    }));
  }),
  zs = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderResultResult.useOrderResult,
  Fs = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Ws = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref52) {
    var a = _ref52.code;
    var _o53 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o53.View,
      i = _o53.Text,
      _zs = zs(a),
      n = _zs.result,
      t = n.sysRecode,
      l = n.dataObj;
    return console.log(15, t, l), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "placeOrderResult",
      style: {
        height: Fs ? "100vh" : "667px"
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, t ? Object.assign({
        className: "placeOrderResultContent"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
          className: "icon"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "tips"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
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
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              className: "label"
            }, {
              children: "订单号："
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              className: "value"
            }, {
              children: l.contractBillcode
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "placeOrderResultItem"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              className: "label"
            }, {
              children: "支付方式："
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              className: "value"
            }, {
              children: "00" === l.contractType ? "微信支付" : "其他"
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "placeOrderResultItem"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              className: "label"
            }, {
              children: "支付金额："
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
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
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
          className: "icon"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "tips"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "title"
          }, {
            children: "订单支付失败"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "tip"
          }, {
            children: "您的订单将保留15分钟，可点击下方“去支付”完成订单"
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "btnGroup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.paymentMode, "?code=").concat(n.contractBillcode));
            },
            className: "btn white"
          }, {
            children: "去支付"
          }))
        }))]
      }))
    }));
  }),
  Gs = function Gs() {
    var _o54 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      s = _o54.View,
      a = _o54.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "noData"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, {
        src: "https://b2cweapp7c0069b43749439d97b7cae6a02bd459.saas.qjclouds.com/paas/shop-master/c-static/images/wxminiImg/no_coupon.png",
        className: "img"
      })
    }));
  },
  Qs = function Qs(_ref53) {
    var c = _ref53.coe;
    var _ce = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOverdue)(),
      i = _ce.overdueList,
      _o55 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o55.View,
      t = _o55.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 3 === c ? i.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.ScrollView, Object.assign({
        style: {
          height: "80vh"
        }
      }, {
        children: i.map(function (a, c) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "couponListItem overdue"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
              className: "coupon-content"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                className: "price"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                  className: "num"
                }, {
                  children: a.pbName
                }))
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
                className: "info"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                  className: "title"
                }, {
                  children: a.discName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
                  className: "date"
                }, {
                  children: ["有效期至：", "\n                        ".concat(new Date(a.gmtModified).getFullYear(), "-").concat(new Date(a.gmtModified).getMonth() + 1, "-").concat(new Date(a.gmtModified).getDate(), "\n                        ")]
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                  className: "btn"
                }, {
                  children: "已使用"
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                  className: "round"
                }, {
                  children: "已失效"
                }))]
              }))]
            }))
          }), c);
        })
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Gs, {}) : null
    });
  };
/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
  var _o56 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
    s = _o56.View,
    c = _o56.Skeleton,
    i = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Array(3).fill(0));
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "skullWrap"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
        className: "skull"
      }, {
        children: i.current.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
            className: "skullItem",
            animated: !0
          }, a);
        })
      }))
    }))
  });
});
var Us = function Us(_ref54) {
    var c = _ref54.coe;
    var _ie = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useUnused)(),
      i = _ie.unusedList,
      _o57 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      n = _o57.View,
      t = _o57.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 1 === c ? i.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.ScrollView, Object.assign({
        style: {
          height: "80vh"
        }
      }, {
        children: i.map(function (a, c) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "couponListItem unused"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
              className: "coupon-content"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                className: "price"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                  className: "num"
                }, {
                  children: a.pbName
                }))
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
                className: "info"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
                  className: "title"
                }, {
                  children: a.discName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
                  className: "date"
                }, {
                  children: ["有效期至：", "\n                        ".concat(new Date(a.gmtModified).getFullYear(), "-").concat(new Date(a.gmtModified).getMonth() + 1, "-").concat(new Date(a.gmtModified).getDate(), "\n                        ")]
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                  className: "btn"
                }, {
                  children: "未使用"
                }))]
              }))]
            }))
          }), c);
        })
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Gs, {}) : null
    });
  },
  Es = function Es(_ref55) {
    var c = _ref55.coe;
    var _o58 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      i = _o58.View,
      n = _o58.Text,
      _ne = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useUsed)(),
      t = _ne.usedList;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 2 === c ? t.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.ScrollView, Object.assign({
        style: {
          height: "80vh"
        }
      }, {
        children: t.map(function (a, c) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "couponListItem used"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
              className: "coupon-content"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                className: "price"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                  className: "num"
                }, {
                  children: a.pbName
                }))
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                className: "info"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
                  className: "title"
                }, {
                  children: a.discName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
                  className: "date"
                }, {
                  children: ["有效期至：", "\n                        ".concat(new Date(a.gmtModified).getFullYear(), "-").concat(new Date(a.gmtModified).getMonth() + 1, "-").concat(new Date(a.gmtModified).getDate(), "\n                        ")]
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                  className: "btn"
                }, {
                  children: "已使用"
                }))]
              }))]
            }))
          }), c);
        })
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Gs, {}) : null
    });
  },
  Hs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o59 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      a = _o59.View,
      c = _o59.Text,
      _te = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCouponList)(),
      i = _te.coe,
      n = _te.setCoe,
      l = _te.config,
      r = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryUsercouponNember)().then(function (e) {
        console.log(26, e);
      });
    }, []), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
      className: "couponList",
      style: {
        height: r ? "100vh" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
        className: "couponTab"
      }, {
        children: l.current.map(function (t) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
            className: "couponTabItem " + (i === t.id ? "active" : ""),
            onClick: function onClick() {
              return n(t.id);
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
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Us, {
          coe: i
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Es, {
          coe: i
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Qs, {
          coe: i
        })]
      }))]
    }));
  });
function qs(_ref56) {
  var _this2 = this;
  var a = _ref56.list;
  var _o60 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
    c = _o60.View,
    i = _o60.Text,
    n = _o60.Image,
    t = _o60.Checkbox,
    _le = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCartList)(),
    l = _le.updateImpl,
    r = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useDispatchImpl)(),
    _oe = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useStore)(),
    d = _oe.select,
    g = function g(e, s, a) {
      return be(_this2, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee9() {
        var c;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              c = "plus" === a ? ++s : --s;
              l(e, c);
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
    };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.SmoothCheckbox, Object.assign({
    onChange: function onChange(e) {
      r({
        type: "select",
        payload: e.detail.value
      });
    }
  }, {
    children: a.map(function (a, l) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "cartItem"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "checkBoxWrap"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
            checked: d.includes(a.shoppingGoodsId + ""),
            value: a.shoppingGoodsId,
            style: {
              "--icon-size": "16px",
              "--font-size": "14px",
              "--gap": "6px"
            }
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
          className: "img",
          src: a.dataPic
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
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
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
              className: "price"
            }, {
              children: ["￥", a.pricesetNprice]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.NumStep, {
              count: a.goodsCamount,
              handleStep: g.bind(null, a.shoppingGoodsId, a.goodsCamount)
            })]
          }))]
        }))]
      }), l);
    })
  }));
}
var Ks = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Zs = function Zs(_ref57) {
    var c = _ref57.refreshNum;
    var _i31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
      _i32 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_i31, 2),
      n = _i32[0],
      t = _i32[1],
      _o61 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      l = _o61.View,
      r = _o61.Text,
      d = _o61.Checkbox,
      _le2 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCartList)(c),
      g = _le2.cartList,
      m = _le2.amount,
      h = _le2.selectAll,
      b = _le2.allCart,
      p = _le2.toOrderImpl,
      u = _le2.select,
      N = _le2.deleteCart;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
      className: "cart",
      style: {
        height: Ks ? "100%" : "667px"
      }
    }, {
      children: g.shoppingGoodsList.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
          className: "edit"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
            className: "btn",
            onClick: function onClick() {
              return t(!n);
            }
          }, {
            children: n ? "编辑" : "完成"
          }))
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
          className: "itemGroup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(qs, {
            list: g.shoppingGoodsList
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "dashboard"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
            className: "choose"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.SmoothCheckbox, Object.assign({
              onChange: h
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
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
          })), n ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
            className: "check"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
              className: "priceGroup"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
                className: "discount"
              }, {
                children: ["优惠: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
                  className: "data"
                }, {
                  children: ["￥ ", g.disMoney || 0]
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
                className: "all"
              }, {
                children: ["合计: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
                  className: "data"
                }, {
                  children: ["￥ ", m.amount]
                }))]
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
              onClick: p,
              className: "btn"
            }, {
              children: ["结算(", m.num, ")"]
            }))]
          })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
            className: "del"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
              onClick: N,
              className: "btn"
            }, {
              children: "删除"
            }))
          }))]
        }))]
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
        className: "noData"
      }, {
        children: "购物车空空如也~"
      }))
    }));
  },
  Xs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref58) {
    var s = _ref58.refreshNum;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.StoreProvider, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Zs, {
        refreshNum: s
      })
    });
  }),
  Ys = function Ys() {
    var _o62 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      a = _o62.View,
      c = _o62.Text,
      i = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([{
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
      }]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
      className: "menuList"
    }, {
      children: i.current.map(function (i, n) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
          className: "menuListItem",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ue[i.link]);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
            className: "lPart"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
              value: i.icon
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
              className: "label"
            }, {
              children: i.label
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
            value: "xiangyou1"
          })]
        }), n);
      })
    }));
  },
  Js = function Js() {
    var _o63 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      a = _o63.View,
      c = _o63.Text,
      i = _o63.Badge;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.getContractNumbers)().then(function (e) {
        console.log("----------", e);
      });
    }, []);
    var l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([{
      badge: 0,
      label: "待付款",
      icon: "daifukuan",
      link: ""
    }, {
      badge: 0,
      label: "待发货",
      icon: "daifahuo",
      link: ""
    }, {
      badge: 0,
      label: "待收货",
      icon: "daishouhuo",
      link: ""
    }, {
      badge: 0,
      label: "已完成",
      icon: "yiwancheng",
      link: ""
    }, {
      badge: 0,
      label: "退换/售后",
      icon: "shouhou",
      link: ""
    }]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ue.order);
          }
        }, {
          children: "查看全部"
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
        className: "content"
      }, {
        children: l.current.map(function (n, t) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ue.order, "?id=").concat(t + 1));
            },
            className: "contentItem"
          }, {
            children: [n.badge ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              content: n.badge,
              color: "#000",
              style: {
                color: "#fff",
                fontSize: 12
              }
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
                value: n.icon
              })
            })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
              value: n.icon
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
              className: "subTitle"
            }, {
              children: n.label
            }))]
          }), t);
        })
      }))]
    }));
  },
  $s = "400-990-3366",
  _s = function _s() {
    return be(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee10() {
      var e;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if ((0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)()) {
              _context10.next = 2;
              break;
            }
            return _context10.abrupt("return");
          case 2:
            _context10.next = 4;
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)();
          case 4:
            e = _context10.sent;
            e.showActionSheet({
              itemList: ["\u5BA2\u670D\u7535\u8BDD ".concat($s)],
              success: function success() {
                e.makePhoneCall({
                  phoneNumber: $s,
                  fail: function fail(e) {
                    console.log(e);
                  }
                });
              },
              fail: function fail(e) {
                console.log(e);
              }
            });
          case 6:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
  },
  ea = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref59) {
    var a = _ref59.avatarStyle,
      _ref59$userAvatar = _ref59.userAvatar,
      c = _ref59$userAvatar === void 0 ? "" : _ref59$userAvatar,
      _ref59$userNickname = _ref59.userNickname,
      i = _ref59$userNickname === void 0 ? "用户名" : _ref59$userNickname,
      n = _ref59.banner;
    var _o64 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      t = _o64.View,
      l = _o64.Text,
      r = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      className: "mine",
      style: {
        height: r ? "100%" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "topBoard"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
          value: "shezhi",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ue.setting);
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
          value: "kehufuwukefu",
          onClick: _s
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "userSetting",
        onClick: function onClick() {
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ue.setting);
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
          className: "lPart"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
            className: "name"
          }, {
            children: i || "用户名称"
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
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Js, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ys, {}), n ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        className: "banner",
        src: "",
        alt: ""
      }) : null]
    }));
  }),
  sa = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  aa = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref60) {
    var a = _ref60.code;
    var _o65 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      c = _o65.View,
      i = _o65.Text,
      n = _o65.Radio,
      _ge = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderResult)(a),
      t = _ge.paymentImpl,
      l = _ge.channelList,
      r = _ge.contract,
      d = _ge.handleRadio,
      g = _ge.loading;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "paymentModeWrap",
      style: {
        height: sa ? "inherit" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "paymentMode"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "topInfo"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
            className: "title"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
              value: "roundcheck"
            }), "订单提交成功"]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "info"
          }, {
            children: ["订单号：", r.current.contractBillcode, " | 总金额：", r.current.dataBmoney, "元"]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "paymentGroup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.SmoothRadio, Object.assign({
            onChange: d
          }, {
            children: l.map(function (a) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                className: "paymentItem"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
                  value: a.icon
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                    className: "base"
                  }, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
                      children: a.fchannelName
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
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
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.WrapLoading, Object.assign({
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
  ca = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o66 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.useComponent)(),
      s = _o66.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      clasName: "footprint"
    }, {
      children: 123123
    }));
  });


/***/ }),

/***/ "./src/components/dynamicComponent.tsx":
/*!*********************************************!*\
  !*** ./src/components/dynamicComponent.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/noop.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var s_material_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! s-material-react */ "../../qj/qj-mobile-react/packages/s-material-react/dist/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


var _excluded = ["node", "base", "topPage"];






var DynamicComponent = function DynamicComponent(_ref) {
  var node = _ref.node,
    base = _ref.base,
    topPage = _ref.topPage,
    rest = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);
  var safeArea = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('safeArea');
  var tabBarH = topPage ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('tabBarHeight') : 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: node.map(function (_ref2) {
      var id = _ref2.id,
        _ref2$props = _ref2.props,
        props = _ref2$props === void 0 ? {} : _ref2$props,
        type = _ref2.type;
      var MaterialsComponent = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(s_material_react__WEBPACK_IMPORTED_MODULE_4__, type, lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"]);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "monitor-node",
        style: {
          height: base ? '' : "calc(100vh - ".concat(safeArea, "px - ").concat(tabBarH, "px)")
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MaterialsComponent, (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, props), rest))
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

/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brushes/utils */ "./node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @brushes/simulate-component */ "./node_modules/@brushes/simulate-component/dist/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/last.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);











var env = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getEnv();
var HeaderJsx = function HeaderJsx(_ref) {
  var slot = _ref.slot;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
    _useState2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useRouter = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
    path = _useRouter.path;
  var isHiddenHeader = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (env === 'WEAPP') return true;
    return /^\/pages/.test(path);
  }, [path]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var lastConfig = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentPages());
    var navigationBarTitleText = lastConfig.config.navigationBarTitleText;
    setTitle(navigationBarTitleText);
  }, [path]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: isHiddenHeader ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: 'header',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_7__.IconMobile, {
        style: {
          fontSize: 20
        },
        value: 'xiangzuo',
        onClick: function onClick() {
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.navigatorBackImpl)(-1);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: 'title',
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
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

/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _dynamicComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamicComponent */ "./src/components/dynamicComponent.tsx");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header */ "./src/components/header.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["route"];






var CommonJsx = function CommonJsx(_ref) {
  var route = _ref.route,
    rest = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, _excluded);
  var node = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.usePageConfig)(route);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dynamicComponent__WEBPACK_IMPORTED_MODULE_1__["default"], (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  checkHasLogined: checkHasLogined,
  // wxaCode: wxaCode,
  // login: login,
  // loginOut: loginOut,
  checkAndAuthorize: checkAndAuthorize
  // authorize: authorize,
  // bindSeller: bindSeller
});

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkMobile": function() { return /* reexport safe */ _validator__WEBPACK_IMPORTED_MODULE_1__.checkMobile; },
/* harmony export */   "safeArea": function() { return /* reexport safe */ _safeArea__WEBPACK_IMPORTED_MODULE_2__.safeArea; }
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/utils/auth.ts");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./src/utils/validator.ts");
/* harmony import */ var _safeArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safeArea */ "./src/utils/safeArea.ts");




/***/ }),

/***/ "./src/utils/menuData.ts":
/*!*******************************!*\
  !*** ./src/utils/menuData.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/utils/safeArea.ts":
/*!*******************************!*\
  !*** ./src/utils/safeArea.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkMobile": function() { return /* binding */ checkMobile; }
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

/***/ }),

/***/ "../../qj/lerna-repo/packages/qj-mobile-store/dist/index.js":
/*!******************************************************************!*\
  !*** ../../qj/lerna-repo/packages/qj-mobile-store/dist/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreProvider": function() { return /* binding */ De; },
/* harmony export */   "goodsDetailStore": function() { return /* binding */ ge; },
/* harmony export */   "navigatorHandler": function() { return /* binding */ Ye; },
/* harmony export */   "orderStatusImpl": function() { return /* binding */ _e; },
/* harmony export */   "orderStatusList": function() { return /* binding */ Je; },
/* harmony export */   "routerMap": function() { return /* binding */ Se; },
/* harmony export */   "useAddCoupon": function() { return /* binding */ Oe; },
/* harmony export */   "useAddShopping": function() { return /* binding */ be; },
/* harmony export */   "useAddressList": function() { return /* binding */ Ie; },
/* harmony export */   "useCartList": function() { return /* binding */ je; },
/* harmony export */   "useCouponList": function() { return /* binding */ xe; },
/* harmony export */   "useCube": function() { return /* binding */ Ee; },
/* harmony export */   "useDispatchImpl": function() { return /* binding */ Me; },
/* harmony export */   "useEditAddress": function() { return /* binding */ Le; },
/* harmony export */   "useEvaluateDetail": function() { return /* binding */ Qe; },
/* harmony export */   "useGoodsClassify": function() { return /* binding */ Ke; },
/* harmony export */   "useGoodsDetailImpl": function() { return /* binding */ ke; },
/* harmony export */   "useGoodsList": function() { return /* binding */ Fe; },
/* harmony export */   "useOrderDetail": function() { return /* binding */ ze; },
/* harmony export */   "useOrderOperate": function() { return /* binding */ Ue; },
/* harmony export */   "useOrderResult": function() { return /* binding */ Re; },
/* harmony export */   "useOrderResultResult": function() { return /* binding */ Ve; },
/* harmony export */   "useOverdue": function() { return /* binding */ Ae; },
/* harmony export */   "usePlaceOrder": function() { return /* binding */ Te; },
/* harmony export */   "useStore": function() { return /* binding */ Pe; },
/* harmony export */   "useUnused": function() { return /* binding */ Be; },
/* harmony export */   "useUsed": function() { return /* binding */ Ge; }
/* harmony export */ });
/* unused harmony exports detailButton, makeStore, useCollectionList, useExpressInfo, useFootprint */
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qj-b2c-api */ "../../qj/lerna-repo/packages/qj-mobile-store/node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brushes/utils */ "../../qj/lerna-repo/node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/groupBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/noop.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/set.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/isUndefined.js");
/* provided dependency */ var document = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["document"];








function ae(c, i) {
  var r = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),
    s = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
  return [function (_ref) {
    var o = _ref.children;
    var _t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(c, i),
      _t2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_t, 2),
      n = _t2[0],
      d = _t2[1];
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r.Provider, Object.assign({
      value: d
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s.Provider, Object.assign({
        value: n
      }, {
        children: o
      }))
    }));
  }, function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(s);
  }, function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(r);
  }];
}
var _ae = ae(function (e, o) {
    switch (o.type) {
      case "plus":
        return Object.assign(Object.assign({}, e), {
          count: e.count + 1
        });
      case "minus":
        return Object.assign(Object.assign({}, e), {
          count: e.count - 1
        });
      case "select":
      case "initGoods":
      case "popupImpl":
        return Object.assign(Object.assign({}, e), o.payload);
      default:
        return e;
    }
  }, {
    count: 1,
    orderType: 0,
    isNeedButton: !1,
    popupVisible: !1,
    goodsNum: 1,
    goodsCode: ""
  }),
  _ae2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ae, 3),
  le = _ae2[0],
  ue = _ae2[1],
  pe = _ae2[2];
var ge = Object.freeze({
  __proto__: null,
  StoreProvider: le,
  useStore: ue,
  useDispatchImpl: pe
});
function me(e, o, t, n) {
  return new (t || (t = Promise))(function (c, i) {
    function r(e) {
      try {
        d(n.next(e));
      } catch (e) {
        i(e);
      }
    }
    function s(e) {
      try {
        d(n.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function d(e) {
      var o;
      e.done ? c(e.value) : (o = e.value, o instanceof t ? o : new t(function (e) {
        e(o);
      })).then(r, s);
    }
    d((n = n.apply(e, o || [])).next());
  });
}
var ye = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
  ve = function ve(e, o) {
    return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee() {
      var t;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            t = {
              specStr: JSON.stringify(e),
              goodsCode: o
            };
            _context.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.addShoppingGoodsBySpec)(t);
          case 3:
            return _context.abrupt("return", _context.sent);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  },
  fe = function fe(e, o) {
    return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee2() {
      var t;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            t = {
              skuId: e,
              goodsNum: o
            };
            _context2.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.addShoppingGoods)(t);
          case 3:
            return _context2.abrupt("return", _context2.sent);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
  },
  he = function he(e, o) {
    return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee3() {
      var t;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            t = {
              skuId: e,
              goodsNum: o,
              isLocalMock: !ye
            };
            _context3.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryToContract)(t);
          case 3:
            return _context3.abrupt("return", _context3.sent);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
  },
  Ce = function Ce(e) {
    return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee4() {
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getTotalDiscountPrice)(e);
          case 2:
            return _context4.abrupt("return", _context4.sent);
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
  },
  Se = {
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
    classify: "/pages/classify/index",
    expressInfo: "/subpackage/expressinfo/index",
    evaluateDetail: "/subpackage/ratedetail/index"
  };
function be() {
  var _this = this;
  var _ue = ue(),
    e = _ue.count,
    o = _ue.spec,
    t = _ue.orderType,
    n = _ue.popupVisible,
    c = _ue.isNeedButton,
    i = _ue.goodsCode,
    r = pe(),
    s = function s() {
      r({
        type: "popupImpl",
        payload: {
          popupVisible: !n
        }
      });
    },
    d = function d() {
      return me(_this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee5() {
        var _t3, _n, _c;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return ve(o, i);
            case 3:
              _t3 = _context5.sent;
              _n = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_t3, "dataObj.skuId");
              _context5.next = 7;
              return fe(_n, e);
            case 7:
              _c = _context5.sent;
              _context5.next = 10;
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.sucMessage)(_c.msg || "添加成功");
            case 10:
              s();
              _context5.next = 17;
              break;
            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](0);
              _context5.next = 17;
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.errMessage)("无法登录");
            case 17:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 13]]);
      }));
    },
    a = function a() {
      return me(_this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee6() {
        var t, n;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return ve(o, i);
            case 2:
              t = _context6.sent;
              n = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(t, "dataObj.skuId");
              (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Se.confirm, "?skuId=").concat(n, "&goodsNum=").concat(e));
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
    };
  return {
    count: e,
    spec: o,
    popupVisible: n,
    isNeedButton: c,
    handleChooseSize: function handleChooseSize(e, t) {
      o[t] = e, r({
        type: "select",
        payload: {
          spec: o
        }
      });
    },
    handleStep: function handleStep(e) {
      r({
        type: e
      });
    },
    addShoppingImpl: function addShoppingImpl() {
      0 === t ? d() : a();
    },
    popupHandler: s
  };
}
var ke = function ke(e) {
    var _c2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c3 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c2, 2),
      o = _c3[0],
      t = _c3[1],
      _c4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c5 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c4, 2),
      n = _c5[0],
      s = _c5[1],
      _c6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c7 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c6, 2),
      d = _c7[0],
      a = _c7[1],
      _c8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c9 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c8, 2),
      l = _c9[0],
      u = _c9[1],
      _c10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _c11 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c10, 2),
      p = _c11[0],
      h = _c11[1],
      _c12 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c13 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c12, 2),
      C = _c13[0],
      S = _c13[1],
      _c14 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c15 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c14, 2),
      b = _c15[0],
      k = _c15[1],
      _c16 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c17 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c16, 2),
      O = _c17[0],
      N = _c17[1],
      _c18 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c19 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c18, 2),
      L = _c19[0],
      I = _c19[1],
      D = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({}),
      P = pe();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee7() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return M();
            case 2:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
    }, []);
    var M = function M() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee8() {
          var o, _n2, _ref2, _c20, _i, _r, _s, _d;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                o = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
                _context8.prev = 1;
                _context8.next = 4;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getResourceGoodsInfoBySkuCode)({
                  skuCode: e,
                  isLocalMock: !o
                });
              case 4:
                _n2 = _context8.sent;
                t(_n2);
                _ref2 = function (e) {
                  var o = {
                      skuNo: e.skuNo || "",
                      skuCode: e.rsSkuDomainList[0].skuCode || "",
                      classtreeCode: e.classtreeCode || "",
                      brandCode: e.brandCode || "",
                      pntreeCode: e.pntreeCode || "",
                      memberCode: e.memberCode || ""
                    },
                    _e$rsGoodsFileDomainL = e.rsGoodsFileDomainList,
                    t = _e$rsGoodsFileDomainL === void 0 ? [] : _e$rsGoodsFileDomainL,
                    _e$rsSpecValueDomainL = e.rsSpecValueDomainList,
                    n = _e$rsSpecValueDomainL === void 0 ? [] : _e$rsSpecValueDomainL,
                    _e$goodsCode = e.goodsCode,
                    c = _e$goodsCode === void 0 ? "" : _e$goodsCode,
                    i = e.goodsNum;
                  return {
                    pListParams: o,
                    arr: t,
                    skuList: n,
                    goodsCode: c,
                    goodsNum: i
                  };
                }(_n2), _c20 = _ref2.pListParams, _i = _ref2.arr, _r = _ref2.skuList, _s = _ref2.goodsCode, _d = _ref2.goodsNum;
                D.current = _c20, x(_i), j(_r, _s, _d), A(_c20, _s, _n2);
                _context8.next = 13;
                break;
              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](1);
                console.log(59, _context8.t0);
              case 13:
              case "end":
                return _context8.stop();
            }
          }, _callee8, null, [[1, 10]]);
        }));
      },
      j = function j(e, o, t) {
        var n = function (e) {
          var o = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(e, "specName");
          return o ? Object.keys(o).map(function (e) {
            return {
              skuName: e,
              skuOption: o[e]
            };
          }) : [];
        }(e);
        k(n);
        var c = n.map(function (e) {
          return (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(e, "skuOption[0].specValueValue");
        });
        P({
          type: "initGoods",
          payload: {
            spec: c,
            goodsCode: o,
            goodsNum: t
          }
        });
      },
      x = function x(e) {
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(e)) return;
        var o = e.map(function (e) {
          return {
            imgUrl: e.goodsFileUrl,
            link: ""
          };
        });
        u(o);
      },
      B = function B(e) {
        return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryCouponListBySkuCode)(e);
      },
      G = function G(e) {
        return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryEvaluateGoodsPagetrue)({
          goodsCode: e,
          page: 1,
          rows: 10
        });
      },
      A = function A(e, o, t) {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee9() {
          var _yield$Promise$all, _yield$Promise$all2, _yield$Promise$all2$, _i2, _yield$Promise$all2$2, _r2, _yield$Promise$all2$3, _d2, n, c;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return Promise.all([(c = e, (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryPromotionListByGoodsCode)(c)), G(o), B(e), (n = t, (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveFootprint)({
                  footprintType: 0,
                  footprintOpcode: n.rsSkuDomainList[0].skuCode,
                  footprintOppic: n.dataPic,
                  footprintOpcont: n.goodsName,
                  footprintOpnum: n.pricesetNprice,
                  footprintOpurl: ""
                }))]);
              case 3:
                _yield$Promise$all = _context9.sent;
                _yield$Promise$all2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_yield$Promise$all, 3);
                _yield$Promise$all2$ = _yield$Promise$all2[0];
                _i2 = _yield$Promise$all2$ === void 0 ? [] : _yield$Promise$all2$;
                _yield$Promise$all2$2 = _yield$Promise$all2[1];
                _r2 = _yield$Promise$all2$2 === void 0 ? {} : _yield$Promise$all2$2;
                _yield$Promise$all2$3 = _yield$Promise$all2[2];
                _d2 = _yield$Promise$all2$3 === void 0 ? [] : _yield$Promise$all2$3;
                s(_i2), N(_r2.list), I(_d2);
                _context9.next = 17;
                break;
              case 14:
                _context9.prev = 14;
                _context9.t0 = _context9["catch"](0);
                console.log(123, _context9.t0);
              case 17:
              case "end":
                return _context9.stop();
            }
          }, _callee9, null, [[0, 14]]);
        }));
      };
    return {
      promotionArr: n,
      checkCollectionObj: d,
      setCheckCollectionObj: a,
      sliderArr: l,
      tabActive: p,
      setTabActive: h,
      popupVisible: C,
      setPopupVisible: S,
      goods: o,
      goodSku: b,
      evaluateArr: O,
      coupon: L,
      queryCouponImpl: function queryCouponImpl() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee10() {
          var _e2;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return B(D.current);
              case 3:
                _e2 = _context10.sent;
                I(_e2);
                _context10.next = 9;
                break;
              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](0);
              case 9:
              case "end":
                return _context10.stop();
            }
          }, _callee10, null, [[0, 7]]);
        }));
      }
    };
  },
  Oe = function Oe() {
    var _c21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c22 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c21, 2),
      e = _c22[0],
      o = _c22[1];
    return {
      save: function save(t) {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee11() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                _context11.t0 = e;
                if (_context11.t0) {
                  _context11.next = 5;
                  break;
                }
                _context11.next = 4;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveUsercoupon)(t);
              case 4:
                o(!0);
              case 5:
              case "end":
                return _context11.stop();
            }
          }, _callee11);
        }));
      },
      isPick: e
    };
  },
  Ne = "00000017";
function Le(e, o, t) {
  var _this2 = this;
  var _o$useForm = o.useForm(),
    _o$useForm2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_o$useForm, 1),
    n = _o$useForm2[0],
    _c23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1"),
    _c24 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c23, 2),
    i = _c24[0],
    s = _c24[1],
    _c25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
    _c26 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c25, 2),
    d = _c26[0],
    a = _c26[1],
    _c27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      provinceCode: "",
      provinceName: "",
      cityCode: "",
      cityName: "",
      areaCode: "",
      areaName: ""
    }),
    _c28 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c27, 2),
    l = _c28[0],
    u = _c28[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    e || !t ? p() : (n.setFieldValue("addressDefault", i), a(!1));
  }, []);
  var p = function p() {
    (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getAddress)({
      addressId: e,
      isLocalMock: !t
    }).then(function (e) {
      var o = {
        provinceCode: e.provinceCode,
        cityCode: e.cityCode,
        areaCode: e.areaCode,
        provinceName: e.provinceName,
        cityName: e.cityName,
        areaName: e.areaName
      };
      u(o), s(e.addressDefault), n.setFieldValue("addressMember", e.addressMember), n.setFieldValue("addressPhone", e.addressPhone), n.setFieldValue("addressDetail", e.addressDetail), n.setFieldValue("area", o), n.setFieldValue("addressDefault", e.addressDefault), n.validateFields(), a(!1);
    });
  };
  return {
    skullShow: d,
    form: n,
    area: l,
    setArea: u,
    userCode: Ne,
    defaultAddress: i,
    handleArea: function handleArea(e) {
      var o = e.detail.code,
        t = e.detail.value,
        c = {
          provinceCode: o[0],
          cityCode: o[1],
          areaCode: o[2],
          provinceName: t[0],
          cityName: t[1],
          areaName: t[2]
        };
      u(c), n.setFieldValue("area", c), n.validateFields();
    },
    handleDefaultAddress: function handleDefaultAddress(e) {
      s(e.detail.value ? "1" : "0");
    },
    handleFinish: function handleFinish(o) {
      return me(_this2, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee12() {
        var t, n;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              t = Object.assign(o, o.area);
              delete t.area;
              _context12.prev = 2;
              _context12.next = 5;
              return n = Object.assign(Object.assign({}, t), {
                userCode: Ne
              }), e ? (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.updateAddress)(Object.assign({
                addressId: e
              }, n)) : (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveAddress)(n);
            case 5:
              (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorBackImpl)(-1);
              _context12.next = 10;
              break;
            case 8:
              _context12.prev = 8;
              _context12.t0 = _context12["catch"](2);
            case 10:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[2, 8]]);
      }));
    }
  };
}
function Ie(e) {
  var _this3 = this;
  var _c29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c30 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c29, 2),
    o = _c30[0],
    t = _c30[1],
    _c31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
    _c32 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c31, 2),
    n = _c32[0],
    i = _c32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    s();
  }, [e]);
  var s = function s() {
      return me(_this3, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee13() {
        var e, o;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              e = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
              console.log(8888888, e);
              _context13.next = 4;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryAddressBymerberCode)({
                isLocalMock: !e
              });
            case 4:
              o = _context13.sent;
              t(o), i(!1);
            case 6:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
    },
    d = function d(e, o) {
      var t = o[e];
      return console.log(t), o[e] = o[0], o[e].addressDefault = "0", o[0] = t, o[0].addressDefault = "1", console.log(111111, o), (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(o);
    };
  return {
    list: o,
    skullShow: n,
    delAddress: function delAddress(e) {
      null === wx || void 0 === wx || wx.showModal({
        title: "提示",
        content: "确认删除该地址吗？",
        success: function success(o) {
          return me(_this3, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee14() {
            return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.t0 = null == o ? void 0 : o.confirm;
                  if (!_context14.t0) {
                    _context14.next = 6;
                    break;
                  }
                  _context14.next = 4;
                  return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.deleteAddress)({
                    addressId: e.addressId
                  });
                case 4:
                  _context14.next = 6;
                  return s();
                case 6:
                case "end":
                  return _context14.stop();
              }
            }, _callee14);
          }));
        }
      });
    },
    setDefault: function setDefault(e, n) {
      return me(_this3, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee15() {
        var _c33, _i3, _r3, _a, _l, _u, _p, _g, _m, _y, _v, _f, _h;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              if (!("1" !== e.addressDefault)) {
                _context15.next = 7;
                break;
              }
              _c33 = e.addressMember, _i3 = e.addressPhone, _r3 = e.provinceCode, _a = e.provinceName, _l = e.cityCode, _u = e.cityName, _p = e.areaCode, _g = e.areaName, _m = e.addressDetail, _y = e.addressId, _v = e.addressCode, _f = e.dataState, _h = {
                addressMember: _c33,
                addressPhone: _i3,
                provinceCode: _r3,
                provinceName: _a,
                cityCode: _l,
                cityName: _u,
                areaCode: _p,
                areaName: _g,
                addressDetail: _m,
                addressId: _y,
                addressCode: _v,
                dataState: _f,
                addressDefault: "1"
              };
              t(d(n, o));
              _context15.next = 5;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.updateAddress)(_h);
            case 5:
              _context15.next = 7;
              return s();
            case 7:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
    }
  };
}
var _ae3 = ae(function (e, o) {
    return "select" === o.type ? Object.assign(Object.assign({}, e), {
      select: o.payload
    }) : e;
  }, {
    count: 1,
    select: []
  }),
  _ae4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ae3, 3),
  De = _ae4[0],
  Pe = _ae4[1],
  Me = _ae4[2],
  je = function je(e) {
    var o = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
      t = Me(),
      _Pe = Pe(),
      n = _Pe.select,
      d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
      _c34 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        shoppingGoodsList: [],
        disMoney: 0
      }),
      _c35 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c34, 2),
      a = _c35[0],
      l = _c35[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee16() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return u("isFirst");
            case 2:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
    }, [e]);
    var u = function u() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee17() {
          var n, c;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryShoppingPage)({
                  isLocalMock: !o
                });
              case 2:
                n = _context17.sent;
                c = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(n, "rows[0].shoppingpackageList[0]", {
                  shoppingGoodsList: [],
                  disMoney: 0
                });
                d.current = c.shoppingGoodsList.map(function (e) {
                  return e.shoppingGoodsId + "";
                }), e && t({
                  type: "select",
                  payload: d.current
                }), l(c);
              case 5:
              case "end":
                return _context17.stop();
            }
          }, _callee17);
        }));
      },
      p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        var e = 0,
          o = 0;
        return a.shoppingGoodsList.forEach(function (t) {
          n.includes(t.shoppingGoodsId + "") && (e += t.goodsCamount, o += t.goodsCamount * t.pricesetNprice);
        }), {
          num: e,
          amount: o
        };
      }, [n, a]);
    return {
      cartList: a,
      amount: p,
      selectAll: function selectAll(e) {
        t({
          type: "select",
          payload: e.detail.value.includes("true") ? d.current : []
        });
      },
      allCart: d,
      updateImpl: function updateImpl(e, o) {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee18() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _context18.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.updateShoppingGoodsNum)({
                  shoppingGoodsId: e,
                  amount: o,
                  goodWeight: 0
                });
              case 3:
                _context18.next = 5;
                return u();
              case 5:
                _context18.next = 10;
                break;
              case 7:
                _context18.prev = 7;
                _context18.t0 = _context18["catch"](0);
                console.log(_context18.t0);
              case 10:
              case "end":
                return _context18.stop();
            }
          }, _callee18, null, [[0, 7]]);
        }));
      },
      toOrderImpl: function toOrderImpl() {
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Se.confirm, "?shoppingGoodsId=").concat(n.join(",")));
      },
      select: n,
      deleteCart: function deleteCart() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee19() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
              case 0:
                _context19.prev = 0;
                _context19.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.deleteShoppingGoodsBatch)({
                  shoppingGoodsIdStr: JSON.stringify(n)
                });
              case 3:
                _context19.next = 5;
                return u();
              case 5:
                _context19.next = 10;
                break;
              case 7:
                _context19.prev = 7;
                _context19.t0 = _context19["catch"](0);
                console.log(_context19.t0);
              case 10:
              case "end":
                return _context19.stop();
            }
          }, _callee19, null, [[0, 7]]);
        }));
      }
    };
  },
  xe = function xe() {
    var _c36 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _c37 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c36, 2),
      e = _c37[0],
      o = _c37[1];
    return {
      config: (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([{
        id: 1,
        label: "未使用"
      }, {
        id: 2,
        label: "已使用"
      }, {
        id: 3,
        label: "已失效"
      }]),
      coe: e,
      setCoe: o
    };
  },
  Be = function Be() {
    var _c38 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c39 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c38, 2),
      e = _c39[0],
      o = _c39[1],
      t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee20() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return n();
            case 2:
            case "end":
              return _context20.stop();
          }
        }, _callee20);
      }));
    }, []);
    var n = function n() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee21() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee21$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
              case 0:
                t.current = 1;
                o([]);
                _context21.next = 4;
                return s();
              case 4:
              case "end":
                return _context21.stop();
            }
          }, _callee21);
        }));
      },
      s = function s() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee22() {
          var _e3;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
              case 0:
                _context22.prev = 0;
                _context22.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUsercouponPageForC)({
                  page: t.current,
                  rows: 100,
                  dataState: 0,
                  pbCode: "0004,0005"
                });
              case 3:
                _e3 = _context22.sent;
                o(_e3.list), t.current += 1;
                _context22.next = 10;
                break;
              case 7:
                _context22.prev = 7;
                _context22.t0 = _context22["catch"](0);
                console.log(_context22.t0);
              case 10:
              case "end":
                return _context22.stop();
            }
          }, _callee22, null, [[0, 7]]);
        }));
      };
    return {
      unusedList: e,
      getData: s,
      init: n
    };
  },
  Ge = function Ge() {
    var _c40 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c41 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c40, 2),
      e = _c41[0],
      o = _c41[1],
      t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee23() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return n();
            case 2:
            case "end":
              return _context23.stop();
          }
        }, _callee23);
      }));
    }, []);
    var n = function n() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee24() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee24$(_context24) {
            while (1) switch (_context24.prev = _context24.next) {
              case 0:
                t.current = 1;
                o([]);
                _context24.next = 4;
                return s();
              case 4:
              case "end":
                return _context24.stop();
            }
          }, _callee24);
        }));
      },
      s = function s() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee25() {
          var _e4;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee25$(_context25) {
            while (1) switch (_context25.prev = _context25.next) {
              case 0:
                _context25.prev = 0;
                _context25.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUsercouponPageForC)({
                  page: t.current,
                  rows: 100,
                  dataState: 1,
                  pbCode: "0004,0005"
                });
              case 3:
                _e4 = _context25.sent;
                o(_e4.list), t.current += 1;
                _context25.next = 10;
                break;
              case 7:
                _context25.prev = 7;
                _context25.t0 = _context25["catch"](0);
                console.log(_context25.t0);
              case 10:
              case "end":
                return _context25.stop();
            }
          }, _callee25, null, [[0, 7]]);
        }));
      };
    return {
      usedList: e,
      getData: s,
      init: n
    };
  },
  Ae = function Ae() {
    var _c42 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c43 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c42, 2),
      e = _c43[0],
      o = _c43[1],
      t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee26() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              _context26.next = 2;
              return n();
            case 2:
            case "end":
              return _context26.stop();
          }
        }, _callee26);
      }));
    }, []);
    var n = function n() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee27() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee27$(_context27) {
            while (1) switch (_context27.prev = _context27.next) {
              case 0:
                t.current = 1;
                o([]);
                _context27.next = 4;
                return s();
              case 4:
              case "end":
                return _context27.stop();
            }
          }, _callee27);
        }));
      },
      s = function s() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee28() {
          var _e5;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee28$(_context28) {
            while (1) switch (_context28.prev = _context28.next) {
              case 0:
                _context28.prev = 0;
                _context28.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUsercouponPageForC)({
                  page: t.current,
                  rows: 100,
                  dataState: 2,
                  pbCode: "0004,0005"
                });
              case 3:
                _e5 = _context28.sent;
                o(_e5.list), t.current += 1;
                _context28.next = 10;
                break;
              case 7:
                _context28.prev = 7;
                _context28.t0 = _context28["catch"](0);
                console.log(_context28.t0);
              case 10:
              case "end":
                return _context28.stop();
            }
          }, _callee28, null, [[0, 7]]);
        }));
      };
    return {
      overdueList: e,
      getData: s,
      init: n
    };
  };
function we(e) {
  var o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  return o.current = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(e) ? e : lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"], (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return o.current.apply(o, arguments);
  }, [o]);
}
var Fe = function Fe(e, o, t) {
  console.log("19999=======>");
  var n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!0),
    s = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0),
    _c44 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c45 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c44, 2),
    d = _c45[0],
    a = _c45[1],
    _c46 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
    _c47 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c46, 2),
    l = _c47[0],
    u = _c47[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    p();
  }, [t]);
  var p = we(function () {
      s.current = 0, n.current = !0, a([]), g(t);
    }),
    g = we(function (_ref3) {
      var _ref3$sortField = _ref3.sortField,
        t = _ref3$sortField === void 0 ? "pricesetNprice" : _ref3$sortField,
        _ref3$order = _ref3.order,
        c = _ref3$order === void 0 ? "" : _ref3$order;
      return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee29() {
        var i;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              if (n.current) {
                _context29.next = 2;
                break;
              }
              return _context29.abrupt("return");
            case 2:
              ++s.current, u(!0);
              _context29.next = 5;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.find)({
                distinctField: "goodsNo",
                sortField: t,
                order: c,
                goodsType: "00,50",
                page: s.current,
                rows: 10,
                searchParam: o,
                classtreeCode: e
              });
            case 5:
              i = _context29.sent;
              (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(i.list) && (n.current = !1), u(!1), a(function (e) {
                return e.concat(i.list);
              });
            case 7:
            case "end":
              return _context29.stop();
          }
        }, _callee29);
      }));
    });
  return {
    loading: l,
    getData: g,
    list: d
  };
};
function Re(e) {
  var _this4 = this;
  var _c48 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
    _c49 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c48, 2),
    o = _c49[0],
    t = _c49[1],
    n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),
    s = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
    _c50 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c51 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c50, 2),
    d = _c51[0],
    a = _c51[1],
    l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({}),
    u = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
      dataBmoney: "",
      contractBillcode: ""
    });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      me(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee30() {
        var o, _t4, _n3;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              _context30.prev = 0;
              _context30.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.syncContractState)({
                contractBillcode: e,
                isLocalMock: !s
              });
            case 3:
              _t4 = _context30.sent;
              u.current = _t4.dataObj;
              _context30.next = 7;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveOrderToPay)({
                contractBillcode: null !== (o = u.current.contractBillcode) && void 0 !== o ? o : "",
                isLocalMock: !s
              });
            case 7:
              _n3 = _context30.sent;
              a(_n3.payChannelList), l.current = _n3;
              _context30.next = 14;
              break;
            case 11:
              _context30.prev = 11;
              _context30.t0 = _context30["catch"](0);
              console.log(_context30.t0);
            case 14:
            case "end":
              return _context30.stop();
          }
        }, _callee30, null, [[0, 11]]);
      }));
    })();
  }, []);
  var p = function p(e, o) {
      return e.find(function (e) {
        return e.fchannelCode === o;
      }) || {};
    },
    g = function g() {
      return me(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee31() {
        var _ref4, e, o, c, i, r;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              _ref4 = function () {
                t(!0);
                var _l$current = l.current,
                  e = _l$current.ptradeSeqno,
                  o = _l$current.contractBlance,
                  c = _l$current.payChannelList,
                  _p2 = p(c, n.current),
                  i = _p2.fchannelCode,
                  _p2$faccountOuterNo = _p2.faccountOuterNo,
                  r = _p2$faccountOuterNo === void 0 ? "" : _p2$faccountOuterNo;
                return {
                  ptradeSeqno: e,
                  contractBlance: o,
                  fchannelCode: i,
                  faccountOuterNo: r
                };
              }(), e = _ref4.ptradeSeqno, o = _ref4.contractBlance, c = _ref4.fchannelCode, i = _ref4.faccountOuterNo, r = [{
                faccountIdType: "ACCOUNT",
                fchannelCode: c,
                orderAmount: u.current.dataBmoney,
                faccountId: i
              }];
              _context31.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.paymentCommit)({
                ptradeSeqno: e,
                payCommitStr: JSON.stringify(r),
                contractBlance: o
              });
            case 3:
              return _context31.abrupt("return", _context31.sent);
            case 4:
            case "end":
              return _context31.stop();
          }
        }, _callee31);
      }));
    },
    m = function m() {
      return me(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee32() {
        var _e6;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              _context32.prev = 0;
              _context32.next = 3;
              return g();
            case 3:
              _e6 = _context32.sent;
              document.getElementById("v_html").innerHTML = "<div>" + _e6.dataObj.htmlStr + "</div>", document.forms[0].submit();
              _context32.next = 10;
              break;
            case 7:
              _context32.prev = 7;
              _context32.t0 = _context32["catch"](0);
              t(!1);
            case 10:
            case "end":
              return _context32.stop();
          }
        }, _callee32, null, [[0, 7]]);
      }));
    },
    y = function y() {
      return me(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee33() {
        var _e7;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              _context33.prev = 0;
              _context33.next = 3;
              return g();
            case 3:
              _e7 = _context33.sent;
              console.log(122, _e7), document.getElementById("v_html").innerHTML = "<div>" + _e7.dataObj.htmlStr + "</div>", document.getElementById("paaspaysubmit").submit();
              _context33.next = 10;
              break;
            case 7:
              _context33.prev = 7;
              _context33.t0 = _context33["catch"](0);
              t(!1);
            case 10:
            case "end":
              return _context33.stop();
          }
        }, _callee33, null, [[0, 7]]);
      }));
    },
    v = function v() {
      return me(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee34() {
        var _e8;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              _context34.prev = 0;
              _context34.next = 3;
              return g();
            case 3:
              _e8 = _context34.sent.dataObj.requestData;
              wx.requestPayment({
                timeStamp: _e8.timeStamp,
                nonceStr: _e8.nonceStr,
                package: _e8.package,
                signType: _e8.signType,
                paySign: _e8.paySign,
                success: function success(e) {
                  var o;
                  var t = null !== (o = u.current.contractBillcode) && void 0 !== o ? o : "";
                  (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Se.result, "?code=").concat(t));
                },
                fail: function fail(e) {
                  console.log(e, "失败参数"), t(!1);
                },
                complete: function complete(e) {
                  t(!1);
                }
              });
              _context34.next = 10;
              break;
            case 7:
              _context34.prev = 7;
              _context34.t0 = _context34["catch"](0);
              t(!1);
            case 10:
            case "end":
              return _context34.stop();
          }
        }, _callee34, null, [[0, 7]]);
      }));
    };
  return {
    paymentImpl: function paymentImpl() {
      switch (console.log(52, n.current), n.current) {
        case "wechatmini":
          v();
          break;
        case "wechatwap":
          y();
          break;
        case "alipaywap":
          m();
      }
    },
    channelList: d,
    handleRadio: function handleRadio(e) {
      n.current = e.detail.value;
    },
    contract: u,
    loading: o
  };
}
var $e = {
  contractSettlOpno: 0,
  promotionCodes: null,
  shoppingCountPrice: 0,
  totalDiscountPrice: 0,
  accountsSumPrice: 0,
  discount: 0,
  freight: 0,
  comDisMoney: 0,
  copyComDisMoney: 0
};
function Te(_ref5, n) {
  var _this5 = this;
  var e = _ref5.skuId,
    o = _ref5.goodsNum,
    t = _ref5.shoppingGoodsId;
  var s = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    _c52 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c53 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c52, 2),
    d = _c53[0],
    a = _c53[1],
    _c54 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _c55 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c54, 2),
    l = _c55[0],
    u = _c55[1],
    p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),
    g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    y = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    _c56 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _c57 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c56, 2),
    v = _c57[0],
    f = _c57[1],
    h = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
    C = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)($e),
    S = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      me(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee35() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              f(0);
              C.current = {
                contractSettlOpno: 0,
                promotionCodes: null,
                shoppingCountPrice: 0,
                totalDiscountPrice: 0,
                accountsSumPrice: 0,
                discount: 0,
                freight: 0,
                comDisMoney: 0,
                copyComDisMoney: 0
              };
              m.current = [];
              g.current = [];
              if (!t) {
                _context35.next = 9;
                break;
              }
              _context35.next = 7;
              return O(function () {
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryShoppingToContract)({
                  shoppingGoodsIdStr: "[".concat(t, "]")
                });
              });
            case 7:
              _context35.next = 11;
              break;
            case 9:
              _context35.next = 11;
              return O(function () {
                return he(e, o);
              });
            case 11:
            case "end":
              return _context35.stop();
          }
        }, _callee35);
      }));
    })();
  }, [n]);
  var b = function b() {
      return me(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee36() {
        var _e9;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              _context36.prev = 0;
              _context36.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUserConByGoods)({
                pmContractGoodsDomainListStr: JSON.stringify(m.current)
              });
            case 3:
              _e9 = _context36.sent;
              a(_e9), console.log(_e9);
              _context36.next = 10;
              break;
            case 7:
              _context36.prev = 7;
              _context36.t0 = _context36["catch"](0);
              console.log(74, _context36.t0);
            case 10:
            case "end":
              return _context36.stop();
          }
        }, _callee36, null, [[0, 7]]);
      }));
    },
    O = function O(e) {
      return me(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee37() {
        var o, _o, _o$, t, n, c;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              _context37.next = 2;
              return Promise.all([(0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryAddressBymerberCode)({
                isLocalMock: !h
              }), e()]);
            case 2:
              o = _context37.sent;
              _o = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(o, 2);
              _o$ = _o[0];
              t = _o$ === void 0 ? [] : _o$;
              n = _o[1];
              c = t.find(function (e) {
                return "1" === e.addressDefault;
              });
              u(c), N(n, c);
            case 9:
            case "end":
              return _context37.stop();
          }
        }, _callee37);
      }));
    },
    N = function N(e, o) {
      e.forEach(function (e) {
        e.shoppingpackageList.forEach(function (e) {
          C.current.comDisMoney += e.disMoney, C.current.copyComDisMoney += e.disMoney, e.shoppingGoodsList.forEach(function (o) {
            m.current.push(o), C.current.shoppingCountPrice += o.pricesetNprice * o.goodsCamount, o.contractGoodsGtype = 0, p.current = e.promotionCode, "00" == o.goodsType && (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getFalgSettingForPaydate)().then(function (e) {});
          }), e.disMoney > 0 && g.current.push({
            contractSettlBlance: 0 == e.promotionInType ? "PM" : "COP",
            contractPmode: "0",
            contractSettlGmoney: Number(e.disMoney.toFixed(2)),
            contractSettlPmoney: Number(e.disMoney.toFixed(2)),
            contractSettlOpno: e.promotionCode,
            contractSettlOpemo: e.promotionName
          }), e.giftList ? (e.shoppingGoodsList.forEach(function (e) {
            e.ginfoCode = e.pmPromotionList.find(function (e) {
              return "0001" == e.pbCode;
            }).promotionCode;
          }), s.current = [].concat((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(e.shoppingGoodsList), (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(e.giftList))) : s.current = e.shoppingGoodsList;
        }), L(), h && (I(), b(), M(o));
      });
    },
    L = function L() {
      var _C$current = C.current,
        e = _C$current.shoppingCountPrice,
        o = _C$current.totalDiscountPrice,
        t = _C$current.discount,
        n = _C$current.comDisMoney,
        c = _C$current.freight,
        i = (e - o - t - n + c).toFixed(2);
      f(i);
    },
    I = function I() {
      return me(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee38() {
        var n, _e10;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              n = {};
              n = t ? {
                shoppingGoodsIdStr: "[".concat(t, "]")
              } : {
                skuIdStr: JSON.stringify([{
                  skuId: e,
                  goodsNum: o
                }])
              };
              _context38.prev = 2;
              _context38.next = 5;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.calculateFreightFare)(Object.assign(Object.assign({}, n), {
                areaCode: 11e4
              }));
            case 5:
              _e10 = _context38.sent;
              C.current.freight = _e10.dataObj, L();
              _context38.next = 12;
              break;
            case 9:
              _context38.prev = 9;
              _context38.t0 = _context38["catch"](2);
              console.log(180, _context38.t0);
            case 12:
            case "end":
              return _context38.stop();
          }
        }, _callee38, null, [[2, 9]]);
      }));
    },
    D = function D() {
      var _C$current2 = C.current,
        e = _C$current2.shoppingCountPrice,
        o = _C$current2.copyComDisMoney,
        t = _C$current2.discount;
      return (e - o - t).toFixed(2);
    },
    P = function P() {
      var _C$current3 = C.current,
        e = _C$current3.shoppingCountPrice,
        o = _C$current3.copyComDisMoney,
        t = _C$current3.freight;
      return (e - o + t).toFixed(2);
    },
    M = function M(t) {
      y.current = function (t) {
        var n = t.addressMember,
          c = t.userName,
          i = t.provinceName,
          r = t.cityName,
          d = t.areaName,
          a = t.addressDetail,
          l = t.areaCode;
        return [{
          contractPaytime: new Date().valueOf(),
          contractPaydate: new Date().valueOf(),
          goodsPbillno: 0,
          goodsPmbillno: C.current.promotionCodes,
          contractProperty: "0",
          contractBlance: 0,
          contractPmode: 0,
          contractPumode: "0",
          goodsSupplierName: "",
          goodsSupplierCode: "",
          packageList: [{
            contractGoodsList: s.current,
            shoppingGoodsIdList: [],
            promotionCode: p.current,
            packageRemark: null
          }],
          packageMode: "",
          contractType: "00",
          ocContractSettlList: [],
          contractInmoney: P(),
          contractMoney: D(),
          goodsReceiptMem: n,
          goodsReceiptPhone: c,
          goodsReceiptArrdess: i + r + d + a,
          areaCode: l,
          contractNbillcode: null,
          skuIdList: e ? [{
            skuId: +e,
            goodsNum: +o
          }] : [],
          giftSkuIdList: []
        }];
      }(t);
      var n = {
        rsSkuListStr: JSON.stringify(y.current)
      };
      Ce(n).then(function (e) {
        C.current.totalDiscountPrice = e.dataObj.totalDiscountPrice, C.current.contractSettlOpno = e.dataObj.contractSettlOpno, L();
      });
    };
  return {
    savePayPrice: function savePayPrice() {
      (function () {
        var _C$current4 = C.current,
          e = _C$current4.contractSettlOpno,
          o = _C$current4.totalDiscountPrice;
        e && 0 != o && g.current.push({
          contractSettlBlance: "UR",
          contractPmode: "0",
          contractSettlPmoney: o,
          contractSettlOpno: e
        });
      })(), (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(y.current, "[0].ocContractSettlList", [].concat((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(g.current), (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(S.current)));
      var e = {
        orderDomainStr: JSON.stringify(y.current)
      };
      (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveContract)(e).then(function (e) {
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Se.paymentMode, "?code=").concat(e.dataObj.contractBillcode));
      });
    },
    address: l,
    list: s,
    payState: C,
    coupon: d,
    confirm: function confirm(e) {
      var o = e.couponAmount,
        t = e.usercouponCode,
        n = e.promotionCode,
        c = e.discAmount;
      S.current = [{
        contractSettlBlance: "COP",
        contractPmode: "0",
        contractSettlGmoney: +o,
        contractSettlPmoney: +c,
        contractSettlOpno: t,
        contractSettlOpemo: n
      }], C.current.discount = c, L();
    },
    amount: v
  };
}
var Ve = Object.freeze({
  __proto__: null,
  useOrderResult: function useOrderResult(e) {
    var _this6 = this;
    var _c58 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c59 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c58, 2),
      o = _c59[0],
      t = _c59[1],
      n = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (function () {
        me(_this6, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee39() {
          var _o2, _c60, _o$dataObj, _i4;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee39$(_context39) {
            while (1) switch (_context39.prev = _context39.next) {
              case 0:
                _context39.prev = 0;
                _context39.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.syncContractPayState)({
                  contractBillcode: e,
                  isLocalMock: !n
                });
              case 3:
                _o2 = _context39.sent;
                _c60 = _o2.sysRecode;
                _o$dataObj = _o2.dataObj;
                _i4 = _o$dataObj === void 0 ? {} : _o$dataObj;
                t({
                  sysRecode: _c60,
                  dataObj: _i4
                });
                _context39.next = 13;
                break;
              case 10:
                _context39.prev = 10;
                _context39.t0 = _context39["catch"](0);
                console.log(_context39.t0);
              case 13:
              case "end":
                return _context39.stop();
            }
          }, _callee39, null, [[0, 10]]);
        }));
      })();
    }, []), {
      result: o
    };
  }
});
function Ee(e, o) {
  var _c61 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e),
    _c62 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c61, 2),
    t = _c62[0],
    n = _c62[1];
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var t = o.filter(function (e) {
      return !((0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(e) || (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(e));
    }).filter(function (e) {
      return !Object.values(e).every(function (o) {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(o) || (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(e);
      });
    });
    var c = e;
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(t) || (c = t), n(c);
  }, [o]), t;
}
var Je = [{
    name: "全部",
    code: ""
  }, {
    name: "待付款",
    code: "1"
  }, {
    name: "待发货",
    code: "2"
  }, {
    name: "待收货",
    code: "3"
  }, {
    name: "已完成",
    code: "4,5"
  }, {
    name: "已取消",
    code: "-1"
  }],
  _e = function _e(e) {
    var _ref6 = Je.find(function (o) {
        return o.code === e + "";
      }) || {},
      _ref6$name = _ref6.name,
      o = _ref6$name === void 0 ? "" : _ref6$name;
    return o;
  },
  qe = {
    1: [{
      name: "取消订单",
      handler: "cancel"
    }, {
      name: "立即支付",
      handler: "pay"
    }],
    3: [{
      name: "物流信息",
      handler: "expressInfo"
    }, {
      name: "确认收货",
      handler: "confirmReceive"
    }],
    4: [{
      name: "去评价",
      handler: "evaluate"
    }],
    5: [{
      name: "已完成"
    }]
  };
function Ue(_ref7) {
  var _this7 = this;
  var _ref7$dataState = _ref7.dataState,
    e = _ref7$dataState === void 0 ? "" : _ref7$dataState,
    o = _ref7.contractId,
    t = _ref7.contractBillcode,
    n = _ref7.init;
  var c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
      return qe[e + ""] || [];
    }, [e]),
    i = function () {
      return {
        expressInfo: function expressInfo() {
          console.log(19, t), (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Se.expressInfo, "?code=").concat(t));
        },
        pay: function pay() {
          console.log("pay"), (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Se.paymentMode, "?code=").concat(t));
        },
        evaluate: function evaluate() {
          (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Se.evaluateDetail, "?code=").concat(t));
        },
        confirmReceive: function confirmReceive() {
          return me(_this7, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee40() {
            return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee40$(_context40) {
              while (1) switch (_context40.prev = _context40.next) {
                case 0:
                  console.log(123123);
                  _context40.prev = 1;
                  _context40.next = 4;
                  return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.confirmReceive)({
                    contractBillcode: t
                  });
                case 4:
                  console.log(n);
                  null == n || n();
                  _context40.next = 10;
                  break;
                case 8:
                  _context40.prev = 8;
                  _context40.t0 = _context40["catch"](1);
                case 10:
                case "end":
                  return _context40.stop();
              }
            }, _callee40, null, [[1, 8]]);
          }));
        },
        cancel: function cancel() {
          return me(_this7, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee41() {
            return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee41$(_context41) {
              while (1) switch (_context41.prev = _context41.next) {
                case 0:
                  _context41.prev = 0;
                  _context41.next = 3;
                  return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.cancelContractC)({
                    contractId: o
                  });
                case 3:
                  console.log(n);
                  null == n || n();
                  _context41.next = 9;
                  break;
                case 7:
                  _context41.prev = 7;
                  _context41.t0 = _context41["catch"](0);
                case 9:
                case "end":
                  return _context41.stop();
              }
            }, _callee41, null, [[0, 7]]);
          }));
        }
      };
    }();
  return {
    handlerImpl: function handlerImpl(e) {
      i[e]();
    },
    operateArray: c
  };
}
var ze = function ze(e) {
    var _c63 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c64 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c63, 2),
      o = _c64[0],
      t = _c64[1],
      n = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
      _c65 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        goodsList: [],
        dataState: "",
        packageRemark: "",
        goodsReceiptMem: "",
        goodsReceiptPhone: "",
        goodsReceiptArrdess: "",
        dataBmoney: 0,
        goodsPmoney: 0,
        contractInmoney: 0,
        contractBillcode: "",
        refundMoney: 0,
        gmtCreate: "",
        goodsNum: 0,
        contractId: 0
      }),
      _c66 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c65, 2),
      i = _c66[0],
      s = _c66[1];
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee42() {
        var _o3;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee42$(_context42) {
          while (1) switch (_context42.prev = _context42.next) {
            case 0:
              _context42.prev = 0;
              _context42.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getContractByCode)({
                contractBillcode: e,
                isLocalMock: !n
              });
            case 3:
              _o3 = _context42.sent;
              if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(_o3)) {
                _context42.next = 6;
                break;
              }
              return _context42.abrupt("return");
            case 6:
              t(_e(_o3.dataState)), s(_o3);
              _context42.next = 12;
              break;
            case 9:
              _context42.prev = 9;
              _context42.t0 = _context42["catch"](0);
              console.log(45, _context42.t0);
            case 12:
            case "end":
              return _context42.stop();
          }
        }, _callee42, null, [[0, 9]]);
      }));
    }, []), {
      orderDetail: i,
      status: o
    };
  },
  He = function He(e) {
    var _c67 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c68 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c67, 2),
      o = _c68[0],
      t = _c68[1],
      _c69 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c70 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c69, 2),
      n = _c70[0],
      i = _c70[1];
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee43() {
        var o, n, c, r;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee43$(_context43) {
          while (1) switch (_context43.prev = _context43.next) {
            case 0:
              _context43.next = 2;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getContractByCode)({
                contractBillcode: e
              });
            case 2:
              o = _context43.sent;
              t(o);
              n = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(o, "packageList[0].expressCode", "");
              c = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(o, "packageList[0].packageBillno");
              _context43.next = 8;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryExpressInfo)({
                expressNo: c,
                expressType: n
              });
            case 8:
              r = _context43.sent;
              i(JSON.parse(r.dataObj));
            case 10:
            case "end":
              return _context43.stop();
          }
        }, _callee43);
      }));
    }, []), {
      info: o,
      detail: n
    };
  };
function Ke() {
  var _this8 = this;
  console.log(0xa1b01d4b1c7);
  var _c71 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _c72 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c71, 2),
    e = _c72[0],
    o = _c72[1],
    _c73 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c74 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c73, 2),
    t = _c74[0],
    n = _c74[1],
    i = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    s();
  }, []);
  var s = function s() {
    return me(_this8, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee44() {
      var _e11, _t5;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee44$(_context44) {
        while (1) switch (_context44.prev = _context44.next) {
          case 0:
            _context44.prev = 0;
            _context44.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryGoodsClassTree)();
          case 3:
            _e11 = _context44.sent;
            n(_e11 || []);
            _t5 = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_e11, "[0].goodsClassCode");
            o(_t5);
            _context44.next = 12;
            break;
          case 9:
            _context44.prev = 9;
            _context44.t0 = _context44["catch"](0);
            console.log(_context44.t0);
          case 12:
          case "end":
            return _context44.stop();
        }
      }, _callee44, null, [[0, 9]]);
    }));
  };
  return {
    activeKey: e,
    navList: t,
    flag: i,
    setActiveKey: o
  };
}
var We = function We() {
    var _c75 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c76 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c75, 2),
      e = _c76[0],
      o = _c76[1],
      t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1),
      _c77 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c78 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c77, 2),
      n = _c78[0],
      s = _c78[1],
      _c79 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c80 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c79, 2),
      d = _c80[0],
      a = _c80[1],
      _c81 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c82 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c81, 2),
      l = _c82[0],
      u = _c82[1],
      _c83 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c84 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c83, 2),
      p = _c84[0],
      g = _c84[1],
      _c85 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c86 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c85, 2),
      m = _c86[0],
      y = _c86[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      v();
    }, []);
    var v = function v() {
        t.current = 1, o([]), f();
      },
      f = function f() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee45() {
          var _e12;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee45$(_context45) {
            while (1) switch (_context45.prev = _context45.next) {
              case 0:
                _context45.prev = 0;
                _context45.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryCollectPage)({
                  row: 10,
                  page: t.current,
                  collectType: 0
                });
              case 3:
                _e12 = _context45.sent;
                o(function (o) {
                  return o.concat((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_e12, "list", []));
                }), t.current += 1;
                _context45.next = 10;
                break;
              case 7:
                _context45.prev = 7;
                _context45.t0 = _context45["catch"](0);
                return _context45.abrupt("return", (console.log(_context45.t0), []));
              case 10:
              case "end":
                return _context45.stop();
            }
          }, _callee45, null, [[0, 7]]);
        }));
      },
      h = function h() {
        var o = [];
        for (var _t6 = 0; _t6 < e.length; _t6++) o.push(e[_t6].collectCode);
        return console.log(74, o.toString()), o.toString();
      };
    return {
      collectionList: e,
      edit: n,
      setEdit: s,
      getData: f,
      collectCodeStr: d,
      getSelectItem: function getSelectItem(o) {
        var t = o.detail.value;
        a(t.toString()), t.length === e.length ? y(!0) : (y(!1), a(""));
      },
      delItem: function delItem() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee46() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee46$(_context46) {
            while (1) switch (_context46.prev = _context46.next) {
              case 0:
                _context46.prev = 0;
                _context46.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.deleteCollectByCodeStr)({
                  collectCodeStr: d
                });
              case 3:
                t.current = 1;
                v();
                _context46.next = 10;
                break;
              case 7:
                _context46.prev = 7;
                _context46.t0 = _context46["catch"](0);
                console.log(_context46.t0);
              case 10:
              case "end":
                return _context46.stop();
            }
          }, _callee46, null, [[0, 7]]);
        }));
      },
      init: v,
      checked: l,
      setChecked: u,
      handleSelectAll: function handleSelectAll(e) {
        e.detail.value.length ? (u(!0), a(h())) : u(!1);
      },
      selectAll: p,
      setSelectAll: g,
      selectAllChecked: m
    };
  },
  Qe = function Qe(e) {
    var _c87 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c88 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c87, 2),
      o = _c88[0],
      t = _c88[1],
      n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
      s = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({}),
      d = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee47() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee47$(_context47) {
          while (1) switch (_context47.prev = _context47.next) {
            case 0:
              _context47.next = 2;
              return u();
            case 2:
              _context47.next = 4;
              return a();
            case 4:
            case "end":
              return _context47.stop();
          }
        }, _callee47);
      }));
    }, []);
    var a = function a() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee48() {
          var _o4, _n4, _n$, _c89, _i5, _r4, _a2, _u2;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee48$(_context48) {
            while (1) switch (_context48.prev = _context48.next) {
              case 0:
                _context48.prev = 0;
                _context48.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getContractByCode)({
                  contractBillcode: e,
                  isLocalMock: !d
                });
              case 3:
                _o4 = _context48.sent;
                _n4 = l((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_o4, "goodsList"));
                _n$ = _n4[0];
                _c89 = _n$.contractBillcode;
                _i5 = _n$.memberBcode;
                _r4 = _n$.memberBname;
                _a2 = _n$.memberCode;
                _u2 = _n$.memberName;
                s.current = {
                  contractBillcode: _c89,
                  memberBcode: _i5,
                  memberBname: _r4,
                  memberCode: _a2,
                  memberName: _u2
                }, t(_n4);
                _context48.next = 17;
                break;
              case 14:
                _context48.prev = 14;
                _context48.t0 = _context48["catch"](0);
                console.log(_context48.t0);
              case 17:
              case "end":
                return _context48.stop();
            }
          }, _callee48, null, [[0, 14]]);
        }));
      },
      l = function l(e) {
        for (var _o5 = 0; _o5 < e.length; _o5++) e[_o5].upImgLength = !0, e[_o5].upImg = [], e[_o5].evaluateGoodsImgs = "", e[_o5].evaluateScopeList = [n.current[0]], e[_o5].evaluateGoodsContent = "";
        return e;
      },
      u = function u() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee49() {
          var _e13;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee49$(_context49) {
            while (1) switch (_context49.prev = _context49.next) {
              case 0:
                _context49.prev = 0;
                _context49.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUseTemplate)({
                  applyTarget: "goods",
                  isLocalMock: !d
                });
              case 3:
                _e13 = _context49.sent;
                n.current = _e13[0].templateValuesReList;
                _context49.next = 10;
                break;
              case 7:
                _context49.prev = 7;
                _context49.t0 = _context49["catch"](0);
                console.log(_context49.t0);
              case 10:
              case "end":
                return _context49.stop();
            }
          }, _callee49, null, [[0, 7]]);
        }));
      };
    return {
      orderInfo: o,
      changeStar: function changeStar(e, c) {
        var i = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(o),
          r = [];
        for (var _e14 = 0; _e14 < c; _e14++) r.push(n.current[_e14]);
        i[e].evaluateScopeList = r, t(i);
      },
      Submit: function Submit() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee50() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee50$(_context50) {
            while (1) switch (_context50.prev = _context50.next) {
              case 0:
                console.log(77, o, s.current);
                _context50.prev = 1;
                _context50.next = 4;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveEvaluateGoods)({
                  paramStr: JSON.stringify(o)
                });
              case 4:
                _context50.next = 6;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveEvaluateShop)(Object.assign({
                  paramStr: JSON.stringify(o)
                }, s.current));
              case 6:
                _context50.next = 8;
                return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Se.order));
              case 8:
                _context50.next = 13;
                break;
              case 10:
                _context50.prev = 10;
                _context50.t0 = _context50["catch"](1);
                console.log(_context50.t0);
              case 13:
              case "end":
                return _context50.stop();
            }
          }, _callee50, null, [[1, 10]]);
        }));
      },
      changeContent: function changeContent(e, n) {
        var c = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(o);
        c[e].evaluateGoodsContent = n.detail.value, t(c);
      }
    };
  },
  Xe = function Xe() {
    var _c90 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c91 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c90, 2),
      e = _c91[0],
      o = _c91[1],
      t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1),
      _c92 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c93 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c92, 2),
      n = _c93[0],
      s = _c93[1],
      _c94 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c95 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c94, 2),
      d = _c95[0],
      a = _c95[1],
      _c96 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c97 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c96, 2),
      l = _c97[0],
      u = _c97[1],
      _c98 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c99 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c98, 2),
      p = _c99[0],
      g = _c99[1],
      _c100 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c101 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c100, 2),
      m = _c101[0],
      y = _c101[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      v();
    }, []);
    var v = function v() {
        t.current = 1, o([]), f();
      },
      f = function f() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee51() {
          var _e15;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee51$(_context51) {
            while (1) switch (_context51.prev = _context51.next) {
              case 0:
                _context51.prev = 0;
                _context51.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryFootprintPagePlat)({
                  row: 500,
                  page: t.current
                });
              case 3:
                _e15 = _context51.sent;
                if (!(0 === _e15.length)) {
                  _context51.next = 6;
                  break;
                }
                return _context51.abrupt("return");
              case 6:
                console.log(31, (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_e15, "list", [])), o((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_e15, "list", []));
                _context51.next = 12;
                break;
              case 9:
                _context51.prev = 9;
                _context51.t0 = _context51["catch"](0);
                return _context51.abrupt("return", (console.log(_context51.t0), []));
              case 12:
              case "end":
                return _context51.stop();
            }
          }, _callee51, null, [[0, 9]]);
        }));
      },
      h = function h() {
        var e = [];
        for (var _o6 = 0; _o6 < collectionList.length; _o6++) e.push(collectionList[_o6].collectCode);
        return console.log(74, e.toString()), e.toString();
      };
    return {
      footprintList: e,
      edit: n,
      setEdit: s,
      getData: f,
      getSelectItem: function getSelectItem(e) {
        var o = e.detail.value;
        console.log(43, o), a(o.toString());
      },
      delItem: function delItem() {
        return me(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee52() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee52$(_context52) {
            while (1) switch (_context52.prev = _context52.next) {
              case 0:
                _context52.prev = 0;
                _context52.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.deleteFootprintByCodeStr)({
                  footprintCodeStr: d
                });
              case 3:
                t.current = 1;
                v();
                _context52.next = 10;
                break;
              case 7:
                _context52.prev = 7;
                _context52.t0 = _context52["catch"](0);
                console.log(_context52.t0);
              case 10:
              case "end":
                return _context52.stop();
            }
          }, _callee52, null, [[0, 7]]);
        }));
      },
      init: v,
      checked: l,
      setChecked: u,
      handleSelectAll: function handleSelectAll(e) {
        e.detail.value.length ? (u(!0), setCollectCodeStr(h())) : u(!1);
      },
      selectAll: p,
      setSelectAll: g,
      selectAllChecked: m
    };
  };
function Ye(e) {
  if (!e) return;
  return e.includes("/pages/") ? (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.switchTabImpl)(e) : (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)(e);
}


/***/ })

}]);
//# sourceMappingURL=common.js.map