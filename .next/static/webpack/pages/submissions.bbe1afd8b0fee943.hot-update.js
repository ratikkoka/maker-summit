"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/submissions",{

/***/ "./pages/submissions.js":
/*!******************************!*\
  !*** ./pages/submissions.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Submissions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-reveal */ \"./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Submissions(param1) {\n    var submissions = param1.submissions;\n    var _this = this;\n    var getImages = function getImages(image) {\n        var images = image.split(', ');\n        return 'uc?' + images[0].substring(30);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(submissions), items = ref[0], setItems = ref[1];\n    var filtered = _toConsumableArray(new Set(submissions.map(function(val) {\n        return val.category;\n    })));\n    var filterItem = function(curcat) {\n        var newItem = submissions.filter(function(newVal) {\n            return newVal.category === curcat;\n        });\n        setItems(newItem);\n    };\n    var driveLoader = function(param) {\n        var src = param.src;\n        return \"https://drive.google.com/\".concat(src);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"filters\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        onClick: function() {\n                            return setItems(submissions);\n                        },\n                        children: \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    filtered.map(function(Val, id) {\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-primary\",\n                            onClick: function() {\n                                return filterItem(Val);\n                            },\n                            children: Val\n                        }, id, false, {\n                            fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, _this));\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__.Slide, {\n                    direction: \"up\",\n                    children: items.map(function(submission) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        loader: driveLoader,\n                                        alt: \"Project Image\",\n                                        layout: \"fill\",\n                                        src: getImages(submission.images)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"submission-name\",\n                                        children: submission.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"main-content\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"submission-name\",\n                                                children: submission.firstName + \" \" + submission.lastName\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"likes info\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"label\",\n                                                    children: submission.desc\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, _this)\n                        }, submission._id, false, {\n                            fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/pages/submissions.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Submissions, \"fSxvF0FVxfJODNOfegwjh0TdbiM=\");\n_c = Submissions;\nvar _c;\n$RefreshReg$(_c, \"Submissions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7Ozs7Ozt3SEFDL0VmLENBQUc7Z0RBQUNDLFNBQVMsRUFBQyxDQUFZO3NJQUN4QlksQ0FBQztvREFBQ1osU0FBUyxFQUFDLENBQU87OERBQUVNLFVBQVUsQ0FBQ1MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBWm5DVCxVQUFVLENBQUNVLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCcEMsQ0FBQztHQXBFdUJ0QyxXQUFXO0tBQVhBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VibWlzc2lvbnMuanM/Y2I5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbGlkZSB9IGZyb20gJ3JlYWN0LWF3ZXNvbWUtcmV2ZWFsJztcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vbGliL2RiQ29ubmVjdCc7XG5pbXBvcnQgU3VibWlzc2lvbiBmcm9tICcuLi9tb2RlbHMvU3VibWlzc2lvbic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWlzc2lvbnMoeyBzdWJtaXNzaW9ucyB9KSB7XG5cbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShzdWJtaXNzaW9ucyk7XG5cbiAgY29uc3QgZmlsdGVyZWQgPSBbLi4ubmV3IFNldChzdWJtaXNzaW9ucy5tYXAoKHZhbCkgPT4gdmFsLmNhdGVnb3J5KSldO1xuXG4gIGNvbnN0IGZpbHRlckl0ZW0gPSAoY3VyY2F0KSA9PiB7XG4gICAgY29uc3QgbmV3SXRlbSA9IHN1Ym1pc3Npb25zLmZpbHRlcigobmV3VmFsKSA9PiB7XG4gICAgICByZXR1cm4gbmV3VmFsLmNhdGVnb3J5ID09PSBjdXJjYXQ7XG4gICAgfSk7XG4gICAgc2V0SXRlbXMobmV3SXRlbSk7XG4gIH07XG5cbiAgY29uc3QgZHJpdmVMb2FkZXIgPSAoeyBzcmMgfSkgPT4ge1xuICAgIHJldHVybiBgaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tLyR7c3JjfWBcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEltYWdlcyhpbWFnZSkge1xuICAgIGxldCBpbWFnZXMgPSBpbWFnZS5zcGxpdCgnLCAnKTtcbiAgICByZXR1cm4gJ3VjPycgKyBpbWFnZXNbMF0uc3Vic3RyaW5nKDMwKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXRlbXMoc3VibWlzc2lvbnMpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFsbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge2ZpbHRlcmVkLm1hcCgoVmFsLCBpZCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbHRlckl0ZW0oVmFsKX1cbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1ZhbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgPFNsaWRlIGRpcmVjdGlvbj0ndXAnPlxuICAgICAgICAgIHtpdGVtcy5tYXAoKHN1Ym1pc3Npb24pID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtzdWJtaXNzaW9uLl9pZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgIGxvYWRlcj17ZHJpdmVMb2FkZXJ9IFxuICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvamVjdCBJbWFnZVwiIFxuICAgICAgICAgICAgICAgICAgbGF5b3V0PSdmaWxsJyBcbiAgICAgICAgICAgICAgICAgIHNyYz17Z2V0SW1hZ2VzKHN1Ym1pc3Npb24uaW1hZ2VzKX0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic3VibWlzc2lvbi1uYW1lXCI+e3N1Ym1pc3Npb24udGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VibWlzc2lvbi1uYW1lXCI+e3N1Ym1pc3Npb24uZmlyc3ROYW1lICsgXCIgXCIgKyBzdWJtaXNzaW9uLmxhc3ROYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlrZXMgaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYWJlbFwiPntzdWJtaXNzaW9uLmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2xpZGU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG4vKiBSZXRyaWV2ZXMgc3VibWlzc2lvbihzKSBkYXRhIGZyb20gbW9uZ29kYiBkYXRhYmFzZSAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBkYkNvbm5lY3QoKVxuXG4gICAgLyogZmluZCBhbGwgdGhlIGRhdGEgaW4gb3VyIGRhdGFiYXNlICovXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3VibWlzc2lvbi5maW5kKHt9KVxuICAgIGNvbnN0IHN1Ym1pc3Npb24gPSByZXN1bHQubWFwKChkb2MpID0+IHtcbiAgICAgIGNvbnN0IHN1Ym1pc3Npb24gPSBkb2MudG9PYmplY3QoKVxuICAgICAgc3VibWlzc2lvbi5faWQgPSBzdWJtaXNzaW9uLl9pZC50b1N0cmluZygpXG4gICAgICByZXR1cm4gc3VibWlzc2lvblxuICAgIH0pXG5cbiAgICByZXR1cm4geyBwcm9wczogeyBzdWJtaXNzaW9uczogc3VibWlzc2lvbiB9IH1cbiAgfSBjYXRjaChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNsaWRlIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIlN1Ym1pc3Npb25zIiwic3VibWlzc2lvbnMiLCJnZXRJbWFnZXMiLCJpbWFnZSIsImltYWdlcyIsInNwbGl0Iiwic3Vic3RyaW5nIiwiaXRlbXMiLCJzZXRJdGVtcyIsImZpbHRlcmVkIiwiU2V0IiwibWFwIiwidmFsIiwiY2F0ZWdvcnkiLCJmaWx0ZXJJdGVtIiwiY3VyY2F0IiwibmV3SXRlbSIsImZpbHRlciIsIm5ld1ZhbCIsImRyaXZlTG9hZGVyIiwic3JjIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIlZhbCIsImlkIiwiZGlyZWN0aW9uIiwic3VibWlzc2lvbiIsImxvYWRlciIsImFsdCIsImxheW91dCIsImg1IiwidGl0bGUiLCJwIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJkZXNjIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/submissions.js\n");

/***/ })

});