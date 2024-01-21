import { rtkApi } from '5_shared/api/rtkApi';
import { RtkQueryParams } from '5_shared/types/baseTypes';

const postApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPostList: build.query({
            query: (options: RtkQueryParams) => {
                return {
                    url: '/posts/',
                    params: options.queryParams,
                };
            },
        }),
    }),
    overrideExisting: false,
});

const useFetchPostList = postApi.useFetchPostListQuery;

export {
    postApi,
    useFetchPostList,
};
