import {
    useCallback,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    ListCategory,
    ArticleCategoryType,
    useFetchCategoryList,
} from '4_entities/Category';
import {
    fetchListPost,
    listPostActions,
    getListSelectedCategories, initListPost,
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

export const SortToolbar = (props: SortToolbarProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const activeCategories: number[] | undefined = useSelector(getListSelectedCategories);

    const {
        data,
        isLoading,
    } = useFetchCategoryList(10);

    const fetchData = () => {
        // dispatch(listPostActions.resetState());
        dispatch(fetchListPost({
            replaceData: true,
        }));
    };

    const debouncedFetchData = useDebounce(fetchData, 500);

    const changeCategory = useCallback((item: ArticleCategoryType) => {
        dispatch(listPostActions.toggleCategory(item.id));
        console.log('ОПОП');
        debouncedFetchData();
    }, [dispatch]);

    return (
        <div className={classNames(cls.block, className)}>
            <ListCategory
                data={data}
                selectEvent={changeCategory}
                selectedItems={activeCategories}
                showSkeleton={!data && isLoading}
            />
        </div>
    );
};
