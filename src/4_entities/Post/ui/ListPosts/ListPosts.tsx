import {
    useRef,
    useEffect,
    MutableRefObject, useCallback,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInfiniteScroll } from '5_shared/libs/hooks/useInfiniteScroll';
import cls from './ListPosts.module.scss';
import {
    getListPost, listPostActions,
    listPostReducer,
} from '../../model/slices/listPostSlice';
import { GridPosts } from '../GridPosts/GridPosts';
import { ArticlePostType } from '../../model/types/ArticlePost';
import { fetchListPost } from '../../model/services/fetchListPost/fetchListPost';
import { getListPostHasMore, getListPostIsLoading, getListPostPage } from '../../model/selectors/listPost';

interface ListPostsProps {
    isActive?: boolean;
    className?: string;
}

const reducers: ReducersList = {
    listPost: listPostReducer,
};

export const ListPosts = (props: ListPostsProps) => {
    const {
        isActive,
        className,
    } = props;
    const dispatch = useAppDispatch();
    const data: ArticlePostType[] = useSelector(getListPost.selectAll);
    const isLoading: boolean | undefined = useSelector(getListPostIsLoading);
    const page: number = useSelector(getListPostPage) || 1;
    const hasMore: boolean | undefined = useSelector(getListPostHasMore);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        dispatch(fetchListPost({}));
    }, []);

    const loadNextPage = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(listPostActions.setPage(page + 1));
            dispatch(fetchListPost({
                page: page + 1,
            }));
        }
    }, [dispatch, hasMore, isLoading, page]);

    if (isActive) {
        useInfiniteScroll({
            triggerRef,
            callback: loadNextPage,
        });
    }

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
                    showSkeleton={page === 1 && isLoading}
                />
            </div>
            {
                isActive && <div ref={triggerRef} />
            }
        </DynamicModuleLoader>
    );
};
