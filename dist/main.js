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
___CSS_LOADER_EXPORT___.push([module.id, "/* COLOR PALETTE */\n:root {\n    --dark_blue: #065b91CC;\n    --light_blue: #44acd3AA;\n    --lighter_blue: #86c2cc;\n    --brown: #b68669;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: bold;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n    font-weight: 300;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype');\n    font-weight: 100;\n    font-style:normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype');\n    font-weight: 900;\n    font-style:normal;\n}\nhtml{\n    height: 100%;\n}\nbody{\n    height: 100%;\n    margin: 0;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-sizing: border-box;\n    color: var(--lighter_blue);\n    background: var(--lighter_blue);\n    font-family: 'Alegreya Sans';\n}\ndiv{\n    /* display: flex; */\n}\n\n#header{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n    background-color: white;\n    margin: 0;\n    height: 68px;\n}\nh1 {\n    display: flex;\n    padding-top: 3px;\n    padding-right: 8px;\n    margin: 0;\n    font-weight: 900;\n    text-transform: uppercase;\n    font-size: 60px;\n}\n#tabs{\n    display: flex;\n    flex-direction: column;\n    margin-top: 153px;\n    margin-left: 60px;\n    margin-right: 14px;\n    justify-content: flex-end;\n    /* align-items: flex-start; */\n    gap: 10px;\n    flex-grow: 1;\n}\nbutton{\n    border:none;\n    background-color: white;\n    color: var(--lighter_blue);\n    font-family: 'Alegreya Sans';\n    font-weight: 500;\n    text-transform: uppercase;\n    height: 48px;\n    font-size: 20px;\n    padding: 14px;\n    border: 2px solid var(--lighter_blue);\n    border-bottom: none;\n};\n#left{\n    display:flex;\n}\n#content{\n    display: flex;\n    justify-content: flex-start;\n    gap: 2px;\n    /* flex: 1; */\n}\n.container{\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    border-top: solid 2px var(--lighter_blue);\n    max-width: 580px;\n    min-width: 200px;\n    gap: 20px;\n    height: 270px;\n    padding: 60px 14px;\n    padding: 0px 1px;\n    font-size: large;\n    color: white;\n\n}\n#menu{\n    display:flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    gap: 20px;\n    margin-top: 24px;\n}\n.menuItem{\n    font-weight: 300;\n}\n.menuCategory{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    font-weight: 600;\n    width: 200px;\n}\n.menuItem{\n    display: flex;\n    justify-content: space-between;\n    font-weight: light;\n}\n.food_pic{\n    display:flex;\n    height:144%;\n    /* width: auto; */\n    flex-grow: 0;\n    /* margin:0; */\n}\n\n\n.image_container{\n    display: flex;\n    margin: 14px;\n    margin-top: 34px;\n    gap: 2%;\n    flex-wrap: wrap;\n}\n.small_food_pic{\n    display:flex;\n    flex: 1;\n    width: 22%;\n    height: 22%;\n}\n.home_text, .catering{\n    display: flex;\n    margin: 14px;\n}\n\n#footer{\n    display:flex;\n    flex-grow:1;\n    color: white;\n    font-size: small;\n    justify-content: space-between;\n    max-width: 580px;\n    padding: 40px 440px;\n    gap: 30px;\n}\n.address{\n    margin: 10px;\n    padding-right: 230px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;IACI,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,4BAA4B;IAC5B,+DAAsE;IACtE,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,+DAAmE;IACnE,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,+DAAoE;IACpE,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,4BAA4B;IAC5B,+DAAmE;IACnE,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,4BAA4B;IAC5B,+DAAoE;IACpE,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,SAAS;IACT,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;IAC9B,sBAAsB;IACtB,0BAA0B;IAC1B,+BAA+B;IAC/B,4BAA4B;AAChC;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;IACrB,uBAAuB;IACvB,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;IACT,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,6BAA6B;IAC7B,SAAS;IACT,YAAY;AAChB;AACA;IACI,WAAW;IACX,uBAAuB;IACvB,0BAA0B;IAC1B,4BAA4B;IAC5B,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,qCAAqC;IACrC,mBAAmB;AACvB,CAAA;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,2BAA2B;IAC3B,QAAQ;IACR,aAAa;AACjB;AACA;IACI,aAAa;IACb,OAAO;IACP,sBAAsB;IACtB,yCAAyC;IACzC,gBAAgB;IAChB,gBAAgB;IAChB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;;AAEhB;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,eAAe;IACf,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ,cAAc;AAClB;;;AAGA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,OAAO;IACP,eAAe;AACnB;AACA;IACI,YAAY;IACZ,OAAO;IACP,UAAU;IACV,WAAW;AACf;AACA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,YAAY;IACZ,oBAAoB;AACxB","sourcesContent":["/* COLOR PALETTE */\n:root {\n    --dark_blue: #065b91CC;\n    --light_blue: #44acd3AA;\n    --lighter_blue: #86c2cc;\n    --brown: #b68669;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url('./alegreyasans/AlegreyaSans-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url('./alegreyasans/AlegreyaSans-Bold.ttf') format('truetype');\n    font-weight: bold;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url('./alegreyasans/AlegreyaSans-Light.ttf') format('truetype');\n    font-weight: 300;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url('./alegreyasans/AlegreyaSans-Thin.ttf') format('truetype');\n    font-weight: 100;\n    font-style:normal;\n}\n@font-face {\n    font-family: 'Alegreya Sans';\n    src: url('./alegreyasans/AlegreyaSans-Black.ttf') format('truetype');\n    font-weight: 900;\n    font-style:normal;\n}\nhtml{\n    height: 100%;\n}\nbody{\n    height: 100%;\n    margin: 0;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-sizing: border-box;\n    color: var(--lighter_blue);\n    background: var(--lighter_blue);\n    font-family: 'Alegreya Sans';\n}\ndiv{\n    /* display: flex; */\n}\n\n#header{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n    background-color: white;\n    margin: 0;\n    height: 68px;\n}\nh1 {\n    display: flex;\n    padding-top: 3px;\n    padding-right: 8px;\n    margin: 0;\n    font-weight: 900;\n    text-transform: uppercase;\n    font-size: 60px;\n}\n#tabs{\n    display: flex;\n    flex-direction: column;\n    margin-top: 153px;\n    margin-left: 60px;\n    margin-right: 14px;\n    justify-content: flex-end;\n    /* align-items: flex-start; */\n    gap: 10px;\n    flex-grow: 1;\n}\nbutton{\n    border:none;\n    background-color: white;\n    color: var(--lighter_blue);\n    font-family: 'Alegreya Sans';\n    font-weight: 500;\n    text-transform: uppercase;\n    height: 48px;\n    font-size: 20px;\n    padding: 14px;\n    border: 2px solid var(--lighter_blue);\n    border-bottom: none;\n};\n#left{\n    display:flex;\n}\n#content{\n    display: flex;\n    justify-content: flex-start;\n    gap: 2px;\n    /* flex: 1; */\n}\n.container{\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    border-top: solid 2px var(--lighter_blue);\n    max-width: 580px;\n    min-width: 200px;\n    gap: 20px;\n    height: 270px;\n    padding: 60px 14px;\n    padding: 0px 1px;\n    font-size: large;\n    color: white;\n\n}\n#menu{\n    display:flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    gap: 20px;\n    margin-top: 24px;\n}\n.menuItem{\n    font-weight: 300;\n}\n.menuCategory{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    font-weight: 600;\n    width: 200px;\n}\n.menuItem{\n    display: flex;\n    justify-content: space-between;\n    font-weight: light;\n}\n.food_pic{\n    display:flex;\n    height:144%;\n    /* width: auto; */\n    flex-grow: 0;\n    /* margin:0; */\n}\n\n\n.image_container{\n    display: flex;\n    margin: 14px;\n    margin-top: 34px;\n    gap: 2%;\n    flex-wrap: wrap;\n}\n.small_food_pic{\n    display:flex;\n    flex: 1;\n    width: 22%;\n    height: 22%;\n}\n.home_text, .catering{\n    display: flex;\n    margin: 14px;\n}\n\n#footer{\n    display:flex;\n    flex-grow:1;\n    color: white;\n    font-size: small;\n    justify-content: space-between;\n    max-width: 580px;\n    padding: 40px 440px;\n    gap: 30px;\n}\n.address{\n    margin: 10px;\n    padding-right: 230px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnNCO0FBQ2tCO0FBQ047QUFDTTtBQUNHOztBQUUzQywwREFBVTtBQUNWLHVEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFVO0FBQ2xCLE1BQU07QUFDTixRQUFRLGlEQUFPO0FBQ2YsTUFBTTtBQUNOLFFBQVEsdURBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsOERBQThELGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlUmVuZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWxjb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hbGVncmV5YXNhbnMvQWxlZ3JleWFTYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hbGVncmV5YXNhbnMvQWxlZ3JleWFTYW5zLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hbGVncmV5YXNhbnMvQWxlZ3JleWFTYW5zLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYWxlZ3JleWFzYW5zL0FsZWdyZXlhU2Fucy1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYWxlZ3JleWFzYW5zL0FsZWdyZXlhU2Fucy1CbGFjay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ09MT1IgUEFMRVRURSAqL1xcbjpyb290IHtcXG4gICAgLS1kYXJrX2JsdWU6ICMwNjViOTFDQztcXG4gICAgLS1saWdodF9ibHVlOiAjNDRhY2QzQUE7XFxuICAgIC0tbGlnaHRlcl9ibHVlOiAjODZjMmNjO1xcbiAgICAtLWJyb3duOiAjYjY4NjY5O1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XFxufVxcbmh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlcl9ibHVlKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRlcl9ibHVlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG59XFxuZGl2e1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiA2OHB4O1xcbn1cXG5oMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxufVxcbiN0YWJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAxNTNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5idXR0b257XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXJfYmx1ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodGVyX2JsdWUpO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn07XFxuI2xlZnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIC8qIGZsZXg6IDE7ICovXFxufVxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1saWdodGVyX2JsdWUpO1xcbiAgICBtYXgtd2lkdGg6IDU4MHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogMjcwcHg7XFxuICAgIHBhZGRpbmc6IDYwcHggMTRweDtcXG4gICAgcGFkZGluZzogMHB4IDFweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG4jbWVudXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcbi5tZW51SXRlbXtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLm1lbnVDYXRlZ29yeXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcbi5tZW51SXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXdlaWdodDogbGlnaHQ7XFxufVxcbi5mb29kX3BpY3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6MTQ0JTtcXG4gICAgLyogd2lkdGg6IGF1dG87ICovXFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgLyogbWFyZ2luOjA7ICovXFxufVxcblxcblxcbi5pbWFnZV9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogMzRweDtcXG4gICAgZ2FwOiAyJTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uc21hbGxfZm9vZF9waWN7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDIyJTtcXG4gICAgaGVpZ2h0OiAyMiU7XFxufVxcbi5ob21lX3RleHQsIC5jYXRlcmluZ3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAxNHB4O1xcbn1cXG5cXG4jZm9vdGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZ3JvdzoxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiA1ODBweDtcXG4gICAgcGFkZGluZzogNDBweCA0NDBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG4uYWRkcmVzc3tcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMzBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsK0RBQXNFO0lBQ3RFLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QiwrREFBbUU7SUFDbkUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLCtEQUFvRTtJQUNwRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsK0RBQW1FO0lBQ25FLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QiwrREFBb0U7SUFDcEUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2QixDQUFBO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFFBQVE7SUFDUixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENPTE9SIFBBTEVUVEUgKi9cXG46cm9vdCB7XFxuICAgIC0tZGFya19ibHVlOiAjMDY1YjkxQ0M7XFxuICAgIC0tbGlnaHRfYmx1ZTogIzQ0YWNkM0FBO1xcbiAgICAtLWxpZ2h0ZXJfYmx1ZTogIzg2YzJjYztcXG4gICAgLS1icm93bjogI2I2ODY2OTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIHNyYzogdXJsKCcuL2FsZWdyZXlhc2Fucy9BbGVncmV5YVNhbnMtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIHNyYzogdXJsKCcuL2FsZWdyZXlhc2Fucy9BbGVncmV5YVNhbnMtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIFNhbnMnO1xcbiAgICBzcmM6IHVybCgnLi9hbGVncmV5YXNhbnMvQWxlZ3JleWFTYW5zLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG4gICAgc3JjOiB1cmwoJy4vYWxlZ3JleWFzYW5zL0FsZWdyZXlhU2Fucy1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0FsZWdyZXlhIFNhbnMnO1xcbiAgICBzcmM6IHVybCgnLi9hbGVncmV5YXNhbnMvQWxlZ3JleWFTYW5zLUJsYWNrLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XFxufVxcbmh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlcl9ibHVlKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRlcl9ibHVlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJztcXG59XFxuZGl2e1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiA2OHB4O1xcbn1cXG5oMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxufVxcbiN0YWJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAxNTNweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXFxuICAgIGdhcDogMTBweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5idXR0b257XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXJfYmx1ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlZ3JleWEgU2Fucyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodGVyX2JsdWUpO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn07XFxuI2xlZnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIC8qIGZsZXg6IDE7ICovXFxufVxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS1saWdodGVyX2JsdWUpO1xcbiAgICBtYXgtd2lkdGg6IDU4MHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogMjcwcHg7XFxuICAgIHBhZGRpbmc6IDYwcHggMTRweDtcXG4gICAgcGFkZGluZzogMHB4IDFweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG4jbWVudXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcbi5tZW51SXRlbXtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLm1lbnVDYXRlZ29yeXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcbi5tZW51SXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXdlaWdodDogbGlnaHQ7XFxufVxcbi5mb29kX3BpY3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6MTQ0JTtcXG4gICAgLyogd2lkdGg6IGF1dG87ICovXFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgLyogbWFyZ2luOjA7ICovXFxufVxcblxcblxcbi5pbWFnZV9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogMzRweDtcXG4gICAgZ2FwOiAyJTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uc21hbGxfZm9vZF9waWN7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDIyJTtcXG4gICAgaGVpZ2h0OiAyMiU7XFxufVxcbi5ob21lX3RleHQsIC5jYXRlcmluZ3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAxNHB4O1xcbn1cXG5cXG4jZm9vdGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZ3JvdzoxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWF4LXdpZHRoOiA1ODBweDtcXG4gICAgcGFkZGluZzogNDBweCA0NDBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG4uYWRkcmVzc3tcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMzBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGZhbGFmZWxQaWMgZnJvbSAnLi9pbWFnZXMvZmFsYWZlbC5qcGcnXG4vLyBpbXBvcnQgZHJpbmtzIGZyb20gJy4vaW1hZ2VzL2xheml6YS5qcGcnO1xuaW1wb3J0IHNvdXAgZnJvbSAnLi9pbWFnZXMvbGVudGlsX3NvdXAuanBnJztcbmltcG9ydCBiYWtsYXZhIGZyb20gJy4vaW1hZ2VzL2Jha2xhdmEuanBnJztcblxuY29uc3QgY29udGFjdFRhYiA9ICgpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjb250YWluZXInKTtcbiAgICBsZXQgdGV4dF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvL2NvdWxkIG5vdCBmaWd1cmUgb3V0IGhvdyB0byBnZXQgdGhlIGxpbmUgYnJlYWsgdG8gd29yayBiZWxvd1xuICAgIHRleHRfZGl2LmlubmVySFRNTCA9IGBPcmRlciB2aWEgU2VhbWxlc3Mgb3IgRG9vcmRhc2gsXG4gICAgIG9yIGJ5IGNhbGxpbmcgdXMgYXQgMjEyLTk5OS05OTk5YDtcbiAgICB0ZXh0X2Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaG9tZV90ZXh0Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRfZGl2KTtcblxuICAgIGxldCBjYXRlcmluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXRlcmluZ1RleHQudGV4dENvbnRlbnQgPSBgV2UgYWxzbyBjYXRlciBldmVudHMgYmlnIGFuZCBzbWFsbC4gR2V0IGluIHRvdWNoIHdpdGggdGhlIFxuICAgIGRldGFpbHMgYWJvdXQgeW91ciBldmVudCBhbmQgd2UnbGwgZG8gb3VyIGJlc3QgdG8gYWNjb21tb2RhdGUgeW91ciBkZXNpcmVkIGRhdGUgXG4gICAgYW5kIGFueSByZXF1ZXN0cyB5b3UgbWF5IGhhdmUgdG8gbWFrZSB5b3VyIGNlbGVicmF0aW9uIG1lbW9yYWJsZS5gXG4gICAgY2F0ZXJpbmdUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjYXRlcmluZycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlcmluZ1RleHQpO1xuICAgIFxuICAgIFxuICAgICAvL2FkZGluZyBpbWFnZXNcbiAgICAgbGV0IGltYWdlX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICBpbWFnZV9jb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2ltYWdlX2NvbnRhaW5lcicpXG4gICAgIGxldCBhZGRQaWN0dXJlID0gKGltcG9ydGVkSW1nKSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IGltcG9ydGVkSW1nO1xuICAgICAgICBsZXQgaW1hZ2VfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGltYWdlX2Rpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGltYWdlX2Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc21hbGxfZm9vZF9waWMnKTtcbiAgICAgICAgaW1hZ2VfY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlX2Rpdik7XG4gICAgIH1cbiAgICAgbGV0IGltYWdlcyA9IFtmYWxhZmVsUGljLHNvdXAsIGJha2xhdmFdO1xuICAgICBmb3IgKGxldCBpbWFnZSBvZiBpbWFnZXMpe1xuICAgICAgICAgYWRkUGljdHVyZShpbWFnZSlcbiAgICAgfVxuICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VfY29udGFpbmVyKTtcbiAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5leHBvcnQge1xuICAgIGNvbnRhY3RUYWIsXG59IiwiY29uc3QgbWVudVRhYiA9ICgpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjb250YWluZXInKTtcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKVxuXG4gICAgLy9hZGRpbmcgdGhlIGZvb2QgY2F0ZWdvcmllcyB0byB0aGUgRE9NXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBbJ1NhbmR3aWNoZXMnLCAnU2FsYWRzJywgJ1NvdXAnLCdEcmlua3MnLCdEZXNzZXJ0cyddXG4gICAgZm9yIChsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgICAgICBsZXQgbmV3Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3Q2F0ZWdvcnkuc2V0QXR0cmlidXRlKCdjbGFzcycsJ21lbnVDYXRlZ29yeScpO1xuICAgICAgICBuZXdDYXRlZ29yeS5zZXRBdHRyaWJ1dGUoJ2lkJyxjYXRlZ29yeSk7XG4gICAgICAgIG5ld0NhdGVnb3J5LnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobmV3Q2F0ZWdvcnkpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIFxuICAgIC8vQWxsIHRoZSBmb29kIGl0ZW1zIG9mZmVyZWRcbiAgICBsZXQgU2FuZHdpY2hlc0xpc3QgPSBbWydGYWxhZmVsJywgNS43NV0sWydDaGlja2VuIFNoYXdhcm1hJyw4LjUwXSxbJ0JlZWYgU2hhd2FybWEnLDguNTBdLFxuICAgIFsnS29mdGEnLDguNTBdLFsnQ2hpY2tlbiBLZWJhYicsIDguNTBdLFsnQnVyZ2VyJywgNy41MF0sWydDaGlja2VuIEJ1cmdlcicsIDcuNTBdLFxuICAgIFsnVmVnZ2llIEJ1cmdlcicsIDYuNTBdLFsnRnVsIChGYXZhIEJlYW5zKScsNS43NV1dO1xuICAgIGxldCBTYWxhZHNMaXN0ID0gW1snR3JlZWsgU2FsYWQnLCA3Ljk5XSxbJ0h1bW11cyBTYWxhZCcsNy4wMF0sWydZb2d1cnQgU2FsYWQnLDUuOTldLFxuICAgIFsnQ29sZXNsYXcnLDYuMDBdLFsnWmFhZCBTYWxhZCcsIDYuOTldLFsnQmFiYSBHaGFubm91aicsIDcuMDBdLFsnQ2hpY2tlbiBTYWxhZCcsIDkuOTldXTtcbiAgICBsZXQgRHJpbmtzTGlzdCA9IFtbJ1NvZGEnLDEuMDBdLFsnTWludCBUZWEnLDIuMDBdXSBcbiAgICBsZXQgRGVzc2VydHNMaXN0ID0gW1snQmFrbGF2YScsMi4wMF0sWydSaWNlIFB1ZGRpbmcnLDMuMDBdXTtcbiAgICBsZXQgU291cExpc3QgPSBbWydTb3VwIG9mIHRoZSBEYXknLDUuNzVdXTtcblxuICAgIC8vdHJhbnNsYXRpbmcgdGhlIGZvb2QgaXRlbXMgdG8gYSBkaXYgb24gdGhlIERPTSB2aWEgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgY29uc3QgbWVudUl0ZW1GYWN0b3J5ID0gKGl0ZW1OYW1lLHByaWNlKSA9PiB7XG4gICAgICAgIGxldCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsJ21lbnVJdGVtJyk7XG4gICAgICAgIGxldCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hbWVEaXYudGV4dENvbnRlbnQgPSBpdGVtTmFtZTtcbiAgICAgICAgbGV0IHByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaWNlRGl2LnRleHRDb250ZW50PXByaWNlO1xuICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHByaWNlRGl2KVxuICAgICAgICByZXR1cm4gbmV3SXRlbVxuICAgIH1cbiAgICBsZXQgY2F0ZWdvcnlMaXN0ID0gW1NhbmR3aWNoZXNMaXN0LFNhbGFkc0xpc3QsU291cExpc3QsRHJpbmtzTGlzdCxEZXNzZXJ0c0xpc3RdXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIGZvciAobGV0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgICAgbGV0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjYXRlZ29yeX1gKTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjYXRlZ29yeUxpc3RbY291bnRdKXtcbiAgICAgICAgICAgIGxldCBuZXdJdGVtID0gbWVudUl0ZW1GYWN0b3J5KGl0ZW1bMF0saXRlbVsxXSk7XG4gICAgICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50ICs9MTtcbiAgICB9fVxuXG5leHBvcnQge1xuICAgIG1lbnVUYWIsXG59OyIsImltcG9ydCBJY29uIGZyb20gJy4vaW1hZ2VzL2ljb24ucG5nJztcbmNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgLy9IZWFkZXI6IE5hbWUgKyB0b3AgbmF2aWdhdGlvbiBidXR0b25zXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICBsZXQgemFhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgemFhZC50ZXh0Q29udGVudCA9ICdaYWFkJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoemFhZCk7XG4gICAgbGV0IGJ1dHRvbnMgPSBbJ1dlbGNvbWUnLCdNZW51JywnQ29udGFjdCddO1xuICAgIGxldCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFicy5zZXRBdHRyaWJ1dGUoJ2lkJywndGFicycpO1xuICAgIGZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gYnV0dG9uO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXZpZ2F0aW9uQnV0dG9uJyk7XG4gICAgICAgIHRhYnMuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB9XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gICAgLy9SZXN0YXVyYW50IGljb25cbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgbGV0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15SWNvbi5zcmMgPSBJY29uO1xuICAgIG15SWNvbi5zdHlsZS53aWR0aCA9ICcyMjlweCc7XG4gICAgaG9sZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdsZWZ0Jyk7XG4gICAgaG9sZGVyLmFwcGVuZENoaWxkKG15SWNvbilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbGRlcik7XG5cbiAgICAvL0Zvb3RlclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vdGVyJyk7XG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBgOTYzIEFtc3RlcmRhbSBBdmUsIE5ldyBZb3JrLCBOWSAxMDAyNWA7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBudW1iZXIudGV4dENvbnRlbnQgPSBgMjEyLTk5OS05OTk5YDtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbn1cblxuZXhwb3J0IHtyZW5kZXJQYWdlfSIsIi8vd2VsY29tZSB0YWIgbW9kdWxlIHRvIGJlIGltcG9ydGVkXG4vLyBpbXBvcnQgY2hpY2tlblIgZnJvbSAnLi9pbWFnZXMvQlcvY2hpY2tlbi5qcGcnO1xuaW1wb3J0IGNoaWNrZW5SIGZyb20gJy4vaW1hZ2VzL2NoaWNrZW4ucG5nJztcblxuZnVuY3Rpb24gd2VsY29tZVRhYigpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjb250YWluZXInKTtcblxuICAgIC8vYWRkaW5nIGFuIGltYWdlXG4gICAgY29uc3QgY2hpY2tlbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNoaWNrZW4uc3JjID0gY2hpY2tlblI7XG4gICAgbGV0IGltYWdlX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlX2Rpdi5hcHBlbmRDaGlsZChjaGlja2VuKTtcbiAgICBpbWFnZV9kaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Zvb2RfcGljJylcblxuICAgIC8vYWRkaW5nIHRleHRcbiAgICBsZXQgdGV4dF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0X2Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaG9tZV90ZXh0JylcbiAgICB0ZXh0X2Rpdi50ZXh0Q29udGVudCA9IGBXaXRoIHNvbWUgb2YgdGhlIG1vc3QgZGVsaWNpb3VzIGNvbWJpbmF0aW9ucyBvZiBpbmdyZWRpZW50cywgWmFhZCBoYXMgc29tZXRoaW5nIGZvciBldmVyeW9uZSB0byBlbmpveS5cbiAgICBMb3ZlZCBieSBsb2NhbHMgYW5kIHRyYXZlbGluZyBmb29kaWVzIGFsaWtlLCBub3cgaXMgdGhlIHBlcmZlY3QgdGltZSBmb3IgeW91IHRvIGpvaW4gdXMhYFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZV9kaXYpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0X2Rpdik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG59XG5cbmV4cG9ydCB7XG4gICAgd2VsY29tZVRhYixcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge3dlbGNvbWVUYWJ9IGZyb20gJy4vd2VsY29tZS5qcyc7XG5pbXBvcnQge21lbnVUYWJ9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQge2NvbnRhY3RUYWJ9IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQge3JlbmRlclBhZ2V9IGZyb20gJy4vcGFnZVJlbmRlci5qcyc7XG5cbnJlbmRlclBhZ2UoKTtcbndlbGNvbWVUYWIoKTtcbi8vU3dpdGNoaW5nIGJldHdlZW4gdGFic1xuY29uc3Qgc3dpdGNoVGFiID0gKGJ0bikgPT4ge1xuICAgIC8vZGVsZXRlIGV4aXN0aW5nIGNvbnRlbnRcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lclswXS5yZW1vdmUoKTtcbiAgICAvL3VwZGF0aW5nIHRoZSBjb250ZW50IGJhc2VkIG9uIHRoZSB0YWIgY2xpY2tlZFxuICAgIGlmIChidG4udGV4dENvbnRlbnQgPT09ICdXZWxjb21lJykge1xuICAgICAgICB3ZWxjb21lVGFiKClcbiAgICB9IGVsc2UgaWYgKGJ0bi50ZXh0Q29udGVudCA9PT0gJ01lbnUnKSB7XG4gICAgICAgIG1lbnVUYWIoKVxuICAgIH0gZWxzZSBpZiAoYnRuLnRleHRDb250ZW50ID09PSAnQ29udGFjdCcpIHtcbiAgICAgICAgY29udGFjdFRhYigpXG4gICAgfVxufVxubGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbkJ1dHRvbicpO1xuYnRucy5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtzd2l0Y2hUYWIoYnRuKX0pKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9