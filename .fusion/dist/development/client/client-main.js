(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/styletron-react/dist/browser.es2017.es.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fusion-plugin-rpc-redux-react */ "./node_modules/fusion-plugin-rpc-redux-react/dist-browser-esm/hoc.js");
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

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "./node_modules/fusion-react/dist/browser.es2017.es.js");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/fusion-plugin-styletron-react/dist-browser-esm/index.js");
/* harmony import */ var fusion_plugin_universal_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-plugin-universal-events */ "./node_modules/fusion-plugin-universal-events/dist-browser-esm/index.js");
/* harmony import */ var fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fusion-plugin-react-redux */ "./node_modules/fusion-plugin-react-redux/dist-browser-esm/tokens.js");
/* harmony import */ var fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fusion-plugin-react-redux */ "./node_modules/fusion-plugin-react-redux/dist-browser-esm/index.js");
/* harmony import */ var fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fusion-plugin-rpc-redux-react */ "./node_modules/fusion-plugin-rpc/dist-browser-esm/tokens.js");
/* harmony import */ var fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fusion-plugin-rpc-redux-react */ "./node_modules/fusion-plugin-rpc-redux-react/dist-browser-esm/index.js");
/* harmony import */ var fusion_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fusion-tokens */ "./node_modules/fusion-tokens/dist-browser-esm/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./root.js */ "./src/root.js");
/* harmony import */ var _redux_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./redux/index.js */ "./src/redux/index.js");
/* harmony import */ var _rpc_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rpc/index.js */ "./src/rpc/index.js");











/* harmony default export */ __webpack_exports__["default"] = (() => {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0__["default"](_root_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__["default"]);
  app.register(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
  app.register(fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_6__["RPCToken"], fusion_plugin_rpc_redux_react__WEBPACK_IMPORTED_MODULE_7__["default"]);
  app.register(fusion_plugin_universal_events__WEBPACK_IMPORTED_MODULE_3__["UniversalEventsToken"], fusion_plugin_universal_events__WEBPACK_IMPORTED_MODULE_3__["default"]);
  false ? undefined : app.register(fusion_tokens__WEBPACK_IMPORTED_MODULE_8__["FetchToken"], unfetch__WEBPACK_IMPORTED_MODULE_9__["default"]);
  app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4__["ReduxToken"], fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_5__["default"]);
  app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4__["ReducerToken"], _redux_index_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
  return app;
});

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Input */ "./src/components/Input.js");
/* harmony import */ var _components_EventLog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EventLog */ "./src/components/EventLog.js");
var _jsxFileName = "/home/ya_myn/dev/practice/fusion/fussion-increment/src/pages/home.js";




const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EventLog__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/pageNotFound.js":
/*!***********************************!*\
  !*** ./src/pages/pageNotFound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
var _jsxFileName = "/home/ya_myn/dev/practice/fusion/fussion-increment/src/pages/pageNotFound.js";



const PageNotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["NotFound"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "404"));

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ "./src/root.js":
/*!*********************!*\
  !*** ./src/root.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist/browser.es2017.es.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pageNotFound.js */ "./src/pages/pageNotFound.js");
var _jsxFileName = "/home/ya_myn/dev/practice/fusion/fussion-increment/src/root.js";




const root = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/",
  component: _pages_home_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  component: _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}));
/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

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

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/fusion-cli/entries/client-public-path.js (webpack)-hot-middleware/client.js?name=client ./node_modules/fusion-cli/entries/client-entry.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/ya_myn/dev/practice/fusion/fussion-increment/node_modules/fusion-cli/entries/client-public-path.js */"./node_modules/fusion-cli/entries/client-public-path.js");
__webpack_require__(/*! /home/ya_myn/dev/practice/fusion/fussion-increment/node_modules/webpack-hot-middleware/client.js?name=client */"./node_modules/webpack-hot-middleware/client.js?name=client");
module.exports = __webpack_require__(/*! /home/ya_myn/dev/practice/fusion/fussion-increment/node_modules/fusion-cli/entries/client-entry.js */"./node_modules/fusion-cli/entries/client-entry.js");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=client-main.js.map