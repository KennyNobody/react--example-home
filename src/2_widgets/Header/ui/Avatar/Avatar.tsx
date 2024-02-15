import { memo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './Avatar.module.scss';

interface AvatarProps {
    isMain: boolean;
    className?: string;
}

export const Avatar = memo(({ isMain, className }: AvatarProps) => (
    <Link
        to={RouterPath.main}
        className={
            classNames(
                cls.block,
                { [cls['block--main']]: isMain },
                className,
            )
        }
    />
));
