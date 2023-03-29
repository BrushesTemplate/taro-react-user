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
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @brushes/simulate-component */ "../lowCodeCore/packages/simulate-component/dist/index.js");
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
/* harmony import */ var qj_mobile_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qj-mobile-store */ "../qj-api-store/packages/qj-mobile-store/dist/index.js");











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
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @brushes/simulate-component */ "../lowCodeCore/packages/simulate-component/dist/index.js");
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

/***/ "../lowCodeCore/packages/simulate-component/dist/index.js":
/*!****************************************************************!*\
  !*** ../lowCodeCore/packages/simulate-component/dist/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconMobile": function() { return /* binding */ q; },
/* harmony export */   "Loading": function() { return /* binding */ z; },
/* harmony export */   "NoticeBar": function() { return /* binding */ E; },
/* harmony export */   "NumStep": function() { return /* binding */ P; },
/* harmony export */   "Popup": function() { return /* binding */ V; },
/* harmony export */   "ScrollView": function() { return /* binding */ k; },
/* harmony export */   "SmoothCheckbox": function() { return /* binding */ W; },
/* harmony export */   "SmoothRadio": function() { return /* binding */ A; },
/* harmony export */   "SmoothSwiper": function() { return /* binding */ T; },
/* harmony export */   "Tabs": function() { return /* binding */ _; },
/* harmony export */   "View": function() { return /* binding */ j; },
/* harmony export */   "WrapLoading": function() { return /* binding */ R; },
/* harmony export */   "useComponent": function() { return /* binding */ S; }
/* harmony export */ });
/* unused harmony exports Text, fetchResource, useImmutableCallback, useLazyRef */
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js */ "./node_modules/@babel/runtime/helpers/esm/interopRequireWildcard.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ "../lowCodeCore/node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../lowCodeCore/node_modules/lodash-es/noop.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brushes/utils */ "../lowCodeCore/node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-mobile */ "../lowCodeCore/node_modules/antd-mobile/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../lowCodeCore/node_modules/classnames/index.js");
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
  y = function y(e) {
    var t = e.children,
      i = b(e, ["children"]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", Object.assign({}, i, {
      children: [" ", t]
    }));
  };
function v(e) {
  var n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  return n.current = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(e) ? e : lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"], (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return n.current.apply(n, arguments);
  }, [n]);
}
function O(e) {
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
        f(_this, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
          var e, _yield$Promise$all, _yield$Promise$all2, _n, _t, _n2;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                e = {};
                if (!(0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)()) {
                  _context.next = 11;
                  break;
                }
                _context.next = 4;
                return Promise.all([Promise.resolve().then(function () {
                  return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_8__["default"])(__webpack_require__(/*! @tarojs/components */ "../lowCodeCore/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js"));
                }), Promise.resolve().then(function () {
                  return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_8__["default"])(__webpack_require__(/*! antd-mobile */ "../lowCodeCore/node_modules/antd-mobile/es/index.js"));
                })]);
              case 4:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_yield$Promise$all, 2);
                _n = _yield$Promise$all2[0];
                _t = _yield$Promise$all2[1];
                e = Object.assign(Object.assign({}, _t), _n);
                _context.next = 15;
                break;
              case 11:
                _context.next = 13;
                return Promise.resolve().then(function () {
                  return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_8__["default"])(__webpack_require__(/*! antd-mobile */ "../lowCodeCore/node_modules/antd-mobile/es/index.js"));
                });
              case 13:
                _n2 = _context.sent;
                e = Object.assign(Object.assign({}, _n2), {
                  View: j,
                  Text: y
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
    _o2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o, 1),
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
    g = n.imgHeight,
    m = b(n, ["indicatorDots", "direction", "autoplayInterval", "loop", "data", "type", "render", "style", "imgHeight"]);
  var _S = S(),
    j = _S.Swiper,
    y = _S.SwiperItem,
    _o3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _o4 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o3, 2),
    v = _o4[0],
    O = _o4[1],
    w = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
    x = (null == j ? void 0 : j.Item) || y;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      f(_this2, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2() {
        var e, _n3;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee2$(_context2) {
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
                  height: 1 == l ? Math.floor(_n3 * g.height / g.width) : ""
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
              O(e);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
    })();
  }, [i, r, c, t]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(j, Object.assign({}, Object.assign(Object.assign({}, v), m), {
    children: a.map(function (n, t) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(x, {
        children: d(n)
      }, t);
    })
  }));
}
var C = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  k = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref) {
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
      _o6 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o5, 2),
      d = _o6[0],
      u = _o6[1],
      g = c || l,
      m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return C ? {
          scrollY: !0,
          enablePassive: !0,
          scrollWithAnimation: !0,
          upperThreshold: n,
          lowerThreshold: n,
          onScrollToLower: t,
          enhanced: !0,
          showScrollbar: !1,
          style: {
            height: "calc(100vh - ".concat(s, "px)")
          }
        } : {
          onRefresh: t
        };
      }, [s]),
      b = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function (e) {
        if (!C) return;
        if ("WEB" === (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)().getEnv()) {
          var _n4 = e.detail.scrollTop;
          u(_n4);
        }
      });
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
      onScroll: b
    }, m, {
      scrollTop: d
    }, {
      children: r
    }));
  });
function z(_ref2) {
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
var I = function I(_ref3) {
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
  _ = function _(_ref4) {
    var i = _ref4.tabs,
      r = _ref4.render,
      s = _ref4.defaultIndex;
    var _S5 = S(),
      c = _S5.View,
      _o7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(s),
      _o8 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o7, 2),
      a = _o8[0],
      l = _o8[1],
      _o9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
        var e = new Array(s + 1);
        return e[s] = i[s], e;
      }),
      _o10 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o9, 2),
      d = _o10[0],
      u = _o10[1];
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(I, {
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
  q = function q(_ref5) {
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
  V = function V(_ref6) {
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
  P = function P(_ref7) {
    var t = _ref7.count,
      i = _ref7.handleStep;
    var _S8 = S(),
      r = _S8.View,
      o = _S8.Text;
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
  A = function A(n) {
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
  W = function W(n) {
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
function R(_ref8) {
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
var $ = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  E = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref9) {
    var _ref9$fontSize = _ref9.fontSize,
      i = _ref9$fontSize === void 0 ? 14 : _ref9$fontSize,
      r = _ref9.color,
      _ref9$content = _ref9.content,
      c = _ref9$content === void 0 ? [] : _ref9$content,
      _ref9$speed = _ref9.speed,
      l = _ref9$speed === void 0 ? 30 : _ref9$speed,
      _ref9$icon = _ref9.icon,
      d = _ref9$icon === void 0 ? "gonggao" : _ref9$icon,
      _ref9$direction = _ref9.direction,
      u = _ref9$direction === void 0 ? "horizontal" : _ref9$direction,
      p = _ref9.navigator;
    var _S12 = S(),
      g = _S12.View,
      m = _S12.NoticeBar,
      _o11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _o12 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_o11, 2),
      b = _o12[0],
      f = _o12[1],
      j = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return "animElemId".concat(Math.ceil(1e6 * Math.random()).toString(36));
      }, []),
      y = "horizontal" === u ? "scroll-animate" : "normal",
      v = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return c.toString().length;
      }, [c]),
      O = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return "horizontal" === u ? 1e3 : 400;
      }, [u]),
      w = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        switch (u) {
          case "horizontal":
            return 10 * v;
          case "vertical":
            return "100%";
        }
      }, [u, v]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      if (!$) return;
      var e = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)();
      var n = "";
      var t = setTimeout(function () {
        e.createSelectorQuery().select("#".concat(j)).boundingClientRect(function (t) {
          var i = t.width,
            r = t.height,
            o = x(i) || 1,
            s = 500 * o / +l,
            a = function a() {
              var n = e.createAnimation({
                  duration: s * O,
                  timingFunction: "linear"
                }),
                t = e.createAnimation({
                  duration: 0,
                  timingFunction: "linear"
                }),
                a = function a() {
                  setTimeout(function () {
                    t.translateX(i / o).step(), f(t.export());
                  }, s * O + 200), setTimeout(function () {
                    n.translateX(-i).step(), f(n.export());
                  }, 100);
                };
              switch (u) {
                case "horizontal":
                default:
                  a();
                  break;
                case "vertical":
                  setTimeout(function () {
                    t.translateY(r / c.length).step(), f(t.export());
                  }, s * O + 200), setTimeout(function () {
                    n.translateY(-r / c.length).step({
                      delay: 1e4
                    }), f(n.export());
                  }, 100);
              }
            };
          a(), n = setInterval(a, s * O + 300);
        }).exec();
      }, 1e3);
      return function () {
        clearTimeout(t), clearInterval(n);
      };
    }, [c]);
    var x = function x(e) {
      if (!$) return;
      var n = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)().getSystemInfoSync().windowWidth;
      return "horizontal" === u && e / n > 1 ? e / n : 1;
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: $ ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(g, Object.assign({
        id: "noticebar-wrap"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
          className: "icon-pre"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(q, {
            style: {
              fontSize: 20,
              fontWeight: 600
            },
            value: d
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
          animation: b,
          id: j
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
            style: {
              width: w
            },
            className: y
          }, {
            children: c.map(function (n, t) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
                style: {
                  color: r
                },
                onClick: function onClick() {
                  return p ? p(t) : function () {};
                },
                className: "scroll-animate-item"
              }, {
                children: n
              }), t);
            })
          }))
        }))]
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, {
        speed: l,
        style: {
          "--font-size": i + "px",
          "--text-color": r,
          "--border-color": "#fff3e9",
          "--background-color": "#fff9ed"
        },
        content: c[0]
      })
    });
  });


/***/ }),

/***/ "../lowcode_materials_react/packages/s-material-react/dist/index.js":
/*!**************************************************************************!*\
  !*** ../lowcode_materials_react/packages/s-material-react/dist/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressDetail": function() { return /* binding */ Ks; },
/* harmony export */   "AddressList": function() { return /* binding */ Ws; },
/* harmony export */   "Cart": function() { return /* binding */ ba; },
/* harmony export */   "ClassifyNav": function() { return /* binding */ Ye; },
/* harmony export */   "CouponList": function() { return /* binding */ da; },
/* harmony export */   "Cube": function() { return /* binding */ xe; },
/* harmony export */   "EvaluateDetail": function() { return /* binding */ Rs; },
/* harmony export */   "EvaluateList": function() { return /* binding */ Ps; },
/* harmony export */   "Footprint": function() { return /* binding */ fa; },
/* harmony export */   "Goods": function() { return /* binding */ ke; },
/* harmony export */   "GoodsClassify": function() { return /* binding */ Cs; },
/* harmony export */   "GoodsDetail": function() { return /* binding */ fs; },
/* harmony export */   "GoodsDetailPromotion": function() { return /* binding */ Vs; },
/* harmony export */   "GoodsDetailTopInfo": function() { return /* binding */ Ss; },
/* harmony export */   "GoodsGroup": function() { return /* binding */ Me; },
/* harmony export */   "GoodsList": function() { return /* binding */ xs; },
/* harmony export */   "Line": function() { return /* binding */ De; },
/* harmony export */   "Mine": function() { return /* binding */ Na; },
/* harmony export */   "Notice": function() { return /* binding */ we; },
/* harmony export */   "OrderDetail": function() { return /* binding */ Xe; },
/* harmony export */   "OrderList": function() { return /* binding */ Ze; },
/* harmony export */   "PaymentMode": function() { return /* binding */ ja; },
/* harmony export */   "PlaceOrder": function() { return /* binding */ aa; },
/* harmony export */   "PlaceOrderResult": function() { return /* binding */ ia; },
/* harmony export */   "QjMobileIcon": function() { return /* binding */ Ce; },
/* harmony export */   "Search": function() { return /* binding */ Le; },
/* harmony export */   "SearchPage": function() { return /* binding */ Ts; },
/* harmony export */   "Service": function() { return /* binding */ Se; },
/* harmony export */   "Slider": function() { return /* binding */ Re; },
/* harmony export */   "Title": function() { return /* binding */ Ie; },
/* harmony export */   "Video": function() { return /* binding */ Te; }
/* harmony export */ });
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @brushes/simulate-component */ "../lowCodeCore/packages/simulate-component/dist/index.js");
/* harmony import */ var _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @brushes/simulate-component */ "../lowCodeCore/node_modules/antd-mobile/es/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @brushes/utils */ "../lowcode_materials_react/node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qj-b2c-api */ "../lowcode_materials_react/node_modules/qj-b2c-api/dist/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../lowcode_materials_react/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qj-mobile-store */ "../qj-api-store/packages/qj-mobile-store/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ "../lowcode_materials_react/node_modules/lodash-es/isEqual.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es */ "../lowcode_materials_react/node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash-es */ "../lowcode_materials_react/node_modules/lodash-es/isUndefined.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "../lowcode_materials_react/node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var china_division_dist_provinces_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! china-division/dist/provinces.json */ "../lowcode_materials_react/node_modules/china-division/dist/provinces.json");
/* harmony import */ var china_division_dist_cities_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! china-division/dist/cities.json */ "../lowcode_materials_react/node_modules/china-division/dist/cities.json");
/* harmony import */ var china_division_dist_areas_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! china-division/dist/areas.json */ "../lowcode_materials_react/node_modules/china-division/dist/areas.json");
















function Ae(e, s) {
  var a = {};
  for (var c in e) Object.prototype.hasOwnProperty.call(e, c) && s.indexOf(c) < 0 && (a[c] = e[c]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var n = 0;
    for (c = Object.getOwnPropertySymbols(e); n < c.length; n++) s.indexOf(c[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, c[n]) && (a[c[n]] = e[c[n]]);
  }
  return a;
}
function ve(e, s, a, c) {
  return new (a || (a = Promise))(function (n, i) {
    function t(e) {
      try {
        r(c.next(e));
      } catch (e) {
        i(e);
      }
    }
    function l(e) {
      try {
        r(c.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function r(e) {
      var s;
      e.done ? n(e.value) : (s = e.value, s instanceof a ? s : new a(function (e) {
        e(s);
      })).then(t, l);
    }
    r((c = c.apply(e, s || [])).next());
  });
}
var Ce = function Ce(_ref) {
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
    var _o = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _o.Text;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
      onClick: c,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(a, i ? "".concat(a, "-").concat(i) : "", s),
      style: n
    });
  },
  ke = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref2) {
    var _ref2$defaultValue = _ref2.defaultValue,
      a = _ref2$defaultValue === void 0 ? [] : _ref2$defaultValue,
      _ref2$classCode = _ref2.classCode,
      c = _ref2$classCode === void 0 ? "" : _ref2$classCode,
      l = _ref2.margin,
      r = _ref2.circular,
      d = _ref2.cell,
      m = _ref2.showSales,
      _ref2$gap = _ref2.gap,
      g = _ref2$gap === void 0 ? 10 : _ref2$gap,
      _ref2$goods = _ref2.goods,
      h = _ref2$goods === void 0 ? [] : _ref2$goods,
      b = _ref2.markedPrice,
      u = _ref2.paddingTop,
      p = _ref2.paddingBottom,
      N = _ref2.paddingLeft,
      O = _ref2.paddingRight;
    var _n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(a),
      _n2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n, 2),
      j = _n2[0],
      f = _n2[1],
      y = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),
      _o2 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      A = _o2.View,
      C = _o2.Text;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(y.current, h) || (y.current = h, (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(h) ? f(a) : ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee() {
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
              console.log(63, _e2), f(_e2.rows);
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              f(a);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      })));
    }, [h]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, Object.assign({
      style: {
        paddingTop: u,
        paddingBottom: p
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(A, Object.assign({
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])({}, "goods-".concat(c), !0)),
        style: {
          display: "grid",
          gap: g,
          marginBottom: l,
          gridTemplateColumns: "repeat(".concat(d, ", 1fr)"),
          paddingLeft: N,
          paddingRight: O
        }
      }, {
        children: j.map(function (a, c) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(A, Object.assign({
            style: {
              overflow: "hidden",
              borderRadius: 2 === r ? 0 : "8px"
            },
            onClick: function onClick() {
              return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.goodDetail, "?skuCode=").concat(a.skuCode));
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
              })), m && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(A, Object.assign({
                className: "sales"
              }, {
                children: ["已售:", a.sales, "件"]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(A, Object.assign({
                className: "price"
              }, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(C, Object.assign({
                  className: "subPrice"
                }, {
                  children: "¥"
                })), a.pricesetNprice, 1 === b && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(C, Object.assign({
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
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ce, {
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
  we = function we(_ref3) {
    var s = _ref3.direction,
      a = _ref3.speed,
      c = _ref3.num,
      n = _ref3.color;
    var _E = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useNotice)(c),
      i = _E.content,
      t = _E.navigator;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.NoticeBar, {
      navigator: t,
      color: n,
      speed: a,
      direction: s,
      content: i
    });
  },
  Ie = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref4) {
    var s = _ref4.value,
      a = _ref4.textIndent,
      c = _ref4.fontSize,
      n = _ref4.textAlign,
      i = _ref4.color,
      t = _ref4.backgroundColor,
      l = _ref4.fontWeight,
      r = _ref4.textDecoration,
      d = _ref4.fontStyle,
      m = _ref4.paddingTop,
      g = _ref4.paddingLeft,
      h = _ref4.paddingRight,
      b = _ref4.paddingBottom;
    var _o3 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      u = _o3.View;
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
          textDecoration: r,
          fontStyle: d,
          paddingLeft: g,
          paddingRight: h,
          textIndent: a
        }
      }, {
        children: s
      }))
    }));
  }),
  xe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref5) {
    var s = _ref5.defaultValue,
      a = _ref5.type,
      c = _ref5.borderRadius,
      n = _ref5.paddingTop,
      i = _ref5.paddingLeft,
      t = _ref5.paddingRight,
      l = _ref5.paddingBottom,
      r = _ref5.selectImg;
    var _o4 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _o4.View,
      m = _o4.Image,
      g = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(s, r);
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
  De = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref6) {
    var s = _ref6.borderStyle,
      a = _ref6.borderRadius,
      c = _ref6.height,
      n = _ref6.width,
      i = _ref6.backgroundColor,
      t = _ref6.paddingTop,
      l = _ref6.paddingBottom;
    var _o5 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      r = _o5.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
      style: {
        paddingTop: t,
        paddingBottom: l
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
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
  Te = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref7) {
    var s = _ref7.url,
      a = _ref7.poster,
      c = _ref7.autoplay,
      n = _ref7.loop,
      i = _ref7.paddingTop,
      t = _ref7.paddingBottom,
      l = _ref7.paddingLeft,
      r = _ref7.paddingRight;
    var _o6 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _o6.View;
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
          paddingRight: r
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
    var _o7 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      r = _o7.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
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
  Be = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAGCAYAAADQQP5pAAAAAXNSR0IArs4c6QAAAMhJREFUKFPFUjFqQkEUfLOmeAoWJodI7qE3sFdrS4sPCykexPA/C7baqr030Hskh1ALQbfJTviBSFiszZQz82bgMTCzhxjjq4iMATRJblR1YmYHyWBmrRhjSXJQSwDWqurN7Jx7vfdPJGcA+iRrfaGqU3jv30jWhVcA2JVl2bsRsiQ5zPhVVVWjG94tyW6W+1O4J/mYH6SUXkIIn798URRt59xRRBqZ9yul1AkhnP54n51zH3kmgMO/FN7tpSLyjjuN5iIi83o039P9n5mWDu/PAAAAAElFTkSuQmCC\n",
  Le = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref9) {
    var a = _ref9.value,
      c = _ref9.iconShow,
      n = _ref9.fontColor,
      i = _ref9.backgroundColor,
      t = _ref9.borderRadius,
      l = _ref9.paddingTop,
      r = _ref9.paddingBottom,
      d = _ref9.paddingLeft,
      m = _ref9.paddingRight;
    var _o8 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _o8.View,
      h = _o8.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, Object.assign({
      onClick: function onClick() {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.search);
      },
      style: {
        paddingTop: l,
        paddingBottom: r,
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
  Pe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref10) {
    var s = _ref10.item,
      c = _ref10.type;
    var n, i;
    var _o9 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _o9.Image,
      l = _o9.View;
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
  Re = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref11) {
    var _ref11$defaultValue = _ref11.defaultValue,
      s = _ref11$defaultValue === void 0 ? [] : _ref11$defaultValue,
      a = _ref11.type,
      c = _ref11.autoplay,
      n = _ref11.autoplayInterval,
      i = _ref11.direction,
      t = _ref11.loop,
      l = _ref11.paddingTop,
      r = _ref11.paddingBottom,
      o = _ref11.paddingLeft,
      d = _ref11.paddingRight,
      h = _ref11.selectImg,
      b = _ref11.imgHeight;
    var u = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCube)(s, h);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.View, Object.assign({
      style: {
        paddingTop: l,
        paddingBottom: r,
        paddingLeft: o,
        paddingRight: d
      }
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.SmoothSwiper, {
        className: (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)() ? "slider-block" : "pc",
        imgHeight: b,
        data: u,
        type: a,
        autoplay: c,
        autoplayInterval: n,
        direction: i,
        loop: t,
        render: function render(s) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Pe, {
            type: a,
            item: s
          });
        }
      })
    }));
  }),
  ze = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.JumboTabs,
  Me = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref12) {
    var _ref12$defaultValue = _ref12.defaultValue,
      s = _ref12$defaultValue === void 0 ? [] : _ref12$defaultValue,
      a = _ref12.type,
      _ref12$selectGoodsGro = _ref12.selectGoodsGroup,
      c = _ref12$selectGoodsGro === void 0 ? [] : _ref12$selectGoodsGro,
      i = _ref12.marginTop,
      l = _ref12.marginBottom,
      r = _ref12.borderRadius;
    var _n3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(s),
      _n4 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n3, 2),
      o = _n4[0],
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
    }, [c]), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ze, Object.assign({
      style: {
        marginTop: i + "px",
        marginBottom: l + "px"
      }
    }, {
      children: o.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ze.Tab, Object.assign({
          title: s.title,
          description: s.subTitle
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ke, {
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
  Fe = function Fe(_ref13) {
    var a = _ref13.dataPic,
      c = _ref13.goodsName,
      n = _ref13.goodsCamount,
      i = _ref13.pricesetNprice,
      t = _ref13.skuName;
    var _o10 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _o10.View,
      r = _o10.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
      className: "card-item"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
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
  We = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
  Ee = function Ee(s) {
    var c = s.dataState,
      n = Ae(s, ["dataState"]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["2", "-1"].includes(c + "") ? null : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ge, Object.assign({
        dataState: c
      }, n))
    });
  },
  Ge = function Ge(s) {
    var a = s.dataState,
      c = s.contractAppraise,
      n = Ae(s, ["dataState", "contractAppraise"]);
    var _o11 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o11.View;
    4 !== a && 4 !== a || 1 === c ? 4 !== a && 4 !== a || 1 !== c || (a = 5) : a = 4;
    var _U = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderOperate)(Object.assign({
        dataState: a
      }, n)),
      t = _U.operateArray,
      l = _U.handlerImpl;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "btnGroup"
    }, {
      children: t.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(We, Object.assign({
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
  Qe = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button;
function Ue(_ref14) {
  var a = _ref14.contractBillcode,
    c = _ref14.dataBmoney,
    n = _ref14.dataBnum,
    i = _ref14.goodsList,
    t = _ref14.dataState,
    l = _ref14.contractId,
    r = _ref14.init,
    d = _ref14.contractAppraise;
  var _o12 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    m = _o12.View,
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
          children: ["订单号: ", a, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Qe, Object.assign({
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
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fe, Object.assign({}, s), s.contractGoodsId);
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
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ee, {
      init: r,
      contractId: l,
      contractBillcode: a,
      dataState: t,
      contractAppraise: d
    })]
  }));
}
function He(e) {
  var _n5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _n6 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n5, 2),
    s = _n6[0],
    a = _n6[1];
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
var qe = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)();
var Ke = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref15) {
    var _this = this;
    var a = _ref15.item,
      c = _ref15.refreshNum;
    var _o13 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _o13.View,
      m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1),
      _n7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n8 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n7, 2),
      g = _n8[0],
      h = _n8[1],
      _n9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _n10 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n9, 2),
      p = _n10[0],
      N = _n10[1],
      O = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0),
      j = He("#qj-tabs-id");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      f();
    }, [c]);
    var f = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function () {
        O.current = 0, N([]), y();
      }),
      y = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return ve(_this, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee2() {
          var e, _s3;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!m.current) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                h(!0), ++O.current;
                e = a.code;
                _context2.prev = 4;
                _context2.next = 7;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryContractPageC)({
                  page: O.current,
                  rows: 10,
                  isLocalMock: !qe,
                  childFlag: !0,
                  dataStateStr: e
                });
              case 7:
                _s3 = _context2.sent;
                m.current = (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(_s3.rows) || _s3.rows.length < 10, N(function (e) {
                  return e.concat(_s3.rows || []);
                }), h(!1);
                _context2.next = 14;
                break;
              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](4);
                --O.current, console.log(30, _context2.t0);
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
          onScroll: y,
          height: j + 15
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, {
            children: [p.map(function (e, s) {
              return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Ue, Object.assign({
                init: f
              }, e, {
                key: s
              }));
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, {
              children: g ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.Loading, {}) : null
            })]
          })
        }));
      }, [p, j])
    }));
  }),
  Ze = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref16) {
    var _ref16$refreshNum = _ref16.refreshNum,
      s = _ref16$refreshNum === void 0 ? 0 : _ref16$refreshNum,
      _ref16$id = _ref16.id,
      a = _ref16$id === void 0 ? "" : _ref16$id;
    var _o14 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o14.View;
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
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ke, {
              item: a,
              refreshNum: s
            })
          }));
        }
      })
    }));
  }),
  Xe = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref17) {
    var a = _ref17.contractBillcode;
    var _o15 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o15.View,
      n = _o15.Text,
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
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fe, Object.assign({}, s), s.contractGoodsId);
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
  Ye = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref18) {
    var a = _ref18.defaultValue,
      c = _ref18.borderRadius,
      n = _ref18.paddingTop,
      i = _ref18.paddingBottom,
      t = _ref18.selectClassifyNav;
    var _o16 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _o16.View,
      r = _o16.Text,
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
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
              className: "label"
            }, {
              children: a.title
            }))]
          }), n);
        })
      }))
    }));
  }),
  Je = function Je(_ref19) {
    var a = _ref19.checkCollectionObj,
      c = _ref19.setCheckCollectionObj,
      n = _ref19.goods;
    var _o17 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o17.Text,
      l = _o17.View;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      r();
    }, []);
    var r = function r() {
      return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee3() {
        var e, _s4;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee3$(_context3) {
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
        console.log(123), (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(a.dataObj) ? ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee4() {
          var e;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee4$(_context4) {
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
                r();
              case 4:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        })) : ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee5() {
          var e;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee5$(_context5) {
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
                r();
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
  $e = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref20) {
    var a = _ref20.promotionBegintime,
      c = _ref20.pbName,
      n = _ref20.discName,
      i = _ref20.promotionCode,
      t = _ref20.promotionName,
      r = _ref20.couponOnceNums,
      d = _ref20.couponOnceNumd,
      m = _ref20.promotionEndtime;
    var _o18 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _o18.View,
      h = _o18.Text,
      _Z = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddCoupon)(),
      b = _Z.save,
      u = _Z.isPick,
      p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return r - d;
      }, [r, d]);
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
  _e = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl,
  es = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useStore,
  ss = function ss(_ref21) {
    var c = _ref21.coupon;
    var _o19 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o19.View,
      t = _o19.Text,
      _n11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n12 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n11, 2),
      l = _n12[0],
      d = _n12[1],
      _es = es(),
      m = _es.couponValue;
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
            height: "400"
          }, {
            children: c.map(function (e, s) {
              return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($e, Object.assign({}, e, {
                key: s
              }));
            })
          }))
        }))
      }))]
    });
  },
  as = function as(_ref22) {
    var s = _ref22.onChange,
      _ref22$readOnly = _ref22.readOnly,
      a = _ref22$readOnly === void 0 ? !1 : _ref22$readOnly,
      _ref22$size = _ref22.size,
      c = _ref22$size === void 0 ? 22 : _ref22$size,
      i = _ref22.count;
    var _o20 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _o20.View,
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
      _n14 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n13, 2),
      r = _n14[0],
      d = _n14[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      if (i) {
        var _e3 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_18__["default"])(r);
        for (var _s5 = 0; _s5 < _e3.length; _s5++) _e3[_s5].icon = _s5 > i - 1 ? "star" : "star-fill";
        d(_e3);
      }
    }, []);
    var m = function m(e) {
      if (!a) {
        for (var _s6 = 0; _s6 < r.length; _s6++) r[_s6].icon = _s6 > e ? "star" : "star-fill";
        d((0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_18__["default"])(r)), s(e + 1);
      }
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, {
      children: r.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ce, {
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
  cs = function cs(_ref23) {
    var a = _ref23.item;
    var _o21 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o21.View,
      n = _o21.Image;
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
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(as, {
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
  ns = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref24) {
    var a = _ref24.url,
      c = _ref24.title,
      n = _ref24.subTitle,
      i = _ref24.link,
      t = _ref24.style;
    var _o22 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _o22.View,
      r = _o22.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
      className: "noData",
      style: t
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "content"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
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
  is = function is(_ref25) {
    var a = _ref25.evaluateArr;
    var _o23 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o23.View,
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
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(cs, {
            item: s
          }, a);
        })]
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ns, {
        style: {
          margin: "100px auto"
        },
        url: "https://brushes.oss-cn-shanghai.aliyuncs.com/static/mini/noEvaluate.png",
        title: "还没有评价, 期待您的评价"
      })
    }));
  },
  ts = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  ls = function ls() {
    var _n15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _n16 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n15, 2),
      e = _n16[0],
      s = _n16[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee6() {
        var e, _e4;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              e = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("service");
              if (!e) {
                _context6.next = 5;
                break;
              }
              s(a(e));
              _context6.next = 9;
              break;
            case 5:
              _context6.next = 7;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_3__.queryOcsconfigList)();
            case 7:
              _e4 = _context6.sent;
              s(a(_e4));
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
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
        if (!ts) return;
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
  rs = {
    label: ""
  },
  os = function os() {
    var _o24 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _o24.Text,
      c = _o24.View,
      n = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl(),
      _ls = ls(),
      i = _ls.servicePopup;
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
          return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.switchTabImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.shopping);
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
  ds = function ds(_ref26) {
    var s = _ref26.tabActive,
      a = _ref26.goods;
    var _o25 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o25.View,
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
  ms = function ms(_ref27) {
    var a = _ref27.skuName,
      c = _ref27.skuOption,
      n = _ref27.index;
    var _o26 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o26.View,
      t = _o26.Text,
      _J = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddShopping)(),
      l = _J.handleChooseSize,
      r = _J.spec;
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
            className: "sizeItem " + (r[n] === s.specValueValue ? "active" : ""),
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
    var _J2 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddShopping)(),
      n = _J2.count,
      i = _J2.spec,
      t = _J2.popupVisible,
      l = _J2.isNeedButton,
      r = _J2.handleStep,
      d = _J2.popupHandler,
      m = _J2.addShoppingImpl,
      _o27 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      g = _o27.View,
      h = _o27.Text,
      b = _o27.Image;
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
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ms, {
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
              handleStep: r
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
  hs = function hs(_ref29) {
    var a = _ref29.promotionList;
    var _o28 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o28.View,
      n = _o28.Text;
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
  bs = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useDispatchImpl,
  us = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.useStore,
  ps = function ps(_ref31) {
    var c = _ref31.goods,
      n = _ref31.goodSku;
    var _o29 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o29.View,
      t = _o29.Text,
      _us = us(),
      l = _us.count,
      r = _us.spec,
      d = bs();
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
            children: ["已选择 数量: ", l, " 规格: ", r.toString()]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: Be,
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
  Ns = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Os = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.goodsDetailStore.StoreProvider,
  js = function js(_ref32) {
    var c = _ref32.skuCode;
    var n;
    var _o30 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o30.View,
      t = _o30.Text,
      l = _o30.Skeleton,
      _$ = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsDetailImpl)(c),
      r = _$.goods,
      d = _$.promotionArr,
      m = _$.checkCollectionObj,
      g = _$.setCheckCollectionObj,
      h = _$.sliderArr,
      b = _$.tabActive,
      u = _$.setTabActive,
      p = _$.goodSku,
      N = _$.evaluateArr,
      O = _$.coupon;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "GoodsDetailWrap",
      style: {
        minHeight: Ns ? "" : "667px",
        height: Ns ? "" : "auto",
        overflow: Ns ? "" : "auto"
      }
    }, {
      children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(r) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Re, {
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
              children: null == r ? void 0 : r.goodsName
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
              className: "price"
            }, {
              children: ["￥", null === (n = null == r ? void 0 : r.pricesetNprice) || void 0 === n ? void 0 : n.toFixed(2)]
            }))]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "rPart"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Je, {
              goods: r,
              checkCollectionObj: m,
              setCheckCollectionObj: g
            })
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ps, {
          goods: r,
          goodSku: p
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(hs, {
          promotionList: d
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ss, {
          coupon: O
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "goodsDetailTab"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
            className: "tabs"
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
              className: "tabsItem " + (1 === b ? "active" : ""),
              onClick: function onClick() {
                return u(1);
              }
            }, {
              children: ["商品详情", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
                className: "line"
              })]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
              className: "tabsItem " + (2 === b ? "active" : ""),
              onClick: function onClick() {
                return u(2);
              }
            }, {
              children: ["评价", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
                className: "line"
              })]
            }))]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "group"
          }, {
            children: 1 === b ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ds, {
              tabActive: b,
              goods: r
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(is, {
              evaluateArr: N
            })
          }))]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(os, {})]
      })
    }));
  },
  fs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref33) {
    var s = _ref33.skuCode;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Os, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(js, {
        skuCode: s
      })
    });
  });
function ys(e) {
  var s = "https://b2cweapp40673927e2a14ea49df338dc06bd4e9a.saas.qjclouds.com/";
  return RegExp(/https?/).test(e) ? e : s + e;
}
var As = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref34) {
    var c = _ref34.navList,
      n = _ref34.activeKey;
    var _o31 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o31.View,
      t = _o31.Text;
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
                    l = _ref35.goodsClassName;
                  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                    onClick: function onClick() {
                      return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.goodList, "?classtreeCode=").concat(a));
                    },
                    className: "classifyFloorGoodsItem"
                  }, {
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                      src: ys(n),
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
  vs = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.SideBar,
  Cs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o32 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _o32.View,
      c = _o32.Text,
      _ref36 = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsClassify)(),
      n = _ref36.activeKey,
      i = _ref36.setActiveKey,
      t = _ref36.navList,
      l = _ref36.flag;
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
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ce, {
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(vs, Object.assign({
            activeKey: n,
            onChange: i,
            style: {
              "--width": "88px"
            }
          }, {
            children: t.map(function (s) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(vs.Item, {
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
  ks = [{
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
  ws = function ws(_ref37) {
    var a = _ref37.setParams;
    var _o33 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o33.View,
      _n19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _n20 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n19, 2),
      i = _n20[0],
      t = _n20[1],
      _n21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ks),
      _n22 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n21, 2),
      l = _n22[0],
      r = _n22[1];
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "sortWrap"
    }, {
      children: l.map(function (_ref38, d) {
        var n = _ref38.order,
          l = _ref38.sortField,
          o = _ref38.name;
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
          className: "sortItem " + (i === d ? "active" : ""),
          onClick: function onClick() {
            return function (e, s, c) {
              t(s), c && r(function (e) {
                return e[s].order = "asc" === c ? "desc" : "asc", (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_18__["default"])(e);
              }), a({
                sortField: e,
                order: c
              });
            }(l, d, n);
          }
        }, {
          children: [o, n && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ce, {
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
  Is = function Is(_ref39) {
    var s = _ref39.propId,
      a = _ref39.bottomHeight,
      c = _ref39.scrollFn,
      n = _ref39.children;
    var i = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getTaro)(),
      t = He(s),
      l = i.getStorageSync("safeArea"),
      r = i.getStorageSync("tabBarHeight") || 0,
      o = i.getCurrentPages().at(-1).$taroPath.indexOf("pages/") >= 0 ? r : 0,
      d = a ? +a : 0;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
      onScroll: function onScroll() {
        return c();
      },
      height: t + l + o + d
    }, {
      children: n
    }));
  },
  xs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref40) {
    var _ref40$classtreeCode = _ref40.classtreeCode,
      a = _ref40$classtreeCode === void 0 ? "" : _ref40$classtreeCode,
      _ref40$searchParam = _ref40.searchParam,
      c = _ref40$searchParam === void 0 ? "" : _ref40$searchParam;
    var _o34 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o34.View,
      t = _o34.Text,
      _n23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _n24 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n23, 2),
      r = _n24[0],
      d = _n24[1],
      _ee = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useGoodsList)(a, c, r),
      m = _ee.loading,
      g = _ee.getData,
      h = _ee.list,
      b = He("#searchId");
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
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ce, {
            value: "fenxiang"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, {
            children: "搜索商品"
          })]
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ws, {
          setParams: d
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
        className: "listWrap"
      }, {
        children: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Is, Object.assign({
            propId: "searchId",
            scrollFn: g.bind(null, r)
          }, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              className: "list"
            }, {
              children: h.map(function (a) {
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                  onClick: function onClick() {
                    return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)("".concat(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.goodDetail, "?skuCode=").concat(a.skuCode));
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
        }, [b, h])
      }))]
    }));
  }),
  Ds = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Ts = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref41) {
    var a = _ref41.placeholder,
      c = _ref41.placeholderText,
      i = _ref41.history;
    var _o35 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _o35.View,
      l = _o35.Text,
      r = _o35.Input,
      _n25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
        return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("history") || [];
      }),
      _n26 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n25, 2),
      d = _n26[0],
      m = _n26[1];
    console.log(23, (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("history"));
    var g = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.useImmutableCallback)(function (e) {
        return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee7() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                Ds && (m(function (s) {
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
          src: Ve,
          alt: ""
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
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
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ce, {
            onClick: function onClick() {
              return ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee8() {
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
  Ss = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o36 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _o36.View,
      c = _o36.Text;
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
  Vs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o37 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _o37.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "goodsDetail-promotion-wrap"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, {
        className: "goodsDetail-promotion"
      })
    }));
  }),
  Bs = function Bs(_ref42) {
    var _ref42$starColor = _ref42.starColor,
      a = _ref42$starColor === void 0 ? "#FF0934" : _ref42$starColor,
      _ref42$starSize = _ref42.starSize,
      c = _ref42$starSize === void 0 ? "12px" : _ref42$starSize,
      n = _ref42.itemData;
    var _o38 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o38.View,
      t = _o38.Text,
      l = _o38.Image,
      r = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Rate;
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
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, {
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
  Ls = [{
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
  Ps = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _n27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1"),
      _n28 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n27, 2),
      c = _n28[0],
      t = _n28[1],
      _o39 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
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
        children: Ls.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Bs, {
            itemData: s
          }, a);
        })
      }))]
    });
  }),
  Rs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref43) {
    var c = _ref43.code;
    var _se = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useEvaluateDetail)(c),
      n = _se.orderInfo,
      t = _se.changeStar,
      l = _se.Submit,
      r = _se.changeContent,
      d = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
      _o40 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      m = _o40.View,
      g = _o40.Image,
      b = _o40.TextArea,
      u = _o40.Textarea,
      p = b || u,
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
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, {
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
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(as, {
              onChange: t.bind(null, n)
            })]
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, Object.assign({
            className: "evaluate"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(p, {
              className: "content",
              placeholder: N.current,
              rows: 5,
              maxLength: 30,
              onInput: r.bind(null, n)
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
  zs = function zs(_ref44) {
    var s = _ref44.txt,
      a = _ref44.onChange,
      c = _ref44.checked;
    var _o41 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      n = _o41.View,
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
  Ms = function Ms(_ref45) {
    var a = _ref45.itemData,
      c = _ref45.delAddress,
      n = _ref45.setDefault,
      _ref45$fontSize = _ref45.fontSize,
      i = _ref45$fontSize === void 0 ? "12px" : _ref45$fontSize,
      _ref45$iconSize = _ref45.iconSize,
      t = _ref45$iconSize === void 0 ? "12px" : _ref45$iconSize;
    var _o42 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      l = _o42.View,
      r = _o42.Text,
      d = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
      m = "weapp";
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
      className: "addressItem"
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, Object.assign({
        className: "upInfo",
        onClick: function onClick() {
          rs.label = a.addressId, (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorBackImpl)(1);
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
          children: "h5" === m ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(zs, {
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, Object.assign({
          className: "del",
          onClick: c
        }, {
          children: "删除"
        }))]
      }))]
    }));
  },
  Fs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o43 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _o43.View,
      c = _o43.Skeleton,
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
  Ws = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref46) {
    var a = _ref46.refreshNum;
    var _o44 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o44.View,
      _ae = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useAddressList)(a),
      n = _ae.list,
      i = _ae.delAddress,
      t = _ae.setDefault,
      l = _ae.skullShow;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "addressListWrap"
    }, {
      children: [l ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fs, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
        className: "addressList"
      }, {
        children: n.length ? n.map(function (s, a) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ms, {
            itemData: s,
            setDefault: t.bind(null, s, a),
            delAddress: i.bind(null, s)
          }, null == s ? void 0 : s.addressId);
        }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ns, {
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
  Es = [{
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
  Gs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o45 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _o45.View,
      c = _o45.Skeleton,
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
var Qs = china_division_dist_provinces_json__WEBPACK_IMPORTED_MODULE_7__.map(function (e) {
    return {
      label: e.name,
      value: e.code + "0000",
      children: e.children
    };
  }),
  Us = function Us(_ref47) {
    var a = _ref47.form,
      c = _ref47.handleArea;
    var _o46 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o46.View,
      t = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.CascadePicker,
      l = a.getFieldValue("area"),
      _n29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n30 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n29, 2),
      r = _n30[0],
      d = _n30[1],
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
        for (var _c2 = 0; _c2 < Qs.length; _c2++) if (Qs[_c2].value === e[0]) {
          s.provinceName = Qs[_c2].label, a.pIndex = _c2;
          break;
        }
        for (var _c3 = 0; _c3 < Qs[a.pIndex].children.length; _c3++) if (Qs[a.pIndex].children[_c3].value === e[1]) {
          s.cityName = Qs[a.pIndex].children[_c3].label, a.cIndex = _c3;
          break;
        }
        for (var _c4 = 0; _c4 < Qs[a.pIndex].children[a.cIndex].children.length; _c4++) if (Qs[a.pIndex].children[a.cIndex].children[_c4].value === e[2]) {
          s.areaName = Qs[a.pIndex].children[a.cIndex].children[_c4].label;
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
        options: Qs,
        visible: r,
        onClose: function onClose() {
          return d(!1);
        }
      })]
    });
  },
  Hs = function Hs(_ref48) {
    var s = _ref48.checked,
      a = _ref48.onChange;
    var _o47 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o47.View,
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
  qs = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  Ks = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref49) {
    var s = _ref49.addressId;
    var _o48 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o48.View,
      n = _o48.Switch,
      i = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Form,
      t = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Button,
      l = _brushes_simulate_component__WEBPACK_IMPORTED_MODULE_16__.Input,
      r = "weapp",
      _ce = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useEditAddress)(s, i, qs),
      d = _ce.skullShow,
      m = _ce.form,
      g = _ce.area,
      b = _ce.defaultAddress,
      u = _ce.handleArea,
      p = _ce.handleDefaultAddress,
      N = _ce.handleFinish;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "addressDetail",
      style: {
        height: qs ? "100%" : "667px"
      }
    }, {
      children: d ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Gs, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
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
        children: Es.map(function (s, t) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i.Item, Object.assign({
            label: s.label,
            name: s.name,
            rules: s.rules,
            trigger: "cascader" === s.type ? "onConfirm" : "onChange",
            arrow: !1
          }, {
            children: "input" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({}, s.props)) : "switch" === s.type ? "h5" === r ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Hs, {
              onChange: p.bind(null, "h5"),
              checked: "1" === b
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(n, {
              color: "#000",
              onChange: p.bind(null, "weapp"),
              checked: "1" === b
            }) : "cascader" === s.type ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: qs ? "h5" === r ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Us, {
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
                  children: g.provinceName ? "".concat(g.provinceName, "\u2014").concat(g.cityName, "-").concat(g.areaName) : "请选择所在地区"
                }))
              })) : "请选择所在地区"
            }) : void 0
          }), t);
        })
      }))
    }));
  }),
  Zs = function Zs(_ref50) {
    var s = _ref50.address;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(s) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Ys, {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xs, {
        address: s
      })
    });
  },
  Xs = function Xs(_ref51) {
    var a = _ref51.address;
    var _o49 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o49.View,
      n = _o49.Text,
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
  Ys = function Ys() {
    var _o50 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o50.View,
      n = _o50.Text;
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
  Js = function Js(_ref52) {
    var c = _ref52.payState,
      n = _ref52.amount;
    var _o51 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o51.View,
      t = c.shoppingCountPrice,
      l = c.freight,
      r = c.comDisMoney;
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
            children: ["￥ ", r]
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
  $s = function $s(_ref53) {
    var s = _ref53.goodsList;
    var _o52 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _o52.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, Object.assign({
      className: "place-order-goods"
    }, {
      children: s.map(function (s, a) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fe, Object.assign({}, s), a);
      })
    }));
  },
  _s = function _s(_ref54) {
    var a = _ref54.amount,
      c = _ref54.savePayPrice;
    var _o53 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      n = _o53.View,
      i = _o53.Text;
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
  ea = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref55) {
    var a = _ref55.couponStart,
      c = _ref55.pbName,
      n = _ref55.discName,
      i = _ref55.promotionCode,
      t = _ref55.promotionName,
      l = _ref55.couponEnd,
      r = _ref55.disable;
    var _o54 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _o54.View,
      m = _o54.Text,
      g = _o54.Radio;
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, r ? Object.assign({
          className: "coupon-pick-default"
        }, {
          children: "不能用"
        }) : Object.assign({
          className: "choose"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, {
            disabled: r,
            value: i
          })
        }))]
      }))
    }));
  }),
  sa = function sa(_ref56) {
    var c = _ref56.coupon,
      i = _ref56.confirm,
      t = _ref56.amount;
    var _o55 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      d = _o55.View,
      m = _o55.Text,
      _n31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _n32 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n31, 2),
      g = _n32[0],
      h = _n32[1],
      _n33 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _n34 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n33, 2),
      u = _n34[0],
      p = _n34[1],
      O = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return (c.find(function (e) {
          return e.promotionCode === u;
        }) || {}).promotionName;
      }, [u]);
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
            children: O ? "\u5DF2\u9009\u62E9: ".concat(O) : "请选择优惠券"
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.ScrollView, Object.assign({
            height: 400
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
                return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(ea, Object.assign({
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
  aa = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref57) {
    var a = _ref57.refreshNum,
      c = _ref57.goodsNum,
      n = _ref57.skuId,
      i = _ref57.shoppingGoodsId;
    var _o56 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _o56.View,
      l = rs.label,
      _ne = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.usePlaceOrder)({
        skuId: n,
        goodsNum: c,
        shoppingGoodsId: i
      }, a, l),
      r = _ne.savePayPrice,
      d = _ne.address,
      m = _ne.list,
      g = _ne.payState,
      h = _ne.coupon,
      b = _ne.confirm,
      u = _ne.amount;
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
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Zs, {
            address: d
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)($s, {
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(sa, {
          coupon: h,
          confirm: b,
          amount: u
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Js, {
          amount: u,
          savePayPrice: r,
          payState: g.current
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_s, {
        savePayPrice: r,
        amount: u
      })]
    }));
  }),
  ca = qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderResultResult.useOrderResult,
  na = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  ia = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref58) {
    var a = _ref58.code;
    var _o57 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o57.View,
      n = _o57.Text,
      _ca = ca(a || ((0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getStorage)("contractBillcode") || {}).contractBillcode),
      i = _ca.result,
      t = i.sysRecode,
      l = i.dataObj;
    return console.log(15, t, l), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(c, Object.assign({
      className: "placeOrderResult",
      style: {
        height: na ? "100vh" : "667px"
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
  ta = function ta() {
    var _o58 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _o58.View,
      a = _o58.Image;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      className: "noData"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, {
        src: "https://b2cweapp7c0069b43749439d97b7cae6a02bd459.saas.qjclouds.com/paas/shop-master/c-static/images/wxminiImg/no_coupon.png",
        className: "img"
      })
    }));
  },
  la = function la(_ref59) {
    var c = _ref59.coe;
    var _te = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOverdue)(),
      n = _te.overdueList,
      _o59 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o59.View,
      t = _o59.Text;
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
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ta, {}) : null
    });
  };
/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
  var _o60 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    s = _o60.View,
    c = _o60.Skeleton,
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
var ra = function ra(_ref60) {
    var c = _ref60.coe;
    var _le = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useUnused)(),
      n = _le.unusedList,
      _o61 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o61.View,
      t = _o61.Text,
      l = He("#couponTab");
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
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ta, {}) : null
    });
  },
  oa = function oa(_ref61) {
    var c = _ref61.coe;
    var _o62 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      n = _o62.View,
      i = _o62.Text,
      _re = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useUsed)(),
      t = _re.usedList;
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
      })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ta, {}) : null
    });
  },
  da = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o63 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _o63.View,
      c = _o63.Text,
      _oe = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCouponList)(),
      n = _oe.coe,
      i = _oe.setCoe,
      l = _oe.config;
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
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ra, {
          coe: n
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(oa, {
          coe: n
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(la, {
          coe: n
        })]
      }))]
    }));
  });
function ma(_ref62) {
  var a = _ref62.list;
  var _o64 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
    c = _o64.View,
    n = _o64.Text,
    i = _o64.Image,
    t = _o64.Checkbox,
    _de = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useStore)(),
    l = _de.loading,
    _me = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCartItem)(),
    r = _me.select,
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
              checked: r.includes(a.shoppingGoodsId + ""),
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
var ga = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  ha = function ha(_ref63) {
    var c = _ref63.refreshNum;
    var _o65 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      i = _o65.View,
      t = _o65.Text,
      l = _o65.Checkbox,
      _n35 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
      _n36 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n35, 2),
      r = _n36[0],
      d = _n36[1],
      _he = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useCartList)(c),
      m = _he.cartList,
      g = _he.initImpl,
      h = _he.amount,
      b = _he.selectAll,
      u = _he.allCart,
      p = _he.toOrderImpl,
      N = _he.select,
      O = _he.deleteCart,
      j = _he.disMoney;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
      className: "cart",
      style: {
        height: ga ? "100%" : "667px"
      }
    }, {
      children: m.length ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
          className: "edit",
          id: "editId"
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "btn",
            onClick: function onClick() {
              return d(!r);
            }
          }, {
            children: r ? "编辑" : "完成"
          }))
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Is, Object.assign({
          propId: "editId",
          bottomHeight: "50",
          scrollFn: g
        }, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ma, {
            list: m
          })
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
          className: "dashboard"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "choose"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.SmoothCheckbox, Object.assign({
              onChange: b
            }, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, Object.assign({
                checked: u.current.length === N.length,
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
                  children: ["￥ ", j || 0]
                }))]
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
                className: "all"
              }, {
                children: ["合计: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
                  className: "data"
                }, {
                  children: ["￥ ", h.amount.toFixed(2)]
                }))]
              }))]
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, Object.assign({
              onClick: p,
              className: "btn"
            }, {
              children: ["结算(", h.num, ")"]
            }))]
          })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
            className: "del"
          }, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(i, Object.assign({
              onClick: O,
              className: "btn"
            }, {
              children: "删除"
            }))
          }))]
        }))]
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ns, {
        url: "https://brushes.oss-cn-shanghai.aliyuncs.com/static/mini/noCarts.png",
        title: "购物车竟然是空的",
        subTitle: "快点挑选点东西犒赏自己吧",
        link: qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.index
      })
    }));
  },
  ba = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref64) {
    var s = _ref64.refreshNum;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.StoreProvider, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ha, {
        refreshNum: s
      })
    });
  }),
  ua = function ua() {
    var _o66 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _o66.View,
      c = _o66.Text,
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap[n.link]);
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
  pa = function pa() {
    var _o67 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      a = _o67.View,
      c = _o67.Text,
      l = _o67.Badge,
      _n37 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _n38 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_n37, 2),
      r = _n38[0],
      d = _n38[1],
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
      ve(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee9() {
        var _e5;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee9$(_context9) {
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
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.order);
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
  Na = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref65) {
    var a = _ref65.avatarStyle,
      _ref65$userAvatar = _ref65.userAvatar,
      c = _ref65$userAvatar === void 0 ? "" : _ref65$userAvatar,
      _ref65$userNickname = _ref65.userNickname,
      n = _ref65$userNickname === void 0 ? "用户名" : _ref65$userNickname,
      i = _ref65.banner;
    var _o68 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      t = _o68.View,
      l = _o68.Text,
      r = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
      _ls2 = ls(),
      d = _ls2.servicePopup;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
      className: "mine",
      style: {
        height: r ? "100%" : "667px"
      }
    }, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(t, Object.assign({
        className: "topBoard"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
          value: "shezhi",
          onClick: function onClick() {
            return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.navigatorImpl)(qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.routerMap.setting);
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.IconMobile, {
          value: "kehufuwukefu",
          onClick: d
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
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: c,
          alt: "",
          className: "avatar",
          style: {
            borderRadius: a ? "50%" : "2px"
          }
        })]
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(pa, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ua, {})]
    }));
  }),
  Oa = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_2__.getEnv)(),
  ja = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (_ref66) {
    var a = _ref66.code;
    var _o69 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      c = _o69.View,
      n = _o69.Text,
      i = _o69.Radio,
      _be = (0,qj_mobile_store__WEBPACK_IMPORTED_MODULE_5__.useOrderResult)(a),
      t = _be.paymentImpl,
      l = _be.channelList,
      r = _be.contract,
      d = _be.handleRadio,
      m = _be.loading;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(c, Object.assign({
      className: "paymentModeWrap",
      style: {
        height: Oa ? "inherit" : "667px"
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
            children: ["订单号：", r.current.contractBillcode, " | 总金额：", r.current.dataBmoney, "元"]
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
  fa = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function () {
    var _o70 = (0,_brushes_simulate_component__WEBPACK_IMPORTED_MODULE_10__.useComponent)(),
      s = _o70.View;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, Object.assign({
      clasName: "footprint"
    }, {
      children: 123123
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

/***/ }),

/***/ "?8c09":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "../qj-api-store/packages/qj-b2c-api/dist/index.js":
/*!*********************************************************!*\
  !*** ../qj-api-store/packages/qj-b2c-api/dist/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addShoppingGoods": function() { return /* binding */ Yo; },
/* harmony export */   "addShoppingGoodsBySpec": function() { return /* binding */ Io; },
/* harmony export */   "calculateFreightFare": function() { return /* binding */ Bo; },
/* harmony export */   "cancelContractC": function() { return /* binding */ Vo; },
/* harmony export */   "confirmReceive": function() { return /* binding */ jo; },
/* harmony export */   "deleteAddress": function() { return /* binding */ r; },
/* harmony export */   "deleteCollectByCodeStr": function() { return /* binding */ lo; },
/* harmony export */   "deleteFootprintByCodeStr": function() { return /* binding */ Ao; },
/* harmony export */   "deleteShoppingGoodsBatch": function() { return /* binding */ Wo; },
/* harmony export */   "find": function() { return /* binding */ y; },
/* harmony export */   "getAddress": function() { return /* binding */ _; },
/* harmony export */   "getContractByCode": function() { return /* binding */ io; },
/* harmony export */   "getFalgSettingForPaydate": function() { return /* binding */ Mo; },
/* harmony export */   "getResourceGoodsInfoBySkuCode": function() { return /* binding */ d; },
/* harmony export */   "getTotalDiscountPrice": function() { return /* binding */ ho; },
/* harmony export */   "paymentCommit": function() { return /* binding */ $; },
/* harmony export */   "queryAddressBymerberCode": function() { return /* binding */ Lo; },
/* harmony export */   "queryCollectPage": function() { return /* binding */ C; },
/* harmony export */   "queryCouponListBySkuCode": function() { return /* binding */ ko; },
/* harmony export */   "queryEvaluateGoodsPagetrue": function() { return /* binding */ Go; },
/* harmony export */   "queryExpressInfo": function() { return /* binding */ po; },
/* harmony export */   "queryFootprintPagePlat": function() { return /* binding */ P; },
/* harmony export */   "queryGoodsClassTree": function() { return /* binding */ L; },
/* harmony export */   "queryNoticePage": function() { return /* binding */ be; },
/* harmony export */   "queryPromotionListByGoodsCode": function() { return /* binding */ g; },
/* harmony export */   "queryShoppingPage": function() { return /* binding */ yo; },
/* harmony export */   "queryShoppingToContract": function() { return /* binding */ Ho; },
/* harmony export */   "queryToContract": function() { return /* binding */ Fo; },
/* harmony export */   "queryUseTemplate": function() { return /* binding */ No; },
/* harmony export */   "queryUserConByGoods": function() { return /* binding */ Xo; },
/* harmony export */   "queryUsercouponPageForC": function() { return /* binding */ c; },
/* harmony export */   "saveAddress": function() { return /* binding */ t; },
/* harmony export */   "saveContract": function() { return /* binding */ Qo; },
/* harmony export */   "saveEvaluateGoods": function() { return /* binding */ bo; },
/* harmony export */   "saveEvaluateShop": function() { return /* binding */ wo; },
/* harmony export */   "saveFootprint": function() { return /* binding */ mo; },
/* harmony export */   "saveOrderToPay": function() { return /* binding */ qo; },
/* harmony export */   "saveUsercoupon": function() { return /* binding */ xo; },
/* harmony export */   "syncContractPayState": function() { return /* binding */ U; },
/* harmony export */   "syncContractState": function() { return /* binding */ fo; },
/* harmony export */   "updateAddress": function() { return /* binding */ O; },
/* harmony export */   "updateShoppingGoodsNum": function() { return /* binding */ vo; }
/* harmony export */ });
/* unused harmony exports INDEX_MEM, LIBARY, balanceRechargeOnline, checkCollectExit, checkUserPhone, checkUserPhoneByTenant, checkUserPhoneThere, checkVerificationMa, deleteCollectByCode, fetchSpeOptByPntCodeNomRel, getContractNumbers, getMiniMobile, getNotice, getPfsModelTagValue, getPfsModelTagValueByTginfo, getPhoneForPlaRegSc, getProappinfo, getTemporaryToken, getUserInfoAuth, getUserserviceInfo, goodsDetailQuery, goodsQuery, goodsUpdate, login, loginByToken, loginInByCode, loginOut, lowCodeSave, miniLogout, queryAccount, queryBrandRelationPage, queryCheckPaywd, queryClasstreeForUser, queryContractPageC, queryFilelistView, queryFreightExpPage, queryImsgPushmsgPage, queryOcsconfigList, queryProappConfigByChannel, queryProappEnvPage, queryPromotionPageFullReduction, queryRechargePageForAtByMem, queryResourceGoodsPagePalt, queryScenePage, querySceneSelectPage, querySceneSproappPage, querySkuNotOnShelf, queryTginfoMenuTree, queryTginfoMenuTreeForTginfo, queryTmProappPageForSc, queryTmscene, queryTmscenePageForSc, queryTmsceneProappPageForSc, queryUsercouponNember, queryUserlogininfoservicePage, regiter, saveCollect, saveProductOrder, saveTmsceneForPlatScNew, saveUmuserPhone, saveUmuserPhoneByWX, saveUmuserPhoneNoCodeByWX, saveUmuserPhoneVCode, saveUserInfoAuth, sendPhone, updateTmsceneTtdeposit, updateUmuserPw, updateUserPaywd, updateUserPhoneByUserPhone, updateUserPsw, uploadGoodsFiles, warrantyLogin */
/* harmony import */ var _brushes_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brushes/request */ "../qj-api-store/node_modules/@brushes/request/dist/index.js");

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
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_CONTRACT_NUMBERS, o);
  },
  _ = function _() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_ADDRESS, o);
  },
  r = function r() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.DELETE_ADDRESS, o);
  },
  O = function O() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.UPDATE_ADDRESS, o);
  },
  t = function t() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.SAVE_ADDRESS, o);
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
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.INDEX_MEM, o);
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
  b = function b() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.UPDATE_TMSCENETTDEPOSIT, e);
  },
  w = function w() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_TMSCENEPROAPPPAGE_FORSC, o);
  },
  l = function l() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_USERSERVICE_INFO, o);
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
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_RESOURCE_GOODS_INFO_BY_SKU_CODE, o);
  },
  g = function g() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_PROMOTION_LIST_BY_GOODS_CODE, o);
  },
  D = function D() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.CHECK_COLLECT_EXIT, o);
  },
  I = function I() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.SAVE_COLLECT, o);
  },
  Y = function Y() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.DELETE_COLLECT_BY_CODE, o);
  },
  y = function y() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.FIND, o);
  },
  L = function L() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_GOODS_CLASS_TREE, o);
  },
  F = function F() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_PROAPPINFO, o);
  },
  M = function M() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.SAVE_TMSCENEFORPLATSCNEW, e);
  },
  h = function h() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.CHECK_USERPHONEBYENANT, o);
  },
  B = function B() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_TMPROAPPPAGEFORSC, o);
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
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GET_PHONE_FOR_PLA_REG_SC, o);
  },
  H = function H() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.CHECK_USER_PHONE, e);
  },
  v = function v() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.LOGIN_IN_BY_CODE, o);
  },
  V = function V() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.SEND_PHONE, o);
  },
  W = function W() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var E = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)("".concat(s.QUERY_FILE_LIST_VIEW, "?fileSort=FILE_GD&fileRemark=").concat(E), e);
  },
  K = function K() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_SCENESELECTPAGE, e);
  },
  k = function k() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_TMSCENEPAGEFORSC, o);
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
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_TMSCENE, o);
  },
  oe = function oe() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.QUERY_ACCOUNTOUTERBYUSER, o);
  },
  Ee = function Ee() {
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
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.LOGINOUT, o);
  },
  re = function re() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var E = Object.assign({
      rows: 10,
      page: 1
    }, e);
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.GOODS_QUERY, E);
  },
  Oe = function Oe() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.GOODS_UPDATE, e);
  },
  te = function te() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GOODS_CLASSTREE, o);
  },
  Re = function Re() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GOODS_BRAND, o);
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
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(s.GOODS_DETAIL, o);
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
  be = function be() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(s.QUERY_NOTICE_PAGE, e);
  },
  we = "web/ml/mlogin/warrantyLogin.json",
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
  We = "web/res/evaluate/saveEvaluateGoods.json",
  Ke = "web/res/template/queryUseTemplate.json",
  ke = "web/res/evaluate/queryEvaluateGoodsPagetrue.json",
  xe = "web/pm/promotion/queryPromotionPageFullReduction.json",
  Xe = "web/pm/promotion/queryCouponListBySkuCode.json",
  $e = "web/pm/usercoupon/saveUsercoupon.json",
  ze = "web/oc/contract/queryUserConByGoods.json",
  Je = "web/um/footprint/saveFootprint.json",
  Ze = "web/um/footprint/deleteFootprintByCodeStr.json",
  eo = "web/ml/muser/saveUmuserPhone.json",
  oo = "web/ml/muser/saveUmuserPhoneVCode.json",
  Eo = "web/tm/Proapp/queryProappConfigByChannel.json",
  so = "/web/ml/mlogin/loginOut.json",
  no = "/web/ocs/ocsconfig/queryOcsconfigList.json",
  _o = "/web/tm/Proapp/queryProappEnvPage.json",
  ro = "/web/ml/mlogin/getMiniMobile.json",
  Oo = "/web/ml/muser/saveUmuserPhoneNoCodeByWX.json",
  to = "/web/cms/notice/getNotice.json",
  Ro = function Ro() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(to, o);
  },
  So = function So() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Oo, e);
  },
  To = function To() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ro, e);
  },
  Po = function Po() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(_o, o);
  },
  Co = function Co() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(no, o);
  },
  co = function co() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(so, e);
  },
  uo = function uo() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(Eo, o);
  },
  ao = function ao() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(oo, e);
  },
  Uo = function Uo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(eo, e);
  },
  Ao = function Ao() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Ze, e);
  },
  mo = function mo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Je, e);
  },
  Go = function Go() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ke, e);
  },
  No = function No() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Ke, e);
  },
  bo = function bo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(We, e);
  },
  wo = function wo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Ve, e);
  },
  lo = function lo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ve, e);
  },
  jo = function jo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(He, e);
  },
  io = function io() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(qe, o);
  },
  po = function po() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(fe, o);
  },
  go = function go() {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.get)(we, o);
  },
  Do = function Do() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(le, e);
  },
  Io = function Io() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(je, e);
  },
  Yo = function Yo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ie, e);
  },
  yo = function yo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(pe, e);
  },
  Lo = function Lo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(de, e);
  },
  Fo = function Fo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ge, e);
  },
  Mo = function Mo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(De, e);
  },
  ho = function ho() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Ie, e);
  },
  Bo = function Bo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Ye, e);
  },
  Qo = function Qo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ye, e);
  },
  fo = function fo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Le, e);
  },
  qo = function qo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Fe, e);
  },
  Ho = function Ho() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Me, e);
  },
  vo = function vo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(he, e);
  },
  Vo = function Vo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Be, e);
  },
  Wo = function Wo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Qe, e);
  },
  Ko = function Ko() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(xe, e);
  },
  ko = function ko() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(Xe, e);
  },
  xo = function xo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)($e, e);
  },
  Xo = function Xo() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0,_brushes_request__WEBPACK_IMPORTED_MODULE_0__.post)(ze, e);
  };


/***/ }),

/***/ "../qj-api-store/packages/qj-mobile-store/dist/index.js":
/*!**************************************************************!*\
  !*** ../qj-api-store/packages/qj-mobile-store/dist/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreProvider": function() { return /* binding */ Be; },
/* harmony export */   "goodsDetailStore": function() { return /* binding */ ve; },
/* harmony export */   "navigatorHandler": function() { return /* binding */ rt; },
/* harmony export */   "orderStatusImpl": function() { return /* binding */ Qe; },
/* harmony export */   "orderStatusList": function() { return /* binding */ We; },
/* harmony export */   "refreshCard": function() { return /* binding */ De; },
/* harmony export */   "routerMap": function() { return /* binding */ Ne; },
/* harmony export */   "useAddCoupon": function() { return /* binding */ Pe; },
/* harmony export */   "useAddShopping": function() { return /* binding */ Le; },
/* harmony export */   "useAddressList": function() { return /* binding */ je; },
/* harmony export */   "useCartItem": function() { return /* binding */ Ge; },
/* harmony export */   "useCartList": function() { return /* binding */ $e; },
/* harmony export */   "useCollectionList": function() { return /* binding */ ot; },
/* harmony export */   "useCouponList": function() { return /* binding */ Re; },
/* harmony export */   "useCube": function() { return /* binding */ Ke; },
/* harmony export */   "useEditAddress": function() { return /* binding */ Me; },
/* harmony export */   "useEvaluateDetail": function() { return /* binding */ nt; },
/* harmony export */   "useExpressInfo": function() { return /* binding */ et; },
/* harmony export */   "useFootprint": function() { return /* binding */ ct; },
/* harmony export */   "useGoodsClassify": function() { return /* binding */ tt; },
/* harmony export */   "useGoodsDetailImpl": function() { return /* binding */ Ie; },
/* harmony export */   "useGoodsList": function() { return /* binding */ _e; },
/* harmony export */   "useNotice": function() { return /* binding */ it; },
/* harmony export */   "useOrderDetail": function() { return /* binding */ Ze; },
/* harmony export */   "useOrderOperate": function() { return /* binding */ Ye; },
/* harmony export */   "useOrderResult": function() { return /* binding */ qe; },
/* harmony export */   "useOrderResultResult": function() { return /* binding */ He; },
/* harmony export */   "useOverdue": function() { return /* binding */ Ee; },
/* harmony export */   "usePlaceOrder": function() { return /* binding */ ze; },
/* harmony export */   "useStore": function() { return /* binding */ Ae; },
/* harmony export */   "useUnused": function() { return /* binding */ Te; },
/* harmony export */   "useUsed": function() { return /* binding */ Ve; }
/* harmony export */ });
/* unused harmony exports detailButton, makeStore, routerMapArr, useDispatchImpl */
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qj-b2c-api */ "../qj-api-store/packages/qj-b2c-api/dist/index.js");
/* harmony import */ var _brushes_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brushes/utils */ "../qj-api-store/node_modules/@brushes/utils/dist/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ "../qj-api-store/node_modules/lodash-es/get.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ "../qj-api-store/node_modules/lodash-es/groupBy.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "../qj-api-store/node_modules/lodash-es/isEmpty.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ "../qj-api-store/node_modules/lodash-es/isFunction.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ "../qj-api-store/node_modules/lodash-es/noop.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ "../qj-api-store/node_modules/lodash-es/set.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es */ "../qj-api-store/node_modules/lodash-es/isUndefined.js");
/* provided dependency */ var document = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["document"];








function pe(c, i) {
  var r = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null),
    d = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
  return [function (_ref) {
    var t = _ref.children;
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(c, i),
      _o2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_o, 2),
      n = _o2[0],
      a = _o2[1];
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r.Provider, Object.assign({
      value: a
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
var _pe = pe(function (e, t) {
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
  _pe2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_pe, 3),
  me = _pe2[0],
  ge = _pe2[1],
  ye = _pe2[2];
var ve = Object.freeze({
  __proto__: null,
  StoreProvider: me,
  useStore: ge,
  useDispatchImpl: ye
});
function fe(e, t, o, n) {
  return new (o || (o = Promise))(function (c, i) {
    function r(e) {
      try {
        a(n.next(e));
      } catch (e) {
        i(e);
      }
    }
    function d(e) {
      try {
        a(n.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function a(e) {
      var t;
      e.done ? c(e.value) : (t = e.value, t instanceof o ? t : new o(function (e) {
        e(t);
      })).then(r, d);
    }
    a((n = n.apply(e, t || [])).next());
  });
}
var he = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
  Ce = function Ce(e, t) {
    return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee() {
      var o;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
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
  be = function be(e, t) {
    return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee2() {
      var o;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee2$(_context2) {
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
    return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee3() {
      var o;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            o = {
              skuId: e,
              goodsNum: t,
              isLocalMock: !he
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
  ke = function ke(e) {
    return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee4() {
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee4$(_context4) {
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
  Ne = {
    index: "/pages/index/index",
    shopping: "/pages/shopping/index",
    classify: "/pages/classify/index",
    my: "/pages/my/index",
    order: "/subpackage/orderlist/index",
    orderDetail: "/subpackage/orderdetail/index",
    search: "/subpackage/search/index",
    goodList: "/subpackage/goodlist/index",
    goodDetail: "/subpackage/gooddetail/index",
    confirm: "/subpackage/orderconfirm/index",
    result: "/subpackage/result/index",
    rate: "/subpackage/rate/index",
    paymentMode: "/subpackage/paymentmode/index",
    expressInfo: "/subpackage/expressinfo/index",
    collectionList: "/subpackage/collectionlist/index",
    footprint: "/subpackage/footprint/index",
    evaluateDetail: "/subpackage/ratedetail/index",
    myAgreementList: "/subpackage/myagreementlist/index",
    mySetting: "/subpackage/mysetting/index",
    noticeDetail: "/subpackage/noticedetail/index",
    bindIphone: "/append/bindIphone/index",
    addressEditor: "/subpackage/addresseditor/index",
    addressList: "/subpackage/addresslist/index",
    couponList: "/subpackage/couponlist/index",
    setting: "/subpackage/setting/index",
    register: "/account/register/index",
    accountLogin: "/account/accountLogin/index",
    mobileLogin: "/account/mobileLogin/index",
    forgetPwd: "/account/forgetPwd/index",
    agreement: "/account/agreement/index",
    auth: "/account/auth/index",
    confirmPhone: "/account/confirmPhone/index",
    bindPhone: "/account/bindPhone/index"
  },
  Oe = ["pages/index/index"];
function Le() {
  var _this = this;
  var _ge = ge(),
    e = _ge.count,
    t = _ge.spec,
    o = _ge.orderType,
    n = _ge.popupVisible,
    c = _ge.isNeedButton,
    i = _ge.goodsCode,
    r = ye(),
    d = function d() {
      r({
        type: "popupImpl",
        payload: {
          popupVisible: !n
        }
      });
    },
    a = function a() {
      return fe(_this, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee5() {
        var _o3, _n, _c;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return Ce(t, i);
            case 3:
              _o3 = _context5.sent;
              _n = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_o3, "dataObj.skuId");
              _context5.next = 7;
              return be(_n, e);
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
    s = function s() {
      return fe(_this, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee6() {
        var o, n;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return Ce(t, i);
            case 2:
              o = _context6.sent;
              n = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(o, "dataObj.skuId");
              (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Ne.confirm, "?skuId=").concat(n, "&goodsNum=").concat(e));
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
      }) : (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.sucMessage)("不能小于0", "none");
    },
    addShoppingImpl: function addShoppingImpl() {
      0 === o ? a() : s();
    },
    popupHandler: d
  };
}
var Ie = function Ie(e) {
    var _c2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c3 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c2, 2),
      t = _c3[0],
      o = _c3[1],
      _c4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c5 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c4, 2),
      n = _c5[0],
      d = _c5[1],
      _c6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c7 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c6, 2),
      a = _c7[0],
      s = _c7[1],
      _c8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c9 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c8, 2),
      l = _c9[0],
      u = _c9[1],
      _c10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _c11 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c10, 2),
      p = _c11[0],
      h = _c11[1],
      _c12 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c13 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c12, 2),
      C = _c13[0],
      b = _c13[1],
      _c14 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c15 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c14, 2),
      S = _c15[0],
      k = _c15[1],
      _c16 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c17 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c16, 2),
      N = _c17[0],
      O = _c17[1],
      _c18 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c19 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c18, 2),
      L = _c19[0],
      I = _c19[1],
      P = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({}),
      D = ye();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee7() {
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return x();
            case 2:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
    }, []);
    var x = function x() {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee8() {
          var t, _n2, _ref2, _c20, _i, _r, _d, _a;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee8$(_context8) {
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
                _a = _ref2.goodsNum;
                P.current = _c20, o(_n2), j(_i), M(_r, _d, _a), w(_c20, _d, _n2);
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
      M = function M(e, t, o) {
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
        D({
          type: "initGoods",
          payload: {
            spec: c,
            goodsCode: t,
            goodsNum: o
          }
        });
      },
      j = function j(e) {
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(e)) return;
        var t = e.map(function (e) {
          return {
            imgUrl: e.goodsFileUrl,
            link: ""
          };
        });
        u(t);
      },
      B = function B(e) {
        return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryCouponListBySkuCode)(e);
      },
      A = function A(e) {
        return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryEvaluateGoodsPagetrue)({
          goodsCode: e,
          page: 1,
          rows: 10
        });
      },
      w = function w(e, t, o) {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee9() {
          var _yield$Promise$all, _yield$Promise$all2, _yield$Promise$all2$, _i2, _yield$Promise$all2$2, _r2, _yield$Promise$all2$3, _a2, n, c;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return Promise.all([(c = e, (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryPromotionListByGoodsCode)(c)), A(t), B(e), (n = o, (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveFootprint)({
                  footprintType: 0,
                  footprintOpcode: n.rsSkuDomainList[0].skuCode,
                  footprintOppic: n.dataPic,
                  footprintOpcont: n.goodsName,
                  footprintOpnum: n.pricesetNprice,
                  footprintOpurl: ""
                }))]);
              case 3:
                _yield$Promise$all = _context9.sent;
                _yield$Promise$all2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_yield$Promise$all, 3);
                _yield$Promise$all2$ = _yield$Promise$all2[0];
                _i2 = _yield$Promise$all2$ === void 0 ? [] : _yield$Promise$all2$;
                _yield$Promise$all2$2 = _yield$Promise$all2[1];
                _r2 = _yield$Promise$all2$2 === void 0 ? {} : _yield$Promise$all2$2;
                _yield$Promise$all2$3 = _yield$Promise$all2[2];
                _a2 = _yield$Promise$all2$3 === void 0 ? [] : _yield$Promise$all2$3;
                d(_i2), O(_r2.list), I(_a2);
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
      checkCollectionObj: a,
      setCheckCollectionObj: s,
      sliderArr: l,
      tabActive: p,
      setTabActive: h,
      popupVisible: C,
      setPopupVisible: b,
      goods: t,
      goodSku: S,
      evaluateArr: N,
      coupon: L,
      queryCouponImpl: function queryCouponImpl() {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee10() {
          var _e2;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return B(P.current);
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
  Pe = function Pe() {
    var _c21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c22 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c21, 2),
      e = _c22[0],
      t = _c22[1];
    return {
      save: function save(o) {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee11() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                if (e) {
                  _context11.next = 9;
                  break;
                }
                _context11.prev = 1;
                _context11.next = 4;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveUsercoupon)(o);
              case 4:
                t(!0);
                _context11.next = 9;
                break;
              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](1);
              case 9:
              case "end":
                return _context11.stop();
            }
          }, _callee11, null, [[1, 7]]);
        }));
      },
      isPick: e
    };
  },
  De = {
    num: 0
  },
  xe = "00000017";
function Me(e, t, o) {
  var _this2 = this;
  var _t$useForm = t.useForm(),
    _t$useForm2 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_t$useForm, 1),
    n = _t$useForm2[0],
    _c23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1"),
    _c24 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c23, 2),
    i = _c24[0],
    d = _c24[1],
    _c25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
    _c26 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c25, 2),
    a = _c26[0],
    s = _c26[1],
    _c27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
      provinceCode: "",
      provinceName: "",
      cityCode: "",
      cityName: "",
      areaCode: "",
      areaName: ""
    }),
    _c28 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c27, 2),
    l = _c28[0],
    u = _c28[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    e || !o ? p() : (n.setFieldValue("addressDefault", i), s(!1));
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
      u(t), d(e.addressDefault), n.setFieldValue("addressMember", e.addressMember), n.setFieldValue("addressPhone", e.addressPhone), n.setFieldValue("addressDetail", e.addressDetail), n.setFieldValue("area", t), n.setFieldValue("addressDefault", e.addressDefault), n.validateFields(), s(!1);
    });
  };
  return {
    skullShow: a,
    form: n,
    area: l,
    setArea: u,
    userCode: xe,
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
      n.setFieldValue("area", o), n.validateFields();
    },
    handleDefaultAddress: function handleDefaultAddress(e, t) {
      "h5" === e ? d(t ? "1" : "0") : "weapp" === e && d(t.detail.value ? "1" : "0");
    },
    handleFinish: function handleFinish(t) {
      return fe(_this2, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee12() {
        var o, n;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              t.addressDefault = t.addressDefault ? "1" : "0";
              o = Object.assign(t, t.area);
              delete o.area;
              _context12.prev = 3;
              _context12.next = 6;
              return n = Object.assign(Object.assign({}, o), {
                userCode: xe
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
  var _c29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c30 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c29, 2),
    t = _c30[0],
    o = _c30[1],
    _c31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
    _c32 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c31, 2),
    n = _c32[0],
    i = _c32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    d();
  }, [e]);
  var d = function d() {
      return fe(_this3, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee13() {
        var e, t;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              e = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
              _context13.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryAddressBymerberCode)({
                isLocalMock: !e
              });
            case 3:
              t = _context13.sent;
              o(t), i(!1);
            case 5:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
    },
    a = function a(e, t) {
      var o = t[e];
      return t[e] = t[0], t[e].addressDefault = "0", t[0] = o, t[0].addressDefault = "1", (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(t);
    };
  return {
    list: t,
    skullShow: n,
    delAddress: function delAddress(e) {
      if (!(0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)()) return;
      (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getTaro)().showModal({
        title: "提示",
        content: "确认删除该地址吗？",
        success: function success(t) {
          return fe(_this3, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee14() {
            return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee14$(_context14) {
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
                  return d();
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
      return fe(_this3, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee15() {
        var _c33, _i3, _r3, _s, _l, _u, _p, _m, _g, _y, _v, _f, _h;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              if (!("1" !== e.addressDefault)) {
                _context15.next = 7;
                break;
              }
              _c33 = e.addressMember, _i3 = e.addressPhone, _r3 = e.provinceCode, _s = e.provinceName, _l = e.cityCode, _u = e.cityName, _p = e.areaCode, _m = e.areaName, _g = e.addressDetail, _y = e.addressId, _v = e.addressCode, _f = e.dataState, _h = {
                addressMember: _c33,
                addressPhone: _i3,
                provinceCode: _r3,
                provinceName: _s,
                cityCode: _l,
                cityName: _u,
                areaCode: _p,
                areaName: _m,
                addressDetail: _g,
                addressId: _y,
                addressCode: _v,
                dataState: _f,
                addressDefault: "1"
              };
              o(a(n, t));
              _context15.next = 5;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.updateAddress)(_h);
            case 5:
              _context15.next = 7;
              return d();
            case 7:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
    },
    getAddressList: d
  };
}
var _pe3 = pe(function (e, t) {
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
  _pe4 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_pe3, 3),
  Be = _pe4[0],
  Ae = _pe4[1],
  we = _pe4[2],
  Ge = function Ge() {
    var e = we(),
      _Ae = Ae(),
      t = _Ae.select;
    return {
      select: t,
      onChange: function onChange(t) {
        e({
          type: "select",
          payload: t.detail.value
        });
      },
      handleStep: function handleStep(t, o, n) {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee16() {
          var c;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee16$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
              case 0:
                if (!(0 === o && "minus" === n)) {
                  _context16.next = 2;
                  break;
                }
                return _context16.abrupt("return", void (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.sucMessage)("不能小于0", "none"));
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
  $e = function $e(e) {
    var _c34 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c35 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c34, 2),
      t = _c35[0],
      o = _c35[1],
      _c36 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _c37 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c36, 2),
      n = _c37[0],
      a = _c37[1],
      s = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
      l = we(),
      _Ae2 = Ae(),
      u = _Ae2.select,
      p = _Ae2.id,
      m = _Ae2.count,
      g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
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
      fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee17() {
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee17$(_context17) {
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
      p && y(p, m);
    }, [p, m]);
    var y = function y(e, t) {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee18() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee18$(_context18) {
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
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee19() {
          var t, n;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee19$(_context19) {
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
                s.current = n.shoppingGoodsList.map(function (e) {
                  return e.shoppingGoodsId + "";
                }), e && l({
                  type: "select",
                  payload: s.current
                }), l({
                  type: "update",
                  payload: {
                    loading: !1
                  }
                }), a(n.disMoney || 0), o(n.shoppingGoodsList);
              case 5:
              case "end":
                return _context19.stop();
            }
          }, _callee19);
        }));
      };
    return {
      cartList: t,
      initImpl: v,
      disMoney: n,
      amount: g,
      selectAll: function selectAll(e) {
        l({
          type: "select",
          payload: e.detail.value.includes("true") ? s.current : []
        });
      },
      allCart: s,
      toOrderImpl: function toOrderImpl() {
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Ne.confirm, "?shoppingGoodsId=").concat(u.join(",")));
      },
      select: u,
      deleteCart: function deleteCart() {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee20() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee20$(_context20) {
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
  Re = function Re() {
    var _c38 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _c39 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c38, 2),
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
  Te = function Te() {
    var _c40 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c41 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c40, 2),
      e = _c41[0],
      t = _c41[1],
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee21() {
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee21$(_context21) {
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
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee22() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee22$(_context22) {
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
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee23() {
          var _e4;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee23$(_context23) {
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
      _c43 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c42, 2),
      e = _c43[0],
      t = _c43[1],
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee24() {
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee24$(_context24) {
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
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee25() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee25$(_context25) {
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
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee26() {
          var _e5;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee26$(_context26) {
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
      _c45 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c44, 2),
      e = _c45[0],
      t = _c45[1],
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee27() {
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee27$(_context27) {
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
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee28() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee28$(_context28) {
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
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee29() {
          var _e6;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee29$(_context29) {
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
    _c47 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c46, 2),
    a = _c47[0],
    s = _c47[1],
    _c48 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
    _c49 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c48, 2),
    l = _c49[0],
    u = _c49[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    p();
  }, [o]);
  var p = Je(function () {
      d.current = 0, n.current = !0, s([]), m(o);
    }),
    m = Je(function (_ref3) {
      var _ref3$sortField = _ref3.sortField,
        o = _ref3$sortField === void 0 ? "pricesetNprice" : _ref3$sortField,
        _ref3$order = _ref3.order,
        c = _ref3$order === void 0 ? "" : _ref3$order;
      return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee30() {
        var _i4;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee30$(_context30) {
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
              ((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(_i4.list) || _i4.list.length < 10) && (n.current = !1), u(!1), s(function (e) {
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
    list: a
  };
};
function qe(e) {
  var _this4 = this;
  var _c50 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
    _c51 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c50, 2),
    t = _c51[0],
    o = _c51[1],
    n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),
    d = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
    _c52 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c53 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c52, 2),
    a = _c53[0],
    s = _c53[1],
    l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({}),
    u = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
      dataBmoney: "",
      contractBillcode: ""
    });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      fe(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee31() {
        var t, _o4, _n4;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee31$(_context31) {
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
              s(_n4.payChannelList), l.current = _n4;
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
      return fe(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee32() {
        var e, t, _ref4, c, i, r, d, a;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee32$(_context32) {
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
              }(), c = _ref4.ptradeSeqno, i = _ref4.contractBlance, r = _ref4.fchannelCode, d = _ref4.faccountOuterNo, a = [{
                faccountIdType: "ACCOUNT",
                fchannelCode: r,
                orderAmount: u.current.dataBmoney,
                faccountId: d
              }];
              _context32.next = 5;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.paymentCommit)({
                ptradeSeqno: c,
                payCommitStr: JSON.stringify(a),
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
    g = function g() {
      return fe(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee33() {
        var _e7;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee33$(_context33) {
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
    y = function y() {
      return fe(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee34() {
        var _e8;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee34$(_context34) {
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
      return fe(_this4, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee35() {
        var _e9;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee35$(_context35) {
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
                  (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Ne.result, "?code=").concat(o));
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
          y();
          break;
        case "alipaywap":
          g();
      }
    },
    channelList: a,
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
  var a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    _c54 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c55 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c54, 2),
    s = _c55[0],
    l = _c55[1],
    _c56 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
    _c57 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c56, 2),
    u = _c57[0],
    p = _c57[1],
    m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""),
    g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    y = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    v = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
    _c58 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _c59 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c58, 2),
    f = _c59[0],
    h = _c59[1],
    C = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)(),
    b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Ue),
    S = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      fe(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee36() {
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              h(0);
              b.current = {
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
              y.current = [];
              g.current = [];
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
      return fe(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee37() {
        var _e10;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              _context37.prev = 0;
              _context37.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUserConByGoods)({
                pmContractGoodsDomainListStr: JSON.stringify(y.current)
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
      return fe(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee38() {
        var t, _t, _t$, o, n, c;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              _context38.next = 2;
              return Promise.all([(0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryAddressBymerberCode)({
                isLocalMock: !C
              }), e()]);
            case 2:
              t = _context38.sent;
              _t = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(t, 2);
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
          b.current.comDisMoney += e.disMoney, b.current.copyComDisMoney += e.disMoney, e.shoppingGoodsList.forEach(function (t) {
            y.current.push(t), b.current.shoppingCountPrice += t.pricesetNprice * t.goodsCamount, t.contractGoodsGtype = 0, m.current = e.promotionCode, "00" == t.goodsType && (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getFalgSettingForPaydate)().then(function (e) {});
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
          }), a.current = [].concat((0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(e.shoppingGoodsList), (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(e.giftList))) : a.current = e.shoppingGoodsList;
        }), I(), C && (P(), N(), M(t));
      });
    },
    I = function I() {
      var _b$current = b.current,
        e = _b$current.shoppingCountPrice,
        t = _b$current.totalDiscountPrice,
        o = _b$current.discount,
        n = _b$current.comDisMoney,
        c = _b$current.freight,
        i = (e - t - o - n + c).toFixed(2);
      h(i);
    },
    P = function P() {
      return fe(_this5, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee39() {
        var n, _e11;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee39$(_context39) {
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
              b.current.freight = _e11.dataObj, I();
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
    D = function D() {
      var _b$current2 = b.current,
        e = _b$current2.shoppingCountPrice,
        t = _b$current2.copyComDisMoney,
        o = _b$current2.discount;
      return (e - t - o).toFixed(2);
    },
    x = function x() {
      var _b$current3 = b.current,
        e = _b$current3.shoppingCountPrice,
        t = _b$current3.copyComDisMoney,
        o = _b$current3.freight;
      return (e - t + o).toFixed(2);
    },
    M = function M(o) {
      v.current = function (o) {
        var n = o.addressMember,
          c = o.userName,
          i = o.provinceName,
          r = o.cityName,
          d = o.areaName,
          s = o.addressDetail,
          l = o.areaCode;
        return [{
          contractPaytime: new Date().valueOf(),
          goodsPbillno: 0,
          goodsPmbillno: b.current.promotionCodes,
          contractProperty: "0",
          contractBlance: 0,
          contractPmode: 0,
          contractPumode: "0",
          goodsSupplierName: "",
          goodsSupplierCode: "",
          packageList: [{
            contractGoodsList: a.current,
            shoppingGoodsIdList: [],
            promotionCode: m.current,
            packageRemark: null
          }],
          packageMode: "",
          contractType: "00",
          ocContractSettlList: [],
          contractInmoney: x(),
          contractMoney: D(),
          goodsReceiptMem: n,
          goodsReceiptPhone: c,
          goodsReceiptArrdess: i + r + d + s,
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
      ke(n).then(function (e) {
        b.current.totalDiscountPrice = e.dataObj.totalDiscountPrice, b.current.contractSettlOpno = e.dataObj.contractSettlOpno, I();
      });
    };
  return {
    savePayPrice: function savePayPrice() {
      if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(u)) return;
      (function () {
        var _b$current4 = b.current,
          e = _b$current4.contractSettlOpno,
          t = _b$current4.totalDiscountPrice;
        e && 0 != t && g.current.push({
          contractSettlBlance: "UR",
          contractPmode: "0",
          contractSettlPmoney: t,
          contractSettlOpno: e
        });
      })(), (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(v.current, "[0].ocContractSettlList", [].concat((0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(g.current), (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(S.current)));
      var e = {
        orderDomainStr: JSON.stringify(v.current)
      };
      (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.saveContract)(e).then(function (e) {
        (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Ne.paymentMode, "?code=").concat(e.dataObj.contractBillcode));
      });
    },
    address: u,
    list: a,
    payState: b,
    coupon: s,
    confirm: function confirm(e) {
      var t = e.couponAmount,
        o = e.usercouponCode,
        n = e.promotionCode,
        c = e.discAmount;
      S.current = [{
        contractSettlBlance: "COP",
        contractPmode: "0",
        contractSettlGmoney: +t,
        contractSettlPmoney: +c,
        contractSettlOpno: o,
        contractSettlOpemo: n
      }], b.current.discount = c, I();
    },
    amount: f
  };
}
var He = Object.freeze({
  __proto__: null,
  useOrderResult: function useOrderResult(e) {
    var _this6 = this;
    var _c60 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c61 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c60, 2),
      t = _c61[0],
      o = _c61[1],
      n = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      (function () {
        fe(_this6, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee40() {
          var _t2, _c62, _t$dataObj, _i5;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee40$(_context40) {
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
    _c64 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c63, 2),
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
          (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Ne.expressInfo, "?code=").concat(o));
        },
        pay: function pay() {
          (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Ne.paymentMode, "?code=").concat(o));
        },
        evaluate: function evaluate() {
          (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Ne.evaluateDetail, "?code=").concat(o));
        },
        confirmReceive: function confirmReceive() {
          return fe(_this7, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee41() {
            return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee41$(_context41) {
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
          return fe(_this7, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee42() {
            return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee42$(_context42) {
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
      _c66 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c65, 2),
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
      _c68 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c67, 2),
      i = _c68[0],
      d = _c68[1];
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee43() {
        var _t3;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee43$(_context43) {
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
      _c70 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c69, 2),
      t = _c70[0],
      o = _c70[1],
      _c71 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _c72 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c71, 2),
      n = _c72[0],
      i = _c72[1];
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee44() {
        var t, n, c, r;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee44$(_context44) {
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
    _c74 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c73, 2),
    e = _c74[0],
    t = _c74[1],
    _c75 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c76 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c75, 2),
    o = _c76[0],
    n = _c76[1],
    i = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    d();
  }, []);
  var d = function d() {
    return fe(_this8, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee45() {
      var _e12, _o5;
      return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee45$(_context45) {
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
      _c78 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c77, 2),
      e = _c78[0],
      t = _c78[1],
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1),
      _c79 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c80 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c79, 2),
      n = _c80[0],
      d = _c80[1],
      _c81 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c82 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c81, 2),
      a = _c82[0],
      s = _c82[1],
      _c83 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c84 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c83, 2),
      l = _c84[0],
      u = _c84[1],
      _c85 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c86 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c85, 2),
      p = _c86[0],
      m = _c86[1],
      _c87 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c88 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c87, 2),
      g = _c88[0],
      y = _c88[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      v();
    }, []);
    var v = function v() {
        o.current = 1, t([]), f();
      },
      f = function f() {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee46() {
          var _e13;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee46$(_context46) {
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
      collectCodeStr: a,
      getSelectItem: function getSelectItem(t) {
        var o = t.detail.value;
        s(o.toString()), o.length === e.length ? y(!0) : (y(!1), s(""));
      },
      delItem: function delItem() {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee47() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee47$(_context47) {
            while (1) switch (_context47.prev = _context47.next) {
              case 0:
                _context47.prev = 0;
                _context47.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.deleteCollectByCodeStr)({
                  collectCodeStr: a
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
        e.detail.value.length ? (u(!0), s(h())) : u(!1);
      },
      selectAll: p,
      setSelectAll: m,
      selectAllChecked: g
    };
  },
  nt = function nt(e) {
    var _c89 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c90 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c89, 2),
      t = _c90[0],
      o = _c90[1],
      n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]),
      d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({}),
      a = (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.getEnv)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee48() {
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee48$(_context48) {
          while (1) switch (_context48.prev = _context48.next) {
            case 0:
              _context48.next = 2;
              return u();
            case 2:
              _context48.next = 4;
              return s();
            case 4:
            case "end":
              return _context48.stop();
          }
        }, _callee48);
      }));
    }, []);
    var s = function s() {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee49() {
          var _t4, _n5, _n$, _c91, _i6, _r4, _s2, _u2;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee49$(_context49) {
            while (1) switch (_context49.prev = _context49.next) {
              case 0:
                _context49.prev = 0;
                _context49.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.getContractByCode)({
                  contractBillcode: e,
                  isLocalMock: !a
                });
              case 3:
                _t4 = _context49.sent;
                _n5 = l((0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_t4, "goodsList"));
                _n$ = _n5[0];
                _c91 = _n$.contractBillcode;
                _i6 = _n$.memberBcode;
                _r4 = _n$.memberBname;
                _s2 = _n$.memberCode;
                _u2 = _n$.memberName;
                d.current = {
                  contractBillcode: _c91,
                  memberBcode: _i6,
                  memberBname: _r4,
                  memberCode: _s2,
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
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee50() {
          var _e14;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee50$(_context50) {
            while (1) switch (_context50.prev = _context50.next) {
              case 0:
                _context50.prev = 0;
                _context50.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryUseTemplate)({
                  applyTarget: "goods",
                  isLocalMock: !a
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
        var i = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(t),
          r = [];
        for (var _e15 = 0; _e15 < c; _e15++) r.push(n.current[_e15]);
        i[e].evaluateScopeList = r, o(i);
      },
      Submit: function Submit() {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee51() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee51$(_context51) {
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
                return (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Ne.order));
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
        var c = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(t);
        c[e].evaluateGoodsContent = n.detail.value, o(c);
      }
    };
  },
  ct = function ct() {
    var _c92 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _c93 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c92, 2),
      e = _c93[0],
      t = _c93[1],
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1),
      _c94 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c95 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c94, 2),
      n = _c95[0],
      d = _c95[1],
      _c96 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c97 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c96, 2),
      a = _c97[0],
      s = _c97[1],
      _c98 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c99 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c98, 2),
      l = _c99[0],
      u = _c99[1],
      _c100 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _c101 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c100, 2),
      p = _c101[0],
      m = _c101[1],
      _c102 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _c103 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c102, 2),
      g = _c103[0],
      y = _c103[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      v();
    }, []);
    var v = function v() {
        o.current = 1, t([]), f();
      },
      f = function f() {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee52() {
          var _e16;
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee52$(_context52) {
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
        console.log(43, t), s(t.toString());
      },
      delItem: function delItem() {
        return fe(void 0, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee53() {
          return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee53$(_context53) {
            while (1) switch (_context53.prev = _context53.next) {
              case 0:
                _context53.prev = 0;
                _context53.next = 3;
                return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.deleteFootprintByCodeStr)({
                  footprintCodeStr: a
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
      selectAllChecked: g
    };
  };
function it(e) {
  var _this9 = this;
  var _c104 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _c105 = (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_c104, 2),
    t = _c105[0],
    o = _c105[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      fe(_this9, void 0, void 0, /*#__PURE__*/(0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee54() {
        var _t7, _n6;
        return (0,_Users_joker_Documents_workspace_lowCodeRepo_b2c_cli_mobile_lc_saas_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee54$(_context54) {
          while (1) switch (_context54.prev = _context54.next) {
            case 0:
              _context54.prev = 0;
              _context54.next = 3;
              return (0,qj_b2c_api__WEBPACK_IMPORTED_MODULE_2__.queryNoticePage)({
                page: 1,
                rows: e,
                dataState: 1
              });
            case 3:
              _t7 = _context54.sent;
              _n6 = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(_t7, "list", []);
              o(_n6);
              _context54.next = 10;
              break;
            case 8:
              _context54.prev = 8;
              _context54.t0 = _context54["catch"](0);
            case 10:
            case "end":
              return _context54.stop();
          }
        }, _callee54, null, [[0, 8]]);
      }));
    })();
  }, [e]);
  return {
    content: (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
      return t.map(function (e) {
        return e.noticeTitle;
      });
    }, [t]),
    navigator: function navigator(e) {
      var o = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(t, "".concat(e, ".noticeId"), "");
      (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)("".concat(Ne.noticeDetail, "?noticeId=").concat(o));
    }
  };
}
function rt(e) {
  if (!e) return;
  return e.includes("/pages/") ? (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.switchTabImpl)(e) : (0,_brushes_utils__WEBPACK_IMPORTED_MODULE_3__.navigatorImpl)(e);
}


/***/ })

}]);
//# sourceMappingURL=common.js.map