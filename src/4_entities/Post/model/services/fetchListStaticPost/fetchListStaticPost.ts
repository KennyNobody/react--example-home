import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { RequestParams } from '5_shared/types/requestData';
import { postApi } from '../../../api/postApi';

export const fetchListStaticPost = createAsyncThunk<void, void, ThunkConfig<string>>(
    'post/fetchListStaticPost',
    async (props, thunkApi) => {
        const { dispatch } = thunkApi;
        const params: RequestParams = {
            page: 1,
            per_page: 8,
        };

        dispatch(postApi.endpoints.fetchPostList.initiate({
            queryParams: params,
            replaceData: true,
        }));
    },
);
