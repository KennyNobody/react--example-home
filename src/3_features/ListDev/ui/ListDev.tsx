import {
    useRef,
    useEffect,
    MutableRefObject,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInfiniteScroll } from '5_shared/libs/hooks/useInfiniteScroll';
import { GridDev } from '4_entities/Dev';
import { devListReducer, getDevList } from '4_entities/Dev/model/slices/devListSlice';
import { getDevListCount, getDevListLoading, getDevListPage } from '4_entities/Dev/model/selectors/devList';
import { ArticleDevType } from '4_entities/Dev/model/types/ArticleDev';
import { useLazyFetchDevList } from '4_entities/Dev/api/devApi';
import { fetchNextDevList } from '4_entities/Dev/model/services/fetchNextDevList/fetchNextDevList';
import { initDev } from '4_entities/Dev/model/services/initDevList/initDev';
import cls from './ListDev.module.scss';

interface ListDevProps {
    className?: string;
    isPreview?: boolean;
}

const reducers: ReducersList = {
    devList: devListReducer,
    // sortFilter: sortFilterReducer,
};

export const ListDev = (props: ListDevProps) => {
    const {
        isPreview,
        className,
    } = props;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const pageIndex: number = useSelector(getDevListPage) || 1;
    const pageTotal: number = useSelector(getDevListCount) || 0;
    const data: ArticleDevType[] = useSelector(getDevList.selectAll);
    const isLoading: boolean = useSelector(getDevListLoading) || false;

    const [getData] = useLazyFetchDevList({});

    const loadNextPage = () => {
        if (!isLoading && (pageTotal > pageIndex)) {
            dispatch(fetchNextDevList({
                getData,
                replace: false,
            }));
        }
    };

    useEffect(() => {
        dispatch(initDev(getData));
    }, []);

    useInfiniteScroll({
        triggerRef,
        callback: loadNextPage,
    });

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
                <GridDev
                    data={data}
                    showSkeleton={isLoading && !data?.length}
                    showEnd={!isLoading && !isPreview && pageIndex === pageTotal}
                />
                {!isPreview && <div ref={triggerRef} />}
            </div>
        </DynamicModuleLoader>
    );
};
