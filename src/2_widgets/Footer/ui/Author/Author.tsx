import classNames from 'classnames';
import cls from './Author.module.scss';

interface AuthorProps {
    className?: string
}

export const Author = (props: AuthorProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Разработано: Егор Бадулин
        </div>
    );
};
