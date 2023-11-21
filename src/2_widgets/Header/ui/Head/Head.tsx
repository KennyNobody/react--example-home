import classNames from 'classnames';
import { ReactNode } from 'react';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './Head.module.scss';

interface HeadProps {
    isMain: boolean;
    className?: string;
    children: ReactNode;
}

export function Head(props: HeadProps) {
    const { className, children, isMain } = props;
    const { theme } = useTheme();

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${theme}`],
                    { [cls['block--regular']]: !isMain },
                    className,
                )
            }
        >
            { children }
        </div>
    );
}
