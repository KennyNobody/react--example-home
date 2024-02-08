import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { SortFilterSchema } from '../types/SortFilterSchema';

const initialState: SortFilterSchema = {
    category: undefined,
};

const sortFilterSlice = createSlice({
    name: 'sortFilterSlice',
    initialState,
    reducers: {
        toggleCategory: (state, action: PayloadAction<number | undefined>) => {
            if (state.category === action.payload) {
                state.category = undefined;
            } else {
                state.category = action.payload;
            }
        },
    },
});

export const {
    reducer: sortFilterReducer,
    actions: sortFilterActions,
} = sortFilterSlice;
