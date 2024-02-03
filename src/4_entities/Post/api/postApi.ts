import { rtkApi } from '5_shared/api/rtkApi';
import { RequestParams } from '5_shared/types/requestData';

const postApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPostList: build.query({
            query: (params: RequestParams) => {
                return {
                    url: '/posts/',
                    params,
                };
            },
            providesTags: ['post'],
        }),
    }),
    overrideExisting: false,
});

const useFetchPostList = postApi.useFetchPostListQuery;

export {
    postApi,
    useFetchPostList,
};
