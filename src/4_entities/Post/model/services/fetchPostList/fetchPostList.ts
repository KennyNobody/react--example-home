import { createAsyncThunk } from '@reduxjs/toolkit';
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { ThunkConfig } from '0_app/prodivers/StoreProvider';
import { PaginationParams, RequestParams } from '5_shared/types/RequestData';
import { getSortFilterCategory } from '3_features/SortFilter/selectors/sortFilter';
import {
    getPostListPage,
    getPostListCount,
    getPostListPerPage,
} from '../../selectors/postList';
import { postListActions } from '../../slices/postListSlice';

export enum FetchingPostListDirection {
    PREV,
    NEXT,
}

interface FetchPostListPageProps {
    replace: boolean;
    getData: LazyQueryTrigger<any>,
    direction?: FetchingPostListDirection;
}

export const fetchPostList = createAsyncThunk<void, FetchPostListPageProps, ThunkConfig<string>>(
    'postList/initPostList',
    async (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const {
            replace,
            direction,
        } = props;

        const perPage = getPostListPerPage(getState()) || 1;
        const listIndex = getPostListPage(getState()) || 1;
        const category = getSortFilterCategory(getState());
        const listLength = getPostListCount(getState());
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
            [PaginationParams.PAGE]: replace ? 1 : pageNumber,
            sort: 'publishedAt:DESC',
            populate: '*',
            replace,
        };

        if (category) {
            params[PaginationParams.CAT] = category;
        }

        await props.getData(params, true).then((response) => {
            // @ts-ignore
            const { data, meta } = response.data;
            const dataMethod = replace
                ? postListActions.replaceData
                : postListActions.addData;
            // @ts-ignore
            dispatch(dataMethod(data));
            // @ts-ignore
            dispatch(postListActions.setPagination(meta.pagination));
        });
    },
);
