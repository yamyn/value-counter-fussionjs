webpackHotUpdate("main",{

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value */ "./src/redux/value.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "./src/redux/log.js");


/* harmony default export */ __webpack_exports__["default"] = ((state = {}, action) => ({
  value: Object(_value__WEBPACK_IMPORTED_MODULE_0__["default"])(state.value, action),
  log: Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])(state.log, action)
}));

/***/ }),

/***/ "./src/redux/log.js":
/*!**************************!*\
  !*** ./src/redux/log.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-plugin-rpc-redux-react */ "./node_modules/fusion-rpc-redux/dist-browser-esm/index.js");
/* harmony import */ var reduce_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reduce-reducers */ "./node_modules/reduce-reducers/es/index.js");


const increment = Object(fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_0__["createRPCReducer"])('increment', {
  success: (state, action) => {
    return [...state, {
      type: 'incremented',
      timestamp: new Date().toString(),
      newValue: action.payload.value
    }];
  }
}, []);
const decrement = Object(fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_0__["createRPCReducer"])('decrement', {
  success: (state, action) => {
    return [...state, {
      type: 'decremented',
      timestamp: new Date().toString(),
      newValue: action.payload.value
    }];
  }
}, []);
/* harmony default export */ __webpack_exports__["default"] = (Object(reduce_reducers__WEBPACK_IMPORTED_MODULE_1__["default"])(increment, decrement));

/***/ })

})
//# sourceMappingURL=main.210406329c462f37c4e8.hot-update.js.map