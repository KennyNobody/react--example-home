export {
    DetailPost,
} from './ui/DetailPost/DetailPost';

export {
    GridPosts,
} from './ui/GridPosts/GridPosts';

export type {
    PostArticleType,
} from './model/types/PostArticle';

export {
    postApi,
    useFetchPostList,
    useLazyFetchPostList,
} from './api/postApi';

export {
    getPostList,
    postListReducer,
    postListActions,
} from './model/slices/postListSlice';

export {
    fetchNextPostList,
    FetchingPostListDirection,
} from '4_entities/Post/model/services/fetchNextPostList/fetchNextPostList';

export {
    initPost,
} from './model/services/initPostList/initPost';

export {
    getPostListCount,
    getPostListLoading,
    getPostListPage,
} from './model/selectors/postList';

export type {
    PostListSchema,
} from './model/types/PostListSchema';
