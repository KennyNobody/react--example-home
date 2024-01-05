import { rtkApi } from '5_shared/api/rtkApi';

const categoryApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCategoryList: build.query({
            query: (limit) => ({
                url: '/categories/',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

const useGetCategoryList = categoryApi.useGetCategoryListQuery;

export {
    useGetCategoryList,
};
