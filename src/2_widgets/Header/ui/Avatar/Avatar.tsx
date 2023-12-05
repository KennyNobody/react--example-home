import classNames from 'classnames';
import cls from './Avatar.module.scss';
import {memo} from "react";

interface AvatarProps {
    isMain: boolean;
    className?: string;
}

export const Avatar = memo(({ isMain, className }: AvatarProps) => (
    <div
        className={
            classNames(
                cls.block,
                { [cls['block--main']]: isMain },
                className,
            )
        }
    />
));
