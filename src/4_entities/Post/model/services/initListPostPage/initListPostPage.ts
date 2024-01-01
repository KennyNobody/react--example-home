import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import {
    getListPostInited,
} from '../../selectors/listPost';
import { listPostActions } from '../../slices/listPostSlice';
import { fetchListPost } from '../fetchListPost/fetchListPost';

export const initListPostPage = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
    'post/fetchNextListPostPage',
    async (props, thunkApi) => {
        const {
            dispatch,
            getState,
        } = thunkApi;

        const isInited: boolean | undefined = getListPostInited(getState());

        if (!isInited) {
            dispatch(listPostActions.initState());
            dispatch(fetchListPost({}));
        }
    },
);
