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
    getListPostPage,
    getListPostIsLoading,
} from '../../model/selectors/listPost';
import {
    getListPost,
    listPostReducer,
} from '../../model/slices/listPostSlice';
import { GridPosts } from '../GridPosts/GridPosts';
import { ArticlePostType } from '../../model/types/ArticlePost';
import { fetchListPost } from '../../model/services/fetchListPost/fetchListPost';
import { fetchNextListPostPage } from '../../model/services/fetchNextListPostPage/fetchNextListPostPage';

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
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        dispatch(fetchListPost({}));
    }, []);

    const loadNextPage = useCallback(() => {
        dispatch(fetchNextListPostPage());
    }, [dispatch]);

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
