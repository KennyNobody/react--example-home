import { createSlice } from '@reduxjs/toolkit';
import { DetailPostSchema } from '../types/DetailPostSchema';

const initialState: DetailPostSchema = {
    data: undefined,
    isLoading: false,
    errors: undefined,
};

export const detailPostSlice = createSlice({
    name: 'detailPost',
    initialState,
    reducers: {},
});

export const {
    actions: detailPostActions,
    reducer: detailPostReducer,
} = detailPostSlice;
