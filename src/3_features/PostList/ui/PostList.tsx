import {useEffect} from 'react';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import {GridPosts, useLazyFetchPostList} from '4_entities/Post';
import {useAppDispatch} from '5_shared/libs/hooks/useAppDispatch';
import {DynamicModuleLoader, ReducersList,} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './PostList.module.scss';
import {PostListMode} from '../types/PostList';
import {FetchingPostListDirection, fetchPostListPage,} from '../services/fetchPostListPage/fetchPostListPage';
import {postListReducer} from '../slices/postListSlice';
import {getPostListLength, getPostListPage} from '../selectors/postList';
import {initPostList} from '../services/initPostList/initPostList';
import {sortFilterReducer} from "3_features/SortFilter/slices/sortFilterSlice";

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

    const dispatch = useAppDispatch();
    const listIndex = useSelector(getPostListPage);
    const listLength = useSelector(getPostListLength);

    const [
        getData,
        {
            data,
            isLoading,
        },
    ] = useLazyFetchPostList({});

    const switchPage = (direction: FetchingPostListDirection) => {
        dispatch(fetchPostListPage({
            getData,
            direction,
        }));
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        dispatch(initPostList(getData));
    }, []);

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
                    data?.data
                    && (
                        <GridPosts
                            data={data?.data}
                            showSkeleton={isLoading}
                        />
                    )
                }
                {
                    mode === PostListMode.DYNAMIC
                    && (
                        <>
                            <button
                                onClick={() => switchPage(FetchingPostListDirection.PREV)}
                            >
                                Назад
                            </button>
                            {
                                `${listIndex} / ${listLength}`
                            }
                            <button onClick={() => switchPage(FetchingPostListDirection.NEXT)}>
                                Вперед
                            </button>
                        </>
                    )
                }
            </div>
        </DynamicModuleLoader>
    );
};
