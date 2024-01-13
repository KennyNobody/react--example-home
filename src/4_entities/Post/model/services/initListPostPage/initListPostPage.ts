import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import {
    getListPostInited,
} from '../../selectors/listPost';
import { listPostActions } from '../../slices/listPostSlice';
import { fetchListPost } from '../fetchListPost/fetchListPost';

export const initListPostPage = createAsyncThunk<
void,
URLSearchParams,
ThunkConfig<string>
>(
    'post/initListPostPage',
    async (searchParams, thunkApi) => {
        const {
            dispatch,
            getState,
        } = thunkApi;

        const isInited: boolean | undefined = getListPostInited(getState());

        if (!isInited) {
            searchParams.forEach((value, key) => {

                if (key === 'perPage' && Number(value)) {
                    dispatch(listPostActions.setPerPage(Number(value)));
                } else if (key === 'page' && Number(value)) {
                    dispatch(listPostActions.setPage(Number(value)));
                } else if (key === 'categories') {
                    dispatch(listPostActions.setCategoriesByString(value));
                }
            });

            dispatch(listPostActions.initState());
            // dispatch(fetchListPost({}));
        }
    },
);
