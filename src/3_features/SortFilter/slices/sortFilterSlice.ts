import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { SortFilterSchema } from '../types/SortFilterSchema';

const initialState: SortFilterSchema = {
    category: undefined,
};

const sortFilterSlice = createSlice({
    name: 'postListSlice',
    initialState,
    reducers: {
        toggleCategory: (state, action: PayloadAction<number>) => {
            state.category = action.payload;
        },
    },
});

export const {
    reducer: sortFilterReducer,
    actions: sortFilterActions,
} = sortFilterSlice;
