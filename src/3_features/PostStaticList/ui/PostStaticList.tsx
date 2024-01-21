import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPosts,
    postReducer,
    getListPost,
    ArticlePostType,
    fetchListStaticPost,
    getListPostIsLoading,
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
    const isLoading: boolean = useSelector(getListPostIsLoading) || false;
    const data: ArticlePostType[] = useSelector(getListPost.selectAll);

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
                    data
                    && (
                        <GridPosts
                            data={data.splice(0, 8)}
                            showSkeleton={isLoading}
                        />
                    )
                }
            </div>
        </DynamicModuleLoader>
    );
};
