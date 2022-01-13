/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./alegreyasans/AlegreyaSans-Regular.ttf */ "./src/alegreyasans/AlegreyaSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./alegreyasans/AlegreyaSans-Bold.ttf */ "./src/alegreyasans/AlegreyaSans-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./alegreyasans/AlegreyaSans-Light.ttf */ "./src/alegreyasans/AlegreyaSans-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./alegreyasans/AlegreyaSans-Thin.ttf */ "./src/alegreyasans/AlegreyaSans-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./alegreyasans/AlegreyaSans-Black.ttf */ "./src/alegreyasans/AlegreyaSans-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* COLOR PALETTE */\n:root {\n    --dark_blue: #065b91CC;\n    --light_blue: #44acd3AA;\n    --lighter_blue: #86c2cc;\n    --brown: #b68669;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: bold;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n    font-weight: 300;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype');\n    font-weight: 100;\n    font-style:normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype');\n    font-weight: 900;\n    font-style:normal;\n}\nhtml{\n    height: 100%;\n}\nbody{\n    height: 100%;\n    margin: 0;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-sizing: border-box;\n    color: var(--lighter_blue);\n    background: var(--lighter_blue);\n    font-family: 'Alegreya Sans';\n}\ndiv{\n    /* display: flex; */\n}\n#header{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n    background-color: white;\n    margin: 0;\n    height: 68px;\n}\nh1 {\n    display: flex;\n    padding-top: 3px;\n    /* padding-right: 8px; */\n    margin: 0;\n    font-weight: 900;\n    text-transform: uppercase;\n    font-size: 60px;\n}\n#tabs{\n    display: flex;\n    flex-direction: column;\n    margin-top: 153px;\n    margin-left: 60px;\n    margin-right: 14px;\n    justify-content: flex-end;\n    /* align-items: flex-start; */\n    gap: 10px;\n    flex-grow: 1;\n}\nbutton{\n    border:none;\n    background-color: white;\n    color: var(--lighter_blue);\n    font-family: 'Alegreya Sans';\n    font-weight: 500;\n    text-transform: uppercase;\n    height: 48px;\n    font-size: 20px;\n    padding: 14px;\n    border: 2px solid var(--lighter_blue);\n    border-bottom: none;\n};\n#left{\n    display:flex;\n}\n#content{\n    display: flex;\n    justify-content: flex-start;\n    gap: 2px;\n    /* flex: 1; */\n}\n.container{\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    border-top: solid 2px var(--lighter_blue);\n    max-width: 580px;\n    min-width: 200px;\n    gap: 20px;\n    height: 270px;\n    padding: 60px 14px;\n    padding: 0px 1px;\n    font-size: large;\n    color: white;\n\n}\n#menu{\n    display:flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    gap: 20px;\n    margin-top: 24px;\n}\n.menuItem{\n    font-weight: 300;\n}\n.menuCategory{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    font-weight: 600;\n    width: 200px;\n}\n.menuItem{\n    display: flex;\n    justify-content: space-between;\n    font-weight: light;\n}\n.food_pic{\n    display:flex;\n    height:144%;\n    /* width: auto; */\n    flex-grow: 0;\n    /* margin:0; */\n}\n\n\n.image_container{\n    display: flex;\n    margin: 14px;\n    margin-top: 34px;\n    gap: 2%;\n    flex-wrap: wrap;\n}\n.small_food_pic{\n    display:flex;\n    flex: 1;\n    width: 22%;\n    height: 22%;\n}\n.home_text, .catering{\n    display: flex;\n    margin: 14px;\n}\n\n#footer{\n    display:flex;\n    flex-grow:1;\n    color: white;\n    font-size: small;\n    justify-content: space-between;\n    max-width: 580px;\n    padding: 40px 440px;\n    gap: 30px;\n}\n.address{\n    margin: 10px;\n    padding-right: 230px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;IACI,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,4BAA4B;IAC5B,+DAAsE;IACtE,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,+DAAmE;IACnE,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,+DAAoE;IACpE,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,+DAAmE;IACnE,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,4BAA4B;IAC5B,+DAAoE;IACpE,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,SAAS;IACT,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;IAC9B,sBAAsB;IACtB,0BAA0B;IAC1B,+BAA+B;IAC/B,4BAA4B;AAChC;AACA;IACI,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;IACrB,uBAAuB;IACvB,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,wBAAwB;IACxB,SAAS;IACT,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,6BAA6B;IAC7B,SAAS;IACT,YAAY;AAChB;AACA;IACI,WAAW;IACX,uBAAuB;IACvB,0BAA0B;IAC1B,4BAA4B;IAC5B,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,qCAAqC;IACrC,mBAAmB;AACvB,CAAA;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,QAAQ;IACR,aAAa;AACjB;AACA;IACI,aAAa;IACb,OAAO;IACP,sBAAsB;IACtB,yCAAyC;IACzC,gBAAgB;IAChB,gBAAgB;IAChB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;;AAEhB;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ,cAAc;AAClB;;;AAGA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,OAAO;IACP,eAAe;AACnB;AACA;IACI,YAAY;IACZ,OAAO;IACP,UAAU;IACV,WAAW;AACf;AACA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,YAAY;IACZ,oBAAoB;AACxB","sourcesContent":["/* COLOR PALETTE */\n:root {\n    --dark_blue: #065b91CC;\n    --light_blue: #44acd3AA;\n    --lighter_blue: #86c2cc;\n    --brown: #b68669;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url('./alegreyasans/AlegreyaSans-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url('./alegreyasans/AlegreyaSans-Bold.ttf') format('truetype');\n    font-weight: bold;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url('./alegreyasans/AlegreyaSans-Light.ttf') format('truetype');\n    font-weight: 300;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url('./alegreyasans/AlegreyaSans-Thin.ttf') format('truetype');\n    font-weight: 100;\n    font-style:normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url('./alegreyasans/AlegreyaSans-Black.ttf') format('truetype');\n    font-weight: 900;\n    font-style:normal;\n}\nhtml{\n    height: 100%;\n}\nbody{\n    height: 100%;\n    margin: 0;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-sizing: border-box;\n    color: var(--lighter_blue);\n    background: var(--lighter_blue);\n    font-family: 'Alegreya Sans';\n}\ndiv{\n    /* display: flex; */\n}\n#header{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n    background-color: white;\n    margin: 0;\n    height: 68px;\n}\nh1 {\n    display: flex;\n    padding-top: 3px;\n    /* padding-right: 8px; */\n    margin: 0;\n    font-weight: 900;\n    text-transform: uppercase;\n    font-size: 60px;\n}\n#tabs{\n    display: flex;\n    flex-direction: column;\n    margin-top: 153px;\n    margin-left: 60px;\n    margin-right: 14px;\n    justify-content: flex-end;\n    /* align-items: flex-start; */\n    gap: 10px;\n    flex-grow: 1;\n}\nbutton{\n    border:none;\n    background-color: white;\n    color: var(--lighter_blue);\n    font-family: 'Alegreya Sans';\n    font-weight: 500;\n    text-transform: uppercase;\n    height: 48px;\n    font-size: 20px;\n    padding: 14px;\n    border: 2px solid var(--lighter_blue);\n    border-bottom: none;\n};\n#left{\n    display:flex;\n}\n#content{\n    display: flex;\n    justify-content: flex-start;\n    gap: 2px;\n    /* flex: 1; */\n}\n.container{\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    border-top: solid 2px var(--lighter_blue);\n    max-width: 580px;\n    min-width: 200px;\n    gap: 20px;\n    height: 270px;\n    padding: 60px 14px;\n    padding: 0px 1px;\n    font-size: large;\n    color: white;\n\n}\n#menu{\n    display:flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    gap: 20px;\n    margin-top: 24px;\n}\n.menuItem{\n    font-weight: 300;\n}\n.menuCategory{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    font-weight: 600;\n    width: 200px;\n}\n.menuItem{\n    display: flex;\n    justify-content: space-between;\n    font-weight: light;\n}\n.food_pic{\n    display:flex;\n    height:144%;\n    /* width: auto; */\n    flex-grow: 0;\n    /* margin:0; */\n}\n\n\n.image_container{\n    display: flex;\n    margin: 14px;\n    margin-top: 34px;\n    gap: 2%;\n    flex-wrap: wrap;\n}\n.small_food_pic{\n    display:flex;\n    flex: 1;\n    width: 22%;\n    height: 22%;\n}\n.home_text, .catering{\n    display: flex;\n    margin: 14px;\n}\n\n#footer{\n    display:flex;\n    flex-grow:1;\n    color: white;\n    font-size: small;\n    justify-content: space-between;\n    max-width: 580px;\n    padding: 40px 440px;\n    gap: 30px;\n}\n.address{\n    margin: 10px;\n    padding-right: 230px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactTab": () => (/* binding */ contactTab)
/* harmony export */ });
/* harmony import */ var _images_falafel_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/falafel.jpg */ "./src/images/falafel.jpg");
/* harmony import */ var _images_lentil_soup_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/lentil_soup.jpg */ "./src/images/lentil_soup.jpg");
/* harmony import */ var _images_baklava_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/baklava.jpg */ "./src/images/baklava.jpg");

// import drinks from './images/laziza.jpg';



const contactTab = () => {
    let container = document.createElement('div');
    container.setAttribute('class','container');
    let text_div = document.createElement('div');
    //could not figure out how to get the line break to work below
    text_div.innerHTML = `Order via Seamless or Doordash,
     or by calling us at 212-999-9999`;
    text_div.setAttribute('class','home_text');
    container.appendChild(text_div);

    let cateringText = document.createElement('div');
    cateringText.textContent = `We also cater events big and small. Get in touch with the 
    details about your event and we'll do our best to accommodate your desired date 
    and any requests you may have to make your celebration memorable.`
    cateringText.setAttribute('class','catering');
    container.appendChild(cateringText);
    
    
     //adding images
     let image_container = document.createElement('div');
     image_container.setAttribute('class','image_container')
     let addPicture = (importedImg) => {
        const image = new Image();
        image.src = importedImg;
        let image_div = document.createElement('div');
        image_div.appendChild(image);
        image_div.setAttribute('class','small_food_pic');
        image_container.appendChild(image_div);
     }
     let images = [_images_falafel_jpg__WEBPACK_IMPORTED_MODULE_0__,_images_lentil_soup_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_baklava_jpg__WEBPACK_IMPORTED_MODULE_2__];
     for (let image of images){
         addPicture(image)
     }
     container.appendChild(image_container);
     content.appendChild(container);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTab": () => (/* binding */ menuTab)
/* harmony export */ });
const menuTab = () => {
    let container = document.createElement('div');
    container.setAttribute('class','container');
    let menu = document.createElement('div');
    menu.setAttribute('id','menu')

    //adding the food categories to the DOM
    let categories = ['Sandwiches', 'Salads', 'Soup','Drinks','Desserts']
    for (let category of categories) {
        let newCategory = document.createElement('div');
        newCategory.setAttribute('class','menuCategory');
        newCategory.setAttribute('id',category);
        newCategory.textContent = category;
        menu.appendChild(newCategory);
    }
    container.appendChild(menu);
    content.appendChild(container);
    
    //All the food items offered
    let SandwichesList = [['Falafel', 5.75],['Chicken Shawarma',8.50],['Beef Shawarma',8.50],
    ['Kofta',8.50],['Chicken Kebab', 8.50],['Burger', 7.50],['Chicken Burger', 7.50],
    ['Veggie Burger', 6.50],['Ful (Fava Beans)',5.75]];
    let SaladsList = [['Greek Salad', 7.99],['Hummus Salad',7.00],['Yogurt Salad',5.99],
    ['Coleslaw',6.00],['Zaad Salad', 6.99],['Baba Ghannouj', 7.00],['Chicken Salad', 9.99]];
    let DrinksList = [['Soda',1.00],['Mint Tea',2.00]] 
    let DessertsList = [['Baklava',2.00],['Rice Pudding',3.00]];
    let SoupList = [['Soup of the Day',5.75]];

    //translating the food items to a div on the DOM via a factory function
    const menuItemFactory = (itemName,price) => {
        let newItem = document.createElement('div');
        newItem.setAttribute('class','menuItem');
        let nameDiv = document.createElement('div');
        nameDiv.textContent = itemName;
        let priceDiv = document.createElement('div');
        priceDiv.textContent=price;
        newItem.appendChild(nameDiv);
        newItem.appendChild(priceDiv)
        return newItem
    }
    let categoryList = [SandwichesList,SaladsList,SoupList,DrinksList,DessertsList]
    let count = 0
    for (let category of categories) {
        let foodContainer = document.querySelector(`#${category}`);
        for (let item of categoryList[count]){
            let newItem = menuItemFactory(item[0],item[1]);
            foodContainer.appendChild(newItem);
        }
        count +=1;
    }}



/***/ }),

/***/ "./src/pageRender.js":
/*!***************************!*\
  !*** ./src/pageRender.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon.png */ "./src/images/icon.png");

const renderPage = () => {
    //Header: Name + top navigation buttons
    let header = document.querySelector('#header');
    let zaad = document.createElement('h1');
    zaad.textContent = 'Zaad';
    header.appendChild(zaad);
    let buttons = ['Welcome','Menu','Contact'];
    let tabs = document.createElement('div');
    tabs.setAttribute('id','tabs');
    for (let button of buttons) {
        let btn = document.createElement('button');
        btn.textContent = button;
        btn.setAttribute('class', 'navigationButton');
        tabs.appendChild(btn);
    }
    header.appendChild(tabs);

    //Restaurant icon
    let content = document.querySelector('#content');
    let holder = document.createElement('div');
    const myIcon = new Image();
    myIcon.src = _images_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    myIcon.style.width = '229px';
    holder.setAttribute('id','left');
    holder.appendChild(myIcon)
    content.appendChild(holder);

    //Footer
    let footer = document.querySelector('#footer');
    let address = document.createElement('div')
    address.textContent = `963 Amsterdam Ave, New York, NY 10025`;
    footer.appendChild(address);
    let number = document.createElement('div');
    number.textContent = `212-999-9999`;
    footer.appendChild(number);
}



/***/ }),

/***/ "./src/welcome.js":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "welcomeTab": () => (/* binding */ welcomeTab)
/* harmony export */ });
/* harmony import */ var _images_chicken_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chicken.png */ "./src/images/chicken.png");
//welcome tab module to be imported
// import chickenR from './images/BW/chicken.jpg';


function welcomeTab() {
    let container = document.createElement('div');
    container.setAttribute('class','container');

    //adding an image
    const chicken = new Image();
    chicken.src = _images_chicken_png__WEBPACK_IMPORTED_MODULE_0__;
    let image_div = document.createElement('div');
    image_div.appendChild(chicken);
    image_div.setAttribute('class','food_pic')

    //adding text
    let text_div = document.createElement('div');
    text_div.setAttribute('class','home_text')
    text_div.textContent = `With some of the most delicious combinations of ingredients, Zaad has something for everyone to enjoy.
    Loved by locals and traveling foodies alike, now is the perfect time for you to join us!`
    container.appendChild(image_div);
    container.appendChild(text_div);
    content.appendChild(container)
}



/***/ }),

/***/ "./src/alegreyasans/AlegreyaSans-Black.ttf":
/*!*************************************************!*\
  !*** ./src/alegreyasans/AlegreyaSans-Black.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33c08e13f2be0dd0ca9c.ttf";

/***/ }),

/***/ "./src/alegreyasans/AlegreyaSans-Bold.ttf":
/*!************************************************!*\
  !*** ./src/alegreyasans/AlegreyaSans-Bold.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8696043d2230534a8b3.ttf";

/***/ }),

/***/ "./src/alegreyasans/AlegreyaSans-Light.ttf":
/*!*************************************************!*\
  !*** ./src/alegreyasans/AlegreyaSans-Light.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60bd25eb0e18f502f053.ttf";

/***/ }),

/***/ "./src/alegreyasans/AlegreyaSans-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/alegreyasans/AlegreyaSans-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ddbf9a2e0676434a081.ttf";

/***/ }),

/***/ "./src/alegreyasans/AlegreyaSans-Thin.ttf":
/*!************************************************!*\
  !*** ./src/alegreyasans/AlegreyaSans-Thin.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da827947f78516e4f7e2.ttf";

/***/ }),

/***/ "./src/images/baklava.jpg":
/*!********************************!*\
  !*** ./src/images/baklava.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5da476d25288be0a70a3.jpg";

/***/ }),

/***/ "./src/images/chicken.png":
/*!********************************!*\
  !*** ./src/images/chicken.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6be5bfb7c699f8cc5c6.png";

/***/ }),

/***/ "./src/images/falafel.jpg":
/*!********************************!*\
  !*** ./src/images/falafel.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b80df023980ba0c57f7e.jpg";

/***/ }),

/***/ "./src/images/icon.png":
/*!*****************************!*\
  !*** ./src/images/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5ae575f460fd3f7dec6.png";

/***/ }),

/***/ "./src/images/lentil_soup.jpg":
/*!************************************!*\
  !*** ./src/images/lentil_soup.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18cab52efb58058e824c.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.js */ "./src/welcome.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _pageRender_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageRender.js */ "./src/pageRender.js");






(0,_pageRender_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)();
(0,_welcome_js__WEBPACK_IMPORTED_MODULE_1__.welcomeTab)();
//Switching between tabs
const switchTab = (btn) => {
    //delete existing content
    let container = document.querySelectorAll('.container');
    container[0].remove();
    //updating the content based on the tab clicked
    if (btn.textContent === 'Welcome') {
        (0,_welcome_js__WEBPACK_IMPORTED_MODULE_1__.welcomeTab)()
    } else if (btn.textContent === 'Menu') {
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuTab)()
    } else if (btn.textContent === 'Contact') {
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactTab)()
    }
}
let btns = document.querySelectorAll('.navigationButton');
btns.forEach(btn => btn.addEventListener('click', function() {switchTab(btn)}));


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnNCO0FBQ2tCO0FBQ047QUFDTTtBQUNHOztBQUUzQywwREFBVTtBQUNWLHVEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFVO0FBQ2xCLE1BQU07QUFDTixRQUFRLGlEQUFPO0FBQ2YsTUFBTTtBQUNOLFFBQVEsdURBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsOERBQThELGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlUmVuZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWxjb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hbGVncmV5YXNhbnMvQWxlZ3JleWFTYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hbGVncmV5YXNhbnMvQWxlZ3JleWFTYW5zLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hbGVncmV5YXNhbnMvQWxlZ3JleWFTYW5zLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYWxlZ3JleWFzYW5zL0FsZWdyZXlhU2Fucy1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYWxlZ3JleWFzYW5zL0FsZWdyZXlhU2Fucy1CbGFjay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ09MT1IgUEFMRVRURSAqL1xcbjpyb290IHtcXG4gICAgLS1kYXJrX2JsdWU6ICMwNjViOTFDQztcXG4gICAgLS1saWdodF9ibHVlOiAjNDRhY2QzQUE7XFxuICAgIC0tbGlnaHRlcl9ibHVlOiAjODZjMmNjO1xcbiAgICAtLWJyb3duOiAjYjY4NjY5O1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XFxufVxcbmh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlcl9ibHVlKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRlcl9ibHVlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG59XFxuZGl2e1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbn1cXG4jaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiA2OHB4O1xcbn1cXG5oMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDhweDsgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxufVxcbiN0YWJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAxNTNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5idXR0b257XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXJfYmx1ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodGVyX2JsdWUpO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn07XFxuI2xlZnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIC8qIGZsZXg6IDE7ICovXFxufVxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1saWdodGVyX2JsdWUpO1xcbiAgICBtYXgtd2lkdGg6IDU4MHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogMjcwcHg7XFxuICAgIHBhZGRpbmc6IDYwcHggMTRweDtcXG4gICAgcGFkZGluZzogMHB4IDFweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG4jbWVudXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcbi5tZW51SXRlbXtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLm1lbnVDYXRlZ29yeXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcbi5tZW51SXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXdlaWdodDogbGlnaHQ7XFxufVxcbi5mb29kX3BpY3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6MTQ0JTtcXG4gICAgLyogd2lkdGg6IGF1dG87ICovXFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgLyogbWFyZ2luOjA7ICovXFxufVxcblxcblxcbi5pbWFnZV9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogMzRweDtcXG4gICAgZ2FwOiAyJTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uc21hbGxfZm9vZF9waWN7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDIyJTtcXG4gICAgaGVpZ2h0OiAyMiU7XFxufVxcbi5ob21lX3RleHQsIC5jYXRlcmluZ3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAxNHB4O1xcbn1cXG5cXG4jZm9vdGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZ3JvdzoxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiA1ODBweDtcXG4gICAgcGFkZGluZzogNDBweCA0NDBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG4uYWRkcmVzc3tcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMzBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsK0RBQXNFO0lBQ3RFLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QiwrREFBbUU7SUFDbkUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLCtEQUFvRTtJQUNwRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsK0RBQW1FO0lBQ25FLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QiwrREFBb0U7SUFDcEUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0FBQ3ZCLENBQUE7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsUUFBUTtJQUNSLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ09MT1IgUEFMRVRURSAqL1xcbjpyb290IHtcXG4gICAgLS1kYXJrX2JsdWU6ICMwNjViOTFDQztcXG4gICAgLS1saWdodF9ibHVlOiAjNDRhY2QzQUE7XFxuICAgIC0tbGlnaHRlcl9ibHVlOiAjODZjMmNjO1xcbiAgICAtLWJyb3duOiAjYjY4NjY5O1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG4gICAgc3JjOiB1cmwoJy4vYWxlZ3JleWFzYW5zL0FsZWdyZXlhU2Fucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG4gICAgc3JjOiB1cmwoJy4vYWxlZ3JleWFzYW5zL0FsZWdyZXlhU2Fucy1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIHNyYzogdXJsKCcuL2FsZWdyZXlhc2Fucy9BbGVncmV5YVNhbnMtTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIFNhbnMnO1xcbiAgICBzcmM6IHVybCgnLi9hbGVncmV5YXNhbnMvQWxlZ3JleWFTYW5zLVRoaW4udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIHNyYzogdXJsKCcuL2FsZWdyZXlhc2Fucy9BbGVncmV5YVNhbnMtQmxhY2sudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcXG59XFxuaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyX2JsdWUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodGVyX2JsdWUpO1xcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIFNhbnMnO1xcbn1cXG5kaXZ7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxufVxcbiNoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDY4cHg7XFxufVxcbmgxIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXG4gICAgLyogcGFkZGluZy1yaWdodDogOHB4OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG59XFxuI3RhYnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDE1M3B4O1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAvKiBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbmJ1dHRvbntcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlcl9ibHVlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDE0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0ZXJfYmx1ZSk7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxufTtcXG4jbGVmdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDJweDtcXG4gICAgLyogZmxleDogMTsgKi9cXG59XFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMnB4IHZhcigtLWxpZ2h0ZXJfYmx1ZSk7XFxuICAgIG1heC13aWR0aDogNTgwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiAyNzBweDtcXG4gICAgcGFkZGluZzogNjBweCAxNHB4O1xcbiAgICBwYWRkaW5nOiAwcHggMXB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcbiNtZW51e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuLm1lbnVJdGVte1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4ubWVudUNhdGVnb3J5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuLm1lbnVJdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodDtcXG59XFxuLmZvb2RfcGlje1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGhlaWdodDoxNDQlO1xcbiAgICAvKiB3aWR0aDogYXV0bzsgKi9cXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICAvKiBtYXJnaW46MDsgKi9cXG59XFxuXFxuXFxuLmltYWdlX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xcbiAgICBnYXA6IDIlO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5zbWFsbF9mb29kX3BpY3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMjIlO1xcbiAgICBoZWlnaHQ6IDIyJTtcXG59XFxuLmhvbWVfdGV4dCwgLmNhdGVyaW5ne1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDE0cHg7XFxufVxcblxcbiNmb290ZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1ncm93OjE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXgtd2lkdGg6IDU4MHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4IDQ0MHB4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcbi5hZGRyZXNze1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIzMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZmFsYWZlbFBpYyBmcm9tICcuL2ltYWdlcy9mYWxhZmVsLmpwZydcbi8vIGltcG9ydCBkcmlua3MgZnJvbSAnLi9pbWFnZXMvbGF6aXphLmpwZyc7XG5pbXBvcnQgc291cCBmcm9tICcuL2ltYWdlcy9sZW50aWxfc291cC5qcGcnO1xuaW1wb3J0IGJha2xhdmEgZnJvbSAnLi9pbWFnZXMvYmFrbGF2YS5qcGcnO1xuXG5jb25zdCBjb250YWN0VGFiID0gKCkgPT4ge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NvbnRhaW5lcicpO1xuICAgIGxldCB0ZXh0X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vY291bGQgbm90IGZpZ3VyZSBvdXQgaG93IHRvIGdldCB0aGUgbGluZSBicmVhayB0byB3b3JrIGJlbG93XG4gICAgdGV4dF9kaXYuaW5uZXJIVE1MID0gYE9yZGVyIHZpYSBTZWFtbGVzcyBvciBEb29yZGFzaCxcbiAgICAgb3IgYnkgY2FsbGluZyB1cyBhdCAyMTItOTk5LTk5OTlgO1xuICAgIHRleHRfZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdob21lX3RleHQnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dF9kaXYpO1xuXG4gICAgbGV0IGNhdGVyaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhdGVyaW5nVGV4dC50ZXh0Q29udGVudCA9IGBXZSBhbHNvIGNhdGVyIGV2ZW50cyBiaWcgYW5kIHNtYWxsLiBHZXQgaW4gdG91Y2ggd2l0aCB0aGUgXG4gICAgZGV0YWlscyBhYm91dCB5b3VyIGV2ZW50IGFuZCB3ZSdsbCBkbyBvdXIgYmVzdCB0byBhY2NvbW1vZGF0ZSB5b3VyIGRlc2lyZWQgZGF0ZSBcbiAgICBhbmQgYW55IHJlcXVlc3RzIHlvdSBtYXkgaGF2ZSB0byBtYWtlIHlvdXIgY2VsZWJyYXRpb24gbWVtb3JhYmxlLmBcbiAgICBjYXRlcmluZ1RleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NhdGVyaW5nJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVyaW5nVGV4dCk7XG4gICAgXG4gICAgXG4gICAgIC8vYWRkaW5nIGltYWdlc1xuICAgICBsZXQgaW1hZ2VfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgIGltYWdlX2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaW1hZ2VfY29udGFpbmVyJylcbiAgICAgbGV0IGFkZFBpY3R1cmUgPSAoaW1wb3J0ZWRJbWcpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1wb3J0ZWRJbWc7XG4gICAgICAgIGxldCBpbWFnZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1hZ2VfZGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgaW1hZ2VfZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzbWFsbF9mb29kX3BpYycpO1xuICAgICAgICBpbWFnZV9jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VfZGl2KTtcbiAgICAgfVxuICAgICBsZXQgaW1hZ2VzID0gW2ZhbGFmZWxQaWMsc291cCwgYmFrbGF2YV07XG4gICAgIGZvciAobGV0IGltYWdlIG9mIGltYWdlcyl7XG4gICAgICAgICBhZGRQaWN0dXJlKGltYWdlKVxuICAgICB9XG4gICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZV9jb250YWluZXIpO1xuICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7XG4gICAgY29udGFjdFRhYixcbn0iLCJjb25zdCBtZW51VGFiID0gKCkgPT4ge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NvbnRhaW5lcicpO1xuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudScpXG5cbiAgICAvL2FkZGluZyB0aGUgZm9vZCBjYXRlZ29yaWVzIHRvIHRoZSBET01cbiAgICBsZXQgY2F0ZWdvcmllcyA9IFsnU2FuZHdpY2hlcycsICdTYWxhZHMnLCAnU291cCcsJ0RyaW5rcycsJ0Rlc3NlcnRzJ11cbiAgICBmb3IgKGxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICAgIGxldCBuZXdDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdDYXRlZ29yeS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbWVudUNhdGVnb3J5Jyk7XG4gICAgICAgIG5ld0NhdGVnb3J5LnNldEF0dHJpYnV0ZSgnaWQnLGNhdGVnb3J5KTtcbiAgICAgICAgbmV3Q2F0ZWdvcnkudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChuZXdDYXRlZ29yeSk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgXG4gICAgLy9BbGwgdGhlIGZvb2QgaXRlbXMgb2ZmZXJlZFxuICAgIGxldCBTYW5kd2ljaGVzTGlzdCA9IFtbJ0ZhbGFmZWwnLCA1Ljc1XSxbJ0NoaWNrZW4gU2hhd2FybWEnLDguNTBdLFsnQmVlZiBTaGF3YXJtYScsOC41MF0sXG4gICAgWydLb2Z0YScsOC41MF0sWydDaGlja2VuIEtlYmFiJywgOC41MF0sWydCdXJnZXInLCA3LjUwXSxbJ0NoaWNrZW4gQnVyZ2VyJywgNy41MF0sXG4gICAgWydWZWdnaWUgQnVyZ2VyJywgNi41MF0sWydGdWwgKEZhdmEgQmVhbnMpJyw1Ljc1XV07XG4gICAgbGV0IFNhbGFkc0xpc3QgPSBbWydHcmVlayBTYWxhZCcsIDcuOTldLFsnSHVtbXVzIFNhbGFkJyw3LjAwXSxbJ1lvZ3VydCBTYWxhZCcsNS45OV0sXG4gICAgWydDb2xlc2xhdycsNi4wMF0sWydaYWFkIFNhbGFkJywgNi45OV0sWydCYWJhIEdoYW5ub3VqJywgNy4wMF0sWydDaGlja2VuIFNhbGFkJywgOS45OV1dO1xuICAgIGxldCBEcmlua3NMaXN0ID0gW1snU29kYScsMS4wMF0sWydNaW50IFRlYScsMi4wMF1dIFxuICAgIGxldCBEZXNzZXJ0c0xpc3QgPSBbWydCYWtsYXZhJywyLjAwXSxbJ1JpY2UgUHVkZGluZycsMy4wMF1dO1xuICAgIGxldCBTb3VwTGlzdCA9IFtbJ1NvdXAgb2YgdGhlIERheScsNS43NV1dO1xuXG4gICAgLy90cmFuc2xhdGluZyB0aGUgZm9vZCBpdGVtcyB0byBhIGRpdiBvbiB0aGUgRE9NIHZpYSBhIGZhY3RvcnkgZnVuY3Rpb25cbiAgICBjb25zdCBtZW51SXRlbUZhY3RvcnkgPSAoaXRlbU5hbWUscHJpY2UpID0+IHtcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbWVudUl0ZW0nKTtcbiAgICAgICAgbGV0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmFtZURpdi50ZXh0Q29udGVudCA9IGl0ZW1OYW1lO1xuICAgICAgICBsZXQgcHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpY2VEaXYudGV4dENvbnRlbnQ9cHJpY2U7XG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmFtZURpdik7XG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQocHJpY2VEaXYpXG4gICAgICAgIHJldHVybiBuZXdJdGVtXG4gICAgfVxuICAgIGxldCBjYXRlZ29yeUxpc3QgPSBbU2FuZHdpY2hlc0xpc3QsU2FsYWRzTGlzdCxTb3VwTGlzdCxEcmlua3NMaXN0LERlc3NlcnRzTGlzdF1cbiAgICBsZXQgY291bnQgPSAwXG4gICAgZm9yIChsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgICAgICBsZXQgZm9vZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NhdGVnb3J5fWApO1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNhdGVnb3J5TGlzdFtjb3VudF0pe1xuICAgICAgICAgICAgbGV0IG5ld0l0ZW0gPSBtZW51SXRlbUZhY3RvcnkoaXRlbVswXSxpdGVtWzFdKTtcbiAgICAgICAgICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQgKz0xO1xuICAgIH19XG5cbmV4cG9ydCB7XG4gICAgbWVudVRhYixcbn07IiwiaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi5wbmcnO1xuY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICAvL0hlYWRlcjogTmFtZSArIHRvcCBuYXZpZ2F0aW9uIGJ1dHRvbnNcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgIGxldCB6YWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB6YWFkLnRleHRDb250ZW50ID0gJ1phYWQnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh6YWFkKTtcbiAgICBsZXQgYnV0dG9ucyA9IFsnV2VsY29tZScsJ01lbnUnLCdDb250YWN0J107XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJzLnNldEF0dHJpYnV0ZSgnaWQnLCd0YWJzJyk7XG4gICAgZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBidXR0b247XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdmlnYXRpb25CdXR0b24nKTtcbiAgICAgICAgdGFicy5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFicyk7XG5cbiAgICAvL1Jlc3RhdXJhbnQgaWNvblxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBsZXQgaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbXlJY29uLnNyYyA9IEljb247XG4gICAgbXlJY29uLnN0eWxlLndpZHRoID0gJzIyOXB4JztcbiAgICBob2xkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2xlZnQnKTtcbiAgICBob2xkZXIuYXBwZW5kQ2hpbGQobXlJY29uKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9sZGVyKTtcblxuICAgIC8vRm9vdGVyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXInKTtcbiAgICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IGA5NjMgQW1zdGVyZGFtIEF2ZSwgTmV3IFlvcmssIE5ZIDEwMDI1YDtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgbGV0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG51bWJlci50ZXh0Q29udGVudCA9IGAyMTItOTk5LTk5OTlgO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChudW1iZXIpO1xufVxuXG5leHBvcnQge3JlbmRlclBhZ2V9IiwiLy93ZWxjb21lIHRhYiBtb2R1bGUgdG8gYmUgaW1wb3J0ZWRcbi8vIGltcG9ydCBjaGlja2VuUiBmcm9tICcuL2ltYWdlcy9CVy9jaGlja2VuLmpwZyc7XG5pbXBvcnQgY2hpY2tlblIgZnJvbSAnLi9pbWFnZXMvY2hpY2tlbi5wbmcnO1xuXG5mdW5jdGlvbiB3ZWxjb21lVGFiKCkge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NvbnRhaW5lcicpO1xuXG4gICAgLy9hZGRpbmcgYW4gaW1hZ2VcbiAgICBjb25zdCBjaGlja2VuID0gbmV3IEltYWdlKCk7XG4gICAgY2hpY2tlbi5zcmMgPSBjaGlja2VuUjtcbiAgICBsZXQgaW1hZ2VfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VfZGl2LmFwcGVuZENoaWxkKGNoaWNrZW4pO1xuICAgIGltYWdlX2Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZm9vZF9waWMnKVxuXG4gICAgLy9hZGRpbmcgdGV4dFxuICAgIGxldCB0ZXh0X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRfZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdob21lX3RleHQnKVxuICAgIHRleHRfZGl2LnRleHRDb250ZW50ID0gYFdpdGggc29tZSBvZiB0aGUgbW9zdCBkZWxpY2lvdXMgY29tYmluYXRpb25zIG9mIGluZ3JlZGllbnRzLCBaYWFkIGhhcyBzb21ldGhpbmcgZm9yIGV2ZXJ5b25lIHRvIGVuam95LlxuICAgIExvdmVkIGJ5IGxvY2FscyBhbmQgdHJhdmVsaW5nIGZvb2RpZXMgYWxpa2UsIG5vdyBpcyB0aGUgcGVyZmVjdCB0aW1lIGZvciB5b3UgdG8gam9pbiB1cyFgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlX2Rpdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRfZGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbn1cblxuZXhwb3J0IHtcbiAgICB3ZWxjb21lVGFiLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7d2VsY29tZVRhYn0gZnJvbSAnLi93ZWxjb21lLmpzJztcbmltcG9ydCB7bWVudVRhYn0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7Y29udGFjdFRhYn0gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCB7cmVuZGVyUGFnZX0gZnJvbSAnLi9wYWdlUmVuZGVyLmpzJztcblxucmVuZGVyUGFnZSgpO1xud2VsY29tZVRhYigpO1xuLy9Td2l0Y2hpbmcgYmV0d2VlbiB0YWJzXG5jb25zdCBzd2l0Y2hUYWIgPSAoYnRuKSA9PiB7XG4gICAgLy9kZWxldGUgZXhpc3RpbmcgY29udGVudFxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyWzBdLnJlbW92ZSgpO1xuICAgIC8vdXBkYXRpbmcgdGhlIGNvbnRlbnQgYmFzZWQgb24gdGhlIHRhYiBjbGlja2VkXG4gICAgaWYgKGJ0bi50ZXh0Q29udGVudCA9PT0gJ1dlbGNvbWUnKSB7XG4gICAgICAgIHdlbGNvbWVUYWIoKVxuICAgIH0gZWxzZSBpZiAoYnRuLnRleHRDb250ZW50ID09PSAnTWVudScpIHtcbiAgICAgICAgbWVudVRhYigpXG4gICAgfSBlbHNlIGlmIChidG4udGV4dENvbnRlbnQgPT09ICdDb250YWN0Jykge1xuICAgICAgICBjb250YWN0VGFiKClcbiAgICB9XG59XG5sZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uQnV0dG9uJyk7XG5idG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge3N3aXRjaFRhYihidG4pfSkpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=