"use strict";
(self["webpackChunkreact_home"] = self["webpackChunkreact_home"] || []).push([["src_1_pages_DevListPage_ui_DevListPage_tsx"],{

/***/ "./src/1_pages/DevListPage/api/devListPageApi.ts":
/*!*******************************************************!*\
  !*** ./src/1_pages/DevListPage/api/devListPageApi.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageDevApi: () => (/* binding */ pageDevApi),
/* harmony export */   useFetchPageDev: () => (/* binding */ useFetchPageDev)
/* harmony export */ });
/* harmony import */ var _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/api/rtkApi */ "./src/5_shared/api/rtkApi.ts");
/* harmony import */ var _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/api/endpoints */ "./src/5_shared/api/endpoints.ts");


const pageDevApi = _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__.rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchPageDev: build.query({
      query: () => ({
        url: _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.PAGE_DEV,
        params: {
          populate: '*'
        }
      })
    })
  }),
  overrideExisting: false
});
const useFetchPageDev = pageDevApi.useFetchPageDevQuery;


/***/ }),

/***/ "./src/1_pages/DevListPage/ui/DevListPage.tsx":
/*!****************************************************!*\
  !*** ./src/1_pages/DevListPage/ui/DevListPage.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _5_shared_ui_Main_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/ui/Main/Main */ "./src/5_shared/ui/Main/Main.tsx");
/* harmony import */ var _2_widgets_SectionsStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 2_widgets/SectionsStack */ "./src/2_widgets/SectionsStack/index.ts");
/* harmony import */ var _DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DevListPage.module.scss */ "./src/1_pages/DevListPage/ui/DevListPage.module.scss");
/* harmony import */ var _api_devListPageApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/devListPageApi */ "./src/1_pages/DevListPage/api/devListPageApi.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const ListPage = () => {
  const {
    data,
    isLoading
  } = (0,_api_devListPageApi__WEBPACK_IMPORTED_MODULE_5__.useFetchPageDev)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_5_shared_ui_Main_Main__WEBPACK_IMPORTED_MODULE_2__.Main, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].main),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_2_widgets_SectionsStack__WEBPACK_IMPORTED_MODULE_3__.SectionsStack, {
      isPreview: false,
      isLoading: isLoading,
      data: data?.data?.section
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/DevListPage/ui/DevListPage.module.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/DevListPage/ui/DevListPage.module.scss ***!
  \*********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-1_pages-DevListPage-ui-DevListPage-module__main-wzOPy {
  padding: 220px 0 115px;
}`, "",{"version":3,"sources":["webpack://./src/1_pages/DevListPage/ui/DevListPage.module.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ","sourcesContent":[".main {\r\n    padding: 220px 0 115px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": `src-1_pages-DevListPage-ui-DevListPage-module__main-wzOPy`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/1_pages/DevListPage/ui/DevListPage.module.scss":
/*!************************************************************!*\
  !*** ./src/1_pages/DevListPage/ui/DevListPage.module.scss ***!
  \************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./DevListPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/DevListPage/ui/DevListPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./DevListPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/DevListPage/ui/DevListPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./DevListPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/DevListPage/ui/DevListPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DevListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LWhvbWUvLi9zcmMvMV9wYWdlcy9EZXZMaXN0UGFnZS9hcGkvZGV2TGlzdFBhZ2VBcGkudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9EZXZMaXN0UGFnZS91aS9EZXZMaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9EZXZMaXN0UGFnZS91aS9EZXZMaXN0UGFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8xX3BhZ2VzL0Rldkxpc3RQYWdlL3VpL0Rldkxpc3RQYWdlLm1vZHVsZS5zY3NzPzFkZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcnRrQXBpIH0gZnJvbSAnNV9zaGFyZWQvYXBpL3J0a0FwaSc7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJzVfc2hhcmVkL2FwaS9lbmRwb2ludHMnO1xyXG5pbXBvcnQgeyBQYWdlSW5kZXhSZXNwb25zZVR5cGUgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9Db21tb25UeXBlcyc7XHJcblxyXG5jb25zdCBwYWdlRGV2QXBpID0gcnRrQXBpLmluamVjdEVuZHBvaW50cyh7XHJcbiAgICBlbmRwb2ludHM6IChidWlsZCkgPT4gKHtcclxuICAgICAgICBmZXRjaFBhZ2VEZXY6IGJ1aWxkLnF1ZXJ5PFBhZ2VJbmRleFJlc3BvbnNlVHlwZSwgbnVsbD4oe1xyXG4gICAgICAgICAgICBxdWVyeTogKCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGVzLlBBR0VfREVWLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGU6ICcqJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VGZXRjaFBhZ2VEZXYgPSBwYWdlRGV2QXBpLnVzZUZldGNoUGFnZURldlF1ZXJ5O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHBhZ2VEZXZBcGksXHJcbiAgICB1c2VGZXRjaFBhZ2VEZXYsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnNV9zaGFyZWQvdWkvTWFpbi9NYWluJztcclxuaW1wb3J0IHsgU2VjdGlvbnNTdGFjayB9IGZyb20gJzJfd2lkZ2V0cy9TZWN0aW9uc1N0YWNrJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0Rldkxpc3RQYWdlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRmV0Y2hQYWdlRGV2IH0gZnJvbSAnLi4vYXBpL2Rldkxpc3RQYWdlQXBpJztcclxuXHJcbmNvbnN0IExpc3RQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgfSA9IHVzZUZldGNoUGFnZURldihudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMubWFpbil9PlxyXG4gICAgICAgICAgICA8U2VjdGlvbnNTdGFja1xyXG4gICAgICAgICAgICAgICAgaXNQcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YT8uZGF0YT8uc2VjdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L01haW4+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFBhZ2U7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTFfcGFnZXMtRGV2TGlzdFBhZ2UtdWktRGV2TGlzdFBhZ2UtbW9kdWxlX19tYWluLXd6T1B5IHtcbiAgcGFkZGluZzogMjIwcHggMCAxMTVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy8xX3BhZ2VzL0Rldkxpc3RQYWdlL3VpL0Rldkxpc3RQYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksc0JBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDIyMHB4IDAgMTE1cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5cIjogYHNyYy0xX3BhZ2VzLURldkxpc3RQYWdlLXVpLURldkxpc3RQYWdlLW1vZHVsZV9fbWFpbi13ek9QeWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Rldkxpc3RQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV2TGlzdFBhZ2UubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV2TGlzdFBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsicnRrQXBpIiwiUm91dGVzIiwicGFnZURldkFwaSIsImluamVjdEVuZHBvaW50cyIsImVuZHBvaW50cyIsImJ1aWxkIiwiZmV0Y2hQYWdlRGV2IiwicXVlcnkiLCJ1cmwiLCJQQUdFX0RFViIsInBhcmFtcyIsInBvcHVsYXRlIiwib3ZlcnJpZGVFeGlzdGluZyIsInVzZUZldGNoUGFnZURldiIsInVzZUZldGNoUGFnZURldlF1ZXJ5IiwiUmVhY3QiLCJjbGFzc05hbWVzIiwiTWFpbiIsIlNlY3Rpb25zU3RhY2siLCJjbHMiLCJqc3giLCJfanN4IiwiTGlzdFBhZ2UiLCJkYXRhIiwiaXNMb2FkaW5nIiwiY2xhc3NOYW1lIiwibWFpbiIsImNoaWxkcmVuIiwiaXNQcmV2aWV3Iiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=