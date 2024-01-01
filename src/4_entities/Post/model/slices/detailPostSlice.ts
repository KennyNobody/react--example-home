import { createSlice } from '@reduxjs/toolkit';
import { DetailPostSchema } from '../types/DetailPostSchema';
import { fetchPostBySlug } from '../services/fetchPostBySlug/fetchPostBySlug';

const initialState: DetailPostSchema = {
    data: undefined,
    isLoading: false,
    errors: undefined,
};

export const detailPostSlice = createSlice({
    name: 'detailPost',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostBySlug.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPostBySlug.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;

                if (action?.payload?.length > 0) {
                    state.data = action?.payload?.[0];
                }
            })
            .addCase(fetchPostBySlug.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const {
    actions: detailPostActions,
    reducer: detailPostReducer,
} = detailPostSlice;
