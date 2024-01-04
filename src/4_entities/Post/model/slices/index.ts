import { combineReducers } from '@reduxjs/toolkit';
import { PostSchema } from '../types';
import { listPostReducer } from './listPostSlice';
import { detailPostReducer } from './detailPostSlice';

export const postReducer = combineReducers<PostSchema>({
    list: listPostReducer,
    detail: detailPostReducer,
});
