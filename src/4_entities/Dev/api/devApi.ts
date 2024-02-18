import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';

const devApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchDevList: build.query({
            query: (params) => ({
                url: Routes.DEVS_LIST,
                params,
            }),
            providesTags: ['dev'],
        }),
    }),
    overrideExisting: false,
});

const useFetchDevList = devApi.useFetchDevListQuery;
const useLazyFetchDevList = devApi.useLazyFetchDevListQuery;

export {
    devApi,
    useFetchDevList,
    useLazyFetchDevList,
};
