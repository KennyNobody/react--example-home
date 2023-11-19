import classNames from 'classnames';
import { ReactNode } from 'react';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { HeaderMode } from '2_widgets/Header/ui/Header/Header';
import cls from './Head.module.scss';

interface HeadProps {
    mode: HeaderMode;
    className?: string;
    children: ReactNode;
}

export function Head(props: HeadProps) {
    const { className, children, mode } = props;
    const { theme } = useTheme();

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${theme}`],
                    cls[`block--${mode}`],
                    className,
                )
            }
        >
            { children }
        </div>
    );
}
