import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import {
    GridPosts,
    postReducer,
    useFetchPostList,
    fetchListStaticPost,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './PostListStatic.module.scss';

interface ListPostsProps {
    className?: string;
}

export const PostListStatic = (props: ListPostsProps) => {
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
        <div
            className={
                classNames(cls.block, className)
            }
        >
            POST LIST STATIC
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
    );
};
