"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/LoginPage/Login.tsx":
/*!****************************************!*\
  !*** ./components/LoginPage/Login.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ \"react-bootstrap/Form\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\hp\\\\Desktop\\\\preparation\\\\mycityFrontend\\\\mycity-web\\\\components\\\\LoginPage\\\\Login.tsx\";\n\n/* eslint-disable react/no-unescaped-entities */\n\n\n\n\n\n\n\n\nconst Login = props => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n\n  const sendToRegister = () => {\n    router.push('/register');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {\n        className: \"mb-3\",\n        controlId: \"formBasicEmail\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {\n          children: \"Email address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {\n          type: \"email\",\n          placeholder: \"Enter email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Text), {\n          className: \"text-muted\",\n          children: \"We'll never share your email with anyone else.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 7\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {\n        className: \"mb-3\",\n        controlId: \"formBasicPassword\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 7\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Control), {\n          type: \"password\",\n          placeholder: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 7\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {\n        variant: \"primary\",\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(RegisterLink, {\n      onClick: sendToRegister,\n      children: \"Register here\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 3\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nconst RegisterLink = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({\n  displayName: \"Login__RegisterLink\"\n})({\n  color: 'blue',\n  textDecoration: 'underline',\n  cursor: 'pointer',\n  marginTop: '6px'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luUGFnZS9Mb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsTUFBTUssS0FBSyxHQUFJQyxLQUFELElBQWtCO0VBQy9CLE1BQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBeEI7O0VBQ0MsTUFBTVEsY0FBYyxHQUFHLE1BQUk7SUFDN0JELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLFdBQVo7RUFDRyxDQUZEOztFQUlBLG9CQUNFO0lBQUEsd0JBQ0EsOERBQUMsNkRBQUQ7TUFBQSx3QkFDQSw4REFBQyxtRUFBRDtRQUFZLFNBQVMsRUFBQyxNQUF0QjtRQUE2QixTQUFTLEVBQUMsZ0JBQXZDO1FBQUEsd0JBQ0UsOERBQUMsbUVBQUQ7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFERixlQUVFLDhEQUFDLHFFQUFEO1VBQWMsSUFBSSxFQUFDLE9BQW5CO1VBQTJCLFdBQVcsRUFBQztRQUF2QztVQUFBO1VBQUE7VUFBQTtRQUFBLGFBRkYsZUFHRSw4REFBQyxrRUFBRDtVQUFXLFNBQVMsRUFBQyxZQUFyQjtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQUhGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQURBLGVBU0EsOERBQUMsbUVBQUQ7UUFBWSxTQUFTLEVBQUMsTUFBdEI7UUFBNkIsU0FBUyxFQUFDLG1CQUF2QztRQUFBLHdCQUNFLDhEQUFDLG1FQUFEO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLGFBREYsZUFFRSw4REFBQyxxRUFBRDtVQUFjLElBQUksRUFBQyxVQUFuQjtVQUE4QixXQUFXLEVBQUM7UUFBMUM7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQUZGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQVRBLGVBYUEsOERBQUMsK0RBQUQ7UUFBUSxPQUFPLEVBQUMsU0FBaEI7UUFBMEIsSUFBSSxFQUFDLFFBQS9CO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBYkE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBREEsZUFrQkYsOERBQUMsWUFBRDtNQUFjLE9BQU8sRUFBRUQsY0FBdkI7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFsQkU7RUFBQSxnQkFERjtBQXNCRCxDQTVCRDs7QUE4QkEsaUVBQWVILEtBQWY7QUFFQSxNQUFNSyxZQUFZLEdBQUdOLHVFQUFIO0VBQUE7QUFBQSxHQUFjO0VBQzVCUSxLQUFLLEVBQUMsTUFEc0I7RUFFNUJDLGNBQWMsRUFBQyxXQUZhO0VBRzVCQyxNQUFNLEVBQUMsU0FIcUI7RUFJNUJDLFNBQVMsRUFBQztBQUprQixDQUFkLENBQWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXljaXR5LXdlYi8uL2NvbXBvbmVudHMvTG9naW5QYWdlL0xvZ2luLnRzeD9jZjA1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG50eXBlIFByb3BzID0ge31cclxuXHJcbmNvbnN0IExvZ2luID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgc2VuZFRvUmVnaXN0ZXIgPSAoKT0+e1xyXG5yb3V0ZXIucHVzaCgnL3JlZ2lzdGVyJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxGb3JtPlxyXG4gICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XHJcbiAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIC8+XHJcbiAgICAgIDxGb3JtLlRleHQgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgIFdlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwgd2l0aCBhbnlvbmUgZWxzZS5cclxuICAgICAgPC9Gb3JtLlRleHQ+XHJcbiAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgU3VibWl0XHJcbiAgICA8L0J1dHRvbj5cclxuICA8L0Zvcm0+XHJcbiAgPFJlZ2lzdGVyTGluayBvbkNsaWNrPXtzZW5kVG9SZWdpc3Rlcn0+UmVnaXN0ZXIgaGVyZTwvUmVnaXN0ZXJMaW5rPlxyXG4gIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuXHJcbmNvbnN0IFJlZ2lzdGVyTGluayA9IHN0eWxlZC5kaXYoe1xyXG4gICAgY29sb3I6J2JsdWUnLFxyXG4gICAgdGV4dERlY29yYXRpb246J3VuZGVybGluZScsXHJcbiAgICBjdXJzb3I6J3BvaW50ZXInLFxyXG4gICAgbWFyZ2luVG9wOic2cHgnXHJcbn0pIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiQnV0dG9uIiwiRm9ybSIsInN0eWxlZCIsIkxvZ2luIiwicHJvcHMiLCJyb3V0ZXIiLCJzZW5kVG9SZWdpc3RlciIsInB1c2giLCJSZWdpc3RlckxpbmsiLCJkaXYiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIiwiY3Vyc29yIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginPage/Login.tsx\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_LoginPage_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LoginPage/Login */ \"./components/LoginPage/Login.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\hp\\\\Desktop\\\\preparation\\\\mycityFrontend\\\\mycity-web\\\\pages\\\\login.tsx\";\n\n\n\n\nconst login = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_LoginPage_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLE1BQU1FLEtBQUssR0FBRyxNQUFNO0VBQ2xCLG9CQUNFLDhEQUFDLG1FQUFEO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQUdELENBSkQ7O0FBTUEsaUVBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWNpdHktd2ViLy4vcGFnZXMvbG9naW4udHN4PzcyNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5QYWdlL0xvZ2luJztcclxuXHJcbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TG9naW4gLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxvZ2luIiwibG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();