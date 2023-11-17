import classNames from 'classnames';
import cls from './Name.module.scss';

interface NameProps {
    className?: string
}

export const Name = (props: NameProps) => {
    const { className } = props;

    return (
        <h1 className={classNames(cls.name, className)}>
            Егор Бадулин / @KennyNobody
        </h1>
    );
};
