"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./css/style.css":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./css/style.css ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --first-color: #7ed0d9;\\n  --second-color: #ffeb63;\\n}\\n\\n#nav {\\n  background-color: var(--first-color);\\n}\\n\\n.navbar-dark .navbar-nav .nav-link{\\n  color: var(--second-color) !important;\\n}\\n\\n\\nbody {\\n  background-color: var(--first-color);\\n  color: #000000;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\n.btn-outline-primary {\\n  color: var(--second-color) !important;\\n  border-color: var(--second-color) !important;\\n}\\n\\nheader {\\n  text-align: center;\\n}\\n\\np {\\n  line-height: 1.8;\\n}\\n\\nh1,\\nh2 {\\n  color: white;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\nh3 {\\n  color: var(--second-color);\\n  font-family: \\\"Georama\\\", sans-serif;\\n}\\n\\n.material-icons {\\n  vertical-align: middle;\\n}\\n\\nfooter {\\n  background-color: var(--second-color);\\n  bottom: 0;\\n  display: flex;\\n  flex-direction: row;\\n  height: 60px;\\n  width: 100%;\\n}\\n\\nfooter p {\\n  text-align: center;\\n  margin: 0;\\n}\\n\\nfooter a {\\n  color: white;\\n}\\n\\n.grid {\\n  margin-top: 70px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n/* Styles for Cards */\\n.card {\\n  display: inline-block;\\n  width: 400px;\\n  height: 350px;\\n  overflow: hidden;\\n  border: 1.25px solid rgb(233, 233, 233);\\n  border-radius: 16px;\\n  margin: 10px;\\n  transition: 0.5s all;\\n  --shadow: transparent;\\n  box-shadow: 0 0 10px 5px var(--shadow);\\n  position: relative;\\n  font-size: 100%;\\n}\\n\\n.card:hover {\\n  --shadow: rgba(53, 53, 53, 0.103);\\n  /* transform: rotateY(180deg) translate(20px, 20px);\\n  background: pink; */\\n}\\n\\n.card:hover .main-content {\\n  pointer-events: initial;\\n  opacity: 1;\\n}\\n\\n.card * {\\n  margin: 0;\\n}\\n\\n.card Image {\\n  width: 100%;\\n  height: 100%;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n}\\n\\n.main-content {\\n  padding: 25px;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 0;\\n  pointer-events: none;\\n  transition: 0.5s all;\\n}\\n\\n.owner {\\n  color: grey;\\n  font-size: 110%;\\n}\\n\\n.submission-name {\\n  font-weight: bold;\\n  font-size: 130%;\\n}\\n\\nh5.submission-name {\\n  color: white;\\n  position: absolute;\\n  left: 0;\\n  bottom: 0;\\n  padding: 10px;\\n  text-shadow: 0px 0px 4px black;\\n}\\n\\n.info ul {\\n  padding: 10px;\\n  padding-top: 0px;\\n  border-radius: 7px;\\n}\\n\\nli {\\n  list-style-type: none;\\n  margin: 0;\\n}\\n\\n.info {\\n  color: rgb(83, 83, 83);\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n.info.likes {\\n  margin-top: 25px;\\n}\\n\\n.label {\\n  font-weight: bold;\\n}\\n\\n.btn-container {\\n  text-align: right;\\n  padding: 10px;\\n  position: absolute;\\n  bottom: 10px;\\n  right: 10px;\\n}\\n\\n.btn {\\n  --accent: grey;\\n  cursor: pointer;\\n  background: transparent;\\n  border: 1.5px solid var(--accent);\\n  color: var(--accent);\\n  border-radius: 10px;\\n  padding: 10px 15px;\\n  font-size: 90%;\\n  letter-spacing: 1px;\\n  transition: 0.5s all;\\n  outline: none;\\n}\\n\\n.btn:hover {\\n  background: var(--accent);\\n  color: white;\\n}\\n\\n.edit.btn {\\n  --accent: green;\\n}\\n\\n.delete.btn {\\n  --accent: red;\\n  margin-left: 10px;\\n}\\n\\n.view.btn {\\n  --accent: blue;\\n  margin-left: 10px;\\n}\\n\\n/* Delete submission */\\n.submission-container {\\n  width: 100%;\\n}\\n\\n.confirmation-box.show {\\n  display: block;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://css/style.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qCAAqC;AACvC;;;AAGA;EACE,oCAAoC;EACpC,cAAc;EACd,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;EACrC,4CAA4C;AAC9C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,0BAA0B;EAC1B,kCAAkC;AACpC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qCAAqC;EACrC,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;;AAEA,qBAAqB;AACrB;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,uCAAuC;EACvC,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;EACrB,sCAAsC;EACtC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC;qBACmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAiB;KAAjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,UAAU;EACV,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,cAAc;EACd,eAAe;EACf,uBAAuB;EACvB,iCAAiC;EACjC,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA,sBAAsB;AACtB;EACE,WAAW;AACb;;AAEA;EACE,cAAc;AAChB\",\"sourcesContent\":[\"* {\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --first-color: #7ed0d9;\\n  --second-color: #ffeb63;\\n}\\n\\n#nav {\\n  background-color: var(--first-color);\\n}\\n\\n.navbar-dark .navbar-nav .nav-link{\\n  color: var(--second-color) !important;\\n}\\n\\n\\nbody {\\n  background-color: var(--first-color);\\n  color: #000000;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\n.btn-outline-primary {\\n  color: var(--second-color) !important;\\n  border-color: var(--second-color) !important;\\n}\\n\\nheader {\\n  text-align: center;\\n}\\n\\np {\\n  line-height: 1.8;\\n}\\n\\nh1,\\nh2 {\\n  color: white;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\nh3 {\\n  color: var(--second-color);\\n  font-family: \\\"Georama\\\", sans-serif;\\n}\\n\\n.material-icons {\\n  vertical-align: middle;\\n}\\n\\nfooter {\\n  background-color: var(--second-color);\\n  bottom: 0;\\n  display: flex;\\n  flex-direction: row;\\n  height: 60px;\\n  width: 100%;\\n}\\n\\nfooter p {\\n  text-align: center;\\n  margin: 0;\\n}\\n\\nfooter a {\\n  color: white;\\n}\\n\\n.grid {\\n  margin-top: 70px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n/* Styles for Cards */\\n.card {\\n  display: inline-block;\\n  width: 400px;\\n  height: 350px;\\n  overflow: hidden;\\n  border: 1.25px solid rgb(233, 233, 233);\\n  border-radius: 16px;\\n  margin: 10px;\\n  transition: 0.5s all;\\n  --shadow: transparent;\\n  box-shadow: 0 0 10px 5px var(--shadow);\\n  position: relative;\\n  font-size: 100%;\\n}\\n\\n.card:hover {\\n  --shadow: rgba(53, 53, 53, 0.103);\\n  /* transform: rotateY(180deg) translate(20px, 20px);\\n  background: pink; */\\n}\\n\\n.card:hover .main-content {\\n  pointer-events: initial;\\n  opacity: 1;\\n}\\n\\n.card * {\\n  margin: 0;\\n}\\n\\n.card Image {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n.main-content {\\n  padding: 25px;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 0;\\n  pointer-events: none;\\n  transition: 0.5s all;\\n}\\n\\n.owner {\\n  color: grey;\\n  font-size: 110%;\\n}\\n\\n.submission-name {\\n  font-weight: bold;\\n  font-size: 130%;\\n}\\n\\nh5.submission-name {\\n  color: white;\\n  position: absolute;\\n  left: 0;\\n  bottom: 0;\\n  padding: 10px;\\n  text-shadow: 0px 0px 4px black;\\n}\\n\\n.info ul {\\n  padding: 10px;\\n  padding-top: 0px;\\n  border-radius: 7px;\\n}\\n\\nli {\\n  list-style-type: none;\\n  margin: 0;\\n}\\n\\n.info {\\n  color: rgb(83, 83, 83);\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n.info.likes {\\n  margin-top: 25px;\\n}\\n\\n.label {\\n  font-weight: bold;\\n}\\n\\n.btn-container {\\n  text-align: right;\\n  padding: 10px;\\n  position: absolute;\\n  bottom: 10px;\\n  right: 10px;\\n}\\n\\n.btn {\\n  --accent: grey;\\n  cursor: pointer;\\n  background: transparent;\\n  border: 1.5px solid var(--accent);\\n  color: var(--accent);\\n  border-radius: 10px;\\n  padding: 10px 15px;\\n  font-size: 90%;\\n  letter-spacing: 1px;\\n  transition: 0.5s all;\\n  outline: none;\\n}\\n\\n.btn:hover {\\n  background: var(--accent);\\n  color: white;\\n}\\n\\n.edit.btn {\\n  --accent: green;\\n}\\n\\n.delete.btn {\\n  --accent: red;\\n  margin-left: 10px;\\n}\\n\\n.view.btn {\\n  --accent: blue;\\n  margin-left: 10px;\\n}\\n\\n/* Delete submission */\\n.submission-container {\\n  width: 100%;\\n}\\n\\n.confirmation-box.show {\\n  display: block;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vY3NzL3N0eWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLDJCQUEyQixHQUFHLFdBQVcsMkJBQTJCLDRCQUE0QixHQUFHLFVBQVUseUNBQXlDLEdBQUcsdUNBQXVDLDBDQUEwQyxHQUFHLFlBQVkseUNBQXlDLG1CQUFtQiw0Q0FBNEMsR0FBRywwQkFBMEIsMENBQTBDLGlEQUFpRCxHQUFHLFlBQVksdUJBQXVCLEdBQUcsT0FBTyxxQkFBcUIsR0FBRyxhQUFhLGlCQUFpQiw0Q0FBNEMsR0FBRyxRQUFRLCtCQUErQix5Q0FBeUMsR0FBRyxxQkFBcUIsMkJBQTJCLEdBQUcsWUFBWSwwQ0FBMEMsY0FBYyxrQkFBa0Isd0JBQXdCLGlCQUFpQixnQkFBZ0IsR0FBRyxjQUFjLHVCQUF1QixjQUFjLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyxXQUFXLHFCQUFxQixzQkFBc0IsdUJBQXVCLGtCQUFrQixvQkFBb0IsNEJBQTRCLEdBQUcsbUNBQW1DLDBCQUEwQixpQkFBaUIsa0JBQWtCLHFCQUFxQiw0Q0FBNEMsd0JBQXdCLGlCQUFpQix5QkFBeUIsMEJBQTBCLDJDQUEyQyx1QkFBdUIsb0JBQW9CLEdBQUcsaUJBQWlCLHNDQUFzQyx3REFBd0Qsc0JBQXNCLEtBQUssK0JBQStCLDRCQUE0QixlQUFlLEdBQUcsYUFBYSxjQUFjLEdBQUcsaUJBQWlCLGdCQUFnQixpQkFBaUIseUJBQXlCLHlCQUF5QixHQUFHLG1CQUFtQixrQkFBa0IsdUJBQXVCLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLGVBQWUseUJBQXlCLHlCQUF5QixHQUFHLFlBQVksZ0JBQWdCLG9CQUFvQixHQUFHLHNCQUFzQixzQkFBc0Isb0JBQW9CLEdBQUcsd0JBQXdCLGlCQUFpQix1QkFBdUIsWUFBWSxjQUFjLGtCQUFrQixtQ0FBbUMsR0FBRyxjQUFjLGtCQUFrQixxQkFBcUIsdUJBQXVCLEdBQUcsUUFBUSwwQkFBMEIsY0FBYyxHQUFHLFdBQVcsMkJBQTJCLHVCQUF1QixxQkFBcUIsR0FBRyxpQkFBaUIscUJBQXFCLEdBQUcsWUFBWSxzQkFBc0IsR0FBRyxvQkFBb0Isc0JBQXNCLGtCQUFrQix1QkFBdUIsaUJBQWlCLGdCQUFnQixHQUFHLFVBQVUsbUJBQW1CLG9CQUFvQiw0QkFBNEIsc0NBQXNDLHlCQUF5Qix3QkFBd0IsdUJBQXVCLG1CQUFtQix3QkFBd0IseUJBQXlCLGtCQUFrQixHQUFHLGdCQUFnQiw4QkFBOEIsaUJBQWlCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxpQkFBaUIsa0JBQWtCLHNCQUFzQixHQUFHLGVBQWUsbUJBQW1CLHNCQUFzQixHQUFHLG9EQUFvRCxnQkFBZ0IsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsT0FBTyw4RUFBOEUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLDZCQUE2QiwyQkFBMkIsR0FBRyxXQUFXLDJCQUEyQiw0QkFBNEIsR0FBRyxVQUFVLHlDQUF5QyxHQUFHLHVDQUF1QywwQ0FBMEMsR0FBRyxZQUFZLHlDQUF5QyxtQkFBbUIsNENBQTRDLEdBQUcsMEJBQTBCLDBDQUEwQyxpREFBaUQsR0FBRyxZQUFZLHVCQUF1QixHQUFHLE9BQU8scUJBQXFCLEdBQUcsYUFBYSxpQkFBaUIsNENBQTRDLEdBQUcsUUFBUSwrQkFBK0IseUNBQXlDLEdBQUcscUJBQXFCLDJCQUEyQixHQUFHLFlBQVksMENBQTBDLGNBQWMsa0JBQWtCLHdCQUF3QixpQkFBaUIsZ0JBQWdCLEdBQUcsY0FBYyx1QkFBdUIsY0FBYyxHQUFHLGNBQWMsaUJBQWlCLEdBQUcsV0FBVyxxQkFBcUIsc0JBQXNCLHVCQUF1QixrQkFBa0Isb0JBQW9CLDRCQUE0QixHQUFHLG1DQUFtQywwQkFBMEIsaUJBQWlCLGtCQUFrQixxQkFBcUIsNENBQTRDLHdCQUF3QixpQkFBaUIseUJBQXlCLDBCQUEwQiwyQ0FBMkMsdUJBQXVCLG9CQUFvQixHQUFHLGlCQUFpQixzQ0FBc0Msd0RBQXdELHNCQUFzQixLQUFLLCtCQUErQiw0QkFBNEIsZUFBZSxHQUFHLGFBQWEsY0FBYyxHQUFHLGlCQUFpQixnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLG1CQUFtQixrQkFBa0IsdUJBQXVCLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLGVBQWUseUJBQXlCLHlCQUF5QixHQUFHLFlBQVksZ0JBQWdCLG9CQUFvQixHQUFHLHNCQUFzQixzQkFBc0Isb0JBQW9CLEdBQUcsd0JBQXdCLGlCQUFpQix1QkFBdUIsWUFBWSxjQUFjLGtCQUFrQixtQ0FBbUMsR0FBRyxjQUFjLGtCQUFrQixxQkFBcUIsdUJBQXVCLEdBQUcsUUFBUSwwQkFBMEIsY0FBYyxHQUFHLFdBQVcsMkJBQTJCLHVCQUF1QixxQkFBcUIsR0FBRyxpQkFBaUIscUJBQXFCLEdBQUcsWUFBWSxzQkFBc0IsR0FBRyxvQkFBb0Isc0JBQXNCLGtCQUFrQix1QkFBdUIsaUJBQWlCLGdCQUFnQixHQUFHLFVBQVUsbUJBQW1CLG9CQUFvQiw0QkFBNEIsc0NBQXNDLHlCQUF5Qix3QkFBd0IsdUJBQXVCLG1CQUFtQix3QkFBd0IseUJBQXlCLGtCQUFrQixHQUFHLGdCQUFnQiw4QkFBOEIsaUJBQWlCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxpQkFBaUIsa0JBQWtCLHNCQUFzQixHQUFHLGVBQWUsbUJBQW1CLHNCQUFzQixHQUFHLG9EQUFvRCxnQkFBZ0IsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQzN2UTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2Nzcy9zdHlsZS5jc3M/NzI5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWZpcnN0LWNvbG9yOiAjN2VkMGQ5O1xcbiAgLS1zZWNvbmQtY29sb3I6ICNmZmViNjM7XFxufVxcblxcbiNuYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbn1cXG5cXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5re1xcbiAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCB7XFxuICBsaW5lLWhlaWdodDogMS44O1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMyB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2VvcmFtYVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgQ2FyZHMgKi9cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogMS4yNXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG4gIC0tc2hhZG93OiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCB2YXIoLS1zaGFkb3cpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICAtLXNoYWRvdzogcmdiYSg1MywgNTMsIDUzLCAwLjEwMyk7XFxuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGUoMjBweCwgMjBweCk7XFxuICBiYWNrZ3JvdW5kOiBwaW5rOyAqL1xcbn1cXG5cXG4uY2FyZDpob3ZlciAubWFpbi1jb250ZW50IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNhcmQgKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jYXJkIEltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XFxufVxcblxcbi5vd25lciB7XFxuICBjb2xvcjogZ3JleTtcXG4gIGZvbnQtc2l6ZTogMTEwJTtcXG59XFxuXFxuLnN1Ym1pc3Npb24tbmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTMwJTtcXG59XFxuXFxuaDUuc3VibWlzc2lvbi1uYW1lIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4IGJsYWNrO1xcbn1cXG5cXG4uaW5mbyB1bCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBjb2xvcjogcmdiKDgzLCA4MywgODMpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmluZm8ubGlrZXMge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEwcHg7XFxuICByaWdodDogMTBweDtcXG59XFxuXFxuLmJ0biB7XFxuICAtLWFjY2VudDogZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lZGl0LmJ0biB7XFxuICAtLWFjY2VudDogZ3JlZW47XFxufVxcblxcbi5kZWxldGUuYnRuIHtcXG4gIC0tYWNjZW50OiByZWQ7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnZpZXcuYnRuIHtcXG4gIC0tYWNjZW50OiBibHVlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi8qIERlbGV0ZSBzdWJtaXNzaW9uICovXFxuLnN1Ym1pc3Npb24tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uLWJveC5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7OztBQUdBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDO3FCQUNtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWZpcnN0LWNvbG9yOiAjN2VkMGQ5O1xcbiAgLS1zZWNvbmQtY29sb3I6ICNmZmViNjM7XFxufVxcblxcbiNuYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbn1cXG5cXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5re1xcbiAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCB7XFxuICBsaW5lLWhlaWdodDogMS44O1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMyB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2VvcmFtYVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgQ2FyZHMgKi9cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogMS4yNXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG4gIC0tc2hhZG93OiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCB2YXIoLS1zaGFkb3cpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICAtLXNoYWRvdzogcmdiYSg1MywgNTMsIDUzLCAwLjEwMyk7XFxuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGUoMjBweCwgMjBweCk7XFxuICBiYWNrZ3JvdW5kOiBwaW5rOyAqL1xcbn1cXG5cXG4uY2FyZDpob3ZlciAubWFpbi1jb250ZW50IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNhcmQgKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jYXJkIEltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMjVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG5cXG4ub3duZXIge1xcbiAgY29sb3I6IGdyZXk7XFxuICBmb250LXNpemU6IDExMCU7XFxufVxcblxcbi5zdWJtaXNzaW9uLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEzMCU7XFxufVxcblxcbmg1LnN1Ym1pc3Npb24tbmFtZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCBibGFjaztcXG59XFxuXFxuLmluZm8gdWwge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmluZm8ge1xcbiAgY29sb3I6IHJnYig4MywgODMsIDgzKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbmZvLmxpa2VzIHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5sYWJlbCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgLS1hY2NlbnQ6IGdyZXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWNjZW50KTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZWRpdC5idG4ge1xcbiAgLS1hY2NlbnQ6IGdyZWVuO1xcbn1cXG5cXG4uZGVsZXRlLmJ0biB7XFxuICAtLWFjY2VudDogcmVkO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi52aWV3LmJ0biB7XFxuICAtLWFjY2VudDogYmx1ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4vKiBEZWxldGUgc3VibWlzc2lvbiAqL1xcbi5zdWJtaXNzaW9uLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbmZpcm1hdGlvbi1ib3guc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./css/style.css\n");

/***/ })

});