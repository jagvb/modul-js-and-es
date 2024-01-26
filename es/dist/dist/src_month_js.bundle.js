"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_month_js"],{

/***/ "./src/month.js":
/*!**********************!*\
  !*** ./src/month.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst mFrmtr = new Intl.DateTimeFormat(void(0), { month: 'long' }); \r\nconst months = Array.from({ length: 12 }, \r\n  (v, i) => mFrmtr.format(new Date(0, i)) \r\n);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (months);\n\n//# sourceURL=webpack:///./src/month.js?");

/***/ })

}]);