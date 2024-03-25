import { memo } from 'react';
import classNames from 'classnames';
import { AppData } from '0_app/types/MainResponseType';
import { SkeletonLine } from '3_features/Skeleton';
import cls from './Description.module.scss';

interface DescriptionProps {
    data?: AppData;
    isLoading?: boolean;
    className?: string;
}

export const Description = memo((props: DescriptionProps) => {
    const {
        data,
        className,
        isLoading,
    } = props;

    const content = (
        <p>
            { data?.description }
        </p>
    );

    const skeleton = (
        <SkeletonLine />
    );

    return (
        <div className={classNames(cls.block, className)}>
            { isLoading ? skeleton : content }
        </div>
    );
});
