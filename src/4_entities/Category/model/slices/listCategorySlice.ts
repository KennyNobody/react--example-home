import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { StateSchema } from '0_app/prodivers/StoreProvider';
import {
    ArticleCategoryType,
} from '../types/ArticleCategory';
import {
    ListCategorySchema,
} from '../types/ListCategorySchema';
import { categoryApi } from '../../api/categoryApi';

const listCategoryAdapter = createEntityAdapter<ArticleCategoryType>({
    selectId: (article) => article.id,
});

export const getListCategory = listCategoryAdapter.getSelectors<StateSchema>(
    (state) => state.category?.list || listCategoryAdapter.getInitialState(),
);

const initialState: ListCategorySchema = {
    isLoading: false,
    errors: undefined,
    ids: [],
    entities: {},
};

const listCategorySlice = createSlice({
    name: 'listCategorySlice',
    initialState: listCategoryAdapter.getInitialState<ListCategorySchema>(initialState),
    reducers: {},
    extraReducers: (builder) => {
        const request = categoryApi.endpoints.fetchCategoryList;

        builder
            .addMatcher(request.matchPending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addMatcher(request.matchFulfilled, (
                state,
                action: PayloadAction<ArticleCategoryType[]>,
            ) => {
                state.isLoading = false;
                listCategoryAdapter.addMany(state, action.payload);
            })
            .addMatcher(request.matchRejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.error.message;
            });
    },
});

export const {
    reducer: listCategoryReducer,
    actions: listCategoryActions,
} = listCategorySlice;
