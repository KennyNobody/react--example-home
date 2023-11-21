import classNames from 'classnames';
import cls from './Name.module.scss';

interface NameProps {
    isMain: boolean;
    className?: string;
}

export function Name(props: NameProps) {
    const { className, isMain } = props;

    const content: string = 'Егор Бадулин / @KennyNobody';
    const Tag: keyof JSX.IntrinsicElements = isMain ? 'h1' : 'p';

    return (
        <Tag
            className={
                classNames(
                    cls.name,
                    { [cls['name--main']]: isMain },
                    className,
                )
            }
        >
            { content }
        </Tag>
    );
}
