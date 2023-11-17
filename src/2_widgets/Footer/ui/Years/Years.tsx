import classNames from 'classnames';
import cls from './Years.module.scss';

interface YearsProps {
    className?: string
}

export function Years(props: YearsProps) {
    const { className } = props;

    return (
        <p className={classNames(cls.block, className)}>
            2019 — 2023
        </p>
    );
}
