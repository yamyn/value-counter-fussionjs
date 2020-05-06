webpackHotUpdate("main",{

/***/ "./src/rpc/index.js":
/*!**************************!*\
  !*** ./src/rpc/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "./node_modules/fusion-core/dist/browser.es2017.es.js");


var _default =
/*#__PURE__*/
Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  deps: {},
  // specify any DI tokens you need in your handlers
  provides: () => ({
    increment: async ({
      value
    }, _ctx) => {
      return {
        value
      };
    },
    decrement: async ({
      value
    }, _ctx) => {
      return {
        value
      };
    }
  })
});

/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ })

})
//# sourceMappingURL=main.cf81b6753b7b485fb9da.hot-update.js.map