import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import {
    getListPostPage,
    getListPostHasMore,
} from '../../selectors/listPost';
import { listPostActions } from '../../slices/listPostSlice';
import { fetchListPost } from '../fetchListPost/fetchListPost';

export const fetchNextListPostPage = createAsyncThunk<
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

        const page: number | undefined = getListPostPage(getState());
        const hasMore: boolean | undefined = getListPostHasMore(getState());

        if (hasMore && page) {
            dispatch(listPostActions.setPage(page + 1));
            dispatch(fetchListPost({}));
        }
    },
);
