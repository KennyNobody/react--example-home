"use strict";
(self["webpackChunkreact_home"] = self["webpackChunkreact_home"] || []).push([["src_1_pages_DetailPage_ui_DetailPage_tsx"],{

/***/ "./src/5_shared/assets/icons/arrow-scroll.svg":
/*!****************************************************!*\
  !*** ./src/5_shared/assets/icons/arrow-scroll.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgArrowScroll = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 44 43"
}, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "m24 35.364 16.628-15.685 2.744 2.91L22 42.749.628 22.59l2.744-2.91L20 35.364V0h4v35.364Z",
  clipRule: "evenodd"
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowScroll);

/***/ }),

/***/ "./src/3_features/DetailContent/index.ts":
/*!***********************************************!*\
  !*** ./src/3_features/DetailContent/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailContent: () => (/* reexport safe */ _ui_DetailContent_DetailContent__WEBPACK_IMPORTED_MODULE_0__.DetailContent)
/* harmony export */ });
/* harmony import */ var _ui_DetailContent_DetailContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/DetailContent/DetailContent */ "./src/3_features/DetailContent/ui/DetailContent/DetailContent.tsx");


/***/ }),

/***/ "./src/3_features/Share/index.ts":
/*!***************************************!*\
  !*** ./src/3_features/Share/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Share: () => (/* reexport safe */ _ui_Share__WEBPACK_IMPORTED_MODULE_0__.Share)
/* harmony export */ });
/* harmony import */ var _ui_Share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/Share */ "./src/3_features/Share/ui/Share.tsx");


/***/ }),

/***/ "./src/5_shared/libs/hooks/useStickyObserver.ts":
/*!******************************************************!*\
  !*** ./src/5_shared/libs/hooks/useStickyObserver.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStickyObserver: () => (/* binding */ useStickyObserver)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStickyObserver() {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isSticky, setIsSticky] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let observer;
    const options = {
      root: document,
      rootMargin: '-1px 0px 0px 0px',
      threshold: [1]
    };
    const callbackEvent = _ref => {
      let [el] = _ref;
      setIsSticky(el.intersectionRatio < 1);
    };
    if (ref.current) {
      observer = new IntersectionObserver(callbackEvent, options);
      observer.observe(ref.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);
  return {
    ref,
    isSticky
  };
}

/***/ }),

/***/ "./src/5_shared/libs/hooks/useTime.ts":
/*!********************************************!*\
  !*** ./src/5_shared/libs/hooks/useTime.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useFormattedDate = (timeStamp, lang) => {
  const [formattedDate, setFormattedDate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!timeStamp) {
      setFormattedDate('');
      return;
    }
    const date = new Date(timeStamp);
    if (Number.isNaN(date.getTime())) {
      setFormattedDate('');
      return;
    }
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const formattedString = date.toLocaleDateString(lang, options);
    setFormattedDate(lang === 'ru' ? formattedString.slice(0, -3) : formattedString);
  }, [timeStamp, lang]);
  return formattedDate;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormattedDate);

/***/ }),

/***/ "./src/1_pages/DetailPage/ui/DetailPage.tsx":
/*!**************************************************!*\
  !*** ./src/1_pages/DetailPage/ui/DetailPage.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _3_features_MetaPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 3_features/MetaPage */ "./src/3_features/MetaPage/index.ts");
/* harmony import */ var _3_features_DetailContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 3_features/DetailContent */ "./src/3_features/DetailContent/index.ts");
/* harmony import */ var _4_entities_Dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 4_entities/Dev */ "./src/4_entities/Dev/index.ts");
/* harmony import */ var _4_entities_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 4_entities/Post */ "./src/4_entities/Post/index.ts");
/* harmony import */ var _4_entities_Photo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! 4_entities/Photo */ "./src/4_entities/Photo/index.ts");
/* harmony import */ var _5_shared_ui_Main_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! 5_shared/ui/Main/Main */ "./src/5_shared/ui/Main/Main.tsx");
/* harmony import */ var _5_shared_types_CommonTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! 5_shared/types/CommonTypes */ "./src/5_shared/types/CommonTypes.ts");
/* harmony import */ var _DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailPage.module.scss */ "./src/1_pages/DetailPage/ui/DetailPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













const fetchMethods = {
  [_5_shared_types_CommonTypes__WEBPACK_IMPORTED_MODULE_8__.ContentKeyType.POST]: _4_entities_Post__WEBPACK_IMPORTED_MODULE_5__.useFetchPostById,
  [_5_shared_types_CommonTypes__WEBPACK_IMPORTED_MODULE_8__.ContentKeyType.DEV]: _4_entities_Dev__WEBPACK_IMPORTED_MODULE_4__.useFetchDevById,
  [_5_shared_types_CommonTypes__WEBPACK_IMPORTED_MODULE_8__.ContentKeyType.PHOTO]: _4_entities_Photo__WEBPACK_IMPORTED_MODULE_6__.useFetchPhotoById
};
function DetailPage(_ref) {
  let {
    mode
  } = _ref;
  const {
    slug
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)();
  const {
    data,
    isLoading
  } = fetchMethods[mode](slug || 'none');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_5_shared_ui_Main_Main__WEBPACK_IMPORTED_MODULE_7__.Main, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].main),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_3_features_MetaPage__WEBPACK_IMPORTED_MODULE_2__.MetaPage, {
      isLoading: isLoading,
      data: data?.seo || undefined
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_3_features_DetailContent__WEBPACK_IMPORTED_MODULE_3__.DetailContent, {
      data: data,
      isLoading: isLoading
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailPage);

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailCode/DetailCode.tsx":
/*!*******************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailCode/DetailCode.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailCode: () => (/* binding */ DetailCode)
/* harmony export */ });
/* harmony import */ var _5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/ui/EditorWrapper/EditorWrapper */ "./src/5_shared/ui/EditorWrapper/EditorWrapper.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const DetailCode = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_0__.EditorWrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pre", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
        children: children
      })
    })
  });
};

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailContent/DetailContent.tsx":
/*!*************************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailContent/DetailContent.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailContent: () => (/* binding */ DetailContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/config/ThemeContext */ "./src/5_shared/config/ThemeContext.ts");
/* harmony import */ var _5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/ui/Container/Container */ "./src/5_shared/ui/Container/Container.tsx");
/* harmony import */ var _5_shared_libs_hooks_useStickyObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/libs/hooks/useStickyObserver */ "./src/5_shared/libs/hooks/useStickyObserver.ts");
/* harmony import */ var _DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailContent.module.scss */ "./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss");
/* harmony import */ var _DetailIntro_DetailIntro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DetailIntro/DetailIntro */ "./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.tsx");
/* harmony import */ var _DetailEditor_DetailEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DetailEditor/DetailEditor */ "./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.tsx");
/* harmony import */ var _DetailToolbar_DetailToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DetailToolbar/DetailToolbar */ "./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const DetailContent = props => {
  const {
    data,
    className,
    isLoading
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  const {
    ref,
    isSticky
  } = (0,_5_shared_libs_hooks_useStickyObserver__WEBPACK_IMPORTED_MODULE_5__.useStickyObserver)();
  const [blockTheme, setBlockTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(theme);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (data?.main?.previewInverted !== undefined) {
      setBlockTheme(data.main.previewInverted ? _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.DARK : _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.LIGHT);
    }
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].block, _DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`block--${theme}`], className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("picture", {
      hidden: isSticky,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].picture),
      children: data?.main?.preview?.data?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
        src: `${"https://api.egor-badulin.ru"}${data?.main?.preview?.data?.url}`,
        alt: "#"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DetailIntro_DetailIntro__WEBPACK_IMPORTED_MODULE_7__.DetailIntro, {
      data: data,
      theme: blockTheme
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['intro-main']),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DetailToolbar_DetailToolbar__WEBPACK_IMPORTED_MODULE_9__.DetailToolbar, {
          ref: ref,
          data: data,
          theme: blockTheme
        })
      }), data?.main?.content && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['container-editor']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DetailEditor_DetailEditor__WEBPACK_IMPORTED_MODULE_8__.DetailEditor, {
          data: data.main.content
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.tsx":
/*!***********************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailEditor: () => (/* binding */ DetailEditor)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strapi_blocks_react_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @strapi/blocks-react-renderer */ "./node_modules/@strapi/blocks-react-renderer/dist/index.mjs");
/* harmony import */ var _5_shared_ui_Editor_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/ui/Editor/Editor */ "./src/5_shared/ui/Editor/Editor.tsx");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailEditor.module.scss */ "./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss");
/* harmony import */ var _DetailLink_DetailLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DetailLink/DetailLink */ "./src/3_features/DetailContent/ui/DetailLink/DetailLink.tsx");
/* harmony import */ var _DetailCode_DetailCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DetailCode/DetailCode */ "./src/3_features/DetailContent/ui/DetailCode/DetailCode.tsx");
/* harmony import */ var _DetailList_DetailList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DetailList/DetailList */ "./src/3_features/DetailContent/ui/DetailList/DetailList.tsx");
/* harmony import */ var _DetailQuote_DetailQuote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DetailQuote/DetailQuote */ "./src/3_features/DetailContent/ui/DetailQuote/DetailQuote.tsx");
/* harmony import */ var _DetailPicture_DetailPicture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DetailPicture/DetailPicture */ "./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.tsx");
/* harmony import */ var _DetailHeading_DetailHeading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DetailHeading/DetailHeading */ "./src/3_features/DetailContent/ui/DetailHeading/DetailHeading.tsx");
/* harmony import */ var _DetailParagraph_DetailParagraph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../DetailParagraph/DetailParagraph */ "./src/3_features/DetailContent/ui/DetailParagraph/DetailParagraph.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













const DetailEditor = props => {
  const {
    data,
    className
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].block, _DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"][`block--${theme}`], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_5_shared_ui_Editor_Editor__WEBPACK_IMPORTED_MODULE_2__.Editor, {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].editor),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_strapi_blocks_react_renderer__WEBPACK_IMPORTED_MODULE_1__.BlocksRenderer, {
        content: data,
        blocks: {
          paragraph: _ref => {
            let {
              children
            } = _ref;
            return (0,_DetailParagraph_DetailParagraph__WEBPACK_IMPORTED_MODULE_11__.DetailParagraph)({
              children
            });
          },
          // @ts-ignore
          image: _ref2 => {
            let {
              image
            } = _ref2;
            return (0,_DetailPicture_DetailPicture__WEBPACK_IMPORTED_MODULE_9__.DetailPicture)({
              image
            });
          },
          heading: _ref3 => {
            let {
              children,
              level
            } = _ref3;
            return (0,_DetailHeading_DetailHeading__WEBPACK_IMPORTED_MODULE_10__.DetailHeading)({
              children,
              level
            });
          },
          link: _ref4 => {
            let {
              children,
              url
            } = _ref4;
            return (0,_DetailLink_DetailLink__WEBPACK_IMPORTED_MODULE_5__.DetailLink)({
              children,
              url
            });
          },
          code: _ref5 => {
            let {
              children
            } = _ref5;
            return (0,_DetailCode_DetailCode__WEBPACK_IMPORTED_MODULE_6__.DetailCode)({
              children
            });
          },
          list: _ref6 => {
            let {
              children,
              format
            } = _ref6;
            return (0,_DetailList_DetailList__WEBPACK_IMPORTED_MODULE_7__.DetailList)({
              children,
              format
            });
          },
          quote: _ref7 => {
            let {
              children
            } = _ref7;
            return (0,_DetailQuote_DetailQuote__WEBPACK_IMPORTED_MODULE_8__.DetailQuote)({
              children
            });
          }
        }
      })
    })
  });
};

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailHeading/DetailHeading.tsx":
/*!*************************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailHeading/DetailHeading.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailHeading: () => (/* binding */ DetailHeading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/ui/EditorWrapper/EditorWrapper */ "./src/5_shared/ui/EditorWrapper/EditorWrapper.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const DetailHeading = props => {
  const {
    level,
    children
  } = props;
  const tag = `h${level > 0 && level < 7 ? level : 6}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_1__.EditorWrapper, {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(tag, null, children)
  });
};

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.tsx":
/*!*********************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailIntro: () => (/* binding */ DetailIntro)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _4_entities_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 4_entities/Category */ "./src/4_entities/Category/index.ts");
/* harmony import */ var _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/config/ThemeContext */ "./src/5_shared/config/ThemeContext.ts");
/* harmony import */ var _5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/ui/Container/Container */ "./src/5_shared/ui/Container/Container.tsx");
/* harmony import */ var _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/css/grid.module.scss */ "./src/5_shared/css/grid.module.scss");
/* harmony import */ var _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailIntro.module.scss */ "./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const DetailIntro = props => {
  const {
    data,
    theme,
    className
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].intro, _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`intro--${theme}`], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_3__.Container, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['intro-content']),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].grid),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['grid__col-lap-3'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['grid__col-mob-4'], _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['column-title']),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h1", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title),
              children: [data?.main?.previewTitle, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), data?.main?.previewCaption]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['grid__col-lap-1'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['grid__col-mob-4'], _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['column-cat']),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['toolbar-category']),
              children: data?.category?.data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ArticleCategory, {
                themeProp: theme,
                data: data?.category?.data,
                mode: _4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ArticleCategoryMode.STATIC
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['main-content']),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].grid, _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].grid),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['grid__col-mob-4']),
              children: data?.tags?.data && data?.tags?.data?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ListTags, {
                children: data.tags.data.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ArticleTag, {
                  data: item,
                  themeProp: data?.main?.previewInverted ? _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.AppTheme.DARK : _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.AppTheme.LIGHT
                }, item.id))
              })
            })
          })
        })]
      })
    })
  });
};

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailLink/DetailLink.tsx":
/*!*******************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailLink/DetailLink.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailLink: () => (/* binding */ DetailLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

const DetailLink = props => {
  const {
    url,
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
    href: url,
    rel: "noopener noreferrer",
    target: "_blank",
    children: children
  });
};

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailList/DetailList.tsx":
/*!*******************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailList/DetailList.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailList: () => (/* binding */ DetailList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/ui/EditorWrapper/EditorWrapper */ "./src/5_shared/ui/EditorWrapper/EditorWrapper.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const DetailList = props => {
  const {
    format,
    children
  } = props;
  const listTag = format === 'ordered' ? 'ol' : 'ul';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_1__.EditorWrapper, {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(listTag, null, children)
  });
};

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailParagraph/DetailParagraph.tsx":
/*!*****************************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailParagraph/DetailParagraph.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailParagraph: () => (/* binding */ DetailParagraph)
/* harmony export */ });
/* harmony import */ var _5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/ui/EditorWrapper/EditorWrapper */ "./src/5_shared/ui/EditorWrapper/EditorWrapper.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const DetailParagraph = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_0__.EditorWrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      children: children
    })
  });
};

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.tsx":
/*!*************************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailPicture: () => (/* binding */ DetailPicture)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/ui/EditorWrapper/EditorWrapper */ "./src/5_shared/ui/EditorWrapper/EditorWrapper.tsx");
/* harmony import */ var _DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailPicture.module.scss */ "./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const DetailPicture = props => {
  const {
    image
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();

  // TODO: Добавить srcset
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("figure", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].figure),
    children: [image?.formats?.large?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: `${"https://api.egor-badulin.ru"}${image?.formats?.large?.url}`,
      alt: image?.alternativeText || '#'
    }), !image?.formats?.large?.url && image?.formats?.medium?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: `${"https://api.egor-badulin.ru"}${image?.formats?.medium?.url}`,
      alt: image?.alternativeText || '#'
    }), !image?.formats?.large?.url && !image?.formats?.medium?.url && image?.formats?.small?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: `${"https://api.egor-badulin.ru"}${image?.formats?.small?.url}`,
      alt: image?.alternativeText || '#'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("figcaption", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].figcaption),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_2__.EditorWrapper, {
        children: [image?.caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].text),
          children: image.caption
        }), image?.alternativeText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].caption, _DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"][`caption--${theme}`]),
          children: image.alternativeText
        })]
      })
    })]
  });
};

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailQuote/DetailQuote.tsx":
/*!*********************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailQuote/DetailQuote.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailQuote: () => (/* binding */ DetailQuote)
/* harmony export */ });
/* harmony import */ var _5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/ui/EditorWrapper/EditorWrapper */ "./src/5_shared/ui/EditorWrapper/EditorWrapper.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const DetailQuote = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_0__.EditorWrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("blockquote", {
      children: children
    })
  });
};

/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.tsx":
/*!*************************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailToolbar: () => (/* binding */ DetailToolbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _3_features_Share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 3_features/Share */ "./src/3_features/Share/index.ts");
/* harmony import */ var _5_shared_ui_DateInfo_DateInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/ui/DateInfo/DateInfo */ "./src/5_shared/ui/DateInfo/DateInfo.tsx");
/* harmony import */ var _5_shared_assets_icons_arrow_scroll_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/assets/icons/arrow-scroll.svg */ "./src/5_shared/assets/icons/arrow-scroll.svg");
/* harmony import */ var _DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailToolbar.module.scss */ "./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const DetailToolbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    data,
    theme,
    className
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    ref: ref,
    id: "scroll-anchor",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].footer, _DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`footer--${theme}`], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['footer-grid']),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['column-date']),
        children: data?.publishedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_5_shared_ui_DateInfo_DateInfo__WEBPACK_IMPORTED_MODULE_3__.DateInfo, {
          date: data?.publishedAt,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].time)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['column-button']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
          href: "#scroll-anchor",
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_5_shared_assets_icons_arrow_scroll_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].icon, _DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`icon--${theme}`])
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['column-share']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['share-column']),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_3_features_Share__WEBPACK_IMPORTED_MODULE_2__.Share, {
            themeProp: theme,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].share)
          })
        })
      })]
    })
  });
});

/***/ }),

/***/ "./src/3_features/Share/ui/Share.tsx":
/*!*******************************************!*\
  !*** ./src/3_features/Share/ui/Share.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Share: () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _5_shared_ui_Controls_Controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/ui/Controls/Controls */ "./src/5_shared/ui/Controls/Controls.tsx");
/* harmony import */ var _5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/ui/IconSocial/IconSocial */ "./src/5_shared/ui/IconSocial/IconSocial.tsx");
/* harmony import */ var _Share_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Share.module.scss */ "./src/3_features/Share/ui/Share.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const Share = props => {
  const {
    themeProp,
    className
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const themeMode = themeProp || theme;

  // TODO: Сделать мобильную версию

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].block, className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title),
      children: t('share')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_5_shared_ui_Controls_Controls__WEBPACK_IMPORTED_MODULE_4__.Controls, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].controls),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_8__.VKShareButton, {
        url: "vk.com",
        resetButtonStyle: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].button, _Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`button--${themeMode}`]),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_5__.IconSocial, {
          iconKey: _5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_5__.IconKey.VK,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].icon, _Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`icon--${themeMode}`])
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_8__.TwitterShareButton, {
        url: "twitter.com",
        resetButtonStyle: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].button, _Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`button--${themeMode}`]),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_5__.IconSocial, {
          iconKey: _5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_5__.IconKey.X,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].icon, _Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`icon--${themeMode}`])
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_8__.FacebookShareButton, {
        url: "fb.com",
        resetButtonStyle: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].button, _Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`button--${themeMode}`]),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_5__.IconSocial, {
          iconKey: _5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_5__.IconKey.FB,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].icon, _Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`icon--${themeMode}`])
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_8__.TelegramShareButton, {
        url: "tg.com",
        resetButtonStyle: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].button, _Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`button--${themeMode}`]),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_5__.IconSocial, {
          iconKey: _5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_5__.IconKey.TG,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].icon, _Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`icon--${themeMode}`])
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./src/5_shared/ui/DateInfo/DateInfo.tsx":
/*!***********************************************!*\
  !*** ./src/5_shared/ui/DateInfo/DateInfo.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateInfo: () => (/* binding */ DateInfo)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _5_shared_libs_hooks_useTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/libs/hooks/useTime */ "./src/5_shared/libs/hooks/useTime.ts");
/* harmony import */ var _DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DateInfo.module.scss */ "./src/5_shared/ui/DateInfo/DateInfo.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const DateInfo = props => {
  const {
    date,
    className
  } = props;
  const {
    i18n
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const lang = i18n.language;
  const time = (0,_5_shared_libs_hooks_useTime__WEBPACK_IMPORTED_MODULE_2__["default"])(date, lang);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("time", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].block, className),
    children: time
  });
};

/***/ }),

/***/ "./src/5_shared/ui/EditorWrapper/EditorWrapper.tsx":
/*!*********************************************************!*\
  !*** ./src/5_shared/ui/EditorWrapper/EditorWrapper.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorWrapper: () => (/* binding */ EditorWrapper)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorWrapper.module.scss */ "./src/5_shared/ui/EditorWrapper/EditorWrapper.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const EditorWrapper = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].block),
    children: children
  });
};

/***/ }),

/***/ "./src/5_shared/ui/Editor/Editor.tsx":
/*!*******************************************!*\
  !*** ./src/5_shared/ui/Editor/Editor.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Editor: () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _Editor_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editor.module.scss */ "./src/5_shared/ui/Editor/Editor.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const Editor = props => {
  const {
    data,
    children,
    themeProp,
    className
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  if (data) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_Editor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].editor, _Editor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][`editor--${themeProp || theme}`], className)
      // eslint-disable-next-line react/no-danger
      ,
      dangerouslySetInnerHTML: {
        __html: data
      }
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_Editor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].editor, _Editor_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][`editor--${themeProp || theme}`], className),
    children: children
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/DetailPage/ui/DetailPage.module.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/DetailPage/ui/DetailPage.module.scss ***!
  \*******************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-3_features-DetailContent-ui-DetailContent-DetailContent-module__block-Bs23I {
  background-color: var(--bg-dark);
}

.src-3_features-DetailContent-ui-DetailContent-DetailContent-module__picture-dLzE_ {
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  display: block;
  position: fixed;
  transition: 0.3s opacity;
}
.src-3_features-DetailContent-ui-DetailContent-DetailContent-module__picture-dLzE_[hidden] {
  opacity: 0;
  visibility: hidden;
}
.src-3_features-DetailContent-ui-DetailContent-DetailContent-module__picture-dLzE_ img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

.src-3_features-DetailContent-ui-DetailContent-DetailContent-module__intro-main-RpaDo {
  position: relative;
  margin-top: calc(100vh - 180px);
}

@media (width <= 2160px) {
  .src-3_features-DetailContent-ui-DetailContent-DetailContent-module__intro-main-RpaDo {
    margin-top: calc(100vh - 130px);
  }
}
@media (width <= 1200px) {
  .src-3_features-DetailContent-ui-DetailContent-DetailContent-module__intro-main-RpaDo {
    margin-top: calc(100vh - 80px);
  }
  .src-3_features-DetailContent-ui-DetailContent-DetailContent-module__container-editor-e4Jbn {
    padding: 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss"],"names":[],"mappings":"AAAA;EACI,gCAAA;AACJ;;AAEA;EACI,MAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;EACA,wBAAA;AACJ;AACI;EACI,UAAA;EACA,kBAAA;AACR;AAEI;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;AAAR;;AAIA;EACI,kBAAA;EACA,+BAAA;AADJ;;AAIA;EACI;IACI,+BAAA;EADN;AACF;AAIA;EACI;IACI,8BAAA;EAFN;EAKE;IACI,UAAA;EAHN;AACF","sourcesContent":[".block {\r\n    background-color: var(--bg-dark);\r\n}\r\n\r\n.picture {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 1;\r\n    z-index: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: block;\r\n    position: fixed;\r\n    transition: 0.3s opacity;\r\n\r\n    &[hidden] {\r\n        opacity: 0;\r\n        visibility: hidden;\r\n    }\r\n\r\n    img {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n        object-fit: cover;\r\n        object-position: center;\r\n    }\r\n}\r\n\r\n.intro-main {\r\n    position: relative;\r\n    margin-top: calc(100vh - 180px);\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .intro-main {\r\n        margin-top: calc(100vh - 130px);\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .intro-main {\r\n        margin-top: calc(100vh - 80px);\r\n    }\r\n\r\n    .container-editor {\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-3_features-DetailContent-ui-DetailContent-DetailContent-module__block-Bs23I`,
	"picture": `src-3_features-DetailContent-ui-DetailContent-DetailContent-module__picture-dLzE_`,
	"intro-main": `src-3_features-DetailContent-ui-DetailContent-DetailContent-module__intro-main-RpaDo`,
	"container-editor": `src-3_features-DetailContent-ui-DetailContent-DetailContent-module__container-editor-e4Jbn`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss ***!
  \****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block-OAksJ {
  padding: 60px 50px;
  border-radius: 28px;
}
.src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block--theme-light-9USvZ {
  background-color: var(--light-accent);
}
.src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block--theme-dark-Uj701 {
  background-color: var(--dark-accent);
}

@media (width <= 2160px) {
  .src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block-OAksJ {
    padding: 50px 40px;
    border-radius: 22px;
  }
}
@media (width <= 1200px) {
  .src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block-OAksJ {
    padding: 25px 15px;
    border-radius: 16px;
  }
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,mBAAA;AACJ;AACI;EACI,qCAAA;AACR;AAEI;EACI,oCAAA;AAAR;;AAIA;EACI;IACI,kBAAA;IACA,mBAAA;EADN;AACF;AAIA;EACI;IACI,kBAAA;IACA,mBAAA;EAFN;AACF","sourcesContent":[".block {\r\n    padding: 60px 50px;\r\n    border-radius: 28px;\r\n\r\n    &--theme-light {\r\n        background-color: var(--light-accent);\r\n    }\r\n\r\n    &--theme-dark {\r\n        background-color: var(--dark-accent);\r\n    }\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        padding: 50px 40px;\r\n        border-radius: 22px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        padding: 25px 15px;\r\n        border-radius: 16px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block-OAksJ`,
	"block--theme-light": `src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block--theme-light-9USvZ`,
	"block--theme-dark": `src-3_features-DetailContent-ui-DetailEditor-DetailEditor-module__block--theme-dark-Uj701`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss ***!
  \**************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-yOD8K {
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: fixed;
}
.src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro--theme-light-JjHqg {
  color: var(--dark-primary);
}
.src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro--theme-dark-zA9MB {
  color: var(--light-accent);
}

.src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-content-V1wD4 {
  gap: 60px;
  z-index: 1;
  display: flex;
  height: 100vh;
  position: relative;
  flex-direction: column;
  padding: 185px 0 150px;
}

.src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__toolbar-category-ggGuZ {
  display: flex;
  justify-content: flex-end;
}

.src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__title-sgMpQ {
  line-height: 1.1;
  font-size: 106px;
  font-weight: 350;
}

@media (width <= 2160px) {
  .src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-content-V1wD4 {
    gap: 40px;
    height: 100vh;
    padding: 150px 0 150px;
  }
  .src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__title-sgMpQ {
    font-size: 74px;
    line-height: 1.2;
  }
}
@media (width <= 1200px) {
  .src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-content-V1wD4 {
    gap: 20px;
    padding: 90px 0 100px;
  }
  .src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__title-sgMpQ {
    font-size: 34px;
    line-height: 1.3;
  }
  .src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__column-title-qnse9 {
    order: 2;
  }
  .src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__column-cat-VomYl {
    order: 1;
  }
  .src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__toolbar-category-ggGuZ {
    justify-content: flex-start;
  }
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss"],"names":[],"mappings":"AAAA;EACI,MAAA;EACA,OAAA;EACA,QAAA;EACA,cAAA;EACA,eAAA;AACJ;AACI;EACI,0BAAA;AACR;AAEI;EACI,0BAAA;AAAR;;AAIA;EACI,SAAA;EACA,UAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;AADJ;;AAIA;EACI,aAAA;EACA,yBAAA;AADJ;;AAIA;EACI,gBAAA;EACA,gBAAA;EACA,gBAAA;AADJ;;AAIA;EACI;IACI,SAAA;IACA,aAAA;IACA,sBAAA;EADN;EAIE;IACI,eAAA;IACA,gBAAA;EAFN;AACF;AAKA;EACI;IACI,SAAA;IACA,qBAAA;EAHN;EAME;IACI,eAAA;IACA,gBAAA;EAJN;EAOE;IACI,QAAA;EALN;EAQE;IACI,QAAA;EANN;EASE;IACI,2BAAA;EAPN;AACF","sourcesContent":[".intro {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    position: fixed;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-accent);\r\n    }\r\n}\r\n\r\n.intro-content {\r\n    gap: 60px;\r\n    z-index: 1;\r\n    display: flex;\r\n    height: 100vh;\r\n    position: relative;\r\n    flex-direction: column;\r\n    padding: 185px 0 150px;\r\n}\r\n\r\n.toolbar-category {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.title {\r\n    line-height: 1.1;\r\n    font-size: 106px;\r\n    font-weight: 350;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .intro-content {\r\n        gap: 40px;\r\n        height: 100vh;\r\n        padding: 150px 0 150px;\r\n    }\r\n\r\n    .title {\r\n        font-size: 74px;\r\n        line-height: 1.2;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .intro-content {\r\n        gap: 20px;\r\n        padding: 90px 0 100px;\r\n    }\r\n\r\n    .title {\r\n        font-size: 34px;\r\n        line-height: 1.3;\r\n    }\r\n\r\n    .column-title {\r\n        order: 2;\r\n    }\r\n\r\n    .column-cat {\r\n        order: 1;\r\n    }\r\n\r\n    .toolbar-category {\r\n        justify-content: flex-start;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"intro": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-yOD8K`,
	"intro--theme-light": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro--theme-light-JjHqg`,
	"intro--theme-dark": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro--theme-dark-zA9MB`,
	"intro-content": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-content-V1wD4`,
	"toolbar-category": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__toolbar-category-ggGuZ`,
	"title": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__title-sgMpQ`,
	"column-title": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__column-title-qnse9`,
	"column-cat": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__column-cat-VomYl`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__figure-IkDXf {
  display: block;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}
.src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__figure-IkDXf img {
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
}

.src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__figcaption-qOQIj {
  padding-top: 10px;
}

.src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__text-dsaE0 {
  font-size: 22px;
}

.src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption-bKPNO {
  font-size: 18px;
}
.src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption--theme-light-rn1I0 {
  color: var(--dark-secondary);
}
.src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption--theme-dark-SUPBD {
  color: var(--light-secondary);
}

@media (width <= 2160px) {
  .src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__figcaption-qOQIj {
    padding-top: 10px;
  }
  .src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__text-dsaE0 {
    font-size: 18px;
  }
  .src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption-bKPNO {
    font-size: 16px;
  }
}
@media (width <= 1200px) {
  .src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__figcaption-qOQIj {
    padding-top: 5px;
  }
  .src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__text-dsaE0 {
    font-size: 16px;
  }
  .src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption-bKPNO {
    font-size: 14px;
  }
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AACR;;AAGA;EACI,iBAAA;AAAJ;;AAGA;EACI,eAAA;AAAJ;;AAGA;EACI,eAAA;AAAJ;AAEI;EACI,4BAAA;AAAR;AAGI;EACI,6BAAA;AADR;;AAKA;EACI;IACI,iBAAA;EAFN;EAKE;IACI,eAAA;EAHN;EAME;IACI,eAAA;EAJN;AACF;AAOA;EACI;IACI,gBAAA;EALN;EAQE;IACI,eAAA;EANN;EASE;IACI,eAAA;EAPN;AACF","sourcesContent":[".figure {\r\n    display: block;\r\n    max-width: 1920px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: fit-content;\r\n\r\n    img {\r\n        width: 100%;\r\n        height: auto;\r\n        margin: 0 auto;\r\n        display: block;\r\n    }\r\n}\r\n\r\n.figcaption {\r\n    padding-top: 10px;\r\n}\r\n\r\n.text {\r\n    font-size: 22px;\r\n}\r\n\r\n.caption {\r\n    font-size: 18px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-secondary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-secondary);\r\n    }\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .figcaption {\r\n        padding-top: 10px;\r\n    }\r\n\r\n    .text {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .figcaption {\r\n        padding-top: 5px;\r\n    }\r\n\r\n    .text {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 14px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"figure": `src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__figure-IkDXf`,
	"figcaption": `src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__figcaption-qOQIj`,
	"text": `src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__text-dsaE0`,
	"caption": `src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption-bKPNO`,
	"caption--theme-light": `src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption--theme-light-rn1I0`,
	"caption--theme-dark": `src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__caption--theme-dark-SUPBD`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-oL_iU {
  top: -1px;
  width: 100%;
  display: flex;
  min-height: 90px;
  position: sticky;
  margin-bottom: 35px;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s background-color;
}
.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer--theme-light-PzUx_ {
  color: var(--dark-primary);
}
.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer--theme-dark-wk4q4 {
  color: var(--light-primary);
}

.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-grid-O5NsU {
  width: 100%;
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
}

.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__column-date-qreo7 {
  width: 40%;
}

.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__column-button-P4Cqn {
  width: 20%;
}

.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__column-share-P_D6w {
  width: 40%;
}

.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__button-Bvp6U {
  opacity: 1;
  width: 100%;
  border: none;
  padding: 4px;
  display: flex;
  cursor: pointer;
  background: none;
  overflow: hidden;
  align-items: center;
  transition: 0.3s all;
  justify-content: center;
}

.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon-jISxf {
  width: 44px;
  height: 44px;
  display: block;
}
.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon--theme-light-ZcEXj {
  fill: var(--dark-primary);
}
.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon--theme-dark-NIjSd {
  fill: var(--light-primary);
}

.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__share-LgZYA {
  justify-content: flex-end;
}

@media (width <= 2160px) {
  .src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-oL_iU {
    min-height: 60px;
    margin-bottom: 25px;
  }
  .src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-grid-O5NsU {
    min-height: 20px;
  }
  .src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon-jISxf {
    width: 32px;
    height: 32px;
  }
}
@media (width <= 1200px) {
  .src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-oL_iU {
    min-height: 40px;
    margin-bottom: 15px;
  }
  .src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon-jISxf {
    width: 20px;
    height: 20px;
  }
  .src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__column-share-P_D6w {
    display: none;
    visibility: hidden;
  }
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,iCAAA;AACJ;AACI;EACI,0BAAA;AACR;AAEI;EACI,2BAAA;AAAR;;AAIA;EACI,WAAA;EACA,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,8BAAA;AADJ;;AAIA;EACI,UAAA;AADJ;;AAIA;EACI,UAAA;AADJ;;AAIA;EACI,UAAA;AADJ;;AAIA;EACI,UAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;EACA,uBAAA;AADJ;;AAIA;EACI,WAAA;EACA,YAAA;EACA,cAAA;AADJ;AAGI;EACI,yBAAA;AADR;AAII;EACI,0BAAA;AAFR;;AAMA;EACI,yBAAA;AAHJ;;AAMA;EACI;IACI,gBAAA;IACA,mBAAA;EAHN;EAME;IACI,gBAAA;EAJN;EAOE;IACI,WAAA;IACA,YAAA;EALN;AACF;AAQA;EACI;IACI,gBAAA;IACA,mBAAA;EANN;EASE;IACI,WAAA;IACA,YAAA;EAPN;EAUE;IACI,aAAA;IACA,kBAAA;EARN;AACF","sourcesContent":[".footer {\r\n    top: -1px;\r\n    width: 100%;\r\n    display: flex;\r\n    min-height: 90px;\r\n    position: sticky;\r\n    margin-bottom: 35px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    transition: 0.3s background-color;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-primary);\r\n    }\r\n}\r\n\r\n.footer-grid {\r\n    width: 100%;\r\n    display: flex;\r\n    min-height: 60px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.column-date {\r\n    width: 40%;\r\n}\r\n\r\n.column-button {\r\n    width: 20%;\r\n}\r\n\r\n.column-share {\r\n    width: 40%;\r\n}\r\n\r\n.button {\r\n    opacity: 1;\r\n    width: 100%;\r\n    border: none;\r\n    padding: 4px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: none;\r\n    overflow: hidden;\r\n    align-items: center;\r\n    transition: 0.3s all;\r\n    justify-content: center;\r\n}\r\n\r\n.icon {\r\n    width: 44px;\r\n    height: 44px;\r\n    display: block;\r\n\r\n    &--theme-light {\r\n        fill: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        fill: var(--light-primary);\r\n    }\r\n}\r\n\r\n.share {\r\n    justify-content: flex-end;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .footer {\r\n        min-height: 60px;\r\n        margin-bottom: 25px;\r\n    }\r\n\r\n    .footer-grid {\r\n        min-height: 20px;\r\n    }\r\n\r\n    .icon {\r\n        width: 32px;\r\n        height: 32px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .footer {\r\n        min-height: 40px;\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n    .icon {\r\n        width: 20px;\r\n        height: 20px;\r\n    }\r\n\r\n    .column-share {\r\n        display: none;\r\n        visibility: hidden;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-oL_iU`,
	"footer--theme-light": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer--theme-light-PzUx_`,
	"footer--theme-dark": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer--theme-dark-wk4q4`,
	"footer-grid": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-grid-O5NsU`,
	"column-date": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__column-date-qreo7`,
	"column-button": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__column-button-P4Cqn`,
	"column-share": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__column-share-P_D6w`,
	"button": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__button-Bvp6U`,
	"icon": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon-jISxf`,
	"icon--theme-light": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon--theme-light-ZcEXj`,
	"icon--theme-dark": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__icon--theme-dark-NIjSd`,
	"share": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__share-LgZYA`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/Share/ui/Share.module.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/Share/ui/Share.module.scss ***!
  \************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-3_features-Share-ui-Share-module__block-wOa20 {
  gap: 30px;
  display: flex;
  align-items: center;
}

.src-3_features-Share-ui-Share-module__title-TfwVU {
  font-size: 24px;
}

.src-3_features-Share-ui-Share-module__button-xh3YL {
  margin: 0;
  padding: 0;
  width: 84px;
  height: 48px;
  display: flex;
  cursor: pointer;
  background: none;
  border: 1px solid;
  border-radius: 48px;
  align-items: center;
  transition: 0.3s all;
  justify-content: center;
}
.src-3_features-Share-ui-Share-module__button--theme-light-jImGQ {
  border-color: var(--dark-primary);
}
.src-3_features-Share-ui-Share-module__button--theme-dark-SzEVg {
  border-color: var(--light-primary);
}
.src-3_features-Share-ui-Share-module__button-xh3YL:hover {
  opacity: 0.7;
}

.src-3_features-Share-ui-Share-module__icon-bXEVd {
  width: 30px;
  height: 18px;
  display: block;
  transition: 0.3s all;
}
.src-3_features-Share-ui-Share-module__icon--theme-light-bN3DZ {
  fill: var(--dark-primary);
}
.src-3_features-Share-ui-Share-module__icon--theme-dark-HE9TX {
  fill: var(--light-primary);
}

@media (width <= 2160px) {
  .src-3_features-Share-ui-Share-module__title-TfwVU {
    font-size: 20px;
  }
  .src-3_features-Share-ui-Share-module__icon-bXEVd {
    width: 24px;
    height: 16px;
  }
}
@media (width <= 1200px) {
  .src-3_features-Share-ui-Share-module__title-TfwVU {
    display: none;
    visibility: hidden;
  }
  .src-3_features-Share-ui-Share-module__controls-eV95A {
    display: none;
    visibility: hidden;
  }
}`, "",{"version":3,"sources":["webpack://./src/3_features/Share/ui/Share.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAMA;EACI,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,oBAAA;EACA,uBAAA;AAHJ;AAKI;EACI,iCAAA;AAHR;AAMI;EACI,kCAAA;AAJR;AAOI;EACI,YAAA;AALR;;AASA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,oBAAA;AANJ;AAQI;EACI,yBAAA;AANR;AASI;EACI,0BAAA;AAPR;;AAWA;EACI;IACI,eAAA;EARN;EAWE;IACI,WAAA;IACA,YAAA;EATN;AACF;AAYA;EACI;IACI,aAAA;IACA,kBAAA;EAVN;EAaE;IACI,aAAA;IACA,kBAAA;EAXN;AACF","sourcesContent":[".block {\r\n    gap: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.title {\r\n    font-size: 24px;\r\n}\r\n\r\n.controls {\r\n\r\n}\r\n\r\n.button {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 84px;\r\n    height: 48px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: none;\r\n    border: 1px solid;\r\n    border-radius: 48px;\r\n    align-items: center;\r\n    transition: 0.3s all;\r\n    justify-content: center;\r\n\r\n    &--theme-light {\r\n        border-color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        border-color: var(--light-primary);\r\n    }\r\n\r\n    &:hover {\r\n        opacity: 0.7;\r\n    }\r\n}\r\n\r\n.icon {\r\n    width: 30px;\r\n    height: 18px;\r\n    display: block;\r\n    transition: 0.3s all;\r\n\r\n    &--theme-light {\r\n        fill: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        fill: var(--light-primary);\r\n    }\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .title {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .icon {\r\n        width: 24px;\r\n        height: 16px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .title {\r\n        display: none;\r\n        visibility: hidden;\r\n    }\r\n\r\n    .controls {\r\n        display: none;\r\n        visibility: hidden;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-3_features-Share-ui-Share-module__block-wOa20`,
	"title": `src-3_features-Share-ui-Share-module__title-TfwVU`,
	"button": `src-3_features-Share-ui-Share-module__button-xh3YL`,
	"button--theme-light": `src-3_features-Share-ui-Share-module__button--theme-light-jImGQ`,
	"button--theme-dark": `src-3_features-Share-ui-Share-module__button--theme-dark-SzEVg`,
	"icon": `src-3_features-Share-ui-Share-module__icon-bXEVd`,
	"icon--theme-light": `src-3_features-Share-ui-Share-module__icon--theme-light-bN3DZ`,
	"icon--theme-dark": `src-3_features-Share-ui-Share-module__icon--theme-dark-HE9TX`,
	"controls": `src-3_features-Share-ui-Share-module__controls-eV95A`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/DateInfo/DateInfo.module.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/DateInfo/DateInfo.module.scss ***!
  \****************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-5_shared-ui-DateInfo-DateInfo-module__block-lrfxz {
  font-size: 24px;
}

@media (width <= 2160px) {
  .src-5_shared-ui-DateInfo-DateInfo-module__block-lrfxz {
    font-size: 20px;
  }
}
@media (width <= 1200px) {
  .src-5_shared-ui-DateInfo-DateInfo-module__block-lrfxz {
    font-size: 16px;
  }
}`, "",{"version":3,"sources":["webpack://./src/5_shared/ui/DateInfo/DateInfo.module.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;AACJ;;AAGA;EACI;IACI,eAAA;EAAN;AACF;AAGA;EACI;IACI,eAAA;EADN;AACF","sourcesContent":[".block {\r\n    font-size: 24px;\r\n}\r\n\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        font-size: 16px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-5_shared-ui-DateInfo-DateInfo-module__block-lrfxz`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/EditorWrapper/EditorWrapper.module.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/EditorWrapper/EditorWrapper.module.scss ***!
  \**************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-5_shared-ui-EditorWrapper-EditorWrapper-module__block-JaNUN {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}`, "",{"version":3,"sources":["webpack://./src/5_shared/ui/EditorWrapper/EditorWrapper.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AACJ","sourcesContent":[".block {\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-5_shared-ui-EditorWrapper-EditorWrapper-module__block-JaNUN`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/Editor/Editor.module.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/Editor/Editor.module.scss ***!
  \************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-5_shared-ui-Editor-Editor-module__editor-HsrXa {
  font-size: 28px;
  line-height: 1.6;
}
.src-5_shared-ui-Editor-Editor-module__editor-HsrXa > * {
  margin-bottom: 1.5em;
}
.src-5_shared-ui-Editor-Editor-module__editor-HsrXa :last-child {
  margin-bottom: 0;
}
.src-5_shared-ui-Editor-Editor-module__editor-HsrXa a {
  color: inherit;
  text-decoration-color: var(--blue);
}
.src-5_shared-ui-Editor-Editor-module__editor-HsrXa a:hover {
  text-decoration: none;
}
.src-5_shared-ui-Editor-Editor-module__editor-HsrXa b, .src-5_shared-ui-Editor-Editor-module__editor-HsrXa strong {
  font-weight: 600;
}
.src-5_shared-ui-Editor-Editor-module__editor-HsrXa pre {
  font-size: 22px;
  overflow-x: auto;
  padding: 1em 1.5em;
  border-radius: 6px;
  font-family: monospace;
}
.src-5_shared-ui-Editor-Editor-module__editor-HsrXa ul, .src-5_shared-ui-Editor-Editor-module__editor-HsrXa ol {
  list-style-position: inside;
}
.src-5_shared-ui-Editor-Editor-module__editor-HsrXa ul {
  list-style-type: disc;
}
.src-5_shared-ui-Editor-Editor-module__editor-HsrXa ol {
  list-style-type: decimal;
}
.src-5_shared-ui-Editor-Editor-module__editor-HsrXa blockquote {
  border-left: 5px solid;
  padding: 0.5em 1em;
  margin: 1em 0;
  font-style: italic;
}
.src-5_shared-ui-Editor-Editor-module__editor--theme-light-Zx_xN pre {
  background-color: #f4f4f4;
  color: #333;
}
.src-5_shared-ui-Editor-Editor-module__editor--theme-light-Zx_xN blockquote {
  background-color: #f9f9f9;
  border-left-color: var(--blue);
}
.src-5_shared-ui-Editor-Editor-module__editor--theme-dark-ktzIZ pre {
  color: var(--light-primary);
  background-color: var(--bg-dark);
}
.src-5_shared-ui-Editor-Editor-module__editor--theme-dark-ktzIZ blockquote {
  color: #f4f4f4;
  background-color: #333;
  border-left-color: var(--blue);
}

@media (width <= 2160px) {
  .src-5_shared-ui-Editor-Editor-module__editor-HsrXa {
    font-size: 22px;
    line-height: 1.5;
  }
  .src-5_shared-ui-Editor-Editor-module__editor-HsrXa > * {
    margin-bottom: 1.5em;
  }
  .src-5_shared-ui-Editor-Editor-module__editor-HsrXa pre {
    font-size: 18px;
    padding: 1em 1.5em;
    border-radius: 5px;
  }
  .src-5_shared-ui-Editor-Editor-module__editor-HsrXa blockquote {
    margin: 1em 0;
    padding: 0.5em 1em;
    border-left: 4px solid;
  }
}
@media (width <= 1200px) {
  .src-5_shared-ui-Editor-Editor-module__editor-HsrXa {
    font-size: 16px;
    line-height: 1.5;
  }
  .src-5_shared-ui-Editor-Editor-module__editor-HsrXa > * {
    margin-bottom: 1.5em;
  }
  .src-5_shared-ui-Editor-Editor-module__editor-HsrXa pre {
    font-size: 14px;
    padding: 1em 1.5em;
    border-radius: 5px;
  }
  .src-5_shared-ui-Editor-Editor-module__editor-HsrXa blockquote {
    margin: 1em 0;
    padding: 0.5em 1em;
    border-left: 2px solid;
  }
}`, "",{"version":3,"sources":["webpack://./src/5_shared/ui/Editor/Editor.module.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,gBAAA;AACJ;AACI;EACI,oBAAA;AACR;AAEI;EACI,gBAAA;AAAR;AAGI;EACI,cAAA;EACA,kCAAA;AADR;AAGQ;EACI,qBAAA;AADZ;AAKI;EACI,gBAAA;AAHR;AAMI;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;AAJR;AAOI;EACI,2BAAA;AALR;AAQI;EACI,qBAAA;AANR;AASI;EACI,wBAAA;AAPR;AAUI;EACI,sBAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;AARR;AAYQ;EACI,yBAAA;EACA,WAAA;AAVZ;AAaQ;EACI,yBAAA;EACA,8BAAA;AAXZ;AAgBQ;EACI,2BAAA;EACA,gCAAA;AAdZ;AAiBQ;EACI,cAAA;EACA,sBAAA;EACA,8BAAA;AAfZ;;AAoBA;EACI;IACI,eAAA;IACA,gBAAA;EAjBN;EAmBM;IACI,oBAAA;EAjBV;EAoBM;IACI,eAAA;IACA,kBAAA;IACA,kBAAA;EAlBV;EAqBM;IACI,aAAA;IACA,kBAAA;IACA,sBAAA;EAnBV;AACF;AAuBA;EACI;IACI,eAAA;IACA,gBAAA;EArBN;EAuBM;IACI,oBAAA;EArBV;EAwBM;IACI,eAAA;IACA,kBAAA;IACA,kBAAA;EAtBV;EAyBM;IACI,aAAA;IACA,kBAAA;IACA,sBAAA;EAvBV;AACF","sourcesContent":[".editor {\r\n    font-size: 28px;\r\n    line-height: 1.6;\r\n\r\n    & > * {\r\n        margin-bottom: 1.5em;\r\n    }\r\n\r\n    & :last-child {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    a {\r\n        color: inherit;\r\n        text-decoration-color: var(--blue);\r\n\r\n        &:hover {\r\n            text-decoration: none;\r\n        }\r\n    }\r\n\r\n    b, strong {\r\n        font-weight: 600;\r\n    }\r\n\r\n    pre {\r\n        font-size: 22px;\r\n        overflow-x: auto;\r\n        padding: 1em 1.5em;\r\n        border-radius: 6px;\r\n        font-family: monospace;\r\n    }\r\n\r\n    ul, ol {\r\n        list-style-position: inside;\r\n    }\r\n\r\n    ul {\r\n        list-style-type: disc;\r\n    }\r\n\r\n    ol {\r\n        list-style-type: decimal;\r\n    }\r\n\r\n    blockquote {\r\n        border-left: 5px solid;\r\n        padding: 0.5em 1em;\r\n        margin: 1em 0;\r\n        font-style: italic;\r\n    }\r\n\r\n    &--theme-light {\r\n        pre {\r\n            background-color: #f4f4f4;\r\n            color: #333;\r\n        }\r\n\r\n        blockquote {\r\n            background-color: #f9f9f9;\r\n            border-left-color: var(--blue);\r\n        }\r\n    }\r\n\r\n    &--theme-dark {\r\n        pre {\r\n            color: var(--light-primary);\r\n            background-color: var(--bg-dark);\r\n        }\r\n\r\n        blockquote {\r\n            color: #f4f4f4;\r\n            background-color: #333;\r\n            border-left-color: var(--blue);\r\n        }\r\n    }\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .editor {\r\n        font-size: 22px;\r\n        line-height: 1.5;\r\n\r\n        & > * {\r\n            margin-bottom: 1.5em;\r\n        }\r\n\r\n        pre {\r\n            font-size: 18px;\r\n            padding: 1em 1.5em;\r\n            border-radius: 5px;\r\n        }\r\n\r\n        blockquote {\r\n            margin: 1em 0;\r\n            padding: 0.5em 1em;\r\n            border-left: 4px solid;\r\n        }\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .editor {\r\n        font-size: 16px;\r\n        line-height: 1.5;\r\n\r\n        & > * {\r\n            margin-bottom: 1.5em;\r\n        }\r\n\r\n        pre {\r\n            font-size: 14px;\r\n            padding: 1em 1.5em;\r\n            border-radius: 5px;\r\n        }\r\n\r\n        blockquote {\r\n            margin: 1em 0;\r\n            padding: 0.5em 1em;\r\n            border-left: 2px solid;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"editor": `src-5_shared-ui-Editor-Editor-module__editor-HsrXa`,
	"editor--theme-light": `src-5_shared-ui-Editor-Editor-module__editor--theme-light-Zx_xN`,
	"editor--theme-dark": `src-5_shared-ui-Editor-Editor-module__editor--theme-dark-ktzIZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/1_pages/DetailPage/ui/DetailPage.module.scss":
/*!**********************************************************!*\
  !*** ./src/1_pages/DetailPage/ui/DetailPage.module.scss ***!
  \**********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./DetailPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/DetailPage/ui/DetailPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./DetailPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/DetailPage/ui/DetailPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./DetailPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/1_pages/DetailPage/ui/DetailPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss":
/*!*********************************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss ***!
  \*********************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailContent.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailContent.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailContent.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss":
/*!*******************************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss ***!
  \*******************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailEditor.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailEditor.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailEditor.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss":
/*!*****************************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss ***!
  \*****************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailIntro.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailIntro.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailIntro.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss":
/*!*********************************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss ***!
  \*********************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailPicture.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailPicture.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailPicture.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss":
/*!*********************************************************************************!*\
  !*** ./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss ***!
  \*********************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailToolbar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailToolbar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./DetailToolbar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/3_features/Share/ui/Share.module.scss":
/*!***************************************************!*\
  !*** ./src/3_features/Share/ui/Share.module.scss ***!
  \***************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Share.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/Share/ui/Share.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Share.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/Share/ui/Share.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Share.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/3_features/Share/ui/Share.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Share_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/5_shared/ui/DateInfo/DateInfo.module.scss":
/*!*******************************************************!*\
  !*** ./src/5_shared/ui/DateInfo/DateInfo.module.scss ***!
  \*******************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./DateInfo.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/DateInfo/DateInfo.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./DateInfo.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/DateInfo/DateInfo.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./DateInfo.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/DateInfo/DateInfo.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_DateInfo_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/5_shared/ui/EditorWrapper/EditorWrapper.module.scss":
/*!*****************************************************************!*\
  !*** ./src/5_shared/ui/EditorWrapper/EditorWrapper.module.scss ***!
  \*****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./EditorWrapper.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/EditorWrapper/EditorWrapper.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./EditorWrapper.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/EditorWrapper/EditorWrapper.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./EditorWrapper.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/EditorWrapper/EditorWrapper.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_EditorWrapper_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/5_shared/ui/Editor/Editor.module.scss":
/*!***************************************************!*\
  !*** ./src/5_shared/ui/Editor/Editor.module.scss ***!
  \***************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Editor.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/Editor/Editor.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Editor.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/Editor/Editor.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Editor.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/Editor/Editor.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Editor_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2Z2QztBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0R0FBNEcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNEpBQU87QUFDaEMsb0NBQW9DLGlKQUFXLEdBQUcsNEpBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0saVRBQXFKO0FBQzNKLE1BQU07QUFBQTtBQUNOLHNEQUFzRCxpSkFBVyxHQUFHLDRKQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyxpSkFBVyxHQUFHLDRKQUFPOztBQUUvRCxxQkFBcUIsNEpBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUdvSztBQUNwSyxPQUFPLGlFQUFlLDRKQUFPLElBQUksNEpBQU8sVUFBVSw0SkFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL2Fzc2V0cy9pY29ucy9hcnJvdy1zY3JvbGwuc3ZnIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL1NoYXJlL2luZGV4LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL2xpYnMvaG9va3MvdXNlU3RpY2t5T2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaW1lLnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzFfcGFnZXMvRGV0YWlsUGFnZS91aS9EZXRhaWxQYWdlLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsQ29kZS9EZXRhaWxDb2RlLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsQ29udGVudC9EZXRhaWxDb250ZW50LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsRWRpdG9yL0RldGFpbEVkaXRvci50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbEhlYWRpbmcvRGV0YWlsSGVhZGluZy50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbEludHJvL0RldGFpbEludHJvLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsTGluay9EZXRhaWxMaW5rLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsTGlzdC9EZXRhaWxMaXN0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsUGFyYWdyYXBoL0RldGFpbFBhcmFncmFwaC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFBpY3R1cmUvRGV0YWlsUGljdHVyZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFF1b3RlL0RldGFpbFF1b3RlLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsVG9vbGJhci9EZXRhaWxUb29sYmFyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL1NoYXJlL3VpL1NoYXJlLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9EYXRlSW5mby9EYXRlSW5mby50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yV3JhcHBlci9FZGl0b3JXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9FZGl0b3IvRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8xX3BhZ2VzL0RldGFpbFBhZ2UvdWkvRGV0YWlsUGFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsQ29udGVudC9EZXRhaWxDb250ZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxFZGl0b3IvRGV0YWlsRWRpdG9yLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxJbnRyby9EZXRhaWxJbnRyby5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsUGljdHVyZS9EZXRhaWxQaWN0dXJlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxUb29sYmFyL0RldGFpbFRvb2xiYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9TaGFyZS91aS9TaGFyZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9EYXRlSW5mby9EYXRlSW5mby5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9FZGl0b3JXcmFwcGVyL0VkaXRvcldyYXBwZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yL0VkaXRvci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8xX3BhZ2VzL0RldGFpbFBhZ2UvdWkvRGV0YWlsUGFnZS5tb2R1bGUuc2Nzcz9mOTY4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxDb250ZW50L0RldGFpbENvbnRlbnQubW9kdWxlLnNjc3M/YzAwNSIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsRWRpdG9yL0RldGFpbEVkaXRvci5tb2R1bGUuc2Nzcz8xYTFkIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxJbnRyby9EZXRhaWxJbnRyby5tb2R1bGUuc2Nzcz9lNmM2Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxQaWN0dXJlL0RldGFpbFBpY3R1cmUubW9kdWxlLnNjc3M/MTM4ZSIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsVG9vbGJhci9EZXRhaWxUb29sYmFyLm1vZHVsZS5zY3NzP2JiN2UiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9TaGFyZS91aS9TaGFyZS5tb2R1bGUuc2Nzcz82MDNhIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0RhdGVJbmZvL0RhdGVJbmZvLm1vZHVsZS5zY3NzPzIxMTQiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yV3JhcHBlci9FZGl0b3JXcmFwcGVyLm1vZHVsZS5zY3NzP2RmMGIiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yL0VkaXRvci5tb2R1bGUuc2Nzcz81MDczIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfcGF0aDtcbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTdmdBcnJvd1Njcm9sbCA9IHByb3BzID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgNDQgNDNcIlxufSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIGQ6IFwibTI0IDM1LjM2NCAxNi42MjgtMTUuNjg1IDIuNzQ0IDIuOTFMMjIgNDIuNzQ5LjYyOCAyMi41OWwyLjc0NC0yLjkxTDIwIDM1LjM2NFYwaDR2MzUuMzY0WlwiLFxuICBjbGlwUnVsZTogXCJldmVub2RkXCJcbn0pKSk7XG5leHBvcnQgZGVmYXVsdCBTdmdBcnJvd1Njcm9sbDsiLCJleHBvcnQge1xyXG4gICAgRGV0YWlsQ29udGVudCxcclxufSBmcm9tICcuL3VpL0RldGFpbENvbnRlbnQvRGV0YWlsQ29udGVudCc7XHJcbiIsImV4cG9ydCB7XHJcbiAgICBTaGFyZSxcclxufSBmcm9tICcuL3VpL1NoYXJlJztcclxuIiwiaW1wb3J0IHtcclxuICAgIHVzZVN0YXRlLFxyXG4gICAgdXNlRWZmZWN0LFxyXG4gICAgTXV0YWJsZVJlZk9iamVjdCwgdXNlUmVmLFxyXG59IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgdXNlU3RpY2t5T2JzZXJ2ZXJPcHRpb25zIHtcclxuICAgIHRyaWdnZXJSZWY6IE11dGFibGVSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RpY2t5T2JzZXJ2ZXIoKSB7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgW2lzU3RpY2t5LCBzZXRJc1N0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICByb290OiBkb2N1bWVudCxcclxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJy0xcHggMHB4IDBweCAwcHgnLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IFsxXSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjYWxsYmFja0V2ZW50ID0gKFtlbF06IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc1N0aWNreShlbC5pbnRlcnNlY3Rpb25SYXRpbyA8IDEpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFja0V2ZW50LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShyZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIpIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB7IHJlZiwgaXNTdGlja3kgfTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgdXNlU3RhdGUsXHJcbiAgICB1c2VFZmZlY3QsXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlRm9ybWF0dGVkRGF0ZSA9ICh0aW1lU3RhbXA6IERhdGUsIGxhbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCBbZm9ybWF0dGVkRGF0ZSwgc2V0Rm9ybWF0dGVkRGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRpbWVTdGFtcCkge1xyXG4gICAgICAgICAgICBzZXRGb3JtYXR0ZWREYXRlKCcnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVTdGFtcCk7XHJcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSkpIHtcclxuICAgICAgICAgICAgc2V0Rm9ybWF0dGVkRGF0ZSgnJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFN0cmluZyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGxhbmcsIG9wdGlvbnMpO1xyXG4gICAgICAgIHNldEZvcm1hdHRlZERhdGUobGFuZyA9PT0gJ3J1JyA/IGZvcm1hdHRlZFN0cmluZy5zbGljZSgwLCAtMykgOiBmb3JtYXR0ZWRTdHJpbmcpO1xyXG4gICAgfSwgW3RpbWVTdGFtcCwgbGFuZ10pO1xyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ybWF0dGVkRGF0ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBNZXRhUGFnZSB9IGZyb20gJzNfZmVhdHVyZXMvTWV0YVBhZ2UnO1xyXG5pbXBvcnQgeyBEZXRhaWxDb250ZW50IH0gZnJvbSAnM19mZWF0dXJlcy9EZXRhaWxDb250ZW50JztcclxuaW1wb3J0IHsgdXNlRmV0Y2hEZXZCeUlkIH0gZnJvbSAnNF9lbnRpdGllcy9EZXYnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFBvc3RCeUlkIH0gZnJvbSAnNF9lbnRpdGllcy9Qb3N0JztcclxuaW1wb3J0IHsgdXNlRmV0Y2hQaG90b0J5SWQgfSBmcm9tICc0X2VudGl0aWVzL1Bob3RvJztcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gJzVfc2hhcmVkL3VpL01haW4vTWFpbic7XHJcbmltcG9ydCB7IENvbnRlbnRLZXlUeXBlIH0gZnJvbSAnNV9zaGFyZWQvdHlwZXMvQ29tbW9uVHlwZXMnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vRGV0YWlsUGFnZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBmZXRjaE1ldGhvZHM6IFJlY29yZDxDb250ZW50S2V5VHlwZSwgYW55PiA9IHtcclxuICAgIFtDb250ZW50S2V5VHlwZS5QT1NUXTogdXNlRmV0Y2hQb3N0QnlJZCxcclxuICAgIFtDb250ZW50S2V5VHlwZS5ERVZdOiB1c2VGZXRjaERldkJ5SWQsXHJcbiAgICBbQ29udGVudEtleVR5cGUuUEhPVE9dOiB1c2VGZXRjaFBob3RvQnlJZCxcclxufTtcclxuXHJcbmludGVyZmFjZSBEZXRhaWxQYWdlUHJvcHMge1xyXG4gICAgbW9kZTogQ29udGVudEtleVR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbFBhZ2UoeyBtb2RlIH06IERldGFpbFBhZ2VQcm9wcykge1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSB1c2VQYXJhbXM8eyBzbHVnOiBzdHJpbmcgfT4oKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nIH0gPSBmZXRjaE1ldGhvZHNbbW9kZV0oc2x1ZyB8fCAnbm9uZScpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5tYWluKX0+XHJcbiAgICAgICAgICAgIDxNZXRhUGFnZVxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhPy5zZW8gfHwgdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RGV0YWlsQ29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTWFpbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbFBhZ2U7XHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdG9yV3JhcHBlciB9IGZyb20gJzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlcic7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsQ29kZVByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxDb2RlID0gKHByb3BzOiBEZXRhaWxDb2RlUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFZGl0b3JXcmFwcGVyPlxyXG4gICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvRWRpdG9yV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgICB1c2VTdGF0ZSxcclxuICAgIHVzZUVmZmVjdCxcclxufSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBBcnRpY2xlRGV2VHlwZSB9IGZyb20gJzRfZW50aXRpZXMvRGV2JztcclxuaW1wb3J0IHsgUG9zdEFydGljbGVUeXBlIH0gZnJvbSAnNF9lbnRpdGllcy9Qb3N0JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnNV9zaGFyZWQvdWkvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IHVzZVN0aWNreU9ic2VydmVyIH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VTdGlja3lPYnNlcnZlcic7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9EZXRhaWxDb250ZW50Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgRGV0YWlsSW50cm8gfSBmcm9tICcuLi9EZXRhaWxJbnRyby9EZXRhaWxJbnRybyc7XHJcbmltcG9ydCB7IERldGFpbEVkaXRvciB9IGZyb20gJy4uL0RldGFpbEVkaXRvci9EZXRhaWxFZGl0b3InO1xyXG5pbXBvcnQgeyBEZXRhaWxUb29sYmFyIH0gZnJvbSAnLi4vRGV0YWlsVG9vbGJhci9EZXRhaWxUb29sYmFyJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxDb250ZW50UHJvcHMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgZGF0YT86IFBvc3RBcnRpY2xlVHlwZSB8IEFydGljbGVEZXZUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsQ29udGVudCA9IChwcm9wczogRGV0YWlsQ29udGVudFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCB7IHJlZiwgaXNTdGlja3kgfSA9IHVzZVN0aWNreU9ic2VydmVyKCk7XHJcbiAgICBjb25zdCBbYmxvY2tUaGVtZSwgc2V0QmxvY2tUaGVtZV0gPSB1c2VTdGF0ZTxBcHBUaGVtZT4odGhlbWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGE/Lm1haW4/LnByZXZpZXdJbnZlcnRlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldEJsb2NrVGhlbWUoXHJcbiAgICAgICAgICAgICAgICBkYXRhLm1haW4ucHJldmlld0ludmVydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBBcHBUaGVtZS5EQVJLXHJcbiAgICAgICAgICAgICAgICAgICAgOiBBcHBUaGVtZS5MSUdIVCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuYmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BibG9jay0tJHt0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwaWN0dXJlXHJcbiAgICAgICAgICAgICAgICBoaWRkZW49e2lzU3RpY2t5fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5waWN0dXJlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE/Lm1haW4/LnByZXZpZXc/LmRhdGE/LnVybFxyXG4gICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake19fQkFTRV9VUkxfX30ke2RhdGE/Lm1haW4/LnByZXZpZXc/LmRhdGE/LnVybH1gfSBhbHQ9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgICAgPERldGFpbEludHJvXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgdGhlbWU9e2Jsb2NrVGhlbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHNbJ2ludHJvLW1haW4nXSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERldGFpbFRvb2xiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXtibG9ja1RoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPy5tYWluPy5jb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHNbJ2NvbnRhaW5lci1lZGl0b3InXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGEubWFpbi5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgQmxvY2tzUmVuZGVyZXIsXHJcbiAgICB0eXBlIEJsb2Nrc0NvbnRlbnQsXHJcbn0gZnJvbSAnQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXInO1xyXG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICc1X3NoYXJlZC91aS9FZGl0b3IvRWRpdG9yJztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0RldGFpbEVkaXRvci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IERldGFpbExpbmsgfSBmcm9tICcuLi9EZXRhaWxMaW5rL0RldGFpbExpbmsnO1xyXG5pbXBvcnQgeyBEZXRhaWxDb2RlIH0gZnJvbSAnLi4vRGV0YWlsQ29kZS9EZXRhaWxDb2RlJztcclxuaW1wb3J0IHsgRGV0YWlsTGlzdCB9IGZyb20gJy4uL0RldGFpbExpc3QvRGV0YWlsTGlzdCc7XHJcbmltcG9ydCB7IERldGFpbFF1b3RlIH0gZnJvbSAnLi4vRGV0YWlsUXVvdGUvRGV0YWlsUXVvdGUnO1xyXG5pbXBvcnQgeyBEZXRhaWxQaWN0dXJlIH0gZnJvbSAnLi4vRGV0YWlsUGljdHVyZS9EZXRhaWxQaWN0dXJlJztcclxuaW1wb3J0IHsgRGV0YWlsSGVhZGluZyB9IGZyb20gJy4uL0RldGFpbEhlYWRpbmcvRGV0YWlsSGVhZGluZyc7XHJcbmltcG9ydCB7IERldGFpbFBhcmFncmFwaCB9IGZyb20gJy4uL0RldGFpbFBhcmFncmFwaC9EZXRhaWxQYXJhZ3JhcGgnO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbEVkaXRvclByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGRhdGE6IEJsb2Nrc0NvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxFZGl0b3IgPSAocHJvcHM6IERldGFpbEVkaXRvclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmJsb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYmxvY2stLSR7dGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8RWRpdG9yIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuZWRpdG9yKX0+XHJcbiAgICAgICAgICAgICAgICA8QmxvY2tzUmVuZGVyZXJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGg6ICh7IGNoaWxkcmVuIH0pID0+IERldGFpbFBhcmFncmFwaCh7IGNoaWxkcmVuIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiAoeyBpbWFnZSB9KSA9PiBEZXRhaWxQaWN0dXJlKHsgaW1hZ2UgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6ICh7IGNoaWxkcmVuLCBsZXZlbCB9KSA9PiBEZXRhaWxIZWFkaW5nKHsgY2hpbGRyZW4sIGxldmVsIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAoeyBjaGlsZHJlbiwgdXJsIH0pID0+IERldGFpbExpbmsoeyBjaGlsZHJlbiwgdXJsIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiAoeyBjaGlsZHJlbiB9KSA9PiBEZXRhaWxDb2RlKHsgY2hpbGRyZW4gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6ICh7IGNoaWxkcmVuLCBmb3JtYXQgfSkgPT4gRGV0YWlsTGlzdCh7IGNoaWxkcmVuLCBmb3JtYXQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiAoeyBjaGlsZHJlbiB9KSA9PiBEZXRhaWxRdW90ZSh7IGNoaWxkcmVuIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0VkaXRvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVkaXRvcldyYXBwZXIgfSBmcm9tICc1X3NoYXJlZC91aS9FZGl0b3JXcmFwcGVyL0VkaXRvcldyYXBwZXInO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbFBhcmFncmFwaFByb3BzIHtcclxuICAgIGxldmVsOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsSGVhZGluZyA9IChwcm9wczogRGV0YWlsUGFyYWdyYXBoUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsZXZlbCxcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB0YWcgPSBgaCR7bGV2ZWwgPiAwICYmIGxldmVsIDwgNyA/IGxldmVsIDogNn1gO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEVkaXRvcldyYXBwZXI+XHJcbiAgICAgICAgICAgIHsgUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIG51bGwsIGNoaWxkcmVuKSB9XHJcbiAgICAgICAgPC9FZGl0b3JXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7XHJcbiAgICBMaXN0VGFncyxcclxuICAgIEFydGljbGVUYWcsXHJcbiAgICBBcnRpY2xlQ2F0ZWdvcnksXHJcbiAgICBBcnRpY2xlQ2F0ZWdvcnlNb2RlLFxyXG4gICAgQXJ0aWNsZUNhdGVnb3J5VHlwZSxcclxufSBmcm9tICc0X2VudGl0aWVzL0NhdGVnb3J5JztcclxuaW1wb3J0IHsgQXJ0aWNsZURldlR5cGUgfSBmcm9tICc0X2VudGl0aWVzL0Rldic7XHJcbmltcG9ydCB7IFBvc3RBcnRpY2xlVHlwZSB9IGZyb20gJzRfZW50aXRpZXMvUG9zdCc7XHJcbmltcG9ydCB7IEFwcFRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJzVfc2hhcmVkL3VpL0NvbnRhaW5lci9Db250YWluZXInO1xyXG5pbXBvcnQgZ3JpZCBmcm9tICc1X3NoYXJlZC9jc3MvZ3JpZC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9EZXRhaWxJbnRyby5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsSW50cm9Qcm9wcyB7XHJcbiAgICB0aGVtZTogQXBwVGhlbWU7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBkYXRhPzogUG9zdEFydGljbGVUeXBlIHwgQXJ0aWNsZURldlR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxJbnRybyA9IChwcm9wczogRGV0YWlsSW50cm9Qcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuaW50cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BpbnRyby0tJHt0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHNbJ2ludHJvLWNvbnRlbnQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGdyaWQuZ3JpZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbJ2dyaWRfX2NvbC0yJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbJ2dyaWRfX2NvbC1sYXAtMyddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wtbW9iLTQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzWydjb2x1bW4tdGl0bGUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLnRpdGxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/Lm1haW4/LnByZXZpZXdUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YT8ubWFpbj8ucHJldmlld0NhcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wtMiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wtbGFwLTEnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFsnZ3JpZF9fY29sLW1vYi00J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsc1snY29sdW1uLWNhdCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzWyd0b29sYmFyLWNhdGVnb3J5J10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE/LmNhdGVnb3J5Py5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVByb3A9e3RoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGE/LmNhdGVnb3J5Py5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e0FydGljbGVDYXRlZ29yeU1vZGUuU1RBVElDfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHNbJ21haW4tY29udGVudCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGdyaWQuZ3JpZCwgY2xzLmdyaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFsnZ3JpZF9fY29sLTInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbJ2dyaWRfX2NvbC1tb2ItNCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT8udGFncz8uZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBkYXRhPy50YWdzPy5kYXRhPy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0VGFncz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50YWdzLmRhdGEubWFwKChpdGVtOiBBcnRpY2xlQ2F0ZWdvcnlUeXBlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlVGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVQcm9wPXtkYXRhPy5tYWluPy5wcmV2aWV3SW52ZXJ0ZWQgPyBBcHBUaGVtZS5EQVJLIDogQXBwVGhlbWUuTElHSFR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RUYWdzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbExpbmtQcm9wcyB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxMaW5rID0gKHByb3BzOiBEZXRhaWxMaW5rUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YSBocmVmPXt1cmx9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj57IGNoaWxkcmVuIH08L2E+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFZGl0b3JXcmFwcGVyIH0gZnJvbSAnNV9zaGFyZWQvdWkvRWRpdG9yV3JhcHBlci9FZGl0b3JXcmFwcGVyJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxQYXJhZ3JhcGhQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gICAgZm9ybWF0OiAnb3JkZXJlZCcgfCAndW5vcmRlcmVkJztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbExpc3QgPSAocHJvcHM6IERldGFpbFBhcmFncmFwaFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZm9ybWF0LFxyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGxpc3RUYWcgPSBmb3JtYXQgPT09ICdvcmRlcmVkJyA/ICdvbCcgOiAndWwnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEVkaXRvcldyYXBwZXI+XHJcbiAgICAgICAgICAgIHsgUmVhY3QuY3JlYXRlRWxlbWVudChsaXN0VGFnLCBudWxsLCBjaGlsZHJlbikgfVxyXG4gICAgICAgIDwvRWRpdG9yV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdG9yV3JhcHBlciB9IGZyb20gJzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlcic7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsUGFyYWdyYXBoUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbFBhcmFncmFwaCA9IChwcm9wczogRGV0YWlsUGFyYWdyYXBoUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFZGl0b3JXcmFwcGVyPlxyXG4gICAgICAgICAgICA8cD57IGNoaWxkcmVuIH08L3A+XHJcbiAgICAgICAgPC9FZGl0b3JXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IEltYWdlVHlwZSB9IGZyb20gJzVfc2hhcmVkL3R5cGVzL0ltYWdlJztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgRWRpdG9yV3JhcHBlciB9IGZyb20gJzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlcic7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9EZXRhaWxQaWN0dXJlLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxQYXJhZ3JhcGhQcm9wcyB7XHJcbiAgICBpbWFnZTogSW1hZ2VUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsUGljdHVyZSA9IChwcm9wczogRGV0YWlsUGFyYWdyYXBoUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBpbWFnZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICAgIC8vIFRPRE86INCU0L7QsdCw0LLQuNGC0Ywgc3Jjc2V0XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5maWd1cmUpfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U/LmZvcm1hdHM/LmxhcmdlPy51cmxcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffSR7aW1hZ2U/LmZvcm1hdHM/LmxhcmdlPy51cmx9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZT8uYWx0ZXJuYXRpdmVUZXh0IHx8ICcjJ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFpbWFnZT8uZm9ybWF0cz8ubGFyZ2U/LnVybFxyXG4gICAgICAgICAgICAgICAgJiYgaW1hZ2U/LmZvcm1hdHM/Lm1lZGl1bT8udXJsXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX30ke2ltYWdlPy5mb3JtYXRzPy5tZWRpdW0/LnVybH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlPy5hbHRlcm5hdGl2ZVRleHQgfHwgJyMnfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIWltYWdlPy5mb3JtYXRzPy5sYXJnZT8udXJsXHJcbiAgICAgICAgICAgICAgICAmJiAhaW1hZ2U/LmZvcm1hdHM/Lm1lZGl1bT8udXJsXHJcbiAgICAgICAgICAgICAgICAmJiBpbWFnZT8uZm9ybWF0cz8uc21hbGw/LnVybFxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199JHtpbWFnZT8uZm9ybWF0cz8uc21hbGw/LnVybH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlPy5hbHRlcm5hdGl2ZVRleHQgfHwgJyMnfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5maWdjYXB0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPy5jYXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMudGV4dCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaW1hZ2UuY2FwdGlvbiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT8uYWx0ZXJuYXRpdmVUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuY2FwdGlvbiwgY2xzW2BjYXB0aW9uLS0ke3RoZW1lfWBdKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbWFnZS5hbHRlcm5hdGl2ZVRleHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9FZGl0b3JXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcbiAgICAgICAgPC9maWd1cmU+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVkaXRvcldyYXBwZXIgfSBmcm9tICc1X3NoYXJlZC91aS9FZGl0b3JXcmFwcGVyL0VkaXRvcldyYXBwZXInO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbFBhcmFncmFwaFByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxRdW90ZSA9IChwcm9wczogRGV0YWlsUGFyYWdyYXBoUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFZGl0b3JXcmFwcGVyPlxyXG4gICAgICAgICAgICA8YmxvY2txdW90ZT57IGNoaWxkcmVuIH08L2Jsb2NrcXVvdGU+XHJcbiAgICAgICAgPC9FZGl0b3JXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBGb3J3YXJkZWRSZWYsXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgU2hhcmUgfSBmcm9tICczX2ZlYXR1cmVzL1NoYXJlJztcclxuaW1wb3J0IHsgQXJ0aWNsZURldlR5cGUgfSBmcm9tICc0X2VudGl0aWVzL0Rldic7XHJcbmltcG9ydCB7IFBvc3RBcnRpY2xlVHlwZSB9IGZyb20gJzRfZW50aXRpZXMvUG9zdCc7XHJcbmltcG9ydCB7IEFwcFRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IERhdGVJbmZvIH0gZnJvbSAnNV9zaGFyZWQvdWkvRGF0ZUluZm8vRGF0ZUluZm8nO1xyXG5pbXBvcnQgSWNvbiBmcm9tICc1X3NoYXJlZC9hc3NldHMvaWNvbnMvYXJyb3ctc2Nyb2xsLnN2Zyc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9EZXRhaWxUb29sYmFyLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxUb29sYmFyUHJvcHMge1xyXG4gICAgdGhlbWU6IEFwcFRoZW1lO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgZGF0YTogUG9zdEFydGljbGVUeXBlIHwgQXJ0aWNsZURldlR5cGUgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxUb29sYmFyID0gZm9yd2FyZFJlZigocHJvcHM6IERldGFpbFRvb2xiYXJQcm9wcywgcmVmOiBGb3J3YXJkZWRSZWY8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICBpZD1cInNjcm9sbC1hbmNob3JcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuZm9vdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgZm9vdGVyLS0ke3RoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzWydmb290ZXItZ3JpZCddKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHNbJ2NvbHVtbi1kYXRlJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE/LnB1Ymxpc2hlZEF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2RhdGE/LnB1Ymxpc2hlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMudGltZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHNbJ2NvbHVtbi1idXR0b24nXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjc2Nyb2xsLWFuY2hvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYnV0dG9uKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscy5pY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHNbYGljb24tLSR7dGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzWydjb2x1bW4tc2hhcmUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsc1snc2hhcmUtY29sdW1uJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNoYXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVByb3A9e3RoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5zaGFyZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuIiwiaW1wb3J0IHtcclxuICAgIFZLU2hhcmVCdXR0b24sXHJcbiAgICBUd2l0dGVyU2hhcmVCdXR0b24sXHJcbiAgICBGYWNlYm9va1NoYXJlQnV0dG9uLFxyXG4gICAgVGVsZWdyYW1TaGFyZUJ1dHRvbixcclxufSBmcm9tICdyZWFjdC1zaGFyZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgeyBBcHBUaGVtZSB9IGZyb20gJzVfc2hhcmVkL2NvbmZpZy9UaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJzVfc2hhcmVkL2xpYnMvaG9va3MvdXNlVGhlbWUnO1xyXG5pbXBvcnQgeyBDb250cm9scyB9IGZyb20gJzVfc2hhcmVkL3VpL0NvbnRyb2xzL0NvbnRyb2xzJztcclxuaW1wb3J0IHsgSWNvbktleSwgSWNvblNvY2lhbCB9IGZyb20gJzVfc2hhcmVkL3VpL0ljb25Tb2NpYWwvSWNvblNvY2lhbCc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9TaGFyZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgU2hhcmVQcm9wcyB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICB0aGVtZVByb3A/OiBBcHBUaGVtZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNoYXJlID0gKHByb3BzOiBTaGFyZVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdGhlbWVQcm9wLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgdGhlbWVNb2RlID0gdGhlbWVQcm9wIHx8IHRoZW1lO1xyXG5cclxuICAgIC8vIFRPRE86INCh0LTQtdC70LDRgtGMINC80L7QsdC40LvRjNC90YPRjiDQstC10YDRgdC40Y5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5ibG9jaywgY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMudGl0bGUpfT5cclxuICAgICAgICAgICAgICAgIHsgdCgnc2hhcmUnKSB9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPENvbnRyb2xzIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuY29udHJvbHMpfT5cclxuICAgICAgICAgICAgICAgIDxWS1NoYXJlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPVwidmsuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICByZXNldEJ1dHRvblN0eWxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJ1dHRvbiwgY2xzW2BidXR0b24tLSR7dGhlbWVNb2RlfWBdKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblNvY2lhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uS2V5PXtJY29uS2V5LlZLfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmljb24sIGNsc1tgaWNvbi0tJHt0aGVtZU1vZGV9YF0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1ZLU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8VHdpdHRlclNoYXJlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPVwidHdpdHRlci5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uU3R5bGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYnV0dG9uLCBjbHNbYGJ1dHRvbi0tJHt0aGVtZU1vZGV9YF0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uU29jaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25LZXk9e0ljb25LZXkuWH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5pY29uLCBjbHNbYGljb24tLSR7dGhlbWVNb2RlfWBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Ud2l0dGVyU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHVybD1cImZiLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRCdXR0b25TdHlsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5idXR0b24sIGNsc1tgYnV0dG9uLS0ke3RoZW1lTW9kZX1gXSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25Tb2NpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbktleT17SWNvbktleS5GQn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5pY29uLCBjbHNbYGljb24tLSR7dGhlbWVNb2RlfWBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFRlbGVncmFtU2hhcmVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB1cmw9XCJ0Zy5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uU3R5bGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYnV0dG9uLCBjbHNbYGJ1dHRvbi0tJHt0aGVtZU1vZGV9YF0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uU29jaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25LZXk9e0ljb25LZXkuVEd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuaWNvbiwgY2xzW2BpY29uLS0ke3RoZW1lTW9kZX1gXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvVGVsZWdyYW1TaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9Db250cm9scz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xyXG5pbXBvcnQgdXNlVGltZSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRpbWUnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vRGF0ZUluZm8ubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIERhdGVQcm9wcyB7XHJcbiAgICBkYXRlOiBEYXRlO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRlSW5mbyA9IChwcm9wczogRGF0ZVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0ZSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gICAgY29uc3QgbGFuZyA9IGkxOG4ubGFuZ3VhZ2U7XHJcbiAgICBjb25zdCB0aW1lID0gdXNlVGltZShkYXRlLCBsYW5nKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0aW1lIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYmxvY2ssIGNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICB7IHRpbWUgfVxyXG4gICAgICAgIDwvdGltZT5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9FZGl0b3JXcmFwcGVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBFZGl0b3JXcmFwcGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRvcldyYXBwZXIgPSAocHJvcHM6IEVkaXRvcldyYXBwZXJQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYmxvY2spfT5cclxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJzVfc2hhcmVkL2xpYnMvaG9va3MvdXNlVGhlbWUnO1xyXG5pbXBvcnQgeyBBcHBUaGVtZSB9IGZyb20gJzVfc2hhcmVkL2NvbmZpZy9UaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vRWRpdG9yLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBFZGl0b3JQcm9wcyB7XHJcbiAgICBkYXRhPzogc3RyaW5nO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XHJcbiAgICB0aGVtZVByb3A/OiBBcHBUaGVtZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXRvciA9IChwcm9wczogRWRpdG9yUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgIHRoZW1lUHJvcCxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuZWRpdG9yLCBjbHNbYGVkaXRvci0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sIGNsYXNzTmFtZSl9XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXHJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgIF9faHRtbDogZGF0YSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5lZGl0b3IsIGNsc1tgZWRpdG9yLS0ke3RoZW1lUHJvcCB8fCB0aGVtZX1gXSwgY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX2Jsb2NrLUJzMjNJIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZGFyayk7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX3BpY3R1cmUtZEx6RV8ge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zaXRpb246IDAuM3Mgb3BhY2l0eTtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX3BpY3R1cmUtZEx6RV9baGlkZGVuXSB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX3BpY3R1cmUtZEx6RV8gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsQ29udGVudC1EZXRhaWxDb250ZW50LW1vZHVsZV9faW50cm8tbWFpbi1ScGFEbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogY2FsYygxMDB2aCAtIDE4MHB4KTtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsQ29udGVudC1EZXRhaWxDb250ZW50LW1vZHVsZV9faW50cm8tbWFpbi1ScGFEbyB7XG4gICAgbWFyZ2luLXRvcDogY2FsYygxMDB2aCAtIDEzMHB4KTtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsQ29udGVudC1EZXRhaWxDb250ZW50LW1vZHVsZV9faW50cm8tbWFpbi1ScGFEbyB7XG4gICAgbWFyZ2luLXRvcDogY2FsYygxMDB2aCAtIDgwcHgpO1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX2NvbnRhaW5lci1lZGl0b3ItZTRKYm4ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsQ29udGVudC9EZXRhaWxDb250ZW50Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFDSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNSO0FBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLCtCQUFBO0FBREo7O0FBSUE7RUFDSTtJQUNJLCtCQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0k7SUFDSSw4QkFBQTtFQUZOO0VBS0U7SUFDSSxVQUFBO0VBSE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpY3R1cmUge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3Mgb3BhY2l0eTtcXHJcXG5cXHJcXG4gICAgJltoaWRkZW5dIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbnRyby1tYWluIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xcclxcbiAgICAuaW50cm8tbWFpbiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDEwMHZoIC0gMTMwcHgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XFxyXFxuICAgIC5pbnRyby1tYWluIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMTAwdmggLSA4MHB4KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFpbmVyLWVkaXRvciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX2Jsb2NrLUJzMjNJYCxcblx0XCJwaWN0dXJlXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX3BpY3R1cmUtZEx6RV9gLFxuXHRcImludHJvLW1haW5cIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsQ29udGVudC1EZXRhaWxDb250ZW50LW1vZHVsZV9faW50cm8tbWFpbi1ScGFEb2AsXG5cdFwiY29udGFpbmVyLWVkaXRvclwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxDb250ZW50LURldGFpbENvbnRlbnQtbW9kdWxlX19jb250YWluZXItZWRpdG9yLWU0SmJuYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEVkaXRvci1EZXRhaWxFZGl0b3ItbW9kdWxlX19ibG9jay1PQWtzSiB7XG4gIHBhZGRpbmc6IDYwcHggNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEVkaXRvci1EZXRhaWxFZGl0b3ItbW9kdWxlX19ibG9jay0tdGhlbWUtbGlnaHQtOVVTdloge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsRWRpdG9yLURldGFpbEVkaXRvci1tb2R1bGVfX2Jsb2NrLS10aGVtZS1kYXJrLVVqNzAxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xuICAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxFZGl0b3ItRGV0YWlsRWRpdG9yLW1vZHVsZV9fYmxvY2stT0Frc0oge1xuICAgIHBhZGRpbmc6IDUwcHggNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxFZGl0b3ItRGV0YWlsRWRpdG9yLW1vZHVsZV9fYmxvY2stT0Frc0oge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbEVkaXRvci9EZXRhaWxFZGl0b3IubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLHFDQUFBO0FBQ1I7QUFFSTtFQUNJLG9DQUFBO0FBQVI7O0FBSUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFETjtBQUNGO0FBSUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFGTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ibG9jayB7XFxyXFxuICAgIHBhZGRpbmc6IDYwcHggNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgcGFkZGluZzogNTBweCA0MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgcGFkZGluZzogMjVweCAxNXB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJibG9ja1wiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxFZGl0b3ItRGV0YWlsRWRpdG9yLW1vZHVsZV9fYmxvY2stT0Frc0pgLFxuXHRcImJsb2NrLS10aGVtZS1saWdodFwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxFZGl0b3ItRGV0YWlsRWRpdG9yLW1vZHVsZV9fYmxvY2stLXRoZW1lLWxpZ2h0LTlVU3ZaYCxcblx0XCJibG9jay0tdGhlbWUtZGFya1wiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxFZGl0b3ItRGV0YWlsRWRpdG9yLW1vZHVsZV9fYmxvY2stLXRoZW1lLWRhcmstVWo3MDFgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19pbnRyby15T0Q4SyB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLS10aGVtZS1saWdodC1KakhxZyB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19pbnRyby0tdGhlbWUtZGFyay16QTlNQiB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLWNvbnRlbnQtVjF3RDQge1xuICBnYXA6IDYwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTg1cHggMCAxNTBweDtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX190b29sYmFyLWNhdGVnb3J5LWdnR3VaIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX190aXRsZS1zZ01wUSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGZvbnQtc2l6ZTogMTA2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9faW50cm8tY29udGVudC1WMXdENCB7XG4gICAgZ2FwOiA0MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMTUwcHggMCAxNTBweDtcbiAgfVxuICAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX3RpdGxlLXNnTXBRIHtcbiAgICBmb250LXNpemU6IDc0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19pbnRyby1jb250ZW50LVYxd0Q0IHtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogOTBweCAwIDEwMHB4O1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9fdGl0bGUtc2dNcFEge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9fY29sdW1uLXRpdGxlLXFuc2U5IHtcbiAgICBvcmRlcjogMjtcbiAgfVxuICAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2NvbHVtbi1jYXQtVm9tWWwge1xuICAgIG9yZGVyOiAxO1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9fdG9vbGJhci1jYXRlZ29yeS1nZ0d1WiB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbEludHJvL0RldGFpbEludHJvLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0ksMEJBQUE7QUFDUjtBQUVJO0VBQ0ksMEJBQUE7QUFBUjs7QUFJQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSTtJQUNJLFNBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFETjtFQUlFO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VBRk47QUFDRjtBQUtBO0VBQ0k7SUFDSSxTQUFBO0lBQ0EscUJBQUE7RUFITjtFQU1FO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VBSk47RUFPRTtJQUNJLFFBQUE7RUFMTjtFQVFFO0lBQ0ksUUFBQTtFQU5OO0VBU0U7SUFDSSwyQkFBQTtFQVBOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmludHJvIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tY29udGVudCB7XFxyXFxuICAgIGdhcDogNjBweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxODVweCAwIDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9vbGJhci1jYXRlZ29yeSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTA2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5pbnRyby1jb250ZW50IHtcXHJcXG4gICAgICAgIGdhcDogNDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNTBweCAwIDE1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDc0cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XFxyXFxuICAgIC5pbnRyby1jb250ZW50IHtcXHJcXG4gICAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDkwcHggMCAxMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29sdW1uLXRpdGxlIHtcXHJcXG4gICAgICAgIG9yZGVyOiAyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb2x1bW4tY2F0IHtcXHJcXG4gICAgICAgIG9yZGVyOiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b29sYmFyLWNhdGVnb3J5IHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJpbnRyb1wiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLXlPRDhLYCxcblx0XCJpbnRyby0tdGhlbWUtbGlnaHRcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19pbnRyby0tdGhlbWUtbGlnaHQtSmpIcWdgLFxuXHRcImludHJvLS10aGVtZS1kYXJrXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9faW50cm8tLXRoZW1lLWRhcmstekE5TUJgLFxuXHRcImludHJvLWNvbnRlbnRcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19pbnRyby1jb250ZW50LVYxd0Q0YCxcblx0XCJ0b29sYmFyLWNhdGVnb3J5XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9fdG9vbGJhci1jYXRlZ29yeS1nZ0d1WmAsXG5cdFwidGl0bGVcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX190aXRsZS1zZ01wUWAsXG5cdFwiY29sdW1uLXRpdGxlXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9fY29sdW1uLXRpdGxlLXFuc2U5YCxcblx0XCJjb2x1bW4tY2F0XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9fY29sdW1uLWNhdC1Wb21ZbGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX19maWd1cmUtSWtEWGYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2ZpZ3VyZS1Ja0RYZiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2ZpZ2NhcHRpb24tcU9RSWoge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fdGV4dC1kc2FFMCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fY2FwdGlvbi1iS1BOTyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2NhcHRpb24tLXRoZW1lLWxpZ2h0LXJuMUkwIHtcbiAgY29sb3I6IHZhcigtLWRhcmstc2Vjb25kYXJ5KTtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2NhcHRpb24tLXRoZW1lLWRhcmstU1VQQkQge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtc2Vjb25kYXJ5KTtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fZmlnY2FwdGlvbi1xT1FJaiB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fdGV4dC1kc2FFMCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2NhcHRpb24tYktQTk8ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fZmlnY2FwdGlvbi1xT1FJaiB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX190ZXh0LWRzYUUwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fY2FwdGlvbi1iS1BOTyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFBpY3R1cmUvRGV0YWlsUGljdHVyZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKO0FBRUk7RUFDSSw0QkFBQTtBQUFSO0FBR0k7RUFDSSw2QkFBQTtBQURSOztBQUtBO0VBQ0k7SUFDSSxpQkFBQTtFQUZOO0VBS0U7SUFDSSxlQUFBO0VBSE47RUFNRTtJQUNJLGVBQUE7RUFKTjtBQUNGO0FBT0E7RUFDSTtJQUNJLGdCQUFBO0VBTE47RUFRRTtJQUNJLGVBQUE7RUFOTjtFQVNFO0lBQ0ksZUFBQTtFQVBOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZpZ3VyZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5maWdjYXB0aW9uIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstc2Vjb25kYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1zZWNvbmRhcnkpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5maWdjYXB0aW9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FwdGlvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmZpZ2NhcHRpb24ge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcHRpb24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImZpZ3VyZVwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX19maWd1cmUtSWtEWGZgLFxuXHRcImZpZ2NhcHRpb25cIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fZmlnY2FwdGlvbi1xT1FJamAsXG5cdFwidGV4dFwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX190ZXh0LWRzYUUwYCxcblx0XCJjYXB0aW9uXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2NhcHRpb24tYktQTk9gLFxuXHRcImNhcHRpb24tLXRoZW1lLWxpZ2h0XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2NhcHRpb24tLXRoZW1lLWxpZ2h0LXJuMUkwYCxcblx0XCJjYXB0aW9uLS10aGVtZS1kYXJrXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2NhcHRpb24tLXRoZW1lLWRhcmstU1VQQkRgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLW9MX2lVIHtcbiAgdG9wOiAtMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogOTBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0cmFuc2l0aW9uOiAwLjNzIGJhY2tncm91bmQtY29sb3I7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19mb290ZXItLXRoZW1lLWxpZ2h0LVB6VXhfIHtcbiAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19mb290ZXItLXRoZW1lLWRhcmstd2s0cTQge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci1ncmlkLU81TnNVIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fY29sdW1uLWRhdGUtcXJlbzcge1xuICB3aWR0aDogNDAlO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19jb2x1bW4tYnV0dG9uLVA0Q3FuIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fY29sdW1uLXNoYXJlLVBfRDZ3IHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fYnV0dG9uLUJ2cDZVIHtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9faWNvbi1qSVN4ZiB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9faWNvbi0tdGhlbWUtbGlnaHQtWmNFWGoge1xuICBmaWxsOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9faWNvbi0tdGhlbWUtZGFyay1OSWpTZCB7XG4gIGZpbGw6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19zaGFyZS1MZ1pZQSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci1vTF9pVSB7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci1ncmlkLU81TnNVIHtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2ljb24taklTeGYge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLW9MX2lVIHtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9faWNvbi1qSVN4ZiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2NvbHVtbi1zaGFyZS1QX0Q2dyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsVG9vbGJhci9EZXRhaWxUb29sYmFyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FBQ0o7QUFDSTtFQUNJLDBCQUFBO0FBQ1I7QUFFSTtFQUNJLDJCQUFBO0FBQVI7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBREo7QUFHSTtFQUNJLHlCQUFBO0FBRFI7QUFJSTtFQUNJLDBCQUFBO0FBRlI7O0FBTUE7RUFDSSx5QkFBQTtBQUhKOztBQU1BO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VBSE47RUFNRTtJQUNJLGdCQUFBO0VBSk47RUFPRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBTE47QUFDRjtBQVFBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VBTk47RUFTRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBUE47RUFVRTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtFQVJOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxyXFxuICAgIHRvcDogLTFweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDkwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBiYWNrZ3JvdW5kLWNvbG9yO1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWdyaWQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWluLWhlaWdodDogNjBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sdW1uLWRhdGUge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sdW1uLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5jb2x1bW4tc2hhcmUge1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICB3aWR0aDogNDRweDtcXHJcXG4gICAgaGVpZ2h0OiA0NHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGZpbGw6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zaGFyZSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5mb290ZXIge1xcclxcbiAgICAgICAgbWluLWhlaWdodDogNjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3Rlci1ncmlkIHtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmljb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDMycHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmZvb3RlciB7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaWNvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29sdW1uLXNoYXJlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZm9vdGVyXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci1vTF9pVWAsXG5cdFwiZm9vdGVyLS10aGVtZS1saWdodFwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19mb290ZXItLXRoZW1lLWxpZ2h0LVB6VXhfYCxcblx0XCJmb290ZXItLXRoZW1lLWRhcmtcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLS10aGVtZS1kYXJrLXdrNHE0YCxcblx0XCJmb290ZXItZ3JpZFwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19mb290ZXItZ3JpZC1PNU5zVWAsXG5cdFwiY29sdW1uLWRhdGVcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fY29sdW1uLWRhdGUtcXJlbzdgLFxuXHRcImNvbHVtbi1idXR0b25cIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fY29sdW1uLWJ1dHRvbi1QNENxbmAsXG5cdFwiY29sdW1uLXNoYXJlXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2NvbHVtbi1zaGFyZS1QX0Q2d2AsXG5cdFwiYnV0dG9uXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2J1dHRvbi1CdnA2VWAsXG5cdFwiaWNvblwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19pY29uLWpJU3hmYCxcblx0XCJpY29uLS10aGVtZS1saWdodFwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19pY29uLS10aGVtZS1saWdodC1aY0VYamAsXG5cdFwiaWNvbi0tdGhlbWUtZGFya1wiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19pY29uLS10aGVtZS1kYXJrLU5JalNkYCxcblx0XCJzaGFyZVwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19zaGFyZS1MZ1pZQWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19ibG9jay13T2EyMCB7XG4gIGdhcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fdGl0bGUtVGZ3VlUge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2J1dHRvbi14aDNZTCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDg0cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fYnV0dG9uLS10aGVtZS1saWdodC1qSW1HUSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcbn1cbi5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2J1dHRvbi0tdGhlbWUtZGFyay1TekVWZyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XG59XG4uc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19idXR0b24teGgzWUw6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tYlhFVmQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG59XG4uc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19pY29uLS10aGVtZS1saWdodC1iTjNEWiB7XG4gIGZpbGw6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19pY29uLS10aGVtZS1kYXJrLUhFOVRYIHtcbiAgZmlsbDogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX3RpdGxlLVRmd1ZVIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9faWNvbi1iWEVWZCB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX190aXRsZS1UZndWVSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fY29udHJvbHMtZVY5NUEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvM19mZWF0dXJlcy9TaGFyZS91aS9TaGFyZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFNQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQUhKO0FBS0k7RUFDSSxpQ0FBQTtBQUhSO0FBTUk7RUFDSSxrQ0FBQTtBQUpSO0FBT0k7RUFDSSxZQUFBO0FBTFI7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQU5KO0FBUUk7RUFDSSx5QkFBQTtBQU5SO0FBU0k7RUFDSSwwQkFBQTtBQVBSOztBQVdBO0VBQ0k7SUFDSSxlQUFBO0VBUk47RUFXRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBVE47QUFDRjtBQVlBO0VBQ0k7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7RUFWTjtFQWFFO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0VBWE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvY2sge1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRyb2xzIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDg0cHg7XFxyXFxuICAgIGhlaWdodDogNDhweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNDhweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC43O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBmaWxsOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaWNvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAudGl0bGUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udHJvbHMge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJibG9ja1wiOiBgc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19ibG9jay13T2EyMGAsXG5cdFwidGl0bGVcIjogYHNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fdGl0bGUtVGZ3VlVgLFxuXHRcImJ1dHRvblwiOiBgc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19idXR0b24teGgzWUxgLFxuXHRcImJ1dHRvbi0tdGhlbWUtbGlnaHRcIjogYHNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fYnV0dG9uLS10aGVtZS1saWdodC1qSW1HUWAsXG5cdFwiYnV0dG9uLS10aGVtZS1kYXJrXCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2J1dHRvbi0tdGhlbWUtZGFyay1TekVWZ2AsXG5cdFwiaWNvblwiOiBgc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19pY29uLWJYRVZkYCxcblx0XCJpY29uLS10aGVtZS1saWdodFwiOiBgc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19pY29uLS10aGVtZS1saWdodC1iTjNEWmAsXG5cdFwiaWNvbi0tdGhlbWUtZGFya1wiOiBgc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19pY29uLS10aGVtZS1kYXJrLUhFOVRYYCxcblx0XCJjb250cm9sc1wiOiBgc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19jb250cm9scy1lVjk1QWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTVfc2hhcmVkLXVpLURhdGVJbmZvLURhdGVJbmZvLW1vZHVsZV9fYmxvY2stbHJmeHoge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtNV9zaGFyZWQtdWktRGF0ZUluZm8tRGF0ZUluZm8tbW9kdWxlX19ibG9jay1scmZ4eiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTVfc2hhcmVkLXVpLURhdGVJbmZvLURhdGVJbmZvLW1vZHVsZV9fYmxvY2stbHJmeHoge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzVfc2hhcmVkL3VpL0RhdGVJbmZvL0RhdGVJbmZvLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUdBO0VBQ0k7SUFDSSxlQUFBO0VBQU47QUFDRjtBQUdBO0VBQ0k7SUFDSSxlQUFBO0VBRE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvY2sge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJibG9ja1wiOiBgc3JjLTVfc2hhcmVkLXVpLURhdGVJbmZvLURhdGVJbmZvLW1vZHVsZV9fYmxvY2stbHJmeHpgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy01X3NoYXJlZC11aS1FZGl0b3JXcmFwcGVyLUVkaXRvcldyYXBwZXItbW9kdWxlX19ibG9jay1KYU5VTiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy81X3NoYXJlZC91aS9FZGl0b3JXcmFwcGVyL0VkaXRvcldyYXBwZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJibG9ja1wiOiBgc3JjLTVfc2hhcmVkLXVpLUVkaXRvcldyYXBwZXItRWRpdG9yV3JhcHBlci1tb2R1bGVfX2Jsb2NrLUphTlVOYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSA+ICoge1xuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWJsdWUpO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgYiwgLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgcHJlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSB1bCwgLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIG9sIHtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIG9sIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIGJsb2NrcXVvdGUge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIG1hcmdpbjogMWVtIDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci0tdGhlbWUtbGlnaHQtWnhfeE4gcHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgY29sb3I6ICMzMzM7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItLXRoZW1lLWxpZ2h0LVp4X3hOIGJsb2NrcXVvdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItLXRoZW1lLWRhcmsta3R6SVogcHJlIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci0tdGhlbWUtZGFyay1rdHpJWiBibG9ja3F1b3RlIHtcbiAgY29sb3I6ICNmNGY0ZjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuICAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgPiAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgfVxuICAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgcHJlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgYmxvY2txdW90ZSB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuICAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgPiAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgfVxuICAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgcHJlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgYmxvY2txdW90ZSB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzVfc2hhcmVkL3VpL0VkaXRvci9FZGl0b3IubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksb0JBQUE7QUFDUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUdJO0VBQ0ksY0FBQTtFQUNBLGtDQUFBO0FBRFI7QUFHUTtFQUNJLHFCQUFBO0FBRFo7QUFLSTtFQUNJLGdCQUFBO0FBSFI7QUFNSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUpSO0FBT0k7RUFDSSwyQkFBQTtBQUxSO0FBUUk7RUFDSSxxQkFBQTtBQU5SO0FBU0k7RUFDSSx3QkFBQTtBQVBSO0FBVUk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUlI7QUFZUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQVZaO0FBYVE7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0FBWFo7QUFnQlE7RUFDSSwyQkFBQTtFQUNBLGdDQUFBO0FBZFo7QUFpQlE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQWZaOztBQW9CQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VBakJOO0VBbUJNO0lBQ0ksb0JBQUE7RUFqQlY7RUFvQk07SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQWxCVjtFQXFCTTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0VBbkJWO0FBQ0Y7QUF1QkE7RUFDSTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFQXJCTjtFQXVCTTtJQUNJLG9CQUFBO0VBckJWO0VBd0JNO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUF0QlY7RUF5Qk07SUFDSSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtFQXZCVjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5lZGl0b3Ige1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuXFxyXFxuICAgICYgPiAqIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBiLCBzdHJvbmcge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwcmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWwsIG9sIHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bCB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgb2wge1xcclxcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJsb2NrcXVvdGUge1xcclxcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gICAgICAgIG1hcmdpbjogMWVtIDA7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgcHJlIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYmxvY2txdW90ZSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXHJcXG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBwcmUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGJsb2NrcXVvdGUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZjRmNGY0O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5lZGl0b3Ige1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG5cXHJcXG4gICAgICAgICYgPiAqIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHByZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBibG9ja3F1b3RlIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDFlbSAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XFxyXFxuICAgIC5lZGl0b3Ige1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG5cXHJcXG4gICAgICAgICYgPiAqIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHByZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBibG9ja3F1b3RlIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDFlbSAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImVkaXRvclwiOiBgc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGFgLFxuXHRcImVkaXRvci0tdGhlbWUtbGlnaHRcIjogYHNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLS10aGVtZS1saWdodC1aeF94TmAsXG5cdFwiZWRpdG9yLS10aGVtZS1kYXJrXCI6IGBzcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci0tdGhlbWUtZGFyay1rdHpJWmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbFBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxQYWdlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbFBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxDb250ZW50Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsQ29udGVudC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxDb250ZW50Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsRWRpdG9yLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsRWRpdG9yLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbEVkaXRvci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbEludHJvLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsSW50cm8ubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsSW50cm8ubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxQaWN0dXJlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsUGljdHVyZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxQaWN0dXJlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsVG9vbGJhci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbFRvb2xiYXIubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsVG9vbGJhci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NoYXJlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2hhcmUubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2hhcmUubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EYXRlSW5mby5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RhdGVJbmZvLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RhdGVJbmZvLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRWRpdG9yV3JhcHBlci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0VkaXRvcldyYXBwZXIubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRWRpdG9yV3JhcHBlci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0VkaXRvci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0VkaXRvci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FZGl0b3IubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiRGV0YWlsQ29udGVudCIsIlNoYXJlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGlja3lPYnNlcnZlciIsInJlZiIsImlzU3RpY2t5Iiwic2V0SXNTdGlja3kiLCJvYnNlcnZlciIsIm9wdGlvbnMiLCJyb290IiwiZG9jdW1lbnQiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiY2FsbGJhY2tFdmVudCIsIl9yZWYiLCJlbCIsImludGVyc2VjdGlvblJhdGlvIiwiY3VycmVudCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJ1c2VGb3JtYXR0ZWREYXRlIiwidGltZVN0YW1wIiwibGFuZyIsImZvcm1hdHRlZERhdGUiLCJzZXRGb3JtYXR0ZWREYXRlIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJmb3JtYXR0ZWRTdHJpbmciLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzbGljZSIsIlJlYWN0IiwiY2xhc3NOYW1lcyIsInVzZVBhcmFtcyIsIk1ldGFQYWdlIiwidXNlRmV0Y2hEZXZCeUlkIiwidXNlRmV0Y2hQb3N0QnlJZCIsInVzZUZldGNoUGhvdG9CeUlkIiwiTWFpbiIsIkNvbnRlbnRLZXlUeXBlIiwiY2xzIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsImZldGNoTWV0aG9kcyIsIlBPU1QiLCJERVYiLCJQSE9UTyIsIkRldGFpbFBhZ2UiLCJtb2RlIiwic2x1ZyIsImRhdGEiLCJpc0xvYWRpbmciLCJjbGFzc05hbWUiLCJtYWluIiwiY2hpbGRyZW4iLCJzZW8iLCJ1bmRlZmluZWQiLCJFZGl0b3JXcmFwcGVyIiwiRGV0YWlsQ29kZSIsInByb3BzIiwidXNlVGhlbWUiLCJBcHBUaGVtZSIsIkNvbnRhaW5lciIsIkRldGFpbEludHJvIiwiRGV0YWlsRWRpdG9yIiwiRGV0YWlsVG9vbGJhciIsInRoZW1lIiwiYmxvY2tUaGVtZSIsInNldEJsb2NrVGhlbWUiLCJwcmV2aWV3SW52ZXJ0ZWQiLCJEQVJLIiwiTElHSFQiLCJibG9jayIsImhpZGRlbiIsInBpY3R1cmUiLCJwcmV2aWV3IiwidXJsIiwic3JjIiwiX19CQVNFX1VSTF9fIiwiYWx0IiwiY29udGVudCIsIkJsb2Nrc1JlbmRlcmVyIiwiRWRpdG9yIiwiRGV0YWlsTGluayIsIkRldGFpbExpc3QiLCJEZXRhaWxRdW90ZSIsIkRldGFpbFBpY3R1cmUiLCJEZXRhaWxIZWFkaW5nIiwiRGV0YWlsUGFyYWdyYXBoIiwiZWRpdG9yIiwiYmxvY2tzIiwicGFyYWdyYXBoIiwiaW1hZ2UiLCJfcmVmMiIsImhlYWRpbmciLCJfcmVmMyIsImxldmVsIiwibGluayIsIl9yZWY0IiwiY29kZSIsIl9yZWY1IiwibGlzdCIsIl9yZWY2IiwiZm9ybWF0IiwicXVvdGUiLCJfcmVmNyIsInRhZyIsImNyZWF0ZUVsZW1lbnQiLCJMaXN0VGFncyIsIkFydGljbGVUYWciLCJBcnRpY2xlQ2F0ZWdvcnkiLCJBcnRpY2xlQ2F0ZWdvcnlNb2RlIiwiZ3JpZCIsImludHJvIiwidGl0bGUiLCJwcmV2aWV3VGl0bGUiLCJwcmV2aWV3Q2FwdGlvbiIsImNhdGVnb3J5IiwidGhlbWVQcm9wIiwiU1RBVElDIiwidGFncyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpZCIsImhyZWYiLCJyZWwiLCJ0YXJnZXQiLCJsaXN0VGFnIiwiZmlndXJlIiwiZm9ybWF0cyIsImxhcmdlIiwiYWx0ZXJuYXRpdmVUZXh0IiwibWVkaXVtIiwic21hbGwiLCJmaWdjYXB0aW9uIiwiY2FwdGlvbiIsInRleHQiLCJmb3J3YXJkUmVmIiwiRGF0ZUluZm8iLCJJY29uIiwiZm9vdGVyIiwicHVibGlzaGVkQXQiLCJ0aW1lIiwiYnV0dG9uIiwiaWNvbiIsInNoYXJlIiwiVktTaGFyZUJ1dHRvbiIsIlR3aXR0ZXJTaGFyZUJ1dHRvbiIsIkZhY2Vib29rU2hhcmVCdXR0b24iLCJUZWxlZ3JhbVNoYXJlQnV0dG9uIiwidXNlVHJhbnNsYXRpb24iLCJDb250cm9scyIsIkljb25LZXkiLCJJY29uU29jaWFsIiwidCIsInRoZW1lTW9kZSIsImNvbnRyb2xzIiwicmVzZXRCdXR0b25TdHlsZSIsImljb25LZXkiLCJWSyIsIlgiLCJGQiIsIlRHIiwidXNlVGltZSIsImkxOG4iLCJsYW5ndWFnZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==