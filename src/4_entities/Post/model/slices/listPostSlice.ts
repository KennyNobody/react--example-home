import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '0_app/prodivers/StoreProvider';
import { ServerListResponse } from '5_shared/types/requestData';
import { postApi } from '../../api/postApi';
import { ArticlePostType } from '../types/ArticlePost';
import { ListPostSchema } from '../types/ListPostSchema';

const listPostAdapter = createEntityAdapter<ArticlePostType>({
    selectId: (article) => article.id,
});

export const getListPost = listPostAdapter.getSelectors<StateSchema>(
    (state) => state.post?.list || listPostAdapter.getInitialState(),
);

const initialState: ListPostSchema = {
    isLoading: false,
    errors: undefined,
    ids: [],
    entities: {},
    page: 1,
    perPage: 8,
    hasMore: true,
    categories: [],
    _inited: false,
};

const listPostSlice = createSlice({
    name: 'listPostSlice',
    initialState: listPostAdapter.getInitialState<ListPostSchema>(initialState),
    reducers: {
        initState: (state) => {
            state._inited = true;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setPerPage: (state, action: PayloadAction<number>) => {
            state.perPage = action.payload;
        },
        setCategoriesByString: (state, action: PayloadAction<string>) => {
            const arrStr = action.payload.split(',');
            const numberArray: number[] = [];

            for (const value of arrStr) {
                const parsedVal = Number(value);
                if (parsedVal) numberArray.push(parsedVal);
            }

            state.categories = numberArray;
        },
        toggleCategory: (state, action: PayloadAction<number>) => {
            const arr = state.categories;
            if (!arr.includes(action.payload)) {
                const newArr: number[] = state.categories;
                newArr.push(action.payload);
                state.categories = newArr;
            } else {
                state.categories = arr.filter((num) => num !== action.payload);
            }
        },
    },
    extraReducers: (builder) => {
        const fetchingInstance = postApi.endpoints.fetchPostList;

        builder
            .addMatcher(fetchingInstance.matchPending, (state, action) => {
                state.errors = undefined;
                state.isLoading = true;

                const { replaceData } = action.meta.arg.originalArgs;

                if (replaceData) listPostAdapter.removeAll(state);
            })
            .addMatcher(fetchingInstance.matchFulfilled, (state, action) => {
                // @ts-ignore
                const headers = action?.meta?.baseQueryMeta?.response?.headers;
                const { replaceData } = action.meta.arg.originalArgs;
                const totalPages = headers.get(ServerListResponse.TOTAL_PAGES);

                if (replaceData) {
                    listPostAdapter.setAll(state, action.payload);
                } else {
                    listPostAdapter.addMany(state, action.payload);
                }

                if (totalPages <= state.page) {
                    console.log('-------');
                    console.log('Total: ', totalPages);
                    console.log('state.page: ', state.page);
                    console.log('-------');
                    state.hasMore = false;
                }

                state.isLoading = false;
            })
            .addMatcher(fetchingInstance.matchRejected, (state, action) => {
                state.isLoading = false;
                // @ts-ignore
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: listPostReducer,
    actions: listPostActions,
} = listPostSlice;
