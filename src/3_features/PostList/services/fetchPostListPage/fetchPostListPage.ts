import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { PaginationParams, RequestParams } from '5_shared/types/requestData';
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
    getPostListPage,
    getPostListLength,
    getPostListPerPage,
} from '../../selectors/postList';
import { postListActions } from '../../slices/postListSlice';
import {getSortFilterCategory} from "3_features/SortFilter/selectors/sortFilter";

export enum FetchingPostListDirection {
    PREV,
    NEXT,
}

interface FetchPostListPageProps {
    getData: LazyQueryTrigger<any>,
    direction?: FetchingPostListDirection;
}

export const fetchPostListPage = createAsyncThunk<void, FetchPostListPageProps, ThunkConfig<string>>(
    'postList/initPostList',
    async (props, thunkAPI) => {
        const {
            dispatch,
            getState,
        } = thunkAPI;

        const {
            direction,
        } = props;

        const perPage = getPostListPerPage(getState()) || 1;
        const listIndex = getPostListPage(getState()) || 1;
        const category = getSortFilterCategory(getState());
        const listLength = getPostListLength(getState());
        let pageNumber = listIndex;

        if (direction === FetchingPostListDirection.NEXT) {
            pageNumber = listIndex === listLength ? pageNumber : pageNumber + 1;
        } else if (direction === FetchingPostListDirection.PREV) {
            pageNumber = listIndex === 1 ? pageNumber : pageNumber - 1;
        } else {
            pageNumber = 1;
        }

        const params: RequestParams = {
            [PaginationParams.SIZE]: perPage,
            [PaginationParams.PAGE]: pageNumber,
        };

        if (category) {
            params[PaginationParams.CAT] = category;
        }

        console.log('Параметры:');
        console.log(params);

        await props.getData(params, true).then((data: any) => {
            const page = data?.data?.meta?.pagination.page;
            const pageCount = data?.data?.meta?.pagination.pageCount;

            if (page) dispatch(postListActions.setPage(page));
            if (pageCount) dispatch(postListActions.setLength(pageCount));
        });
    },
);
