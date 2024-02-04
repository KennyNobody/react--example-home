import { StateSchema } from '0_app/prodivers/StoreProvider';
import { postApi } from '4_entities/Post';

export const getPostListPerPage = (state: StateSchema) => state?.postList?.perPage;
export const getPostListPage = (state: StateSchema) => state?.postList?.page;
export const getPostListLength = (state: StateSchema) => state?.postList?.length;

export const selectPostsResult = postApi.endpoints.fetchPostList.select({});
