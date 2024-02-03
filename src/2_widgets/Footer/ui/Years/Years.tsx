import classNames from 'classnames';
import cls from './Years.module.scss';

interface YearsProps {
    data: string;
    className?: string;
}

export function Years(props: YearsProps) {
    const {
        data,
        className,
    } = props;

    if (!data) return null;

    return (
        <p className={classNames(cls.block, className)}>
            { data }
        </p>
    );
}
