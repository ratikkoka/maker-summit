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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --first-color: #7ed0d9;\\n  --second-color: #ffeb63;\\n}\\n\\n#nav {\\n  background-color: var(--first-color);\\n}\\n\\n.navbar-dark .navbar-nav .nav-link{\\n  color: var(--second-color) !important;\\n}\\n\\n\\nbody {\\n  background-color: var(--first-color);\\n  color: #000000;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\n.btn-outline-primary {\\n  color: var(--second-color) !important;\\n  border-color: var(--second-color) !important;\\n}\\n\\n.btn-outline-primary:hover {\\n  color: var(--first-color) !important;\\n  background-color: var(--second-color) !important;\\n}\\n\\nheader {\\n  text-align: center;\\n}\\n\\np {\\n  line-height: 1.8;\\n}\\n\\nh1 {\\n  font-size: 12vw !important;\\n}\\n\\nh1,\\nh2 {\\n  color: white;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\nh3 {\\n  color: var(--second-color);\\n}\\n\\n.material-icons {\\n  vertical-align: middle;\\n}\\n\\nfooter {\\n  background-color: var(--second-color);\\n  bottom: 0;\\n  display: flex;\\n  flex-direction: row;\\n  height: 60px;\\n  width: 100%;\\n}\\n\\nfooter p {\\n  text-align: center;\\n  margin: 0;\\n}\\n\\nfooter a {\\n  color: white;\\n}\\n\\n.welcome {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 50%;\\n}\\n\\n.filters {\\n  display: flex;\\n  margin-top: 80px;\\n}\\n\\n.grid {\\n  margin-top: 10px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n/* Styles for Cards */\\n.card {\\n  display: inline-block;\\n  width: 400px;\\n  height: 350px;\\n  overflow: hidden;\\n  border: 1.25px solid rgb(233, 233, 233);\\n  border-radius: 16px;\\n  margin: 10px;\\n  transition: 0.5s all;\\n  --shadow: transparent;\\n  box-shadow: 0 0 10px 5px var(--shadow);\\n  position: relative;\\n  font-size: 100%;\\n}\\n\\n.card:hover {\\n  --shadow: rgba(53, 53, 53, 0.103);\\n  /* transform: rotateY(180deg) translate(20px, 20px);\\n  background: pink; */\\n}\\n\\n.card:hover .main-content {\\n  pointer-events: initial;\\n  opacity: 1;\\n}\\n\\n.card * {\\n  margin: 0;\\n}\\n\\n.card Image {\\n  width: 100%;\\n  height: 100%;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n}\\n\\n.main-content {\\n  padding: 25px;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 0;\\n  pointer-events: none;\\n  transition: 0.5s all;\\n}\\n\\n.owner {\\n  color: grey;\\n  font-size: 110%;\\n}\\n\\n.submission-name {\\n  font-weight: bold;\\n  font-size: 130%;\\n}\\n\\nh5.submission-name {\\n  color: white;\\n  position: absolute;\\n  left: 0;\\n  bottom: 0;\\n  padding: 10px;\\n  text-shadow: 0px 0px 4px black;\\n}\\n\\n.info ul {\\n  padding: 10px;\\n  padding-top: 0px;\\n  border-radius: 7px;\\n}\\n\\nli {\\n  list-style-type: none;\\n  margin: 0;\\n}\\n\\n.info {\\n  color: rgb(83, 83, 83);\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n.info.likes {\\n  margin-top: 25px;\\n}\\n\\n.label {\\n  font-weight: bold;\\n}\\n\\n.btn-container {\\n  text-align: right;\\n  padding: 10px;\\n  position: absolute;\\n  bottom: 10px;\\n  right: 10px;\\n}\\n\\n.btn {\\n  --accent: grey;\\n  cursor: pointer;\\n  background: transparent;\\n  border: 1.5px solid var(--accent);\\n  color: var(--accent);\\n  border-radius: 10px;\\n  padding: 10px 15px;\\n  font-size: 90%;\\n  letter-spacing: 1px;\\n  transition: 0.5s all;\\n  outline: none;\\n}\\n\\n.btn:hover {\\n  background: var(--accent);\\n  color: white;\\n}\\n\\n.edit.btn {\\n  --accent: green;\\n}\\n\\n.delete.btn {\\n  --accent: red;\\n  margin-left: 10px;\\n}\\n\\n.view.btn {\\n  --accent: blue;\\n  margin-left: 10px;\\n}\\n\\n/* Delete submission */\\n.submission-container {\\n  width: 100%;\\n}\\n\\n.confirmation-box.show {\\n  display: block;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://css/style.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qCAAqC;AACvC;;;AAGA;EACE,oCAAoC;EACpC,cAAc;EACd,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;EACrC,4CAA4C;AAC9C;;AAEA;EACE,oCAAoC;EACpC,gDAAgD;AAClD;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;;EAEE,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qCAAqC;EACrC,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;;AAEA,qBAAqB;AACrB;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,uCAAuC;EACvC,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;EACrB,sCAAsC;EACtC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC;qBACmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAiB;KAAjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,UAAU;EACV,oBAAoB;EACpB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,cAAc;EACd,eAAe;EACf,uBAAuB;EACvB,iCAAiC;EACjC,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA,sBAAsB;AACtB;EACE,WAAW;AACb;;AAEA;EACE,cAAc;AAChB\",\"sourcesContent\":[\"* {\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --first-color: #7ed0d9;\\n  --second-color: #ffeb63;\\n}\\n\\n#nav {\\n  background-color: var(--first-color);\\n}\\n\\n.navbar-dark .navbar-nav .nav-link{\\n  color: var(--second-color) !important;\\n}\\n\\n\\nbody {\\n  background-color: var(--first-color);\\n  color: #000000;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\n.btn-outline-primary {\\n  color: var(--second-color) !important;\\n  border-color: var(--second-color) !important;\\n}\\n\\n.btn-outline-primary:hover {\\n  color: var(--first-color) !important;\\n  background-color: var(--second-color) !important;\\n}\\n\\nheader {\\n  text-align: center;\\n}\\n\\np {\\n  line-height: 1.8;\\n}\\n\\nh1 {\\n  font-size: 12vw !important;\\n}\\n\\nh1,\\nh2 {\\n  color: white;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\nh3 {\\n  color: var(--second-color);\\n}\\n\\n.material-icons {\\n  vertical-align: middle;\\n}\\n\\nfooter {\\n  background-color: var(--second-color);\\n  bottom: 0;\\n  display: flex;\\n  flex-direction: row;\\n  height: 60px;\\n  width: 100%;\\n}\\n\\nfooter p {\\n  text-align: center;\\n  margin: 0;\\n}\\n\\nfooter a {\\n  color: white;\\n}\\n\\n.welcome {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 50%;\\n}\\n\\n.filters {\\n  display: flex;\\n  margin-top: 80px;\\n}\\n\\n.grid {\\n  margin-top: 10px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n/* Styles for Cards */\\n.card {\\n  display: inline-block;\\n  width: 400px;\\n  height: 350px;\\n  overflow: hidden;\\n  border: 1.25px solid rgb(233, 233, 233);\\n  border-radius: 16px;\\n  margin: 10px;\\n  transition: 0.5s all;\\n  --shadow: transparent;\\n  box-shadow: 0 0 10px 5px var(--shadow);\\n  position: relative;\\n  font-size: 100%;\\n}\\n\\n.card:hover {\\n  --shadow: rgba(53, 53, 53, 0.103);\\n  /* transform: rotateY(180deg) translate(20px, 20px);\\n  background: pink; */\\n}\\n\\n.card:hover .main-content {\\n  pointer-events: initial;\\n  opacity: 1;\\n}\\n\\n.card * {\\n  margin: 0;\\n}\\n\\n.card Image {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n.main-content {\\n  padding: 25px;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 0;\\n  pointer-events: none;\\n  transition: 0.5s all;\\n}\\n\\n.owner {\\n  color: grey;\\n  font-size: 110%;\\n}\\n\\n.submission-name {\\n  font-weight: bold;\\n  font-size: 130%;\\n}\\n\\nh5.submission-name {\\n  color: white;\\n  position: absolute;\\n  left: 0;\\n  bottom: 0;\\n  padding: 10px;\\n  text-shadow: 0px 0px 4px black;\\n}\\n\\n.info ul {\\n  padding: 10px;\\n  padding-top: 0px;\\n  border-radius: 7px;\\n}\\n\\nli {\\n  list-style-type: none;\\n  margin: 0;\\n}\\n\\n.info {\\n  color: rgb(83, 83, 83);\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n.info.likes {\\n  margin-top: 25px;\\n}\\n\\n.label {\\n  font-weight: bold;\\n}\\n\\n.btn-container {\\n  text-align: right;\\n  padding: 10px;\\n  position: absolute;\\n  bottom: 10px;\\n  right: 10px;\\n}\\n\\n.btn {\\n  --accent: grey;\\n  cursor: pointer;\\n  background: transparent;\\n  border: 1.5px solid var(--accent);\\n  color: var(--accent);\\n  border-radius: 10px;\\n  padding: 10px 15px;\\n  font-size: 90%;\\n  letter-spacing: 1px;\\n  transition: 0.5s all;\\n  outline: none;\\n}\\n\\n.btn:hover {\\n  background: var(--accent);\\n  color: white;\\n}\\n\\n.edit.btn {\\n  --accent: green;\\n}\\n\\n.delete.btn {\\n  --accent: red;\\n  margin-left: 10px;\\n}\\n\\n.view.btn {\\n  --accent: blue;\\n  margin-left: 10px;\\n}\\n\\n/* Delete submission */\\n.submission-container {\\n  width: 100%;\\n}\\n\\n.confirmation-box.show {\\n  display: block;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vY3NzL3N0eWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLDJCQUEyQixHQUFHLFdBQVcsMkJBQTJCLDRCQUE0QixHQUFHLFVBQVUseUNBQXlDLEdBQUcsdUNBQXVDLDBDQUEwQyxHQUFHLFlBQVkseUNBQXlDLG1CQUFtQiw0Q0FBNEMsR0FBRywwQkFBMEIsMENBQTBDLGlEQUFpRCxHQUFHLGdDQUFnQyx5Q0FBeUMscURBQXFELEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxPQUFPLHFCQUFxQixHQUFHLFFBQVEsK0JBQStCLEdBQUcsYUFBYSxpQkFBaUIsNENBQTRDLEdBQUcsUUFBUSwrQkFBK0IsR0FBRyxxQkFBcUIsMkJBQTJCLEdBQUcsWUFBWSwwQ0FBMEMsY0FBYyxrQkFBa0Isd0JBQXdCLGlCQUFpQixnQkFBZ0IsR0FBRyxjQUFjLHVCQUF1QixjQUFjLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixlQUFlLEdBQUcsY0FBYyxrQkFBa0IscUJBQXFCLEdBQUcsV0FBVyxxQkFBcUIsc0JBQXNCLHVCQUF1QixrQkFBa0Isb0JBQW9CLDRCQUE0QixHQUFHLG1DQUFtQywwQkFBMEIsaUJBQWlCLGtCQUFrQixxQkFBcUIsNENBQTRDLHdCQUF3QixpQkFBaUIseUJBQXlCLDBCQUEwQiwyQ0FBMkMsdUJBQXVCLG9CQUFvQixHQUFHLGlCQUFp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QUFvQiw0QkFBNEIsc0NBQXNDLHlCQUF5Qix3QkFBd0IsdUJBQXVCLG1CQUFtQix3QkFBd0IseUJBQXlCLGtCQUFrQixHQUFHLGdCQUFnQiw4QkFBOEIsaUJBQWlCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxpQkFBaUIsa0JBQWtCLHNCQUFzQixHQUFHLGVBQWUsbUJBQW1CLHNCQUFzQixHQUFHLG9EQUFvRCxnQkFBZ0IsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ3pnUztBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2Nzcy9zdHlsZS5jc3M/NzI5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWZpcnN0LWNvbG9yOiAjN2VkMGQ5O1xcbiAgLS1zZWNvbmQtY29sb3I6ICNmZmViNjM7XFxufVxcblxcbiNuYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbn1cXG5cXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5re1xcbiAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcik7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKSAhaW1wb3J0YW50O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5wIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMTJ2dyAhaW1wb3J0YW50O1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMyB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi53ZWxjb21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmZpbHRlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxufVxcblxcbi5ncmlkIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogU3R5bGVzIGZvciBDYXJkcyAqL1xcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiAxLjI1cHggc29saWQgcmdiKDIzMywgMjMzLCAyMzMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbiAgLS1zaGFkb3c6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHZhcigtLXNoYWRvdyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbi5jYXJkOmhvdmVyIHtcXG4gIC0tc2hhZG93OiByZ2JhKDUzLCA1MywgNTMsIDAuMTAzKTtcXG4gIC8qIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcXG4gIGJhY2tncm91bmQ6IHBpbms7ICovXFxufVxcblxcbi5jYXJkOmhvdmVyIC5tYWluLWNvbnRlbnQge1xcbiAgcG9pbnRlci1ldmVudHM6IGluaXRpYWw7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY2FyZCAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNhcmQgSW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG59XFxuXFxuLm93bmVyIHtcXG4gIGNvbG9yOiBncmV5O1xcbiAgZm9udC1zaXplOiAxMTAlO1xcbn1cXG5cXG4uc3VibWlzc2lvbi1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxMzAlO1xcbn1cXG5cXG5oNS5zdWJtaXNzaW9uLW5hbWUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggYmxhY2s7XFxufVxcblxcbi5pbmZvIHVsIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5pbmZvIHtcXG4gIGNvbG9yOiByZ2IoODMsIDgzLCA4Myk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW5mby5saWtlcyB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIC0tYWNjZW50OiBncmV5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBmb250LXNpemU6IDkwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVkaXQuYnRuIHtcXG4gIC0tYWNjZW50OiBncmVlbjtcXG59XFxuXFxuLmRlbGV0ZS5idG4ge1xcbiAgLS1hY2NlbnQ6IHJlZDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udmlldy5idG4ge1xcbiAgLS1hY2NlbnQ6IGJsdWU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLyogRGVsZXRlIHN1Ym1pc3Npb24gKi9cXG4uc3VibWlzc2lvbi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb25maXJtYXRpb24tYm94LnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7O0FBR0E7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQztxQkFDbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1maXJzdC1jb2xvcjogIzdlZDBkOTtcXG4gIC0tc2Vjb25kLWNvbG9yOiAjZmZlYjYzO1xcbn1cXG5cXG4jbmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpcnN0LWNvbG9yKTtcXG59XFxuXFxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGlua3tcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlyc3QtY29sb3IpO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1maXJzdC1jb2xvcikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcikgIWltcG9ydGFudDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxucCB7XFxuICBsaW5lLWhlaWdodDogMS44O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEydncgIWltcG9ydGFudDtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDMge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5maWx0ZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgQ2FyZHMgKi9cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogMS4yNXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG4gIC0tc2hhZG93OiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCB2YXIoLS1zaGFkb3cpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICAtLXNoYWRvdzogcmdiYSg1MywgNTMsIDUzLCAwLjEwMyk7XFxuICAvKiB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGUoMjBweCwgMjBweCk7XFxuICBiYWNrZ3JvdW5kOiBwaW5rOyAqL1xcbn1cXG5cXG4uY2FyZDpob3ZlciAubWFpbi1jb250ZW50IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNhcmQgKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jYXJkIEltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMjVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG5cXG4ub3duZXIge1xcbiAgY29sb3I6IGdyZXk7XFxuICBmb250LXNpemU6IDExMCU7XFxufVxcblxcbi5zdWJtaXNzaW9uLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEzMCU7XFxufVxcblxcbmg1LnN1Ym1pc3Npb24tbmFtZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCBibGFjaztcXG59XFxuXFxuLmluZm8gdWwge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmluZm8ge1xcbiAgY29sb3I6IHJnYig4MywgODMsIDgzKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5pbmZvLmxpa2VzIHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi5sYWJlbCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5idG4ge1xcbiAgLS1hY2NlbnQ6IGdyZXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYWNjZW50KTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZWRpdC5idG4ge1xcbiAgLS1hY2NlbnQ6IGdyZWVuO1xcbn1cXG5cXG4uZGVsZXRlLmJ0biB7XFxuICAtLWFjY2VudDogcmVkO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi52aWV3LmJ0biB7XFxuICAtLWFjY2VudDogYmx1ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4vKiBEZWxldGUgc3VibWlzc2lvbiAqL1xcbi5zdWJtaXNzaW9uLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbmZpcm1hdGlvbi1ib3guc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./css/style.css\n");

/***/ })

});