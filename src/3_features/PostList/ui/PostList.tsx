import {
    MutableRefObject, useCallback, useEffect, useRef,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { ArticlePostType, GridPosts, useLazyFetchPostList } from '4_entities/Post';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { sortFilterReducer } from '3_features/SortFilter/slices/sortFilterSlice';
import { useInfiniteScroll } from '5_shared/libs/hooks/useInfiniteScroll';
import cls from './PostList.module.scss';
import { PostListMode } from '../types/PostList';
import { FetchingPostListDirection, fetchPostListPage } from '../services/fetchPostListPage/fetchPostListPage';
import { getPostList, postListReducer } from '../slices/postListSlice';
import { initPostList } from '../services/initPostList/initPostList';
import {getPostListCount, getPostListLoading, getPostListPage} from "3_features/PostList/selectors/postList";

interface ListPostsProps {
    className?: string;
    mode: PostListMode;
}

const reducers: ReducersList = {
    postList: postListReducer,
    sortFilter: sortFilterReducer,
};

export const PostList = (props: ListPostsProps) => {
    const {
        mode,
        className,
    } = props;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const data: ArticlePostType[] = useSelector(getPostList.selectAll);
    const isLoading: boolean | undefined = useSelector(getPostListLoading);
    const pageIndex: number | undefined = useSelector(getPostListPage);
    const pageTotal: number | undefined = useSelector(getPostListCount);

    const [getData] = useLazyFetchPostList({});

    const loadNextPage = useCallback(() => {
        if (pageIndex && pageTotal && pageTotal < pageIndex && !isLoading) {
            dispatch(fetchPostListPage({
                getData,
                replace: false,
                direction: FetchingPostListDirection.NEXT,
            }));
        }

    }, [dispatch]);

    useEffect(() => {
        dispatch(initPostList(getData));
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
                {
                    <GridPosts
                        data={data}
                        showSkeleton={isLoading}
                    />
                }
                {mode === PostListMode.DYNAMIC && <div ref={triggerRef} />}
            </div>
        </DynamicModuleLoader>
    );
};
