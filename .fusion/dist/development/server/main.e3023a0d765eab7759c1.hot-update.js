
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

/***/ "./src/rpc/index.js":
/*!**************************!*\
  !*** ./src/rpc/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);


var _default =
/*#__PURE__*/
Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  deps: {},
  provides: () => ({
    increment: async ({
      value
    }, _ctx) => {
      return {
        value: value + 1
      };
    },
    decrement: async ({
      value
    }, _ctx) => {
      return {
        value: value - 1
      };
    }
  })
});

/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ })

};
//# sourceMappingURL=main.e3023a0d765eab7759c1.hot-update.js.map