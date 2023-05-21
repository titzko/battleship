"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  color: #4d4d4d;\n}\nbody #headline {\n  color: blue;\n}\nbody .active:hover {\n  background-color: gray;\n}\nbody .container {\n  display: flex;\n}\nbody #computer-board {\n  cursor: pointer;\n}\nbody .board-wrapper {\n  padding: 100px;\n}\nbody .board-wrapper .board .row {\n  display: flex;\n}\nbody .board-wrapper .board .row .cell {\n  width: 35px;\n  height: 35px;\n  border: 1px solid #ccc;\n}\nbody .board-wrapper .board-label {\n  margin-top: 8px;\n  display: flex;\n  justify-content: center;\n  font-size: x-large;\n  font-weight: 600;\n}\nbody #footer {\n  display: flex;\n  flex-wrap: wrap;\n  height: 200px;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\nbody #footer .ship-wrapper {\n  display: none;\n  cursor: grab;\n}\nbody #footer .ship-wrapper:first-child {\n  background-color: green;\n  display: flex !important;\n}\nbody #footer .ship-wrapper .cell {\n  width: 35px;\n  height: 35px;\n  border: 1px solid #ccc;\n}\nbody .dragging {\n  opacity: 0.5;\n  cursor: move;\n}\nbody .btn {\n  margin: 32px;\n  color: green;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 8px;\n  background-color: white;\n  border: 1px solid green;\n}\nbody .btn:hover {\n  background-color: green;\n  color: white;\n}\nbody .btn:active {\n  background-color: darkgreen;\n  color: white;\n}\nbody .btn:focus {\n  outline: none;\n}\nbody .active-border {\n  box-shadow: 0 0 10px blue;\n  border: 2px solid blue;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,cAAA;AACD;AACC;EACC,WAAA;AACF;AAIE;EACC,sBAAA;AAFH;AAMC;EACC,aAAA;AAJF;AAOC;EACC,eAAA;AALF;AAQC;EACC,cAAA;AANF;AASG;EACC,aAAA;AAPJ;AASI;EACC,WAAA;EACA,YAAA;EACA,sBAAA;AAPL;AAYE;EACC,eAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;AAVH;AAcC;EACC,aAAA;EACA,eAAA;EACA,aAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;AAZF;AAcE;EACC,aAAA;EACA,YAAA;AAZH;AAcG;EACC,uBAAA;EACA,wBAAA;AAZJ;AAeG;EACC,WAAA;EACA,YAAA;EACA,sBAAA;AAbJ;AAkBC;EACC,YAAA;EACA,YAAA;AAhBF;AAmBC;EACC,YAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,YAAA;EACA,uBAAA;EACA,uBAAA;AAjBF;AAmBE;EACC,uBAAA;EACA,YAAA;AAjBH;AAoBE;EACC,2BAAA;EACA,YAAA;AAlBH;AAsBE;EACC,aAAA;AApBH;AAwBC;EACC,yBAAA;EACA,sBAAA;AAtBF","sourcesContent":["body {\n\theight: 100vh;\n\twidth: 100vw;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tcolor: darken(#ccc, 50%);\n\n\t#headline {\n\t\tcolor: blue;\n\t}\n\n\t.active {\n\n\t\t&:hover {\n\t\t\tbackground-color: darken($color: #fff, $amount: 50%);\n\t\t}\n\t}\n\n\t.container {\n\t\tdisplay: flex;\n\t}\n\n\t#computer-board {\n\t\tcursor: pointer;\n\t}\n\n\t.board-wrapper {\n\t\tpadding: 100px;\n\n\t\t.board {\n\t\t\t.row {\n\t\t\t\tdisplay: flex;\n\n\t\t\t\t.cell {\n\t\t\t\t\twidth: 35px;\n\t\t\t\t\theight: 35px;\n\t\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.board-label {\n\t\t\tmargin-top: 8px;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tfont-size: x-large;\n\t\t\tfont-weight: 600;\n\t\t}\n\t}\n\n\t#footer {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\theight: 200px;\n\t\twidth: 100%;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\n\t\t.ship-wrapper {\n\t\t\tdisplay: none;\n\t\t\tcursor: grab;\n\n\t\t\t&:first-child {\n\t\t\t\tbackground-color: green;\n\t\t\t\tdisplay: flex !important;\n\t\t\t}\n\n\t\t\t.cell {\n\t\t\t\twidth: 35px;\n\t\t\t\theight: 35px;\n\t\t\t\tborder: 1px solid #ccc;\n\t\t\t}\n\t\t}\n\t}\n\n\t.dragging {\n\t\topacity: 0.5;\n\t\tcursor: move;\n\t}\n\n\t.btn {\n\t\tmargin: 32px;\n\t\tcolor: green;\n\t\tpadding: 10px 20px;\n\t\tborder-radius: 5px;\n\t\tfont-size: 16px;\n\t\tcursor: pointer;\n\t\tpadding: 8px;\n\t\tbackground-color: white;\n\t\tborder: 1px solid green;\n\n\t\t&:hover {\n\t\t\tbackground-color: green;\n\t\t\tcolor: white;\n\t\t}\n\n\t\t&:active {\n\t\t\tbackground-color: darkgreen;\n\t\t\tcolor: white;\n\n\t\t}\n\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\n\t.active-border {\n\t\tbox-shadow: 0 0 10px blue;\n\t\tborder: 2px solid blue;\n\t}\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIRECTION_HORIZONTAL": () => (/* binding */ DIRECTION_HORIZONTAL),
/* harmony export */   "DIRECTION_VERTICAL": () => (/* binding */ DIRECTION_VERTICAL),
/* harmony export */   "GAME_DIMENSION": () => (/* binding */ GAME_DIMENSION),
/* harmony export */   "SHIP_DIMENSIONS": () => (/* binding */ SHIP_DIMENSIONS)
/* harmony export */ });
const DIRECTION_HORIZONTAL = "horizontal";
const DIRECTION_VERTICAL = "vertical";
const GAME_DIMENSION = 12;
const SHIP_DIMENSIONS = () => [4, 4, 3, 3, 2, 2];




/***/ }),

/***/ "./src/factories/game.js":
/*!*******************************!*\
  !*** ./src/factories/game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameFactory": () => (/* binding */ gameFactory)
/* harmony export */ });
/* harmony import */ var _gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardFactory */ "./src/factories/gameBoardFactory.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/factories/shipFactory.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _ui_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ui/dom */ "./src/ui/dom.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position */ "./src/factories/position.js");
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playerFactory */ "./src/factories/playerFactory.js");







let gameFactory = () => {
	let _player = null;
	let computer = null;
	let _dom = null;

	const init = function () {
		setupDom.call(this);
		createPlayers.call(this);
	};

	const setupDom = function () {
		this._dom = (0,_ui_dom__WEBPACK_IMPORTED_MODULE_3__.dom)();
		this._dom.initPage();
	};

	const createBoard = () => {
		const board = (0,_gameBoardFactory__WEBPACK_IMPORTED_MODULE_0__.gameBoardFactory)();
		board.createBoard(_constants_constants__WEBPACK_IMPORTED_MODULE_2__.GAME_DIMENSION);
		return board;
	};

	const createPlayers = function () {
		const board1 = createBoard();
		const board2 = createBoard();
		let name = prompt("Enter your name");
		createUser.call(this, "player", board1, false, name);
		createUser.call(this, "computer", board2, true);
		this.computer.placeShipsRandomlyOnBoard(board1);
		// alternative of using call would be to export the function and then -> this.startShipPlacementPhase()
		startShipPlacementPhase.call(this);
	};

	const createUser = function (name, board, isComputer = false, displayName = "Computer") {
		const user = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_5__.player)(board, name, isComputer, displayName);
		isComputer ? (this.computer = user) : (this._player = user);
		return user;
	};

	const handleWin = (player, dom) => {
		alert(`${player.displayName} won! Well played`);
		dom.updateLabel(`${player.displayName} won! Well played`);
	};

	const handleCellClick = function (event) {
		const element = event.target;
		const amountAttacks = this._player.board.attacks.length;
		this._player.turn((0,_position__WEBPACK_IMPORTED_MODULE_4__.position)(element.dataset.y, element.dataset.x));

		// return if user clicks a cell more than once
		if (amountAttacks === this._player.board.attacks.length) {
			return;
		}
		this._player.isWinner() ? handleWin(this._player, this._dom) : this.computer.turn();

		if (this.computer.isWinner()) {
			handleWin(this.computer, this._dom);
		}
	};

	const placeShipOnDrop = function (cell, ships) {
		if (ships.length == 0) {
			return;
		}
		let x = cell.dataset.x;
		let y = cell.dataset.y;
		let direction = cell.dataset.direction === "x" ? _constants_constants__WEBPACK_IMPORTED_MODULE_2__.DIRECTION_HORIZONTAL : _constants_constants__WEBPACK_IMPORTED_MODULE_2__.DIRECTION_VERTICAL;
		let ship_length = ships.shift();
		let ship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.shipFactory)(ship_length);

		this._player.placeShip((0,_position__WEBPACK_IMPORTED_MODULE_4__.position)(Number(y), Number(x)), ship, direction, this.computer.board);
		if (ships.length === 0) {
			startGame.call(this);
			this._dom.updateLabel(`Go ahead and destroy the enemy ships now. May god be with you`);

		}

		this._dom.removePlacementShip();
	};

	const startShipPlacementPhase = function () {
		const ships = (0,_constants_constants__WEBPACK_IMPORTED_MODULE_2__.SHIP_DIMENSIONS)();
		this._dom.initShipPlacements(ships);

		const self = this;
		document.getElementById("computer-board").addEventListener("drop", function (e) {
			const cell = handleDropEvent(e);
			console.log(cell);
			if(!cell) {
				// todo -> make this more pretty -> create dom method
				alert("ship cant be placed here")
				return;
			}
			placeShipOnDrop.call(self, cell, ships);
		});
	};

	const startGame = function () {
		this._dom.changeBoardState();
		const cells = [...document.querySelectorAll(`[data-user*="player"]`)];
		const self = this;
		cells.map((cell) => {
			cell.addEventListener("click", function () {
				handleCellClick.call(self, event);
			});
		});
	};

	const handleDropEvent = (event) => {
		event.preventDefault();
		const data = JSON.parse(event.dataTransfer.getData("text/plain"));
		const target = event.target;
		target.dataset.direction = data.direction;

		const adjustment = data.cellPos;
		const y = target.dataset.y - adjustment;
		const x = target.dataset.x;

		let valid = false;
		data.direction === "x"
			? (valid = data.amount + Number(target.dataset.x) <= _constants_constants__WEBPACK_IMPORTED_MODULE_2__.GAME_DIMENSION)
			: (valid = data.amount + Number(target.dataset.y - adjustment) <= _constants_constants__WEBPACK_IMPORTED_MODULE_2__.GAME_DIMENSION);

		if (!valid) {
			return;
		}

		const adjustedCell = document.querySelector(`.cell[data-user="computer"][data-y="${y}"][data-x="${x}"]`);

		return data.direction === "x" ? event.target : adjustedCell;
	};

	return { _player, computer, init };
};




/***/ }),

/***/ "./src/factories/gameBoardFactory.js":
/*!*******************************************!*\
  !*** ./src/factories/gameBoardFactory.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoardFactory": () => (/* binding */ gameBoardFactory)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.js");


const gameBoardFactory = () => {
	const cells = [];
	const ships = [];
	const attacks = [];

	const createBoard = (dimension) => {
		for (let i = 0; i < dimension; i++) {
			cells.push([]);
			for (let n = 0; n < dimension; n++) {
				cells[i].push(null);
			}
		}
	};

	const isValidPlacement = (ship, position, direction) => {
		return direction === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_HORIZONTAL
			? isValidHorizontalPlacement(ship, position)
			: isValidVerticalPlacement(ship, position);
	};

	const isValidHorizontalPlacement = (ship, position) => {
		const unused = Array.from({ length: ship.length }).every((_, i) => cells[position.y][position.x + i] === null);
		return position.x + ship.length <= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_DIMENSION && unused;
	};

	const isValidVerticalPlacement = (ship, position) => {
		const unused = Array.from({ length: ship.length }).every((_, i) => cells[position.y + i][position.x] === null);
		return position.y + ship.length <= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_DIMENSION && unused;
	};

	const placeShipHorizontal = (ship, position) => {
		if (isValidPlacement(ship, position, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_HORIZONTAL)) {
			for (let i = 0; i < ship.length; i++) {
				cells[position.y][position.x + i] = ship;
			}
		} else {
			console.error(
				`Ship ${ship} with ${ship.length} cant be placed here horizontal: y: ${position.y}, x: ${position.x}`
			);
		}
	};

	const placeShipVertical = (ship, position) => {
		if (isValidPlacement(ship, position, _constants_constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_VERTICAL)) {
			for (let i = 0; i < ship.length; i++) {
				cells[position.y + i][position.x] = ship;
			}
		} else {
			console.error(
				`Ship ${ship} with ${ship.length} cant be placed here vertical: y: ${position.y}, x: ${position.x}`
			);
		}
	};

	const placeShip = (ship, position, direction = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_HORIZONTAL) => {
		direction === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_HORIZONTAL ? placeShipHorizontal(ship, position) : placeShipVertical(ship, position);
		ships.push(ship);
	};

	const checkRemainingShips = () => {
		return !ships.every((ship) => ship.isSunk());
	};

	const handleShipGotHit = (ship) => {
		ship.gotHit();
	};

	const isValidAttack = (pos) => {
		return !attacks.some((attack) => attack.x == pos.x && attack.y == pos.y);
	};

	const receiveAttack = (position, attacker) => {
		let gotHit = false;

		if (!isValidAttack(position)) {
			return;
		}

		attacks.push(position);
		if (cells[position.y][position.x] != null) {
			let ship = cells[position.y][position.x];
			handleShipGotHit(ship);
			gotHit = true;
		}
		markCell(position, attacker, gotHit);
	};

	const markCell = (position, attacker, gotHit) => {
		const cell = document.querySelector(`[data-user='${attacker}'][data-y='${position.y}'][data-x='${position.x}']`);
		if (cell) {
			gotHit ? (cell.style.backgroundColor = "red") : (cell.style.backgroundColor = "black");
		}
	};

	return { cells, createBoard, placeShip, ships, receiveAttack, attacks, checkRemainingShips, isValidPlacement };
};




/***/ }),

/***/ "./src/factories/playerFactory.js":
/*!****************************************!*\
  !*** ./src/factories/playerFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position */ "./src/factories/position.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipFactory */ "./src/factories/shipFactory.js");




const player = (board, name = "", isComputer = false, displayName) => {
	let hasWon = false;

	const turn = (position) => {
		isComputer ? randomAttack() : board.receiveAttack(position, name);
		board.checkRemainingShips() ? (hasWon = false) : (hasWon = true);
	};

	const randomAttack = () => {
		let pos = undefined;

		do {
			pos = (0,_position__WEBPACK_IMPORTED_MODULE_1__.position)(getRandInt(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_DIMENSION), getRandInt(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_DIMENSION));
		} while (!board.attacks.every((attack) => attack.x != pos.x || attack.y != pos.y));
		board.receiveAttack(pos, name);
	};

	const getRandInt = (max) => {
		return Math.floor(Math.random() * (max - 0) + 0);
	};

	const placeShip = (position, ship, direction, _board) => {
		_board.placeShip(ship, position, direction);
		if (!isComputer && direction === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_HORIZONTAL) {
			for (let i = 0; i < ship.length; i++) {
				let cell = document.querySelector(`[data-user='computer'][data-y='${position.y}'][data-x='${position.x + i}']`);
				cell.style.backgroundColor = "green";
			}
		}

		if (!isComputer && direction === _constants_constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_VERTICAL) {
			for (let i = 0; i < ship.length; i++) {
				let cell = document.querySelector(`[data-user='computer'][data-y='${position.y + i}'][data-x='${position.x}']`);
				cell.style.backgroundColor = "green";
			}
		}

		const computerCells = document.querySelectorAll('[data-user="computer"]');
		computerCells.forEach((cell) => {
			cell.classList.add("active");
		});
	};

	const createShip = (length) => {
		return (0,_shipFactory__WEBPACK_IMPORTED_MODULE_2__.shipFactory)(length);
	};

	const placeShipsRandomlyOnBoard = (_board) => {
		(0,_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SHIP_DIMENSIONS)().map((length, i) => {
			let dir;
			getRandInt(2) === 1 ? (dir = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_HORIZONTAL) : (dir = _constants_constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_VERTICAL);

			let ship = createShip(length);
			let pos;
			do {
				pos = (0,_position__WEBPACK_IMPORTED_MODULE_1__.position)(getRandInt(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_DIMENSION - length), getRandInt(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_DIMENSION - length));
			} while (!_board.isValidPlacement(ship, pos, dir));
			placeShip(pos, ship, dir, _board);
		});
	};

	const isWinner = () => hasWon;

	return { name, turn, isWinner, board, placeShip, placeShipsRandomlyOnBoard, displayName };
};




/***/ }),

/***/ "./src/factories/position.js":
/*!***********************************!*\
  !*** ./src/factories/position.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "position": () => (/* binding */ position)
/* harmony export */ });
const position = (_y, _x) => {
	const x = _x;
	const y = _y;
	return { x, y };
};




/***/ }),

/***/ "./src/factories/shipFactory.js":
/*!**************************************!*\
  !*** ./src/factories/shipFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = (initLength) => {
	const hits = 0;
	const gotHit = function () {
		return (this.hits += 1);
	};
	const isSunk = function () {
		return this.hits >= this.length;
	};

	const length = initLength;
	return { hits, length, isSunk, gotHit };
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/game */ "./src/factories/game.js");



function init() {
	(0,_factories_game__WEBPACK_IMPORTED_MODULE_1__.gameFactory)().init();
}

init();


/***/ }),

/***/ "./src/ui/dom.js":
/*!***********************!*\
  !*** ./src/ui/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dom": () => (/* binding */ dom)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.js");


const dom = () => {
	const headline = null;
	const footer = null;
	const shipsToPlace = null;

	const createElement = (htmlTag, id, appender = document.querySelector("body"), _class = "") => {
		const element = document.createElement(htmlTag);
		id && (element.id = `${id}`);
		_class && element.classList.add(_class);
		appender.appendChild(element);
		return element;
	};

	const initPage = function () {
		const body = document.querySelector("body");
		this.headline = createElement("h1", "headline");

		const pageWrapper = createElement("div", "headline", body, "container");
		const playerBoard = renderBoard("player-board", "Enemy Board", "player");
		const computerBoard = renderBoard("computer-board", "Your Board", "computer");
		computerBoard.addEventListener("dragover", handleDragableEvent);

		pageWrapper.appendChild(playerBoard);
		pageWrapper.appendChild(computerBoard);

		const btn = createElement("button", "direction-btn");
		btn.innerHTML = "change Direction";
		btn.classList.add("btn");
		btn.addEventListener("click", changePlacementDirection);
		document.getElementById("computer-board").classList.add("active-border");

		this.footer = createElement("div", "footer");
	};

	const handleDragableEvent = (event) => {
		event.preventDefault();
	};

	const renderBoard = (id, labelText, user) => {
		const wrapper = document.createElement("div");
		wrapper.classList.add("board-wrapper");

		const board = createElement("div", id, wrapper, "board");
		renderCells(board, user);

		const label = createElement("div", "", wrapper, "board-label");
		label.innerHTML = labelText;
		return wrapper;
	};

	const renderCells = (board, user) => {
		for (let i = 0; i < _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_DIMENSION; i++) {
			let row = createElement("div", "", board, "row");
			for (let j = 0; j < _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_DIMENSION; j++) {
				let cell = createElement("div", "", row, "cell");
				cell.dataset.user = user;
				cell.dataset.y = i;
				cell.dataset.x = j;
			}
		}
	};

	function initShipPlacements(ships) {
		this.shipsToPlace = [...ships];
		this.headline.innerHTML = "Place your ships on your own board!";
		ships.forEach((ship) => drawShip.call(this, ship));
	}

	function drawShip(ship) {
		const wrapper = createElement("div", "", this.footer, "ship-wrapper");
		for (let i = 0; i < ship; i++) {
			let cell = createElement("div", "", wrapper, "cell");
			cell.addEventListener("mousedown", function () {
				wrapper.dataset.dragedCellPosition = i;
			});
		}

		wrapper.setAttribute("draggable", "true");
		wrapper.dataset.length = ship;
		wrapper.dataset.direction = "x";

		wrapper.addEventListener("dragstart", function (event) {
			handleDragStart(event, ship);
		});
		wrapper.addEventListener("dragend", function (event) {
			event.target.classList.remove("dragging");
		});
	}

	const handleDragStart = (event, ship) => {
		const direction = event.target.dataset.direction;
		const cellPos = event.target.dataset.dragedCellPosition;

		event.target.classList.add("dragging");
		event.dataTransfer.setData("text/plain", JSON.stringify({ direction, amount: ship, cellPos }));
	};

	const changePlacementDirection = () => {
		const elements = [...document.querySelectorAll(".ship-wrapper")];
		const direction = elements[0].dataset.direction;
		const changeToY = direction === "x";
		elements.forEach((element) => {
			element.style.flexDirection = changeToY ? "column" : "row";
			element.dataset.direction = changeToY ? "y" : "x";
		});
	};

	function updateLabel(label) {
		this.headline.innerHTML = label;
	}

	function removePlacementShip() {
		this.footer.firstElementChild.remove();
	}

	function changeBoardState() {
		document.getElementById("direction-btn").remove();
		document.getElementById("computer-board").classList.remove("active-border");
		document.getElementById("player-board").classList.add("active-border");

		const playerCells = document.querySelectorAll('[data-user="player"]');
		playerCells.forEach((cell) => {
			cell.classList.add("active");
		});

		const computerCells = document.querySelectorAll('[data-user="computer"]');
		computerCells.forEach((cell) => {
			cell.classList.remove("active");
		});

		document.getElementById("player-board").style.cursor = "pointer";
		document.getElementById("computer-board").style.cursor = "not-allowed";
	}

	return {
		initPage,
		initShipPlacements,
		headline,
		footer,
		shipsToPlace,
		removePlacementShip,
		updateLabel,
		changeBoardState,
	};
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdEQUFnRCxrQkFBa0IsaUJBQWlCLGNBQWMsZUFBZSxrQkFBa0Isd0JBQXdCLDRCQUE0QiwyQkFBMkIsbUJBQW1CLEdBQUcsa0JBQWtCLGdCQUFnQixHQUFHLHNCQUFzQiwyQkFBMkIsR0FBRyxtQkFBbUIsa0JBQWtCLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyxtQ0FBbUMsa0JBQWtCLEdBQUcseUNBQXlDLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcsb0NBQW9DLG9CQUFvQixrQkFBa0IsNEJBQTRCLHVCQUF1QixxQkFBcUIsR0FBRyxnQkFBZ0Isa0JBQWtCLG9CQUFvQixrQkFBa0IsZ0JBQWdCLDRCQUE0Qix3QkFBd0IsR0FBRyw4QkFBOEIsa0JBQWtCLGlCQUFpQixHQUFHLDBDQUEwQyw0QkFBNEIsNkJBQTZCLEdBQUcsb0NBQW9DLGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcsa0JBQWtCLGlCQUFpQixpQkFBaUIsR0FBRyxhQUFhLGlCQUFpQixpQkFBaUIsdUJBQXVCLHVCQUF1QixvQkFBb0Isb0JBQW9CLGlCQUFpQiw0QkFBNEIsNEJBQTRCLEdBQUcsbUJBQW1CLDRCQUE0QixpQkFBaUIsR0FBRyxvQkFBb0IsZ0NBQWdDLGlCQUFpQixHQUFHLG1CQUFtQixrQkFBa0IsR0FBRyx1QkFBdUIsOEJBQThCLDJCQUEyQixHQUFHLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLGdDQUFnQyxrQkFBa0IsaUJBQWlCLGNBQWMsZUFBZSxrQkFBa0Isd0JBQXdCLDRCQUE0QiwyQkFBMkIsNkJBQTZCLGlCQUFpQixrQkFBa0IsS0FBSyxlQUFlLGlCQUFpQiw2REFBNkQsT0FBTyxLQUFLLGtCQUFrQixvQkFBb0IsS0FBSyx1QkFBdUIsc0JBQXNCLEtBQUssc0JBQXNCLHFCQUFxQixnQkFBZ0IsY0FBYyx3QkFBd0IsbUJBQW1CLHdCQUF3Qix5QkFBeUIsbUNBQW1DLFdBQVcsU0FBUyxPQUFPLHNCQUFzQix3QkFBd0Isc0JBQXNCLGdDQUFnQywyQkFBMkIseUJBQXlCLE9BQU8sS0FBSyxlQUFlLG9CQUFvQixzQkFBc0Isb0JBQW9CLGtCQUFrQiw4QkFBOEIsMEJBQTBCLHVCQUF1QixzQkFBc0IscUJBQXFCLHlCQUF5QixrQ0FBa0MsbUNBQW1DLFNBQVMsaUJBQWlCLHNCQUFzQix1QkFBdUIsaUNBQWlDLFNBQVMsT0FBTyxLQUFLLGlCQUFpQixtQkFBbUIsbUJBQW1CLEtBQUssWUFBWSxtQkFBbUIsbUJBQW1CLHlCQUF5Qix5QkFBeUIsc0JBQXNCLHNCQUFzQixtQkFBbUIsOEJBQThCLDhCQUE4QixpQkFBaUIsZ0NBQWdDLHFCQUFxQixPQUFPLGtCQUFrQixvQ0FBb0MscUJBQXFCLFNBQVMsaUJBQWlCLHNCQUFzQixPQUFPLEtBQUssc0JBQXNCLGdDQUFnQyw2QkFBNkIsS0FBSyxHQUFHLHFCQUFxQjtBQUNqMUk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTC9CO0FBQ1Y7QUFDdUU7QUFDakY7QUFDSTtBQUNHOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsNENBQUc7QUFDakI7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtRUFBZ0I7QUFDaEMsb0JBQW9CLGdFQUFjO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHNEQUFNO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CLHFCQUFxQixvQkFBb0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFROztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxzRUFBb0IsR0FBRyxvRUFBa0I7QUFDNUY7QUFDQSxhQUFhLHlEQUFXOztBQUV4Qix5QkFBeUIsbURBQVE7QUFDakM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IscUVBQWU7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsZ0VBQWM7QUFDdEUscUVBQXFFLGdFQUFjOztBQUVuRjtBQUNBO0FBQ0E7O0FBRUEscUZBQXFGLEVBQUUsYUFBYSxFQUFFOztBQUV0RztBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3STJFOztBQUVsRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsc0VBQW9CO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixxQkFBcUI7QUFDbkQscUNBQXFDLGdFQUFjO0FBQ25EOztBQUVBO0FBQ0EsOEJBQThCLHFCQUFxQjtBQUNuRCxxQ0FBcUMsZ0VBQWM7QUFDbkQ7O0FBRUE7QUFDQSx1Q0FBdUMsc0VBQW9CO0FBQzNELG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLFlBQVksTUFBTSxPQUFPLGFBQWEscUNBQXFDLFdBQVcsT0FBTyxXQUFXO0FBQ3hHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxvRUFBa0I7QUFDekQsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsWUFBWSxNQUFNLE9BQU8sYUFBYSxtQ0FBbUMsV0FBVyxPQUFPLFdBQVc7QUFDdEc7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxzRUFBb0I7QUFDcEUsZ0JBQWdCLHNFQUFvQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsU0FBUyxhQUFhLFdBQVcsYUFBYSxXQUFXO0FBQzlHO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HdUY7QUFDN0U7QUFDTTs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxtREFBUSxZQUFZLGdFQUFjLGNBQWMsZ0VBQWM7QUFDdkUsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsc0VBQW9CO0FBQ3ZELG1CQUFtQixpQkFBaUI7QUFDcEMsd0VBQXdFLFdBQVcsYUFBYSxlQUFlO0FBQy9HO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsb0VBQWtCO0FBQ3JELG1CQUFtQixpQkFBaUI7QUFDcEMsd0VBQXdFLGVBQWUsYUFBYSxXQUFXO0FBQy9HO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxTQUFTLHlEQUFXO0FBQ3BCOztBQUVBO0FBQ0EsRUFBRSxxRUFBZTtBQUNqQjtBQUNBLGdDQUFnQyxzRUFBb0IsV0FBVyxvRUFBa0I7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbURBQVEsWUFBWSxnRUFBYyx1QkFBdUIsZ0VBQWM7QUFDakYsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLFVBQVU7QUFDVjs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7OztBQ3RFbEI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7O0FDTnBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRXVCOzs7Ozs7Ozs7Ozs7OztBQ2JEO0FBQ3lCOztBQUUvQztBQUNBLENBQUMsNERBQVc7QUFDWjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1B3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixHQUFHO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsSUFBSSxnRUFBYyxFQUFFO0FBQ3RDO0FBQ0EsbUJBQW1CLElBQUksZ0VBQWMsRUFBRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsa0NBQWtDO0FBQzlGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVCb2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6ICM0ZDRkNGQ7XFxufVxcbmJvZHkgI2hlYWRsaW5lIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5ib2R5IC5hY3RpdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuYm9keSAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmJvZHkgI2NvbXB1dGVyLWJvYXJkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYm9keSAuYm9hcmQtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAxMDBweDtcXG59XFxuYm9keSAuYm9hcmQtd3JhcHBlciAuYm9hcmQgLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5ib2R5IC5ib2FyZC13cmFwcGVyIC5ib2FyZCAucm93IC5jZWxsIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG59XFxuYm9keSAuYm9hcmQtd3JhcHBlciAuYm9hcmQtbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuYm9keSAjZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmJvZHkgI2Zvb3RlciAuc2hpcC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcbmJvZHkgI2Zvb3RlciAuc2hpcC13cmFwcGVyOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbn1cXG5ib2R5ICNmb290ZXIgLnNoaXAtd3JhcHBlciAuY2VsbCB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxufVxcbmJvZHkgLmRyYWdnaW5nIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuYm9keSAuYnRuIHtcXG4gIG1hcmdpbjogMzJweDtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxufVxcbmJvZHkgLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuYm9keSAuYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmJvZHkgLmJ0bjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5ib2R5IC5hY3RpdmUtYm9yZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsdWU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNEO0FBQ0M7RUFDQyxXQUFBO0FBQ0Y7QUFJRTtFQUNDLHNCQUFBO0FBRkg7QUFNQztFQUNDLGFBQUE7QUFKRjtBQU9DO0VBQ0MsZUFBQTtBQUxGO0FBUUM7RUFDQyxjQUFBO0FBTkY7QUFTRztFQUNDLGFBQUE7QUFQSjtBQVNJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQVBMO0FBWUU7RUFDQyxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVZIO0FBY0M7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVpGO0FBY0U7RUFDQyxhQUFBO0VBQ0EsWUFBQTtBQVpIO0FBY0c7RUFDQyx1QkFBQTtFQUNBLHdCQUFBO0FBWko7QUFlRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFiSjtBQWtCQztFQUNDLFlBQUE7RUFDQSxZQUFBO0FBaEJGO0FBbUJDO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQWpCRjtBQW1CRTtFQUNDLHVCQUFBO0VBQ0EsWUFBQTtBQWpCSDtBQW9CRTtFQUNDLDJCQUFBO0VBQ0EsWUFBQTtBQWxCSDtBQXNCRTtFQUNDLGFBQUE7QUFwQkg7QUF3QkM7RUFDQyx5QkFBQTtFQUNBLHNCQUFBO0FBdEJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGNvbG9yOiBkYXJrZW4oI2NjYywgNTAlKTtcXG5cXG5cXHQjaGVhZGxpbmUge1xcblxcdFxcdGNvbG9yOiBibHVlO1xcblxcdH1cXG5cXG5cXHQuYWN0aXZlIHtcXG5cXG5cXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAjZmZmLCAkYW1vdW50OiA1MCUpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LmNvbnRhaW5lciB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHR9XFxuXFxuXFx0I2NvbXB1dGVyLWJvYXJkIHtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0fVxcblxcblxcdC5ib2FyZC13cmFwcGVyIHtcXG5cXHRcXHRwYWRkaW5nOiAxMDBweDtcXG5cXG5cXHRcXHQuYm9hcmQge1xcblxcdFxcdFxcdC5yb3cge1xcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFxuXFx0XFx0XFx0XFx0LmNlbGwge1xcblxcdFxcdFxcdFxcdFxcdHdpZHRoOiAzNXB4O1xcblxcdFxcdFxcdFxcdFxcdGhlaWdodDogMzVweDtcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdC5ib2FyZC1sYWJlbCB7XFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogOHB4O1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiB4LWxhcmdlO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQjZm9vdGVyIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRcXHRoZWlnaHQ6IDIwMHB4O1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0XFx0LnNoaXAtd3JhcHBlciB7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHRcXHRjdXJzb3I6IGdyYWI7XFxuXFxuXFx0XFx0XFx0JjpmaXJzdC1jaGlsZCB7XFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHQuY2VsbCB7XFxuXFx0XFx0XFx0XFx0d2lkdGg6IDM1cHg7XFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAzNXB4O1xcblxcdFxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LmRyYWdnaW5nIHtcXG5cXHRcXHRvcGFjaXR5OiAwLjU7XFxuXFx0XFx0Y3Vyc29yOiBtb3ZlO1xcblxcdH1cXG5cXG5cXHQuYnRuIHtcXG5cXHRcXHRtYXJnaW46IDMycHg7XFxuXFx0XFx0Y29sb3I6IGdyZWVuO1xcblxcdFxcdHBhZGRpbmc6IDEwcHggMjBweDtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXHRwYWRkaW5nOiA4cHg7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuXFxuXFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmOmFjdGl2ZSB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xcblxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXG5cXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jjpmb2N1cyB7XFxuXFx0XFx0XFx0b3V0bGluZTogbm9uZTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5hY3RpdmUtYm9yZGVyIHtcXG5cXHRcXHRib3gtc2hhZG93OiAwIDAgMTBweCBibHVlO1xcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgRElSRUNUSU9OX0hPUklaT05UQUwgPSBcImhvcml6b250YWxcIjtcbmNvbnN0IERJUkVDVElPTl9WRVJUSUNBTCA9IFwidmVydGljYWxcIjtcbmNvbnN0IEdBTUVfRElNRU5TSU9OID0gMTI7XG5jb25zdCBTSElQX0RJTUVOU0lPTlMgPSAoKSA9PiBbNCwgNCwgMywgMywgMiwgMl07XG5cbmV4cG9ydCB7IERJUkVDVElPTl9IT1JJWk9OVEFMLCBESVJFQ1RJT05fVkVSVElDQUwsIEdBTUVfRElNRU5TSU9OLCBTSElQX0RJTUVOU0lPTlMgfTtcbiIsImltcG9ydCB7IGdhbWVCb2FyZEZhY3RvcnkgfSBmcm9tIFwiLi9nYW1lQm9hcmRGYWN0b3J5XCI7XG5pbXBvcnQgeyBzaGlwRmFjdG9yeSB9IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5pbXBvcnQgeyBHQU1FX0RJTUVOU0lPTiwgRElSRUNUSU9OX0hPUklaT05UQUwsIERJUkVDVElPTl9WRVJUSUNBTCwgU0hJUF9ESU1FTlNJT05TIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbSB9IGZyb20gXCIuLy4uL3VpL2RvbVwiO1xuaW1wb3J0IHsgcG9zaXRpb24gfSBmcm9tIFwiLi9wb3NpdGlvblwiO1xuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSBcIi4vcGxheWVyRmFjdG9yeVwiO1xuXG5sZXQgZ2FtZUZhY3RvcnkgPSAoKSA9PiB7XG5cdGxldCBfcGxheWVyID0gbnVsbDtcblx0bGV0IGNvbXB1dGVyID0gbnVsbDtcblx0bGV0IF9kb20gPSBudWxsO1xuXG5cdGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0c2V0dXBEb20uY2FsbCh0aGlzKTtcblx0XHRjcmVhdGVQbGF5ZXJzLmNhbGwodGhpcyk7XG5cdH07XG5cblx0Y29uc3Qgc2V0dXBEb20gPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5fZG9tID0gZG9tKCk7XG5cdFx0dGhpcy5fZG9tLmluaXRQYWdlKCk7XG5cdH07XG5cblx0Y29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgYm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG5cdFx0Ym9hcmQuY3JlYXRlQm9hcmQoR0FNRV9ESU1FTlNJT04pO1xuXHRcdHJldHVybiBib2FyZDtcblx0fTtcblxuXHRjb25zdCBjcmVhdGVQbGF5ZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGJvYXJkMSA9IGNyZWF0ZUJvYXJkKCk7XG5cdFx0Y29uc3QgYm9hcmQyID0gY3JlYXRlQm9hcmQoKTtcblx0XHRsZXQgbmFtZSA9IHByb21wdChcIkVudGVyIHlvdXIgbmFtZVwiKTtcblx0XHRjcmVhdGVVc2VyLmNhbGwodGhpcywgXCJwbGF5ZXJcIiwgYm9hcmQxLCBmYWxzZSwgbmFtZSk7XG5cdFx0Y3JlYXRlVXNlci5jYWxsKHRoaXMsIFwiY29tcHV0ZXJcIiwgYm9hcmQyLCB0cnVlKTtcblx0XHR0aGlzLmNvbXB1dGVyLnBsYWNlU2hpcHNSYW5kb21seU9uQm9hcmQoYm9hcmQxKTtcblx0XHQvLyBhbHRlcm5hdGl2ZSBvZiB1c2luZyBjYWxsIHdvdWxkIGJlIHRvIGV4cG9ydCB0aGUgZnVuY3Rpb24gYW5kIHRoZW4gLT4gdGhpcy5zdGFydFNoaXBQbGFjZW1lbnRQaGFzZSgpXG5cdFx0c3RhcnRTaGlwUGxhY2VtZW50UGhhc2UuY2FsbCh0aGlzKTtcblx0fTtcblxuXHRjb25zdCBjcmVhdGVVc2VyID0gZnVuY3Rpb24gKG5hbWUsIGJvYXJkLCBpc0NvbXB1dGVyID0gZmFsc2UsIGRpc3BsYXlOYW1lID0gXCJDb21wdXRlclwiKSB7XG5cdFx0Y29uc3QgdXNlciA9IHBsYXllcihib2FyZCwgbmFtZSwgaXNDb21wdXRlciwgZGlzcGxheU5hbWUpO1xuXHRcdGlzQ29tcHV0ZXIgPyAodGhpcy5jb21wdXRlciA9IHVzZXIpIDogKHRoaXMuX3BsYXllciA9IHVzZXIpO1xuXHRcdHJldHVybiB1c2VyO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVdpbiA9IChwbGF5ZXIsIGRvbSkgPT4ge1xuXHRcdGFsZXJ0KGAke3BsYXllci5kaXNwbGF5TmFtZX0gd29uISBXZWxsIHBsYXllZGApO1xuXHRcdGRvbS51cGRhdGVMYWJlbChgJHtwbGF5ZXIuZGlzcGxheU5hbWV9IHdvbiEgV2VsbCBwbGF5ZWRgKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGNvbnN0IGFtb3VudEF0dGFja3MgPSB0aGlzLl9wbGF5ZXIuYm9hcmQuYXR0YWNrcy5sZW5ndGg7XG5cdFx0dGhpcy5fcGxheWVyLnR1cm4ocG9zaXRpb24oZWxlbWVudC5kYXRhc2V0LnksIGVsZW1lbnQuZGF0YXNldC54KSk7XG5cblx0XHQvLyByZXR1cm4gaWYgdXNlciBjbGlja3MgYSBjZWxsIG1vcmUgdGhhbiBvbmNlXG5cdFx0aWYgKGFtb3VudEF0dGFja3MgPT09IHRoaXMuX3BsYXllci5ib2FyZC5hdHRhY2tzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl9wbGF5ZXIuaXNXaW5uZXIoKSA/IGhhbmRsZVdpbih0aGlzLl9wbGF5ZXIsIHRoaXMuX2RvbSkgOiB0aGlzLmNvbXB1dGVyLnR1cm4oKTtcblxuXHRcdGlmICh0aGlzLmNvbXB1dGVyLmlzV2lubmVyKCkpIHtcblx0XHRcdGhhbmRsZVdpbih0aGlzLmNvbXB1dGVyLCB0aGlzLl9kb20pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBwbGFjZVNoaXBPbkRyb3AgPSBmdW5jdGlvbiAoY2VsbCwgc2hpcHMpIHtcblx0XHRpZiAoc2hpcHMubGVuZ3RoID09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IHggPSBjZWxsLmRhdGFzZXQueDtcblx0XHRsZXQgeSA9IGNlbGwuZGF0YXNldC55O1xuXHRcdGxldCBkaXJlY3Rpb24gPSBjZWxsLmRhdGFzZXQuZGlyZWN0aW9uID09PSBcInhcIiA/IERJUkVDVElPTl9IT1JJWk9OVEFMIDogRElSRUNUSU9OX1ZFUlRJQ0FMO1xuXHRcdGxldCBzaGlwX2xlbmd0aCA9IHNoaXBzLnNoaWZ0KCk7XG5cdFx0bGV0IHNoaXAgPSBzaGlwRmFjdG9yeShzaGlwX2xlbmd0aCk7XG5cblx0XHR0aGlzLl9wbGF5ZXIucGxhY2VTaGlwKHBvc2l0aW9uKE51bWJlcih5KSwgTnVtYmVyKHgpKSwgc2hpcCwgZGlyZWN0aW9uLCB0aGlzLmNvbXB1dGVyLmJvYXJkKTtcblx0XHRpZiAoc2hpcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRzdGFydEdhbWUuY2FsbCh0aGlzKTtcblx0XHRcdHRoaXMuX2RvbS51cGRhdGVMYWJlbChgR28gYWhlYWQgYW5kIGRlc3Ryb3kgdGhlIGVuZW15IHNoaXBzIG5vdy4gTWF5IGdvZCBiZSB3aXRoIHlvdWApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5fZG9tLnJlbW92ZVBsYWNlbWVudFNoaXAoKTtcblx0fTtcblxuXHRjb25zdCBzdGFydFNoaXBQbGFjZW1lbnRQaGFzZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBzaGlwcyA9IFNISVBfRElNRU5TSU9OUygpO1xuXHRcdHRoaXMuX2RvbS5pbml0U2hpcFBsYWNlbWVudHMoc2hpcHMpO1xuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlci1ib2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0Y29uc3QgY2VsbCA9IGhhbmRsZURyb3BFdmVudChlKTtcblx0XHRcdGNvbnNvbGUubG9nKGNlbGwpO1xuXHRcdFx0aWYoIWNlbGwpIHtcblx0XHRcdFx0Ly8gdG9kbyAtPiBtYWtlIHRoaXMgbW9yZSBwcmV0dHkgLT4gY3JlYXRlIGRvbSBtZXRob2Rcblx0XHRcdFx0YWxlcnQoXCJzaGlwIGNhbnQgYmUgcGxhY2VkIGhlcmVcIilcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cGxhY2VTaGlwT25Ecm9wLmNhbGwoc2VsZiwgY2VsbCwgc2hpcHMpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHN0YXJ0R2FtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLl9kb20uY2hhbmdlQm9hcmRTdGF0ZSgpO1xuXHRcdGNvbnN0IGNlbGxzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXVzZXIqPVwicGxheWVyXCJdYCldO1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuXHRcdFx0Y2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRoYW5kbGVDZWxsQ2xpY2suY2FsbChzZWxmLCBldmVudCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVEcm9wRXZlbnQgPSAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKSk7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdHRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbiA9IGRhdGEuZGlyZWN0aW9uO1xuXG5cdFx0Y29uc3QgYWRqdXN0bWVudCA9IGRhdGEuY2VsbFBvcztcblx0XHRjb25zdCB5ID0gdGFyZ2V0LmRhdGFzZXQueSAtIGFkanVzdG1lbnQ7XG5cdFx0Y29uc3QgeCA9IHRhcmdldC5kYXRhc2V0Lng7XG5cblx0XHRsZXQgdmFsaWQgPSBmYWxzZTtcblx0XHRkYXRhLmRpcmVjdGlvbiA9PT0gXCJ4XCJcblx0XHRcdD8gKHZhbGlkID0gZGF0YS5hbW91bnQgKyBOdW1iZXIodGFyZ2V0LmRhdGFzZXQueCkgPD0gR0FNRV9ESU1FTlNJT04pXG5cdFx0XHQ6ICh2YWxpZCA9IGRhdGEuYW1vdW50ICsgTnVtYmVyKHRhcmdldC5kYXRhc2V0LnkgLSBhZGp1c3RtZW50KSA8PSBHQU1FX0RJTUVOU0lPTik7XG5cblx0XHRpZiAoIXZhbGlkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWRqdXN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGxbZGF0YS11c2VyPVwiY29tcHV0ZXJcIl1bZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG5cblx0XHRyZXR1cm4gZGF0YS5kaXJlY3Rpb24gPT09IFwieFwiID8gZXZlbnQudGFyZ2V0IDogYWRqdXN0ZWRDZWxsO1xuXHR9O1xuXG5cdHJldHVybiB7IF9wbGF5ZXIsIGNvbXB1dGVyLCBpbml0IH07XG59O1xuXG5leHBvcnQgeyBnYW1lRmFjdG9yeSB9O1xuIiwiaW1wb3J0IHsgRElSRUNUSU9OX0hPUklaT05UQUwsIERJUkVDVElPTl9WRVJUSUNBTCwgR0FNRV9ESU1FTlNJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBnYW1lQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuXHRjb25zdCBjZWxscyA9IFtdO1xuXHRjb25zdCBzaGlwcyA9IFtdO1xuXHRjb25zdCBhdHRhY2tzID0gW107XG5cblx0Y29uc3QgY3JlYXRlQm9hcmQgPSAoZGltZW5zaW9uKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkaW1lbnNpb247IGkrKykge1xuXHRcdFx0Y2VsbHMucHVzaChbXSk7XG5cdFx0XHRmb3IgKGxldCBuID0gMDsgbiA8IGRpbWVuc2lvbjsgbisrKSB7XG5cdFx0XHRcdGNlbGxzW2ldLnB1c2gobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGlzVmFsaWRQbGFjZW1lbnQgPSAoc2hpcCwgcG9zaXRpb24sIGRpcmVjdGlvbikgPT4ge1xuXHRcdHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9IT1JJWk9OVEFMXG5cdFx0XHQ/IGlzVmFsaWRIb3Jpem9udGFsUGxhY2VtZW50KHNoaXAsIHBvc2l0aW9uKVxuXHRcdFx0OiBpc1ZhbGlkVmVydGljYWxQbGFjZW1lbnQoc2hpcCwgcG9zaXRpb24pO1xuXHR9O1xuXG5cdGNvbnN0IGlzVmFsaWRIb3Jpem9udGFsUGxhY2VtZW50ID0gKHNoaXAsIHBvc2l0aW9uKSA9PiB7XG5cdFx0Y29uc3QgdW51c2VkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2hpcC5sZW5ndGggfSkuZXZlcnkoKF8sIGkpID0+IGNlbGxzW3Bvc2l0aW9uLnldW3Bvc2l0aW9uLnggKyBpXSA9PT0gbnVsbCk7XG5cdFx0cmV0dXJuIHBvc2l0aW9uLnggKyBzaGlwLmxlbmd0aCA8PSBHQU1FX0RJTUVOU0lPTiAmJiB1bnVzZWQ7XG5cdH07XG5cblx0Y29uc3QgaXNWYWxpZFZlcnRpY2FsUGxhY2VtZW50ID0gKHNoaXAsIHBvc2l0aW9uKSA9PiB7XG5cdFx0Y29uc3QgdW51c2VkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2hpcC5sZW5ndGggfSkuZXZlcnkoKF8sIGkpID0+IGNlbGxzW3Bvc2l0aW9uLnkgKyBpXVtwb3NpdGlvbi54XSA9PT0gbnVsbCk7XG5cdFx0cmV0dXJuIHBvc2l0aW9uLnkgKyBzaGlwLmxlbmd0aCA8PSBHQU1FX0RJTUVOU0lPTiAmJiB1bnVzZWQ7XG5cdH07XG5cblx0Y29uc3QgcGxhY2VTaGlwSG9yaXpvbnRhbCA9IChzaGlwLCBwb3NpdGlvbikgPT4ge1xuXHRcdGlmIChpc1ZhbGlkUGxhY2VtZW50KHNoaXAsIHBvc2l0aW9uLCBESVJFQ1RJT05fSE9SSVpPTlRBTCkpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjZWxsc1twb3NpdGlvbi55XVtwb3NpdGlvbi54ICsgaV0gPSBzaGlwO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFxuXHRcdFx0XHRgU2hpcCAke3NoaXB9IHdpdGggJHtzaGlwLmxlbmd0aH0gY2FudCBiZSBwbGFjZWQgaGVyZSBob3Jpem9udGFsOiB5OiAke3Bvc2l0aW9uLnl9LCB4OiAke3Bvc2l0aW9uLnh9YFxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcGxhY2VTaGlwVmVydGljYWwgPSAoc2hpcCwgcG9zaXRpb24pID0+IHtcblx0XHRpZiAoaXNWYWxpZFBsYWNlbWVudChzaGlwLCBwb3NpdGlvbiwgRElSRUNUSU9OX1ZFUlRJQ0FMKSkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNlbGxzW3Bvc2l0aW9uLnkgKyBpXVtwb3NpdGlvbi54XSA9IHNoaXA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXG5cdFx0XHRcdGBTaGlwICR7c2hpcH0gd2l0aCAke3NoaXAubGVuZ3RofSBjYW50IGJlIHBsYWNlZCBoZXJlIHZlcnRpY2FsOiB5OiAke3Bvc2l0aW9uLnl9LCB4OiAke3Bvc2l0aW9uLnh9YFxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHBvc2l0aW9uLCBkaXJlY3Rpb24gPSBESVJFQ1RJT05fSE9SSVpPTlRBTCkgPT4ge1xuXHRcdGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0hPUklaT05UQUwgPyBwbGFjZVNoaXBIb3Jpem9udGFsKHNoaXAsIHBvc2l0aW9uKSA6IHBsYWNlU2hpcFZlcnRpY2FsKHNoaXAsIHBvc2l0aW9uKTtcblx0XHRzaGlwcy5wdXNoKHNoaXApO1xuXHR9O1xuXG5cdGNvbnN0IGNoZWNrUmVtYWluaW5nU2hpcHMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICFzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2hpcEdvdEhpdCA9IChzaGlwKSA9PiB7XG5cdFx0c2hpcC5nb3RIaXQoKTtcblx0fTtcblxuXHRjb25zdCBpc1ZhbGlkQXR0YWNrID0gKHBvcykgPT4ge1xuXHRcdHJldHVybiAhYXR0YWNrcy5zb21lKChhdHRhY2spID0+IGF0dGFjay54ID09IHBvcy54ICYmIGF0dGFjay55ID09IHBvcy55KTtcblx0fTtcblxuXHRjb25zdCByZWNlaXZlQXR0YWNrID0gKHBvc2l0aW9uLCBhdHRhY2tlcikgPT4ge1xuXHRcdGxldCBnb3RIaXQgPSBmYWxzZTtcblxuXHRcdGlmICghaXNWYWxpZEF0dGFjayhwb3NpdGlvbikpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRhdHRhY2tzLnB1c2gocG9zaXRpb24pO1xuXHRcdGlmIChjZWxsc1twb3NpdGlvbi55XVtwb3NpdGlvbi54XSAhPSBudWxsKSB7XG5cdFx0XHRsZXQgc2hpcCA9IGNlbGxzW3Bvc2l0aW9uLnldW3Bvc2l0aW9uLnhdO1xuXHRcdFx0aGFuZGxlU2hpcEdvdEhpdChzaGlwKTtcblx0XHRcdGdvdEhpdCA9IHRydWU7XG5cdFx0fVxuXHRcdG1hcmtDZWxsKHBvc2l0aW9uLCBhdHRhY2tlciwgZ290SGl0KTtcblx0fTtcblxuXHRjb25zdCBtYXJrQ2VsbCA9IChwb3NpdGlvbiwgYXR0YWNrZXIsIGdvdEhpdCkgPT4ge1xuXHRcdGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS11c2VyPScke2F0dGFja2VyfSddW2RhdGEteT0nJHtwb3NpdGlvbi55fSddW2RhdGEteD0nJHtwb3NpdGlvbi54fSddYCk7XG5cdFx0aWYgKGNlbGwpIHtcblx0XHRcdGdvdEhpdCA/IChjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCIpIDogKGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHsgY2VsbHMsIGNyZWF0ZUJvYXJkLCBwbGFjZVNoaXAsIHNoaXBzLCByZWNlaXZlQXR0YWNrLCBhdHRhY2tzLCBjaGVja1JlbWFpbmluZ1NoaXBzLCBpc1ZhbGlkUGxhY2VtZW50IH07XG59O1xuXG5leHBvcnQgeyBnYW1lQm9hcmRGYWN0b3J5IH07XG4iLCJpbXBvcnQgeyBHQU1FX0RJTUVOU0lPTiwgRElSRUNUSU9OX0hPUklaT05UQUwsIERJUkVDVElPTl9WRVJUSUNBTCwgU0hJUF9ESU1FTlNJT05TIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBvc2l0aW9uIH0gZnJvbSBcIi4vcG9zaXRpb25cIjtcbmltcG9ydCB7IHNoaXBGYWN0b3J5IH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcblxuY29uc3QgcGxheWVyID0gKGJvYXJkLCBuYW1lID0gXCJcIiwgaXNDb21wdXRlciA9IGZhbHNlLCBkaXNwbGF5TmFtZSkgPT4ge1xuXHRsZXQgaGFzV29uID0gZmFsc2U7XG5cblx0Y29uc3QgdHVybiA9IChwb3NpdGlvbikgPT4ge1xuXHRcdGlzQ29tcHV0ZXIgPyByYW5kb21BdHRhY2soKSA6IGJvYXJkLnJlY2VpdmVBdHRhY2socG9zaXRpb24sIG5hbWUpO1xuXHRcdGJvYXJkLmNoZWNrUmVtYWluaW5nU2hpcHMoKSA/IChoYXNXb24gPSBmYWxzZSkgOiAoaGFzV29uID0gdHJ1ZSk7XG5cdH07XG5cblx0Y29uc3QgcmFuZG9tQXR0YWNrID0gKCkgPT4ge1xuXHRcdGxldCBwb3MgPSB1bmRlZmluZWQ7XG5cblx0XHRkbyB7XG5cdFx0XHRwb3MgPSBwb3NpdGlvbihnZXRSYW5kSW50KEdBTUVfRElNRU5TSU9OKSwgZ2V0UmFuZEludChHQU1FX0RJTUVOU0lPTikpO1xuXHRcdH0gd2hpbGUgKCFib2FyZC5hdHRhY2tzLmV2ZXJ5KChhdHRhY2spID0+IGF0dGFjay54ICE9IHBvcy54IHx8IGF0dGFjay55ICE9IHBvcy55KSk7XG5cdFx0Ym9hcmQucmVjZWl2ZUF0dGFjayhwb3MsIG5hbWUpO1xuXHR9O1xuXG5cdGNvbnN0IGdldFJhbmRJbnQgPSAobWF4KSA9PiB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSAwKSArIDApO1xuXHR9O1xuXG5cdGNvbnN0IHBsYWNlU2hpcCA9IChwb3NpdGlvbiwgc2hpcCwgZGlyZWN0aW9uLCBfYm9hcmQpID0+IHtcblx0XHRfYm9hcmQucGxhY2VTaGlwKHNoaXAsIHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXHRcdGlmICghaXNDb21wdXRlciAmJiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9IT1JJWk9OVEFMKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS11c2VyPSdjb21wdXRlciddW2RhdGEteT0nJHtwb3NpdGlvbi55fSddW2RhdGEteD0nJHtwb3NpdGlvbi54ICsgaX0nXWApO1xuXHRcdFx0XHRjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIWlzQ29tcHV0ZXIgJiYgZGlyZWN0aW9uID09PSBESVJFQ1RJT05fVkVSVElDQUwpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXVzZXI9J2NvbXB1dGVyJ11bZGF0YS15PScke3Bvc2l0aW9uLnkgKyBpfSddW2RhdGEteD0nJHtwb3NpdGlvbi54fSddYCk7XG5cdFx0XHRcdGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11c2VyPVwiY29tcHV0ZXJcIl0nKTtcblx0XHRjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBjcmVhdGVTaGlwID0gKGxlbmd0aCkgPT4ge1xuXHRcdHJldHVybiBzaGlwRmFjdG9yeShsZW5ndGgpO1xuXHR9O1xuXG5cdGNvbnN0IHBsYWNlU2hpcHNSYW5kb21seU9uQm9hcmQgPSAoX2JvYXJkKSA9PiB7XG5cdFx0U0hJUF9ESU1FTlNJT05TKCkubWFwKChsZW5ndGgsIGkpID0+IHtcblx0XHRcdGxldCBkaXI7XG5cdFx0XHRnZXRSYW5kSW50KDIpID09PSAxID8gKGRpciA9IERJUkVDVElPTl9IT1JJWk9OVEFMKSA6IChkaXIgPSBESVJFQ1RJT05fVkVSVElDQUwpO1xuXG5cdFx0XHRsZXQgc2hpcCA9IGNyZWF0ZVNoaXAobGVuZ3RoKTtcblx0XHRcdGxldCBwb3M7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHBvcyA9IHBvc2l0aW9uKGdldFJhbmRJbnQoR0FNRV9ESU1FTlNJT04gLSBsZW5ndGgpLCBnZXRSYW5kSW50KEdBTUVfRElNRU5TSU9OIC0gbGVuZ3RoKSk7XG5cdFx0XHR9IHdoaWxlICghX2JvYXJkLmlzVmFsaWRQbGFjZW1lbnQoc2hpcCwgcG9zLCBkaXIpKTtcblx0XHRcdHBsYWNlU2hpcChwb3MsIHNoaXAsIGRpciwgX2JvYXJkKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBpc1dpbm5lciA9ICgpID0+IGhhc1dvbjtcblxuXHRyZXR1cm4geyBuYW1lLCB0dXJuLCBpc1dpbm5lciwgYm9hcmQsIHBsYWNlU2hpcCwgcGxhY2VTaGlwc1JhbmRvbWx5T25Cb2FyZCwgZGlzcGxheU5hbWUgfTtcbn07XG5cbmV4cG9ydCB7IHBsYXllciB9O1xuIiwiY29uc3QgcG9zaXRpb24gPSAoX3ksIF94KSA9PiB7XG5cdGNvbnN0IHggPSBfeDtcblx0Y29uc3QgeSA9IF95O1xuXHRyZXR1cm4geyB4LCB5IH07XG59O1xuXG5leHBvcnQgeyBwb3NpdGlvbiB9O1xuIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAoaW5pdExlbmd0aCkgPT4ge1xuXHRjb25zdCBoaXRzID0gMDtcblx0Y29uc3QgZ290SGl0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAodGhpcy5oaXRzICs9IDEpO1xuXHR9O1xuXHRjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aDtcblx0fTtcblxuXHRjb25zdCBsZW5ndGggPSBpbml0TGVuZ3RoO1xuXHRyZXR1cm4geyBoaXRzLCBsZW5ndGgsIGlzU3VuaywgZ290SGl0IH07XG59O1xuXG5leHBvcnQgeyBzaGlwRmFjdG9yeSB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBnYW1lRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3Rvcmllcy9nYW1lXCI7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdGdhbWVGYWN0b3J5KCkuaW5pdCgpO1xufVxuXG5pbml0KCk7XG4iLCJpbXBvcnQgeyBHQU1FX0RJTUVOU0lPTiB9IGZyb20gXCIuLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IGRvbSA9ICgpID0+IHtcblx0Y29uc3QgaGVhZGxpbmUgPSBudWxsO1xuXHRjb25zdCBmb290ZXIgPSBudWxsO1xuXHRjb25zdCBzaGlwc1RvUGxhY2UgPSBudWxsO1xuXG5cdGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoaHRtbFRhZywgaWQsIGFwcGVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIiksIF9jbGFzcyA9IFwiXCIpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChodG1sVGFnKTtcblx0XHRpZCAmJiAoZWxlbWVudC5pZCA9IGAke2lkfWApO1xuXHRcdF9jbGFzcyAmJiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoX2NsYXNzKTtcblx0XHRhcHBlbmRlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fTtcblxuXHRjb25zdCBpbml0UGFnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cdFx0dGhpcy5oZWFkbGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcImhlYWRsaW5lXCIpO1xuXG5cdFx0Y29uc3QgcGFnZVdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaGVhZGxpbmVcIiwgYm9keSwgXCJjb250YWluZXJcIik7XG5cdFx0Y29uc3QgcGxheWVyQm9hcmQgPSByZW5kZXJCb2FyZChcInBsYXllci1ib2FyZFwiLCBcIkVuZW15IEJvYXJkXCIsIFwicGxheWVyXCIpO1xuXHRcdGNvbnN0IGNvbXB1dGVyQm9hcmQgPSByZW5kZXJCb2FyZChcImNvbXB1dGVyLWJvYXJkXCIsIFwiWW91ciBCb2FyZFwiLCBcImNvbXB1dGVyXCIpO1xuXHRcdGNvbXB1dGVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGhhbmRsZURyYWdhYmxlRXZlbnQpO1xuXG5cdFx0cGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuXHRcdHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xuXG5cdFx0Y29uc3QgYnRuID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcImRpcmVjdGlvbi1idG5cIik7XG5cdFx0YnRuLmlubmVySFRNTCA9IFwiY2hhbmdlIERpcmVjdGlvblwiO1xuXHRcdGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlUGxhY2VtZW50RGlyZWN0aW9uKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyLWJvYXJkXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtYm9yZGVyXCIpO1xuXG5cdFx0dGhpcy5mb290ZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZm9vdGVyXCIpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZURyYWdhYmxlRXZlbnQgPSAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9O1xuXG5cdGNvbnN0IHJlbmRlckJvYXJkID0gKGlkLCBsYWJlbFRleHQsIHVzZXIpID0+IHtcblx0XHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC13cmFwcGVyXCIpO1xuXG5cdFx0Y29uc3QgYm9hcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIGlkLCB3cmFwcGVyLCBcImJvYXJkXCIpO1xuXHRcdHJlbmRlckNlbGxzKGJvYXJkLCB1c2VyKTtcblxuXHRcdGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCB3cmFwcGVyLCBcImJvYXJkLWxhYmVsXCIpO1xuXHRcdGxhYmVsLmlubmVySFRNTCA9IGxhYmVsVGV4dDtcblx0XHRyZXR1cm4gd3JhcHBlcjtcblx0fTtcblxuXHRjb25zdCByZW5kZXJDZWxscyA9IChib2FyZCwgdXNlcikgPT4ge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgR0FNRV9ESU1FTlNJT047IGkrKykge1xuXHRcdFx0bGV0IHJvdyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgYm9hcmQsIFwicm93XCIpO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBHQU1FX0RJTUVOU0lPTjsgaisrKSB7XG5cdFx0XHRcdGxldCBjZWxsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCByb3csIFwiY2VsbFwiKTtcblx0XHRcdFx0Y2VsbC5kYXRhc2V0LnVzZXIgPSB1c2VyO1xuXHRcdFx0XHRjZWxsLmRhdGFzZXQueSA9IGk7XG5cdFx0XHRcdGNlbGwuZGF0YXNldC54ID0gajtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0ZnVuY3Rpb24gaW5pdFNoaXBQbGFjZW1lbnRzKHNoaXBzKSB7XG5cdFx0dGhpcy5zaGlwc1RvUGxhY2UgPSBbLi4uc2hpcHNdO1xuXHRcdHRoaXMuaGVhZGxpbmUuaW5uZXJIVE1MID0gXCJQbGFjZSB5b3VyIHNoaXBzIG9uIHlvdXIgb3duIGJvYXJkIVwiO1xuXHRcdHNoaXBzLmZvckVhY2goKHNoaXApID0+IGRyYXdTaGlwLmNhbGwodGhpcywgc2hpcCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1NoaXAoc2hpcCkge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIHRoaXMuZm9vdGVyLCBcInNoaXAtd3JhcHBlclwiKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXA7IGkrKykge1xuXHRcdFx0bGV0IGNlbGwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIHdyYXBwZXIsIFwiY2VsbFwiKTtcblx0XHRcdGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHdyYXBwZXIuZGF0YXNldC5kcmFnZWRDZWxsUG9zaXRpb24gPSBpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0d3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuXHRcdHdyYXBwZXIuZGF0YXNldC5sZW5ndGggPSBzaGlwO1xuXHRcdHdyYXBwZXIuZGF0YXNldC5kaXJlY3Rpb24gPSBcInhcIjtcblxuXHRcdHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGhhbmRsZURyYWdTdGFydChldmVudCwgc2hpcCk7XG5cdFx0fSk7XG5cdFx0d3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZXZlbnQsIHNoaXApID0+IHtcblx0XHRjb25zdCBkaXJlY3Rpb24gPSBldmVudC50YXJnZXQuZGF0YXNldC5kaXJlY3Rpb247XG5cdFx0Y29uc3QgY2VsbFBvcyA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmRyYWdlZENlbGxQb3NpdGlvbjtcblxuXHRcdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG5cdFx0ZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIEpTT04uc3RyaW5naWZ5KHsgZGlyZWN0aW9uLCBhbW91bnQ6IHNoaXAsIGNlbGxQb3MgfSkpO1xuXHR9O1xuXG5cdGNvbnN0IGNoYW5nZVBsYWNlbWVudERpcmVjdGlvbiA9ICgpID0+IHtcblx0XHRjb25zdCBlbGVtZW50cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtd3JhcHBlclwiKV07XG5cdFx0Y29uc3QgZGlyZWN0aW9uID0gZWxlbWVudHNbMF0uZGF0YXNldC5kaXJlY3Rpb247XG5cdFx0Y29uc3QgY2hhbmdlVG9ZID0gZGlyZWN0aW9uID09PSBcInhcIjtcblx0XHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRlbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBjaGFuZ2VUb1kgPyBcImNvbHVtblwiIDogXCJyb3dcIjtcblx0XHRcdGVsZW1lbnQuZGF0YXNldC5kaXJlY3Rpb24gPSBjaGFuZ2VUb1kgPyBcInlcIiA6IFwieFwiO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUxhYmVsKGxhYmVsKSB7XG5cdFx0dGhpcy5oZWFkbGluZS5pbm5lckhUTUwgPSBsYWJlbDtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVBsYWNlbWVudFNoaXAoKSB7XG5cdFx0dGhpcy5mb290ZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBjaGFuZ2VCb2FyZFN0YXRlKCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlyZWN0aW9uLWJ0blwiKS5yZW1vdmUoKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyLWJvYXJkXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtYm9yZGVyXCIpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLWJvYXJkXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtYm9yZGVyXCIpO1xuXG5cdFx0Y29uc3QgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11c2VyPVwicGxheWVyXCJdJyk7XG5cdFx0cGxheWVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXVzZXI9XCJjb21wdXRlclwiXScpO1xuXHRcdGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH0pO1xuXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItYm9hcmRcIikuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlci1ib2FyZFwiKS5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGluaXRQYWdlLFxuXHRcdGluaXRTaGlwUGxhY2VtZW50cyxcblx0XHRoZWFkbGluZSxcblx0XHRmb290ZXIsXG5cdFx0c2hpcHNUb1BsYWNlLFxuXHRcdHJlbW92ZVBsYWNlbWVudFNoaXAsXG5cdFx0dXBkYXRlTGFiZWwsXG5cdFx0Y2hhbmdlQm9hcmRTdGF0ZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7IGRvbSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9