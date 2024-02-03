import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { ListPostSchema } from '../types/ListPostSchema';

const initialState: ListPostSchema = {
    page: 1,
    perPage: 8,
    hasMore: true,
    categories: [],
};

const listPostSlice = createSlice({
    name: 'listPostSlice',
    initialState,
    reducers: {
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
        resetState: (state) => {
            state.page = 1;
            state.hasMore = true;
        },
    },
});

export const {
    reducer: listPostReducer,
    actions: listPostActions,
} = listPostSlice;
