import {
    useRef,
    useEffect,
    MutableRefObject,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPosts,
    initPost,
    getPostListPage,
    getPostListCount,
    fetchNextPostList,
    getPostListLoading,
    PostArticleType,
    FetchingPostListDirection,
    getPostList,
    postListReducer,
    useLazyFetchPostList,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { sortFilterReducer } from '3_features/PostFilter/slices/sortFilterSlice';
import { useInfiniteScroll } from '5_shared/libs/hooks/useInfiniteScroll';
import cls from './ListPost.module.scss';
import { ListPostMode } from '../types/ListPost';

interface ListPostsProps {
    className?: string;
    isPreview?: boolean;
}

const reducers: ReducersList = {
    postList: postListReducer,
    sortFilter: sortFilterReducer,
};

export const ListPost = (props: ListPostsProps) => {
    const {
        isPreview,
        className,
    } = props;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const pageIndex: number = useSelector(getPostListPage) || 1;
    const pageTotal: number = useSelector(getPostListCount) || 0;
    const data: PostArticleType[] = useSelector(getPostList.selectAll);
    const isLoading: boolean = useSelector(getPostListLoading) || false;

    const [getData] = useLazyFetchPostList({});

    const loadNextPage = () => {
        if (!isLoading && (pageTotal > pageIndex)) {
            dispatch(fetchNextPostList({
                getData,
                replace: false,
                direction: FetchingPostListDirection.NEXT,
            }));
        }
    };

    useEffect(() => {
        dispatch(initPost(getData));
    }, []);

    useInfiniteScroll({
        triggerRef,
        callback: loadNextPage,
    });

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div
                className={
                    classNames(cls.block, className)
                }
            >
                <GridPosts
                    data={data}
                    showSkeleton={isLoading && !data?.length}
                    showEnd={!isLoading && pageIndex === pageTotal}
                />
                {!isPreview && <div ref={triggerRef} />}
            </div>
        </DynamicModuleLoader>
    );
};
