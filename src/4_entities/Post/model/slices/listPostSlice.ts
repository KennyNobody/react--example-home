import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { StateSchema } from '0_app/prodivers/StoreProvider';
import { ServerResponseHeaders } from '5_shared/types/requestData';
import {
    ArticlePostType,
} from '../types/ArticlePost';
import {
    ListPostSchema,
} from '../types/ListPostSchema';
import { fetchListPost } from '../services/fetchListPost/fetchListPost';

const listPostAdapter = createEntityAdapter<ArticlePostType>({
    selectId: (article) => article.id,
});

export const getListPost = listPostAdapter.getSelectors<StateSchema>(
    (state) => state.listPost || listPostAdapter.getInitialState(),
);

const initialState: ListPostSchema = {
    isLoading: false,
    errors: undefined,
    ids: [],
    entities: {},
    page: 1,
    perPage: 8,
    hasMore: true,
};

const articlesPageSlice = createSlice({
    name: 'listPostSlice',
    initialState: listPostAdapter.getInitialState<ListPostSchema>(initialState),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchListPost.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(fetchListPost.fulfilled, (
                state,
                action: PayloadAction<string>,
            ) => {
                state.isLoading = false;

                const data: AxiosResponse<ArticlePostType[]> = JSON.parse(action.payload);
                listPostAdapter.addMany(state, data.data);

                if (data.headers[ServerResponseHeaders.TOTAL_PAGES] <= state.page) {
                    state.hasMore = false;
                }
            })
            .addCase(fetchListPost.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: listPostReducer,
    actions: listPostActions,
} = articlesPageSlice;
