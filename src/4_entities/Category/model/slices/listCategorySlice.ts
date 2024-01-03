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
import { fetchListCategory } from '../services/fetchListCategory/fetchListCategory';

const listCategoryAdapter = createEntityAdapter<ArticleCategoryType>({
    selectId: (article) => article.id,
});

export const getListCategory = listCategoryAdapter.getSelectors<StateSchema>(
    (state) => state.listCategory || listCategoryAdapter.getInitialState(),
);

const initialState: ListCategorySchema = {
    isLoading: false,
    errors: undefined,
    ids: [],
    entities: {},
    _inited: false,
};

const listCategorySlice = createSlice({
    name: 'listCategorySlice',
    initialState: listCategoryAdapter.getInitialState<ListCategorySchema>(initialState),
    reducers: {
        initState: (state) => {
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchListCategory.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(fetchListCategory.fulfilled, (
                state,
                action: PayloadAction<string>,
            ) => {
                state.isLoading = false;

                let response: AxiosResponse<ArticleCategoryType[]>;

                if (action?.payload) {
                    response = JSON.parse(action.payload);

                    listCategoryAdapter.addMany(state, response.data);
                }
            })
            .addCase(fetchListCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: listCategoryReducer,
    actions: listCategoryActions,
} = listCategorySlice;
