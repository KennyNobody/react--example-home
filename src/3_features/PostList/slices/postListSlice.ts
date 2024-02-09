import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '0_app/prodivers/StoreProvider';
import {
    postApi,
    ArticlePostType,
} from '4_entities/Post';
import { PostListSchema } from '../types/PostListSchema';
import {FetchArgs} from "@reduxjs/toolkit/query";

const postListAdapter = createEntityAdapter<ArticlePostType>();
postListAdapter.selectId = (item: ArticlePostType) => item.id;

export const getPostList = postListAdapter.getSelectors<StateSchema>(
    (state) => state.postList || postListAdapter.getInitialState(),
);

const initialState: PostListSchema = {
    page: 1,
    perPage: 8,
    isLoading: false,
    errors: undefined,
    count: 1,
    ids: [],
    entities: {},
};

const postListSlice = createSlice({
    name: 'postListSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLength: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
        setData: (state, action: PayloadAction<ArticlePostType[]>) => {
            console.log('Выставили');
            postListAdapter.addMany(state, action.payload);
        },
        replaceData: (state, action: PayloadAction<ArticlePostType[]>) => {
            console.log('Заменили');
            postListAdapter.setAll(state, action.payload);
        },
        setPagination: (state, action) => {
            const pagination = action.payload;
            console.log('Подставляем данные пагинации:');
            console.log(pagination);

            state.page = pagination.page;
            state.count = pagination.pageCount;
        },
    },
    extraReducers: (builder) => {
        const request = postApi.endpoints.fetchPostList;

        builder
            .addMatcher(request.matchPending, (state, action) => {
                const { replace } = action.meta.arg.originalArgs;
                if (replace) postListAdapter.removeAll(state);

                state.errors = undefined;
                state.isLoading = true;
            })
            .addMatcher(request.matchFulfilled, (state) => {
                state.isLoading = false;
            })
            .addMatcher(request.matchRejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: postListReducer,
    actions: postListActions,
} = postListSlice;
