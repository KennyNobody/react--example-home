import {
    useEffect,
    useCallback,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    ListCategory,
    getListCategory,
    initListCategory,
    listCategoryReducer,
    ArticleCategoryType,
    getListCategoryIsLoading,
} from '4_entities/Category';
import {
    fetchListPost,
    listPostActions,
    getListSelectedCategories,
} from '4_entities/Post';
import { useDebounce } from '5_shared/libs/hooks/useDebounce';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './SortToolbar.module.scss';

interface SortToolbarProps {
    className?: string
}

const reducers: ReducersList = {
    listCategory: listCategoryReducer,
};

export const SortToolbar = (props: SortToolbarProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const data: ArticleCategoryType[] = useSelector(getListCategory.selectAll);
    const activeCategories: number[] | undefined = useSelector(getListSelectedCategories);
    const isLoading: boolean | undefined = useSelector(getListCategoryIsLoading);

    useEffect(() => {
        dispatch(initListCategory());
    }, [dispatch]);

    const fetchData = useCallback(() => {
        dispatch(listPostActions.setPage(1));
        dispatch(fetchListPost({
            replaceData: true,
            setHasMore: true,
        }));
    }, []);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const changeCategory = useCallback((item: ArticleCategoryType) => {
        dispatch(listPostActions.toggleCategory(item.id));
        debouncedFetchData();
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <div className={classNames(cls.block, className)}>
                <ListCategory
                    data={data}
                    showSkeleton={isLoading}
                    selectEvent={changeCategory}
                    selectedItems={activeCategories}
                />
            </div>
        </DynamicModuleLoader>
    );
};
