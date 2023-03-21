(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "../../2023-qj/qj-request-tools/packages/request/dist/index.js":
/*!*********************************************************************!*\
  !*** ../../2023-qj/qj-request-tools/packages/request/dist/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorCallback": function() { return /* binding */ h; },
/* harmony export */   "fly": function() { return /* binding */ Z; },
/* harmony export */   "get": function() { return /* binding */ Q; },
/* harmony export */   "post": function() { return /* binding */ N; },
/* harmony export */   "postFormData": function() { return /* binding */ S; },
/* harmony export */   "resetStatus": function() { return /* binding */ v; }
/* harmony export */ });
/* unused harmony exports getTaroEnv, isWechat, postWithJson, wxLogin */
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brushes/utils */ "../../2023-qj/qj-request-tools/packages/request/node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../../2023-qj/qj-request-tools/node_modules/lodash-es/get.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "../../2023-qj/qj-request-tools/packages/request/node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var navigator = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["navigator"];
/* provided dependency */ var document = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["document"];
/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["window"];




function u(n, e, t, o) {
  return new (t || (t = Promise))(function (i, r) {
    function A(n) {
      try {
        a(o.next(n));
      } catch (n) {
        r(n);
      }
    }
    function s(n) {
      try {
        a(o.throw(n));
      } catch (n) {
        r(n);
      }
    }
    function a(n) {
      var e;
      n.done ? i(n.value) : (e = n.value, e instanceof t ? e : new t(function (n) {
        n(e);
      })).then(A, s);
    }
    a((o = o.apply(n, e || [])).next());
  });
}
var d = function () {
  var n = navigator.userAgent.toLowerCase();
  try {
    return "micromessenger" == n.match(/micromessenger/i) || Boolean(wx);
  } catch (n) {
    return !1;
  }
}();
function g(n) {
  return n.getEnv();
}
var m = !1,
  p = [];
function b(n, e, t) {
  return u(this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee2() {
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(function (o, i) {
            if (p.push({
              handler: function handler() {
                return e.request(n);
              },
              resolve: o
            }), !m) {
              m = !0;
              switch (g(t)) {
                case "WEAPP":
                  !function (n, e, t) {
                    var o = n.baseURL;
                    e.login({
                      success: function success(n) {
                        return u(this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee() {
                          var i, r, A, s, a;
                          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return e.request({
                                  header: {
                                    "Saas-Agent": "qj-wemini"
                                  },
                                  url: o + "web/ml/mlogin/warrantyLogin.json",
                                  data: {
                                    js_code: n.code
                                  }
                                });
                              case 2:
                                i = _context.sent.data;
                                if (i.dataObj) {
                                  _context.next = 5;
                                  break;
                                }
                                return _context.abrupt("return", (e.showToast({
                                  title: "无法登录",
                                  icon: "error",
                                  duration: 1500
                                }), void t()));
                              case 5:
                                r = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(i, "dataObj.register", ""), A = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(i, "dataObj.userOpenid", "");
                                if (!(e.setStorageSync("userOpenid", A), "true" === r)) {
                                  _context.next = 8;
                                  break;
                                }
                                return _context.abrupt("return", void e.navigateTo({
                                  url: "/append/bindIphone/index",
                                  success: function success(n) {
                                    n.eventChannel.emit("handler", function () {
                                      return h();
                                    });
                                  }
                                }));
                              case 8:
                                s = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(i, "dataObj.userInfo", "{}"), a = JSON.parse(s).ticketTokenid;
                                e.setStorageSync("saas-token", a), e.setStorageSync("user-info", s), h();
                              case 10:
                              case "end":
                                return _context.stop();
                            }
                          }, _callee);
                        }));
                      },
                      complete: function complete() {
                        m = !1;
                      }
                    });
                  }(n, t, i);
                  break;
                case "WEB":
                  !function (n) {
                    queueMicrotask(function () {
                      n.navigateTo({
                        url: "/account/mobileLogin/index",
                        success: function success() {
                          console.log("34==================>", m);
                        }
                      });
                    });
                  }(t);
              }
            }
          }));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
}
var h = function h() {
    p.forEach(function (n) {
      return u(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee3() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = (0, n.resolve);
              _context3.next = 3;
              return n.handler();
            case 3:
              _context3.t1 = _context3.sent;
              (0, _context3.t0)(_context3.t1);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
    }), p = [];
  },
  v = function v() {
    console.log(104, m), m = !1, console.log(106, m);
  },
  y = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS5kYWJhY2JiLCAyMDIxLzA0LzE0LTAwOjM5OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzA0OEVFQTZBMzUxMUVEQThENUIyQURDQ0NGMzA5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNzA0OEVFOTZBMzUxMUVEQThENUIyQURDQ0NGMzA5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU3MDQ4RUU1NkEzNTExRURBOEQ1QjJBRENDQ0YzMDlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3MDQ4RUU2NkEzNTExRURBOEQ1QjJBRENDQ0YzMDlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAKAAoAwERAAIRAQMRAf/EAIsAAAIDAQAAAAAAAAAAAAAAAAgKBAYHBQEAAgMBAQAAAAAAAAAAAAAABggDBQkEBxAAAQQCAQMDAwUAAAAAAAAAAQIDBAUGBwgAERMhEgkUFRcxIiMkFhEAAgECBAQEAwcEAwAAAAAAAQIDEQQSEwUGACEUBzFRIhVBoQhxMmIjMxYXYZFSQ7FTJP/aAAwDAQACEQMRAD8Ads5O8nNbcU9Zzdj7ElPyFOviqxPE6nwu5Nm+SvoUuJQ0MV1xtHuCUl2VKdKY0GKhbzyglPqPbj3Hp219NOo6gSeeFEX78jnwVR82J5KKknj2Lsh2Q3p373tHszZ0aoFTNu7uWotrK2U0eedgCfGixRKDJPKVjjUseSwG+PkQ5Wb8nzEzdgTtU4c+ZLcTANT2M3HozcF/2oSxf5gwtnK8lm+JsBbiXocQrKi3GQCOlu1rf26NdY452tbM1pFASgofg0g9bn+tVXyUcbj9qvo97CdprWM22kRa/uNcJe/1WNLhi688UFowa1tkqfSpSaWlA8zEcBz9/wAjLypRyjKjNU2Wl2Jye/NotskKKF2psTYLQVAEgunuoA/qO/Qnn3GLFmS4/PG1f71r8+GMGkaNgEIsbDp61EfTQZQPmIsvLBp5L4cvDgxND/Idyq0HaRHYuf2m2sPjsNxZOuts3E69r3ojQX4xSZc8iXleNWDYX+x0vTIvcJDkZYHRXom/Nz6DKGSdrq0AoYZ2LAj8MnN0Pkasvmp4XTur9H/YfuzYyRz6TBt/cLsWXUdKhSCQOaVz7RSlrcxmnqXBDLzOCZTw0Dxj5Oa05Wa1i7G1zNfaUzINPluJ2obZyTCMmaZbelUN7FbUU+7xuJdiymiqNOjLQ8ytSVejJ7b3Jp26NOGoaeSKHC6NyeNx4qw+YI5MKEGnGG/e/shvbsLvWTZu8Y0YMmbaXUVWtr22JISeBjz8QVliakkMgaORQw5rA/Ihvmz35yrz2Q7LZfw7Udpcan1zGiOeaG1Co5yGcxvg4EoS5Y5LlcR5LrgB/qQozYUQgkrbv7W5Nd3ROxINraM0EQHMUU/mN9ruDX8KqPhxuN9H3amx7TdhtJhijZNx7hgh1XUWcYXLzoWs4KcyI7a1dCqn/bNO9AW5ZFxt0EeS2wxqyt2nhesMusK9czD2M4q7ifDzqXFRIftKKllVUiM3Euq2CwJPhdKnJLBWplC/C72qdvaJ+4tQ9rjuoba7ZaxiRWIlIqSqlSKMAK0PMitAaHj0HvP3ZHZXZ377vdB1PXNuwzBLtrKWGN7FGKrFPMsqsXhkdsvGlFjfCJGXMStZ/BW3RvE8bThFn+aBlycOOIjuUiQoh9OTGyDao4wM0pFr937fS/bf5O/v/j65vZdV96/buS3vObl5f9fHHXwysPrx+GDn48uL3+VO3v8AF380e6Qfxt7f1nV/hHpNtl1xddnf+XpP1eo9H3fXxZ+SmgVcaNi/iuz2nhmzsvrq9qZmEfCKq4gQ8FlTG40mqormTayZLcy6s6+R9UGWilyPH9inkJ8zXfp3DoZ25qHtclzDc3arWQRqwERNCqsWJqzA4qDmBQkCo4ouy3dod7Nnfvyy0HUtD27NMUtGvZYZHvlQsss8KxKpSGKRcrG9VkkxLGzZb01347t8T9B8rMBmKmFnDNsT6/UuwYjsr6aC5GyGcljDcgfCwpn67GcseZS24QFiHNlNhQC+rbYOtPoW54GrS0umEEorQUc/lt9qPSh/xZh8ePPvrD7U2ndjsLq1sseLcmgRSarYOFxOGt0LXlutKHBc2ocstaGaGByCV4Di/wDMMjycSg2icMqyYWKWu4bRZi/sRaIQFd1hKLDygBRKh29ST36E5v15K/ezXr9uI1+deGN0jB7NY5FTbdBbZZPiYsiPKJ+FTHhPLl5cqcRK9y3YtqN7G3btjKmr+jOHvYwZCcpZzA2cZOLqxYxP7X+jN0WRDDf7lPEA90lQ6jQyrKhgLi5Ei5eCuPMqMGCnPHiphp8eOi7TTpdPuo9aW1fQWtJ+rW5w9KbTLY3PVY/T0+TjM2LkEqfEDhsBMfaydUC5+2aHV8piuLhguxxZVyLlWPJvipLhQAoqgpv1Jd7FAov9F3aDoh/u6aCmqDS83DY/yZ7ZSlRiwYv+MXP/AK83lXBz4wJMuwjv720z7rH0JDfWMNlyGHqMihFf8zBVfHrvb6SGM3PLhUCykXUq3vZOTv3krLXr+7VmUnKVPqyp7MBYyG8nVlJldpX+jTcIdTMDnZSXklIASEgK+7StK7XJc3ZkbML1xmSpx4688eKuKvx430sotNg061h0NLWPb62kIs1tcItRZ5am26XD6enyShhK8ihBNWJPEqg8wyPGDFLaJwyrGTXKd7htFmL+uNWtZT3WEosPESUgqHb0BPbqSH9eOn3s1KfbiFPnTiHV8Hs19n1Nt0FzmAeJiyJM0D4VMeIc+XnyrwY/yI6Hn6D5WZ9DTDLOGbYn2G2tfS2ov00FyNkM5T+ZY+wUFTP12M5Y88pxsELEObFcKQF9Fm/tFfQtzzrSlpdMZ4jSgo5/MX7UetR/iyn48Ll9Hnda07sdhdJuWkxbk0CKPSr9C2Jw1ugWzuGrQ4Lm1CBWpQzQzoCSvGS8Zt8QONuyvyt+KMb2tlNXVPQ8HTld7PqK3B7eUXG5uUQosKusUWNzIhKEZpxYaciMl3wrSp5RFXtzWk29qXunSx3VyqUjxsVEbHxcAA1YjkCaFRWh5ng/73dqbvvTsr9he/3ugaFPOHvTawJLJexLQpbOzyRmOFXBkZVxLK4jzFIjUHgDkFuRO+1cnk5rJTu5WSHJVZT4VGCpox/tpw40/n8X4+OPgVn2ryeMQx7gr6j+bqAa7q41z9yiY+85mPH8PCmXhr+lh9GCtMPxxeri3PaLtw3agdjn0xD2wFl03S19dcWZ1mdhr7h1H/p6rDizuVMn8riwcmd8wOSmyRtX8T4zqnKbOraiZwMTvJ9tAzq3jeFuFk06LNrq5FdcxITZjOONhxyWz4/MtSmUHqfcetpuLUfdOlitbllpJlsWErDwcggUYDlUVLClSaDin7JdqLrstsv9h+/32v6DBOXsuqgjiksYmqXtkZJJDJCzkSKrYVifHlqBIw41j479DWe/OVeBR2ojL+HajtKfbGxpMtvzQ2oVHOW9h1CWypCXLHJcriMqabJP9SFJcKSEAG02Dokmu7ogUAG1tGWeUnmKKfy1+13Ap+FWPw4AfrB7rWPabsNq00sjJuPcME2lacqHC5edAt5PXmRHbWruGYf7ZoEqC3Jn7k5xj1pys1rK1zsaE+0pmQLjEssqi2zkmEZM0y4zFvqKU4kp93jcU1KiuhUadGWtl5Ckq9GS3JtvTt0acdP1AEUOJHXk8bjwZT8iDyYVBFOMOeyHe/e3YXese8tnSIwZMq7tZatbXtsSC8E6jn4gNFKtJIZAskbBhzV+3z8eXKnQVpLbl4Dabaw+Ow5Lj7G1PTzryudhshBdXeYiyuVleNWLYV3W0GZkX0UW5KwOls1vYe59DlKvA11aAVE0ClgR+KPm6HzFGXyY8bkdqvq/7Dd2bGOS31aDb+4ncI2narMkEgc1oILshbW5jNPS2OGXmMcKngNRU3ypCYgxjLjNUgOJrxiOTGxW2SUhaK8VX1q0lYIBDZ9R2/XoQy5cWDLlx+WW9f7Ya/LhkPcdJERuOu0/pgaGTq7bLB8jJm4Aac/veHPw4MvQ/wAeHKrf06GuDgE/VWGvmM7L2Dtium49FbhP+5Sn6HD30s5Xks0Ntn2NqZhxCspDklAJ6MNE2DufXXGXA1rZGlZZwUFD8VjPrc/0oq+bDhbu631gdhu01tIt1q0WvbkTEEsNKkS4YuvLDPdqTa2yVIxMHmlpUpCxHDQHGLjHrbinrOFrjXcV+Qp182uWZZbeF3Js3yV9CUS76+lNNto9wSkNRYrQTGgxUIZZSEp9WR25tzTtr6aNO08E88Tu335HPizH5KByUUAHGHHe/vfvTv3vaTee8ZFQKmVaWkVRbWVspqkECkk+NWllYmSeUtJIxY8v/9k=";
function E(n) {
  var e = function (n) {
    var e = document.createElement("div");
    return e.innerHTML = "\n    <div\n      style=\"\n        box-sizing: border-box; \n        margin: 0;\n        padding: 0;\n        color: rgba(0, 0, 0, 0.88);\n        font-size: 14px; \n        line-height: 1.5714285714285714;\n        list-style: none;\n        font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';\n        position: fixed;\n        top: 8px;\n        inset-inline-start: 0;\n        width: 100%;\n        text-align: center;\n        pointer-events: none;\n        z-index: 1010;\"\n      >\n      <div\n        style=\"display: inline-block;\n        padding: 9px 12px;\n        background: #fff;\n        border-radius: 8px;\n        line-height: 1;\n        box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);\n        pointer-events: all\"\n        >\n          <span\n            style=\"vertical-align: text-bottom;\n            margin-inline-end: 4px;\n            font-size: 16px;\n            display: inline-block;\n            font-style: normal;\n            line-height: 0;\n            text-align: center;\n            text-transform: none;\n            text-rendering: optimizeLegibility\"\n          >\n            <img width=\"16\" alt=\"error\" src=".concat(y, ">\n        </span>\n        <span>\n            ").concat(n, "\n          </span>\n      </div>\n    </div>"), e;
  }(n);
  document.body.appendChild(e), setTimeout(function () {
    document.body.removeChild(e);
  }, 1e3);
}
var D = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getEnv)() ? function (n, o, i) {
    return u(this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee4() {
      var r, _n;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getTaro)();
          case 2:
            r = _context4.sent;
            if (!("nologin" === n.errorCode)) {
              _context4.next = 9;
              break;
            }
            _n = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getKey)();
            r.removeStorageSync(_n);
            _context4.next = 8;
            return b(o, i, r);
          case 8:
            return _context4.abrupt("return", void _context4.sent);
          case 9:
            return _context4.abrupt("return", (r.showToast({
              title: n.msg || "接口失败",
              icon: "error",
              duration: 1e3
            }), Promise.reject(n.msg || "接口失败")));
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
  } : function (n) {
    return u(this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee5() {
      var _n2;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(E(n.msg || "接口报错"), "nologin" === n.errorCode)) {
              _context5.next = 17;
              break;
            }
            _n2 = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getKey)();
            if (localStorage.getItem(_n2)) {
              _context5.next = 4;
              break;
            }
            return _context5.abrupt("return");
          case 4:
            _context5.prev = 4;
            if (!process.env.REACT_APP_NO_LOAD) {
              _context5.next = 7;
              break;
            }
            return _context5.abrupt("return");
          case 7:
            _context5.next = 9;
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.removeStorage)(_n2);
          case 9:
            window.location.reload();
            _context5.next = 17;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](4);
            _context5.next = 16;
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.removeStorage)(_n2);
          case 16:
            window.location.reload();
          case 17:
            return _context5.abrupt("return", Promise.reject(n.msg || "接口失败"));
          case 18:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[4, 12]]);
    }));
  },
  M = new (__webpack_require__(d ? /*! flyio/dist/npm/wx */ "../../2023-qj/qj-request-tools/node_modules/flyio/dist/npm/wx.js" : /*! flyio/dist/npm/fly */ "../../2023-qj/qj-request-tools/node_modules/flyio/dist/npm/fly.js"))();
M.interceptors.request.use(function (n) {
  var e = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getKey)(),
    o = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getTokenValueKey)();
  return n.headers[e] = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getStorage)(o), n.baseURL = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getUrl)(), d && (n.headers["Saas-Agent"] = "qj-wemini"), n;
});
M.interceptors.response.use(function (n) {
  return u(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().mark(function _callee6() {
    var e;
    return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__["default"])().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          e = n.data;
          if (!function (n) {
            return n.errorCode || !1 === n.success;
          }(e)) {
            _context6.next = 7;
            break;
          }
          _context6.next = 4;
          return D(e, n.request, M);
        case 4:
          _context6.t0 = _context6.sent;
          _context6.next = 8;
          break;
        case 7:
          _context6.t0 = e;
        case 8:
          return _context6.abrupt("return", _context6.t0);
        case 9:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
}, function (n) {
  console.log(n);
});
var w = function w(n) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return x(n, function () {
      return M.post(n, (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getParams)(e));
    }, e);
  },
  Q = function Q(n) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return x(n, function () {
      return M.get(n, (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getParams)(e));
    }, e);
  },
  S = function S(n) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return x(n, function () {
      var t = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.formDataTrans)((0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getParams)(e));
      return M.post(n, t);
    }, e);
  },
  N = function N(n) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return x(n, function () {
      return M.post(n, qs__WEBPACK_IMPORTED_MODULE_1__.stringify((0,_brushes_utils__WEBPACK_IMPORTED_MODULE_0__.getParams)(e)));
    }, e);
  },
  x = function x(n, e, t) {
    var _t$isLocalMock = t.isLocalMock,
      o = _t$isLocalMock === void 0 ? "" : _t$isLocalMock;
    if (!o) return e();
    var i = n.match(/(\w+)\.json/g);
    return i ? M.get("https://brushes.oss-cn-shanghai.aliyuncs.com/mock/".concat(i)) : e();
  },
  Z = M;


/***/ }),

/***/ "../../2023-qj/qj-request-tools/packages/utils/dist/index.js":
/*!*******************************************************************!*\
  !*** ../../2023-qj/qj-request-tools/packages/utils/dist/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEnv": function() { return /* binding */ a; },
/* harmony export */   "getTaro": function() { return /* binding */ d; }
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
/* harmony export */   "IconMobile": function() { return /* binding */ T; },
/* harmony export */   "Loading": function() { return /* binding */ _; },
/* harmony export */   "NumStep": function() { return /* binding */ I; },
/* harmony export */   "Popup": function() { return /* binding */ V; },
/* harmony export */   "ScrollView": function() { return /* binding */ S; },
/* harmony export */   "SmoothCheckbox": function() { return /* binding */ z; },
/* harmony export */   "SmoothRadio": function() { return /* binding */ P; },
/* harmony export */   "SmoothSwiper": function() { return /* binding */ C; },
/* harmony export */   "Tabs": function() { return /* binding */ q; },
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
function C(n) {
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
    p = n.style,
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
                style: Object.assign(Object.assign({}, p), {
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
  }, [i, r, c, t]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(j, Object.assign({}, Object.assign(Object.assign({}, v), f), {
    children: l.map(function (n, t) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(x, {
        children: d(n)
      }, t);
    })
  }));
}
var S = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref) {
  var _ref$Threshold = _ref.Threshold,
    n = _ref$Threshold === void 0 ? 50 : _ref$Threshold,
    t = _ref.onScroll,
    _ref$scrollTop = _ref.scrollTop,
    i = _ref$scrollTop === void 0 ? 0 : _ref$scrollTop,
    r = _ref.children,
    o = _ref.height;
  var _N2 = N(),
    s = _N2.ScrollView,
    c = _N2.PullToRefresh,
    a = s || c,
    d = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
    h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
      return d ? {
        scrollY: !0,
        enablePassive: !0,
        scrollWithAnimation: !0,
        scrollTop: "100vh",
        upperThreshold: n,
        lowerThreshold: n,
        onScrollToLower: t,
        style: {
          height: "calc(100vh - ".concat(o, "px)")
        }
      } : {
        onRefresh: t
      };
    }, [o]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({}, h, {
    children: r
  }));
});
function _(_ref2) {
  var _ref2$text = _ref2.text,
    t = _ref2$text === void 0 ? "加载中……" : _ref2$text;
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
var k = function k(_ref3) {
    var n = _ref3.tabs,
      t = _ref3.onChange,
      i = _ref3.actived;
    var _N4 = N(),
      r = _N4.View;
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
  q = function q(_ref4) {
    var i = _ref4.tabs,
      r = _ref4.render,
      s = _ref4.defaultIndex;
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
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(k, {
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
  T = function T(_ref5) {
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
    var _N6 = N(),
      s = _N6.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, {
      onClick: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(t, o ? "".concat(t, "-").concat(o) : "", n),
      style: r
    });
  },
  V = function V(_ref6) {
    var t = _ref6.popupVisible,
      i = _ref6.popupHandler,
      r = _ref6.children;
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(T, {
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
  I = function I(_ref7) {
    var t = _ref7.count,
      i = _ref7.handleStep;
    var _N8 = N(),
      r = _N8.View,
      o = _N8.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
      className: "numStep"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(T, {
        value: "jianqu",
        onClick: i.bind(null, "minus")
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
        className: "content"
      }, {
        children: t
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(T, {
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
function A(_ref8) {
  var t = _ref8.loading,
    i = _ref8.children;
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressDetail": function() { return /* binding */ Qs; },
/* harmony export */   "AddressList": function() { return /* binding */ Rs; },
/* harmony export */   "Cart": function() { return /* binding */ da; },
/* harmony export */   "ClassifyNav": function() { return /* binding */ Ze; },
/* harmony export */   "CouponList": function() { return /* binding */ ta; },
/* harmony export */   "Cube": function() { return /* binding */ we; },
/* harmony export */   "EvaluateDetail": function() { return /* binding */ Ds; },
/* harmony export */   "EvaluateList": function() { return /* binding */ Is; },
/* harmony export */   "Footprint": function() { return /* binding */ ua; },
/* harmony export */   "Goods": function() { return /* binding */ Ce; },
/* harmony export */   "GoodsClassify": function() { return /* binding */ js; },
/* harmony export */   "GoodsDetail": function() { return /* binding */ bs; },
/* harmony export */   "GoodsDetailPromotion": function() { return /* binding */ ks; },
/* harmony export */   "GoodsDetailTopInfo": function() { return /* binding */ vs; },
/* harmony export */   "GoodsGroup": function() { return /* binding */ Re; },
/* harmony export */   "GoodsList": function() { return /* binding */ As; },
/* harmony export */   "Line": function() { return /* binding */ xe; },
/* harmony export */   "Mine": function() { return /* binding */ ha; },
/* harmony export */   "Notice": function() { return /* binding */ ve; },
/* harmony export */   "OrderDetail": function() { return /* binding */ Ke; },
/* harmony export */   "OrderList": function() { return /* binding */ qe; },
/* harmony export */   "PaymentMode": function() { return /* binding */ pa; },
/* harmony export */   "PlaceOrder": function() { return /* binding */ $s; },
/* harmony export */   "PlaceOrderResult": function() { return /* binding */ sa; },
/* harmony export */   "QjMobileIcon": function() { return /* binding */ Ae; },
/* harmony export */   "Search": function() { return /* binding */ Se; },
/* harmony export */   "SearchPage": function() { return /* binding */ Cs; },
/* harmony export */   "Service": function() { return /* binding */ De; },
/* harmony export */   "Slider": function() { return /* binding */ Le; },
/* harmony export */   "Title": function() { return /* binding */ ke; },
/* harmony export */   "Video": function() { return /* binding */ Ie; }
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
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qj-b2c-api */ "../../qj/lerna-repo/packages/qj-b2c-api/dist/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../../qj/qj-mobile-react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-react/node_modules/lodash-es/isEqual.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-react/node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash-es */ "../../qj/qj-mobile-react/node_modules/lodash-es/isUndefined.js");
/* harmony import */ var qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qj-mobile-store */ "../../qj/lerna-repo/packages/qj-mobile-store/dist/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "../../qj/qj-mobile-react/node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var china_division_dist_provinces_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! china-division/dist/provinces.json */ "../../qj/qj-mobile-react/node_modules/china-division/dist/provinces.json");
/* harmony import */ var china_division_dist_cities_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! china-division/dist/cities.json */ "../../qj/qj-mobile-react/node_modules/china-division/dist/cities.json");
/* harmony import */ var china_division_dist_areas_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! china-division/dist/areas.json */ "../../qj/qj-mobile-react/node_modules/china-division/dist/areas.json");
















function Oe(e, s) {
  var a = {};
  for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && s.indexOf(c) < 0 && (a[c] = e[c]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var n = 0;
    for (c = Object.getOwnPropertySymbols(e); n < c.length; n++) s.indexOf(c[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[n]) && (a[c[n]] = e[c[n]]);
  }
  return a;
}
function fe(e, s, a, c) {
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
var Ae = function Ae(_ref) {
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
  ye = {
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
  Ce = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref2) {
    var _ref2$defaultValue = _ref2.defaultValue,
      a = _ref2$defaultValue === void 0 ? [] : _ref2$defaultValue,
      _ref2$classCode = _ref2.classCode,
      c = _ref2$classCode === void 0 ? "" : _ref2$classCode,
      l = _ref2.margin,
      o = _ref2.circular,
      d = _ref2.cell,
      _ref2$gap = _ref2.gap,
      m = _ref2$gap === void 0 ? 10 : _ref2$gap,
      _ref2$goods = _ref2.goods,
      g = _ref2$goods === void 0 ? [] : _ref2$goods,
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
      C = _r2.Text;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(f.current, g) || (f.current = g, (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(g) ? O(a) : fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee() {
        var _e2;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.find)({
                goodsCode: g.toString()
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
    }, [g]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, Object.assign({
      style: {
        paddingTop: b,
        paddingBottom: p
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, Object.assign({
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])({}, "goods-".concat(c), !0)),
        style: {
          display: "grid",
          gap: m,
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
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ye.goodDetail, "?skuCode=").concat(a.skuCode));
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
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ae, {
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
  ve = function ve(_ref3) {
    var s = _ref3.title,
      a = _ref3.text,
      c = _ref3.backgroundColor,
      n = _ref3.color,
      i = _ref3.fontSize,
      t = _ref3.borderColor,
      l = _ref3.paddingTop,
      o = _ref3.paddingBottom,
      d = _ref3.paddingLeft,
      m = _ref3.paddingRight;
    var _r3 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _r3.View,
      h = _r3.NoticeBar;
    return g ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
      style: {
        paddingTop: l,
        paddingBottom: o
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, {
          speed: 50,
          style: {
            "--border-color": t,
            "--font-size": i + "px",
            "--background-color": c,
            "--text-color": n,
            paddingLeft: d,
            paddingRight: m
          },
          content: a,
          color: "alert"
        })
      })
    })) : null;
  },
  ke = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref4) {
    var s = _ref4.value,
      a = _ref4.fontSize,
      c = _ref4.textAlign,
      n = _ref4.color,
      i = _ref4.backgroundColor,
      t = _ref4.fontWeight,
      l = _ref4.textDecoration,
      o = _ref4.fontStyle,
      d = _ref4.paddingTop,
      m = _ref4.paddingLeft,
      g = _ref4.paddingRight,
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
          paddingLeft: m,
          paddingRight: g
        }
      }, {
        children: s
      }))
    }));
  }),
  we = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref5) {
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
      m = _r5.Image,
      g = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(s, o);
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
        children: g.map(function (s, n) {
          var i, t;
          return 1 === a ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, {
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
  xe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref6) {
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
  Ie = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref7) {
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
  De = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref8) {
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
  Te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADcdJREFUeF7tnQXMZUcVx38FihUvbkGCu7sVDVYo7lLctUhwd1JcUiw4FCgeXIMU1+LuUtwtP3Ze2C673zvn3pkr37sn2WzTPTNv5sz/jhzdi4U2WgJ7bfTsl8mzAGDDQbAAYAHAhktgw6e/7AALADZcAhs+/WUHWACw4RLY8OkvO8ACgG0jgb2BMwHnKH+fCNgHOB7gfwv2vwF/BI4E/gD8Cvg68DXgh9tGEomJzHkHOCewH3B54LzAGYFjJOa+K6uAEAifAt4HfAD4eY/+ZtF0TgA4FnBN4ICy8KdsLOF/A18C3g28Gji88e+N0v0cAHAh4JbATYCTjSKlHT96BPAa4GXAt0ccR9WfnioAjg7cGHgQcK6qM+7f2b+Aw4DHleOif48j9jA1AHiR80t/MHC2EeUS/emPAg8H3httMDW+KQHg2sDBwBmmJqTAeN4B3B34VoB3UixTAMBpgMcDt5iUZPKD8Yn5dOARwF/yzcdpMSYA/O37FYEdd5zpN/nVbwIHAh9q0nvlTscCwEmBlwJXrzyfqXT3T+AxwKMAL42TpTEAcFnglYBb/3an9wM3BX461YkODYC7lXOyj8Zud7L0i/s88Nmi2lW965/f7aT6td0xi3r4xMC+wFmBs5cXx8WA0zdYqB8D1wA+16Dv3l0OCYBHAw/pPeL/daDu/g3lCeZ5+5sKfZ8ZuAJwZeBawHEq9GkXvwWuU9TLlbqs080QAFCp8xzgDhWGrCHn0KKNc3tteb6eALheeZ1ob+grq78CNyvjryCKOl30ndS6Ubj4nvc3XMe45t+13j0TeEax4PXsLt1cY5PKqesDzqkreVTdtgC4ax9V27UGwPOAO/YYsV+8KlcX//c9+qnV1DuDR1kfQP8DuC7w1lqD6tNPSwD4BHpoj8EpIC+N3+vRR6umHgnPBjRJd6E/A1cBPtKlcc02rQBwlyKgLmP9RdkmJ/GFbDEBXxTaAR4IHK3DRH8NXAb4Soe21Zq0AIDPqQ8DGnay5G3ed/OPsg1H5PfV8ArgVB3G8A1Ac/dox1ttAPi29i1+ug7CeFK5aHlRmhu5+L5OLtFh4C8f0w5SEwD29UZg/6QQ9Lw5CHhKst3U2LVnvLYofbJjux1wSLZRDf6aALhX0fJlxvV34NblqZhpN1VeNZwupB5MGfJSeMHidZRp15u3FgBOC3y1eOBGB+WX75v4JdEGM+FTphq6suZt7z++LpTLYFQLAK8vWrPMwO8LPC3TYEa8XoDfAlw1OWYvwK9KtunFXgMAVwP0iMmQ5/39Mw1myHv88s5XixilnxTjlEasQagvADzzfMeeJTFalR8+ndSIbXdSc2icgWCI0lOLo0yUvxdfXwB42fG8i5LKDy87U9TuReeQ5btRiSuItvtTCXIZJCilDwDUfhk4YShWlNSBvynKvI34jCXIXAqfUFzim4ugDwC0jL0uMcI3d9ARJLqfNKsKMsPO/DtC3gH0jtYK2pT6AMCzTTVmhNzWDPD4boR5m/LcufhFRKenIU2/wqbUFQAXAD6TGNkji/dvosm2Y9WP4NPA+YIz82Mx2rmpXqArAHy/3zs4kcG2s+B4xmS7QVEXR8dwudbu5V0A4NPvB0A0OtegD71pFtphNv5CIt5RtbJ2gmbUBQB6uEZt9UbIeJn5WbMZzK/jWyXU3+6efmjaCppQFwC8MIFKw6mN8l3ofxI4NqDGz6wlETInwtsijF14ugDAAEgvJxFqOvjIACbK49auISxC3re0mzShLAAMnIhq8dRkaSXU5LvQUSWg1U+39ggZUOKrqwllAXAb4EXBkXhU1IgFCP7crNi8DBouFsl4YuzDKYBftphhFgDq/aPODiZ6MLfOQruXgN5DPgsjZICKUVDVKQsAlT+R7UjlxamnHBRZXZL5DjOaQb2PdbOvThkAyOuzxLx760jvoK4+8+v63i7/blCqcoqQTiI6i1SnDAC80KkAipBbv0fAQnuWgPcAI598Fq4jVcgXXsfU5d8zALhSyZkX+Z1F9x+REnwROHeA1SSWBqtWtwtkAHB74AWBwcpiFKxBoQttLQHN6ZrVI6RGsLpGNQMA8/k8OTJS4OLAJ4K8m8z2xBITEZGBafNMelGVMgBwW39Y8Ne94OgAsdDWEjARptHPEdL3ImOCj/SZSnqQMQF7YZxTfF9IWA2YjH429D1Cag8/GGHM8GR2gIwR6ITlyZgZyybyZiyDJtI01qAqZQCQ0QIaJ9fMhFlVAuN25lM5ellWa2gATlXKAMCECMb9R8g8gBZjWGhrCWReVuZUzAbgrJV/BgC6Kj9gbY87GCzesMkOoEExcR/AQJAINXEPywDAFG/mx4mQ4VAqORbaWgLq+M0tHKHRXwH3KNm8I4M1z957IowbzmP6PI1CETLMzIwiVSmzA2QuLD5vvDMstLUE/EiuGBCSPgFerM01WJUyAHALMhgkQubzu2eEccN5zHYayZksX5e0O2vFmwGAZmDNwZE27+oQG792sNuMISNPk26ZZLs6RRZz5x+NIta8vT4F55jwqbqQ99ChW3/0nvTihBNpavxZAETPLAeh/Vo79kK7l8BjEwEzd03GFYZlngWAUT4mRoyQGUDmnvkrMs+uPB8rVtNIe93wmqSbzwLA553ne4QsuGg61IX+XwInKbb9SN0EvYYMImmSUSULAJ8iZvmwiuc68vz35moUzEJHlcCdgOcGhWIZ28hTMdjdUdmyALC1JsnojXQ7ZwLrJPDSyHqDlwx2oLrYamRNqAsAMiphy7icv8nI59upVUnU6EVlL3+zUrXRQews7uwEzAhmJe6FdkhAJZlFJiPU/APqAgAHbqq3S0VmUN66Xh4X2hHi9Z1ELSJd8KIGuE7y7QoAq4BYDSRKnnc+ezadMiZ1b/3mVmjqWtcVAJZdsxxaJKjBRbe4snEFm0zZfMpmXj+gtcC6AsBxZXwE5TdRhAkjNpUyMQDKSB2KupSm1AcAXgaPACLKDCfhjqG7+GjVMZpKcuvOMwo0ezKPkK+n6pFAuw6zDwDsy2oXRgFFyciiPlXEor8zJT49pLWJ+MFEya3fI6A59QWAaWJNF5spmnTzUmOn+eQm8gPWE8pE9lpyR9+L5l+/8ukLAPvIuIvLr0+BlsLq7k0TWfCdh5HJAbBqZ8naaBa23lOuAQDftt4FolmvHLQp5i2Zpl1hu5IKMN24I3aTlQzMBmZircGoBgAcrPbqZyVH/UlgvxIjn2w6efbzlAyfmY/CQBpDxZupfXcntVoAMA/uxzskMXCrM//N3ya/pPEBetnThStbR9BAURVFg1ItADhoUW9IeLbkum9db70mQZg7+XRz24+m0V3N149HC+vgKfVqAsDJmBbu+R1WUW9jU9AOUiWjw/giTYzetRiGz74M/bYk3tJGMDjVBoATyD57VpP27LMq9xz9CI2ZNHw+c+Fbzds5ZwpvVAVJCwBYIOlwwIwWWTLwwUwk2Qtl9ndq8Zu3R5V413LyHnvWWh6tgHQLAChccwnr9ZI9C1cLY3kZbebfr7VSDfpRvatbV0bDt7thmPfH19AoIGgFACfqpVD3MS2HXcgyM+Yk0hO5ekhUlwGVNt7uze2TKQK17ue8++j3p1Z1UGoJACfixeidHc/GlSDUGAoC7Q6D35J3Wo2Tw3/DudV5RJJlZhdylJ2gNQAUgrd78+LqUdyHzFJuiXmBMFhlzbLFGxlt5Y6+c1g3/8FBMAQAnLQXHZU+hov1JauQGKFkLT6fXS12BTV45uRxm3drHkpOymbQ42DIianm9DiIRMNGQeIb2qrb+s77x9y7XQDhy0WQqr/3QqaxKurnEB1rhm+wnWBIACgAC06Y6OgiGWkkeF189Qkap/xbY5NPLf8YYeNCq6jxDPdMN+mCz9WaoNx1uDrAZGoHr9oPAoKhAeDk/LIsiHjQwFtrAkdVWL2n6PyiYsvqIF1A1vw4GAMAK+nuDxj23PWZWGWVGnWiIsyMKtZXkqyuPkkQjAkABWPs4MGARaW3A6m7MKWuauFdgzk9arynWEgjS82Og7EBsBKEFy9zCuk0OlfylaP2cqv0eJPbCaYCABddM7J2AEvSzulYMIGzETzR2n5ePD0OJrETTAkAqy/fG/qBJSll1qliyN3jy2W791WTdeCczE4wRQCsFnGfon0znaql56dAnuuHlbA4o52yC7/zHCaxE0wZADsLSzdptXLerH2/D026ah9aXi0GuNSi0UEwFwCsBL43cOmirfPieNFGGjuVN7ppebHzi49WS+0CjFFBMDcA7Cpg7wsCwtzECtJXhH/2Da6EW7qp79Qa+mbXNc0oZm3zQ6a4Gw0EcwfAntZZ1auGJwGy+uP/UzunWlgX7CNL/qIutoMgvlJso4BguwIgJfkJMQ/+OlgAMKHVL0PpsxOYkU1DWzipxAKA6QHAEfXZCVLhZQsApgmAviDQKTcUZ7AAYLoA6AMCjWt6S62lBQBrRTQ6Q5fjQD/Mt0dGvgAgIqXxeTIgMNBWQ1OoatsCgPEXNzqCKAhM3xetQzSot2t0ogvfniUgCDRC7al8jO5nxmKEI62XHWB+cDMji84zhtSv1s/IqUOKCT28+E59AcD8ALAasU6mFpLwzNeG0SndzgKA+QKgysgXAFQR43w7WQAw37WrMvIFAFXEON9OFgDMd+2qjHwBQBUxzreTBQDzXbsqI18AUEWM8+1kAcB8167KyBcAVBHjfDv5D+vIKZ/vdzjHAAAAAElFTkSuQmCC",
  Be = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAGCAYAAADQQP5pAAAAAXNSR0IArs4c6QAAAMhJREFUKFPFUjFqQkEUfLOmeAoWJodI7qE3sFdrS4sPCykexPA/C7baqr030Hskh1ALQbfJTviBSFiszZQz82bgMTCzhxjjq4iMATRJblR1YmYHyWBmrRhjSXJQSwDWqurN7Jx7vfdPJGcA+iRrfaGqU3jv30jWhVcA2JVl2bsRsiQ5zPhVVVWjG94tyW6W+1O4J/mYH6SUXkIIn798URRt59xRRBqZ9yul1AkhnP54n51zH3kmgMO/FN7tpSLyjjuN5iIi83o039P9n5mWDu/PAAAAAElFTkSuQmCC\n",
  Se = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref9) {
    var a = _ref9.value,
      c = _ref9.iconShow,
      n = _ref9.fontColor,
      i = _ref9.backgroundColor,
      t = _ref9.borderRadius,
      l = _ref9.paddingTop,
      o = _ref9.paddingBottom,
      d = _ref9.paddingLeft,
      m = _ref9.paddingRight;
    var _r9 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _r9.View,
      h = _r9.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
      onClick: function onClick() {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ye.search);
      },
      style: {
        paddingTop: l,
        paddingBottom: o,
        paddingLeft: d,
        paddingRight: m
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
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
          src: Te,
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
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
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
  Ve = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref10) {
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
  Le = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref11) {
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
      g = _ref11.paddingRight,
      h = _ref11.selectImg,
      b = _ref11.imgHeight;
    var p = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(s, h);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.View, Object.assign({
      style: {
        paddingTop: l,
        paddingBottom: o,
        paddingLeft: r,
        paddingRight: g
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
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ve, {
            type: a,
            item: s
          });
        }
      })
    }));
  }),
  Pe = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.JumboTabs,
  Re = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref12) {
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
    }, [c]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Pe, Object.assign({
      style: {
        marginTop: i + "px",
        marginBottom: l + "px"
      }
    }, {
      children: r.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Pe.Tab, Object.assign({
          title: s.title,
          description: s.subTitle
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ce, {
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
  ze = function ze(_ref13) {
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
  Me = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
  Fe = function Fe(s) {
    var c = s.dataState,
      n = Oe(s, ["dataState"]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["2", "-1"].includes(c + "") ? null : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(We, Object.assign({
        dataState: c
      }, n))
    });
  },
  We = function We(s) {
    var a = s.dataState,
      c = s.contractAppraise,
      n = Oe(s, ["dataState", "contractAppraise"]);
    var _r12 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r12.View;
    4 !== a && 4 !== a || 1 === c ? 4 !== a && 4 !== a || 1 !== c || (a = 5) : a = 4;
    var _Q = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderOperate)(Object.assign({
        dataState: a
      }, n)),
      t = _Q.operateArray,
      l = _Q.handlerImpl;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "btnGroup"
    }, {
      children: t.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Me, Object.assign({
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
  Ge = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button;
function Ee(_ref14) {
  var a = _ref14.contractBillcode,
    c = _ref14.dataBmoney,
    n = _ref14.dataBnum,
    i = _ref14.goodsList,
    t = _ref14.dataState,
    l = _ref14.contractId,
    o = _ref14.init,
    d = _ref14.contractAppraise;
  var _r13 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    m = _r13.View,
    g = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.orderStatusImpl)(t);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
    className: "orderListItem"
  }, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
      onClick: function onClick() {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.orderDetail, "?contractBillcode=").concat(a));
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
        className: "topInfo"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
          className: "orderNo"
        }, {
          children: ["订单号: ", a, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ge, Object.assign({
            className: "copy",
            size: "mini",
            fill: "outline"
          }, {
            children: "复制"
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
          className: "status"
        }, {
          children: g
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
        className: "goodsItemWrap"
      }, {
        children: [i.map(function (s) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ze, Object.assign({}, s), s.contractGoodsId);
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
          className: "allInfo"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
            className: "totalNum"
          }, {
            children: ["共", n, "件商品"]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
            className: "totalPrice"
          }, {
            children: ["合计 ￥", c]
          }))]
        }))]
      }))]
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fe, {
      init: o,
      contractId: l,
      contractBillcode: a,
      dataState: t,
      contractAppraise: d
    })]
  }));
}
function Qe(e) {
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
var Ue = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
var He = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref15) {
    var _this = this;
    var a = _ref15.item,
      c = _ref15.refreshNum;
    var _r14 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _r14.View,
      m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1),
      _n7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n8 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n7, 2),
      g = _n8[0],
      p = _n8[1],
      _n9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _n10 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n9, 2),
      u = _n10[0],
      N = _n10[1],
      j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0),
      O = Qe("#qj-tabs-id");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      f();
    }, [c]);
    var f = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function () {
        j.current = 0, N([]), A();
      }),
      A = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return fe(_this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee2() {
          var e, _s3;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!m.current) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                p(!0), ++j.current;
                e = a.code;
                _context2.prev = 4;
                _context2.next = 7;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryContractPageC)({
                  page: j.current,
                  rows: 10,
                  isLocalMock: !Ue,
                  childFlag: !0,
                  dataStateStr: e
                });
              case 7:
                _s3 = _context2.sent;
                m.current = (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(_s3.rows) || _s3.rows.length < 10, N(function (e) {
                  return e.concat(_s3.rows || []);
                }), p(!1);
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
          height: O + 20
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, {
            children: [u.map(function (e, s) {
              return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Ee, Object.assign({
                init: f
              }, e, {
                key: s
              }));
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, {
              children: g ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Loading, {}) : null
            })]
          })
        }));
      }, [u, O])
    }));
  }),
  qe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref16) {
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
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(He, {
              item: a,
              refreshNum: s
            })
          }));
        }
      })
    }));
  }),
  Ke = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref17) {
    var a = _ref17.contractBillcode;
    var _r16 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r16.View,
      n = _r16.Text,
      _K = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderDetail)(a || ""),
      i = _K.orderDetail;
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
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ze, Object.assign({}, s), s.contractGoodsId);
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
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fe, {
              contractBillcode: i.contractBillcode,
              contractId: i.contractId,
              dataState: i.dataState
            })
          }))]
        }))
      }))]
    }));
  }),
  Ze = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref18) {
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
  Xe = function Xe(_ref19) {
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
      return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee3() {
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
        console.log(123), (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(a.dataObj) ? fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee4() {
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
        })) : fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee5() {
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
        src: Te,
        alt: "",
        className: "icon"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "txt"
      }, {
        children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(a.dataObj) ? "收藏" : "已收藏"
      }))]
    }));
  },
  Ye = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref20) {
    var a = _ref20.promotionBegintime,
      c = _ref20.pbName,
      n = _ref20.discName,
      i = _ref20.promotionCode,
      t = _ref20.promotionName,
      o = _ref20.couponOnceNums,
      d = _ref20.couponOnceNumd,
      m = _ref20.promotionEndtime;
    var _r19 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _r19.View,
      h = _r19.Text,
      _Z = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddCoupon)(),
      b = _Z.save,
      p = _Z.isPick,
      u = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return o - d;
      }, [o, d]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
      className: "couponItem"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
        className: "coupon-content"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
          className: "price"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
            className: "symbol"
          }, {
            children: c
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
            className: "num"
          }, {
            children: n
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, Object.assign({
            className: "title"
          }, {
            children: t
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(h, Object.assign({
            className: "date"
          }, {
            children: [dayjs__WEBPACK_IMPORTED_MODULE_6___default()(a).format("YYYY-MM-DD"), " -", " ", dayjs__WEBPACK_IMPORTED_MODULE_6___default()(m).format("YYYY-MM-DD")]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, u > 0 ? Object.assign({
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
  Je = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl,
  $e = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useStore,
  _e = function _e(_ref21) {
    var c = _ref21.coupon;
    var _r20 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r20.View,
      t = _r20.Text,
      _n11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n12 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n11, 2),
      l = _n12[0],
      d = _n12[1],
      _$e = $e(),
      m = _$e.couponValue;
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
            children: m ? "\u5DF2\u9009\u62E9: ".concat(m) : "请选择优惠券"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: Be,
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "stampWrap"
          }, {
            children: c.map(function (e, s) {
              return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Ye, Object.assign({}, e, {
                key: s
              }));
            })
          }))
        }))
      }))]
    });
  },
  es = function es(_ref22) {
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
    var m = function m(e) {
      if (!a) {
        for (var _s6 = 0; _s6 < o.length; _s6++) o[_s6].icon = _s6 > e ? "star" : "star-fill";
        d((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_18__["default"])(o)), s(e + 1);
      }
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
      children: o.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ae, {
          onClick: m.bind(null, a),
          value: s.icon,
          style: {
            color: "#EC6C5C",
            fontSize: c
          }
        }, a);
      })
    });
  },
  ss = function ss(_ref23) {
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
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(es, {
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
  as = function as(_ref24) {
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
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ss, {
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
  cs = function cs() {
    var _r24 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r24.Text,
      c = _r24.View,
      n = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl();
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "goodsDetailHandleBar"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "linkGroup"
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
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.switchTabImpl)(ye.shopping);
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
  ns = function ns(_ref25) {
    var s = _ref25.tabActive,
      a = _ref25.goods;
    var _r25 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r25.View,
      _n15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _n16 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n15, 2),
      i = _n16[0],
      l = _n16[1];
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
  is = function is(_ref26) {
    var a = _ref26.skuName,
      c = _ref26.skuOption,
      n = _ref26.index;
    var _r26 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r26.View,
      t = _r26.Text,
      _J = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddShopping)(),
      l = _J.handleChooseSize,
      o = _J.spec;
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
  ts = function ts(_ref27) {
    var a = _ref27.goods,
      c = _ref27.goodSku;
    var _J2 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddShopping)(),
      n = _J2.count,
      i = _J2.spec,
      t = _J2.popupVisible,
      l = _J2.isNeedButton,
      o = _J2.handleStep,
      d = _J2.popupHandler,
      m = _J2.addShoppingImpl,
      _r27 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _r27.View,
      h = _r27.Text,
      b = _r27.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Popup, Object.assign({
      popupVisible: t,
      popupHandler: d
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
        className: "goodsDetail-size-popup"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
          className: "content"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "goodsInfo"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
              className: "lPart"
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(b, {
                src: a.dataPic,
                alt: "",
                className: "goodsImg"
              })
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
              className: "rPart"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
                className: "name"
              }, {
                children: a.goodsShowname || ""
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
                className: "price"
              }, {
                children: ["￥ ", a.pricesetNprice.toFixed(2) || ""]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
                className: "chosen"
              }, {
                children: ["已选择: ", i.toString()]
              }))]
            }))]
          })), c.map(function (s, a) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(is, {
              index: a,
              skuName: s.skuName,
              skuOption: s.skuOption
            }, a);
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
            className: "countWrap"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
              className: "label"
            }, {
              children: "购买数量"
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.NumStep, {
              count: n,
              handleStep: o
            })]
          }))]
        })), l && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
          className: "btnWrap",
          onClick: m
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
  ls = function ls(_ref28) {
    var a = _ref28.promotionList;
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
        children: a.length ? a.map(function (_ref29, a) {
          var s = _ref29.discName;
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
  os = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl,
  rs = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useStore,
  ds = function ds(_ref30) {
    var c = _ref30.goods,
      n = _ref30.goodSku;
    var _r29 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r29.View,
      t = _r29.Text,
      _rs = rs(),
      l = _rs.count,
      o = _rs.spec,
      d = os();
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
            src: Be,
            alt: "",
            className: "icon"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ts, {
        goodSku: n,
        goods: c
      })]
    });
  },
  ms = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  gs = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.StoreProvider,
  hs = function hs(_ref31) {
    var c = _ref31.skuCode;
    var n;
    var _r30 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r30.View,
      t = _r30.Text,
      l = _r30.Skeleton,
      _$ = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsDetailImpl)(c),
      o = _$.goods,
      d = _$.promotionArr,
      m = _$.checkCollectionObj,
      g = _$.setCheckCollectionObj,
      h = _$.sliderArr,
      b = _$.tabActive,
      p = _$.setTabActive,
      u = _$.goodSku,
      N = _$.evaluateArr,
      j = _$.coupon;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "GoodsDetailWrap",
      style: {
        minHeight: ms ? "" : "667px",
        height: ms ? "" : "auto",
        overflow: ms ? "" : "auto"
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Le, {
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
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xe, {
              goods: o,
              checkCollectionObj: m,
              setCheckCollectionObj: g
            })
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ds, {
          goods: o,
          goodSku: u
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ls, {
          promotionList: d
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_e, {
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
            children: 1 === b ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ns, {
              tabActive: b,
              goods: o
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(as, {
              evaluateArr: N
            })
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cs, {})]
      })
    }));
  },
  bs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref32) {
    var s = _ref32.skuCode;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(gs, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(hs, {
        skuCode: s
      })
    });
  });
function ps(e) {
  var s = "https://b2cweapp40673927e2a14ea49df338dc06bd4e9a.saas.qjclouds.com/";
  return RegExp(/https?/).test(e) ? e : s + e;
}
var us = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref33) {
    var c = _ref33.navList,
      n = _ref33.activeKey;
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
                children: ((null == a ? void 0 : a.childList) || []).map(function (_ref34) {
                  var a = _ref34.classtreeCode,
                    c = _ref34.goodsClassCode,
                    n = _ref34.goodsClassLogo,
                    l = _ref34.goodsClassName;
                  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                    onClick: function onClick() {
                      return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ye.goodList, "?classtreeCode=").concat(a));
                    },
                    className: "classifyFloorGoodsItem"
                  }, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                      src: ps(n),
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
  Ns = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.SideBar,
  js = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _r32 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r32.View,
      c = _r32.Text,
      _ref35 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsClassify)(),
      n = _ref35.activeKey,
      i = _ref35.setActiveKey,
      t = _ref35.navList,
      l = _ref35.flag;
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ye.search);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ae, {
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ns, Object.assign({
            activeKey: n,
            onChange: i,
            style: {
              "--width": "88px"
            }
          }, {
            children: t.map(function (s) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ns.Item, {
                title: s.goodsClassName
              }, s.goodsClassCode);
            })
          }))
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
          className: "main"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(us, {
            navList: t,
            activeKey: n
          })
        }))]
      }))]
    }));
  }),
  Os = [{
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
  fs = function fs(_ref36) {
    var a = _ref36.setParams;
    var _r33 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r33.View,
      _n17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _n18 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n17, 2),
      i = _n18[0],
      t = _n18[1],
      _n19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Os),
      _n20 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n19, 2),
      l = _n20[0],
      o = _n20[1];
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "sortWrap"
    }, {
      children: l.map(function (_ref37, d) {
        var n = _ref37.order,
          l = _ref37.sortField,
          r = _ref37.name;
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
          children: [r, n && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ae, {
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
  As = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref38) {
    var _ref38$classtreeCode = _ref38.classtreeCode,
      a = _ref38$classtreeCode === void 0 ? "" : _ref38$classtreeCode,
      _ref38$searchParam = _ref38.searchParam,
      c = _ref38$searchParam === void 0 ? "" : _ref38$searchParam;
    var _r34 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r34.View,
      t = _r34.Text,
      _n21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _n22 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n21, 2),
      o = _n22[0],
      d = _n22[1],
      _ee = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsList)(a, c, o),
      m = _ee.loading,
      g = _ee.getData,
      p = _ee.list,
      u = Qe("#searchId");
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ye.search);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ae, {
            value: "fenxiang"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
            children: "搜索商品"
          })]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fs, {
          setParams: d
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "listWrap"
      }, {
        children: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
            onScroll: function onScroll() {
              return g(o);
            },
            height: u
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              className: "list"
            }, {
              children: p.map(function (a) {
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                  onClick: function onClick() {
                    return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ye.goodDetail, "?skuCode=").concat(a.skuCode));
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
            })), m ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Loading, {}) : null]
          }));
        }, [u, p])
      }))]
    }));
  }),
  ys = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Cs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref39) {
    var a = _ref39.placeholder,
      c = _ref39.placeholderText,
      i = _ref39.history;
    var _r35 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _r35.View,
      l = _r35.Text,
      o = _r35.Input,
      _n23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("history") || [];
      }),
      _n24 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n23, 2),
      d = _n24[0],
      m = _n24[1];
    console.log(23, (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("history"));
    var g = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function (e) {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee6() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                ys && (m(function (s) {
                  if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(e.detail.value)) return s;
                  var a = s.concat(e.detail.value);
                  return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.setStorage)("history", a), a;
                }), h(e.detail.value));
              case 1:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
      }),
      h = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function (e) {
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ye.goodList, "?searchParam=").concat(e));
      });
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      className: "searchPage"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "search-title"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: Te,
          alt: ""
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
          "confirm-type": "search",
          type: "text",
          className: "content",
          onConfirm: g
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
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ae, {
            onClick: function onClick() {
              return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee7() {
                return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)();
                    case 2:
                      _context7.sent.removeStorageSync("history");
                      m([]);
                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7);
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
  vs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
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
            src: Te,
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
  ks = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
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
  ws = function ws(_ref40) {
    var _ref40$starColor = _ref40.starColor,
      a = _ref40$starColor === void 0 ? "#FF0934" : _ref40$starColor,
      _ref40$starSize = _ref40.starSize,
      c = _ref40$starSize === void 0 ? "12px" : _ref40$starSize,
      n = _ref40.itemData;
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
  xs = [{
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
  Is = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _n25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1"),
      _n26 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n25, 2),
      c = _n26[0],
      t = _n26[1],
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
        children: xs.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ws, {
            itemData: s
          }, a);
        })
      }))]
    });
  }),
  Ds = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref41) {
    var c = _ref41.code;
    var _se = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useEvaluateDetail)(c),
      n = _se.orderInfo,
      t = _se.changeStar,
      l = _se.Submit,
      o = _se.changeContent,
      d = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
      _r40 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      m = _r40.View,
      h = _r40.Image,
      b = _r40.TextArea,
      p = _r40.Textarea,
      u = b || p,
      N = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("宝贝满足你吗？分享一下它吧");
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
      className: "evaluateDetail"
    }, {
      children: [n.map(function (c, n) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
            className: "topInfo"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
              className: "lPart"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, {
                src: c.dataPic,
                className: "img"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
                className: "goodsInfo"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
                  className: "goodsName"
                }, {
                  children: c.goodsName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
                  className: "goodsSize"
                }, {
                  children: c.skuName
                }))]
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
              className: "rPart"
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
                className: "price"
              }, {
                children: ["￥ ", c.pricesetNprice]
              }))
            }))]
          }), n), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
            className: "rate"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
              className: "title"
            }, {
              children: "商品评价"
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(es, {
              onChange: t.bind(null, n)
            })]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
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
  Ts = function Ts(_ref42) {
    var s = _ref42.txt,
      a = _ref42.onChange,
      c = _ref42.checked;
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
  Bs = "400-990-3366",
  Ss = function Ss() {
    return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee8() {
      var e;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if ((0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)()) {
              _context8.next = 2;
              break;
            }
            return _context8.abrupt("return");
          case 2:
            _context8.next = 4;
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)();
          case 4:
            e = _context8.sent;
            e.showActionSheet({
              itemList: ["\u5BA2\u670D\u7535\u8BDD ".concat(Bs)],
              success: function success() {
                e.makePhoneCall({
                  phoneNumber: Bs,
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
            return _context8.stop();
        }
      }, _callee8);
    }));
  },
  Vs = {
    label: ""
  },
  Ls = function Ls(_ref43) {
    var a = _ref43.itemData,
      c = _ref43.delAddress,
      n = _ref43.setDefault,
      _ref43$fontSize = _ref43.fontSize,
      i = _ref43$fontSize === void 0 ? "12px" : _ref43$fontSize,
      _ref43$iconSize = _ref43.iconSize,
      t = _ref43$iconSize === void 0 ? "12px" : _ref43$iconSize;
    var _r42 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _r42.View,
      o = _r42.Text,
      d = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
      m = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)(),
      g = "weapp";
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
      className: "addressItem"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "upInfo",
        onClick: function onClick() {
          Vs.label = a.addressId, m.navigateBack({
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
          children: "h5" === g ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ts, {
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
  Ps = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
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
  Rs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref44) {
    var a = _ref44.refreshNum;
    var _r44 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r44.View,
      n = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
      _ae = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddressList)(a),
      i = _ae.list,
      t = _ae.delAddress,
      l = _ae.setDefault,
      o = _ae.skullShow;
    return console.log(111111, Vs), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "addressListWrap",
      style: {
        height: n ? "inherit" : "667px"
      }
    }, {
      children: [o ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ps, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "addressList"
      }, {
        children: i.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ls, {
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ye.addressEditor));
          }
        }, {
          children: "+ 新增地址"
        }))
      }))]
    }));
  }),
  zs = [{
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
  Ms = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
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
var Fs = china_division_dist_provinces_json__WEBPACK_IMPORTED_MODULE_7__.map(function (e) {
    return {
      label: e.name,
      value: e.code + "0000",
      children: e.children
    };
  }),
  Ws = function Ws(_ref45) {
    var a = _ref45.form,
      c = _ref45.handleArea;
    var _r46 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r46.View,
      t = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.CascadePicker,
      l = a.getFieldValue("area"),
      _n27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n28 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n27, 2),
      o = _n28[0],
      d = _n28[1],
      m = function m(e) {
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
        for (var _c = 0; _c < Fs.length; _c++) if (Fs[_c].value === e[0]) {
          s.provinceName = Fs[_c].label, a.pIndex = _c;
          break;
        }
        for (var _c2 = 0; _c2 < Fs[a.pIndex].children.length; _c2++) if (Fs[a.pIndex].children[_c2].value === e[1]) {
          s.cityName = Fs[a.pIndex].children[_c2].label, a.cIndex = _c2;
          break;
        }
        for (var _c3 = 0; _c3 < Fs[a.pIndex].children[a.cIndex].children.length; _c3++) if (Fs[a.pIndex].children[a.cIndex].children[_c3].value === e[2]) {
          s.areaName = Fs[a.pIndex].children[a.cIndex].children[_c3].label;
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
          c("h5", m(e));
        },
        options: Fs,
        visible: o,
        onClose: function onClose() {
          return d(!1);
        }
      })]
    });
  },
  Gs = function Gs(_ref46) {
    var s = _ref46.checked,
      a = _ref46.onChange;
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
  Es = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Qs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref47) {
    var s = _ref47.addressId;
    var _r48 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r48.View,
      n = _r48.Switch,
      i = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Form,
      t = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
      l = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Input,
      o = "weapp",
      _ce = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useEditAddress)(s, i, Es),
      d = _ce.skullShow,
      m = _ce.form,
      h = _ce.area,
      b = _ce.defaultAddress,
      p = _ce.handleArea,
      u = _ce.handleDefaultAddress,
      N = _ce.handleFinish;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "addressDetail",
      style: {
        height: Es ? "100%" : "667px"
      }
    }, {
      children: d ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ms, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        form: m,
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
        children: zs.map(function (s, t) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i.Item, Object.assign({
            label: s.label,
            name: s.name,
            rules: s.rules,
            trigger: "cascader" === s.type ? "onConfirm" : "onChange",
            arrow: !1
          }, {
            children: "input" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({}, s.props)) : "switch" === s.type ? "h5" === o ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Gs, {
              onChange: u.bind(null, "h5"),
              checked: "1" === b
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
              color: "#000",
              onChange: u.bind(null, "weapp"),
              checked: "1" === b
            }) : "cascader" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: Es ? "h5" === o ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ws, {
                form: m,
                handleArea: p
              }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("picker", Object.assign({
                mode: "region",
                onChange: p.bind(null, "weapp"),
                value: "123"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
                  className: "areaWrap"
                }, {
                  children: h.provinceName ? "".concat(h.provinceName, "\u2014").concat(h.cityName, "-").concat(h.areaName) : "请选择所在地区"
                }))
              })) : "请选择所在地区"
            }) : void 0
          }), t);
        })
      }))
    }));
  }),
  Us = function Us(_ref48) {
    var s = _ref48.address;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(s) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(qs, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Hs, {
        address: s
      })
    });
  },
  Hs = function Hs(_ref49) {
    var a = _ref49.address;
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
  qs = function qs() {
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
  Ks = function Ks(_ref50) {
    var c = _ref50.payState,
      n = _ref50.savePayPrice,
      i = _ref50.amount;
    var _r51 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _r51.View,
      l = _r51.Text,
      o = c.shoppingCountPrice,
      d = c.freight,
      m = c.comDisMoney;
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
            children: ["￥ ", (+o).toFixed(2)]
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
            children: ["￥ ", m]
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
            children: ["￥ ", i]
          }))]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "placeOrderFooter"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "price"
        }, {
          children: ["合计: ", i]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
          className: "btn",
          onClick: n
        }, {
          children: "生成订单"
        }))]
      }))]
    });
  },
  Zs = function Zs(_ref51) {
    var s = _ref51.goodsList;
    var _r52 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r52.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
      className: "place-order-goods"
    }, {
      children: s.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ze, Object.assign({}, s), a);
      })
    }));
  },
  Xs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref52) {
    var a = _ref52.couponStart,
      c = _ref52.pbName,
      n = _ref52.discName,
      i = _ref52.promotionCode,
      t = _ref52.promotionName,
      l = _ref52.couponEnd,
      o = _ref52.disable;
    var _r53 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _r53.View,
      m = _r53.Text,
      g = _r53.Radio;
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
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
            className: "title"
          }, {
            children: t
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
            className: "date"
          }, {
            children: [dayjs__WEBPACK_IMPORTED_MODULE_6___default()(a).format("YYYY-MM-DD"), " - ", dayjs__WEBPACK_IMPORTED_MODULE_6___default()(l).format("YYYY-MM-DD")]
          }))]
        })), o ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
          className: "coupon-pick-default"
        }, {
          children: "不能用"
        })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, {
          disabled: o,
          value: i,
          className: "choose"
        })]
      }))
    }));
  }),
  Ys = function Ys(_ref53) {
    var c = _ref53.coupon,
      i = _ref53.confirm,
      t = _ref53.amount;
    var _r54 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _r54.View,
      m = _r54.Text,
      _n29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n30 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n29, 2),
      g = _n30[0],
      h = _n30[1],
      _n31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _n32 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n31, 2),
      b = _n32[0],
      p = _n32[1],
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
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
          className: "label"
        }, {
          children: "优惠券"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
            className: "label"
          }, {
            children: N ? "\u5DF2\u9009\u62E9: ".concat(N) : "请选择优惠券"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: Be,
            alt: "",
            className: "icon"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Popup, Object.assign({
        popupVisible: g,
        popupHandler: h
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
          className: "goodsDetail-coupon-popup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, Object.assign({
            className: "stampWrap"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.SmoothRadio, Object.assign({
              onChange: function onChange(e) {
                var s = e.detail.value,
                  a = c.find(function (e) {
                    return e.promotionCode === s;
                  }) || {};
                p(s), h(!1), i(a);
              }
            }, {
              children: c.map(function (e, s) {
                return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Xs, Object.assign({
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
  Js = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  $s = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref54) {
    var a = _ref54.refreshNum,
      c = _ref54.goodsNum,
      n = _ref54.skuId,
      i = _ref54.shoppingGoodsId;
    var _r55 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _r55.View,
      l = Vs.label,
      _ne = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.usePlaceOrder)({
        skuId: n,
        goodsNum: c,
        shoppingGoodsId: i
      }, a, l),
      o = _ne.savePayPrice,
      d = _ne.address,
      m = _ne.list,
      g = _ne.payState,
      h = _ne.coupon,
      b = _ne.confirm,
      p = _ne.amount;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      className: "placeOrder",
      style: {
        height: Js ? "100vh" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
        className: "chooseAddress",
        onClick: function onClick() {
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ye.addressList);
        }
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Us, {
          address: d
        })
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Zs, {
        goodsList: m.current
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
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ys, {
        coupon: h,
        confirm: b,
        amount: p
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ks, {
        amount: p,
        savePayPrice: o,
        payState: g.current
      })]
    }));
  }),
  _s = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderResultResult.useOrderResult,
  ea = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  sa = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref55) {
    var a = _ref55.code;
    var _r56 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r56.View,
      n = _r56.Text,
      _s7 = _s(a || ((0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("contractBillcode") || {}).contractBillcode),
      i = _s7.result,
      t = i.sysRecode,
      l = i.dataObj;
    return console.log(15, t, l), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "placeOrderResult",
      style: {
        height: ea ? "100vh" : "667px"
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
  aa = function aa() {
    var _r57 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _r57.View,
      a = _r57.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "noData"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, {
        src: "https://b2cweapp7c0069b43749439d97b7cae6a02bd459.saas.qjclouds.com/paas/shop-master/c-static/images/wxminiImg/no_coupon.png",
        className: "img"
      })
    }));
  },
  ca = function ca(_ref56) {
    var c = _ref56.coe;
    var _te = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOverdue)(),
      n = _te.overdueList,
      _r58 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r58.View,
      t = _r58.Text;
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
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(aa, {}) : null
    });
  };
/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
  var _r59 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    s = _r59.View,
    c = _r59.Skeleton,
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
var na = function na(_ref57) {
    var c = _ref57.coe;
    var _le = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useUnused)(),
      n = _le.unusedList,
      _r60 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r60.View,
      t = _r60.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 1 === c ? n.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
        style: {
          height: "80vh"
        }
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
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(aa, {}) : null
    });
  },
  ia = function ia(_ref58) {
    var c = _ref58.coe;
    var _r61 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      n = _r61.View,
      i = _r61.Text,
      _oe = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useUsed)(),
      t = _oe.usedList;
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
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(aa, {}) : null
    });
  },
  ta = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _r62 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r62.View,
      c = _r62.Text,
      _re = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCouponList)(),
      n = _re.coe,
      i = _re.setCoe,
      l = _re.config,
      o = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryUsercouponNember)().then(function (e) {
        console.log(26, e);
      });
    }, []), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
      className: "couponList",
      style: {
        height: o ? "100vh" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
        className: "couponTab"
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
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(na, {
          coe: n
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ia, {
          coe: n
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ca, {
          coe: n
        })]
      }))]
    }));
  });
function la(_ref59) {
  var a = _ref59.list;
  var _r63 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    c = _r63.View,
    n = _r63.Text,
    i = _r63.Image,
    t = _r63.Checkbox,
    _de = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useStore)(),
    l = _de.loading,
    _me = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCartItem)(),
    o = _me.select,
    d = _me.onChange,
    m = _me.handleStep;
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
                handleStep: m.bind(null, a.shoppingGoodsId, a.goodsCamount)
              })]
            }))]
          }))]
        }), l);
      })
    }))
  }));
}
var oa = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  ra = function ra(_ref60) {
    var c = _ref60.refreshNum;
    var _r64 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _r64.View,
      t = _r64.Text,
      l = _r64.Checkbox,
      _n33 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
      _n34 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n33, 2),
      o = _n34[0],
      d = _n34[1],
      _he = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCartList)(c),
      m = _he.cartList,
      g = _he.amount,
      h = _he.selectAll,
      b = _he.allCart,
      p = _he.toOrderImpl,
      u = _he.select,
      N = _he.deleteCart,
      j = _he.disMoney;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "cart",
      style: {
        height: oa ? "100%" : "667px"
      }
    }, {
      children: m.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(la, {
            list: m
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
                  children: ["￥ ", g.amount.toFixed(2)]
                }))]
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
              onClick: p,
              className: "btn"
            }, {
              children: ["结算(", g.num, ")"]
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
  da = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref61) {
    var s = _ref61.refreshNum;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.StoreProvider, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ra, {
        refreshNum: s
      })
    });
  }),
  ma = function ma() {
    var _r65 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r65.View,
      c = _r65.Text,
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ye[n.link]);
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
  ga = function ga() {
    var _r66 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _r66.View,
      c = _r66.Text,
      l = _r66.Badge,
      _n35 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _n36 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n35, 2),
      o = _n36[0],
      d = _n36[1],
      m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([{
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
      fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee9() {
        var _e4;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.getContractNumbers)();
            case 3:
              _e4 = _context9.sent;
              d(_e4.dataObj);
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ye.order);
          }
        }, {
          children: "查看全部"
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
        className: "content"
      }, {
        children: m.current.map(function (n, i) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(ye.order, "?id=").concat(i + 1));
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
  ha = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref62) {
    var a = _ref62.avatarStyle,
      _ref62$userAvatar = _ref62.userAvatar,
      c = _ref62$userAvatar === void 0 ? "" : _ref62$userAvatar,
      _ref62$userNickname = _ref62.userNickname,
      n = _ref62$userNickname === void 0 ? "用户名" : _ref62$userNickname,
      i = _ref62.banner;
    var _r67 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _r67.View,
      l = _r67.Text,
      o = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ye.setting);
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
          value: "kehufuwukefu",
          onClick: Ss
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "userSetting",
        onClick: function onClick() {
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(ye.setting);
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
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ga, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ma, {}), i ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        className: "banner",
        src: "",
        alt: ""
      }) : null]
    }));
  }),
  ba = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  pa = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref63) {
    var a = _ref63.code;
    var _r68 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _r68.View,
      n = _r68.Text,
      i = _r68.Radio,
      _be = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderResult)(a),
      t = _be.paymentImpl,
      l = _be.channelList,
      o = _be.contract,
      d = _be.handleRadio,
      m = _be.loading;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "paymentModeWrap",
      style: {
        height: ba ? "inherit" : "667px"
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
        loading: m
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
  ua = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _r69 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _r69.View;
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
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @brushes/simulate-component */ "./node_modules/@brushes/simulate-component/dist/index.js");
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
/* harmony export */   "useAgreement": function() { return /* reexport safe */ _useAgreement__WEBPACK_IMPORTED_MODULE_1__.useAgreement; }
/* harmony export */ });
/* harmony import */ var _useAccountForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAccountForm */ "./src/account/hooks/useAccountForm/index.ts");
/* harmony import */ var _useAgreement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAgreement */ "./src/account/hooks/useAgreement/index.ts");




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
/* harmony import */ var _brushes_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brushes/request */ "../../2023-qj/qj-request-tools/packages/request/dist/index.js");
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
              delta: stackLength() - 1,
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
              delta: stackLength() - 1,
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
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getCurrentPages().length;
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
      url: "account/agreement/index?type=".concat(agreeType)
    });
  };
  return {
    agreementData: agreementData,
    goDetail: goDetail
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
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @brushes/simulate-component */ "./node_modules/@brushes/simulate-component/dist/index.js");
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

/***/ "?67c0":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "../../qj/lerna-repo/packages/qj-b2c-api/dist/index.js":
/*!*************************************************************!*\
  !*** ../../qj/lerna-repo/packages/qj-b2c-api/dist/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addShoppingGoods": function() { return /* binding */ bE; },
/* harmony export */   "addShoppingGoodsBySpec": function() { return /* binding */ wE; },
/* harmony export */   "calculateFreightFare": function() { return /* binding */ gE; },
/* harmony export */   "cancelContractC": function() { return /* binding */ FE; },
/* harmony export */   "checkCollectExit": function() { return /* binding */ D; },
/* harmony export */   "confirmReceive": function() { return /* binding */ UE; },
/* harmony export */   "deleteAddress": function() { return /* binding */ r; },
/* harmony export */   "deleteCollectByCode": function() { return /* binding */ Y; },
/* harmony export */   "deleteCollectByCodeStr": function() { return /* binding */ aE; },
/* harmony export */   "deleteFootprintByCodeStr": function() { return /* binding */ SE; },
/* harmony export */   "deleteShoppingGoodsBatch": function() { return /* binding */ ME; },
/* harmony export */   "find": function() { return /* binding */ y; },
/* harmony export */   "getAddress": function() { return /* binding */ _; },
/* harmony export */   "getContractByCode": function() { return /* binding */ AE; },
/* harmony export */   "getContractNumbers": function() { return /* binding */ n; },
/* harmony export */   "getFalgSettingForPaydate": function() { return /* binding */ pE; },
/* harmony export */   "getResourceGoodsInfoBySkuCode": function() { return /* binding */ d; },
/* harmony export */   "getTotalDiscountPrice": function() { return /* binding */ dE; },
/* harmony export */   "paymentCommit": function() { return /* binding */ $; },
/* harmony export */   "queryAddressBymerberCode": function() { return /* binding */ jE; },
/* harmony export */   "queryCollectPage": function() { return /* binding */ C; },
/* harmony export */   "queryContractPageC": function() { return /* binding */ z; },
/* harmony export */   "queryCouponListBySkuCode": function() { return /* binding */ BE; },
/* harmony export */   "queryEvaluateGoodsPagetrue": function() { return /* binding */ PE; },
/* harmony export */   "queryExpressInfo": function() { return /* binding */ mE; },
/* harmony export */   "queryFootprintPagePlat": function() { return /* binding */ P; },
/* harmony export */   "queryGoodsClassTree": function() { return /* binding */ L; },
/* harmony export */   "queryPromotionListByGoodsCode": function() { return /* binding */ g; },
/* harmony export */   "queryShoppingPage": function() { return /* binding */ lE; },
/* harmony export */   "queryShoppingToContract": function() { return /* binding */ yE; },
/* harmony export */   "queryToContract": function() { return /* binding */ iE; },
/* harmony export */   "queryUseTemplate": function() { return /* binding */ CE; },
/* harmony export */   "queryUserConByGoods": function() { return /* binding */ fE; },
/* harmony export */   "queryUsercouponNember": function() { return /* binding */ u; },
/* harmony export */   "queryUsercouponPageForC": function() { return /* binding */ c; },
/* harmony export */   "saveAddress": function() { return /* binding */ t; },
/* harmony export */   "saveCollect": function() { return /* binding */ I; },
/* harmony export */   "saveContract": function() { return /* binding */ DE; },
/* harmony export */   "saveEvaluateGoods": function() { return /* binding */ cE; },
/* harmony export */   "saveEvaluateShop": function() { return /* binding */ uE; },
/* harmony export */   "saveFootprint": function() { return /* binding */ TE; },
/* harmony export */   "saveOrderToPay": function() { return /* binding */ YE; },
/* harmony export */   "saveUsercoupon": function() { return /* binding */ QE; },
/* harmony export */   "syncContractPayState": function() { return /* binding */ U; },
/* harmony export */   "syncContractState": function() { return /* binding */ IE; },
/* harmony export */   "updateAddress": function() { return /* binding */ O; },
/* harmony export */   "updateShoppingGoodsNum": function() { return /* binding */ LE; }
/* harmony export */ });
/* unused harmony exports INDEX_MEM, LIBARY, balanceRechargeOnline, checkUserPhone, checkUserPhoneByTenant, checkUserPhoneThere, checkVerificationMa, fetchSpeOptByPntCodeNomRel, getPfsModelTagValue, getPfsModelTagValueByTginfo, getPhoneForPlaRegSc, getProappinfo, getTemporaryToken, getUserInfoAuth, getUserserviceInfo, goodsDetailQuery, goodsQuery, goodsUpdate, login, loginByToken, loginInByCode, loginOut, lowCodeSave, miniLogout, queryAccount, queryBrandRelationPage, queryCheckPaywd, queryClasstreeForUser, queryFilelistView, queryFreightExpPage, queryImsgPushmsgPage, queryNoticePage, queryOcsconfigList, queryProappConfigByChannel, queryPromotionPageFullReduction, queryRechargePageForAtByMem, queryResourceGoodsPagePalt, queryScenePage, querySceneSelectPage, querySceneSproappPage, querySkuNotOnShelf, queryTginfoMenuTree, queryTginfoMenuTreeForTginfo, queryTmProappPageForSc, queryTmscene, queryTmscenePageForSc, queryTmsceneProappPageForSc, queryUserlogininfoservicePage, regiter, saveProductOrder, saveTmsceneForPlatScNew, saveUmuserPhone, saveUmuserPhoneByWX, saveUmuserPhoneVCode, saveUserInfoAuth, sendPhone, updateTmsceneTtdeposit, updateUmuserPw, updateUserPaywd, updateUserPhoneByUserPhone, updateUserPsw, uploadGoodsFiles, warrantyLogin */
/* harmony import */ var _brushes_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brushes/request */ "../../2023-qj/qj-request-tools/packages/request/dist/index.js");

var s = {
    LOGIN: "web/ml/mlogin/loginIn.json",
    REGISTER: "web/ml/muser/saveUserPhoneForPla.json",
    CHECK_USER_PHONE_THERE: "/web/ml/muser/checkUserPhoneThere.json",
    LOGINOUT: "web/os/osOAuthEnvconfig/queryOsOAuthEnvconfig.json",
    GOODS_QUERY: "web/rs/resourceGoods/queryResGoodsPageByMemCode.json",
    GOODS_UPDATE: "web/rs/resourceGoods/updateAuditOrCannel.json",
    GOODS_DETAIL: "web/rs/resourceGoods/getResourceGoodsInfoBySkuCode.json",
    GOODS_CLASSTREE: "web/rs/classtree/queryClasstreeForUser.json",
    GOODS_BRAND: "web/rs/brandrelation/queryBrandRelationPage.json",
    GOODS_CATEGORE: "web/rs/specOption/fetchSpeOptByPntCodeNomRel.json",
    UPLOAD_FILES: "web/rs/goodsFile/uploadGoodsFiles.json",
    FREIGHT_EXP: "web/wl/freightExp/queryFreightExpPage.json",
    QUERY_SkU_Shelf: "web/rs/sku/querySkuNotOnShelf.json",
    LOW_CODE_SAVE: "web/pfs/pfsmodeltagvalue/updatePfsModelTagValueDomain.json",
    QUERY_TMSCENE: "web/tm/Tmtmscene/queryTmscenePageForSc.json",
    QUERY_ACCOUNTOUTERBYUSER: "web/vd/vdfaccountouter/queryAccountOuterByUser.json",
    QUERY_IMSGPUSHMSGPAGE: "web/mns/mnsblist/queryMnsblistPage.json",
    GET_USER_INFO_AUTH: "web/um/userInfoAuth/getUserInfoAuth.json",
    QUERY_USERLOGININFOSERVICE: "web/log/logservice/queryLogservicePage.json",
    QUERY_CONTRACTPAGEC: "web/oc/contract/queryContractPageC.json",
    QUERYR_ECHARGEPAGEFORATBYMEM: "web/cp/recharge/queryRechargePageForAtByMem.json",
    BALANCE_RECHARGE_ONLINE: "web/cp/recharge/balanceRechargeOnline.json",
    PAYMENT_COMMIT: "web/pte/pay/paymentCommit.json",
    QUERY_TMSCENEPAGEFORSC: "web/tm/Tmtmscene/queryTmscenePageForSc.json",
    QUERY_SCENESPROAPPPAGE: "web/tm/sceneSproapp/querySceneSproappPage.json",
    QUERY_TMPROAPPPAGEFORSC: "web/tm/Tmscene/queryTmProappPageForSc.json",
    CHECK_USERPHONEBYENANT: "web/ml/muser/checkUserPhoneByTenant.json",
    SAVE_TMSCENEFORPLATSCNEW: "web/tm/Tmtmscene/saveTmsceneForPlatScNew.json",
    GET_PROAPPINFO: "web/ml/mlogin/getProappinfo.json",
    QUERY_SCENESELECTPAGE: "web/tm/Tmtmscene/querySceneSelectPage.json",
    QUERY_FILE_LIST_VIEW: "web/fm/file/queryFilelistView.json",
    SAVE_USERINFO_AUTH: "web/um/userInfoAuth/saveUserInfoAuth.json",
    UPDATE_USER_PAYWD: "web/um/userservice/updateUserPaywd.json",
    UPDATE_USER_PSW: "web/um/userservice/updateUserpsw.json",
    SEND_PHONE: "web/ml/muser/sendPhone.json",
    LOGIN_IN_BY_CODE: "web/ml/mlogin/loginInByCode.json",
    CHECK_USER_PHONE: "web/ml/muser/checkUserPhone.json",
    GET_PHONE_FOR_PLA_REG_SC: "web/ml/muser/getPhoneForPlaRegSc.json",
    UPDATE_UMUSER_PSW: "web/ml/muser/updateUmuserPw.json",
    FIND: "web/es/searchengine/find.json",
    QUERY_GOODS_CLASS_TREE: "web/rs/rsGoodsClass/queryGoodsClassTree.json",
    GET_RESOURCE_GOODS_INFO_BY_SKU_CODE: "web/rs/resourceGoods/getResourceGoodsInfoBySkuCode.json",
    QUERY_PROMOTION_LIST_BY_GOODS_CODE: "web/pm/promotion/queryPromotionListByGoodsCode.json",
    CHECK_COLLECT_EXIT: "web/um/collect/checkCollectExit.json",
    SAVE_COLLECT: "web/um/collect/saveCollect.json",
    DELETE_COLLECT_BY_CODE: "web/um/collect/deleteCollectByCode.json",
    GET_PFS_MODEL_TAG_VALUE: "/web/pfs/pfsmodeltagvalue/getPfsModelTagValue.json",
    GET_PFS_MODEL_TAG_VALUE_BY_TG_INFO: "web/pfs/pfsmodeltagvalue/getPfsModelTagValueByTginfo.json",
    SAVE_PRODUCTORDER: "web/tm/Tmtmscene/saveProductOrder.json",
    QUERY_TMSCENEPROAPPPAGE_FORSC: "web/tm/Tmtmscene/queryTmsceneProappPageForSc.json",
    GET_USERSERVICE_INFO: "web/um/userservice/getUserserviceInfo.json",
    QUERY_CHECKPAYWD: "web/um/userservice/queryCheckPaywd.json",
    UPDATE_TMSCENETTDEPOSIT: "web/tm/Tmtmscene/updateTmsceneTtdeposit.json",
    QUERY_SCENEPAGE: "web/tm/Scene/queryScenePage.json",
    QUERY_TG_INFO_MENU_TREE: "web/cms/tginfoMenu/queryTginfoMenuTree.json",
    QUERY_TG_INFO_MENU_TREE_FOR_TG_INFO: "web/cms/tginfoMenu/queryTginfoMenuTreeForTginfo.json",
    SYNC_CONTRACTPAYSTATE: "web/oc/contract/syncContractPayState.json",
    GET_TEMPORARY_TOKEN: "web/ml/mlogin/getTemporaryToken.json",
    LOGIN_WITHOUT_PASSWORD: "web/ml/mlogin/loginWithoutPassword.json",
    QUERY_USERCOUPONNEMBER: "web/pm/usercoupon/queryUsercouponNember.json",
    QUERY_USERCOUPONPAGE_FORC: "web/pm/usercoupon/queryUsercouponPageForC.json",
    QUERY_COLLECTPAGE: "web/um/collect/queryCollectPage.json",
    QUERY_ADDRESS_BYMERBERCODE: "web/um/address/queryAddressBymerberCode.json",
    QUERY_FOOTPRINTPAGEPLAT: "web/um/footprint/queryFootprintPagePlat.json",
    INDEX_MEM: "web/mi/mindex/indexMem.json",
    CHECK_VERIFICATIONMA: "web/um/userservice/checkVerificationMa.json",
    UPDATE_USERPHONE_BYUSERPHONE: "web/um/userservice/updateUserPhoneByUserPhone.json",
    SAVE_ADDRESS: "web/um/address/saveAddress.json",
    DELETE_ADDRESS: "web/um/address/deleteAddress.json",
    UPDATE_ADDRESS: "web/um/address/updateAddress.json",
    GET_ADDRESS: "/web/um/address/getAddress.json",
    GET_CONTRACT_NUMBERS: "/web/oc/contract/getContractNumbers.json",
    QUERY_RESOURCE_GOODS_PAGE_PALT: "/web/rs/resourceGoods/queryResourceGoodsPagePalt.json",
    LOGIN_BY_TOKEN: "web/ml/mlogin/loginByToken.json",
    QUERY_NOTICE_PAGE: "web/cms/notice/queryNoticePage.json"
  },
  n = function n() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_CONTRACT_NUMBERS, E);
  },
  _ = function _() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_ADDRESS, E);
  },
  r = function r() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.DELETE_ADDRESS, E);
  },
  O = function O() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.UPDATE_ADDRESS, E);
  },
  t = function t() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.SAVE_ADDRESS, E);
  },
  R = function R() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.UPDATE_USERPHONE_BYUSERPHONE, e);
  },
  S = function S() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.CHECK_VERIFICATIONMA, e);
  },
  T = function T() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.INDEX_MEM, E);
  },
  P = function P() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_FOOTPRINTPAGEPLAT, e);
  },
  C = function C() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_COLLECTPAGE, e);
  },
  c = function c() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_USERCOUPONPAGE_FORC, e);
  },
  u = function u() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_USERCOUPONNEMBER, e);
  },
  a = function a() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.GET_TEMPORARY_TOKEN, e);
  },
  U = function U() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.SYNC_CONTRACTPAYSTATE, e);
  },
  A = function A() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.CHECK_USER_PHONE_THERE, e);
  },
  m = function m() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_TG_INFO_MENU_TREE_FOR_TG_INFO, e);
  },
  G = function G() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_TG_INFO_MENU_TREE, e);
  },
  N = function N() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_SCENEPAGE, e);
  },
  w = function w() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.UPDATE_TMSCENETTDEPOSIT, e);
  },
  b = function b() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_TMSCENEPROAPPPAGE_FORSC, E);
  },
  l = function l() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_USERSERVICE_INFO, E);
  },
  j = function j() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_CHECKPAYWD, e);
  },
  i = function i() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.SAVE_PRODUCTORDER, e);
  },
  p = function p() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.GET_PFS_MODEL_TAG_VALUE_BY_TG_INFO, e);
  },
  d = function d() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_RESOURCE_GOODS_INFO_BY_SKU_CODE, E);
  },
  g = function g() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_PROMOTION_LIST_BY_GOODS_CODE, E);
  },
  D = function D() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.CHECK_COLLECT_EXIT, E);
  },
  I = function I() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.SAVE_COLLECT, E);
  },
  Y = function Y() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.DELETE_COLLECT_BY_CODE, E);
  },
  y = function y() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.FIND, E);
  },
  L = function L() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_GOODS_CLASS_TREE, E);
  },
  F = function F() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_PROAPPINFO, E);
  },
  M = function M() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.SAVE_TMSCENEFORPLATSCNEW, e);
  },
  h = function h() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.CHECK_USERPHONEBYENANT, E);
  },
  B = function B() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_TMPROAPPPAGEFORSC, E);
  },
  Q = function Q() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_SCENESPROAPPPAGE, e);
  },
  f = function f() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.UPDATE_UMUSER_PSW, e);
  },
  q = function q() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_PHONE_FOR_PLA_REG_SC, E);
  },
  H = function H() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.CHECK_USER_PHONE, e);
  },
  v = function v() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.LOGIN_IN_BY_CODE, E);
  },
  V = function V() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.SEND_PHONE, E);
  },
  K = function K() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)("".concat(s.QUERY_FILE_LIST_VIEW, "?fileSort=FILE_GD&fileRemark=").concat(o), e);
  },
  W = function W() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_SCENESELECTPAGE, e);
  },
  k = function k() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_TMSCENEPAGEFORSC, E);
  },
  x = function x() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERYR_ECHARGEPAGEFORATBYMEM, e);
  },
  X = function X() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.BALANCE_RECHARGE_ONLINE, e);
  },
  $ = function $() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.PAYMENT_COMMIT, e);
  },
  z = function z() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_CONTRACTPAGEC, e);
  },
  J = function J() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_USERLOGININFOSERVICE, e);
  },
  Z = function Z() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.GET_USER_INFO_AUTH, e);
  },
  ee = function ee() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_TMSCENE, E);
  },
  Ee = function Ee() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_ACCOUNTOUTERBYUSER, E);
  },
  oe = function oe() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_IMSGPUSHMSGPAGE, e);
  },
  se = function se() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.LOGIN, e);
  },
  ne = function ne() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.REGISTER, e);
  },
  _e = function _e() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.LOGINOUT, E);
  },
  re = function re() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var o = Object.assign({
      rows: 10,
      page: 1
    }, e);
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.GOODS_QUERY, o);
  },
  Oe = function Oe() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.GOODS_UPDATE, e);
  },
  te = function te() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GOODS_CLASSTREE, E);
  },
  Re = function Re() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GOODS_BRAND, E);
  },
  Se = function Se() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.GOODS_CATEGORE, e);
  },
  Te = function Te() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.postFormData)(s.UPLOAD_FILES, e);
  },
  Pe = function Pe() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.FREIGHT_EXP, e);
  },
  Ce = function Ce() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_SkU_Shelf, e);
  },
  ce = function ce() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.LOW_CODE_SAVE, e);
  },
  ue = function ue() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GOODS_DETAIL, E);
  },
  ae = function ae() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.UPDATE_USER_PSW, e);
  },
  Ue = function Ue() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.UPDATE_USER_PAYWD, e);
  },
  Ae = function Ae() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.postFormData)(s.SAVE_USERINFO_AUTH, e);
  },
  me = function me() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.GET_PFS_MODEL_TAG_VALUE, e);
  },
  Ge = function Ge() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_RESOURCE_GOODS_PAGE_PALT, e);
  },
  Ne = function Ne() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.LOGIN_BY_TOKEN, e);
  },
  we = function we() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_NOTICE_PAGE, e);
  },
  be = "web/ml/mlogin/warrantyLogin.json",
  le = "web/ml/muser/saveUmuserPhoneByWX.json",
  je = "web/oc/shopping/addShoppingGoodsBySpec.json",
  ie = "web/oc/shopping/addShoppingGoods.json",
  pe = "web/oc/shopping/queryShoppingPage.json",
  de = "web/um/address/queryAddressBymerberCode.json",
  ge = "web/oc/shopping/queryToContract.json",
  De = "web/dd/falgSetting/getFalgSettingForPaydate.json",
  Ie = "web/ur/userrights/getTotalDiscountPrice.json",
  Ye = "web/oc/contract/calculateFreightFare.json",
  ye = "web/oc/contract/saveContract.json",
  Le = "web/oc/contract/syncContractState.json",
  Fe = "web/pte/pay/saveOrderToPay.json",
  Me = "web/oc/shopping/queryShoppingToContract.json",
  he = "web/oc/shopping/updateShoppingGoodsNum.json",
  Be = "web/oc/contract/cancelContractC.json",
  Qe = "web/oc/shopping/deleteShoppingGoodsBatch.json",
  fe = "web/wl/exporg/queryExpressInfo.json",
  qe = "web/oc/contract/getContractByCode.json",
  He = "web/oc/contract/confirmReceive.json",
  ve = "web/um/collect/deleteCollectByCodeStr.json",
  Ve = "web/res/evaluate/saveEvaluateShop.json",
  Ke = "web/res/evaluate/saveEvaluateGoods.json",
  We = "web/res/template/queryUseTemplate.json",
  ke = "web/res/evaluate/queryEvaluateGoodsPagetrue.json",
  xe = "web/pm/promotion/queryPromotionPageFullReduction.json",
  Xe = "web/pm/promotion/queryCouponListBySkuCode.json",
  $e = "web/pm/usercoupon/saveUsercoupon.json",
  ze = "web/oc/contract/queryUserConByGoods.json",
  Je = "web/um/footprint/saveFootprint.json",
  Ze = "web/um/footprint/deleteFootprintByCodeStr.json",
  eE = "web/ml/muser/saveUmuserPhone.json",
  EE = "web/ml/muser/saveUmuserPhoneVCode.json",
  oE = "web/tm/Proapp/queryProappConfigByChannel.json",
  sE = "/web/ml/mlogin/loginOut.json",
  nE = "/web/ocs/ocsconfig/queryOcsconfigList.json",
  _E = function _E() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(nE, E);
  },
  rE = function rE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(sE, e);
  },
  OE = function OE() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(oE, E);
  },
  tE = function tE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(EE, e);
  },
  RE = function RE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(eE, e);
  },
  SE = function SE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Ze, e);
  },
  TE = function TE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Je, e);
  },
  PE = function PE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ke, e);
  },
  CE = function CE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(We, e);
  },
  cE = function cE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Ke, e);
  },
  uE = function uE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Ve, e);
  },
  aE = function aE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ve, e);
  },
  UE = function UE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(He, e);
  },
  AE = function AE() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(qe, E);
  },
  mE = function mE() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(fe, E);
  },
  GE = function GE() {
    var E = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(be, E);
  },
  NE = function NE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(le, e);
  },
  wE = function wE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(je, e);
  },
  bE = function bE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ie, e);
  },
  lE = function lE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(pe, e);
  },
  jE = function jE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(de, e);
  },
  iE = function iE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ge, e);
  },
  pE = function pE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(De, e);
  },
  dE = function dE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Ie, e);
  },
  gE = function gE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Ye, e);
  },
  DE = function DE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ye, e);
  },
  IE = function IE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Le, e);
  },
  YE = function YE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Fe, e);
  },
  yE = function yE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Me, e);
  },
  LE = function LE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(he, e);
  },
  FE = function FE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Be, e);
  },
  ME = function ME() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Qe, e);
  },
  hE = function hE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(xe, e);
  },
  BE = function BE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Xe, e);
  },
  QE = function QE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)($e, e);
  },
  fE = function fE() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ze, e);
  };


/***/ }),

/***/ "../../qj/lerna-repo/packages/qj-mobile-store/dist/index.js":
/*!******************************************************************!*\
  !*** ../../qj/lerna-repo/packages/qj-mobile-store/dist/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreProvider": function() { return /* binding */ Be; },
/* harmony export */   "goodsDetailStore": function() { return /* binding */ ge; },
/* harmony export */   "navigatorHandler": function() { return /* binding */ it; },
/* harmony export */   "orderStatusImpl": function() { return /* binding */ Qe; },
/* harmony export */   "orderStatusList": function() { return /* binding */ We; },
/* harmony export */   "refreshCard": function() { return /* binding */ De; },
/* harmony export */   "routerMap": function() { return /* binding */ ke; },
/* harmony export */   "useAddCoupon": function() { return /* binding */ Ie; },
/* harmony export */   "useAddShopping": function() { return /* binding */ Oe; },
/* harmony export */   "useAddressList": function() { return /* binding */ je; },
/* harmony export */   "useCartItem": function() { return /* binding */ we; },
/* harmony export */   "useCartList": function() { return /* binding */ Re; },
/* harmony export */   "useCouponList": function() { return /* binding */ Te; },
/* harmony export */   "useCube": function() { return /* binding */ Ke; },
/* harmony export */   "useEditAddress": function() { return /* binding */ Me; },
/* harmony export */   "useEvaluateDetail": function() { return /* binding */ nt; },
/* harmony export */   "useGoodsClassify": function() { return /* binding */ tt; },
/* harmony export */   "useGoodsDetailImpl": function() { return /* binding */ Le; },
/* harmony export */   "useGoodsList": function() { return /* binding */ _e; },
/* harmony export */   "useOrderDetail": function() { return /* binding */ Ze; },
/* harmony export */   "useOrderOperate": function() { return /* binding */ Ye; },
/* harmony export */   "useOrderResult": function() { return /* binding */ qe; },
/* harmony export */   "useOrderResultResult": function() { return /* binding */ He; },
/* harmony export */   "useOverdue": function() { return /* binding */ Ee; },
/* harmony export */   "usePlaceOrder": function() { return /* binding */ ze; },
/* harmony export */   "useStore": function() { return /* binding */ xe; },
/* harmony export */   "useUnused": function() { return /* binding */ $e; },
/* harmony export */   "useUsed": function() { return /* binding */ Ve; }
/* harmony export */ });
/* unused harmony exports detailButton, makeStore, useCollectionList, useDispatchImpl, useExpressInfo, useFootprint */
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qj-b2c-api */ "../../qj/lerna-repo/packages/qj-b2c-api/dist/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brushes/utils */ "../../qj/lerna-repo/node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/groupBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/noop.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/set.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es */ "../../qj/lerna-repo/node_modules/lodash-es/isUndefined.js");
/* provided dependency */ var document = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["document"];








function ue(c, i) {
  var r = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),
    d = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
  return [function (_ref) {
    var t = _ref.children;
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(c, i),
      _o2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_o, 2),
      n = _o2[0],
      s = _o2[1];
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r.Provider, Object.assign({
      value: s
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d.Provider, Object.assign({
        value: n
      }, {
        children: t
      }))
    }));
  }, function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(d);
  }, function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(r);
  }];
}
var _ue = ue(function (e, t) {
    switch (t.type) {
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
        return Object.assign(Object.assign({}, e), t.payload);
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
  _ue2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ue, 3),
  pe = _ue2[0],
  me = _ue2[1],
  ye = _ue2[2];
var ge = Object.freeze({
  __proto__: null,
  StoreProvider: pe,
  useStore: me,
  useDispatchImpl: ye
});
function ve(e, t, o, n) {
  return new (o || (o = Promise))(function (c, i) {
    function r(e) {
      try {
        s(n.next(e));
      } catch (e) {
        i(e);
      }
    }
    function d(e) {
      try {
        s(n.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function s(e) {
      var t;
      e.done ? c(e.value) : (t = e.value, t instanceof o ? t : new o(function (e) {
        e(t);
      })).then(r, d);
    }
    s((n = n.apply(e, t || [])).next());
  });
}
var fe = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
  he = function he(e, t) {
    return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee() {
      var o;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            o = {
              specStr: JSON.stringify(e),
              goodsCode: t
            };
            _context.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.addShoppingGoodsBySpec)(o);
          case 3:
            return _context.abrupt("return", _context.sent);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  },
  Ce = function Ce(e, t) {
    return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee2() {
      var o;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            o = {
              skuId: e,
              goodsNum: t
            };
            _context2.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.addShoppingGoods)(o);
          case 3:
            return _context2.abrupt("return", _context2.sent);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
  },
  Se = function Se(e, t) {
    return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee3() {
      var o;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            o = {
              skuId: e,
              goodsNum: t,
              isLocalMock: !fe
            };
            _context3.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryToContract)(o);
          case 3:
            return _context3.abrupt("return", _context3.sent);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
  },
  be = function be(e) {
    return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee4() {
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
  ke = {
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
  },
  Ne = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getTaro)();
function Oe() {
  var _this = this;
  var _me = me(),
    e = _me.count,
    t = _me.spec,
    o = _me.orderType,
    n = _me.popupVisible,
    c = _me.isNeedButton,
    i = _me.goodsCode,
    r = ye(),
    d = function d() {
      r({
        type: "popupImpl",
        payload: {
          popupVisible: !n
        }
      });
    },
    s = function s() {
      return ve(_this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee5() {
        var _o3, _n, _c;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return he(t, i);
            case 3:
              _o3 = _context5.sent;
              _n = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_o3, "dataObj.skuId");
              _context5.next = 7;
              return Ce(_n, e);
            case 7:
              _c = _context5.sent;
              _context5.next = 10;
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.sucMessage)(_c.msg || "添加成功");
            case 10:
              d();
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
      return ve(_this, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee6() {
        var o, n;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return he(t, i);
            case 2:
              o = _context6.sent;
              n = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(o, "dataObj.skuId");
              (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(ke.confirm, "?skuId=").concat(n, "&goodsNum=").concat(e));
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
    };
  return {
    count: e,
    spec: t,
    popupVisible: n,
    isNeedButton: c,
    handleChooseSize: function handleChooseSize(e, o) {
      t[o] = e, r({
        type: "select",
        payload: {
          spec: t
        }
      });
    },
    handleStep: function handleStep(t) {
      0 !== e || "minus" !== t ? r({
        type: t
      }) : Ne.showToast({
        title: "不能小于0"
      });
    },
    addShoppingImpl: function addShoppingImpl() {
      0 === o ? s() : a();
    },
    popupHandler: d
  };
}
var Le = function Le(e) {
    var _c2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c3 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c2, 2),
      t = _c3[0],
      o = _c3[1],
      _c4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c5 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c4, 2),
      n = _c5[0],
      d = _c5[1],
      _c6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c7 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c6, 2),
      s = _c7[0],
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
      N = _c17[0],
      O = _c17[1],
      _c18 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c19 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c18, 2),
      L = _c19[0],
      I = _c19[1],
      D = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({}),
      P = ye();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee7() {
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
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee8() {
          var t, _n2, _ref2, _c20, _i, _r, _d, _s;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                t = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
                _context8.prev = 1;
                _context8.next = 4;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getResourceGoodsInfoBySkuCode)({
                  skuCode: e,
                  isLocalMock: !t
                });
              case 4:
                _n2 = _context8.sent;
                _ref2 = function (e) {
                  var t = {
                      skuNo: e.skuNo || "",
                      skuCode: e.rsSkuDomainList[0].skuCode || "",
                      classtreeCode: e.classtreeCode || "",
                      brandCode: e.brandCode || "",
                      pntreeCode: e.pntreeCode || "",
                      memberCode: e.memberCode || ""
                    },
                    _e$rsGoodsFileDomainL = e.rsGoodsFileDomainList,
                    o = _e$rsGoodsFileDomainL === void 0 ? [] : _e$rsGoodsFileDomainL,
                    _e$rsSpecValueDomainL = e.rsSpecValueDomainList,
                    n = _e$rsSpecValueDomainL === void 0 ? [] : _e$rsSpecValueDomainL,
                    _e$goodsCode = e.goodsCode,
                    c = _e$goodsCode === void 0 ? "" : _e$goodsCode,
                    i = e.goodsNum;
                  return {
                    pListParams: t,
                    arr: o,
                    skuList: n,
                    goodsCode: c,
                    goodsNum: i
                  };
                }(_n2);
                _c20 = _ref2.pListParams;
                _i = _ref2.arr;
                _r = _ref2.skuList;
                _d = _ref2.goodsCode;
                _s = _ref2.goodsNum;
                D.current = _c20, o(_n2), B(_i), j(_r, _d, _s), G(_c20, _d, _n2);
                _context8.next = 17;
                break;
              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8["catch"](1);
                console.log(59, _context8.t0);
              case 17:
              case "end":
                return _context8.stop();
            }
          }, _callee8, null, [[1, 14]]);
        }));
      },
      j = function j(e, t, o) {
        var n = function (e) {
          var t = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(e, "specName");
          return t ? Object.keys(t).map(function (e) {
            return {
              skuName: e,
              skuOption: t[e]
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
            goodsCode: t,
            goodsNum: o
          }
        });
      },
      B = function B(e) {
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(e)) return;
        var t = e.map(function (e) {
          return {
            imgUrl: e.goodsFileUrl,
            link: ""
          };
        });
        u(t);
      },
      x = function x(e) {
        return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryCouponListBySkuCode)(e);
      },
      A = function A(e) {
        return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryEvaluateGoodsPagetrue)({
          goodsCode: e,
          page: 1,
          rows: 10
        });
      },
      G = function G(e, t, o) {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee9() {
          var _yield$Promise$all, _yield$Promise$all2, _yield$Promise$all2$, _i2, _yield$Promise$all2$2, _r2, _yield$Promise$all2$3, _s2, n, c;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return Promise.all([(c = e, (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryPromotionListByGoodsCode)(c)), A(t), x(e), (n = o, (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveFootprint)({
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
                _s2 = _yield$Promise$all2$3 === void 0 ? [] : _yield$Promise$all2$3;
                d(_i2), O(_r2.list), I(_s2);
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
      checkCollectionObj: s,
      setCheckCollectionObj: a,
      sliderArr: l,
      tabActive: p,
      setTabActive: h,
      popupVisible: C,
      setPopupVisible: S,
      goods: t,
      goodSku: b,
      evaluateArr: N,
      coupon: L,
      queryCouponImpl: function queryCouponImpl() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee10() {
          var _e2;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return x(D.current);
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
  Ie = function Ie() {
    var _c21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c22 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c21, 2),
      e = _c22[0],
      t = _c22[1];
    return {
      save: function save(o) {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee11() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                _context11.t0 = e;
                if (_context11.t0) {
                  _context11.next = 5;
                  break;
                }
                _context11.next = 4;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveUsercoupon)(o);
              case 4:
                t(!0);
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
  De = {
    num: 0
  },
  Pe = "00000017";
function Me(e, t, o) {
  var _this2 = this;
  var _t$useForm = t.useForm(),
    _t$useForm2 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_t$useForm, 1),
    n = _t$useForm2[0],
    _c23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1"),
    _c24 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c23, 2),
    i = _c24[0],
    d = _c24[1],
    _c25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
    _c26 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c25, 2),
    s = _c26[0],
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
    e || !o ? p() : (n.setFieldValue("addressDefault", i), a(!1));
  }, []);
  var p = function p() {
    (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getAddress)({
      addressId: e,
      isLocalMock: !o
    }).then(function (e) {
      var t = {
        provinceCode: e.provinceCode,
        cityCode: e.cityCode,
        areaCode: e.areaCode,
        provinceName: e.provinceName,
        cityName: e.cityName,
        areaName: e.areaName
      };
      u(t), d(e.addressDefault), n.setFieldValue("addressMember", e.addressMember), n.setFieldValue("addressPhone", e.addressPhone), n.setFieldValue("addressDetail", e.addressDetail), n.setFieldValue("area", t), n.setFieldValue("addressDefault", e.addressDefault), n.validateFields(), a(!1);
    });
  };
  return {
    skullShow: s,
    form: n,
    area: l,
    setArea: u,
    userCode: Pe,
    defaultAddress: i,
    handleArea: function handleArea(e, t) {
      var o = {
        provinceCode: "",
        cityCode: "",
        areaCode: "",
        provinceName: "",
        cityName: "",
        areaName: ""
      };
      if ("weapp" === e) {
        var _e3 = t.detail.code,
          _n3 = t.detail.value;
        o.provinceCode = _e3[0], o.cityCode = _e3[1], o.areaCode = _e3[2], o.provinceName = _n3[0], o.cityName = _n3[1], o.areaName = _n3[2];
      } else "h5" === e && (o.provinceCode = t.provinceCode, o.cityCode = t.cityCode, o.areaCode = t.areaCode, o.provinceName = t.provinceName, o.cityName = t.cityName, o.areaName = t.areaName);
      console.log(77, o), n.setFieldValue("area", o), n.validateFields();
    },
    handleDefaultAddress: function handleDefaultAddress(e, t) {
      "h5" === e ? d(t ? "1" : "0") : "weapp" === e && d(t.detail.value ? "1" : "0");
    },
    handleFinish: function handleFinish(t) {
      return ve(_this2, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee12() {
        var o, n;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              t.addressDefault = t.addressDefault ? "1" : "0", console.log(91, t);
              o = Object.assign(t, t.area);
              delete o.area;
              _context12.prev = 3;
              _context12.next = 6;
              return n = Object.assign(Object.assign({}, o), {
                userCode: Pe
              }), e ? (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.updateAddress)(Object.assign({
                addressId: e
              }, n)) : (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveAddress)(n);
            case 6:
              (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorBackImpl)(-1);
              _context12.next = 11;
              break;
            case 9:
              _context12.prev = 9;
              _context12.t0 = _context12["catch"](3);
            case 11:
            case "end":
              return _context12.stop();
          }
        }, _callee12, null, [[3, 9]]);
      }));
    }
  };
}
function je(e) {
  var _this3 = this;
  var t = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getTaro)(),
    _c29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c30 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c29, 2),
    o = _c30[0],
    n = _c30[1],
    _c31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
    _c32 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c31, 2),
    i = _c32[0],
    d = _c32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    s();
  }, [e]);
  var s = function s() {
      return ve(_this3, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee13() {
        var e, t;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              e = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
              _context13.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryAddressBymerberCode)({
                isLocalMock: !e
              });
            case 3:
              t = _context13.sent;
              n(t), d(!1);
            case 5:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
    },
    a = function a(e, t) {
      var o = t[e];
      return t[e] = t[0], t[e].addressDefault = "0", t[0] = o, t[0].addressDefault = "1", (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(t);
    };
  return {
    list: o,
    skullShow: i,
    delAddress: function delAddress(e) {
      null == t || t.showModal({
        title: "提示",
        content: "确认删除该地址吗？",
        success: function success(t) {
          return ve(_this3, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee14() {
            return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.t0 = null == t ? void 0 : t.confirm;
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
    setDefault: function setDefault(e, t) {
      return ve(_this3, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee15() {
        var _c33, _i3, _r3, _d2, _l, _u, _p, _m, _y, _g, _v, _f, _h;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              if (!("1" !== e.addressDefault)) {
                _context15.next = 7;
                break;
              }
              _c33 = e.addressMember, _i3 = e.addressPhone, _r3 = e.provinceCode, _d2 = e.provinceName, _l = e.cityCode, _u = e.cityName, _p = e.areaCode, _m = e.areaName, _y = e.addressDetail, _g = e.addressId, _v = e.addressCode, _f = e.dataState, _h = {
                addressMember: _c33,
                addressPhone: _i3,
                provinceCode: _r3,
                provinceName: _d2,
                cityCode: _l,
                cityName: _u,
                areaCode: _p,
                areaName: _m,
                addressDetail: _y,
                addressId: _g,
                addressCode: _v,
                dataState: _f,
                addressDefault: "1"
              };
              n(a(t, o));
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
    },
    getAddressList: s
  };
}
var _ue3 = ue(function (e, t) {
    switch (t.type) {
      case "select":
        return Object.assign(Object.assign({}, e), {
          select: t.payload
        });
      case "update":
        return Object.assign(Object.assign({}, e), t.payload);
      default:
        return e;
    }
  }, {
    id: "",
    count: 0,
    loading: !1,
    select: []
  }),
  _ue4 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ue3, 3),
  Be = _ue4[0],
  xe = _ue4[1],
  Ae = _ue4[2],
  Ge = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getTaro)(),
  we = function we() {
    var e = Ae(),
      _xe = xe(),
      t = _xe.select;
    return {
      select: t,
      onChange: function onChange(t) {
        e({
          type: "select",
          payload: t.detail.value
        });
      },
      handleStep: function handleStep(t, o, n) {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee16() {
          var c;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee16$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
              case 0:
                if (!(0 === o && "minus" === n)) {
                  _context16.next = 2;
                  break;
                }
                return _context16.abrupt("return", void Ge.showToast({
                  title: "不能小于0"
                }));
              case 2:
                c = "plus" === n ? ++o : --o;
                e({
                  type: "update",
                  payload: {
                    id: t,
                    count: c,
                    loading: !0
                  }
                });
              case 4:
              case "end":
                return _context16.stop();
            }
          }, _callee16);
        }));
      }
    };
  },
  Fe = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
  Re = function Re(e) {
    var _c34 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c35 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c34, 2),
      t = _c35[0],
      o = _c35[1],
      _c36 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _c37 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c36, 2),
      n = _c37[0],
      s = _c37[1],
      a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
      l = Ae(),
      _xe2 = xe(),
      u = _xe2.select,
      p = _xe2.id,
      m = _xe2.count,
      y = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        var e = 0,
          o = 0;
        return t.forEach(function (t) {
          u.includes(t.shoppingGoodsId + "") && (e += t.goodsCamount, o += t.goodsCamount * t.pricesetNprice);
        }), {
          num: e,
          amount: o
        };
      }, [u, t]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee17() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return v("isFirst");
            case 2:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
    }, [e]), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      p && g(p, m);
    }, [p, m]);
    var g = function g(e, t) {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee18() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _context18.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.updateShoppingGoodsNum)({
                  shoppingGoodsId: e,
                  amount: t,
                  goodWeight: 0
                });
              case 3:
                _context18.next = 5;
                return v();
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
      v = function v() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee19() {
          var t, n;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryShoppingPage)({
                  isLocalMock: !Fe
                });
              case 2:
                t = _context19.sent;
                n = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(t, "rows[0].shoppingpackageList[0]", {
                  shoppingGoodsList: [],
                  disMoney: 0
                });
                a.current = n.shoppingGoodsList.map(function (e) {
                  return e.shoppingGoodsId + "";
                }), e && l({
                  type: "select",
                  payload: a.current
                }), l({
                  type: "update",
                  payload: {
                    loading: !1
                  }
                }), s(n.disMoney || 0), o(n.shoppingGoodsList);
              case 5:
              case "end":
                return _context19.stop();
            }
          }, _callee19);
        }));
      };
    return {
      cartList: t,
      disMoney: n,
      amount: y,
      selectAll: function selectAll(e) {
        l({
          type: "select",
          payload: e.detail.value.includes("true") ? a.current : []
        });
      },
      allCart: a,
      toOrderImpl: function toOrderImpl() {
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(ke.confirm, "?shoppingGoodsId=").concat(u.join(",")));
      },
      select: u,
      deleteCart: function deleteCart() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee20() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee20$(_context20) {
            while (1) switch (_context20.prev = _context20.next) {
              case 0:
                _context20.prev = 0;
                _context20.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.deleteShoppingGoodsBatch)({
                  shoppingGoodsIdStr: JSON.stringify(u)
                });
              case 3:
                _context20.next = 5;
                return v();
              case 5:
                _context20.next = 10;
                break;
              case 7:
                _context20.prev = 7;
                _context20.t0 = _context20["catch"](0);
                console.log(_context20.t0);
              case 10:
              case "end":
                return _context20.stop();
            }
          }, _callee20, null, [[0, 7]]);
        }));
      }
    };
  },
  Te = function Te() {
    var _c38 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _c39 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c38, 2),
      e = _c39[0],
      t = _c39[1];
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
      setCoe: t
    };
  },
  $e = function $e() {
    var _c40 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c41 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c40, 2),
      e = _c41[0],
      t = _c41[1],
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee21() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              _context21.next = 2;
              return n();
            case 2:
            case "end":
              return _context21.stop();
          }
        }, _callee21);
      }));
    }, []);
    var n = function n() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee22() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee22$(_context22) {
            while (1) switch (_context22.prev = _context22.next) {
              case 0:
                o.current = 1;
                t([]);
                _context22.next = 4;
                return d();
              case 4:
              case "end":
                return _context22.stop();
            }
          }, _callee22);
        }));
      },
      d = function d() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee23() {
          var _e4;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee23$(_context23) {
            while (1) switch (_context23.prev = _context23.next) {
              case 0:
                _context23.prev = 0;
                _context23.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUsercouponPageForC)({
                  page: o.current,
                  rows: 100,
                  dataState: 0,
                  pbCode: "0004,0005"
                });
              case 3:
                _e4 = _context23.sent;
                t(_e4.list), o.current += 1;
                _context23.next = 10;
                break;
              case 7:
                _context23.prev = 7;
                _context23.t0 = _context23["catch"](0);
                console.log(_context23.t0);
              case 10:
              case "end":
                return _context23.stop();
            }
          }, _callee23, null, [[0, 7]]);
        }));
      };
    return {
      unusedList: e,
      getData: d,
      init: n
    };
  },
  Ve = function Ve() {
    var _c42 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c43 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c42, 2),
      e = _c43[0],
      t = _c43[1],
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee24() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return n();
            case 2:
            case "end":
              return _context24.stop();
          }
        }, _callee24);
      }));
    }, []);
    var n = function n() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee25() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee25$(_context25) {
            while (1) switch (_context25.prev = _context25.next) {
              case 0:
                o.current = 1;
                t([]);
                _context25.next = 4;
                return d();
              case 4:
              case "end":
                return _context25.stop();
            }
          }, _callee25);
        }));
      },
      d = function d() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee26() {
          var _e5;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee26$(_context26) {
            while (1) switch (_context26.prev = _context26.next) {
              case 0:
                _context26.prev = 0;
                _context26.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUsercouponPageForC)({
                  page: o.current,
                  rows: 100,
                  dataState: 1,
                  pbCode: "0004,0005"
                });
              case 3:
                _e5 = _context26.sent;
                t(_e5.list), o.current += 1;
                _context26.next = 10;
                break;
              case 7:
                _context26.prev = 7;
                _context26.t0 = _context26["catch"](0);
                console.log(_context26.t0);
              case 10:
              case "end":
                return _context26.stop();
            }
          }, _callee26, null, [[0, 7]]);
        }));
      };
    return {
      usedList: e,
      getData: d,
      init: n
    };
  },
  Ee = function Ee() {
    var _c44 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c45 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c44, 2),
      e = _c45[0],
      t = _c45[1],
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee27() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              _context27.next = 2;
              return n();
            case 2:
            case "end":
              return _context27.stop();
          }
        }, _callee27);
      }));
    }, []);
    var n = function n() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee28() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee28$(_context28) {
            while (1) switch (_context28.prev = _context28.next) {
              case 0:
                o.current = 1;
                t([]);
                _context28.next = 4;
                return d();
              case 4:
              case "end":
                return _context28.stop();
            }
          }, _callee28);
        }));
      },
      d = function d() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee29() {
          var _e6;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee29$(_context29) {
            while (1) switch (_context29.prev = _context29.next) {
              case 0:
                _context29.prev = 0;
                _context29.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUsercouponPageForC)({
                  page: o.current,
                  rows: 100,
                  dataState: 2,
                  pbCode: "0004,0005"
                });
              case 3:
                _e6 = _context29.sent;
                t(_e6.list), o.current += 1;
                _context29.next = 10;
                break;
              case 7:
                _context29.prev = 7;
                _context29.t0 = _context29["catch"](0);
                console.log(_context29.t0);
              case 10:
              case "end":
                return _context29.stop();
            }
          }, _callee29, null, [[0, 7]]);
        }));
      };
    return {
      overdueList: e,
      getData: d,
      init: n
    };
  };
function Je(e) {
  var t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  return t.current = (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(e) ? e : lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"], (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return t.current.apply(t, arguments);
  }, [t]);
}
var _e = function _e(e, t, o) {
  var n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!0),
    d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0),
    _c46 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c47 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c46, 2),
    s = _c47[0],
    a = _c47[1],
    _c48 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
    _c49 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c48, 2),
    l = _c49[0],
    u = _c49[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    p();
  }, [o]);
  var p = Je(function () {
      d.current = 0, n.current = !0, a([]), m(o);
    }),
    m = Je(function (_ref3) {
      var _ref3$sortField = _ref3.sortField,
        o = _ref3$sortField === void 0 ? "pricesetNprice" : _ref3$sortField,
        _ref3$order = _ref3.order,
        c = _ref3$order === void 0 ? "" : _ref3$order;
      return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee30() {
        var _i4;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              if (!n.current) {
                _context30.next = 12;
                break;
              }
              ++d.current, u(!0);
              _context30.prev = 2;
              _context30.next = 5;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.find)({
                distinctField: "goodsNo",
                sortField: o,
                order: c,
                goodsType: "00,50",
                page: d.current,
                rows: 10,
                searchParam: t,
                classtreeCode: e
              });
            case 5:
              _i4 = _context30.sent;
              ((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(_i4.list) || _i4.list.length < 10) && (n.current = !1), u(!1), a(function (e) {
                return e.concat(_i4.list);
              });
              _context30.next = 12;
              break;
            case 9:
              _context30.prev = 9;
              _context30.t0 = _context30["catch"](2);
              --d.current;
            case 12:
            case "end":
              return _context30.stop();
          }
        }, _callee30, null, [[2, 9]]);
      }));
    });
  return {
    loading: l,
    getData: m,
    list: s
  };
};
function qe(e) {
  var _this4 = this;
  var _c50 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
    _c51 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c50, 2),
    t = _c51[0],
    o = _c51[1],
    n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),
    d = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
    _c52 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c53 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c52, 2),
    s = _c53[0],
    a = _c53[1],
    l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({}),
    u = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
      dataBmoney: "",
      contractBillcode: ""
    });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      ve(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee31() {
        var t, _o4, _n4;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              _context31.prev = 0;
              _context31.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.syncContractState)({
                contractBillcode: e,
                isLocalMock: !d
              });
            case 3:
              _o4 = _context31.sent;
              u.current = _o4.dataObj;
              _context31.next = 7;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveOrderToPay)({
                contractBillcode: null !== (t = u.current.contractBillcode) && void 0 !== t ? t : "",
                isLocalMock: !d
              });
            case 7:
              _n4 = _context31.sent;
              a(_n4.payChannelList), l.current = _n4;
              _context31.next = 14;
              break;
            case 11:
              _context31.prev = 11;
              _context31.t0 = _context31["catch"](0);
              console.log(_context31.t0);
            case 14:
            case "end":
              return _context31.stop();
          }
        }, _callee31, null, [[0, 11]]);
      }));
    })();
  }, []);
  var p = function p(e, t) {
      return e.find(function (e) {
        return e.fchannelCode === t;
      }) || {};
    },
    m = function m() {
      return ve(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee32() {
        var e, t, _ref4, c, i, r, d, s;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              t = null !== (e = u.current.contractBillcode) && void 0 !== e ? e : "";
              (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.setStorage)("contractBillcode", {
                contractBillcode: t
              });
              _ref4 = function () {
                o(!0);
                var _l$current = l.current,
                  e = _l$current.ptradeSeqno,
                  t = _l$current.contractBlance,
                  c = _l$current.payChannelList,
                  _p2 = p(c, n.current),
                  i = _p2.fchannelCode,
                  _p2$faccountOuterNo = _p2.faccountOuterNo,
                  r = _p2$faccountOuterNo === void 0 ? "" : _p2$faccountOuterNo;
                return {
                  ptradeSeqno: e,
                  contractBlance: t,
                  fchannelCode: i,
                  faccountOuterNo: r
                };
              }(), c = _ref4.ptradeSeqno, i = _ref4.contractBlance, r = _ref4.fchannelCode, d = _ref4.faccountOuterNo, s = [{
                faccountIdType: "ACCOUNT",
                fchannelCode: r,
                orderAmount: u.current.dataBmoney,
                faccountId: d
              }];
              _context32.next = 5;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.paymentCommit)({
                ptradeSeqno: c,
                payCommitStr: JSON.stringify(s),
                contractBlance: i
              });
            case 5:
              return _context32.abrupt("return", _context32.sent);
            case 6:
            case "end":
              return _context32.stop();
          }
        }, _callee32);
      }));
    },
    y = function y() {
      return ve(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee33() {
        var _e7;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              _context33.prev = 0;
              _context33.next = 3;
              return m();
            case 3:
              _e7 = _context33.sent;
              document.getElementById("v_html").innerHTML = "<div>" + _e7.dataObj.htmlStr + "</div>", document.forms[0].submit();
              _context33.next = 10;
              break;
            case 7:
              _context33.prev = 7;
              _context33.t0 = _context33["catch"](0);
              o(!1);
            case 10:
            case "end":
              return _context33.stop();
          }
        }, _callee33, null, [[0, 7]]);
      }));
    },
    g = function g() {
      return ve(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee34() {
        var _e8;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              _context34.prev = 0;
              _context34.next = 3;
              return m();
            case 3:
              _e8 = _context34.sent;
              document.getElementById("v_html").innerHTML = "<div>" + _e8.dataObj.htmlStr + "</div>", document.getElementById("paaspaysubmit").submit();
              _context34.next = 10;
              break;
            case 7:
              _context34.prev = 7;
              _context34.t0 = _context34["catch"](0);
              o(!1);
            case 10:
            case "end":
              return _context34.stop();
          }
        }, _callee34, null, [[0, 7]]);
      }));
    },
    v = function v() {
      return ve(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee35() {
        var _e9;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              _context35.prev = 0;
              _context35.next = 3;
              return m();
            case 3:
              _e9 = _context35.sent.dataObj.requestData;
              wx.requestPayment({
                timeStamp: _e9.timeStamp,
                nonceStr: _e9.nonceStr,
                package: _e9.package,
                signType: _e9.signType,
                paySign: _e9.paySign,
                success: function success(e) {
                  var t;
                  var o = null !== (t = u.current.contractBillcode) && void 0 !== t ? t : "";
                  (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(ke.result, "?code=").concat(o));
                },
                fail: function fail(e) {
                  o(!1);
                },
                complete: function complete(e) {
                  o(!1);
                }
              });
              _context35.next = 10;
              break;
            case 7:
              _context35.prev = 7;
              _context35.t0 = _context35["catch"](0);
              o(!1);
            case 10:
            case "end":
              return _context35.stop();
          }
        }, _callee35, null, [[0, 7]]);
      }));
    };
  return {
    paymentImpl: function paymentImpl() {
      switch (n.current || (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.sucMessage)("请选择支付方式", "none"), n.current) {
        case "wechatmini":
          v();
          break;
        case "wechatwap":
          g();
          break;
        case "alipaywap":
          y();
      }
    },
    channelList: s,
    handleRadio: function handleRadio(e) {
      n.current = e.detail.value;
    },
    contract: u,
    loading: t
  };
}
var Ue = {
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
function ze(_ref5, n, d) {
  var _this5 = this;
  var e = _ref5.skuId,
    t = _ref5.goodsNum,
    o = _ref5.shoppingGoodsId;
  var s = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    _c54 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c55 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c54, 2),
    a = _c55[0],
    l = _c55[1],
    _c56 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _c57 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c56, 2),
    u = _c57[0],
    p = _c57[1],
    m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),
    y = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    v = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    _c58 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _c59 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c58, 2),
    f = _c59[0],
    h = _c59[1],
    C = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
    S = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Ue),
    b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      ve(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee36() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              h(0);
              S.current = {
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
              g.current = [];
              y.current = [];
              if (!o) {
                _context36.next = 9;
                break;
              }
              _context36.next = 7;
              return O(function () {
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryShoppingToContract)({
                  shoppingGoodsIdStr: "[".concat(o, "]")
                });
              });
            case 7:
              _context36.next = 11;
              break;
            case 9:
              _context36.next = 11;
              return O(function () {
                return Se(e, t);
              });
            case 11:
            case "end":
              return _context36.stop();
          }
        }, _callee36);
      }));
    })();
  }, [n]);
  var N = function N() {
      return ve(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee37() {
        var _e10;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              _context37.prev = 0;
              _context37.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUserConByGoods)({
                pmContractGoodsDomainListStr: JSON.stringify(g.current)
              });
            case 3:
              _e10 = _context37.sent;
              l(_e10);
              _context37.next = 10;
              break;
            case 7:
              _context37.prev = 7;
              _context37.t0 = _context37["catch"](0);
              console.log(74, _context37.t0);
            case 10:
            case "end":
              return _context37.stop();
          }
        }, _callee37, null, [[0, 7]]);
      }));
    },
    O = function O(e) {
      return ve(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee38() {
        var t, _t, _t$, o, n, c;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              _context38.next = 2;
              return Promise.all([(0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryAddressBymerberCode)({
                isLocalMock: !C
              }), e()]);
            case 2:
              t = _context38.sent;
              _t = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(t, 2);
              _t$ = _t[0];
              o = _t$ === void 0 ? [] : _t$;
              n = _t[1];
              c = d ? o.find(function (e) {
                return e.addressId === d;
              }) : o.find(function (e) {
                return "1" === e.addressDefault;
              }) || {};
              p(c), L(n, c), d = "";
            case 9:
            case "end":
              return _context38.stop();
          }
        }, _callee38);
      }));
    },
    L = function L(e, t) {
      e.forEach(function (e) {
        e.shoppingpackageList.forEach(function (e) {
          S.current.comDisMoney += e.disMoney, S.current.copyComDisMoney += e.disMoney, e.shoppingGoodsList.forEach(function (t) {
            g.current.push(t), S.current.shoppingCountPrice += t.pricesetNprice * t.goodsCamount, t.contractGoodsGtype = 0, m.current = e.promotionCode, "00" == t.goodsType && (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getFalgSettingForPaydate)().then(function (e) {});
          }), e.disMoney > 0 && y.current.push({
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
        }), I(), C && (D(), N(), j(t));
      });
    },
    I = function I() {
      var _S$current = S.current,
        e = _S$current.shoppingCountPrice,
        t = _S$current.totalDiscountPrice,
        o = _S$current.discount,
        n = _S$current.comDisMoney,
        c = _S$current.freight,
        i = (e - t - o - n + c).toFixed(2);
      h(i);
    },
    D = function D() {
      return ve(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee39() {
        var n, _e11;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee39$(_context39) {
          while (1) switch (_context39.prev = _context39.next) {
            case 0:
              n = {};
              n = o ? {
                shoppingGoodsIdStr: "[".concat(o, "]")
              } : {
                skuIdStr: JSON.stringify([{
                  skuId: e,
                  goodsNum: t
                }])
              };
              _context39.prev = 2;
              _context39.next = 5;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.calculateFreightFare)(Object.assign(Object.assign({}, n), {
                areaCode: 11e4
              }));
            case 5:
              _e11 = _context39.sent;
              S.current.freight = _e11.dataObj, I();
              _context39.next = 12;
              break;
            case 9:
              _context39.prev = 9;
              _context39.t0 = _context39["catch"](2);
              console.log(180, _context39.t0);
            case 12:
            case "end":
              return _context39.stop();
          }
        }, _callee39, null, [[2, 9]]);
      }));
    },
    P = function P() {
      var _S$current2 = S.current,
        e = _S$current2.shoppingCountPrice,
        t = _S$current2.copyComDisMoney,
        o = _S$current2.discount;
      return (e - t - o).toFixed(2);
    },
    M = function M() {
      var _S$current3 = S.current,
        e = _S$current3.shoppingCountPrice,
        t = _S$current3.copyComDisMoney,
        o = _S$current3.freight;
      return (e - t + o).toFixed(2);
    },
    j = function j(o) {
      v.current = function (o) {
        var n = o.addressMember,
          c = o.userName,
          i = o.provinceName,
          r = o.cityName,
          d = o.areaName,
          a = o.addressDetail,
          l = o.areaCode;
        return [{
          contractPaytime: new Date().valueOf(),
          goodsPbillno: 0,
          goodsPmbillno: S.current.promotionCodes,
          contractProperty: "0",
          contractBlance: 0,
          contractPmode: 0,
          contractPumode: "0",
          goodsSupplierName: "",
          goodsSupplierCode: "",
          packageList: [{
            contractGoodsList: s.current,
            shoppingGoodsIdList: [],
            promotionCode: m.current,
            packageRemark: null
          }],
          packageMode: "",
          contractType: "00",
          ocContractSettlList: [],
          contractInmoney: M(),
          contractMoney: P(),
          goodsReceiptMem: n,
          goodsReceiptPhone: c,
          goodsReceiptArrdess: i + r + d + a,
          areaCode: l,
          contractNbillcode: null,
          skuIdList: e ? [{
            skuId: +e,
            goodsNum: +t
          }] : [],
          giftSkuIdList: []
        }];
      }(o);
      var n = {
        rsSkuListStr: JSON.stringify(v.current)
      };
      be(n).then(function (e) {
        S.current.totalDiscountPrice = e.dataObj.totalDiscountPrice, S.current.contractSettlOpno = e.dataObj.contractSettlOpno, I();
      });
    };
  return {
    savePayPrice: function savePayPrice() {
      if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(u)) return;
      (function () {
        var _S$current4 = S.current,
          e = _S$current4.contractSettlOpno,
          t = _S$current4.totalDiscountPrice;
        e && 0 != t && y.current.push({
          contractSettlBlance: "UR",
          contractPmode: "0",
          contractSettlPmoney: t,
          contractSettlOpno: e
        });
      })(), (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(v.current, "[0].ocContractSettlList", [].concat((0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(y.current), (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(b.current)));
      var e = {
        orderDomainStr: JSON.stringify(v.current)
      };
      (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveContract)(e).then(function (e) {
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(ke.paymentMode, "?code=").concat(e.dataObj.contractBillcode));
      });
    },
    address: u,
    list: s,
    payState: S,
    coupon: a,
    confirm: function confirm(e) {
      var t = e.couponAmount,
        o = e.usercouponCode,
        n = e.promotionCode,
        c = e.discAmount;
      b.current = [{
        contractSettlBlance: "COP",
        contractPmode: "0",
        contractSettlGmoney: +t,
        contractSettlPmoney: +c,
        contractSettlOpno: o,
        contractSettlOpemo: n
      }], S.current.discount = c, I();
    },
    amount: f
  };
}
var He = Object.freeze({
  __proto__: null,
  useOrderResult: function useOrderResult(e) {
    var _this6 = this;
    var _c60 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c61 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c60, 2),
      t = _c61[0],
      o = _c61[1],
      n = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (function () {
        ve(_this6, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee40() {
          var _t2, _c62, _t$dataObj, _i5;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee40$(_context40) {
            while (1) switch (_context40.prev = _context40.next) {
              case 0:
                _context40.prev = 0;
                _context40.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.syncContractPayState)({
                  contractBillcode: e,
                  isLocalMock: !n
                });
              case 3:
                _t2 = _context40.sent;
                _c62 = _t2.sysRecode;
                _t$dataObj = _t2.dataObj;
                _i5 = _t$dataObj === void 0 ? {} : _t$dataObj;
                o({
                  sysRecode: _c62,
                  dataObj: _i5
                });
                _context40.next = 13;
                break;
              case 10:
                _context40.prev = 10;
                _context40.t0 = _context40["catch"](0);
                console.log(_context40.t0);
              case 13:
              case "end":
                return _context40.stop();
            }
          }, _callee40, null, [[0, 10]]);
        }));
      })();
    }, []), {
      result: t
    };
  }
});
function Ke(e, t) {
  var _c63 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e),
    _c64 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c63, 2),
    o = _c64[0],
    n = _c64[1];
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var o = t.filter(function (e) {
      return !((0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(e) || (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(e));
    }).filter(function (e) {
      return !Object.values(e).every(function (t) {
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(t) || (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(e);
      });
    });
    var c = e;
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(o) || (c = o), n(c);
  }, [t]), o;
}
var We = [{
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
  Qe = function Qe(e) {
    var _ref6 = We.find(function (t) {
        return t.code.includes(e + "");
      }) || {},
      _ref6$name = _ref6.name,
      t = _ref6$name === void 0 ? "" : _ref6$name;
    return t;
  },
  Xe = {
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
function Ye(_ref7) {
  var _this7 = this;
  var _ref7$dataState = _ref7.dataState,
    e = _ref7$dataState === void 0 ? "" : _ref7$dataState,
    t = _ref7.contractId,
    o = _ref7.contractBillcode,
    n = _ref7.init;
  var c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
      return Xe[e + ""] || [];
    }, [e]),
    i = function () {
      return {
        expressInfo: function expressInfo() {
          (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(ke.expressInfo, "?code=").concat(o));
        },
        pay: function pay() {
          (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(ke.paymentMode, "?code=").concat(o));
        },
        evaluate: function evaluate() {
          (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(ke.evaluateDetail, "?code=").concat(o));
        },
        confirmReceive: function confirmReceive() {
          return ve(_this7, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee41() {
            return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee41$(_context41) {
              while (1) switch (_context41.prev = _context41.next) {
                case 0:
                  _context41.prev = 0;
                  _context41.next = 3;
                  return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.confirmReceive)({
                    contractBillcode: o
                  });
                case 3:
                  null == n || n();
                  _context41.next = 8;
                  break;
                case 6:
                  _context41.prev = 6;
                  _context41.t0 = _context41["catch"](0);
                case 8:
                case "end":
                  return _context41.stop();
              }
            }, _callee41, null, [[0, 6]]);
          }));
        },
        cancel: function cancel() {
          return ve(_this7, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee42() {
            return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee42$(_context42) {
              while (1) switch (_context42.prev = _context42.next) {
                case 0:
                  _context42.prev = 0;
                  _context42.next = 3;
                  return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.cancelContractC)({
                    contractId: t
                  });
                case 3:
                  null == n || n();
                  _context42.next = 8;
                  break;
                case 6:
                  _context42.prev = 6;
                  _context42.t0 = _context42["catch"](0);
                case 8:
                case "end":
                  return _context42.stop();
              }
            }, _callee42, null, [[0, 6]]);
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
var Ze = function Ze(e) {
    var _c65 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c66 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c65, 2),
      t = _c66[0],
      o = _c66[1],
      n = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
      _c67 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
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
      _c68 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c67, 2),
      i = _c68[0],
      d = _c68[1];
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee43() {
        var _t3;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee43$(_context43) {
          while (1) switch (_context43.prev = _context43.next) {
            case 0:
              _context43.prev = 0;
              _context43.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getContractByCode)({
                contractBillcode: e,
                isLocalMock: !n
              });
            case 3:
              _t3 = _context43.sent;
              if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(_t3)) {
                _context43.next = 6;
                break;
              }
              return _context43.abrupt("return");
            case 6:
              o(Qe(_t3.dataState)), d(_t3);
              _context43.next = 12;
              break;
            case 9:
              _context43.prev = 9;
              _context43.t0 = _context43["catch"](0);
              console.log(45, _context43.t0);
            case 12:
            case "end":
              return _context43.stop();
          }
        }, _callee43, null, [[0, 9]]);
      }));
    }, []), {
      orderDetail: i,
      status: t
    };
  },
  et = function et(e) {
    var _c69 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c70 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c69, 2),
      t = _c70[0],
      o = _c70[1],
      _c71 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c72 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c71, 2),
      n = _c72[0],
      i = _c72[1];
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee44() {
        var t, n, c, r;
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee44$(_context44) {
          while (1) switch (_context44.prev = _context44.next) {
            case 0:
              _context44.next = 2;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getContractByCode)({
                contractBillcode: e
              });
            case 2:
              t = _context44.sent;
              o(t);
              n = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(t, "packageList[0].expressCode", "");
              c = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(t, "packageList[0].packageBillno");
              _context44.next = 8;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryExpressInfo)({
                expressNo: c,
                expressType: n
              });
            case 8:
              r = _context44.sent;
              i(JSON.parse(r.dataObj));
            case 10:
            case "end":
              return _context44.stop();
          }
        }, _callee44);
      }));
    }, []), {
      info: t,
      detail: n
    };
  };
function tt() {
  var _this8 = this;
  var _c73 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _c74 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c73, 2),
    e = _c74[0],
    t = _c74[1],
    _c75 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c76 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c75, 2),
    o = _c76[0],
    n = _c76[1],
    i = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    d();
  }, []);
  var d = function d() {
    return ve(_this8, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee45() {
      var _e12, _o5;
      return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee45$(_context45) {
        while (1) switch (_context45.prev = _context45.next) {
          case 0:
            _context45.prev = 0;
            _context45.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryGoodsClassTree)();
          case 3:
            _e12 = _context45.sent;
            n(_e12 || []);
            _o5 = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_e12, "[0].goodsClassCode");
            t(_o5);
            _context45.next = 12;
            break;
          case 9:
            _context45.prev = 9;
            _context45.t0 = _context45["catch"](0);
            console.log(_context45.t0);
          case 12:
          case "end":
            return _context45.stop();
        }
      }, _callee45, null, [[0, 9]]);
    }));
  };
  return {
    activeKey: e,
    navList: o,
    flag: i,
    setActiveKey: t
  };
}
var ot = function ot() {
    var _c77 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c78 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c77, 2),
      e = _c78[0],
      t = _c78[1],
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1),
      _c79 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c80 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c79, 2),
      n = _c80[0],
      d = _c80[1],
      _c81 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c82 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c81, 2),
      s = _c82[0],
      a = _c82[1],
      _c83 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c84 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c83, 2),
      l = _c84[0],
      u = _c84[1],
      _c85 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c86 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c85, 2),
      p = _c86[0],
      m = _c86[1],
      _c87 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c88 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c87, 2),
      y = _c88[0],
      g = _c88[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      v();
    }, []);
    var v = function v() {
        o.current = 1, t([]), f();
      },
      f = function f() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee46() {
          var _e13;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee46$(_context46) {
            while (1) switch (_context46.prev = _context46.next) {
              case 0:
                _context46.prev = 0;
                _context46.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryCollectPage)({
                  row: 10,
                  page: o.current,
                  collectType: 0
                });
              case 3:
                _e13 = _context46.sent;
                t(function (t) {
                  return t.concat((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_e13, "list", []));
                }), o.current += 1;
                _context46.next = 10;
                break;
              case 7:
                _context46.prev = 7;
                _context46.t0 = _context46["catch"](0);
                return _context46.abrupt("return", (console.log(_context46.t0), []));
              case 10:
              case "end":
                return _context46.stop();
            }
          }, _callee46, null, [[0, 7]]);
        }));
      },
      h = function h() {
        var t = [];
        for (var _o6 = 0; _o6 < e.length; _o6++) t.push(e[_o6].collectCode);
        return t.toString();
      };
    return {
      collectionList: e,
      edit: n,
      setEdit: d,
      getData: f,
      collectCodeStr: s,
      getSelectItem: function getSelectItem(t) {
        var o = t.detail.value;
        a(o.toString()), o.length === e.length ? g(!0) : (g(!1), a(""));
      },
      delItem: function delItem() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee47() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee47$(_context47) {
            while (1) switch (_context47.prev = _context47.next) {
              case 0:
                _context47.prev = 0;
                _context47.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.deleteCollectByCodeStr)({
                  collectCodeStr: s
                });
              case 3:
                o.current = 1;
                v();
                _context47.next = 10;
                break;
              case 7:
                _context47.prev = 7;
                _context47.t0 = _context47["catch"](0);
                console.log(_context47.t0);
              case 10:
              case "end":
                return _context47.stop();
            }
          }, _callee47, null, [[0, 7]]);
        }));
      },
      init: v,
      checked: l,
      setChecked: u,
      handleSelectAll: function handleSelectAll(e) {
        e.detail.value.length ? (u(!0), a(h())) : u(!1);
      },
      selectAll: p,
      setSelectAll: m,
      selectAllChecked: y
    };
  },
  nt = function nt(e) {
    var _c89 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c90 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c89, 2),
      t = _c90[0],
      o = _c90[1],
      n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
      d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({}),
      s = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee48() {
        return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee48$(_context48) {
          while (1) switch (_context48.prev = _context48.next) {
            case 0:
              _context48.next = 2;
              return u();
            case 2:
              _context48.next = 4;
              return a();
            case 4:
            case "end":
              return _context48.stop();
          }
        }, _callee48);
      }));
    }, []);
    var a = function a() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee49() {
          var _t4, _n5, _n$, _c91, _i6, _r4, _a, _u2;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee49$(_context49) {
            while (1) switch (_context49.prev = _context49.next) {
              case 0:
                _context49.prev = 0;
                _context49.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getContractByCode)({
                  contractBillcode: e,
                  isLocalMock: !s
                });
              case 3:
                _t4 = _context49.sent;
                _n5 = l((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_t4, "goodsList"));
                _n$ = _n5[0];
                _c91 = _n$.contractBillcode;
                _i6 = _n$.memberBcode;
                _r4 = _n$.memberBname;
                _a = _n$.memberCode;
                _u2 = _n$.memberName;
                d.current = {
                  contractBillcode: _c91,
                  memberBcode: _i6,
                  memberBname: _r4,
                  memberCode: _a,
                  memberName: _u2
                }, o(_n5);
                _context49.next = 17;
                break;
              case 14:
                _context49.prev = 14;
                _context49.t0 = _context49["catch"](0);
                console.log(_context49.t0);
              case 17:
              case "end":
                return _context49.stop();
            }
          }, _callee49, null, [[0, 14]]);
        }));
      },
      l = function l(e) {
        for (var _t5 = 0; _t5 < e.length; _t5++) e[_t5].upImgLength = !0, e[_t5].upImg = [], e[_t5].evaluateGoodsImgs = "", e[_t5].evaluateScopeList = [n.current[0]], e[_t5].evaluateGoodsContent = "";
        return e;
      },
      u = function u() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee50() {
          var _e14;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee50$(_context50) {
            while (1) switch (_context50.prev = _context50.next) {
              case 0:
                _context50.prev = 0;
                _context50.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUseTemplate)({
                  applyTarget: "goods",
                  isLocalMock: !s
                });
              case 3:
                _e14 = _context50.sent;
                n.current = _e14[0].templateValuesReList;
                _context50.next = 10;
                break;
              case 7:
                _context50.prev = 7;
                _context50.t0 = _context50["catch"](0);
                console.log(_context50.t0);
              case 10:
              case "end":
                return _context50.stop();
            }
          }, _callee50, null, [[0, 7]]);
        }));
      };
    return {
      orderInfo: t,
      changeStar: function changeStar(e, c) {
        var i = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(t),
          r = [];
        for (var _e15 = 0; _e15 < c; _e15++) r.push(n.current[_e15]);
        i[e].evaluateScopeList = r, o(i);
      },
      Submit: function Submit() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee51() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee51$(_context51) {
            while (1) switch (_context51.prev = _context51.next) {
              case 0:
                _context51.prev = 0;
                _context51.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveEvaluateGoods)({
                  paramStr: JSON.stringify(t)
                });
              case 3:
                _context51.next = 5;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveEvaluateShop)(Object.assign({
                  paramStr: JSON.stringify(t)
                }, d.current));
              case 5:
                _context51.next = 7;
                return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(ke.order));
              case 7:
                _context51.next = 12;
                break;
              case 9:
                _context51.prev = 9;
                _context51.t0 = _context51["catch"](0);
                console.log(_context51.t0);
              case 12:
              case "end":
                return _context51.stop();
            }
          }, _callee51, null, [[0, 9]]);
        }));
      },
      changeContent: function changeContent(e, n) {
        var c = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(t);
        c[e].evaluateGoodsContent = n.detail.value, o(c);
      }
    };
  },
  ct = function ct() {
    var _c92 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c93 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c92, 2),
      e = _c93[0],
      t = _c93[1],
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1),
      _c94 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c95 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c94, 2),
      n = _c95[0],
      d = _c95[1],
      _c96 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c97 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c96, 2),
      s = _c97[0],
      a = _c97[1],
      _c98 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c99 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c98, 2),
      l = _c99[0],
      u = _c99[1],
      _c100 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c101 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c100, 2),
      p = _c101[0],
      m = _c101[1],
      _c102 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c103 = (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c102, 2),
      y = _c103[0],
      g = _c103[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      v();
    }, []);
    var v = function v() {
        o.current = 1, t([]), f();
      },
      f = function f() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee52() {
          var _e16;
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee52$(_context52) {
            while (1) switch (_context52.prev = _context52.next) {
              case 0:
                _context52.prev = 0;
                _context52.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryFootprintPagePlat)({
                  row: 500,
                  page: o.current
                });
              case 3:
                _e16 = _context52.sent;
                if (!(0 === _e16.length)) {
                  _context52.next = 6;
                  break;
                }
                return _context52.abrupt("return");
              case 6:
                t((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_e16, "list", []));
                _context52.next = 12;
                break;
              case 9:
                _context52.prev = 9;
                _context52.t0 = _context52["catch"](0);
                return _context52.abrupt("return", (console.log(_context52.t0), []));
              case 12:
              case "end":
                return _context52.stop();
            }
          }, _callee52, null, [[0, 9]]);
        }));
      },
      h = function h() {
        var e = [];
        for (var _t6 = 0; _t6 < collectionList.length; _t6++) e.push(collectionList[_t6].collectCode);
        return e.toString();
      };
    return {
      footprintList: e,
      edit: n,
      setEdit: d,
      getData: f,
      getSelectItem: function getSelectItem(e) {
        var t = e.detail.value;
        console.log(43, t), a(t.toString());
      },
      delItem: function delItem() {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee53() {
          return (0,_Users_devil_Desktop_taro_taro_mobile_react_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee53$(_context53) {
            while (1) switch (_context53.prev = _context53.next) {
              case 0:
                _context53.prev = 0;
                _context53.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.deleteFootprintByCodeStr)({
                  footprintCodeStr: s
                });
              case 3:
                o.current = 1;
                v();
                _context53.next = 10;
                break;
              case 7:
                _context53.prev = 7;
                _context53.t0 = _context53["catch"](0);
                console.log(_context53.t0);
              case 10:
              case "end":
                return _context53.stop();
            }
          }, _callee53, null, [[0, 7]]);
        }));
      },
      init: v,
      checked: l,
      setChecked: u,
      handleSelectAll: function handleSelectAll(e) {
        e.detail.value.length ? (u(!0), setCollectCodeStr(h())) : u(!1);
      },
      selectAll: p,
      setSelectAll: m,
      selectAllChecked: y
    };
  };
function it(e) {
  if (!e) return;
  return e.includes("/pages/") ? (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.switchTabImpl)(e) : (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)(e);
}


/***/ })

}]);
//# sourceMappingURL=common.js.map