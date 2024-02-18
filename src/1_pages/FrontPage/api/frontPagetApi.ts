import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { PageIndexResponseType } from '5_shared/types/CommonTypes';

const pageFrontApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPageFront: build.query<PageIndexResponseType, null>({
            query: () => ({
                url: Routes.PAGE_FRONT,
                params: {
                    populate: '*',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

const useFetchPageFront = pageFrontApi.useFetchPageFrontQuery;

export {
    pageFrontApi,
    useFetchPageFront,
};
