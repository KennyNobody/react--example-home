import { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Articles } from '5_shared/ui/Articles';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ListPosts.module.scss';
import {
    getListPost,
    listPostReducer,
} from '../../model/slices/listPostSlice';
import { GridPosts } from '../GridPosts/GridPosts';
import { ArticlePostType } from '../../model/types/ArticlePost';
import { getListPostIsLoading } from '../../model/selectors/listPost';
import { fetchListPost } from '../../model/services/fetchListPost/fetchListPost';

interface ListPostsProps {
    className?: string;
}

const reducers: ReducersList = {
    listPost: listPostReducer,
};

export const ListPosts = (props: ListPostsProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const data: ArticlePostType[] = useSelector(getListPost.selectAll);
    const isLoading: boolean | undefined = useSelector(getListPostIsLoading);

    useEffect(() => {
        dispatch(fetchListPost());
    }, []);

    const loadPosts = (): void => {
        alert('Подгружаем');
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.block, className)}>
                <Articles onClickEvent={loadPosts}>
                    <GridPosts
                        data={data}
                        showSkeleton={isLoading}
                    />
                </Articles>
            </div>
        </DynamicModuleLoader>
    );
};
