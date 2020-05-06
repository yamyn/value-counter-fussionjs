
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

/***/ "./src/redux/value.js":
/*!****************************!*\
  !*** ./src/redux/value.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-plugin-rpc-redux-react */ "fusion-plugin-rpc-redux-react");
/* harmony import */ var fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reduce_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reduce-reducers */ "reduce-reducers");
/* harmony import */ var reduce_reducers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reduce_reducers__WEBPACK_IMPORTED_MODULE_1__);



const increment = (state = 0, action) => {
  if (action.type === 'INCREMENT_START') {
    return state;
  } else if (action.type === 'INCREMENT_SUCCESS') {
    return action.payload.value;
  } else if (action.type === 'INCREMENT_FAILURE') {
    return state;
  } else {
    return state;
  }
};

const decrement = Object(fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_0__["createRPCReducer"])('decrement', {
  start: state => state,
  success: (_state, action) => action.payload.value,
  failure: state => state
}, 0);
/* harmony default export */ __webpack_exports__["default"] = (reduce_reducers__WEBPACK_IMPORTED_MODULE_1___default()(increment, decrement));

/***/ })

};
//# sourceMappingURL=main.9b9051d3632a5098d9cb.hot-update.js.map