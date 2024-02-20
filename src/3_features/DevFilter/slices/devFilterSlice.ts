import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { DevFilterSchema } from '../types/DevFilterSchema';

const initialState: DevFilterSchema = {
    category: undefined,
};

const devFilterSlice = createSlice({
    name: 'devFilterSlice',
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
    reducer: devFilterReducer,
    actions: devFilterActions,
} = devFilterSlice;
