import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPosts,
    postReducer,
    ArticlePostType,
    fetchListStaticPost, useFetchPostList,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './PostStaticList.module.scss';

interface ListPostsProps {
    className?: string;
}

const reducers: ReducersList = {
    post: postReducer,
};

export const PostStaticList = (props: ListPostsProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const {
        data,
        isLoading,
    } = useFetchPostList({});

    useEffect(() => {
        dispatch(fetchListStaticPost());
    }, []);

    return (
        <DynamicModuleLoader
            reducers={reducers}
        >
            <div
                className={
                    classNames(cls.block, className)
                }
            >
                {
                    data?.length
                    && (
                        <GridPosts
                            showSkeleton={isLoading}
                            data={data?.length > 8 ? data.splice(0, 8) : data}
                        />
                    )
                }
            </div>
        </DynamicModuleLoader>
    );
};
