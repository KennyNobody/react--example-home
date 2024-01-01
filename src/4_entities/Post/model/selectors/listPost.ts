import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getListPostIsLoading = (state: StateSchema) => state?.listPost?.isLoading;
export const getListPostErrors = (state: StateSchema) => state?.listPost?.errors;
export const getListPostPerPage = (state: StateSchema) => state?.listPost?.perPage;
export const getListPostPage = (state: StateSchema) => state?.listPost?.page;
export const getListPostHasMore = (state: StateSchema) => state?.listPost?.hasMore;
