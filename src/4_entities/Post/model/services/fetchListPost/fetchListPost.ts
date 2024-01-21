import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { RequestParams } from '5_shared/types/requestData';
import { setQueryParams } from '5_shared/libs/helpers/editQueryParams';
import {
    getListPostPage,
    getListPostPerPage,
    getListSelectedCategories,
} from '../../selectors/listPost';
import { postApi } from '../../../api/postApi';

interface FetchListPostProps {
    replaceData?: boolean;
    setHasMore?: boolean;
}

export const fetchListPost = createAsyncThunk<void, FetchListPostProps, ThunkConfig<string>>(
    'post/fetchListPost',
    async (props, thunkApi) => {
        const {
            dispatch,
            getState,
        } = thunkApi;

        const page: number | undefined = getListPostPage(getState());
        const perPage: number | undefined = getListPostPerPage(getState());
        const activeCategories: number[] | undefined = getListSelectedCategories(getState());

        const params: RequestParams = {};

        if (page) params.page = page;
        if (perPage) params.per_page = perPage;
        if (activeCategories?.length) params.categories = activeCategories.join(',');

        dispatch(postApi.endpoints.fetchPostList.initiate({
            queryParams: params,
            replaceData: props.replaceData || false,
        }));

        setQueryParams(params);
    },
);
