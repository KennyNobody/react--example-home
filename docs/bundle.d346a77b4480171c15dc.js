"use strict";
(self["webpackChunkreact_home"] = self["webpackChunkreact_home"] || []).push([["src_1_pages_PostListPage_ui_PostListPage_tsx"],{

/***/ "./src/1_pages/PostListPage/api/postListPageApi.ts":
/*!*********************************************************!*\
  !*** ./src/1_pages/PostListPage/api/postListPageApi.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pagePostApi: () => (/* binding */ pagePostApi),
/* harmony export */   useFetchPagePost: () => (/* binding */ useFetchPagePost)
/* harmony export */ });
/* harmony import */ var _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/api/rtkApi */ "./src/5_shared/api/rtkApi.ts");
/* harmony import */ var _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/api/endpoints */ "./src/5_shared/api/endpoints.ts");


const pagePostApi = _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__.rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchPagePost: build.query({
      query: () => ({
        url: _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.PAGE_POST,
        params: {
          populate: '*'
        }
      })
    })
  }),
  overrideExisting: false
});
const useFetchPagePost = pagePostApi.useFetchPagePostQuery;


/***/ }),

/***/ "./src/1_pages/PostListPage/ui/PostListPage.tsx":
/*!******************************************************!*\
  !*** ./src/1_pages/PostListPage/ui/PostListPage.tsx ***!
  \******************************************************/
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
/* harmony import */ var _PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostListPage.module.scss */ "./src/1_pages/PostListPage/ui/PostListPage.module.scss");
/* harmony import */ var _api_postListPageApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/postListPageApi */ "./src/1_pages/PostListPage/api/postListPageApi.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const ListPage = () => {
  const {
    data,
    isLoading
  } = (0,_api_postListPageApi__WEBPACK_IMPORTED_MODULE_5__.useFetchPagePost)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_5_shared_ui_Main_Main__WEBPACK_IMPORTED_MODULE_3__.Main, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].main),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_2_widgets_SectionsStack__WEBPACK_IMPORTED_MODULE_2__.SectionsStack, {
      isPreview: false,
      isLoading: isLoading,
      data: data?.data?.section
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/PostListPage/ui/PostListPage.module.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/PostListPage/ui/PostListPage.module.scss ***!
  \***********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-1_pages-PostListPage-ui-PostListPage-module__main-ODtBz {
  padding: 220px 0 115px;
}`, "",{"version":3,"sources":["webpack://./src/1_pages/PostListPage/ui/PostListPage.module.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ","sourcesContent":[".main {\r\n    padding: 220px 0 115px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": `src-1_pages-PostListPage-ui-PostListPage-module__main-ODtBz`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/1_pages/PostListPage/ui/PostListPage.module.scss":
/*!**************************************************************!*\
  !*** ./src/1_pages/PostListPage/ui/PostListPage.module.scss ***!
  \**************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./PostListPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/PostListPage/ui/PostListPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./PostListPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/PostListPage/ui/PostListPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./PostListPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/PostListPage/ui/PostListPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_PostListPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWN0LS1ob21lLy4vc3JjLzFfcGFnZXMvUG9zdExpc3RQYWdlL2FwaS9wb3N0TGlzdFBhZ2VBcGkudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9Qb3N0TGlzdFBhZ2UvdWkvUG9zdExpc3RQYWdlLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8xX3BhZ2VzL1Bvc3RMaXN0UGFnZS91aS9Qb3N0TGlzdFBhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9Qb3N0TGlzdFBhZ2UvdWkvUG9zdExpc3RQYWdlLm1vZHVsZS5zY3NzPzljNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcnRrQXBpIH0gZnJvbSAnNV9zaGFyZWQvYXBpL3J0a0FwaSc7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJzVfc2hhcmVkL2FwaS9lbmRwb2ludHMnO1xyXG5pbXBvcnQgeyBQYWdlSW5kZXhSZXNwb25zZVR5cGUgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9Db21tb25UeXBlcyc7XHJcblxyXG5jb25zdCBwYWdlUG9zdEFwaSA9IHJ0a0FwaS5pbmplY3RFbmRwb2ludHMoe1xyXG4gICAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICAgICAgZmV0Y2hQYWdlUG9zdDogYnVpbGQucXVlcnk8UGFnZUluZGV4UmVzcG9uc2VUeXBlLCBudWxsPih7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiAoKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0ZXMuUEFHRV9QT1NULFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGU6ICcqJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VGZXRjaFBhZ2VQb3N0ID0gcGFnZVBvc3RBcGkudXNlRmV0Y2hQYWdlUG9zdFF1ZXJ5O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHBhZ2VQb3N0QXBpLFxyXG4gICAgdXNlRmV0Y2hQYWdlUG9zdCxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IFNlY3Rpb25zU3RhY2sgfSBmcm9tICcyX3dpZGdldHMvU2VjdGlvbnNTdGFjayc7XHJcbmltcG9ydCB7IE1haW4gfSBmcm9tICc1X3NoYXJlZC91aS9NYWluL01haW4nO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vUG9zdExpc3RQYWdlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlRmV0Y2hQYWdlUG9zdCB9IGZyb20gJy4uL2FwaS9wb3N0TGlzdFBhZ2VBcGknO1xyXG5cclxuY29uc3QgTGlzdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICB9ID0gdXNlRmV0Y2hQYWdlUG9zdChudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMubWFpbil9PlxyXG4gICAgICAgICAgICA8U2VjdGlvbnNTdGFja1xyXG4gICAgICAgICAgICAgICAgaXNQcmV2aWV3PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YT8uZGF0YT8uc2VjdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L01haW4+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFBhZ2U7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTFfcGFnZXMtUG9zdExpc3RQYWdlLXVpLVBvc3RMaXN0UGFnZS1tb2R1bGVfX21haW4tT0R0Qnoge1xuICBwYWRkaW5nOiAyMjBweCAwIDExNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzFfcGFnZXMvUG9zdExpc3RQYWdlL3VpL1Bvc3RMaXN0UGFnZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHNCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcclxcbiAgICBwYWRkaW5nOiAyMjBweCAwIDExNXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluXCI6IGBzcmMtMV9wYWdlcy1Qb3N0TGlzdFBhZ2UtdWktUG9zdExpc3RQYWdlLW1vZHVsZV9fbWFpbi1PRHRCemBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Bvc3RMaXN0UGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Bvc3RMaXN0UGFnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qb3N0TGlzdFBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsicnRrQXBpIiwiUm91dGVzIiwicGFnZVBvc3RBcGkiLCJpbmplY3RFbmRwb2ludHMiLCJlbmRwb2ludHMiLCJidWlsZCIsImZldGNoUGFnZVBvc3QiLCJxdWVyeSIsInVybCIsIlBBR0VfUE9TVCIsInBhcmFtcyIsInBvcHVsYXRlIiwib3ZlcnJpZGVFeGlzdGluZyIsInVzZUZldGNoUGFnZVBvc3QiLCJ1c2VGZXRjaFBhZ2VQb3N0UXVlcnkiLCJSZWFjdCIsImNsYXNzTmFtZXMiLCJTZWN0aW9uc1N0YWNrIiwiTWFpbiIsImNscyIsImpzeCIsIl9qc3giLCJMaXN0UGFnZSIsImRhdGEiLCJpc0xvYWRpbmciLCJjbGFzc05hbWUiLCJtYWluIiwiY2hpbGRyZW4iLCJpc1ByZXZpZXciLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==