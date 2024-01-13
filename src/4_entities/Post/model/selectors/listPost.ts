import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getListPostIsLoading = (state: StateSchema) => state?.post?.list?.isLoading;
export const getListPostErrors = (state: StateSchema) => state?.post?.list?.errors;
export const getListPostPerPage = (state: StateSchema) => state?.post?.list?.perPage;
export const getListPostPage = (state: StateSchema) => state?.post?.list?.page;
export const getListPostHasMore = (state: StateSchema) => state?.post?.list?.hasMore;

export const getListSelectedCategories = (state: StateSchema) => state?.post?.list?.categories;
export const getListPostInited = (state: StateSchema) => state?.post?.list?._inited;
