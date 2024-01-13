import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { RequestParams } from '5_shared/types/requestData';
import { setQueryParams } from '5_shared/libs/helpers/editQueryParams';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    getListPostPage,
    getListPostPerPage,
    getListSelectedCategories,
} from '../../selectors/listPost';
import { ArticlePostType } from '../../types/ArticlePost';
import { postApi } from '../../../api/postApi';

interface FetchListPostProps {
    replaceData?: boolean;
    setHasMore?: boolean;
}

export const fetchListPost = createAsyncThunk<string, FetchListPostProps, ThunkConfig<string>>(
    'post/fetchListPost',
    async (props, thunkApi) => {
        const {
            dispatch,
            getState,
        } = thunkApi;

        const page: number | undefined = getListPostPage(getState());
        const perPage: number | undefined = getListPostPerPage(getState());
        const activeCategories: number[] | undefined = getListSelectedCategories(getState());

        dispatch(postApi.endpoints.fetchPostList.initiate({
            page,
            perPage,
            categories: activeCategories,
            replaceData: props.replaceData || false,
        }));

        return '123';
    },
);
