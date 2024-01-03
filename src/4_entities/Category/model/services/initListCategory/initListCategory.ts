import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import {
    getListCategoryInited,
} from '../../selectors/listCategory';
import { listCategoryActions } from '../../slices/listCategorySlice';
import { fetchListCategory } from '../fetchListCategory/fetchListCategory';

export const initListCategory = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
    'category/initListCategory',
    async (_, thunkApi) => {
        const {
            dispatch,
            getState,
        } = thunkApi;

        const isInited: boolean | undefined = getListCategoryInited(getState());

        if (!isInited) {
            dispatch(listCategoryActions.initState());
            dispatch(fetchListCategory());
        }
    },
);
