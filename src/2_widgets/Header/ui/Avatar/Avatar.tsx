import { memo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './Avatar.module.scss';
import {SkeletonBlock} from "3_features/Skeleton";

interface AvatarProps {
    url?: string;
    isMain: boolean;
    className?: string;
    isLoading?: boolean;
    themeProp?: AppTheme;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        url,
        isMain,
        className,
        isLoading,
        themeProp,
    } = props;

    const { theme } = useTheme();

    return (
        <Link
            to={RouterPath.main}
            className={
                classNames(
                    cls.block,
                    { [cls['block--main']]: isMain },
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        >
            {
                isLoading && <SkeletonBlock className={classNames(cls.skeleton)} />
            }
            {
                !isLoading && url && <img src={`${__BASE_URL__}${url}`} alt="" />
            }

        </Link>
    );
});
