import { memo } from 'react';
import classNames from 'classnames';
import { AppData } from '0_app/types/MainResponseType';
import cls from './Description.module.scss';

interface DescriptionProps {
    data: AppData;
    className?: string;
}

export const Description = memo((props: DescriptionProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <p>
                { data?.description }
            </p>
        </div>
    );
});
