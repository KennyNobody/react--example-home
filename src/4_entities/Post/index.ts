export {
    DetailPost,
} from './ui/DetailPost/DetailPost';

export type { DetailPostSchema } from './model/types/DetailPostSchema';

export {
    detailPostSlice,
    detailPostReducer,
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
    ArticlePostType,
} from './model/types/ArticlePost';

export {
    ListPostSchema,
} from './model/types/ListPostSchema';

export {
    ListPosts,
} from './ui/ListPosts/ListPosts';
