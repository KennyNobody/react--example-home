import classNames from 'classnames';
import cls from './Author.module.scss';

interface AuthorProps {
    data: string | null;
    className?: string;
}

export function Author(props: AuthorProps) {
    const {
        data,
        className,
    } = props;

    if (!data) return null;

    return (
        <div className={classNames(cls.block, className)}>
            { data }
        </div>
    );
}
