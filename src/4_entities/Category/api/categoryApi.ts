import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';

const categoryApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCategoryList: build.query({
            query: (limit) => ({
                url: Routes.CATEGORIES_LIST,
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
