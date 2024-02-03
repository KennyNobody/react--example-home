import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { listPostActions } from '../../slices/listPostSlice';
import { fetchListPost } from '../fetchListPost/fetchListPost';

export const initListPost = createAsyncThunk<
void,
URLSearchParams,
ThunkConfig<string>
>(
    'post/initListPost',
    async (searchParams, thunkApi) => {
        const { dispatch } = thunkApi;

        searchParams.forEach((value, key) => {
            if (key === 'perPage' && Number(value)) {
                dispatch(listPostActions.setPerPage(Number(value)));
            } else if (key === 'page' && Number(value)) {
                dispatch(listPostActions.setPage(Number(value)));
            } else if (key === 'categories') {
                dispatch(listPostActions.setCategoriesByString(value));
            }
        });

        dispatch(fetchListPost({}));
    },
);
