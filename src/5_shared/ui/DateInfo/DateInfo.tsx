import classNames from 'classnames';
import cls from './DateInfo.module.scss';

interface DateProps {
    date: string;
    className?: string
}

export const DateInfo = (props: DateProps) => {
    const {
        date,
        className,
    } = props;

    return (
        <time className={classNames(cls.block, className)}>
            { date }
        </time>
    );
};
