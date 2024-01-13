import { rtkApi } from '5_shared/api/rtkApi';
import { RequestParams } from '5_shared/types/requestData';

interface FetchPostListParamsType {
    page?: number;
    perPage?: number;
    replaceData: boolean;
    categories?: number[];
}

const postApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPostList: build.query({
            query: (options: FetchPostListParamsType) => {
                const {
                    page,
                    perPage,
                    categories,
                } = options;

                const params: RequestParams = {};

                if (page) params.page = page;
                if (perPage) params.perPage = perPage;
                if (categories?.length) params.categories = categories?.join(',');

                return {
                    url: '/posts/',
                    params,
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
