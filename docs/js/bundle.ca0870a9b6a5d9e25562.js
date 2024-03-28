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

/***/ "./src/5_shared/libs/hooks/useImageAlt.ts":
/*!************************************************!*\
  !*** ./src/5_shared/libs/hooks/useImageAlt.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useImageAlt: () => (/* binding */ useImageAlt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useImageAlt = data => {
  const [altText, setAltText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('#');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!data) return;
    let resultString = '';
    if (data.caption) resultString = data.caption;
    if (data.alternativeText) {
      if (resultString) {
        resultString += ` — ${data.alternativeText}`;
      } else {
        resultString = data.alternativeText;
      }
    }
    setAltText(resultString);
  }, [data]);
  return altText;
};


/***/ }),

/***/ "./src/5_shared/libs/hooks/useScrollPercent.ts":
/*!*****************************************************!*\
  !*** ./src/5_shared/libs/hooks/useScrollPercent.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useScrollPercent: () => (/* binding */ useScrollPercent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const calcOpacity = (offset, height, ratio) => {
  if (offset >= height) return 1;
  const offsetFloor = Math.floor(offset);
  const offsetHeight = Math.floor(height * ratio);
  return offsetFloor / (offsetHeight - 1);
};
const useScrollPercent = ratio => {
  const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const updatePosition = () => {
      const opacity = calcOpacity(window.scrollY, window.innerHeight, ratio);
      setScrollPosition(1 - opacity);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return scrollPosition;
};

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
/* harmony import */ var _5_shared_libs_hooks_useScrollPercent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/libs/hooks/useScrollPercent */ "./src/5_shared/libs/hooks/useScrollPercent.ts");
/* harmony import */ var _DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DetailContent.module.scss */ "./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss");
/* harmony import */ var _DetailIntro_DetailIntro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DetailIntro/DetailIntro */ "./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.tsx");
/* harmony import */ var _DetailEditor_DetailEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DetailEditor/DetailEditor */ "./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.tsx");
/* harmony import */ var _DetailToolbar_DetailToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DetailToolbar/DetailToolbar */ "./src/3_features/DetailContent/ui/DetailToolbar/DetailToolbar.tsx");
/* harmony import */ var _5_shared_libs_decorators_FancyboxDecorator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! 5_shared/libs/decorators/FancyboxDecorator */ "./src/5_shared/libs/decorators/FancyboxDecorator.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













const DetailContent = props => {
  const {
    data,
    className,
    isLoading
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  const opacity = (0,_5_shared_libs_hooks_useScrollPercent__WEBPACK_IMPORTED_MODULE_5__.useScrollPercent)(0.75);
  const [blockTheme, setBlockTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(theme);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (data?.main?.previewInverted !== undefined) {
      setBlockTheme(data.main.previewInverted ? _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.DARK : _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.LIGHT);
    }
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].block, _DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`block--${theme}`], className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("picture", {
      style: {
        opacity
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].picture),
      children: data?.main?.preview?.data?.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
        src: `${"https://api.egor-badulin.ru"}${data?.main?.preview?.data?.url}`,
        alt: "#"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_DetailIntro_DetailIntro__WEBPACK_IMPORTED_MODULE_7__.DetailIntro, {
      data: data,
      theme: blockTheme,
      isLoading: isLoading
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['intro-main']),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_DetailToolbar_DetailToolbar__WEBPACK_IMPORTED_MODULE_9__.DetailToolbar, {
          data: data,
          theme: blockTheme,
          isLoading: isLoading
        })
      }), data?.main?.content && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailContent_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['container-editor']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_5_shared_libs_decorators_FancyboxDecorator__WEBPACK_IMPORTED_MODULE_10__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_DetailEditor_DetailEditor__WEBPACK_IMPORTED_MODULE_8__.DetailEditor, {
            isLoading: isLoading,
            data: data.main.content
          })
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
/* harmony import */ var _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/ui/Skeleton/Skeleton */ "./src/5_shared/ui/Skeleton/Skeleton.tsx");
/* harmony import */ var _DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DetailEditor.module.scss */ "./src/3_features/DetailContent/ui/DetailEditor/DetailEditor.module.scss");
/* harmony import */ var _DetailLink_DetailLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DetailLink/DetailLink */ "./src/3_features/DetailContent/ui/DetailLink/DetailLink.tsx");
/* harmony import */ var _DetailCode_DetailCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DetailCode/DetailCode */ "./src/3_features/DetailContent/ui/DetailCode/DetailCode.tsx");
/* harmony import */ var _DetailList_DetailList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DetailList/DetailList */ "./src/3_features/DetailContent/ui/DetailList/DetailList.tsx");
/* harmony import */ var _DetailQuote_DetailQuote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DetailQuote/DetailQuote */ "./src/3_features/DetailContent/ui/DetailQuote/DetailQuote.tsx");
/* harmony import */ var _DetailPicture_DetailPicture__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DetailPicture/DetailPicture */ "./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.tsx");
/* harmony import */ var _DetailHeading_DetailHeading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../DetailHeading/DetailHeading */ "./src/3_features/DetailContent/ui/DetailHeading/DetailHeading.tsx");
/* harmony import */ var _DetailParagraph_DetailParagraph__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../DetailParagraph/DetailParagraph */ "./src/3_features/DetailContent/ui/DetailParagraph/DetailParagraph.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");















const DetailEditor = props => {
  const {
    data,
    isLoading,
    className
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].block, _DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"][`block--${theme}`], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_5_shared_ui_Editor_Editor__WEBPACK_IMPORTED_MODULE_2__.Editor, {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailEditor_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].editor),
      children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_DetailParagraph_DetailParagraph__WEBPACK_IMPORTED_MODULE_12__.DetailParagraph, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
          strings: 40,
          mode: _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_4__.SkeletonMode.LINES
        })
      }), !isLoading && data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_strapi_blocks_react_renderer__WEBPACK_IMPORTED_MODULE_1__.BlocksRenderer, {
        content: data,
        blocks: {
          paragraph: _ref => {
            let {
              children
            } = _ref;
            return (0,_DetailParagraph_DetailParagraph__WEBPACK_IMPORTED_MODULE_12__.DetailParagraph)({
              children
            });
          },
          // @ts-ignore
          image: _ref2 => {
            let {
              image
            } = _ref2;
            return (0,_DetailPicture_DetailPicture__WEBPACK_IMPORTED_MODULE_10__.DetailPicture)({
              image
            });
          },
          heading: _ref3 => {
            let {
              children,
              level
            } = _ref3;
            return (0,_DetailHeading_DetailHeading__WEBPACK_IMPORTED_MODULE_11__.DetailHeading)({
              children,
              level
            });
          },
          link: _ref4 => {
            let {
              children,
              url
            } = _ref4;
            return (0,_DetailLink_DetailLink__WEBPACK_IMPORTED_MODULE_6__.DetailLink)({
              children,
              url
            });
          },
          code: _ref5 => {
            let {
              children
            } = _ref5;
            return (0,_DetailCode_DetailCode__WEBPACK_IMPORTED_MODULE_7__.DetailCode)({
              children
            });
          },
          list: _ref6 => {
            let {
              children,
              format
            } = _ref6;
            return (0,_DetailList_DetailList__WEBPACK_IMPORTED_MODULE_8__.DetailList)({
              children,
              format
            });
          },
          quote: _ref7 => {
            let {
              children
            } = _ref7;
            return (0,_DetailQuote_DetailQuote__WEBPACK_IMPORTED_MODULE_9__.DetailQuote)({
              children
            });
          }
        }
      })]
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
/* harmony import */ var _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/ui/Skeleton/Skeleton */ "./src/5_shared/ui/Skeleton/Skeleton.tsx");
/* harmony import */ var _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/config/ThemeContext */ "./src/5_shared/config/ThemeContext.ts");
/* harmony import */ var _5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/ui/Container/Container */ "./src/5_shared/ui/Container/Container.tsx");
/* harmony import */ var _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/css/grid.module.scss */ "./src/5_shared/css/grid.module.scss");
/* harmony import */ var _5_shared_libs_hooks_useScrollPercent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! 5_shared/libs/hooks/useScrollPercent */ "./src/5_shared/libs/hooks/useScrollPercent.ts");
/* harmony import */ var _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DetailIntro.module.scss */ "./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











const DetailIntro = props => {
  const {
    data,
    theme,
    isLoading,
    className
  } = props;
  const opacity = (0,_5_shared_libs_hooks_useScrollPercent__WEBPACK_IMPORTED_MODULE_6__.useScrollPercent)(1);
  const tagArray = data?.tags?.data;
  const category = data?.category?.data;
  const isInverted = data?.main?.previewInverted;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].intro, _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"][`intro--${theme}`], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_5_shared_ui_Container_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        hidden: opacity < 0,
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['intro-content']),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].grid),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-lap-3'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-mob-4'], _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['column-title']),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h1", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].title),
              children: [!isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                children: [data?.main?.previewTitle, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), data?.main?.previewCaption]
              }), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                strings: 2,
                mode: _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_2__.SkeletonMode.LINES
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-lap-1'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-mob-4'], _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['column-cat']),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['toolbar-category']),
              children: category && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ArticleCategory, {
                data: category,
                themeProp: theme,
                mode: _4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ArticleCategoryMode.STATIC
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['main-content']),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].grid, _DetailIntro_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].grid),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"]['grid__col-mob-4']),
              children: tagArray && tagArray?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ListTags, {
                children: tagArray.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_1__.ArticleTag, {
                  data: item,
                  themeProp: isInverted ? _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.DARK : _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.LIGHT
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
/* harmony import */ var _5_shared_libs_hooks_useImageAlt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/libs/hooks/useImageAlt */ "./src/5_shared/libs/hooks/useImageAlt.ts");
/* harmony import */ var _5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/ui/EditorWrapper/EditorWrapper */ "./src/5_shared/ui/EditorWrapper/EditorWrapper.tsx");
/* harmony import */ var _DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DetailPicture.module.scss */ "./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const DetailPicture = props => {
  const {
    image,
    galleryKey
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const altText = (0,_5_shared_libs_hooks_useImageAlt__WEBPACK_IMPORTED_MODULE_2__.useImageAlt)(image);
  const imagePath = image?.formats?.large?.url || image?.formats?.medium?.url || image?.formats?.small?.url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("figure", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].figure),
    children: [imagePath && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
      alt: altText,
      loading: "lazy",
      "data-caption": altText,
      src: `${"https://api.egor-badulin.ru"}${imagePath}`,
      "data-fancybox": galleryKey || 'post-gallery'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("figcaption", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].figcaption),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_5_shared_ui_EditorWrapper_EditorWrapper__WEBPACK_IMPORTED_MODULE_3__.EditorWrapper, {
        children: [image?.caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].text),
          children: image.caption
        }), image?.alternativeText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].caption, _DetailPicture_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"][`caption--${theme}`]),
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
    isLoading,
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
        children: !isLoading && data?.publishedAt && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_5_shared_ui_DateInfo_DateInfo__WEBPACK_IMPORTED_MODULE_3__.DateInfo, {
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
        children: !isLoading && data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_3_features_Share__WEBPACK_IMPORTED_MODULE_2__.Share, {
          themeProp: theme,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_DetailToolbar_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].share)
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-3_features-DetailContent-ui-DetailContent-DetailContent-module__block--theme-dark-Cuk6o {
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
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailContent/DetailContent.module.scss"],"names":[],"mappings":"AACI;EACI,gCAAA;AAAR;;AAIA;EACI,MAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;EACA,wBAAA;AADJ;AAGI;EACI,UAAA;EACA,kBAAA;AADR;AAII;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;AAFR;;AAMA;EACI,kBAAA;EACA,+BAAA;AAHJ;;AAMA;EACI;IACI,+BAAA;EAHN;AACF;AAMA;EACI;IACI,8BAAA;EAJN;EAOE;IACI,UAAA;EALN;AACF","sourcesContent":[".block {\r\n    &--theme-dark {\r\n        background-color: var(--bg-dark);\r\n    }\r\n}\r\n\r\n.picture {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 1;\r\n    z-index: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: block;\r\n    position: fixed;\r\n    transition: 0.3s opacity;\r\n\r\n    &[hidden] {\r\n        opacity: 0;\r\n        visibility: hidden;\r\n    }\r\n\r\n    img {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n        object-fit: cover;\r\n        object-position: center;\r\n    }\r\n}\r\n\r\n.intro-main {\r\n    position: relative;\r\n    margin-top: calc(100vh - 180px);\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .intro-main {\r\n        margin-top: calc(100vh - 130px);\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .intro-main {\r\n        margin-top: calc(100vh - 80px);\r\n    }\r\n\r\n    .container-editor {\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block--theme-dark": `src-3_features-DetailContent-ui-DetailContent-DetailContent-module__block--theme-dark-Cuk6o`,
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
  opacity: 1;
  display: flex;
  height: 100vh;
  position: relative;
  flex-direction: column;
  padding: 185px 0 150px;
}
.src-3_features-DetailContent-ui-DetailIntro-DetailIntro-module__intro-content-V1wD4[hidden] {
  opacity: 0;
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
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailIntro/DetailIntro.module.scss"],"names":[],"mappings":"AAAA;EACI,MAAA;EACA,OAAA;EACA,QAAA;EACA,cAAA;EACA,eAAA;AACJ;AACI;EACI,0BAAA;AACR;AAEI;EACI,0BAAA;AAAR;;AAIA;EACI,SAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;AADJ;AAGI;EACI,UAAA;AADR;;AAKA;EACI,aAAA;EACA,yBAAA;AAFJ;;AAKA;EACI,gBAAA;EACA,gBAAA;EACA,gBAAA;AAFJ;;AAKA;EACI;IACI,SAAA;IACA,aAAA;IACA,sBAAA;EAFN;EAKE;IACI,eAAA;IACA,gBAAA;EAHN;AACF;AAMA;EACI;IACI,SAAA;IACA,qBAAA;EAJN;EAOE;IACI,eAAA;IACA,gBAAA;EALN;EAQE;IACI,QAAA;EANN;EASE;IACI,QAAA;EAPN;EAUE;IACI,2BAAA;EARN;AACF","sourcesContent":[".intro {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    position: fixed;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-accent);\r\n    }\r\n}\r\n\r\n.intro-content {\r\n    gap: 60px;\r\n    z-index: 1;\r\n    opacity: 1;\r\n    display: flex;\r\n    height: 100vh;\r\n    position: relative;\r\n    flex-direction: column;\r\n    padding: 185px 0 150px;\r\n\r\n    &[hidden] {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n.toolbar-category {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.title {\r\n    line-height: 1.1;\r\n    font-size: 106px;\r\n    font-weight: 350;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .intro-content {\r\n        gap: 40px;\r\n        height: 100vh;\r\n        padding: 150px 0 150px;\r\n    }\r\n\r\n    .title {\r\n        font-size: 74px;\r\n        line-height: 1.2;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .intro-content {\r\n        gap: 20px;\r\n        padding: 90px 0 100px;\r\n    }\r\n\r\n    .title {\r\n        font-size: 34px;\r\n        line-height: 1.3;\r\n    }\r\n\r\n    .column-title {\r\n        order: 2;\r\n    }\r\n\r\n    .column-cat {\r\n        order: 1;\r\n    }\r\n\r\n    .toolbar-category {\r\n        justify-content: flex-start;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
.src-3_features-DetailContent-ui-DetailPicture-DetailPicture-module__figure-IkDXf img[data-fancybox] {
  cursor: pointer;
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
}`, "",{"version":3,"sources":["webpack://./src/3_features/DetailContent/ui/DetailPicture/DetailPicture.module.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AACR;AACQ;EACI,eAAA;AACZ;;AAIA;EACI,iBAAA;AADJ;;AAIA;EACI,eAAA;AADJ;;AAIA;EACI,eAAA;AADJ;AAGI;EACI,4BAAA;AADR;AAII;EACI,6BAAA;AAFR;;AAMA;EACI;IACI,iBAAA;EAHN;EAME;IACI,eAAA;EAJN;EAOE;IACI,eAAA;EALN;AACF;AAQA;EACI;IACI,gBAAA;EANN;EASE;IACI,eAAA;EAPN;EAUE;IACI,eAAA;EARN;AACF","sourcesContent":[".figure {\r\n    display: block;\r\n    max-width: 1920px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: fit-content;\r\n\r\n    img {\r\n        width: 100%;\r\n        height: auto;\r\n        margin: 0 auto;\r\n        display: block;\r\n\r\n        &[data-fancybox] {\r\n            cursor: pointer;\r\n        }\r\n    }\r\n}\r\n\r\n.figcaption {\r\n    padding-top: 10px;\r\n}\r\n\r\n.text {\r\n    font-size: 22px;\r\n}\r\n\r\n.caption {\r\n    font-size: 18px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-secondary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-secondary);\r\n    }\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .figcaption {\r\n        padding-top: 10px;\r\n    }\r\n\r\n    .text {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .figcaption {\r\n        padding-top: 5px;\r\n    }\r\n\r\n    .text {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 14px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z2QztBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0R0FBNEcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNEpBQU87QUFDaEMsb0NBQW9DLGlKQUFXLEdBQUcsNEpBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0saVRBQXFKO0FBQzNKLE1BQU07QUFBQTtBQUNOLHNEQUFzRCxpSkFBVyxHQUFHLDRKQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyxpSkFBVyxHQUFHLDRKQUFPOztBQUUvRCxxQkFBcUIsNEpBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUdvSztBQUNwSyxPQUFPLGlFQUFlLDRKQUFPLElBQUksNEpBQU8sVUFBVSw0SkFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL2Fzc2V0cy9pY29ucy9hcnJvdy1zY3JvbGwuc3ZnIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL1NoYXJlL2luZGV4LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL2xpYnMvaG9va3MvdXNlSW1hZ2VBbHQudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvbGlicy9ob29rcy91c2VTY3JvbGxQZXJjZW50LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL2xpYnMvaG9va3MvdXNlVGltZS50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8xX3BhZ2VzL0RldGFpbFBhZ2UvdWkvRGV0YWlsUGFnZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbENvZGUvRGV0YWlsQ29kZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbENvbnRlbnQvRGV0YWlsQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbEVkaXRvci9EZXRhaWxFZGl0b3IudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxIZWFkaW5nL0RldGFpbEhlYWRpbmcudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxJbnRyby9EZXRhaWxJbnRyby50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbExpbmsvRGV0YWlsTGluay50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbExpc3QvRGV0YWlsTGlzdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFBhcmFncmFwaC9EZXRhaWxQYXJhZ3JhcGgudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxQaWN0dXJlL0RldGFpbFBpY3R1cmUudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxRdW90ZS9EZXRhaWxRdW90ZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFRvb2xiYXIvRGV0YWlsVG9vbGJhci50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9TaGFyZS91aS9TaGFyZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRGF0ZUluZm8vRGF0ZUluZm8udHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yL0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9EZXRhaWxQYWdlL3VpL0RldGFpbFBhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbENvbnRlbnQvRGV0YWlsQ29udGVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsRWRpdG9yL0RldGFpbEVkaXRvci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsSW50cm8vRGV0YWlsSW50cm8ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFBpY3R1cmUvRGV0YWlsUGljdHVyZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsVG9vbGJhci9EZXRhaWxUb29sYmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvU2hhcmUvdWkvU2hhcmUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRGF0ZUluZm8vRGF0ZUluZm8ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yV3JhcHBlci9FZGl0b3JXcmFwcGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0VkaXRvci9FZGl0b3IubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvMV9wYWdlcy9EZXRhaWxQYWdlL3VpL0RldGFpbFBhZ2UubW9kdWxlLnNjc3M/Zjk2OCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsQ29udGVudC9EZXRhaWxDb250ZW50Lm1vZHVsZS5zY3NzP2MwMDUiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbEVkaXRvci9EZXRhaWxFZGl0b3IubW9kdWxlLnNjc3M/MWExZCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsSW50cm8vRGV0YWlsSW50cm8ubW9kdWxlLnNjc3M/ZTZjNiIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsUGljdHVyZS9EZXRhaWxQaWN0dXJlLm1vZHVsZS5zY3NzPzEzOGUiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFRvb2xiYXIvRGV0YWlsVG9vbGJhci5tb2R1bGUuc2Nzcz9iYjdlIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzNfZmVhdHVyZXMvU2hhcmUvdWkvU2hhcmUubW9kdWxlLnNjc3M/NjAzYSIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9EYXRlSW5mby9EYXRlSW5mby5tb2R1bGUuc2Nzcz8yMTE0Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlci5tb2R1bGUuc2Nzcz9kZjBiIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0VkaXRvci9FZGl0b3IubW9kdWxlLnNjc3M/NTA3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX3BhdGg7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgU3ZnQXJyb3dTY3JvbGwgPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDQ0IDQzXCJcbn0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBkOiBcIm0yNCAzNS4zNjQgMTYuNjI4LTE1LjY4NSAyLjc0NCAyLjkxTDIyIDQyLjc0OS42MjggMjIuNTlsMi43NDQtMi45MUwyMCAzNS4zNjRWMGg0djM1LjM2NFpcIixcbiAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiXG59KSkpO1xuZXhwb3J0IGRlZmF1bHQgU3ZnQXJyb3dTY3JvbGw7IiwiZXhwb3J0IHtcclxuICAgIERldGFpbENvbnRlbnQsXHJcbn0gZnJvbSAnLi91aS9EZXRhaWxDb250ZW50L0RldGFpbENvbnRlbnQnO1xyXG4iLCJleHBvcnQge1xyXG4gICAgU2hhcmUsXHJcbn0gZnJvbSAnLi91aS9TaGFyZSc7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltYWdlVHlwZSB9IGZyb20gJzVfc2hhcmVkL3R5cGVzL0ltYWdlJztcclxuXHJcbmNvbnN0IHVzZUltYWdlQWx0ID0gKGRhdGE6IEltYWdlVHlwZSB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgY29uc3QgW2FsdFRleHQsIHNldEFsdFRleHRdID0gdXNlU3RhdGUoJyMnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0U3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmNhcHRpb24pIHJlc3VsdFN0cmluZyA9IGRhdGEuY2FwdGlvbjtcclxuICAgICAgICBpZiAoZGF0YS5hbHRlcm5hdGl2ZVRleHQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IGAg4oCUICR7ZGF0YS5hbHRlcm5hdGl2ZVRleHR9YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IGRhdGEuYWx0ZXJuYXRpdmVUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRBbHRUZXh0KHJlc3VsdFN0cmluZyk7XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuICAgIHJldHVybiBhbHRUZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHVzZUltYWdlQWx0LFxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gICAgdXNlU3RhdGUsXHJcbiAgICB1c2VFZmZlY3QsXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY2FsY09wYWNpdHkgPSAob2Zmc2V0OiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYXRpbzogbnVtYmVyKTogbnVtYmVyID0+IHtcclxuICAgIGlmIChvZmZzZXQgPj0gaGVpZ2h0KSByZXR1cm4gMTtcclxuXHJcbiAgICBjb25zdCBvZmZzZXRGbG9vciA9IE1hdGguZmxvb3Iob2Zmc2V0KTtcclxuICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogcmF0aW8pO1xyXG5cclxuICAgIHJldHVybiBvZmZzZXRGbG9vciAvIChvZmZzZXRIZWlnaHQgLSAxKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTY3JvbGxQZXJjZW50ID0gKHJhdGlvOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gY2FsY09wYWNpdHkod2luZG93LnNjcm9sbFksIHdpbmRvdy5pbm5lckhlaWdodCwgcmF0aW8pO1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxQb3NpdGlvbigxIC0gb3BhY2l0eSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlUG9zaXRpb24pO1xyXG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVQb3NpdGlvbik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHNjcm9sbFBvc2l0aW9uO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gICAgdXNlU3RhdGUsXHJcbiAgICB1c2VFZmZlY3QsXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlRm9ybWF0dGVkRGF0ZSA9ICh0aW1lU3RhbXA6IERhdGUsIGxhbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCBbZm9ybWF0dGVkRGF0ZSwgc2V0Rm9ybWF0dGVkRGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRpbWVTdGFtcCkge1xyXG4gICAgICAgICAgICBzZXRGb3JtYXR0ZWREYXRlKCcnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVTdGFtcCk7XHJcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSkpIHtcclxuICAgICAgICAgICAgc2V0Rm9ybWF0dGVkRGF0ZSgnJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFN0cmluZyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGxhbmcsIG9wdGlvbnMpO1xyXG4gICAgICAgIHNldEZvcm1hdHRlZERhdGUobGFuZyA9PT0gJ3J1JyA/IGZvcm1hdHRlZFN0cmluZy5zbGljZSgwLCAtMykgOiBmb3JtYXR0ZWRTdHJpbmcpO1xyXG4gICAgfSwgW3RpbWVTdGFtcCwgbGFuZ10pO1xyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ybWF0dGVkRGF0ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBNZXRhUGFnZSB9IGZyb20gJzNfZmVhdHVyZXMvTWV0YVBhZ2UnO1xyXG5pbXBvcnQgeyBEZXRhaWxDb250ZW50IH0gZnJvbSAnM19mZWF0dXJlcy9EZXRhaWxDb250ZW50JztcclxuaW1wb3J0IHsgdXNlRmV0Y2hEZXZCeUlkIH0gZnJvbSAnNF9lbnRpdGllcy9EZXYnO1xyXG5pbXBvcnQgeyB1c2VGZXRjaFBvc3RCeUlkIH0gZnJvbSAnNF9lbnRpdGllcy9Qb3N0JztcclxuaW1wb3J0IHsgdXNlRmV0Y2hQaG90b0J5SWQgfSBmcm9tICc0X2VudGl0aWVzL1Bob3RvJztcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gJzVfc2hhcmVkL3VpL01haW4vTWFpbic7XHJcbmltcG9ydCB7IENvbnRlbnRLZXlUeXBlIH0gZnJvbSAnNV9zaGFyZWQvdHlwZXMvQ29tbW9uVHlwZXMnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vRGV0YWlsUGFnZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBmZXRjaE1ldGhvZHM6IFJlY29yZDxDb250ZW50S2V5VHlwZSwgYW55PiA9IHtcclxuICAgIFtDb250ZW50S2V5VHlwZS5QT1NUXTogdXNlRmV0Y2hQb3N0QnlJZCxcclxuICAgIFtDb250ZW50S2V5VHlwZS5ERVZdOiB1c2VGZXRjaERldkJ5SWQsXHJcbiAgICBbQ29udGVudEtleVR5cGUuUEhPVE9dOiB1c2VGZXRjaFBob3RvQnlJZCxcclxufTtcclxuXHJcbmludGVyZmFjZSBEZXRhaWxQYWdlUHJvcHMge1xyXG4gICAgbW9kZTogQ29udGVudEtleVR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbFBhZ2UoeyBtb2RlIH06IERldGFpbFBhZ2VQcm9wcykge1xyXG4gICAgY29uc3QgeyBzbHVnIH0gPSB1c2VQYXJhbXM8eyBzbHVnOiBzdHJpbmcgfT4oKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nIH0gPSBmZXRjaE1ldGhvZHNbbW9kZV0oc2x1ZyB8fCAnbm9uZScpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5tYWluKX0+XHJcbiAgICAgICAgICAgIDxNZXRhUGFnZVxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhPy5zZW8gfHwgdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RGV0YWlsQ29udGVudFxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTWFpbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbFBhZ2U7XHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdG9yV3JhcHBlciB9IGZyb20gJzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlcic7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsQ29kZVByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxDb2RlID0gKHByb3BzOiBEZXRhaWxDb2RlUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFZGl0b3JXcmFwcGVyPlxyXG4gICAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgICAgICA8L2NvZGU+XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvRWRpdG9yV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgICB1c2VTdGF0ZSxcclxuICAgIHVzZUVmZmVjdCxcclxufSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBBcnRpY2xlRGV2VHlwZSB9IGZyb20gJzRfZW50aXRpZXMvRGV2JztcclxuaW1wb3J0IHsgUG9zdEFydGljbGVUeXBlIH0gZnJvbSAnNF9lbnRpdGllcy9Qb3N0JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnNV9zaGFyZWQvdWkvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IHVzZVNjcm9sbFBlcmNlbnQgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVNjcm9sbFBlcmNlbnQnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vRGV0YWlsQ29udGVudC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IERldGFpbEludHJvIH0gZnJvbSAnLi4vRGV0YWlsSW50cm8vRGV0YWlsSW50cm8nO1xyXG5pbXBvcnQgeyBEZXRhaWxFZGl0b3IgfSBmcm9tICcuLi9EZXRhaWxFZGl0b3IvRGV0YWlsRWRpdG9yJztcclxuaW1wb3J0IHsgRGV0YWlsVG9vbGJhciB9IGZyb20gJy4uL0RldGFpbFRvb2xiYXIvRGV0YWlsVG9vbGJhcic7XHJcbmltcG9ydCBGYW5jeWJveERlY29yYXRvciBmcm9tIFwiNV9zaGFyZWQvbGlicy9kZWNvcmF0b3JzL0ZhbmN5Ym94RGVjb3JhdG9yXCI7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsQ29udGVudFByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICAgIGRhdGE/OiBQb3N0QXJ0aWNsZVR5cGUgfCBBcnRpY2xlRGV2VHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbENvbnRlbnQgPSAocHJvcHM6IERldGFpbENvbnRlbnRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IHVzZVNjcm9sbFBlcmNlbnQoMC43NSk7XHJcbiAgICBjb25zdCBbYmxvY2tUaGVtZSwgc2V0QmxvY2tUaGVtZV0gPSB1c2VTdGF0ZTxBcHBUaGVtZT4odGhlbWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGE/Lm1haW4/LnByZXZpZXdJbnZlcnRlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldEJsb2NrVGhlbWUoXHJcbiAgICAgICAgICAgICAgICBkYXRhLm1haW4ucHJldmlld0ludmVydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBBcHBUaGVtZS5EQVJLXHJcbiAgICAgICAgICAgICAgICAgICAgOiBBcHBUaGVtZS5MSUdIVCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuYmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BibG9jay0tJHt0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwaWN0dXJlXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5IH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLnBpY3R1cmUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT8ubWFpbj8ucHJldmlldz8uZGF0YT8udXJsXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7X19CQVNFX1VSTF9ffSR7ZGF0YT8ubWFpbj8ucHJldmlldz8uZGF0YT8udXJsfWB9IGFsdD1cIiNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgICA8RGV0YWlsSW50cm9cclxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICB0aGVtZT17YmxvY2tUaGVtZX1cclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzWydpbnRyby1tYWluJ10pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZXRhaWxUb29sYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPXtibG9ja1RoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT8ubWFpbj8uY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzWydjb250YWluZXItZWRpdG9yJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYW5jeWJveERlY29yYXRvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGV0YWlsRWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhLm1haW4uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYW5jeWJveERlY29yYXRvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgdHlwZSBCbG9ja3NDb250ZW50LFxyXG4gICAgQmxvY2tzUmVuZGVyZXIsXHJcbn0gZnJvbSAnQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXInO1xyXG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICc1X3NoYXJlZC91aS9FZGl0b3IvRWRpdG9yJztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgU2tlbGV0b24sIFNrZWxldG9uTW9kZSB9IGZyb20gJzVfc2hhcmVkL3VpL1NrZWxldG9uL1NrZWxldG9uJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0RldGFpbEVkaXRvci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IERldGFpbExpbmsgfSBmcm9tICcuLi9EZXRhaWxMaW5rL0RldGFpbExpbmsnO1xyXG5pbXBvcnQgeyBEZXRhaWxDb2RlIH0gZnJvbSAnLi4vRGV0YWlsQ29kZS9EZXRhaWxDb2RlJztcclxuaW1wb3J0IHsgRGV0YWlsTGlzdCB9IGZyb20gJy4uL0RldGFpbExpc3QvRGV0YWlsTGlzdCc7XHJcbmltcG9ydCB7IERldGFpbFF1b3RlIH0gZnJvbSAnLi4vRGV0YWlsUXVvdGUvRGV0YWlsUXVvdGUnO1xyXG5pbXBvcnQgeyBEZXRhaWxQaWN0dXJlIH0gZnJvbSAnLi4vRGV0YWlsUGljdHVyZS9EZXRhaWxQaWN0dXJlJztcclxuaW1wb3J0IHsgRGV0YWlsSGVhZGluZyB9IGZyb20gJy4uL0RldGFpbEhlYWRpbmcvRGV0YWlsSGVhZGluZyc7XHJcbmltcG9ydCB7IERldGFpbFBhcmFncmFwaCB9IGZyb20gJy4uL0RldGFpbFBhcmFncmFwaC9EZXRhaWxQYXJhZ3JhcGgnO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbEVkaXRvclByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGRhdGE6IEJsb2Nrc0NvbnRlbnQ7XHJcbiAgICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsRWRpdG9yID0gKHByb3BzOiBEZXRhaWxFZGl0b3JQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuYmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BibG9jay0tJHt0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxFZGl0b3IgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5lZGl0b3IpfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdzPXs0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXtTa2VsZXRvbk1vZGUuTElORVN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RldGFpbFBhcmFncmFwaD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIWlzTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbG9ja3NSZW5kZXJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaDogKHsgY2hpbGRyZW4gfSkgPT4gRGV0YWlsUGFyYWdyYXBoKHsgY2hpbGRyZW4gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiAoeyBpbWFnZSB9KSA9PiBEZXRhaWxQaWN0dXJlKHsgaW1hZ2UgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZzogKHsgY2hpbGRyZW4sIGxldmVsIH0pID0+IERldGFpbEhlYWRpbmcoeyBjaGlsZHJlbiwgbGV2ZWwgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogKHsgY2hpbGRyZW4sIHVybCB9KSA9PiBEZXRhaWxMaW5rKHsgY2hpbGRyZW4sIHVybCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiAoeyBjaGlsZHJlbiB9KSA9PiBEZXRhaWxDb2RlKHsgY2hpbGRyZW4gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogKHsgY2hpbGRyZW4sIGZvcm1hdCB9KSA9PiBEZXRhaWxMaXN0KHsgY2hpbGRyZW4sIGZvcm1hdCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogKHsgY2hpbGRyZW4gfSkgPT4gRGV0YWlsUXVvdGUoeyBjaGlsZHJlbiB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC9FZGl0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFZGl0b3JXcmFwcGVyIH0gZnJvbSAnNV9zaGFyZWQvdWkvRWRpdG9yV3JhcHBlci9FZGl0b3JXcmFwcGVyJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxQYXJhZ3JhcGhQcm9wcyB7XHJcbiAgICBsZXZlbDogMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbEhlYWRpbmcgPSAocHJvcHM6IERldGFpbFBhcmFncmFwaFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgdGFnID0gYGgke2xldmVsID4gMCAmJiBsZXZlbCA8IDcgPyBsZXZlbCA6IDZ9YDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFZGl0b3JXcmFwcGVyPlxyXG4gICAgICAgICAgICB7IFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnLCBudWxsLCBjaGlsZHJlbikgfVxyXG4gICAgICAgIDwvRWRpdG9yV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgTGlzdFRhZ3MsXHJcbiAgICBBcnRpY2xlVGFnLFxyXG4gICAgQXJ0aWNsZUNhdGVnb3J5LFxyXG4gICAgQXJ0aWNsZUNhdGVnb3J5TW9kZSxcclxuICAgIEFydGljbGVDYXRlZ29yeVR5cGUsXHJcbn0gZnJvbSAnNF9lbnRpdGllcy9DYXRlZ29yeSc7XHJcbmltcG9ydCB7IEFydGljbGVEZXZUeXBlIH0gZnJvbSAnNF9lbnRpdGllcy9EZXYnO1xyXG5pbXBvcnQgeyBQb3N0QXJ0aWNsZVR5cGUgfSBmcm9tICc0X2VudGl0aWVzL1Bvc3QnO1xyXG5pbXBvcnQge1xyXG4gICAgU2tlbGV0b24sXHJcbiAgICBTa2VsZXRvbk1vZGUsXHJcbn0gZnJvbSAnNV9zaGFyZWQvdWkvU2tlbGV0b24vU2tlbGV0b24nO1xyXG5pbXBvcnQgeyBBcHBUaGVtZSB9IGZyb20gJzVfc2hhcmVkL2NvbmZpZy9UaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICc1X3NoYXJlZC91aS9Db250YWluZXIvQ29udGFpbmVyJztcclxuaW1wb3J0IGdyaWQgZnJvbSAnNV9zaGFyZWQvY3NzL2dyaWQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VTY3JvbGxQZXJjZW50IH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VTY3JvbGxQZXJjZW50JztcclxuaW1wb3J0IGNscyBmcm9tICcuL0RldGFpbEludHJvLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxJbnRyb1Byb3BzIHtcclxuICAgIHRoZW1lOiBBcHBUaGVtZTtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGlzTG9hZGluZz86IGJvb2xlYW47XHJcbiAgICBkYXRhPzogUG9zdEFydGljbGVUeXBlIHwgQXJ0aWNsZURldlR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxJbnRybyA9IChwcm9wczogRGV0YWlsSW50cm9Qcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBvcGFjaXR5ID0gdXNlU2Nyb2xsUGVyY2VudCgxKTtcclxuICAgIGNvbnN0IHRhZ0FycmF5ID0gZGF0YT8udGFncz8uZGF0YTtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gZGF0YT8uY2F0ZWdvcnk/LmRhdGE7XHJcbiAgICBjb25zdCBpc0ludmVydGVkID0gZGF0YT8ubWFpbj8ucHJldmlld0ludmVydGVkO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuaW50cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BpbnRyby0tJHt0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtvcGFjaXR5IDwgMH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzKGNsc1snaW50cm8tY29udGVudCddKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkLmdyaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wtMiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wtbGFwLTMnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFsnZ3JpZF9fY29sLW1vYi00J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsc1snY29sdW1uLXRpdGxlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy50aXRsZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhPy5tYWluPy5wcmV2aWV3VGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/Lm1haW4/LnByZXZpZXdDYXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5ncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXtTa2VsZXRvbk1vZGUuTElORVN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFsnZ3JpZF9fY29sLTInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFsnZ3JpZF9fY29sLWxhcC0xJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbJ2dyaWRfX2NvbC1tb2ItNCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHNbJ2NvbHVtbi1jYXQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsc1sndG9vbGJhci1jYXRlZ29yeSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVQcm9wPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXtBcnRpY2xlQ2F0ZWdvcnlNb2RlLlNUQVRJQ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzWydtYWluLWNvbnRlbnQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkLmdyaWQsIGNscy5ncmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbJ2dyaWRfX2NvbC0yJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wtbW9iLTQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ0FycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRhZ0FycmF5Py5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0VGFncz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnQXJyYXkubWFwKChpdGVtOiBBcnRpY2xlQ2F0ZWdvcnlUeXBlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlVGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVQcm9wPXtpc0ludmVydGVkID8gQXBwVGhlbWUuREFSSyA6IEFwcFRoZW1lLkxJR0hUfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0VGFncz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBEZXRhaWxMaW5rUHJvcHMge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsTGluayA9IChwcm9wczogRGV0YWlsTGlua1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGEgaHJlZj17dXJsfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+eyBjaGlsZHJlbiB9PC9hPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdG9yV3JhcHBlciB9IGZyb20gJzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlcic7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsUGFyYWdyYXBoUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICAgIGZvcm1hdDogJ29yZGVyZWQnIHwgJ3Vub3JkZXJlZCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxMaXN0ID0gKHByb3BzOiBEZXRhaWxQYXJhZ3JhcGhQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGZvcm1hdCxcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBsaXN0VGFnID0gZm9ybWF0ID09PSAnb3JkZXJlZCcgPyAnb2wnIDogJ3VsJztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFZGl0b3JXcmFwcGVyPlxyXG4gICAgICAgICAgICB7IFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdFRhZywgbnVsbCwgY2hpbGRyZW4pIH1cclxuICAgICAgICA8L0VkaXRvcldyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVkaXRvcldyYXBwZXIgfSBmcm9tICc1X3NoYXJlZC91aS9FZGl0b3JXcmFwcGVyL0VkaXRvcldyYXBwZXInO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbFBhcmFncmFwaFByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxQYXJhZ3JhcGggPSAocHJvcHM6IERldGFpbFBhcmFncmFwaFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RWRpdG9yV3JhcHBlcj5cclxuICAgICAgICAgICAgPHA+eyBjaGlsZHJlbiB9PC9wPlxyXG4gICAgICAgIDwvRWRpdG9yV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBJbWFnZVR5cGUgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9JbWFnZSc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaGVtZSc7XHJcbmltcG9ydCB7IHVzZUltYWdlQWx0IH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VJbWFnZUFsdCc7XHJcbmltcG9ydCB7IEVkaXRvcldyYXBwZXIgfSBmcm9tICc1X3NoYXJlZC91aS9FZGl0b3JXcmFwcGVyL0VkaXRvcldyYXBwZXInO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vRGV0YWlsUGljdHVyZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsUGljdHVyZVByb3BzIHtcclxuICAgIGltYWdlOiBJbWFnZVR5cGU7XHJcbiAgICBnYWxsZXJ5S2V5Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGV0YWlsUGljdHVyZSA9IChwcm9wczogRGV0YWlsUGljdHVyZVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgZ2FsbGVyeUtleSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgYWx0VGV4dCA9IHVzZUltYWdlQWx0KGltYWdlKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZVBhdGggPSBpbWFnZT8uZm9ybWF0cz8ubGFyZ2U/LnVybFxyXG4gICAgICAgIHx8IGltYWdlPy5mb3JtYXRzPy5tZWRpdW0/LnVybFxyXG4gICAgICAgIHx8IGltYWdlPy5mb3JtYXRzPy5zbWFsbD8udXJsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmZpZ3VyZSl9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZVBhdGhcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YWx0VGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNhcHRpb249e2FsdFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7X19CQVNFX1VSTF9ffSR7aW1hZ2VQYXRofWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmFuY3lib3g9e2dhbGxlcnlLZXkgfHwgJ3Bvc3QtZ2FsbGVyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmZpZ2NhcHRpb24pfT5cclxuICAgICAgICAgICAgICAgIDxFZGl0b3JXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U/LmNhcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy50ZXh0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpbWFnZS5jYXB0aW9uIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPy5hbHRlcm5hdGl2ZVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5jYXB0aW9uLCBjbHNbYGNhcHRpb24tLSR7dGhlbWV9YF0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGltYWdlLmFsdGVybmF0aXZlVGV4dCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0VkaXRvcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cclxuICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdG9yV3JhcHBlciB9IGZyb20gJzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlcic7XHJcblxyXG5pbnRlcmZhY2UgRGV0YWlsUGFyYWdyYXBoUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERldGFpbFF1b3RlID0gKHByb3BzOiBEZXRhaWxQYXJhZ3JhcGhQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEVkaXRvcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxibG9ja3F1b3RlPnsgY2hpbGRyZW4gfTwvYmxvY2txdW90ZT5cclxuICAgICAgICA8L0VkaXRvcldyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIEZvcndhcmRlZFJlZixcclxufSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBTaGFyZSB9IGZyb20gJzNfZmVhdHVyZXMvU2hhcmUnO1xyXG5pbXBvcnQgeyBBcnRpY2xlRGV2VHlwZSB9IGZyb20gJzRfZW50aXRpZXMvRGV2JztcclxuaW1wb3J0IHsgUG9zdEFydGljbGVUeXBlIH0gZnJvbSAnNF9lbnRpdGllcy9Qb3N0JztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgRGF0ZUluZm8gfSBmcm9tICc1X3NoYXJlZC91aS9EYXRlSW5mby9EYXRlSW5mbyc7XHJcbmltcG9ydCBJY29uIGZyb20gJzVfc2hhcmVkL2Fzc2V0cy9pY29ucy9hcnJvdy1zY3JvbGwuc3ZnJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0RldGFpbFRvb2xiYXIubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbFRvb2xiYXJQcm9wcyB7XHJcbiAgICB0aGVtZTogQXBwVGhlbWU7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG4gICAgZGF0YTogUG9zdEFydGljbGVUeXBlIHwgQXJ0aWNsZURldlR5cGUgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZXRhaWxUb29sYmFyID0gZm9yd2FyZFJlZigocHJvcHM6IERldGFpbFRvb2xiYXJQcm9wcywgcmVmOiBGb3J3YXJkZWRSZWY8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgaWQ9XCJzY3JvbGwtYW5jaG9yXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmZvb3RlcixcclxuICAgICAgICAgICAgICAgICAgICBjbHNbYGZvb3Rlci0tJHt0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsc1snZm9vdGVyLWdyaWQnXSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzWydjb2x1bW4tZGF0ZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAhaXNMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGRhdGE/LnB1Ymxpc2hlZEF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e2RhdGE/LnB1Ymxpc2hlZEF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMudGltZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHNbJ2NvbHVtbi1idXR0b24nXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjc2Nyb2xsLWFuY2hvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYnV0dG9uKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscy5pY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHNbYGljb24tLSR7dGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzWydjb2x1bW4tc2hhcmUnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWlzTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGFyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lUHJvcD17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5zaGFyZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcbiIsImltcG9ydCB7XHJcbiAgICBWS1NoYXJlQnV0dG9uLFxyXG4gICAgVHdpdHRlclNoYXJlQnV0dG9uLFxyXG4gICAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcclxuICAgIFRlbGVncmFtU2hhcmVCdXR0b24sXHJcbn0gZnJvbSAncmVhY3Qtc2hhcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgQ29udHJvbHMgfSBmcm9tICc1X3NoYXJlZC91aS9Db250cm9scy9Db250cm9scyc7XHJcbmltcG9ydCB7IEljb25LZXksIEljb25Tb2NpYWwgfSBmcm9tICc1X3NoYXJlZC91aS9JY29uU29jaWFsL0ljb25Tb2NpYWwnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vU2hhcmUubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFNoYXJlUHJvcHMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgdGhlbWVQcm9wPzogQXBwVGhlbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaGFyZSA9IChwcm9wczogU2hhcmVQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHRoZW1lUHJvcCxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG5cclxuICAgIGNvbnN0IHRoZW1lTW9kZSA9IHRoZW1lUHJvcCB8fCB0aGVtZTtcclxuXHJcbiAgICAvLyBUT0RPOiDQodC00LXQu9Cw0YLRjCDQvNC+0LHQuNC70YzQvdGD0Y4g0LLQtdGA0YHQuNGOXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYmxvY2ssIGNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLnRpdGxlKX0+XHJcbiAgICAgICAgICAgICAgICB7IHQoJ3NoYXJlJykgfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxDb250cm9scyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmNvbnRyb2xzKX0+XHJcbiAgICAgICAgICAgICAgICA8VktTaGFyZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHVybD1cInZrLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRCdXR0b25TdHlsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5idXR0b24sIGNsc1tgYnV0dG9uLS0ke3RoZW1lTW9kZX1gXSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25Tb2NpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbktleT17SWNvbktleS5WS31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5pY29uLCBjbHNbYGljb24tLSR7dGhlbWVNb2RlfWBdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9WS1NoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFR3aXR0ZXJTaGFyZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHVybD1cInR3aXR0ZXIuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICByZXNldEJ1dHRvblN0eWxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJ1dHRvbiwgY2xzW2BidXR0b24tLSR7dGhlbWVNb2RlfWBdKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblNvY2lhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uS2V5PXtJY29uS2V5Llh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuaWNvbiwgY2xzW2BpY29uLS0ke3RoZW1lTW9kZX1gXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvVHdpdHRlclNoYXJlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB1cmw9XCJmYi5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uU3R5bGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYnV0dG9uLCBjbHNbYGJ1dHRvbi0tJHt0aGVtZU1vZGV9YF0pfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uU29jaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25LZXk9e0ljb25LZXkuRkJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuaWNvbiwgY2xzW2BpY29uLS0ke3RoZW1lTW9kZX1gXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxUZWxlZ3JhbVNoYXJlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsPVwidGcuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICByZXNldEJ1dHRvblN0eWxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJ1dHRvbiwgY2xzW2BidXR0b24tLSR7dGhlbWVNb2RlfWBdKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblNvY2lhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uS2V5PXtJY29uS2V5LlRHfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmljb24sIGNsc1tgaWNvbi0tJHt0aGVtZU1vZGV9YF0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RlbGVncmFtU2hhcmVCdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29udHJvbHM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHVzZVRpbWUgZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaW1lJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0RhdGVJbmZvLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBEYXRlUHJvcHMge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGF0ZUluZm8gPSAocHJvcHM6IERhdGVQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGUsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IGxhbmcgPSBpMThuLmxhbmd1YWdlO1xyXG4gICAgY29uc3QgdGltZSA9IHVzZVRpbWUoZGF0ZSwgbGFuZyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGltZSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJsb2NrLCBjbGFzc05hbWUpfT5cclxuICAgICAgICAgICAgeyB0aW1lIH1cclxuICAgICAgICA8L3RpbWU+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vRWRpdG9yV3JhcHBlci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgRWRpdG9yV3JhcHBlclByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0b3JXcmFwcGVyID0gKHByb3BzOiBFZGl0b3JXcmFwcGVyUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJsb2NrKX0+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IGNscyBmcm9tICcuL0VkaXRvci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgRWRpdG9yUHJvcHMge1xyXG4gICAgZGF0YT86IHN0cmluZztcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xyXG4gICAgdGhlbWVQcm9wPzogQXBwVGhlbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0b3IgPSAocHJvcHM6IEVkaXRvclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICB0aGVtZVByb3AsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmVkaXRvciwgY2xzW2BlZGl0b3ItLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLCBjbGFzc05hbWUpfVxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuZWRpdG9yLCBjbHNbYGVkaXRvci0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sIGNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge307XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxDb250ZW50LURldGFpbENvbnRlbnQtbW9kdWxlX19ibG9jay0tdGhlbWUtZGFyay1DdWs2byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWRhcmspO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxDb250ZW50LURldGFpbENvbnRlbnQtbW9kdWxlX19waWN0dXJlLWRMekVfIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0cmFuc2l0aW9uOiAwLjNzIG9wYWNpdHk7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxDb250ZW50LURldGFpbENvbnRlbnQtbW9kdWxlX19waWN0dXJlLWRMekVfW2hpZGRlbl0ge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxDb250ZW50LURldGFpbENvbnRlbnQtbW9kdWxlX19waWN0dXJlLWRMekVfIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX2ludHJvLW1haW4tUnBhRG8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IGNhbGMoMTAwdmggLSAxODBweCk7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX2ludHJvLW1haW4tUnBhRG8ge1xuICAgIG1hcmdpbi10b3A6IGNhbGMoMTAwdmggLSAxMzBweCk7XG4gIH1cbn1cbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX2ludHJvLW1haW4tUnBhRG8ge1xuICAgIG1hcmdpbi10b3A6IGNhbGMoMTAwdmggLSA4MHB4KTtcbiAgfVxuICAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxDb250ZW50LURldGFpbENvbnRlbnQtbW9kdWxlX19jb250YWluZXItZWRpdG9yLWU0SmJuIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbENvbnRlbnQvRGV0YWlsQ29udGVudC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDSTtFQUNJLGdDQUFBO0FBQVI7O0FBSUE7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQURKO0FBR0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUZSOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSwrQkFBQTtBQUhKOztBQU1BO0VBQ0k7SUFDSSwrQkFBQTtFQUhOO0FBQ0Y7QUFNQTtFQUNJO0lBQ0ksOEJBQUE7RUFKTjtFQU9FO0lBQ0ksVUFBQTtFQUxOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGljdHVyZSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBvcGFjaXR5O1xcclxcblxcclxcbiAgICAmW2hpZGRlbl0ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmludHJvLW1haW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IGNhbGMoMTAwdmggLSAxODBweCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5pbnRyby1tYWluIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMTAwdmggLSAxMzBweCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmludHJvLW1haW4ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogY2FsYygxMDB2aCAtIDgwcHgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWluZXItZWRpdG9yIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2stLXRoZW1lLWRhcmtcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsQ29udGVudC1EZXRhaWxDb250ZW50LW1vZHVsZV9fYmxvY2stLXRoZW1lLWRhcmstQ3VrNm9gLFxuXHRcInBpY3R1cmVcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsQ29udGVudC1EZXRhaWxDb250ZW50LW1vZHVsZV9fcGljdHVyZS1kTHpFX2AsXG5cdFwiaW50cm8tbWFpblwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxDb250ZW50LURldGFpbENvbnRlbnQtbW9kdWxlX19pbnRyby1tYWluLVJwYURvYCxcblx0XCJjb250YWluZXItZWRpdG9yXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbENvbnRlbnQtRGV0YWlsQ29udGVudC1tb2R1bGVfX2NvbnRhaW5lci1lZGl0b3ItZTRKYm5gXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsRWRpdG9yLURldGFpbEVkaXRvci1tb2R1bGVfX2Jsb2NrLU9Ba3NKIHtcbiAgcGFkZGluZzogNjBweCA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsRWRpdG9yLURldGFpbEVkaXRvci1tb2R1bGVfX2Jsb2NrLS10aGVtZS1saWdodC05VVN2WiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxFZGl0b3ItRGV0YWlsRWRpdG9yLW1vZHVsZV9fYmxvY2stLXRoZW1lLWRhcmstVWo3MDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEVkaXRvci1EZXRhaWxFZGl0b3ItbW9kdWxlX19ibG9jay1PQWtzSiB7XG4gICAgcGFkZGluZzogNTBweCA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIH1cbn1cbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEVkaXRvci1EZXRhaWxFZGl0b3ItbW9kdWxlX19ibG9jay1PQWtzSiB7XG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsRWRpdG9yL0RldGFpbEVkaXRvci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0kscUNBQUE7QUFDUjtBQUVJO0VBQ0ksb0NBQUE7QUFBUjs7QUFJQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQUROO0FBQ0Y7QUFJQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQUZOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgcGFkZGluZzogNjBweCA1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1MHB4IDQwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEVkaXRvci1EZXRhaWxFZGl0b3ItbW9kdWxlX19ibG9jay1PQWtzSmAsXG5cdFwiYmxvY2stLXRoZW1lLWxpZ2h0XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEVkaXRvci1EZXRhaWxFZGl0b3ItbW9kdWxlX19ibG9jay0tdGhlbWUtbGlnaHQtOVVTdlpgLFxuXHRcImJsb2NrLS10aGVtZS1kYXJrXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEVkaXRvci1EZXRhaWxFZGl0b3ItbW9kdWxlX19ibG9jay0tdGhlbWUtZGFyay1VajcwMWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLXlPRDhLIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9faW50cm8tLXRoZW1lLWxpZ2h0LUpqSHFnIHtcbiAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLS10aGVtZS1kYXJrLXpBOU1CIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9faW50cm8tY29udGVudC1WMXdENCB7XG4gIGdhcDogNjBweDtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxODVweCAwIDE1MHB4O1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19pbnRyby1jb250ZW50LVYxd0Q0W2hpZGRlbl0ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX3Rvb2xiYXItY2F0ZWdvcnktZ2dHdVoge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX3RpdGxlLXNnTXBRIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgZm9udC1zaXplOiAxMDZweDtcbiAgZm9udC13ZWlnaHQ6IDM1MDtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19pbnRyby1jb250ZW50LVYxd0Q0IHtcbiAgICBnYXA6IDQwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxNTBweCAwIDE1MHB4O1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9fdGl0bGUtc2dNcFEge1xuICAgIGZvbnQtc2l6ZTogNzRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLWNvbnRlbnQtVjF3RDQge1xuICAgIGdhcDogMjBweDtcbiAgICBwYWRkaW5nOiA5MHB4IDAgMTAwcHg7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX190aXRsZS1zZ01wUSB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19jb2x1bW4tdGl0bGUtcW5zZTkge1xuICAgIG9yZGVyOiAyO1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9fY29sdW1uLWNhdC1Wb21ZbCB7XG4gICAgb3JkZXI6IDE7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX190b29sYmFyLWNhdGVnb3J5LWdnR3VaIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy8zX2ZlYXR1cmVzL0RldGFpbENvbnRlbnQvdWkvRGV0YWlsSW50cm8vRGV0YWlsSW50cm8ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDSSwwQkFBQTtBQUNSO0FBRUk7RUFDSSwwQkFBQTtBQUFSOztBQUlBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUdJO0VBQ0ksVUFBQTtBQURSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQUZOO0VBS0U7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUFITjtBQUNGO0FBTUE7RUFDSTtJQUNJLFNBQUE7SUFDQSxxQkFBQTtFQUpOO0VBT0U7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUFMTjtFQVFFO0lBQ0ksUUFBQTtFQU5OO0VBU0U7SUFDSSxRQUFBO0VBUE47RUFVRTtJQUNJLDJCQUFBO0VBUk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW50cm8ge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbnRyby1jb250ZW50IHtcXHJcXG4gICAgZ2FwOiA2MHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDE4NXB4IDAgMTUwcHg7XFxyXFxuXFxyXFxuICAgICZbaGlkZGVuXSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi50b29sYmFyLWNhdGVnb3J5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG4gICAgZm9udC1zaXplOiAxMDZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmludHJvLWNvbnRlbnQge1xcclxcbiAgICAgICAgZ2FwOiA0MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1MHB4IDAgMTUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNzRweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmludHJvLWNvbnRlbnQge1xcclxcbiAgICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogOTBweCAwIDEwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDM0cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb2x1bW4tdGl0bGUge1xcclxcbiAgICAgICAgb3JkZXI6IDI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbHVtbi1jYXQge1xcclxcbiAgICAgICAgb3JkZXI6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvb2xiYXItY2F0ZWdvcnkge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImludHJvXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbEludHJvLURldGFpbEludHJvLW1vZHVsZV9faW50cm8teU9EOEtgLFxuXHRcImludHJvLS10aGVtZS1saWdodFwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLS10aGVtZS1saWdodC1KakhxZ2AsXG5cdFwiaW50cm8tLXRoZW1lLWRhcmtcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19pbnRyby0tdGhlbWUtZGFyay16QTlNQmAsXG5cdFwiaW50cm8tY29udGVudFwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX2ludHJvLWNvbnRlbnQtVjF3RDRgLFxuXHRcInRvb2xiYXItY2F0ZWdvcnlcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX190b29sYmFyLWNhdGVnb3J5LWdnR3VaYCxcblx0XCJ0aXRsZVwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxJbnRyby1EZXRhaWxJbnRyby1tb2R1bGVfX3RpdGxlLXNnTXBRYCxcblx0XCJjb2x1bW4tdGl0bGVcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19jb2x1bW4tdGl0bGUtcW5zZTlgLFxuXHRcImNvbHVtbi1jYXRcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsSW50cm8tRGV0YWlsSW50cm8tbW9kdWxlX19jb2x1bW4tY2F0LVZvbVlsYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2ZpZ3VyZS1Ja0RYZiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fZmlndXJlLUlrRFhmIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2ZpZ3VyZS1Ja0RYZiBpbWdbZGF0YS1mYW5jeWJveF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2ZpZ2NhcHRpb24tcU9RSWoge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fdGV4dC1kc2FFMCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fY2FwdGlvbi1iS1BOTyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2NhcHRpb24tLXRoZW1lLWxpZ2h0LXJuMUkwIHtcbiAgY29sb3I6IHZhcigtLWRhcmstc2Vjb25kYXJ5KTtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2NhcHRpb24tLXRoZW1lLWRhcmstU1VQQkQge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtc2Vjb25kYXJ5KTtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fZmlnY2FwdGlvbi1xT1FJaiB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fdGV4dC1kc2FFMCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2NhcHRpb24tYktQTk8ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fZmlnY2FwdGlvbi1xT1FJaiB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX190ZXh0LWRzYUUwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fY2FwdGlvbi1iS1BOTyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvM19mZWF0dXJlcy9EZXRhaWxDb250ZW50L3VpL0RldGFpbFBpY3R1cmUvRGV0YWlsUGljdHVyZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ1I7QUFDUTtFQUNJLGVBQUE7QUFDWjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7QUFHSTtFQUNJLDRCQUFBO0FBRFI7QUFJSTtFQUNJLDZCQUFBO0FBRlI7O0FBTUE7RUFDSTtJQUNJLGlCQUFBO0VBSE47RUFNRTtJQUNJLGVBQUE7RUFKTjtFQU9FO0lBQ0ksZUFBQTtFQUxOO0FBQ0Y7QUFRQTtFQUNJO0lBQ0ksZ0JBQUE7RUFOTjtFQVNFO0lBQ0ksZUFBQTtFQVBOO0VBVUU7SUFDSSxlQUFBO0VBUk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZmlndXJlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogMTkyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuXFxyXFxuICAgICAgICAmW2RhdGEtZmFuY3lib3hdIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZpZ2NhcHRpb24ge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5jYXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1zZWNvbmRhcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXNlY29uZGFyeSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmZpZ2NhcHRpb24ge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuZmlnY2FwdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FwdGlvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZmlndXJlXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX2ZpZ3VyZS1Ja0RYZmAsXG5cdFwiZmlnY2FwdGlvblwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxQaWN0dXJlLURldGFpbFBpY3R1cmUtbW9kdWxlX19maWdjYXB0aW9uLXFPUUlqYCxcblx0XCJ0ZXh0XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFBpY3R1cmUtRGV0YWlsUGljdHVyZS1tb2R1bGVfX3RleHQtZHNhRTBgLFxuXHRcImNhcHRpb25cIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fY2FwdGlvbi1iS1BOT2AsXG5cdFwiY2FwdGlvbi0tdGhlbWUtbGlnaHRcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fY2FwdGlvbi0tdGhlbWUtbGlnaHQtcm4xSTBgLFxuXHRcImNhcHRpb24tLXRoZW1lLWRhcmtcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsUGljdHVyZS1EZXRhaWxQaWN0dXJlLW1vZHVsZV9fY2FwdGlvbi0tdGhlbWUtZGFyay1TVVBCRGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19mb290ZXItb0xfaVUge1xuICB0b3A6IC0xcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiA5MHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRyYW5zaXRpb246IDAuM3MgYmFja2dyb3VuZC1jb2xvcjtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci0tdGhlbWUtbGlnaHQtUHpVeF8ge1xuICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcbn1cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci0tdGhlbWUtZGFyay13azRxNCB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLWdyaWQtTzVOc1Uge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19jb2x1bW4tZGF0ZS1xcmVvNyB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2NvbHVtbi1idXR0b24tUDRDcW4ge1xuICB3aWR0aDogMjAlO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19jb2x1bW4tc2hhcmUtUF9ENncge1xuICB3aWR0aDogNDAlO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19idXR0b24tQnZwNlUge1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19pY29uLWpJU3hmIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19pY29uLS10aGVtZS1saWdodC1aY0VYaiB7XG4gIGZpbGw6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19pY29uLS10aGVtZS1kYXJrLU5JalNkIHtcbiAgZmlsbDogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XG59XG5cbi5zcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX3NoYXJlLUxnWllBIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLW9MX2lVIHtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLWdyaWQtTzVOc1Uge1xuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9faWNvbi1qSVN4ZiB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19mb290ZXItb0xfaVUge1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19pY29uLWpJU3hmIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLnNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fY29sdW1uLXNoYXJlLVBfRDZ3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzNfZmVhdHVyZXMvRGV0YWlsQ29udGVudC91aS9EZXRhaWxUb29sYmFyL0RldGFpbFRvb2xiYXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUFDSjtBQUNJO0VBQ0ksMEJBQUE7QUFDUjtBQUVJO0VBQ0ksMkJBQUE7QUFBUjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFESjtBQUdJO0VBQ0kseUJBQUE7QUFEUjtBQUlJO0VBQ0ksMEJBQUE7QUFGUjs7QUFNQTtFQUNJLHlCQUFBO0FBSEo7O0FBTUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUFITjtFQU1FO0lBQ0ksZ0JBQUE7RUFKTjtFQU9FO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFMTjtBQUNGO0FBUUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsbUJBQUE7RUFOTjtFQVNFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFQTjtFQVVFO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0VBUk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9vdGVyIHtcXHJcXG4gICAgdG9wOiAtMXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWluLWhlaWdodDogOTBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGJhY2tncm91bmQtY29sb3I7XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWxpZ2h0IHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItZ3JpZCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jb2x1bW4tZGF0ZSB7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5jb2x1bW4tYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbHVtbi1zaGFyZSB7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBmaWxsOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNoYXJlIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmZvb3RlciB7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyLWdyaWQge1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaWNvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzJweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuZm9vdGVyIHtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pY29uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb2x1bW4tc2hhcmUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmb290ZXJcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fZm9vdGVyLW9MX2lVYCxcblx0XCJmb290ZXItLXRoZW1lLWxpZ2h0XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci0tdGhlbWUtbGlnaHQtUHpVeF9gLFxuXHRcImZvb3Rlci0tdGhlbWUtZGFya1wiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19mb290ZXItLXRoZW1lLWRhcmstd2s0cTRgLFxuXHRcImZvb3Rlci1ncmlkXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2Zvb3Rlci1ncmlkLU81TnNVYCxcblx0XCJjb2x1bW4tZGF0ZVwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19jb2x1bW4tZGF0ZS1xcmVvN2AsXG5cdFwiY29sdW1uLWJ1dHRvblwiOiBgc3JjLTNfZmVhdHVyZXMtRGV0YWlsQ29udGVudC11aS1EZXRhaWxUb29sYmFyLURldGFpbFRvb2xiYXItbW9kdWxlX19jb2x1bW4tYnV0dG9uLVA0Q3FuYCxcblx0XCJjb2x1bW4tc2hhcmVcIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fY29sdW1uLXNoYXJlLVBfRDZ3YCxcblx0XCJidXR0b25cIjogYHNyYy0zX2ZlYXR1cmVzLURldGFpbENvbnRlbnQtdWktRGV0YWlsVG9vbGJhci1EZXRhaWxUb29sYmFyLW1vZHVsZV9fYnV0dG9uLUJ2cDZVYCxcblx0XCJpY29uXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2ljb24taklTeGZgLFxuXHRcImljb24tLXRoZW1lLWxpZ2h0XCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2ljb24tLXRoZW1lLWxpZ2h0LVpjRVhqYCxcblx0XCJpY29uLS10aGVtZS1kYXJrXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX2ljb24tLXRoZW1lLWRhcmstTklqU2RgLFxuXHRcInNoYXJlXCI6IGBzcmMtM19mZWF0dXJlcy1EZXRhaWxDb250ZW50LXVpLURldGFpbFRvb2xiYXItRGV0YWlsVG9vbGJhci1tb2R1bGVfX3NoYXJlLUxnWllBYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2Jsb2NrLXdPYTIwIHtcbiAgZ2FwOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX190aXRsZS1UZndWVSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fYnV0dG9uLXhoM1lMIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogODRweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19idXR0b24tLXRoZW1lLWxpZ2h0LWpJbUdRIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xufVxuLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fYnV0dG9uLS10aGVtZS1kYXJrLVN6RVZnIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcbn1cbi5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2J1dHRvbi14aDNZTDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9faWNvbi1iWEVWZCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbn1cbi5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tLXRoZW1lLWxpZ2h0LWJOM0RaIHtcbiAgZmlsbDogdmFyKC0tZGFyay1wcmltYXJ5KTtcbn1cbi5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tLXRoZW1lLWRhcmstSEU5VFgge1xuICBmaWxsOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fdGl0bGUtVGZ3VlUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19pY29uLWJYRVZkIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XG4gIC5zcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX3RpdGxlLVRmd1ZVIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAuc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19jb250cm9scy1lVjk1QSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy8zX2ZlYXR1cmVzL1NoYXJlL3VpL1NoYXJlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQU1BO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBSEo7QUFLSTtFQUNJLGlDQUFBO0FBSFI7QUFNSTtFQUNJLGtDQUFBO0FBSlI7QUFPSTtFQUNJLFlBQUE7QUFMUjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBTko7QUFRSTtFQUNJLHlCQUFBO0FBTlI7QUFTSTtFQUNJLDBCQUFBO0FBUFI7O0FBV0E7RUFDSTtJQUNJLGVBQUE7RUFSTjtFQVdFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFUTjtBQUNGO0FBWUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtFQVZOO0VBYUU7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7RUFYTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ibG9jayB7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbHMge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogODRweDtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0OHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWxpZ2h0IHtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWxpZ2h0IHtcXHJcXG4gICAgICAgIGZpbGw6IHZhcigtLWRhcmstcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBmaWxsOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xcclxcbiAgICAudGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pY29uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250cm9scyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2Jsb2NrLXdPYTIwYCxcblx0XCJ0aXRsZVwiOiBgc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX190aXRsZS1UZndWVWAsXG5cdFwiYnV0dG9uXCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2J1dHRvbi14aDNZTGAsXG5cdFwiYnV0dG9uLS10aGVtZS1saWdodFwiOiBgc3JjLTNfZmVhdHVyZXMtU2hhcmUtdWktU2hhcmUtbW9kdWxlX19idXR0b24tLXRoZW1lLWxpZ2h0LWpJbUdRYCxcblx0XCJidXR0b24tLXRoZW1lLWRhcmtcIjogYHNyYy0zX2ZlYXR1cmVzLVNoYXJlLXVpLVNoYXJlLW1vZHVsZV9fYnV0dG9uLS10aGVtZS1kYXJrLVN6RVZnYCxcblx0XCJpY29uXCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tYlhFVmRgLFxuXHRcImljb24tLXRoZW1lLWxpZ2h0XCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tLXRoZW1lLWxpZ2h0LWJOM0RaYCxcblx0XCJpY29uLS10aGVtZS1kYXJrXCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2ljb24tLXRoZW1lLWRhcmstSEU5VFhgLFxuXHRcImNvbnRyb2xzXCI6IGBzcmMtM19mZWF0dXJlcy1TaGFyZS11aS1TaGFyZS1tb2R1bGVfX2NvbnRyb2xzLWVWOTVBYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtNV9zaGFyZWQtdWktRGF0ZUluZm8tRGF0ZUluZm8tbW9kdWxlX19ibG9jay1scmZ4eiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy01X3NoYXJlZC11aS1EYXRlSW5mby1EYXRlSW5mby1tb2R1bGVfX2Jsb2NrLWxyZnh6IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XG4gIC5zcmMtNV9zaGFyZWQtdWktRGF0ZUluZm8tRGF0ZUluZm8tbW9kdWxlX19ibG9jay1scmZ4eiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNV9zaGFyZWQvdWkvRGF0ZUluZm8vRGF0ZUluZm8ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBR0E7RUFDSTtJQUNJLGVBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSTtJQUNJLGVBQUE7RUFETjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ibG9jayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNV9zaGFyZWQtdWktRGF0ZUluZm8tRGF0ZUluZm8tbW9kdWxlX19ibG9jay1scmZ4emBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvcldyYXBwZXItRWRpdG9yV3JhcHBlci1tb2R1bGVfX2Jsb2NrLUphTlVOIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzVfc2hhcmVkL3VpL0VkaXRvcldyYXBwZXIvRWRpdG9yV3JhcHBlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvY2sge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNV9zaGFyZWQtdWktRWRpdG9yV3JhcHBlci1FZGl0b3JXcmFwcGVyLW1vZHVsZV9fYmxvY2stSmFOVU5gXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhID4gKiB7XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBiLCAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBwcmUge1xuICBmb250LXNpemU6IDIycHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDFlbSAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLUhzclhhIHVsLCAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgb2wge1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgb2wge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEgYmxvY2txdW90ZSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQ7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgbWFyZ2luOiAxZW0gMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLS10aGVtZS1saWdodC1aeF94TiBwcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBjb2xvcjogIzMzMztcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci0tdGhlbWUtbGlnaHQtWnhfeE4gYmxvY2txdW90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci0tdGhlbWUtZGFyay1rdHpJWiBwcmUge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWRhcmspO1xufVxuLnNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLS10aGVtZS1kYXJrLWt0eklaIGJsb2NrcXVvdGUge1xuICBjb2xvcjogI2Y0ZjRmNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWJsdWUpO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xuICAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG4gIC5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSA+ICoge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICB9XG4gIC5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBwcmUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBibG9ja3F1b3RlIHtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItSHNyWGEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG4gIC5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSA+ICoge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICB9XG4gIC5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBwcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5zcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYSBibG9ja3F1b3RlIHtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNV9zaGFyZWQvdWkvRWRpdG9yL0VkaXRvci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxvQkFBQTtBQUNSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBR0k7RUFDSSxjQUFBO0VBQ0Esa0NBQUE7QUFEUjtBQUdRO0VBQ0kscUJBQUE7QUFEWjtBQUtJO0VBQ0ksZ0JBQUE7QUFIUjtBQU1JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBSlI7QUFPSTtFQUNJLDJCQUFBO0FBTFI7QUFRSTtFQUNJLHFCQUFBO0FBTlI7QUFTSTtFQUNJLHdCQUFBO0FBUFI7QUFVSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFSUjtBQVlRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBVlo7QUFhUTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7QUFYWjtBQWdCUTtFQUNJLDJCQUFBO0VBQ0EsZ0NBQUE7QUFkWjtBQWlCUTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBZlo7O0FBb0JBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUFqQk47RUFtQk07SUFDSSxvQkFBQTtFQWpCVjtFQW9CTTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBbEJWO0VBcUJNO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7RUFuQlY7QUFDRjtBQXVCQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VBckJOO0VBdUJNO0lBQ0ksb0JBQUE7RUFyQlY7RUF3Qk07SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQXRCVjtFQXlCTTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0VBdkJWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmVkaXRvciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG5cXHJcXG4gICAgJiA+ICoge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJiA6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGEge1xcclxcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWJsdWUpO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGIsIHN0cm9uZyB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHByZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bCwgb2wge1xcclxcbiAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBvbCB7XFxyXFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYmxvY2txdW90ZSB7XFxyXFxuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBwcmUge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBibG9ja3F1b3RlIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIHByZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWRhcmspO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYmxvY2txdW90ZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmNGY0ZjQ7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmVkaXRvciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcblxcclxcbiAgICAgICAgJiA+ICoge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgcHJlIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGJsb2NrcXVvdGUge1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMWVtIDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmVkaXRvciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcblxcclxcbiAgICAgICAgJiA+ICoge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgcHJlIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMWVtIDEuNWVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGJsb2NrcXVvdGUge1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMWVtIDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZWRpdG9yXCI6IGBzcmMtNV9zaGFyZWQtdWktRWRpdG9yLUVkaXRvci1tb2R1bGVfX2VkaXRvci1Ic3JYYWAsXG5cdFwiZWRpdG9yLS10aGVtZS1saWdodFwiOiBgc3JjLTVfc2hhcmVkLXVpLUVkaXRvci1FZGl0b3ItbW9kdWxlX19lZGl0b3ItLXRoZW1lLWxpZ2h0LVp4X3hOYCxcblx0XCJlZGl0b3ItLXRoZW1lLWRhcmtcIjogYHNyYy01X3NoYXJlZC11aS1FZGl0b3ItRWRpdG9yLW1vZHVsZV9fZWRpdG9yLS10aGVtZS1kYXJrLWt0eklaYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbFBhZ2UubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsUGFnZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbENvbnRlbnQubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxDb250ZW50Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbENvbnRlbnQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxFZGl0b3IubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxFZGl0b3IubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsRWRpdG9yLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsSW50cm8ubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxJbnRyby5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxJbnRyby5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbFBpY3R1cmUubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxQaWN0dXJlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RldGFpbFBpY3R1cmUubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxUb29sYmFyLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGV0YWlsVG9vbGJhci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9EZXRhaWxUb29sYmFyLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2hhcmUubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TaGFyZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TaGFyZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0RhdGVJbmZvLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGF0ZUluZm8ubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRGF0ZUluZm8ubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FZGl0b3JXcmFwcGVyLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRWRpdG9yV3JhcHBlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FZGl0b3JXcmFwcGVyLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRWRpdG9yLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRWRpdG9yLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0VkaXRvci5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJEZXRhaWxDb250ZW50IiwiU2hhcmUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUltYWdlQWx0IiwiZGF0YSIsImFsdFRleHQiLCJzZXRBbHRUZXh0IiwicmVzdWx0U3RyaW5nIiwiY2FwdGlvbiIsImFsdGVybmF0aXZlVGV4dCIsImNhbGNPcGFjaXR5Iiwib2Zmc2V0IiwiaGVpZ2h0IiwicmF0aW8iLCJvZmZzZXRGbG9vciIsIk1hdGgiLCJmbG9vciIsIm9mZnNldEhlaWdodCIsInVzZVNjcm9sbFBlcmNlbnQiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwidXBkYXRlUG9zaXRpb24iLCJvcGFjaXR5Iiwid2luZG93Iiwic2Nyb2xsWSIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VGb3JtYXR0ZWREYXRlIiwidGltZVN0YW1wIiwibGFuZyIsImZvcm1hdHRlZERhdGUiLCJzZXRGb3JtYXR0ZWREYXRlIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJvcHRpb25zIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZm9ybWF0dGVkU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2xpY2UiLCJSZWFjdCIsImNsYXNzTmFtZXMiLCJ1c2VQYXJhbXMiLCJNZXRhUGFnZSIsInVzZUZldGNoRGV2QnlJZCIsInVzZUZldGNoUG9zdEJ5SWQiLCJ1c2VGZXRjaFBob3RvQnlJZCIsIk1haW4iLCJDb250ZW50S2V5VHlwZSIsImNscyIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJmZXRjaE1ldGhvZHMiLCJQT1NUIiwiREVWIiwiUEhPVE8iLCJEZXRhaWxQYWdlIiwiX3JlZiIsIm1vZGUiLCJzbHVnIiwiaXNMb2FkaW5nIiwiY2xhc3NOYW1lIiwibWFpbiIsImNoaWxkcmVuIiwic2VvIiwidW5kZWZpbmVkIiwiRWRpdG9yV3JhcHBlciIsIkRldGFpbENvZGUiLCJwcm9wcyIsInVzZVRoZW1lIiwiQXBwVGhlbWUiLCJDb250YWluZXIiLCJEZXRhaWxJbnRybyIsIkRldGFpbEVkaXRvciIsIkRldGFpbFRvb2xiYXIiLCJGYW5jeWJveERlY29yYXRvciIsInRoZW1lIiwiYmxvY2tUaGVtZSIsInNldEJsb2NrVGhlbWUiLCJwcmV2aWV3SW52ZXJ0ZWQiLCJEQVJLIiwiTElHSFQiLCJibG9jayIsInN0eWxlIiwicGljdHVyZSIsInByZXZpZXciLCJ1cmwiLCJzcmMiLCJfX0JBU0VfVVJMX18iLCJhbHQiLCJjb250ZW50IiwiQmxvY2tzUmVuZGVyZXIiLCJFZGl0b3IiLCJTa2VsZXRvbiIsIlNrZWxldG9uTW9kZSIsIkRldGFpbExpbmsiLCJEZXRhaWxMaXN0IiwiRGV0YWlsUXVvdGUiLCJEZXRhaWxQaWN0dXJlIiwiRGV0YWlsSGVhZGluZyIsIkRldGFpbFBhcmFncmFwaCIsImVkaXRvciIsInN0cmluZ3MiLCJMSU5FUyIsImJsb2NrcyIsInBhcmFncmFwaCIsImltYWdlIiwiX3JlZjIiLCJoZWFkaW5nIiwiX3JlZjMiLCJsZXZlbCIsImxpbmsiLCJfcmVmNCIsImNvZGUiLCJfcmVmNSIsImxpc3QiLCJfcmVmNiIsImZvcm1hdCIsInF1b3RlIiwiX3JlZjciLCJ0YWciLCJjcmVhdGVFbGVtZW50IiwiTGlzdFRhZ3MiLCJBcnRpY2xlVGFnIiwiQXJ0aWNsZUNhdGVnb3J5IiwiQXJ0aWNsZUNhdGVnb3J5TW9kZSIsImdyaWQiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsInRhZ0FycmF5IiwidGFncyIsImNhdGVnb3J5IiwiaXNJbnZlcnRlZCIsImludHJvIiwiaGlkZGVuIiwidGl0bGUiLCJwcmV2aWV3VGl0bGUiLCJwcmV2aWV3Q2FwdGlvbiIsInRoZW1lUHJvcCIsIlNUQVRJQyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpZCIsImhyZWYiLCJyZWwiLCJ0YXJnZXQiLCJsaXN0VGFnIiwiZ2FsbGVyeUtleSIsImltYWdlUGF0aCIsImZvcm1hdHMiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwiZmlndXJlIiwibG9hZGluZyIsImZpZ2NhcHRpb24iLCJ0ZXh0IiwiZm9yd2FyZFJlZiIsIkRhdGVJbmZvIiwiSWNvbiIsInJlZiIsImZvb3RlciIsInB1Ymxpc2hlZEF0IiwidGltZSIsImJ1dHRvbiIsImljb24iLCJzaGFyZSIsIlZLU2hhcmVCdXR0b24iLCJUd2l0dGVyU2hhcmVCdXR0b24iLCJGYWNlYm9va1NoYXJlQnV0dG9uIiwiVGVsZWdyYW1TaGFyZUJ1dHRvbiIsInVzZVRyYW5zbGF0aW9uIiwiQ29udHJvbHMiLCJJY29uS2V5IiwiSWNvblNvY2lhbCIsInQiLCJ0aGVtZU1vZGUiLCJjb250cm9scyIsInJlc2V0QnV0dG9uU3R5bGUiLCJpY29uS2V5IiwiVksiLCJYIiwiRkIiLCJURyIsInVzZVRpbWUiLCJpMThuIiwibGFuZ3VhZ2UiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=