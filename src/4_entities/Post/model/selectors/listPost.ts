import { StateSchema } from '0_app/prodivers/StoreProvider';

export const getListPostPerPage = (state: StateSchema) => state?.post?.list?.perPage;
export const getListPostPage = (state: StateSchema) => state?.post?.list?.page;
export const getListPostHasMore = (state: StateSchema) => state?.post?.list?.hasMore;
export const getListSelectedCategories = (state: StateSchema) => state?.post?.list?.categories;
