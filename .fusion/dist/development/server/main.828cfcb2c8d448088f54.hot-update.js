
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  if (false) {
    throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);
  } else {
    console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');
    process.env.NODE_ENV = 'development';
  }
} else {
  process.env.NODE_ENV = 'development';
}
  
exports.id = "main";
exports.modules = {

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fusion-plugin-rpc-redux-react */ "fusion-plugin-rpc-redux-react");
/* harmony import */ var fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/ya_myn/dev/practice/fusion/fussion-increment/src/components/Input.js";





const CurrentValue = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('span', {
  marginRight: '20px'
});
CurrentValue.displayName = "CurrentValue";

const Input = ({
  value,
  increment,
  decrement
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentValue, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Current value: ", value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  onClick: () => increment({
    value
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  onClick: () => decrement({
    value
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "-"));

const hoc = Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_4__["withRPCRedux"])('increment'), Object(fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_4__["withRPCRedux"])('decrement'), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(({
  value
}) => ({
  value
})));
/* harmony default export */ __webpack_exports__["default"] = (hoc(Input));

/***/ })

};
//# sourceMappingURL=main.828cfcb2c8d448088f54.hot-update.js.map