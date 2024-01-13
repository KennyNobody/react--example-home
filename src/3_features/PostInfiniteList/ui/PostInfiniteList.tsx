import {
    useRef,
    useEffect,
    useCallback,
    MutableRefObject,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
    postApi,
    GridPosts,
    getListPost,
    postReducer,
    getListPostPage,
    ArticlePostType,
    getListPostIsLoading,
    fetchNextListPostPage, listPostActions, fetchListPost,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInfiniteScroll } from '5_shared/libs/hooks/useInfiniteScroll';
import cls from './PostInfiniteList.module.scss';
import {getListPostHasMore, getListPostPerPage} from "4_entities/Post/model/selectors/listPost";
import {initListPostPage} from "4_entities/Post/model/services/initListPostPage/initListPostPage";

interface ListPostsProps {
    className?: string;
}

const reducers: ReducersList = {
    post: postReducer,
};

export const PostInfiniteList = (props: ListPostsProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const isLoading: boolean = useSelector(getListPostIsLoading) || false;
    const hasMore: boolean = useSelector(getListPostHasMore) || true;
    const page: number = useSelector(getListPostPage) || 1;
    const data: ArticlePostType[] = useSelector(getListPost.selectAll);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        // dispatch(postApi.endpoints.fetchPostList.initiate({
        //     page,
        //     perPage,
        //     replaceData: false,
        // }));
        dispatch(fetchListPost({}));
    }, []);

    const loadNextPage = useCallback(() => {
        // if (hasMore && !isLoading) {
        //     // dispatch(listPostActions.setPage(page + 1));
        // }
        dispatch(fetchNextListPostPage());
    }, [dispatch]);

    useInfiniteScroll({
        triggerRef,
        callback: loadNextPage,
    });

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <div
                className={
                    classNames(cls.block, className)
                }
            >
                <GridPosts
                    data={data}
                    showSkeleton={page === 1 && isLoading}
                />
            </div>
            <div ref={triggerRef} />
            <button onClick={loadNextPage}>
                123
            </button>
        </DynamicModuleLoader>
    );
};
