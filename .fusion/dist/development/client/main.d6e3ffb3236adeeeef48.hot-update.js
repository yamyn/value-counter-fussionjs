webpackHotUpdate("main",{

/***/ "./src/components/EventLog.js":
/*!************************************!*\
  !*** ./src/components/EventLog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/styletron-react/dist/browser.es2017.es.js");
var _jsxFileName = "/home/ya_myn/dev/practice/fusion/fussion-increment/src/components/EventLog.js";



const LogLine = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('span', {
  display: 'block'
});
LogLine.displayName = "LogLine";
const EventLog = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('div', {
  marginTop: '30px',
  padding: '5px',
  border: '1px solid black',
  overflowY: 'scroll',
  height: '300px',
  width: '600px',
  maxWidth: '100%'
});
EventLog.displayName = "EventLog";

const StyledEventLog = ({
  log
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventLog, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, log.map((entry, index) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogLine, {
    key: "".concat(entry.timestamp, "/").concat(index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Value ", entry.type, " at ", entry.timestamp, ". New value:", ' ', entry.newValue);
}));

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(({
  log
}) => ({
  log
}))(StyledEventLog));

/***/ })

})
//# sourceMappingURL=main.d6e3ffb3236adeeeef48.hot-update.js.map