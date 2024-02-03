import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { FrontPageType } from '../model/types/FrontPage';

const pageFrontApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPageFront: build.query<FrontPageType, null>({
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
