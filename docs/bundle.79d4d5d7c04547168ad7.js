"use strict";
(self["webpackChunkreact_home"] = self["webpackChunkreact_home"] || []).push([["src_1_pages_FrontPage_ui_FrontPage_FrontPage_tsx"],{

/***/ "./src/1_pages/FrontPage/api/frontPagetApi.ts":
/*!****************************************************!*\
  !*** ./src/1_pages/FrontPage/api/frontPagetApi.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageFrontApi: () => (/* binding */ pageFrontApi),
/* harmony export */   useFetchPageFront: () => (/* binding */ useFetchPageFront)
/* harmony export */ });
/* harmony import */ var _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/api/rtkApi */ "./src/5_shared/api/rtkApi.ts");
/* harmony import */ var _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/api/endpoints */ "./src/5_shared/api/endpoints.ts");


const pageFrontApi = _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__.rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchPageFront: build.query({
      query: () => ({
        url: _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.PAGE_FRONT,
        params: {
          populate: '*'
        }
      })
    })
  }),
  overrideExisting: false
});
const useFetchPageFront = pageFrontApi.useFetchPageFrontQuery;


/***/ }),

/***/ "./src/1_pages/FrontPage/ui/FrontPage/FrontPage.tsx":
/*!**********************************************************!*\
  !*** ./src/1_pages/FrontPage/ui/FrontPage/FrontPage.tsx ***!
  \**********************************************************/
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
/* harmony import */ var _FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FrontPage.module.scss */ "./src/1_pages/FrontPage/ui/FrontPage/FrontPage.module.scss");
/* harmony import */ var _api_frontPagetApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/frontPagetApi */ "./src/1_pages/FrontPage/api/frontPagetApi.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const FrontPage = () => {
  const {
    data,
    isLoading
  } = (0,_api_frontPagetApi__WEBPACK_IMPORTED_MODULE_5__.useFetchPageFront)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_5_shared_ui_Main_Main__WEBPACK_IMPORTED_MODULE_3__.Main, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].main),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_2_widgets_SectionsStack__WEBPACK_IMPORTED_MODULE_2__.SectionsStack, {
      isPreview: true,
      isLoading: isLoading,
      data: data?.data?.section
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/FrontPage/ui/FrontPage/FrontPage.module.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/FrontPage/ui/FrontPage/FrontPage.module.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-1_pages-FrontPage-ui-FrontPage-FrontPage-module__main-sM9eA {
  padding: 350px 0 115px;
}`, "",{"version":3,"sources":["webpack://./src/1_pages/FrontPage/ui/FrontPage/FrontPage.module.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ","sourcesContent":[".main {\r\n    padding: 350px 0 115px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": `src-1_pages-FrontPage-ui-FrontPage-FrontPage-module__main-sM9eA`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/1_pages/FrontPage/ui/FrontPage/FrontPage.module.scss":
/*!******************************************************************!*\
  !*** ./src/1_pages/FrontPage/ui/FrontPage/FrontPage.module.scss ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FrontPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/FrontPage/ui/FrontPage/FrontPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FrontPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/FrontPage/ui/FrontPage/FrontPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./FrontPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/FrontPage/ui/FrontPage/FrontPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_FrontPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9zcmMvMV9wYWdlcy9Gcm9udFBhZ2UvYXBpL2Zyb250UGFnZXRBcGkudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9Gcm9udFBhZ2UvdWkvRnJvbnRQYWdlL0Zyb250UGFnZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9Gcm9udFBhZ2UvdWkvRnJvbnRQYWdlL0Zyb250UGFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8xX3BhZ2VzL0Zyb250UGFnZS91aS9Gcm9udFBhZ2UvRnJvbnRQYWdlLm1vZHVsZS5zY3NzP2NmMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcnRrQXBpIH0gZnJvbSAnNV9zaGFyZWQvYXBpL3J0a0FwaSc7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJzVfc2hhcmVkL2FwaS9lbmRwb2ludHMnO1xyXG5pbXBvcnQgeyBQYWdlSW5kZXhSZXNwb25zZVR5cGUgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9Db21tb25UeXBlcyc7XHJcblxyXG5jb25zdCBwYWdlRnJvbnRBcGkgPSBydGtBcGkuaW5qZWN0RW5kcG9pbnRzKHtcclxuICAgIGVuZHBvaW50czogKGJ1aWxkKSA9PiAoe1xyXG4gICAgICAgIGZldGNoUGFnZUZyb250OiBidWlsZC5xdWVyeTxQYWdlSW5kZXhSZXNwb25zZVR5cGUsIG51bGw+KHtcclxuICAgICAgICAgICAgcXVlcnk6ICgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRlcy5QQUdFX0ZST05ULFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGU6ICcqJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VGZXRjaFBhZ2VGcm9udCA9IHBhZ2VGcm9udEFwaS51c2VGZXRjaFBhZ2VGcm9udFF1ZXJ5O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHBhZ2VGcm9udEFwaSxcclxuICAgIHVzZUZldGNoUGFnZUZyb250LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgU2VjdGlvbnNTdGFjayB9IGZyb20gJzJfd2lkZ2V0cy9TZWN0aW9uc1N0YWNrJztcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gJzVfc2hhcmVkL3VpL01haW4vTWFpbic7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9Gcm9udFBhZ2UubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFBhZ2VGcm9udCB9IGZyb20gJy4uLy4uL2FwaS9mcm9udFBhZ2V0QXBpJztcclxuXHJcbmNvbnN0IEZyb250UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgIH0gPSB1c2VGZXRjaFBhZ2VGcm9udChudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMubWFpbil9PlxyXG4gICAgICAgICAgICA8U2VjdGlvbnNTdGFja1xyXG4gICAgICAgICAgICAgICAgaXNQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGE/LmRhdGE/LnNlY3Rpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9NYWluPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyb250UGFnZTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtMV9wYWdlcy1Gcm9udFBhZ2UtdWktRnJvbnRQYWdlLUZyb250UGFnZS1tb2R1bGVfX21haW4tc005ZUEge1xuICBwYWRkaW5nOiAzNTBweCAwIDExNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzFfcGFnZXMvRnJvbnRQYWdlL3VpL0Zyb250UGFnZS9Gcm9udFBhZ2UubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxzQkFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluIHtcXHJcXG4gICAgcGFkZGluZzogMzUwcHggMCAxMTVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpblwiOiBgc3JjLTFfcGFnZXMtRnJvbnRQYWdlLXVpLUZyb250UGFnZS1Gcm9udFBhZ2UtbW9kdWxlX19tYWluLXNNOWVBYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRnJvbnRQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRnJvbnRQYWdlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Zyb250UGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJydGtBcGkiLCJSb3V0ZXMiLCJwYWdlRnJvbnRBcGkiLCJpbmplY3RFbmRwb2ludHMiLCJlbmRwb2ludHMiLCJidWlsZCIsImZldGNoUGFnZUZyb250IiwicXVlcnkiLCJ1cmwiLCJQQUdFX0ZST05UIiwicGFyYW1zIiwicG9wdWxhdGUiLCJvdmVycmlkZUV4aXN0aW5nIiwidXNlRmV0Y2hQYWdlRnJvbnQiLCJ1c2VGZXRjaFBhZ2VGcm9udFF1ZXJ5IiwiUmVhY3QiLCJjbGFzc05hbWVzIiwiU2VjdGlvbnNTdGFjayIsIk1haW4iLCJjbHMiLCJqc3giLCJfanN4IiwiRnJvbnRQYWdlIiwiZGF0YSIsImlzTG9hZGluZyIsImNsYXNzTmFtZSIsIm1haW4iLCJjaGlsZHJlbiIsImlzUHJldmlldyIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9