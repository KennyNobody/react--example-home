import classNames from 'classnames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    isMain: boolean;
    className?: string;
}

export function Avatar({ isMain, className }: AvatarProps) {
    return (
        <div
            className={
                classNames(
                    cls.block,
                    { [cls['block--main']]: isMain },
                    className,
                )
            }
        />
    );
}
