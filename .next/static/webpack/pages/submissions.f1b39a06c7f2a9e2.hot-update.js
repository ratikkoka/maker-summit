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

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EmblaCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! embla-carousel-react */ \"./node_modules/embla-carousel-react/embla-carousel-react.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction EmblaCarousel(param1) {\n    var images = param1.images, id = param1.id;\n    var _this = this;\n    _s();\n    var ref = _slicedToArray((0,embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), 1), emblaRef = ref[0];\n    var driveLoader = function(param) {\n        var src = param.src;\n        return \"https://drive.google.com/\".concat(src);\n    };\n    var imageArray = _toConsumableArray(images);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"embla\",\n        ref: emblaRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"embla__container\",\n            children: imageArray.map(function(image, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"embla__slide\",\n                    loader: driveLoader,\n                    alt: \"Project Image\",\n                    layout: \"fill\",\n                    src: 'uc?' + image\n                }, id + \"img\" + index, false, {\n                    fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/components/Carousel.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/components/Carousel.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rkoka/Documents/NextJS/maker-summit/components/Carousel.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n_s(EmblaCarousel, \"BN2vR/vl7fsLhdJTsv9iP0ZFN38=\", false, function() {\n    return [\n        embla_carousel_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = EmblaCarousel;\nvar _c;\n$RefreshReg$(_c, \"EmblaCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUMwQjtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsUUFBUSxDQUFDRyxhQUFhLENBQUMsTUFBYyxFQUFFLENBQUM7UUFBZkMsTUFBTSxHQUFSLE1BQWMsQ0FBWkEsTUFBTSxFQUFFQyxFQUFFLEdBQVosTUFBYyxDQUFKQSxFQUFFOzs7SUFDaEQsR0FBSyxDQUFjSixHQUFrQixrQkFBbEJBLGdFQUFnQixRQUE1QkssUUFBUSxHQUFJTCxHQUFrQjtJQUVyQyxHQUFLLENBQUNNLFdBQVcsR0FBRyxRQUFRLFFBQUssQ0FBQztZQUFYQyxHQUFHLFNBQUhBLEdBQUc7UUFDeEIsTUFBTSxDQUFFLENBQXlCLDJCQUFNLE9BQUpBLEdBQUc7SUFDeEMsQ0FBQztJQUNELEdBQUssQ0FBQ0MsVUFBVSxzQkFBT0wsTUFBTTtJQUU3QixNQUFNLDZFQUNITSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFPO1FBQUNDLEdBQUcsRUFBRU4sUUFBUTs4RkFDakNJLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWtCO3NCQUM5QkYsVUFBVSxDQUFDSSxHQUFHLENBQUMsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxLQUFLLEVBQUssQ0FBQztnQkFDL0IsTUFBTSw2RUFDRFosbURBQUs7b0JBQ0ZTLFNBQVMsRUFBQyxDQUFjO29CQUN4QkssTUFBTSxFQUFFVCxXQUFXO29CQUNuQlUsR0FBRyxFQUFDLENBQWU7b0JBQ25CQyxNQUFNLEVBQUMsQ0FBTTtvQkFDYlYsR0FBRyxFQUFFLENBQUssT0FBR08sS0FBSzttQkFDYlYsRUFBRSxHQUFHLENBQUssT0FBR1MsS0FBSzs7Ozs7WUFHbkMsQ0FBQzs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0dBMUJ1QlgsYUFBYTs7UUFDaEJGLDREQUFnQjs7O0tBRGJFLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJvdXNlbC5qcz8yN2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VFbWJsYUNhcm91c2VsIGZyb20gJ2VtYmxhLWNhcm91c2VsLXJlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbWJsYUNhcm91c2VsKHsgaW1hZ2VzLCBpZCB9KSB7XG4gIGNvbnN0IFtlbWJsYVJlZl0gPSB1c2VFbWJsYUNhcm91c2VsKClcblxuICBjb25zdCBkcml2ZUxvYWRlciA9ICh7IHNyYyB9KSA9PiB7XG4gICAgcmV0dXJuIGBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vJHtzcmN9YFxuICB9XG4gIGNvbnN0IGltYWdlQXJyYXkgPSBbLi4uaW1hZ2VzXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlbWJsYVwiIHJlZj17ZW1ibGFSZWZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJsYV9fY29udGFpbmVyXCI+XG4gICAgICAgIHtpbWFnZUFycmF5Lm1hcCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW1ibGFfX3NsaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXtkcml2ZUxvYWRlcn0gXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2plY3QgSW1hZ2VcIiBcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PSdmaWxsJyBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXsndWM/JyArIGltYWdlfSBcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZCArIFwiaW1nXCIgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJJbWFnZSIsIkVtYmxhQ2Fyb3VzZWwiLCJpbWFnZXMiLCJpZCIsImVtYmxhUmVmIiwiZHJpdmVMb2FkZXIiLCJzcmMiLCJpbWFnZUFycmF5IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwibWFwIiwiaW5kZXgiLCJpbWFnZSIsImxvYWRlciIsImFsdCIsImxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.js\n");

/***/ })

});