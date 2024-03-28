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
    setPerPage: (state, action) => {
      state.perPage = action.payload;
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
/* harmony import */ var _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 5_shared/ui/Skeleton/Skeleton */ "./src/5_shared/ui/Skeleton/Skeleton.tsx");
/* harmony import */ var _ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArticleCategory.module.scss */ "./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






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
  const skeleton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    mode: _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_2__.SkeletonMode.BLOCK,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].block, _ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['block--skeleton'], _ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"][`block--${themeProp || theme}`], className)
  });
  const content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Tag, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].block, _ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"][`block--${themeProp || theme}`], _ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['block--content'], {
      [_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['block--label']]: mode === ArticleCategoryMode.INPUT
    }, {
      [_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['block--active']]: isActive
    }, className),
    children: [mode === ArticleCategoryMode.INPUT && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
      name: name,
      type: "radio",
      value: data?.id,
      checked: isActive,
      onClick: unselectEvent,
      onChange: selectEvent,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticleCategory_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].input)
    }), data?.title]
  });
  return data ? content : skeleton;
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _4_entities_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 4_entities/Category */ "./src/4_entities/Category/index.ts");
/* harmony import */ var _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/css/grid.module.scss */ "./src/5_shared/css/grid.module.scss");
/* harmony import */ var _5_shared_assets_icons_arrow_next_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/assets/icons/arrow-next.svg */ "./src/5_shared/assets/icons/arrow-next.svg");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! 5_shared/config/router/routerConfig */ "./src/5_shared/config/router/routerConfig.tsx");
/* harmony import */ var _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! 5_shared/ui/Skeleton/Skeleton */ "./src/5_shared/ui/Skeleton/Skeleton.tsx");
/* harmony import */ var _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ArticleDev.module.scss */ "./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const ArticleDev = props => {
  const {
    data,
    themeProp,
    className
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
  const skeleton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
    mode: _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__.SkeletonMode.BLOCK,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].block, _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"][`block--${themeProp || theme}`])
  }), [data, themeProp, theme]);
  const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
    to: `${_5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_6__.RouterPath.dev_detail}${data?.id}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].block, _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"][`block--${themeProp || theme}`], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].grid, _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].grid),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-mob-3']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].title),
          children: data?.title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-mob-1'], _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"]['cell-mobile']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_5_shared_assets_icons_arrow_next_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].icon, _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"]['icon--mobile'], _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"][`icon--${themeProp || theme}`])
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-2'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"]['grid__col-mob-4']),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].main),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_2__.GridCategory, {
            showSkeleton: false,
            data: data?.tags?.data || []
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_5_shared_assets_icons_arrow_next_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"].icon, _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"]['icon--desktop'], _ArticleDev_module_scss__WEBPACK_IMPORTED_MODULE_8__["default"][`icon--${themeProp || theme}`])
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _4_entities_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 4_entities/Category */ "./src/4_entities/Category/index.ts");
/* harmony import */ var _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/ui/Skeleton/Skeleton */ "./src/5_shared/ui/Skeleton/Skeleton.tsx");
/* harmony import */ var _5_shared_libs_hooks_useHeight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/libs/hooks/useHeight */ "./src/5_shared/libs/hooks/useHeight.ts");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! 5_shared/config/router/routerConfig */ "./src/5_shared/config/router/routerConfig.tsx");
/* harmony import */ var _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArticlePhoto.module.scss */ "./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











const ArticlePhoto = props => {
  const {
    data,
    themeProp,
    className
  } = props;
  const {
    theme
  } = (0,_5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const heightEl = (0,_5_shared_libs_hooks_useHeight__WEBPACK_IMPORTED_MODULE_4__["default"])(elRef, 0.82);
  const previewUrl = data?.main?.preview?.data?.formats?.large?.url || data?.main?.preview?.data?.formats?.medium?.url || data?.main?.preview?.data?.formats?.small?.url || '';
  const altText = data?.main?.preview?.data?.alternativeText || '#';
  const skeleton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    ref: elRef,
    style: {
      width: '100%',
      height: `${heightEl}px`
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].article, _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"][`article--${theme}`], _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['article--skeleton'], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
      mode: _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_3__.SkeletonMode.BLOCK,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].skeleton)
    })
  }), [heightEl, className, themeProp, theme, data]);
  const article = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    ref: elRef,
    style: {
      width: '100%',
      height: `${heightEl}px`
    },
    to: `${_5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_6__.RouterPath.photo_detail}${data?.id}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].article, _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"]['article--content'], _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"][`article--${themeProp || theme}`], className),
    children: [data?.main?.showPreview && previewUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("picture", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].picture),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
        src: `${"https://api.egor-badulin.ru"}${previewUrl}`,
        alt: altText
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].main),
      children: [data?.main?.previewTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].title, _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"][`title--${themeProp || theme}`]),
        children: data.main.previewTitle
      }), data?.main?.previewCaption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].caption, _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"][`caption--${themeProp || theme}`]),
        children: data.main.previewCaption
      })]
    }), data?.category?.data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_2__.ArticleCategory, {
      className: _ArticlePhoto_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].tag,
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _4_entities_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 4_entities/Category */ "./src/4_entities/Category/index.ts");
/* harmony import */ var _5_shared_libs_hooks_useHeight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 5_shared/libs/hooks/useHeight */ "./src/5_shared/libs/hooks/useHeight.ts");
/* harmony import */ var _5_shared_libs_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 5_shared/libs/hooks/useTheme */ "./src/5_shared/libs/hooks/useTheme.ts");
/* harmony import */ var _5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! 5_shared/config/router/routerConfig */ "./src/5_shared/config/router/routerConfig.tsx");
/* harmony import */ var _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ArticlePost.module.scss */ "./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss");
/* harmony import */ var _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! 5_shared/ui/Skeleton/Skeleton */ "./src/5_shared/ui/Skeleton/Skeleton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











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
  const skeleton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    ref: elRef,
    style: {
      width: '100%',
      height: `${heightEl}px`
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].article, _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['article--skeleton'], className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {
      mode: _5_shared_ui_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__.SkeletonMode.BLOCK,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].skeleton)
    })
  }), [heightEl, className, themeProp, theme]);
  const article = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    ref: elRef,
    style: {
      width: '100%',
      height: `${heightEl}px`
    },
    to: `${_5_shared_config_router_routerConfig__WEBPACK_IMPORTED_MODULE_5__.RouterPath.post_detail}${data?.id}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].article, _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]['article--content'], _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`article--${themeProp || theme}`], className),
    children: [data?.main?.showPreview && previewUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("picture", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].picture),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
        src: `${"https://api.egor-badulin.ru"}${previewUrl}`,
        alt: altText
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].main),
      children: [data?.main?.previewTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].title, _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`title--${themeProp || theme}`]),
        children: data.main.previewTitle
      }), data?.main?.previewCaption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].caption, _ArticlePost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"][`caption--${themeProp || theme}`]),
        children: data.main.previewCaption
      })]
    }), data?.category?.data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_4_entities_Category__WEBPACK_IMPORTED_MODULE_2__.ArticleCategory, {
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
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-1'], _5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-mob-2'], {
        [_5_shared_css_grid_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"]['grid__col-x-mob-4']]: item
      }, {
        [_GridPosts_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"]['mobile-hidden']]: !item
      }),
      children: item && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ArticlePost_ArticlePost__WEBPACK_IMPORTED_MODULE_5__.ArticlePost, {
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
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-light-zqm5r.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--content-kjM3c {
  border: 1px solid var(--dark-primary);
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-light-zqm5r.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--active-HeMPV {
  color: var(--light-primary);
  background-color: var(--dark-primary);
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-dark-beWVc {
  color: var(--light-primary);
}
.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-dark-beWVc.src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--content-kjM3c {
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
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Category/ui/ArticleCategory/ArticleCategory.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,qBAAA;EACA,uBAAA;AACJ;AACI;EACI,eAAA;AACR;AAEI;EACI,WAAA;AAAR;AAEQ;EAGI,YAAA;AAFZ;AAKQ;EAII,YAAA;AANZ;AASQ;EACI,YAAA;AAPZ;AAUQ;EACI,YAAA;AARZ;AAYI;EACI,0BAAA;AAVR;AAYQ;EACI,qCAAA;AAVZ;AAaQ;EACI,2BAAA;EACA,qCAAA;AAXZ;AAeI;EACI,2BAAA;AAbR;AAeQ;EACI,sCAAA;AAbZ;AAgBQ;EACI,qBAAA;EACA,sCAAA;AAdZ;;AAmBA;EACI,aAAA;EACA,kBAAA;AAhBJ;;AAmBA;EACI;IACI,eAAA;IACA,eAAA;IACA,gBAAA;EAhBN;EAmBU;IAGI,WAAA;EAnBd;EAsBU;IAII,WAAA;EAvBd;EA0BU;IACI,YAAA;EAxBd;EA2BU;IACI,YAAA;EAzBd;AACF;AA8BA;EACI;IACI,eAAA;IACA,gBAAA;IACA,iBAAA;EA5BN;EA+BU;IAII,WAAA;EAhCd;EAmCU;IAGI,WAAA;EAnCd;EAsCU;IAEI,WAAA;EArCd;AACF","sourcesContent":[".block {\r\n    display: flex;\r\n    font-size: 24px;\r\n    padding: 0 22px;\r\n    background: none;\r\n    min-height: 48px;\r\n    line-height: 1.3;\r\n    text-align: center;\r\n    border-radius: 50px;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    justify-content: center;\r\n\r\n    &--label {\r\n        cursor: pointer;\r\n    }\r\n\r\n    &--skeleton {\r\n        width: 60px;\r\n\r\n        &:nth-child(9n + 1),\r\n        &:nth-child(9n + 3),\r\n        &:nth-child(9n + 4) {\r\n            width: 100px;\r\n        }\r\n\r\n        &:nth-child(9n),\r\n        &:nth-child(9n + 2),\r\n        &:nth-child(9n + 5),\r\n        &:nth-child(9n + 6) {\r\n            width: 120px;\r\n        }\r\n\r\n        &:nth-child(9n + 7) {\r\n            width: 170px;\r\n        }\r\n\r\n        &:nth-child(9n + 8) {\r\n            width: 200px;\r\n        }\r\n    }\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n\r\n        &.block--content {\r\n            border: 1px solid var(--dark-primary);\r\n        }\r\n\r\n        &.block--active {\r\n            color: var(--light-primary);\r\n            background-color: var(--dark-primary);\r\n        }\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-primary);\r\n\r\n        &.block--content {\r\n            border: 1px solid var(--light-primary);\r\n        }\r\n\r\n        &.block--active {\r\n            color: var(--bg-dark);\r\n            background-color: var(--light-primary);\r\n        }\r\n    }\r\n}\r\n\r\n.input {\r\n    display: none;\r\n    visibility: hidden;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        padding: 0 18px;\r\n        font-size: 21px;\r\n        min-height: 42px;\r\n\r\n        &--skeleton {\r\n            &:nth-child(9n + 1),\r\n            &:nth-child(9n + 3),\r\n            &:nth-child(9n + 4) {\r\n                width: 80px;\r\n            }\r\n\r\n            &:nth-child(9n),\r\n            &:nth-child(9n + 2),\r\n            &:nth-child(9n + 5),\r\n            &:nth-child(9n + 6) {\r\n                width: 95px;\r\n            }\r\n\r\n            &:nth-child(9n + 7) {\r\n                width: 130px;\r\n            }\r\n\r\n            &:nth-child(9n + 8) {\r\n                width: 160px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        font-size: 16px;\r\n        min-height: 30px;\r\n        padding: 3px 12px;\r\n\r\n        &--skeleton {\r\n            &:nth-child(9n + 1),\r\n            &:nth-child(9n + 3),\r\n            &:nth-child(9n + 4),\r\n            &:nth-child(9n + 8) {\r\n                width: 50px;\r\n            }\r\n\r\n            &:nth-child(9n + 2),\r\n            &:nth-child(9n + 6),\r\n            &:nth-child(9n + 7) {\r\n                width: 60px;\r\n            }\r\n\r\n            &:nth-child(9n),\r\n            &:nth-child(9n + 5) {\r\n                width: 85px;\r\n            }\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block-Y778Z`,
	"block--label": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--label-uJsPr`,
	"block--skeleton": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--skeleton-GSTfL`,
	"block--theme-light": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--theme-light-zqm5r`,
	"block--content": `src-4_entities-Category-ui-ArticleCategory-ArticleCategory-module__block--content-kjM3c`,
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
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Dev/ui/ArticleDev/ArticleDev.module.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,wBAAA;AACJ;AACI;EAEI,YAAA;AAAR;AAGI;EACI,0BAAA;EACA,qCAAA;AADR;AAII;EACI,2BAAA;EACA,oCAAA;AAFR;;AAMA;EACI,SAAA;AAHJ;;AAMA;EACI,eAAA;AAHJ;;AAMA;EACI,SAAA;EACA,aAAA;EACA,8BAAA;AAHJ;;AAMA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AAHJ;AAKI;EACI,yBAAA;AAHR;AAMI;EACI,0BAAA;AAJR;;AAQA;EACI,aAAA;EACA,kBAAA;AALJ;;AAQA;EACI;IACI,aAAA;IACA,iBAAA;EALN;EAQE;IACI,eAAA;EANN;EASE;IACI,WAAA;IACA,YAAA;EAPN;AACF;AAUA;EACI;IACI,aAAA;IACA,aAAA;IACA,mBAAA;EARN;EAWE;IACI,SAAA;EATN;EAYE;IACI,eAAA;EAVN;EAaE;IACI,SAAA;EAXN;EAcE;IACI,WAAA;IACA,YAAA;IACA,0BAAA;EAZN;EAcM;IACI,aAAA;IACA,kBAAA;EAZV;EAgBE;IACI,aAAA;IACA,mBAAA;IACA,yBAAA;EAdN;AACF","sourcesContent":[".block {\r\n    display: block;\r\n    font-weight: 400;\r\n    min-height: 155px;\r\n    padding: 50px 60px;\r\n    position: relative;\r\n    border-radius: 28px;\r\n    text-decoration: none;\r\n    transition: 0.3s opacity;\r\n\r\n    &:hover,\r\n    &:focus {\r\n        opacity: 0.7;\r\n    }\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n        background-color: var(--light-accent);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-primary);\r\n        background-color: var(--dark-accent);\r\n    }\r\n}\r\n\r\n.grid {\r\n    gap: 20px;\r\n}\r\n\r\n.title {\r\n    font-size: 38px;\r\n}\r\n\r\n.main {\r\n    gap: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.icon {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: block;\r\n    flex-shrink: 0;\r\n\r\n    &--theme-light {\r\n        fill: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        fill: var(--light-primary);\r\n    }\r\n}\r\n\r\n.cell-mobile {\r\n    display: none;\r\n    visibility: hidden;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        padding: 35px;\r\n        min-height: 120px;\r\n    }\r\n\r\n    .title {\r\n        font-size: 32px;\r\n    }\r\n\r\n    .icon {\r\n        width: 48px;\r\n        height: 48px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        padding: 20px;\r\n        min-height: 0;\r\n        border-radius: 16px;\r\n    }\r\n\r\n    .grid {\r\n        gap: 16px;\r\n    }\r\n\r\n    .title {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .main {\r\n        gap: 20px;\r\n    }\r\n\r\n    .icon {\r\n        width: 18px;\r\n        height: 18px;\r\n        transform: translateY(8px);\r\n\r\n        &--desktop {\r\n            display: none;\r\n            visibility: hidden;\r\n        }\r\n    }\r\n\r\n    .cell-mobile {\r\n        display: flex;\r\n        visibility: visible;\r\n        justify-content: flex-end;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Dev-ui-ArticleDev-ArticleDev-module__block-FrpZU`,
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
  justify-content: space-between;
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--theme-light-e5aN4 {
  background-color: var(--light-accent);
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--theme-dark-wHrPk {
  background-color: var(--dark-accent);
}
.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--content-MaLH3 {
  padding: var(--card-padding-l);
}

.src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__skeleton-Iwzw6 {
  width: 100%;
  height: 100%;
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
  .src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--content-MaLH3 {
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
  .src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--content-MaLH3 {
    padding: var(--card-padding-s);
  }
  .src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__title-f37hH {
    font-size: 20px;
  }
  .src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__caption-unaP0 {
    font-size: 14px;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Photo/ui/ArticlePost/ArticlePhoto.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;EACA,8BAAA;AACJ;AACI;EACI,qCAAA;AACR;AAEI;EACI,oCAAA;AAAR;AAGI;EACI,8BAAA;AADR;;AAKA;EACI,WAAA;EACA,YAAA;AAFJ;;AAKA;EACI,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;AAFJ;AAII;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;AAFR;;AAMA;EACI,UAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,uBAAA;AAHJ;AAKI;EACI,0BAAA;AAHR;AAMI;EACI,0BAAA;AAJR;;AAQA;EACI,eAAA;AALJ;AAOI;EACI,4BAAA;AALR;AAQI;EACI,6BAAA;AANR;;AAUA;EACI,kBAAA;EACA,oBAAA;AAPJ;;AAUA;EAEQ;IACI,8BAAA;EARV;EAYE;IACI,eAAA;EAVN;EAaE;IACI,eAAA;EAXN;AACF;AAcA;EAEQ;IACI,8BAAA;EAbV;EAiBE;IACI,eAAA;EAfN;EAkBE;IACI,eAAA;EAhBN;AACF","sourcesContent":[".article {\r\n    height: 512px;\r\n    display: flex;\r\n    color: inherit;\r\n    overflow: hidden;\r\n    position: relative;\r\n    border-radius: 24px;\r\n    text-decoration: none;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n\r\n    &--theme-light {\r\n        background-color: var(--light-accent);\r\n    }\r\n\r\n    &--theme-dark {\r\n        background-color: var(--dark-accent);\r\n    }\r\n\r\n    &--content {\r\n        padding: var(--card-padding-l);\r\n    }\r\n}\r\n\r\n.skeleton {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.picture {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 0;\r\n    position: absolute;\r\n\r\n    img {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n        object-fit: cover;\r\n        object-position: center;\r\n    }\r\n}\r\n\r\n.main {\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.title {\r\n    font-size: 38px;\r\n    font-weight: 400;\r\n    margin-bottom: 7px;\r\n    letter-spacing: -0.38px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-accent);\r\n    }\r\n}\r\n\r\n.caption {\r\n    font-size: 24px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-secondary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-secondary);\r\n    }\r\n}\r\n\r\n.tag {\r\n    width: fit-content;\r\n    align-self: flex-end;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .article {\r\n        &--content {\r\n            padding: var(--card-padding-m);\r\n        }\r\n    }\r\n\r\n    .title {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .article {\r\n        &--content {\r\n            padding: var(--card-padding-s);\r\n        }\r\n    }\r\n\r\n    .title {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 14px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"article": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article-UIz4k`,
	"article--theme-light": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--theme-light-e5aN4`,
	"article--theme-dark": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--theme-dark-wHrPk`,
	"article--content": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__article--content-MaLH3`,
	"skeleton": `src-4_entities-Photo-ui-ArticlePost-ArticlePhoto-module__skeleton-Iwzw6`,
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
  justify-content: space-between;
  background-color: var(--dark-accent);
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--theme-light-DDlun {
  background-color: var(--light-accent);
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--theme-dark-RPqGz {
  background-color: var(--dark-accent);
}
.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--content-hCxsk {
  padding: var(--card-padding-l);
}

.src-4_entities-Post-ui-ArticlePost-ArticlePost-module__skeleton-cGKJ_ {
  width: 100%;
  height: 100%;
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
  }
  .src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--content-hCxsk {
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
  }
  .src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--content-hCxsk {
    padding: var(--card-padding-s);
  }
  .src-4_entities-Post-ui-ArticlePost-ArticlePost-module__title-AKFho {
    font-size: 20px;
  }
  .src-4_entities-Post-ui-ArticlePost-ArticlePost-module__caption-q2sWK {
    font-size: 14px;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Post/ui/ArticlePost/ArticlePost.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;EACA,8BAAA;EACA,oCAAA;AACJ;AACI;EACI,qCAAA;AACR;AAEI;EACI,oCAAA;AAAR;AAGI;EACI,8BAAA;AADR;;AAKA;EACI,WAAA;EACA,YAAA;AAFJ;;AAKA;EACI,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;AAFJ;AAII;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;AAFR;;AAMA;EACI,UAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;AAHJ;AAKI;EACI,0BAAA;AAHR;AAMI;EACI,0BAAA;AAJR;;AAQA;EACI,eAAA;AALJ;AAOI;EACI,4BAAA;AALR;AAQI;EACI,2BAAA;AANR;;AAUA;EACI,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,oBAAA;AAPJ;;AAUA;EACI;IACI,aAAA;EAPN;EASM;IACI,8BAAA;EAPV;EAWE;IACI,eAAA;EATN;EAYE;IACI,eAAA;EAVN;AACF;AAaA;EACI;IACI,aAAA;IACA,mBAAA;EAXN;EAaM;IACI,8BAAA;EAXV;EAeE;IACI,eAAA;EAbN;EAgBE;IACI,eAAA;EAdN;AACF","sourcesContent":[".article {\r\n    height: 512px;\r\n    display: flex;\r\n    color: inherit;\r\n    overflow: hidden;\r\n    position: relative;\r\n    border-radius: 24px;\r\n    text-decoration: none;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    background-color: var(--dark-accent);\r\n\r\n    &--theme-light {\r\n        background-color: var(--light-accent);\r\n    }\r\n\r\n    &--theme-dark {\r\n        background-color: var(--dark-accent);\r\n    }\r\n\r\n    &--content {\r\n        padding: var(--card-padding-l);\r\n    }\r\n}\r\n\r\n.skeleton {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.picture {\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 0;\r\n    position: absolute;\r\n\r\n    img {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n        object-fit: cover;\r\n        object-position: center;\r\n    }\r\n}\r\n\r\n.main {\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.title {\r\n    font-size: 38px;\r\n    font-weight: 400;\r\n    margin-bottom: 7px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-primary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var(--light-accent);\r\n    }\r\n}\r\n\r\n.caption {\r\n    font-size: 24px;\r\n\r\n    &--theme-light {\r\n        color: var(--dark-secondary);\r\n    }\r\n\r\n    &--theme-dark {\r\n        color: var( --light-primary);\r\n    }\r\n}\r\n\r\n.tag {\r\n    z-index: 1;\r\n    position: relative;\r\n    width: fit-content;\r\n    align-self: flex-end;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .article {\r\n        height: 460px;\r\n\r\n        &--content {\r\n            padding: var(--card-padding-m);\r\n        }\r\n    }\r\n\r\n    .title {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .article {\r\n        height: 260px;\r\n        border-radius: 16px;\r\n\r\n        &--content {\r\n            padding: var(--card-padding-s);\r\n        }\r\n    }\r\n\r\n    .title {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .caption {\r\n        font-size: 14px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"article": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article-KgWk4`,
	"article--theme-light": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--theme-light-DDlun`,
	"article--theme-dark": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--theme-dark-RPqGz`,
	"article--content": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__article--content-hCxsk`,
	"skeleton": `src-4_entities-Post-ui-ArticlePost-ArticlePost-module__skeleton-cGKJ_`,
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
  .src-4_entities-Post-ui-GridPosts-GridPosts-module__mobile-hidden-s_bwk {
    display: none;
    visibility: hidden;
  }
}`, "",{"version":3,"sources":["webpack://./src/4_entities/Post/ui/GridPosts/GridPosts.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,aAAA;EACA,sBAAA;AACJ;;AAMA;EACI;IACI,SAAA;EAHN;EAME;IACI,aAAA;IACA,kBAAA;EAJN;AACF","sourcesContent":[".block {\r\n    gap: 65px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n@media (width <= 2160px) {\r\n\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        gap: 30px;\r\n    }\r\n\r\n    .mobile-hidden {\r\n        display: none;\r\n        visibility: hidden;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-4_entities-Post-ui-GridPosts-GridPosts-module__block-OygCn`,
	"mobile-hidden": `src-4_entities-Post-ui-GridPosts-GridPosts-module__mobile-hidden-s_bwk`
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
.src-5_shared-ui-Main-Main-module__block--detail-ttGQf {
  padding-bottom: 0;
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
}`, "",{"version":3,"sources":["webpack://./src/5_shared/ui/Main/Main.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,qBAAA;AACJ;AACI;EACI,iBAAA;AACR;;AAGA;EACI;IACI,qBAAA;EAAN;AACF;AAGA;EACI;IACI,oBAAA;EADN;EAGM;IACI,kBAAA;EADV;AACF","sourcesContent":[".block {\r\n    flex-grow: 1;\r\n    padding-bottom: 115px;\r\n\r\n    &--detail {\r\n        padding-bottom: 0;\r\n    }\r\n}\r\n\r\n@media (width <= 2160px) {\r\n    .block {\r\n        padding-bottom: 110px;\r\n    }\r\n}\r\n\r\n@media (width <= 1200px) {\r\n    .block {\r\n        padding-bottom: 40px;\r\n\r\n        &--list {\r\n            padding-top: 100px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"block": `src-5_shared-ui-Main-Main-module__block-AdpYr`,
	"block--detail": `src-5_shared-ui-Main-Main-module__block--detail-ttGQf`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmM4NzgzYWFiNDEwMWFkNjNlNmI2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0Esc0JBQXNCLHNFQUFzRSxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsaUNBQWlDLGtCQUFrQjtBQUMzUTtBQUMvQiwyQ0FBMkMsZ0RBQW1CO0FBQzlEO0FBQ0E7QUFDQSxDQUFDLHlDQUF5QyxnREFBbUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRVhrQjtBQUNHO0FBQ1c7QUFFM0QsTUFBTUksV0FBVyxHQUFHSCx3REFBTSxDQUFDSSxlQUFlLENBQUM7RUFDdkNDLFNBQVMsRUFBR0MsS0FBSyxLQUFNO0lBQ25CQyxpQkFBaUIsRUFBRUQsS0FBSyxDQUFDRSxLQUFLLENBQUM7TUFDM0JBLEtBQUssRUFBR0MsSUFBa0IsS0FBTTtRQUM1QkMsR0FBRyxFQUFFRCxJQUFJLEtBQUtQLG1FQUFZLENBQUNTLEdBQUcsR0FBR1YsMkRBQU0sQ0FBQ1csWUFBWSxHQUFHWCwyREFBTSxDQUFDWSxhQUFhO1FBQzNFQyxNQUFNLEVBQUU7VUFDSkMsTUFBTSxFQUFFO1FBQ1o7TUFDSixDQUFDLENBQUM7TUFDRkMsWUFBWSxFQUFFLENBQUMsVUFBVTtJQUM3QixDQUFDO0VBQ0wsQ0FBQyxDQUFDO0VBQ0ZDLGdCQUFnQixFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUVGLE1BQU1DLG9CQUFvQixHQUFHZixXQUFXLENBQUNnQix5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pwQjtBQUlOO0FBSUE7QUFLYjtBQUlTO0FBSUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRTVCekIsSUFBS2pCLFlBQVksMEJBQVpBLFlBQVk7RUFBWkEsWUFBWTtFQUFaQSxZQUFZO0VBQUEsT0FBWkEsWUFBWTtBQUFBOzs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNkhBQTZILFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxL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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBKQUFPO0FBQ2hDLG9DQUFvQywrSUFBVyxHQUFHLDBKQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDJTQUFtSjtBQUN6SixNQUFNO0FBQUE7QUFDTixzREFBc0QsK0lBQVcsR0FBRywwSkFBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsK0lBQVcsR0FBRywwSkFBTzs7QUFFL0QscUJBQXFCLDBKQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHa0s7QUFDbEssT0FBTyxpRUFBZSwwSkFBTyxJQUFJLDBKQUFPLFVBQVUsMEpBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC9hc3NldHMvaWNvbnMvYXJyb3ctbmV4dC5zdmciLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9NZXRhUGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L2FwaS9jYXRlZ29yeUFwaS50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L2luZGV4LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvbW9kZWwvdHlwZXMvQXJ0aWNsZUNhdGVnb3J5LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvbW9kZWwvdHlwZXMvQ2F0ZWdvcnlNb2RlLnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L2FwaS9kZXZBcGkudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvbW9kZWwvc2VsZWN0b3JzL2Rldkxpc3QudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvbW9kZWwvc2VydmljZXMvZmV0Y2hOZXh0RGV2TGlzdC9mZXRjaE5leHREZXZMaXN0LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L21vZGVsL3NlcnZpY2VzL2luaXREZXZMaXN0L2luaXREZXYudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvbW9kZWwvc2xpY2VzL2Rldkxpc3RTbGljZS50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL2FwaS9waG90b0FwaS50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL2luZGV4LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUGhvdG8vbW9kZWwvc2VsZWN0b3JzL3Bob3RvTGlzdC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL21vZGVsL3NlcnZpY2VzL2ZldGNoTmV4dFBob3RvTGlzdC9mZXRjaE5leHRQaG90b0xpc3QudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9QaG90by9tb2RlbC9zZXJ2aWNlcy9pbml0UGhvdG9MaXN0L2luaXRQaG90b0xpc3QudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9QaG90by9tb2RlbC9zbGljZXMvcGhvdG9MaXN0U2xpY2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9Qb3N0L2FwaS9wb3N0QXBpLnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUG9zdC9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bvc3QvbW9kZWwvc2VsZWN0b3JzL3Bvc3RMaXN0LnRzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUG9zdC9tb2RlbC9zZXJ2aWNlcy9mZXRjaE5leHRQb3N0TGlzdC9mZXRjaE5leHRQb3N0TGlzdC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bvc3QvbW9kZWwvc2VydmljZXMvaW5pdFBvc3RMaXN0L2luaXRQb3N0TGlzdC50cyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bvc3QvbW9kZWwvc2xpY2VzL3Bvc3RMaXN0U2xpY2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvbGlicy9ob29rcy91c2VIZWlnaHQudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdHlwZXMvUmVxdWVzdERhdGEudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvM19mZWF0dXJlcy9NZXRhUGFnZS91aS9NZXRhUGFnZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9BcnRpY2xlQ2F0ZWdvcnkvQXJ0aWNsZUNhdGVnb3J5LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L3VpL0FydGljbGVUYWcvQXJ0aWNsZVRhZy50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9HcmlkQ2F0ZWdvcnkvR3JpZENhdGVnb3J5LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L3VpL0xpc3RDYXRlZ29yeS9MaXN0Q2F0ZWdvcnkudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvTGlzdFRhZ3MvTGlzdFRhZ3MudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0FydGljbGVEZXYvQXJ0aWNsZURldi50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvdWkvR3JpZERldi9HcmlkRGV2LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL3VpL0FydGljbGVQb3N0L0FydGljbGVQaG90by50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9QaG90by91aS9HcmlkUGhvdG8vR3JpZFBob3RvLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bvc3QvdWkvQXJ0aWNsZVBvc3QvQXJ0aWNsZVBvc3QudHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUG9zdC91aS9HcmlkUG9zdHMvR3JpZFBvc3RzLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9FbmQvRW5kLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9NYWluL01haW4udHN4Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvQXJ0aWNsZUNhdGVnb3J5L0FydGljbGVDYXRlZ29yeS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L3VpL0FydGljbGVUYWcvQXJ0aWNsZVRhZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L3VpL0dyaWRDYXRlZ29yeS9HcmlkQ2F0ZWdvcnkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9MaXN0Q2F0ZWdvcnkvTGlzdENhdGVnb3J5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvTGlzdFRhZ3MvTGlzdFRhZ3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9EZXYvdWkvQXJ0aWNsZURldi9BcnRpY2xlRGV2Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0dyaWREZXYvR3JpZERldi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL3VpL0FydGljbGVQb3N0L0FydGljbGVQaG90by5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy80X2VudGl0aWVzL1Bob3RvL3VpL0dyaWRQaG90by9HcmlkUGhvdG8ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9Qb3N0L3VpL0FydGljbGVQb3N0L0FydGljbGVQb3N0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUG9zdC91aS9HcmlkUG9zdHMvR3JpZFBvc3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzVfc2hhcmVkL3VpL0VuZC9FbmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvTWFpbi9NYWluLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvQXJ0aWNsZUNhdGVnb3J5L0FydGljbGVDYXRlZ29yeS5tb2R1bGUuc2Nzcz85ZGEyIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvQXJ0aWNsZVRhZy9BcnRpY2xlVGFnLm1vZHVsZS5zY3NzP2U3ZmIiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9HcmlkQ2F0ZWdvcnkvR3JpZENhdGVnb3J5Lm1vZHVsZS5zY3NzP2VmYzEiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9MaXN0Q2F0ZWdvcnkvTGlzdENhdGVnb3J5Lm1vZHVsZS5zY3NzPzk0ODkiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9MaXN0VGFncy9MaXN0VGFncy5tb2R1bGUuc2Nzcz85OWNiIiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0FydGljbGVEZXYvQXJ0aWNsZURldi5tb2R1bGUuc2Nzcz9lMGI3Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0dyaWREZXYvR3JpZERldi5tb2R1bGUuc2Nzcz9iMWM3Iiwid2VicGFjazovL3JlYWN0LS1ob21lLy4vc3JjLzRfZW50aXRpZXMvUGhvdG8vdWkvQXJ0aWNsZVBvc3QvQXJ0aWNsZVBob3RvLm1vZHVsZS5zY3NzPzg1YWIiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9QaG90by91aS9HcmlkUGhvdG8vR3JpZFBob3RvLm1vZHVsZS5zY3NzP2QxMzkiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9Qb3N0L3VpL0FydGljbGVQb3N0L0FydGljbGVQb3N0Lm1vZHVsZS5zY3NzP2Q1N2YiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNF9lbnRpdGllcy9Qb3N0L3VpL0dyaWRQb3N0cy9HcmlkUG9zdHMubW9kdWxlLnNjc3M/Mjc0NyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL3NyYy81X3NoYXJlZC91aS9FbmQvRW5kLm1vZHVsZS5zY3NzPzIzNjgiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9zcmMvNV9zaGFyZWQvdWkvTWFpbi9NYWluLm1vZHVsZS5zY3NzP2QwZTgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9wYXRoO1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFN2Z0Fycm93TmV4dCA9IHByb3BzID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgNTcgNTFcIlxufSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIGQ6IFwiTTQ5LjMzOCAyMy41IDMwLjIwMiAzLjM3OCAzMy4xMDEuNjIyIDU2Ljc2IDI1LjUgMzMuMSA1MC4zNzhsLTIuODk4LTIuNzU2TDQ5LjMzOCAyNy41SDB2LTRoNDkuMzM4WlwiLFxuICBjbGlwUnVsZTogXCJldmVub2RkXCJcbn0pKSk7XG5leHBvcnQgZGVmYXVsdCBTdmdBcnJvd05leHQ7IiwiZXhwb3J0IHtcclxuICAgIE1ldGFQYWdlLFxyXG59IGZyb20gJy4vdWkvTWV0YVBhZ2UnO1xyXG4iLCJpbXBvcnQgeyBydGtBcGkgfSBmcm9tICc1X3NoYXJlZC9hcGkvcnRrQXBpJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnNV9zaGFyZWQvYXBpL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IENhdGVnb3J5TW9kZSB9IGZyb20gJy4uL21vZGVsL3R5cGVzL0NhdGVnb3J5TW9kZSc7XHJcblxyXG5jb25zdCBjYXRlZ29yeUFwaSA9IHJ0a0FwaS5pbmplY3RFbmRwb2ludHMoe1xyXG4gICAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICAgICAgZmV0Y2hDYXRlZ29yeUxpc3Q6IGJ1aWxkLnF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IChtb2RlOiBDYXRlZ29yeU1vZGUpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IG1vZGUgPT09IENhdGVnb3J5TW9kZS5ERVYgPyBSb3V0ZXMuREVWX1RBR19MSVNUIDogUm91dGVzLlBPU1RfQ0FUX0xJU1QsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBfbGltaXQ6IDk5LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHByb3ZpZGVzVGFnczogWydjYXRlZ29yeSddLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VGZXRjaENhdGVnb3J5TGlzdCA9IGNhdGVnb3J5QXBpLnVzZUZldGNoQ2F0ZWdvcnlMaXN0UXVlcnk7XHJcblxyXG5leHBvcnQge1xyXG4gICAgY2F0ZWdvcnlBcGksXHJcbiAgICB1c2VGZXRjaENhdGVnb3J5TGlzdCxcclxufTtcclxuIiwiZXhwb3J0IHR5cGUge1xyXG4gICAgQXJ0aWNsZUNhdGVnb3J5VHlwZSxcclxufSBmcm9tICcuL21vZGVsL3R5cGVzL0FydGljbGVDYXRlZ29yeSc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQXJ0aWNsZUNhdGVnb3J5LFxyXG4gICAgQXJ0aWNsZUNhdGVnb3J5TW9kZSxcclxufSBmcm9tICcuL3VpL0FydGljbGVDYXRlZ29yeS9BcnRpY2xlQ2F0ZWdvcnknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIExpc3RDYXRlZ29yeSxcclxufSBmcm9tICcuL3VpL0xpc3RDYXRlZ29yeS9MaXN0Q2F0ZWdvcnknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIEdyaWRDYXRlZ29yeSxcclxufSBmcm9tICcuL3VpL0dyaWRDYXRlZ29yeS9HcmlkQ2F0ZWdvcnknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNhdGVnb3J5QXBpLFxyXG4gICAgdXNlRmV0Y2hDYXRlZ29yeUxpc3QsXHJcbn0gZnJvbSAnLi9hcGkvY2F0ZWdvcnlBcGknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIENhdGVnb3J5TW9kZSxcclxufSBmcm9tICcuL21vZGVsL3R5cGVzL0NhdGVnb3J5TW9kZSc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgTGlzdFRhZ3MsXHJcbn0gZnJvbSAnLi91aS9MaXN0VGFncy9MaXN0VGFncyc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgQXJ0aWNsZVRhZyxcclxufSBmcm9tICcuL3VpL0FydGljbGVUYWcvQXJ0aWNsZVRhZyc7XHJcbiIsImludGVyZmFjZSBBcnRpY2xlQ2F0ZWdvcnlUeXBlIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc2x1Zzogc3RyaW5nO1xyXG4gICAgbG9jYWxlOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVkQXQ6IERhdGU7XHJcbiAgICB1cGRhdGVkQXQ6IERhdGU7XHJcbiAgICBwdWJsaXNoZWRBdD86IERhdGU7XHJcbiAgICBsb2NhbGl6YXRpb25zPzoge1xyXG4gICAgICAgIGRhdGE6IEFydGljbGVDYXRlZ29yeVR5cGVbXVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHR5cGUgQXJ0aWNsZUNhdGVnb3J5VHlwZSxcclxufTtcclxuIiwiZXhwb3J0IGVudW0gQ2F0ZWdvcnlNb2RlIHtcclxuICAgIFBPU1QgPSAncG9zdCcsXHJcbiAgICBERVYgPSAnZGV2JyxcclxufVxyXG4iLCJpbXBvcnQgeyBydGtBcGkgfSBmcm9tICc1X3NoYXJlZC9hcGkvcnRrQXBpJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnNV9zaGFyZWQvYXBpL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IEJhc2VSZXNwb25zZVR5cGUgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9Db21tb25UeXBlcyc7XHJcblxyXG5jb25zdCBkZXZBcGkgPSBydGtBcGkuaW5qZWN0RW5kcG9pbnRzKHtcclxuICAgIGVuZHBvaW50czogKGJ1aWxkKSA9PiAoe1xyXG4gICAgICAgIGZldGNoRGV2TGlzdDogYnVpbGQucXVlcnkoe1xyXG4gICAgICAgICAgICBxdWVyeTogKHBhcmFtcykgPT4gKHtcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGVzLkRFVlNfTElTVCxcclxuICAgICAgICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHByb3ZpZGVzVGFnczogWydkZXYnXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBmZXRjaERldkJ5SWQ6IGJ1aWxkLnF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IChpZDogc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgJHtSb3V0ZXMuREVWU19MSVNUfS8ke2lkfS9gLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGU6ICdtYWluLnByZXZpZXcsdGFncyxjYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcHJvdmlkZXNUYWdzOiBbJ2RldlNpbmdsZSddLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBCYXNlUmVzcG9uc2VUeXBlKSA9PiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VGZXRjaERldkJ5SWQgPSBkZXZBcGkudXNlRmV0Y2hEZXZCeUlkUXVlcnk7XHJcbmNvbnN0IHVzZUxhenlGZXRjaERldkxpc3QgPSBkZXZBcGkudXNlTGF6eUZldGNoRGV2TGlzdFF1ZXJ5O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGRldkFwaSxcclxuICAgIHVzZUZldGNoRGV2QnlJZCxcclxuICAgIHVzZUxhenlGZXRjaERldkxpc3QsXHJcbn07XHJcbiIsImV4cG9ydCB7XHJcbiAgICBBcnRpY2xlRGV2LFxyXG59IGZyb20gJy4vdWkvQXJ0aWNsZURldi9BcnRpY2xlRGV2JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBHcmlkRGV2LFxyXG59IGZyb20gJy4vdWkvR3JpZERldi9HcmlkRGV2JztcclxuXHJcbmV4cG9ydCB0eXBlIHtcclxuICAgIERldkxpc3RTY2hlbWEsXHJcbn0gZnJvbSAnLi9tb2RlbC90eXBlcy9EZXZMaXN0U2NoZW1hJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXREZXZMaXN0LFxyXG4gICAgZGV2TGlzdFJlZHVjZXIsXHJcbiAgICBkZXZMaXN0QWN0aW9ucyxcclxufSBmcm9tICcuL21vZGVsL3NsaWNlcy9kZXZMaXN0U2xpY2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGZldGNoTmV4dERldkxpc3QsXHJcbn0gZnJvbSAnLi9tb2RlbC9zZXJ2aWNlcy9mZXRjaE5leHREZXZMaXN0L2ZldGNoTmV4dERldkxpc3QnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHVzZUZldGNoRGV2QnlJZCxcclxuICAgIHVzZUxhenlGZXRjaERldkxpc3QsXHJcbn0gZnJvbSAnLi9hcGkvZGV2QXBpJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXREZXZMaXN0UGFnZSxcclxuICAgIGdldERldkxpc3RDb3VudCxcclxuICAgIGdldERldkxpc3RMb2FkaW5nLFxyXG4gICAgZ2V0RGV2TGlzdENhdGVnb3J5LFxyXG59IGZyb20gJy4vbW9kZWwvc2VsZWN0b3JzL2Rldkxpc3QnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHR5cGUgQXJ0aWNsZURldlR5cGUsXHJcbn0gZnJvbSAnLi9tb2RlbC90eXBlcy9BcnRpY2xlRGV2JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBpbml0RGV2LFxyXG59IGZyb20gJy4vbW9kZWwvc2VydmljZXMvaW5pdERldkxpc3QvaW5pdERldic7XHJcbiIsImltcG9ydCB7IFN0YXRlU2NoZW1hIH0gZnJvbSAnMF9hcHAvcHJvZGl2ZXJzL1N0b3JlUHJvdmlkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERldkxpc3RMb2FkaW5nID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LmRldkxpc3Q/LmlzTG9hZGluZztcclxuZXhwb3J0IGNvbnN0IGdldERldkxpc3RQZXJQYWdlID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LmRldkxpc3Q/LnBlclBhZ2U7XHJcbmV4cG9ydCBjb25zdCBnZXREZXZMaXN0UGFnZSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5kZXZMaXN0Py5wYWdlO1xyXG5leHBvcnQgY29uc3QgZ2V0RGV2TGlzdENvdW50ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LmRldkxpc3Q/LmNvdW50O1xyXG5leHBvcnQgY29uc3QgZ2V0RGV2TGlzdENhdGVnb3J5ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LmRldkxpc3Q/LmNhdGVnb3J5O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IExhenlRdWVyeVRyaWdnZXIgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L2Rpc3QvcXVlcnkvcmVhY3QvYnVpbGRIb29rcyc7XHJcbmltcG9ydCB7IFRodW5rQ29uZmlnIH0gZnJvbSAnMF9hcHAvcHJvZGl2ZXJzL1N0b3JlUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uUGFyYW1zLCBSZXF1ZXN0UGFyYW1zIH0gZnJvbSAnNV9zaGFyZWQvdHlwZXMvUmVxdWVzdERhdGEnO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0RGV2TGlzdFBhZ2UsXHJcbiAgICBnZXREZXZMaXN0Q291bnQsXHJcbiAgICBnZXREZXZMaXN0UGVyUGFnZSxcclxuICAgIGdldERldkxpc3RDYXRlZ29yeSxcclxufSBmcm9tICcuLi8uLi9zZWxlY3RvcnMvZGV2TGlzdCc7XHJcbmltcG9ydCB7IGRldkxpc3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL2Rldkxpc3RTbGljZSc7XHJcblxyXG5pbnRlcmZhY2UgRmV0Y2hEZXZMaXN0UHJvcHMge1xyXG4gICAgcmVwbGFjZTogYm9vbGVhbjtcclxuICAgIGdldERhdGE6IExhenlRdWVyeVRyaWdnZXI8YW55PixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoTmV4dERldkxpc3QgPSBjcmVhdGVBc3luY1RodW5rPHZvaWQsIEZldGNoRGV2TGlzdFByb3BzLCBUaHVua0NvbmZpZzxzdHJpbmc+PihcclxuICAgICdkZXZMaXN0L2ZldGNoTmV4dERldkxpc3QnLFxyXG4gICAgYXN5bmMgKHByb3BzLCB0aHVua0FQSSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZ2V0U3RhdGUsIGRpc3BhdGNoIH0gPSB0aHVua0FQSTtcclxuXHJcbiAgICAgICAgY29uc3QgeyByZXBsYWNlIH0gPSBwcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgcGVyUGFnZSA9IGdldERldkxpc3RQZXJQYWdlKGdldFN0YXRlKCkpIHx8IDE7XHJcbiAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gZ2V0RGV2TGlzdFBhZ2UoZ2V0U3RhdGUoKSkgfHwgMTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGdldERldkxpc3RDYXRlZ29yeShnZXRTdGF0ZSgpKTtcclxuICAgICAgICBjb25zdCBsaXN0TGVuZ3RoID0gZ2V0RGV2TGlzdENvdW50KGdldFN0YXRlKCkpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBsaXN0SW5kZXggPT09IGxpc3RMZW5ndGggPyBsaXN0SW5kZXggOiBsaXN0SW5kZXggKyAxO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbXM6IFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlNJWkVdOiBwZXJQYWdlLFxyXG4gICAgICAgICAgICBbUGFnaW5hdGlvblBhcmFtcy5QQUdFXTogcmVwbGFjZSA/IDEgOiBwYWdlTnVtYmVyLFxyXG4gICAgICAgICAgICBzb3J0OiAncHVibGlzaGVkQXQ6REVTQycsXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKicsXHJcbiAgICAgICAgICAgIHJlcGxhY2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tQYWdpbmF0aW9uUGFyYW1zLlRBR10gPSBjYXRlZ29yeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHByb3BzLmdldERhdGEocGFyYW1zLCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgbWV0YSB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YU1ldGhvZCA9IHJlcGxhY2VcclxuICAgICAgICAgICAgICAgID8gZGV2TGlzdEFjdGlvbnMucmVwbGFjZURhdGFcclxuICAgICAgICAgICAgICAgIDogZGV2TGlzdEFjdGlvbnMuYWRkRGF0YTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBkaXNwYXRjaChkYXRhTWV0aG9kKGRhdGEpKTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBkaXNwYXRjaChwb3N0TGlzdEFjdGlvbnMuc2V0UGFnaW5hdGlvbihtZXRhLnBhZ2luYXRpb24pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbik7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgTGF6eVF1ZXJ5VHJpZ2dlciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9xdWVyeS9yZWFjdC9idWlsZEhvb2tzJztcclxuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25QYXJhbXMsIFJlcXVlc3RQYXJhbXMgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9SZXF1ZXN0RGF0YSc7XHJcbmltcG9ydCB7IGRldkxpc3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL2Rldkxpc3RTbGljZSc7XHJcbmltcG9ydCB7IGdldERldkxpc3RQZXJQYWdlIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL2Rldkxpc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXREZXYgPSBjcmVhdGVBc3luY1RodW5rPHZvaWQsIExhenlRdWVyeVRyaWdnZXI8YW55PiwgVGh1bmtDb25maWc8c3RyaW5nPj4oXHJcbiAgICAnZGV2TGlzdC9pbml0RGV2TGlzdCcsXHJcbiAgICBhc3luYyAoZ2V0RGF0YSwgdGh1bmtBUEkpID0+IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoLFxyXG4gICAgICAgICAgICBnZXRTdGF0ZSxcclxuICAgICAgICB9ID0gdGh1bmtBUEk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlclBhZ2UgPSBnZXREZXZMaXN0UGVyUGFnZShnZXRTdGF0ZSgpKSB8fCAxO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbXM6IFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlBBR0VdOiAxLFxyXG4gICAgICAgICAgICBbUGFnaW5hdGlvblBhcmFtcy5TSVpFXTogcGVyUGFnZSxcclxuICAgICAgICAgICAgc29ydDogJ3B1Ymxpc2hlZEF0OkRFU0MnLFxyXG4gICAgICAgICAgICByZXBsYWNlOiBmYWxzZSxcclxuICAgICAgICAgICAgcG9wdWxhdGU6ICcqJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhd2FpdCBnZXREYXRhKHBhcmFtcywgdHJ1ZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIG1ldGEgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRldkxpc3RBY3Rpb25zLmFkZERhdGEoZGF0YSkpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRldkxpc3RBY3Rpb25zLnNldFBhZ2luYXRpb24obWV0YS5wYWdpbmF0aW9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4pO1xyXG4iLCJpbXBvcnQge1xyXG4gICAgY3JlYXRlU2xpY2UsXHJcbiAgICBQYXlsb2FkQWN0aW9uLFxyXG4gICAgY3JlYXRlRW50aXR5QWRhcHRlcixcclxufSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgU3RhdGVTY2hlbWEgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IGRldkFwaSB9IGZyb20gJy4uLy4uL2FwaS9kZXZBcGknO1xyXG5pbXBvcnQgeyBBcnRpY2xlRGV2VHlwZSB9IGZyb20gJy4uL3R5cGVzL0FydGljbGVEZXYnO1xyXG5pbXBvcnQgeyBEZXZMaXN0U2NoZW1hIH0gZnJvbSAnLi4vdHlwZXMvRGV2TGlzdFNjaGVtYSc7XHJcblxyXG5jb25zdCBkZXZMaXN0QWRhcHRlciA9IGNyZWF0ZUVudGl0eUFkYXB0ZXI8QXJ0aWNsZURldlR5cGU+KCk7XHJcbmRldkxpc3RBZGFwdGVyLnNlbGVjdElkID0gKGl0ZW06IEFydGljbGVEZXZUeXBlKSA9PiBpdGVtLmlkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERldkxpc3QgPSBkZXZMaXN0QWRhcHRlci5nZXRTZWxlY3RvcnM8U3RhdGVTY2hlbWE+KFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5kZXZMaXN0IHx8IGRldkxpc3RBZGFwdGVyLmdldEluaXRpYWxTdGF0ZSgpLFxyXG4pO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBEZXZMaXN0U2NoZW1hID0ge1xyXG4gICAgcGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDUsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3JzOiB1bmRlZmluZWQsXHJcbiAgICBjYXRlZ29yeTogdW5kZWZpbmVkLFxyXG4gICAgY291bnQ6IDEsXHJcbiAgICBpZHM6IFtdLFxyXG4gICAgZW50aXRpZXM6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgZGV2TGlzdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2Rldkxpc3RTbGljZScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldFBhZ2U6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TGVuZ3RoOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGREYXRhOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxBcnRpY2xlRGV2VHlwZVtdPikgPT4ge1xyXG4gICAgICAgICAgICBkZXZMaXN0QWRhcHRlci5hZGRNYW55KHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXBsYWNlRGF0YTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QXJ0aWNsZURldlR5cGVbXT4pID0+IHtcclxuICAgICAgICAgICAgZGV2TGlzdEFkYXB0ZXIuc2V0QWxsKHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQYWdpbmF0aW9uOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhZ2UgPSBwYWdpbmF0aW9uLnBhZ2U7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvdW50ID0gcGFnaW5hdGlvbi5wYWdlQ291bnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2dnbGVDYXRlZ29yeTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyIHwgdW5kZWZpbmVkPikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuY2F0ZWdvcnkgPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jYXRlZ29yeSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmNhdGVnb3J5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGRldkFwaS5lbmRwb2ludHMuZmV0Y2hEZXZMaXN0O1xyXG5cclxuICAgICAgICBidWlsZGVyXHJcbiAgICAgICAgICAgIC5hZGRNYXRjaGVyKHJlcXVlc3QubWF0Y2hQZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBsYWNlIH0gPSBhY3Rpb24ubWV0YS5hcmcub3JpZ2luYWxBcmdzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2UpIGRldkxpc3RBZGFwdGVyLnJlbW92ZUFsbChzdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZE1hdGNoZXIocmVxdWVzdC5tYXRjaEZ1bGZpbGxlZCwgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZE1hdGNoZXIocmVxdWVzdC5tYXRjaFJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvcnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgICByZWR1Y2VyOiBkZXZMaXN0UmVkdWNlcixcclxuICAgIGFjdGlvbnM6IGRldkxpc3RBY3Rpb25zLFxyXG59ID0gZGV2TGlzdFNsaWNlO1xyXG4iLCJpbXBvcnQgeyBydGtBcGkgfSBmcm9tICc1X3NoYXJlZC9hcGkvcnRrQXBpJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnNV9zaGFyZWQvYXBpL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IEJhc2VSZXNwb25zZVR5cGUgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9Db21tb25UeXBlcyc7XHJcblxyXG5jb25zdCBwaG90b0FwaSA9IHJ0a0FwaS5pbmplY3RFbmRwb2ludHMoe1xyXG4gICAgZW5kcG9pbnRzOiAoYnVpbGQpID0+ICh7XHJcbiAgICAgICAgZmV0Y2hQaG90b0xpc3Q6IGJ1aWxkLnF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IChwYXJhbXMpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRlcy5QSE9UT19MSVNULFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlOiAnbWFpbi5wcmV2aWV3JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBwcm92aWRlc1RhZ3M6IFsncGhvdG8nXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBmZXRjaFBob3RvQnlJZDogYnVpbGQucXVlcnkoe1xyXG4gICAgICAgICAgICBxdWVyeTogKGlkOiBzdHJpbmcpID0+ICh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGAke1JvdXRlcy5QSE9UT19MSVNUfS8ke2lkfS9gLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGU6ICdtYWluLnByZXZpZXcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHByb3ZpZGVzVGFnczogWydwaG90b1NpbmdsZSddLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZTogKHJlc3BvbnNlOiBCYXNlUmVzcG9uc2VUeXBlKSA9PiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSksXHJcbiAgICBvdmVycmlkZUV4aXN0aW5nOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCB1c2VGZXRjaFBob3RvQnlJZCA9IHBob3RvQXBpLnVzZUZldGNoUGhvdG9CeUlkUXVlcnk7XHJcbmNvbnN0IHVzZUxhenlGZXRjaFBob3RvTGlzdCA9IHBob3RvQXBpLnVzZUxhenlGZXRjaFBob3RvTGlzdFF1ZXJ5O1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHBob3RvQXBpLFxyXG4gICAgdXNlRmV0Y2hQaG90b0J5SWQsXHJcbiAgICB1c2VMYXp5RmV0Y2hQaG90b0xpc3QsXHJcbn07XHJcbiIsImV4cG9ydCB7XHJcbiAgICBHcmlkUGhvdG8sXHJcbn0gZnJvbSAnLi91aS9HcmlkUGhvdG8vR3JpZFBob3RvJztcclxuXHJcbmV4cG9ydCB0eXBlIHtcclxuICAgIEFydGljbGVQaG90b1R5cGUsXHJcbn0gZnJvbSAnLi9tb2RlbC90eXBlcy9BcnRpY2xlUGhvdG8nO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIHBob3RvQXBpLFxyXG4gICAgdXNlRmV0Y2hQaG90b0J5SWQsXHJcbiAgICB1c2VMYXp5RmV0Y2hQaG90b0xpc3QsXHJcbn0gZnJvbSAnLi9hcGkvcGhvdG9BcGknO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGdldFBob3RvTGlzdCxcclxuICAgIHBob3RvTGlzdFJlZHVjZXIsXHJcbiAgICBwaG90b0xpc3RBY3Rpb25zLFxyXG59IGZyb20gJy4vbW9kZWwvc2xpY2VzL3Bob3RvTGlzdFNsaWNlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmZXRjaE5leHRQaG90b0xpc3QsXHJcbn0gZnJvbSAnNF9lbnRpdGllcy9QaG90by9tb2RlbC9zZXJ2aWNlcy9mZXRjaE5leHRQaG90b0xpc3QvZmV0Y2hOZXh0UGhvdG9MaXN0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBpbml0UGhvdG9MaXN0LFxyXG59IGZyb20gJy4vbW9kZWwvc2VydmljZXMvaW5pdFBob3RvTGlzdC9pbml0UGhvdG9MaXN0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRQaG90b0xpc3RDb3VudCxcclxuICAgIGdldFBob3RvTGlzdExvYWRpbmcsXHJcbiAgICBnZXRQaG90b0xpc3RQYWdlLFxyXG59IGZyb20gJy4vbW9kZWwvc2VsZWN0b3JzL3Bob3RvTGlzdCc7XHJcblxyXG5leHBvcnQgdHlwZSB7XHJcbiAgICBQaG90b0xpc3RTY2hlbWEsXHJcbn0gZnJvbSAnLi9tb2RlbC90eXBlcy9QaG90b0xpc3RTY2hlbWEnO1xyXG4iLCJpbXBvcnQgeyBTdGF0ZVNjaGVtYSB9IGZyb20gJzBfYXBwL3Byb2RpdmVycy9TdG9yZVByb3ZpZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQaG90b0xpc3RMb2FkaW5nID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LnBob3RvTGlzdD8uaXNMb2FkaW5nO1xyXG5leHBvcnQgY29uc3QgZ2V0UGhvdG9MaXN0UGVyUGFnZSA9IChzdGF0ZTogU3RhdGVTY2hlbWEpID0+IHN0YXRlPy5waG90b0xpc3Q/LnBlclBhZ2U7XHJcbmV4cG9ydCBjb25zdCBnZXRQaG90b0xpc3RQYWdlID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LnBob3RvTGlzdD8ucGFnZTtcclxuZXhwb3J0IGNvbnN0IGdldFBob3RvTGlzdENvdW50ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LnBob3RvTGlzdD8uY291bnQ7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgTGF6eVF1ZXJ5VHJpZ2dlciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9xdWVyeS9yZWFjdC9idWlsZEhvb2tzJztcclxuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25QYXJhbXMsIFJlcXVlc3RQYXJhbXMgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9SZXF1ZXN0RGF0YSc7XHJcbmltcG9ydCB7XHJcbiAgICBnZXRQaG90b0xpc3RQYWdlLFxyXG4gICAgZ2V0UGhvdG9MaXN0Q291bnQsXHJcbiAgICBnZXRQaG90b0xpc3RQZXJQYWdlLFxyXG59IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9waG90b0xpc3QnO1xyXG5pbXBvcnQgeyBwaG90b0xpc3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL3Bob3RvTGlzdFNsaWNlJztcclxuXHJcbmludGVyZmFjZSBGZXRjaFBob3RvTGlzdFBhZ2VQcm9wcyB7XHJcbiAgICByZXBsYWNlOiBib29sZWFuO1xyXG4gICAgZ2V0RGF0YTogTGF6eVF1ZXJ5VHJpZ2dlcjxhbnk+LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hOZXh0UGhvdG9MaXN0ID0gY3JlYXRlQXN5bmNUaHVuazx2b2lkLCBGZXRjaFBob3RvTGlzdFBhZ2VQcm9wcywgVGh1bmtDb25maWc8c3RyaW5nPj4oXHJcbiAgICAncGhvdG9MaXN0L2ZldGNoTmV4dFBob3RvTGlzdCcsXHJcbiAgICBhc3luYyAocHJvcHMsIHRodW5rQVBJKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBnZXRTdGF0ZSwgZGlzcGF0Y2ggfSA9IHRodW5rQVBJO1xyXG5cclxuICAgICAgICBjb25zdCB7IHJlcGxhY2UgfSA9IHByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBwZXJQYWdlID0gZ2V0UGhvdG9MaXN0UGVyUGFnZShnZXRTdGF0ZSgpKSB8fCAxO1xyXG4gICAgICAgIGNvbnN0IGxpc3RJbmRleCA9IGdldFBob3RvTGlzdFBhZ2UoZ2V0U3RhdGUoKSkgfHwgMTtcclxuICAgICAgICBjb25zdCBsaXN0TGVuZ3RoID0gZ2V0UGhvdG9MaXN0Q291bnQoZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IGxpc3RJbmRleCA9PT0gbGlzdExlbmd0aCA/IGxpc3RJbmRleCA6IGxpc3RJbmRleCArIDE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtczogUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgW1BhZ2luYXRpb25QYXJhbXMuU0laRV06IHBlclBhZ2UsXHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlBBR0VdOiByZXBsYWNlID8gMSA6IHBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgIHNvcnQ6ICdwdWJsaXNoZWRBdDpERVNDJyxcclxuICAgICAgICAgICAgcG9wdWxhdGU6ICcqJyxcclxuICAgICAgICAgICAgcmVwbGFjZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhd2FpdCBwcm9wcy5nZXREYXRhKHBhcmFtcywgdHJ1ZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIG1ldGEgfSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFNZXRob2QgPSByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICA/IHBob3RvTGlzdEFjdGlvbnMucmVwbGFjZURhdGFcclxuICAgICAgICAgICAgICAgIDogcGhvdG9MaXN0QWN0aW9ucy5hZGREYXRhO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRhdGFNZXRob2QoZGF0YSkpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHBob3RvTGlzdEFjdGlvbnMuc2V0UGFnaW5hdGlvbihtZXRhLnBhZ2luYXRpb24pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbik7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgTGF6eVF1ZXJ5VHJpZ2dlciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9xdWVyeS9yZWFjdC9idWlsZEhvb2tzJztcclxuaW1wb3J0IHsgVGh1bmtDb25maWcgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25QYXJhbXMsIFJlcXVlc3RQYXJhbXMgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9SZXF1ZXN0RGF0YSc7XHJcbmltcG9ydCB7IHBob3RvTGlzdEFjdGlvbnMgfSBmcm9tICcuLi8uLi9zbGljZXMvcGhvdG9MaXN0U2xpY2UnO1xyXG5pbXBvcnQgeyBnZXRQaG90b0xpc3RQZXJQYWdlIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL3Bob3RvTGlzdCc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFBob3RvTGlzdCA9IGNyZWF0ZUFzeW5jVGh1bms8dm9pZCwgTGF6eVF1ZXJ5VHJpZ2dlcjxhbnk+LCBUaHVua0NvbmZpZzxzdHJpbmc+PihcclxuICAgICdwaG90b0xpc3QvaW5pdFBob3RvTGlzdCcsXHJcbiAgICBhc3luYyAoZ2V0RGF0YSwgdGh1bmtBUEkpID0+IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoLFxyXG4gICAgICAgICAgICBnZXRTdGF0ZSxcclxuICAgICAgICB9ID0gdGh1bmtBUEk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlclBhZ2UgPSBnZXRQaG90b0xpc3RQZXJQYWdlKGdldFN0YXRlKCkpIHx8IDE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtczogUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgW1BhZ2luYXRpb25QYXJhbXMuUEFHRV06IDEsXHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlNJWkVdOiBwZXJQYWdlLFxyXG4gICAgICAgICAgICBzb3J0OiAncHVibGlzaGVkQXQ6REVTQycsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBwb3B1bGF0ZTogJyonLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGF3YWl0IGdldERhdGEocGFyYW1zLCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgbWV0YSB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgZGlzcGF0Y2gocGhvdG9MaXN0QWN0aW9ucy5hZGREYXRhKGRhdGEpKTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBkaXNwYXRjaChwaG90b0xpc3RBY3Rpb25zLnNldFBhZ2luYXRpb24obWV0YS5wYWdpbmF0aW9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4pO1xyXG4iLCJpbXBvcnQge1xyXG4gICAgY3JlYXRlU2xpY2UsXHJcbiAgICBQYXlsb2FkQWN0aW9uLFxyXG4gICAgY3JlYXRlRW50aXR5QWRhcHRlcixcclxufSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgU3RhdGVTY2hlbWEgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcbmltcG9ydCB7IHBob3RvQXBpIH0gZnJvbSAnLi4vLi4vYXBpL3Bob3RvQXBpJztcclxuaW1wb3J0IHsgQXJ0aWNsZVBob3RvVHlwZSB9IGZyb20gJy4uL3R5cGVzL0FydGljbGVQaG90byc7XHJcbmltcG9ydCB7IFBob3RvTGlzdFNjaGVtYSB9IGZyb20gJy4uL3R5cGVzL1Bob3RvTGlzdFNjaGVtYSc7XHJcblxyXG5jb25zdCBwaG90b0xpc3RBZGFwdGVyID0gY3JlYXRlRW50aXR5QWRhcHRlcjxBcnRpY2xlUGhvdG9UeXBlPigpO1xyXG5waG90b0xpc3RBZGFwdGVyLnNlbGVjdElkID0gKGl0ZW06IEFydGljbGVQaG90b1R5cGUpID0+IGl0ZW0uaWQ7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGhvdG9MaXN0ID0gcGhvdG9MaXN0QWRhcHRlci5nZXRTZWxlY3RvcnM8U3RhdGVTY2hlbWE+KFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5waG90b0xpc3QgfHwgcGhvdG9MaXN0QWRhcHRlci5nZXRJbml0aWFsU3RhdGUoKSxcclxuKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUGhvdG9MaXN0U2NoZW1hID0ge1xyXG4gICAgcGFnZTogMSxcclxuICAgIHBlclBhZ2U6IDgsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3JzOiB1bmRlZmluZWQsXHJcbiAgICBjb3VudDogMSxcclxuICAgIGlkczogW10sXHJcbiAgICBlbnRpdGllczoge30sXHJcbn07XHJcblxyXG5jb25zdCBwaG90b0xpc3RTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdwaG90b0xpc3RTbGljZScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldFBhZ2U6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TGVuZ3RoOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvdW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGREYXRhOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxBcnRpY2xlUGhvdG9UeXBlW10+KSA9PiB7XHJcbiAgICAgICAgICAgIHBob3RvTGlzdEFkYXB0ZXIuYWRkTWFueShzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVwbGFjZURhdGE6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFydGljbGVQaG90b1R5cGVbXT4pID0+IHtcclxuICAgICAgICAgICAgcGhvdG9MaXN0QWRhcHRlci5zZXRBbGwoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFBhZ2luYXRpb246IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgc3RhdGUucGFnZSA9IHBhZ2luYXRpb24ucGFnZTtcclxuICAgICAgICAgICAgc3RhdGUuY291bnQgPSBwYWdpbmF0aW9uLnBhZ2VDb3VudDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHBob3RvQXBpLmVuZHBvaW50cy5mZXRjaFBob3RvTGlzdDtcclxuXHJcbiAgICAgICAgYnVpbGRlclxyXG4gICAgICAgICAgICAuYWRkTWF0Y2hlcihyZXF1ZXN0Lm1hdGNoUGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVwbGFjZSB9ID0gYWN0aW9uLm1ldGEuYXJnLm9yaWdpbmFsQXJncztcclxuICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlKSBwaG90b0xpc3RBZGFwdGVyLnJlbW92ZUFsbChzdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3JzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZE1hdGNoZXIocmVxdWVzdC5tYXRjaEZ1bGZpbGxlZCwgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFkZE1hdGNoZXIocmVxdWVzdC5tYXRjaFJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5lcnJvcnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgICByZWR1Y2VyOiBwaG90b0xpc3RSZWR1Y2VyLFxyXG4gICAgYWN0aW9uczogcGhvdG9MaXN0QWN0aW9ucyxcclxufSA9IHBob3RvTGlzdFNsaWNlO1xyXG4iLCJpbXBvcnQgeyBydGtBcGkgfSBmcm9tICc1X3NoYXJlZC9hcGkvcnRrQXBpJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnNV9zaGFyZWQvYXBpL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IEJhc2VSZXNwb25zZVR5cGUgfSBmcm9tICc1X3NoYXJlZC90eXBlcy9Db21tb25UeXBlcyc7XHJcblxyXG5jb25zdCBwb3N0QXBpID0gcnRrQXBpLmluamVjdEVuZHBvaW50cyh7XHJcbiAgICBlbmRwb2ludHM6IChidWlsZCkgPT4gKHtcclxuICAgICAgICBmZXRjaFBvc3RMaXN0OiBidWlsZC5xdWVyeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiAocGFyYW1zKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0ZXMuUE9TVFNfTElTVCxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZTogJ21haW4ucHJldmlldyxjYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcHJvdmlkZXNUYWdzOiBbJ3Bvc3QnXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBmZXRjaFBvc3RCeUlkOiBidWlsZC5xdWVyeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiAoaWQ6IHN0cmluZykgPT4gKHtcclxuICAgICAgICAgICAgICAgIHVybDogYCR7Um91dGVzLlBPU1RTX0xJU1R9LyR7aWR9L2AsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZTogJ21haW4ucHJldmlldyx0YWdzLGNhdGVnb3J5LHNlbycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcHJvdmlkZXNUYWdzOiBbJ3Bvc3RTaW5nbGUnXSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtUmVzcG9uc2U6IChyZXNwb25zZTogQmFzZVJlc3BvbnNlVHlwZSkgPT4gcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KSxcclxuICAgIH0pLFxyXG4gICAgb3ZlcnJpZGVFeGlzdGluZzogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3QgdXNlRmV0Y2hQb3N0QnlJZCA9IHBvc3RBcGkudXNlRmV0Y2hQb3N0QnlJZFF1ZXJ5O1xyXG5jb25zdCB1c2VMYXp5RmV0Y2hQb3N0TGlzdCA9IHBvc3RBcGkudXNlTGF6eUZldGNoUG9zdExpc3RRdWVyeTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBwb3N0QXBpLFxyXG4gICAgdXNlRmV0Y2hQb3N0QnlJZCxcclxuICAgIHVzZUxhenlGZXRjaFBvc3RMaXN0LFxyXG59O1xyXG4iLCJleHBvcnQge1xyXG4gICAgR3JpZFBvc3RzLFxyXG59IGZyb20gJy4vdWkvR3JpZFBvc3RzL0dyaWRQb3N0cyc7XHJcblxyXG5leHBvcnQgdHlwZSB7XHJcbiAgICBQb3N0QXJ0aWNsZVR5cGUsXHJcbn0gZnJvbSAnLi9tb2RlbC90eXBlcy9Qb3N0QXJ0aWNsZSc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgcG9zdEFwaSxcclxuICAgIHVzZUZldGNoUG9zdEJ5SWQsXHJcbiAgICB1c2VMYXp5RmV0Y2hQb3N0TGlzdCxcclxufSBmcm9tICcuL2FwaS9wb3N0QXBpJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRQb3N0TGlzdCxcclxuICAgIHBvc3RMaXN0UmVkdWNlcixcclxuICAgIHBvc3RMaXN0QWN0aW9ucyxcclxufSBmcm9tICcuL21vZGVsL3NsaWNlcy9wb3N0TGlzdFNsaWNlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmZXRjaE5leHRQb3N0TGlzdCxcclxufSBmcm9tICcuL21vZGVsL3NlcnZpY2VzL2ZldGNoTmV4dFBvc3RMaXN0L2ZldGNoTmV4dFBvc3RMaXN0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBpbml0UG9zdExpc3QsXHJcbn0gZnJvbSAnLi9tb2RlbC9zZXJ2aWNlcy9pbml0UG9zdExpc3QvaW5pdFBvc3RMaXN0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRQb3N0TGlzdENvdW50LFxyXG4gICAgZ2V0UG9zdExpc3RMb2FkaW5nLFxyXG4gICAgZ2V0UG9zdExpc3RQYWdlLFxyXG4gICAgZ2V0UG9zdExpc3RDYXRlZ29yeSxcclxufSBmcm9tICcuL21vZGVsL3NlbGVjdG9ycy9wb3N0TGlzdCc7XHJcblxyXG5leHBvcnQgdHlwZSB7XHJcbiAgICBQb3N0TGlzdFNjaGVtYSxcclxufSBmcm9tICcuL21vZGVsL3R5cGVzL1Bvc3RMaXN0U2NoZW1hJztcclxuIiwiaW1wb3J0IHsgU3RhdGVTY2hlbWEgfSBmcm9tICcwX2FwcC9wcm9kaXZlcnMvU3RvcmVQcm92aWRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9zdExpc3RMb2FkaW5nID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LnBvc3RMaXN0Py5pc0xvYWRpbmc7XHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0TGlzdFBlclBhZ2UgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZT8ucG9zdExpc3Q/LnBlclBhZ2U7XHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0TGlzdFBhZ2UgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZT8ucG9zdExpc3Q/LnBhZ2U7XHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0TGlzdENvdW50ID0gKHN0YXRlOiBTdGF0ZVNjaGVtYSkgPT4gc3RhdGU/LnBvc3RMaXN0Py5jb3VudDtcclxuZXhwb3J0IGNvbnN0IGdldFBvc3RMaXN0Q2F0ZWdvcnkgPSAoc3RhdGU6IFN0YXRlU2NoZW1hKSA9PiBzdGF0ZT8ucG9zdExpc3Q/LmNhdGVnb3J5O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IExhenlRdWVyeVRyaWdnZXIgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L2Rpc3QvcXVlcnkvcmVhY3QvYnVpbGRIb29rcyc7XHJcbmltcG9ydCB7IFRodW5rQ29uZmlnIH0gZnJvbSAnMF9hcHAvcHJvZGl2ZXJzL1N0b3JlUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uUGFyYW1zLCBSZXF1ZXN0UGFyYW1zIH0gZnJvbSAnNV9zaGFyZWQvdHlwZXMvUmVxdWVzdERhdGEnO1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0UG9zdExpc3RQYWdlLFxyXG4gICAgZ2V0UG9zdExpc3RDb3VudCxcclxuICAgIGdldFBvc3RMaXN0UGVyUGFnZSxcclxuICAgIGdldFBvc3RMaXN0Q2F0ZWdvcnksXHJcbn0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL3Bvc3RMaXN0JztcclxuaW1wb3J0IHsgcG9zdExpc3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL3Bvc3RMaXN0U2xpY2UnO1xyXG5cclxuaW50ZXJmYWNlIEZldGNoUG9zdExpc3RQYWdlUHJvcHMge1xyXG4gICAgcmVwbGFjZTogYm9vbGVhbjtcclxuICAgIGdldERhdGE6IExhenlRdWVyeVRyaWdnZXI8YW55PixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoTmV4dFBvc3RMaXN0ID0gY3JlYXRlQXN5bmNUaHVuazx2b2lkLCBGZXRjaFBvc3RMaXN0UGFnZVByb3BzLCBUaHVua0NvbmZpZzxzdHJpbmc+PihcclxuICAgICdwb3N0TGlzdC9mZXRjaE5leHRQb3N0TGlzdCcsXHJcbiAgICBhc3luYyAocHJvcHMsIHRodW5rQVBJKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBnZXRTdGF0ZSwgZGlzcGF0Y2ggfSA9IHRodW5rQVBJO1xyXG5cclxuICAgICAgICBjb25zdCB7IHJlcGxhY2UgfSA9IHByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBwZXJQYWdlID0gZ2V0UG9zdExpc3RQZXJQYWdlKGdldFN0YXRlKCkpIHx8IDE7XHJcbiAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gZ2V0UG9zdExpc3RQYWdlKGdldFN0YXRlKCkpIHx8IDE7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBnZXRQb3N0TGlzdENhdGVnb3J5KGdldFN0YXRlKCkpO1xyXG4gICAgICAgIGNvbnN0IGxpc3RMZW5ndGggPSBnZXRQb3N0TGlzdENvdW50KGdldFN0YXRlKCkpO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBsaXN0SW5kZXggPT09IGxpc3RMZW5ndGggPyBsaXN0SW5kZXggOiBsaXN0SW5kZXggKyAxO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbXM6IFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlNJWkVdOiBwZXJQYWdlLFxyXG4gICAgICAgICAgICBbUGFnaW5hdGlvblBhcmFtcy5QQUdFXTogcmVwbGFjZSA/IDEgOiBwYWdlTnVtYmVyLFxyXG4gICAgICAgICAgICBzb3J0OiAncHVibGlzaGVkQXQ6REVTQycsXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKicsXHJcbiAgICAgICAgICAgIHJlcGxhY2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tQYWdpbmF0aW9uUGFyYW1zLkNBVF0gPSBjYXRlZ29yeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IHByb3BzLmdldERhdGEocGFyYW1zLCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgbWV0YSB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YU1ldGhvZCA9IHJlcGxhY2VcclxuICAgICAgICAgICAgICAgID8gcG9zdExpc3RBY3Rpb25zLnJlcGxhY2VEYXRhXHJcbiAgICAgICAgICAgICAgICA6IHBvc3RMaXN0QWN0aW9ucy5hZGREYXRhO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRhdGFNZXRob2QoZGF0YSkpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHBvc3RMaXN0QWN0aW9ucy5zZXRQYWdpbmF0aW9uKG1ldGEucGFnaW5hdGlvbikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBMYXp5UXVlcnlUcmlnZ2VyIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9kaXN0L3F1ZXJ5L3JlYWN0L2J1aWxkSG9va3MnO1xyXG5pbXBvcnQgeyBUaHVua0NvbmZpZyB9IGZyb20gJzBfYXBwL3Byb2RpdmVycy9TdG9yZVByb3ZpZGVyJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvblBhcmFtcywgUmVxdWVzdFBhcmFtcyB9IGZyb20gJzVfc2hhcmVkL3R5cGVzL1JlcXVlc3REYXRhJztcclxuaW1wb3J0IHsgcG9zdExpc3RBY3Rpb25zIH0gZnJvbSAnLi4vLi4vc2xpY2VzL3Bvc3RMaXN0U2xpY2UnO1xyXG5pbXBvcnQgeyBnZXRQb3N0TGlzdFBlclBhZ2UgfSBmcm9tICcuLi8uLi9zZWxlY3RvcnMvcG9zdExpc3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRQb3N0TGlzdCA9IGNyZWF0ZUFzeW5jVGh1bms8dm9pZCwgTGF6eVF1ZXJ5VHJpZ2dlcjxhbnk+LCBUaHVua0NvbmZpZzxzdHJpbmc+PihcclxuICAgICdwb3N0TGlzdC9pbml0UG9zdExpc3QnLFxyXG4gICAgYXN5bmMgKGdldERhdGEsIHRodW5rQVBJKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCxcclxuICAgICAgICAgICAgZ2V0U3RhdGUsXHJcbiAgICAgICAgfSA9IHRodW5rQVBJO1xyXG5cclxuICAgICAgICBjb25zdCBwZXJQYWdlID0gZ2V0UG9zdExpc3RQZXJQYWdlKGdldFN0YXRlKCkpIHx8IDE7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtczogUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgW1BhZ2luYXRpb25QYXJhbXMuUEFHRV06IDEsXHJcbiAgICAgICAgICAgIFtQYWdpbmF0aW9uUGFyYW1zLlNJWkVdOiBwZXJQYWdlLFxyXG4gICAgICAgICAgICBzb3J0OiAncHVibGlzaGVkQXQ6REVTQycsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBwb3B1bGF0ZTogJyonLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGF3YWl0IGdldERhdGEocGFyYW1zLCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgbWV0YSB9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgZGlzcGF0Y2gocG9zdExpc3RBY3Rpb25zLmFkZERhdGEoZGF0YSkpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHBvc3RMaXN0QWN0aW9ucy5zZXRQYWdpbmF0aW9uKG1ldGEucGFnaW5hdGlvbikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuKTtcclxuIiwiaW1wb3J0IHtcclxuICAgIGNyZWF0ZVNsaWNlLFxyXG4gICAgUGF5bG9hZEFjdGlvbixcclxuICAgIGNyZWF0ZUVudGl0eUFkYXB0ZXIsXHJcbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IFN0YXRlU2NoZW1hIH0gZnJvbSAnMF9hcHAvcHJvZGl2ZXJzL1N0b3JlUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBQb3N0QXJ0aWNsZVR5cGUgfSBmcm9tICc0X2VudGl0aWVzL1Bvc3QnO1xyXG5pbXBvcnQgeyBwb3N0QXBpIH0gZnJvbSAnLi4vLi4vYXBpL3Bvc3RBcGknO1xyXG5pbXBvcnQgeyBQb3N0TGlzdFNjaGVtYSB9IGZyb20gJy4uL3R5cGVzL1Bvc3RMaXN0U2NoZW1hJztcclxuXHJcbmNvbnN0IHBvc3RMaXN0QWRhcHRlciA9IGNyZWF0ZUVudGl0eUFkYXB0ZXI8UG9zdEFydGljbGVUeXBlPigpO1xyXG5wb3N0TGlzdEFkYXB0ZXIuc2VsZWN0SWQgPSAoaXRlbTogUG9zdEFydGljbGVUeXBlKSA9PiBpdGVtLmlkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RMaXN0ID0gcG9zdExpc3RBZGFwdGVyLmdldFNlbGVjdG9yczxTdGF0ZVNjaGVtYT4oXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RMaXN0IHx8IHBvc3RMaXN0QWRhcHRlci5nZXRJbml0aWFsU3RhdGUoKSxcclxuKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUG9zdExpc3RTY2hlbWEgPSB7XHJcbiAgICBwYWdlOiAxLFxyXG4gICAgcGVyUGFnZTogOCxcclxuICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcnM6IHVuZGVmaW5lZCxcclxuICAgIGNhdGVnb3J5OiB1bmRlZmluZWQsXHJcbiAgICBjb3VudDogMSxcclxuICAgIGlkczogW10sXHJcbiAgICBlbnRpdGllczoge30sXHJcbn07XHJcblxyXG5jb25zdCBwb3N0TGlzdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3Bvc3RMaXN0U2xpY2UnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzZXRQYWdlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBhZ2UgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldExlbmd0aDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5jb3VudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGVyUGFnZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wZXJQYWdlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGREYXRhOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQb3N0QXJ0aWNsZVR5cGVbXT4pID0+IHtcclxuICAgICAgICAgICAgcG9zdExpc3RBZGFwdGVyLmFkZE1hbnkoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcGxhY2VEYXRhOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQb3N0QXJ0aWNsZVR5cGVbXT4pID0+IHtcclxuICAgICAgICAgICAgcG9zdExpc3RBZGFwdGVyLnNldEFsbChzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGFnaW5hdGlvbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5wYWdlID0gcGFnaW5hdGlvbi5wYWdlO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb3VudCA9IHBhZ2luYXRpb24ucGFnZUNvdW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9nZ2xlQ2F0ZWdvcnk6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlciB8IHVuZGVmaW5lZD4pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmNhdGVnb3J5ID09PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuY2F0ZWdvcnkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jYXRlZ29yeSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBwb3N0QXBpLmVuZHBvaW50cy5mZXRjaFBvc3RMaXN0O1xyXG5cclxuICAgICAgICBidWlsZGVyXHJcbiAgICAgICAgICAgIC5hZGRNYXRjaGVyKHJlcXVlc3QubWF0Y2hQZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBsYWNlIH0gPSBhY3Rpb24ubWV0YS5hcmcub3JpZ2luYWxBcmdzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2UpIHBvc3RMaXN0QWRhcHRlci5yZW1vdmVBbGwoc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlLmVycm9ycyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRNYXRjaGVyKHJlcXVlc3QubWF0Y2hGdWxmaWxsZWQsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRNYXRjaGVyKHJlcXVlc3QubWF0Y2hSZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3JzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gICAgcmVkdWNlcjogcG9zdExpc3RSZWR1Y2VyLFxyXG4gICAgYWN0aW9uczogcG9zdExpc3RBY3Rpb25zLFxyXG59ID0gcG9zdExpc3RTbGljZTtcclxuIiwiaW1wb3J0IHtcclxuICAgIHVzZVN0YXRlLFxyXG4gICAgdXNlRWZmZWN0LFxyXG4gICAgUmVmT2JqZWN0LFxyXG59IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUhlaWdodCA9IChlbGVtZW50UmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+LCBwcm9wb3J0aW9uOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUhlaWdodCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBlbGVtZW50UmVmPy5jdXJyZW50Py5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aWR0aCkgc2V0SGVpZ2h0KHdpZHRoICogcHJvcG9ydGlvbik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdXBkYXRlSGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVIZWlnaHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlSGVpZ2h0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2VsZW1lbnRSZWYsIHByb3BvcnRpb25dKTtcclxuXHJcbiAgICByZXR1cm4gaGVpZ2h0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSGVpZ2h0O1xyXG4iLCJlbnVtIFBhZ2luYXRpb25QYXJhbXMge1xyXG4gICAgUEFHRSA9ICdwYWdpbmF0aW9uW3BhZ2VdJyxcclxuICAgIFNJWkUgPSAncGFnaW5hdGlvbltwYWdlU2l6ZV0nLFxyXG4gICAgQ0FUID0gJ2ZpbHRlcnNbY2F0ZWdvcnldW2lkXVskZXFdJyxcclxuICAgIFRBRyA9ICdmaWx0ZXJzW3RhZ3NdW2lkXVskZXFdJyxcclxufVxyXG5cclxudHlwZSBSZXF1ZXN0UGFyYW1zS2V5ID0gc3RyaW5nIHwgUGFnaW5hdGlvblBhcmFtcztcclxuXHJcbmludGVyZmFjZSBSZXF1ZXN0UGFyYW1zIHtcclxuICAgIFtrZXk6IFJlcXVlc3RQYXJhbXNLZXldOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgUGFnaW5hdGlvblBhcmFtcyxcclxuICAgIHR5cGUgUmVxdWVzdFBhcmFtcyxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYyc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCB7IE1ldGFQYWdlVHlwZSB9IGZyb20gJzVfc2hhcmVkL3R5cGVzL0NvbW1vblR5cGVzJztcclxuXHJcbmludGVyZmFjZSBNZXRhUGFnZVByb3BzIHtcclxuICAgIGRhdGE/OiBNZXRhUGFnZVR5cGU7XHJcbiAgICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWV0YVBhZ2UgPSAocHJvcHM6IE1ldGFQYWdlUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGlzTG9hZGluZyxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgY29udGVudExvYWRpbmcgPSA8dGl0bGU+eyB0KCdsb2FkaW5nJykgfTwvdGl0bGU+O1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YT8ubWV0YVRpdGxlXHJcbiAgICAgICAgICAgICAgICAmJiA8dGl0bGU+eyBkYXRhPy5tZXRhVGl0bGUgfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YT8ubWV0YURlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAmJiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhPy5tZXRhRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YT8ua2V5d29yZHNcclxuICAgICAgICAgICAgICAgICYmIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2RhdGE/LmtleXdvcmRzfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE/Lm1ldGFSb2JvdHNcclxuICAgICAgICAgICAgICAgICYmIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PXtkYXRhPy5tZXRhUm9ib3RzfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE/LnN0cnVjdHVyZWREYXRhXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IEpTT04uc3RyaW5naWZ5KGRhdGE/LnN0cnVjdHVyZWREYXRhKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICB7IGlzTG9hZGluZyA/IGNvbnRlbnRMb2FkaW5nIDogY29udGVudCB9XHJcbiAgICAgICAgICAgIHsgIWlzTG9hZGluZyAmJiAhZGF0YSAmJiA8dGl0bGU+Li4uPC90aXRsZT4gfVxyXG4gICAgICAgIDwvSGVsbWV0PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7QXBwVGhlbWV9IGZyb20gJzVfc2hhcmVkL2NvbmZpZy9UaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQge3VzZVRoZW1lfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHtTa2VsZXRvbiwgU2tlbGV0b25Nb2RlfSBmcm9tICc1X3NoYXJlZC91aS9Ta2VsZXRvbi9Ta2VsZXRvbic7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlQ2F0ZWdvcnkubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge0FydGljbGVDYXRlZ29yeVR5cGV9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL0FydGljbGVDYXRlZ29yeSc7XHJcblxyXG5leHBvcnQgZW51bSBBcnRpY2xlQ2F0ZWdvcnlNb2RlIHtcclxuICAgIFNUQVRJQyxcclxuICAgIElOUFVULFxyXG59XHJcblxyXG5pbnRlcmZhY2UgQXJ0aWNsZUNhdGVnb3J5UHJvcHMge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGlzQWN0aXZlPzogYm9vbGVhbjtcclxuICAgIHRoZW1lUHJvcD86IEFwcFRoZW1lO1xyXG4gICAgbW9kZTogQXJ0aWNsZUNhdGVnb3J5TW9kZTtcclxuICAgIGRhdGE/OiBBcnRpY2xlQ2F0ZWdvcnlUeXBlO1xyXG4gICAgY2xpY2tFdmVudD86IChhcmcwOiBBcnRpY2xlQ2F0ZWdvcnlUeXBlIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXJ0aWNsZUNhdGVnb3J5ID0gKHByb3BzOiBBcnRpY2xlQ2F0ZWdvcnlQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgbW9kZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBpc0FjdGl2ZSxcclxuICAgICAgICB0aGVtZVByb3AsXHJcbiAgICAgICAgY2xpY2tFdmVudCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICAgIGNvbnN0IFRhZzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzID0gbW9kZSA9PT0gQXJ0aWNsZUNhdGVnb3J5TW9kZS5TVEFUSUMgPyAnYXJ0aWNsZScgOiAnbGFiZWwnO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdEV2ZW50ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmIChjbGlja0V2ZW50KSBjbGlja0V2ZW50KGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1bnNlbGVjdEV2ZW50ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmIChjbGlja0V2ZW50ICYmIGlzQWN0aXZlKSBjbGlja0V2ZW50KHVuZGVmaW5lZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNrZWxldG9uID0gKFxyXG4gICAgICAgIDxTa2VsZXRvblxyXG4gICAgICAgICAgICBtb2RlPXtTa2VsZXRvbk1vZGUuQkxPQ0t9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGNscy5ibG9jayxcclxuICAgICAgICAgICAgICAgICAgICBjbHNbJ2Jsb2NrLS1za2VsZXRvbiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYmxvY2stLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuYmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BibG9jay0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzWydibG9jay0tY29udGVudCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgW2Nsc1snYmxvY2stLWxhYmVsJ11dOiBtb2RlID09PSBBcnRpY2xlQ2F0ZWdvcnlNb2RlLklOUFVUIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBbY2xzWydibG9jay0tYWN0aXZlJ11dOiBpc0FjdGl2ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbW9kZSA9PT0gQXJ0aWNsZUNhdGVnb3J5TW9kZS5JTlBVVFxyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YT8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1bnNlbGVjdEV2ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2VsZWN0RXZlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuaW5wdXQpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2RhdGE/LnRpdGxlfVxyXG4gICAgICAgIDwvVGFnPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZGF0YSA/IGNvbnRlbnQgOiBza2VsZXRvbjtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9BcnRpY2xlVGFnLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQXJ0aWNsZUNhdGVnb3J5VHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL0FydGljbGVDYXRlZ29yeSc7XHJcbmltcG9ydCB7IEFwcFRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaGVtZSc7XHJcblxyXG5pbnRlcmZhY2UgQXJ0aWNsZVRhZ1Byb3BzIHtcclxuICAgIGRhdGE6IEFydGljbGVDYXRlZ29yeVR5cGU7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICB0aGVtZVByb3A/OiBBcHBUaGVtZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVUYWcgPSAocHJvcHM6IEFydGljbGVUYWdQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIHRoZW1lUHJvcCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmJsb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYmxvY2stLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgI1xyXG4gICAgICAgICAgICB7IGRhdGEudGl0bGUgfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgQXJ0aWNsZUNhdGVnb3J5LFxyXG4gICAgQXJ0aWNsZUNhdGVnb3J5TW9kZSxcclxufSBmcm9tICcuLi9BcnRpY2xlQ2F0ZWdvcnkvQXJ0aWNsZUNhdGVnb3J5JztcclxuaW1wb3J0IGNscyBmcm9tICcuL0dyaWRDYXRlZ29yeS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEFydGljbGVDYXRlZ29yeVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC90eXBlcy9BcnRpY2xlQ2F0ZWdvcnknO1xyXG5cclxuaW50ZXJmYWNlIEdyaWRDYXRlZ29yeVByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIHNob3dTa2VsZXRvbjogYm9vbGVhbjtcclxuICAgIGRhdGE6IEFydGljbGVDYXRlZ29yeVR5cGVbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRDYXRlZ29yeSA9IChwcm9wczogR3JpZENhdGVnb3J5UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBzaG93U2tlbGV0b24sXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgc2tlbGV0b24gPSAoXHJcbiAgICAgICAgbmV3IEFycmF5KDQpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxBcnRpY2xlQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBtb2RlPXtBcnRpY2xlQ2F0ZWdvcnlNb2RlLlNUQVRJQ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gKFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgICAmJiBkYXRhPy5sZW5ndGggPiAwXHJcbiAgICAgICAgJiYgZGF0YS5tYXAoKGl0ZW06IEFydGljbGVDYXRlZ29yeVR5cGUpID0+IChcclxuICAgICAgICAgICAgPEFydGljbGVDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIG1vZGU9e0FydGljbGVDYXRlZ29yeU1vZGUuU1RBVElDfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJsb2NrLCBjbGFzc05hbWUpfT5cclxuICAgICAgICAgICAgeyBzaG93U2tlbGV0b24gPyBza2VsZXRvbiA6IGNvbnRlbnQgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9MaXN0Q2F0ZWdvcnkubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge0FydGljbGVDYXRlZ29yeSwgQXJ0aWNsZUNhdGVnb3J5TW9kZSx9IGZyb20gJy4uL0FydGljbGVDYXRlZ29yeS9BcnRpY2xlQ2F0ZWdvcnknO1xyXG5pbXBvcnQge0FydGljbGVDYXRlZ29yeVR5cGV9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL0FydGljbGVDYXRlZ29yeSc7XHJcblxyXG5pbnRlcmZhY2UgTGlzdENhdGVnb3J5UHJvcHMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgc2hvd1NrZWxldG9uOiBib29sZWFuO1xyXG4gICAgc2VsZWN0ZWRJdGVtOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBkYXRhOiBBcnRpY2xlQ2F0ZWdvcnlUeXBlW10gfCB1bmRlZmluZWQ7XHJcbiAgICBzZWxlY3RFdmVudD86IChBcnRpY2xlQ2F0ZWdvcnlUeXBlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdENhdGVnb3J5ID0gKHByb3BzOiBMaXN0Q2F0ZWdvcnlQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIHNlbGVjdEV2ZW50LFxyXG4gICAgICAgIHNob3dTa2VsZXRvbixcclxuICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgc2tlbGV0b24gPSAoXHJcbiAgICAgICAgbmV3IEFycmF5KDUpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxBcnRpY2xlQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBtb2RlPXtBcnRpY2xlQ2F0ZWdvcnlNb2RlLlNUQVRJQ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gKFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgICAmJiBkYXRhPy5sZW5ndGggPiAwXHJcbiAgICAgICAgJiYgZGF0YS5tYXAoKGl0ZW06IEFydGljbGVDYXRlZ29yeVR5cGUpID0+IChcclxuICAgICAgICAgICAgPEFydGljbGVDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50PXtzZWxlY3RFdmVudH1cclxuICAgICAgICAgICAgICAgIG1vZGU9e0FydGljbGVDYXRlZ29yeU1vZGUuSU5QVVR9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17c2VsZWN0ZWRJdGVtID09PSBpdGVtLmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5uYXYsIGNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICB7IHNob3dTa2VsZXRvbiA/IHNrZWxldG9uIDogY29udGVudCB9XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0xpc3RUYWdzLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBMaXN0VGFnc1Byb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0VGFncyA9IChwcm9wczogTGlzdFRhZ3NQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5ibG9jaywgY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgR3JpZENhdGVnb3J5IH0gZnJvbSAnNF9lbnRpdGllcy9DYXRlZ29yeSc7XHJcbmltcG9ydCBncmlkIGZyb20gJzVfc2hhcmVkL2Nzcy9ncmlkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEljb24gZnJvbSAnNV9zaGFyZWQvYXNzZXRzL2ljb25zL2Fycm93LW5leHQuc3ZnJztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgUm91dGVyUGF0aCB9IGZyb20gJzVfc2hhcmVkL2NvbmZpZy9yb3V0ZXIvcm91dGVyQ29uZmlnJztcclxuaW1wb3J0IHsgU2tlbGV0b24sIFNrZWxldG9uTW9kZSB9IGZyb20gJzVfc2hhcmVkL3VpL1NrZWxldG9uL1NrZWxldG9uJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVEZXYubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBcnRpY2xlRGV2VHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL3R5cGVzL0FydGljbGVEZXYnO1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVEZXZQcm9wcyB7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICB0aGVtZVByb3A/OiBBcHBUaGVtZTtcclxuICAgIGRhdGE/OiBBcnRpY2xlRGV2VHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFydGljbGVEZXYgPSAocHJvcHM6IEFydGljbGVEZXZQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgdGhlbWVQcm9wLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICAgIGNvbnN0IHNrZWxldG9uID0gdXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgIG1vZGU9e1NrZWxldG9uTW9kZS5CTE9DS31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmJsb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYmxvY2stLSR7dGhlbWVQcm9wIHx8IHRoZW1lfWBdLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICksIFtkYXRhLCB0aGVtZVByb3AsIHRoZW1lXSk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IHVzZU1lbW8oKCkgPT4gKFxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIHRvPXtgJHtSb3V0ZXJQYXRoLmRldl9kZXRhaWx9JHtkYXRhPy5pZH1gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBjbHMuYmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BibG9jay0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkLmdyaWQsIGNscy5ncmlkKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkWydncmlkX19jb2wtMiddLCBncmlkWydncmlkX19jb2wtbW9iLTMnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLnRpdGxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YT8udGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGdyaWRbJ2dyaWRfX2NvbC1tb2ItMSddLCBjbHNbJ2NlbGwtbW9iaWxlJ10pfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMuaWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHNbJ2ljb24tLW1vYmlsZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsc1tgaWNvbi0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkWydncmlkX19jb2wtMiddLCBncmlkWydncmlkX19jb2wtbW9iLTQnXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5tYWluKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTa2VsZXRvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhPy50YWdzPy5kYXRhIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMuaWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzWydpY29uLS1kZXNrdG9wJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsc1tgaWNvbi0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICksIFtkYXRhLCB0aGVtZVByb3AsIHRoZW1lXSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGEgPyBjb250ZW50IDogc2tlbGV0b247XHJcbn07XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBFbmQgfSBmcm9tICc1X3NoYXJlZC91aS9FbmQvRW5kJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0dyaWREZXYubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBcnRpY2xlRGV2IH0gZnJvbSAnLi4vQXJ0aWNsZURldi9BcnRpY2xlRGV2JztcclxuaW1wb3J0IHsgQXJ0aWNsZURldlR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC90eXBlcy9BcnRpY2xlRGV2JztcclxuXHJcbmludGVyZmFjZSBMaXN0RGV2UHJvcHMge1xyXG4gICAgc2hvd0VuZD86IGJvb2xlYW47XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBzaG93U2tlbGV0b24/OiBib29sZWFuO1xyXG4gICAgZGF0YTogQXJ0aWNsZURldlR5cGVbXSB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkRGV2ID0gKHByb3BzOiBMaXN0RGV2UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHNob3dFbmQsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIHNob3dTa2VsZXRvbixcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBza2VsZXRvbiA9IChcclxuICAgICAgICBuZXcgQXJyYXkoMikuZmlsbChudWxsKS5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxBcnRpY2xlRGV2IC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSlcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IChcclxuICAgICAgICBkYXRhXHJcbiAgICAgICAgJiYgZGF0YT8ubGVuZ3RoID4gMFxyXG4gICAgICAgICYmIGRhdGE/Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgIDxBcnRpY2xlRGV2XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYmxvY2spfT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMubGlzdCwgY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgICAgICAgICB7IHNob3dTa2VsZXRvbiA/IHNrZWxldG9uIDogY29udGVudCB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIHtzaG93RW5kICYmIDxFbmQgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7XHJcbiAgICBBcnRpY2xlQ2F0ZWdvcnksXHJcbiAgICBBcnRpY2xlQ2F0ZWdvcnlNb2RlLFxyXG59IGZyb20gJzRfZW50aXRpZXMvQ2F0ZWdvcnknO1xyXG5pbXBvcnQge1xyXG4gICAgU2tlbGV0b24sXHJcbiAgICBTa2VsZXRvbk1vZGUsXHJcbn0gZnJvbSAnNV9zaGFyZWQvdWkvU2tlbGV0b24vU2tlbGV0b24nO1xyXG5pbXBvcnQgdXNlSGVpZ2h0IGZyb20gJzVfc2hhcmVkL2xpYnMvaG9va3MvdXNlSGVpZ2h0JztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IHsgUm91dGVyUGF0aCB9IGZyb20gJzVfc2hhcmVkL2NvbmZpZy9yb3V0ZXIvcm91dGVyQ29uZmlnJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0FydGljbGVQaG90by5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEFydGljbGVQaG90b1R5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC90eXBlcy9BcnRpY2xlUGhvdG8nO1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVQaG90b1Byb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIHRoZW1lUHJvcD86IEFwcFRoZW1lO1xyXG4gICAgZGF0YT86IEFydGljbGVQaG90b1R5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBcnRpY2xlUGhvdG8gPSAocHJvcHM6IEFydGljbGVQaG90b1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB0aGVtZVByb3AsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgICBjb25zdCBlbFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGhlaWdodEVsID0gdXNlSGVpZ2h0KGVsUmVmLCAwLjgyKTtcclxuICAgIGNvbnN0IHByZXZpZXdVcmwgPSBkYXRhPy5tYWluPy5wcmV2aWV3Py5kYXRhPy5mb3JtYXRzPy5sYXJnZT8udXJsXHJcbiAgICAgICAgfHwgZGF0YT8ubWFpbj8ucHJldmlldz8uZGF0YT8uZm9ybWF0cz8ubWVkaXVtPy51cmxcclxuICAgICAgICB8fCBkYXRhPy5tYWluPy5wcmV2aWV3Py5kYXRhPy5mb3JtYXRzPy5zbWFsbD8udXJsIHx8ICcnO1xyXG4gICAgY29uc3QgYWx0VGV4dCA9IGRhdGE/Lm1haW4/LnByZXZpZXc/LmRhdGE/LmFsdGVybmF0aXZlVGV4dCB8fCAnIyc7XHJcblxyXG4gICAgY29uc3Qgc2tlbGV0b24gPSB1c2VNZW1vKCgpID0+IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17ZWxSZWZ9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHRFbH1weGAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGNscy5hcnRpY2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsc1tgYXJ0aWNsZS0tJHt0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbHNbJ2FydGljbGUtLXNrZWxldG9uJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2tlbGV0b25cclxuICAgICAgICAgICAgICAgIG1vZGU9e1NrZWxldG9uTW9kZS5CTE9DS31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuc2tlbGV0b24pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSwgW2hlaWdodEVsLCBjbGFzc05hbWUsIHRoZW1lUHJvcCwgdGhlbWUsIGRhdGFdKTtcclxuXHJcbiAgICBjb25zdCBhcnRpY2xlID0gdXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgcmVmPXtlbFJlZn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodEVsfXB4YCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdG89e2Ake1JvdXRlclBhdGgucGhvdG9fZGV0YWlsfSR7ZGF0YT8uaWR9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmFydGljbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzWydhcnRpY2xlLS1jb250ZW50J10sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BhcnRpY2xlLS0ke3RoZW1lUHJvcCB8fCB0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE/Lm1haW4/LnNob3dQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAmJiBwcmV2aWV3VXJsXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHBpY3R1cmUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5waWN0dXJlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtfX0JBU0VfVVJMX199JHtwcmV2aWV3VXJsfWB9IGFsdD17YWx0VGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLm1haW4pfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5tYWluPy5wcmV2aWV3VGl0bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzW2B0aXRsZS0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1haW4ucHJldmlld1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE/Lm1haW4/LnByZXZpZXdDYXB0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzLmNhcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsc1tgY2FwdGlvbi0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYWluLnByZXZpZXdDYXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YT8uY2F0ZWdvcnk/LmRhdGFcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YT8uY2F0ZWdvcnk/LmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e0FydGljbGVDYXRlZ29yeU1vZGUuU1RBVElDfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApLCBbaGVpZ2h0RWwsIGNsYXNzTmFtZSwgZGF0YSwgdGhlbWVQcm9wLCB0aGVtZV0pO1xyXG5cclxuICAgIHJldHVybiBkYXRhID8gYXJ0aWNsZSA6IHNrZWxldG9uO1xyXG59O1xyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgRW5kIH0gZnJvbSAnNV9zaGFyZWQvdWkvRW5kL0VuZCc7XHJcbmltcG9ydCBncmlkIGZyb20gJzVfc2hhcmVkL2Nzcy9ncmlkLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IGNscyBmcm9tICcuL0dyaWRQaG90by5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEFydGljbGVQaG90byB9IGZyb20gJy4uL0FydGljbGVQb3N0L0FydGljbGVQaG90byc7XHJcbmltcG9ydCB7IEFydGljbGVQaG90b1R5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC90eXBlcy9BcnRpY2xlUGhvdG8nO1xyXG5cclxuaW50ZXJmYWNlIEdyaWRQb3N0c1Byb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGRhdGE/OiBBcnRpY2xlUGhvdG9UeXBlW107XHJcbiAgICBzaG93U2tlbGV0b24/OiBib29sZWFuO1xyXG4gICAgc2hvd0VuZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRQaG90byA9IChwcm9wczogR3JpZFBvc3RzUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHNob3dTa2VsZXRvbixcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgc2hvd0VuZCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBza2VsZXRvbiA9IChcclxuICAgICAgICBuZXcgQXJyYXkoMTIpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGdyaWRbJ2dyaWRfX2NvbC0yJ10sIGdyaWRbJ2dyaWRfX2NvbC1tb2ItNCddKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFydGljbGVQaG90byAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gKFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgICAmJiBkYXRhPy5sZW5ndGggPiAwXHJcbiAgICAgICAgJiYgZGF0YS5tYXAoKGl0ZW06IEFydGljbGVQaG90b1R5cGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb3BUaGVtZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtPy5tYWluPy5zaG93UHJldmlldykge1xyXG4gICAgICAgICAgICAgICAgcHJvcFRoZW1lID0gaXRlbT8ubWFpbj8ucHJldmlld0ludmVydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBBcHBUaGVtZS5EQVJLXHJcbiAgICAgICAgICAgICAgICAgICAgOiBBcHBUaGVtZS5MSUdIVDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkWydncmlkX19jb2wtMiddLCBncmlkWydncmlkX19jb2wtbW9iLTQnXSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVQaG90b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVByb3A9e3Byb3BUaGVtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuYmxvY2spfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoZ3JpZC5ncmlkLCBjbHMuZ3JpZCwgY2xhc3NOYW1lKX0+XHJcbiAgICAgICAgICAgICAgICB7IHNob3dTa2VsZXRvbiA/IHNrZWxldG9uIDogY29udGVudCB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0VuZCAmJiA8RW5kIC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7dXNlTWVtbywgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7QXJ0aWNsZUNhdGVnb3J5LCBBcnRpY2xlQ2F0ZWdvcnlNb2RlLH0gZnJvbSAnNF9lbnRpdGllcy9DYXRlZ29yeSc7XHJcbmltcG9ydCB1c2VIZWlnaHQgZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VIZWlnaHQnO1xyXG5pbXBvcnQge0FwcFRoZW1lfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHt1c2VUaGVtZX0gZnJvbSAnNV9zaGFyZWQvbGlicy9ob29rcy91c2VUaGVtZSc7XHJcbmltcG9ydCB7Um91dGVyUGF0aH0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL3JvdXRlci9yb3V0ZXJDb25maWcnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vQXJ0aWNsZVBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge1Bvc3RBcnRpY2xlVHlwZX0gZnJvbSAnLi4vLi4vbW9kZWwvdHlwZXMvUG9zdEFydGljbGUnO1xyXG5pbXBvcnQge1NrZWxldG9uLCBTa2VsZXRvbk1vZGV9IGZyb20gXCI1X3NoYXJlZC91aS9Ta2VsZXRvbi9Ta2VsZXRvblwiO1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVQb3N0UHJvcHMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgdGhlbWVQcm9wPzogQXBwVGhlbWU7XHJcbiAgICBkYXRhPzogUG9zdEFydGljbGVUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXJ0aWNsZVBvc3QgPSAocHJvcHM6IEFydGljbGVQb3N0UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHRoZW1lUHJvcCxcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcclxuICAgIGNvbnN0IGVsUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgaGVpZ2h0RWwgPSB1c2VIZWlnaHQoZWxSZWYsIDEuMTUpO1xyXG4gICAgY29uc3QgcHJldmlld1VybCA9IGRhdGE/Lm1haW4/LnByZXZpZXc/LmRhdGE/LmZvcm1hdHM/LmxhcmdlPy51cmxcclxuICAgICAgICB8fCBkYXRhPy5tYWluPy5wcmV2aWV3Py5kYXRhPy5mb3JtYXRzPy5tZWRpdW0/LnVybFxyXG4gICAgICAgIHx8IGRhdGE/Lm1haW4/LnByZXZpZXc/LmRhdGE/LmZvcm1hdHM/LnNtYWxsPy51cmwgfHwgJyc7XHJcbiAgICBjb25zdCBhbHRUZXh0ID0gZGF0YT8ubWFpbj8ucHJldmlldz8uZGF0YT8uYWx0ZXJuYXRpdmVUZXh0IHx8ICcjJztcclxuXHJcbiAgICBjb25zdCBza2VsZXRvbiA9IHVzZU1lbW8oKCkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtlbFJlZn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2hlaWdodEVsfXB4YCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmFydGljbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzWydhcnRpY2xlLS1za2VsZXRvbiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFNrZWxldG9uXHJcbiAgICAgICAgICAgICAgICBtb2RlPXtTa2VsZXRvbk1vZGUuQkxPQ0t9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLnNrZWxldG9uKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICksIFtoZWlnaHRFbCwgY2xhc3NOYW1lLCB0aGVtZVByb3AsIHRoZW1lXSk7XHJcblxyXG4gICAgY29uc3QgYXJ0aWNsZSA9IHVzZU1lbW8oKCkgPT4gKFxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIHJlZj17ZWxSZWZ9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHRFbH1weGAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHRvPXtgJHtSb3V0ZXJQYXRoLnBvc3RfZGV0YWlsfSR7ZGF0YT8uaWR9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzLmFydGljbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzWydhcnRpY2xlLS1jb250ZW50J10sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xzW2BhcnRpY2xlLS0ke3RoZW1lUHJvcCB8fCB0aGVtZX1gXSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE/Lm1haW4/LnNob3dQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAmJiBwcmV2aWV3VXJsXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHBpY3R1cmUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5waWN0dXJlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtfX0JBU0VfVVJMX199JHtwcmV2aWV3VXJsfWB9IGFsdD17YWx0VGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLm1haW4pfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5tYWluPy5wcmV2aWV3VGl0bGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzW2B0aXRsZS0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1haW4ucHJldmlld1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE/Lm1haW4/LnByZXZpZXdDYXB0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzLmNhcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsc1tgY2FwdGlvbi0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYWluLnByZXZpZXdDYXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YT8uY2F0ZWdvcnk/LmRhdGFcclxuICAgICAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YT8uY2F0ZWdvcnk/LmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lUHJvcD17dGhlbWVQcm9wIHx8IHRoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXtBcnRpY2xlQ2F0ZWdvcnlNb2RlLlNUQVRJQ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKSwgW2hlaWdodEVsLCBjbGFzc05hbWUsIGRhdGEsIHRoZW1lUHJvcCwgdGhlbWVdKTtcclxuXHJcbiAgICByZXR1cm4gZGF0YSA/IGFydGljbGUgOiBza2VsZXRvbjtcclxufTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IEVuZCB9IGZyb20gJzVfc2hhcmVkL3VpL0VuZC9FbmQnO1xyXG5pbXBvcnQgZ3JpZCBmcm9tICc1X3NoYXJlZC9jc3MvZ3JpZC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IEFwcFRoZW1lIH0gZnJvbSAnNV9zaGFyZWQvY29uZmlnL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCBjbHMgZnJvbSAnLi9HcmlkUG9zdHMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBBcnRpY2xlUG9zdCB9IGZyb20gJy4uL0FydGljbGVQb3N0L0FydGljbGVQb3N0JztcclxuaW1wb3J0IHsgUG9zdEFydGljbGVUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvdHlwZXMvUG9zdEFydGljbGUnO1xyXG5cclxuaW50ZXJmYWNlIEdyaWRQb3N0c1Byb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGRhdGE/OiAoUG9zdEFydGljbGVUeXBlIHwgbnVsbClbXTtcclxuICAgIHNob3dTa2VsZXRvbj86IGJvb2xlYW47XHJcbiAgICBzaG93RW5kOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZFBvc3RzID0gKHByb3BzOiBHcmlkUG9zdHNQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc2hvd1NrZWxldG9uLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICBzaG93RW5kLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IHNrZWxldG9uID0gKFxyXG4gICAgICAgIG5ldyBBcnJheSgxMikuZmlsbChudWxsKS5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbJ2dyaWRfX2NvbC0xJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbJ2dyaWRfX2NvbC1tb2ItMiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wteC1tb2ItNCddLFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFydGljbGVQb3N0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICAgICAgZGF0YVxyXG4gICAgICAgICYmIGRhdGE/Lmxlbmd0aCA+IDBcclxuICAgICAgICAmJiBkYXRhLm1hcCgoaXRlbTogUG9zdEFydGljbGVUeXBlIHwgbnVsbCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJvcFRoZW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0/Lm1haW4/LnNob3dQcmV2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wVGhlbWUgPSBpdGVtPy5tYWluPy5wcmV2aWV3SW52ZXJ0ZWRcclxuICAgICAgICAgICAgICAgICAgICA/IEFwcFRoZW1lLkRBUktcclxuICAgICAgICAgICAgICAgICAgICA6IEFwcFRoZW1lLkxJR0hUO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbJ2dyaWRfX2NvbC0xJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkWydncmlkX19jb2wtbW9iLTInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZFsnZ3JpZF9fY29sLXgtbW9iLTQnXV06IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbHNbJ21vYmlsZS1oaWRkZW4nXV06ICFpdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVQb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVByb3A9e3Byb3BUaGVtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5ibG9jayl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhncmlkLmdyaWQsIGNscy5ncmlkLCBjbGFzc05hbWUpfT5cclxuICAgICAgICAgICAgICAgIHsgc2hvd1NrZWxldG9uID8gc2tlbGV0b24gOiBjb250ZW50IH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93RW5kICYmIDxFbmQgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgQXBwVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9jb25maWcvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZVRoZW1lJztcclxuaW1wb3J0IGNscyBmcm9tICcuL0VuZC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgRW5kUHJvcHMge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgdGhlbWVQcm9wPzogQXBwVGhlbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFbmQgPSAocHJvcHM6IEVuZFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdGhlbWVQcm9wLFxyXG4gICAgICAgIGNsYXNzTmFtZSxcclxuICAgIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJsb2NrLCBjbHNbYGVkaXRvci0tJHt0aGVtZVByb3AgfHwgdGhlbWV9YF0sIGNsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICB7IHQoJ2FydGljbGVzTWVzc2FnZScpIH1cclxuICAgICAgICA8L3A+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgdXNlTGF5b3V0TW9kZSBmcm9tICc1X3NoYXJlZC9saWJzL2hvb2tzL3VzZUxheW91dE1vZGUnO1xyXG5pbXBvcnQgY2xzIGZyb20gJy4vTWFpbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgTWFpblByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKHByb3BzOiBNYWluUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgbGF5b3V0TW9kZSA9IHVzZUxheW91dE1vZGUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgIGNscy5ibG9jayxcclxuICAgICAgICAgICAgICAgICAgICBjbHNbYGJsb2NrLS0ke2xheW91dE1vZGV9YF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay1ZNzc4WiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMCAyMnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1sYWJlbC11SnNQciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMIHtcbiAgd2lkdGg6IDYwcHg7XG59XG4uc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rMSksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5biszKSwgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzQpIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKSwgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzIpLCAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rNSksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis2KSB7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis3KSB7XG4gIHdpZHRoOiAxNzBweDtcbn1cbi5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis4KSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXRoZW1lLWxpZ2h0LXpxbTVyIHtcbiAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS10aGVtZS1saWdodC16cW01ci5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLWNvbnRlbnQta2pNM2Mge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXByaW1hcnkpO1xufVxuLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tdGhlbWUtbGlnaHQtenFtNXIuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1hY3RpdmUtSGVNUFYge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS10aGVtZS1kYXJrLWJlV1ZjIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xufVxuLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tdGhlbWUtZGFyay1iZVdWYy5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLWNvbnRlbnQta2pNM2Mge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1wcmltYXJ5KTtcbn1cbi5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXRoZW1lLWRhcmstYmVXVmMuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1hY3RpdmUtSGVNUFYge1xuICBjb2xvcjogdmFyKC0tYmctZGFyayk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2lucHV0LVZuSVA2IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLVk3NzhaIHtcbiAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzEpLCAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rMyksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis0KSB7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKSwgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzIpLCAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rNSksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis2KSB7XG4gICAgd2lkdGg6IDk1cHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzcpIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzgpIHtcbiAgICB3aWR0aDogMTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XG4gIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stWTc3OFoge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDNweCAxMnB4O1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bisxKSwgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzMpLCAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rNCksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis4KSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzIpLCAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1za2VsZXRvbi1HU1RmTDpudGgtY2hpbGQoOW4rNiksIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXNrZWxldG9uLUdTVGZMOm50aC1jaGlsZCg5bis3KSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKSwgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkw6bnRoLWNoaWxkKDluKzUpIHtcbiAgICB3aWR0aDogODVweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvQXJ0aWNsZUNhdGVnb3J5L0FydGljbGVDYXRlZ29yeS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBRUk7RUFDSSxXQUFBO0FBQVI7QUFFUTtFQUdJLFlBQUE7QUFGWjtBQUtRO0VBSUksWUFBQTtBQU5aO0FBU1E7RUFDSSxZQUFBO0FBUFo7QUFVUTtFQUNJLFlBQUE7QUFSWjtBQVlJO0VBQ0ksMEJBQUE7QUFWUjtBQVlRO0VBQ0kscUNBQUE7QUFWWjtBQWFRO0VBQ0ksMkJBQUE7RUFDQSxxQ0FBQTtBQVhaO0FBZUk7RUFDSSwyQkFBQTtBQWJSO0FBZVE7RUFDSSxzQ0FBQTtBQWJaO0FBZ0JRO0VBQ0kscUJBQUE7RUFDQSxzQ0FBQTtBQWRaOztBQW1CQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQWhCSjs7QUFtQkE7RUFDSTtJQUNJLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFoQk47RUFtQlU7SUFHSSxXQUFBO0VBbkJkO0VBc0JVO0lBSUksV0FBQTtFQXZCZDtFQTBCVTtJQUNJLFlBQUE7RUF4QmQ7RUEyQlU7SUFDSSxZQUFBO0VBekJkO0FBQ0Y7QUE4QkE7RUFDSTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBNUJOO0VBK0JVO0lBSUksV0FBQTtFQWhDZDtFQW1DVTtJQUdJLFdBQUE7RUFuQ2Q7RUFzQ1U7SUFFSSxXQUFBO0VBckNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDIycHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgJi0tbGFiZWwge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXNrZWxldG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcclxcblxcclxcbiAgICAgICAgJjpudGgtY2hpbGQoOW4gKyAxKSxcXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDluICsgMyksXFxyXFxuICAgICAgICAmOm50aC1jaGlsZCg5biArIDQpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOm50aC1jaGlsZCg5biksXFxyXFxuICAgICAgICAmOm50aC1jaGlsZCg5biArIDIpLFxcclxcbiAgICAgICAgJjpudGgtY2hpbGQoOW4gKyA1KSxcXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDluICsgNikge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDluICsgNykge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDluICsgOCkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG5cXHJcXG4gICAgICAgICYuYmxvY2stLWNvbnRlbnQge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstcHJpbWFyeSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLmJsb2NrLS1hY3RpdmUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcblxcclxcbiAgICAgICAgJi5ibG9jay0tY29udGVudCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtcHJpbWFyeSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLmJsb2NrLS1hY3RpdmUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1iZy1kYXJrKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIxcHg7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiA0MnB4O1xcclxcblxcclxcbiAgICAgICAgJi0tc2tlbGV0b24ge1xcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgMSksXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOW4gKyAzKSxcXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDQpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluKSxcXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDIpLFxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgNSksXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOW4gKyA2KSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDcpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDgpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNweCAxMnB4O1xcclxcblxcclxcbiAgICAgICAgJi0tc2tlbGV0b24ge1xcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgMSksXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOW4gKyAzKSxcXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDQpLFxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgOCkge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOW4gKyAyKSxcXHJcXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg5biArIDYpLFxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgNykge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpudGgtY2hpbGQoOW4pLFxcclxcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDluICsgNSkge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogODVweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay1ZNzc4WmAsXG5cdFwiYmxvY2stLWxhYmVsXCI6IGBzcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLWxhYmVsLXVKc1ByYCxcblx0XCJibG9jay0tc2tlbGV0b25cIjogYHNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tc2tlbGV0b24tR1NUZkxgLFxuXHRcImJsb2NrLS10aGVtZS1saWdodFwiOiBgc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS10aGVtZS1saWdodC16cW01cmAsXG5cdFwiYmxvY2stLWNvbnRlbnRcIjogYHNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVDYXRlZ29yeS1BcnRpY2xlQ2F0ZWdvcnktbW9kdWxlX19ibG9jay0tY29udGVudC1rak0zY2AsXG5cdFwiYmxvY2stLWFjdGl2ZVwiOiBgc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZUNhdGVnb3J5LUFydGljbGVDYXRlZ29yeS1tb2R1bGVfX2Jsb2NrLS1hY3RpdmUtSGVNUFZgLFxuXHRcImJsb2NrLS10aGVtZS1kYXJrXCI6IGBzcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9fYmxvY2stLXRoZW1lLWRhcmstYmVXVmNgLFxuXHRcImlucHV0XCI6IGBzcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1BcnRpY2xlQ2F0ZWdvcnktQXJ0aWNsZUNhdGVnb3J5LW1vZHVsZV9faW5wdXQtVm5JUDZgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVUYWctQXJ0aWNsZVRhZy1tb2R1bGVfX2Jsb2NrLWdCNUlKIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZVRhZy1BcnRpY2xlVGFnLW1vZHVsZV9fYmxvY2stZ0I1SUoge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUFydGljbGVUYWctQXJ0aWNsZVRhZy1tb2R1bGVfX2Jsb2NrLWdCNUlKIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy80X2VudGl0aWVzL0NhdGVnb3J5L3VpL0FydGljbGVUYWcvQXJ0aWNsZVRhZy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxlQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0k7SUFDSSxlQUFBO0VBQU47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvY2sge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJibG9ja1wiOiBgc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktQXJ0aWNsZVRhZy1BcnRpY2xlVGFnLW1vZHVsZV9fYmxvY2stZ0I1SUpgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUdyaWRDYXRlZ29yeS1HcmlkQ2F0ZWdvcnktbW9kdWxlX19ibG9jay1SdlAyYyB7XG4gIGdhcDogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9HcmlkQ2F0ZWdvcnkvR3JpZENhdGVnb3J5Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksUUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZ2FwOiA0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUdyaWRDYXRlZ29yeS1HcmlkQ2F0ZWdvcnktbW9kdWxlX19ibG9jay1SdlAyY2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktTGlzdENhdGVnb3J5LUxpc3RDYXRlZ29yeS1tb2R1bGVfX25hdi1uOFliUyB7XG4gIGdhcDogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNF9lbnRpdGllcy9DYXRlZ29yeS91aS9MaXN0Q2F0ZWdvcnkvTGlzdENhdGVnb3J5Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksUUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdiB7XFxyXFxuICAgIGdhcDogNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5hdlwiOiBgc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktTGlzdENhdGVnb3J5LUxpc3RDYXRlZ29yeS1tb2R1bGVfX25hdi1uOFliU2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktTGlzdFRhZ3MtTGlzdFRhZ3MtbW9kdWxlX19ibG9jay1UWDhGOSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweCAxNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtNF9lbnRpdGllcy1DYXRlZ29yeS11aS1MaXN0VGFncy1MaXN0VGFncy1tb2R1bGVfX2Jsb2NrLVRYOEY5IHtcbiAgICBnYXA6IDhweCAxNHB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtQ2F0ZWdvcnktdWktTGlzdFRhZ3MtTGlzdFRhZ3MtbW9kdWxlX19ibG9jay1UWDhGOSB7XG4gICAgZ2FwOiA2cHggMTBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzRfZW50aXRpZXMvQ2F0ZWdvcnkvdWkvTGlzdFRhZ3MvTGlzdFRhZ3MubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksYUFBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJO0lBQ0ksYUFBQTtFQUFOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4IDE2cHg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGdhcDogOHB4IDE0cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGdhcDogNnB4IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy00X2VudGl0aWVzLUNhdGVnb3J5LXVpLUxpc3RUYWdzLUxpc3RUYWdzLW1vZHVsZV9fYmxvY2stVFg4RjlgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ibG9jay1GcnBaVSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtaW4taGVpZ2h0OiAxNTVweDtcbiAgcGFkZGluZzogNTBweCA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBvcGFjaXR5O1xufVxuLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ibG9jay1GcnBaVTpob3ZlciwgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ibG9jay1GcnBaVTpmb2N1cyB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fYmxvY2stLXRoZW1lLWxpZ2h0LXB0TWFOIHtcbiAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XG59XG4uc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2Jsb2NrLS10aGVtZS1kYXJrLVN5U0JxIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XG59XG5cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fZ3JpZC13VW1QayB7XG4gIGdhcDogMjBweDtcbn1cblxuLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX190aXRsZS13b0EwbiB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19tYWluLW1DaVFaIHtcbiAgZ2FwOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9faWNvbi1HMGhFZSB7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9faWNvbi0tdGhlbWUtbGlnaHQtY3JETU4ge1xuICBmaWxsOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xufVxuLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19pY29uLS10aGVtZS1kYXJrLVRuYmFhIHtcbiAgZmlsbDogdmFyKC0tbGlnaHQtcHJpbWFyeSk7XG59XG5cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fY2VsbC1tb2JpbGUtalZWTUYge1xuICBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fYmxvY2stRnJwWlUge1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX190aXRsZS13b0EwbiB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9faWNvbi1HMGhFZSB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2Jsb2NrLUZycFpVIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2dyaWQtd1VtUGsge1xuICAgIGdhcDogMTZweDtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX3RpdGxlLXdvQTBuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19tYWluLW1DaVFaIHtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19pY29uLUcwaEVlIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19pY29uLS1kZXNrdG9wLURYS3ZzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2NlbGwtbW9iaWxlLWpWVk1GIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0FydGljbGVEZXYvQXJ0aWNsZURldi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQUNKO0FBQ0k7RUFFSSxZQUFBO0FBQVI7QUFHSTtFQUNJLDBCQUFBO0VBQ0EscUNBQUE7QUFEUjtBQUlJO0VBQ0ksMkJBQUE7RUFDQSxvQ0FBQTtBQUZSOztBQU1BO0VBQ0ksU0FBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtBQUhKOztBQU1BO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUhKO0FBS0k7RUFDSSx5QkFBQTtBQUhSO0FBTUk7RUFDSSwwQkFBQTtBQUpSOztBQVFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBUUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxpQkFBQTtFQUxOO0VBUUU7SUFDSSxlQUFBO0VBTk47RUFTRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBUE47QUFDRjtBQVVBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBUk47RUFXRTtJQUNJLFNBQUE7RUFUTjtFQVlFO0lBQ0ksZUFBQTtFQVZOO0VBYUU7SUFDSSxTQUFBO0VBWE47RUFjRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7RUFaTjtFQWNNO0lBQ0ksYUFBQTtJQUNBLGtCQUFBO0VBWlY7RUFnQkU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtFQWROO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE1NXB4O1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDYwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIG9wYWNpdHk7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIsXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC43O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWxpZ2h0IHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5KTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA1NXB4O1xcclxcbiAgICBoZWlnaHQ6IDU1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tZGFyay1wcmltYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGZpbGw6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jZWxsLW1vYmlsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDM1cHg7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pY29uIHtcXHJcXG4gICAgICAgIHdpZHRoOiA0OHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogMDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmdyaWQge1xcclxcbiAgICAgICAgZ2FwOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1haW4ge1xcclxcbiAgICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pY29uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XFxyXFxuXFxyXFxuICAgICAgICAmLS1kZXNrdG9wIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2VsbC1tb2JpbGUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fYmxvY2stRnJwWlVgLFxuXHRcImJsb2NrLS10aGVtZS1saWdodFwiOiBgc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2Jsb2NrLS10aGVtZS1saWdodC1wdE1hTmAsXG5cdFwiYmxvY2stLXRoZW1lLWRhcmtcIjogYHNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19ibG9jay0tdGhlbWUtZGFyay1TeVNCcWAsXG5cdFwiZ3JpZFwiOiBgc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2dyaWQtd1VtUGtgLFxuXHRcInRpdGxlXCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fdGl0bGUtd29BMG5gLFxuXHRcIm1haW5cIjogYHNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19tYWluLW1DaVFaYCxcblx0XCJpY29uXCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9faWNvbi1HMGhFZWAsXG5cdFwiaWNvbi0tdGhlbWUtbGlnaHRcIjogYHNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19pY29uLS10aGVtZS1saWdodC1jckRNTmAsXG5cdFwiaWNvbi0tdGhlbWUtZGFya1wiOiBgc3JjLTRfZW50aXRpZXMtRGV2LXVpLUFydGljbGVEZXYtQXJ0aWNsZURldi1tb2R1bGVfX2ljb24tLXRoZW1lLWRhcmstVG5iYWFgLFxuXHRcImNlbGwtbW9iaWxlXCI6IGBzcmMtNF9lbnRpdGllcy1EZXYtdWktQXJ0aWNsZURldi1BcnRpY2xlRGV2LW1vZHVsZV9fY2VsbC1tb2JpbGUtalZWTUZgLFxuXHRcImljb24tLWRlc2t0b3BcIjogYHNyYy00X2VudGl0aWVzLURldi11aS1BcnRpY2xlRGV2LUFydGljbGVEZXYtbW9kdWxlX19pY29uLS1kZXNrdG9wLURYS3ZzYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtNF9lbnRpdGllcy1EZXYtdWktR3JpZERldi1HcmlkRGV2LW1vZHVsZV9fYmxvY2stSXNLT3Uge1xuICBnYXA6IDY1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktR3JpZERldi1HcmlkRGV2LW1vZHVsZV9fbGlzdC1DQko0SyB7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcmMtNF9lbnRpdGllcy1EZXYtdWktR3JpZERldi1HcmlkRGV2LW1vZHVsZV9faXRlbS1CNUN2YSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtRGV2LXVpLUdyaWREZXYtR3JpZERldi1tb2R1bGVfX2Jsb2NrLUlzS091IHtcbiAgICBnYXA6IDMwcHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLURldi11aS1HcmlkRGV2LUdyaWREZXYtbW9kdWxlX19saXN0LUNCSjRLIHtcbiAgICBnYXA6IDhweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjLzRfZW50aXRpZXMvRGV2L3VpL0dyaWREZXYvR3JpZERldi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBTUE7RUFDSTtJQUNJLFNBQUE7RUFITjtFQU1FO0lBQ0ksUUFBQTtFQUpOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgZ2FwOiA2NXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBnYXA6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxpc3Qge1xcclxcbiAgICAgICAgZ2FwOiA4cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy00X2VudGl0aWVzLURldi11aS1HcmlkRGV2LUdyaWREZXYtbW9kdWxlX19ibG9jay1Jc0tPdWAsXG5cdFwibGlzdFwiOiBgc3JjLTRfZW50aXRpZXMtRGV2LXVpLUdyaWREZXYtR3JpZERldi1tb2R1bGVfX2xpc3QtQ0JKNEtgLFxuXHRcIml0ZW1cIjogYHNyYy00X2VudGl0aWVzLURldi11aS1HcmlkRGV2LUdyaWREZXYtbW9kdWxlX19pdGVtLUI1Q3ZhYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19hcnRpY2xlLVVJejRrIHtcbiAgaGVpZ2h0OiA1MTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fYXJ0aWNsZS0tdGhlbWUtbGlnaHQtZTVhTjQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xufVxuLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2FydGljbGUtLXRoZW1lLWRhcmstd0hyUGsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XG59XG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fYXJ0aWNsZS0tY29udGVudC1NYUxIMyB7XG4gIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZy1sKTtcbn1cblxuLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX3NrZWxldG9uLUl3enc2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX3BpY3R1cmUtSktoYV8ge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5zcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19waWN0dXJlLUpLaGFfIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5zcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19tYWluLWxtcU1pIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fdGl0bGUtZjM3aEgge1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM4cHg7XG59XG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fdGl0bGUtLXRoZW1lLWxpZ2h0LXl6clFJIHtcbiAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fdGl0bGUtLXRoZW1lLWRhcmstSWRCcU4ge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcbn1cblxuLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2NhcHRpb24tdW5hUDAge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fY2FwdGlvbi0tdGhlbWUtbGlnaHQtSFdWclEge1xuICBjb2xvcjogdmFyKC0tZGFyay1zZWNvbmRhcnkpO1xufVxuLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2NhcHRpb24tLXRoZW1lLWRhcmstV00xczcge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtc2Vjb25kYXJ5KTtcbn1cblxuLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX3RhZy1zWFFBViB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XG4gIC5zcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19hcnRpY2xlLS1jb250ZW50LU1hTEgzIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1jYXJkLXBhZGRpbmctbSk7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX3RpdGxlLWYzN2hIIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2NhcHRpb24tdW5hUDAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2FydGljbGUtLWNvbnRlbnQtTWFMSDMge1xuICAgIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZy1zKTtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fdGl0bGUtZjM3aEgge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fY2FwdGlvbi11bmFQMCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNF9lbnRpdGllcy9QaG90by91aS9BcnRpY2xlUG9zdC9BcnRpY2xlUGhvdG8ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNJO0VBQ0kscUNBQUE7QUFDUjtBQUVJO0VBQ0ksb0NBQUE7QUFBUjtBQUdJO0VBQ0ksOEJBQUE7QUFEUjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFGUjs7QUFNQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUhKO0FBS0k7RUFDSSwwQkFBQTtBQUhSO0FBTUk7RUFDSSwwQkFBQTtBQUpSOztBQVFBO0VBQ0ksZUFBQTtBQUxKO0FBT0k7RUFDSSw0QkFBQTtBQUxSO0FBUUk7RUFDSSw2QkFBQTtBQU5SOztBQVVBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQVBKOztBQVVBO0VBRVE7SUFDSSw4QkFBQTtFQVJWO0VBWUU7SUFDSSxlQUFBO0VBVk47RUFhRTtJQUNJLGVBQUE7RUFYTjtBQUNGO0FBY0E7RUFFUTtJQUNJLDhCQUFBO0VBYlY7RUFpQkU7SUFDSSxlQUFBO0VBZk47RUFrQkU7SUFDSSxlQUFBO0VBaEJOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFydGljbGUge1xcclxcbiAgICBoZWlnaHQ6IDUxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWNjZW50KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZy1sKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2tlbGV0b24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGljdHVyZSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzhweDtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstc2Vjb25kYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1zZWNvbmRhcnkpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi50YWcge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xcclxcbiAgICAuYXJ0aWNsZSB7XFxyXFxuICAgICAgICAmLS1jb250ZW50IHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1jYXJkLXBhZGRpbmctbSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FwdGlvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmFydGljbGUge1xcclxcbiAgICAgICAgJi0tY29udGVudCB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nLXMpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhcHRpb24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImFydGljbGVcIjogYHNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2FydGljbGUtVUl6NGtgLFxuXHRcImFydGljbGUtLXRoZW1lLWxpZ2h0XCI6IGBzcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19hcnRpY2xlLS10aGVtZS1saWdodC1lNWFONGAsXG5cdFwiYXJ0aWNsZS0tdGhlbWUtZGFya1wiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fYXJ0aWNsZS0tdGhlbWUtZGFyay13SHJQa2AsXG5cdFwiYXJ0aWNsZS0tY29udGVudFwiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fYXJ0aWNsZS0tY29udGVudC1NYUxIM2AsXG5cdFwic2tlbGV0b25cIjogYHNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX3NrZWxldG9uLUl3enc2YCxcblx0XCJwaWN0dXJlXCI6IGBzcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19waWN0dXJlLUpLaGFfYCxcblx0XCJtYWluXCI6IGBzcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19tYWluLWxtcU1pYCxcblx0XCJ0aXRsZVwiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fdGl0bGUtZjM3aEhgLFxuXHRcInRpdGxlLS10aGVtZS1saWdodFwiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fdGl0bGUtLXRoZW1lLWxpZ2h0LXl6clFJYCxcblx0XCJ0aXRsZS0tdGhlbWUtZGFya1wiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fdGl0bGUtLXRoZW1lLWRhcmstSWRCcU5gLFxuXHRcImNhcHRpb25cIjogYHNyYy00X2VudGl0aWVzLVBob3RvLXVpLUFydGljbGVQb3N0LUFydGljbGVQaG90by1tb2R1bGVfX2NhcHRpb24tdW5hUDBgLFxuXHRcImNhcHRpb24tLXRoZW1lLWxpZ2h0XCI6IGBzcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX19jYXB0aW9uLS10aGVtZS1saWdodC1IV1ZyUWAsXG5cdFwiY2FwdGlvbi0tdGhlbWUtZGFya1wiOiBgc3JjLTRfZW50aXRpZXMtUGhvdG8tdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBob3RvLW1vZHVsZV9fY2FwdGlvbi0tdGhlbWUtZGFyay1XTTFzN2AsXG5cdFwidGFnXCI6IGBzcmMtNF9lbnRpdGllcy1QaG90by11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUGhvdG8tbW9kdWxlX190YWctc1hRQVZgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUdyaWRQaG90by1HcmlkUGhvdG8tbW9kdWxlX19ibG9jay1aQ0E2ZyB7XG4gIGdhcDogNjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy00X2VudGl0aWVzLVBob3RvLXVpLUdyaWRQaG90by1HcmlkUGhvdG8tbW9kdWxlX19ibG9jay1aQ0E2ZyB7XG4gICAgZ2FwOiAzMHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNF9lbnRpdGllcy9QaG90by91aS9HcmlkUGhvdG8vR3JpZFBob3RvLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQU1BO0VBQ0k7SUFDSSxTQUFBO0VBSE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvY2sge1xcclxcbiAgICBnYXA6IDY1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMTIwMHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBnYXA6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmxvY2tcIjogYHNyYy00X2VudGl0aWVzLVBob3RvLXVpLUdyaWRQaG90by1HcmlkUGhvdG8tbW9kdWxlX19ibG9jay1aQ0E2Z2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2FydGljbGUtS2dXazQge1xuICBoZWlnaHQ6IDUxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xufVxuLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19hcnRpY2xlLS10aGVtZS1saWdodC1ERGx1biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XG59XG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2FydGljbGUtLXRoZW1lLWRhcmstUlBxR3oge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XG59XG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2FydGljbGUtLWNvbnRlbnQtaEN4c2sge1xuICBwYWRkaW5nOiB2YXIoLS1jYXJkLXBhZGRpbmctbCk7XG59XG5cbi5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fc2tlbGV0b24tY0dLSl8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX3BpY3R1cmUtYzI5NW4ge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fcGljdHVyZS1jMjk1biBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX21haW4tZWVJMEkge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fdGl0bGUtQUtGaG8ge1xuICBmb250LXNpemU6IDM4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbi5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fdGl0bGUtLXRoZW1lLWxpZ2h0LWkxenJXIHtcbiAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XG59XG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX3RpdGxlLS10aGVtZS1kYXJrLWFaZXlOIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XG59XG5cbi5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fY2FwdGlvbi1xMnNXSyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fY2FwdGlvbi0tdGhlbWUtbGlnaHQtWDZIVE0ge1xuICBjb2xvcjogdmFyKC0tZGFyay1zZWNvbmRhcnkpO1xufVxuLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19jYXB0aW9uLS10aGVtZS1kYXJrLWh3MDM1IHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkpO1xufVxuXG4uc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX3RhZy1mak9tSyB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19hcnRpY2xlLUtnV2s0IHtcbiAgICBoZWlnaHQ6IDQ2MHB4O1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fYXJ0aWNsZS0tY29udGVudC1oQ3hzayB7XG4gICAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nLW0pO1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fdGl0bGUtQUtGaG8ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2NhcHRpb24tcTJzV0sge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19hcnRpY2xlLUtnV2s0IHtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19hcnRpY2xlLS1jb250ZW50LWhDeHNrIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1jYXJkLXBhZGRpbmctcyk7XG4gIH1cbiAgLnNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX190aXRsZS1BS0ZobyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5zcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fY2FwdGlvbi1xMnNXSyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNF9lbnRpdGllcy9Qb3N0L3VpL0FydGljbGVQb3N0L0FydGljbGVQb3N0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUNJO0VBQ0kscUNBQUE7QUFDUjtBQUVJO0VBQ0ksb0NBQUE7QUFBUjtBQUdJO0VBQ0ksOEJBQUE7QUFEUjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBRko7QUFJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFGUjs7QUFNQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtJO0VBQ0ksMEJBQUE7QUFIUjtBQU1JO0VBQ0ksMEJBQUE7QUFKUjs7QUFRQTtFQUNJLGVBQUE7QUFMSjtBQU9JO0VBQ0ksNEJBQUE7QUFMUjtBQVFJO0VBQ0ksMkJBQUE7QUFOUjs7QUFVQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFQSjs7QUFVQTtFQUNJO0lBQ0ksYUFBQTtFQVBOO0VBU007SUFDSSw4QkFBQTtFQVBWO0VBV0U7SUFDSSxlQUFBO0VBVE47RUFZRTtJQUNJLGVBQUE7RUFWTjtBQUNGO0FBYUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtFQVhOO0VBYU07SUFDSSw4QkFBQTtFQVhWO0VBZUU7SUFDSSxlQUFBO0VBYk47RUFnQkU7SUFDSSxlQUFBO0VBZE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXJ0aWNsZSB7XFxyXFxuICAgIGhlaWdodDogNTEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWxpZ2h0IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jYXJkLXBhZGRpbmctbCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNrZWxldG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpY3R1cmUge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDM4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtZGFyayB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY2FwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG5cXHJcXG4gICAgJi0tdGhlbWUtbGlnaHQge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstc2Vjb25kYXJ5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS10aGVtZS1kYXJrIHtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoIC0tbGlnaHQtcHJpbWFyeSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRhZyB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmFydGljbGUge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0NjBweDtcXHJcXG5cXHJcXG4gICAgICAgICYtLWNvbnRlbnQge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZy1tKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuYXJ0aWNsZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI2MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG5cXHJcXG4gICAgICAgICYtLWNvbnRlbnQge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZy1zKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJhcnRpY2xlXCI6IGBzcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fYXJ0aWNsZS1LZ1drNGAsXG5cdFwiYXJ0aWNsZS0tdGhlbWUtbGlnaHRcIjogYHNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19hcnRpY2xlLS10aGVtZS1saWdodC1ERGx1bmAsXG5cdFwiYXJ0aWNsZS0tdGhlbWUtZGFya1wiOiBgc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2FydGljbGUtLXRoZW1lLWRhcmstUlBxR3pgLFxuXHRcImFydGljbGUtLWNvbnRlbnRcIjogYHNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19hcnRpY2xlLS1jb250ZW50LWhDeHNrYCxcblx0XCJza2VsZXRvblwiOiBgc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX3NrZWxldG9uLWNHS0pfYCxcblx0XCJwaWN0dXJlXCI6IGBzcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fcGljdHVyZS1jMjk1bmAsXG5cdFwibWFpblwiOiBgc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX21haW4tZWVJMElgLFxuXHRcInRpdGxlXCI6IGBzcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fdGl0bGUtQUtGaG9gLFxuXHRcInRpdGxlLS10aGVtZS1saWdodFwiOiBgc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX3RpdGxlLS10aGVtZS1saWdodC1pMXpyV2AsXG5cdFwidGl0bGUtLXRoZW1lLWRhcmtcIjogYHNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX190aXRsZS0tdGhlbWUtZGFyay1hWmV5TmAsXG5cdFwiY2FwdGlvblwiOiBgc3JjLTRfZW50aXRpZXMtUG9zdC11aS1BcnRpY2xlUG9zdC1BcnRpY2xlUG9zdC1tb2R1bGVfX2NhcHRpb24tcTJzV0tgLFxuXHRcImNhcHRpb24tLXRoZW1lLWxpZ2h0XCI6IGBzcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUFydGljbGVQb3N0LUFydGljbGVQb3N0LW1vZHVsZV9fY2FwdGlvbi0tdGhlbWUtbGlnaHQtWDZIVE1gLFxuXHRcImNhcHRpb24tLXRoZW1lLWRhcmtcIjogYHNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX19jYXB0aW9uLS10aGVtZS1kYXJrLWh3MDM1YCxcblx0XCJ0YWdcIjogYHNyYy00X2VudGl0aWVzLVBvc3QtdWktQXJ0aWNsZVBvc3QtQXJ0aWNsZVBvc3QtbW9kdWxlX190YWctZmpPbUtgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy00X2VudGl0aWVzLVBvc3QtdWktR3JpZFBvc3RzLUdyaWRQb3N0cy1tb2R1bGVfX2Jsb2NrLU95Z0NuIHtcbiAgZ2FwOiA2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTRfZW50aXRpZXMtUG9zdC11aS1HcmlkUG9zdHMtR3JpZFBvc3RzLW1vZHVsZV9fYmxvY2stT3lnQ24ge1xuICAgIGdhcDogMzBweDtcbiAgfVxuICAuc3JjLTRfZW50aXRpZXMtUG9zdC11aS1HcmlkUG9zdHMtR3JpZFBvc3RzLW1vZHVsZV9fbW9iaWxlLWhpZGRlbi1zX2J3ayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy80X2VudGl0aWVzL1Bvc3QvdWkvR3JpZFBvc3RzL0dyaWRQb3N0cy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFNQTtFQUNJO0lBQ0ksU0FBQTtFQUhOO0VBTUU7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7RUFKTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ibG9jayB7XFxyXFxuICAgIGdhcDogNjVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGdhcDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9iaWxlLWhpZGRlbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNF9lbnRpdGllcy1Qb3N0LXVpLUdyaWRQb3N0cy1HcmlkUG9zdHMtbW9kdWxlX19ibG9jay1PeWdDbmAsXG5cdFwibW9iaWxlLWhpZGRlblwiOiBgc3JjLTRfZW50aXRpZXMtUG9zdC11aS1HcmlkUG9zdHMtR3JpZFBvc3RzLW1vZHVsZV9fbW9iaWxlLWhpZGRlbi1zX2J3a2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTVfc2hhcmVkLXVpLUVuZC1FbmQtbW9kdWxlX19ibG9jay14M3dhSCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zcmMtNV9zaGFyZWQtdWktRW5kLUVuZC1tb2R1bGVfX2Jsb2NrLS10aGVtZS1saWdodC1ReFVXMSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLXNlY29uZGFyeSk7XG59XG4uc3JjLTVfc2hhcmVkLXVpLUVuZC1FbmQtbW9kdWxlX19ibG9jay0tdGhlbWUtZGFyay1vZlpwdyB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1zZWNvbmRhcnkpO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDIxNjBweCkge1xuICAuc3JjLTVfc2hhcmVkLXVpLUVuZC1FbmQtbW9kdWxlX19ibG9jay14M3dhSCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTVfc2hhcmVkLXVpLUVuZC1FbmQtbW9kdWxlX19ibG9jay14M3dhSCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvNV9zaGFyZWQvdWkvRW5kL0VuZC5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksNEJBQUE7QUFDUjtBQUVJO0VBQ0ksNkJBQUE7QUFBUjs7QUFJQTtFQUNJO0lBQ0ksZUFBQTtFQUROO0FBQ0Y7QUFJQTtFQUNJO0lBQ0ksZUFBQTtFQUZOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2NrIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAmLS10aGVtZS1saWdodCB7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1zZWNvbmRhcnkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtLXRoZW1lLWRhcmsge1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXNlY29uZGFyeSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xcclxcbiAgICAuYmxvY2sge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNV9zaGFyZWQtdWktRW5kLUVuZC1tb2R1bGVfX2Jsb2NrLXgzd2FIYCxcblx0XCJibG9jay0tdGhlbWUtbGlnaHRcIjogYHNyYy01X3NoYXJlZC11aS1FbmQtRW5kLW1vZHVsZV9fYmxvY2stLXRoZW1lLWxpZ2h0LVF4VVcxYCxcblx0XCJibG9jay0tdGhlbWUtZGFya1wiOiBgc3JjLTVfc2hhcmVkLXVpLUVuZC1FbmQtbW9kdWxlX19ibG9jay0tdGhlbWUtZGFyay1vZlpwd2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLTVfc2hhcmVkLXVpLU1haW4tTWFpbi1tb2R1bGVfX2Jsb2NrLUFkcFlyIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nLWJvdHRvbTogMTE1cHg7XG59XG4uc3JjLTVfc2hhcmVkLXVpLU1haW4tTWFpbi1tb2R1bGVfX2Jsb2NrLS1kZXRhaWwtdHRHUWYge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAyMTYwcHgpIHtcbiAgLnNyYy01X3NoYXJlZC11aS1NYWluLU1haW4tbW9kdWxlX19ibG9jay1BZHBZciB7XG4gICAgcGFkZGluZy1ib3R0b206IDExMHB4O1xuICB9XG59XG5AbWVkaWEgKHdpZHRoIDw9IDEyMDBweCkge1xuICAuc3JjLTVfc2hhcmVkLXVpLU1haW4tTWFpbi1tb2R1bGVfX2Jsb2NrLUFkcFlyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgfVxuICAuc3JjLTVfc2hhcmVkLXVpLU1haW4tTWFpbi1tb2R1bGVfX2Jsb2NrLS1saXN0LU1qSURJIHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy81X3NoYXJlZC91aS9NYWluL01haW4ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0ksaUJBQUE7QUFDUjs7QUFHQTtFQUNJO0lBQ0kscUJBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSTtJQUNJLG9CQUFBO0VBRE47RUFHTTtJQUNJLGtCQUFBO0VBRFY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvY2sge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMTVweDtcXHJcXG5cXHJcXG4gICAgJi0tZGV0YWlsIHtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAod2lkdGggPD0gMjE2MHB4KSB7XFxyXFxuICAgIC5ibG9jayB7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcXHJcXG4gICAgLmJsb2NrIHtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcclxcblxcclxcbiAgICAgICAgJi0tbGlzdCB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImJsb2NrXCI6IGBzcmMtNV9zaGFyZWQtdWktTWFpbi1NYWluLW1vZHVsZV9fYmxvY2stQWRwWXJgLFxuXHRcImJsb2NrLS1kZXRhaWxcIjogYHNyYy01X3NoYXJlZC11aS1NYWluLU1haW4tbW9kdWxlX19ibG9jay0tZGV0YWlsLXR0R1FmYCxcblx0XCJibG9jay0tbGlzdFwiOiBgc3JjLTVfc2hhcmVkLXVpLU1haW4tTWFpbi1tb2R1bGVfX2Jsb2NrLS1saXN0LU1qSURJYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZUNhdGVnb3J5Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZUNhdGVnb3J5Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVDYXRlZ29yeS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVUYWcubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlVGFnLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVUYWcubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmlkQ2F0ZWdvcnkubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmlkQ2F0ZWdvcnkubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR3JpZENhdGVnb3J5Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTGlzdENhdGVnb3J5Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTGlzdENhdGVnb3J5Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xpc3RDYXRlZ29yeS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xpc3RUYWdzLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTGlzdFRhZ3MubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTGlzdFRhZ3MubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlRGV2Lm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZURldi5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlRGV2Lm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR3JpZERldi5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWREZXYubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR3JpZERldi5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVQaG90by5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FydGljbGVQaG90by5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlUGhvdG8ubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmlkUGhvdG8ubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmlkUGhvdG8ubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vR3JpZFBob3RvLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXJ0aWNsZVBvc3QubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlUG9zdC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcnRpY2xlUG9zdC5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWRQb3N0cy5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0dyaWRQb3N0cy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9HcmlkUG9zdHMubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FbmQubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9FbmQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRW5kLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWFpbi5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01haW4ubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWFpbi5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJNZXRhUGFnZSIsInJ0a0FwaSIsIlJvdXRlcyIsIkNhdGVnb3J5TW9kZSIsImNhdGVnb3J5QXBpIiwiaW5qZWN0RW5kcG9pbnRzIiwiZW5kcG9pbnRzIiwiYnVpbGQiLCJmZXRjaENhdGVnb3J5TGlzdCIsInF1ZXJ5IiwibW9kZSIsInVybCIsIkRFViIsIkRFVl9UQUdfTElTVCIsIlBPU1RfQ0FUX0xJU1QiLCJwYXJhbXMiLCJfbGltaXQiLCJwcm92aWRlc1RhZ3MiLCJvdmVycmlkZUV4aXN0aW5nIiwidXNlRmV0Y2hDYXRlZ29yeUxpc3QiLCJ1c2VGZXRjaENhdGVnb3J5TGlzdFF1ZXJ5IiwiQXJ0aWNsZUNhdGVnb3J5IiwiQXJ0aWNsZUNhdGVnb3J5TW9kZSIsIkxpc3RDYXRlZ29yeSIsIkdyaWRDYXRlZ29yeSIsIkxpc3RUYWdzIiwiQXJ0aWNsZVRhZyIsImRldkFwaSIsImZldGNoRGV2TGlzdCIsIkRFVlNfTElTVCIsImZldGNoRGV2QnlJZCIsImlkIiwicG9wdWxhdGUiLCJ0cmFuc2Zvcm1SZXNwb25zZSIsInJlc3BvbnNlIiwiZGF0YSIsInVzZUZldGNoRGV2QnlJZCIsInVzZUZldGNoRGV2QnlJZFF1ZXJ5IiwidXNlTGF6eUZldGNoRGV2TGlzdCIsInVzZUxhenlGZXRjaERldkxpc3RRdWVyeSIsIkFydGljbGVEZXYiLCJHcmlkRGV2IiwiZ2V0RGV2TGlzdCIsImRldkxpc3RSZWR1Y2VyIiwiZGV2TGlzdEFjdGlvbnMiLCJmZXRjaE5leHREZXZMaXN0IiwiZ2V0RGV2TGlzdFBhZ2UiLCJnZXREZXZMaXN0Q291bnQiLCJnZXREZXZMaXN0TG9hZGluZyIsImdldERldkxpc3RDYXRlZ29yeSIsImluaXREZXYiLCJzdGF0ZSIsImRldkxpc3QiLCJpc0xvYWRpbmciLCJnZXREZXZMaXN0UGVyUGFnZSIsInBlclBhZ2UiLCJwYWdlIiwiY291bnQiLCJjYXRlZ29yeSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJQYWdpbmF0aW9uUGFyYW1zIiwicHJvcHMiLCJ0aHVua0FQSSIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJyZXBsYWNlIiwibGlzdEluZGV4IiwibGlzdExlbmd0aCIsInBhZ2VOdW1iZXIiLCJTSVpFIiwiUEFHRSIsInNvcnQiLCJUQUciLCJnZXREYXRhIiwidGhlbiIsIm1ldGEiLCJkYXRhTWV0aG9kIiwicmVwbGFjZURhdGEiLCJhZGREYXRhIiwicG9zdExpc3RBY3Rpb25zIiwic2V0UGFnaW5hdGlvbiIsInBhZ2luYXRpb24iLCJjcmVhdGVTbGljZSIsImNyZWF0ZUVudGl0eUFkYXB0ZXIiLCJkZXZMaXN0QWRhcHRlciIsInNlbGVjdElkIiwiaXRlbSIsImdldFNlbGVjdG9ycyIsImdldEluaXRpYWxTdGF0ZSIsImluaXRpYWxTdGF0ZSIsImVycm9ycyIsInVuZGVmaW5lZCIsImlkcyIsImVudGl0aWVzIiwiZGV2TGlzdFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0UGFnZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRMZW5ndGgiLCJhZGRNYW55Iiwic2V0QWxsIiwicGFnZUNvdW50IiwidG9nZ2xlQ2F0ZWdvcnkiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsInJlcXVlc3QiLCJhZGRNYXRjaGVyIiwibWF0Y2hQZW5kaW5nIiwiYXJnIiwib3JpZ2luYWxBcmdzIiwicmVtb3ZlQWxsIiwibWF0Y2hGdWxmaWxsZWQiLCJtYXRjaFJlamVjdGVkIiwicmVkdWNlciIsImFjdGlvbnMiLCJwaG90b0FwaSIsImZldGNoUGhvdG9MaXN0IiwiUEhPVE9fTElTVCIsImZldGNoUGhvdG9CeUlkIiwidXNlRmV0Y2hQaG90b0J5SWQiLCJ1c2VGZXRjaFBob3RvQnlJZFF1ZXJ5IiwidXNlTGF6eUZldGNoUGhvdG9MaXN0IiwidXNlTGF6eUZldGNoUGhvdG9MaXN0UXVlcnkiLCJHcmlkUGhvdG8iLCJnZXRQaG90b0xpc3QiLCJwaG90b0xpc3RSZWR1Y2VyIiwicGhvdG9MaXN0QWN0aW9ucyIsImZldGNoTmV4dFBob3RvTGlzdCIsImluaXRQaG90b0xpc3QiLCJnZXRQaG90b0xpc3RDb3VudCIsImdldFBob3RvTGlzdExvYWRpbmciLCJnZXRQaG90b0xpc3RQYWdlIiwicGhvdG9MaXN0IiwiZ2V0UGhvdG9MaXN0UGVyUGFnZSIsInBob3RvTGlzdEFkYXB0ZXIiLCJwaG90b0xpc3RTbGljZSIsInBvc3RBcGkiLCJmZXRjaFBvc3RMaXN0IiwiUE9TVFNfTElTVCIsImZldGNoUG9zdEJ5SWQiLCJ1c2VGZXRjaFBvc3RCeUlkIiwidXNlRmV0Y2hQb3N0QnlJZFF1ZXJ5IiwidXNlTGF6eUZldGNoUG9zdExpc3QiLCJ1c2VMYXp5RmV0Y2hQb3N0TGlzdFF1ZXJ5IiwiR3JpZFBvc3RzIiwiZ2V0UG9zdExpc3QiLCJwb3N0TGlzdFJlZHVjZXIiLCJmZXRjaE5leHRQb3N0TGlzdCIsImluaXRQb3N0TGlzdCIsImdldFBvc3RMaXN0Q291bnQiLCJnZXRQb3N0TGlzdExvYWRpbmciLCJnZXRQb3N0TGlzdFBhZ2UiLCJnZXRQb3N0TGlzdENhdGVnb3J5IiwicG9zdExpc3QiLCJnZXRQb3N0TGlzdFBlclBhZ2UiLCJDQVQiLCJwb3N0TGlzdEFkYXB0ZXIiLCJwb3N0TGlzdFNsaWNlIiwic2V0UGVyUGFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlSGVpZ2h0IiwiZWxlbWVudFJlZiIsInByb3BvcnRpb24iLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJ1cGRhdGVIZWlnaHQiLCJ3aWR0aCIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUmVhY3QiLCJIZWxtZXQiLCJ1c2VUcmFuc2xhdGlvbiIsImpzeCIsIl9qc3giLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeHMiLCJfanN4cyIsInQiLCJjb250ZW50TG9hZGluZyIsImNoaWxkcmVuIiwiY29udGVudCIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImtleXdvcmRzIiwibWV0YVJvYm90cyIsInN0cnVjdHVyZWREYXRhIiwidHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGFzc05hbWVzIiwidXNlVGhlbWUiLCJTa2VsZXRvbiIsIlNrZWxldG9uTW9kZSIsImNscyIsImNsYXNzTmFtZSIsImlzQWN0aXZlIiwidGhlbWVQcm9wIiwiY2xpY2tFdmVudCIsInRoZW1lIiwiVGFnIiwiU1RBVElDIiwic2VsZWN0RXZlbnQiLCJ1bnNlbGVjdEV2ZW50Iiwic2tlbGV0b24iLCJCTE9DSyIsImJsb2NrIiwiSU5QVVQiLCJ2YWx1ZSIsImNoZWNrZWQiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJpbnB1dCIsInRpdGxlIiwic2hvd1NrZWxldG9uIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZGV4IiwibGVuZ3RoIiwiQXJ0aWNsZUNhdGVnb3J5VHlwZSIsInNlbGVjdGVkSXRlbSIsIm5hdiIsInVzZU1lbW8iLCJMaW5rIiwiZ3JpZCIsIkljb24iLCJSb3V0ZXJQYXRoIiwidG8iLCJkZXZfZGV0YWlsIiwiaWNvbiIsIm1haW4iLCJ0YWdzIiwiRW5kIiwic2hvd0VuZCIsImxpc3QiLCJ1c2VSZWYiLCJBcnRpY2xlUGhvdG8iLCJlbFJlZiIsImhlaWdodEVsIiwicHJldmlld1VybCIsInByZXZpZXciLCJmb3JtYXRzIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsImFsdFRleHQiLCJhbHRlcm5hdGl2ZVRleHQiLCJyZWYiLCJzdHlsZSIsImFydGljbGUiLCJwaG90b19kZXRhaWwiLCJzaG93UHJldmlldyIsInBpY3R1cmUiLCJzcmMiLCJfX0JBU0VfVVJMX18iLCJhbHQiLCJwcmV2aWV3VGl0bGUiLCJwcmV2aWV3Q2FwdGlvbiIsImNhcHRpb24iLCJ0YWciLCJBcHBUaGVtZSIsInByb3BUaGVtZSIsInByZXZpZXdJbnZlcnRlZCIsIkRBUksiLCJMSUdIVCIsIkFydGljbGVQb3N0IiwicG9zdF9kZXRhaWwiLCJ1c2VMYXlvdXRNb2RlIiwiTWFpbiIsImxheW91dE1vZGUiXSwic291cmNlUm9vdCI6IiJ9