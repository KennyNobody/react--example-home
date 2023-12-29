import classNames from 'classnames';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './DetailPost.module.scss';
import { detailPostReducer } from '../../model/slices/detailPostSlice';

interface DetailPostProps {
    className?: string
}

const reducers: ReducersList = {
    detailPost: detailPostReducer,
};

export const DetailPost = (props: DetailPostProps) => {
    const { className } = props;

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.block, className)}>
                Full post content
            </div>
        </DynamicModuleLoader>
    );
};
