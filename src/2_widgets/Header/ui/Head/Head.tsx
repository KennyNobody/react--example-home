import classNames from 'classnames';
import cls from './Head.module.scss';
import {ReactNode} from "react";
import {useTheme} from "5_shared/libs/hooks/useTheme";

interface HeadProps {
    className?: string;
    children: ReactNode;
}

export const Head = (props: HeadProps) => {
    const { className, children } = props;
    const { theme } = useTheme();

    return (
        <div className={classNames(cls.block, cls[`block--${theme}`], className)}>
            { children }
        </div>
    );
};
