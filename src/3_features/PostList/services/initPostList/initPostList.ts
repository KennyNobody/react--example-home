import { createAsyncThunk } from '@reduxjs/toolkit';
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { PaginationParams, RequestParams } from '5_shared/types/requestData';
import { postListActions } from '../../slices/postListSlice';
import { getPostListPerPage } from '../../selectors/postList';

export const initPostList = createAsyncThunk<void, LazyQueryTrigger<any>, ThunkConfig<string>>(
    'postList/initPostList',
    async (getData, thunkAPI) => {
        const {
            dispatch,
            getState,
        } = thunkAPI;

        const perPage = getPostListPerPage(getState()) || 1;

        const params: RequestParams = {
            [PaginationParams.PAGE]: 1,
            [PaginationParams.SIZE]: perPage,
        };

        await getData(params, true).then((data: any) => {
            const page = data?.data?.meta?.pagination.page;
            const pageCount = data?.data?.meta?.pagination.pageCount;

            if (page) dispatch(postListActions.setPage(page));
            if (pageCount) dispatch(postListActions.setLength(pageCount));
        });
    },
);
