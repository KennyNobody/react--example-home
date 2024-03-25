import classNames from 'classnames';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './SkeletonBlock.module.scss';

interface SkeletonLineProps {
    className?: string;
    themeProp?: AppTheme;
}

export const SkeletonBlock = (props: SkeletonLineProps) => {
    const {
        themeProp,
        className,
    } = props;

    const { theme } = useTheme();

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        />
    );
};
