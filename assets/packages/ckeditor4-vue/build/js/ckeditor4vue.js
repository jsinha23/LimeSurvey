/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.\n For licensing, see LICENSE.md or http://ckeditor.com/license\n*/\nCKEDITOR.editorConfig = function (a) {\n    \n        a.plugins = \"a11ychecker,dialogui,dialog,a11yhelp,about,xml,ajax,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,codemirror,panelbutton,panel,floatpanel,colorbutton,colordialog,menu,contextmenu,copyformatting,dialogadvtab,div,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,format,horizontalrule,htmlwriter,iframe,image,indent,indentblock,indentlist,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastefromword,pastetext,removeformat,resize,save,scayt,selectall,showblocks,showborders,smiley,sourcearea,sourcedialog,specialchar,stylescombo,tab,table,tabletools,undo,videodetector,wsc,wysiwygarea,lineutils,widgetselection,widget,html5video,markdown\";\n       \n        a.filebrowserBrowseUrl = CKEDITOR.basePath + \"../../../third_party/kcfinder/browse.php?type\\x3dfiles\";\n        a.filebrowserImageBrowseUrl = CKEDITOR.basePath + \"../../../third_party/kcfinder/browse.php?type\\x3dimages\";\n        a.filebrowserFlashBrowseUrl = CKEDITOR.basePath + \"../../../third_party/kcfinder/browse.php?type\\x3dflash\";\n        a.filebrowserUploadUrl = CKEDITOR.basePath + \"../../../third_party/kcfinder/upload.php?type\\x3dfiles\";\n        a.filebrowserImageUploadUrl = CKEDITOR.basePath + \"../../../third_party/kcfinder/upload.php?type\\x3dimages\";\n        a.filebrowserFlashUploadUrl = CKEDITOR.basePath + \"../../../third_party/kcfinder/upload.php?type\\x3dflash\";\n        a.removeDialogTabs = \"link:upload;image:Upload\";\n        a.image_prefillDimensions = !1;\n        a.image2_prefillDimensions = !1;\n        a.allowedContent = !0;\n        a.skin = \"bootstrapck\";\n        a.autoParagraph = !1;\n        a.basicEntities = !1;\n        a.entities = !1;\n        a.uiColor = \"#f1f1f1\";\n\n        \"rtl\" == $(\"html\").attr(\"dir\") && (a.contentsLangDirection = \"rtl\");\n        a.toolbar_popup = [\n            [\"Save\", \"Source\", \"Createlimereplacementfields\"],\n            [\"Cut\", \"Copy\", \"Paste\", \"PasteText\", \"PasteFromWord\"], \"Undo Redo - Find Replace - SelectAll RemoveFormat\".split(\" \"),\n            \"Image Html5video VideoDetector Flash Table HorizontalRule Smiley SpecialChar\".split(\" \"), \"/\", \"Bold Italic Underline Strike - Subscript Superscript\".split(\" \"), \n            \"NumberedList BulletedList - Outdent Indent Blockquote CreateDiv\".split(\" \"), [\"JustifyLeft\", \"JustifyCenter\", \"JustifyRight\", \"JustifyBlock\"],\n            [\"BidiLtr\", \"BidiRtl\"],\n            [\"Link\", \"Unlink\", \"Anchor\", \"Iframe\"], \"/\", [\"Styles\", \"Format\", \"Font\", \"FontSize\"],\n            [\"TextColor\", \"BGColor\"],\n            [\"ShowBlocks\", \"Templates\"]\n        ];\n        a.toolbar_inline = [\n            [\"Maximize\", \"Source\", \"Createlimereplacementfields\"],\n            [\"Cut\",\n                \"Copy\", \"Paste\", \"PasteText\", \"PasteFromWord\"\n            ], \"Undo Redo - Find Replace - SelectAll RemoveFormat\".split(\" \"), [\"Image\", \"Html5video\", \"VideoDetector\", \"Flash\"],\n            [\"Table\", \"HorizontalRule\", \"Smiley\", \"SpecialChar\"],\n            [\"Bold\", \"Italic\", \"Underline\", \"Strike\"],\n            [\"Subscript\", \"Superscript\"],\n            [\"NumberedList\", \"BulletedList\"],\n            [\"Outdent\", \"Indent\", \"Blockquote\", \"CreateDiv\"],\n            [\"JustifyLeft\", \"JustifyCenter\", \"JustifyRight\", \"JustifyBlock\"],\n            [\"BidiLtr\", \"BidiRtl\"],\n            [\"ShowBlocks\", \"Templates\"],\n            [\"Link\", \"Unlink\"],\n            [\"Styles\", \"Format\", \"Font\", \"FontSize\"],\n            [\"Anchor\", \"Iframe\"],\n            [\"TextColor\", \"BGColor\"]\n        ];\n        a.toolbar_inline2 = [\n            [\"Maximize\", \"Createlimereplacementfields\"],\n            [\"Bold\", \"Italic\", \"Underline\"],\n            [\"NumberedList\", \"BulletedList\", \"-\", \"Outdent\", \"Indent\"],\n            [\"JustifyLeft\", \"JustifyCenter\", \"JustifyRight\", \"JustifyBlock\"],\n            [\"Link\", \"Unlink\", \"Image\"],\n            [\"Source\"]\n        ];\n    \n        a.toolbar = [\n            [\"Source\", \"Createlimereplacementfields\"],\n            [\"Cut\",\n                \"Copy\", \"Paste\", \"PasteText\", \"PasteFromWord\"\n            ], \"Undo Redo - Find Replace - SelectAll RemoveFormat\".split(\" \"), [\"Image\", \"Html5video\",\"VideoDetector\", \"Flash\"],\n            [\"Table\", \"HorizontalRule\", \"Smiley\", \"SpecialChar\"],\n            [\"Bold\", \"Italic\", \"Underline\", \"Strike\"],\n            [\"Subscript\", \"Superscript\"],\n            [\"NumberedList\", \"BulletedList\"],\n            [\"Outdent\", \"Indent\", \"Blockquote\", \"CreateDiv\"],\n            [\"JustifyLeft\", \"JustifyCenter\", \"JustifyRight\", \"JustifyBlock\"],\n            [\"BidiLtr\", \"BidiRtl\"],\n            [\"ShowBlocks\", \"Templates\"],\n            [\"Link\", \"Unlink\"],\n            [\"Styles\", \"Format\", \"Font\", \"FontSize\"],\n            [\"Anchor\", \"Iframe\"],\n            [\"TextColor\", \"BGColor\"]\n        ];\n        a.extraPlugins = \"limereplacementfields,codemirror,sourcedialog\";\n        a.removePlugins = 'sourcearea';\n        \n    };\n    \n\n//# sourceURL=webpack:///./config.js?");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/CkEditor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/CkEditor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    name: 'CKEditor',\n    data() {\n        return {\n            editorData: '',\n            editorConfig: _config_js__WEBPACK_IMPORTED_MODULE_0___default.a,\n        };\n    },\n});\n\n\n//# sourceURL=webpack:///./src/CkEditor.vue?./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7ab20012-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/CkEditor.vue?vue&type=template&id=428c366e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7ab20012-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/CkEditor.vue?vue&type=template&id=428c366e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"CKEditor\" },\n    [\n      _c(\"ckeditor\", {\n        attrs: { config: _vm.editorConfig },\n        model: {\n          value: _vm.editorData,\n          callback: function($$v) {\n            _vm.editorData = $$v\n          },\n          expression: \"editorData\"\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/CkEditor.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%227ab20012-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/CkEditor.vue":
/*!**************************!*\
  !*** ./src/CkEditor.vue ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CkEditor_vue_vue_type_template_id_428c366e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CkEditor.vue?vue&type=template&id=428c366e& */ \"./src/CkEditor.vue?vue&type=template&id=428c366e&\");\n/* harmony import */ var _CkEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CkEditor.vue?vue&type=script&lang=js& */ \"./src/CkEditor.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _CkEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CkEditor_vue_vue_type_template_id_428c366e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CkEditor_vue_vue_type_template_id_428c366e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/CkEditor.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/CkEditor.vue?");

/***/ }),

/***/ "./src/CkEditor.vue?vue&type=script&lang=js&":
/*!***************************************************!*\
  !*** ./src/CkEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CkEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./CkEditor.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/CkEditor.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CkEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/CkEditor.vue?");

/***/ }),

/***/ "./src/CkEditor.vue?vue&type=template&id=428c366e&":
/*!*********************************************************!*\
  !*** ./src/CkEditor.vue?vue&type=template&id=428c366e& ***!
  \*********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ab20012_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CkEditor_vue_vue_type_template_id_428c366e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7ab20012-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./CkEditor.vue?vue&type=template&id=428c366e& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"7ab20012-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/CkEditor.vue?vue&type=template&id=428c366e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ab20012_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CkEditor_vue_vue_type_template_id_428c366e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ab20012_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CkEditor_vue_vue_type_template_id_428c366e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/CkEditor.vue?");

/***/ }),

/***/ "./src/ckeditor4vue.js":
/*!*****************************!*\
  !*** ./src/ckeditor4vue.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var ckeditor4_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ckeditor4-vue */ \"./node_modules/ckeditor4-vue/dist/ckeditor.js\");\n/* harmony import */ var ckeditor4_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ckeditor4_vue__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CkEditor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CkEditor.vue */ \"./src/CkEditor.vue\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.ignoreElements = [\"x-test\"];\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.devtools = false;\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(ckeditor4_vue__WEBPACK_IMPORTED_MODULE_1___default.a);\n\nvar ckeditor4vue = new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    el: '#app',\n    components: {\n        ckeditor4: _CkEditor_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    },\n});\n\n\n//# sourceURL=webpack:///./src/ckeditor4vue.js?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/ckeditor4vue.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/ckeditor4vue.js */\"./src/ckeditor4vue.js\");\n\n\n//# sourceURL=webpack:///multi_./src/ckeditor4vue.js?");

/***/ })

/******/ });