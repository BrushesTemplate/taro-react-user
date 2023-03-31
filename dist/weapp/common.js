(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

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
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
    _useState2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    timeFlag = _useState2[0],
    setTimeFlag = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(seconds),
    _useState4 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    time = _useState4[0],
    setTime = _useState4[1];
  var timeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
    lock = _useState6[0],
    setLock = _useState6[1];
  var getMobile = /*#__PURE__*/function () {
    var _ref2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
      var mobile, pass, phone, checkResult, result;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!lock) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            mobile = form.getFieldValue('mobile');
            if (mobile) {
              _context.next = 6;
              break;
            }
            (0,_utils_message__WEBPACK_IMPORTED_MODULE_3__.errMessage)('请填写手机号');
            return _context.abrupt("return");
          case 6:
            pass = type === 'mobileLogin' ? true : _utils__WEBPACK_IMPORTED_MODULE_1__.mobileRex.test(mobile);
            if (pass) {
              _context.next = 12;
              break;
            }
            (0,_utils_message__WEBPACK_IMPORTED_MODULE_3__.errMessage)('请填写正确的手机号');
            return _context.abrupt("return");
          case 12:
            setLock(true);
            _context.prev = 13;
            phone = {
              userPhone: mobile
            };
            if (!(type === 'reg')) {
              _context.next = 22;
              break;
            }
            _context.next = 18;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.checkUserPhone)(phone);
          case 18:
            checkResult = _context.sent;
            if (checkResult.success) {
              _context.next = 22;
              break;
            }
            (0,_utils_message__WEBPACK_IMPORTED_MODULE_3__.errMessage)(checkResult.msg);
            return _context.abrupt("return");
          case 22:
            _context.next = 24;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.sendPhone)(phone);
          case 24:
            result = _context.sent;
            console.log(26, result);
            setTimeFlag(true);
            setTime(seconds);
            _context.next = 33;
            break;
          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](13);
            console.log(_context.t0);
          case 33:
            _context.prev = 33;
            setLock(false);
            return _context.finish(33);
          case 36:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[13, 30, 33, 36]]);
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
/* harmony export */   "AccountItem": function() { return /* reexport safe */ _accountItem__WEBPACK_IMPORTED_MODULE_3__.AccountItem; },
/* harmony export */   "CodeItem": function() { return /* reexport safe */ _codeItem__WEBPACK_IMPORTED_MODULE_1__.CodeItem; },
/* harmony export */   "MobileItem": function() { return /* reexport safe */ _mobileItem__WEBPACK_IMPORTED_MODULE_0__.MobileItem; },
/* harmony export */   "PasswordItem": function() { return /* reexport safe */ _passwordItem__WEBPACK_IMPORTED_MODULE_2__.PasswordItem; },
/* harmony export */   "ReadOnlyItem": function() { return /* reexport safe */ _readOnlyItem__WEBPACK_IMPORTED_MODULE_4__.ReadOnlyItem; },
/* harmony export */   "SubmitBtn": function() { return /* reexport safe */ _submitBtn__WEBPACK_IMPORTED_MODULE_5__.SubmitBtn; }
/* harmony export */ });
/* harmony import */ var _mobileItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileItem */ "./src/account/components/accountForm/components/mobileItem/index.tsx");
/* harmony import */ var _codeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codeItem */ "./src/account/components/accountForm/components/codeItem/index.tsx");
/* harmony import */ var _passwordItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passwordItem */ "./src/account/components/accountForm/components/passwordItem/index.tsx");
/* harmony import */ var _accountItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accountItem */ "./src/account/components/accountForm/components/accountItem/index.tsx");
/* harmony import */ var _readOnlyItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./readOnlyItem */ "./src/account/components/accountForm/components/readOnlyItem/index.tsx");
/* harmony import */ var _submitBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submitBtn */ "./src/account/components/accountForm/components/submitBtn/index.tsx");







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
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
    _useState2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
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

/***/ "./src/account/components/accountForm/components/readOnlyItem/index.tsx":
/*!******************************************************************************!*\
  !*** ./src/account/components/accountForm/components/readOnlyItem/index.tsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadOnlyItem": function() { return /* binding */ ReadOnlyItem; }
/* harmony export */ });
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



var ReadOnlyItem = function ReadOnlyItem(_ref) {
  var originPhone = _ref.originPhone,
    form = _ref.form;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    form.setFieldValue('mobile', originPhone);
  }, [originPhone]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_0__.Form.Item, {
    name: "mobile",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_mobile__WEBPACK_IMPORTED_MODULE_0__.Input, {
      placeholder: originPhone,
      readOnly: true
    })
  });
};

/***/ }),

/***/ "./src/account/components/accountForm/components/submitBtn/index.tsx":
/*!***************************************************************************!*\
  !*** ./src/account/components/accountForm/components/submitBtn/index.tsx ***!
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
    txt = _ref.txt,
    originPhone = _ref.originPhone;
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
      children: [['accountLogin'].includes(type) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.AccountItem, {}) : null, ['confirmPhone'].includes(type) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.ReadOnlyItem, {
        originPhone: originPhone,
        form: form
      }) : null, ['forgetPwd', 'reg', 'mobileLogin', 'bindPhone'].includes(type) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.MobileItem, {}) : null, ['reg', 'mobileLogin', 'forgetPwd', 'confirmPhone', 'bindPhone'].includes(type) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.CodeItem, {
        form: form,
        type: type
      }) : null, ['reg', 'accountLogin', 'forgetPwd'].includes(type) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_1__.PasswordItem, {
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

/***/ "./src/account/constans.ts":
/*!*********************************!*\
  !*** ./src/account/constans.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountConst": function() { return /* binding */ accountConst; }
/* harmony export */ });
var accountConst = {
  oldUserPhone: ''
};

/***/ }),

/***/ "./src/account/hooks/index.ts":
/*!************************************!*\
  !*** ./src/account/hooks/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stackLength": function() { return /* reexport safe */ _useAccountForm__WEBPACK_IMPORTED_MODULE_0__.stackLength; },
/* harmony export */   "useAccountForm": function() { return /* reexport safe */ _useAccountForm__WEBPACK_IMPORTED_MODULE_0__.useAccountForm; },
/* harmony export */   "useAgreement": function() { return /* reexport safe */ _useAgreement__WEBPACK_IMPORTED_MODULE_1__.useAgreement; },
/* harmony export */   "useAuth": function() { return /* reexport safe */ _useAuth__WEBPACK_IMPORTED_MODULE_2__.useAuth; },
/* harmony export */   "useBindPhone": function() { return /* reexport safe */ _useBindPhone__WEBPACK_IMPORTED_MODULE_3__.useBindPhone; }
/* harmony export */ });
/* harmony import */ var _useAccountForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAccountForm */ "./src/account/hooks/useAccountForm/index.ts");
/* harmony import */ var _useAgreement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAgreement */ "./src/account/hooks/useAgreement/index.ts");
/* harmony import */ var _useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAuth */ "./src/account/hooks/useAuth/index.ts");
/* harmony import */ var _useBindPhone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useBindPhone */ "./src/account/hooks/useBindPhone.ts");






/***/ }),

/***/ "./src/account/hooks/useAccountForm/index.ts":
/*!***************************************************!*\
  !*** ./src/account/hooks/useAccountForm/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stackLength": function() { return /* binding */ stackLength; },
/* harmony export */   "useAccountForm": function() { return /* binding */ useAccountForm; }
/* harmony export */ });
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var _brushes_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brushes/request */ "./node_modules/@brushes/request/dist/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @brushes/utils */ "./node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var _account_constans__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/account/constans */ "./src/account/constans.ts");
/* harmony import */ var qj_mobile_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qj-mobile-store */ "./node_modules/qj-mobile-store/dist/index.js");











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
var useAccountForm = function useAccountForm(type) {
  var _Form$useForm = antd_mobile__WEBPACK_IMPORTED_MODULE_1__.Form.useForm(),
    _Form$useForm2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    submitLock = _useState2[0],
    setSubmitLock = _useState2[1];
  var onFinish = /*#__PURE__*/function () {
    var _ref = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee(formVal) {
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!submitLock) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.t0 = type;
            _context.next = _context.t0 === 'reg' ? 5 : _context.t0 === 'mobileLogin' ? 8 : _context.t0 === 'accountLogin' ? 11 : _context.t0 === 'forgetPwd' ? 14 : _context.t0 === 'confirmPhone' ? 17 : _context.t0 === 'bindPhone' ? 20 : 23;
            break;
          case 5:
            _context.next = 7;
            return regSubmit(formVal);
          case 7:
            return _context.abrupt("break", 23);
          case 8:
            _context.next = 10;
            return mobileLoginSubmit(formVal);
          case 10:
            return _context.abrupt("break", 23);
          case 11:
            _context.next = 13;
            return accountLoginSubmit(formVal);
          case 13:
            return _context.abrupt("break", 23);
          case 14:
            _context.next = 16;
            return forgetPwdSubmit(formVal);
          case 16:
            return _context.abrupt("break", 23);
          case 17:
            _context.next = 19;
            return confirmPhoneSubmit(formVal);
          case 19:
            return _context.abrupt("break", 23);
          case 20:
            _context.next = 22;
            return bindPhoneSubmit(formVal);
          case 22:
            return _context.abrupt("break", 23);
          case 23:
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
    var _ref2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee2(formVal) {
      var params;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee2$(_context2) {
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
    var _ref3 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee3(formVal) {
      var params, result;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee3$(_context3) {
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
    var _ref4 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee4(formVal) {
      var params, result;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee4$(_context4) {
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
    var _ref5 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee5(formVal) {
      var params;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee5$(_context5) {
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
  var confirmPhoneSubmit = /*#__PURE__*/function () {
    var _ref6 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee6(formVal) {
      var params, result;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            params = {
              userPhone: formVal.mobile,
              code: formVal.code
            };
            _context6.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.checkVerificationMa)(params);
          case 3:
            result = _context6.sent;
            if (result.success) {
              console.log(148, result);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
                url: "".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_7__.routerMap.bindPhone, "?oldUserPhone=").concat(formVal.mobile)
              });
            }
          case 5:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function confirmPhoneSubmit(_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
  var bindPhoneSubmit = /*#__PURE__*/function () {
    var _ref7 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().mark(function _callee7(formVal) {
      var params, result;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_10__["default"])().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            params = {
              newUserPhone: formVal.mobile,
              code: formVal.code,
              oldUserPhone: _account_constans__WEBPACK_IMPORTED_MODULE_6__.accountConst.oldUserPhone
            };
            _context7.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.updateUserPhoneByUserPhone)(params);
          case 3:
            result = _context7.sent;
            if (result.success) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
                title: '绑定成功',
                icon: 'success',
                duration: 2000,
                success: function success() {
                  setTimeout(function () {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateBack({
                      delta: 2
                    });
                  }, 2000);
                }
              });
            }
            console.log(166, result);
          case 6:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function bindPhoneSubmit(_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
  var goRegister = function goRegister() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: qj_mobile_store__WEBPACK_IMPORTED_MODULE_7__.routerMap.register
    });
  };
  var goAccountLogin = function goAccountLogin() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: qj_mobile_store__WEBPACK_IMPORTED_MODULE_7__.routerMap.accountLogin
    });
  };
  var goMobileLogin = function goMobileLogin() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: qj_mobile_store__WEBPACK_IMPORTED_MODULE_7__.routerMap.mobileLogin
    });
  };
  var goForgetPwd = function goForgetPwd() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: qj_mobile_store__WEBPACK_IMPORTED_MODULE_7__.routerMap.forgetPwd
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
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");







var useAgreement = function useAgreement(type) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    agreementData = _useState2[0],
    setAgreementData = _useState2[1];
  var proappCode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee() {
      var result, resultArr, i;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
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
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var _brushes_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brushes/request */ "./node_modules/@brushes/request/dist/index.js");
/* harmony import */ var _account_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/account/hooks */ "./src/account/hooks/index.ts");









var useAuth = function useAuth() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    bg = _useState2[0],
    setBg = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    logo = _useState4[0],
    setLogo = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
    agree = _useState6[0],
    setAgree = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getInfo();
  }, []);
  var getInfo = /*#__PURE__*/function () {
    var _ref = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
      var res, result;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryProappEnvPage)();
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
  var getPhone = /*#__PURE__*/function () {
    var _ref2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee3(e) {
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().login({
              success: function () {
                var _success = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2(res) {
                  var warrantyResult, _get, register, userInfo, userOpenid, result, user;
                  return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.warrantyLogin)({
                          'js_code': res.code
                        });
                      case 2:
                        warrantyResult = _context2.sent;
                        _get = (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(warrantyResult, 'dataObj'), register = _get.register, userInfo = _get.userInfo, userOpenid = _get.userOpenid;
                        if (!(register === 'true')) {
                          _context2.next = 10;
                          break;
                        }
                        _context2.next = 7;
                        return registerImpl(e, userOpenid);
                      case 7:
                        result = _context2.sent;
                        setAuthImpl(result.dataObj.ticketTokenid);
                        return _context2.abrupt("return");
                      case 10:
                        user = JSON.parse(userInfo);
                        setAuthImpl(user.ticketTokenid);
                      case 12:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                function success(_x2) {
                  return _success.apply(this, arguments);
                }
                return success;
              }()
            });
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getPhone(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var registerImpl = function registerImpl(e, userOpenid) {
    return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveUmuserPhoneNoCodeByWX)({
      code: e.detail.code,
      userOpenid: userOpenid
    });
  };
  var setAuthImpl = function setAuthImpl(token) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('saas-token', token);
    callback();
  };
  var callback = function callback() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack({
      delta: (0,_account_hooks__WEBPACK_IMPORTED_MODULE_4__.stackLength)(),
      success: function success() {
        (0,_brushes_request__WEBPACK_IMPORTED_MODULE_3__.errorCallback)();
      }
    });
  };
  return {
    bg: bg,
    logo: logo,
    agreeFunc: agreeFunc,
    setAgree: setAgree,
    agree: agree,
    getPhone: getPhone
  };
};

/***/ }),

/***/ "./src/account/hooks/useBindPhone.ts":
/*!*******************************************!*\
  !*** ./src/account/hooks/useBindPhone.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBindPhone": function() { return /* binding */ useBindPhone; }
/* harmony export */ });
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");






var useBindPhone = function useBindPhone() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    originPhone = _useState2[0],
    setOriginPhone = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getOriginPhone();
  }, []);
  var getOriginPhone = /*#__PURE__*/function () {
    var _ref = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee() {
      var result, phone;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_1__.INDEX_MEM)();
          case 2:
            result = _context.sent;
            phone = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(result, 'userInfo.userPhone');
            setOriginPhone(phone);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getOriginPhone() {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    originPhone: originPhone
  };
};

/***/ }),

/***/ "./src/components/dynamicComponent.tsx":
/*!*********************************************!*\
  !*** ./src/components/dynamicComponent.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/noop.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var s_material_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! s-material-react */ "../lowcode_materials_react/packages/s-material-react/dist/index.js");
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
    rest = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);
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
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MaterialsComponent, (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, props), rest))
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
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
    _useState2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
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
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/header */ "./src/components/header.tsx");
/* harmony import */ var _dynamicComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamicComponent */ "./src/components/dynamicComponent.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


var _excluded = ["route"];






var CommonJsx = function CommonJsx(_ref) {
  var route = _ref.route,
    rest = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, _excluded);
  var node = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.usePageConfig)(route);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dynamicComponent__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
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
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var _custom_tab_bar_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/custom-tab-bar/basic */ "./src/custom-tab-bar/basic.ts");
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/message */ "./src/utils/message.ts");









function useMenu() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    menuList = _useState2[0],
    setMenuList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    activePath = _useState4[0],
    setPath = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log(15);
    // @ts-ignore
    (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
      var menuData, menu;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
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
  _loadMenu = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2() {
    var result, menu;
    return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee2$(_context2) {
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
            return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, _custom_tab_bar_basic__WEBPACK_IMPORTED_MODULE_3__.menuDefaultValue[item.menuJspath]), {}, {
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
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
    _useState2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    node = _useState2[0],
    setNode = _useState2[1];
  var menuRx = (0,_utils_menuData__WEBPACK_IMPORTED_MODULE_3__.useMenuGraph)(route);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee() {
      var menuOpcode, isExister, nodeResource, pageConfig, dataStr, data;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee$(_context) {
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
              proappCode: '025',
              isNew: 1
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
    _init = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee2(path) {
      var menu, _ref2, menuOpcode;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee2$(_context2) {
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
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qj-b2c-api */ "./node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/get.js");





function checkSession() {
  return _checkSession.apply(this, arguments);
}
function _checkSession() {
  _checkSession = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee() {
    return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee$(_context) {
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
  _bindSeller = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee2() {
    var token, referrer;
    return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee2$(_context2) {
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
  _checkHasLogined = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee3() {
    var token, loggined;
    return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee3$(_context3) {
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
  _wxaCode = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee4() {
    return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee4$(_context4) {
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
  _authorize = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee5() {
    return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee5$(_context5) {
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
  _checkAndAuthorize = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee6(scope) {
    return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee6$(_context6) {
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
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var defaultPageValue = {};
var MenuModal = /*#__PURE__*/function () {
  // 数据

  function MenuModal(defaultValue) {
    (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuModal);
    (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "lowCodeGraph", void 0);
    this.lowCodeGraph = defaultValue;
  }
  (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MenuModal, [{
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

/***/ "../lowcode_materials_react/packages/s-material-react/dist/index.js":
/*!**************************************************************************!*\
  !*** ../lowcode_materials_react/packages/s-material-react/dist/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressDetail": function() { return /* binding */ Gs; },
/* harmony export */   "AddressList": function() { return /* binding */ Ls; },
/* harmony export */   "Cart": function() { return /* binding */ oa; },
/* harmony export */   "ClassifyNav": function() { return /* binding */ Ze; },
/* harmony export */   "CouponList": function() { return /* binding */ na; },
/* harmony export */   "Cube": function() { return /* binding */ Ae; },
/* harmony export */   "EvaluateDetail": function() { return /* binding */ Ss; },
/* harmony export */   "EvaluateList": function() { return /* binding */ Ds; },
/* harmony export */   "Goods": function() { return /* binding */ Oe; },
/* harmony export */   "GoodsClassify": function() { return /* binding */ Os; },
/* harmony export */   "GoodsDetail": function() { return /* binding */ bs; },
/* harmony export */   "GoodsDetailPromotion": function() { return /* binding */ ks; },
/* harmony export */   "GoodsDetailTopInfo": function() { return /* binding */ ws; },
/* harmony export */   "GoodsGroup": function() { return /* binding */ Ve; },
/* harmony export */   "GoodsList": function() { return /* binding */ ys; },
/* harmony export */   "Line": function() { return /* binding */ ye; },
/* harmony export */   "Mine": function() { return /* binding */ ma; },
/* harmony export */   "Notice": function() { return /* binding */ je; },
/* harmony export */   "OrderDetail": function() { return /* binding */ Ke; },
/* harmony export */   "OrderList": function() { return /* binding */ qe; },
/* harmony export */   "PaymentMode": function() { return /* binding */ ha; },
/* harmony export */   "PlaceOrder": function() { return /* binding */ Ys; },
/* harmony export */   "PlaceOrderResult": function() { return /* binding */ _s; },
/* harmony export */   "QjMobileIcon": function() { return /* binding */ Ne; },
/* harmony export */   "Search": function() { return /* binding */ Ie; },
/* harmony export */   "SearchPage": function() { return /* binding */ vs; },
/* harmony export */   "Service": function() { return /* binding */ ve; },
/* harmony export */   "Slider": function() { return /* binding */ De; },
/* harmony export */   "Title": function() { return /* binding */ fe; },
/* harmony export */   "Video": function() { return /* binding */ Ce; }
/* harmony export */ });
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @brushes/simulate-component */ "../lowcode_materials_react/node_modules/@brushes/simulate-component/dist/index.js");
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @brushes/simulate-component */ "../lowcode_materials_react/node_modules/antd-mobile/es/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brushes/utils */ "../lowcode_materials_react/node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qj-b2c-api */ "../lowcode_materials_react/node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../lowcode_materials_react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qj-mobile-store */ "../lowcode_materials_react/node_modules/qj-mobile-store/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ "../lowcode_materials_react/node_modules/lodash-es/isEqual.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es */ "../lowcode_materials_react/node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash-es */ "../lowcode_materials_react/node_modules/lodash-es/isUndefined.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash-es */ "../lowcode_materials_react/node_modules/lodash-es/get.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "../lowcode_materials_react/node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var china_division_dist_provinces_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! china-division/dist/provinces.json */ "../lowcode_materials_react/node_modules/china-division/dist/provinces.json");
/* harmony import */ var china_division_dist_cities_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! china-division/dist/cities.json */ "../lowcode_materials_react/node_modules/china-division/dist/cities.json");
/* harmony import */ var china_division_dist_areas_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! china-division/dist/areas.json */ "../lowcode_materials_react/node_modules/china-division/dist/areas.json");
















function ue(e, s) {
  var a = {};
  for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && s.indexOf(c) < 0 && (a[c] = e[c]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var n = 0;
    for (c = Object.getOwnPropertySymbols(e); n < c.length; n++) s.indexOf(c[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[n]) && (a[c[n]] = e[c[n]]);
  }
  return a;
}
function pe(e, s, a, c) {
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
var Ne = function Ne(_ref) {
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
    var _d = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _d.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
      onClick: c,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(a, i ? "".concat(a, "-").concat(i) : "", s),
      style: n
    });
  },
  Oe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref2) {
    var _ref2$defaultValue = _ref2.defaultValue,
      a = _ref2$defaultValue === void 0 ? [] : _ref2$defaultValue,
      _ref2$classCode = _ref2.classCode,
      c = _ref2$classCode === void 0 ? "" : _ref2$classCode,
      l = _ref2.margin,
      o = _ref2.circular,
      r = _ref2.cell,
      m = _ref2.showSales,
      _ref2$gap = _ref2.gap,
      g = _ref2$gap === void 0 ? 10 : _ref2$gap,
      _ref2$goods = _ref2.goods,
      h = _ref2$goods === void 0 ? [] : _ref2$goods,
      b = _ref2.markedPrice,
      p = _ref2.paddingTop,
      N = _ref2.paddingBottom,
      O = _ref2.paddingLeft,
      j = _ref2.paddingRight;
    var _n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(a),
      _n2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n, 2),
      f = _n2[0],
      A = _n2[1],
      y = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),
      _d2 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      v = _d2.View,
      w = _d2.Text;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(y.current, h) || (y.current = h, (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(h) ? A(a) : pe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee() {
        var _e2;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.find)({
                goodsCode: h.toString()
              });
            case 3:
              _e2 = _context.sent;
              console.log(63, _e2), A(_e2.rows);
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              A(a);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      })));
    }, [h]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(v, Object.assign({
      style: {
        paddingTop: p,
        paddingBottom: N
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(v, Object.assign({
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])({}, "goods-".concat(c), !0)),
        style: {
          display: "grid",
          gap: g,
          marginBottom: l,
          gridTemplateColumns: "repeat(".concat(r, ", 1fr)"),
          paddingLeft: O,
          paddingRight: j
        }
      }, {
        children: f.map(function (a, c) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(v, Object.assign({
            style: {
              overflow: "hidden",
              borderRadius: 2 === o ? 0 : "8px"
            },
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.goodDetail, "?skuCode=").concat(a.skuCode));
            },
            className: "goods"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(v, {
              className: "goods-img",
              style: {
                backgroundImage: "url(".concat(a.dataPic, ")")
              }
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(v, Object.assign({
              className: "space"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(v, Object.assign({
                className: "titleType"
              }, {
                children: a.goodsName
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(v, Object.assign({
                className: "subTitle"
              }, {
                children: a.brandName
              })), m && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(v, Object.assign({
                className: "sales"
              }, {
                children: ["已售:", a.sales, "件"]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(v, Object.assign({
                className: "price"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(w, Object.assign({
                  className: "subPrice"
                }, {
                  children: "¥"
                })), a.pricesetNprice, 1 === b && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(w, Object.assign({
                  className: "markedPrice"
                }, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(w, Object.assign({
                    className: "subPrice"
                  }, {
                    children: "¥"
                  })), a.pricesetMakeprice]
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(v, Object.assign({
                className: "anticon"
              }, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ne, {
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
  je = function je(_ref3) {
    var s = _ref3.direction,
      a = _ref3.speed,
      c = _ref3.num,
      n = _ref3.color;
    var _B = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useNotice)(c),
      i = _B.content,
      t = _B.navigator;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.NoticeBar, {
      navigator: t,
      color: n,
      speed: a,
      direction: s,
      content: i
    });
  },
  fe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref4) {
    var s = _ref4.value,
      a = _ref4.textIndent,
      c = _ref4.fontSize,
      n = _ref4.textAlign,
      i = _ref4.color,
      t = _ref4.backgroundColor,
      l = _ref4.fontWeight,
      o = _ref4.textDecoration,
      r = _ref4.fontStyle,
      m = _ref4.paddingTop,
      g = _ref4.paddingLeft,
      h = _ref4.paddingRight,
      b = _ref4.paddingBottom;
    var _d3 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      u = _d3.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(u, Object.assign({
      className: "components-title",
      style: {
        paddingTop: m,
        paddingBottom: b
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(u, Object.assign({
        style: {
          fontSize: c,
          textAlign: n,
          color: i,
          backgroundColor: t,
          fontWeight: l,
          textDecoration: o,
          fontStyle: r,
          paddingLeft: g,
          paddingRight: h,
          textIndent: a
        }
      }, {
        children: s
      }))
    }));
  }),
  Ae = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref5) {
    var s = _ref5.defaultValue,
      a = _ref5.type,
      c = _ref5.borderRadius,
      n = _ref5.paddingTop,
      i = _ref5.paddingLeft,
      t = _ref5.paddingRight,
      l = _ref5.paddingBottom,
      o = _ref5.selectImg;
    var _d4 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      r = _d4.View,
      m = _d4.Image,
      g = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(s, o);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
      style: {
        paddingTop: n,
        paddingBottom: l
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
        className: "cube-type".concat(a),
        style: {
          paddingLeft: i,
          paddingRight: t
        }
      }, {
        children: g.map(function (s, a) {
          var n;
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, {
            className: "block",
            mode: "scaleToFill",
            src: s.imgUrl,
            style: {
              borderRadius: c + "px"
            },
            onClick: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler.bind(null, null === (n = s.link) || void 0 === n ? void 0 : n.value)
          }, a);
        })
      }))
    }));
  }),
  ye = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref6) {
    var s = _ref6.borderStyle,
      a = _ref6.borderRadius,
      c = _ref6.height,
      n = _ref6.width,
      i = _ref6.backgroundColor,
      t = _ref6.paddingTop,
      l = _ref6.paddingBottom;
    var _d5 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      o = _d5.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
      style: {
        paddingTop: t,
        paddingBottom: l
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, {
        style: {
          borderRadius: a + "%",
          borderStyle: s,
          width: n + "%",
          height: c + "px",
          backgroundColor: i,
          marginLeft: "auto",
          marginRight: "auto"
        }
      })
    }));
  }),
  Ce = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref7) {
    var s = _ref7.url,
      a = _ref7.poster,
      c = _ref7.autoplay,
      n = _ref7.loop,
      i = _ref7.paddingTop,
      t = _ref7.paddingBottom,
      l = _ref7.paddingLeft,
      o = _ref7.paddingRight;
    var _d6 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      r = _d6.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
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
  ve = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref8) {
    var s = _ref8.width,
      a = _ref8.height,
      c = _ref8.top,
      n = _ref8.right,
      i = _ref8.bottom,
      t = _ref8.left,
      l = _ref8.borderRadius;
    var _d7 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      o = _d7.View;
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
  we = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADcdJREFUeF7tnQXMZUcVx38FihUvbkGCu7sVDVYo7lLctUhwd1JcUiw4FCgeXIMU1+LuUtwtP3Ze2C673zvn3pkr37sn2WzTPTNv5sz/jhzdi4U2WgJ7bfTsl8mzAGDDQbAAYAHAhktgw6e/7AALADZcAhs+/WUHWACw4RLY8OkvO8ACgG0jgb2BMwHnKH+fCNgHOB7gfwv2vwF/BI4E/gD8Cvg68DXgh9tGEomJzHkHOCewH3B54LzAGYFjJOa+K6uAEAifAt4HfAD4eY/+ZtF0TgA4FnBN4ICy8KdsLOF/A18C3g28Gji88e+N0v0cAHAh4JbATYCTjSKlHT96BPAa4GXAt0ccR9WfnioAjg7cGHgQcK6qM+7f2b+Aw4DHleOif48j9jA1AHiR80t/MHC2EeUS/emPAg8H3httMDW+KQHg2sDBwBmmJqTAeN4B3B34VoB3UixTAMBpgMcDt5iUZPKD8Yn5dOARwF/yzcdpMSYA/O37FYEdd5zpN/nVbwIHAh9q0nvlTscCwEmBlwJXrzyfqXT3T+AxwKMAL42TpTEAcFnglYBb/3an9wM3BX461YkODYC7lXOyj8Zud7L0i/s88Nmi2lW965/f7aT6td0xi3r4xMC+wFmBs5cXx8WA0zdYqB8D1wA+16Dv3l0OCYBHAw/pPeL/daDu/g3lCeZ5+5sKfZ8ZuAJwZeBawHEq9GkXvwWuU9TLlbqs080QAFCp8xzgDhWGrCHn0KKNc3tteb6eALheeZ1ob+grq78CNyvjryCKOl30ndS6Ubj4nvc3XMe45t+13j0TeEax4PXsLt1cY5PKqesDzqkreVTdtgC4ax9V27UGwPOAO/YYsV+8KlcX//c9+qnV1DuDR1kfQP8DuC7w1lqD6tNPSwD4BHpoj8EpIC+N3+vRR6umHgnPBjRJd6E/A1cBPtKlcc02rQBwlyKgLmP9RdkmJ/GFbDEBXxTaAR4IHK3DRH8NXAb4Soe21Zq0AIDPqQ8DGnay5G3ed/OPsg1H5PfV8ArgVB3G8A1Ac/dox1ttAPi29i1+ug7CeFK5aHlRmhu5+L5OLtFh4C8f0w5SEwD29UZg/6QQ9Lw5CHhKst3U2LVnvLYofbJjux1wSLZRDf6aALhX0fJlxvV34NblqZhpN1VeNZwupB5MGfJSeMHidZRp15u3FgBOC3y1eOBGB+WX75v4JdEGM+FTphq6suZt7z++LpTLYFQLAK8vWrPMwO8LPC3TYEa8XoDfAlw1OWYvwK9KtunFXgMAVwP0iMmQ5/39Mw1myHv88s5XixilnxTjlEasQagvADzzfMeeJTFalR8+ndSIbXdSc2icgWCI0lOLo0yUvxdfXwB42fG8i5LKDy87U9TuReeQ5btRiSuItvtTCXIZJCilDwDUfhk4YShWlNSBvynKvI34jCXIXAqfUFzim4ugDwC0jL0uMcI3d9ARJLqfNKsKMsPO/DtC3gH0jtYK2pT6AMCzTTVmhNzWDPD4boR5m/LcufhFRKenIU2/wqbUFQAXAD6TGNkji/dvosm2Y9WP4NPA+YIz82Mx2rmpXqArAHy/3zs4kcG2s+B4xmS7QVEXR8dwudbu5V0A4NPvB0A0OtegD71pFtphNv5CIt5RtbJ2gmbUBQB6uEZt9UbIeJn5WbMZzK/jWyXU3+6efmjaCppQFwC8MIFKw6mN8l3ofxI4NqDGz6wlETInwtsijF14ugDAAEgvJxFqOvjIACbK49auISxC3re0mzShLAAMnIhq8dRkaSXU5LvQUSWg1U+39ggZUOKrqwllAXAb4EXBkXhU1IgFCP7crNi8DBouFsl4YuzDKYBftphhFgDq/aPODiZ6MLfOQruXgN5DPgsjZICKUVDVKQsAlT+R7UjlxamnHBRZXZL5DjOaQb2PdbOvThkAyOuzxLx760jvoK4+8+v63i7/blCqcoqQTiI6i1SnDAC80KkAipBbv0fAQnuWgPcAI598Fq4jVcgXXsfU5d8zALhSyZkX+Z1F9x+REnwROHeA1SSWBqtWtwtkAHB74AWBwcpiFKxBoQttLQHN6ZrVI6RGsLpGNQMA8/k8OTJS4OLAJ4K8m8z2xBITEZGBafNMelGVMgBwW39Y8Ne94OgAsdDWEjARptHPEdL3ImOCj/SZSnqQMQF7YZxTfF9IWA2YjH429D1Cag8/GGHM8GR2gIwR6ITlyZgZyybyZiyDJtI01qAqZQCQ0QIaJ9fMhFlVAuN25lM5ellWa2gATlXKAMCECMb9R8g8gBZjWGhrCWReVuZUzAbgrJV/BgC6Kj9gbY87GCzesMkOoEExcR/AQJAINXEPywDAFG/mx4mQ4VAqORbaWgLq+M0tHKHRXwH3KNm8I4M1z957IowbzmP6PI1CETLMzIwiVSmzA2QuLD5vvDMstLUE/EiuGBCSPgFerM01WJUyAHALMhgkQubzu2eEccN5zHYayZksX5e0O2vFmwGAZmDNwZE27+oQG792sNuMISNPk26ZZLs6RRZz5x+NIta8vT4F55jwqbqQ99ChW3/0nvTihBNpavxZAETPLAeh/Vo79kK7l8BjEwEzd03GFYZlngWAUT4mRoyQGUDmnvkrMs+uPB8rVtNIe93wmqSbzwLA553ne4QsuGg61IX+XwInKbb9SN0EvYYMImmSUSULAJ8iZvmwiuc68vz35moUzEJHlcCdgOcGhWIZ28hTMdjdUdmyALC1JsnojXQ7ZwLrJPDSyHqDlwx2oLrYamRNqAsAMiphy7icv8nI59upVUnU6EVlL3+zUrXRQews7uwEzAhmJe6FdkhAJZlFJiPU/APqAgAHbqq3S0VmUN66Xh4X2hHi9Z1ELSJd8KIGuE7y7QoAq4BYDSRKnnc+ezadMiZ1b/3mVmjqWtcVAJZdsxxaJKjBRbe4snEFm0zZfMpmXj+gtcC6AsBxZXwE5TdRhAkjNpUyMQDKSB2KupSm1AcAXgaPACLKDCfhjqG7+GjVMZpKcuvOMwo0ezKPkK+n6pFAuw6zDwDsy2oXRgFFyciiPlXEor8zJT49pLWJ+MFEya3fI6A59QWAaWJNF5spmnTzUmOn+eQm8gPWE8pE9lpyR9+L5l+/8ukLAPvIuIvLr0+BlsLq7k0TWfCdh5HJAbBqZ8naaBa23lOuAQDftt4FolmvHLQp5i2Zpl1hu5IKMN24I3aTlQzMBmZircGoBgAcrPbqZyVH/UlgvxIjn2w6efbzlAyfmY/CQBpDxZupfXcntVoAMA/uxzskMXCrM//N3ya/pPEBetnThStbR9BAURVFg1ItADhoUW9IeLbkum9db70mQZg7+XRz24+m0V3N149HC+vgKfVqAsDJmBbu+R1WUW9jU9AOUiWjw/giTYzetRiGz74M/bYk3tJGMDjVBoATyD57VpP27LMq9xz9CI2ZNHw+c+Fbzds5ZwpvVAVJCwBYIOlwwIwWWTLwwUwk2Qtl9ndq8Zu3R5V413LyHnvWWh6tgHQLAChccwnr9ZI9C1cLY3kZbebfr7VSDfpRvatbV0bDt7thmPfH19AoIGgFACfqpVD3MS2HXcgyM+Yk0hO5ekhUlwGVNt7uze2TKQK17ue8++j3p1Z1UGoJACfixeidHc/GlSDUGAoC7Q6D35J3Wo2Tw3/DudV5RJJlZhdylJ2gNQAUgrd78+LqUdyHzFJuiXmBMFhlzbLFGxlt5Y6+c1g3/8FBMAQAnLQXHZU+hov1JauQGKFkLT6fXS12BTV45uRxm3drHkpOymbQ42DIianm9DiIRMNGQeIb2qrb+s77x9y7XQDhy0WQqr/3QqaxKurnEB1rhm+wnWBIACgAC06Y6OgiGWkkeF189Qkap/xbY5NPLf8YYeNCq6jxDPdMN+mCz9WaoNx1uDrAZGoHr9oPAoKhAeDk/LIsiHjQwFtrAkdVWL2n6PyiYsvqIF1A1vw4GAMAK+nuDxj23PWZWGWVGnWiIsyMKtZXkqyuPkkQjAkABWPs4MGARaW3A6m7MKWuauFdgzk9arynWEgjS82Og7EBsBKEFy9zCuk0OlfylaP2cqv0eJPbCaYCABddM7J2AEvSzulYMIGzETzR2n5ePD0OJrETTAkAqy/fG/qBJSll1qliyN3jy2W791WTdeCczE4wRQCsFnGfon0znaql56dAnuuHlbA4o52yC7/zHCaxE0wZADsLSzdptXLerH2/D026ah9aXi0GuNSi0UEwFwCsBL43cOmirfPieNFGGjuVN7ppebHzi49WS+0CjFFBMDcA7Cpg7wsCwtzECtJXhH/2Da6EW7qp79Qa+mbXNc0oZm3zQ6a4Gw0EcwfAntZZ1auGJwGy+uP/UzunWlgX7CNL/qIutoMgvlJso4BguwIgJfkJMQ/+OlgAMKHVL0PpsxOYkU1DWzipxAKA6QHAEfXZCVLhZQsApgmAviDQKTcUZ7AAYLoA6AMCjWt6S62lBQBrRTQ6Q5fjQD/Mt0dGvgAgIqXxeTIgMNBWQ1OoatsCgPEXNzqCKAhM3xetQzSot2t0ogvfniUgCDRC7al8jO5nxmKEI62XHWB+cDMji84zhtSv1s/IqUOKCT28+E59AcD8ALAasU6mFpLwzNeG0SndzgKA+QKgysgXAFQR43w7WQAw37WrMvIFAFXEON9OFgDMd+2qjHwBQBUxzreTBQDzXbsqI18AUEWM8+1kAcB8167KyBcAVBHjfDv5D+vIKZ/vdzjHAAAAAElFTkSuQmCC",
  ke = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAGCAYAAADQQP5pAAAAAXNSR0IArs4c6QAAAMhJREFUKFPFUjFqQkEUfLOmeAoWJodI7qE3sFdrS4sPCykexPA/C7baqr030Hskh1ALQbfJTviBSFiszZQz82bgMTCzhxjjq4iMATRJblR1YmYHyWBmrRhjSXJQSwDWqurN7Jx7vfdPJGcA+iRrfaGqU3jv30jWhVcA2JVl2bsRsiQ5zPhVVVWjG94tyW6W+1O4J/mYH6SUXkIIn798URRt59xRRBqZ9yul1AkhnP54n51zH3kmgMO/FN7tpSLyjjuN5iIi83o039P9n5mWDu/PAAAAAElFTkSuQmCC\n",
  Ie = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref9) {
    var a = _ref9.value,
      c = _ref9.iconShow,
      n = _ref9.fontColor,
      i = _ref9.backgroundColor,
      t = _ref9.borderRadius,
      l = _ref9.paddingTop,
      o = _ref9.paddingBottom,
      r = _ref9.paddingLeft,
      m = _ref9.paddingRight;
    var _d8 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _d8.View,
      h = _d8.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
      onClick: function onClick() {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.search);
      },
      style: {
        paddingTop: l,
        paddingBottom: o,
        paddingLeft: r,
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
          src: we,
          alt: "",
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
  xe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref10) {
    var s = _ref10.item;
    var a;
    var _d9 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d9.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, {
      mode: "scaleToFill",
      src: s.imgUrl,
      style: {
        width: "100%",
        height: "100%"
      },
      onClick: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.navigatorHandler.bind(null, null === (a = s.link) || void 0 === a ? void 0 : a.value)
    });
  }),
  De = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref11) {
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
      m = _ref11.paddingRight,
      g = _ref11.selectImg,
      h = _ref11.imgHeight;
    var _d10 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      b = _d10.SmoothSwiper,
      u = _d10.View,
      p = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(s, g);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(u, Object.assign({
      style: {
        paddingTop: l,
        paddingBottom: o,
        paddingLeft: r,
        paddingRight: m
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(b, {
        imgHeight: h,
        data: p,
        type: a,
        autoplay: c,
        autoplayInterval: n,
        direction: i,
        loop: t,
        render: function render(s) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(xe, {
            item: s
          });
        }
      })
    }));
  }),
  Se = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.JumboTabs,
  Ve = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref12) {
    var _ref12$defaultValue = _ref12.defaultValue,
      s = _ref12$defaultValue === void 0 ? [] : _ref12$defaultValue,
      a = _ref12.type,
      _ref12$selectGoodsGro = _ref12.selectGoodsGroup,
      c = _ref12$selectGoodsGro === void 0 ? [] : _ref12$selectGoodsGro,
      i = _ref12.marginTop,
      l = _ref12.marginBottom,
      o = _ref12.borderRadius;
    var _n3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(s),
      _n4 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n3, 2),
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
    }, [c]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Se, Object.assign({
      style: {
        marginTop: i + "px",
        marginBottom: l + "px"
      }
    }, {
      children: r.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Se.Tab, Object.assign({
          title: s.title,
          description: s.subTitle
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Oe, {
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
  Te = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Be = function Be() {
    var _n5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _n6 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n5, 2),
      e = _n6[0],
      s = _n6[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      pe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee2() {
        var e, _e3;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("service");
              if (!e) {
                _context2.next = 5;
                break;
              }
              s(a(e));
              _context2.next = 9;
              break;
            case 5:
              _context2.next = 7;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryOcsconfigList)();
            case 7:
              _e3 = _context2.sent;
              s(a(_e3));
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
    }, []);
    var a = function a(e) {
      var s = [];
      for (var _a = 0; _a < e.length; _a++) {
        var _c = e[_a].ocsOcserviceReDomain;
        s.push("".concat(_c.ocserviceName, ": ").concat(_c.ocserviceRemark));
      }
      return s;
    };
    return {
      servicePopup: function servicePopup() {
        if (!Te) return;
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)().showActionSheet({
          itemList: e,
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
  Le = {
    label: ""
  },
  Pe = function Pe() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return e ? "￥ " + +e.toFixed(2) : "";
  },
  Me = function Me(_ref13) {
    var a = _ref13.dataPic,
      c = _ref13.goodsName,
      n = _ref13.goodsCamount,
      i = _ref13.pricesetNprice,
      t = _ref13.skuName;
    var _d11 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _d11.View,
      o = _d11.Image,
      r = Pe(i);
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
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
            className: "card-item-info-container-price"
          }, {
            children: r
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
  Re = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
  ze = function ze(s) {
    var c = s.dataState,
      n = ue(s, ["dataState"]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["2", "-1"].includes(c + "") ? null : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fe, Object.assign({
        dataState: c
      }, n))
    });
  },
  Fe = function Fe(s) {
    var a = s.dataState,
      c = s.contractAppraise,
      n = ue(s, ["dataState", "contractAppraise"]);
    var _d12 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d12.View;
    4 !== a && 4 !== a || 1 === c ? 4 !== a && 4 !== a || 1 !== c || (a = 5) : a = 4;
    var _M = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderOperate)(Object.assign({
        dataState: a
      }, n)),
      t = _M.operateArray,
      l = _M.handlerImpl;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "btnGroup"
    }, {
      children: t.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Re, Object.assign({
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
  We = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button;
function Ge(_ref14) {
  var a = _ref14.contractBillcode,
    c = _ref14.dataBmoney,
    n = _ref14.dataBnum,
    i = _ref14.goodsList,
    t = _ref14.dataState,
    l = _ref14.contractId,
    o = _ref14.init,
    r = _ref14.contractAppraise;
  var _d13 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    m = _d13.View,
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
          children: ["订单号: ", a, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(We, Object.assign({
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
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Me, Object.assign({}, s), s.contractGoodsId);
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
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ze, {
      init: o,
      contractId: l,
      contractBillcode: a,
      dataState: t,
      contractAppraise: r
    })]
  }));
}
function Ee(e) {
  var _n7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _n8 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n7, 2),
    s = _n8[0],
    a = _n8[1];
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!(0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)()) return;
    var s = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)().createSelectorQuery();
    setTimeout(function () {
      s.select("#".concat(e)).boundingClientRect(function (e) {
        if (e) {
          var _s2 = e.bottom;
          a(_s2);
        }
      }).exec();
    });
  }), s;
}
var Qe = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  He = {
    contractBillcode: "",
    goodsList: [{
      dataPic: "",
      goodsName: "",
      dataBmoney: 0,
      goodsCamount: 0,
      contractGoodsId: 0,
      dataState: 0
    }],
    dataBmoney: 0,
    dataBnum: 0,
    dataState: 0,
    contractId: "",
    contractAppraise: 0
  };
var Ue = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref15) {
    var _this = this;
    var a = _ref15.item,
      c = _ref15.refreshNum;
    var _d14 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      r = _d14.View,
      m = _d14.ScrollView,
      g = _d14.Loading,
      h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1),
      _n9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n10 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n9, 2),
      b = _n10[0],
      u = _n10[1],
      _n11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([He]),
      _n12 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n11, 2),
      p = _n12[0],
      N = _n12[1],
      O = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0),
      f = Ee("qj-tabs-id");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      A();
    }, [c]);
    var A = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function () {
        O.current = 0, N([]), y();
      }),
      y = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return pe(_this, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee3() {
          var e, _s3;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!h.current) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return");
              case 2:
                u(!0), ++O.current;
                e = a.code;
                _context3.prev = 4;
                _context3.next = 7;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryContractPageC)({
                  page: O.current,
                  rows: 10,
                  isLocalMock: !Qe,
                  childFlag: !0,
                  dataStateStr: e
                });
              case 7:
                _s3 = _context3.sent;
                h.current = (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(_s3.rows) || _s3.rows.length < 10, N(function (e) {
                  return e.concat(_s3.rows || []);
                }), u(!1);
                _context3.next = 14;
                break;
              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](4);
                --O.current, console.log(30, _context3.t0);
              case 14:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[4, 11]]);
        }));
      });
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
      className: "orderListItemWrap"
    }, {
      children: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
          onScroll: y,
          height: f + 15
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, {
            children: [p.map(function (e, s) {
              return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Ge, Object.assign({
                init: A
              }, e, {
                key: s
              }));
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
              children: b ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, {}) : null
            })]
          })
        }));
      }, [p, f])
    }));
  }),
  qe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref16) {
    var _ref16$refreshNum = _ref16.refreshNum,
      s = _ref16$refreshNum === void 0 ? 0 : _ref16$refreshNum,
      _ref16$id = _ref16.id,
      a = _ref16$id === void 0 ? "" : _ref16$id;
    var _d15 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d15.View,
      n = _d15.Tabs;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "order-container"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
        defaultIndex: +a,
        tabs: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.orderStatusList,
        render: function render(a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "orderList"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ue, {
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
    var _d16 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d16.View,
      n = _d16.Text,
      _F = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderDetail)(a || ""),
      i = _F.orderDetail;
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
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Me, Object.assign({}, s), s.contractGoodsId);
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
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ze, {
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
    var _d17 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _d17.View,
      o = _d17.Text,
      r = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(a, t);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
      style: {
        paddingTop: n,
        paddingBottom: i
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
        className: "classifyNav"
      }, {
        children: r.map(function (a, n) {
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
    var _d18 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d18.SmoothView,
      l = _d18.View;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      o();
    }, []);
    var o = function o() {
      return pe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee4() {
        var e, _s4;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              e = {
                collectType: 0,
                collectOpcode: (0,lodash_es__WEBPACK_IMPORTED_MODULE_18__["default"])(n, "rsSkuDomainList[0].skuCode", "")
              };
              _context4.prev = 1;
              _context4.next = 4;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.checkCollectExit)(e);
            case 4:
              _s4 = _context4.sent;
              c(_s4);
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);
              console.log(_context4.t0);
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 8]]);
      }));
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
      onClick: function onClick() {
        (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(a.dataObj) ? pe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee5() {
          var e;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                e = {
                  collectType: 0,
                  collectOpcode: (0,lodash_es__WEBPACK_IMPORTED_MODULE_18__["default"])(n, "rsSkuDomainList[0].skuCode", ""),
                  collectOppic: n.dataPic,
                  collectOpcont: n.goodsName,
                  collectOpnum: n.pricesetNprice,
                  goodsOrigin: 0
                };
                _context5.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.saveCollect)(e);
              case 3:
                o();
              case 4:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        })) : pe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee6() {
          var e;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                e = {
                  collectType: 0,
                  collectCode: a.dataObj || ""
                };
                _context6.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.deleteCollectByCode)(e);
              case 3:
                o();
              case 4:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: we,
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
      r = _ref20.couponOnceNumd,
      m = _ref20.promotionEndtime;
    var _d19 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _d19.View,
      h = _d19.Text,
      _W = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddCoupon)(),
      b = _W.save,
      u = _W.isPick,
      p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return o - r;
      }, [o, r]);
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, p > 0 ? Object.assign({
          className: u ? "coupon-pick-default" : "coupon-pick",
          onClick: function onClick() {
            return b({
              promotionCode: i,
              couponAmount: 1
            });
          }
        }, {
          children: u ? "已领取" : "领取"
        }) : Object.assign({
          className: "coupon-pick-default"
        }, {
          children: "已领完"
        }))]
      }))
    }));
  }),
  Je = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useStore,
  $e = function $e(_ref21) {
    var c = _ref21.coupon;
    var _d20 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d20.View,
      t = _d20.Text,
      l = _d20.Popup,
      r = _d20.ScrollView,
      _n13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n14 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n13, 2),
      m = _n14[0],
      g = _n14[1],
      _Je = Je(),
      h = _Je.couponValue;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
        className: "goodsDetail-coupon",
        onClick: function onClick() {
          return g(!0);
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
            children: h ? "\u5DF2\u9009\u62E9: ".concat(h) : "请选择优惠券"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: ke,
            alt: "",
            className: "icon"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
        popupVisible: m,
        popupHandler: g
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
          className: "goodsDetail-coupon-popup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
            height: "400"
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
  _e = function _e(_ref22) {
    var s = _ref22.onChange,
      _ref22$readOnly = _ref22.readOnly,
      a = _ref22$readOnly === void 0 ? !1 : _ref22$readOnly,
      _ref22$size = _ref22.size,
      c = _ref22$size === void 0 ? 22 : _ref22$size,
      i = _ref22.count;
    var _d21 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _d21.View,
      _n15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
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
      _n16 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n15, 2),
      o = _n16[0],
      r = _n16[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      if (i) {
        var _e4 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_19__["default"])(o);
        for (var _s5 = 0; _s5 < _e4.length; _s5++) _e4[_s5].icon = _s5 > i - 1 ? "star" : "star-fill";
        r(_e4);
      }
    }, []);
    var m = function m(e) {
      if (!a) {
        for (var _s6 = 0; _s6 < o.length; _s6++) o[_s6].icon = _s6 > e ? "star" : "star-fill";
        r((0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_19__["default"])(o)), s(e + 1);
      }
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
      children: o.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ne, {
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
  es = function es(_ref23) {
    var a = _ref23.item;
    var _d22 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d22.View,
      n = _d22.Image;
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
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_e, {
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
  ss = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref24) {
    var a = _ref24.url,
      c = _ref24.title,
      n = _ref24.subTitle,
      i = _ref24.link,
      t = _ref24.style;
    var _d23 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _d23.View,
      o = _d23.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
      className: "noData",
      style: t
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "content"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, {
          className: "img",
          src: a
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
          className: "title"
        }, {
          children: c
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
          className: "subTitle"
        }, {
          children: n
        })), i ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
          className: "link",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.switchTabImpl)(i);
          }
        }, {
          children: ["去看看", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
            value: "xiangyou1"
          })]
        })) : null]
      }))
    }));
  }),
  as = function as(_ref25) {
    var a = _ref25.evaluateArr;
    var _d24 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d24.View,
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
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(es, {
            item: s
          }, a);
        })]
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ss, {
        style: {
          margin: "100px auto"
        },
        url: "https://brushes.oss-cn-shanghai.aliyuncs.com/static/mini/noEvaluate.png",
        title: "还没有评价, 期待您的评价"
      })
    }));
  },
  cs = function cs() {
    var _d25 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _d25.Text,
      c = _d25.View,
      n = _d25.IconMobile,
      i = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl(),
      _Be = Be(),
      t = _Be.servicePopup;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "goodsDetailHandleBar"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "linkGroup",
        onClick: t
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
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
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.switchTabImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.shopping);
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
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
            ++qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.refreshCard.num, i({
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
  ns = function ns(_ref26) {
    var s = _ref26.tabActive,
      a = _ref26.goods;
    var _d26 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d26.View,
      _n17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _n18 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n17, 2),
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
  is = function is(_ref27) {
    var a = _ref27.skuName,
      c = _ref27.skuOption,
      n = _ref27.index;
    var _d27 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d27.View,
      t = _d27.Text,
      _Q = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddShopping)(),
      l = _Q.handleChooseSize,
      o = _Q.spec;
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
  ts = function ts(_ref28) {
    var _ref28$goods = _ref28.goods,
      a = _ref28$goods === void 0 ? {} : _ref28$goods,
      c = _ref28.goodSku;
    var _Q2 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddShopping)(),
      n = _Q2.count,
      i = _Q2.spec,
      t = _Q2.popupVisible,
      l = _Q2.isNeedButton,
      o = _Q2.handleStep,
      r = _Q2.popupHandler,
      m = _Q2.addShoppingImpl,
      _d28 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _d28.View,
      h = _d28.Text,
      b = _d28.Image,
      u = _d28.Popup,
      p = _d28.NumStep;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(u, Object.assign({
      popupVisible: t,
      popupHandler: r
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
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(p, {
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
  ls = function ls(_ref29) {
    var a = _ref29.promotionList;
    var _d29 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d29.View,
      n = _d29.Text;
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
  os = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl,
  rs = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useStore,
  ds = function ds(_ref31) {
    var c = _ref31.goods,
      n = _ref31.goodSku;
    var _d30 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d30.View,
      t = _d30.Text,
      _rs = rs(),
      l = _rs.count,
      o = _rs.spec,
      r = os();
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
        className: "goodsDetail-size",
        onClick: function onClick() {
          return r({
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
            src: ke,
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
  hs = function hs(_ref32) {
    var a = _ref32.skuCode;
    var _d31 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d31.View,
      n = _d31.Text,
      i = _d31.SmoothView,
      _H = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsDetailImpl)(a),
      t = _H.goods,
      l = _H.promotionArr,
      o = _H.checkCollectionObj,
      r = _H.setCheckCollectionObj,
      m = _H.sliderArr,
      g = _H.tabActive,
      h = _H.setTabActive,
      b = _H.goodSku,
      u = _H.evaluateArr,
      p = _H.coupon;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "GoodsDetailWrap",
      style: {
        minHeight: ms ? "" : "667px",
        height: ms ? "" : "auto",
        overflow: ms ? "" : "auto"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "topSlider"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(De, {
          selectImg: m,
          type: 1,
          imgHeight: {
            height: 375,
            width: 375
          }
        })
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "goodsDetail-topInfo"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "name"
          }, {
            children: null == t ? void 0 : t.goodsName
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "price"
          }, {
            children: Pe(null == t ? void 0 : t.pricesetNprice)
          }))]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "rPart"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xe, {
            goods: t,
            checkCollectionObj: o,
            setCheckCollectionObj: r
          })
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ds, {
        goods: t,
        goodSku: b
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ls, {
        promotionList: l
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)($e, {
        coupon: p
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
        className: "goodsDetailTab"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "tabs"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
            className: "tabsItem " + (1 === g ? "active" : ""),
            onClick: function onClick() {
              return h(1);
            }
          }, {
            children: ["商品详情", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
              className: "line"
            })]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(n, Object.assign({
            className: "tabsItem " + (2 === g ? "active" : ""),
            onClick: function onClick() {
              return h(2);
            }
          }, {
            children: ["评价", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
              className: "line"
            })]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "group"
        }, {
          children: 1 === g ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ns, {
            tabActive: g,
            goods: t
          }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(as, {
            evaluateArr: u
          })
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cs, {})]
    }));
  },
  bs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref33) {
    var s = _ref33.skuCode;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(gs, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(hs, {
        skuCode: s
      })
    });
  });
function us(e) {
  var s = "https://b2clch5cbaf0d729c1b4c7285b05271a454a4ff.saas.qjclouds.com/";
  return RegExp(/https?/).test(e) ? e : s + e;
}
var ps = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref34) {
    var c = _ref34.navList,
      n = _ref34.activeKey;
    var _d32 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d32.View,
      t = _d32.Text,
      l = _d32.Image;
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
                children: ((null == a ? void 0 : a.childList) || []).map(function (_ref35) {
                  var a = _ref35.classtreeCode,
                    c = _ref35.goodsClassCode,
                    n = _ref35.goodsClassLogo,
                    t = _ref35.goodsClassName;
                  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                    onClick: function onClick() {
                      return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.goodList, "?classtreeCode=").concat(a));
                    },
                    className: "classifyFloorGoodsItem"
                  }, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
                      src: us(n),
                      className: "logo"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
                      className: "title"
                    }, {
                      children: t
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
  Os = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _d33 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _d33.View,
      c = _d33.Text,
      _U = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsClassify)(),
      n = _U.activeKey,
      i = _U.setActiveKey,
      t = _U.navList,
      l = _U.flag;
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.search);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ne, {
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ps, {
            navList: t,
            activeKey: n
          })
        }))]
      }))]
    }));
  }),
  js = [{
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
    var _d34 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d34.View,
      _n19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _n20 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n19, 2),
      i = _n20[0],
      t = _n20[1],
      _n21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(js),
      _n22 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n21, 2),
      l = _n22[0],
      o = _n22[1];
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
                return e[s].order = "asc" === c ? "desc" : "asc", (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_19__["default"])(e);
              }), a({
                sortField: e,
                order: c
              });
            }(l, d, n);
          }
        }, {
          children: [r, n && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ne, {
            style: {
              color: i === d ? "#f00" : "#444",
              fontSize: 20
            },
            value: "desc" === n ? "jiangxu" : "shengxu"
          })]
        }), d);
      })
    }));
  };
var As = function As(_ref38) {
    var s = _ref38.propId,
      a = _ref38.bottomHeight,
      c = _ref38.scrollFn,
      n = _ref38.children;
    var i = Ee(s),
      t = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
          if (!(0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)()) return 0;
          var s = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)(),
            a = s.getStorageSync("safeArea"),
            c = s.getStorageSync("tabBarHeight") || 0;
          return a + (s.getCurrentPages().at(-1).$taroPath.indexOf("pages/") >= 0 ? c : 0) + (e ? +e : 0);
        }, []);
      }(a);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
      onScroll: function onScroll() {
        return c();
      },
      height: i + t
    }, {
      children: n
    }));
  },
  ys = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref39) {
    var _ref39$classtreeCode = _ref39.classtreeCode,
      a = _ref39$classtreeCode === void 0 ? "" : _ref39$classtreeCode,
      _ref39$searchParam = _ref39.searchParam,
      c = _ref39$searchParam === void 0 ? "" : _ref39$searchParam;
    var _d35 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d35.View,
      t = _d35.Text,
      o = _d35.Loading,
      r = _d35.ScrollView,
      m = _d35.SmoothView,
      g = _d35.Image,
      _n23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _n24 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n23, 2),
      h = _n24[0],
      b = _n24[1],
      _q = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsList)(a, c, h),
      p = _q.loading,
      N = _q.getData,
      O = _q.list,
      j = Ee("searchId");
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.search);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ne, {
            value: "fenxiang"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
            children: "搜索商品"
          })]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fs, {
          setParams: b
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "listWrap"
      }, {
        children: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(As, Object.assign({
            propId: "searchId",
            scrollFn: N.bind(null, h)
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              className: "list"
            }, {
              children: O.map(function (a) {
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                  onClick: function onClick() {
                    return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.goodDetail, "?skuCode=").concat(a.skuCode));
                  },
                  className: "listItem"
                }, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, {
                    src: a.dataPic,
                    className: "img"
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
                    className: "name"
                  }, {
                    children: a.goodsName
                  })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
                    className: "price"
                  }, {
                    children: Pe(a.pricesetNprice)
                  }))]
                }), a.skuCode);
              })
            })), p ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, {}) : null]
          }));
        }, [j, O])
      }))]
    }));
  }),
  Cs = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  vs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref40) {
    var a = _ref40.placeholder,
      c = _ref40.placeholderText,
      i = _ref40.history;
    var _d36 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _d36.View,
      l = _d36.Text,
      o = _d36.Input,
      _n25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("history") || [];
      }),
      _n26 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n25, 2),
      r = _n26[0],
      m = _n26[1];
    console.log(23, (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("history"));
    var g = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function (e) {
        return pe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee7() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                Cs && (m(function (s) {
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
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.goodList, "?searchParam=").concat(e));
      });
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      className: "searchPage"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "search-title"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: we,
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
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ne, {
            onClick: function onClick() {
              return pe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee8() {
                return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)();
                    case 2:
                      _context8.sent.removeStorageSync("history");
                      m([]);
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
          children: r.map(function (s, a) {
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
  ws = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _d37 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _d37.View,
      c = _d37.Text;
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
            src: we,
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
    var _d38 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _d38.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "goodsDetail-promotion-wrap"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, {
        className: "goodsDetail-promotion"
      })
    }));
  }),
  Is = function Is(_ref41) {
    var _ref41$starColor = _ref41.starColor,
      a = _ref41$starColor === void 0 ? "#FF0934" : _ref41$starColor,
      _ref41$starSize = _ref41.starSize,
      c = _ref41$starSize === void 0 ? "12px" : _ref41$starSize,
      n = _ref41.itemData;
    var _d39 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d39.View,
      t = _d39.Text,
      l = _d39.Image,
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
  Ds = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _n27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1"),
      _n28 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n27, 2),
      c = _n28[0],
      t = _n28[1],
      _d40 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _d40.View,
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
      r = function r(e) {
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
            onClick: r.bind(null, e.index)
          }, {
            children: [e.label, " ", e.num]
          }), e.index);
        })
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
        className: "evaluateListContent"
      }, {
        children: xs.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Is, {
            itemData: s
          }, a);
        })
      }))]
    });
  }),
  Ss = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref42) {
    var a = _ref42.code;
    var _K = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useEvaluateDetail)(a),
      c = _K.orderInfo,
      n = _K.changeStar,
      t = _K.Submit,
      l = _K.changeContent,
      o = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
      _d41 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      m = _d41.View,
      h = _d41.Image,
      b = _d41.TextArea,
      u = _d41.Textarea,
      p = b || u,
      N = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("宝贝满足你吗？分享一下它吧");
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
      className: "evaluateDetail"
    }, {
      children: [c.map(function (a, c) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
            className: "topInfo"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
              className: "lPart"
            }, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, {
                src: a.dataPic,
                className: "img"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
                className: "goodsInfo"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
                  className: "goodsName"
                }, {
                  children: a.goodsName
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
                  className: "goodsSize"
                }, {
                  children: a.skuName
                }))]
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
              className: "rPart"
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
                className: "price"
              }, {
                children: ["￥ ", a.pricesetNprice]
              }))
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(m, Object.assign({
            className: "rate"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
              className: "title"
            }, {
              children: "商品评价"
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_e, {
              onChange: n.bind(null, c)
            })]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
            className: "evaluate"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(p, {
              className: "content",
              placeholder: N.current,
              rows: 5,
              maxLength: 30,
              onInput: l.bind(null, c)
            })
          }))]
        }, c);
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
        className: "btn",
        onClick: t
      }, {
        children: "提交"
      }))]
    }));
  }),
  Vs = function Vs(_ref43) {
    var s = _ref43.txt,
      a = _ref43.onChange,
      c = _ref43.checked;
    var _d42 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      n = _d42.View,
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
  Ts = function Ts(_ref44) {
    var a = _ref44.itemData,
      c = _ref44.delAddress,
      n = _ref44.setDefault,
      _ref44$fontSize = _ref44.fontSize,
      i = _ref44$fontSize === void 0 ? "12px" : _ref44$fontSize,
      _ref44$iconSize = _ref44.iconSize,
      t = _ref44$iconSize === void 0 ? "12px" : _ref44$iconSize;
    var _d43 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _d43.View,
      o = _d43.Text,
      r = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
      m = "weapp";
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
      className: "addressItem"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "upInfo",
        onClick: function onClick() {
          Le.label = a.addressId, (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorBackImpl)(1);
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
        children: [r ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", Object.assign({
          className: "checkboxMini"
        }, {
          children: "h5" === m ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Vs, {
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
  Bs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _d44 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _d44.View,
      c = _d44.Skeleton,
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
  Ls = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref45) {
    var a = _ref45.refreshNum;
    var _d45 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d45.View,
      _Z = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddressList)(a),
      n = _Z.list,
      i = _Z.delAddress,
      t = _Z.setDefault,
      l = _Z.skullShow;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "addressListWrap"
    }, {
      children: [l ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Bs, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "addressList"
      }, {
        children: n.length ? n.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ts, {
            itemData: s,
            setDefault: t.bind(null, s, a),
            delAddress: i.bind(null, s)
          }, null == s ? void 0 : s.addressId);
        }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ss, {
          url: "https://brushes.oss-cn-shanghai.aliyuncs.com/static/mini/noAddress.png",
          title: "您还没有添加过地址"
        })
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "addBtnWrap"
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "addBtn",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.addressEditor));
          }
        }, {
          children: "+ 新增地址"
        }))
      }))]
    }));
  }),
  Ps = [{
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
    var _d46 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _d46.View,
      c = _d46.Skeleton,
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
var Rs = china_division_dist_provinces_json__WEBPACK_IMPORTED_MODULE_7__.map(function (e) {
    return {
      label: e.name,
      value: e.code + "0000",
      children: e.children
    };
  }),
  zs = function zs(_ref46) {
    var a = _ref46.form,
      c = _ref46.handleArea;
    var _d47 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d47.View,
      t = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.CascadePicker,
      l = a.getFieldValue("area"),
      _n29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n30 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n29, 2),
      o = _n30[0],
      r = _n30[1],
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
        for (var _c2 = 0; _c2 < Rs.length; _c2++) if (Rs[_c2].value === e[0]) {
          s.provinceName = Rs[_c2].label, a.pIndex = _c2;
          break;
        }
        for (var _c3 = 0; _c3 < Rs[a.pIndex].children.length; _c3++) if (Rs[a.pIndex].children[_c3].value === e[1]) {
          s.cityName = Rs[a.pIndex].children[_c3].label, a.cIndex = _c3;
          break;
        }
        for (var _c4 = 0; _c4 < Rs[a.pIndex].children[a.cIndex].children.length; _c4++) if (Rs[a.pIndex].children[a.cIndex].children[_c4].value === e[2]) {
          s.areaName = Rs[a.pIndex].children[a.cIndex].children[_c4].label;
          break;
        }
        return console.log(52, s), s;
      };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "txt",
        onClick: function onClick() {
          return r(!0);
        }
      }, {
        children: (null == l ? void 0 : l.provinceName) ? "".concat(l.provinceName, "\u2014").concat(l.cityName, "-").concat(l.areaName) : "请选择所在地区"
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
        onConfirm: function onConfirm(e) {
          c("h5", m(e));
        },
        options: Rs,
        visible: o,
        onClose: function onClose() {
          return r(!1);
        }
      })]
    });
  },
  Fs = function Fs(_ref47) {
    var s = _ref47.checked,
      a = _ref47.onChange;
    var _d48 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d48.View,
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
  Ws = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Gs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref48) {
    var s = _ref48.addressId;
    var _d49 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d49.View,
      n = _d49.Switch,
      i = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Form,
      t = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
      l = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Input,
      o = "weapp",
      _X = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useEditAddress)(s, i, Ws),
      r = _X.skullShow,
      m = _X.form,
      h = _X.area,
      b = _X.defaultAddress,
      u = _X.handleArea,
      p = _X.handleDefaultAddress,
      N = _X.handleFinish;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "addressDetail",
      style: {
        height: Ws ? "100%" : "667px"
      }
    }, {
      children: r ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ms, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
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
        children: Ps.map(function (s, t) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i.Item, Object.assign({
            label: s.label,
            name: s.name,
            rules: s.rules,
            trigger: "cascader" === s.type ? "onConfirm" : "onChange",
            arrow: !1
          }, {
            children: "input" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({}, s.props)) : "switch" === s.type ? "h5" === o ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fs, {
              onChange: p.bind(null, "h5"),
              checked: "1" === b
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
              color: "#000",
              onChange: p.bind(null, "weapp"),
              checked: "1" === b
            }) : "cascader" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: Ws ? "h5" === o ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(zs, {
                form: m,
                handleArea: u
              }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("picker", Object.assign({
                mode: "region",
                onChange: u.bind(null, "weapp"),
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
  Es = function Es(_ref49) {
    var s = _ref49.address;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(s) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Hs, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Qs, {
        address: s
      })
    });
  },
  Qs = function Qs(_ref50) {
    var a = _ref50.address;
    var _d50 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d50.View,
      n = _d50.SmoothView,
      i = _d50.IconMobile,
      t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
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
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
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
            children: t.addressMember
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "left-padding"
          }, {
            children: t.addressPhone
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
            className: "left-padding left-title-default"
          }, {
            children: t.addressDefault ? "默认" : ""
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, Object.assign({
          className: "left-detail"
        }, {
          children: t.address
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, {
        value: "xiangyou1",
        style: {
          color: "#444",
          lineHeight: 3,
          textAlign: "right"
        }
      })]
    }));
  },
  Hs = function Hs() {
    var _d51 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d51.View,
      n = _d51.Text;
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
  Us = function Us(_ref51) {
    var c = _ref51.payState,
      n = _ref51.amount;
    var _d52 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d52.View,
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
  qs = function qs(_ref52) {
    var s = _ref52.goodsList;
    var _d53 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _d53.View;
    return console.dir(s), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
      className: "place-order-goods"
    }, {
      children: s.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Me, Object.assign({}, s), a);
      })
    }));
  },
  Ks = function Ks(_ref53) {
    var a = _ref53.amount,
      c = _ref53.savePayPrice;
    var _d54 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      n = _d54.View,
      i = _d54.Text;
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
  Zs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref54) {
    var a = _ref54.couponStart,
      c = _ref54.pbName,
      n = _ref54.discName,
      i = _ref54.promotionCode,
      t = _ref54.promotionName,
      l = _ref54.couponEnd,
      o = _ref54.disable;
    var _d55 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      r = _d55.View,
      m = _d55.Text,
      g = _d55.Radio;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
      className: "couponItem"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
        className: "coupon-content"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
          className: "price"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
            className: "symbol"
          }, {
            children: c
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
            className: "num"
          }, {
            children: n
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, o ? Object.assign({
          className: "coupon-pick-default"
        }, {
          children: "不能用"
        }) : Object.assign({
          className: "choose"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, {
            disabled: o,
            value: i
          })
        }))]
      }))
    }));
  }),
  Xs = function Xs(_ref55) {
    var c = _ref55.coupon,
      i = _ref55.confirm,
      t = _ref55.amount;
    var _d56 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      r = _d56.View,
      m = _d56.Text,
      g = _d56.Popup,
      h = _d56.SmoothRadio,
      b = _d56.ScrollView,
      _n31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n32 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n31, 2),
      u = _n32[0],
      p = _n32[1],
      _n33 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _n34 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n33, 2),
      N = _n34[0],
      O = _n34[1],
      j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return (c.find(function (e) {
          return e.promotionCode === N;
        }) || {}).promotionName;
      }, [N]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
        className: "coupon-select",
        onClick: function onClick() {
          return p(!0);
        }
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
          className: "label"
        }, {
          children: "优惠券"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(r, Object.assign({
          className: "info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
            className: "label"
          }, {
            children: j ? "\u5DF2\u9009\u62E9: ".concat(j) : "请选择优惠券"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: ke,
            alt: "",
            className: "icon"
          })]
        }))]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
        popupVisible: u,
        popupHandler: p
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
          className: "goodsDetail-coupon-popup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(b, Object.assign({
            height: 400
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(h, Object.assign({
              onChange: function onChange(e) {
                var s = e.detail.value,
                  a = c.find(function (e) {
                    return e.promotionCode === s;
                  }) || {};
                O(s), p(!1), i(a);
              }
            }, {
              children: c.map(function (e, s) {
                return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Zs, Object.assign({
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
  Ys = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref56) {
    var a = _ref56.refreshNum,
      c = _ref56.goodsNum,
      n = _ref56.skuId,
      i = _ref56.shoppingGoodsId;
    var _d57 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _d57.View,
      l = Le.label,
      _Y = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.usePlaceOrder)({
        skuId: n,
        goodsNum: c,
        shoppingGoodsId: i
      }, a, l),
      o = _Y.savePayPrice,
      r = _Y.address,
      m = _Y.list,
      g = _Y.payState,
      h = _Y.coupon,
      b = _Y.confirm,
      p = _Y.amount;
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.addressList);
          }
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Es, {
            address: r
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(qs, {
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xs, {
          coupon: h,
          confirm: b,
          amount: p
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Us, {
          amount: p,
          savePayPrice: o,
          payState: g.current
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ks, {
        savePayPrice: o,
        amount: p
      })]
    }));
  }),
  Js = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderResultResult.useOrderResult,
  $s = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  _s = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref57) {
    var a = _ref57.code;
    var _d58 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d58.View,
      n = _d58.Text,
      _Js = Js(a || ((0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("contractBillcode") || {}).contractBillcode),
      i = _Js.result,
      t = i.sysRecode,
      l = i.dataObj;
    return console.log(15, t, l), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "placeOrderResult",
      style: {
        height: $s ? "100vh" : "667px"
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
  ea = function ea() {
    var _d59 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _d59.View,
      a = _d59.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "noData"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, {
        src: "https://b2cweapp7c0069b43749439d97b7cae6a02bd459.saas.qjclouds.com/paas/shop-master/c-static/images/wxminiImg/no_coupon.png",
        className: "img"
      })
    }));
  },
  sa = function sa(_ref58) {
    var c = _ref58.coe;
    var _$ = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOverdue)(),
      n = _$.overdueList,
      _d60 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d60.View,
      t = _d60.Text,
      l = _d60.ScrollView;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 3 === c ? n.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
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
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ea, {}) : null
    });
  };
/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
  var _d61 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    s = _d61.View,
    c = _d61.Skeleton,
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
var aa = function aa(_ref59) {
    var c = _ref59.coe;
    var _ref60 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useUnused)(),
      n = _ref60.unusedList,
      _d62 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d62.View,
      t = _d62.Text,
      l = _d62.ScrollView,
      o = Ee("couponTab");
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 1 === c ? n.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
        height: o + 40
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
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ea, {}) : null
    });
  },
  ca = function ca(_ref61) {
    var c = _ref61.coe;
    var _d63 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      n = _d63.View,
      i = _d63.Text,
      t = _d63.ScrollView,
      _ee = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useUsed)(),
      l = _ee.usedList;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: 2 === c ? l.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, Object.assign({
        style: {
          height: "80vh"
        }
      }, {
        children: l.map(function (a, c) {
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
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ea, {}) : null
    });
  },
  na = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _d64 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _d64.View,
      c = _d64.Text,
      _se = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCouponList)(),
      n = _se.coe,
      i = _se.setCoe,
      l = _se.config;
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
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(aa, {
          coe: n
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ca, {
          coe: n
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(sa, {
          coe: n
        })]
      }))]
    }));
  });
function ia(_ref62) {
  var a = _ref62.list;
  var _d65 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    c = _d65.View,
    n = _d65.Text,
    i = _d65.Image,
    t = _d65.Checkbox,
    l = _d65.NumStep,
    o = _d65.SmoothCheckbox,
    r = _d65.WrapLoading,
    _ae = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useStore)(),
    m = _ae.loading,
    _ce = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCartItem)(),
    g = _ce.select,
    h = _ce.onChange,
    b = _ce.handleStep;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
    loading: m
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
      onChange: h
    }, {
      children: a.map(function (a, o) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "cartItem"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "checkBoxWrap"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
              checked: g.includes(a.shoppingGoodsId + ""),
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
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
                count: a.goodsCamount,
                handleStep: b.bind(null, a.shoppingGoodsId, a.goodsCamount)
              })]
            }))]
          }))]
        }), o);
      })
    }))
  }));
}
var ta = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  la = function la(_ref63) {
    var c = _ref63.refreshNum;
    var _d66 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _d66.View,
      t = _d66.Text,
      l = _d66.Checkbox,
      o = _d66.SmoothCheckbox,
      _n35 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
      _n36 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n35, 2),
      r = _n36[0],
      m = _n36[1],
      _ie = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCartList)(c),
      g = _ie.cartList,
      h = _ie.initImpl,
      b = _ie.amount,
      u = _ie.selectAll,
      p = _ie.allCart,
      N = _ie.toOrderImpl,
      O = _ie.select,
      j = _ie.deleteCart,
      f = _ie.disMoney;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "cart",
      style: {
        height: ta ? "100%" : "667px"
      }
    }, {
      children: g.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
          className: "edit",
          id: "editId"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "btn",
            onClick: function onClick() {
              return m(!r);
            }
          }, {
            children: r ? "编辑" : "完成"
          }))
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(As, Object.assign({
          propId: "editId",
          bottomHeight: "50",
          scrollFn: h
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ia, {
            list: g
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "dashboard"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "choose"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
              onChange: u
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
                checked: p.current.length === O.length,
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
          })), r ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
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
                  children: ["￥ ", f || 0]
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                className: "all"
              }, {
                children: ["合计: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
                  className: "data"
                }, {
                  children: ["￥ ", b.amount.toFixed(2)]
                }))]
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
              onClick: N,
              className: "btn"
            }, {
              children: ["结算(", b.num, ")"]
            }))]
          })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "del"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              onClick: j,
              className: "btn"
            }, {
              children: "删除"
            }))
          }))]
        }))]
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ss, {
        url: "https://brushes.oss-cn-shanghai.aliyuncs.com/static/mini/noCarts.png",
        title: "购物车竟然是空的",
        subTitle: "快点挑选点东西犒赏自己吧",
        link: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.index
      })
    }));
  },
  oa = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref64) {
    var s = _ref64.refreshNum;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.StoreProvider, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(la, {
        refreshNum: s
      })
    });
  }),
  ra = function ra() {
    var _d67 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _d67.View,
      c = _d67.Text,
      n = _d67.IconMobile,
      t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([{
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
      children: t.current.map(function (i, t) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
          className: "menuListItem",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap[i.link]);
          }
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(a, Object.assign({
            className: "lPart"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
              value: i.icon
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
              className: "label"
            }, {
              children: i.label
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
            value: "xiangyou1"
          })]
        }), t);
      })
    }));
  },
  da = function da() {
    var _d68 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _d68.View,
      c = _d68.Text,
      l = _d68.Badge,
      o = _d68.IconMobile,
      _n37 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _n38 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n37, 2),
      r = _n38[0],
      m = _n38[1],
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
      pe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee9() {
        var _e5;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.getContractNumbers)();
            case 3:
              _e5 = _context9.sent;
              m(_e5.dataObj);
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.order);
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
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.order, "?id=").concat(i + 1));
            },
            className: "contentItem"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({}, r[n.code] > 0 ? {
              content: r[n.code]
            } : {}, {
              color: "#000",
              style: {
                color: "#fff",
                fontSize: 12
              }
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, {
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
  ma = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref65) {
    var a = _ref65.avatarStyle,
      _ref65$userAvatar = _ref65.userAvatar,
      c = _ref65$userAvatar === void 0 ? "" : _ref65$userAvatar,
      _ref65$userNickname = _ref65.userNickname,
      n = _ref65$userNickname === void 0 ? "用户名" : _ref65$userNickname,
      i = _ref65.banner;
    var _d69 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _d69.View,
      l = _d69.Text,
      o = _d69.IconMobile,
      r = _d69.Image,
      m = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
      _Be2 = Be(),
      g = _Be2.servicePopup;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      className: "mine",
      style: {
        height: m ? "100%" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "topBoard"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, {
          value: "shezhi",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.setting);
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, {
          value: "kehufuwukefu",
          onClick: g
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "userSetting",
        onClick: function onClick() {
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.setting);
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
          src: c,
          alt: "",
          className: "avatar",
          style: {
            borderRadius: a ? "50%" : "2px"
          }
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(da, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ra, {})]
    }));
  }),
  ga = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  ha = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref66) {
    var a = _ref66.code;
    var _d70 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _d70.View,
      n = _d70.Text,
      i = _d70.Radio,
      t = _d70.IconMobile,
      l = _d70.WrapLoading,
      o = _d70.SmoothRadio,
      _te = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderResult)(a),
      r = _te.paymentImpl,
      m = _te.channelList,
      g = _te.contract,
      h = _te.handleRadio,
      b = _te.loading;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "paymentModeWrap",
      style: {
        height: ga ? "inherit" : "667px"
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
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
              value: "roundcheck"
            }), "订单提交成功"]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
            className: "info"
          }, {
            children: ["订单号：", g.current.contractBillcode, " | 总金额：", g.current.dataBmoney, "元"]
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "paymentGroup"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, Object.assign({
            onChange: h
          }, {
            children: m.map(function (a) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
                className: "paymentItem"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
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
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
        loading: b
      }, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
          className: "btnGroup",
          onClick: r
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
            className: "payment"
          }, {
            children: "立即支付"
          }))
        }))
      }))]
    }));
  });


/***/ }),

/***/ "./src/account/components/topLogo/logo.png":
/*!*************************************************!*\
  !*** ./src/account/components/topLogo/logo.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "account/components/topLogo/logo.png";

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?a112":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=common.js.map