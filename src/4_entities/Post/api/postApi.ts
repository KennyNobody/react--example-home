import { rtkApi } from '5_shared/api/rtkApi';
import { RequestParams } from '5_shared/types/requestData';
import {Routes} from "5_shared/api/endpoints";

const postApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPostList: build.query({
            query: (params: any) => ({
                url: Routes.POSTS_LIST,
                params,
            }),
            providesTags: ['post'],
        }),
    }),
    overrideExisting: false,
});

const useFetchPostList = postApi.useFetchPostListQuery;
const useLazyFetchPostList = postApi.useLazyFetchPostListQuery;

export {
    postApi,
    useFetchPostList,
    useLazyFetchPostList,
};
