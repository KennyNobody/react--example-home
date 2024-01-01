import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '0_app/prodivers/StoreProvider';
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
};

const articlesPageSlice = createSlice({
    name: 'listPostSlice',
    initialState: listPostAdapter.getInitialState<ListPostSchema>(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListPost.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(fetchListPost.fulfilled, (
                state,
                action: PayloadAction<ArticlePostType[]>,
            ) => {
                state.isLoading = false;
                listPostAdapter.setAll(state, action.payload);
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
