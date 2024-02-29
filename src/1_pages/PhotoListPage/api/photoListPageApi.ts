import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { PageIndexResponseType } from '5_shared/types/CommonTypes';

const pagePhotoApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPagePhoto: build.query<PageIndexResponseType, null>({
            query: () => ({
                url: Routes.PAGE_PHOTO,
                params: {
                    populate: '*',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

const useFetchPagePhoto = pagePhotoApi.useFetchPagePhotoQuery;

export {
    pagePhotoApi,
    useFetchPagePhoto,
};
