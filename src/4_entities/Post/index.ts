export {
    DetailPost,
} from './ui/DetailPost/DetailPost';

export type { DetailPostSchema } from './model/types/DetailPostSchema';

export {
    detailPostSlice,
    detailPostActions,
} from './model/slices/detailPostSlice';

export {
    getDetailPostData,
    getDetailPostErrors,
    getDetailPostIsLoading,
} from './model/selectors/detailPost';

export {
    GridPosts,
} from './ui/GridPosts/GridPosts';

export {
    type ArticlePostType,
} from './model/types/ArticlePost';

export {
    type ListPostSchema,
} from './model/types/ListPostSchema';

export { listPostActions } from './model/slices/listPostSlice';

export {
    getListPostPage,
    getListSelectedCategories,
} from './model/selectors/listPost';

export {
    fetchListPost,
} from './model/services/fetchListPost/fetchListPost';

export {
    type PostSchema,
} from './model/types';

export {
    fetchNextListPostPage,
} from './model/services/fetchNextListPostPage/fetchNextListPostPage';

export {
    fetchListStaticPost,
} from './model/services/fetchListStaticPost/fetchListStaticPost';

export {
    postReducer,
} from './model/slices';

export {
    postApi,
    useFetchPostList,
} from './api/postApi';

export {
    initListPost,
} from './model/services/initListPost/initListPost';
