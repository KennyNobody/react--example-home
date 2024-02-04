import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { PostListSchema } from '../types/PostListSchema';

const initialState: PostListSchema = {
    page: 1,
    perPage: 8,
    length: 1,
};

const postListSlice = createSlice({
    name: 'postListSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLength: (state, action: PayloadAction<number>) => {
            state.length = action.payload;
        },
    },
});

export const {
    reducer: postListReducer,
    actions: postListActions,
} = postListSlice;
