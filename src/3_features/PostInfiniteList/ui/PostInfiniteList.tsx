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
    GridPosts,
    postReducer,
    initListPost,
    getListPostPage,
    ArticlePostType,
    fetchNextListPostPage, useFetchPostList,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInfiniteScroll } from '5_shared/libs/hooks/useInfiniteScroll';
import cls from './PostInfiniteList.module.scss';

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

    const [urlParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const {
        data,
        isLoading,
    } = useFetchPostList({});
    const page: number = useSelector(getListPostPage) || 1;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        dispatch(initListPost(urlParams));
    }, []);

    const loadNextPage = useCallback(() => {
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
        </DynamicModuleLoader>
    );
};
