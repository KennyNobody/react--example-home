"use strict";
(self["webpackChunkreact_home"] = self["webpackChunkreact_home"] || []).push([["src_3_features_MetaPage_index_ts-src_4_entities_Dev_index_ts-src_4_entities_Photo_index_ts-sr-75b830"],{

/***/ "./src/5_shared/assets/icons/arrow-next.svg":
/*!**************************************************!*\
  !*** ./src/5_shared/assets/icons/arrow-next.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgArrowNext = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 57 51"
}, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  d: "M49.338 23.5 30.202 3.378 33.101.622 56.76 25.5 33.1 50.378l-2.898-2.756L49.338 27.5H0v-4h49.338Z",
  clipRule: "evenodd"
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowNext);

/***/ }),

/***/ "./src/3_features/MetaPage/index.ts":
/*!******************************************!*\
  !*** ./src/3_features/MetaPage/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetaPage: () => (/* reexport safe */ _ui_MetaPage__WEBPACK_IMPORTED_MODULE_0__.MetaPage)
/* harmony export */ });
/* harmony import */ var _ui_MetaPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/MetaPage */ "./src/3_features/MetaPage/ui/MetaPage.tsx");


/***/ }),

/***/ "./src/4_entities/Category/api/categoryApi.ts":
/*!****************************************************!*\
  !*** ./src/4_entities/Category/api/categoryApi.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoryApi: () => (/* binding */ categoryApi),
/* harmony export */   useFetchCategoryList: () => (/* binding */ useFetchCategoryList)
/* harmony export */ });
/* harmony import */ var _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/api/rtkApi */ "./src/5_shared/api/rtkApi.ts");
/* harmony import */ var _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/api/endpoints */ "./src/5_shared/api/endpoints.ts");
/* harmony import */ var _model_types_CategoryMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/types/CategoryMode */ "./src/4_entities/Category/model/types/CategoryMode.ts");



const categoryApi = _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__.rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchCategoryList: build.query({
      query: mode => ({
        url: mode === _model_types_CategoryMode__WEBPACK_IMPORTED_MODULE_2__.CategoryMode.DEV ? _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.DEV_TAG_LIST : _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.POST_CAT_LIST,
        params: {
          _limit: 99
        }
      }),
      providesTags: ['category']
    })
  }),
  overrideExisting: false
});
const useFetchCategoryList = categoryApi.useFetchCategoryListQuery;


/***/ }),

/***/ "./src/4_entities/Category/index.ts":
/*!******************************************!*\
  !*** ./src/4_entities/Category/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleCategory: () => (/* reexport safe */ _ui_ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_0__.ArticleCategory),
/* harmony export */   ArticleCategoryMode: () => (/* reexport safe */ _ui_ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_0__.ArticleCategoryMode),
/* harmony export */   ArticleTag: () => (/* reexport safe */ _ui_ArticleTag_ArticleTag__WEBPACK_IMPORTED_MODULE_6__.ArticleTag),
/* harmony export */   CategoryMode: () => (/* reexport safe */ _model_types_CategoryMode__WEBPACK_IMPORTED_MODULE_4__.CategoryMode),
/* harmony export */   GridCategory: () => (/* reexport safe */ _ui_GridCategory_GridCategory__WEBPACK_IMPORTED_MODULE_2__.GridCategory),
/* harmony export */   ListCategory: () => (/* reexport safe */ _ui_ListCategory_ListCategory__WEBPACK_IMPORTED_MODULE_1__.ListCategory),
/* harmony export */   ListTags: () => (/* reexport safe */ _ui_ListTags_ListTags__WEBPACK_IMPORTED_MODULE_5__.ListTags),
/* harmony export */   categoryApi: () => (/* reexport safe */ _api_categoryApi__WEBPACK_IMPORTED_MODULE_3__.categoryApi),
/* harmony export */   useFetchCategoryList: () => (/* reexport safe */ _api_categoryApi__WEBPACK_IMPORTED_MODULE_3__.useFetchCategoryList)
/* harmony export */ });
/* harmony import */ var _ui_ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ArticleCategory/ArticleCategory */ "./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.tsx");
/* harmony import */ var _ui_ListCategory_ListCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ListCategory/ListCategory */ "./src/4_entities/Category/ui/ListCategory/ListCategory.tsx");
/* harmony import */ var _ui_GridCategory_GridCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/GridCategory/GridCategory */ "./src/4_entities/Category/ui/GridCategory/GridCategory.tsx");
/* harmony import */ var _api_categoryApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/categoryApi */ "./src/4_entities/Category/api/categoryApi.ts");
/* harmony import */ var _model_types_CategoryMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/types/CategoryMode */ "./src/4_entities/Category/model/types/CategoryMode.ts");
/* harmony import */ var _ui_ListTags_ListTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/ListTags/ListTags */ "./src/4_entities/Category/ui/ListTags/ListTags.tsx");
/* harmony import */ var _ui_ArticleTag_ArticleTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/ArticleTag/ArticleTag */ "./src/4_entities/Category/ui/ArticleTag/ArticleTag.tsx");








/***/ }),

/***/ "./src/4_entities/Category/model/types/ArticleCategory.ts":
/*!****************************************************************!*\
  !*** ./src/4_entities/Category/model/types/ArticleCategory.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/4_entities/Category/model/types/CategoryMode.ts":
/*!*************************************************************!*\
  !*** ./src/4_entities/Category/model/types/CategoryMode.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryMode: () => (/* binding */ CategoryMode)
/* harmony export */ });
let CategoryMode = /*#__PURE__*/function (CategoryMode) {
  CategoryMode["POST"] = "post";
  CategoryMode["DEV"] = "dev";
  return CategoryMode;
}({});

/***/ }),

/***/ "./src/4_entities/Dev/api/devApi.ts":
/*!******************************************!*\
  !*** ./src/4_entities/Dev/api/devApi.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   devApi: () => (/* binding */ devApi),
/* harmony export */   useFetchDevById: () => (/* binding */ useFetchDevById),
/* harmony export */   useLazyFetchDevList: () => (/* binding */ useLazyFetchDevList)
/* harmony export */ });
/* harmony import */ var _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/api/rtkApi */ "./src/5_shared/api/rtkApi.ts");
/* harmony import */ var _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/api/endpoints */ "./src/5_shared/api/endpoints.ts");


const devApi = _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__.rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchDevList: build.query({
      query: params => ({
        url: _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.DEVS_LIST,
        params
      }),
      providesTags: ['dev']
    }),
    fetchDevById: build.query({
      query: id => ({
        url: `${_5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.DEVS_LIST}/${id}/`,
        params: {
          populate: 'main.preview,tags,category'
        }
      }),
      providesTags: ['devSingle'],
      transformResponse: response => response.data
    })
  }),
  overrideExisting: false
});
const useFetchDevById = devApi.useFetchDevByIdQuery;
const useLazyFetchDevList = devApi.useLazyFetchDevListQuery;


/***/ }),

/***/ "./src/4_entities/Dev/index.ts":
/*!*************************************!*\
  !*** ./src/4_entities/Dev/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleDev: () => (/* reexport safe */ _ui_ArticleDev_ArticleDev__WEBPACK_IMPORTED_MODULE_0__.ArticleDev),
/* harmony export */   GridDev: () => (/* reexport safe */ _ui_GridDev_GridDev__WEBPACK_IMPORTED_MODULE_1__.GridDev),
/* harmony export */   devListActions: () => (/* reexport safe */ _model_slices_devListSlice__WEBPACK_IMPORTED_MODULE_2__.devListActions),
/* harmony export */   devListReducer: () => (/* reexport safe */ _model_slices_devListSlice__WEBPACK_IMPORTED_MODULE_2__.devListReducer),
/* harmony export */   fetchNextDevList: () => (/* reexport safe */ _model_services_fetchNextDevList_fetchNextDevList__WEBPACK_IMPORTED_MODULE_3__.fetchNextDevList),
/* harmony export */   getDevList: () => (/* reexport safe */ _model_slices_devListSlice__WEBPACK_IMPORTED_MODULE_2__.getDevList),
/* harmony export */   getDevListCategory: () => (/* reexport safe */ _model_selectors_devList__WEBPACK_IMPORTED_MODULE_5__.getDevListCategory),
/* harmony export */   getDevListCount: () => (/* reexport safe */ _model_selectors_devList__WEBPACK_IMPORTED_MODULE_5__.getDevListCount),
/* harmony export */   getDevListLoading: () => (/* reexport safe */ _model_selectors_devList__WEBPACK_IMPORTED_MODULE_5__.getDevListLoading),
/* harmony export */   getDevListPage: () => (/* reexport safe */ _model_selectors_devList__WEBPACK_IMPORTED_MODULE_5__.getDevListPage),
/* harmony export */   initDev: () => (/* reexport safe */ _model_services_initDevList_initDev__WEBPACK_IMPORTED_MODULE_6__.initDev),
/* harmony export */   useFetchDevById: () => (/* reexport safe */ _api_devApi__WEBPACK_IMPORTED_MODULE_4__.useFetchDevById),
/* harmony export */   useLazyFetchDevList: () => (/* reexport safe */ _api_devApi__WEBPACK_IMPORTED_MODULE_4__.useLazyFetchDevList)
/* harmony export */ });
/* harmony import */ var _ui_ArticleDev_ArticleDev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ArticleDev/ArticleDev */ "./src/4_entities/Dev/ui/ArticleDev/ArticleDev.tsx");
/* harmony import */ var _ui_GridDev_GridDev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/GridDev/GridDev */ "./src/4_entities/Dev/ui/GridDev/GridDev.tsx");
/* harmony import */ var _model_slices_devListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/slices/devListSlice */ "./src/4_entities/Dev/model/slices/devListSlice.ts");
/* harmony import */ var _model_services_fetchNextDevList_fetchNextDevList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/services/fetchNextDevList/fetchNextDevList */ "./src/4_entities/Dev/model/services/fetchNextDevList/fetchNextDevList.ts");
/* harmony import */ var _api_devApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/devApi */ "./src/4_entities/Dev/api/devApi.ts");
/* harmony import */ var _model_selectors_devList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/selectors/devList */ "./src/4_entities/Dev/model/selectors/devList.ts");
/* harmony import */ var _model_services_initDevList_initDev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/services/initDevList/initDev */ "./src/4_entities/Dev/model/services/initDevList/initDev.ts");








/***/ }),

/***/ "./src/4_entities/Dev/model/selectors/devList.ts":
/*!*******************************************************!*\
  !*** ./src/4_entities/Dev/model/selectors/devList.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDevListCategory: () => (/* binding */ getDevListCategory),
/* harmony export */   getDevListCount: () => (/* binding */ getDevListCount),
/* harmony export */   getDevListLoading: () => (/* binding */ getDevListLoading),
/* harmony export */   getDevListPage: () => (/* binding */ getDevListPage),
/* harmony export */   getDevListPerPage: () => (/* binding */ getDevListPerPage)
/* harmony export */ });
const getDevListLoading = state => state?.devList?.isLoading;
const getDevListPerPage = state => state?.devList?.perPage;
const getDevListPage = state => state?.devList?.page;
const getDevListCount = state => state?.devList?.count;
const getDevListCategory = state => state?.devList?.category;

/***/ }),

/***/ "./src/4_entities/Dev/model/services/fetchNextDevList/fetchNextDevList.ts":
/*!********************************************************************************!*\
  !*** ./src/4_entities/Dev/model/services/fetchNextDevList/fetchNextDevList.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchNextDevList: () => (/* binding */ fetchNextDevList)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/types/RequestData */ "./src/5_shared/types/RequestData.ts");
/* harmony import */ var _selectors_devList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selectors/devList */ "./src/4_entities/Dev/model/selectors/devList.ts");
/* harmony import */ var _slices_devListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../slices/devListSlice */ "./src/4_entities/Dev/model/slices/devListSlice.ts");




const fetchNextDevList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('devList/fetchNextDevList', async (props, thunkAPI) => {
  const {
    getState,
    dispatch
  } = thunkAPI;
  const {
    replace
  } = props;
  const perPage = (0,_selectors_devList__WEBPACK_IMPORTED_MODULE_1__.getDevListPerPage)(getState()) || 1;
  const listIndex = (0,_selectors_devList__WEBPACK_IMPORTED_MODULE_1__.getDevListPage)(getState()) || 1;
  const category = (0,_selectors_devList__WEBPACK_IMPORTED_MODULE_1__.getDevListCategory)(getState());
  const listLength = (0,_selectors_devList__WEBPACK_IMPORTED_MODULE_1__.getDevListCount)(getState());
  const pageNumber = listIndex === listLength ? listIndex : listIndex + 1;
  const params = {
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.SIZE]: perPage,
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.PAGE]: replace ? 1 : pageNumber,
    sort: 'publishedAt:DESC',
    populate: '*',
    replace
  };
  if (category) {
    params[_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.TAG] = category;
  }
  await props.getData(params, true).then(response => {
    // @ts-ignore
    const {
      data,
      meta
    } = response.data;
    const dataMethod = replace ? _slices_devListSlice__WEBPACK_IMPORTED_MODULE_2__.devListActions.replaceData : _slices_devListSlice__WEBPACK_IMPORTED_MODULE_2__.devListActions.addData;
    // @ts-ignore
    dispatch(dataMethod(data));
    // @ts-ignore
    dispatch(postListActions.setPagination(meta.pagination));
  });
});

/***/ }),

/***/ "./src/4_entities/Dev/model/services/initDevList/initDev.ts":
/*!******************************************************************!*\
  !*** ./src/4_entities/Dev/model/services/initDevList/initDev.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDev: () => (/* binding */ initDev)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/types/RequestData */ "./src/5_shared/types/RequestData.ts");
/* harmony import */ var _slices_devListSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/devListSlice */ "./src/4_entities/Dev/model/slices/devListSlice.ts");
/* harmony import */ var _selectors_devList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/devList */ "./src/4_entities/Dev/model/selectors/devList.ts");




const initDev = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('devList/initDevList', async (getData, thunkAPI) => {
  const {
    dispatch,
    getState
  } = thunkAPI;
  const perPage = (0,_selectors_devList__WEBPACK_IMPORTED_MODULE_2__.getDevListPerPage)(getState()) || 1;
  const params = {
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.PAGE]: 1,
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.SIZE]: perPage,
    sort: 'publishedAt:DESC',
    replace: false,
    populate: '*'
  };
  await getData(params, true).then(response => {
    // @ts-ignore
    const {
      data,
      meta
    } = response.data;
    dispatch(_slices_devListSlice__WEBPACK_IMPORTED_MODULE_1__.devListActions.addData(data));
    // @ts-ignore
    dispatch(_slices_devListSlice__WEBPACK_IMPORTED_MODULE_1__.devListActions.setPagination(meta.pagination));
  });
});

/***/ }),

/***/ "./src/4_entities/Dev/model/slices/devListSlice.ts":
/*!*********************************************************!*\
  !*** ./src/4_entities/Dev/model/slices/devListSlice.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   devListActions: () => (/* binding */ devListActions),
/* harmony export */   devListReducer: () => (/* binding */ devListReducer),
/* harmony export */   getDevList: () => (/* binding */ getDevList)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _api_devApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/devApi */ "./src/4_entities/Dev/api/devApi.ts");


const devListAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)();
devListAdapter.selectId = item => item.id;
const getDevList = devListAdapter.getSelectors(state => state.devList || devListAdapter.getInitialState());
const initialState = {
  page: 1,
  perPage: 5,
  isLoading: false,
  errors: undefined,
  category: undefined,
  count: 1,
  ids: [],
  entities: {}
};
const devListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'devListSlice',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLength: (state, action) => {
      state.count = action.payload;
    },
    addData: (state, action) => {
      devListAdapter.addMany(state, action.payload);
    },
    replaceData: (state, action) => {
      devListAdapter.setAll(state, action.payload);
    },
    setPagination: (state, action) => {
      const pagination = action.payload;
      state.page = pagination.page;
      state.count = pagination.pageCount;
    },
    toggleCategory: (state, action) => {
      if (state.category === action.payload) {
        state.category = undefined;
      } else {
        state.category = action.payload;
      }
    }
  },
  extraReducers: builder => {
    const request = _api_devApi__WEBPACK_IMPORTED_MODULE_0__.devApi.endpoints.fetchDevList;
    builder.addMatcher(request.matchPending, (state, action) => {
      const {
        replace
      } = action.meta.arg.originalArgs;
      if (replace) devListAdapter.removeAll(state);
      state.errors = undefined;
      state.isLoading = true;
    }).addMatcher(request.matchFulfilled, state => {
      state.isLoading = false;
    }).addMatcher(request.matchRejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  }
});
const {
  reducer: devListReducer,
  actions: devListActions
} = devListSlice;

/***/ }),

/***/ "./src/4_entities/Photo/api/photoApi.ts":
/*!**********************************************!*\
  !*** ./src/4_entities/Photo/api/photoApi.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   photoApi: () => (/* binding */ photoApi),
/* harmony export */   useFetchPhotoById: () => (/* binding */ useFetchPhotoById),
/* harmony export */   useLazyFetchPhotoList: () => (/* binding */ useLazyFetchPhotoList)
/* harmony export */ });
/* harmony import */ var _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/api/rtkApi */ "./src/5_shared/api/rtkApi.ts");
/* harmony import */ var _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/api/endpoints */ "./src/5_shared/api/endpoints.ts");


const photoApi = _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__.rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchPhotoList: build.query({
      query: params => ({
        url: _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.PHOTO_LIST,
        params: {
          ...params,
          populate: 'main.preview'
        }
      }),
      providesTags: ['photo']
    }),
    fetchPhotoById: build.query({
      query: id => ({
        url: `${_5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.PHOTO_LIST}/${id}/`,
        params: {
          populate: 'main.preview'
        }
      }),
      providesTags: ['photoSingle'],
      transformResponse: response => response.data
    })
  }),
  overrideExisting: false
});
const useFetchPhotoById = photoApi.useFetchPhotoByIdQuery;
const useLazyFetchPhotoList = photoApi.useLazyFetchPhotoListQuery;


/***/ }),

/***/ "./src/4_entities/Photo/index.ts":
/*!***************************************!*\
  !*** ./src/4_entities/Photo/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridPhoto: () => (/* reexport safe */ _ui_GridPhoto_GridPhoto__WEBPACK_IMPORTED_MODULE_0__.GridPhoto),
/* harmony export */   fetchNextPhotoList: () => (/* reexport safe */ _4_entities_Photo_model_services_fetchNextPhotoList_fetchNextPhotoList__WEBPACK_IMPORTED_MODULE_3__.fetchNextPhotoList),
/* harmony export */   getPhotoList: () => (/* reexport safe */ _model_slices_photoListSlice__WEBPACK_IMPORTED_MODULE_2__.getPhotoList),
/* harmony export */   getPhotoListCount: () => (/* reexport safe */ _model_selectors_photoList__WEBPACK_IMPORTED_MODULE_5__.getPhotoListCount),
/* harmony export */   getPhotoListLoading: () => (/* reexport safe */ _model_selectors_photoList__WEBPACK_IMPORTED_MODULE_5__.getPhotoListLoading),
/* harmony export */   getPhotoListPage: () => (/* reexport safe */ _model_selectors_photoList__WEBPACK_IMPORTED_MODULE_5__.getPhotoListPage),
/* harmony export */   initPhotoList: () => (/* reexport safe */ _model_services_initPhotoList_initPhotoList__WEBPACK_IMPORTED_MODULE_4__.initPhotoList),
/* harmony export */   photoApi: () => (/* reexport safe */ _api_photoApi__WEBPACK_IMPORTED_MODULE_1__.photoApi),
/* harmony export */   photoListActions: () => (/* reexport safe */ _model_slices_photoListSlice__WEBPACK_IMPORTED_MODULE_2__.photoListActions),
/* harmony export */   photoListReducer: () => (/* reexport safe */ _model_slices_photoListSlice__WEBPACK_IMPORTED_MODULE_2__.photoListReducer),
/* harmony export */   useFetchPhotoById: () => (/* reexport safe */ _api_photoApi__WEBPACK_IMPORTED_MODULE_1__.useFetchPhotoById),
/* harmony export */   useLazyFetchPhotoList: () => (/* reexport safe */ _api_photoApi__WEBPACK_IMPORTED_MODULE_1__.useLazyFetchPhotoList)
/* harmony export */ });
/* harmony import */ var _ui_GridPhoto_GridPhoto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/GridPhoto/GridPhoto */ "./src/4_entities/Photo/ui/GridPhoto/GridPhoto.tsx");
/* harmony import */ var _api_photoApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/photoApi */ "./src/4_entities/Photo/api/photoApi.ts");
/* harmony import */ var _model_slices_photoListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/slices/photoListSlice */ "./src/4_entities/Photo/model/slices/photoListSlice.ts");
/* harmony import */ var _4_entities_Photo_model_services_fetchNextPhotoList_fetchNextPhotoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 4_entities/Photo/model/services/fetchNextPhotoList/fetchNextPhotoList */ "./src/4_entities/Photo/model/services/fetchNextPhotoList/fetchNextPhotoList.ts");
/* harmony import */ var _model_services_initPhotoList_initPhotoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/services/initPhotoList/initPhotoList */ "./src/4_entities/Photo/model/services/initPhotoList/initPhotoList.ts");
/* harmony import */ var _model_selectors_photoList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/selectors/photoList */ "./src/4_entities/Photo/model/selectors/photoList.ts");







/***/ }),

/***/ "./src/4_entities/Photo/model/selectors/photoList.ts":
/*!***********************************************************!*\
  !*** ./src/4_entities/Photo/model/selectors/photoList.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPhotoListCount: () => (/* binding */ getPhotoListCount),
/* harmony export */   getPhotoListLoading: () => (/* binding */ getPhotoListLoading),
/* harmony export */   getPhotoListPage: () => (/* binding */ getPhotoListPage),
/* harmony export */   getPhotoListPerPage: () => (/* binding */ getPhotoListPerPage)
/* harmony export */ });
const getPhotoListLoading = state => state?.photoList?.isLoading;
const getPhotoListPerPage = state => state?.photoList?.perPage;
const getPhotoListPage = state => state?.photoList?.page;
const getPhotoListCount = state => state?.photoList?.count;

/***/ }),

/***/ "./src/4_entities/Photo/model/services/fetchNextPhotoList/fetchNextPhotoList.ts":
/*!**************************************************************************************!*\
  !*** ./src/4_entities/Photo/model/services/fetchNextPhotoList/fetchNextPhotoList.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchNextPhotoList: () => (/* binding */ fetchNextPhotoList)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/types/RequestData */ "./src/5_shared/types/RequestData.ts");
/* harmony import */ var _selectors_photoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selectors/photoList */ "./src/4_entities/Photo/model/selectors/photoList.ts");
/* harmony import */ var _slices_photoListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../slices/photoListSlice */ "./src/4_entities/Photo/model/slices/photoListSlice.ts");




const fetchNextPhotoList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('photoList/fetchNextPhotoList', async (props, thunkAPI) => {
  const {
    getState,
    dispatch
  } = thunkAPI;
  const {
    replace
  } = props;
  const perPage = (0,_selectors_photoList__WEBPACK_IMPORTED_MODULE_1__.getPhotoListPerPage)(getState()) || 1;
  const listIndex = (0,_selectors_photoList__WEBPACK_IMPORTED_MODULE_1__.getPhotoListPage)(getState()) || 1;
  const listLength = (0,_selectors_photoList__WEBPACK_IMPORTED_MODULE_1__.getPhotoListCount)(getState());
  const pageNumber = listIndex === listLength ? listIndex : listIndex + 1;
  const params = {
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.SIZE]: perPage,
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.PAGE]: replace ? 1 : pageNumber,
    sort: 'publishedAt:DESC',
    populate: '*',
    replace
  };
  await props.getData(params, true).then(response => {
    // @ts-ignore
    const {
      data,
      meta
    } = response.data;
    const dataMethod = replace ? _slices_photoListSlice__WEBPACK_IMPORTED_MODULE_2__.photoListActions.replaceData : _slices_photoListSlice__WEBPACK_IMPORTED_MODULE_2__.photoListActions.addData;
    // @ts-ignore
    dispatch(dataMethod(data));
    // @ts-ignore
    dispatch(_slices_photoListSlice__WEBPACK_IMPORTED_MODULE_2__.photoListActions.setPagination(meta.pagination));
  });
});

/***/ }),

/***/ "./src/4_entities/Photo/model/services/initPhotoList/initPhotoList.ts":
/*!****************************************************************************!*\
  !*** ./src/4_entities/Photo/model/services/initPhotoList/initPhotoList.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPhotoList: () => (/* binding */ initPhotoList)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/types/RequestData */ "./src/5_shared/types/RequestData.ts");
/* harmony import */ var _slices_photoListSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/photoListSlice */ "./src/4_entities/Photo/model/slices/photoListSlice.ts");
/* harmony import */ var _selectors_photoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/photoList */ "./src/4_entities/Photo/model/selectors/photoList.ts");




const initPhotoList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('photoList/initPhotoList', async (getData, thunkAPI) => {
  const {
    dispatch,
    getState
  } = thunkAPI;
  const perPage = (0,_selectors_photoList__WEBPACK_IMPORTED_MODULE_2__.getPhotoListPerPage)(getState()) || 1;
  const params = {
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.PAGE]: 1,
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.SIZE]: perPage,
    sort: 'publishedAt:DESC',
    replace: false,
    // TODO: Вынести постоянные параметры в API
    populate: '*'
  };
  await getData(params, true).then(response => {
    // @ts-ignore
    const {
      data,
      meta
    } = response.data;
    dispatch(_slices_photoListSlice__WEBPACK_IMPORTED_MODULE_1__.photoListActions.addData(data));
    // @ts-ignore
    dispatch(_slices_photoListSlice__WEBPACK_IMPORTED_MODULE_1__.photoListActions.setPagination(meta.pagination));
  });
});

/***/ }),

/***/ "./src/4_entities/Photo/model/slices/photoListSlice.ts":
/*!*************************************************************!*\
  !*** ./src/4_entities/Photo/model/slices/photoListSlice.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPhotoList: () => (/* binding */ getPhotoList),
/* harmony export */   photoListActions: () => (/* binding */ photoListActions),
/* harmony export */   photoListReducer: () => (/* binding */ photoListReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _api_photoApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/photoApi */ "./src/4_entities/Photo/api/photoApi.ts");


const photoListAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)();
photoListAdapter.selectId = item => item.id;
const getPhotoList = photoListAdapter.getSelectors(state => state.photoList || photoListAdapter.getInitialState());
const initialState = {
  page: 1,
  perPage: 8,
  isLoading: false,
  errors: undefined,
  count: 1,
  ids: [],
  entities: {}
};
const photoListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'photoListSlice',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLength: (state, action) => {
      state.count = action.payload;
    },
    addData: (state, action) => {
      photoListAdapter.addMany(state, action.payload);
    },
    replaceData: (state, action) => {
      photoListAdapter.setAll(state, action.payload);
    },
    setPagination: (state, action) => {
      const pagination = action.payload;
      state.page = pagination.page;
      state.count = pagination.pageCount;
    }
  },
  extraReducers: builder => {
    const request = _api_photoApi__WEBPACK_IMPORTED_MODULE_0__.photoApi.endpoints.fetchPhotoList;
    builder.addMatcher(request.matchPending, (state, action) => {
      const {
        replace
      } = action.meta.arg.originalArgs;
      if (replace) photoListAdapter.removeAll(state);
      state.errors = undefined;
      state.isLoading = true;
    }).addMatcher(request.matchFulfilled, state => {
      state.isLoading = false;
    }).addMatcher(request.matchRejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  }
});
const {
  reducer: photoListReducer,
  actions: photoListActions
} = photoListSlice;

/***/ }),

/***/ "./src/4_entities/Post/api/postApi.ts":
/*!********************************************!*\
  !*** ./src/4_entities/Post/api/postApi.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postApi: () => (/* binding */ postApi),
/* harmony export */   useFetchPostById: () => (/* binding */ useFetchPostById),
/* harmony export */   useLazyFetchPostList: () => (/* binding */ useLazyFetchPostList)
/* harmony export */ });
/* harmony import */ var _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/api/rtkApi */ "./src/5_shared/api/rtkApi.ts");
/* harmony import */ var _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/api/endpoints */ "./src/5_shared/api/endpoints.ts");


const postApi = _5_shared_api_rtkApi__WEBPACK_IMPORTED_MODULE_0__.rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchPostList: build.query({
      query: params => ({
        url: _5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.POSTS_LIST,
        params: {
          ...params,
          populate: 'main.preview,category'
        }
      }),
      providesTags: ['post']
    }),
    fetchPostById: build.query({
      query: id => ({
        url: `${_5_shared_api_endpoints__WEBPACK_IMPORTED_MODULE_1__.Routes.POSTS_LIST}/${id}/`,
        params: {
          populate: 'main.preview,tags,category,seo'
        }
      }),
      providesTags: ['postSingle'],
      transformResponse: response => response.data
    })
  }),
  overrideExisting: false
});
const useFetchPostById = postApi.useFetchPostByIdQuery;
const useLazyFetchPostList = postApi.useLazyFetchPostListQuery;


/***/ }),

/***/ "./src/4_entities/Post/index.ts":
/*!**************************************!*\
  !*** ./src/4_entities/Post/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridPosts: () => (/* reexport safe */ _ui_GridPosts_GridPosts__WEBPACK_IMPORTED_MODULE_0__.GridPosts),
/* harmony export */   fetchNextPostList: () => (/* reexport safe */ _model_services_fetchNextPostList_fetchNextPostList__WEBPACK_IMPORTED_MODULE_3__.fetchNextPostList),
/* harmony export */   getPostList: () => (/* reexport safe */ _model_slices_postListSlice__WEBPACK_IMPORTED_MODULE_2__.getPostList),
/* harmony export */   getPostListCategory: () => (/* reexport safe */ _model_selectors_postList__WEBPACK_IMPORTED_MODULE_5__.getPostListCategory),
/* harmony export */   getPostListCount: () => (/* reexport safe */ _model_selectors_postList__WEBPACK_IMPORTED_MODULE_5__.getPostListCount),
/* harmony export */   getPostListLoading: () => (/* reexport safe */ _model_selectors_postList__WEBPACK_IMPORTED_MODULE_5__.getPostListLoading),
/* harmony export */   getPostListPage: () => (/* reexport safe */ _model_selectors_postList__WEBPACK_IMPORTED_MODULE_5__.getPostListPage),
/* harmony export */   initPostList: () => (/* reexport safe */ _model_services_initPostList_initPostList__WEBPACK_IMPORTED_MODULE_4__.initPostList),
/* harmony export */   postApi: () => (/* reexport safe */ _api_postApi__WEBPACK_IMPORTED_MODULE_1__.postApi),
/* harmony export */   postListActions: () => (/* reexport safe */ _model_slices_postListSlice__WEBPACK_IMPORTED_MODULE_2__.postListActions),
/* harmony export */   postListReducer: () => (/* reexport safe */ _model_slices_postListSlice__WEBPACK_IMPORTED_MODULE_2__.postListReducer),
/* harmony export */   useFetchPostById: () => (/* reexport safe */ _api_postApi__WEBPACK_IMPORTED_MODULE_1__.useFetchPostById),
/* harmony export */   useLazyFetchPostList: () => (/* reexport safe */ _api_postApi__WEBPACK_IMPORTED_MODULE_1__.useLazyFetchPostList)
/* harmony export */ });
/* harmony import */ var _ui_GridPosts_GridPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/GridPosts/GridPosts */ "./src/4_entities/Post/ui/GridPosts/GridPosts.tsx");
/* harmony import */ var _api_postApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/postApi */ "./src/4_entities/Post/api/postApi.ts");
/* harmony import */ var _model_slices_postListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/slices/postListSlice */ "./src/4_entities/Post/model/slices/postListSlice.ts");
/* harmony import */ var _model_services_fetchNextPostList_fetchNextPostList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/services/fetchNextPostList/fetchNextPostList */ "./src/4_entities/Post/model/services/fetchNextPostList/fetchNextPostList.ts");
/* harmony import */ var _model_services_initPostList_initPostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/services/initPostList/initPostList */ "./src/4_entities/Post/model/services/initPostList/initPostList.ts");
/* harmony import */ var _model_selectors_postList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/selectors/postList */ "./src/4_entities/Post/model/selectors/postList.ts");







/***/ }),

/***/ "./src/4_entities/Post/model/selectors/postList.ts":
/*!*********************************************************!*\
  !*** ./src/4_entities/Post/model/selectors/postList.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPostListCategory: () => (/* binding */ getPostListCategory),
/* harmony export */   getPostListCount: () => (/* binding */ getPostListCount),
/* harmony export */   getPostListLoading: () => (/* binding */ getPostListLoading),
/* harmony export */   getPostListPage: () => (/* binding */ getPostListPage),
/* harmony export */   getPostListPerPage: () => (/* binding */ getPostListPerPage)
/* harmony export */ });
const getPostListLoading = state => state?.postList?.isLoading;
const getPostListPerPage = state => state?.postList?.perPage;
const getPostListPage = state => state?.postList?.page;
const getPostListCount = state => state?.postList?.count;
const getPostListCategory = state => state?.postList?.category;

/***/ }),

/***/ "./src/4_entities/Post/model/services/fetchNextPostList/fetchNextPostList.ts":
/*!***********************************************************************************!*\
  !*** ./src/4_entities/Post/model/services/fetchNextPostList/fetchNextPostList.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchNextPostList: () => (/* binding */ fetchNextPostList)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/types/RequestData */ "./src/5_shared/types/RequestData.ts");
/* harmony import */ var _selectors_postList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selectors/postList */ "./src/4_entities/Post/model/selectors/postList.ts");
/* harmony import */ var _slices_postListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../slices/postListSlice */ "./src/4_entities/Post/model/slices/postListSlice.ts");




const fetchNextPostList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('postList/fetchNextPostList', async (props, thunkAPI) => {
  const {
    getState,
    dispatch
  } = thunkAPI;
  const {
    replace
  } = props;
  const perPage = (0,_selectors_postList__WEBPACK_IMPORTED_MODULE_1__.getPostListPerPage)(getState()) || 1;
  const listIndex = (0,_selectors_postList__WEBPACK_IMPORTED_MODULE_1__.getPostListPage)(getState()) || 1;
  const category = (0,_selectors_postList__WEBPACK_IMPORTED_MODULE_1__.getPostListCategory)(getState());
  const listLength = (0,_selectors_postList__WEBPACK_IMPORTED_MODULE_1__.getPostListCount)(getState());
  const pageNumber = listIndex === listLength ? listIndex : listIndex + 1;
  const params = {
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.SIZE]: perPage,
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.PAGE]: replace ? 1 : pageNumber,
    sort: 'publishedAt:DESC',
    populate: '*',
    replace
  };
  if (category) {
    params[_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.CAT] = category;
  }
  await props.getData(params, true).then(response => {
    // @ts-ignore
    const {
      data,
      meta
    } = response.data;
    const dataMethod = replace ? _slices_postListSlice__WEBPACK_IMPORTED_MODULE_2__.postListActions.replaceData : _slices_postListSlice__WEBPACK_IMPORTED_MODULE_2__.postListActions.addData;
    // @ts-ignore
    dispatch(dataMethod(data));
    // @ts-ignore
    dispatch(_slices_postListSlice__WEBPACK_IMPORTED_MODULE_2__.postListActions.setPagination(meta.pagination));
  });
});

/***/ }),

/***/ "./src/4_entities/Post/model/services/initPostList/initPostList.ts":
/*!*************************************************************************!*\
  !*** ./src/4_entities/Post/model/services/initPostList/initPostList.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPostList: () => (/* binding */ initPostList)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 5_shared/types/RequestData */ "./src/5_shared/types/RequestData.ts");
/* harmony import */ var _slices_postListSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slices/postListSlice */ "./src/4_entities/Post/model/slices/postListSlice.ts");
/* harmony import */ var _selectors_postList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/postList */ "./src/4_entities/Post/model/selectors/postList.ts");




const initPostList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('postList/initPostList', async (getData, thunkAPI) => {
  const {
    dispatch,
    getState
  } = thunkAPI;
  const perPage = (0,_selectors_postList__WEBPACK_IMPORTED_MODULE_2__.getPostListPerPage)(getState()) || 1;
  const params = {
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.PAGE]: 1,
    [_5_shared_types_RequestData__WEBPACK_IMPORTED_MODULE_0__.PaginationParams.SIZE]: perPage,
    sort: 'publishedAt:DESC',
    replace: false,
    populate: '*'
  };
  await getData(params, true).then(response => {
    // @ts-ignore
    const {
      data,
      meta
    } = response.data;
    dispatch(_slices_postListSlice__WEBPACK_IMPORTED_MODULE_1__.postListActions.addData(data));
    // @ts-ignore
    dispatch(_slices_postListSlice__WEBPACK_IMPORTED_MODULE_1__.postListActions.setPagination(meta.pagination));
  });
});

/***/ }),

/***/ "./src/4_entities/Post/model/slices/postListSlice.ts":
/*!***********************************************************!*\
  !*** ./src/4_entities/Post/model/slices/postListSlice.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPostList: () => (/* binding */ getPostList),
/* harmony export */   postListActions: () => (/* binding */ postListActions),
/* harmony export */   postListReducer: () => (/* binding */ postListReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _api_postApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/postApi */ "./src/4_entities/Post/api/postApi.ts");


const postListAdapter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)();
postListAdapter.selectId = item => item.id;
const getPostList = postListAdapter.getSelectors(state => state.postList || postListAdapter.getInitialState());
const initialState = {
  page: 1,
  perPage: 8,
  isLoading: false,
  errors: undefined,
  category: undefined,
  count: 1,
  ids: [],
  entities: {}
};
const postListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'postListSlice',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLength: (state, action) => {
      state.count = action.payload;
    },
    addData: (state, action) => {
      postListAdapter.addMany(state, action.payload);
    },
    replaceData: (state, action) => {
      postListAdapter.setAll(state, action.payload);
    },
    setPagination: (state, action) => {
      const pagination = action.payload;
      state.page = pagination.page;
      state.count = pagination.pageCount;
    },
    toggleCategory: (state, action) => {
      if (state.category === action.payload) {
        state.category = undefined;
      } else {
        state.category = action.payload;
      }
    }
  },
  extraReducers: builder => {
    const request = _api_postApi__WEBPACK_IMPORTED_MODULE_0__.postApi.endpoints.fetchPostList;
    builder.addMatcher(request.matchPending, (state, action) => {
      const {
        replace
      } = action.meta.arg.originalArgs;
      if (replace) postListAdapter.removeAll(state);
      state.errors = undefined;
      state.isLoading = true;
    }).addMatcher(request.matchFulfilled, state => {
      state.isLoading = false;
    }).addMatcher(request.matchRejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  }
});
const {
  reducer: postListReducer,
  actions: postListActions
} = postListSlice;

/***/ }),

/***/ "./src/5_shared/libs/hooks/useHeight.ts":
/*!**********************************************!*\
  !*** ./src/5_shared/libs/hooks/useHeight.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useHeight = (elementRef, proportion) => {
  const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const updateHeight = () => {
      const width = elementRef?.current?.offsetWidth;
      if (width) setHeight(width * proportion);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [elementRef, proportion]);
  return height;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHeight);

/***/ }),

/***/ "./src/5_shared/types/RequestData.ts":
/*!*******************************************!*\
  !*** ./src/5_shared/types/RequestData.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationParams: () => (/* binding */ PaginationParams)
/* harmony export */ });
var PaginationParams = /*#__PURE__*/function (PaginationParams) {
  PaginationParams["PAGE"] = "pagination[page]";
  PaginationParams["SIZE"] = "pagination[pageSize]";
  PaginationParams["CAT"] = "filters[category][id][$eq]";
  PaginationParams["TAG"] = "filters[tags][id][$eq]";
  return PaginationParams;
}(PaginationParams || {});


/***/ }),

/***/ "./src/3_features/MetaPage/ui/MetaPage.tsx":
/*!*************************************************!*\
  !*** ./src/3_features/MetaPage/ui/MetaPage.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetaPage: () => (/* binding */ MetaPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const MetaPage = props => {
  const {
    data,
    isLoading
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const contentLoading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
    children: t('loading')
  });
  const content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [data?.metaTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
      children: data?.metaTitle
    }), data?.metaDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
      name: "description",
      content: data?.metaDescription
    }), data?.keywords && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
      name: "keywords",
      content: data?.keywords
    }), data?.metaRobots && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
      name: "robots",
      content: data?.metaRobots
    }), data?.structuredData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("script", {
      type: "application/ld+json",
      children: JSON.stringify(data?.structuredData)
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__.Helmet, {
    children: [isLoading ? contentLoading : content, !isLoading && !data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
      children: "..."
    })]
  });
};

/***/ }),

/***/ "./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.tsx":
/*!************************************************************************!*\
  !*** ./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleCategory: () => (/* binding */ ArticleCategory),
/* harmony export */   ArticleCategoryMode: () => (/* binding */ ArticleCategoryMode)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleCategory.module.scss */ "./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





let ArticleCategoryMode = /*#__PURE__*/function (ArticleCategoryMode) {
  ArticleCategoryMode[ArticleCategoryMode["STATIC"] = 0] = "STATIC";
  ArticleCategoryMode[ArticleCategoryMode["INPUT"] = 1] = "INPUT";
  return ArticleCategoryMode;
}({});
const ArticleCategory = props => {
  const {
    data,
    mode,
    name,
    className,
    isActive,
    themeProp,
    clickEvent
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const Tag = mode === ArticleCategoryMode.STATIC ? 'article' : 'label';
  const selectEvent = () => {
    if (clickEvent) clickEvent(data);
  };
  const unselectEvent = () => {
    if (clickEvent && isActive) clickEvent(undefined);
  };
  const skeleton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].block, _ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['block--skeleton'], _ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][`block--${themeProp || theme}`], className)
  });
  const article = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Tag, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].block, _ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][`block--${themeProp || theme}`], {
      [_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['block--label']]: mode === ArticleCategoryMode.INPUT
    }, {
      [_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['block--active']]: isActive
    }, className),
    children: [mode === ArticleCategoryMode.INPUT && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
      name: name,
      type: "radio",
      value: data?.id,
      checked: isActive,
      onClick: unselectEvent,
      onChange: selectEvent,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].input)
    }), data?.title]
  });
  return data ? article : skeleton;
};

/***/ }),

/***/ "./src/4_entities/Category/ui/ArticleTag/ArticleTag.tsx":
/*!**************************************************************!*\
  !*** ./src/4_entities/Category/ui/ArticleTag/ArticleTag.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleTag: () => (/* binding */ ArticleTag)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleTag.module.scss */ "./src/4_entities/Category/ui/ArticleTag/ArticleTag.module.scss");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const ArticleTag = props => {
  const {
    data,
    className,
    themeProp
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].block, _ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"][`block--${themeProp || theme}`], className),
    children: ["#", data.title]
  });
};

/***/ }),

/***/ "./src/4_entities/Category/ui/GridCategory/GridCategory.tsx":
/*!******************************************************************!*\
  !*** ./src/4_entities/Category/ui/GridCategory/GridCategory.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridCategory: () => (/* binding */ GridCategory)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ArticleCategory/ArticleCategory */ "./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.tsx");
/* harmony import */ var _GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridCategory.module.scss */ "./src/4_entities/Category/ui/GridCategory/GridCategory.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const GridCategory = props => {
  const {
    data,
    className,
    showSkeleton
  } = props;
  const skeleton = new Array(4).fill(null).map((_, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_1__.ArticleCategory, {
    mode: _ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_1__.ArticleCategoryMode.STATIC
  }, index));
  const content = data && data?.length > 0 && data.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_1__.ArticleCategory, {
    data: item,
    mode: _ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_1__.ArticleCategoryMode.STATIC
  }, item.id));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].block, className),
    children: showSkeleton ? skeleton : content
  });
};

/***/ }),

/***/ "./src/4_entities/Category/ui/ListCategory/ListCategory.tsx":
/*!******************************************************************!*\
  !*** ./src/4_entities/Category/ui/ListCategory/ListCategory.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListCategory: () => (/* binding */ ListCategory)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListCategory.module.scss */ "./src/4_entities/Category/ui/ListCategory/ListCategory.module.scss");
/* harmony import */ var _ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ArticleCategory/ArticleCategory */ "./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.tsx");
/* harmony import */ var _model_types_ArticleCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/types/ArticleCategory */ "./src/4_entities/Category/model/types/ArticleCategory.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const ListCategory = props => {
  const {
    data,
    className,
    selectEvent,
    showSkeleton,
    selectedItem
  } = props;
  const skeleton = new Array(5).fill(null).map((_, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_2__.ArticleCategory, {
    mode: _ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_2__.ArticleCategoryMode.STATIC
  }, index));
  const content = data && data?.length > 0 && data.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_2__.ArticleCategory, {
    data: item,
    name: "category",
    clickEvent: selectEvent,
    mode: _ArticleCategory_ArticleCategory__WEBPACK_IMPORTED_MODULE_2__.ArticleCategoryMode.INPUT,
    isActive: selectedItem === item.id
  }, item.id));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].nav, className),
    children: showSkeleton ? skeleton : content
  });
};

/***/ }),

/***/ "./src/4_entities/Category/ui/ListTags/ListTags.tsx":
/*!**********************************************************!*\
  !*** ./src/4_entities/Category/ui/ListTags/ListTags.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListTags: () => (/* binding */ ListTags)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListTags_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListTags.module.scss */ "./src/4_entities/Category/ui/ListTags/ListTags.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const ListTags = props => {
  const {
    children,
    className
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].block, className),
    children: children
  });
};

/***/ }),

/***/ "./src/4_entities/Dev/ui/ArticleDev/ArticleDev.tsx":
/*!*********************************************************!*\
  !*** ./src/4_entities/Dev/ui/ArticleDev/ArticleDev.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleDev: () => (/* binding */ ArticleDev)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _4_entities_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 4_entities/Category */ "./src/4_entities/Category/index.ts");
/* harmony import */ var _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/css/grid.module.scss */ "./src/5_shared/css/grid.module.scss");
/* harmony import */ var _5_shared_assets_icons_arrow_next_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/assets/icons/arrow-next.svg */ "./src/5_shared/assets/icons/arrow-next.svg");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! 5_shared/config/router/routerConfig */ "./src/5_shared/config/router/routerConfig.tsx");
/* harmony import */ var _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArticleDev.module.scss */ "./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











const ArticleDev = props => {
  const {
    data,
    themeProp,
    className
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
  const skeleton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].block, _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"][`block--${themeProp || theme}`], _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['block--skeleton'])
  }), [data, themeProp, theme]);
  const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: `${_5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_6__.RouterPath.dev_detail}${data?.id}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].block, _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"][`block--${themeProp || theme}`], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].grid, _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].grid),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-mob-3']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].title),
          children: data?.title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-mob-1'], _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['cell-mobile']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_5_shared_assets_icons_arrow_next_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].icon, _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['icon--mobile'], _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"][`icon--${themeProp || theme}`])
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-mob-4']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].main),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_2__.GridCategory, {
            showSkeleton: false,
            data: data?.tags?.data || []
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_5_shared_assets_icons_arrow_next_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].icon, _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['icon--desktop'], _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"][`icon--${themeProp || theme}`])
          })]
        })
      })]
    })
  }), [data, themeProp, theme]);
  return data ? content : skeleton;
};

/***/ }),

/***/ "./src/4_entities/Dev/ui/GridDev/GridDev.tsx":
/*!***************************************************!*\
  !*** ./src/4_entities/Dev/ui/GridDev/GridDev.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridDev: () => (/* binding */ GridDev)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _5_shared_ui_End_End__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/ui/End/End */ "./src/5_shared/ui/End/End.tsx");
/* harmony import */ var _GridDev_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridDev.module.scss */ "./src/4_entities/Dev/ui/GridDev/GridDev.module.scss");
/* harmony import */ var _ArticleDev_ArticleDev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ArticleDev/ArticleDev */ "./src/4_entities/Dev/ui/ArticleDev/ArticleDev.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const GridDev = props => {
  const {
    data,
    showEnd,
    className,
    showSkeleton
  } = props;
  const skeleton = new Array(2).fill(null).map((_, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ArticleDev_ArticleDev__WEBPACK_IMPORTED_MODULE_3__.ArticleDev, {})
  }, index));
  const content = data && data?.length > 0 && data?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ArticleDev_ArticleDev__WEBPACK_IMPORTED_MODULE_3__.ArticleDev, {
      data: item
    })
  }, item.id));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].block),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].list, className),
      children: showSkeleton ? skeleton : content
    }), showEnd && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_5_shared_ui_End_End__WEBPACK_IMPORTED_MODULE_1__.End, {})]
  });
};

/***/ }),

/***/ "./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.tsx":
/*!**************************************************************!*\
  !*** ./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticlePhoto: () => (/* binding */ ArticlePhoto)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _4_entities_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 4_entities/Category */ "./src/4_entities/Category/index.ts");
/* harmony import */ var _5_shared_libs_hooks_useHeight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/libs/hooks/useHeight */ "./src/5_shared/libs/hooks/useHeight.ts");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/config/router/routerConfig */ "./src/5_shared/config/router/routerConfig.tsx");
/* harmony import */ var _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ArticlePhoto.module.scss */ "./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const ArticlePhoto = props => {
  const {
    data,
    themeProp,
    className
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const heightEl = (0,_5_shared_libs_hooks_useHeight__WEBPACK_IMPORTED_MODULE_3__["default"])(elRef, 0.82);
  const previewUrl = data?.main?.preview?.data?.formats?.large?.url || data?.main?.preview?.data?.formats?.medium?.url || data?.main?.preview?.data?.formats?.small?.url || '';
  const altText = data?.main?.preview?.data?.alternativeText || '#';
  const skeleton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    ref: elRef,
    style: {
      width: '100%',
      height: `${heightEl}px`
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].article, _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`article--${themeProp || theme}`], _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['article--skeleton'], className)
  }), [heightEl, className, themeProp, theme, data]);
  const article = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    ref: elRef,
    style: {
      width: '100%',
      height: `${heightEl}px`
    },
    to: `${_5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_5__.RouterPath.photo_detail}${data?.id}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].article, _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`article--${themeProp || theme}`], className),
    children: [data?.main?.showPreview && previewUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("picture", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].picture),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
        src: `${"https://api.egor-badulin.ru"}${previewUrl}`,
        alt: altText
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].main),
      children: [data?.main?.previewTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title, _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`title--${themeProp || theme}`]),
        children: data.main.previewTitle
      }), data?.main?.previewCaption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].caption, _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`caption--${themeProp || theme}`]),
        children: data.main.previewCaption
      })]
    }), data?.category?.data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_2__.ArticleCategory, {
      className: _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].tag,
      data: data?.category?.data,
      mode: _4_entities_Category__WEBPACK_IMPORTED_MODULE_2__.ArticleCategoryMode.STATIC
    })]
  }), [heightEl, className, data, themeProp, theme]);
  return data ? article : skeleton;
};

/***/ }),

/***/ "./src/4_entities/Photo/ui/GridPhoto/GridPhoto.tsx":
/*!*********************************************************!*\
  !*** ./src/4_entities/Photo/ui/GridPhoto/GridPhoto.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridPhoto: () => (/* binding */ GridPhoto)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _5_shared_ui_End_End__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/ui/End/End */ "./src/5_shared/ui/End/End.tsx");
/* harmony import */ var _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/css/grid.module.scss */ "./src/5_shared/css/grid.module.scss");
/* harmony import */ var _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/config/ThemeContext */ "./src/5_shared/config/ThemeContext.ts");
/* harmony import */ var _GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GridPhoto.module.scss */ "./src/4_entities/Photo/ui/GridPhoto/GridPhoto.module.scss");
/* harmony import */ var _ArticlePost_ArticlePhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ArticlePost/ArticlePhoto */ "./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const GridPhoto = props => {
  const {
    data,
    showSkeleton,
    className,
    showEnd
  } = props;
  const skeleton = new Array(12).fill(null).map((_, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-mob-4']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ArticlePost_ArticlePhoto__WEBPACK_IMPORTED_MODULE_5__.ArticlePhoto, {})
  }, index));
  const content = data && data?.length > 0 && data.map((item, index) => {
    let propTheme;
    if (item?.main?.showPreview) {
      propTheme = item?.main?.previewInverted ? _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.DARK : _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.LIGHT;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-mob-4']),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ArticlePost_ArticlePhoto__WEBPACK_IMPORTED_MODULE_5__.ArticlePhoto, {
        data: item,
        themeProp: propTheme
      })
    }, index);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].block),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].grid, _GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].grid, className),
      children: showSkeleton ? skeleton : content
    }), showEnd && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_5_shared_ui_End_End__WEBPACK_IMPORTED_MODULE_1__.End, {})]
  });
};

/***/ }),

/***/ "./src/4_entities/Post/ui/ArticlePost/ArticlePost.tsx":
/*!************************************************************!*\
  !*** ./src/4_entities/Post/ui/ArticlePost/ArticlePost.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticlePost: () => (/* binding */ ArticlePost)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _4_entities_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 4_entities/Category */ "./src/4_entities/Category/index.ts");
/* harmony import */ var _5_shared_libs_hooks_useHeight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/libs/hooks/useHeight */ "./src/5_shared/libs/hooks/useHeight.ts");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/config/router/routerConfig */ "./src/5_shared/config/router/routerConfig.tsx");
/* harmony import */ var _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ArticlePost.module.scss */ "./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const ArticlePost = props => {
  const {
    data,
    themeProp,
    className
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const heightEl = (0,_5_shared_libs_hooks_useHeight__WEBPACK_IMPORTED_MODULE_3__["default"])(elRef, 1.15);
  const previewUrl = data?.main?.preview?.data?.formats?.large?.url || data?.main?.preview?.data?.formats?.medium?.url || data?.main?.preview?.data?.formats?.small?.url || '';
  const altText = data?.main?.preview?.data?.alternativeText || '#';
  const skeleton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    ref: elRef,
    style: {
      width: '100%',
      height: `${heightEl}px`
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].article, _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`article--${themeProp || theme}`], _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['article--skeleton'], className)
  }), [heightEl, className, themeProp, theme]);
  const article = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    ref: elRef,
    style: {
      width: '100%',
      height: `${heightEl}px`
    },
    to: `${_5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_5__.RouterPath.post_detail}${data?.id}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].article, _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`article--${themeProp || theme}`], className),
    children: [data?.main?.showPreview && previewUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("picture", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].picture),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
        src: `${"https://api.egor-badulin.ru"}${previewUrl}`,
        alt: altText
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].main),
      children: [data?.main?.previewTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title, _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`title--${themeProp || theme}`]),
        children: data.main.previewTitle
      }), data?.main?.previewCaption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].caption, _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`caption--${themeProp || theme}`]),
        children: data.main.previewCaption
      })]
    }), data?.category?.data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_2__.ArticleCategory, {
      className: _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].tag,
      data: data?.category?.data,
      themeProp: themeProp || theme,
      mode: _4_entities_Category__WEBPACK_IMPORTED_MODULE_2__.ArticleCategoryMode.STATIC
    })]
  }), [heightEl, className, data, themeProp, theme]);
  return data ? article : skeleton;
};

/***/ }),

/***/ "./src/4_entities/Post/ui/GridPosts/GridPosts.tsx":
/*!********************************************************!*\
  !*** ./src/4_entities/Post/ui/GridPosts/GridPosts.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridPosts: () => (/* binding */ GridPosts)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _5_shared_ui_End_End__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/ui/End/End */ "./src/5_shared/ui/End/End.tsx");
/* harmony import */ var _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/css/grid.module.scss */ "./src/5_shared/css/grid.module.scss");
/* harmony import */ var _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/config/ThemeContext */ "./src/5_shared/config/ThemeContext.ts");
/* harmony import */ var _GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GridPosts.module.scss */ "./src/4_entities/Post/ui/GridPosts/GridPosts.module.scss");
/* harmony import */ var _ArticlePost_ArticlePost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ArticlePost/ArticlePost */ "./src/4_entities/Post/ui/ArticlePost/ArticlePost.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const GridPosts = props => {
  const {
    data,
    showSkeleton,
    className,
    showEnd
  } = props;
  const skeleton = new Array(12).fill(null).map((_, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-1'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-mob-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-x-mob-4']),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ArticlePost_ArticlePost__WEBPACK_IMPORTED_MODULE_5__.ArticlePost, {})
  }, index));
  const content = data && data?.length > 0 && data.map((item, index) => {
    let propTheme;
    if (item?.main?.showPreview) {
      propTheme = item?.main?.previewInverted ? _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.DARK : _5_shared_config_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.AppTheme.LIGHT;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-1'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-mob-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-x-mob-4']),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ArticlePost_ArticlePost__WEBPACK_IMPORTED_MODULE_5__.ArticlePost, {
        data: item,
        themeProp: propTheme
      })
    }, index);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].block),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].grid, _GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].grid, className),
      children: showSkeleton ? skeleton : content
    }), showEnd && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_5_shared_ui_End_End__WEBPACK_IMPORTED_MODULE_1__.End, {})]
  });
};

/***/ }),

/***/ "./src/5_shared/ui/End/End.tsx":
/*!*************************************!*\
  !*** ./src/5_shared/ui/End/End.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   End: () => (/* binding */ End)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _End_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./End.module.scss */ "./src/5_shared/ui/End/End.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const End = props => {
  const {
    themeProp,
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_End_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].block, _End_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"][`editor--${themeProp || theme}`], className),
    children: t('articlesMessage')
  });
};

/***/ }),

/***/ "./src/5_shared/ui/Main/Main.tsx":
/*!***************************************!*\
  !*** ./src/5_shared/ui/Main/Main.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Main: () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _5_shared_libs_hooks_useLayoutMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 5_shared/libs/hooks/useLayoutMode */ "./src/5_shared/libs/hooks/useLayoutMode.ts");
/* harmony import */ var _Main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.module.scss */ "./src/5_shared/ui/Main/Main.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const Main = props => {
  const {
    children,
    className
  } = props;
  const layoutMode = (0,_5_shared_libs_hooks_useLayoutMode__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_Main_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].block, _Main_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"][`block--${layoutMode}`], className),
    children: children
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss ***!
  \*****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block-Y778Z {
  display: flex;
  font-size: 24px;
  padding: 0 22px;
  background: none;
  min-height: 48px;
  line-height: 1.3;
  text-align: center;
  border-radius: 50px;
  align-items: center;
  text-decoration: none;
  justify-content: center;
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--label-uJsPr {
  cursor: pointer;
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL {
  width: 60px;
  background-color: #000066;
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+1), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+3), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+4) {
  width: 100px;
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+2), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+5), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+6) {
  width: 120px;
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+7) {
  width: 170px;
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+8) {
  width: 200px;
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-light-zqm5r {
  color: var(--dark-primary);
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-light-zqm5r:not(.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__link--skeleton-ijlUA) {
  border: 1px solid var(--dark-primary);
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-light-zqm5r.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--active-HeMPV {
  color: var(--light-primary);
  background-color: var(--dark-primary);
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-dark-beWVc {
  color: var(--light-primary);
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-dark-beWVc:not(.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__link--skeleton-ijlUA) {
  border: 1px solid var(--light-primary);
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-dark-beWVc.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--active-HeMPV {
  color: var(--bg-dark);
  background-color: var(--light-primary);
}

.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__input-VnIP6 {
  display: none;
  visibility: hidden;
}

@media (width <= 2160px) {
  .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block-Y778Z {
    padding: 0 18px;
    font-size: 21px;
    min-height: 42px;
  }
  .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+1), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+3), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+4) {
    width: 80px;
  }
  .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+2), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+5), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+6) {
    width: 95px;
  }
  .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+7) {
    width: 130px;
  }
  .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+8) {
    width: 160px;
  }
}
@media (width <= 1200px) {
  .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block-Y778Z {
    font-size: 16px;
    min-height: 30px;
    padding: 3px 12px;
  }
  .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+1), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+3), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+4), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+8) {
    width: 50px;
  }
  .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+2), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+6), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+7) {
    width: 60px;
  }
  .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n), .src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL:nth-child(9n+5) {
    width: 85px;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,qBAAA;EACA,uBAAA;AACJ;AACI;EACI,eAAA;AACR;AAEI;EACI,WAAA;EACA,yBAAA;AAAR;AAEQ;EAGI,YAAA;AAFZ;AAKQ;EAII,YAAA;AANZ;AASQ;EACI,YAAA;AAPZ;AAUQ;EACI,YAAA;AARZ;AAYI;EACI,0BAAA;AAVR;AAYQ;EACI,qCAAA;AAVZ;AAaQ;EACI,2BAAA;EACA,qCAAA;AAXZ;AAeI;EACI,2BAAA;AAbR;AAeQ;EACI,sCAAA;AAbZ;AAgBQ;EACI,qBAAA;EACA,sCAAA;AAdZ;;AAmBA;EACI,aAAA;EACA,kBAAA;AAhBJ;;AAmBA;EACI;IACI,eAAA;IACA,eAAA;IACA,gBAAA;EAhBN;EAmBU;IAGI,WAAA;EAnBd;EAsBU;IAII,WAAA;EAvBd;EA0BU;IACI,YAAA;EAxBd;EA2BU;IACI,YAAA;EAzBd;AACF;AA8BA;EACI;IACI,eAAA;IACA,gBAAA;IACA,iBAAA;EA5BN;EA+BU;IAII,WAAA;EAhCd;EAmCU;IAGI,WAAA;EAnCd;EAsCU;IAEI,WAAA;EArCd;AACF","sourcesContent":[".block {\r\n    display: flex;\r\n    font-size: 24px;\r\n    padding: 0 22px;\r\n    background: none;\r\n    min-height: 48px;\r\n    line-height: 1.3;\r\n    text-align: center;\r\n    border-radius: 50px;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    justify-content: center;\r\n\r\n    &--label {\r\n        cursor: pointer;\r\n    }\r\n\r\n    &--skeleton {\r\n        width: 60px;\r\n        background-color: #000066;\r\n\r\n        &:nth-child(9n + 1),\r\n        &:nth-child(9n + 3),\r\n        &:nth-child(9n + 4) {\r\n            width: 100px;\r\n        }\r\n\r\n        &:nth-child(9n),\r\n        &:nth-child(9n + 2),\r\n        &:nth-child(9n + 5),\r\n        &:nth-child(9n + 6) {\r\n            width: 120px;\r\n        }\r\n\r\n        &:nth-child(9n + 7) {\r\n            width: 170px;\r\n        }\r\n\r\n        &:nth-child(9n + 8) {\r\n            width: 200px;\r\n        }\r\n    }\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n\r\n        &:not(.link--skeleton) {\r\n            border: 1px solid var(--dark-primary);\r\n        }\r\n\r\n        &.block--active {\r\n            color: var(--light-primary);\r\n            background-color: var(--dark-primary);\r\n        }\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-primary);\r\n\r\n        &:not(.link--skeleton) {\r\n            border: 1px solid var(--light-primary);\r\n        }\r\n\r\n        &.block--active {\r\n            color: var(--bg-dark);\r\n            background-color: var(--light-primary);\r\n        }\r\n    }\r\n}\r\n\r\n.input {\r\n    display: none;\r\n    visibility: hidden;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        padding: 0 18px;\r\n        font-size: 21px;\r\n        min-height: 42px;\r\n\r\n        &--skeleton {\r\n            &:nth-child(9n + 1),\r\n            &:nth-child(9n + 3),\r\n            &:nth-child(9n + 4) {\r\n                width: 80px;\r\n            }\r\n\r\n            &:nth-child(9n),\r\n            &:nth-child(9n + 2),\r\n            &:nth-child(9n + 5),\r\n            &:nth-child(9n + 6) {\r\n                width: 95px;\r\n            }\r\n\r\n            &:nth-child(9n + 7) {\r\n                width: 130px;\r\n            }\r\n\r\n            &:nth-child(9n + 8) {\r\n                width: 160px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        font-size: 16px;\r\n        min-height: 30px;\r\n        padding: 3px 12px;\r\n\r\n        &--skeleton {\r\n            &:nth-child(9n + 1),\r\n            &:nth-child(9n + 3),\r\n            &:nth-child(9n + 4),\r\n            &:nth-child(9n + 8) {\r\n                width: 50px;\r\n            }\r\n\r\n            &:nth-child(9n + 2),\r\n            &:nth-child(9n + 6),\r\n            &:nth-child(9n + 7) {\r\n                width: 60px;\r\n            }\r\n\r\n            &:nth-child(9n),\r\n            &:nth-child(9n + 5) {\r\n                width: 85px;\r\n            }\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block-Y778Z`,
	"block--label": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--label-uJsPr`,
	"block--skeleton": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL`,
	"block--theme-light": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-light-zqm5r`,
	"link--skeleton": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__link--skeleton-ijlUA`,
	"block--active": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--active-HeMPV`,
	"block--theme-dark": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-dark-beWVc`,
	"input": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__input-VnIP6`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ArticleTag/ArticleTag.module.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ArticleTag/ArticleTag.module.scss ***!
  \*******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Category-ui-ArticleTag-ArticleTag-module__block-gB5IJ {
  font-size: 30px;
  line-height: 1.3;
}

@media (width <= 2160px) {
  .src-4_entities-Category-ui-ArticleTag-ArticleTag-module__block-gB5IJ {
    font-size: 26px;
  }
}
@media (width <= 1200px) {
  .src-4_entities-Category-ui-ArticleTag-ArticleTag-module__block-gB5IJ {
    font-size: 14px;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Category/ui/ArticleTag/ArticleTag.module.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,gBAAA;AACJ;;AAEA;EACI;IACI,eAAA;EACN;AACF;AAEA;EACI;IACI,eAAA;EAAN;AACF","sourcesContent":[".block {\r\n    font-size: 30px;\r\n    line-height: 1.3;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        font-size: 26px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        font-size: 14px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Category-ui-ArticleTag-ArticleTag-module__block-gB5IJ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/GridCategory/GridCategory.module.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/GridCategory/GridCategory.module.scss ***!
  \***********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Category-ui-GridCategory-GridCategory-module__block-RvP2c {
  gap: 4px;
  display: flex;
  flex-wrap: wrap;
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Category/ui/GridCategory/GridCategory.module.scss"],"names":[],"mappings":"AAAA;EACI,QAAA;EACA,aAAA;EACA,eAAA;AACJ","sourcesContent":[".block {\r\n    gap: 4px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Category-ui-GridCategory-GridCategory-module__block-RvP2c`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ListCategory/ListCategory.module.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ListCategory/ListCategory.module.scss ***!
  \***********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Category-ui-ListCategory-ListCategory-module__nav-n8YbS {
  gap: 4px;
  display: flex;
  flex-wrap: wrap;
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Category/ui/ListCategory/ListCategory.module.scss"],"names":[],"mappings":"AAAA;EACI,QAAA;EACA,aAAA;EACA,eAAA;AACJ","sourcesContent":[".nav {\r\n    gap: 4px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"nav": `src-4_entities-Category-ui-ListCategory-ListCategory-module__nav-n8YbS`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ListTags/ListTags.module.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ListTags/ListTags.module.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Category-ui-ListTags-ListTags-module__block-TX8F9 {
  display: flex;
  gap: 10px 16px;
  flex-wrap: wrap;
}

@media (width <= 2160px) {
  .src-4_entities-Category-ui-ListTags-ListTags-module__block-TX8F9 {
    gap: 8px 14px;
  }
}
@media (width <= 1200px) {
  .src-4_entities-Category-ui-ListTags-ListTags-module__block-TX8F9 {
    gap: 6px 10px;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Category/ui/ListTags/ListTags.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,cAAA;EACA,eAAA;AACJ;;AAEA;EACI;IACI,aAAA;EACN;AACF;AAEA;EACI;IACI,aAAA;EAAN;AACF","sourcesContent":[".block {\r\n    display: flex;\r\n    gap: 10px 16px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        gap: 8px 14px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        gap: 6px 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Category-ui-ListTags-ListTags-module__block-TX8F9`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss ***!
  \**************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block-FrpZU {
  display: block;
  font-weight: 400;
  min-height: 155px;
  padding: 50px 60px;
  position: relative;
  border-radius: 28px;
  text-decoration: none;
  transition: 0.3s opacity;
}
.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block--skeleton-IUxY9 {
  background-color: blue;
}
.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block-FrpZU:hover, .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block-FrpZU:focus {
  opacity: 0.7;
}
.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block--theme-light-ptMaN {
  color: var(--dark-primary);
  background-color: var(--light-accent);
}
.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block--theme-dark-SySBq {
  color: var(--light-primary);
  background-color: var(--dark-accent);
}

.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__grid-wUmPk {
  gap: 20px;
}

.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__title-woA0n {
  font-size: 38px;
}

.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__main-mCiQZ {
  gap: 20px;
  display: flex;
  justify-content: space-between;
}

.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__icon-G0hEe {
  width: 55px;
  height: 55px;
  display: block;
  flex-shrink: 0;
}
.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__icon--theme-light-crDMN {
  fill: var(--dark-primary);
}
.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__icon--theme-dark-Tnbaa {
  fill: var(--light-primary);
}

.src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__cell-mobile-jVVMF {
  display: none;
  visibility: hidden;
}

@media (width <= 2160px) {
  .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block-FrpZU {
    padding: 35px;
    min-height: 120px;
  }
  .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__title-woA0n {
    font-size: 32px;
  }
  .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__icon-G0hEe {
    width: 48px;
    height: 48px;
  }
}
@media (width <= 1200px) {
  .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block-FrpZU {
    padding: 20px;
    min-height: 0;
    border-radius: 16px;
  }
  .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__grid-wUmPk {
    gap: 16px;
  }
  .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__title-woA0n {
    font-size: 20px;
  }
  .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__main-mCiQZ {
    gap: 20px;
  }
  .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__icon-G0hEe {
    width: 18px;
    height: 18px;
    transform: translateY(8px);
  }
  .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__icon--desktop-DXKvs {
    display: none;
    visibility: hidden;
  }
  .src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__cell-mobile-jVVMF {
    display: flex;
    visibility: visible;
    justify-content: flex-end;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,wBAAA;AACJ;AACI;EACI,sBAAA;AACR;AAEI;EAEI,YAAA;AADR;AAII;EACI,0BAAA;EACA,qCAAA;AAFR;AAKI;EACI,2BAAA;EACA,oCAAA;AAHR;;AAOA;EACI,SAAA;AAJJ;;AAOA;EACI,eAAA;AAJJ;;AAOA;EACI,SAAA;EACA,aAAA;EACA,8BAAA;AAJJ;;AAOA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AAJJ;AAMI;EACI,yBAAA;AAJR;AAOI;EACI,0BAAA;AALR;;AASA;EACI,aAAA;EACA,kBAAA;AANJ;;AASA;EACI;IACI,aAAA;IACA,iBAAA;EANN;EASE;IACI,eAAA;EAPN;EAUE;IACI,WAAA;IACA,YAAA;EARN;AACF;AAWA;EACI;IACI,aAAA;IACA,aAAA;IACA,mBAAA;EATN;EAYE;IACI,SAAA;EAVN;EAaE;IACI,eAAA;EAXN;EAcE;IACI,SAAA;EAZN;EAeE;IACI,WAAA;IACA,YAAA;IACA,0BAAA;EAbN;EAeM;IACI,aAAA;IACA,kBAAA;EAbV;EAiBE;IACI,aAAA;IACA,mBAAA;IACA,yBAAA;EAfN;AACF","sourcesContent":[".block {\r\n    display: block;\r\n    font-weight: 400;\r\n    min-height: 155px;\r\n    padding: 50px 60px;\r\n    position: relative;\r\n    border-radius: 28px;\r\n    text-decoration: none;\r\n    transition: 0.3s opacity;\r\n\r\n    &--skeleton {\r\n        background-color: blue;\r\n    }\r\n\r\n    &:hover,\r\n    &:focus {\r\n        opacity: 0.7;\r\n    }\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n        background-color: var(--light-accent);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-primary);\r\n        background-color: var(--dark-accent);\r\n    }\r\n}\r\n\r\n.grid {\r\n    gap: 20px;\r\n}\r\n\r\n.title {\r\n    font-size: 38px;\r\n}\r\n\r\n.main {\r\n    gap: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.icon {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: block;\r\n    flex-shrink: 0;\r\n\r\n    &--theme-light {\r\n        fill: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        fill: var(--light-primary);\r\n    }\r\n}\r\n\r\n.cell-mobile {\r\n    display: none;\r\n    visibility: hidden;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        padding: 35px;\r\n        min-height: 120px;\r\n    }\r\n\r\n    .title {\r\n        font-size: 32px;\r\n    }\r\n\r\n    .icon {\r\n        width: 48px;\r\n        height: 48px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        padding: 20px;\r\n        min-height: 0;\r\n        border-radius: 16px;\r\n    }\r\n\r\n    .grid {\r\n        gap: 16px;\r\n    }\r\n\r\n    .title {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .main {\r\n        gap: 20px;\r\n    }\r\n\r\n    .icon {\r\n        width: 18px;\r\n        height: 18px;\r\n        transform: translateY(8px);\r\n\r\n        &--desktop {\r\n            display: none;\r\n            visibility: hidden;\r\n        }\r\n    }\r\n\r\n    .cell-mobile {\r\n        display: flex;\r\n        visibility: visible;\r\n        justify-content: flex-end;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block-FrpZU`,
	"block--skeleton": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block--skeleton-IUxY9`,
	"block--theme-light": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block--theme-light-ptMaN`,
	"block--theme-dark": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block--theme-dark-SySBq`,
	"grid": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__grid-wUmPk`,
	"title": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__title-woA0n`,
	"main": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__main-mCiQZ`,
	"icon": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__icon-G0hEe`,
	"icon--theme-light": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__icon--theme-light-crDMN`,
	"icon--theme-dark": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__icon--theme-dark-Tnbaa`,
	"cell-mobile": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__cell-mobile-jVVMF`,
	"icon--desktop": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__icon--desktop-DXKvs`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Dev/ui/GridDev/GridDev.module.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Dev/ui/GridDev/GridDev.module.scss ***!
  \********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Dev-ui-GridDev-GridDev-module__block-IsKOu {
  gap: 65px;
  display: flex;
  flex-direction: column;
}

.src-4_entities-Dev-ui-GridDev-GridDev-module__list-CBJ4K {
  gap: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.src-4_entities-Dev-ui-GridDev-GridDev-module__item-B5Cva {
  width: 100%;
}

@media (width <= 1200px) {
  .src-4_entities-Dev-ui-GridDev-GridDev-module__block-IsKOu {
    gap: 30px;
  }
  .src-4_entities-Dev-ui-GridDev-GridDev-module__list-CBJ4K {
    gap: 8px;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Dev/ui/GridDev/GridDev.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAEA;EACI,SAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAMA;EACI;IACI,SAAA;EAHN;EAME;IACI,QAAA;EAJN;AACF","sourcesContent":[".block {\r\n    gap: 65px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.list {\r\n    gap: 10px;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.item {\r\n    width: 100%;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        gap: 30px;\r\n    }\r\n\r\n    .list {\r\n        gap: 8px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Dev-ui-GridDev-GridDev-module__block-IsKOu`,
	"list": `src-4_entities-Dev-ui-GridDev-GridDev-module__list-CBJ4K`,
	"item": `src-4_entities-Dev-ui-GridDev-GridDev-module__item-B5Cva`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss ***!
  \*******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article-UIz4k {
  height: 512px;
  display: flex;
  color: inherit;
  overflow: hidden;
  position: relative;
  border-radius: 24px;
  text-decoration: none;
  flex-direction: column;
  padding: var(--card-padding-l);
  justify-content: space-between;
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--theme-light-e5aN4 {
  background-color: var(--light-accent);
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--theme-dark-wHrPk {
  background-color: var(--dark-accent);
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--skeleton-hmbQy {
  background-color: #000066;
}

.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__picture-JKha_ {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  position: absolute;
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__picture-JKha_ img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__main-lmqMi {
  z-index: 1;
  position: relative;
}

.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__title-f37hH {
  font-size: 38px;
  font-weight: 400;
  margin-bottom: 7px;
  letter-spacing: -0.38px;
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__title--theme-light-yzrQI {
  color: var(--dark-primary);
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__title--theme-dark-IdBqN {
  color: var(--light-accent);
}

.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__caption-unaP0 {
  font-size: 24px;
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__caption--theme-light-HWVrQ {
  color: var(--dark-secondary);
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__caption--theme-dark-WM1s7 {
  color: var(--light-secondary);
}

.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__tag-sXQAV {
  width: fit-content;
  align-self: flex-end;
}

@media (width <= 2160px) {
  .src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article-UIz4k {
    padding: var(--card-padding-m);
  }
  .src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__title-f37hH {
    font-size: 24px;
  }
  .src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__caption-unaP0 {
    font-size: 16px;
  }
}
@media (width <= 1200px) {
  .src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article-UIz4k {
    padding: var(--card-padding-s);
  }
  .src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__title-f37hH {
    font-size: 20px;
  }
  .src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__caption-unaP0 {
    font-size: 14px;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;EACA,8BAAA;EACA,8BAAA;AACJ;AACI;EACI,qCAAA;AACR;AAEI;EACI,oCAAA;AAAR;AAGI;EACI,yBAAA;AADR;;AAKA;EACI,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;AAFJ;AAII;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;AAFR;;AAMA;EACI,UAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,uBAAA;AAHJ;AAKI;EACI,0BAAA;AAHR;AAMI;EACI,0BAAA;AAJR;;AAQA;EACI,eAAA;AALJ;AAOI;EACI,4BAAA;AALR;AAQI;EACI,6BAAA;AANR;;AAUA;EACI,kBAAA;EACA,oBAAA;AAPJ;;AAUA;EACI;IACI,8BAAA;EAPN;EAUE;IACI,eAAA;EARN;EAWE;IACI,eAAA;EATN;AACF;AAYA;EACI;IACI,8BAAA;EAVN;EAaE;IACI,eAAA;EAXN;EAcE;IACI,eAAA;EAZN;AACF","sourcesContent":[".article {\r\n    height: 512px;\r\n    display: flex;\r\n    color: inherit;\r\n    overflow: hidden;\r\n    position: relative;\r\n    border-radius: 24px;\r\n    text-decoration: none;\r\n    flex-direction: column;\r\n    padding: var(--card-padding-l);\r\n    justify-content: space-between;\r\n\r\n    &--theme-light {\r\n        background-color: var(--light-accent);\r\n    }\r\n\r\n    &--theme-dark {\r\n        background-color: var(--dark-accent);\r\n    }\r\n\r\n    &--skeleton {\r\n        background-color: #000066;\r\n    }\r\n}\r\n\r\n.picture {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 0;\r\n    position: absolute;\r\n\r\n    img {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n        object-fit: cover;\r\n        object-position: center;\r\n    }\r\n}\r\n\r\n.main {\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.title {\r\n    font-size: 38px;\r\n    font-weight: 400;\r\n    margin-bottom: 7px;\r\n    letter-spacing: -0.38px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-accent);\r\n    }\r\n}\r\n\r\n.caption {\r\n    font-size: 24px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-secondary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-secondary);\r\n    }\r\n}\r\n\r\n.tag {\r\n    width: fit-content;\r\n    align-self: flex-end;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .article {\r\n        padding: var(--card-padding-m);\r\n    }\r\n\r\n    .title {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .article {\r\n        padding: var(--card-padding-s);\r\n    }\r\n\r\n    .title {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 14px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"article": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article-UIz4k`,
	"article--theme-light": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--theme-light-e5aN4`,
	"article--theme-dark": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--theme-dark-wHrPk`,
	"article--skeleton": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--skeleton-hmbQy`,
	"picture": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__picture-JKha_`,
	"main": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__main-lmqMi`,
	"title": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__title-f37hH`,
	"title--theme-light": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__title--theme-light-yzrQI`,
	"title--theme-dark": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__title--theme-dark-IdBqN`,
	"caption": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__caption-unaP0`,
	"caption--theme-light": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__caption--theme-light-HWVrQ`,
	"caption--theme-dark": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__caption--theme-dark-WM1s7`,
	"tag": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__tag-sXQAV`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Photo/ui/GridPhoto/GridPhoto.module.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Photo/ui/GridPhoto/GridPhoto.module.scss ***!
  \**************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Photo-ui-GridPhoto-GridPhoto-module__block-ZCA6g {
  gap: 65px;
  display: flex;
  flex-direction: column;
}

@media (width <= 1200px) {
  .src-4_entities-Photo-ui-GridPhoto-GridPhoto-module__block-ZCA6g {
    gap: 30px;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Photo/ui/GridPhoto/GridPhoto.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAMA;EACI;IACI,SAAA;EAHN;AACF","sourcesContent":[".block {\r\n    gap: 65px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        gap: 30px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Photo-ui-GridPhoto-GridPhoto-module__block-ZCA6g`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss ***!
  \*****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article-KgWk4 {
  height: 512px;
  display: flex;
  color: inherit;
  overflow: hidden;
  position: relative;
  border-radius: 24px;
  text-decoration: none;
  flex-direction: column;
  padding: var(--card-padding-l);
  justify-content: space-between;
  background-color: var(--dark-accent);
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--theme-light-DDlun {
  background-color: var(--light-accent);
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--theme-dark-RPqGz {
  background-color: var(--dark-accent);
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--skeleton-x2YHg {
  background-color: #000066;
}

.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__picture-c295n {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  position: absolute;
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__picture-c295n img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__main-eeI0I {
  z-index: 1;
  position: relative;
}

.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__title-AKFho {
  font-size: 38px;
  font-weight: 400;
  margin-bottom: 7px;
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__title--theme-light-i1zrW {
  color: var(--dark-primary);
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__title--theme-dark-aZeyN {
  color: var(--light-accent);
}

.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__caption-q2sWK {
  font-size: 24px;
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__caption--theme-light-X6HTM {
  color: var(--dark-secondary);
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__caption--theme-dark-hw035 {
  color: var(--light-primary);
}

.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__tag-fjOmK {
  z-index: 1;
  position: relative;
  width: fit-content;
  align-self: flex-end;
}

@media (width <= 2160px) {
  .src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article-KgWk4 {
    height: 460px;
    padding: var(--card-padding-m);
  }
  .src-4_entities-Post-ui-ArticlePost-ArticlePost-module__title-AKFho {
    font-size: 24px;
  }
  .src-4_entities-Post-ui-ArticlePost-ArticlePost-module__caption-q2sWK {
    font-size: 16px;
  }
}
@media (width <= 1200px) {
  .src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article-KgWk4 {
    height: 260px;
    border-radius: 16px;
    padding: var(--card-padding-s);
  }
  .src-4_entities-Post-ui-ArticlePost-ArticlePost-module__title-AKFho {
    font-size: 20px;
  }
  .src-4_entities-Post-ui-ArticlePost-ArticlePost-module__caption-q2sWK {
    font-size: 14px;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;EACA,8BAAA;EACA,8BAAA;EACA,oCAAA;AACJ;AACI;EACI,qCAAA;AACR;AAEI;EACI,oCAAA;AAAR;AAGI;EACI,yBAAA;AADR;;AAKA;EACI,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;AAFJ;AAII;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;AAFR;;AAMA;EACI,UAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;AAHJ;AAKI;EACI,0BAAA;AAHR;AAMI;EACI,0BAAA;AAJR;;AAQA;EACI,eAAA;AALJ;AAOI;EACI,4BAAA;AALR;AAQI;EACI,2BAAA;AANR;;AAUA;EACI,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,oBAAA;AAPJ;;AAUA;EACI;IACI,aAAA;IACA,8BAAA;EAPN;EAUE;IACI,eAAA;EARN;EAWE;IACI,eAAA;EATN;AACF;AAYA;EACI;IACI,aAAA;IACA,mBAAA;IACA,8BAAA;EAVN;EAaE;IACI,eAAA;EAXN;EAcE;IACI,eAAA;EAZN;AACF","sourcesContent":[".article {\r\n    height: 512px;\r\n    display: flex;\r\n    color: inherit;\r\n    overflow: hidden;\r\n    position: relative;\r\n    border-radius: 24px;\r\n    text-decoration: none;\r\n    flex-direction: column;\r\n    padding: var(--card-padding-l);\r\n    justify-content: space-between;\r\n    background-color: var(--dark-accent);\r\n\r\n    &--theme-light {\r\n        background-color: var(--light-accent);\r\n    }\r\n\r\n    &--theme-dark {\r\n        background-color: var(--dark-accent);\r\n    }\r\n\r\n    &--skeleton {\r\n        background-color: #000066;\r\n    }\r\n}\r\n\r\n.picture {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 0;\r\n    position: absolute;\r\n\r\n    img {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n        object-fit: cover;\r\n        object-position: center;\r\n    }\r\n}\r\n\r\n.main {\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.title {\r\n    font-size: 38px;\r\n    font-weight: 400;\r\n    margin-bottom: 7px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-accent);\r\n    }\r\n}\r\n\r\n.caption {\r\n    font-size: 24px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-secondary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var( --light-primary);\r\n    }\r\n}\r\n\r\n.tag {\r\n    z-index: 1;\r\n    position: relative;\r\n    width: fit-content;\r\n    align-self: flex-end;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .article {\r\n        height: 460px;\r\n        padding: var(--card-padding-m);\r\n    }\r\n\r\n    .title {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .article {\r\n        height: 260px;\r\n        border-radius: 16px;\r\n        padding: var(--card-padding-s);\r\n    }\r\n\r\n    .title {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 14px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"article": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article-KgWk4`,
	"article--theme-light": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--theme-light-DDlun`,
	"article--theme-dark": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--theme-dark-RPqGz`,
	"article--skeleton": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--skeleton-x2YHg`,
	"picture": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__picture-c295n`,
	"main": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__main-eeI0I`,
	"title": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__title-AKFho`,
	"title--theme-light": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__title--theme-light-i1zrW`,
	"title--theme-dark": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__title--theme-dark-aZeyN`,
	"caption": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__caption-q2sWK`,
	"caption--theme-light": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__caption--theme-light-X6HTM`,
	"caption--theme-dark": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__caption--theme-dark-hw035`,
	"tag": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__tag-fjOmK`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Post/ui/GridPosts/GridPosts.module.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Post/ui/GridPosts/GridPosts.module.scss ***!
  \*************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-4_entities-Post-ui-GridPosts-GridPosts-module__block-OygCn {
  gap: 65px;
  display: flex;
  flex-direction: column;
}

@media (width <= 1200px) {
  .src-4_entities-Post-ui-GridPosts-GridPosts-module__block-OygCn {
    gap: 30px;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Post/ui/GridPosts/GridPosts.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAMA;EACI;IACI,SAAA;EAHN;AACF","sourcesContent":[".block {\r\n    gap: 65px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        gap: 30px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Post-ui-GridPosts-GridPosts-module__block-OygCn`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/End/End.module.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/End/End.module.scss ***!
  \******************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-5_shared-ui-End-End-module__block-x3waH {
  width: 100%;
  font-size: 24px;
  text-align: center;
}
.src-5_shared-ui-End-End-module__block--theme-light-QxUW1 {
  color: var(--dark-secondary);
}
.src-5_shared-ui-End-End-module__block--theme-dark-ofZpw {
  color: var(--light-secondary);
}

@media (width <= 2160px) {
  .src-5_shared-ui-End-End-module__block-x3waH {
    font-size: 20px;
  }
}
@media (width <= 1200px) {
  .src-5_shared-ui-End-End-module__block-x3waH {
    font-size: 18px;
  }
}`, "",{"version":3,"sources":["webpack://./src/5_shared/ui/End/End.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,eAAA;EACA,kBAAA;AACJ;AACI;EACI,4BAAA;AACR;AAEI;EACI,6BAAA;AAAR;;AAIA;EACI;IACI,eAAA;EADN;AACF;AAIA;EACI;IACI,eAAA;EAFN;AACF","sourcesContent":[".block {\r\n    width: 100%;\r\n    font-size: 24px;\r\n    text-align: center;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-secondary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-secondary);\r\n    }\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        font-size: 18px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-5_shared-ui-End-End-module__block-x3waH`,
	"block--theme-light": `src-5_shared-ui-End-End-module__block--theme-light-QxUW1`,
	"block--theme-dark": `src-5_shared-ui-End-End-module__block--theme-dark-ofZpw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/Main/Main.module.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/Main/Main.module.scss ***!
  \********************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-5_shared-ui-Main-Main-module__block-AdpYr {
  flex-grow: 1;
  padding-bottom: 115px;
}

@media (width <= 2160px) {
  .src-5_shared-ui-Main-Main-module__block-AdpYr {
    padding-bottom: 110px;
  }
}
@media (width <= 1200px) {
  .src-5_shared-ui-Main-Main-module__block-AdpYr {
    padding-bottom: 40px;
  }
  .src-5_shared-ui-Main-Main-module__block--list-MjIDI {
    padding-top: 100px;
  }
}`, "",{"version":3,"sources":["webpack://./src/5_shared/ui/Main/Main.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,qBAAA;AACJ;;AAEA;EACI;IACI,qBAAA;EACN;AACF;AAEA;EACI;IACI,oBAAA;EAAN;EAEM;IACI,kBAAA;EAAV;AACF","sourcesContent":[".block {\r\n    flex-grow: 1;\r\n    padding-bottom: 115px;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        padding-bottom: 110px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        padding-bottom: 40px;\r\n\r\n        &--list {\r\n            padding-top: 100px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-5_shared-ui-Main-Main-module__block-AdpYr`,
	"block--list": `src-5_shared-ui-Main-Main-module__block--list-MjIDI`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss":
/*!********************************************************************************!*\
  !*** ./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss ***!
  \********************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleCategory.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleCategory.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleCategory.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/4_entities/Category/ui/ArticleTag/ArticleTag.module.scss":
/*!**********************************************************************!*\
  !*** ./src/4_entities/Category/ui/ArticleTag/ArticleTag.module.scss ***!
  \**********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleTag.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ArticleTag/ArticleTag.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleTag.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ArticleTag/ArticleTag.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleTag.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ArticleTag/ArticleTag.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleTag_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/4_entities/Category/ui/GridCategory/GridCategory.module.scss":
/*!**************************************************************************!*\
  !*** ./src/4_entities/Category/ui/GridCategory/GridCategory.module.scss ***!
  \**************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridCategory.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/GridCategory/GridCategory.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridCategory.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/GridCategory/GridCategory.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridCategory.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/GridCategory/GridCategory.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/4_entities/Category/ui/ListCategory/ListCategory.module.scss":
/*!**************************************************************************!*\
  !*** ./src/4_entities/Category/ui/ListCategory/ListCategory.module.scss ***!
  \**************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ListCategory.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ListCategory/ListCategory.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ListCategory.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ListCategory/ListCategory.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ListCategory.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ListCategory/ListCategory.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListCategory_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/4_entities/Category/ui/ListTags/ListTags.module.scss":
/*!******************************************************************!*\
  !*** ./src/4_entities/Category/ui/ListTags/ListTags.module.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ListTags.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ListTags/ListTags.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ListTags.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ListTags/ListTags.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ListTags.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Category/ui/ListTags/ListTags.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ListTags_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss":
/*!*****************************************************************!*\
  !*** ./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss ***!
  \*****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDev.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDev.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticleDev.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/4_entities/Dev/ui/GridDev/GridDev.module.scss":
/*!***********************************************************!*\
  !*** ./src/4_entities/Dev/ui/GridDev/GridDev.module.scss ***!
  \***********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridDev.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Dev/ui/GridDev/GridDev.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridDev.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Dev/ui/GridDev/GridDev.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridDev.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Dev/ui/GridDev/GridDev.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridDev_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss":
/*!**********************************************************************!*\
  !*** ./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss ***!
  \**********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePhoto.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePhoto.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePhoto.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/4_entities/Photo/ui/GridPhoto/GridPhoto.module.scss":
/*!*****************************************************************!*\
  !*** ./src/4_entities/Photo/ui/GridPhoto/GridPhoto.module.scss ***!
  \*****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridPhoto.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Photo/ui/GridPhoto/GridPhoto.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridPhoto.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Photo/ui/GridPhoto/GridPhoto.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridPhoto.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Photo/ui/GridPhoto/GridPhoto.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPhoto_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss":
/*!********************************************************************!*\
  !*** ./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss ***!
  \********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePost.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePost.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ArticlePost.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/4_entities/Post/ui/GridPosts/GridPosts.module.scss":
/*!****************************************************************!*\
  !*** ./src/4_entities/Post/ui/GridPosts/GridPosts.module.scss ***!
  \****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridPosts.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Post/ui/GridPosts/GridPosts.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridPosts.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Post/ui/GridPosts/GridPosts.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./GridPosts.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/4_entities/Post/ui/GridPosts/GridPosts.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/5_shared/ui/End/End.module.scss":
/*!*********************************************!*\
  !*** ./src/5_shared/ui/End/End.module.scss ***!
  \*********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./End.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/End/End.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./End.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/End/End.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./End.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/End/End.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_End_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/5_shared/ui/Main/Main.module.scss":
/*!***********************************************!*\
  !*** ./src/5_shared/ui/Main/Main.module.scss ***!
  \***********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Main.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/Main/Main.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Main.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/Main/Main.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Main.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/5_shared/ui/Main/Main.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_sass_loader_dist_cjs_js_Main_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmQyNmY3YTFiMDc4YzUyYWJlYTU3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0Esc0JBQXNCLHNFQUFzRSxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsaUNBQWlDLGtCQUFrQjtBQUMzUTtBQUMvQiwyQ0FBMkMsZ0RBQW1CO0FBQzlEO0FBQ0E7QUFDQSxDQUFDLHlDQUF5QyxnREFBbUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRVhrQjtBQUNHO0FBQ1c7QUFFM0QsTUFBTUksV0FBVyxHQUFHSCx3REFBTSxDQUFDSSxlQUFlLENBQUM7RUFDdkNDLFNBQVMsRUFBR0MsS0FBSyxLQUFNO0lBQ25CQyxpQkFBaUIsRUFBRUQsS0FBSyxDQUFDRSxLQUFLLENBQUM7TUFDM0JBLEtBQUssRUFBR0MsSUFBa0IsS0FBTTtRQUM1QkMsR0FBRyxFQUFFRCxJQUFJLEtBQUtQLG1FQUFZLENBQUNTLEdBQUcsR0FBR1YsMkRBQU0sQ0FBQ1csWUFBWSxHQUFHWCwyREFBTSxDQUFDWSxhQUFhO1FBQzNFQyxNQUFNLEVBQUU7VUFDSkMsTUFBTSxFQUFFO1FBQ1o7TUFDSixDQUFDLENBQUM7TUFDRkMsWUFBWSxFQUFFLENBQUMsVUFBVTtJQUM3QixDQUFDO0VBQ0wsQ0FBQyxDQUFDO0VBQ0ZDLGdCQUFnQixFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGLE1BQU1DLG9CQUFvQixHQUFHZixXQUFXLENBQUNnQix5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pwQjtBQUlOO0FBSUE7QUFLYjtBQUlTO0FBSUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRTVCekIsSUFBS2pCLFlBQVksMEJBQVpBLFlBQVk7RUFBWkEsWUFBWTtFQUFaQSxZQUFZO0VBQUEsT0FBWkEsWUFBWTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDRztBQUdoRCxNQUFNd0IsTUFBTSxHQUFHMUIsd0RBQU0sQ0FBQ0ksZUFBZSxDQUFDO0VBQ2xDQyxTQUFTLEVBQUdDLEtBQUssS0FBTTtJQUNuQnFCLFlBQVksRUFBRXJCLEtBQUssQ0FBQ0UsS0FBSyxDQUFDO01BQ3RCQSxLQUFLLEVBQUdNLE1BQU0sS0FBTTtRQUNoQkosR0FBRyxFQUFFVCwyREFBTSxDQUFDMkIsU0FBUztRQUNyQmQ7TUFDSixDQUFDLENBQUM7TUFDRkUsWUFBWSxFQUFFLENBQUMsS0FBSztJQUN4QixDQUFDLENBQUM7SUFDRmEsWUFBWSxFQUFFdkIsS0FBSyxDQUFDRSxLQUFLLENBQUM7TUFDdEJBLEtBQUssRUFBR3NCLEVBQVUsS0FBTTtRQUNwQnBCLEdBQUcsRUFBRyxHQUFFVCwyREFBTSxDQUFDMkIsU0FBVSxJQUFHRSxFQUFHLEdBQUU7UUFDakNoQixNQUFNLEVBQUU7VUFDSmlCLFFBQVEsRUFBRTtRQUNkO01BQ0osQ0FBQyxDQUFDO01BQ0ZmLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQztNQUMzQmdCLGlCQUFpQixFQUFHQyxRQUEwQixJQUFLQSxRQUFRLENBQUNDO0lBQ2hFLENBQUM7RUFDTCxDQUFDLENBQUM7RUFDRmpCLGdCQUFnQixFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGLE1BQU1rQixlQUFlLEdBQUdULE1BQU0sQ0FBQ1Usb0JBQW9CO0FBQ25ELE1BQU1DLG1CQUFtQixHQUFHWCxNQUFNLENBQUNZLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCdkI7QUFJTjtBQVVPO0FBSXVCO0FBS3RDO0FBT2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjVCLE1BQU1TLGlCQUFpQixHQUFJRyxLQUFrQixJQUFLQSxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUztBQUMzRSxNQUFNQyxpQkFBaUIsR0FBSUgsS0FBa0IsSUFBS0EsS0FBSyxFQUFFQyxPQUFPLEVBQUVHLE9BQU87QUFDekUsTUFBTVQsY0FBYyxHQUFJSyxLQUFrQixJQUFLQSxLQUFLLEVBQUVDLE9BQU8sRUFBRUksSUFBSTtBQUNuRSxNQUFNVCxlQUFlLEdBQUlJLEtBQWtCLElBQUtBLEtBQUssRUFBRUMsT0FBTyxFQUFFSyxLQUFLO0FBQ3JFLE1BQU1SLGtCQUFrQixHQUFJRSxLQUFrQixJQUFLQSxLQUFLLEVBQUVDLE9BQU8sRUFBRU0sUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjlCO0FBR3lCO0FBTTVDO0FBQzBCO0FBT3BELE1BQU1iLGdCQUFnQixHQUFHYyxrRUFBZ0IsQ0FDNUMsMEJBQTBCLEVBQzFCLE9BQU9FLEtBQUssRUFBRUMsUUFBUSxLQUFLO0VBQ3ZCLE1BQU07SUFBRUMsUUFBUTtJQUFFQztFQUFTLENBQUMsR0FBR0YsUUFBUTtFQUV2QyxNQUFNO0lBQUVHO0VBQVEsQ0FBQyxHQUFHSixLQUFLO0VBRXpCLE1BQU1OLE9BQU8sR0FBR0QscUVBQWlCLENBQUNTLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0VBQ2xELE1BQU1HLFNBQVMsR0FBR3BCLGtFQUFjLENBQUNpQixRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztFQUNqRCxNQUFNTCxRQUFRLEdBQUdULHNFQUFrQixDQUFDYyxRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQy9DLE1BQU1JLFVBQVUsR0FBR3BCLG1FQUFlLENBQUNnQixRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQzlDLE1BQU1LLFVBQVUsR0FBR0YsU0FBUyxLQUFLQyxVQUFVLEdBQUdELFNBQVMsR0FBR0EsU0FBUyxHQUFHLENBQUM7RUFFdkUsTUFBTW5ELE1BQXFCLEdBQUc7SUFDMUIsQ0FBQzZDLHlFQUFnQixDQUFDUyxJQUFJLEdBQUdkLE9BQU87SUFDaEMsQ0FBQ0sseUVBQWdCLENBQUNVLElBQUksR0FBR0wsT0FBTyxHQUFHLENBQUMsR0FBR0csVUFBVTtJQUNqREcsSUFBSSxFQUFFLGtCQUFrQjtJQUN4QnZDLFFBQVEsRUFBRSxHQUFHO0lBQ2JpQztFQUNKLENBQUM7RUFFRCxJQUFJUCxRQUFRLEVBQUU7SUFDVjNDLE1BQU0sQ0FBQzZDLHlFQUFnQixDQUFDWSxHQUFHLENBQUMsR0FBR2QsUUFBUTtFQUMzQztFQUVBLE1BQU1HLEtBQUssQ0FBQ1ksT0FBTyxDQUFDMUQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDMkQsSUFBSSxDQUFFeEMsUUFBUSxJQUFLO0lBQ2pEO0lBQ0EsTUFBTTtNQUFFQyxJQUFJO01BQUV3QztJQUFLLENBQUMsR0FBR3pDLFFBQVEsQ0FBQ0MsSUFBSTtJQUNwQyxNQUFNeUMsVUFBVSxHQUFHWCxPQUFPLEdBQ3BCckIsZ0VBQWMsQ0FBQ2lDLFdBQVcsR0FDMUJqQyxnRUFBYyxDQUFDa0MsT0FBTztJQUM1QjtJQUNBZCxRQUFRLENBQUNZLFVBQVUsQ0FBQ3pDLElBQUksQ0FBQyxDQUFDO0lBQzFCO0lBQ0E2QixRQUFRLENBQUNlLGVBQWUsQ0FBQ0MsYUFBYSxDQUFDTCxJQUFJLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0VBQzVELENBQUMsQ0FBQztBQUNOLENBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERtRDtBQUd5QjtBQUNsQjtBQUNDO0FBRXJELE1BQU0vQixPQUFPLEdBQUdTLGtFQUFnQixDQUNuQyxxQkFBcUIsRUFDckIsT0FBT2MsT0FBTyxFQUFFWCxRQUFRLEtBQUs7RUFDekIsTUFBTTtJQUNGRSxRQUFRO0lBQ1JEO0VBQ0osQ0FBQyxHQUFHRCxRQUFRO0VBRVosTUFBTVAsT0FBTyxHQUFHRCxxRUFBaUIsQ0FBQ1MsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFFbEQsTUFBTWhELE1BQXFCLEdBQUc7SUFDMUIsQ0FBQzZDLHlFQUFnQixDQUFDVSxJQUFJLEdBQUcsQ0FBQztJQUMxQixDQUFDVix5RUFBZ0IsQ0FBQ1MsSUFBSSxHQUFHZCxPQUFPO0lBQ2hDZ0IsSUFBSSxFQUFFLGtCQUFrQjtJQUN4Qk4sT0FBTyxFQUFFLEtBQUs7SUFDZGpDLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFFRCxNQUFNeUMsT0FBTyxDQUFDMUQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDMkQsSUFBSSxDQUFFeEMsUUFBUSxJQUFLO0lBQzNDO0lBQ0EsTUFBTTtNQUFFQyxJQUFJO01BQUV3QztJQUFLLENBQUMsR0FBR3pDLFFBQVEsQ0FBQ0MsSUFBSTtJQUNwQzZCLFFBQVEsQ0FBQ3BCLGdFQUFjLENBQUNrQyxPQUFPLENBQUMzQyxJQUFJLENBQUMsQ0FBQztJQUN0QztJQUNBNkIsUUFBUSxDQUFDcEIsZ0VBQWMsQ0FBQ29DLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDTSxVQUFVLENBQUMsQ0FBQztFQUMzRCxDQUFDLENBQUM7QUFDTixDQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCeUI7QUFFZ0I7QUFJMUMsTUFBTUcsY0FBYyxHQUFHRCxxRUFBbUIsQ0FBaUIsQ0FBQztBQUM1REMsY0FBYyxDQUFDQyxRQUFRLEdBQUlDLElBQW9CLElBQUtBLElBQUksQ0FBQ3ZELEVBQUU7QUFFcEQsTUFBTVcsVUFBVSxHQUFHMEMsY0FBYyxDQUFDRyxZQUFZLENBQ2hEcEMsS0FBSyxJQUFLQSxLQUFLLENBQUNDLE9BQU8sSUFBSWdDLGNBQWMsQ0FBQ0ksZUFBZSxDQUFDLENBQy9ELENBQUM7QUFFRCxNQUFNQyxZQUEyQixHQUFHO0VBQ2hDakMsSUFBSSxFQUFFLENBQUM7RUFDUEQsT0FBTyxFQUFFLENBQUM7RUFDVkYsU0FBUyxFQUFFLEtBQUs7RUFDaEJxQyxNQUFNLEVBQUVDLFNBQVM7RUFDakJqQyxRQUFRLEVBQUVpQyxTQUFTO0VBQ25CbEMsS0FBSyxFQUFFLENBQUM7RUFDUm1DLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLFFBQVEsRUFBRSxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU1DLFlBQVksR0FBR1osNkRBQVcsQ0FBQztFQUM3QmEsSUFBSSxFQUFFLGNBQWM7RUFDcEJOLFlBQVk7RUFDWk8sUUFBUSxFQUFFO0lBQ05DLE9BQU8sRUFBRUEsQ0FBQzlDLEtBQUssRUFBRStDLE1BQTZCLEtBQUs7TUFDL0MvQyxLQUFLLENBQUNLLElBQUksR0FBRzBDLE1BQU0sQ0FBQ0MsT0FBTztJQUMvQixDQUFDO0lBQ0RDLFNBQVMsRUFBRUEsQ0FBQ2pELEtBQUssRUFBRStDLE1BQTZCLEtBQUs7TUFDakQvQyxLQUFLLENBQUNNLEtBQUssR0FBR3lDLE1BQU0sQ0FBQ0MsT0FBTztJQUNoQyxDQUFDO0lBQ0RyQixPQUFPLEVBQUVBLENBQUMzQixLQUFLLEVBQUUrQyxNQUF1QyxLQUFLO01BQ3pEZCxjQUFjLENBQUNpQixPQUFPLENBQUNsRCxLQUFLLEVBQUUrQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztJQUNqRCxDQUFDO0lBQ0R0QixXQUFXLEVBQUVBLENBQUMxQixLQUFLLEVBQUUrQyxNQUF1QyxLQUFLO01BQzdEZCxjQUFjLENBQUNrQixNQUFNLENBQUNuRCxLQUFLLEVBQUUrQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBQ0RuQixhQUFhLEVBQUVBLENBQUM3QixLQUFLLEVBQUUrQyxNQUFNLEtBQUs7TUFDOUIsTUFBTWpCLFVBQVUsR0FBR2lCLE1BQU0sQ0FBQ0MsT0FBTztNQUNqQ2hELEtBQUssQ0FBQ0ssSUFBSSxHQUFHeUIsVUFBVSxDQUFDekIsSUFBSTtNQUM1QkwsS0FBSyxDQUFDTSxLQUFLLEdBQUd3QixVQUFVLENBQUNzQixTQUFTO0lBQ3RDLENBQUM7SUFDREMsY0FBYyxFQUFFQSxDQUFDckQsS0FBSyxFQUFFK0MsTUFBeUMsS0FBSztNQUNsRSxJQUFJL0MsS0FBSyxDQUFDTyxRQUFRLEtBQUt3QyxNQUFNLENBQUNDLE9BQU8sRUFBRTtRQUNuQ2hELEtBQUssQ0FBQ08sUUFBUSxHQUFHaUMsU0FBUztNQUM5QixDQUFDLE1BQU07UUFDSHhDLEtBQUssQ0FBQ08sUUFBUSxHQUFHd0MsTUFBTSxDQUFDQyxPQUFPO01BQ25DO0lBQ0o7RUFDSixDQUFDO0VBQ0RNLGFBQWEsRUFBR0MsT0FBTyxJQUFLO0lBQ3hCLE1BQU1DLE9BQU8sR0FBR2hGLCtDQUFNLENBQUNyQixTQUFTLENBQUNzQixZQUFZO0lBRTdDOEUsT0FBTyxDQUNGRSxVQUFVLENBQUNELE9BQU8sQ0FBQ0UsWUFBWSxFQUFFLENBQUMxRCxLQUFLLEVBQUUrQyxNQUFNLEtBQUs7TUFDakQsTUFBTTtRQUFFakM7TUFBUSxDQUFDLEdBQUdpQyxNQUFNLENBQUN2QixJQUFJLENBQUNtQyxHQUFHLENBQUNDLFlBQVk7TUFDaEQsSUFBSTlDLE9BQU8sRUFBRW1CLGNBQWMsQ0FBQzRCLFNBQVMsQ0FBQzdELEtBQUssQ0FBQztNQUU1Q0EsS0FBSyxDQUFDdUMsTUFBTSxHQUFHQyxTQUFTO01BQ3hCeEMsS0FBSyxDQUFDRSxTQUFTLEdBQUcsSUFBSTtJQUMxQixDQUFDLENBQUMsQ0FDRHVELFVBQVUsQ0FBQ0QsT0FBTyxDQUFDTSxjQUFjLEVBQUc5RCxLQUFLLElBQUs7TUFDM0NBLEtBQUssQ0FBQ0UsU0FBUyxHQUFHLEtBQUs7SUFDM0IsQ0FBQyxDQUFDLENBQ0R1RCxVQUFVLENBQUNELE9BQU8sQ0FBQ08sYUFBYSxFQUFFLENBQUMvRCxLQUFLLEVBQUUrQyxNQUFNLEtBQUs7TUFDbEQvQyxLQUFLLENBQUNFLFNBQVMsR0FBRyxLQUFLO01BQ3ZCRixLQUFLLENBQUN1QyxNQUFNLEdBQUdRLE1BQU0sQ0FBQ0MsT0FBTztJQUNqQyxDQUFDLENBQUM7RUFDVjtBQUNKLENBQUMsQ0FBQztBQUVLLE1BQU07RUFDVGdCLE9BQU8sRUFBRXhFLGNBQWM7RUFDdkJ5RSxPQUFPLEVBQUV4RTtBQUNiLENBQUMsR0FBR2tELFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGNkI7QUFDRztBQUdoRCxNQUFNdUIsUUFBUSxHQUFHcEgsd0RBQU0sQ0FBQ0ksZUFBZSxDQUFDO0VBQ3BDQyxTQUFTLEVBQUdDLEtBQUssS0FBTTtJQUNuQitHLGNBQWMsRUFBRS9HLEtBQUssQ0FBQ0UsS0FBSyxDQUFDO01BQ3hCQSxLQUFLLEVBQUdNLE1BQU0sS0FBTTtRQUNoQkosR0FBRyxFQUFFVCwyREFBTSxDQUFDcUgsVUFBVTtRQUN0QnhHLE1BQU0sRUFBRTtVQUNKLEdBQUdBLE1BQU07VUFDVGlCLFFBQVEsRUFBRTtRQUNkO01BQ0osQ0FBQyxDQUFDO01BQ0ZmLFlBQVksRUFBRSxDQUFDLE9BQU87SUFDMUIsQ0FBQyxDQUFDO0lBQ0Z1RyxjQUFjLEVBQUVqSCxLQUFLLENBQUNFLEtBQUssQ0FBQztNQUN4QkEsS0FBSyxFQUFHc0IsRUFBVSxLQUFNO1FBQ3BCcEIsR0FBRyxFQUFHLEdBQUVULDJEQUFNLENBQUNxSCxVQUFXLElBQUd4RixFQUFHLEdBQUU7UUFDbENoQixNQUFNLEVBQUU7VUFDSmlCLFFBQVEsRUFBRTtRQUNkO01BQ0osQ0FBQyxDQUFDO01BQ0ZmLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztNQUM3QmdCLGlCQUFpQixFQUFHQyxRQUEwQixJQUFLQSxRQUFRLENBQUNDO0lBQ2hFLENBQUM7RUFDTCxDQUFDLENBQUM7RUFDRmpCLGdCQUFnQixFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGLE1BQU11RyxpQkFBaUIsR0FBR0osUUFBUSxDQUFDSyxzQkFBc0I7QUFDekQsTUFBTUMscUJBQXFCLEdBQUdOLFFBQVEsQ0FBQ08sMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCL0I7QUFVVjtBQU1lO0FBSXdDO0FBSXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qi9DLE1BQU1RLG1CQUFtQixHQUFJakYsS0FBa0IsSUFBS0EsS0FBSyxFQUFFbUYsU0FBUyxFQUFFakYsU0FBUztBQUMvRSxNQUFNa0YsbUJBQW1CLEdBQUlwRixLQUFrQixJQUFLQSxLQUFLLEVBQUVtRixTQUFTLEVBQUUvRSxPQUFPO0FBQzdFLE1BQU04RSxnQkFBZ0IsR0FBSWxGLEtBQWtCLElBQUtBLEtBQUssRUFBRW1GLFNBQVMsRUFBRTlFLElBQUk7QUFDdkUsTUFBTTJFLGlCQUFpQixHQUFJaEYsS0FBa0IsSUFBS0EsS0FBSyxFQUFFbUYsU0FBUyxFQUFFN0UsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDVCO0FBR3lCO0FBSzFDO0FBQzRCO0FBT3hELE1BQU13RSxrQkFBa0IsR0FBR3RFLGtFQUFnQixDQUM5Qyw4QkFBOEIsRUFDOUIsT0FBT0UsS0FBSyxFQUFFQyxRQUFRLEtBQUs7RUFDdkIsTUFBTTtJQUFFQyxRQUFRO0lBQUVDO0VBQVMsQ0FBQyxHQUFHRixRQUFRO0VBRXZDLE1BQU07SUFBRUc7RUFBUSxDQUFDLEdBQUdKLEtBQUs7RUFFekIsTUFBTU4sT0FBTyxHQUFHZ0YseUVBQW1CLENBQUN4RSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztFQUNwRCxNQUFNRyxTQUFTLEdBQUdtRSxzRUFBZ0IsQ0FBQ3RFLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0VBQ25ELE1BQU1JLFVBQVUsR0FBR2dFLHVFQUFpQixDQUFDcEUsUUFBUSxDQUFDLENBQUMsQ0FBQztFQUNoRCxNQUFNSyxVQUFVLEdBQUdGLFNBQVMsS0FBS0MsVUFBVSxHQUFHRCxTQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUFDO0VBRXZFLE1BQU1uRCxNQUFxQixHQUFHO0lBQzFCLENBQUM2Qyx5RUFBZ0IsQ0FBQ1MsSUFBSSxHQUFHZCxPQUFPO0lBQ2hDLENBQUNLLHlFQUFnQixDQUFDVSxJQUFJLEdBQUdMLE9BQU8sR0FBRyxDQUFDLEdBQUdHLFVBQVU7SUFDakRHLElBQUksRUFBRSxrQkFBa0I7SUFDeEJ2QyxRQUFRLEVBQUUsR0FBRztJQUNiaUM7RUFDSixDQUFDO0VBRUQsTUFBTUosS0FBSyxDQUFDWSxPQUFPLENBQUMxRCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMyRCxJQUFJLENBQUV4QyxRQUFRLElBQUs7SUFDakQ7SUFDQSxNQUFNO01BQUVDLElBQUk7TUFBRXdDO0lBQUssQ0FBQyxHQUFHekMsUUFBUSxDQUFDQyxJQUFJO0lBQ3BDLE1BQU15QyxVQUFVLEdBQUdYLE9BQU8sR0FDcEIrRCxvRUFBZ0IsQ0FBQ25ELFdBQVcsR0FDNUJtRCxvRUFBZ0IsQ0FBQ2xELE9BQU87SUFDOUI7SUFDQWQsUUFBUSxDQUFDWSxVQUFVLENBQUN6QyxJQUFJLENBQUMsQ0FBQztJQUMxQjtJQUNBNkIsUUFBUSxDQUFDZ0Usb0VBQWdCLENBQUNoRCxhQUFhLENBQUNMLElBQUksQ0FBQ00sVUFBVSxDQUFDLENBQUM7RUFDN0QsQ0FBQyxDQUFDO0FBQ04sQ0FDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRG1EO0FBR3lCO0FBQ2Q7QUFDQztBQUV6RCxNQUFNaUQsYUFBYSxHQUFHdkUsa0VBQWdCLENBQ3pDLHlCQUF5QixFQUN6QixPQUFPYyxPQUFPLEVBQUVYLFFBQVEsS0FBSztFQUN6QixNQUFNO0lBQ0ZFLFFBQVE7SUFDUkQ7RUFDSixDQUFDLEdBQUdELFFBQVE7RUFFWixNQUFNUCxPQUFPLEdBQUdnRix5RUFBbUIsQ0FBQ3hFLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0VBRXBELE1BQU1oRCxNQUFxQixHQUFHO0lBQzFCLENBQUM2Qyx5RUFBZ0IsQ0FBQ1UsSUFBSSxHQUFHLENBQUM7SUFDMUIsQ0FBQ1YseUVBQWdCLENBQUNTLElBQUksR0FBR2QsT0FBTztJQUNoQ2dCLElBQUksRUFBRSxrQkFBa0I7SUFDeEJOLE9BQU8sRUFBRSxLQUFLO0lBQ2Q7SUFDQWpDLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFFRCxNQUFNeUMsT0FBTyxDQUFDMUQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDMkQsSUFBSSxDQUFFeEMsUUFBUSxJQUFLO0lBQzNDO0lBQ0EsTUFBTTtNQUFFQyxJQUFJO01BQUV3QztJQUFLLENBQUMsR0FBR3pDLFFBQVEsQ0FBQ0MsSUFBSTtJQUNwQzZCLFFBQVEsQ0FBQ2dFLG9FQUFnQixDQUFDbEQsT0FBTyxDQUFDM0MsSUFBSSxDQUFDLENBQUM7SUFDeEM7SUFDQTZCLFFBQVEsQ0FBQ2dFLG9FQUFnQixDQUFDaEQsYUFBYSxDQUFDTCxJQUFJLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0VBQzdELENBQUMsQ0FBQztBQUNOLENBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ5QjtBQUVvQjtBQUk5QyxNQUFNdUQsZ0JBQWdCLEdBQUdyRCxxRUFBbUIsQ0FBbUIsQ0FBQztBQUNoRXFELGdCQUFnQixDQUFDbkQsUUFBUSxHQUFJQyxJQUFzQixJQUFLQSxJQUFJLENBQUN2RCxFQUFFO0FBRXhELE1BQU0rRixZQUFZLEdBQUdVLGdCQUFnQixDQUFDakQsWUFBWSxDQUNwRHBDLEtBQUssSUFBS0EsS0FBSyxDQUFDbUYsU0FBUyxJQUFJRSxnQkFBZ0IsQ0FBQ2hELGVBQWUsQ0FBQyxDQUNuRSxDQUFDO0FBRUQsTUFBTUMsWUFBNkIsR0FBRztFQUNsQ2pDLElBQUksRUFBRSxDQUFDO0VBQ1BELE9BQU8sRUFBRSxDQUFDO0VBQ1ZGLFNBQVMsRUFBRSxLQUFLO0VBQ2hCcUMsTUFBTSxFQUFFQyxTQUFTO0VBQ2pCbEMsS0FBSyxFQUFFLENBQUM7RUFDUm1DLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLFFBQVEsRUFBRSxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU00QyxjQUFjLEdBQUd2RCw2REFBVyxDQUFDO0VBQy9CYSxJQUFJLEVBQUUsZ0JBQWdCO0VBQ3RCTixZQUFZO0VBQ1pPLFFBQVEsRUFBRTtJQUNOQyxPQUFPLEVBQUVBLENBQUM5QyxLQUFLLEVBQUUrQyxNQUE2QixLQUFLO01BQy9DL0MsS0FBSyxDQUFDSyxJQUFJLEdBQUcwQyxNQUFNLENBQUNDLE9BQU87SUFDL0IsQ0FBQztJQUNEQyxTQUFTLEVBQUVBLENBQUNqRCxLQUFLLEVBQUUrQyxNQUE2QixLQUFLO01BQ2pEL0MsS0FBSyxDQUFDTSxLQUFLLEdBQUd5QyxNQUFNLENBQUNDLE9BQU87SUFDaEMsQ0FBQztJQUNEckIsT0FBTyxFQUFFQSxDQUFDM0IsS0FBSyxFQUFFK0MsTUFBeUMsS0FBSztNQUMzRHNDLGdCQUFnQixDQUFDbkMsT0FBTyxDQUFDbEQsS0FBSyxFQUFFK0MsTUFBTSxDQUFDQyxPQUFPLENBQUM7SUFDbkQsQ0FBQztJQUNEdEIsV0FBVyxFQUFFQSxDQUFDMUIsS0FBSyxFQUFFK0MsTUFBeUMsS0FBSztNQUMvRHNDLGdCQUFnQixDQUFDbEMsTUFBTSxDQUFDbkQsS0FBSyxFQUFFK0MsTUFBTSxDQUFDQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUNEbkIsYUFBYSxFQUFFQSxDQUFDN0IsS0FBSyxFQUFFK0MsTUFBTSxLQUFLO01BQzlCLE1BQU1qQixVQUFVLEdBQUdpQixNQUFNLENBQUNDLE9BQU87TUFDakNoRCxLQUFLLENBQUNLLElBQUksR0FBR3lCLFVBQVUsQ0FBQ3pCLElBQUk7TUFDNUJMLEtBQUssQ0FBQ00sS0FBSyxHQUFHd0IsVUFBVSxDQUFDc0IsU0FBUztJQUN0QztFQUNKLENBQUM7RUFDREUsYUFBYSxFQUFHQyxPQUFPLElBQUs7SUFDeEIsTUFBTUMsT0FBTyxHQUFHVSxtREFBUSxDQUFDL0csU0FBUyxDQUFDZ0gsY0FBYztJQUVqRFosT0FBTyxDQUNGRSxVQUFVLENBQUNELE9BQU8sQ0FBQ0UsWUFBWSxFQUFFLENBQUMxRCxLQUFLLEVBQUUrQyxNQUFNLEtBQUs7TUFDakQsTUFBTTtRQUFFakM7TUFBUSxDQUFDLEdBQUdpQyxNQUFNLENBQUN2QixJQUFJLENBQUNtQyxHQUFHLENBQUNDLFlBQVk7TUFDaEQsSUFBSTlDLE9BQU8sRUFBRXVFLGdCQUFnQixDQUFDeEIsU0FBUyxDQUFDN0QsS0FBSyxDQUFDO01BRTlDQSxLQUFLLENBQUN1QyxNQUFNLEdBQUdDLFNBQVM7TUFDeEJ4QyxLQUFLLENBQUNFLFNBQVMsR0FBRyxJQUFJO0lBQzFCLENBQUMsQ0FBQyxDQUNEdUQsVUFBVSxDQUFDRCxPQUFPLENBQUNNLGNBQWMsRUFBRzlELEtBQUssSUFBSztNQUMzQ0EsS0FBSyxDQUFDRSxTQUFTLEdBQUcsS0FBSztJQUMzQixDQUFDLENBQUMsQ0FDRHVELFVBQVUsQ0FBQ0QsT0FBTyxDQUFDTyxhQUFhLEVBQUUsQ0FBQy9ELEtBQUssRUFBRStDLE1BQU0sS0FBSztNQUNsRC9DLEtBQUssQ0FBQ0UsU0FBUyxHQUFHLEtBQUs7TUFDdkJGLEtBQUssQ0FBQ3VDLE1BQU0sR0FBR1EsTUFBTSxDQUFDQyxPQUFPO0lBQ2pDLENBQUMsQ0FBQztFQUNWO0FBQ0osQ0FBQyxDQUFDO0FBRUssTUFBTTtFQUNUZ0IsT0FBTyxFQUFFWSxnQkFBZ0I7RUFDekJYLE9BQU8sRUFBRVk7QUFDYixDQUFDLEdBQUdTLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFMkI7QUFDRztBQUloRCxNQUFNQyxPQUFPLEdBQUd6SSx3REFBTSxDQUFDSSxlQUFlLENBQUM7RUFDbkNDLFNBQVMsRUFBR0MsS0FBSyxLQUFNO0lBQ25Cb0ksYUFBYSxFQUFFcEksS0FBSyxDQUFDRSxLQUFLLENBQUM7TUFDdkJBLEtBQUssRUFBR00sTUFBTSxLQUFNO1FBQ2hCSixHQUFHLEVBQUVULDJEQUFNLENBQUMwSSxVQUFVO1FBQ3RCN0gsTUFBTSxFQUFFO1VBQ0osR0FBR0EsTUFBTTtVQUNUaUIsUUFBUSxFQUFFO1FBQ2Q7TUFDSixDQUFDLENBQUM7TUFDRmYsWUFBWSxFQUFFLENBQUMsTUFBTTtJQUN6QixDQUFDLENBQUM7SUFDRjRILGFBQWEsRUFBRXRJLEtBQUssQ0FBQ0UsS0FBSyxDQUFDO01BQ3ZCQSxLQUFLLEVBQUdzQixFQUFVLEtBQU07UUFDcEJwQixHQUFHLEVBQUcsR0FBRVQsMkRBQU0sQ0FBQzBJLFVBQVcsSUFBRzdHLEVBQUcsR0FBRTtRQUNsQ2hCLE1BQU0sRUFBRTtVQUNKaUIsUUFBUSxFQUFFO1FBQ2Q7TUFDSixDQUFDLENBQUM7TUFDRmYsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO01BQzVCZ0IsaUJBQWlCLEVBQUdDLFFBQTBCLElBQUtBLFFBQVEsQ0FBQ0M7SUFDaEUsQ0FBQztFQUNMLENBQUMsQ0FBQztFQUNGakIsZ0JBQWdCLEVBQUU7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsTUFBTTRILGdCQUFnQixHQUFHSixPQUFPLENBQUNLLHFCQUFxQjtBQUN0RCxNQUFNQyxvQkFBb0IsR0FBR04sT0FBTyxDQUFDTyx5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCNUI7QUFVWDtBQU1lO0FBSXdCO0FBSVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjdDLE1BQU1PLGtCQUFrQixHQUFJckcsS0FBa0IsSUFBS0EsS0FBSyxFQUFFd0csUUFBUSxFQUFFdEcsU0FBUztBQUM3RSxNQUFNdUcsa0JBQWtCLEdBQUl6RyxLQUFrQixJQUFLQSxLQUFLLEVBQUV3RyxRQUFRLEVBQUVwRyxPQUFPO0FBQzNFLE1BQU1rRyxlQUFlLEdBQUl0RyxLQUFrQixJQUFLQSxLQUFLLEVBQUV3RyxRQUFRLEVBQUVuRyxJQUFJO0FBQ3JFLE1BQU0rRixnQkFBZ0IsR0FBSXBHLEtBQWtCLElBQUtBLEtBQUssRUFBRXdHLFFBQVEsRUFBRWxHLEtBQUs7QUFDdkUsTUFBTWlHLG1CQUFtQixHQUFJdkcsS0FBa0IsSUFBS0EsS0FBSyxFQUFFd0csUUFBUSxFQUFFakcsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmhDO0FBR3lCO0FBTTNDO0FBQzJCO0FBT3RELE1BQU0yRixpQkFBaUIsR0FBRzFGLGtFQUFnQixDQUM3Qyw0QkFBNEIsRUFDNUIsT0FBT0UsS0FBSyxFQUFFQyxRQUFRLEtBQUs7RUFDdkIsTUFBTTtJQUFFQyxRQUFRO0lBQUVDO0VBQVMsQ0FBQyxHQUFHRixRQUFRO0VBRXZDLE1BQU07SUFBRUc7RUFBUSxDQUFDLEdBQUdKLEtBQUs7RUFFekIsTUFBTU4sT0FBTyxHQUFHcUcsdUVBQWtCLENBQUM3RixRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztFQUNuRCxNQUFNRyxTQUFTLEdBQUd1RixvRUFBZSxDQUFDMUYsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFDbEQsTUFBTUwsUUFBUSxHQUFHZ0csd0VBQW1CLENBQUMzRixRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQ2hELE1BQU1JLFVBQVUsR0FBR29GLHFFQUFnQixDQUFDeEYsUUFBUSxDQUFDLENBQUMsQ0FBQztFQUMvQyxNQUFNSyxVQUFVLEdBQUdGLFNBQVMsS0FBS0MsVUFBVSxHQUFHRCxTQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUFDO0VBRXZFLE1BQU1uRCxNQUFxQixHQUFHO0lBQzFCLENBQUM2Qyx5RUFBZ0IsQ0FBQ1MsSUFBSSxHQUFHZCxPQUFPO0lBQ2hDLENBQUNLLHlFQUFnQixDQUFDVSxJQUFJLEdBQUdMLE9BQU8sR0FBRyxDQUFDLEdBQUdHLFVBQVU7SUFDakRHLElBQUksRUFBRSxrQkFBa0I7SUFDeEJ2QyxRQUFRLEVBQUUsR0FBRztJQUNiaUM7RUFDSixDQUFDO0VBRUQsSUFBSVAsUUFBUSxFQUFFO0lBQ1YzQyxNQUFNLENBQUM2Qyx5RUFBZ0IsQ0FBQ2lHLEdBQUcsQ0FBQyxHQUFHbkcsUUFBUTtFQUMzQztFQUVBLE1BQU1HLEtBQUssQ0FBQ1ksT0FBTyxDQUFDMUQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDMkQsSUFBSSxDQUFFeEMsUUFBUSxJQUFLO0lBQ2pEO0lBQ0EsTUFBTTtNQUFFQyxJQUFJO01BQUV3QztJQUFLLENBQUMsR0FBR3pDLFFBQVEsQ0FBQ0MsSUFBSTtJQUNwQyxNQUFNeUMsVUFBVSxHQUFHWCxPQUFPLEdBQ3BCYyxrRUFBZSxDQUFDRixXQUFXLEdBQzNCRSxrRUFBZSxDQUFDRCxPQUFPO0lBQzdCO0lBQ0FkLFFBQVEsQ0FBQ1ksVUFBVSxDQUFDekMsSUFBSSxDQUFDLENBQUM7SUFDMUI7SUFDQTZCLFFBQVEsQ0FBQ2Usa0VBQWUsQ0FBQ0MsYUFBYSxDQUFDTCxJQUFJLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0VBQzVELENBQUMsQ0FBQztBQUNOLENBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERtRDtBQUd5QjtBQUNoQjtBQUNDO0FBRXZELE1BQU1xRSxZQUFZLEdBQUczRixrRUFBZ0IsQ0FDeEMsdUJBQXVCLEVBQ3ZCLE9BQU9jLE9BQU8sRUFBRVgsUUFBUSxLQUFLO0VBQ3pCLE1BQU07SUFDRkUsUUFBUTtJQUNSRDtFQUNKLENBQUMsR0FBR0QsUUFBUTtFQUVaLE1BQU1QLE9BQU8sR0FBR3FHLHVFQUFrQixDQUFDN0YsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7RUFFbkQsTUFBTWhELE1BQXFCLEdBQUc7SUFDMUIsQ0FBQzZDLHlFQUFnQixDQUFDVSxJQUFJLEdBQUcsQ0FBQztJQUMxQixDQUFDVix5RUFBZ0IsQ0FBQ1MsSUFBSSxHQUFHZCxPQUFPO0lBQ2hDZ0IsSUFBSSxFQUFFLGtCQUFrQjtJQUN4Qk4sT0FBTyxFQUFFLEtBQUs7SUFDZGpDLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFFRCxNQUFNeUMsT0FBTyxDQUFDMUQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDMkQsSUFBSSxDQUFFeEMsUUFBUSxJQUFLO0lBQzNDO0lBQ0EsTUFBTTtNQUFFQyxJQUFJO01BQUV3QztJQUFLLENBQUMsR0FBR3pDLFFBQVEsQ0FBQ0MsSUFBSTtJQUNwQzZCLFFBQVEsQ0FBQ2Usa0VBQWUsQ0FBQ0QsT0FBTyxDQUFDM0MsSUFBSSxDQUFDLENBQUM7SUFDdkM7SUFDQTZCLFFBQVEsQ0FBQ2Usa0VBQWUsQ0FBQ0MsYUFBYSxDQUFDTCxJQUFJLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0VBQzVELENBQUMsQ0FBQztBQUNOLENBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0J5QjtBQUdrQjtBQUc1QyxNQUFNNkUsZUFBZSxHQUFHM0UscUVBQW1CLENBQWtCLENBQUM7QUFDOUQyRSxlQUFlLENBQUN6RSxRQUFRLEdBQUlDLElBQXFCLElBQUtBLElBQUksQ0FBQ3ZELEVBQUU7QUFFdEQsTUFBTW9ILFdBQVcsR0FBR1csZUFBZSxDQUFDdkUsWUFBWSxDQUNsRHBDLEtBQUssSUFBS0EsS0FBSyxDQUFDd0csUUFBUSxJQUFJRyxlQUFlLENBQUN0RSxlQUFlLENBQUMsQ0FDakUsQ0FBQztBQUVELE1BQU1DLFlBQTRCLEdBQUc7RUFDakNqQyxJQUFJLEVBQUUsQ0FBQztFQUNQRCxPQUFPLEVBQUUsQ0FBQztFQUNWRixTQUFTLEVBQUUsS0FBSztFQUNoQnFDLE1BQU0sRUFBRUMsU0FBUztFQUNqQmpDLFFBQVEsRUFBRWlDLFNBQVM7RUFDbkJsQyxLQUFLLEVBQUUsQ0FBQztFQUNSbUMsR0FBRyxFQUFFLEVBQUU7RUFDUEMsUUFBUSxFQUFFLENBQUM7QUFDZixDQUFDO0FBRUQsTUFBTWtFLGFBQWEsR0FBRzdFLDZEQUFXLENBQUM7RUFDOUJhLElBQUksRUFBRSxlQUFlO0VBQ3JCTixZQUFZO0VBQ1pPLFFBQVEsRUFBRTtJQUNOQyxPQUFPLEVBQUVBLENBQUM5QyxLQUFLLEVBQUUrQyxNQUE2QixLQUFLO01BQy9DL0MsS0FBSyxDQUFDSyxJQUFJLEdBQUcwQyxNQUFNLENBQUNDLE9BQU87SUFDL0IsQ0FBQztJQUNEQyxTQUFTLEVBQUVBLENBQUNqRCxLQUFLLEVBQUUrQyxNQUE2QixLQUFLO01BQ2pEL0MsS0FBSyxDQUFDTSxLQUFLLEdBQUd5QyxNQUFNLENBQUNDLE9BQU87SUFDaEMsQ0FBQztJQUNEckIsT0FBTyxFQUFFQSxDQUFDM0IsS0FBSyxFQUFFK0MsTUFBd0MsS0FBSztNQUMxRDRELGVBQWUsQ0FBQ3pELE9BQU8sQ0FBQ2xELEtBQUssRUFBRStDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO0lBQ2xELENBQUM7SUFDRHRCLFdBQVcsRUFBRUEsQ0FBQzFCLEtBQUssRUFBRStDLE1BQXdDLEtBQUs7TUFDOUQ0RCxlQUFlLENBQUN4RCxNQUFNLENBQUNuRCxLQUFLLEVBQUUrQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztJQUNqRCxDQUFDO0lBQ0RuQixhQUFhLEVBQUVBLENBQUM3QixLQUFLLEVBQUUrQyxNQUFNLEtBQUs7TUFDOUIsTUFBTWpCLFVBQVUsR0FBR2lCLE1BQU0sQ0FBQ0MsT0FBTztNQUNqQ2hELEtBQUssQ0FBQ0ssSUFBSSxHQUFHeUIsVUFBVSxDQUFDekIsSUFBSTtNQUM1QkwsS0FBSyxDQUFDTSxLQUFLLEdBQUd3QixVQUFVLENBQUNzQixTQUFTO0lBQ3RDLENBQUM7SUFDREMsY0FBYyxFQUFFQSxDQUFDckQsS0FBSyxFQUFFK0MsTUFBeUMsS0FBSztNQUNsRSxJQUFJL0MsS0FBSyxDQUFDTyxRQUFRLEtBQUt3QyxNQUFNLENBQUNDLE9BQU8sRUFBRTtRQUNuQ2hELEtBQUssQ0FBQ08sUUFBUSxHQUFHaUMsU0FBUztNQUM5QixDQUFDLE1BQU07UUFDSHhDLEtBQUssQ0FBQ08sUUFBUSxHQUFHd0MsTUFBTSxDQUFDQyxPQUFPO01BQ25DO0lBQ0o7RUFDSixDQUFDO0VBQ0RNLGFBQWEsRUFBR0MsT0FBTyxJQUFLO0lBQ3hCLE1BQU1DLE9BQU8sR0FBRytCLGlEQUFPLENBQUNwSSxTQUFTLENBQUNxSSxhQUFhO0lBRS9DakMsT0FBTyxDQUNGRSxVQUFVLENBQUNELE9BQU8sQ0FBQ0UsWUFBWSxFQUFFLENBQUMxRCxLQUFLLEVBQUUrQyxNQUFNLEtBQUs7TUFDakQsTUFBTTtRQUFFakM7TUFBUSxDQUFDLEdBQUdpQyxNQUFNLENBQUN2QixJQUFJLENBQUNtQyxHQUFHLENBQUNDLFlBQVk7TUFDaEQsSUFBSTlDLE9BQU8sRUFBRTZGLGVBQWUsQ0FBQzlDLFNBQVMsQ0FBQzdELEtBQUssQ0FBQztNQUU3Q0EsS0FBSyxDQUFDdUMsTUFBTSxHQUFHQyxTQUFTO01BQ3hCeEMsS0FBSyxDQUFDRSxTQUFTLEdBQUcsSUFBSTtJQUMxQixDQUFDLENBQUMsQ0FDRHVELFVBQVUsQ0FBQ0QsT0FBTyxDQUFDTSxjQUFjLEVBQUc5RCxLQUFLLElBQUs7TUFDM0NBLEtBQUssQ0FBQ0UsU0FBUyxHQUFHLEtBQUs7SUFDM0IsQ0FBQyxDQUFDLENBQ0R1RCxVQUFVLENBQUNELE9BQU8sQ0FBQ08sYUFBYSxFQUFFLENBQUMvRCxLQUFLLEVBQUUrQyxNQUFNLEtBQUs7TUFDbEQvQyxLQUFLLENBQUNFLFNBQVMsR0FBRyxLQUFLO01BQ3ZCRixLQUFLLENBQUN1QyxNQUFNLEdBQUdRLE1BQU0sQ0FBQ0MsT0FBTztJQUNqQyxDQUFDLENBQUM7RUFDVjtBQUNKLENBQUMsQ0FBQztBQUVLLE1BQU07RUFDVGdCLE9BQU8sRUFBRWlDLGVBQWU7RUFDeEJoQyxPQUFPLEVBQUVyQztBQUNiLENBQUMsR0FBR2dGLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUY7QUFFZixNQUFNRyxTQUFTLEdBQUdBLENBQUNDLFVBQWtDLEVBQUVDLFVBQWtCLEtBQUs7RUFDMUUsTUFBTSxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHTiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztFQUV2Q0MsZ0RBQVMsQ0FBQyxNQUFNO0lBQ1osTUFBTU0sWUFBWSxHQUFHQSxDQUFBLEtBQU07TUFDdkIsTUFBTUMsS0FBSyxHQUFHTCxVQUFVLEVBQUVNLE9BQU8sRUFBRUMsV0FBVztNQUU5QyxJQUFJRixLQUFLLEVBQUVGLFNBQVMsQ0FBQ0UsS0FBSyxHQUFHSixVQUFVLENBQUM7SUFDNUMsQ0FBQztJQUVERyxZQUFZLENBQUMsQ0FBQztJQUVkSSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRUwsWUFBWSxDQUFDO0lBRS9DLE9BQU8sTUFBTTtNQUNUSSxNQUFNLENBQUNFLG1CQUFtQixDQUFDLFFBQVEsRUFBRU4sWUFBWSxDQUFDO0lBQ3RELENBQUM7RUFDTCxDQUFDLEVBQUUsQ0FBQ0osVUFBVSxFQUFFQyxVQUFVLENBQUMsQ0FBQztFQUU1QixPQUFPQyxNQUFNO0FBQ2pCLENBQUM7QUFFRCxpRUFBZUgsU0FBUzs7Ozs7Ozs7Ozs7Ozs7SUM1Qm5CdEcsZ0JBQWdCLDBCQUFoQkEsZ0JBQWdCO0VBQWhCQSxnQkFBZ0I7RUFBaEJBLGdCQUFnQjtFQUFoQkEsZ0JBQWdCO0VBQWhCQSxnQkFBZ0I7RUFBQSxPQUFoQkEsZ0JBQWdCO0FBQUEsRUFBaEJBLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0I7QUFDSztBQUNHO0FBQUE7QUFBQTtBQUFBO0FBUXhDLE1BQU01RCxRQUFRLEdBQUk2RCxLQUFvQixJQUFLO0VBQzlDLE1BQU07SUFDRjFCLElBQUk7SUFDSmtCO0VBQ0osQ0FBQyxHQUFHUSxLQUFLO0VBRVQsTUFBTTtJQUFFMEg7RUFBRSxDQUFDLEdBQUdQLDZEQUFjLENBQUMsQ0FBQztFQUU5QixNQUFNUSxjQUFjLGdCQUFHTixzREFBQTtJQUFBTyxRQUFBLEVBQVNGLENBQUMsQ0FBQyxTQUFTO0VBQUMsQ0FBUyxDQUFDO0VBRXRELE1BQU1HLE9BQU8sZ0JBQ1RKLHVEQUFBLENBQUFGLHVEQUFBO0lBQUFLLFFBQUEsR0FFUXRKLElBQUksRUFBRXdKLFNBQVMsaUJBQ1pULHNEQUFBO01BQUFPLFFBQUEsRUFBU3RKLElBQUksRUFBRXdKO0lBQVMsQ0FBUyxDQUFDLEVBR3JDeEosSUFBSSxFQUFFeUosZUFBZSxpQkFDbEJWLHNEQUFBO01BQU1uRixJQUFJLEVBQUMsYUFBYTtNQUFDMkYsT0FBTyxFQUFFdkosSUFBSSxFQUFFeUo7SUFBZ0IsQ0FBRSxDQUFDLEVBRzlEekosSUFBSSxFQUFFMEosUUFBUSxpQkFDWFgsc0RBQUE7TUFBTW5GLElBQUksRUFBQyxVQUFVO01BQUMyRixPQUFPLEVBQUV2SixJQUFJLEVBQUUwSjtJQUFTLENBQUUsQ0FBQyxFQUdwRDFKLElBQUksRUFBRTJKLFVBQVUsaUJBQ2JaLHNEQUFBO01BQU1uRixJQUFJLEVBQUMsUUFBUTtNQUFDMkYsT0FBTyxFQUFFdkosSUFBSSxFQUFFMko7SUFBVyxDQUFFLENBQUMsRUFHcEQzSixJQUFJLEVBQUU0SixjQUFjLGlCQUVoQmIsc0RBQUE7TUFBUWMsSUFBSSxFQUFDLHFCQUFxQjtNQUFBUCxRQUFBLEVBQzVCUSxJQUFJLENBQUNDLFNBQVMsQ0FBQy9KLElBQUksRUFBRTRKLGNBQWM7SUFBQyxDQUNsQyxDQUNYO0VBQUEsQ0FFUCxDQUNMO0VBRUQsb0JBQ0lULHVEQUFBLENBQUNQLHNEQUFNO0lBQUFVLFFBQUEsR0FDRHBJLFNBQVMsR0FBR21JLGNBQWMsR0FBR0UsT0FBTyxFQUNwQyxDQUFDckksU0FBUyxJQUFJLENBQUNsQixJQUFJLGlCQUFJK0ksc0RBQUE7TUFBQU8sUUFBQSxFQUFPO0lBQUcsQ0FBTyxDQUFDO0VBQUEsQ0FDdkMsQ0FBQztBQUVqQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEbUM7QUFFb0I7QUFDUjtBQUFBO0FBQUE7QUFHekMsSUFBS25LLG1CQUFtQiwwQkFBbkJBLG1CQUFtQjtFQUFuQkEsbUJBQW1CLENBQW5CQSxtQkFBbUI7RUFBbkJBLG1CQUFtQixDQUFuQkEsbUJBQW1CO0VBQUEsT0FBbkJBLG1CQUFtQjtBQUFBO0FBZXhCLE1BQU1ELGVBQWUsR0FBSXdDLEtBQTJCLElBQUs7RUFDNUQsTUFBTTtJQUNGMUIsSUFBSTtJQUNKekIsSUFBSTtJQUNKcUYsSUFBSTtJQUNKdUcsU0FBUztJQUNUQyxRQUFRO0lBQ1JDLFNBQVM7SUFDVEM7RUFDSixDQUFDLEdBQUc1SSxLQUFLO0VBRVQsTUFBTTtJQUFFNkk7RUFBTSxDQUFDLEdBQUdOLHVFQUFRLENBQUMsQ0FBQztFQUU1QixNQUFNTyxHQUFnQyxHQUFHak0sSUFBSSxLQUFLWSxtQkFBbUIsQ0FBQ3NMLE1BQU0sR0FBRyxTQUFTLEdBQUcsT0FBTztFQUVsRyxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBWTtJQUM1QixJQUFJSixVQUFVLEVBQUVBLFVBQVUsQ0FBQ3RLLElBQUksQ0FBQztFQUNwQyxDQUFDO0VBRUQsTUFBTTJLLGFBQWEsR0FBR0EsQ0FBQSxLQUFZO0lBQzlCLElBQUlMLFVBQVUsSUFBSUYsUUFBUSxFQUFFRSxVQUFVLENBQUM5RyxTQUFTLENBQUM7RUFDckQsQ0FBQztFQUVELE1BQU1vSCxRQUFRLGdCQUNWN0Isc0RBQUE7SUFDSW9CLFNBQVMsRUFDTEgsaURBQVUsQ0FDTkUsb0VBQUcsQ0FBQ1csS0FBSyxFQUNUWCxvRUFBRyxDQUFDLGlCQUFpQixDQUFDLEVBQ3RCQSxvRUFBRyxDQUFFLFVBQVNHLFNBQVMsSUFBSUUsS0FBTSxFQUFDLENBQUMsRUFDbkNKLFNBQ0o7RUFDSCxDQUNKLENBQ0o7RUFFRCxNQUFNVyxPQUFPLGdCQUNUM0IsdURBQUEsQ0FBQ3FCLEdBQUc7SUFDQUwsU0FBUyxFQUNMSCxpREFBVSxDQUNORSxvRUFBRyxDQUFDVyxLQUFLLEVBQ1RYLG9FQUFHLENBQUUsVUFBU0csU0FBUyxJQUFJRSxLQUFNLEVBQUMsQ0FBQyxFQUNuQztNQUFFLENBQUNMLG9FQUFHLENBQUMsY0FBYyxDQUFDLEdBQUczTCxJQUFJLEtBQUtZLG1CQUFtQixDQUFDNEw7SUFBTSxDQUFDLEVBQzdEO01BQUUsQ0FBQ2Isb0VBQUcsQ0FBQyxlQUFlLENBQUMsR0FBR0U7SUFBUyxDQUFDLEVBQ3BDRCxTQUNKLENBQ0g7SUFBQWIsUUFBQSxHQUdHL0ssSUFBSSxLQUFLWSxtQkFBbUIsQ0FBQzRMLEtBQUssaUJBRTlCaEMsc0RBQUE7TUFDSW5GLElBQUksRUFBRUEsSUFBSztNQUNYaUcsSUFBSSxFQUFDLE9BQU87TUFDWm1CLEtBQUssRUFBRWhMLElBQUksRUFBRUosRUFBRztNQUNoQnFMLE9BQU8sRUFBRWIsUUFBUztNQUNsQmMsT0FBTyxFQUFFUCxhQUFjO01BQ3ZCUSxRQUFRLEVBQUVULFdBQVk7TUFDdEJQLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ0Usb0VBQUcsQ0FBQ2tCLEtBQUs7SUFBRSxDQUNwQyxDQUNKLEVBRUpwTCxJQUFJLEVBQUVxTCxLQUFLO0VBQUEsQ0FDWCxDQUNSO0VBRUQsT0FBT3JMLElBQUksR0FBRzhLLE9BQU8sR0FBR0YsUUFBUTtBQUNwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZtQztBQUNPO0FBR2E7QUFBQTtBQVFqRCxNQUFNckwsVUFBVSxHQUFJbUMsS0FBc0IsSUFBSztFQUNsRCxNQUFNO0lBQ0YxQixJQUFJO0lBQ0ptSyxTQUFTO0lBQ1RFO0VBQ0osQ0FBQyxHQUFHM0ksS0FBSztFQUVULE1BQU07SUFBRTZJO0VBQU0sQ0FBQyxHQUFHTix1RUFBUSxDQUFDLENBQUM7RUFFNUIsb0JBQ0lkLHVEQUFBO0lBQ0lnQixTQUFTLEVBQ0xILGlEQUFVLENBQ05FLCtEQUFHLENBQUNXLEtBQUssRUFDVFgsK0RBQUcsQ0FBRSxVQUFTRyxTQUFTLElBQUlFLEtBQU0sRUFBQyxDQUFDLEVBQ25DSixTQUNKLENBQ0g7SUFBQWIsUUFBQSxHQUNKLEdBRUcsRUFBRXRKLElBQUksQ0FBQ3FMLEtBQUs7RUFBQSxDQUNWLENBQUM7QUFFZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNtQztBQUlRO0FBQ0M7QUFBQTtBQVN0QyxNQUFNaE0sWUFBWSxHQUFJcUMsS0FBd0IsSUFBSztFQUN0RCxNQUFNO0lBQ0YxQixJQUFJO0lBQ0ptSyxTQUFTO0lBQ1RtQjtFQUNKLENBQUMsR0FBRzVKLEtBQUs7RUFFVCxNQUFNa0osUUFBUSxHQUNWLElBQUlXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxLQUFhLGtCQUN6QzVDLHNEQUFBLENBQUM3Siw2RUFBZTtJQUVaWCxJQUFJLEVBQUVZLGlGQUFtQixDQUFDc0w7RUFBTyxHQUQ1QmtCLEtBRVIsQ0FDSixDQUNKO0VBRUQsTUFBTXBDLE9BQU8sR0FDVHZKLElBQUksSUFDREEsSUFBSSxFQUFFNEwsTUFBTSxHQUFHLENBQUMsSUFDaEI1TCxJQUFJLENBQUN5TCxHQUFHLENBQUV0SSxJQUF5QixpQkFDbEM0RixzREFBQSxDQUFDN0osNkVBQWU7SUFDWmMsSUFBSSxFQUFFbUQsSUFBSztJQUVYNUUsSUFBSSxFQUFFWSxpRkFBbUIsQ0FBQ3NMO0VBQU8sR0FENUJ0SCxJQUFJLENBQUN2RCxFQUViLENBQ0osQ0FDSjtFQUVELG9CQUNJbUosc0RBQUE7SUFBS29CLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ0UsaUVBQUcsQ0FBQ1csS0FBSyxFQUFFVixTQUFTLENBQUU7SUFBQWIsUUFBQSxFQUMzQ2dDLFlBQVksR0FBR1YsUUFBUSxHQUFHckI7RUFBTyxDQUNsQyxDQUFDO0FBRWQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ21DO0FBQ1M7QUFDNEM7QUFDbkI7QUFBQTtBQVUvRCxNQUFNbkssWUFBWSxHQUFJc0MsS0FBd0IsSUFBSztFQUN0RCxNQUFNO0lBQ0YxQixJQUFJO0lBQ0ptSyxTQUFTO0lBQ1RPLFdBQVc7SUFDWFksWUFBWTtJQUNaUTtFQUNKLENBQUMsR0FBR3BLLEtBQUs7RUFFVCxNQUFNa0osUUFBUSxHQUNWLElBQUlXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxLQUFhLGtCQUN6QzVDLHNEQUFBLENBQUM3Siw2RUFBZTtJQUVaWCxJQUFJLEVBQUVZLGlGQUFtQixDQUFDc0w7RUFBTyxHQUQ1QmtCLEtBRVIsQ0FDSixDQUNKO0VBRUQsTUFBTXBDLE9BQU8sR0FDVHZKLElBQUksSUFDREEsSUFBSSxFQUFFNEwsTUFBTSxHQUFHLENBQUMsSUFDaEI1TCxJQUFJLENBQUN5TCxHQUFHLENBQUV0SSxJQUF5QixpQkFDbEM0RixzREFBQSxDQUFDN0osNkVBQWU7SUFDWmMsSUFBSSxFQUFFbUQsSUFBSztJQUVYUyxJQUFJLEVBQUMsVUFBVTtJQUNmMEcsVUFBVSxFQUFFSSxXQUFZO0lBQ3hCbk0sSUFBSSxFQUFFWSxpRkFBbUIsQ0FBQzRMLEtBQU07SUFDaENYLFFBQVEsRUFBRTBCLFlBQVksS0FBSzNJLElBQUksQ0FBQ3ZEO0VBQUcsR0FKOUJ1RCxJQUFJLENBQUN2RCxFQUtiLENBQ0osQ0FDSjtFQUVELG9CQUNJbUosc0RBQUE7SUFBTW9CLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ0UsaUVBQUcsQ0FBQzZCLEdBQUcsRUFBRTVCLFNBQVMsQ0FBRTtJQUFBYixRQUFBLEVBQzFDZ0MsWUFBWSxHQUFHVixRQUFRLEdBQUdyQjtFQUFPLENBQ2pDLENBQUM7QUFFZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRG1DO0FBQ0s7QUFBQTtBQU9sQyxNQUFNakssUUFBUSxHQUFJb0MsS0FBb0IsSUFBSztFQUM5QyxNQUFNO0lBQ0Y0SCxRQUFRO0lBQ1JhO0VBQ0osQ0FBQyxHQUFHekksS0FBSztFQUVULG9CQUNJcUgsc0RBQUE7SUFBS29CLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ0UsNkRBQUcsQ0FBQ1csS0FBSyxFQUFFVixTQUFTLENBQUU7SUFBQWIsUUFBQSxFQUMzQ0E7RUFBUSxDQUNULENBQUM7QUFFZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCK0I7QUFDSTtBQUNJO0FBQ1c7QUFDRjtBQUNPO0FBQ0E7QUFFUztBQUN0QjtBQUFBO0FBQUE7QUFTcEMsTUFBTWpKLFVBQVUsR0FBSXFCLEtBQXNCLElBQUs7RUFDbEQsTUFBTTtJQUNGMUIsSUFBSTtJQUNKcUssU0FBUztJQUNURjtFQUNKLENBQUMsR0FBR3pJLEtBQUs7RUFFVCxNQUFNO0lBQUU2STtFQUFNLENBQUMsR0FBR04sdUVBQVEsQ0FBQyxDQUFDO0VBRTVCLE1BQU1XLFFBQVEsR0FBR29CLDhDQUFPLENBQUMsbUJBQ3JCakQsc0RBQUE7SUFDSW9CLFNBQVMsRUFDTEgsaURBQVUsQ0FDTkUsK0RBQUcsQ0FBQ1csS0FBSyxFQUNUWCwrREFBRyxDQUFFLFVBQVNHLFNBQVMsSUFBSUUsS0FBTSxFQUFDLENBQUMsRUFDbkNMLCtEQUFHLENBQUMsaUJBQWlCLENBQ3pCO0VBQ0gsQ0FDSixDQUNKLEVBQUUsQ0FBQ2xLLElBQUksRUFBRXFLLFNBQVMsRUFBRUUsS0FBSyxDQUFDLENBQUM7RUFFNUIsTUFBTWhCLE9BQU8sR0FBR3lDLDhDQUFPLENBQUMsbUJBQ3BCakQsc0RBQUEsQ0FBQ2tELGtEQUFJO0lBQ0RJLEVBQUUsRUFBRyxHQUFFRCw0RUFBVSxDQUFDRSxVQUFXLEdBQUV0TSxJQUFJLEVBQUVKLEVBQUcsRUFBRTtJQUMxQ3VLLFNBQVMsRUFDTEgsaURBQVUsQ0FDTkUsK0RBQUcsQ0FBQ1csS0FBSyxFQUNUWCwrREFBRyxDQUFFLFVBQVNHLFNBQVMsSUFBSUUsS0FBTSxFQUFDLENBQUMsRUFDbkNKLFNBQ0osQ0FDSDtJQUFBYixRQUFBLGVBRURILHVEQUFBO01BQUtnQixTQUFTLEVBQUVILGlEQUFVLENBQUNrQyxzRUFBSSxDQUFDQSxJQUFJLEVBQUVoQywrREFBRyxDQUFDZ0MsSUFBSSxDQUFFO01BQUE1QyxRQUFBLGdCQUM1Q1Asc0RBQUE7UUFBS29CLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ2tDLHNFQUFJLENBQUMsYUFBYSxDQUFDLEVBQUVBLHNFQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBRTtRQUFBNUMsUUFBQSxlQUNyRVAsc0RBQUE7VUFBSW9CLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ0UsK0RBQUcsQ0FBQ21CLEtBQUssQ0FBRTtVQUFBL0IsUUFBQSxFQUMvQnRKLElBQUksRUFBRXFMO1FBQUssQ0FDYjtNQUFDLENBQ0osQ0FBQyxlQUNOdEMsc0RBQUE7UUFBS29CLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ2tDLHNFQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRWhDLCtEQUFHLENBQUMsYUFBYSxDQUFDLENBQUU7UUFBQVosUUFBQSxlQUNwRVAsc0RBQUEsQ0FBQ29ELDZFQUFJO1VBQ0RoQyxTQUFTLEVBQ0xILGlEQUFVLENBQ05FLCtEQUFHLENBQUNxQyxJQUFJLEVBQ1JyQywrREFBRyxDQUFDLGNBQWMsQ0FBQyxFQUNuQkEsK0RBQUcsQ0FBRSxTQUFRRyxTQUFTLElBQUlFLEtBQU0sRUFBQyxDQUNyQztRQUNILENBQ0o7TUFBQyxDQUNELENBQUMsZUFDTnhCLHNEQUFBO1FBQUtvQixTQUFTLEVBQUVILGlEQUFVLENBQUNrQyxzRUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFQSxzRUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUU7UUFBQTVDLFFBQUEsZUFDckVILHVEQUFBO1VBQUtnQixTQUFTLEVBQUVILGlEQUFVLENBQUNFLCtEQUFHLENBQUNzQyxJQUFJLENBQUU7VUFBQWxELFFBQUEsZ0JBQ2pDUCxzREFBQSxDQUFDMUosOERBQVk7WUFDVGlNLFlBQVksRUFBRSxLQUFNO1lBQ3BCdEwsSUFBSSxFQUFFQSxJQUFJLEVBQUV5TSxJQUFJLEVBQUV6TSxJQUFJLElBQUk7VUFBRyxDQUNoQyxDQUFDLGVBQ0YrSSxzREFBQSxDQUFDb0QsNkVBQUk7WUFDRGhDLFNBQVMsRUFDTEgsaURBQVUsQ0FDTkUsK0RBQUcsQ0FBQ3FDLElBQUksRUFDUnJDLCtEQUFHLENBQUMsZUFBZSxDQUFDLEVBQ3BCQSwrREFBRyxDQUFFLFNBQVFHLFNBQVMsSUFBSUUsS0FBTSxFQUFDLENBQ3JDO1VBQ0gsQ0FDSixDQUFDO1FBQUEsQ0FDRDtNQUFDLENBQ0wsQ0FBQztJQUFBLENBQ0w7RUFBQyxDQUNKLENBQ1QsRUFBRSxDQUFDdkssSUFBSSxFQUFFcUssU0FBUyxFQUFFRSxLQUFLLENBQUMsQ0FBQztFQUU1QixPQUFPdkssSUFBSSxHQUFHdUosT0FBTyxHQUFHcUIsUUFBUTtBQUNwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGbUM7QUFDTTtBQUNGO0FBQ2M7QUFBQTtBQUFBO0FBVS9DLE1BQU10SyxPQUFPLEdBQUlvQixLQUFtQixJQUFLO0VBQzVDLE1BQU07SUFDRjFCLElBQUk7SUFDSjJNLE9BQU87SUFDUHhDLFNBQVM7SUFDVG1CO0VBQ0osQ0FBQyxHQUFHNUosS0FBSztFQUVULE1BQU1rSixRQUFRLEdBQ1YsSUFBSVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLEtBQUssa0JBQ2pDNUMsc0RBQUE7SUFBQU8sUUFBQSxlQUNJUCxzREFBQSxDQUFDMUksOERBQVUsSUFBRTtFQUFDLEdBRFRzTCxLQUVMLENBQ1AsQ0FDSjtFQUVELE1BQU1wQyxPQUFPLEdBQ1R2SixJQUFJLElBQ0RBLElBQUksRUFBRTRMLE1BQU0sR0FBRyxDQUFDLElBQ2hCNUwsSUFBSSxFQUFFeUwsR0FBRyxDQUFFdEksSUFBSSxpQkFDZDRGLHNEQUFBO0lBQUFPLFFBQUEsZUFDSVAsc0RBQUEsQ0FBQzFJLDhEQUFVO01BQ1BMLElBQUksRUFBRW1EO0lBQUssQ0FDZDtFQUFDLEdBSEdBLElBQUksQ0FBQ3ZELEVBSVYsQ0FDUCxDQUNKO0VBRUQsb0JBQ0l1Six1REFBQTtJQUFLZ0IsU0FBUyxFQUFFSCxpREFBVSxDQUFDRSw0REFBRyxDQUFDVyxLQUFLLENBQUU7SUFBQXZCLFFBQUEsZ0JBQ2xDUCxzREFBQTtNQUFJb0IsU0FBUyxFQUFFSCxpREFBVSxDQUFDRSw0REFBRyxDQUFDMEMsSUFBSSxFQUFFekMsU0FBUyxDQUFFO01BQUFiLFFBQUEsRUFDekNnQyxZQUFZLEdBQUdWLFFBQVEsR0FBR3JCO0lBQU8sQ0FDbkMsQ0FBQyxFQUNKb0QsT0FBTyxpQkFBSTVELHNEQUFBLENBQUMyRCxxREFBRyxJQUFFLENBQUM7RUFBQSxDQUNsQixDQUFDO0FBRWQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEbUM7QUFDSTtBQUNBO0FBSVg7QUFDeUI7QUFFRTtBQUNTO0FBQ3BCO0FBQUE7QUFBQTtBQVN0QyxNQUFNSSxZQUFZLEdBQUlwTCxLQUF3QixJQUFLO0VBQ3RELE1BQU07SUFDRjFCLElBQUk7SUFDSnFLLFNBQVM7SUFDVEY7RUFDSixDQUFDLEdBQUd6SSxLQUFLO0VBRVQsTUFBTTtJQUFFNkk7RUFBTSxDQUFDLEdBQUdOLHVFQUFRLENBQUMsQ0FBQztFQUM1QixNQUFNOEMsS0FBSyxHQUFHRiw2Q0FBTSxDQUFDLElBQUksQ0FBQztFQUMxQixNQUFNRyxRQUFRLEdBQUdqRiwwRUFBUyxDQUFDZ0YsS0FBSyxFQUFFLElBQUksQ0FBQztFQUN2QyxNQUFNRSxVQUFVLEdBQUdqTixJQUFJLEVBQUV3TSxJQUFJLEVBQUVVLE9BQU8sRUFBRWxOLElBQUksRUFBRW1OLE9BQU8sRUFBRUMsS0FBSyxFQUFFNU8sR0FBRyxJQUMxRHdCLElBQUksRUFBRXdNLElBQUksRUFBRVUsT0FBTyxFQUFFbE4sSUFBSSxFQUFFbU4sT0FBTyxFQUFFRSxNQUFNLEVBQUU3TyxHQUFHLElBQy9Dd0IsSUFBSSxFQUFFd00sSUFBSSxFQUFFVSxPQUFPLEVBQUVsTixJQUFJLEVBQUVtTixPQUFPLEVBQUVHLEtBQUssRUFBRTlPLEdBQUcsSUFBSSxFQUFFO0VBQzNELE1BQU0rTyxPQUFPLEdBQUd2TixJQUFJLEVBQUV3TSxJQUFJLEVBQUVVLE9BQU8sRUFBRWxOLElBQUksRUFBRXdOLGVBQWUsSUFBSSxHQUFHO0VBRWpFLE1BQU01QyxRQUFRLEdBQUdvQiw4Q0FBTyxDQUFDLG1CQUNyQmpELHNEQUFBO0lBQ0kwRSxHQUFHLEVBQUVWLEtBQU07SUFDWFcsS0FBSyxFQUFFO01BQ0hyRixLQUFLLEVBQUUsTUFBTTtNQUNiSCxNQUFNLEVBQUcsR0FBRThFLFFBQVM7SUFDeEIsQ0FBRTtJQUNGN0MsU0FBUyxFQUNMSCxpREFBVSxDQUNORSxpRUFBRyxDQUFDWSxPQUFPLEVBQ1haLGlFQUFHLENBQUUsWUFBV0csU0FBUyxJQUFJRSxLQUFNLEVBQUMsQ0FBQyxFQUNyQ0wsaUVBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUN4QkMsU0FDSjtFQUNILENBQ0osQ0FDSixFQUFFLENBQUM2QyxRQUFRLEVBQUU3QyxTQUFTLEVBQUVFLFNBQVMsRUFBRUUsS0FBSyxFQUFFdkssSUFBSSxDQUFDLENBQUM7RUFFakQsTUFBTThLLE9BQU8sR0FBR2tCLDhDQUFPLENBQUMsbUJBQ3BCN0MsdURBQUEsQ0FBQzhDLGtEQUFJO0lBQ0R3QixHQUFHLEVBQUVWLEtBQU07SUFDWFcsS0FBSyxFQUFFO01BQ0hyRixLQUFLLEVBQUUsTUFBTTtNQUNiSCxNQUFNLEVBQUcsR0FBRThFLFFBQVM7SUFDeEIsQ0FBRTtJQUNGWCxFQUFFLEVBQUcsR0FBRUQsNEVBQVUsQ0FBQ3VCLFlBQWEsR0FBRTNOLElBQUksRUFBRUosRUFBRyxFQUFFO0lBQzVDdUssU0FBUyxFQUNMSCxpREFBVSxDQUNORSxpRUFBRyxDQUFDWSxPQUFPLEVBQ1haLGlFQUFHLENBQUUsWUFBV0csU0FBUyxJQUFJRSxLQUFNLEVBQUMsQ0FBQyxFQUNyQ0osU0FDSixDQUNIO0lBQUFiLFFBQUEsR0FHR3RKLElBQUksRUFBRXdNLElBQUksRUFBRW9CLFdBQVcsSUFDcEJYLFVBQVUsaUJBRVRsRSxzREFBQTtNQUFTb0IsU0FBUyxFQUFFSCxpREFBVSxDQUFDRSxpRUFBRyxDQUFDMkQsT0FBTyxDQUFFO01BQUF2RSxRQUFBLGVBQ3hDUCxzREFBQTtRQUFLK0UsR0FBRyxFQUFHLEdBQUVDLDZCQUFhLEdBQUVkLFVBQVcsRUFBRTtRQUFDZSxHQUFHLEVBQUVUO01BQVEsQ0FBRTtJQUFDLENBQ3JELENBQ1osZUFFTHBFLHVEQUFBO01BQUtnQixTQUFTLEVBQUVILGlEQUFVLENBQUNFLGlFQUFHLENBQUNzQyxJQUFJLENBQUU7TUFBQWxELFFBQUEsR0FDaEN0SixJQUFJLEVBQUV3TSxJQUFJLEVBQUV5QixZQUFZLGlCQUNyQmxGLHNEQUFBO1FBQ0lvQixTQUFTLEVBQ0xILGlEQUFVLENBQ05FLGlFQUFHLENBQUNtQixLQUFLLEVBQ1RuQixpRUFBRyxDQUFFLFVBQVNHLFNBQVMsSUFBSUUsS0FBTSxFQUFDLENBQ3RDLENBQ0g7UUFBQWpCLFFBQUEsRUFFQXRKLElBQUksQ0FBQ3dNLElBQUksQ0FBQ3lCO01BQVksQ0FDdkIsQ0FDUCxFQUVHak8sSUFBSSxFQUFFd00sSUFBSSxFQUFFMEIsY0FBYyxpQkFDdEJuRixzREFBQTtRQUNJb0IsU0FBUyxFQUNMSCxpREFBVSxDQUNORSxpRUFBRyxDQUFDaUUsT0FBTyxFQUNYakUsaUVBQUcsQ0FBRSxZQUFXRyxTQUFTLElBQUlFLEtBQU0sRUFBQyxDQUN4QyxDQUNIO1FBQUFqQixRQUFBLEVBRUF0SixJQUFJLENBQUN3TSxJQUFJLENBQUMwQjtNQUFjLENBQzFCLENBQ047SUFBQSxDQUVKLENBQUMsRUFFRmxPLElBQUksRUFBRXVCLFFBQVEsRUFBRXZCLElBQUksaUJBRWhCK0ksc0RBQUEsQ0FBQzdKLGlFQUFlO01BQ1ppTCxTQUFTLEVBQUVELGlFQUFHLENBQUNrRSxHQUFJO01BQ25CcE8sSUFBSSxFQUFFQSxJQUFJLEVBQUV1QixRQUFRLEVBQUV2QixJQUFLO01BQzNCekIsSUFBSSxFQUFFWSxxRUFBbUIsQ0FBQ3NMO0lBQU8sQ0FDcEMsQ0FDSjtFQUFBLENBRUgsQ0FDVCxFQUFFLENBQUN1QyxRQUFRLEVBQUU3QyxTQUFTLEVBQUVuSyxJQUFJLEVBQUVxSyxTQUFTLEVBQUVFLEtBQUssQ0FBQyxDQUFDO0VBRWpELE9BQU92SyxJQUFJLEdBQUc4SyxPQUFPLEdBQUdGLFFBQVE7QUFDcEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIbUM7QUFDTTtBQUNPO0FBQ087QUFDZDtBQUNpQjtBQUFBO0FBQUE7QUFVcEQsTUFBTWxGLFNBQVMsR0FBSWhFLEtBQXFCLElBQUs7RUFDaEQsTUFBTTtJQUNGMUIsSUFBSTtJQUNKc0wsWUFBWTtJQUNabkIsU0FBUztJQUNUd0M7RUFDSixDQUFDLEdBQUdqTCxLQUFLO0VBRVQsTUFBTWtKLFFBQVEsR0FDVixJQUFJVyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLENBQUMsRUFBRUMsS0FBSyxrQkFDbEM1QyxzREFBQTtJQUVJb0IsU0FBUyxFQUFFSCxpREFBVSxDQUFDa0Msc0VBQUksQ0FBQyxhQUFhLENBQUMsRUFBRUEsc0VBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFFO0lBQUE1QyxRQUFBLGVBRXBFUCxzREFBQSxDQUFDK0QsbUVBQVksSUFBRTtFQUFDLEdBSFhuQixLQUlKLENBQ1IsQ0FDSjtFQUVELE1BQU1wQyxPQUFPLEdBQ1R2SixJQUFJLElBQ0RBLElBQUksRUFBRTRMLE1BQU0sR0FBRyxDQUFDLElBQ2hCNUwsSUFBSSxDQUFDeUwsR0FBRyxDQUFDLENBQUN0SSxJQUFzQixFQUFFd0ksS0FBYSxLQUFLO0lBQ25ELElBQUkyQyxTQUFTO0lBRWIsSUFBSW5MLElBQUksRUFBRXFKLElBQUksRUFBRW9CLFdBQVcsRUFBRTtNQUN6QlUsU0FBUyxHQUFHbkwsSUFBSSxFQUFFcUosSUFBSSxFQUFFK0IsZUFBZSxHQUNqQ0YsbUVBQVEsQ0FBQ0csSUFBSSxHQUNiSCxtRUFBUSxDQUFDSSxLQUFLO0lBQ3hCO0lBRUEsb0JBQ0kxRixzREFBQTtNQUVJb0IsU0FBUyxFQUFFSCxpREFBVSxDQUFDa0Msc0VBQUksQ0FBQyxhQUFhLENBQUMsRUFBRUEsc0VBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFFO01BQUE1QyxRQUFBLGVBRXBFUCxzREFBQSxDQUFDK0QsbUVBQVk7UUFDVDlNLElBQUksRUFBRW1ELElBQUs7UUFDWGtILFNBQVMsRUFBRWlFO01BQVUsQ0FDeEI7SUFBQyxHQU5HM0MsS0FPSixDQUFDO0VBRWQsQ0FBQyxDQUNKO0VBRUQsb0JBQ0l4Qyx1REFBQTtJQUFLZ0IsU0FBUyxFQUFFSCxpREFBVSxDQUFDRSw4REFBRyxDQUFDVyxLQUFLLENBQUU7SUFBQXZCLFFBQUEsZ0JBQ2xDUCxzREFBQTtNQUFLb0IsU0FBUyxFQUFFSCxpREFBVSxDQUFDa0Msc0VBQUksQ0FBQ0EsSUFBSSxFQUFFaEMsOERBQUcsQ0FBQ2dDLElBQUksRUFBRS9CLFNBQVMsQ0FBRTtNQUFBYixRQUFBLEVBQ3JEZ0MsWUFBWSxHQUFHVixRQUFRLEdBQUdyQjtJQUFPLENBQ2xDLENBQUMsRUFDTG9ELE9BQU8saUJBQUk1RCxzREFBQSxDQUFDMkQscURBQUcsSUFBRSxDQUFDO0VBQUEsQ0FDbEIsQ0FBQztBQUVkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRW1DO0FBQ2E7QUFDVDtBQUlYO0FBQ3lCO0FBRUU7QUFDUztBQUNyQjtBQUFBO0FBQUE7QUFTckMsTUFBTWdDLFdBQVcsR0FBSWhOLEtBQXVCLElBQUs7RUFDcEQsTUFBTTtJQUNGMUIsSUFBSTtJQUNKcUssU0FBUztJQUNURjtFQUNKLENBQUMsR0FBR3pJLEtBQUs7RUFFVCxNQUFNO0lBQUU2STtFQUFNLENBQUMsR0FBR04sdUVBQVEsQ0FBQyxDQUFDO0VBQzVCLE1BQU04QyxLQUFLLEdBQUdGLDZDQUFNLENBQUMsSUFBSSxDQUFDO0VBQzFCLE1BQU1HLFFBQVEsR0FBR2pGLDBFQUFTLENBQUNnRixLQUFLLEVBQUUsSUFBSSxDQUFDO0VBQ3ZDLE1BQU1FLFVBQVUsR0FBR2pOLElBQUksRUFBRXdNLElBQUksRUFBRVUsT0FBTyxFQUFFbE4sSUFBSSxFQUFFbU4sT0FBTyxFQUFFQyxLQUFLLEVBQUU1TyxHQUFHLElBQzFEd0IsSUFBSSxFQUFFd00sSUFBSSxFQUFFVSxPQUFPLEVBQUVsTixJQUFJLEVBQUVtTixPQUFPLEVBQUVFLE1BQU0sRUFBRTdPLEdBQUcsSUFDL0N3QixJQUFJLEVBQUV3TSxJQUFJLEVBQUVVLE9BQU8sRUFBRWxOLElBQUksRUFBRW1OLE9BQU8sRUFBRUcsS0FBSyxFQUFFOU8sR0FBRyxJQUFJLEVBQUU7RUFDM0QsTUFBTStPLE9BQU8sR0FBR3ZOLElBQUksRUFBRXdNLElBQUksRUFBRVUsT0FBTyxFQUFFbE4sSUFBSSxFQUFFd04sZUFBZSxJQUFJLEdBQUc7RUFFakUsTUFBTTVDLFFBQVEsR0FBR29CLDhDQUFPLENBQUMsbUJBQ3JCakQsc0RBQUE7SUFDSTBFLEdBQUcsRUFBRVYsS0FBTTtJQUNYVyxLQUFLLEVBQUU7TUFDSHJGLEtBQUssRUFBRSxNQUFNO01BQ2JILE1BQU0sRUFBRyxHQUFFOEUsUUFBUztJQUN4QixDQUFFO0lBQ0Y3QyxTQUFTLEVBQ0xILGlEQUFVLENBQ05FLGdFQUFHLENBQUNZLE9BQU8sRUFDWFosZ0VBQUcsQ0FBRSxZQUFXRyxTQUFTLElBQUlFLEtBQU0sRUFBQyxDQUFDLEVBQ3JDTCxnRUFBRyxDQUFDLG1CQUFtQixDQUFDLEVBQ3hCQyxTQUNKO0VBQ0gsQ0FDSixDQUNKLEVBQUUsQ0FBQzZDLFFBQVEsRUFBRTdDLFNBQVMsRUFBRUUsU0FBUyxFQUFFRSxLQUFLLENBQUMsQ0FBQztFQUUzQyxNQUFNTyxPQUFPLEdBQUdrQiw4Q0FBTyxDQUFDLG1CQUNwQjdDLHVEQUFBLENBQUM4QyxrREFBSTtJQUNEd0IsR0FBRyxFQUFFVixLQUFNO0lBQ1hXLEtBQUssRUFBRTtNQUNIckYsS0FBSyxFQUFFLE1BQU07TUFDYkgsTUFBTSxFQUFHLEdBQUU4RSxRQUFTO0lBQ3hCLENBQUU7SUFDRlgsRUFBRSxFQUFHLEdBQUVELDRFQUFVLENBQUN1QyxXQUFZLEdBQUUzTyxJQUFJLEVBQUVKLEVBQUcsRUFBRTtJQUMzQ3VLLFNBQVMsRUFDTEgsaURBQVUsQ0FDTkUsZ0VBQUcsQ0FBQ1ksT0FBTyxFQUNYWixnRUFBRyxDQUFFLFlBQVdHLFNBQVMsSUFBSUUsS0FBTSxFQUFDLENBQUMsRUFDckNKLFNBQ0osQ0FDSDtJQUFBYixRQUFBLEdBR0d0SixJQUFJLEVBQUV3TSxJQUFJLEVBQUVvQixXQUFXLElBQ3BCWCxVQUFVLGlCQUVUbEUsc0RBQUE7TUFBU29CLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ0UsZ0VBQUcsQ0FBQzJELE9BQU8sQ0FBRTtNQUFBdkUsUUFBQSxlQUN4Q1Asc0RBQUE7UUFBSytFLEdBQUcsRUFBRyxHQUFFQyw2QkFBYSxHQUFFZCxVQUFXLEVBQUU7UUFBQ2UsR0FBRyxFQUFFVDtNQUFRLENBQUU7SUFBQyxDQUNyRCxDQUNaLGVBRUxwRSx1REFBQTtNQUFLZ0IsU0FBUyxFQUFFSCxpREFBVSxDQUFDRSxnRUFBRyxDQUFDc0MsSUFBSSxDQUFFO01BQUFsRCxRQUFBLEdBQ2hDdEosSUFBSSxFQUFFd00sSUFBSSxFQUFFeUIsWUFBWSxpQkFDckJsRixzREFBQTtRQUNJb0IsU0FBUyxFQUNMSCxpREFBVSxDQUNORSxnRUFBRyxDQUFDbUIsS0FBSyxFQUNUbkIsZ0VBQUcsQ0FBRSxVQUFTRyxTQUFTLElBQUlFLEtBQU0sRUFBQyxDQUN0QyxDQUNIO1FBQUFqQixRQUFBLEVBRUF0SixJQUFJLENBQUN3TSxJQUFJLENBQUN5QjtNQUFZLENBQ3ZCLENBQ1AsRUFFR2pPLElBQUksRUFBRXdNLElBQUksRUFBRTBCLGNBQWMsaUJBQ3RCbkYsc0RBQUE7UUFDSW9CLFNBQVMsRUFDTEgsaURBQVUsQ0FDTkUsZ0VBQUcsQ0FBQ2lFLE9BQU8sRUFDWGpFLGdFQUFHLENBQUUsWUFBV0csU0FBUyxJQUFJRSxLQUFNLEVBQUMsQ0FDeEMsQ0FDSDtRQUFBakIsUUFBQSxFQUVBdEosSUFBSSxDQUFDd00sSUFBSSxDQUFDMEI7TUFBYyxDQUMxQixDQUNOO0lBQUEsQ0FFSixDQUFDLEVBRUZsTyxJQUFJLEVBQUV1QixRQUFRLEVBQUV2QixJQUFJLGlCQUVoQitJLHNEQUFBLENBQUM3SixpRUFBZTtNQUNaaUwsU0FBUyxFQUFFRCxnRUFBRyxDQUFDa0UsR0FBSTtNQUNuQnBPLElBQUksRUFBRUEsSUFBSSxFQUFFdUIsUUFBUSxFQUFFdkIsSUFBSztNQUMzQnFLLFNBQVMsRUFBRUEsU0FBUyxJQUFJRSxLQUFNO01BQzlCaE0sSUFBSSxFQUFFWSxxRUFBbUIsQ0FBQ3NMO0lBQU8sQ0FDcEMsQ0FDSjtFQUFBLENBRUgsQ0FDVCxFQUFFLENBQUN1QyxRQUFRLEVBQUU3QyxTQUFTLEVBQUVuSyxJQUFJLEVBQUVxSyxTQUFTLEVBQUVFLEtBQUssQ0FBQyxDQUFDO0VBRWpELE9BQU92SyxJQUFJLEdBQUc4SyxPQUFPLEdBQUdGLFFBQVE7QUFDcEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pIbUM7QUFDTTtBQUNPO0FBQ087QUFDZDtBQUNlO0FBQUE7QUFBQTtBQVVsRCxNQUFNN0QsU0FBUyxHQUFJckYsS0FBcUIsSUFBSztFQUNoRCxNQUFNO0lBQ0YxQixJQUFJO0lBQ0pzTCxZQUFZO0lBQ1puQixTQUFTO0lBQ1R3QztFQUNKLENBQUMsR0FBR2pMLEtBQUs7RUFFVCxNQUFNa0osUUFBUSxHQUNWLElBQUlXLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxLQUFLLGtCQUNsQzVDLHNEQUFBO0lBRUlvQixTQUFTLEVBQ0xILGlEQUFVLENBQ05rQyxzRUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUNuQkEsc0VBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUN2QkEsc0VBQUksQ0FBQyxtQkFBbUIsQ0FDNUIsQ0FDSDtJQUFBNUMsUUFBQSxlQUVEUCxzREFBQSxDQUFDMkYsaUVBQVcsSUFBRTtFQUFDLEdBVFYvQyxLQVVKLENBQ1IsQ0FDSjtFQUVELE1BQU1wQyxPQUFPLEdBQ1R2SixJQUFJLElBQ0RBLElBQUksRUFBRTRMLE1BQU0sR0FBRyxDQUFDLElBQ2hCNUwsSUFBSSxDQUFDeUwsR0FBRyxDQUFDLENBQUN0SSxJQUFxQixFQUFFd0ksS0FBYSxLQUFLO0lBQ2xELElBQUkyQyxTQUFTO0lBRWIsSUFBSW5MLElBQUksRUFBRXFKLElBQUksRUFBRW9CLFdBQVcsRUFBRTtNQUN6QlUsU0FBUyxHQUFHbkwsSUFBSSxFQUFFcUosSUFBSSxFQUFFK0IsZUFBZSxHQUNqQ0YsbUVBQVEsQ0FBQ0csSUFBSSxHQUNiSCxtRUFBUSxDQUFDSSxLQUFLO0lBQ3hCO0lBRUEsb0JBQ0kxRixzREFBQTtNQUVJb0IsU0FBUyxFQUNMSCxpREFBVSxDQUNOa0Msc0VBQUksQ0FBQyxhQUFhLENBQUMsRUFDbkJBLHNFQUFJLENBQUMsaUJBQWlCLENBQUMsRUFDdkJBLHNFQUFJLENBQUMsbUJBQW1CLENBQzVCLENBQ0g7TUFBQTVDLFFBQUEsZUFFRFAsc0RBQUEsQ0FBQzJGLGlFQUFXO1FBQ1IxTyxJQUFJLEVBQUVtRCxJQUFLO1FBQ1hrSCxTQUFTLEVBQUVpRTtNQUFVLENBQ3hCO0lBQUMsR0FaRzNDLEtBYUosQ0FBQztFQUVkLENBQUMsQ0FDSjtFQUVELG9CQUNJeEMsdURBQUE7SUFBS2dCLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ0UsOERBQUcsQ0FBQ1csS0FBSyxDQUFFO0lBQUF2QixRQUFBLGdCQUNsQ1Asc0RBQUE7TUFBS29CLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ2tDLHNFQUFJLENBQUNBLElBQUksRUFBRWhDLDhEQUFHLENBQUNnQyxJQUFJLEVBQUUvQixTQUFTLENBQUU7TUFBQWIsUUFBQSxFQUNyRGdDLFlBQVksR0FBR1YsUUFBUSxHQUFHckI7SUFBTyxDQUNsQyxDQUFDLEVBQ0xvRCxPQUFPLGlCQUFJNUQsc0RBQUEsQ0FBQzJELHFEQUFHLElBQUUsQ0FBQztFQUFBLENBQ2xCLENBQUM7QUFFZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGbUM7QUFDVztBQUVTO0FBQ3BCO0FBQUE7QUFPN0IsTUFBTUEsR0FBRyxHQUFJaEwsS0FBZSxJQUFLO0VBQ3BDLE1BQU07SUFDRjJJLFNBQVM7SUFDVEY7RUFDSixDQUFDLEdBQUd6SSxLQUFLO0VBQ1QsTUFBTTtJQUFFMEg7RUFBRSxDQUFDLEdBQUdQLDZEQUFjLENBQUMsQ0FBQztFQUM5QixNQUFNO0lBQUUwQjtFQUFNLENBQUMsR0FBR04sdUVBQVEsQ0FBQyxDQUFDO0VBRTVCLG9CQUNJbEIsc0RBQUE7SUFBR29CLFNBQVMsRUFBRUgsaURBQVUsQ0FBQ0Usd0RBQUcsQ0FBQ1csS0FBSyxFQUFFWCx3REFBRyxDQUFFLFdBQVVHLFNBQVMsSUFBSUUsS0FBTSxFQUFDLENBQUMsRUFBRUosU0FBUyxDQUFFO0lBQUFiLFFBQUEsRUFDL0VGLENBQUMsQ0FBQyxpQkFBaUI7RUFBQyxDQUN2QixDQUFDO0FBRVosQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbUM7QUFDMEI7QUFDekI7QUFBQTtBQU85QixNQUFNeUYsSUFBSSxHQUFJbk4sS0FBZ0IsSUFBSztFQUN0QyxNQUFNO0lBQ0Y0SCxRQUFRO0lBQ1JhO0VBQ0osQ0FBQyxHQUFHekksS0FBSztFQUVULE1BQU1vTixVQUFVLEdBQUdGLDhFQUFhLENBQUMsQ0FBQztFQUVsQyxvQkFDSTdGLHNEQUFBO0lBQ0lvQixTQUFTLEVBQ0xILGlEQUFVLENBQ05FLHlEQUFHLENBQUNXLEtBQUssRUFDVFgseURBQUcsQ0FBRSxVQUFTNEUsVUFBVyxFQUFDLENBQUMsRUFDM0IzRSxTQUNKLENBQ0g7SUFBQWIsUUFBQSxFQUVDQTtFQUFRLENBQ1IsQ0FBQztBQUVmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CRDtBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUlBQXlJLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxpQ0FBaUMsc0JBQXNCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsOEJBQThCLGdDQUFnQyxzQkFBc0IsNEJBQTRCLFNBQVMseUJBQXlCLHdCQUF3QixzQ0FBc0MscUdBQXFHLDZCQUE2QixhQUFhLGlJQUFpSSw2QkFBNkIsYUFBYSxxQ0FBcUMsNkJBQTZCLGFBQWEscUNBQXFDLDZCQUE2QixhQUFhLFNBQVMsNEJBQTRCLHVDQUF1Qyx3Q0FBd0Msc0RBQXNELGFBQWEsaUNBQWlDLDRDQUE0QyxzREFBc0QsYUFBYSxTQUFTLDJCQUEyQix3Q0FBd0Msd0NBQXdDLHVEQUF1RCxhQUFhLGlDQUFpQyxzQ0FBc0MsdURBQXVELGFBQWEsU0FBUyxLQUFLLGdCQUFnQixzQkFBc0IsMkJBQTJCLEtBQUssa0NBQWtDLGdCQUFnQiw0QkFBNEIsNEJBQTRCLDZCQUE2Qiw2QkFBNkIsNkdBQTZHLGdDQUFnQyxpQkFBaUIsaUpBQWlKLGdDQUFnQyxpQkFBaUIseUNBQXlDLGlDQUFpQyxpQkFBaUIseUNBQXlDLGlDQUFpQyxpQkFBaUIsYUFBYSxTQUFTLEtBQUssa0NBQWtDLGdCQUFnQiw0QkFBNEIsNkJBQTZCLDhCQUE4Qiw2QkFBNkIsaUpBQWlKLGdDQUFnQyxpQkFBaUIsaUhBQWlILGdDQUFnQyxpQkFBaUIseUVBQXlFLGdDQUFnQyxpQkFBaUIsYUFBYSxTQUFTLEtBQUssdUJBQXVCO0FBQzcxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R3ZDO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK0hBQStILFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLGlDQUFpQyx3QkFBd0IseUJBQXlCLEtBQUssa0NBQWtDLGdCQUFnQiw0QkFBNEIsU0FBUyxLQUFLLGtDQUFrQyxnQkFBZ0IsNEJBQTRCLFNBQVMsS0FBSyx1QkFBdUI7QUFDL2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCdkM7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1JQUFtSSxVQUFVLFVBQVUsVUFBVSxpQ0FBaUMsaUJBQWlCLHNCQUFzQix3QkFBd0IsS0FBSyx1QkFBdUI7QUFDclM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R2QztBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUlBQW1JLFVBQVUsVUFBVSxVQUFVLCtCQUErQixpQkFBaUIsc0JBQXNCLHdCQUF3QixLQUFLLHVCQUF1QjtBQUNuUztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHZDO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywySEFBMkgsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxpQ0FBaUMsc0JBQXNCLHVCQUF1Qix3QkFBd0IsS0FBSyxrQ0FBa0MsZ0JBQWdCLDBCQUEwQixTQUFTLEtBQUssa0NBQWtDLGdCQUFnQiwwQkFBMEIsU0FBUyxLQUFLLHVCQUF1QjtBQUNwaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCdkM7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwSEFBMEgsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLGlDQUFpQyx1QkFBdUIseUJBQXlCLDBCQUEwQiwyQkFBMkIsMkJBQTJCLDRCQUE0Qiw4QkFBOEIsaUNBQWlDLHlCQUF5QixtQ0FBbUMsU0FBUyxxQ0FBcUMseUJBQXlCLFNBQVMsNEJBQTRCLHVDQUF1QyxrREFBa0QsU0FBUywyQkFBMkIsd0NBQXdDLGlEQUFpRCxTQUFTLEtBQUssZUFBZSxrQkFBa0IsS0FBSyxnQkFBZ0Isd0JBQXdCLEtBQUssZUFBZSxrQkFBa0Isc0JBQXNCLHVDQUF1QyxLQUFLLGVBQWUsb0JBQW9CLHFCQUFxQix1QkFBdUIsdUJBQXVCLDRCQUE0QixzQ0FBc0MsU0FBUywyQkFBMkIsdUNBQXVDLFNBQVMsS0FBSyxzQkFBc0Isc0JBQXNCLDJCQUEyQixLQUFLLGtDQUFrQyxnQkFBZ0IsMEJBQTBCLDhCQUE4QixTQUFTLG9CQUFvQiw0QkFBNEIsU0FBUyxtQkFBbUIsd0JBQXdCLHlCQUF5QixTQUFTLEtBQUssa0NBQWtDLGdCQUFnQiwwQkFBMEIsMEJBQTBCLGdDQUFnQyxTQUFTLG1CQUFtQixzQkFBc0IsU0FBUyxvQkFBb0IsNEJBQTRCLFNBQVMsbUJBQW1CLHNCQUFzQixTQUFTLG1CQUFtQix3QkFBd0IseUJBQXlCLHVDQUF1Qyw0QkFBNEIsOEJBQThCLG1DQUFtQyxhQUFhLFNBQVMsMEJBQTBCLDBCQUEwQixnQ0FBZ0Msc0NBQXNDLFNBQVMsS0FBSywyQkFBMkI7QUFDdjRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEh2QztBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9IQUFvSCxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssaUNBQWlDLGtCQUFrQixzQkFBc0IsK0JBQStCLEtBQUssZUFBZSxrQkFBa0Isb0JBQW9CLHNCQUFzQiwrQkFBK0IsS0FBSyxlQUFlLG9CQUFvQixLQUFLLGtDQUFrQyxTQUFTLGtDQUFrQyxnQkFBZ0Isc0JBQXNCLFNBQVMsbUJBQW1CLHFCQUFxQixTQUFTLEtBQUssdUJBQXVCO0FBQ3B1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDdkM7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK0hBQStILFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssbUNBQW1DLHNCQUFzQixzQkFBc0IsdUJBQXVCLHlCQUF5QiwyQkFBMkIsNEJBQTRCLDhCQUE4QiwrQkFBK0IsdUNBQXVDLHVDQUF1Qyw0QkFBNEIsa0RBQWtELFNBQVMsMkJBQTJCLGlEQUFpRCxTQUFTLHlCQUF5QixzQ0FBc0MsU0FBUyxLQUFLLGtCQUFrQixlQUFlLGdCQUFnQixpQkFBaUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsaUJBQWlCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLDhCQUE4QixvQ0FBb0MsU0FBUyxLQUFLLGVBQWUsbUJBQW1CLDJCQUEyQixLQUFLLGdCQUFnQix3QkFBd0IseUJBQXlCLDJCQUEyQixnQ0FBZ0MsNEJBQTRCLHVDQUF1QyxTQUFTLDJCQUEyQix1Q0FBdUMsU0FBUyxLQUFLLGtCQUFrQix3QkFBd0IsNEJBQTRCLHlDQUF5QyxTQUFTLDJCQUEyQiwwQ0FBMEMsU0FBUyxLQUFLLGNBQWMsMkJBQTJCLDZCQUE2QixLQUFLLGtDQUFrQyxrQkFBa0IsMkNBQTJDLFNBQVMsb0JBQW9CLDRCQUE0QixTQUFTLHNCQUFzQiw0QkFBNEIsU0FBUyxLQUFLLGtDQUFrQyxrQkFBa0IsMkNBQTJDLFNBQVMsb0JBQW9CLDRCQUE0QixTQUFTLHNCQUFzQiw0QkFBNEIsU0FBUyxLQUFLLHVCQUF1QjtBQUN4dEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIdkM7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMEhBQTBILFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxpQ0FBaUMsa0JBQWtCLHNCQUFzQiwrQkFBK0IsS0FBSyxrQ0FBa0MsU0FBUyxrQ0FBa0MsZ0JBQWdCLHNCQUFzQixTQUFTLEtBQUssdUJBQXVCO0FBQ3JjO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnZDO0FBQ3NIO0FBQ2pCO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2SEFBNkgsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssbUNBQW1DLHNCQUFzQixzQkFBc0IsdUJBQXVCLHlCQUF5QiwyQkFBMkIsNEJBQTRCLDhCQUE4QiwrQkFBK0IsdUNBQXVDLHVDQUF1Qyw2Q0FBNkMsNEJBQTRCLGtEQUFrRCxTQUFTLDJCQUEyQixpREFBaUQsU0FBUyx5QkFBeUIsc0NBQXNDLFNBQVMsS0FBSyxrQkFBa0IsZUFBZSxnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsMkJBQTJCLGlCQUFpQix3QkFBd0IseUJBQXlCLDJCQUEyQiw4QkFBOEIsb0NBQW9DLFNBQVMsS0FBSyxlQUFlLG1CQUFtQiwyQkFBMkIsS0FBSyxnQkFBZ0Isd0JBQXdCLHlCQUF5QiwyQkFBMkIsNEJBQTRCLHVDQUF1QyxTQUFTLDJCQUEyQix1Q0FBdUMsU0FBUyxLQUFLLGtCQUFrQix3QkFBd0IsNEJBQTRCLHlDQUF5QyxTQUFTLDJCQUEyQix5Q0FBeUMsU0FBUyxLQUFLLGNBQWMsbUJBQW1CLDJCQUEyQiwyQkFBMkIsNkJBQTZCLEtBQUssa0NBQWtDLGtCQUFrQiwwQkFBMEIsMkNBQTJDLFNBQVMsb0JBQW9CLDRCQUE0QixTQUFTLHNCQUFzQiw0QkFBNEIsU0FBUyxLQUFLLGtDQUFrQyxrQkFBa0IsMEJBQTBCLGdDQUFnQywyQ0FBMkMsU0FBUyxvQkFBb0IsNEJBQTRCLFNBQVMsc0JBQXNCLDRCQUE0QixTQUFTLEtBQUssdUJBQXVCO0FBQ3g1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkh2QztBQUNzSDtBQUNqQjtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx5SEFBeUgsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLGlDQUFpQyxrQkFBa0Isc0JBQXNCLCtCQUErQixLQUFLLGtDQUFrQyxTQUFTLGtDQUFrQyxnQkFBZ0Isc0JBQXNCLFNBQVMsS0FBSyx1QkFBdUI7QUFDcGM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCdkM7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNHQUFzRyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLGlDQUFpQyxvQkFBb0Isd0JBQXdCLDJCQUEyQiw0QkFBNEIseUNBQXlDLFNBQVMsMkJBQTJCLDBDQUEwQyxTQUFTLEtBQUssa0NBQWtDLGdCQUFnQiw0QkFBNEIsU0FBUyxLQUFLLGtDQUFrQyxnQkFBZ0IsNEJBQTRCLFNBQVMsS0FBSyx1QkFBdUI7QUFDNXNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakN2QztBQUNtSDtBQUNqQjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdHQUF3RyxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxpQ0FBaUMscUJBQXFCLDhCQUE4QixLQUFLLGtDQUFrQyxnQkFBZ0Isa0NBQWtDLFNBQVMsS0FBSyxrQ0FBa0MsZ0JBQWdCLGlDQUFpQyx5QkFBeUIsbUNBQW1DLGFBQWEsU0FBUyxLQUFLLHVCQUF1QjtBQUNybEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCdkMsTUFBMkc7QUFDM0csTUFBaUc7QUFDakcsTUFBd0c7QUFDeEcsTUFBMkg7QUFDM0gsTUFBb0g7QUFDcEgsTUFBb0g7QUFDcEgsTUFBaU47QUFDak47QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxS0FBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8scUtBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFLQUFPO0FBQ2hDLG9DQUFvQywwSkFBVyxHQUFHLHFLQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDZWQUFvSztBQUMxSyxNQUFNO0FBQUE7QUFDTixzREFBc0QsMEpBQVcsR0FBRyxxS0FBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsMEpBQVcsR0FBRyxxS0FBTzs7QUFFL0QscUJBQXFCLHFLQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHbUw7QUFDbkwsT0FBTyxpRUFBZSxxS0FBTyxJQUFJLHFLQUFPLFVBQVUscUtBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUU3RSxNQUEyRztBQUMzRyxNQUFpRztBQUNqRyxNQUF3RztBQUN4RyxNQUEySDtBQUMzSCxNQUFvSDtBQUNwSCxNQUFvSDtBQUNwSCxNQUE0TTtBQUM1TTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGdLQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTyxnS0FBTyxXQUFXLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0tBQU87QUFDaEMsb0NBQW9DLHFKQUFXLEdBQUcsZ0tBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sOFVBQStKO0FBQ3JLLE1BQU07QUFBQTtBQUNOLHNEQUFzRCxxSkFBVyxHQUFHLGdLQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyxxSkFBVyxHQUFHLGdLQUFPOztBQUUvRCxxQkFBcUIsZ0tBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUc4SztBQUM5SyxPQUFPLGlFQUFlLGdLQUFPLElBQUksZ0tBQU8sVUFBVSxnS0FBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTdFLE1BQTJHO0FBQzNHLE1BQWlHO0FBQ2pHLE1BQXdHO0FBQ3hHLE1BQTJIO0FBQzNILE1BQW9IO0FBQ3BILE1BQW9IO0FBQ3BILE1BQThNO0FBQzlNO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsa0tBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLGtLQUFPLFdBQVcsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrS0FBTztBQUNoQyxvQ0FBb0MsdUpBQVcsR0FBRyxrS0FBTzs7QUFFekQsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSxvVkFBaUs7QUFDdkssTUFBTTtBQUFBO0FBQ04sc0RBQXNELHVKQUFXLEdBQUcsa0tBQU87QUFDM0UsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLHVKQUFXLEdBQUcsa0tBQU87O0FBRS9ELHFCQUFxQixrS0FBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBR2dMO0FBQ2hMLE9BQU8saUVBQWUsa0tBQU8sSUFBSSxrS0FBTyxVQUFVLGtLQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFN0UsTUFBMkc7QUFDM0csTUFBaUc7QUFDakcsTUFBd0c7QUFDeEcsTUFBMkg7QUFDM0gsTUFBb0g7QUFDcEgsTUFBb0g7QUFDcEgsTUFBOE07QUFDOU07QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxrS0FBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sa0tBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtLQUFPO0FBQ2hDLG9DQUFvQyx1SkFBVyxHQUFHLGtLQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLG9WQUFpSztBQUN2SyxNQUFNO0FBQUE7QUFDTixzREFBc0QsdUpBQVcsR0FBRyxrS0FBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsdUpBQVcsR0FBRyxrS0FBTzs7QUFFL0QscUJBQXFCLGtLQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHZ0w7QUFDaEwsT0FBTyxpRUFBZSxrS0FBTyxJQUFJLGtLQUFPLFVBQVUsa0tBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUU3RSxNQUEyRztBQUMzRyxNQUFpRztBQUNqRyxNQUF3RztBQUN4RyxNQUEySDtBQUMzSCxNQUFvSDtBQUNwSCxNQUFvSDtBQUNwSCxNQUEwTTtBQUMxTTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhKQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTyw4SkFBTyxXQUFXLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOEpBQU87QUFDaEMsb0NBQW9DLG1KQUFXLEdBQUcsOEpBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sd1VBQTZKO0FBQ25LLE1BQU07QUFBQTtBQUNOLHNEQUFzRCxtSkFBVyxHQUFHLDhKQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyxtSkFBVyxHQUFHLDhKQUFPOztBQUUvRCxxQkFBcUIsOEpBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUc0SztBQUM1SyxPQUFPLGlFQUFlLDhKQUFPLElBQUksOEpBQU8sVUFBVSw4SkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTdFLE1BQTJHO0FBQzNHLE1BQWlHO0FBQ2pHLE1BQXdHO0FBQ3hHLE1BQTJIO0FBQzNILE1BQW9IO0FBQ3BILE1BQW9IO0FBQ3BILE1BQTRNO0FBQzVNO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsZ0tBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLGdLQUFPLFdBQVcsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnS0FBTztBQUNoQyxvQ0FBb0MscUpBQVcsR0FBRyxnS0FBTzs7QUFFekQsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSx5VUFBK0o7QUFDckssTUFBTTtBQUFBO0FBQ04sc0RBQXNELHFKQUFXLEdBQUcsZ0tBQU87QUFDM0UsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLHFKQUFXLEdBQUcsZ0tBQU87O0FBRS9ELHFCQUFxQixnS0FBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBRzhLO0FBQzlLLE9BQU8saUVBQWUsZ0tBQU8sSUFBSSxnS0FBTyxVQUFVLGdLQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFN0UsTUFBMkc7QUFDM0csTUFBaUc7QUFDakcsTUFBd0c7QUFDeEcsTUFBMkg7QUFDM0gsTUFBb0g7QUFDcEgsTUFBb0g7QUFDcEgsTUFBeU07QUFDek07QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2SkFBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sNkpBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZKQUFPO0FBQ2hDLG9DQUFvQyxrSkFBVyxHQUFHLDZKQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLGdVQUE0SjtBQUNsSyxNQUFNO0FBQUE7QUFDTixzREFBc0Qsa0pBQVcsR0FBRyw2SkFBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsa0pBQVcsR0FBRyw2SkFBTzs7QUFFL0QscUJBQXFCLDZKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHMks7QUFDM0ssT0FBTyxpRUFBZSw2SkFBTyxJQUFJLDZKQUFPLFVBQVUsNkpBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUU3RSxNQUEyRztBQUMzRyxNQUFpRztBQUNqRyxNQUF3RztBQUN4RyxNQUEySDtBQUMzSCxNQUFvSDtBQUNwSCxNQUFvSDtBQUNwSCxNQUE4TTtBQUM5TTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGtLQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTyxrS0FBTyxXQUFXLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0tBQU87QUFDaEMsb0NBQW9DLHVKQUFXLEdBQUcsa0tBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sZ1ZBQWlLO0FBQ3ZLLE1BQU07QUFBQTtBQUNOLHNEQUFzRCx1SkFBVyxHQUFHLGtLQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyx1SkFBVyxHQUFHLGtLQUFPOztBQUUvRCxxQkFBcUIsa0tBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUdnTDtBQUNoTCxPQUFPLGlFQUFlLGtLQUFPLElBQUksa0tBQU8sVUFBVSxrS0FBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTdFLE1BQTJHO0FBQzNHLE1BQWlHO0FBQ2pHLE1BQXdHO0FBQ3hHLE1BQTJIO0FBQzNILE1BQW9IO0FBQ3BILE1BQW9IO0FBQ3BILE1BQTJNO0FBQzNNO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsK0pBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLCtKQUFPLFdBQVcsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrSkFBTztBQUNoQyxvQ0FBb0Msb0pBQVcsR0FBRywrSkFBTzs7QUFFekQsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSx3VUFBOEo7QUFDcEssTUFBTTtBQUFBO0FBQ04sc0RBQXNELG9KQUFXLEdBQUcsK0pBQU87QUFDM0UsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLG9KQUFXLEdBQUcsK0pBQU87O0FBRS9ELHFCQUFxQiwrSkFBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBRzZLO0FBQzdLLE9BQU8saUVBQWUsK0pBQU8sSUFBSSwrSkFBTyxVQUFVLCtKQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFN0UsTUFBMkc7QUFDM0csTUFBaUc7QUFDakcsTUFBd0c7QUFDeEcsTUFBMkg7QUFDM0gsTUFBb0g7QUFDcEgsTUFBb0g7QUFDcEgsTUFBNk07QUFDN007QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxpS0FBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8saUtBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlLQUFPO0FBQ2hDLG9DQUFvQyxzSkFBVyxHQUFHLGlLQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDZVQUFnSztBQUN0SyxNQUFNO0FBQUE7QUFDTixzREFBc0Qsc0pBQVcsR0FBRyxpS0FBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsc0pBQVcsR0FBRyxpS0FBTzs7QUFFL0QscUJBQXFCLGlLQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHK0s7QUFDL0ssT0FBTyxpRUFBZSxpS0FBTyxJQUFJLGlLQUFPLFVBQVUsaUtBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUU3RSxNQUEyRztBQUMzRyxNQUFpRztBQUNqRyxNQUF3RztBQUN4RyxNQUEySDtBQUMzSCxNQUFvSDtBQUNwSCxNQUFvSDtBQUNwSCxNQUEyTTtBQUMzTTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLCtKQUFPOzs7QUFHeEIsSUFBSSxJQUFVO0FBQ2QsT0FBTywrSkFBTyxXQUFXLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0pBQU87QUFDaEMsb0NBQW9DLG9KQUFXLEdBQUcsK0pBQU87O0FBRXpELElBQUksaUJBQWlCO0FBQ3JCLE1BQU0sdVVBQThKO0FBQ3BLLE1BQU07QUFBQTtBQUNOLHNEQUFzRCxvSkFBVyxHQUFHLCtKQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyxvSkFBVyxHQUFHLCtKQUFPOztBQUUvRCxxQkFBcUIsK0pBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUc2SztBQUM3SyxPQUFPLGlFQUFlLCtKQUFPLElBQUksK0pBQU8sVUFBVSwrSkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTdFLE1BQXdHO0FBQ3hHLE1BQThGO0FBQzlGLE1BQXFHO0FBQ3JHLE1BQXdIO0FBQ3hILE1BQWlIO0FBQ2pILE1BQWlIO0FBQ2pILE1BQStMO0FBQy9MO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMseUpBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLHlKQUFPLFdBQVcsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5SkFBTztBQUNoQyxvQ0FBb0MsOElBQVcsR0FBRyx5SkFBTzs7QUFFekQsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSx3U0FBa0o7QUFDeEosTUFBTTtBQUFBO0FBQ04sc0RBQXNELDhJQUFXLEdBQUcseUpBQU87QUFDM0UsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUEsMENBQTBDLDhJQUFXLEdBQUcseUpBQU87O0FBRS9ELHFCQUFxQix5SkFBTztBQUM1QixPQUFPO0FBQ1A7QUFDQTs7QUFFQSxFQUFFLFVBQVU7QUFDWjtBQUNBLEdBQUc7QUFDSDs7O0FBR2lLO0FBQ2pLLE9BQU8saUVBQWUseUpBQU8sSUFBSSx5SkFBTyxVQUFVLHlKQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVFN0UsTUFBd0c7QUFDeEcsTUFBOEY7QUFDOUYsTUFBcUc7QUFDckcsTUFBd0g7QUFDeEgsTUFBaUg7QUFDakgsTUFBaUg7QUFDakgsTUFBZ007QUFDaE07QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywwSkFBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sMEpBQU8sV0FBVyxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBKQUFPO0FBQ2hDLG9DQUFvQywrSUFBVyxHQUFHLDBKQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDJTQUFtSjtBQUN6SixNQUFNO0FBQUE7QUFDTixzREFBc0QsK0lBQVcsR0FBRywwSkFBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsK0lBQVcsR0FBRywwSkFBTzs7QUFFL0QscUJBQXFCLDBKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHa0s7QUFDbEssT0FBTyxpRUFBZSwwSkFBTyxJQUFJLDBKQUFPLFVBQVUsMEpBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC9hc3NldHMvaWNvbnMvYXJyb3ctbmV4dC5zdmciLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9NZXRhUGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L2FwaS9jYXRlZ29yeUFwaS50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L2luZGV4LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvbW9kZWwvdHlwZXMvQXJ0aWNsZUNhdGVnb3J5LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvbW9kZWwvdHlwZXMvQ2F0ZWdvcnlNb2RlLnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L2FwaS9kZXZBcGkudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvbW9kZWwvc2VsZWN0b3JzL2Rldkxpc3QudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvbW9kZWwvc2VydmljZXMvZmV0Y2hOZXh0RGV2TGlzdC9mZXRjaE5leHREZXZMaXN0LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L21vZGVsL3NlcnZpY2VzL2luaXREZXZMaXN0L2luaXREZXYudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvbW9kZWwvc2xpY2VzL2Rldkxpc3RTbGljZS50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL2FwaS9waG90b0FwaS50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL2luZGV4LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUGhvdG8vbW9kZWwvc2VsZWN0b3JzL3Bob3RvTGlzdC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL21vZGVsL3NlcnZpY2VzL2ZldGNoTmV4dFBob3RvTGlzdC9mZXRjaE5leHRQaG90b0xpc3QudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9QaG90by9tb2RlbC9zZXJ2aWNlcy9pbml0UGhvdG9MaXN0L2luaXRQaG90b0xpc3QudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9QaG90by9tb2RlbC9zbGljZXMvcGhvdG9MaXN0U2xpY2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9Qb3N0L2FwaS9wb3N0QXBpLnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUG9zdC9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bvc3QvbW9kZWwvc2VsZWN0b3JzL3Bvc3RMaXN0LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUG9zdC9tb2RlbC9zZXJ2aWNlcy9mZXRjaE5leHRQb3N0TGlzdC9mZXRjaE5leHRQb3N0TGlzdC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bvc3QvbW9kZWwvc2VydmljZXMvaW5pdFBvc3RMaXN0L2luaXRQb3N0TGlzdC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bvc3QvbW9kZWwvc2xpY2VzL3Bvc3RMaXN0U2xpY2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvbGlicy9ob29rcy91c2VIZWlnaHQudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdHlwZXMvUmVxdWVzdERhdGEudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9NZXRhUGFnZS91aS9NZXRhUGFnZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9BcnRpY2xlQ2F0ZWdvcnkvQXJ0aWNsZUNhdGVnb3J5LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L3VpL0FydGljbGVUYWcvQXJ0aWNsZVRhZy50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9HcmlkQ2F0ZWdvcnkvR3JpZENhdGVnb3J5LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L3VpL0xpc3RDYXRlZ29yeS9MaXN0Q2F0ZWdvcnkudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvTGlzdFRhZ3MvTGlzdFRhZ3MudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0FydGljbGVEZXYvQXJ0aWNsZURldi50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvdWkvR3JpZERldi9HcmlkRGV2LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL3VpL0FydGljbGVQb3N0L0FydGljbGVQaG90by50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9QaG90by91aS9HcmlkUGhvdG8vR3JpZFBob3RvLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bvc3QvdWkvQXJ0aWNsZVBvc3QvQXJ0aWNsZVBvc3QudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUG9zdC91aS9HcmlkUG9zdHMvR3JpZFBvc3RzLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9FbmQvRW5kLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9NYWluL01haW4udHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvQXJ0aWNsZUNhdGVnb3J5L0FydGljbGVDYXRlZ29yeS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L3VpL0FydGljbGVUYWcvQXJ0aWNsZVRhZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L3VpL0dyaWRDYXRlZ29yeS9HcmlkQ2F0ZWdvcnkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9MaXN0Q2F0ZWdvcnkvTGlzdENhdGVnb3J5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvTGlzdFRhZ3MvTGlzdFRhZ3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvdWkvQXJ0aWNsZURldi9BcnRpY2xlRGV2Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0dyaWREZXYvR3JpZERldi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL3VpL0FydGljbGVQb3N0L0FydGljbGVQaG90by5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL3VpL0dyaWRQaG90by9HcmlkUGhvdG8ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9Qb3N0L3VpL0FydGljbGVQb3N0L0FydGljbGVQb3N0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUG9zdC91aS9HcmlkUG9zdHMvR3JpZFBvc3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0VuZC9FbmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvTWFpbi9NYWluLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvQXJ0aWNsZUNhdGVnb3J5L0FydGljbGVDYXRlZ29yeS5tb2R1bGUuc2Nzcz85ZGEyIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvQXJ0aWNsZVRhZy9BcnRpY2xlVGFnLm1vZHVsZS5zY3NzP2U3ZmIiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9HcmlkQ2F0ZWdvcnkvR3JpZENhdGVnb3J5Lm1vZHVsZS5zY3NzP2VmYzEiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9MaXN0Q2F0ZWdvcnkvTGlzdENhdGVnb3J5Lm1vZHVsZS5zY3NzPzk0ODkiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9MaXN0VGFncy9MaXN0VGFncy5tb2R1bGUuc2Nzcz85OWNiIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0FydGljbGVEZXYvQXJ0aWNsZURldi5tb2R1bGUuc2Nzcz9lMGI3Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0dyaWREZXYvR3JpZERldi5tb2R1bGUuc2Nzcz9iMWM3Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUGhvdG8vdWkvQXJ0aWNsZVBvc3QvQXJ0aWNsZVBob3RvLm1vZHVsZS5zY3NzPzg1YWIiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9QaG90by91aS9HcmlkUGhvdG8vR3JpZFBob3RvLm1vZHVsZS5zY3NzP2QxMzkiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9Qb3N0L3VpL0FydGljbGVQb3N0L0FydGljbGVQb3N0Lm1vZHVsZS5zY3NzP2Q1N2YiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9Qb3N0L3VpL0dyaWRQb3N0cy9HcmlkUG9zdHMubW9kdWxlLnNjc3M/Mjc0NyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9FbmQvRW5kLm1vZHVsZS5zY3NzPzIzNjgiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvTWFpbi9NYWluLm1vZHVsZS5zY3NzP2QwZTgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9wYXRoO1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFN2Z0Fycm93TmV4dCA9IHByb3BzID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgNTcgNTFcIlxufSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIGQ6IFwiTTQ5LjMzOCAyMy41IDMwLjIwMiAzLjM3OCAzMy4xMDEuNjIyIDU2Ljc2IDI1LjUgMzMuMSA1MC4zNzhsLTIuODk4LTIuNzU2TDQ5LjMzOCAyNy41SDB2LTRoNDkuMzM4WlwiLFxuICBjbGlwUnVsZTogXCJldmVub2RkXCJcbn0pKSk7XG5leHBvcnQgZGVmYXVsdCBTdmdBcnJvd05leHQ7IiwiZXhwb3J0IHtcclxuICAgIE1ldGFQYWdlLFxyXG59IGZyb20gJy4vdWkvTWV0YVBhZ2UnO1xyXG4iLCJpbXBvcnQgeyBydGtBcGkgfSBmcm9tICc1X3NoYXJlZC9hcGkvcnRrQXBpJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnNV9zaGFyZWQvYXBpL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IENhdGVnb3J5TW9kZSB9IGZyb20gJy4uL21vZGVsL3R5cGVzL0NhdGVnb3J5TW9kZSc7XHJcblxyXG5jb25zdCBjYXRlZ29yeUFwaSA9IHJ0a0FwaS5pbmplY3RFbmRwb2ludHMoe1xyXG4gICAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICAgICAgZmV0Y2hDYXRlZ29yeUxpc3Q6IGJ1aWxkLnF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IChtb2RlOiBDYXRlZ29yeU1vZGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IG1vZGUgPT09IENhdGVnb3J5TW9kZS5ERVYgPyBSb3V0ZXMuREVWX1RBR19MSVNUIDogUm91dGVzLlBPU1RfQ0FUX0xJU1QsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBfbGltaXQ6IDk5LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHByb3ZpZGVzVGFnczogWydjYXRlZ29yeSddLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VGZXRjaENhdGVnb3J5TGlzdCA9IGNhdGVnb3J5QXBpLnVzZUZldGNoQ2F0ZWdvcnlMaXN0UXVlcnk7XHJcblxyXG5leHBvcnQge1xyXG4gICAgY2F0ZWdvcnlBcGksXHJcbiAgICB1c2VGZXRjaENhdGVnb3J5TGlzdCxcclxufTtcclxuIiwiZXhwb3J0IHR5cGUge1xyXG4gICAgQXJ0aWNsZUNhdGVnb3J5VHlwZSxcclxufSBmcm9tICcuL21vZGVsL3R5cGVzL0FydGljbGVDYXRlZ29yeSc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQXJ0aWNsZUNhdGVnb3J5LFxyXG4gICAgQXJ0aWNsZUNhdGVnb3J5TW9kZSxcclxufSBmcm9tICcuL3VpL0FydGljbGVDYXRlZ29yeS9BcnRpY2xlQ2F0ZWdvcnknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIExpc3RDYXRlZ29yeSxcclxufSBmcm9tICcuL3VpL0xpc3RDYXRlZ29yeS9MaXN0Q2F0ZWdvcnknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIEdyaWRDYXRlZ29yeSxcclxufSBmcm9tICcuL3VpL0dyaWRDYXRlZ29yeS9HcmlkQ2F0ZWdvcnknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNhdGVnb3J5QXBpLFxyXG4gICAgdXNlRmV0Y2hDYXRlZ29yeUxpc3QsXHJcbn0gZnJvbSAnLi9hcGkvY2F0ZWdvcnlBcGknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIENhdGVnb3J5TW9kZSxcclxufSBmcm9tICcuL21vZGVsL3R5cGVzL0NhdGVnb3J5TW9kZSc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgTGlzdFRhZ3MsXHJcbn0gZnJvbSAnLi91aS9MaXN0VGFncy9MaXN0VGFncyc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQXJ0aWNsZVRhZyxcclxufSBmcm9tICcuL3VpL0FydGljbGVUYWcvQXJ0aWNsZVRhZyc7XHJcbiIsImludGVyZmFjZSBBcnRpY2xlQ2F0ZWdvcnlUeXBlIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc2x1Zzogc3RyaW5nO1xyXG4gICAgbG9jYWxlOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVkQXQ6IERhdGU7XHJcbiAgICB1cGRhdGVkQXQ6IERhdGU7XHJcbiAgICBwdWJsaXNoZWRBdD86IERhdGU7XHJcbiAgICBsb2NhbGl6YXRpb25zPzoge1xyXG4gICAgICAgIGRhdGE6IEFydGljbGVDYXRlZ29yeVR5cGVbXVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHR5cGUgQXJ0aWNsZUNhdGVnb3J5VHlwZSxcclxufTtcclxuIiwiZXhwb3J0IGVudW0gQ2F0ZWdvcnlNb2RlIHtcclxuICAgIFBPU1QgPSAncG9zdCcsXHJcbiAgICBERVYgPSAnZGV2JyxcclxufVxyXG4iLCJpbXBvcnQgeyBydGtBcGkgfSBmcm9tICc1X3NoYXJlZC9hcGkvcnRrQXBpJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnNV9zaGFyZWQvYXBpL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IEJhc2VSZXNwb25zZVR5cGUgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9Db21tb25UeXBlcyc7XHJcblxyXG5jb25zdCBkZXZBcGkgPSBydGtBcGkuaW5qZWN0RW5kcG9pbnRzKHtcclxuICAgIGVuZHBvaW50czogKGJ1aWxkKSA9PiAoe1xyXG4gICAgICAgIGZldGNoRGV2TGlzdDogYnVpbGQucXVlcnkoe1xyXG4gICAgICAgICAgICBxdWVyeTogKHBhcmFtcykgPT4gKHtcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGVzLkRFVlNfTElTVCxcclxuICAgICAgICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHByb3ZpZGVzVGFnczogWydkZXYnXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBmZXRjaERldkJ5SWQ6IGJ1aWxkLnF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IChpZDogc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtSb3V0ZXMuREVWU19MSVNUfS8ke2lkfS9gLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGU6ICdtYWluLnByZXZpZXcsdGFncyxjYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcHJvdmlkZXNUYWdzOiBbJ2RldlNpbmdsZSddLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBCYXNlUmVzcG9uc2VUeXBlKSA9PiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VGZXRjaERldkJ5SWQgPSBkZXZBcGkudXNlRmV0Y2hEZXZCeUlkUXVlcnk7XHJcbmNvbnN0IHVzZUxhenlGZXRjaERldkxpc3QgPSBkZXZBcGkudXNlTGF6eUZldGNoRGV2TGlzdFF1ZXJ5O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGRldkFwaSxcclxuICAgIHVzZUZldGNoRGV2QnlJZCxcclxuICAgIHVzZUxhenlGZXRjaERldkxpc3QsXHJcbn07XHJcbiIsImV4cG9ydCB7XHJcbiAgICBBcnRpY2xlRGV2LFxyXG59IGZyb20gJy4vdWkvQXJ0aWNsZURldi9BcnRpY2xlRGV2JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBHcmlkRGV2LFxyXG59IGZyb20gJy4vdWkvR3JpZERldi9HcmlkRGV2JztcclxuXHJcbmV4cG9ydCB0eXBlIHtcclxuICAgIERldkxpc3RTY2hlbWEsXHJcbn0gZnJvbSAnLi9tb2RlbC90eXBlcy9EZXZMaXN0U2NoZW1hJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXREZXZMaXN0LFxyXG4gICAgZGV2TGlzdFJlZHVjZXIsXHJcbiAgICBkZXZMaXN0QWN0aW9ucyxcclxufSBmcm9tICcuL21vZGVsL3NsaWNlcy9kZXZMaXN0U2xpY2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoTmV4dERldkxpc3QsXHJcbn0gZnJvbSAnLi9tb2RlbC9zZXJ2aWNlcy9mZXRjaE5leHREZXZMaXN0L2ZldGNoTmV4dERldkxpc3QnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHVzZUZldGNoRGV2QnlJZCxcclxuICAgIHVzZUxhenlGZXRjaERldkxpc3QsXHJcbn0gZnJvbSAnLi9hcGkvZGV2QXBpJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXREZXZMaXN0UGFnZSxcclxuICAgIGdldERldkxpc3RDb3VudCxcclxuICAgIGdldERldkxpc3RMb2FkaW5nLFxyXG4gICAgZ2V0RGV2TGlzdENhdGVnb3J5LFxyXG59IGZyb20gJy4vbW9kZWwvc2VsZWN0b3JzL2Rldkxpc3QnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHR5cGUgQXJ0aWNsZURldlR5cGUsXHJcbn0gZnJvbSAnLi9tb2RlbC90eXBlcy9BcnRpY2xlRGV2JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBpbml0RGV2LFxyXG59IGZyb20gJy4vbW9kZWwvc2VydmljZXMvaW5pdERldkxpc3QvaW5pdERldic7XHJcbiIsImltcG9ydCB7IFN0YXRlU2NoZW1hIH0gZnJvbSAnMF9hcHAvcHJvZGl2ZXJzL1N0b3JlUHJvdmlkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERldkxpc3RMb2FkaW5nID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LmRldkxpc3Q/LmlzTG9hZGluZztcclxuZXhwb3J0IGNvbnN0IGdldERldkxpc3RQZXJQYWdlID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LmRldkxpc3Q/LnBlclBhZ2U7XHJcbmV4cG9ydCBjb25zdCBnZXREZXZMaXN0UGFnZSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5kZXZMaXN0Py5wYWdlO1xyXG5leHBvcnQgY29uc3QgZ2V0RGV2TGlzdENvdW50ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LmRldkxpc3Q/LmNvdW50O1xyXG5leHBvcnQgY29uc3QgZ2V0RGV2TGlzdENhdGVnb3J5ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LmRldkxpc3Q/LmNhdGVnb3J5O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IExhenlRdWVyeVRyaWdnZXIgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L2Rpc3QvcXVlcnkvcmVhY3QvYnVpbGRIb29rcyc7XHJcbmltcG9ydCB7IFRodW5rQ29uZmlnIH0gZnJvbSAnMF9hcHAvcHJvZGl2ZXJzL1N0b3JlUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uUGFyYW1zLCBSZXF1ZXN0UGFyYW1zIH0gZnJvbSAnNV9zaGFyZWQvdHlwZXMvUmVxdWVzdERhdGEnO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0RGV2TGlzdFBhZ2UsXHJcbiAgICBnZXREZXZMaXN0Q291bnQsXHJcbiAgICBnZXREZXZMaXN0UGVyUGFnZSxcclxuICAgIGdldERldkxpc3RDYXRlZ29yeSxcclxufSBmcm9tICcuLi8uLi9zZWxlY3RvcnMvZGV2TGlzdCc7XHJcbmltcG9ydCB7IGRldkxpc3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL2Rldkxpc3RTbGljZSc7XHJcblxyXG5pbnRlcmZhY2UgRmV0Y2hEZXZMaXN0UHJvcHMge1xyXG4gICAgcmVwbGFjZTogYm9vbGVhbjtcclxuICAgIGdldERhdGE6IExhenlRdWVyeVRyaWdnZXI8YW55PixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoTmV4dERldkxpc3QgPSBjcmVhdGVBc3luY1RodW5rPHZvaWQsIEZldGNoRGV2TGlzdFByb3BzLCBUaHVua0NvbmZpZzxzdHJpbmc+PihcclxuICAgICdkZXZMaXN0L2ZldGNoTmV4dERldkxpc3QnLFxyXG4gICAgYXN5bmMgKHByb3BzLCB0aHVua0FQSSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZ2V0U3RhdGUsIGRpc3BhdGNoIH0gPSB0aHVua0FQSTtcclxuXHJcbiAgICAgICAgY29uc3QgeyByZXBsYWNlIH0gPSBwcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgcGVyUGFnZSA9IGdldERldkxpc3RQZXJQYWdlKGdldFN0YXRlKCkpIHx8IDE7XHJcbiAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gZ2V0RGV2TGlzdFBhZ2UoZ2V0U3RhdGUoKSkgfHwgMTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGdldERldkxpc3RDYXRlZ29yeShnZXRTdGF0ZSgpKTtcclxuICAgICAgICBjb25zdCBsaXN0TGVuZ3RoID0gZ2V0RGV2TGlzdENvdW50KGdldFN0YXRlKCkpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBsaXN0SW5kZXggPT09IGxpc3RMZW5ndGggPyBsaXN0SW5kZXggOiBsaXN0SW5kZXggKyAxO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbXM6IFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlNJWkVdOiBwZXJQYWdlLFxyXG4gICAgICAgICAgICBbUGFnaW5hdGlvblBhcmFtcy5QQUdFXTogcmVwbGFjZSA/IDEgOiBwYWdlTnVtYmVyLFxyXG4gICAgICAgICAgICBzb3J0OiAncHVibGlzaGVkQXQ6REVTQycsXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKicsXHJcbiAgICAgICAgICAgIHJlcGxhY2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tQYWdpbmF0aW9uUGFyYW1zLlRBR10gPSBjYXRlZ29yeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHByb3BzLmdldERhdGEocGFyYW1zLCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgbWV0YSB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YU1ldGhvZCA9IHJlcGxhY2VcclxuICAgICAgICAgICAgICAgID8gZGV2TGlzdEFjdGlvbnMucmVwbGFjZURhdGFcclxuICAgICAgICAgICAgICAgIDogZGV2TGlzdEFjdGlvbnMuYWRkRGF0YTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBkaXNwYXRjaChkYXRhTWV0aG9kKGRhdGEpKTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBkaXNwYXRjaChwb3N0TGlzdEFjdGlvbnMuc2V0UGFnaW5hdGlvbihtZXRhLnBhZ2luYXRpb24pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbik7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgTGF6eVF1ZXJ5VHJpZ2dlciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9xdWVyeS9yZWFjdC9idWlsZEhvb2tzJztcclxuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25QYXJhbXMsIFJlcXVlc3RQYXJhbXMgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9SZXF1ZXN0RGF0YSc7XHJcbmltcG9ydCB7IGRldkxpc3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL2Rldkxpc3RTbGljZSc7XHJcbmltcG9ydCB7IGdldERldkxpc3RQZXJQYWdlIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL2Rldkxpc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXREZXYgPSBjcmVhdGVBc3luY1RodW5rPHZvaWQsIExhenlRdWVyeVRyaWdnZXI8YW55PiwgVGh1bmtDb25maWc8c3RyaW5nPj4oXHJcbiAgICAnZGV2TGlzdC9pbml0RGV2TGlzdCcsXHJcbiAgICBhc3luYyAoZ2V0RGF0YSwgdGh1bmtBUEkpID0+IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoLFxyXG4gICAgICAgICAgICBnZXRTdGF0ZSxcclxuICAgICAgICB9ID0gdGh1bmtBUEk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlclBhZ2UgPSBnZXREZXZMaXN0UGVyUGFnZShnZXRTdGF0ZSgpKSB8fCAxO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbXM6IFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlBBR0VdOiAxLFxyXG4gICAgICAgICAgICBbUGFnaW5hdGlvblBhcmFtcy5TSVpFXTogcGVyUGFnZSxcclxuICAgICAgICAgICAgc29ydDogJ3B1Ymxpc2hlZEF0OkRFU0MnLFxyXG4gICAgICAgICAgICByZXBsYWNlOiBmYWxzZSxcclxuICAgICAgICAgICAgcG9wdWxhdGU6ICcqJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhd2FpdCBnZXREYXRhKHBhcmFtcywgdHJ1ZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIG1ldGEgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRldkxpc3RBY3Rpb25zLmFkZERhdGEoZGF0YSkpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRldkxpc3RBY3Rpb25zLnNldFBhZ2luYXRpb24obWV0YS5wYWdpbmF0aW9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4pO1xyXG4iLCJpbXBvcnQge1xyXG4gICAgY3JlYXRlU2xpY2UsXHJcbiAgICBQYXlsb2FkQWN0aW9uLFxyXG4gICAgY3JlYXRlRW50aXR5QWRhcHRlcixcclxufSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgU3RhdGVTY2hlbWEgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IGRldkFwaSB9IGZyb20gJy4uLy4uL2FwaS9kZXZBcGknO1xyXG5pbXBvcnQgeyBBcnRpY2xlRGV2VHlwZSB9IGZyb20gJy4uL3R5cGVzL0FydGljbGVEZXYnO1xyXG5pbXBvcnQgeyBEZXZMaXN0U2NoZW1hIH0gZnJvbSAnLi4vdHlwZXMvRGV2TGlzdFNjaGVtYSc7XHJcblxyXG5jb25zdCBkZXZMaXN0QWRhcHRlciA9IGNyZWF0ZUVudGl0eUFkYXB0ZXI8QXJ0aWNsZURldlR5cGU+KCk7XHJcbmRldkxpc3RBZGFwdGVyLnNlbGVjdElkID0gKGl0ZW06IEFydGljbGVEZXZUeXBlKSA9PiBpdGVtLmlkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERldkxpc3QgPSBkZXZMaXN0QWRhcHRlci5nZXRTZWxlY3RvcnM8U3RhdGVTY2hlbWE+KFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5kZXZMaXN0IHx8IGRldkxpc3RBZGFwdGVyLmdldEluaXRpYWxTdGF0ZSgpLFxyXG4pO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBEZXZMaXN0U2NoZW1hID0ge1xyXG4gICAgcGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDUsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3JzOiB1bmRlZmluZWQsXHJcbiAgICBjYXRlZ29yeTogdW5kZWZpbmVkLFxyXG4gICAgY291bnQ6IDEsXHJcbiAgICBpZHM6IFtdLFxyXG4gICAgZW50aXRpZXM6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgZGV2TGlzdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2Rldkxpc3RTbGljZScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldFBhZ2U6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TGVuZ3RoOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGREYXRhOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxBcnRpY2xlRGV2VHlwZVtdPikgPT4ge1xyXG4gICAgICAgICAgICBkZXZMaXN0QWRhcHRlci5hZGRNYW55KHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXBsYWNlRGF0YTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QXJ0aWNsZURldlR5cGVbXT4pID0+IHtcclxuICAgICAgICAgICAgZGV2TGlzdEFkYXB0ZXIuc2V0QWxsKHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQYWdpbmF0aW9uOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhZ2UgPSBwYWdpbmF0aW9uLnBhZ2U7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvdW50ID0gcGFnaW5hdGlvbi5wYWdlQ291bnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2dnbGVDYXRlZ29yeTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyIHwgdW5kZWZpbmVkPikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuY2F0ZWdvcnkgPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jYXRlZ29yeSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmNhdGVnb3J5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGRldkFwaS5lbmRwb2ludHMuZmV0Y2hEZXZMaXN0O1xyXG5cclxuICAgICAgICBidWlsZGVyXHJcbiAgICAgICAgICAgIC5hZGRNYXRjaGVyKHJlcXVlc3QubWF0Y2hQZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBsYWNlIH0gPSBhY3Rpb24ubWV0YS5hcmcub3JpZ2luYWxBcmdzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2UpIGRldkxpc3RBZGFwdGVyLnJlbW92ZUFsbChzdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZE1hdGNoZXIocmVxdWVzdC5tYXRjaEZ1bGZpbGxlZCwgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZE1hdGNoZXIocmVxdWVzdC5tYXRjaFJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvcnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgICByZWR1Y2VyOiBkZXZMaXN0UmVkdWNlcixcclxuICAgIGFjdGlvbnM6IGRldkxpc3RBY3Rpb25zLFxyXG59ID0gZGV2TGlzdFNsaWNlO1xyXG4iLCJpbXBvcnQgeyBydGtBcGkgfSBmcm9tICc1X3NoYXJlZC9hcGkvcnRrQXBpJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnNV9zaGFyZWQvYXBpL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IEJhc2VSZXNwb25zZVR5cGUgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9Db21tb25UeXBlcyc7XHJcblxyXG5jb25zdCBwaG90b0FwaSA9IHJ0a0FwaS5pbmplY3RFbmRwb2ludHMoe1xyXG4gICAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICAgICAgZmV0Y2hQaG90b0xpc3Q6IGJ1aWxkLnF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IChwYXJhbXMpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRlcy5QSE9UT19MSVNULFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlOiAnbWFpbi5wcmV2aWV3JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBwcm92aWRlc1RhZ3M6IFsncGhvdG8nXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBmZXRjaFBob3RvQnlJZDogYnVpbGQucXVlcnkoe1xyXG4gICAgICAgICAgICBxdWVyeTogKGlkOiBzdHJpbmcpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke1JvdXRlcy5QSE9UT19MSVNUfS8ke2lkfS9gLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGU6ICdtYWluLnByZXZpZXcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHByb3ZpZGVzVGFnczogWydwaG90b1NpbmdsZSddLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBCYXNlUmVzcG9uc2VUeXBlKSA9PiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VGZXRjaFBob3RvQnlJZCA9IHBob3RvQXBpLnVzZUZldGNoUGhvdG9CeUlkUXVlcnk7XHJcbmNvbnN0IHVzZUxhenlGZXRjaFBob3RvTGlzdCA9IHBob3RvQXBpLnVzZUxhenlGZXRjaFBob3RvTGlzdFF1ZXJ5O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHBob3RvQXBpLFxyXG4gICAgdXNlRmV0Y2hQaG90b0J5SWQsXHJcbiAgICB1c2VMYXp5RmV0Y2hQaG90b0xpc3QsXHJcbn07XHJcbiIsImV4cG9ydCB7XHJcbiAgICBHcmlkUGhvdG8sXHJcbn0gZnJvbSAnLi91aS9HcmlkUGhvdG8vR3JpZFBob3RvJztcclxuXHJcbmV4cG9ydCB0eXBlIHtcclxuICAgIEFydGljbGVQaG90b1R5cGUsXHJcbn0gZnJvbSAnLi9tb2RlbC90eXBlcy9BcnRpY2xlUGhvdG8nO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHBob3RvQXBpLFxyXG4gICAgdXNlRmV0Y2hQaG90b0J5SWQsXHJcbiAgICB1c2VMYXp5RmV0Y2hQaG90b0xpc3QsXHJcbn0gZnJvbSAnLi9hcGkvcGhvdG9BcGknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGdldFBob3RvTGlzdCxcclxuICAgIHBob3RvTGlzdFJlZHVjZXIsXHJcbiAgICBwaG90b0xpc3RBY3Rpb25zLFxyXG59IGZyb20gJy4vbW9kZWwvc2xpY2VzL3Bob3RvTGlzdFNsaWNlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmZXRjaE5leHRQaG90b0xpc3QsXHJcbn0gZnJvbSAnNF9lbnRpdGllcy9QaG90by9tb2RlbC9zZXJ2aWNlcy9mZXRjaE5leHRQaG90b0xpc3QvZmV0Y2hOZXh0UGhvdG9MaXN0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBpbml0UGhvdG9MaXN0LFxyXG59IGZyb20gJy4vbW9kZWwvc2VydmljZXMvaW5pdFBob3RvTGlzdC9pbml0UGhvdG9MaXN0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRQaG90b0xpc3RDb3VudCxcclxuICAgIGdldFBob3RvTGlzdExvYWRpbmcsXHJcbiAgICBnZXRQaG90b0xpc3RQYWdlLFxyXG59IGZyb20gJy4vbW9kZWwvc2VsZWN0b3JzL3Bob3RvTGlzdCc7XHJcblxyXG5leHBvcnQgdHlwZSB7XHJcbiAgICBQaG90b0xpc3RTY2hlbWEsXHJcbn0gZnJvbSAnLi9tb2RlbC90eXBlcy9QaG90b0xpc3RTY2hlbWEnO1xyXG4iLCJpbXBvcnQgeyBTdGF0ZVNjaGVtYSB9IGZyb20gJzBfYXBwL3Byb2RpdmVycy9TdG9yZVByb3ZpZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQaG90b0xpc3RMb2FkaW5nID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LnBob3RvTGlzdD8uaXNMb2FkaW5nO1xyXG5leHBvcnQgY29uc3QgZ2V0UGhvdG9MaXN0UGVyUGFnZSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5waG90b0xpc3Q/LnBlclBhZ2U7XHJcbmV4cG9ydCBjb25zdCBnZXRQaG90b0xpc3RQYWdlID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LnBob3RvTGlzdD8ucGFnZTtcclxuZXhwb3J0IGNvbnN0IGdldFBob3RvTGlzdENvdW50ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LnBob3RvTGlzdD8uY291bnQ7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgTGF6eVF1ZXJ5VHJpZ2dlciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9xdWVyeS9yZWFjdC9idWlsZEhvb2tzJztcclxuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25QYXJhbXMsIFJlcXVlc3RQYXJhbXMgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9SZXF1ZXN0RGF0YSc7XHJcbmltcG9ydCB7XHJcbiAgICBnZXRQaG90b0xpc3RQYWdlLFxyXG4gICAgZ2V0UGhvdG9MaXN0Q291bnQsXHJcbiAgICBnZXRQaG90b0xpc3RQZXJQYWdlLFxyXG59IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9waG90b0xpc3QnO1xyXG5pbXBvcnQgeyBwaG90b0xpc3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL3Bob3RvTGlzdFNsaWNlJztcclxuXHJcbmludGVyZmFjZSBGZXRjaFBob3RvTGlzdFBhZ2VQcm9wcyB7XHJcbiAgICByZXBsYWNlOiBib29sZWFuO1xyXG4gICAgZ2V0RGF0YTogTGF6eVF1ZXJ5VHJpZ2dlcjxhbnk+LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hOZXh0UGhvdG9MaXN0ID0gY3JlYXRlQXN5bmNUaHVuazx2b2lkLCBGZXRjaFBob3RvTGlzdFBhZ2VQcm9wcywgVGh1bmtDb25maWc8c3RyaW5nPj4oXHJcbiAgICAncGhvdG9MaXN0L2ZldGNoTmV4dFBob3RvTGlzdCcsXHJcbiAgICBhc3luYyAocHJvcHMsIHRodW5rQVBJKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBnZXRTdGF0ZSwgZGlzcGF0Y2ggfSA9IHRodW5rQVBJO1xyXG5cclxuICAgICAgICBjb25zdCB7IHJlcGxhY2UgfSA9IHByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBwZXJQYWdlID0gZ2V0UGhvdG9MaXN0UGVyUGFnZShnZXRTdGF0ZSgpKSB8fCAxO1xyXG4gICAgICAgIGNvbnN0IGxpc3RJbmRleCA9IGdldFBob3RvTGlzdFBhZ2UoZ2V0U3RhdGUoKSkgfHwgMTtcclxuICAgICAgICBjb25zdCBsaXN0TGVuZ3RoID0gZ2V0UGhvdG9MaXN0Q291bnQoZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IGxpc3RJbmRleCA9PT0gbGlzdExlbmd0aCA/IGxpc3RJbmRleCA6IGxpc3RJbmRleCArIDE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtczogUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgW1BhZ2luYXRpb25QYXJhbXMuU0laRV06IHBlclBhZ2UsXHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlBBR0VdOiByZXBsYWNlID8gMSA6IHBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgIHNvcnQ6ICdwdWJsaXNoZWRBdDpERVNDJyxcclxuICAgICAgICAgICAgcG9wdWxhdGU6ICcqJyxcclxuICAgICAgICAgICAgcmVwbGFjZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhd2FpdCBwcm9wcy5nZXREYXRhKHBhcmFtcywgdHJ1ZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIG1ldGEgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFNZXRob2QgPSByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICA/IHBob3RvTGlzdEFjdGlvbnMucmVwbGFjZURhdGFcclxuICAgICAgICAgICAgICAgIDogcGhvdG9MaXN0QWN0aW9ucy5hZGREYXRhO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRhdGFNZXRob2QoZGF0YSkpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHBob3RvTGlzdEFjdGlvbnMuc2V0UGFnaW5hdGlvbihtZXRhLnBhZ2luYXRpb24pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbik7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgTGF6eVF1ZXJ5VHJpZ2dlciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9xdWVyeS9yZWFjdC9idWlsZEhvb2tzJztcclxuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25QYXJhbXMsIFJlcXVlc3RQYXJhbXMgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9SZXF1ZXN0RGF0YSc7XHJcbmltcG9ydCB7IHBob3RvTGlzdEFjdGlvbnMgfSBmcm9tICcuLi8uLi9zbGljZXMvcGhvdG9MaXN0U2xpY2UnO1xyXG5pbXBvcnQgeyBnZXRQaG90b0xpc3RQZXJQYWdlIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL3Bob3RvTGlzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFBob3RvTGlzdCA9IGNyZWF0ZUFzeW5jVGh1bms8dm9pZCwgTGF6eVF1ZXJ5VHJpZ2dlcjxhbnk+LCBUaHVua0NvbmZpZzxzdHJpbmc+PihcclxuICAgICdwaG90b0xpc3QvaW5pdFBob3RvTGlzdCcsXHJcbiAgICBhc3luYyAoZ2V0RGF0YSwgdGh1bmtBUEkpID0+IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoLFxyXG4gICAgICAgICAgICBnZXRTdGF0ZSxcclxuICAgICAgICB9ID0gdGh1bmtBUEk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlclBhZ2UgPSBnZXRQaG90b0xpc3RQZXJQYWdlKGdldFN0YXRlKCkpIHx8IDE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtczogUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgW1BhZ2luYXRpb25QYXJhbXMuUEFHRV06IDEsXHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlNJWkVdOiBwZXJQYWdlLFxyXG4gICAgICAgICAgICBzb3J0OiAncHVibGlzaGVkQXQ6REVTQycsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBUT0RPOiDQktGL0L3QtdGB0YLQuCDQv9C+0YHRgtC+0Y/QvdC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0Ysg0LIgQVBJXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKicsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXdhaXQgZ2V0RGF0YShwYXJhbXMsIHRydWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBtZXRhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChwaG90b0xpc3RBY3Rpb25zLmFkZERhdGEoZGF0YSkpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHBob3RvTGlzdEFjdGlvbnMuc2V0UGFnaW5hdGlvbihtZXRhLnBhZ2luYXRpb24pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbik7XHJcbiIsImltcG9ydCB7XHJcbiAgICBjcmVhdGVTbGljZSxcclxuICAgIFBheWxvYWRBY3Rpb24sXHJcbiAgICBjcmVhdGVFbnRpdHlBZGFwdGVyLFxyXG59IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBTdGF0ZVNjaGVtYSB9IGZyb20gJzBfYXBwL3Byb2RpdmVycy9TdG9yZVByb3ZpZGVyJztcclxuaW1wb3J0IHsgcGhvdG9BcGkgfSBmcm9tICcuLi8uLi9hcGkvcGhvdG9BcGknO1xyXG5pbXBvcnQgeyBBcnRpY2xlUGhvdG9UeXBlIH0gZnJvbSAnLi4vdHlwZXMvQXJ0aWNsZVBob3RvJztcclxuaW1wb3J0IHsgUGhvdG9MaXN0U2NoZW1hIH0gZnJvbSAnLi4vdHlwZXMvUGhvdG9MaXN0U2NoZW1hJztcclxuXHJcbmNvbnN0IHBob3RvTGlzdEFkYXB0ZXIgPSBjcmVhdGVFbnRpdHlBZGFwdGVyPEFydGljbGVQaG90b1R5cGU+KCk7XHJcbnBob3RvTGlzdEFkYXB0ZXIuc2VsZWN0SWQgPSAoaXRlbTogQXJ0aWNsZVBob3RvVHlwZSkgPT4gaXRlbS5pZDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQaG90b0xpc3QgPSBwaG90b0xpc3RBZGFwdGVyLmdldFNlbGVjdG9yczxTdGF0ZVNjaGVtYT4oXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBob3RvTGlzdCB8fCBwaG90b0xpc3RBZGFwdGVyLmdldEluaXRpYWxTdGF0ZSgpLFxyXG4pO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBQaG90b0xpc3RTY2hlbWEgPSB7XHJcbiAgICBwYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogOCxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcnM6IHVuZGVmaW5lZCxcclxuICAgIGNvdW50OiAxLFxyXG4gICAgaWRzOiBbXSxcclxuICAgIGVudGl0aWVzOiB7fSxcclxufTtcclxuXHJcbmNvbnN0IHBob3RvTGlzdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3Bob3RvTGlzdFNsaWNlJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0UGFnZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wYWdlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRMZW5ndGg6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuY291bnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZERhdGE6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFydGljbGVQaG90b1R5cGVbXT4pID0+IHtcclxuICAgICAgICAgICAgcGhvdG9MaXN0QWRhcHRlci5hZGRNYW55KHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXBsYWNlRGF0YTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QXJ0aWNsZVBob3RvVHlwZVtdPikgPT4ge1xyXG4gICAgICAgICAgICBwaG90b0xpc3RBZGFwdGVyLnNldEFsbChzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGFnaW5hdGlvbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5wYWdlID0gcGFnaW5hdGlvbi5wYWdlO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb3VudCA9IHBhZ2luYXRpb24ucGFnZUNvdW50O1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gcGhvdG9BcGkuZW5kcG9pbnRzLmZldGNoUGhvdG9MaXN0O1xyXG5cclxuICAgICAgICBidWlsZGVyXHJcbiAgICAgICAgICAgIC5hZGRNYXRjaGVyKHJlcXVlc3QubWF0Y2hQZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBsYWNlIH0gPSBhY3Rpb24ubWV0YS5hcmcub3JpZ2luYWxBcmdzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2UpIHBob3RvTGlzdEFkYXB0ZXIucmVtb3ZlQWxsKHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvcnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkTWF0Y2hlcihyZXF1ZXN0Lm1hdGNoRnVsZmlsbGVkLCAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkTWF0Y2hlcihyZXF1ZXN0Lm1hdGNoUmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmVycm9ycyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIHJlZHVjZXI6IHBob3RvTGlzdFJlZHVjZXIsXHJcbiAgICBhY3Rpb25zOiBwaG90b0xpc3RBY3Rpb25zLFxyXG59ID0gcGhvdG9MaXN0U2xpY2U7XHJcbiIsImltcG9ydCB7IHJ0a0FwaSB9IGZyb20gJzVfc2hhcmVkL2FwaS9ydGtBcGknO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICc1X3NoYXJlZC9hcGkvZW5kcG9pbnRzJztcclxuaW1wb3J0IHtQb3N0QXJ0aWNsZVR5cGV9IGZyb20gXCI0X2VudGl0aWVzL1Bvc3RcIjtcclxuaW1wb3J0IHtCYXNlUmVzcG9uc2VUeXBlfSBmcm9tIFwiNV9zaGFyZWQvdHlwZXMvQ29tbW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IHBvc3RBcGkgPSBydGtBcGkuaW5qZWN0RW5kcG9pbnRzKHtcclxuICAgIGVuZHBvaW50czogKGJ1aWxkKSA9PiAoe1xyXG4gICAgICAgIGZldGNoUG9zdExpc3Q6IGJ1aWxkLnF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IChwYXJhbXMpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRlcy5QT1NUU19MSVNULFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlOiAnbWFpbi5wcmV2aWV3LGNhdGVnb3J5JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBwcm92aWRlc1RhZ3M6IFsncG9zdCddLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZldGNoUG9zdEJ5SWQ6IGJ1aWxkLnF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IChpZDogc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtSb3V0ZXMuUE9TVFNfTElTVH0vJHtpZH0vYCxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlOiAnbWFpbi5wcmV2aWV3LHRhZ3MsY2F0ZWdvcnksc2VvJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBwcm92aWRlc1RhZ3M6IFsncG9zdFNpbmdsZSddLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBCYXNlUmVzcG9uc2VUeXBlKSA9PiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VGZXRjaFBvc3RCeUlkID0gcG9zdEFwaS51c2VGZXRjaFBvc3RCeUlkUXVlcnk7XHJcbmNvbnN0IHVzZUxhenlGZXRjaFBvc3RMaXN0ID0gcG9zdEFwaS51c2VMYXp5RmV0Y2hQb3N0TGlzdFF1ZXJ5O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHBvc3RBcGksXHJcbiAgICB1c2VGZXRjaFBvc3RCeUlkLFxyXG4gICAgdXNlTGF6eUZldGNoUG9zdExpc3QsXHJcbn07XHJcbiIsImV4cG9ydCB7XHJcbiAgICBHcmlkUG9zdHMsXHJcbn0gZnJvbSAnLi91aS9HcmlkUG9zdHMvR3JpZFBvc3RzJztcclxuXHJcbmV4cG9ydCB0eXBlIHtcclxuICAgIFBvc3RBcnRpY2xlVHlwZSxcclxufSBmcm9tICcuL21vZGVsL3R5cGVzL1Bvc3RBcnRpY2xlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBwb3N0QXBpLFxyXG4gICAgdXNlRmV0Y2hQb3N0QnlJZCxcclxuICAgIHVzZUxhenlGZXRjaFBvc3RMaXN0LFxyXG59IGZyb20gJy4vYXBpL3Bvc3RBcGknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGdldFBvc3RMaXN0LFxyXG4gICAgcG9zdExpc3RSZWR1Y2VyLFxyXG4gICAgcG9zdExpc3RBY3Rpb25zLFxyXG59IGZyb20gJy4vbW9kZWwvc2xpY2VzL3Bvc3RMaXN0U2xpY2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoTmV4dFBvc3RMaXN0LFxyXG59IGZyb20gJy4vbW9kZWwvc2VydmljZXMvZmV0Y2hOZXh0UG9zdExpc3QvZmV0Y2hOZXh0UG9zdExpc3QnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGluaXRQb3N0TGlzdCxcclxufSBmcm9tICcuL21vZGVsL3NlcnZpY2VzL2luaXRQb3N0TGlzdC9pbml0UG9zdExpc3QnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGdldFBvc3RMaXN0Q291bnQsXHJcbiAgICBnZXRQb3N0TGlzdExvYWRpbmcsXHJcbiAgICBnZXRQb3N0TGlzdFBhZ2UsXHJcbiAgICBnZXRQb3N0TGlzdENhdGVnb3J5LFxyXG59IGZyb20gJy4vbW9kZWwvc2VsZWN0b3JzL3Bvc3RMaXN0JztcclxuXHJcbmV4cG9ydCB0eXBlIHtcclxuICAgIFBvc3RMaXN0U2NoZW1hLFxyXG59IGZyb20gJy4vbW9kZWwvdHlwZXMvUG9zdExpc3RTY2hlbWEnO1xyXG4iLCJpbXBvcnQgeyBTdGF0ZVNjaGVtYSB9IGZyb20gJzBfYXBwL3Byb2RpdmVycy9TdG9yZVByb3ZpZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0TGlzdExvYWRpbmcgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZT8ucG9zdExpc3Q/LmlzTG9hZGluZztcclxuZXhwb3J0IGNvbnN0IGdldFBvc3RMaXN0UGVyUGFnZSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5wb3N0TGlzdD8ucGVyUGFnZTtcclxuZXhwb3J0IGNvbnN0IGdldFBvc3RMaXN0UGFnZSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5wb3N0TGlzdD8ucGFnZTtcclxuZXhwb3J0IGNvbnN0IGdldFBvc3RMaXN0Q291bnQgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZT8ucG9zdExpc3Q/LmNvdW50O1xyXG5leHBvcnQgY29uc3QgZ2V0UG9zdExpc3RDYXRlZ29yeSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5wb3N0TGlzdD8uY2F0ZWdvcnk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgTGF6eVF1ZXJ5VHJpZ2dlciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9xdWVyeS9yZWFjdC9idWlsZEhvb2tzJztcclxuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25QYXJhbXMsIFJlcXVlc3RQYXJhbXMgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9SZXF1ZXN0RGF0YSc7XHJcbmltcG9ydCB7XHJcbiAgICBnZXRQb3N0TGlzdFBhZ2UsXHJcbiAgICBnZXRQb3N0TGlzdENvdW50LFxyXG4gICAgZ2V0UG9zdExpc3RQZXJQYWdlLFxyXG4gICAgZ2V0UG9zdExpc3RDYXRlZ29yeSxcclxufSBmcm9tICcuLi8uLi9zZWxlY3RvcnMvcG9zdExpc3QnO1xyXG5pbXBvcnQgeyBwb3N0TGlzdEFjdGlvbnMgfSBmcm9tICcuLi8uLi9zbGljZXMvcG9zdExpc3RTbGljZSc7XHJcblxyXG5pbnRlcmZhY2UgRmV0Y2hQb3N0TGlzdFBhZ2VQcm9wcyB7XHJcbiAgICByZXBsYWNlOiBib29sZWFuO1xyXG4gICAgZ2V0RGF0YTogTGF6eVF1ZXJ5VHJpZ2dlcjxhbnk+LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hOZXh0UG9zdExpc3QgPSBjcmVhdGVBc3luY1RodW5rPHZvaWQsIEZldGNoUG9zdExpc3RQYWdlUHJvcHMsIFRodW5rQ29uZmlnPHN0cmluZz4+KFxyXG4gICAgJ3Bvc3RMaXN0L2ZldGNoTmV4dFBvc3RMaXN0JyxcclxuICAgIGFzeW5jIChwcm9wcywgdGh1bmtBUEkpID0+IHtcclxuICAgICAgICBjb25zdCB7IGdldFN0YXRlLCBkaXNwYXRjaCB9ID0gdGh1bmtBUEk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgcmVwbGFjZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlclBhZ2UgPSBnZXRQb3N0TGlzdFBlclBhZ2UoZ2V0U3RhdGUoKSkgfHwgMTtcclxuICAgICAgICBjb25zdCBsaXN0SW5kZXggPSBnZXRQb3N0TGlzdFBhZ2UoZ2V0U3RhdGUoKSkgfHwgMTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGdldFBvc3RMaXN0Q2F0ZWdvcnkoZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgY29uc3QgbGlzdExlbmd0aCA9IGdldFBvc3RMaXN0Q291bnQoZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IGxpc3RJbmRleCA9PT0gbGlzdExlbmd0aCA/IGxpc3RJbmRleCA6IGxpc3RJbmRleCArIDE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtczogUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgW1BhZ2luYXRpb25QYXJhbXMuU0laRV06IHBlclBhZ2UsXHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlBBR0VdOiByZXBsYWNlID8gMSA6IHBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgIHNvcnQ6ICdwdWJsaXNoZWRBdDpERVNDJyxcclxuICAgICAgICAgICAgcG9wdWxhdGU6ICcqJyxcclxuICAgICAgICAgICAgcmVwbGFjZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgcGFyYW1zW1BhZ2luYXRpb25QYXJhbXMuQ0FUXSA9IGNhdGVnb3J5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgcHJvcHMuZ2V0RGF0YShwYXJhbXMsIHRydWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBtZXRhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhTWV0aG9kID0gcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgPyBwb3N0TGlzdEFjdGlvbnMucmVwbGFjZURhdGFcclxuICAgICAgICAgICAgICAgIDogcG9zdExpc3RBY3Rpb25zLmFkZERhdGE7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGF0YU1ldGhvZChkYXRhKSk7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgZGlzcGF0Y2gocG9zdExpc3RBY3Rpb25zLnNldFBhZ2luYXRpb24obWV0YS5wYWdpbmF0aW9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4pO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IExhenlRdWVyeVRyaWdnZXIgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L2Rpc3QvcXVlcnkvcmVhY3QvYnVpbGRIb29rcyc7XHJcbmltcG9ydCB7IFRodW5rQ29uZmlnIH0gZnJvbSAnMF9hcHAvcHJvZGl2ZXJzL1N0b3JlUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uUGFyYW1zLCBSZXF1ZXN0UGFyYW1zIH0gZnJvbSAnNV9zaGFyZWQvdHlwZXMvUmVxdWVzdERhdGEnO1xyXG5pbXBvcnQgeyBwb3N0TGlzdEFjdGlvbnMgfSBmcm9tICcuLi8uLi9zbGljZXMvcG9zdExpc3RTbGljZSc7XHJcbmltcG9ydCB7IGdldFBvc3RMaXN0UGVyUGFnZSB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9wb3N0TGlzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFBvc3RMaXN0ID0gY3JlYXRlQXN5bmNUaHVuazx2b2lkLCBMYXp5UXVlcnlUcmlnZ2VyPGFueT4sIFRodW5rQ29uZmlnPHN0cmluZz4+KFxyXG4gICAgJ3Bvc3RMaXN0L2luaXRQb3N0TGlzdCcsXHJcbiAgICBhc3luYyAoZ2V0RGF0YSwgdGh1bmtBUEkpID0+IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoLFxyXG4gICAgICAgICAgICBnZXRTdGF0ZSxcclxuICAgICAgICB9ID0gdGh1bmtBUEk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlclBhZ2UgPSBnZXRQb3N0TGlzdFBlclBhZ2UoZ2V0U3RhdGUoKSkgfHwgMTtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1zOiBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBbUGFnaW5hdGlvblBhcmFtcy5QQUdFXTogMSxcclxuICAgICAgICAgICAgW1BhZ2luYXRpb25QYXJhbXMuU0laRV06IHBlclBhZ2UsXHJcbiAgICAgICAgICAgIHNvcnQ6ICdwdWJsaXNoZWRBdDpERVNDJyxcclxuICAgICAgICAgICAgcmVwbGFjZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKicsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYXdhaXQgZ2V0RGF0YShwYXJhbXMsIHRydWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBtZXRhIH0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChwb3N0TGlzdEFjdGlvbnMuYWRkRGF0YShkYXRhKSk7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgZGlzcGF0Y2gocG9zdExpc3RBY3Rpb25zLnNldFBhZ2luYXRpb24obWV0YS5wYWdpbmF0aW9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4pO1xyXG4iLCJpbXBvcnQge1xyXG4gICAgY3JlYXRlU2xpY2UsXHJcbiAgICBQYXlsb2FkQWN0aW9uLFxyXG4gICAgY3JlYXRlRW50aXR5QWRhcHRlcixcclxufSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgU3RhdGVTY2hlbWEgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IFBvc3RBcnRpY2xlVHlwZSB9IGZyb20gJzRfZW50aXRpZXMvUG9zdCc7XHJcbmltcG9ydCB7IHBvc3RBcGkgfSBmcm9tICcuLi8uLi9hcGkvcG9zdEFwaSc7XHJcbmltcG9ydCB7IFBvc3RMaXN0U2NoZW1hIH0gZnJvbSAnLi4vdHlwZXMvUG9zdExpc3RTY2hlbWEnO1xyXG5cclxuY29uc3QgcG9zdExpc3RBZGFwdGVyID0gY3JlYXRlRW50aXR5QWRhcHRlcjxQb3N0QXJ0aWNsZVR5cGU+KCk7XHJcbnBvc3RMaXN0QWRhcHRlci5zZWxlY3RJZCA9IChpdGVtOiBQb3N0QXJ0aWNsZVR5cGUpID0+IGl0ZW0uaWQ7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdExpc3QgPSBwb3N0TGlzdEFkYXB0ZXIuZ2V0U2VsZWN0b3JzPFN0YXRlU2NoZW1hPihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdExpc3QgfHwgcG9zdExpc3RBZGFwdGVyLmdldEluaXRpYWxTdGF0ZSgpLFxyXG4pO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBQb3N0TGlzdFNjaGVtYSA9IHtcclxuICAgIHBhZ2U6IDEsXHJcbiAgICBwZXJQYWdlOiA4LFxyXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGVycm9yczogdW5kZWZpbmVkLFxyXG4gICAgY2F0ZWdvcnk6IHVuZGVmaW5lZCxcclxuICAgIGNvdW50OiAxLFxyXG4gICAgaWRzOiBbXSxcclxuICAgIGVudGl0aWVzOiB7fSxcclxufTtcclxuXHJcbmNvbnN0IHBvc3RMaXN0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAncG9zdExpc3RTbGljZScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldFBhZ2U6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TGVuZ3RoOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGREYXRhOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQb3N0QXJ0aWNsZVR5cGVbXT4pID0+IHtcclxuICAgICAgICAgICAgcG9zdExpc3RBZGFwdGVyLmFkZE1hbnkoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcGxhY2VEYXRhOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQb3N0QXJ0aWNsZVR5cGVbXT4pID0+IHtcclxuICAgICAgICAgICAgcG9zdExpc3RBZGFwdGVyLnNldEFsbChzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGFnaW5hdGlvbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5wYWdlID0gcGFnaW5hdGlvbi5wYWdlO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb3VudCA9IHBhZ2luYXRpb24ucGFnZUNvdW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9nZ2xlQ2F0ZWdvcnk6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlciB8IHVuZGVmaW5lZD4pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmNhdGVnb3J5ID09PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuY2F0ZWdvcnkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jYXRlZ29yeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBwb3N0QXBpLmVuZHBvaW50cy5mZXRjaFBvc3RMaXN0O1xyXG5cclxuICAgICAgICBidWlsZGVyXHJcbiAgICAgICAgICAgIC5hZGRNYXRjaGVyKHJlcXVlc3QubWF0Y2hQZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBsYWNlIH0gPSBhY3Rpb24ubWV0YS5hcmcub3JpZ2luYWxBcmdzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2UpIHBvc3RMaXN0QWRhcHRlci5yZW1vdmVBbGwoc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlLmVycm9ycyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRNYXRjaGVyKHJlcXVlc3QubWF0Y2hGdWxmaWxsZWQsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRNYXRjaGVyKHJlcXVlc3QubWF0Y2hSZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3JzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gICAgcmVkdWNlcjogcG9zdExpc3RSZWR1Y2VyLFxyXG4gICAgYWN0aW9uczogcG9zdExpc3RBY3Rpb25zLFxyXG59ID0gcG9zdExpc3RTbGljZTtcclxuIiwiaW1wb3J0IHtcclxuICAgIHVzZVN0YXRlLFxyXG4gICAgdXNlRWZmZWN0LFxyXG4gICAgUmVmT2JqZWN0LFxyXG59IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUhlaWdodCA9IChlbGVtZW50UmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+LCBwcm9wb3J0aW9uOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUhlaWdodCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBlbGVtZW50UmVmPy5jdXJyZW50Py5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aWR0aCkgc2V0SGVpZ2h0KHdpZHRoICogcHJvcG9ydGlvbik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdXBkYXRlSGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVIZWlnaHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlSGVpZ2h0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2VsZW1lbnRSZWYsIHByb3BvcnRpb25dKTtcclxuXHJcbiAgICByZXR1cm4gaGVpZ2h0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSGVpZ2h0O1xyXG4iLCJlbnVtIFBhZ2luYXRpb25QYXJhbXMge1xyXG4gICAgUEFHRSA9ICdwYWdpbmF0aW9uW3BhZ2VdJyxcclxuICAgIFNJWkUgPSAncGFnaW5hdGlvbltwYWdlU2l6ZV0nLFxyXG4gICAgQ0FUID0gJ2ZpbHRlcnNbY2F0ZWdvcnldW2lkXVskZXFdJyxcclxuICAgIFRBRyA9ICdmaWx0ZXJzW3RhZ3NdW2lkXVskZXFdJyxcclxufVxyXG5cclxudHlwZSBSZXF1ZXN0UGFyYW1zS2V5ID0gc3RyaW5nIHwgUGFnaW5hdGlvblBhcmFtcztcclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0UGFyYW1zIHtcclxuICAgIFtrZXk6IFJlcXVlc3RQYXJhbXNLZXldOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgUGFnaW5hdGlvblBhcmFtcyxcclxuICAgIHR5cGUgUmVxdWVzdFBhcmFtcyxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IE1ldGFQYWdlVHlwZSB9IGZyb20gJzVfc2hhcmVkL3R5cGVzL0NvbW1vblR5cGVzJztcclxuXHJcbmludGVyZmFjZSBNZXRhUGFnZVByb3BzIHtcclxuICAgIGRhdGE/OiBNZXRhUGFnZVR5cGU7XHJcbiAgICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWV0YVBhZ2UgPSAocHJvcHM6IE1ldGFQYWdlUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgY29udGVudExvYWRpbmcgPSA8dGl0bGU+eyB0KCdsb2FkaW5nJykgfTwvdGl0bGU+O1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YT8ubWV0YVRpdGxlXHJcbiAgICAgICAgICAgICAgICAmJiA8dGl0bGU+eyBkYXRhPy5tZXRhVGl0bGUgfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YT8ubWV0YURlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAmJiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhPy5tZXRhRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YT8ua2V5d29yZHNcclxuICAgICAgICAgICAgICAgICYmIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2RhdGE/LmtleXdvcmRzfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE/Lm1ldGFSb2JvdHNcclxuICAgICAgICAgICAgICAgICYmIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PXtkYXRhPy5tZXRhUm9ib3RzfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE/LnN0cnVjdHVyZWREYXRhXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IEpTT04uc3RyaW5naWZ5KGRhdGE/LnN0cnVjdHVyZWREYXRhKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICB7IGlzTG9hZGluZyA/IGNvbnRlbnRMb2FkaW5nIDogY29udGVudCB9XHJcbiAgICAgICAgICAgIHsgIWlzTG9hZGluZyAmJiAhZGF0YSAmJiA8dGl0bGU+Li4uPC90aXRsZT4gfVxyXG4gICAgICAgIDwvSGVsbWV0PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IEFwcFRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaGVtZSc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlQ2F0ZWdvcnkubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBcnRpY2xlQ2F0ZWdvcnlUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvdHlwZXMvQXJ0aWNsZUNhdGVnb3J5JztcclxuXHJcbmV4cG9ydCBlbnVtIEFydGljbGVDYXRlZ29yeU1vZGUge1xyXG4gICAgU1RBVElDLFxyXG4gICAgSU5QVVQsXHJcbn1cclxuXHJcbmludGVyZmFjZSBBcnRpY2xlQ2F0ZWdvcnlQcm9wcyB7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgaXNBY3RpdmU/OiBib29sZWFuO1xyXG4gICAgdGhlbWVQcm9wPzogQXBwVGhlbWU7XHJcbiAgICBtb2RlOiBBcnRpY2xlQ2F0ZWdvcnlNb2RlO1xyXG4gICAgZGF0YT86IEFydGljbGVDYXRlZ29yeVR5cGU7XHJcbiAgICBjbGlja0V2ZW50PzogKGFyZzA6IEFydGljbGVDYXRlZ29yeVR5cGUgfCB1bmRlZmluZWQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBcnRpY2xlQ2F0ZWdvcnkgPSAocHJvcHM6IEFydGljbGVDYXRlZ29yeVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBtb2RlLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIGlzQWN0aXZlLFxyXG4gICAgICAgIHRoZW1lUHJvcCxcclxuICAgICAgICBjbGlja0V2ZW50LFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gICAgY29uc3QgVGFnOiBrZXlvZiBKU1guSW50cmluc2ljRWxlbWVudHMgPSBtb2RlID09PSBBcnRpY2xlQ2F0ZWdvcnlNb2RlLlNUQVRJQyA/ICdhcnRpY2xlJyA6ICdsYWJlbCc7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0RXZlbnQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKGNsaWNrRXZlbnQpIGNsaWNrRXZlbnQoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVuc2VsZWN0RXZlbnQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKGNsaWNrRXZlbnQgJiYgaXNBY3RpdmUpIGNsaWNrRXZlbnQodW5kZWZpbmVkKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2tlbGV0b24gPSAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuYmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzWydibG9jay0tc2tlbGV0b24nXSxcclxuICAgICAgICAgICAgICAgICAgICBjbHNbYGJsb2NrLS0ke3RoZW1lUHJvcCB8fCB0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhcnRpY2xlID0gKFxyXG4gICAgICAgIDxUYWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmJsb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYmxvY2stLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgW2Nsc1snYmxvY2stLWxhYmVsJ11dOiBtb2RlID09PSBBcnRpY2xlQ2F0ZWdvcnlNb2RlLklOUFVUIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBbY2xzWydibG9jay0tYWN0aXZlJ11dOiBpc0FjdGl2ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbW9kZSA9PT0gQXJ0aWNsZUNhdGVnb3J5TW9kZS5JTlBVVFxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YT8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1bnNlbGVjdEV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2VsZWN0RXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuaW5wdXQpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2RhdGE/LnRpdGxlfVxyXG4gICAgICAgIDwvVGFnPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZGF0YSA/IGFydGljbGUgOiBza2VsZXRvbjtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlVGFnLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQXJ0aWNsZUNhdGVnb3J5VHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL0FydGljbGVDYXRlZ29yeSc7XHJcbmltcG9ydCB7IEFwcFRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaGVtZSc7XHJcblxyXG5pbnRlcmZhY2UgQXJ0aWNsZVRhZ1Byb3BzIHtcclxuICAgIGRhdGE6IEFydGljbGVDYXRlZ29yeVR5cGU7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICB0aGVtZVByb3A/OiBBcHBUaGVtZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVUYWcgPSAocHJvcHM6IEFydGljbGVUYWdQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIHRoZW1lUHJvcCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmJsb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYmxvY2stLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgI1xyXG4gICAgICAgICAgICB7IGRhdGEudGl0bGUgfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgQXJ0aWNsZUNhdGVnb3J5LFxyXG4gICAgQXJ0aWNsZUNhdGVnb3J5TW9kZSxcclxufSBmcm9tICcuLi9BcnRpY2xlQ2F0ZWdvcnkvQXJ0aWNsZUNhdGVnb3J5JztcclxuaW1wb3J0IGNscyBmcm9tICcuL0dyaWRDYXRlZ29yeS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEFydGljbGVDYXRlZ29yeVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC90eXBlcy9BcnRpY2xlQ2F0ZWdvcnknO1xyXG5cclxuaW50ZXJmYWNlIEdyaWRDYXRlZ29yeVByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIHNob3dTa2VsZXRvbjogYm9vbGVhbjtcclxuICAgIGRhdGE6IEFydGljbGVDYXRlZ29yeVR5cGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRDYXRlZ29yeSA9IChwcm9wczogR3JpZENhdGVnb3J5UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBzaG93U2tlbGV0b24sXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgc2tlbGV0b24gPSAoXHJcbiAgICAgICAgbmV3IEFycmF5KDQpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxBcnRpY2xlQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBtb2RlPXtBcnRpY2xlQ2F0ZWdvcnlNb2RlLlNUQVRJQ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gKFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgICAmJiBkYXRhPy5sZW5ndGggPiAwXHJcbiAgICAgICAgJiYgZGF0YS5tYXAoKGl0ZW06IEFydGljbGVDYXRlZ29yeVR5cGUpID0+IChcclxuICAgICAgICAgICAgPEFydGljbGVDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIG1vZGU9e0FydGljbGVDYXRlZ29yeU1vZGUuU1RBVElDfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJsb2NrLCBjbGFzc05hbWUpfT5cclxuICAgICAgICAgICAgeyBzaG93U2tlbGV0b24gPyBza2VsZXRvbiA6IGNvbnRlbnQgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9MaXN0Q2F0ZWdvcnkubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge0FydGljbGVDYXRlZ29yeSwgQXJ0aWNsZUNhdGVnb3J5TW9kZSx9IGZyb20gJy4uL0FydGljbGVDYXRlZ29yeS9BcnRpY2xlQ2F0ZWdvcnknO1xyXG5pbXBvcnQge0FydGljbGVDYXRlZ29yeVR5cGV9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL0FydGljbGVDYXRlZ29yeSc7XHJcblxyXG5pbnRlcmZhY2UgTGlzdENhdGVnb3J5UHJvcHMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgc2hvd1NrZWxldG9uOiBib29sZWFuO1xyXG4gICAgc2VsZWN0ZWRJdGVtOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBkYXRhOiBBcnRpY2xlQ2F0ZWdvcnlUeXBlW10gfCB1bmRlZmluZWQ7XHJcbiAgICBzZWxlY3RFdmVudD86IChBcnRpY2xlQ2F0ZWdvcnlUeXBlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdENhdGVnb3J5ID0gKHByb3BzOiBMaXN0Q2F0ZWdvcnlQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIHNlbGVjdEV2ZW50LFxyXG4gICAgICAgIHNob3dTa2VsZXRvbixcclxuICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgc2tlbGV0b24gPSAoXHJcbiAgICAgICAgbmV3IEFycmF5KDUpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxBcnRpY2xlQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBtb2RlPXtBcnRpY2xlQ2F0ZWdvcnlNb2RlLlNUQVRJQ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gKFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgICAmJiBkYXRhPy5sZW5ndGggPiAwXHJcbiAgICAgICAgJiYgZGF0YS5tYXAoKGl0ZW06IEFydGljbGVDYXRlZ29yeVR5cGUpID0+IChcclxuICAgICAgICAgICAgPEFydGljbGVDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50PXtzZWxlY3RFdmVudH1cclxuICAgICAgICAgICAgICAgIG1vZGU9e0FydGljbGVDYXRlZ29yeU1vZGUuSU5QVVR9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17c2VsZWN0ZWRJdGVtID09PSBpdGVtLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5uYXYsIGNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICB7IHNob3dTa2VsZXRvbiA/IHNrZWxldG9uIDogY29udGVudCB9XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0xpc3RUYWdzLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBMaXN0VGFnc1Byb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0VGFncyA9IChwcm9wczogTGlzdFRhZ3NQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5ibG9jaywgY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgR3JpZENhdGVnb3J5IH0gZnJvbSAnNF9lbnRpdGllcy9DYXRlZ29yeSc7XHJcbmltcG9ydCBncmlkIGZyb20gJzVfc2hhcmVkL2Nzcy9ncmlkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEljb24gZnJvbSAnNV9zaGFyZWQvYXNzZXRzL2ljb25zL2Fycm93LW5leHQuc3ZnJztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgUm91dGVyUGF0aCB9IGZyb20gJzVfc2hhcmVkL2NvbmZpZy9yb3V0ZXIvcm91dGVyQ29uZmlnJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVEZXYubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBcnRpY2xlRGV2VHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL0FydGljbGVEZXYnO1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVEZXZQcm9wcyB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICB0aGVtZVByb3A/OiBBcHBUaGVtZTtcclxuICAgIGRhdGE/OiBBcnRpY2xlRGV2VHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVEZXYgPSAocHJvcHM6IEFydGljbGVEZXZQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgdGhlbWVQcm9wLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICAgIGNvbnN0IHNrZWxldG9uID0gdXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuYmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BibG9jay0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzWydibG9jay0tc2tlbGV0b24nXSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICApLCBbZGF0YSwgdGhlbWVQcm9wLCB0aGVtZV0pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IChcclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICB0bz17YCR7Um91dGVyUGF0aC5kZXZfZGV0YWlsfSR7ZGF0YT8uaWR9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmJsb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYmxvY2stLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZ3JpZC5ncmlkLCBjbHMuZ3JpZCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZ3JpZFsnZ3JpZF9fY29sLTInXSwgZ3JpZFsnZ3JpZF9fY29sLW1vYi0zJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy50aXRsZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE/LnRpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkWydncmlkX19jb2wtbW9iLTEnXSwgY2xzWydjZWxsLW1vYmlsZSddKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzLmljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzWydpY29uLS1tb2JpbGUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHNbYGljb24tLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZ3JpZFsnZ3JpZF9fY29sLTInXSwgZ3JpZFsnZ3JpZF9fY29sLW1vYi00J10pfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMubWFpbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2tlbGV0b249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YT8udGFncz8uZGF0YSB8fCBbXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzLmljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsc1snaWNvbi0tZGVza3RvcCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHNbYGljb24tLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApLCBbZGF0YSwgdGhlbWVQcm9wLCB0aGVtZV0pO1xyXG5cclxuICAgIHJldHVybiBkYXRhID8gY29udGVudCA6IHNrZWxldG9uO1xyXG59O1xyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgRW5kIH0gZnJvbSAnNV9zaGFyZWQvdWkvRW5kL0VuZCc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9HcmlkRGV2Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQXJ0aWNsZURldiB9IGZyb20gJy4uL0FydGljbGVEZXYvQXJ0aWNsZURldic7XHJcbmltcG9ydCB7IEFydGljbGVEZXZUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvdHlwZXMvQXJ0aWNsZURldic7XHJcblxyXG5pbnRlcmZhY2UgTGlzdERldlByb3BzIHtcclxuICAgIHNob3dFbmQ/OiBib29sZWFuO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgc2hvd1NrZWxldG9uPzogYm9vbGVhbjtcclxuICAgIGRhdGE6IEFydGljbGVEZXZUeXBlW10gfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZERldiA9IChwcm9wczogTGlzdERldlByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBzaG93RW5kLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBzaG93U2tlbGV0b24sXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgc2tlbGV0b24gPSAoXHJcbiAgICAgICAgbmV3IEFycmF5KDIpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8QXJ0aWNsZURldiAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICAgICYmIGRhdGE/Lmxlbmd0aCA+IDBcclxuICAgICAgICAmJiBkYXRhPy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8QXJ0aWNsZURldlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJsb2NrKX0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmxpc3QsIGNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgeyBzaG93U2tlbGV0b24gPyBza2VsZXRvbiA6IGNvbnRlbnQgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICB7c2hvd0VuZCAmJiA8RW5kIC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQge1xyXG4gICAgQXJ0aWNsZUNhdGVnb3J5LFxyXG4gICAgQXJ0aWNsZUNhdGVnb3J5TW9kZSxcclxufSBmcm9tICc0X2VudGl0aWVzL0NhdGVnb3J5JztcclxuaW1wb3J0IHVzZUhlaWdodCBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZUhlaWdodCc7XHJcbmltcG9ydCB7IEFwcFRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaGVtZSc7XHJcbmltcG9ydCB7IFJvdXRlclBhdGggfSBmcm9tICc1X3NoYXJlZC9jb25maWcvcm91dGVyL3JvdXRlckNvbmZpZyc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlUGhvdG8ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBcnRpY2xlUGhvdG9UeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvdHlwZXMvQXJ0aWNsZVBob3RvJztcclxuXHJcbmludGVyZmFjZSBBcnRpY2xlUGhvdG9Qcm9wcyB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICB0aGVtZVByb3A/OiBBcHBUaGVtZTtcclxuICAgIGRhdGE/OiBBcnRpY2xlUGhvdG9UeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXJ0aWNsZVBob3RvID0gKHByb3BzOiBBcnRpY2xlUGhvdG9Qcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgdGhlbWVQcm9wLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG4gICAgY29uc3QgZWxSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBoZWlnaHRFbCA9IHVzZUhlaWdodChlbFJlZiwgMC44Mik7XHJcbiAgICBjb25zdCBwcmV2aWV3VXJsID0gZGF0YT8ubWFpbj8ucHJldmlldz8uZGF0YT8uZm9ybWF0cz8ubGFyZ2U/LnVybFxyXG4gICAgICAgIHx8IGRhdGE/Lm1haW4/LnByZXZpZXc/LmRhdGE/LmZvcm1hdHM/Lm1lZGl1bT8udXJsXHJcbiAgICAgICAgfHwgZGF0YT8ubWFpbj8ucHJldmlldz8uZGF0YT8uZm9ybWF0cz8uc21hbGw/LnVybCB8fCAnJztcclxuICAgIGNvbnN0IGFsdFRleHQgPSBkYXRhPy5tYWluPy5wcmV2aWV3Py5kYXRhPy5hbHRlcm5hdGl2ZVRleHQgfHwgJyMnO1xyXG5cclxuICAgIGNvbnN0IHNrZWxldG9uID0gdXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e2VsUmVmfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0RWx9cHhgLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuYXJ0aWNsZSxcclxuICAgICAgICAgICAgICAgICAgICBjbHNbYGFydGljbGUtLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1snYXJ0aWNsZS0tc2tlbGV0b24nXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgKSwgW2hlaWdodEVsLCBjbGFzc05hbWUsIHRoZW1lUHJvcCwgdGhlbWUsIGRhdGFdKTtcclxuXHJcbiAgICBjb25zdCBhcnRpY2xlID0gdXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgcmVmPXtlbFJlZn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodEVsfXB4YCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdG89e2Ake1JvdXRlclBhdGgucGhvdG9fZGV0YWlsfSR7ZGF0YT8uaWR9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmFydGljbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BhcnRpY2xlLS0ke3RoZW1lUHJvcCB8fCB0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE/Lm1haW4/LnNob3dQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAmJiBwcmV2aWV3VXJsXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHBpY3R1cmUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5waWN0dXJlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtfX0JBU0VfVVJMX199JHtwcmV2aWV3VXJsfWB9IGFsdD17YWx0VGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLm1haW4pfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5tYWluPy5wcmV2aWV3VGl0bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzW2B0aXRsZS0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1haW4ucHJldmlld1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE/Lm1haW4/LnByZXZpZXdDYXB0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzLmNhcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsc1tgY2FwdGlvbi0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYWluLnByZXZpZXdDYXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YT8uY2F0ZWdvcnk/LmRhdGFcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YT8uY2F0ZWdvcnk/LmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e0FydGljbGVDYXRlZ29yeU1vZGUuU1RBVElDfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApLCBbaGVpZ2h0RWwsIGNsYXNzTmFtZSwgZGF0YSwgdGhlbWVQcm9wLCB0aGVtZV0pO1xyXG5cclxuICAgIHJldHVybiBkYXRhID8gYXJ0aWNsZSA6IHNrZWxldG9uO1xyXG59O1xyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgRW5kIH0gZnJvbSAnNV9zaGFyZWQvdWkvRW5kL0VuZCc7XHJcbmltcG9ydCBncmlkIGZyb20gJzVfc2hhcmVkL2Nzcy9ncmlkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IGNscyBmcm9tICcuL0dyaWRQaG90by5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEFydGljbGVQaG90byB9IGZyb20gJy4uL0FydGljbGVQb3N0L0FydGljbGVQaG90byc7XHJcbmltcG9ydCB7IEFydGljbGVQaG90b1R5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC90eXBlcy9BcnRpY2xlUGhvdG8nO1xyXG5cclxuaW50ZXJmYWNlIEdyaWRQb3N0c1Byb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGRhdGE/OiBBcnRpY2xlUGhvdG9UeXBlW107XHJcbiAgICBzaG93U2tlbGV0b24/OiBib29sZWFuO1xyXG4gICAgc2hvd0VuZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRQaG90byA9IChwcm9wczogR3JpZFBvc3RzUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHNob3dTa2VsZXRvbixcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgc2hvd0VuZCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBza2VsZXRvbiA9IChcclxuICAgICAgICBuZXcgQXJyYXkoMTIpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGdyaWRbJ2dyaWRfX2NvbC0yJ10sIGdyaWRbJ2dyaWRfX2NvbC1tb2ItNCddKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFydGljbGVQaG90byAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gKFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgICAmJiBkYXRhPy5sZW5ndGggPiAwXHJcbiAgICAgICAgJiYgZGF0YS5tYXAoKGl0ZW06IEFydGljbGVQaG90b1R5cGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb3BUaGVtZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtPy5tYWluPy5zaG93UHJldmlldykge1xyXG4gICAgICAgICAgICAgICAgcHJvcFRoZW1lID0gaXRlbT8ubWFpbj8ucHJldmlld0ludmVydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBBcHBUaGVtZS5EQVJLXHJcbiAgICAgICAgICAgICAgICAgICAgOiBBcHBUaGVtZS5MSUdIVDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkWydncmlkX19jb2wtMiddLCBncmlkWydncmlkX19jb2wtbW9iLTQnXSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVQaG90b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVByb3A9e3Byb3BUaGVtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYmxvY2spfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZ3JpZC5ncmlkLCBjbHMuZ3JpZCwgY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgICAgICAgICB7IHNob3dTa2VsZXRvbiA/IHNrZWxldG9uIDogY29udGVudCB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0VuZCAmJiA8RW5kIC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQge1xyXG4gICAgQXJ0aWNsZUNhdGVnb3J5LFxyXG4gICAgQXJ0aWNsZUNhdGVnb3J5TW9kZSxcclxufSBmcm9tICc0X2VudGl0aWVzL0NhdGVnb3J5JztcclxuaW1wb3J0IHVzZUhlaWdodCBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZUhlaWdodCc7XHJcbmltcG9ydCB7IEFwcFRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaGVtZSc7XHJcbmltcG9ydCB7IFJvdXRlclBhdGggfSBmcm9tICc1X3NoYXJlZC9jb25maWcvcm91dGVyL3JvdXRlckNvbmZpZyc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlUG9zdC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFBvc3RBcnRpY2xlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL1Bvc3RBcnRpY2xlJztcclxuXHJcbmludGVyZmFjZSBBcnRpY2xlUG9zdFByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIHRoZW1lUHJvcD86IEFwcFRoZW1lO1xyXG4gICAgZGF0YT86IFBvc3RBcnRpY2xlVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVQb3N0ID0gKHByb3BzOiBBcnRpY2xlUG9zdFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB0aGVtZVByb3AsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBlbFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGhlaWdodEVsID0gdXNlSGVpZ2h0KGVsUmVmLCAxLjE1KTtcclxuICAgIGNvbnN0IHByZXZpZXdVcmwgPSBkYXRhPy5tYWluPy5wcmV2aWV3Py5kYXRhPy5mb3JtYXRzPy5sYXJnZT8udXJsXHJcbiAgICAgICAgfHwgZGF0YT8ubWFpbj8ucHJldmlldz8uZGF0YT8uZm9ybWF0cz8ubWVkaXVtPy51cmxcclxuICAgICAgICB8fCBkYXRhPy5tYWluPy5wcmV2aWV3Py5kYXRhPy5mb3JtYXRzPy5zbWFsbD8udXJsIHx8ICcnO1xyXG4gICAgY29uc3QgYWx0VGV4dCA9IGRhdGE/Lm1haW4/LnByZXZpZXc/LmRhdGE/LmFsdGVybmF0aXZlVGV4dCB8fCAnIyc7XHJcblxyXG4gICAgY29uc3Qgc2tlbGV0b24gPSB1c2VNZW1vKCgpID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17ZWxSZWZ9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHRFbH1weGAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGNscy5hcnRpY2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYXJ0aWNsZS0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzWydhcnRpY2xlLS1za2VsZXRvbiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICApLCBbaGVpZ2h0RWwsIGNsYXNzTmFtZSwgdGhlbWVQcm9wLCB0aGVtZV0pO1xyXG5cclxuICAgIGNvbnN0IGFydGljbGUgPSB1c2VNZW1vKCgpID0+IChcclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICByZWY9e2VsUmVmfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0RWx9cHhgLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0bz17YCR7Um91dGVyUGF0aC5wb3N0X2RldGFpbH0ke2RhdGE/LmlkfWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGNscy5hcnRpY2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYXJ0aWNsZS0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhPy5tYWluPy5zaG93UHJldmlld1xyXG4gICAgICAgICAgICAgICAgJiYgcHJldmlld1VybFxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwaWN0dXJlIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMucGljdHVyZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7X19CQVNFX1VSTF9ffSR7cHJldmlld1VybH1gfSBhbHQ9e2FsdFRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5tYWluKX0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YT8ubWFpbj8ucHJldmlld1RpdGxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsc1tgdGl0bGUtLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYWluLnByZXZpZXdUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPy5tYWluPy5wcmV2aWV3Q2FwdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscy5jYXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHNbYGNhcHRpb24tLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFpbi5wcmV2aWV3Q2FwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE/LmNhdGVnb3J5Py5kYXRhXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nscy50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGE/LmNhdGVnb3J5Py5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVByb3A9e3RoZW1lUHJvcCB8fCB0aGVtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17QXJ0aWNsZUNhdGVnb3J5TW9kZS5TVEFUSUN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICksIFtoZWlnaHRFbCwgY2xhc3NOYW1lLCBkYXRhLCB0aGVtZVByb3AsIHRoZW1lXSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGEgPyBhcnRpY2xlIDogc2tlbGV0b247XHJcbn07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBFbmQgfSBmcm9tICc1X3NoYXJlZC91aS9FbmQvRW5kJztcclxuaW1wb3J0IGdyaWQgZnJvbSAnNV9zaGFyZWQvY3NzL2dyaWQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBcHBUaGVtZSB9IGZyb20gJzVfc2hhcmVkL2NvbmZpZy9UaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vR3JpZFBvc3RzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQXJ0aWNsZVBvc3QgfSBmcm9tICcuLi9BcnRpY2xlUG9zdC9BcnRpY2xlUG9zdCc7XHJcbmltcG9ydCB7IFBvc3RBcnRpY2xlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL1Bvc3RBcnRpY2xlJztcclxuXHJcbmludGVyZmFjZSBHcmlkUG9zdHNQcm9wcyB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBkYXRhPzogUG9zdEFydGljbGVUeXBlW107XHJcbiAgICBzaG93U2tlbGV0b24/OiBib29sZWFuO1xyXG4gICAgc2hvd0VuZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRQb3N0cyA9IChwcm9wczogR3JpZFBvc3RzUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHNob3dTa2VsZXRvbixcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgc2hvd0VuZCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBza2VsZXRvbiA9IChcclxuICAgICAgICBuZXcgQXJyYXkoMTIpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wtMSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wtbW9iLTInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFsnZ3JpZF9fY29sLXgtbW9iLTQnXSxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBcnRpY2xlUG9zdCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gKFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgICAmJiBkYXRhPy5sZW5ndGggPiAwXHJcbiAgICAgICAgJiYgZGF0YS5tYXAoKGl0ZW06IFBvc3RBcnRpY2xlVHlwZSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvcFRoZW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0/Lm1haW4/LnNob3dQcmV2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wVGhlbWUgPSBpdGVtPy5tYWluPy5wcmV2aWV3SW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICA/IEFwcFRoZW1lLkRBUktcclxuICAgICAgICAgICAgICAgICAgICA6IEFwcFRoZW1lLkxJR0hUO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbJ2dyaWRfX2NvbC0xJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wtbW9iLTInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbJ2dyaWRfX2NvbC14LW1vYi00J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVQb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lUHJvcD17cHJvcFRoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5ibG9jayl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkLmdyaWQsIGNscy5ncmlkLCBjbGFzc05hbWUpfT5cclxuICAgICAgICAgICAgICAgIHsgc2hvd1NrZWxldG9uID8gc2tlbGV0b24gOiBjb250ZW50IH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93RW5kICYmIDxFbmQgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0VuZC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgRW5kUHJvcHMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgdGhlbWVQcm9wPzogQXBwVGhlbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFbmQgPSAocHJvcHM6IEVuZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdGhlbWVQcm9wLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJsb2NrLCBjbHNbYGVkaXRvci0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sIGNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICB7IHQoJ2FydGljbGVzTWVzc2FnZScpIH1cclxuICAgICAgICA8L3A+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgdXNlTGF5b3V0TW9kZSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZUxheW91dE1vZGUnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vTWFpbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgTWFpblByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKHByb3BzOiBNYWluUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgbGF5b3V0TW9kZSA9IHVzZUxheW91dE1vZGUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGNscy5ibG9jayxcclxuICAgICAgICAgICAgICAgICAgICBjbHNbYGJsb2NrLS0ke2xheW91dE1vZGV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay1ZNzc4WiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMCAyMnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1sYWJlbC11SnNQciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNjY7XG59XG4uc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rMSksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5biszKSwgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzQpIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKSwgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzIpLCAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rNSksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis2KSB7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis3KSB7XG4gIHdpZHRoOiAxNzBweDtcbn1cbi5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis4KSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXRoZW1lLWxpZ2h0LXpxbTVyIHtcbiAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS10aGVtZS1saWdodC16cW01cjpub3QoLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19saW5rLS1za2VsZXRvbi1pamxVQSkge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXByaW1hcnkpO1xufVxuLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tdGhlbWUtbGlnaHQtenFtNXIuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1hY3RpdmUtSGVNUFYge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS10aGVtZS1kYXJrLWJlV1ZjIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xufVxuLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tdGhlbWUtZGFyay1iZVdWYzpub3QoLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19saW5rLS1za2VsZXRvbi1pamxVQSkge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1wcmltYXJ5KTtcbn1cbi5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXRoZW1lLWRhcmstYmVXVmMuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1hY3RpdmUtSGVNUFYge1xuICBjb2xvcjogdmFyKC0tYmctZGFyayk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2lucHV0LVZuSVA2IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLVk3NzhaIHtcbiAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzEpLCAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rMyksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis0KSB7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKSwgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzIpLCAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rNSksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis2KSB7XG4gICAgd2lkdGg6IDk1cHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzcpIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzgpIHtcbiAgICB3aWR0aDogMTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XG4gIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stWTc3OFoge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDNweCAxMnB4O1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bisxKSwgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzMpLCAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rNCksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis4KSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzIpLCAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rNiksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis3KSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKSwgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzUpIHtcbiAgICB3aWR0aDogODVweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvQXJ0aWNsZUNhdGVnb3J5L0FydGljbGVDYXRlZ29yeS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBRUk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUVRO0VBR0ksWUFBQTtBQUZaO0FBS1E7RUFJSSxZQUFBO0FBTlo7QUFTUTtFQUNJLFlBQUE7QUFQWjtBQVVRO0VBQ0ksWUFBQTtBQVJaO0FBWUk7RUFDSSwwQkFBQTtBQVZSO0FBWVE7RUFDSSxxQ0FBQTtBQVZaO0FBYVE7RUFDSSwyQkFBQTtFQUNBLHFDQUFBO0FBWFo7QUFlSTtFQUNJLDJCQUFBO0FBYlI7QUFlUTtFQUNJLHNDQUFBO0FBYlo7QUFnQlE7RUFDSSxxQkFBQTtFQUNBLHNDQUFBO0FBZFo7O0FBbUJBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBaEJKOztBQW1CQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQWhCTjtFQW1CVTtJQUdJLFdBQUE7RUFuQmQ7RUFzQlU7SUFJSSxXQUFBO0VBdkJkO0VBMEJVO0lBQ0ksWUFBQTtFQXhCZDtFQTJCVTtJQUNJLFlBQUE7RUF6QmQ7QUFDRjtBQThCQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUE1Qk47RUErQlU7SUFJSSxXQUFBO0VBaENkO0VBbUNVO0lBR0ksV0FBQTtFQW5DZDtFQXNDVTtJQUVJLFdBQUE7RUFyQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjJweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgbWluLWhlaWdodDogNDhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAmLS1sYWJlbCB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tc2tlbGV0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDY2O1xcclxcblxcclxcbiAgICAgICAgJjpudGgtY2hpbGQoOW4gKyAxKSxcXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDluICsgMyksXFxyXFxuICAgICAgICAmOm50aC1jaGlsZCg5biArIDQpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOm50aC1jaGlsZCg5biksXFxyXFxuICAgICAgICAmOm50aC1jaGlsZCg5biArIDIpLFxcclxcbiAgICAgICAgJjpudGgtY2hpbGQoOW4gKyA1KSxcXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDluICsgNikge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDluICsgNykge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDluICsgOCkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG5cXHJcXG4gICAgICAgICY6bm90KC5saW5rLS1za2VsZXRvbikge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstcHJpbWFyeSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLmJsb2NrLS1hY3RpdmUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcblxcclxcbiAgICAgICAgJjpub3QoLmxpbmstLXNrZWxldG9uKSB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtcHJpbWFyeSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLmJsb2NrLS1hY3RpdmUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIxcHg7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiA0MnB4O1xcclxcblxcclxcbiAgICAgICAgJi0tc2tlbGV0b24ge1xcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgMSksXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOW4gKyAzKSxcXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDQpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluKSxcXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDIpLFxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgNSksXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOW4gKyA2KSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDcpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDgpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNweCAxMnB4O1xcclxcblxcclxcbiAgICAgICAgJi0tc2tlbGV0b24ge1xcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgMSksXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOW4gKyAzKSxcXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDQpLFxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgOCkge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOW4gKyAyKSxcXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDYpLFxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgNykge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOW4pLFxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgNSkge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogODVweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay1ZNzc4WmAsXG5cdFwiYmxvY2stLWxhYmVsXCI6IGBzcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLWxhYmVsLXVKc1ByYCxcblx0XCJibG9jay0tc2tlbGV0b25cIjogYHNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkxgLFxuXHRcImJsb2NrLS10aGVtZS1saWdodFwiOiBgc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS10aGVtZS1saWdodC16cW01cmAsXG5cdFwibGluay0tc2tlbGV0b25cIjogYHNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19saW5rLS1za2VsZXRvbi1pamxVQWAsXG5cdFwiYmxvY2stLWFjdGl2ZVwiOiBgc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1hY3RpdmUtSGVNUFZgLFxuXHRcImJsb2NrLS10aGVtZS1kYXJrXCI6IGBzcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXRoZW1lLWRhcmstYmVXVmNgLFxuXHRcImlucHV0XCI6IGBzcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9faW5wdXQtVm5JUDZgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVUYWctQXJ0aWNsZVRhZy1tb2R1bGVfX2Jsb2NrLWdCNUlKIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZVRhZy1BcnRpY2xlVGFnLW1vZHVsZV9fYmxvY2stZ0I1SUoge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVUYWctQXJ0aWNsZVRhZy1tb2R1bGVfX2Jsb2NrLWdCNUlKIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L3VpL0FydGljbGVUYWcvQXJ0aWNsZVRhZy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxlQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0k7SUFDSSxlQUFBO0VBQU47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvY2sge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJibG9ja1wiOiBgc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZVRhZy1BcnRpY2xlVGFnLW1vZHVsZV9fYmxvY2stZ0I1SUpgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUdyaWRDYXRlZ29yeS1HcmlkQ2F0ZWdvcnktbW9kdWxlX19ibG9jay1SdlAyYyB7XG4gIGdhcDogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9HcmlkQ2F0ZWdvcnkvR3JpZENhdGVnb3J5Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksUUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZ2FwOiA0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUdyaWRDYXRlZ29yeS1HcmlkQ2F0ZWdvcnktbW9kdWxlX19ibG9jay1SdlAyY2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktTGlzdENhdGVnb3J5LUxpc3RDYXRlZ29yeS1tb2R1bGVfX25hdi1uOFliUyB7XG4gIGdhcDogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9MaXN0Q2F0ZWdvcnkvTGlzdENhdGVnb3J5Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksUUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdiB7XFxyXFxuICAgIGdhcDogNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5hdlwiOiBgc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktTGlzdENhdGVnb3J5LUxpc3RDYXRlZ29yeS1tb2R1bGVfX25hdi1uOFliU2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktTGlzdFRhZ3MtTGlzdFRhZ3MtbW9kdWxlX19ibG9jay1UWDhGOSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweCAxNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1MaXN0VGFncy1MaXN0VGFncy1tb2R1bGVfX2Jsb2NrLVRYOEY5IHtcbiAgICBnYXA6IDhweCAxNHB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktTGlzdFRhZ3MtTGlzdFRhZ3MtbW9kdWxlX19ibG9jay1UWDhGOSB7XG4gICAgZ2FwOiA2cHggMTBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvTGlzdFRhZ3MvTGlzdFRhZ3MubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksYUFBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJO0lBQ0ksYUFBQTtFQUFOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4IDE2cHg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGdhcDogOHB4IDE0cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGdhcDogNnB4IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUxpc3RUYWdzLUxpc3RUYWdzLW1vZHVsZV9fYmxvY2stVFg4RjlgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ibG9jay1GcnBaVSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtaW4taGVpZ2h0OiAxNTVweDtcbiAgcGFkZGluZzogNTBweCA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBvcGFjaXR5O1xufVxuLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ibG9jay0tc2tlbGV0b24tSVV4WTkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ibG9jay1GcnBaVTpob3ZlciwgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ibG9jay1GcnBaVTpmb2N1cyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fYmxvY2stLXRoZW1lLWxpZ2h0LXB0TWFOIHtcbiAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XG59XG4uc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2Jsb2NrLS10aGVtZS1kYXJrLVN5U0JxIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XG59XG5cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fZ3JpZC13VW1QayB7XG4gIGdhcDogMjBweDtcbn1cblxuLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX190aXRsZS13b0EwbiB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19tYWluLW1DaVFaIHtcbiAgZ2FwOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9faWNvbi1HMGhFZSB7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9faWNvbi0tdGhlbWUtbGlnaHQtY3JETU4ge1xuICBmaWxsOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xufVxuLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19pY29uLS10aGVtZS1kYXJrLVRuYmFhIHtcbiAgZmlsbDogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XG59XG5cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fY2VsbC1tb2JpbGUtalZWTUYge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fYmxvY2stRnJwWlUge1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX190aXRsZS13b0EwbiB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9faWNvbi1HMGhFZSB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2Jsb2NrLUZycFpVIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2dyaWQtd1VtUGsge1xuICAgIGdhcDogMTZweDtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX3RpdGxlLXdvQTBuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19tYWluLW1DaVFaIHtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19pY29uLUcwaEVlIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19pY29uLS1kZXNrdG9wLURYS3ZzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2NlbGwtbW9iaWxlLWpWVk1GIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0FydGljbGVEZXYvQXJ0aWNsZURldi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQUNKO0FBQ0k7RUFDSSxzQkFBQTtBQUNSO0FBRUk7RUFFSSxZQUFBO0FBRFI7QUFJSTtFQUNJLDBCQUFBO0VBQ0EscUNBQUE7QUFGUjtBQUtJO0VBQ0ksMkJBQUE7RUFDQSxvQ0FBQTtBQUhSOztBQU9BO0VBQ0ksU0FBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtBQUpKOztBQU9BO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUpKO0FBTUk7RUFDSSx5QkFBQTtBQUpSO0FBT0k7RUFDSSwwQkFBQTtBQUxSOztBQVNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxpQkFBQTtFQU5OO0VBU0U7SUFDSSxlQUFBO0VBUE47RUFVRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBUk47QUFDRjtBQVdBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBVE47RUFZRTtJQUNJLFNBQUE7RUFWTjtFQWFFO0lBQ0ksZUFBQTtFQVhOO0VBY0U7SUFDSSxTQUFBO0VBWk47RUFlRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7RUFiTjtFQWVNO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0VBYlY7RUFpQkU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtFQWZOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE1NXB4O1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDYwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIG9wYWNpdHk7XFxyXFxuXFxyXFxuICAgICYtLXNrZWxldG9uIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlcixcXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDM4cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gICAgd2lkdGg6IDU1cHg7XFxyXFxuICAgIGhlaWdodDogNTVweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBmaWxsOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtbW9iaWxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgcGFkZGluZzogMzVweDtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmljb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDQ4cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZ3JpZCB7XFxyXFxuICAgICAgICBnYXA6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbiB7XFxyXFxuICAgICAgICBnYXA6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmljb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcXHJcXG5cXHJcXG4gICAgICAgICYtLWRlc2t0b3Age1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jZWxsLW1vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ibG9jay1GcnBaVWAsXG5cdFwiYmxvY2stLXNrZWxldG9uXCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUlVeFk5YCxcblx0XCJibG9jay0tdGhlbWUtbGlnaHRcIjogYHNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ibG9jay0tdGhlbWUtbGlnaHQtcHRNYU5gLFxuXHRcImJsb2NrLS10aGVtZS1kYXJrXCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fYmxvY2stLXRoZW1lLWRhcmstU3lTQnFgLFxuXHRcImdyaWRcIjogYHNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ncmlkLXdVbVBrYCxcblx0XCJ0aXRsZVwiOiBgc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX3RpdGxlLXdvQTBuYCxcblx0XCJtYWluXCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fbWFpbi1tQ2lRWmAsXG5cdFwiaWNvblwiOiBgc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2ljb24tRzBoRWVgLFxuXHRcImljb24tLXRoZW1lLWxpZ2h0XCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9faWNvbi0tdGhlbWUtbGlnaHQtY3JETU5gLFxuXHRcImljb24tLXRoZW1lLWRhcmtcIjogYHNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19pY29uLS10aGVtZS1kYXJrLVRuYmFhYCxcblx0XCJjZWxsLW1vYmlsZVwiOiBgc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2NlbGwtbW9iaWxlLWpWVk1GYCxcblx0XCJpY29uLS1kZXNrdG9wXCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9faWNvbi0tZGVza3RvcC1EWEt2c2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTRfZW50aXRpZXMtRGV2LXVpLUdyaWREZXYtR3JpZERldi1tb2R1bGVfX2Jsb2NrLUlzS091IHtcbiAgZ2FwOiA2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtRGV2LXVpLUdyaWREZXYtR3JpZERldi1tb2R1bGVfX2xpc3QtQ0JKNEsge1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtRGV2LXVpLUdyaWREZXYtR3JpZERldi1tb2R1bGVfX2l0ZW0tQjVDdmEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy00X2VudGl0aWVzLURldi11aS1HcmlkRGV2LUdyaWREZXYtbW9kdWxlX19ibG9jay1Jc0tPdSB7XG4gICAgZ2FwOiAzMHB4O1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1EZXYtdWktR3JpZERldi1HcmlkRGV2LW1vZHVsZV9fbGlzdC1DQko0SyB7XG4gICAgZ2FwOiA4cHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy80X2VudGl0aWVzL0Rldi91aS9HcmlkRGV2L0dyaWREZXYubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQU1BO0VBQ0k7SUFDSSxTQUFBO0VBSE47RUFNRTtJQUNJLFFBQUE7RUFKTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ibG9jayB7XFxyXFxuICAgIGdhcDogNjVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgZ2FwOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5saXN0IHtcXHJcXG4gICAgICAgIGdhcDogOHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktR3JpZERldi1HcmlkRGV2LW1vZHVsZV9fYmxvY2stSXNLT3VgLFxuXHRcImxpc3RcIjogYHNyYy00X2VudGl0aWVzLURldi11aS1HcmlkRGV2LUdyaWREZXYtbW9kdWxlX19saXN0LUNCSjRLYCxcblx0XCJpdGVtXCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktR3JpZERldi1HcmlkRGV2LW1vZHVsZV9faXRlbS1CNUN2YWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fYXJ0aWNsZS1VSXo0ayB7XG4gIGhlaWdodDogNTEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nLWwpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fYXJ0aWNsZS0tdGhlbWUtbGlnaHQtZTVhTjQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xufVxuLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2FydGljbGUtLXRoZW1lLWRhcmstd0hyUGsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XG59XG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fYXJ0aWNsZS0tc2tlbGV0b24taG1iUXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDY2O1xufVxuXG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fcGljdHVyZS1KS2hhXyB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX3BpY3R1cmUtSktoYV8gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX21haW4tbG1xTWkge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX190aXRsZS1mMzdoSCB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzhweDtcbn1cbi5zcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX190aXRsZS0tdGhlbWUtbGlnaHQteXpyUUkge1xuICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcbn1cbi5zcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX190aXRsZS0tdGhlbWUtZGFyay1JZEJxTiB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fY2FwdGlvbi11bmFQMCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5zcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19jYXB0aW9uLS10aGVtZS1saWdodC1IV1ZyUSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXNlY29uZGFyeSk7XG59XG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fY2FwdGlvbi0tdGhlbWUtZGFyay1XTTFzNyB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1zZWNvbmRhcnkpO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fdGFnLXNYUUFWIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2FydGljbGUtVUl6NGsge1xuICAgIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZy1tKTtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fdGl0bGUtZjM3aEgge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fY2FwdGlvbi11bmFQMCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fYXJ0aWNsZS1VSXo0ayB7XG4gICAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nLXMpO1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX190aXRsZS1mMzdoSCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19jYXB0aW9uLXVuYVAwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy80X2VudGl0aWVzL1Bob3RvL3VpL0FydGljbGVQb3N0L0FydGljbGVQaG90by5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFDSTtFQUNJLHFDQUFBO0FBQ1I7QUFFSTtFQUNJLG9DQUFBO0FBQVI7QUFHSTtFQUNJLHlCQUFBO0FBRFI7O0FBS0E7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFGUjs7QUFNQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUhKO0FBS0k7RUFDSSwwQkFBQTtBQUhSO0FBTUk7RUFDSSwwQkFBQTtBQUpSOztBQVFBO0VBQ0ksZUFBQTtBQUxKO0FBT0k7RUFDSSw0QkFBQTtBQUxSO0FBUUk7RUFDSSw2QkFBQTtBQU5SOztBQVVBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQVBKOztBQVVBO0VBQ0k7SUFDSSw4QkFBQTtFQVBOO0VBVUU7SUFDSSxlQUFBO0VBUk47RUFXRTtJQUNJLGVBQUE7RUFUTjtBQUNGO0FBWUE7RUFDSTtJQUNJLDhCQUFBO0VBVk47RUFhRTtJQUNJLGVBQUE7RUFYTjtFQWNFO0lBQ0ksZUFBQTtFQVpOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFydGljbGUge1xcclxcbiAgICBoZWlnaHQ6IDUxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZy1sKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXNrZWxldG9uIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNjY7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBpY3R1cmUge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDM4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM4cHg7XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWxpZ2h0IHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNhcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWxpZ2h0IHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXNlY29uZGFyeSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtc2Vjb25kYXJ5KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGFnIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmFydGljbGUge1xcclxcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nLW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcHRpb24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XFxyXFxuICAgIC5hcnRpY2xlIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZy1zKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJhcnRpY2xlXCI6IGBzcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19hcnRpY2xlLVVJejRrYCxcblx0XCJhcnRpY2xlLS10aGVtZS1saWdodFwiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fYXJ0aWNsZS0tdGhlbWUtbGlnaHQtZTVhTjRgLFxuXHRcImFydGljbGUtLXRoZW1lLWRhcmtcIjogYHNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2FydGljbGUtLXRoZW1lLWRhcmstd0hyUGtgLFxuXHRcImFydGljbGUtLXNrZWxldG9uXCI6IGBzcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19hcnRpY2xlLS1za2VsZXRvbi1obWJReWAsXG5cdFwicGljdHVyZVwiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fcGljdHVyZS1KS2hhX2AsXG5cdFwibWFpblwiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fbWFpbi1sbXFNaWAsXG5cdFwidGl0bGVcIjogYHNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX3RpdGxlLWYzN2hIYCxcblx0XCJ0aXRsZS0tdGhlbWUtbGlnaHRcIjogYHNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX3RpdGxlLS10aGVtZS1saWdodC15enJRSWAsXG5cdFwidGl0bGUtLXRoZW1lLWRhcmtcIjogYHNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX3RpdGxlLS10aGVtZS1kYXJrLUlkQnFOYCxcblx0XCJjYXB0aW9uXCI6IGBzcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19jYXB0aW9uLXVuYVAwYCxcblx0XCJjYXB0aW9uLS10aGVtZS1saWdodFwiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fY2FwdGlvbi0tdGhlbWUtbGlnaHQtSFdWclFgLFxuXHRcImNhcHRpb24tLXRoZW1lLWRhcmtcIjogYHNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2NhcHRpb24tLXRoZW1lLWRhcmstV00xczdgLFxuXHRcInRhZ1wiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fdGFnLXNYUUFWYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtNF9lbnRpdGllcy1QaG90by11aS1HcmlkUGhvdG8tR3JpZFBob3RvLW1vZHVsZV9fYmxvY2stWkNBNmcge1xuICBnYXA6IDY1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XG4gIC5zcmMtNF9lbnRpdGllcy1QaG90by11aS1HcmlkUGhvdG8tR3JpZFBob3RvLW1vZHVsZV9fYmxvY2stWkNBNmcge1xuICAgIGdhcDogMzBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzRfZW50aXRpZXMvUGhvdG8vdWkvR3JpZFBob3RvL0dyaWRQaG90by5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFNQTtFQUNJO0lBQ0ksU0FBQTtFQUhOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZ2FwOiA2NXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgZ2FwOiAzMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNF9lbnRpdGllcy1QaG90by11aS1HcmlkUGhvdG8tR3JpZFBob3RvLW1vZHVsZV9fYmxvY2stWkNBNmdgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19hcnRpY2xlLUtnV2s0IHtcbiAgaGVpZ2h0OiA1MTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiB2YXIoLS1jYXJkLXBhZGRpbmctbCk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xufVxuLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19hcnRpY2xlLS10aGVtZS1saWdodC1ERGx1biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XG59XG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2FydGljbGUtLXRoZW1lLWRhcmstUlBxR3oge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XG59XG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2FydGljbGUtLXNrZWxldG9uLXgyWUhnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA2Njtcbn1cblxuLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19waWN0dXJlLWMyOTVuIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX3BpY3R1cmUtYzI5NW4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19tYWluLWVlSTBJIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX3RpdGxlLUFLRmhvIHtcbiAgZm9udC1zaXplOiAzOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX3RpdGxlLS10aGVtZS1saWdodC1pMXpyVyB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xufVxuLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX190aXRsZS0tdGhlbWUtZGFyay1hWmV5TiB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2NhcHRpb24tcTJzV0sge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2NhcHRpb24tLXRoZW1lLWxpZ2h0LVg2SFRNIHtcbiAgY29sb3I6IHZhcigtLWRhcmstc2Vjb25kYXJ5KTtcbn1cbi5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fY2FwdGlvbi0tdGhlbWUtZGFyay1odzAzNSB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcbn1cblxuLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX190YWctZmpPbUsge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fYXJ0aWNsZS1LZ1drNCB7XG4gICAgaGVpZ2h0OiA0NjBweDtcbiAgICBwYWRkaW5nOiB2YXIoLS1jYXJkLXBhZGRpbmctbSk7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX190aXRsZS1BS0ZobyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fY2FwdGlvbi1xMnNXSyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2FydGljbGUtS2dXazQge1xuICAgIGhlaWdodDogMjYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nOiB2YXIoLS1jYXJkLXBhZGRpbmctcyk7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX190aXRsZS1BS0ZobyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fY2FwdGlvbi1xMnNXSyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNF9lbnRpdGllcy9Qb3N0L3VpL0FydGljbGVQb3N0L0FydGljbGVQb3N0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBQUNKO0FBQ0k7RUFDSSxxQ0FBQTtBQUNSO0FBRUk7RUFDSSxvQ0FBQTtBQUFSO0FBR0k7RUFDSSx5QkFBQTtBQURSOztBQUtBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBRlI7O0FBTUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFLSTtFQUNJLDBCQUFBO0FBSFI7QUFNSTtFQUNJLDBCQUFBO0FBSlI7O0FBUUE7RUFDSSxlQUFBO0FBTEo7QUFPSTtFQUNJLDRCQUFBO0FBTFI7QUFRSTtFQUNJLDJCQUFBO0FBTlI7O0FBVUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBUEo7O0FBVUE7RUFDSTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtFQVBOO0VBVUU7SUFDSSxlQUFBO0VBUk47RUFXRTtJQUNJLGVBQUE7RUFUTjtBQUNGO0FBWUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0VBVk47RUFhRTtJQUNJLGVBQUE7RUFYTjtFQWNFO0lBQ0ksZUFBQTtFQVpOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFydGljbGUge1xcclxcbiAgICBoZWlnaHQ6IDUxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZy1sKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWxpZ2h0IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tc2tlbGV0b24ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA2NjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGljdHVyZSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jYXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1zZWNvbmRhcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgY29sb3I6IHZhciggLS1saWdodC1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGFnIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xcclxcbiAgICAuYXJ0aWNsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQ2MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nLW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcHRpb24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XFxyXFxuICAgIC5hcnRpY2xlIHtcXHJcXG4gICAgICAgIGhlaWdodDogMjYwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nLXMpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcHRpb24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImFydGljbGVcIjogYHNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19hcnRpY2xlLUtnV2s0YCxcblx0XCJhcnRpY2xlLS10aGVtZS1saWdodFwiOiBgc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2FydGljbGUtLXRoZW1lLWxpZ2h0LUREbHVuYCxcblx0XCJhcnRpY2xlLS10aGVtZS1kYXJrXCI6IGBzcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fYXJ0aWNsZS0tdGhlbWUtZGFyay1SUHFHemAsXG5cdFwiYXJ0aWNsZS0tc2tlbGV0b25cIjogYHNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19hcnRpY2xlLS1za2VsZXRvbi14MllIZ2AsXG5cdFwicGljdHVyZVwiOiBgc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX3BpY3R1cmUtYzI5NW5gLFxuXHRcIm1haW5cIjogYHNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19tYWluLWVlSTBJYCxcblx0XCJ0aXRsZVwiOiBgc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX3RpdGxlLUFLRmhvYCxcblx0XCJ0aXRsZS0tdGhlbWUtbGlnaHRcIjogYHNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX190aXRsZS0tdGhlbWUtbGlnaHQtaTF6cldgLFxuXHRcInRpdGxlLS10aGVtZS1kYXJrXCI6IGBzcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fdGl0bGUtLXRoZW1lLWRhcmstYVpleU5gLFxuXHRcImNhcHRpb25cIjogYHNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19jYXB0aW9uLXEyc1dLYCxcblx0XCJjYXB0aW9uLS10aGVtZS1saWdodFwiOiBgc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2NhcHRpb24tLXRoZW1lLWxpZ2h0LVg2SFRNYCxcblx0XCJjYXB0aW9uLS10aGVtZS1kYXJrXCI6IGBzcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fY2FwdGlvbi0tdGhlbWUtZGFyay1odzAzNWAsXG5cdFwidGFnXCI6IGBzcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fdGFnLWZqT21LYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUdyaWRQb3N0cy1HcmlkUG9zdHMtbW9kdWxlX19ibG9jay1PeWdDbiB7XG4gIGdhcDogNjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy00X2VudGl0aWVzLVBvc3QtdWktR3JpZFBvc3RzLUdyaWRQb3N0cy1tb2R1bGVfX2Jsb2NrLU95Z0NuIHtcbiAgICBnYXA6IDMwcHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy80X2VudGl0aWVzL1Bvc3QvdWkvR3JpZFBvc3RzL0dyaWRQb3N0cy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFNQTtFQUNJO0lBQ0ksU0FBQTtFQUhOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZ2FwOiA2NXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgZ2FwOiAzMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUdyaWRQb3N0cy1HcmlkUG9zdHMtbW9kdWxlX19ibG9jay1PeWdDbmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTVfc2hhcmVkLXVpLUVuZC1FbmQtbW9kdWxlX19ibG9jay14M3dhSCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRW5kLUVuZC1tb2R1bGVfX2Jsb2NrLS10aGVtZS1saWdodC1ReFVXMSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXNlY29uZGFyeSk7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVuZC1FbmQtbW9kdWxlX19ibG9jay0tdGhlbWUtZGFyay1vZlpwdyB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1zZWNvbmRhcnkpO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xuICAuc3JjLTVfc2hhcmVkLXVpLUVuZC1FbmQtbW9kdWxlX19ibG9jay14M3dhSCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTVfc2hhcmVkLXVpLUVuZC1FbmQtbW9kdWxlX19ibG9jay14M3dhSCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNV9zaGFyZWQvdWkvRW5kL0VuZC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksNEJBQUE7QUFDUjtBQUVJO0VBQ0ksNkJBQUE7QUFBUjs7QUFJQTtFQUNJO0lBQ0ksZUFBQTtFQUROO0FBQ0Y7QUFJQTtFQUNJO0lBQ0ksZUFBQTtFQUZOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1zZWNvbmRhcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXNlY29uZGFyeSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNV9zaGFyZWQtdWktRW5kLUVuZC1tb2R1bGVfX2Jsb2NrLXgzd2FIYCxcblx0XCJibG9jay0tdGhlbWUtbGlnaHRcIjogYHNyYy01X3NoYXJlZC11aS1FbmQtRW5kLW1vZHVsZV9fYmxvY2stLXRoZW1lLWxpZ2h0LVF4VVcxYCxcblx0XCJibG9jay0tdGhlbWUtZGFya1wiOiBgc3JjLTVfc2hhcmVkLXVpLUVuZC1FbmQtbW9kdWxlX19ibG9jay0tdGhlbWUtZGFyay1vZlpwd2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTVfc2hhcmVkLXVpLU1haW4tTWFpbi1tb2R1bGVfX2Jsb2NrLUFkcFlyIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nLWJvdHRvbTogMTE1cHg7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtNV9zaGFyZWQtdWktTWFpbi1NYWluLW1vZHVsZV9fYmxvY2stQWRwWXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMTBweDtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy01X3NoYXJlZC11aS1NYWluLU1haW4tbW9kdWxlX19ibG9jay1BZHBZciB7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIH1cbiAgLnNyYy01X3NoYXJlZC11aS1NYWluLU1haW4tbW9kdWxlX19ibG9jay0tbGlzdC1NaklESSB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNV9zaGFyZWQvdWkvTWFpbi9NYWluLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHFCQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0k7SUFDSSxvQkFBQTtFQUFOO0VBRU07SUFDSSxrQkFBQTtFQUFWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTE1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcclxcblxcclxcbiAgICAgICAgJi0tbGlzdCB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNV9zaGFyZWQtdWktTWFpbi1NYWluLW1vZHVsZV9fYmxvY2stQWRwWXJgLFxuXHRcImJsb2NrLS1saXN0XCI6IGBzcmMtNV9zaGFyZWQtdWktTWFpbi1NYWluLW1vZHVsZV9fYmxvY2stLWxpc3QtTWpJRElgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlQ2F0ZWdvcnkubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlQ2F0ZWdvcnkubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZUNhdGVnb3J5Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVRhZy5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVUYWcubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVRhZy5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWRDYXRlZ29yeS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWRDYXRlZ29yeS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmlkQ2F0ZWdvcnkubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MaXN0Q2F0ZWdvcnkubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MaXN0Q2F0ZWdvcnkubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTGlzdENhdGVnb3J5Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTGlzdFRhZ3MubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MaXN0VGFncy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MaXN0VGFncy5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVEZXYubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlRGV2Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVEZXYubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmlkRGV2Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR3JpZERldi5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmlkRGV2Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVBob3RvLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVBob3RvLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVQaG90by5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWRQaG90by5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWRQaG90by5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmlkUGhvdG8ubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlUG9zdC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVQb3N0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVQb3N0Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR3JpZFBvc3RzLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR3JpZFBvc3RzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWRQb3N0cy5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0VuZC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0VuZC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FbmQubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NYWluLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWFpbi5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NYWluLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIk1ldGFQYWdlIiwicnRrQXBpIiwiUm91dGVzIiwiQ2F0ZWdvcnlNb2RlIiwiY2F0ZWdvcnlBcGkiLCJpbmplY3RFbmRwb2ludHMiLCJlbmRwb2ludHMiLCJidWlsZCIsImZldGNoQ2F0ZWdvcnlMaXN0IiwicXVlcnkiLCJtb2RlIiwidXJsIiwiREVWIiwiREVWX1RBR19MSVNUIiwiUE9TVF9DQVRfTElTVCIsInBhcmFtcyIsIl9saW1pdCIsInByb3ZpZGVzVGFncyIsIm92ZXJyaWRlRXhpc3RpbmciLCJ1c2VGZXRjaENhdGVnb3J5TGlzdCIsInVzZUZldGNoQ2F0ZWdvcnlMaXN0UXVlcnkiLCJBcnRpY2xlQ2F0ZWdvcnkiLCJBcnRpY2xlQ2F0ZWdvcnlNb2RlIiwiTGlzdENhdGVnb3J5IiwiR3JpZENhdGVnb3J5IiwiTGlzdFRhZ3MiLCJBcnRpY2xlVGFnIiwiZGV2QXBpIiwiZmV0Y2hEZXZMaXN0IiwiREVWU19MSVNUIiwiZmV0Y2hEZXZCeUlkIiwiaWQiLCJwb3B1bGF0ZSIsInRyYW5zZm9ybVJlc3BvbnNlIiwicmVzcG9uc2UiLCJkYXRhIiwidXNlRmV0Y2hEZXZCeUlkIiwidXNlRmV0Y2hEZXZCeUlkUXVlcnkiLCJ1c2VMYXp5RmV0Y2hEZXZMaXN0IiwidXNlTGF6eUZldGNoRGV2TGlzdFF1ZXJ5IiwiQXJ0aWNsZURldiIsIkdyaWREZXYiLCJnZXREZXZMaXN0IiwiZGV2TGlzdFJlZHVjZXIiLCJkZXZMaXN0QWN0aW9ucyIsImZldGNoTmV4dERldkxpc3QiLCJnZXREZXZMaXN0UGFnZSIsImdldERldkxpc3RDb3VudCIsImdldERldkxpc3RMb2FkaW5nIiwiZ2V0RGV2TGlzdENhdGVnb3J5IiwiaW5pdERldiIsInN0YXRlIiwiZGV2TGlzdCIsImlzTG9hZGluZyIsImdldERldkxpc3RQZXJQYWdlIiwicGVyUGFnZSIsInBhZ2UiLCJjb3VudCIsImNhdGVnb3J5IiwiY3JlYXRlQXN5bmNUaHVuayIsIlBhZ2luYXRpb25QYXJhbXMiLCJwcm9wcyIsInRodW5rQVBJIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInJlcGxhY2UiLCJsaXN0SW5kZXgiLCJsaXN0TGVuZ3RoIiwicGFnZU51bWJlciIsIlNJWkUiLCJQQUdFIiwic29ydCIsIlRBRyIsImdldERhdGEiLCJ0aGVuIiwibWV0YSIsImRhdGFNZXRob2QiLCJyZXBsYWNlRGF0YSIsImFkZERhdGEiLCJwb3N0TGlzdEFjdGlvbnMiLCJzZXRQYWdpbmF0aW9uIiwicGFnaW5hdGlvbiIsImNyZWF0ZVNsaWNlIiwiY3JlYXRlRW50aXR5QWRhcHRlciIsImRldkxpc3RBZGFwdGVyIiwic2VsZWN0SWQiLCJpdGVtIiwiZ2V0U2VsZWN0b3JzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiZXJyb3JzIiwidW5kZWZpbmVkIiwiaWRzIiwiZW50aXRpZXMiLCJkZXZMaXN0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRQYWdlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldExlbmd0aCIsImFkZE1hbnkiLCJzZXRBbGwiLCJwYWdlQ291bnQiLCJ0b2dnbGVDYXRlZ29yeSIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwicmVxdWVzdCIsImFkZE1hdGNoZXIiLCJtYXRjaFBlbmRpbmciLCJhcmciLCJvcmlnaW5hbEFyZ3MiLCJyZW1vdmVBbGwiLCJtYXRjaEZ1bGZpbGxlZCIsIm1hdGNoUmVqZWN0ZWQiLCJyZWR1Y2VyIiwiYWN0aW9ucyIsInBob3RvQXBpIiwiZmV0Y2hQaG90b0xpc3QiLCJQSE9UT19MSVNUIiwiZmV0Y2hQaG90b0J5SWQiLCJ1c2VGZXRjaFBob3RvQnlJZCIsInVzZUZldGNoUGhvdG9CeUlkUXVlcnkiLCJ1c2VMYXp5RmV0Y2hQaG90b0xpc3QiLCJ1c2VMYXp5RmV0Y2hQaG90b0xpc3RRdWVyeSIsIkdyaWRQaG90byIsImdldFBob3RvTGlzdCIsInBob3RvTGlzdFJlZHVjZXIiLCJwaG90b0xpc3RBY3Rpb25zIiwiZmV0Y2hOZXh0UGhvdG9MaXN0IiwiaW5pdFBob3RvTGlzdCIsImdldFBob3RvTGlzdENvdW50IiwiZ2V0UGhvdG9MaXN0TG9hZGluZyIsImdldFBob3RvTGlzdFBhZ2UiLCJwaG90b0xpc3QiLCJnZXRQaG90b0xpc3RQZXJQYWdlIiwicGhvdG9MaXN0QWRhcHRlciIsInBob3RvTGlzdFNsaWNlIiwicG9zdEFwaSIsImZldGNoUG9zdExpc3QiLCJQT1NUU19MSVNUIiwiZmV0Y2hQb3N0QnlJZCIsInVzZUZldGNoUG9zdEJ5SWQiLCJ1c2VGZXRjaFBvc3RCeUlkUXVlcnkiLCJ1c2VMYXp5RmV0Y2hQb3N0TGlzdCIsInVzZUxhenlGZXRjaFBvc3RMaXN0UXVlcnkiLCJHcmlkUG9zdHMiLCJnZXRQb3N0TGlzdCIsInBvc3RMaXN0UmVkdWNlciIsImZldGNoTmV4dFBvc3RMaXN0IiwiaW5pdFBvc3RMaXN0IiwiZ2V0UG9zdExpc3RDb3VudCIsImdldFBvc3RMaXN0TG9hZGluZyIsImdldFBvc3RMaXN0UGFnZSIsImdldFBvc3RMaXN0Q2F0ZWdvcnkiLCJwb3N0TGlzdCIsImdldFBvc3RMaXN0UGVyUGFnZSIsIkNBVCIsInBvc3RMaXN0QWRhcHRlciIsInBvc3RMaXN0U2xpY2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUhlaWdodCIsImVsZW1lbnRSZWYiLCJwcm9wb3J0aW9uIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwidXBkYXRlSGVpZ2h0Iiwid2lkdGgiLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJlYWN0IiwiSGVsbWV0IiwidXNlVHJhbnNsYXRpb24iLCJqc3giLCJfanN4IiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJqc3hzIiwiX2pzeHMiLCJ0IiwiY29udGVudExvYWRpbmciLCJjaGlsZHJlbiIsImNvbnRlbnQiLCJtZXRhVGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsIm1ldGFSb2JvdHMiLCJzdHJ1Y3R1cmVkRGF0YSIsInR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xhc3NOYW1lcyIsInVzZVRoZW1lIiwiY2xzIiwiY2xhc3NOYW1lIiwiaXNBY3RpdmUiLCJ0aGVtZVByb3AiLCJjbGlja0V2ZW50IiwidGhlbWUiLCJUYWciLCJTVEFUSUMiLCJzZWxlY3RFdmVudCIsInVuc2VsZWN0RXZlbnQiLCJza2VsZXRvbiIsImJsb2NrIiwiYXJ0aWNsZSIsIklOUFVUIiwidmFsdWUiLCJjaGVja2VkIiwib25DbGljayIsIm9uQ2hhbmdlIiwiaW5wdXQiLCJ0aXRsZSIsInNob3dTa2VsZXRvbiIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpbmRleCIsImxlbmd0aCIsIkFydGljbGVDYXRlZ29yeVR5cGUiLCJzZWxlY3RlZEl0ZW0iLCJuYXYiLCJ1c2VNZW1vIiwiTGluayIsImdyaWQiLCJJY29uIiwiUm91dGVyUGF0aCIsInRvIiwiZGV2X2RldGFpbCIsImljb24iLCJtYWluIiwidGFncyIsIkVuZCIsInNob3dFbmQiLCJsaXN0IiwidXNlUmVmIiwiQXJ0aWNsZVBob3RvIiwiZWxSZWYiLCJoZWlnaHRFbCIsInByZXZpZXdVcmwiLCJwcmV2aWV3IiwiZm9ybWF0cyIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJhbHRUZXh0IiwiYWx0ZXJuYXRpdmVUZXh0IiwicmVmIiwic3R5bGUiLCJwaG90b19kZXRhaWwiLCJzaG93UHJldmlldyIsInBpY3R1cmUiLCJzcmMiLCJfX0JBU0VfVVJMX18iLCJhbHQiLCJwcmV2aWV3VGl0bGUiLCJwcmV2aWV3Q2FwdGlvbiIsImNhcHRpb24iLCJ0YWciLCJBcHBUaGVtZSIsInByb3BUaGVtZSIsInByZXZpZXdJbnZlcnRlZCIsIkRBUksiLCJMSUdIVCIsIkFydGljbGVQb3N0IiwicG9zdF9kZXRhaWwiLCJ1c2VMYXlvdXRNb2RlIiwiTWFpbiIsImxheW91dE1vZGUiXSwic291cmNlUm9vdCI6IiJ9