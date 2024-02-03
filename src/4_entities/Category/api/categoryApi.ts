import { rtkApi } from '5_shared/api/rtkApi';

const categoryApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCategoryList: build.query({
            query: (limit) => ({
                url: '/categories/',
                params: {
                    _limit: limit,
                },
            }),
            providesTags: ['category'],
        }),
    }),
    overrideExisting: false,
});

const useFetchCategoryList = categoryApi.useFetchCategoryListQuery;

export {
    categoryApi,
    useFetchCategoryList,
};
