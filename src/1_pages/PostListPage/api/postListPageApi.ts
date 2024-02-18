import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { PageIndexResponseType } from '5_shared/types/CommonTypes';

const pagePostApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPagePost: build.query<PageIndexResponseType, null>({
            query: () => ({
                url: Routes.PAGE_POST,
                params: {
                    populate: '*',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

const useFetchPagePost = pagePostApi.useFetchPagePostQuery;

export {
    pagePostApi,
    useFetchPagePost,
};
