"use strict";
(self["webpackChunkreact_home"] = self["webpackChunkreact_home"] || []).push([["src_1_pages_PhotoListPage_ui_PhotoListPage_tsx"],{

/***/ "./src/1_pages/PhotoListPage/api/photoListPageApi.ts":
/*!***********************************************************!*\
  !*** ./src/1_pages/PhotoListPage/api/photoListPageApi.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pagePhotoApi: () => (/* binding */ pagePhotoApi),
/* harmony export */   useFetchPagePhoto: () => (/* binding */ useFetchPagePhoto)
/* harmony export */ });
/* harmony import */ var _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/api/rtkApi */ "./src/5_shared/api/rtkApi.ts");
/* harmony import */ var _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/api/endpoints */ "./src/5_shared/api/endpoints.ts");


const pagePhotoApi = _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__.rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchPagePhoto: build.query({
      query: () => ({
        url: _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.PAGE_PHOTO,
        params: {
          populate: '*'
        }
      })
    })
  }),
  overrideExisting: false
});
const useFetchPagePhoto = pagePhotoApi.useFetchPagePhotoQuery;


/***/ }),

/***/ "./src/1_pages/PhotoListPage/ui/PhotoListPage.tsx":
/*!********************************************************!*\
  !*** ./src/1_pages/PhotoListPage/ui/PhotoListPage.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _2_widgets_SectionsStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 2_widgets/SectionsStack */ "./src/2_widgets/SectionsStack/index.ts");
/* harmony import */ var _5_shared_ui_Main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/ui/Main/Main */ "./src/5_shared/ui/Main/Main.tsx");
/* harmony import */ var _PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhotoListPage.module.scss */ "./src/1_pages/PhotoListPage/ui/PhotoListPage.module.scss");
/* harmony import */ var _api_photoListPageApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/photoListPageApi */ "./src/1_pages/PhotoListPage/api/photoListPageApi.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const ListPage = () => {
  const {
    data,
    isLoading
  } = (0,_api_photoListPageApi__WEBPACK_IMPORTED_MODULE_5__.useFetchPagePhoto)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_5_shared_ui_Main_Main__WEBPACK_IMPORTED_MODULE_3__.Main, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].main),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_2_widgets_SectionsStack__WEBPACK_IMPORTED_MODULE_2__.SectionsStack, {
      isPreview: false,
      isLoading: isLoading,
      data: data?.data?.section
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/PhotoListPage/ui/PhotoListPage.module.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/PhotoListPage/ui/PhotoListPage.module.scss ***!
  \*************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-1_pages-PhotoListPage-ui-PhotoListPage-module__main-xuyUT {
  padding: 220px 0 115px;
}`, "",{"version":3,"sources":["webpack://./src/1_pages/PhotoListPage/ui/PhotoListPage.module.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ","sourcesContent":[".main {\r\n    padding: 220px 0 115px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": `src-1_pages-PhotoListPage-ui-PhotoListPage-module__main-xuyUT`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/1_pages/PhotoListPage/ui/PhotoListPage.module.scss":
/*!****************************************************************!*\
  !*** ./src/1_pages/PhotoListPage/ui/PhotoListPage.module.scss ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./PhotoListPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/PhotoListPage/ui/PhotoListPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./PhotoListPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/PhotoListPage/ui/PhotoListPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./PhotoListPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/PhotoListPage/ui/PhotoListPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PhotoListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWN0LS1ob21lLy4vc3JjLzFfcGFnZXMvUGhvdG9MaXN0UGFnZS9hcGkvcGhvdG9MaXN0UGFnZUFwaS50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8xX3BhZ2VzL1Bob3RvTGlzdFBhZ2UvdWkvUGhvdG9MaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9QaG90b0xpc3RQYWdlL3VpL1Bob3RvTGlzdFBhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9QaG90b0xpc3RQYWdlL3VpL1Bob3RvTGlzdFBhZ2UubW9kdWxlLnNjc3M/Y2JjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBydGtBcGkgfSBmcm9tICc1X3NoYXJlZC9hcGkvcnRrQXBpJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnNV9zaGFyZWQvYXBpL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IFBhZ2VJbmRleFJlc3BvbnNlVHlwZSB9IGZyb20gJzVfc2hhcmVkL3R5cGVzL0NvbW1vblR5cGVzJztcclxuXHJcbmNvbnN0IHBhZ2VQaG90b0FwaSA9IHJ0a0FwaS5pbmplY3RFbmRwb2ludHMoe1xyXG4gICAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICAgICAgZmV0Y2hQYWdlUGhvdG86IGJ1aWxkLnF1ZXJ5PFBhZ2VJbmRleFJlc3BvbnNlVHlwZSwgbnVsbD4oe1xyXG4gICAgICAgICAgICBxdWVyeTogKCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGVzLlBBR0VfUEhPVE8sXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZTogJyonLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSxcclxuICAgIG92ZXJyaWRlRXhpc3Rpbmc6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IHVzZUZldGNoUGFnZVBob3RvID0gcGFnZVBob3RvQXBpLnVzZUZldGNoUGFnZVBob3RvUXVlcnk7XHJcblxyXG5leHBvcnQge1xyXG4gICAgcGFnZVBob3RvQXBpLFxyXG4gICAgdXNlRmV0Y2hQYWdlUGhvdG8sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uc1N0YWNrIH0gZnJvbSAnMl93aWRnZXRzL1NlY3Rpb25zU3RhY2snO1xyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnNV9zaGFyZWQvdWkvTWFpbi9NYWluJztcclxuaW1wb3J0IGNscyBmcm9tICcuL1Bob3RvTGlzdFBhZ2UubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFBhZ2VQaG90byB9IGZyb20gJy4uL2FwaS9waG90b0xpc3RQYWdlQXBpJztcclxuXHJcbmNvbnN0IExpc3RQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgfSA9IHVzZUZldGNoUGFnZVBob3RvKG51bGwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5tYWluKX0+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uc1N0YWNrXHJcbiAgICAgICAgICAgICAgICBpc1ByZXZpZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhPy5kYXRhPy5zZWN0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTWFpbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UGFnZTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtMV9wYWdlcy1QaG90b0xpc3RQYWdlLXVpLVBob3RvTGlzdFBhZ2UtbW9kdWxlX19tYWluLXh1eVVUIHtcbiAgcGFkZGluZzogMjIwcHggMCAxMTVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy8xX3BhZ2VzL1Bob3RvTGlzdFBhZ2UvdWkvUGhvdG9MaXN0UGFnZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHNCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcclxcbiAgICBwYWRkaW5nOiAyMjBweCAwIDExNXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluXCI6IGBzcmMtMV9wYWdlcy1QaG90b0xpc3RQYWdlLXVpLVBob3RvTGlzdFBhZ2UtbW9kdWxlX19tYWluLXh1eVVUYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGhvdG9MaXN0UGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Bob3RvTGlzdFBhZ2UubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUGhvdG9MaXN0UGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJydGtBcGkiLCJSb3V0ZXMiLCJwYWdlUGhvdG9BcGkiLCJpbmplY3RFbmRwb2ludHMiLCJlbmRwb2ludHMiLCJidWlsZCIsImZldGNoUGFnZVBob3RvIiwicXVlcnkiLCJ1cmwiLCJQQUdFX1BIT1RPIiwicGFyYW1zIiwicG9wdWxhdGUiLCJvdmVycmlkZUV4aXN0aW5nIiwidXNlRmV0Y2hQYWdlUGhvdG8iLCJ1c2VGZXRjaFBhZ2VQaG90b1F1ZXJ5IiwiUmVhY3QiLCJjbGFzc05hbWVzIiwiU2VjdGlvbnNTdGFjayIsIk1haW4iLCJjbHMiLCJqc3giLCJfanN4IiwiTGlzdFBhZ2UiLCJkYXRhIiwiaXNMb2FkaW5nIiwiY2xhc3NOYW1lIiwibWFpbiIsImNoaWxkcmVuIiwiaXNQcmV2aWV3Iiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=