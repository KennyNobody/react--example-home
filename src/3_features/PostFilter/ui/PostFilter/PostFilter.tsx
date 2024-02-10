import { useCallback } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    postListReducer,
    fetchPostList,
    useLazyFetchPostList,
} from '4_entities/Post';
import {
    ListCategory,
    ArticleCategoryType,
    useFetchCategoryList,
} from '4_entities/Category';
import { useDebounce } from '5_shared/libs/hooks/useDebounce';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import { sortFilterActions, sortFilterReducer } from '3_features/PostFilter/slices/sortFilterSlice';
import { DynamicModuleLoader, ReducersList } from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { getSortFilterCategory } from '3_features/PostFilter/selectors/sortFilter';
import cls from './PostFilter.module.scss';

interface SortToolbarProps {
    className?: string
}

const reducers: ReducersList = {
    sortFilter: sortFilterReducer,
    postList: postListReducer,
};

export const SortToolbar = (props: SortToolbarProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const activeCategory: number | undefined = useSelector(getSortFilterCategory);

    const {
        data,
        isLoading,
    } = useFetchCategoryList(10);

    const [getData] = useLazyFetchPostList({});

    const fetchData = () => {
        dispatch(fetchPostList({
            getData,
            replace: true,
        }));
    };

    const debouncedFetchData = useDebounce(fetchData, 500);

    const changeCategory = useCallback((item: ArticleCategoryType | undefined): void => {
        dispatch(sortFilterActions.toggleCategory(item?.id || undefined));
        debouncedFetchData();
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
        >
            <div className={classNames(cls.block, className)}>
                <ListCategory
                    data={data?.data}
                    selectEvent={changeCategory}
                    selectedItem={activeCategory}
                    showSkeleton={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};
