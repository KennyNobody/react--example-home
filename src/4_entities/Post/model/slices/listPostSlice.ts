import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { StateSchema } from '0_app/prodivers/StoreProvider';
import { ServerResponseHeaders } from '5_shared/types/requestData';
import { ArticlePostType } from '../types/ArticlePost';
import { ListPostSchema } from '../types/ListPostSchema';
import { fetchListPost } from '../services/fetchListPost/fetchListPost';

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
        builder
            .addCase(fetchListPost.pending, (state, action) => {
                state.errors = undefined;
                state.isLoading = true;

                if (action?.meta?.arg?.replaceData) {
                    listPostAdapter.removeAll(state);
                }
            })
            .addCase(fetchListPost.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;

                let response: AxiosResponse<ArticlePostType[]>;

                if (action?.payload) {
                    response = JSON.parse(action.payload);

                    if (action?.meta?.arg?.replaceData) {
                        listPostAdapter.setAll(state, response.data);
                    } else {
                        listPostAdapter.addMany(state, response.data);
                    }

                    if (action?.meta?.arg?.setHasMore) {
                        state.hasMore = true;
                    }

                    if (response.headers[ServerResponseHeaders.TOTAL_PAGES] <= state.page) {
                        state.hasMore = false;
                    }
                }
            })
            .addCase(fetchListPost.rejected, (state, action) => {
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
