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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _3_features_DetailContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 3_features/DetailContent */ "./src/3_features/DetailContent/index.ts");
/* harmony import */ var _4_entities_Dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 4_entities/Dev */ "./src/4_entities/Dev/index.ts");
/* harmony import */ var _4_entities_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 4_entities/Post */ "./src/4_entities/Post/index.ts");
/* harmony import */ var _4_entities_Photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 4_entities/Photo */ "./src/4_entities/Photo/index.ts");
/* harmony import */ var _5_shared_ui_Main_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/ui/Main/Main */ "./src/5_shared/ui/Main/Main.tsx");
/* harmony import */ var _5_shared_types_CommonTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! 5_shared/types/CommonTypes */ "./src/5_shared/types/CommonTypes.ts");
/* harmony import */ var _DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailPage.module.scss */ "./src/1_pages/DetailPage/ui/DetailPage.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const fetchMethods = {
  [_5_shared_types_CommonTypes__WEBPACK_IMPORTED_MODULE_6__.ContentKeyType.POST]: _4_entities_Post__WEBPACK_IMPORTED_MODULE_3__.useFetchPostById,
  [_5_shared_types_CommonTypes__WEBPACK_IMPORTED_MODULE_6__.ContentKeyType.DEV]: _4_entities_Dev__WEBPACK_IMPORTED_MODULE_2__.useFetchDevById,
  [_5_shared_types_CommonTypes__WEBPACK_IMPORTED_MODULE_6__.ContentKeyType.PHOTO]: _4_entities_Photo__WEBPACK_IMPORTED_MODULE_4__.useFetchPhotoById
};
function DetailPage(_ref) {
  let {
    mode
  } = _ref;
  const {
    slug
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();
  const {
    data,
    isLoading
  } = fetchMethods[mode](slug || 'none');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_5_shared_ui_Main_Main__WEBPACK_IMPORTED_MODULE_5__.Main, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].main),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_3_features_DetailContent__WEBPACK_IMPORTED_MODULE_1__.DetailContent, {
      data: data,
      isLoading: isLoading
    })
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['intro-main']),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DetailToolbar_DetailToolbar__WEBPACK_IMPORTED_MODULE_9__.DetailToolbar, {
          ref: ref,
          data: data,
          theme: blockTheme,
          isSticky: isSticky
        }), data?.main?.content && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DetailEditor_DetailEditor__WEBPACK_IMPORTED_MODULE_8__.DetailEditor, {
          data: data.main.content
        })]
      })
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
/* harmony import */ var _5_shared_ui_Editor_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/ui/Editor/Editor */ "./src/5_shared/ui/Editor/Editor.tsx");
/* harmony import */ var _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/config/ThemeContext */ "./src/5_shared/config/ThemeContext.ts");
/* harmony import */ var _5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/ui/Container/Container */ "./src/5_shared/ui/Container/Container.tsx");
/* harmony import */ var _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/css/grid.module.scss */ "./src/5_shared/css/grid.module.scss");
/* harmony import */ var _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailIntro.module.scss */ "./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const DetailIntro = props => {
  const {
    data,
    theme,
    className
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].intro, _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`intro--${theme}`], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['intro-content']),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].grid),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-2']),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h1", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title),
              children: [data?.main?.previewTitle, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), data?.main?.previewCaption]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-2']),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['toolbar-category']),
              children: data?.category?.data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ArticleCategory, {
                data: data?.category?.data,
                size: _4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ArticleCategorySize.BIG
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['main-content']),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].grid, _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].grid),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-2']),
              children: data?.tags?.data && data?.tags?.data?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ListTags, {
                children: data.tags.data.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ArticleTag, {
                  data: item,
                  themeProp: data?.main?.previewInverted ? _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.DARK : _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.LIGHT
                }, item.id))
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-1']),
              children: data?.main?.introCaption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_5_shared_ui_Editor_Editor__WEBPACK_IMPORTED_MODULE_2__.Editor, {
                data: data.main.introCaption
              })
            })]
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
/* harmony import */ var _DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailPicture.module.scss */ "./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss");
/* harmony import */ var _5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/ui/EditorWrapper/EditorWrapper */ "./src/5_shared/ui/EditorWrapper/EditorWrapper.tsx");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const DetailPicture = props => {
  const {
    image
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__.useTheme)();

  // TODO: Добавить srcset
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("figure", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].figure),
    children: [image?.formats?.large?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: `${"https://api.egor-badulin.ru"}${image?.formats?.large?.url}`,
      alt: image?.alternativeText || '#'
    }), !image?.formats?.large?.url && image?.formats?.medium?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: `${"https://api.egor-badulin.ru"}${image?.formats?.medium?.url}`,
      alt: image?.alternativeText || '#'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("figcaption", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].figcaption),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_2__.EditorWrapper, {
        children: [image?.alternativeText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].text),
          children: image.alternativeText
        }), image?.caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].caption, _DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"][`caption--${theme}`]),
          children: image.caption
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
/* harmony import */ var _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/css/grid.module.scss */ "./src/5_shared/css/grid.module.scss");
/* harmony import */ var _5_shared_ui_DateInfo_DateInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/ui/DateInfo/DateInfo */ "./src/5_shared/ui/DateInfo/DateInfo.tsx");
/* harmony import */ var _5_shared_assets_icons_arrow_scroll_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/assets/icons/arrow-scroll.svg */ "./src/5_shared/assets/icons/arrow-scroll.svg");
/* harmony import */ var _4_entities_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! 4_entities/Category */ "./src/4_entities/Category/index.ts");
/* harmony import */ var _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! 5_shared/config/ThemeContext */ "./src/5_shared/config/ThemeContext.ts");
/* harmony import */ var _DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DetailToolbar.module.scss */ "./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











const DetailToolbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    data,
    theme,
    isSticky,
    className
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    ref: ref,
    id: "scroll-anchor",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].footer, {
      [_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"]['footer--fixed']]: isSticky
    }, _DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"][`footer--${theme}`], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].grid, _DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"]['footer-grid']),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-1'],
        children: data?.publishedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_5_shared_ui_DateInfo_DateInfo__WEBPACK_IMPORTED_MODULE_4__.DateInfo, {
          date: data?.publishedAt,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].time)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-2'],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
          hidden: isSticky,
          href: "#scroll-anchor",
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].button),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_5_shared_assets_icons_arrow_scroll_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].icon, _DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"][`icon--${theme}`])
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          hidden: !isSticky,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].caption),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].titleCaption),
            children: data?.title
          }), data?.category?.data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_6__.ArticleCategory, {
            themeProp: _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_7__.AppTheme.DARK,
            data: data?.category?.data,
            size: _4_entities_Category__WEBPACK_IMPORTED_MODULE_6__.ArticleCategorySize.SMALL
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-1'],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"]['share-column']),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_3_features_Share__WEBPACK_IMPORTED_MODULE_2__.Share, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].share),
            themeProp: isSticky ? _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_7__.AppTheme.DARK : theme
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
/* harmony import */ var _5_shared_ui_Controls_Controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/ui/Controls/Controls */ "./src/5_shared/ui/Controls/Controls.tsx");
/* harmony import */ var _5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/ui/IconSocial/IconSocial */ "./src/5_shared/ui/IconSocial/IconSocial.tsx");
/* harmony import */ var _Share_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Share.module.scss */ "./src/3_features/Share/ui/Share.module.scss");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const Share = props => {
  const {
    themeProp,
    className
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const themeMode = themeProp || theme;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].block, className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].title),
      children: t('share')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_5_shared_ui_Controls_Controls__WEBPACK_IMPORTED_MODULE_3__.Controls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_8__.VKShareButton, {
        url: "vk.com",
        resetButtonStyle: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, _Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`button--${themeMode}`]),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_4__.IconSocial, {
          iconKey: _5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_4__.IconKey.VK,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].icon, _Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`icon--${themeMode}`])
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_8__.TwitterShareButton, {
        url: "twitter.com",
        resetButtonStyle: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, _Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`button--${themeMode}`]),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_4__.IconSocial, {
          iconKey: _5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_4__.IconKey.X,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].icon, _Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`icon--${themeMode}`])
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_8__.FacebookShareButton, {
        url: "fb.com",
        resetButtonStyle: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, _Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`button--${themeMode}`]),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_4__.IconSocial, {
          iconKey: _5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_4__.IconKey.FB,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].icon, _Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`icon--${themeMode}`])
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_8__.TelegramShareButton, {
        url: "tg.com",
        resetButtonStyle: false,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].button, _Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`button--${themeMode}`]),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_4__.IconSocial, {
          iconKey: _5_shared_ui_IconSocial_IconSocial__WEBPACK_IMPORTED_MODULE_4__.IconKey.TG,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].icon, _Share_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`icon--${themeMode}`])
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
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss"],"names":[],"mappings":"AAAA;EACI,gCAAA;AACJ;;AAEA;EACI,MAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;EACA,wBAAA;AACJ;AACI;EACI,UAAA;EACA,kBAAA;AACR;AAEI;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;AAAR;;AAIA;EACI,kBAAA;EACA,+BAAA;AADJ","sourcesContent":[".block {\r\n    background-color: var(--bg-dark);\r\n}\r\n\r\n.picture {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 1;\r\n    z-index: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: block;\r\n    position: fixed;\r\n    transition: 0.3s opacity;\r\n\r\n    &[hidden] {\r\n        opacity: 0;\r\n        visibility: hidden;\r\n    }\r\n\r\n    img {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n        object-fit: cover;\r\n        object-position: center;\r\n    }\r\n}\r\n\r\n.intro-main {\r\n    position: relative;\r\n    margin-top: calc(100vh - 180px);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-3_features-DetailContent-ui-DetailContent-DetailContent-module__block-Bs23I`,
	"picture": `src-3_features-DetailContent-ui-DetailContent-DetailContent-module__picture-dLzE_`,
	"intro-main": `src-3_features-DetailContent-ui-DetailContent-DetailContent-module__intro-main-RpaDo`
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
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,mBAAA;AACJ;AACI;EACI,qCAAA;AACR;AAEI;EACI,oCAAA;AAAR","sourcesContent":[".block {\r\n    padding: 60px 50px;\r\n    border-radius: 28px;\r\n\r\n    &--theme-light {\r\n        background-color: var(--light-accent);\r\n    }\r\n\r\n    &--theme-dark {\r\n        background-color: var(--dark-accent);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss"],"names":[],"mappings":"AAAA;EACI,MAAA;EACA,OAAA;EACA,QAAA;EACA,cAAA;EACA,eAAA;AACJ;AACI;EACI,0BAAA;AACR;AAEI;EACI,0BAAA;AAAR;;AAIA;EACI,SAAA;EACA,UAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;AADJ;;AAIA;EACI,aAAA;EACA,yBAAA;AADJ;;AAIA;EACI,gBAAA;EACA,gBAAA;EACA,gBAAA;AADJ","sourcesContent":[".intro {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    position: fixed;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-accent);\r\n    }\r\n}\r\n\r\n.intro-content {\r\n    gap: 60px;\r\n    z-index: 1;\r\n    display: flex;\r\n    height: 100vh;\r\n    position: relative;\r\n    flex-direction: column;\r\n    padding: 185px 0 150px;\r\n}\r\n\r\n.toolbar-category {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.title {\r\n    line-height: 1.1;\r\n    font-size: 106px;\r\n    font-weight: 350;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"intro": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-yOD8K`,
	"intro--theme-light": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro--theme-light-JjHqg`,
	"intro--theme-dark": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro--theme-dark-zA9MB`,
	"intro-content": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-content-V1wD4`,
	"toolbar-category": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__toolbar-category-ggGuZ`,
	"title": `src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__title-sgMpQ`
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
  width: auto;
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
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AACR;;AAGA;EACI,iBAAA;AAAJ;;AAGA;EACI,eAAA;AAAJ;;AAGA;EACI,eAAA;AAAJ;AAEI;EACI,4BAAA;AAAR;AAGI;EACI,6BAAA;AADR","sourcesContent":[".figure {\r\n    display: block;\r\n    max-width: 1920px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: fit-content;\r\n\r\n    img {\r\n        width: auto;\r\n        height: auto;\r\n        margin: 0 auto;\r\n        display: block;\r\n    }\r\n}\r\n\r\n.figcaption {\r\n    padding-top: 10px;\r\n}\r\n\r\n.text {\r\n    font-size: 22px;\r\n}\r\n\r\n.caption {\r\n    font-size: 18px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-secondary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-secondary);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer--fixed-sYl0u {
  color: var(--light-primary);
  background-color: var(--bg-dark);
}

.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-grid-O5NsU {
  min-height: 60px;
  align-items: center;
}

.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__titleCaption-iPKbg {
  font-size: 35px;
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
.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__button-Bvp6U[hidden] {
  opacity: 0;
  display: none;
  visibility: hidden;
}

.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__caption-PcLg4 {
  gap: 25px;
  display: flex;
  overflow: hidden;
}
.src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__caption-PcLg4[hidden] {
  display: none;
  visibility: hidden;
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
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,iCAAA;AACJ;AACI;EACI,0BAAA;AACR;AAEI;EACI,2BAAA;AAAR;AAGI;EACI,2BAAA;EACA,gCAAA;AADR;;AAKA;EACI,gBAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,eAAA;AAFJ;;AAKA;EACI,UAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;EACA,uBAAA;AAFJ;AAII;EACI,UAAA;EACA,aAAA;EACA,kBAAA;AAFR;;AAMA;EACI,SAAA;EACA,aAAA;EACA,gBAAA;AAHJ;AAKI;EACI,aAAA;EACA,kBAAA;AAHR;;AAOA;EACI,WAAA;EACA,YAAA;EACA,cAAA;AAJJ;AAOI;EACI,yBAAA;AALR;AAQI;EACI,0BAAA;AANR;;AAUA;EACI,yBAAA;AAPJ","sourcesContent":[".footer {\r\n    top: -1px;\r\n    width: 100%;\r\n    display: flex;\r\n    min-height: 90px;\r\n    position: sticky;\r\n    margin-bottom: 35px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    transition: 0.3s background-color;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-primary);\r\n    }\r\n\r\n    &--fixed {\r\n        color: var(--light-primary);\r\n        background-color: var(--bg-dark);\r\n    }\r\n}\r\n\r\n.footer-grid {\r\n    min-height: 60px;\r\n    align-items: center;\r\n}\r\n\r\n.titleCaption {\r\n    font-size: 35px;\r\n}\r\n\r\n.button {\r\n    opacity: 1;\r\n    width: 100%;\r\n    border: none;\r\n    padding: 4px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: none;\r\n    overflow: hidden;\r\n    align-items: center;\r\n    transition: 0.3s all;\r\n    justify-content: center;\r\n\r\n    &[hidden] {\r\n        opacity: 0;\r\n        display: none;\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n.caption {\r\n    gap: 25px;\r\n    display: flex;\r\n    overflow: hidden;\r\n\r\n    &[hidden] {\r\n        display: none;\r\n        visibility: hidden;\r\n    }\r\n}\r\n\r\n.icon {\r\n    width: 44px;\r\n    height: 44px;\r\n    display: block;\r\n\r\n\r\n    &--theme-light {\r\n        fill: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        fill: var(--light-primary);\r\n    }\r\n}\r\n\r\n.share {\r\n    justify-content: flex-end;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-oL_iU`,
	"footer--theme-light": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer--theme-light-PzUx_`,
	"footer--theme-dark": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer--theme-dark-wk4q4`,
	"footer--fixed": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer--fixed-sYl0u`,
	"footer-grid": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__footer-grid-O5NsU`,
	"titleCaption": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__titleCaption-iPKbg`,
	"button": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__button-Bvp6U`,
	"caption": `src-3_features-DetailContent-ui-DetailToolbar-DetailToolbar-module__caption-PcLg4`,
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
}`, "",{"version":3,"sources":["webpack://./src/3_features/Share/ui/Share.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,aAAA;EACA,mBAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,oBAAA;EACA,uBAAA;AACJ;AACI;EACI,iCAAA;AACR;AAEI;EACI,kCAAA;AAAR;AAGI;EACI,YAAA;AADR;;AAKA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,oBAAA;AAFJ;AAII;EACI,yBAAA;AAFR;AAKI;EACI,0BAAA;AAHR","sourcesContent":[".block {\r\n    gap: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.title {\r\n    font-size: 24px;\r\n}\r\n\r\n.button {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 84px;\r\n    height: 48px;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background: none;\r\n    border: 1px solid;\r\n    border-radius: 48px;\r\n    align-items: center;\r\n    transition: 0.3s all;\r\n    justify-content: center;\r\n\r\n    &--theme-light {\r\n        border-color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        border-color: var(--light-primary);\r\n    }\r\n\r\n    &:hover {\r\n        opacity: 0.7;\r\n    }\r\n}\r\n\r\n.icon {\r\n    width: 30px;\r\n    height: 18px;\r\n    display: block;\r\n    transition: 0.3s all;\r\n\r\n    &--theme-light {\r\n        fill: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        fill: var(--light-primary);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-3_features-Share-ui-Share-module__block-wOa20`,
	"title": `src-3_features-Share-ui-Share-module__title-TfwVU`,
	"button": `src-3_features-Share-ui-Share-module__button-xh3YL`,
	"button--theme-light": `src-3_features-Share-ui-Share-module__button--theme-light-jImGQ`,
	"button--theme-dark": `src-3_features-Share-ui-Share-module__button--theme-dark-SzEVg`,
	"icon": `src-3_features-Share-ui-Share-module__icon-bXEVd`,
	"icon--theme-light": `src-3_features-Share-ui-Share-module__icon--theme-light-bN3DZ`,
	"icon--theme-dark": `src-3_features-Share-ui-Share-module__icon--theme-dark-HE9TX`
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
}`, "",{"version":3,"sources":["webpack://./src/5_shared/ui/DateInfo/DateInfo.module.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;AACJ","sourcesContent":[".block {\r\n    font-size: 24px;\r\n}\r\n"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/5_shared/ui/Editor/Editor.module.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,gBAAA;AACJ;AACI;EACI,oBAAA;AACR;AAEI;EACI,gBAAA;AAAR;AAGI;EACI,cAAA;EACA,kCAAA;AADR;AAGQ;EACI,qBAAA;AADZ;AAKI;EACI,gBAAA;AAHR;AAMI;EACI,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;AAJR;AAOI;EACI,2BAAA;AALR;AAQI;EACI,qBAAA;AANR;AASI;EACI,wBAAA;AAPR;AAUI;EACI,sBAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;AARR;AAYQ;EACI,yBAAA;EACA,WAAA;AAVZ;AAaQ;EACI,yBAAA;EACA,8BAAA;AAXZ;AAgBQ;EACI,2BAAA;EACA,gCAAA;AAdZ;AAiBQ;EACI,cAAA;EACA,sBAAA;EACA,8BAAA;AAfZ","sourcesContent":[".editor {\r\n    font-size: 28px;\r\n    line-height: 1.6;\r\n\r\n    & > * {\r\n        margin-bottom: 1.5em;\r\n    }\r\n\r\n    & :last-child {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    a {\r\n        color: inherit;\r\n        text-decoration-color: var(--blue);\r\n\r\n        &:hover {\r\n            text-decoration: none;\r\n        }\r\n    }\r\n\r\n    b, strong {\r\n        font-weight: 600;\r\n    }\r\n\r\n    pre {\r\n        font-size: 22px;\r\n        padding: 1em 1.5em;\r\n        border-radius: 6px;\r\n        font-family: monospace;\r\n    }\r\n\r\n    ul, ol {\r\n        list-style-position: inside;\r\n    }\r\n\r\n    ul {\r\n        list-style-type: disc;\r\n    }\r\n\r\n    ol {\r\n        list-style-type: decimal;\r\n    }\r\n\r\n    blockquote {\r\n        border-left: 5px solid;\r\n        padding: 0.5em 1em;\r\n        margin: 1em 0;\r\n        font-style: italic;\r\n    }\r\n\r\n    &--theme-light {\r\n        pre {\r\n            background-color: #f4f4f4;\r\n            color: #333;\r\n        }\r\n\r\n        blockquote {\r\n            background-color: #f9f9f9;\r\n            border-left-color: var(--blue);\r\n        }\r\n    }\r\n\r\n    &--theme-dark {\r\n        pre {\r\n            color: var(--light-primary);\r\n            background-color: var(--bg-dark);\r\n        }\r\n\r\n        blockquote {\r\n            color: #f4f4f4;\r\n            background-color: #333;\r\n            border-left-color: var(--blue);\r\n        }\r\n    }\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EseUJBQXlCLDRKQUFPO0FBQ2hDLG9DQUFvQyxpSkFBVyxHQUFHLDRKQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLGlUQUFxSjtBQUMzSixNQUFNO0FBQUE7QUFDTixzREFBc0QsaUpBQVcsR0FBRyw0SkFBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsaUpBQVcsR0FBRyw0SkFBTzs7QUFFL0QscUJBQXFCLDRKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHb0s7QUFDcEssT0FBTyxpRUFBZSw0SkFBTyxJQUFJLDRKQUFPLFVBQVUsNEpBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC9hc3NldHMvaWNvbnMvYXJyb3ctc2Nyb2xsLnN2ZyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9TaGFyZS9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC9saWJzL2hvb2tzL3VzZVN0aWNreU9ic2VydmVyLnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL2xpYnMvaG9va3MvdXNlVGltZS50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8xX3BhZ2VzL0RldGFpbFBhZ2UvdWkvRGV0YWlsUGFnZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbENvZGUvRGV0YWlsQ29kZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbENvbnRlbnQvRGV0YWlsQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbEVkaXRvci9EZXRhaWxFZGl0b3IudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxIZWFkaW5nL0RldGFpbEhlYWRpbmcudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxJbnRyby9EZXRhaWxJbnRyby50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbExpbmsvRGV0YWlsTGluay50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbExpc3QvRGV0YWlsTGlzdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFBhcmFncmFwaC9EZXRhaWxQYXJhZ3JhcGgudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxQaWN0dXJlL0RldGFpbFBpY3R1cmUudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxRdW90ZS9EZXRhaWxRdW90ZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFRvb2xiYXIvRGV0YWlsVG9vbGJhci50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9TaGFyZS91aS9TaGFyZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRGF0ZUluZm8vRGF0ZUluZm8udHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yL0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9EZXRhaWxQYWdlL3VpL0RldGFpbFBhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbENvbnRlbnQvRGV0YWlsQ29udGVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsRWRpdG9yL0RldGFpbEVkaXRvci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsSW50cm8vRGV0YWlsSW50cm8ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFBpY3R1cmUvRGV0YWlsUGljdHVyZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsVG9vbGJhci9EZXRhaWxUb29sYmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvU2hhcmUvdWkvU2hhcmUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRGF0ZUluZm8vRGF0ZUluZm8ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yV3JhcHBlci9FZGl0b3JXcmFwcGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0VkaXRvci9FZGl0b3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9EZXRhaWxQYWdlL3VpL0RldGFpbFBhZ2UubW9kdWxlLnNjc3M/Zjk2OCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsQ29udGVudC9EZXRhaWxDb250ZW50Lm1vZHVsZS5zY3NzP2MwMDUiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbEVkaXRvci9EZXRhaWxFZGl0b3IubW9kdWxlLnNjc3M/MWExZCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsSW50cm8vRGV0YWlsSW50cm8ubW9kdWxlLnNjc3M/ZTZjNiIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsUGljdHVyZS9EZXRhaWxQaWN0dXJlLm1vZHVsZS5zY3NzPzEzOGUiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFRvb2xiYXIvRGV0YWlsVG9vbGJhci5tb2R1bGUuc2Nzcz9iYjdlIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvU2hhcmUvdWkvU2hhcmUubW9kdWxlLnNjc3M/NjAzYSIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9EYXRlSW5mby9EYXRlSW5mby5tb2R1bGUuc2Nzcz8yMTE0Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlci5tb2R1bGUuc2Nzcz9kZjBiIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0VkaXRvci9FZGl0b3IubW9kdWxlLnNjc3M/NTA3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3BhdGg7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgU3ZnQXJyb3dTY3JvbGwgPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDQ0IDQzXCJcbn0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBkOiBcIm0yNCAzNS4zNjQgMTYuNjI4LTE1LjY4NSAyLjc0NCAyLjkxTDIyIDQyLjc0OS42MjggMjIuNTlsMi43NDQtMi45MUwyMCAzNS4zNjRWMGg0djM1LjM2NFpcIixcbiAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiXG59KSkpO1xuZXhwb3J0IGRlZmF1bHQgU3ZnQXJyb3dTY3JvbGw7IiwiZXhwb3J0IHtcclxuICAgIERldGFpbENvbnRlbnQsXHJcbn0gZnJvbSAnLi91aS9EZXRhaWxDb250ZW50L0RldGFpbENvbnRlbnQnO1xyXG4iLCJleHBvcnQge1xyXG4gICAgU2hhcmUsXHJcbn0gZnJvbSAnLi91aS9TaGFyZSc7XHJcbiIsImltcG9ydCB7XHJcbiAgICB1c2VTdGF0ZSxcclxuICAgIHVzZUVmZmVjdCxcclxuICAgIE11dGFibGVSZWZPYmplY3QsIHVzZVJlZixcclxufSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHVzZVN0aWNreU9ic2VydmVyT3B0aW9ucyB7XHJcbiAgICB0cmlnZ2VyUmVmOiBNdXRhYmxlUmVmT2JqZWN0PEhUTUxFbGVtZW50PjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0aWNreU9ic2VydmVyKCkge1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IFtpc1N0aWNreSwgc2V0SXNTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlcjtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgcm9vdDogZG9jdW1lbnQsXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICctMXB4IDBweCAwcHggMHB4JyxcclxuICAgICAgICAgICAgdGhyZXNob2xkOiBbMV0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tFdmVudCA9IChbZWxdOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgc2V0SXNTdGlja3koZWwuaW50ZXJzZWN0aW9uUmF0aW8gPCAxKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2tFdmVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUocmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmVyKSBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4geyByZWYsIGlzU3RpY2t5IH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIHVzZVN0YXRlLFxyXG4gICAgdXNlRWZmZWN0LFxyXG59IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUZvcm1hdHRlZERhdGUgPSAodGltZVN0YW1wOiBEYXRlLCBsYW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1hdHRlZERhdGUsIHNldEZvcm1hdHRlZERhdGVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aW1lU3RhbXApIHtcclxuICAgICAgICAgICAgc2V0Rm9ybWF0dGVkRGF0ZSgnJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lU3RhbXApO1xyXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgICAgICAgIHNldEZvcm1hdHRlZERhdGUoJycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRTdHJpbmcgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhsYW5nLCBvcHRpb25zKTtcclxuICAgICAgICBzZXRGb3JtYXR0ZWREYXRlKGxhbmcgPT09ICdydScgPyBmb3JtYXR0ZWRTdHJpbmcuc2xpY2UoMCwgLTMpIDogZm9ybWF0dGVkU3RyaW5nKTtcclxuICAgIH0sIFt0aW1lU3RhbXAsIGxhbmddKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUZvcm1hdHRlZERhdGU7XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRGV0YWlsQ29udGVudCB9IGZyb20gJzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudCc7XHJcbmltcG9ydCB7IHVzZUZldGNoRGV2QnlJZCB9IGZyb20gJzRfZW50aXRpZXMvRGV2JztcclxuaW1wb3J0IHsgdXNlRmV0Y2hQb3N0QnlJZCB9IGZyb20gJzRfZW50aXRpZXMvUG9zdCc7XHJcbmltcG9ydCB7IHVzZUZldGNoUGhvdG9CeUlkIH0gZnJvbSAnNF9lbnRpdGllcy9QaG90byc7XHJcbmltcG9ydCB7IE1haW4gfSBmcm9tICc1X3NoYXJlZC91aS9NYWluL01haW4nO1xyXG5pbXBvcnQgeyBDb250ZW50S2V5VHlwZSB9IGZyb20gJzVfc2hhcmVkL3R5cGVzL0NvbW1vblR5cGVzJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0RldGFpbFBhZ2UubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgZmV0Y2hNZXRob2RzOiBSZWNvcmQ8Q29udGVudEtleVR5cGUsIGFueT4gPSB7XHJcbiAgICBbQ29udGVudEtleVR5cGUuUE9TVF06IHVzZUZldGNoUG9zdEJ5SWQsXHJcbiAgICBbQ29udGVudEtleVR5cGUuREVWXTogdXNlRmV0Y2hEZXZCeUlkLFxyXG4gICAgW0NvbnRlbnRLZXlUeXBlLlBIT1RPXTogdXNlRmV0Y2hQaG90b0J5SWQsXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsUGFnZVByb3BzIHtcclxuICAgIG1vZGU6IENvbnRlbnRLZXlUeXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxQYWdlKHsgbW9kZSB9OiBEZXRhaWxQYWdlUHJvcHMpIHtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gdXNlUGFyYW1zPHsgc2x1Zzogc3RyaW5nIH0+KCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gZmV0Y2hNZXRob2RzW21vZGVdKHNsdWcgfHwgJ25vbmUnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMubWFpbil9PlxyXG4gICAgICAgICAgICA8RGV0YWlsQ29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTWFpbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbFBhZ2U7XHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdG9yV3JhcHBlciB9IGZyb20gJzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlcic7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsQ29kZVByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxDb2RlID0gKHByb3BzOiBEZXRhaWxDb2RlUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFZGl0b3JXcmFwcGVyPlxyXG4gICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvRWRpdG9yV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgICB1c2VTdGF0ZSxcclxuICAgIHVzZUVmZmVjdCxcclxufSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBBcnRpY2xlRGV2VHlwZSB9IGZyb20gJzRfZW50aXRpZXMvRGV2JztcclxuaW1wb3J0IHsgUG9zdEFydGljbGVUeXBlIH0gZnJvbSAnNF9lbnRpdGllcy9Qb3N0JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnNV9zaGFyZWQvdWkvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IHVzZVN0aWNreU9ic2VydmVyIH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VTdGlja3lPYnNlcnZlcic7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9EZXRhaWxDb250ZW50Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgRGV0YWlsSW50cm8gfSBmcm9tICcuLi9EZXRhaWxJbnRyby9EZXRhaWxJbnRybyc7XHJcbmltcG9ydCB7IERldGFpbEVkaXRvciB9IGZyb20gJy4uL0RldGFpbEVkaXRvci9EZXRhaWxFZGl0b3InO1xyXG5pbXBvcnQgeyBEZXRhaWxUb29sYmFyIH0gZnJvbSAnLi4vRGV0YWlsVG9vbGJhci9EZXRhaWxUb29sYmFyJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxDb250ZW50UHJvcHMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgZGF0YT86IFBvc3RBcnRpY2xlVHlwZSB8IEFydGljbGVEZXZUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsQ29udGVudCA9IChwcm9wczogRGV0YWlsQ29udGVudFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCB7IHJlZiwgaXNTdGlja3kgfSA9IHVzZVN0aWNreU9ic2VydmVyKCk7XHJcbiAgICBjb25zdCBbYmxvY2tUaGVtZSwgc2V0QmxvY2tUaGVtZV0gPSB1c2VTdGF0ZTxBcHBUaGVtZT4odGhlbWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGE/Lm1haW4/LnByZXZpZXdJbnZlcnRlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldEJsb2NrVGhlbWUoXHJcbiAgICAgICAgICAgICAgICBkYXRhLm1haW4ucHJldmlld0ludmVydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBBcHBUaGVtZS5EQVJLXHJcbiAgICAgICAgICAgICAgICAgICAgOiBBcHBUaGVtZS5MSUdIVCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuYmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BibG9jay0tJHt0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwaWN0dXJlXHJcbiAgICAgICAgICAgICAgICBoaWRkZW49e2lzU3RpY2t5fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5waWN0dXJlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE/Lm1haW4/LnByZXZpZXc/LmRhdGE/LnVybFxyXG4gICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake19fQkFTRV9VUkxfX30ke2RhdGE/Lm1haW4/LnByZXZpZXc/LmRhdGE/LnVybH1gfSBhbHQ9XCIjXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICAgICAgPERldGFpbEludHJvXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgdGhlbWU9e2Jsb2NrVGhlbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHNbJ2ludHJvLW1haW4nXSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERldGFpbFRvb2xiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXtibG9ja1RoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1N0aWNreT17aXNTdGlja3l9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE/Lm1haW4/LmNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbEVkaXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGEubWFpbi5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgQmxvY2tzUmVuZGVyZXIsXHJcbiAgICB0eXBlIEJsb2Nrc0NvbnRlbnQsXHJcbn0gZnJvbSAnQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXInO1xyXG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICc1X3NoYXJlZC91aS9FZGl0b3IvRWRpdG9yJztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0RldGFpbEVkaXRvci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IERldGFpbExpbmsgfSBmcm9tICcuLi9EZXRhaWxMaW5rL0RldGFpbExpbmsnO1xyXG5pbXBvcnQgeyBEZXRhaWxDb2RlIH0gZnJvbSAnLi4vRGV0YWlsQ29kZS9EZXRhaWxDb2RlJztcclxuaW1wb3J0IHsgRGV0YWlsTGlzdCB9IGZyb20gJy4uL0RldGFpbExpc3QvRGV0YWlsTGlzdCc7XHJcbmltcG9ydCB7IERldGFpbFF1b3RlIH0gZnJvbSAnLi4vRGV0YWlsUXVvdGUvRGV0YWlsUXVvdGUnO1xyXG5pbXBvcnQgeyBEZXRhaWxQaWN0dXJlIH0gZnJvbSAnLi4vRGV0YWlsUGljdHVyZS9EZXRhaWxQaWN0dXJlJztcclxuaW1wb3J0IHsgRGV0YWlsSGVhZGluZyB9IGZyb20gJy4uL0RldGFpbEhlYWRpbmcvRGV0YWlsSGVhZGluZyc7XHJcbmltcG9ydCB7IERldGFpbFBhcmFncmFwaCB9IGZyb20gJy4uL0RldGFpbFBhcmFncmFwaC9EZXRhaWxQYXJhZ3JhcGgnO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbEVkaXRvclByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGRhdGE6IEJsb2Nrc0NvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxFZGl0b3IgPSAocHJvcHM6IERldGFpbEVkaXRvclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmJsb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYmxvY2stLSR7dGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8RWRpdG9yIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuZWRpdG9yKX0+XHJcbiAgICAgICAgICAgICAgICA8QmxvY2tzUmVuZGVyZXJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGg6ICh7IGNoaWxkcmVuIH0pID0+IERldGFpbFBhcmFncmFwaCh7IGNoaWxkcmVuIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiAoeyBpbWFnZSB9KSA9PiBEZXRhaWxQaWN0dXJlKHsgaW1hZ2UgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6ICh7IGNoaWxkcmVuLCBsZXZlbCB9KSA9PiBEZXRhaWxIZWFkaW5nKHsgY2hpbGRyZW4sIGxldmVsIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAoeyBjaGlsZHJlbiwgdXJsIH0pID0+IERldGFpbExpbmsoeyBjaGlsZHJlbiwgdXJsIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiAoeyBjaGlsZHJlbiB9KSA9PiBEZXRhaWxDb2RlKHsgY2hpbGRyZW4gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6ICh7IGNoaWxkcmVuLCBmb3JtYXQgfSkgPT4gRGV0YWlsTGlzdCh7IGNoaWxkcmVuLCBmb3JtYXQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlOiAoeyBjaGlsZHJlbiB9KSA9PiBEZXRhaWxRdW90ZSh7IGNoaWxkcmVuIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0VkaXRvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVkaXRvcldyYXBwZXIgfSBmcm9tICc1X3NoYXJlZC91aS9FZGl0b3JXcmFwcGVyL0VkaXRvcldyYXBwZXInO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbFBhcmFncmFwaFByb3BzIHtcclxuICAgIGxldmVsOiAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsSGVhZGluZyA9IChwcm9wczogRGV0YWlsUGFyYWdyYXBoUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsZXZlbCxcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB0YWcgPSBgaCR7bGV2ZWwgPiAwICYmIGxldmVsIDwgNyA/IGxldmVsIDogNn1gO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEVkaXRvcldyYXBwZXI+XHJcbiAgICAgICAgICAgIHsgUmVhY3QuY3JlYXRlRWxlbWVudCh0YWcsIG51bGwsIGNoaWxkcmVuKSB9XHJcbiAgICAgICAgPC9FZGl0b3JXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7QXJ0aWNsZUNhdGVnb3J5LCBBcnRpY2xlQ2F0ZWdvcnlTaXplLCBBcnRpY2xlQ2F0ZWdvcnlUeXBlLCBBcnRpY2xlVGFnLCBMaXN0VGFncyx9IGZyb20gJzRfZW50aXRpZXMvQ2F0ZWdvcnknO1xyXG5pbXBvcnQge0FydGljbGVEZXZUeXBlfSBmcm9tICc0X2VudGl0aWVzL0Rldic7XHJcbmltcG9ydCB7UG9zdEFydGljbGVUeXBlfSBmcm9tICc0X2VudGl0aWVzL1Bvc3QnO1xyXG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnNV9zaGFyZWQvdWkvRWRpdG9yL0VkaXRvcic7XHJcbmltcG9ydCB7QXBwVGhlbWV9IGZyb20gJzVfc2hhcmVkL2NvbmZpZy9UaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnNV9zaGFyZWQvdWkvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcbmltcG9ydCBncmlkIGZyb20gJzVfc2hhcmVkL2Nzcy9ncmlkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0RldGFpbEludHJvLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxJbnRyb1Byb3BzIHtcclxuICAgIHRoZW1lOiBBcHBUaGVtZTtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGRhdGE/OiBQb3N0QXJ0aWNsZVR5cGUgfCBBcnRpY2xlRGV2VHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbEludHJvID0gKHByb3BzOiBEZXRhaWxJbnRyb1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGNscy5pbnRybyxcclxuICAgICAgICAgICAgICAgICAgICBjbHNbYGludHJvLS0ke3RoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsc1snaW50cm8tY29udGVudCddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZ3JpZC5ncmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGdyaWRbJ2dyaWRfX2NvbC0yJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLnRpdGxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/Lm1haW4/LnByZXZpZXdUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YT8ubWFpbj8ucHJldmlld0NhcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZ3JpZFsnZ3JpZF9fY29sLTInXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzWyd0b29sYmFyLWNhdGVnb3J5J10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE/LmNhdGVnb3J5Py5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhPy5jYXRlZ29yeT8uZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtBcnRpY2xlQ2F0ZWdvcnlTaXplLkJJR31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzWydtYWluLWNvbnRlbnQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkLmdyaWQsIGNscy5ncmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkWydncmlkX19jb2wtMiddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPy50YWdzPy5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGRhdGE/LnRhZ3M/LmRhdGE/Lmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RUYWdzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnRhZ3MuZGF0YS5tYXAoKGl0ZW06IEFydGljbGVDYXRlZ29yeVR5cGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVUYWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVByb3A9e2RhdGE/Lm1haW4/LnByZXZpZXdJbnZlcnRlZCA/IEFwcFRoZW1lLkRBUksgOiBBcHBUaGVtZS5MSUdIVH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdFRhZ3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGdyaWRbJ2dyaWRfX2NvbC0xJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE/Lm1haW4/LmludHJvQ2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YS5tYWluLmludHJvQ2FwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsTGlua1Byb3BzIHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbExpbmsgPSAocHJvcHM6IERldGFpbExpbmtQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGhyZWY9e3VybH0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPnsgY2hpbGRyZW4gfTwvYT5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVkaXRvcldyYXBwZXIgfSBmcm9tICc1X3NoYXJlZC91aS9FZGl0b3JXcmFwcGVyL0VkaXRvcldyYXBwZXInO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbFBhcmFncmFwaFByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgICBmb3JtYXQ6ICdvcmRlcmVkJyB8ICd1bm9yZGVyZWQnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsTGlzdCA9IChwcm9wczogRGV0YWlsUGFyYWdyYXBoUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBmb3JtYXQsXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgbGlzdFRhZyA9IGZvcm1hdCA9PT0gJ29yZGVyZWQnID8gJ29sJyA6ICd1bCc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RWRpdG9yV3JhcHBlcj5cclxuICAgICAgICAgICAgeyBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RUYWcsIG51bGwsIGNoaWxkcmVuKSB9XHJcbiAgICAgICAgPC9FZGl0b3JXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFZGl0b3JXcmFwcGVyIH0gZnJvbSAnNV9zaGFyZWQvdWkvRWRpdG9yV3JhcHBlci9FZGl0b3JXcmFwcGVyJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxQYXJhZ3JhcGhQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsUGFyYWdyYXBoID0gKHByb3BzOiBEZXRhaWxQYXJhZ3JhcGhQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEVkaXRvcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxwPnsgY2hpbGRyZW4gfTwvcD5cclxuICAgICAgICA8L0VkaXRvcldyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBJbWFnZVR5cGUgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9JbWFnZSc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9EZXRhaWxQaWN0dXJlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtFZGl0b3JXcmFwcGVyfSBmcm9tIFwiNV9zaGFyZWQvdWkvRWRpdG9yV3JhcHBlci9FZGl0b3JXcmFwcGVyXCI7XHJcbmltcG9ydCB7dXNlVGhlbWV9IGZyb20gXCI1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lXCI7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsUGFyYWdyYXBoUHJvcHMge1xyXG4gICAgaW1hZ2U6IEltYWdlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbFBpY3R1cmUgPSAocHJvcHM6IERldGFpbFBhcmFncmFwaFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgICAvLyBUT0RPOiDQlNC+0LHQsNCy0LjRgtGMIHNyY3NldFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuZmlndXJlKX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlPy5mb3JtYXRzPy5sYXJnZT8udXJsXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake19fQkFTRV9VUkxfX30ke2ltYWdlPy5mb3JtYXRzPy5sYXJnZT8udXJsfWB9IGFsdD17aW1hZ2U/LmFsdGVybmF0aXZlVGV4dCB8fCAnIyd9IC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIWltYWdlPy5mb3JtYXRzPy5sYXJnZT8udXJsXHJcbiAgICAgICAgICAgICAgICAmJiBpbWFnZT8uZm9ybWF0cz8ubWVkaXVtPy51cmxcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7X19CQVNFX1VSTF9ffSR7aW1hZ2U/LmZvcm1hdHM/Lm1lZGl1bT8udXJsfWB9IGFsdD17aW1hZ2U/LmFsdGVybmF0aXZlVGV4dCB8fCAnIyd9IC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5maWdjYXB0aW9uKX0+XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPy5hbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy50ZXh0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbWFnZS5hbHRlcm5hdGl2ZVRleHQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U/LmNhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5jYXB0aW9uLCBjbHNbYGNhcHRpb24tLSR7dGhlbWV9YF0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGltYWdlLmNhcHRpb24gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9FZGl0b3JXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XHJcblxyXG4gICAgICAgIDwvZmlndXJlPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFZGl0b3JXcmFwcGVyIH0gZnJvbSAnNV9zaGFyZWQvdWkvRWRpdG9yV3JhcHBlci9FZGl0b3JXcmFwcGVyJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxQYXJhZ3JhcGhQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsUXVvdGUgPSAocHJvcHM6IERldGFpbFBhcmFncmFwaFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RWRpdG9yV3JhcHBlcj5cclxuICAgICAgICAgICAgPGJsb2NrcXVvdGU+eyBjaGlsZHJlbiB9PC9ibG9ja3F1b3RlPlxyXG4gICAgICAgIDwvRWRpdG9yV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7Rm9yd2FyZGVkUmVmLCBmb3J3YXJkUmVmLH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHtTaGFyZX0gZnJvbSAnM19mZWF0dXJlcy9TaGFyZSc7XHJcbmltcG9ydCBncmlkIGZyb20gJzVfc2hhcmVkL2Nzcy9ncmlkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtEYXRlSW5mb30gZnJvbSAnNV9zaGFyZWQvdWkvRGF0ZUluZm8vRGF0ZUluZm8nO1xyXG5pbXBvcnQgSWNvbiBmcm9tICc1X3NoYXJlZC9hc3NldHMvaWNvbnMvYXJyb3ctc2Nyb2xsLnN2Zyc7XHJcbmltcG9ydCB7QXJ0aWNsZUNhdGVnb3J5LCBBcnRpY2xlQ2F0ZWdvcnlTaXplfSBmcm9tICc0X2VudGl0aWVzL0NhdGVnb3J5JztcclxuaW1wb3J0IHtBcHBUaGVtZX0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7UG9zdEFydGljbGVUeXBlfSBmcm9tICc0X2VudGl0aWVzL1Bvc3QnO1xyXG5pbXBvcnQge0FydGljbGVEZXZUeXBlfSBmcm9tICc0X2VudGl0aWVzL0Rldic7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9EZXRhaWxUb29sYmFyLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxUb29sYmFyUHJvcHMge1xyXG4gICAgdGhlbWU6IEFwcFRoZW1lO1xyXG4gICAgaXNTdGlja3k6IGJvb2xlYW47XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBkYXRhOiBQb3N0QXJ0aWNsZVR5cGUgfCBBcnRpY2xlRGV2VHlwZSB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbFRvb2xiYXIgPSBmb3J3YXJkUmVmKChwcm9wczogRGV0YWlsVG9vbGJhclByb3BzLCByZWY6IEZvcndhcmRlZFJlZjxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIGlzU3RpY2t5LFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgIGlkPVwic2Nyb2xsLWFuY2hvclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGNscy5mb290ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBbY2xzWydmb290ZXItLWZpeGVkJ11dOiBpc1N0aWNreSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgZm9vdGVyLS0ke3RoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZ3JpZC5ncmlkLCBjbHNbJ2Zvb3Rlci1ncmlkJ10pfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkWydncmlkX19jb2wtMSddfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE/LnB1Ymxpc2hlZEF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2RhdGE/LnB1Ymxpc2hlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMudGltZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFsnZ3JpZF9fY29sLTInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtpc1N0aWNreX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNzY3JvbGwtYW5jaG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5idXR0b24pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzLmljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsc1tgaWNvbi0tJHt0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXshaXNTdGlja3l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuY2FwdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy50aXRsZUNhcHRpb24pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YT8udGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPy5jYXRlZ29yeT8uZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVQcm9wPXtBcHBUaGVtZS5EQVJLfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhPy5jYXRlZ29yeT8uZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17QXJ0aWNsZUNhdGVnb3J5U2l6ZS5TTUFMTH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkWydncmlkX19jb2wtMSddfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHNbJ3NoYXJlLWNvbHVtbiddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaGFyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5zaGFyZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVByb3A9e2lzU3RpY2t5ID8gQXBwVGhlbWUuREFSSyA6IHRoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcbiIsImltcG9ydCB7XHJcbiAgICBWS1NoYXJlQnV0dG9uLFxyXG4gICAgVHdpdHRlclNoYXJlQnV0dG9uLFxyXG4gICAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcclxuICAgIFRlbGVncmFtU2hhcmVCdXR0b24sXHJcbn0gZnJvbSAncmVhY3Qtc2hhcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgQ29udHJvbHMgfSBmcm9tICc1X3NoYXJlZC91aS9Db250cm9scy9Db250cm9scyc7XHJcbmltcG9ydCB7IEljb25LZXksIEljb25Tb2NpYWwgfSBmcm9tICc1X3NoYXJlZC91aS9JY29uU29jaWFsL0ljb25Tb2NpYWwnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vU2hhcmUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge3VzZVRoZW1lfSBmcm9tIFwiNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaGVtZVwiO1xyXG5cclxuaW50ZXJmYWNlIFNoYXJlUHJvcHMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgdGhlbWVQcm9wPzogQXBwVGhlbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaGFyZSA9IChwcm9wczogU2hhcmVQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHRoZW1lUHJvcCxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG5cclxuICAgIGNvbnN0IHRoZW1lTW9kZSA9IHRoZW1lUHJvcCB8fCB0aGVtZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5ibG9jaywgY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMudGl0bGUpfT5cclxuICAgICAgICAgICAgICAgIHsgdCgnc2hhcmUnKSB9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPENvbnRyb2xzPlxyXG4gICAgICAgICAgICAgICAgPFZLU2hhcmVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB1cmw9XCJ2ay5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uU3R5bGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYnV0dG9uLCBjbHNbYGJ1dHRvbi0tJHt0aGVtZU1vZGV9YF0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uU29jaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25LZXk9e0ljb25LZXkuVkt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuaWNvbiwgY2xzW2BpY29uLS0ke3RoZW1lTW9kZX1gXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvVktTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxUd2l0dGVyU2hhcmVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB1cmw9XCJ0d2l0dGVyLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRCdXR0b25TdHlsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5idXR0b24sIGNsc1tgYnV0dG9uLS0ke3RoZW1lTW9kZX1gXSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25Tb2NpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbktleT17SWNvbktleS5YfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmljb24sIGNsc1tgaWNvbi0tJHt0aGVtZU1vZGV9YF0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1R3aXR0ZXJTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPVwiZmIuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICByZXNldEJ1dHRvblN0eWxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJ1dHRvbiwgY2xzW2BidXR0b24tLSR7dGhlbWVNb2RlfWBdKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblNvY2lhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uS2V5PXtJY29uS2V5LkZCfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmljb24sIGNsc1tgaWNvbi0tJHt0aGVtZU1vZGV9YF0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8VGVsZWdyYW1TaGFyZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHVybD1cInRnLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRCdXR0b25TdHlsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5idXR0b24sIGNsc1tgYnV0dG9uLS0ke3RoZW1lTW9kZX1gXSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25Tb2NpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbktleT17SWNvbktleS5UR31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5pY29uLCBjbHNbYGljb24tLSR7dGhlbWVNb2RlfWBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9UZWxlZ3JhbVNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbnRyb2xzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB1c2VUaW1lIGZyb20gJzVfc2hhcmVkL2xpYnMvaG9va3MvdXNlVGltZSc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9EYXRlSW5mby5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgRGF0ZVByb3BzIHtcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERhdGVJbmZvID0gKHByb3BzOiBEYXRlUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRlLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgICBjb25zdCBsYW5nID0gaTE4bi5sYW5ndWFnZTtcclxuICAgIGNvbnN0IHRpbWUgPSB1c2VUaW1lKGRhdGUsIGxhbmcpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRpbWUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5ibG9jaywgY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgICAgIHsgdGltZSB9XHJcbiAgICAgICAgPC90aW1lPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0VkaXRvcldyYXBwZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRvcldyYXBwZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdG9yV3JhcHBlciA9IChwcm9wczogRWRpdG9yV3JhcHBlclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5ibG9jayl9PlxyXG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaGVtZSc7XHJcbmltcG9ydCB7IEFwcFRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9FZGl0b3IubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIEVkaXRvclByb3BzIHtcclxuICAgIGRhdGE/OiBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcclxuICAgIHRoZW1lUHJvcD86IEFwcFRoZW1lO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdG9yID0gKHByb3BzOiBFZGl0b3JQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgICAgdGhlbWVQcm9wLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5lZGl0b3IsIGNsc1tgZWRpdG9yLS0ke3RoZW1lUHJvcCB8fCB0aGVtZX1gXSwgY2xhc3NOYW1lKX1cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcclxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmVkaXRvciwgY2xzW2BlZGl0b3ItLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLCBjbGFzc05hbWUpfT5cclxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsQ29udGVudC1EZXRhaWxDb250ZW50LW1vZHVsZV9fYmxvY2stQnMyM0kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsQ29udGVudC1EZXRhaWxDb250ZW50LW1vZHVsZV9fcGljdHVyZS1kTHpFXyB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdHJhbnNpdGlvbjogMC4zcyBvcGFjaXR5O1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsQ29udGVudC1EZXRhaWxDb250ZW50LW1vZHVsZV9fcGljdHVyZS1kTHpFX1toaWRkZW5dIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsQ29udGVudC1EZXRhaWxDb250ZW50LW1vZHVsZV9fcGljdHVyZS1kTHpFXyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxDb250ZW50LURldGFpbENvbnRlbnQtbW9kdWxlX19pbnRyby1tYWluLVJwYURvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxDb250ZW50L0RldGFpbENvbnRlbnQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDSjtBQUNJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFBUjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7QUFESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpY3R1cmUge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3Mgb3BhY2l0eTtcXHJcXG5cXHJcXG4gICAgJltoaWRkZW5dIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbnRyby1tYWluIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJibG9ja1wiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxDb250ZW50LURldGFpbENvbnRlbnQtbW9kdWxlX19ibG9jay1CczIzSWAsXG5cdFwicGljdHVyZVwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxDb250ZW50LURldGFpbENvbnRlbnQtbW9kdWxlX19waWN0dXJlLWRMekVfYCxcblx0XCJpbnRyby1tYWluXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX2ludHJvLW1haW4tUnBhRG9gXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsRWRpdG9yLURldGFpbEVkaXRvci1tb2R1bGVfX2Jsb2NrLU9Ba3NKIHtcbiAgcGFkZGluZzogNjBweCA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsRWRpdG9yLURldGFpbEVkaXRvci1tb2R1bGVfX2Jsb2NrLS10aGVtZS1saWdodC05VVN2WiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxFZGl0b3ItRGV0YWlsRWRpdG9yLW1vZHVsZV9fYmxvY2stLXRoZW1lLWRhcmstVWo3MDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbEVkaXRvci9EZXRhaWxFZGl0b3IubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNJLHFDQUFBO0FBQ1I7QUFFSTtFQUNJLG9DQUFBO0FBQVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEVkaXRvci1EZXRhaWxFZGl0b3ItbW9kdWxlX19ibG9jay1PQWtzSmAsXG5cdFwiYmxvY2stLXRoZW1lLWxpZ2h0XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEVkaXRvci1EZXRhaWxFZGl0b3ItbW9kdWxlX19ibG9jay0tdGhlbWUtbGlnaHQtOVVTdlpgLFxuXHRcImJsb2NrLS10aGVtZS1kYXJrXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEVkaXRvci1EZXRhaWxFZGl0b3ItbW9kdWxlX19ibG9jay0tdGhlbWUtZGFyay1VajcwMWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLXlPRDhLIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9faW50cm8tLXRoZW1lLWxpZ2h0LUpqSHFnIHtcbiAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLS10aGVtZS1kYXJrLXpBOU1CIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9faW50cm8tY29udGVudC1WMXdENCB7XG4gIGdhcDogNjBweDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxODVweCAwIDE1MHB4O1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX3Rvb2xiYXItY2F0ZWdvcnktZ2dHdVoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX3RpdGxlLXNnTXBRIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgZm9udC1zaXplOiAxMDZweDtcbiAgZm9udC13ZWlnaHQ6IDM1MDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsSW50cm8vRGV0YWlsSW50cm8ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDSSwwQkFBQTtBQUNSO0FBRUk7RUFDSSwwQkFBQTtBQUFSOztBQUlBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW50cm8ge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbnRyby1jb250ZW50IHtcXHJcXG4gICAgZ2FwOiA2MHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDE4NXB4IDAgMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyLWNhdGVnb3J5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG4gICAgZm9udC1zaXplOiAxMDZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaW50cm9cIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19pbnRyby15T0Q4S2AsXG5cdFwiaW50cm8tLXRoZW1lLWxpZ2h0XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9faW50cm8tLXRoZW1lLWxpZ2h0LUpqSHFnYCxcblx0XCJpbnRyby0tdGhlbWUtZGFya1wiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLS10aGVtZS1kYXJrLXpBOU1CYCxcblx0XCJpbnRyby1jb250ZW50XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9faW50cm8tY29udGVudC1WMXdENGAsXG5cdFwidG9vbGJhci1jYXRlZ29yeVwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX3Rvb2xiYXItY2F0ZWdvcnktZ2dHdVpgLFxuXHRcInRpdGxlXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9fdGl0bGUtc2dNcFFgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fZmlndXJlLUlrRFhmIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTkyMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX19maWd1cmUtSWtEWGYgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX19maWdjYXB0aW9uLXFPUUlqIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX3RleHQtZHNhRTAge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2NhcHRpb24tYktQTk8ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX19jYXB0aW9uLS10aGVtZS1saWdodC1ybjFJMCB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXNlY29uZGFyeSk7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX19jYXB0aW9uLS10aGVtZS1kYXJrLVNVUEJEIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXNlY29uZGFyeSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFBpY3R1cmUvRGV0YWlsUGljdHVyZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKO0FBRUk7RUFDSSw0QkFBQTtBQUFSO0FBR0k7RUFDSSw2QkFBQTtBQURSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5maWd1cmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWF4LXdpZHRoOiAxOTIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmlnY2FwdGlvbiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWxpZ2h0IHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXNlY29uZGFyeSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtc2Vjb25kYXJ5KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmaWd1cmVcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fZmlndXJlLUlrRFhmYCxcblx0XCJmaWdjYXB0aW9uXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2ZpZ2NhcHRpb24tcU9RSWpgLFxuXHRcInRleHRcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fdGV4dC1kc2FFMGAsXG5cdFwiY2FwdGlvblwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX19jYXB0aW9uLWJLUE5PYCxcblx0XCJjYXB0aW9uLS10aGVtZS1saWdodFwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX19jYXB0aW9uLS10aGVtZS1saWdodC1ybjFJMGAsXG5cdFwiY2FwdGlvbi0tdGhlbWUtZGFya1wiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX19jYXB0aW9uLS10aGVtZS1kYXJrLVNVUEJEYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci1vTF9pVSB7XG4gIHRvcDogLTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDkwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdHJhbnNpdGlvbjogMC4zcyBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLS10aGVtZS1saWdodC1QelV4XyB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLS10aGVtZS1kYXJrLXdrNHE0IHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLS1maXhlZC1zWWwwdSB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZGFyayk7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci1ncmlkLU81TnNVIHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fdGl0bGVDYXB0aW9uLWlQS2JnIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19idXR0b24tQnZwNlUge1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fYnV0dG9uLUJ2cDZVW2hpZGRlbl0ge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2NhcHRpb24tUGNMZzQge1xuICBnYXA6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19jYXB0aW9uLVBjTGc0W2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2ljb24taklTeGYge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2ljb24tLXRoZW1lLWxpZ2h0LVpjRVhqIHtcbiAgZmlsbDogdmFyKC0tZGFyay1wcmltYXJ5KTtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2ljb24tLXRoZW1lLWRhcmstTklqU2Qge1xuICBmaWxsOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fc2hhcmUtTGdaWUEge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxUb29sYmFyL0RldGFpbFRvb2xiYXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUFDSjtBQUNJO0VBQ0ksMEJBQUE7QUFDUjtBQUVJO0VBQ0ksMkJBQUE7QUFBUjtBQUdJO0VBQ0ksMkJBQUE7RUFDQSxnQ0FBQTtBQURSOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtBQUZKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQUZKO0FBSUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBTUE7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSEo7QUFLSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUhSOztBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSko7QUFPSTtFQUNJLHlCQUFBO0FBTFI7QUFRSTtFQUNJLDBCQUFBO0FBTlI7O0FBVUE7RUFDSSx5QkFBQTtBQVBKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIge1xcclxcbiAgICB0b3A6IC0xcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA5MHB4O1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgYmFja2dyb3VuZC1jb2xvcjtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tZml4ZWQge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZGFyayk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1ncmlkIHtcXHJcXG4gICAgbWluLWhlaWdodDogNjBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlQ2FwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICZbaGlkZGVuXSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FwdGlvbiB7XFxyXFxuICAgIGdhcDogMjVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgJltoaWRkZW5dIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICB3aWR0aDogNDRweDtcXHJcXG4gICAgaGVpZ2h0OiA0NHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG5cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGZpbGw6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zaGFyZSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImZvb3RlclwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19mb290ZXItb0xfaVVgLFxuXHRcImZvb3Rlci0tdGhlbWUtbGlnaHRcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLS10aGVtZS1saWdodC1QelV4X2AsXG5cdFwiZm9vdGVyLS10aGVtZS1kYXJrXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci0tdGhlbWUtZGFyay13azRxNGAsXG5cdFwiZm9vdGVyLS1maXhlZFwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19mb290ZXItLWZpeGVkLXNZbDB1YCxcblx0XCJmb290ZXItZ3JpZFwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19mb290ZXItZ3JpZC1PNU5zVWAsXG5cdFwidGl0bGVDYXB0aW9uXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX3RpdGxlQ2FwdGlvbi1pUEtiZ2AsXG5cdFwiYnV0dG9uXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2J1dHRvbi1CdnA2VWAsXG5cdFwiY2FwdGlvblwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19jYXB0aW9uLVBjTGc0YCxcblx0XCJpY29uXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2ljb24taklTeGZgLFxuXHRcImljb24tLXRoZW1lLWxpZ2h0XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2ljb24tLXRoZW1lLWxpZ2h0LVpjRVhqYCxcblx0XCJpY29uLS10aGVtZS1kYXJrXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2ljb24tLXRoZW1lLWRhcmstTklqU2RgLFxuXHRcInNoYXJlXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX3NoYXJlLUxnWllBYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2Jsb2NrLXdPYTIwIHtcbiAgZ2FwOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX190aXRsZS1UZndWVSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fYnV0dG9uLXhoM1lMIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogODRweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19idXR0b24tLXRoZW1lLWxpZ2h0LWpJbUdRIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xufVxuLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fYnV0dG9uLS10aGVtZS1kYXJrLVN6RVZnIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcbn1cbi5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2J1dHRvbi14aDNZTDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9faWNvbi1iWEVWZCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbn1cbi5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tLXRoZW1lLWxpZ2h0LWJOM0RaIHtcbiAgZmlsbDogdmFyKC0tZGFyay1wcmltYXJ5KTtcbn1cbi5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tLXRoZW1lLWRhcmstSEU5VFgge1xuICBmaWxsOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy8zX2ZlYXR1cmVzL1NoYXJlL3VpL1NoYXJlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLGlDQUFBO0FBQ1I7QUFFSTtFQUNJLGtDQUFBO0FBQVI7QUFHSTtFQUNJLFlBQUE7QUFEUjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBRko7QUFJSTtFQUNJLHlCQUFBO0FBRlI7QUFLSTtFQUNJLDBCQUFBO0FBSFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiA4NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQ4cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGZpbGw6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2Jsb2NrLXdPYTIwYCxcblx0XCJ0aXRsZVwiOiBgc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX190aXRsZS1UZndWVWAsXG5cdFwiYnV0dG9uXCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2J1dHRvbi14aDNZTGAsXG5cdFwiYnV0dG9uLS10aGVtZS1saWdodFwiOiBgc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19idXR0b24tLXRoZW1lLWxpZ2h0LWpJbUdRYCxcblx0XCJidXR0b24tLXRoZW1lLWRhcmtcIjogYHNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fYnV0dG9uLS10aGVtZS1kYXJrLVN6RVZnYCxcblx0XCJpY29uXCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tYlhFVmRgLFxuXHRcImljb24tLXRoZW1lLWxpZ2h0XCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tLXRoZW1lLWxpZ2h0LWJOM0RaYCxcblx0XCJpY29uLS10aGVtZS1kYXJrXCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tLXRoZW1lLWRhcmstSEU5VFhgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy01X3NoYXJlZC11aS1EYXRlSW5mby1EYXRlSW5mby1tb2R1bGVfX2Jsb2NrLWxyZnh6IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzVfc2hhcmVkL3VpL0RhdGVJbmZvL0RhdGVJbmZvLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZUFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ibG9jayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy01X3NoYXJlZC11aS1EYXRlSW5mby1EYXRlSW5mby1tb2R1bGVfX2Jsb2NrLWxyZnh6YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtNV9zaGFyZWQtdWktRWRpdG9yV3JhcHBlci1FZGl0b3JXcmFwcGVyLW1vZHVsZV9fYmxvY2stSmFOVU4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yV3JhcHBlci9FZGl0b3JXcmFwcGVyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ibG9jayB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy01X3NoYXJlZC11aS1FZGl0b3JXcmFwcGVyLUVkaXRvcldyYXBwZXItbW9kdWxlX19ibG9jay1KYU5VTmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgPiAqIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIGIsIC5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBzdHJvbmcge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIHByZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgdWwsIC5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBvbCB7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBvbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBibG9ja3F1b3RlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBtYXJnaW46IDFlbSAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItLXRoZW1lLWxpZ2h0LVp4X3hOIHByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLS10aGVtZS1saWdodC1aeF94TiBibG9ja3F1b3RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWJsdWUpO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLS10aGVtZS1kYXJrLWt0eklaIHByZSB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZGFyayk7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItLXRoZW1lLWRhcmsta3R6SVogYmxvY2txdW90ZSB7XG4gIGNvbG9yOiAjZjRmNGY0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tYmx1ZSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yL0VkaXRvci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxvQkFBQTtBQUNSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBR0k7RUFDSSxjQUFBO0VBQ0Esa0NBQUE7QUFEUjtBQUdRO0VBQ0kscUJBQUE7QUFEWjtBQUtJO0VBQ0ksZ0JBQUE7QUFIUjtBQU1JO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUpSO0FBT0k7RUFDSSwyQkFBQTtBQUxSO0FBUUk7RUFDSSxxQkFBQTtBQU5SO0FBU0k7RUFDSSx3QkFBQTtBQVBSO0FBVUk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUlI7QUFZUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQVZaO0FBYVE7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0FBWFo7QUFnQlE7RUFDSSwyQkFBQTtFQUNBLGdDQUFBO0FBZFo7QUFpQlE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQWZaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5lZGl0b3Ige1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuXFxyXFxuICAgICYgPiAqIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBiLCBzdHJvbmcge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwcmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bCwgb2wge1xcclxcbiAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBvbCB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYmxvY2txdW90ZSB7XFxyXFxuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBwcmUge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBibG9ja3F1b3RlIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIHByZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWRhcmspO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYmxvY2txdW90ZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmNGY0ZjQ7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xcclxcblxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJlZGl0b3JcIjogYHNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhYCxcblx0XCJlZGl0b3ItLXRoZW1lLWxpZ2h0XCI6IGBzcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci0tdGhlbWUtbGlnaHQtWnhfeE5gLFxuXHRcImVkaXRvci0tdGhlbWUtZGFya1wiOiBgc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItLXRoZW1lLWRhcmsta3R6SVpgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsUGFnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsQ29udGVudC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbENvbnRlbnQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsQ29udGVudC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbEVkaXRvci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbEVkaXRvci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxFZGl0b3IubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxJbnRyby5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbEludHJvLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbEludHJvLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsUGljdHVyZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbFBpY3R1cmUubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsUGljdHVyZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbFRvb2xiYXIubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxUb29sYmFyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbFRvb2xiYXIubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TaGFyZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NoYXJlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NoYXJlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGF0ZUluZm8ubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EYXRlSW5mby5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EYXRlSW5mby5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0VkaXRvcldyYXBwZXIubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FZGl0b3JXcmFwcGVyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0VkaXRvcldyYXBwZXIubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FZGl0b3IubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FZGl0b3IubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRWRpdG9yLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIkRldGFpbENvbnRlbnQiLCJTaGFyZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RpY2t5T2JzZXJ2ZXIiLCJyZWYiLCJpc1N0aWNreSIsInNldElzU3RpY2t5Iiwib2JzZXJ2ZXIiLCJvcHRpb25zIiwicm9vdCIsImRvY3VtZW50Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImNhbGxiYWNrRXZlbnQiLCJfcmVmIiwiZWwiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImN1cnJlbnQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwidXNlRm9ybWF0dGVkRGF0ZSIsInRpbWVTdGFtcCIsImxhbmciLCJmb3JtYXR0ZWREYXRlIiwic2V0Rm9ybWF0dGVkRGF0ZSIsImRhdGUiLCJEYXRlIiwiTnVtYmVyIiwiaXNOYU4iLCJnZXRUaW1lIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZm9ybWF0dGVkU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2xpY2UiLCJjbGFzc05hbWVzIiwidXNlUGFyYW1zIiwidXNlRmV0Y2hEZXZCeUlkIiwidXNlRmV0Y2hQb3N0QnlJZCIsInVzZUZldGNoUGhvdG9CeUlkIiwiTWFpbiIsIkNvbnRlbnRLZXlUeXBlIiwiY2xzIiwianN4IiwiX2pzeCIsImZldGNoTWV0aG9kcyIsIlBPU1QiLCJERVYiLCJQSE9UTyIsIkRldGFpbFBhZ2UiLCJtb2RlIiwic2x1ZyIsImRhdGEiLCJpc0xvYWRpbmciLCJjbGFzc05hbWUiLCJtYWluIiwiY2hpbGRyZW4iLCJFZGl0b3JXcmFwcGVyIiwiRGV0YWlsQ29kZSIsInByb3BzIiwidXNlVGhlbWUiLCJBcHBUaGVtZSIsIkNvbnRhaW5lciIsIkRldGFpbEludHJvIiwiRGV0YWlsRWRpdG9yIiwiRGV0YWlsVG9vbGJhciIsImpzeHMiLCJfanN4cyIsInRoZW1lIiwiYmxvY2tUaGVtZSIsInNldEJsb2NrVGhlbWUiLCJwcmV2aWV3SW52ZXJ0ZWQiLCJ1bmRlZmluZWQiLCJEQVJLIiwiTElHSFQiLCJibG9jayIsImhpZGRlbiIsInBpY3R1cmUiLCJwcmV2aWV3IiwidXJsIiwic3JjIiwiX19CQVNFX1VSTF9fIiwiYWx0IiwiY29udGVudCIsIkJsb2Nrc1JlbmRlcmVyIiwiRWRpdG9yIiwiRGV0YWlsTGluayIsIkRldGFpbExpc3QiLCJEZXRhaWxRdW90ZSIsIkRldGFpbFBpY3R1cmUiLCJEZXRhaWxIZWFkaW5nIiwiRGV0YWlsUGFyYWdyYXBoIiwiZWRpdG9yIiwiYmxvY2tzIiwicGFyYWdyYXBoIiwiaW1hZ2UiLCJfcmVmMiIsImhlYWRpbmciLCJfcmVmMyIsImxldmVsIiwibGluayIsIl9yZWY0IiwiY29kZSIsIl9yZWY1IiwibGlzdCIsIl9yZWY2IiwiZm9ybWF0IiwicXVvdGUiLCJfcmVmNyIsIlJlYWN0IiwidGFnIiwiY3JlYXRlRWxlbWVudCIsIkFydGljbGVDYXRlZ29yeSIsIkFydGljbGVDYXRlZ29yeVNpemUiLCJBcnRpY2xlVGFnIiwiTGlzdFRhZ3MiLCJncmlkIiwiaW50cm8iLCJ0aXRsZSIsInByZXZpZXdUaXRsZSIsInByZXZpZXdDYXB0aW9uIiwiY2F0ZWdvcnkiLCJzaXplIiwiQklHIiwidGFncyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJ0aGVtZVByb3AiLCJpZCIsImludHJvQ2FwdGlvbiIsImhyZWYiLCJyZWwiLCJ0YXJnZXQiLCJsaXN0VGFnIiwiZmlndXJlIiwiZm9ybWF0cyIsImxhcmdlIiwiYWx0ZXJuYXRpdmVUZXh0IiwibWVkaXVtIiwiZmlnY2FwdGlvbiIsInRleHQiLCJjYXB0aW9uIiwiZm9yd2FyZFJlZiIsIkRhdGVJbmZvIiwiSWNvbiIsImZvb3RlciIsInB1Ymxpc2hlZEF0IiwidGltZSIsImJ1dHRvbiIsImljb24iLCJ0aXRsZUNhcHRpb24iLCJTTUFMTCIsInNoYXJlIiwiVktTaGFyZUJ1dHRvbiIsIlR3aXR0ZXJTaGFyZUJ1dHRvbiIsIkZhY2Vib29rU2hhcmVCdXR0b24iLCJUZWxlZ3JhbVNoYXJlQnV0dG9uIiwidXNlVHJhbnNsYXRpb24iLCJDb250cm9scyIsIkljb25LZXkiLCJJY29uU29jaWFsIiwidCIsInRoZW1lTW9kZSIsInJlc2V0QnV0dG9uU3R5bGUiLCJpY29uS2V5IiwiVksiLCJYIiwiRkIiLCJURyIsInVzZVRpbWUiLCJpMThuIiwibGFuZ3VhZ2UiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=