webpackHotUpdate("main",{

/***/ "./src/redux/value.js":
/*!****************************!*\
  !*** ./src/redux/value.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-plugin-rpc-redux-react */ "./node_modules/fusion-rpc-redux/dist-browser-esm/index.js");
/* harmony import */ var reduce_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reduce-reducers */ "./node_modules/reduce-reducers/es/index.js");



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
/* harmony default export */ __webpack_exports__["default"] = (Object(reduce_reducers__WEBPACK_IMPORTED_MODULE_1__["default"])(increment, decrement));

/***/ })

})
//# sourceMappingURL=main.3000557e6f92cf3038c1.hot-update.js.map