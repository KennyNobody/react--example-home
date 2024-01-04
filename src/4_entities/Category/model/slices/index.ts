import { combineReducers } from '@reduxjs/toolkit';
import { CategorySchema } from '../types';
import { listCategoryReducer } from './listCategorySlice';

export const categoryReducer = combineReducers<CategorySchema>({
    list: listCategoryReducer,
});
